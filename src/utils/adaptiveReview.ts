import {
  QuizQuestion,
  QuizUserAnswer,
  StudentAttemptRecord,
  TopicPerformanceSummary,
  AdaptiveReviewResult,
  YearLevel,
  Subject,
} from '../types';

const HISTORY_STORAGE_KEY = 'kssr_student_attempt_history_v1';

/**
 * Retrieve all student attempt records from localStorage
 */
export function getAllAttemptHistory(): StudentAttemptRecord[] {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return getDefaultDiagnosticSeedHistory();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('Failed to load student attempt history', err);
    return getDefaultDiagnosticSeedHistory();
  }
}

/**
 * Save attempt records to localStorage
 */
export function saveAllAttemptHistory(records: StudentAttemptRecord[]): void {
  try {
    // Keep most recent 1000 records
    const bounded = records.slice(-1000);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(bounded));
  } catch (err) {
    console.warn('Failed to save student attempt history', err);
  }
}

/**
 * Record a completed quiz session into the student's attempt history
 */
export function recordQuizAttemptHistory(
  studentId: string,
  questions: QuizQuestion[],
  answers: Record<string, QuizUserAnswer>
): void {
  const currentHistory = getAllAttemptHistory();
  const newRecords: StudentAttemptRecord[] = [];
  const now = Date.now();

  questions.forEach((q) => {
    const ans = answers[q.id];
    if (!ans) return;

    newRecords.push({
      id: `att_${now}_${Math.random().toString(36).substring(2, 6)}`,
      studentId: studentId || 'active_guest_student',
      questionId: q.id,
      year: q.year,
      subject: q.subject,
      topic: q.topic,
      subtopic: q.subtopic,
      difficulty: q.difficulty,
      isCorrect: ans.isCorrect,
      selectedOption: ans.selectedOption,
      correctAnswer: q.correctAnswer,
      timestamp: now,
      timeSpentSeconds: ans.timeSpentSeconds || 0,
    });
  });

  if (newRecords.length > 0) {
    const updated = [...currentHistory, ...newRecords];
    saveAllAttemptHistory(updated);
  }
}

/**
 * Get all attempts for a given student
 */
export function getStudentAttempts(studentId: string): StudentAttemptRecord[] {
  const all = getAllAttemptHistory();
  const targetId = studentId || 'active_guest_student';
  const filtered = all.filter((r) => r.studentId === targetId);

  // If specific student has no records yet, fall back to guest history
  if (filtered.length === 0 && targetId !== 'active_guest_student') {
    const guestAttempts = all.filter((r) => r.studentId === 'active_guest_student');
    if (guestAttempts.length > 0) return guestAttempts;
  }

  return filtered;
}

/**
 * Compute performance breakdown grouped by topic
 */
export function getTopicPerformanceSummary(
  studentId: string,
  year?: YearLevel,
  subject?: Subject | 'all'
): TopicPerformanceSummary[] {
  const attempts = getStudentAttempts(studentId);

  const filtered = attempts.filter((r) => {
    if (year && r.year !== year) return false;
    if (subject && subject !== 'all' && r.subject !== subject) return false;
    return true;
  });

  if (filtered.length === 0) return [];

  const map = new Map<string, {
    topic: string;
    subject: Subject;
    year: YearLevel;
    attempts: number;
    correct: number;
    wrong: number;
    mistakes: Set<string>;
    lastAttempted: number;
  }>();

  filtered.forEach((r) => {
    const key = `${r.year}_${r.subject}_${r.topic}`;
    if (!map.has(key)) {
      map.set(key, {
        topic: r.topic,
        subject: r.subject,
        year: r.year,
        attempts: 0,
        correct: 0,
        wrong: 0,
        mistakes: new Set<string>(),
        lastAttempted: r.timestamp,
      });
    }

    const item = map.get(key)!;
    item.attempts += 1;
    if (r.isCorrect) {
      item.correct += 1;
    } else {
      item.wrong += 1;
      item.mistakes.add(r.questionId);
    }
    if (r.timestamp > item.lastAttempted) {
      item.lastAttempted = r.timestamp;
    }
  });

  const result: TopicPerformanceSummary[] = Array.from(map.values()).map((item) => {
    const accuracyRate = item.attempts > 0 ? Math.round((item.correct / item.attempts) * 100) : 0;
    return {
      topic: item.topic,
      subject: item.subject,
      year: item.year,
      totalAttempts: item.attempts,
      correctCount: item.correct,
      wrongCount: item.wrong,
      accuracyRate,
      lastAttempted: item.lastAttempted,
      mistakeQuestionIds: Array.from(item.mistakes),
    };
  });

  // Sort by lowest accuracy first, then by most mistakes, then by most recent
  result.sort((a, b) => {
    if (a.accuracyRate !== b.accuracyRate) {
      return a.accuracyRate - b.accuracyRate; // Ascending: lowest score at top
    }
    if (a.wrongCount !== b.wrongCount) {
      return b.wrongCount - a.wrongCount; // Descending: more mistakes at top
    }
    return b.lastAttempted - a.lastAttempted;
  });

  return result;
}

/**
 * Identify the lowest-scoring 20% of topics in student's history
 */
export function getLowestScoringTopics(
  studentId: string,
  year?: YearLevel,
  subject?: Subject | 'all',
  percentile: number = 0.2
): {
  lowestTopics: TopicPerformanceSummary[];
  allTopicPerformances: TopicPerformanceSummary[];
  totalTopicsAttempted: number;
} {
  const allTopicPerformances = getTopicPerformanceSummary(studentId, year, subject);
  const totalTopicsAttempted = allTopicPerformances.length;

  if (totalTopicsAttempted === 0) {
    return {
      lowestTopics: [],
      allTopicPerformances: [],
      totalTopicsAttempted: 0,
    };
  }

  // Calculate bottom 20% cutoff (at least 1 topic if attempted)
  const bottomCount = Math.max(1, Math.ceil(totalTopicsAttempted * percentile));
  
  // Prioritize topics with accuracy < 100% or lowest accuracy
  const lowestTopics = allTopicPerformances.slice(0, bottomCount).map((t) => ({
    ...t,
    isLowestTwentyPercent: true,
  }));

  return {
    lowestTopics,
    allTopicPerformances,
    totalTopicsAttempted,
  };
}

/**
 * Generate an Adaptive Review set of questions surfacing the student's lowest-scoring 20% topics
 */
export function getAdaptiveReviewQuestions(params: {
  questionBank: QuizQuestion[];
  studentId: string;
  year: YearLevel;
  subject?: Subject | 'all';
  count?: number;
}): AdaptiveReviewResult {
  const { questionBank, studentId, year, subject = 'all', count = 5 } = params;

  const { lowestTopics, allTopicPerformances, totalTopicsAttempted } = getLowestScoringTopics(
    studentId,
    year,
    subject,
    0.2 // Lowest 20%
  );

  const matchedQuestions: QuizQuestion[] = [];
  const addedIds = new Set<string>();

  // Filter bank by Year (and Subject if specified)
  const candidateBank = questionBank.filter((q) => {
    if (q.year !== year) return false;
    if (subject !== 'all' && q.subject !== subject) return false;
    return true;
  });

  let isFromStruggleHistory = false;
  let diagnosticNote = '';

  if (lowestTopics.length > 0 && lowestTopics.some((t) => t.accuracyRate < 100 || t.wrongCount > 0)) {
    isFromStruggleHistory = true;
    const lowestTopicNames = lowestTopics.map((t) => t.topic.toLowerCase());

    // 1. First priority: Questions where the student made mistakes in these lowest-scoring topics
    lowestTopics.forEach((topicSummary) => {
      topicSummary.mistakeQuestionIds.forEach((mistakeId) => {
        const foundQ = candidateBank.find((q) => q.id === mistakeId);
        if (foundQ && !addedIds.has(foundQ.id)) {
          matchedQuestions.push(foundQ);
          addedIds.add(foundQ.id);
        }
      });
    });

    // 2. Second priority: Additional questions from the same struggling topics in the question bank
    candidateBank.forEach((q) => {
      if (addedIds.has(q.id)) return;
      const qTopicLower = q.topic.toLowerCase();
      const matchesLowest = lowestTopicNames.some(
        (name) => qTopicLower.includes(name) || name.includes(qTopicLower)
      );

      if (matchesLowest) {
        matchedQuestions.push(q);
        addedIds.add(q.id);
      }
    });

    diagnosticNote = `Menumpukan pada ${lowestTopics.length} topik terendah (${lowestTopics.map((t) => t.topic).join(', ')}) berdasarkan 20% skor terendah sejarah anda.`;
  }

  // 3. Fallback / Fill up: If not enough questions matched, draw high-yield KBAT and foundational questions
  if (matchedQuestions.length < count) {
    const remaining = candidateBank.filter((q) => !addedIds.has(q.id));
    // Sort so KBAT or challenging questions are preferred
    const sortedRemaining = [...remaining].sort((a, b) => {
      const aKbat = a.difficulty.includes('KBAT') ? 1 : 0;
      const bKbat = b.difficulty.includes('KBAT') ? 1 : 0;
      return bKbat - aKbat;
    });

    for (const q of sortedRemaining) {
      if (matchedQuestions.length >= count) break;
      matchedQuestions.push(q);
      addedIds.add(q.id);
    }

    if (!isFromStruggleHistory) {
      diagnosticNote = totalTopicsAttempted > 0
        ? 'Prestasi anda cemerlang! Set soalan pengukuhan dan KBAT dipilih untuk mencabar potensi anda.'
        : 'Set Diagnostik Awal: Jawab soalan ini untuk membolehkan sistem mengesan topik kelemahan anda secara pintar.';
    }
  }

  // Shuffle selected questions slightly while preserving struggle priority
  const finalQuestions = matchedQuestions.slice(0, count);

  return {
    questions: finalQuestions,
    targetTopics: lowestTopics,
    struggleTopicsCount: lowestTopics.length,
    totalTopicsInHistory: totalTopicsAttempted,
    isFromStruggleHistory,
    diagnosticNote,
  };
}

/**
 * Default sample attempt history to demonstrate intelligent adaptive surfacing
 */
function getDefaultDiagnosticSeedHistory(): StudentAttemptRecord[] {
  const now = Date.now();
  const hour = 3600 * 1000;

  return [
    // Year 2 sample struggle: Masa dan Waktu & Wang
    {
      studentId: 'active_guest_student',
      questionId: 't2-mat-4',
      year: 2,
      subject: 'Matematik',
      topic: 'Masa dan Waktu',
      difficulty: 'Sederhana',
      isCorrect: false,
      selectedOption: 'A',
      correctAnswer: 'B',
      timestamp: now - 3 * hour,
    },
    {
      studentId: 'active_guest_student',
      questionId: 't2-mat-3',
      year: 2,
      subject: 'Matematik',
      topic: 'Wang hingga RM100',
      difficulty: 'Mudah',
      isCorrect: false,
      selectedOption: 'C',
      correctAnswer: 'B',
      timestamp: now - 4 * hour,
    },
    {
      studentId: 'active_guest_student',
      questionId: 't2-mat-1',
      year: 2,
      subject: 'Matematik',
      topic: 'Nombor hingga 1,000',
      difficulty: 'Mudah',
      isCorrect: true,
      selectedOption: 'A',
      correctAnswer: 'A',
      timestamp: now - 5 * hour,
    },
    {
      studentId: 'active_guest_student',
      questionId: 't2-mat-2',
      year: 2,
      subject: 'Matematik',
      topic: 'Operasi Asas (Tambah, Tolak, Darab, Bahagi)',
      difficulty: 'Mudah',
      isCorrect: true,
      selectedOption: 'A',
      correctAnswer: 'A',
      timestamp: now - 6 * hour,
    },
    // Year 4 sample struggle: Koordinat & Sifat Cahaya
    {
      studentId: 'active_guest_student',
      questionId: 't4-m-kbat-5',
      year: 4,
      subject: 'Matematik',
      topic: 'Koordinat Suku Pertama, Nisbah & Kadaran',
      difficulty: 'KBAT (Aras Sederhana)',
      isCorrect: false,
      selectedOption: 'C',
      correctAnswer: 'B',
      timestamp: now - 2 * hour,
    },
    {
      studentId: 'active_guest_student',
      questionId: 't4-sn-5',
      year: 4,
      subject: 'Sains',
      topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
      difficulty: 'Sederhana',
      isCorrect: false,
      selectedOption: 'A',
      correctAnswer: 'B',
      timestamp: now - 1 * hour,
    },
    // Year 5 sample struggle: Pecahan & Sistem Peredaran Darah
    {
      studentId: 'active_guest_student',
      questionId: 't5-mat-2',
      year: 5,
      subject: 'Matematik',
      topic: 'Pecahan, Perpuluhan dan Peratus',
      difficulty: 'KBAT (Aras Sederhana)',
      isCorrect: false,
      selectedOption: 'C',
      correctAnswer: 'A',
      timestamp: now - 1 * hour,
    },
    {
      studentId: 'active_guest_student',
      questionId: 't5-sn-2',
      year: 5,
      subject: 'Sains',
      topic: 'Manusia: Sistem Rangka & Peredaran Darah',
      difficulty: 'Sederhana',
      isCorrect: false,
      selectedOption: 'B',
      correctAnswer: 'A',
      timestamp: now - 2 * hour,
    },
  ];
}
