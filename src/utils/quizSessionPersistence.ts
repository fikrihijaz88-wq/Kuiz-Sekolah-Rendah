import { YearLevel, Subject, QuizMode, QuizUserAnswer } from '../types';

export interface SavedQuizSession {
  version: number;
  quizMode: QuizMode;
  selectedYear: YearLevel;
  selectedSubject: Subject;
  selectedTopicId: string;
  selectedDifficulty: string;
  dailySubject: Subject | 'all';
  adaptiveSubject: Subject | 'all';
  studentId?: string;
  todayDateStr?: string;
  currentQuestionIndex: number;
  userAnswers: Record<string, QuizUserAnswer>;
  isQuizFinished: boolean;
  questionIds: string[];
  savedAt: string;
}

const QUIZ_SESSION_STORAGE_KEY = 'kssr_active_quiz_session_v1';

/**
 * Safely saves the current active quiz progress to localStorage
 */
export function saveQuizSession(session: Omit<SavedQuizSession, 'version' | 'savedAt'>): void {
  if (typeof window === 'undefined') return;
  try {
    const payload: SavedQuizSession = {
      ...session,
      version: 1,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(QUIZ_SESSION_STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('[Session] Gagal menyimpan sesi kuiz ke localStorage:', err);
  }
}

/**
 * Safely retrieves the stored active quiz progress from localStorage.
 * Validates session freshness and integrity.
 */
export function getSavedQuizSession(): SavedQuizSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(QUIZ_SESSION_STORAGE_KEY);
    if (!raw) return null;

    const data: SavedQuizSession = JSON.parse(raw);
    if (!data || typeof data !== 'object') return null;

    // Check version
    if (data.version !== 1) {
      clearSavedQuizSession();
      return null;
    }

    // Check expiration (within 24 hours)
    if (data.savedAt) {
      const savedTime = new Date(data.savedAt).getTime();
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      if (now - savedTime > twentyFourHours) {
        clearSavedQuizSession();
        return null;
      }
    }

    // Basic fields validation
    if (
      typeof data.currentQuestionIndex !== 'number' ||
      !data.userAnswers ||
      typeof data.userAnswers !== 'object'
    ) {
      clearSavedQuizSession();
      return null;
    }

    return data;
  } catch (err) {
    console.warn('[Session] Gagal memuatkan sesi kuiz dari localStorage:', err);
    return null;
  }
}

/**
 * Checks if there is an in-progress session that can be resumed.
 */
export function hasResumeableQuizSession(): boolean {
  const session = getSavedQuizSession();
  if (!session) return false;
  // Has answers or has progressed past question 0 and not finished
  const hasAnswers = Object.keys(session.userAnswers || {}).length > 0;
  const isPastFirst = session.currentQuestionIndex > 0;
  return (hasAnswers || isPastFirst) && !session.isQuizFinished;
}

/**
 * Clears the stored quiz progress from localStorage
 */
export function clearSavedQuizSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(QUIZ_SESSION_STORAGE_KEY);
  } catch (err) {
    console.warn('[Session] Gagal memadamkan sesi kuiz:', err);
  }
}
