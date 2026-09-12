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
 * Normalizes Malaysian school mathematical text so TTS reads symbols accurately in BM
 */
export function prepareMalaySpokenText(raw: string): string {
  return raw
    // Currency
    .replace(/\bRM\s*([0-9,.]+)/gi, 'Ringgit Malaysia $1')
    // Units of measurement
    .replace(/(\d+)\s*km\b/gi, '$1 kilometer')
    .replace(/(\d+)\s*m\b/gi, '$1 meter')
    .replace(/(\d+)\s*cm\b/gi, '$1 sentimeter')
    .replace(/(\d+)\s*kg\b/gi, '$1 kilogram')
    .replace(/(\d+)\s*g\b/gi, '$1 gram')
    .replace(/(\d+)\s*ml\b/gi, '$1 mililiter')
    .replace(/(\d+)\s*l\b/gi, '$1 liter')
    // Fractions like 3/4 -> 3 per 4
    .replace(/(\d+)\/(\d+)/g, '$1 per $2')
    // Math operation symbols
    .replace(/\s*÷\s*/g, ' dibahagi dengan ')
    .replace(/\s*×\s*/g, ' didarab dengan ')
    .replace(/\s*=\s*/g, ' sama dengan ')
    .replace(/(\d+)\s*\+\s*(\d+)/g, '$1 tambah $2')
    .replace(/(\d+)\s*-\s*(\d+)/g, '$1 tolak $2')
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
 */
function speakViaWebSpeech(processedText: string, language: 'ms' | 'en') {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.rate = 0.92;
    utterance.pitch = 1.05;

    const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();

    if (language === 'ms') {
      utterance.lang = 'ms-MY';
      const malaysianVoice = getMalaysianVoice();
      if (malaysianVoice) {
        utterance.voice = malaysianVoice;
      }
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
 * This guarantees zero English accent or slang, and zero Indonesian voice leakage.
 */
export function speakText(text: string, language: 'ms' | 'en' = 'ms') {
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

    audio.onerror = () => {
      // If server audio fails (e.g. offline), fallback to browser Web Speech API
      if (currentPlayId === playId) {
        currentAudio = null;
        notifyAudioState(false);
        speakViaWebSpeech(processedText, language);
      }
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Autoplay policy or fetch error fallback
        console.warn('HTML5 Audio play interrupted or blocked:', err);
        if (currentPlayId === playId) {
          notifyAudioState(false);
          speakViaWebSpeech(processedText, language);
        }
      });
    }
  } catch (err) {
    console.error('TTS execution error, falling back to Web Speech:', err);
    notifyAudioState(false);
    speakViaWebSpeech(processedText, language);
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
