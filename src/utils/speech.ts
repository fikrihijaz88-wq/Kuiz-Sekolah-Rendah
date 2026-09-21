// Suara Sintesis Bacaan (Audio Read Aloud) Murid Sekolah Rendah
// Menggunakan Audio Bahasa Melayu Asli Tulen (Native Malaysian Malay) melalui /api/tts
// Disokong sandaran pintar (smart fallback) Web Speech API sekiranya luar talian (offline)

let cachedVoices: SpeechSynthesisVoice[] = [];
let currentAudio: HTMLAudioElement | null = null;
let currentPlayId = 0;
let speechHeartbeatInterval: any = null;

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

// Ensure voices are loaded and kept fresh
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const refreshVoices = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices();
    } catch {
      // Ignore
    }
  };
  refreshVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
}

// User interaction audio unlocker
if (typeof window !== 'undefined') {
  const unlockAudioOnUserGesture = () => {
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.resume();
      }
    } catch {
      // Ignore
    }
    window.removeEventListener('pointerdown', unlockAudioOnUserGesture);
    window.removeEventListener('touchstart', unlockAudioOnUserGesture);
    window.removeEventListener('click', unlockAudioOnUserGesture);
    window.removeEventListener('keydown', unlockAudioOnUserGesture);
  };
  window.addEventListener('pointerdown', unlockAudioOnUserGesture, { once: true, passive: true });
  window.addEventListener('touchstart', unlockAudioOnUserGesture, { once: true, passive: true });
  window.addEventListener('click', unlockAudioOnUserGesture, { once: true, passive: true });
  window.addEventListener('keydown', unlockAudioOnUserGesture, { once: true, passive: true });
}

/**
 * Normalizes Malaysian school texts (Math, Science, Islamic Studies, Language)
 * so TTS reads symbols and honorifics accurately in standard BM
 */
export function prepareMalaySpokenText(raw: string): string {
  if (!raw) return '';
  return raw
    // Islamic Honorifics - e.g. Nabi Muhammad SAW -> Nabi Muhammad Sallallahu 'Alaihi Wassallam
    .replace(/\uFDFA/g, " Sallallahu 'Alaihi Wassallam ")
    .replace(/\((?:SAW|S\.A\.W\.|saw|s\.a\.w\.)\)/gi, " Sallallahu 'Alaihi Wassallam ")
    .replace(/\bS\.A\.W\.?\b/gi, "Sallallahu 'Alaihi Wassallam")
    .replace(/\bSAW\b/g, "Sallallahu 'Alaihi Wassallam")
    .replace(/\b(?:Nabi|Rasulullah|Muhammad|Baginda)\s+saw\b/gi, (match) => {
      return match.replace(/\bsaw\b/i, "Sallallahu 'Alaihi Wassallam");
    })
    .replace(/\((?:SWT|S\.W\.T\.|swt|s\.w\.t\.)\)/gi, ' Subhanahu Wa Ta\'ala ')
    .replace(/\bS\.W\.T\.?\b/gi, 'Subhanahu Wa Ta\'ala')
    .replace(/\bSWT\b/g, 'Subhanahu Wa Ta\'ala')
    .replace(/\((?:A\.S\.|a\.s\.)\)/gi, ' Alaihis Salam ')
    .replace(/\bA\.S\.\b/gi, 'Alaihis Salam')
    .replace(/\((?:R\.A\.|r\.a\.)\)/gi, ' Radiallahu Anhu ')
    .replace(/\bR\.A\.\b/gi, 'Radiallahu Anhu')
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
    .replace(/(\d+)\s*mm\b/gi, '$1 milimeter')
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
 * Returns the best available Malaysian Malay voice if present in the browser
 * Strictly filters out Indonesian voices to preserve authentic Malaysian Malay pronunciation
 */
export function getBestMalayVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  // Filter out any Indonesian voices to avoid Indonesian accent
  const nonIndonesianVoices = voices.filter(
    (v) =>
      !v.lang.toLowerCase().startsWith('id') &&
      !v.name.toLowerCase().includes('indonesia') &&
      !v.name.toLowerCase().includes('indonesian') &&
      !v.name.toLowerCase().includes('bahasa indonesia')
  );

  // 1. Exact Malaysian Malay match (ms-MY or ms_MY, or name containing malaysia/melayu/yasmin/osman)
  const exactMalaysian = nonIndonesianVoices.find(
    (v) =>
      v.lang.toLowerCase() === 'ms-my' ||
      v.lang.toLowerCase() === 'ms_my' ||
      (v.lang.toLowerCase().startsWith('ms') &&
        (v.name.toLowerCase().includes('malaysia') ||
          v.name.toLowerCase().includes('melayu') ||
          v.name.toLowerCase().includes('yasmin') ||
          v.name.toLowerCase().includes('osman')))
  );
  if (exactMalaysian) return exactMalaysian;

  // 2. Generic Malay language code (ms, strictly non-indonesian)
  const generalMalay = nonIndonesianVoices.find((v) => v.lang.toLowerCase().startsWith('ms'));
  if (generalMalay) return generalMalay;

  // 3. Fallback to default voice (strictly avoiding Indonesian)
  const defaultVoice = nonIndonesianVoices.find((v) => v.default) || nonIndonesianVoices[0];
  return defaultVoice || null;
}

interface ClientSpeechSegment {
  text: string;
  lang: 'ms' | 'ar' | 'zh' | 'en';
}

function segmentTextForWebSpeech(rawText: string, contextLang: 'ms' | 'en' | 'ar' | 'zh'): ClientSpeechSegment[] {
  const text = rawText.trim();
  if (!text) return [];

  if (contextLang === 'en') {
    return [{ text, lang: 'en' }];
  }

  const hasArabicChar = (str: string) => /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(str);
  const hasChineseChar = (str: string) => /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/.test(str);

  if (contextLang === 'ar' || hasArabicChar(text)) {
    const segments: ClientSpeechSegment[] = [];
    const arabicRegex = /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:[\s،؟؛\-]+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = arabicRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        const nonArabic = text.slice(lastIdx, match.index).trim();
        if (nonArabic) segments.push({ text: prepareMalaySpokenText(nonArabic), lang: 'ms' });
      }
      const arabic = match[0].trim();
      if (arabic) segments.push({ text: arabic, lang: 'ar' });
      lastIdx = arabicRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      const rem = text.slice(lastIdx).trim();
      if (rem) segments.push({ text: prepareMalaySpokenText(rem), lang: 'ms' });
    }
    return segments.length > 0 ? segments : [{ text, lang: 'ar' }];
  }

  if (contextLang === 'zh' || hasChineseChar(text)) {
    const segments: ClientSpeechSegment[] = [];
    const chineseRegex = /([\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]+(?:[\s，。！？、\-]+[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]+)*)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = chineseRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        const nonChinese = text.slice(lastIdx, match.index).trim();
        if (nonChinese) segments.push({ text: prepareMalaySpokenText(nonChinese), lang: 'ms' });
      }
      const chinese = match[0].trim();
      if (chinese) segments.push({ text: chinese, lang: 'zh' });
      lastIdx = chineseRegex.lastIndex;
    }
    if (lastIdx < text.length) {
      const rem = text.slice(lastIdx).trim();
      if (rem) segments.push({ text: prepareMalaySpokenText(rem), lang: 'ms' });
    }
    return segments.length > 0 ? segments : [{ text, lang: 'zh' }];
  }

  return [{ text: prepareMalaySpokenText(text), lang: 'ms' }];
}

/**
 * Fallback browser SpeechSynthesis in case audio stream is unavailable.
 * Ensures speech never silently fails and works across all devices.
 */
function speakViaWebSpeech(processedText: string, language: 'ms' | 'en' | 'ar' | 'zh', playId: number) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    notifyAudioState(false);
    return;
  }

  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    const segments = segmentTextForWebSpeech(processedText, language);
    const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();

    if (segments.length === 0) {
      notifyAudioState(false);
      return;
    }

    notifyAudioState(true);

    // Keep Chrome SpeechSynthesis active
    if (speechHeartbeatInterval) clearInterval(speechHeartbeatInterval);
    speechHeartbeatInterval = setInterval(() => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearInterval(speechHeartbeatInterval);
      }
    }, 5000);

    let completedCount = 0;
    const totalSegments = segments.length;

    segments.forEach((seg, index) => {
      if (!seg.text.trim()) {
        completedCount++;
        if (completedCount >= totalSegments && currentPlayId === playId) {
          notifyAudioState(false);
          if (speechHeartbeatInterval) clearInterval(speechHeartbeatInterval);
        }
        return;
      }

      const utterance = new SpeechSynthesisUtterance(seg.text);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      if (seg.lang === 'ms') {
        const bestVoice = getBestMalayVoice();
        if (bestVoice) {
          utterance.voice = bestVoice;
        }
        utterance.lang = 'ms-MY';
      } else if (seg.lang === 'ar') {
        const arabicVoice = voices.find((v) => v.lang.startsWith('ar'));
        if (arabicVoice) utterance.voice = arabicVoice;
        utterance.lang = 'ar-SA';
      } else if (seg.lang === 'zh') {
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
        if (englishVoice) utterance.voice = englishVoice;
        utterance.lang = 'en-GB';
      }

      utterance.onend = () => {
        completedCount++;
        if (completedCount >= totalSegments && currentPlayId === playId) {
          notifyAudioState(false);
          if (speechHeartbeatInterval) clearInterval(speechHeartbeatInterval);
        }
      };

      utterance.onerror = () => {
        completedCount++;
        if (completedCount >= totalSegments && currentPlayId === playId) {
          notifyAudioState(false);
          if (speechHeartbeatInterval) clearInterval(speechHeartbeatInterval);
        }
      };

      window.speechSynthesis.speak(utterance);
    });
  } catch (err) {
    console.warn('Web Speech API fallback error:', err);
    notifyAudioState(false);
  }
}

/**
 * Checks if a string contains Arabic Unicode characters (including diacritics / harakat)
 */
export function hasArabicCharacters(text: string): boolean {
  if (!text) return false;
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

/**
 * Extracts pure Arabic text segment from a mixed string (e.g. extracts 'صَبَاحَ الْخَيْرِ' from 'Apakah maksud "صَبَاحَ الْخَيْرِ" (Sabahal Khair)?')
 */
export function extractArabicText(text: string): string {
  if (!text) return '';
  const matches = text.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:[\s،؟؛\-]+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*/g);
  if (matches && matches.length > 0) {
    return matches.join(' ').trim();
  }
  return text.trim();
}

/**
 * Plays Arabic audio specifically using authentic Arabic native speaker voice
 */
export async function speakArabicText(text: string) {
  const arabicOnly = extractArabicText(text) || text;
  return speakText(arabicOnly, 'ar');
}

/**
 * Plays genuine, high-quality native audio.
 * For Bahasa Melayu (ms), it uses the authentic Malaysian Malay audio stream from /api/tts.
 * For other languages, it seamlessly uses authentic pronunciation streams.
 * If server audio is interrupted or blocked, it seamlessly falls back to Web Speech API.
 */
export async function speakText(text: string, language: 'ms' | 'en' | 'ar' | 'zh' = 'ms') {
  if (typeof window === 'undefined') return;

  // Stop any ongoing playback first
  stopSpeech();

  const playId = ++currentPlayId;
  const processedText = language === 'ms' ? prepareMalaySpokenText(text) : text;

  try {
    const url = `/api/tts?text=${encodeURIComponent(processedText)}&lang=${language}`;
    const audio = new Audio();
    audio.src = url;
    audio.preload = 'auto';
    currentAudio = audio;

    let startedPlaying = false;

    audio.onplay = () => {
      if (currentPlayId === playId) {
        startedPlaying = true;
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
      if (currentPlayId === playId) {
        currentAudio = null;
        // Fallback to browser Web Speech API
        speakViaWebSpeech(processedText, language, playId);
      }
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Autoplay policy or media decode error - fall back seamlessly to SpeechSynthesis
        if (currentPlayId === playId && !startedPlaying) {
          currentAudio = null;
          speakViaWebSpeech(processedText, language, playId);
        }
      });
    }
  } catch (err) {
    console.error('[Audio] TTS execution error:', err);
    if (currentPlayId === playId) {
      speakViaWebSpeech(processedText, language, playId);
    }
  }
}

/**
 * Immediately stops any active audio playback (both HTML5 audio and browser speech synthesis)
 */
export function stopSpeech() {
  currentPlayId++;
  notifyAudioState(false);

  if (speechHeartbeatInterval) {
    clearInterval(speechHeartbeatInterval);
    speechHeartbeatInterval = null;
  }

  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = '';
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
