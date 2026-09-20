// Web Audio API Synthesizer for 100% Offline, Zero-Latency Educational Sound Effects

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Auto unlock audio context on first user interaction
if (typeof window !== 'undefined') {
  const unlock = () => {
    getAudioContext();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('touchstart', unlock);
    window.removeEventListener('click', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock, { once: true, passive: true });
  window.addEventListener('touchstart', unlock, { once: true, passive: true });
  window.addEventListener('click', unlock, { once: true, passive: true });
  window.addEventListener('keydown', unlock, { once: true, passive: true });
}

/**
 * Plays a pleasant, encouraging high chime for correct answers
 */
export function playCorrectSfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    
    // First tone (E5 ~ 659.25Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(659.25, now);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.18, now + 0.03);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    // Second tone (G5 ~ 783.99Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(783.99, now + 0.1);
    gain2.gain.setValueAtTime(0, now + 0.1);
    gain2.gain.linearRampToValueAtTime(0.2, now + 0.13);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.55);
  } catch (e) {
    // Ignore audio context errors gracefully
  }
}

/**
 * Plays a gentle, soft pedagogical tone for incorrect answers (encouraging, not harsh)
 */
export function playIncorrectSfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(329.63, now); // E4
    osc.frequency.linearRampToValueAtTime(261.63, now + 0.25); // Down to C4
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.32);
  } catch (e) {
    // Ignore audio context errors gracefully
  }
}

/**
 * Plays a celebratory victory fanfare when completing a quiz or unlocking badges
 */
export function playCelebrationSfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { freq: 523.25, time: 0, dur: 0.15 },    // C5
      { freq: 659.25, time: 0.12, dur: 0.15 }, // E5
      { freq: 783.99, time: 0.24, dur: 0.2 },  // G5
      { freq: 1046.50, time: 0.4, dur: 0.45 }, // C6
    ];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, now + n.time);
      gain.gain.setValueAtTime(0, now + n.time);
      gain.gain.linearRampToValueAtTime(0.2, now + n.time + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + n.dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.time);
      osc.stop(now + n.time + n.dur);
    });
  } catch (e) {
    // Ignore audio context errors gracefully
  }
}

/**
 * Plays a quick UI pop when switching sound toggle or clicking buttons
 */
export function playToggleSoundSfx(enabled: boolean = true) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    if (enabled) {
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
    } else {
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.exponentialRampToValueAtTime(329.63, now + 0.12);
    }
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  } catch (e) {
    // Ignore audio context errors gracefully
  }
}

/**
 * Plays battle start fanfare (3-beep countdown and energetic chord)
 */
export function playBattleStartSfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [440, 554.37, 659.25, 880]; // A major fanfare
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  } catch (e) {
    // Ignore
  }
}

/**
 * Plays speed bonus chime for fastest correct answer
 */
export function playSpeedBonusSfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.18);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  } catch (e) {
    // Ignore
  }
}

/**
 * Plays battle victory fanfare
 */
export function playBattleVictorySfx() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { f: 523.25, t: 0, d: 0.15 },
      { f: 659.25, t: 0.15, d: 0.15 },
      { f: 783.99, t: 0.3, d: 0.15 },
      { f: 1046.50, t: 0.45, d: 0.5 },
    ];
    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, now + n.t);
      gain.gain.setValueAtTime(0, now + n.t);
      gain.gain.linearRampToValueAtTime(0.25, now + n.t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + n.t);
      osc.stop(now + n.t + n.d);
    });
  } catch (e) {
    // Ignore
  }
}
