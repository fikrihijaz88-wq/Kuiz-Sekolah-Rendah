// Suara Sintesis Bacaan (Audio Read Aloud) Murid Sekolah Rendah
// Menggunakan Audio Bahasa Melayu Asli Tulen (Native Malaysian Malay) melalui /api/tts
// Disokong sandaran (fallback) Web Speech API sekiranya luar talian (offline)

let cachedVoices: SpeechSynthesisVoice[] = [];
let currentAudio: HTMLAudioElement | null = null;
let currentPlayId = 0;

type AudioStateListener = (isPlaying: boolean) => void;
const stateListeners = new Set<AudioStateListener>();

export function subscribeAudioState(listener: AudioStateListener): () => void {
  stateListeners.add(listener);
  return () => stateListeners.delete(listener);
}

function notifyAudioState(isPlaying: boolean) {
  stateListeners.forEach((fn) => {
    try {
      fn(isPlaying);
    } catch {
      // Ignore listener errors
    }
  });
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const refreshVoices = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
  refreshVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
}

/**
 * Normalizes Malaysian school mathematical text so TTS reads symbols accurately in standard BM
 */
export function prepareMalaySpokenText(raw: string): string {
  return raw
    // Currency - e.g. RM 50 -> 50 ringgit, RM2.50 -> 2 ringgit 50 sen
    .replace(/\bRM\s*(\d+)\.(\d{2})\b/gi, '$1 ringgit $2 sen')
    .replace(/\bRM\s*(\d+)\b/gi, '$1 ringgit')
    // Common fractions in KSSR Primary Math
    .replace(/\b1\/2\b/g, 'satu perdua')
    .replace(/\b1\/4\b/g, 'satu perempat')
    .replace(/\b2\/4\b/g, 'dua perempat')
    .replace(/\b3\/4\b/g, 'tiga perempat')
    .replace(/\b1\/3\b/g, 'satu pertiga')
    .replace(/\b2\/3\b/g, 'dua pertiga')
    .replace(/\b(\d+)\/(\d+)\b/g, '$1 per $2')
    // Units of measurement
    .replace(/(\d+)\s*km\b/gi, '$1 kilometer')
    .replace(/(\d+)\s*cm\b/gi, '$1 sentimeter')
    .replace(/(\d+)\s*m\b/gi, '$1 meter')
    .replace(/(\d+)\s*kg\b/gi, '$1 kilogram')
    .replace(/(\d+)\s*g\b/gi, '$1 gram')
    .replace(/(\d+)\s*ml\b/gi, '$1 mililiter')
    .replace(/(\d+)\s*l\b/gi, '$1 liter')
    // Math operation symbols
    .replace(/\s*÷\s*/g, ' bahagi ')
    .replace(/\s*×\s*/g, ' darab ')
    .replace(/\s*=\s*/g, ' sama dengan ')
    .replace(/(\d+)\s*\+\s*(\d+)/g, '$1 tambah $2')
    .replace(/(\d+)\s*-\s*(\d+)/g, '$1 tolak $2')
    // Option labels formatting for clean pauses
    .replace(/Pilihan ([ABCD]):/g, 'Pilihan $1. ')
    .replace(/\bKBAT\b/g, 'K-BAT');
}

/**
 * Returns a Malaysian Malay voice if available in offline browser list.
 * STRICTLY EXCLUDES all Indonesian voices (id-ID, id, 'Bahasa Indonesia').
 */
export function getMalaysianVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();

  // Helper to detect Indonesian voice
  const isIndonesian = (v: SpeechSynthesisVoice): boolean => {
    const lang = (v.lang || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    return (
      lang.startsWith('id') ||
      lang.includes('id-') ||
      lang.includes('id_') ||
      name.includes('indonesia') ||
      name.includes('indonesian') ||
      name.includes('gadis') ||
      name.includes('andika')
    );
  };

  // 1. Exact Malaysian Malay match (ms-MY or ms_MY)
  const exactMalaysian = voices.find(
    (v) =>
      !isIndonesian(v) &&
      (v.lang.toLowerCase() === 'ms-my' ||
        v.lang.toLowerCase() === 'ms_my' ||
        (v.lang.toLowerCase().startsWith('ms') &&
          (v.name.toLowerCase().includes('malaysia') ||
            v.name.toLowerCase().includes('melayu') ||
            v.name.toLowerCase().includes('yasmin') ||
            v.name.toLowerCase().includes('osman'))))
  );
  if (exactMalaysian) return exactMalaysian;

  // 2. Generic Malay language code without Indonesian pollution
  const generalMalay = voices.find(
    (v) => !isIndonesian(v) && v.lang.toLowerCase().startsWith('ms')
  );
  if (generalMalay) return generalMalay;

  return null;
}

/**
 * Fallback browser SpeechSynthesis in case audio stream is unavailable
 * STRICT CONDITION: If language is 'ms', it will ONLY speak if an authentic Malaysian
 * Malay voice is detected in the browser. It will NEVER fall back to English or Indonesian.
 */
function speakViaWebSpeech(processedText: string, language: 'ms' | 'en' | 'ar' | 'zh') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();

    if (language === 'ms') {
      const malaysianVoice = getMalaysianVoice();
      if (!malaysianVoice) {
        console.warn('[Audio] Tiada suara Bahasa Melayu Malaysia (ms-MY) dalam pelayar. Menyekat suara Inggeris/Indonesia.');
        return;
      }
      utterance.voice = malaysianVoice;
      utterance.lang = malaysianVoice.lang || 'ms-MY';
    } else if (language === 'ar') {
      const arabicVoice = voices.find((v) => v.lang.startsWith('ar'));
      if (arabicVoice) utterance.voice = arabicVoice;
      utterance.lang = 'ar-SA';
    } else if (language === 'zh') {
      const chineseVoice = voices.find((v) => v.lang.startsWith('zh'));
      if (chineseVoice) utterance.voice = chineseVoice;
      utterance.lang = 'zh-CN';
    } else {
      const englishVoice = voices.find(
        (v) =>
          v.lang.startsWith('en-GB') ||
          v.lang.startsWith('en-MY') ||
          v.lang.startsWith('en-US') ||
          v.lang.startsWith('en')
      );
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      utterance.lang = 'en-GB';
    }

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.warn('Web Speech API fallback error:', err);
  }
}

/**
 * Plays genuine, high-quality native audio.
 * For Bahasa Melayu (ms), it uses the 100% authentic native Malaysian Malay audio stream from /api/tts.
 * For Bahasa Arab and Bahasa Cina, it seamlessly uses authentic pronunciation streams.
 */
export async function speakText(text: string, language: 'ms' | 'en' | 'ar' | 'zh' = 'ms') {
  if (typeof window === 'undefined') return;

  // Stop any ongoing playback first
  stopSpeech();

  const playId = ++currentPlayId;
  const processedText = language === 'ms' ? prepareMalaySpokenText(text) : text;

  try {
    const url = `/api/tts?text=${encodeURIComponent(processedText)}&lang=${language}`;
    const audio = new Audio(url);
    currentAudio = audio;

    audio.onplay = () => {
      if (currentPlayId === playId) {
        notifyAudioState(true);
      }
    };

    audio.onended = () => {
      if (currentPlayId === playId) {
        currentAudio = null;
        notifyAudioState(false);
      }
    };

    audio.onerror = (e) => {
      console.warn('[Audio] Server audio error:', e);
      if (currentPlayId === playId) {
        currentAudio = null;
        notifyAudioState(false);
        // Only fallback to browser speech if English or if an authentic Malaysian voice actually exists
        if (language === 'en' || getMalaysianVoice()) {
          speakViaWebSpeech(processedText, language);
        }
      }
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Autoplay policy or fetch error
        console.warn('[Audio] Audio play interrupted or blocked by autoplay policy:', err);
        if (currentPlayId === playId) {
          notifyAudioState(false);
          // Only fallback if not 'ms' without voice
          if (language === 'en' || getMalaysianVoice()) {
            speakViaWebSpeech(processedText, language);
          }
        }
      });
    }
  } catch (err) {
    console.error('[Audio] TTS execution error:', err);
    notifyAudioState(false);
    if (language === 'en' || getMalaysianVoice()) {
      speakViaWebSpeech(processedText, language);
    }
  }
}

/**
 * Immediately stops any active audio playback (both HTML5 audio and browser speech synthesis)
 */
export function stopSpeech() {
  currentPlayId++;
  notifyAudioState(false);

  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch {
      // Ignore pause errors
    }
    currentAudio = null;
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore cancel errors
    }
  }
}
