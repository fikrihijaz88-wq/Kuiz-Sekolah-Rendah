import { AchievementBadge, QuizQuestion, QuizUserAnswer, StudentAchievementStats, Subject } from '../types';

const STORAGE_KEY = 'kssr_quiz_achievements_stats_v1';

export const ALL_ACHIEVEMENT_BADGES: AchievementBadge[] = [
  // ==========================================
  // BILANGAN SOALAN DISELESAIKAN (QUESTION COUNTS)
  // ==========================================
  {
    id: 'badge-q-5',
    name: 'Langkah Pertama',
    titleMs: 'Langkah Pertama',
    description: 'Selesaikan sekurang-kurangnya 5 soalan kuiz KSSR Semakan.',
    category: 'questions_count',
    iconName: 'Footprints',
    requirementText: 'Selesaikan 5 soalan',
    threshold: 5,
    colorScheme: 'blue',
  },
  {
    id: 'badge-q-10',
    name: 'Penjelajah Minda',
    titleMs: 'Penjelajah Minda',
    description: 'Menunjukkan komitmen tinggi dengan menyelesaikan 10 soalan kuiz.',
    category: 'questions_count',
    iconName: 'Compass',
    requirementText: 'Selesaikan 10 soalan',
    threshold: 10,
    colorScheme: 'purple',
  },
  {
    id: 'badge-q-25',
    name: 'Juara Ketekunan',
    titleMs: 'Juara Ketekunan',
    description: 'Mencapai ketekunan luar biasa dengan menyelesaikan 25 soalan pembelajaran.',
    category: 'questions_count',
    iconName: 'Award',
    requirementText: 'Selesaikan 25 soalan',
    threshold: 25,
    colorScheme: 'amber',
  },
  {
    id: 'badge-q-50',
    name: 'Cendekiawan Muda',
    titleMs: 'Cendekiawan Muda',
    description: 'Selesaikan 50 soalan kuiz merangkumi pelbagai topik dan sukatan KSSR.',
    category: 'questions_count',
    iconName: 'GraduationCap',
    requirementText: 'Selesaikan 50 soalan',
    threshold: 50,
    colorScheme: 'gold',
  },
  {
    id: 'badge-q-100',
    name: 'Jaguh Kuiz KSSR',
    titleMs: 'Jaguh Kuiz KSSR',
    description: 'Pencapaian legenda! Berjaya menyelesaikan 100 soalan secara konsisten.',
    category: 'questions_count',
    iconName: 'Crown',
    requirementText: 'Selesaikan 100 soalan',
    threshold: 100,
    colorScheme: 'rose',
  },

  // ==========================================
  // SKOR 100% DALAM SUBJEK KHUSUS (PERFECT SUBJECTS)
  // ==========================================
  {
    id: 'badge-100-matematik',
    name: 'Pakar Matematik Tulen',
    titleMs: 'Pakar Matematik Tulen',
    description: 'Mencapai markah sempurna 100% dalam sesi kuiz Matematik KSSR!',
    category: 'perfect_subject',
    iconName: 'Calculator',
    requirementText: 'Skor 100% dalam kuiz Matematik',
    subjectRequirement: 'Matematik',
    colorScheme: 'gold',
  },
  {
    id: 'badge-100-sains',
    name: 'Saintis Cilik Cemerlang',
    titleMs: 'Saintis Cilik Cemerlang',
    description: 'Mencapai markah sempurna 100% dalam sesi kuiz Sains KSSR!',
    category: 'perfect_subject',
    iconName: 'FlaskConical',
    requirementText: 'Skor 100% dalam kuiz Sains',
    subjectRequirement: 'Sains',
    colorScheme: 'emerald',
  },
  {
    id: 'badge-100-english',
    name: 'English Star Champion',
    titleMs: 'English Star Champion',
    description: 'Achieved a perfect 100% score in a Bahasa Inggeris (CEFR) quiz session!',
    category: 'perfect_subject',
    iconName: 'Star',
    requirementText: 'Skor 100% dalam kuiz Bahasa Inggeris',
    subjectRequirement: 'Bahasa Inggeris',
    colorScheme: 'blue',
  },
  {
    id: 'badge-100-pendidikan-islam',
    name: 'Bintang Mukmin Cemerlang',
    titleMs: 'Bintang Mukmin Cemerlang',
    description: 'Mencapai markah sempurna 100% dalam sesi kuiz Pendidikan Islam KSSR!',
    category: 'perfect_subject',
    iconName: 'Sparkles',
    requirementText: 'Skor 100% dalam kuiz Pendidikan Islam',
    subjectRequirement: 'Pendidikan Islam',
    colorScheme: 'emerald',
  },
  {
    id: 'badge-100-bahasa-melayu',
    name: 'Pujangga Cilik Bahasa Melayu',
    titleMs: 'Pujangga Cilik Bahasa Melayu',
    description: 'Mencapai markah sempurna 100% dalam sesi kuiz Bahasa Melayu KSSR!',
    category: 'perfect_subject',
    iconName: 'BookOpenCheck',
    requirementText: 'Skor 100% dalam kuiz Bahasa Melayu',
    subjectRequirement: 'Bahasa Melayu',
    colorScheme: 'amber',
  },

  // ==========================================
  // PENGUASAAN & KBAT (MASTERY & HIGHER ORDER THINKING)
  // ==========================================
  {
    id: 'badge-perfect-any',
    name: 'Bintang Gemilang 100%',
    titleMs: 'Bintang Gemilang 100%',
    description: 'Menjawab kesemua soalan dengan tepat (100%) dalam mana-mana sesi kuiz.',
    category: 'mastery',
    iconName: 'Sparkles',
    requirementText: 'Skor 100% dalam sebarang kuiz',
    colorScheme: 'gold',
  },
  {
    id: 'badge-kbat-hero',
    name: 'Wira Pemikir KBAT',
    titleMs: 'Wira Pemikir KBAT',
    description: 'Berjaya menyelesaikan soalan Kemahiran Berfikir Aras Tinggi (KBAT) dengan tepat.',
    category: 'kbat',
    iconName: 'Zap',
    requirementText: 'Jawab betul soalan KBAT',
    colorScheme: 'purple',
  },
  {
    id: 'badge-tp6-master',
    name: 'Penakluk Tahap TP6',
    titleMs: 'Penakluk Tahap TP6',
    description: 'Mencapai Tahap Penguasaan TP6 (Cemerlang ≥ 85%) dalam sesi penilaian kuiz.',
    category: 'mastery',
    iconName: 'Trophy',
    requirementText: 'Mencapai gred TP6 (≥85%)',
    colorScheme: 'emerald',
  },

  // ==========================================
  // CABARAN HARIAN (DAILY CHALLENGE STREAKS)
  // ==========================================
  {
    id: 'badge-daily-1',
    name: 'Disiplin Harian Pertama',
    titleMs: 'Disiplin Harian Pertama',
    description: 'Menyelesaikan sesi Cabaran Harian pertama anda.',
    category: 'daily_streak',
    iconName: 'CalendarCheck',
    requirementText: 'Selesaikan 1 Cabaran Harian',
    threshold: 1,
    colorScheme: 'emerald',
  },
  {
    id: 'badge-daily-3',
    name: 'Pendekar 3 Hari Berturut',
    titleMs: 'Pendekar 3 Hari Berturut',
    description: 'Mengekalkan rentetan latihan harian 3 hari berturut-turut tanpa gagal.',
    category: 'daily_streak',
    iconName: 'Flame',
    requirementText: 'Rentetan 3 hari berturut-turut',
    threshold: 3,
    colorScheme: 'amber',
  },
  {
    id: 'badge-daily-7',
    name: 'Wira Mingguan 7 Hari',
    titleMs: 'Wira Mingguan 7 Hari',
    description: 'Pencapaian dedikasi tinggi! Menyelesaikan cabaran harian 7 hari berturut-turut.',
    category: 'daily_streak',
    iconName: 'Trophy',
    requirementText: 'Rentetan 7 hari berturut-turut',
    threshold: 7,
    colorScheme: 'gold',
  },
];

const DEFAULT_STATS: StudentAchievementStats = {
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalQuizzesCompleted: 0,
  perfectQuizzesCount: 0,
  perfectQuizzesBySubject: {
    Matematik: 0,
    Sains: 0,
    'Bahasa Melayu': 0,
    'Bahasa Inggeris': 0,
    'Pendidikan Islam': 0,
    'Bahasa Arab': 0,
    'Bahasa Cina': 0,
  },
  unlockedBadges: {},
};

/**
 * Load current student achievement stats from localStorage
 */
export function getStoredAchievementStats(): StudentAchievementStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_STATS };
    const parsed = JSON.parse(raw);
    return {
      totalQuestionsAnswered: Number(parsed.totalQuestionsAnswered) || 0,
      totalCorrectAnswers: Number(parsed.totalCorrectAnswers) || 0,
      totalQuizzesCompleted: Number(parsed.totalQuizzesCompleted) || 0,
      perfectQuizzesCount: Number(parsed.perfectQuizzesCount) || 0,
      perfectQuizzesBySubject: {
        Matematik: Number(parsed.perfectQuizzesBySubject?.Matematik) || 0,
        Sains: Number(parsed.perfectQuizzesBySubject?.Sains) || 0,
        'Bahasa Melayu': Number(parsed.perfectQuizzesBySubject?.['Bahasa Melayu']) || 0,
        'Bahasa Inggeris': Number(parsed.perfectQuizzesBySubject?.['Bahasa Inggeris']) || 0,
        'Pendidikan Islam': Number(parsed.perfectQuizzesBySubject?.['Pendidikan Islam']) || 0,
        'Bahasa Arab': Number(parsed.perfectQuizzesBySubject?.['Bahasa Arab']) || 0,
        'Bahasa Cina': Number(parsed.perfectQuizzesBySubject?.['Bahasa Cina']) || 0,
      },
      unlockedBadges: parsed.unlockedBadges || {},
    };
  } catch (err) {
    console.warn('Failed to load achievement stats from localStorage', err);
    return { ...DEFAULT_STATS };
  }
}

/**
 * Save updated student achievement stats to localStorage
 */
export function saveAchievementStats(stats: StudentAchievementStats): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Failed to save achievement stats to localStorage', err);
  }
}

export interface AchievementEvaluationResult {
  stats: StudentAchievementStats;
  newlyUnlockedBadges: AchievementBadge[];
  allBadges: AchievementBadge[];
}

/**
 * Process quiz completion and unlock any newly earned badges
 */
export function processQuizCompletion(
  questions: QuizQuestion[],
  answers: Record<string, QuizUserAnswer>,
  isDailyChallenge: boolean = false,
  dailyStreakCount: number = 0
): AchievementEvaluationResult {
  const currentStats = getStoredAchievementStats();
  const total = questions.length;
  if (total === 0) {
    return {
      stats: currentStats,
      newlyUnlockedBadges: [],
      allBadges: getBadgesWithProgress(currentStats, dailyStreakCount),
    };
  }

  const answeredList = (Object.values(answers) as QuizUserAnswer[]).filter(Boolean);
  const correctCount = answeredList.filter((a) => a.isCorrect).length;
  const isPerfectScore = total > 0 && correctCount === total;
  const percentage = Math.round((correctCount / total) * 100);

  // Check subject of quiz
  const primarySubject = questions[0]?.subject;
  const isSingleSubjectQuiz = questions.every((q) => q.subject === primarySubject);

  // Check KBAT questions answered correctly
  const correctKbatCount = questions.filter((q) => {
    const ans = answers[q.id];
    return q.difficulty.includes('KBAT') && ans?.isCorrect;
  }).length;

  // Clone stats for update
  const updatedStats: StudentAchievementStats = {
    ...currentStats,
    totalQuestionsAnswered: currentStats.totalQuestionsAnswered + total,
    totalCorrectAnswers: currentStats.totalCorrectAnswers + correctCount,
    totalQuizzesCompleted: currentStats.totalQuizzesCompleted + 1,
    perfectQuizzesCount: isPerfectScore
      ? currentStats.perfectQuizzesCount + 1
      : currentStats.perfectQuizzesCount,
    perfectQuizzesBySubject: {
      ...currentStats.perfectQuizzesBySubject,
      ...(isPerfectScore && isSingleSubjectQuiz && primarySubject
        ? {
            [primarySubject]: (currentStats.perfectQuizzesBySubject[primarySubject] || 0) + 1,
          }
        : {}),
    },
    unlockedBadges: { ...currentStats.unlockedBadges },
  };

  const nowIso = new Date().toISOString();
  const newlyUnlocked: AchievementBadge[] = [];

  // Evaluate each badge
  ALL_ACHIEVEMENT_BADGES.forEach((badge) => {
    // Already unlocked previously
    if (updatedStats.unlockedBadges[badge.id]) return;

    let unlocked = false;

    // Category 1: Questions count
    if (badge.category === 'questions_count' && badge.threshold) {
      if (updatedStats.totalQuestionsAnswered >= badge.threshold) {
        unlocked = true;
      }
    }

    // Category 2: 100% score in specific subject
    if (badge.category === 'perfect_subject' && badge.subjectRequirement) {
      if (
        isPerfectScore &&
        isSingleSubjectQuiz &&
        primarySubject === badge.subjectRequirement
      ) {
        unlocked = true;
      } else if ((updatedStats.perfectQuizzesBySubject[badge.subjectRequirement] || 0) > 0) {
        unlocked = true;
      }
    }

    // Category 3: Any perfect score (100%)
    if (badge.id === 'badge-perfect-any') {
      if (isPerfectScore || updatedStats.perfectQuizzesCount > 0) {
        unlocked = true;
      }
    }

    // Category 4: KBAT mastery
    if (badge.id === 'badge-kbat-hero') {
      if (correctKbatCount >= 1) {
        unlocked = true;
      }
    }

    // Category 5: TP6 mastery (score >= 85%)
    if (badge.id === 'badge-tp6-master') {
      if (percentage >= 85) {
        unlocked = true;
      }
    }

    // Category 6: Daily Streak Badges
    if (badge.category === 'daily_streak' && badge.threshold) {
      if (isDailyChallenge && dailyStreakCount >= badge.threshold) {
        unlocked = true;
      }
    }

    if (unlocked) {
      updatedStats.unlockedBadges[badge.id] = nowIso;
      newlyUnlocked.push({
        ...badge,
        isUnlocked: true,
        unlockedAt: nowIso,
      });
    }
  });

  // Save updated state
  saveAchievementStats(updatedStats);

  return {
    stats: updatedStats,
    newlyUnlockedBadges: newlyUnlocked,
    allBadges: getBadgesWithProgress(updatedStats, dailyStreakCount),
  };
}

/**
 * Get all badges annotated with unlocked state and progress counters
 */
export function getBadgesWithProgress(
  stats: StudentAchievementStats,
  dailyStreakCount: number = 0
): AchievementBadge[] {
  return ALL_ACHIEVEMENT_BADGES.map((badge) => {
    const isUnlocked = Boolean(stats.unlockedBadges[badge.id]);
    const unlockedAt = stats.unlockedBadges[badge.id];

    let progressCurrent = 0;
    let progressMax = 1;

    if (badge.category === 'questions_count' && badge.threshold) {
      progressMax = badge.threshold;
      progressCurrent = Math.min(stats.totalQuestionsAnswered, badge.threshold);
    } else if (badge.category === 'perfect_subject' && badge.subjectRequirement) {
      progressMax = 1;
      progressCurrent = (stats.perfectQuizzesBySubject[badge.subjectRequirement] || 0) >= 1 ? 1 : 0;
    } else if (badge.id === 'badge-perfect-any') {
      progressMax = 1;
      progressCurrent = stats.perfectQuizzesCount >= 1 ? 1 : 0;
    } else if (badge.category === 'daily_streak' && badge.threshold) {
      progressMax = badge.threshold;
      progressCurrent = Math.min(dailyStreakCount, badge.threshold);
    } else {
      progressMax = 1;
      progressCurrent = isUnlocked ? 1 : 0;
    }

    return {
      ...badge,
      isUnlocked,
      unlockedAt,
      progressCurrent,
      progressMax,
    };
  });
}
