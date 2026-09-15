import { LeaderboardEntry, YearLevel, QuizQuestion, QuizUserAnswer, StudentProfile } from '../types';
import { getStoredProfiles, getActiveProfile } from './studentProfiles';
import { getStoredAchievementStats } from './achievementSystem';
import { getDailyStreakData } from './dailyChallenge';

export interface StudentLeaderboardStats {
  quizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  perfectQuizzesCount: number;
  challengesCompleted: number;
  dailyStreak: number;
  badgesCount: number;
  totalScore: number;
  lastActive: string;
}

const LEADERBOARD_STORAGE_KEY = 'kssr_student_leaderboard_data_v1';

export function getRankTitle(score: number): string {
  if (score >= 900) return '👑 Maharaja KSSR';
  if (score >= 600) return '🏆 Juara Gemilang';
  if (score >= 380) return '⚔️ Pendekar Ilmu';
  if (score >= 180) return '🚀 Bintang Harapan';
  return '🌱 Cendekiawan Muda';
}

export function calculateQuizScore(
  questions: QuizQuestion[],
  answers: Record<string, QuizUserAnswer>,
  isDailyChallenge: boolean,
  currentStreak: number
): number {
  let score = 0;
  const answeredList = (Object.values(answers) as QuizUserAnswer[]).filter(Boolean);
  const correctCount = answeredList.filter((a) => a.isCorrect).length;

  // 10 points for every correct question
  score += correctCount * 10;

  // Extra 10 points for each KBAT question correct
  questions.forEach((q) => {
    if (q.difficulty.includes('KBAT') && answers[q.id]?.isCorrect) {
      score += 15;
    }
  });

  // Perfect score bonus
  if (questions.length > 0 && correctCount === questions.length) {
    score += 30;
  }

  // Daily challenge bonus
  if (isDailyChallenge) {
    score += 50;
    score += Math.min(currentStreak, 10) * 10; // Streak multiplier
  }

  return score;
}

// Built-in peer classmates for friendly competition
const PEER_STUDENTS: Omit<LeaderboardEntry, 'isCurrentUser'>[] = [
  {
    id: 'peer-1',
    studentName: 'Nurul Aina Farhana',
    className: '6 Cemerlang',
    year: 6,
    avatarId: 'star',
    schoolName: 'SK Sri Petaling',
    totalScore: 880,
    challengesCompleted: 16,
    dailyStreak: 8,
    quizzesCompleted: 20,
    correctAnswers: 72,
    totalQuestions: 80,
    badgesCount: 8,
    accuracyRate: 90,
    rankTitle: '🏆 Juara Gemilang',
  },
  {
    id: 'peer-2',
    studentName: 'Muhammad Haziq',
    className: '3 Amanah',
    year: 3,
    avatarId: 'rocket',
    schoolName: 'SK Taman Tun Dr Ismail',
    totalScore: 720,
    challengesCompleted: 12,
    dailyStreak: 6,
    quizzesCompleted: 16,
    correctAnswers: 58,
    totalQuestions: 64,
    badgesCount: 7,
    accuracyRate: 90,
    rankTitle: '🏆 Juara Gemilang',
  },
  {
    id: 'peer-3',
    studentName: 'Lim Wei Jie',
    className: '5 Bestari',
    year: 5,
    avatarId: 'robot',
    schoolName: 'SJKC Chung Hwa',
    totalScore: 650,
    challengesCompleted: 11,
    dailyStreak: 5,
    quizzesCompleted: 14,
    correctAnswers: 50,
    totalQuestions: 58,
    badgesCount: 6,
    accuracyRate: 86,
    rankTitle: '🏆 Juara Gemilang',
  },
  {
    id: 'peer-4',
    studentName: 'Siti Sarah Maisarah',
    className: '1 Pintar',
    year: 1,
    avatarId: 'cat',
    schoolName: 'SK Cyberjaya',
    totalScore: 560,
    challengesCompleted: 10,
    dailyStreak: 5,
    quizzesCompleted: 12,
    correctAnswers: 44,
    totalQuestions: 50,
    badgesCount: 5,
    accuracyRate: 88,
    rankTitle: '⚔️ Pendekar Ilmu',
  },
  {
    id: 'peer-5',
    studentName: 'Danish Irfan',
    className: '4 Dedikasi',
    year: 4,
    avatarId: 'lion',
    schoolName: 'SK Bandar Utama',
    totalScore: 490,
    challengesCompleted: 8,
    dailyStreak: 4,
    quizzesCompleted: 10,
    correctAnswers: 36,
    totalQuestions: 42,
    badgesCount: 4,
    accuracyRate: 85,
    rankTitle: '⚔️ Pendekar Ilmu',
  },
  {
    id: 'peer-6',
    studentName: 'Arun Kumar',
    className: '2 Cerdik',
    year: 2,
    avatarId: 'owl',
    schoolName: 'SJKT Vivekananda',
    totalScore: 410,
    challengesCompleted: 7,
    dailyStreak: 3,
    quizzesCompleted: 9,
    correctAnswers: 30,
    totalQuestions: 38,
    badgesCount: 4,
    accuracyRate: 79,
    rankTitle: '⚔️ Pendekar Ilmu',
  },
  {
    id: 'peer-7',
    studentName: 'Ahmad Daniel',
    className: '3 Gemilang',
    year: 3,
    avatarId: 'trophy',
    schoolName: 'SK Subang Jaya',
    totalScore: 360,
    challengesCompleted: 6,
    dailyStreak: 3,
    quizzesCompleted: 8,
    correctAnswers: 28,
    totalQuestions: 35,
    badgesCount: 3,
    accuracyRate: 80,
    rankTitle: '🚀 Bintang Harapan',
  },
  {
    id: 'peer-8',
    studentName: 'Nur Dania Balqis',
    className: '6 Maju',
    year: 6,
    avatarId: 'zap',
    schoolName: 'SK Putrajaya Presint 9',
    totalScore: 310,
    challengesCompleted: 5,
    dailyStreak: 2,
    quizzesCompleted: 7,
    correctAnswers: 24,
    totalQuestions: 30,
    badgesCount: 3,
    accuracyRate: 80,
    rankTitle: '🚀 Bintang Harapan',
  },
  {
    id: 'peer-9',
    studentName: 'Adam Rayyan',
    className: '1 Hebat',
    year: 1,
    avatarId: 'star',
    schoolName: 'SK Bukit Damansara',
    totalScore: 260,
    challengesCompleted: 4,
    dailyStreak: 2,
    quizzesCompleted: 6,
    correctAnswers: 20,
    totalQuestions: 25,
    badgesCount: 2,
    accuracyRate: 80,
    rankTitle: '🚀 Bintang Harapan',
  },
  {
    id: 'peer-10',
    studentName: 'Chloe Tan Zhi Xuan',
    className: '5 Cekap',
    year: 5,
    avatarId: 'cat',
    schoolName: 'SJKC Puay Chai',
    totalScore: 210,
    challengesCompleted: 3,
    dailyStreak: 2,
    quizzesCompleted: 5,
    correctAnswers: 16,
    totalQuestions: 20,
    badgesCount: 2,
    accuracyRate: 80,
    rankTitle: '🚀 Bintang Harapan',
  },
];

export function getStoredStudentStatsMap(): Record<string, StudentLeaderboardStats> {
  try {
    const raw = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.warn('Failed to parse leaderboard storage', e);
    return {};
  }
}

export function saveStudentStatsMap(data: Record<string, StudentLeaderboardStats>): void {
  try {
    localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Failed to save leaderboard storage', e);
  }
}

/**
 * Record a completed quiz session into the student's leaderboard entry
 */
export function recordStudentQuizScore(
  studentId: string,
  earnedScore: number,
  questionCount: number,
  correctCount: number,
  isDailyChallenge: boolean,
  currentStreak: number,
  isPerfect: boolean,
  badgesCount: number
): void {
  const currentMap = getStoredStudentStatsMap();
  const existing = currentMap[studentId] || {
    quizzesCompleted: 0,
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    perfectQuizzesCount: 0,
    challengesCompleted: 0,
    dailyStreak: 0,
    badgesCount: 0,
    totalScore: 0,
    lastActive: new Date().toISOString(),
  };

  const updated: StudentLeaderboardStats = {
    quizzesCompleted: existing.quizzesCompleted + 1,
    totalQuestionsAnswered: existing.totalQuestionsAnswered + questionCount,
    totalCorrectAnswers: existing.totalCorrectAnswers + correctCount,
    perfectQuizzesCount: isPerfect ? existing.perfectQuizzesCount + 1 : existing.perfectQuizzesCount,
    challengesCompleted: isDailyChallenge ? existing.challengesCompleted + 1 : existing.challengesCompleted,
    dailyStreak: Math.max(existing.dailyStreak, currentStreak),
    badgesCount: Math.max(existing.badgesCount, badgesCount),
    totalScore: existing.totalScore + earnedScore,
    lastActive: new Date().toISOString(),
  };

  currentMap[studentId] = updated;
  saveStudentStatsMap(currentMap);
}

/**
 * Get effective score for the active profile or current visitor
 */
export function getEffectiveStudentScore(profile: StudentProfile | null): number {
  const statsMap = getStoredStudentStatsMap();
  const globalAchievements = getStoredAchievementStats();
  const streakData = getDailyStreakData();
  const globalBadgeCount = Object.keys(globalAchievements.unlockedBadges || {}).length;

  const targetId = profile ? profile.id : 'active_guest_student';
  const stats = statsMap[targetId];

  if (stats?.totalScore && stats.totalScore > 0) {
    return stats.totalScore;
  }

  const correctAns = stats?.totalCorrectAnswers || globalAchievements.totalCorrectAnswers;
  const streak = stats?.dailyStreak || streakData.currentStreak;
  const challenges = stats?.challengesCompleted || streakData.completedDates.length;
  const badges = stats?.badgesCount || globalBadgeCount;

  return (correctAns * 10) + (challenges * 50) + (badges * 25) + (streak * 15);
}

/**
 * Get unified leaderboard entries combining all registered students + peers
 */
export function getAllLeaderboardEntries(
  activeProfile: StudentProfile | null
): LeaderboardEntry[] {
  const profiles = getStoredProfiles();
  const statsMap = getStoredStudentStatsMap();
  const globalAchievements = getStoredAchievementStats();
  const streakData = getDailyStreakData();
  const globalBadgeCount = Object.keys(globalAchievements.unlockedBadges || {}).length;

  const entries: LeaderboardEntry[] = [];

  // If there are registered profiles, build an entry for each
  if (profiles.length > 0) {
    profiles.forEach((profile) => {
      const stats = statsMap[profile.id];
      const isCurrent = activeProfile?.id === profile.id;

      // Calculate aggregated metrics (falling back to global achievements if this is the active user)
      const correctAns = stats?.totalCorrectAnswers || (isCurrent ? globalAchievements.totalCorrectAnswers : 0);
      const totalQ = stats?.totalQuestionsAnswered || (isCurrent ? globalAchievements.totalQuestionsAnswered : 0);
      const quizzes = stats?.quizzesCompleted || (isCurrent ? globalAchievements.totalQuizzesCompleted : 0);
      const streak = stats?.dailyStreak || (isCurrent ? streakData.currentStreak : 0);
      const challenges = stats?.challengesCompleted || (isCurrent ? streakData.completedDates.length : 0);
      const badges = stats?.badgesCount || (isCurrent ? globalBadgeCount : 0);

      // Score base calculation:
      // If stats.totalScore exists, use it; otherwise compute from achievements stats
      let computedScore = stats?.totalScore || 0;
      if (computedScore === 0 && (correctAns > 0 || challenges > 0 || badges > 0)) {
        computedScore = (correctAns * 10) + (challenges * 50) + (badges * 25) + (streak * 15);
      }

      const accuracy = totalQ > 0 ? Math.round((correctAns / totalQ) * 100) : 0;

      entries.push({
        id: profile.id,
        studentName: profile.name,
        className: profile.className,
        year: profile.year,
        avatarId: profile.avatarId,
        schoolName: profile.schoolName || 'Sekolah Rendah KSSR',
        totalScore: computedScore,
        challengesCompleted: challenges,
        dailyStreak: streak,
        quizzesCompleted: quizzes,
        correctAnswers: correctAns,
        totalQuestions: totalQ,
        badgesCount: badges,
        accuracyRate: accuracy,
        rankTitle: getRankTitle(computedScore),
        isCurrentUser: isCurrent,
      });
    });
  } else {
    // If no profiles registered yet, create a default "Murid Pelawat / Anda" entry
    const correctAns = globalAchievements.totalCorrectAnswers;
    const totalQ = globalAchievements.totalQuestionsAnswered;
    const quizzes = globalAchievements.totalQuizzesCompleted;
    const streak = streakData.currentStreak;
    const challenges = streakData.completedDates.length;
    const badges = globalBadgeCount;
    const computedScore = (correctAns * 10) + (challenges * 50) + (badges * 25) + (streak * 15);
    const accuracy = totalQ > 0 ? Math.round((correctAns / totalQ) * 100) : 0;

    entries.push({
      id: 'active_guest_student',
      studentName: 'Murid Pintar (Anda)',
      className: 'Sekolah Kebangsaan (SK)',
      year: 2,
      avatarId: 'trophy',
      schoolName: 'KSSR Semakan KPM',
      totalScore: computedScore,
      challengesCompleted: challenges,
      dailyStreak: streak,
      quizzesCompleted: quizzes,
      correctAnswers: correctAns,
      totalQuestions: totalQ,
      badgesCount: badges,
      accuracyRate: accuracy,
      rankTitle: getRankTitle(computedScore),
      isCurrentUser: true,
    });
  }

  // Add peer students
  PEER_STUDENTS.forEach((peer) => {
    entries.push({
      ...peer,
      isCurrentUser: false,
    });
  });

  return entries;
}
