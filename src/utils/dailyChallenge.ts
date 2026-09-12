import { QuizQuestion, YearLevel, Subject } from '../types';

export interface DailyStreakData {
  lastCompletedDate: string | null; // e.g. '2026-09-12'
  currentStreak: number;
  longestStreak: number;
  completedDates: string[]; // List of YYYY-MM-DD
}

const STORAGE_KEY = 'kssr_daily_streak_v1';

/**
 * Returns local date string in YYYY-MM-DD format
 */
export function getTodayDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Formats a date string into standard Bahasa Melayu representation
 * e.g., "Sabtu, 12 September 2026"
 */
export function getFormattedMalayDate(dateString?: string): string {
  const d = dateString ? new Date(dateString + 'T00:00:00') : new Date();
  const days = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
  const months = [
    'Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun',
    'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'
  ];
  const dayName = days[d.getDay()];
  const dayNum = d.getDate();
  const monthName = months[d.getMonth()];
  const yearNum = d.getFullYear();
  return `${dayName}, ${dayNum} ${monthName} ${yearNum}`;
}

/**
 * Computes calendar days difference between two YYYY-MM-DD date strings (date2 - date1)
 */
export function daysBetween(dateStr1: string, dateStr2: string): number {
  const d1 = new Date(dateStr1 + 'T00:00:00').getTime();
  const d2 = new Date(dateStr2 + 'T00:00:00').getTime();
  const diff = Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  return diff;
}

/**
 * 32-bit string hash for deterministic PRNG
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Mulberry32 PRNG
 */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Deterministic Fisher-Yates array shuffle using seeded PRNG
 */
export function shuffleWithSeed<T>(array: T[], seedStr: string): T[] {
  const copy = [...array];
  const rng = mulberry32(hashString(seedStr));
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Deterministically select daily questions based on current date, year and subject.
 * Automatically changes every single day at midnight!
 */
export function getDailyQuestions(
  allQuestions: QuizQuestion[],
  dateStr: string,
  year: YearLevel,
  subject: Subject | 'all',
  count: number = 5
): QuizQuestion[] {
  const pool = allQuestions.filter((q) => {
    if (q.year !== year) return false;
    if (subject !== 'all' && q.subject !== subject) return false;
    return true;
  });

  if (pool.length === 0) return [];

  // Seed changes strictly based on date string (e.g. 2026-09-12) + year + subject
  const seed = `daily-kssr-${dateStr}-${year}-${subject}`;
  const shuffled = shuffleWithSeed(pool, seed);
  return shuffled.slice(0, count);
}

/**
 * Load streak data from localStorage, resetting currentStreak if more than 1 day was missed
 */
export function getDailyStreakData(): DailyStreakData {
  const today = getTodayDateString();
  const defaultData: DailyStreakData = {
    lastCompletedDate: null,
    currentStreak: 0,
    longestStreak: 0,
    completedDates: [],
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw);
    const lastCompleted = parsed.lastCompletedDate || null;
    let currentStreak = Number(parsed.currentStreak) || 0;
    const longestStreak = Number(parsed.longestStreak) || 0;
    const completedDates = Array.isArray(parsed.completedDates) ? parsed.completedDates : [];

    // Check if streak was broken (missed yesterday)
    if (lastCompleted) {
      const diff = daysBetween(lastCompleted, today);
      if (diff > 1) {
        // Missed at least one calendar day
        currentStreak = 0;
      }
    }

    return {
      lastCompletedDate: lastCompleted,
      currentStreak,
      longestStreak,
      completedDates,
    };
  } catch (err) {
    console.warn('Failed to parse daily streak from localStorage', err);
    return defaultData;
  }
}

/**
 * Check if the student has already completed today's daily challenge
 */
export function isTodayCompleted(): boolean {
  const data = getDailyStreakData();
  const today = getTodayDateString();
  return data.lastCompletedDate === today;
}

/**
 * Record completion of today's daily challenge
 */
export function recordDailyChallengeCompleted(): {
  streakUpdated: boolean;
  newStreak: number;
  longestStreak: number;
  isFirstToday: boolean;
} {
  const today = getTodayDateString();
  const data = getDailyStreakData();

  if (data.lastCompletedDate === today) {
    // Already recorded today
    return {
      streakUpdated: false,
      newStreak: data.currentStreak,
      longestStreak: data.longestStreak,
      isFirstToday: false,
    };
  }

  let newStreak = 1;
  if (data.lastCompletedDate) {
    const diff = daysBetween(data.lastCompletedDate, today);
    if (diff === 1) {
      // Completed yesterday, streak continues!
      newStreak = data.currentStreak + 1;
    } else {
      // Streak restart
      newStreak = 1;
    }
  }

  const newLongest = Math.max(newStreak, data.longestStreak);
  const updatedDates = Array.from(new Set([...data.completedDates, today]));

  const updatedData: DailyStreakData = {
    lastCompletedDate: today,
    currentStreak: newStreak,
    longestStreak: newLongest,
    completedDates: updatedDates,
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (err) {
    console.warn('Failed to save daily streak to localStorage', err);
  }

  return {
    streakUpdated: true,
    newStreak,
    longestStreak: newLongest,
    isFirstToday: true,
  };
}
