export type YearLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type Subject =
  | 'Matematik'
  | 'Bahasa Inggeris'
  | 'Sains'
  | 'Pendidikan Islam'
  | 'Bahasa Melayu'
  | 'Bahasa Arab'
  | 'Bahasa Cina';

export type QuestionDifficulty =
  | 'Mudah'
  | 'Sederhana'
  | 'Sukar'
  | 'KBAT (Aras Rendah)'
  | 'KBAT (Aras Sederhana)'
  | 'KBAT (Aras Tinggi)'
  | 'KBAT (Aras Rendah-Sederhana)';

export interface QuizDiagram {
  title: string; // e.g., "Rajah 1: Susunan litar elektrik"
  type: string; // 'circuit' | 'life_cycle' | 'plant_growth' | 'plant_response' | 'human_breathing' | 'light_reflection' | 'shadow' | 'lever' | 'materials' | 'table_data' | 'custom_svg'
  caption?: string; // Sub-caption or observation hint
  svgContent?: string; // Optional direct custom inline SVG
  data?: Record<string, any>; // Parameterized diagram properties
}

export interface QuizQuestion {
  id: string;
  year: YearLevel;
  subject: Subject;
  topic: string;
  subtopic?: string;
  difficulty: QuestionDifficulty;
  stimulus?: string; // e.g. Reading passage, experiment context or scenario
  diagram?: QuizDiagram; // Scientific diagram or visual illustration
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Pedagogical explanation in standard Malay / English
  learningStandard?: string; // e.g., "SK 2.1 / SP 2.1.1" KSSR Semakan standard reference
  matriksSection?: string; // e.g., "Bahagian A", "Bahagian B", "Bahagian 1", etc.
  construct?: string; // e.g., "Pengetahuan Sistem Bahasa", "Kemahiran Membaca", "Menaakul", "Mengaplikasi"
  itemType?: string; // "OAP" | "OPB" | "SRT" | "SRTb" | "SRTd"
  marks?: number; // Marks allocated
}

export interface QuizBankPayload {
  curriculum: 'KSSR Semakan';
  year: YearLevel;
  subject: Subject;
  topic: string;
  totalQuestions: number;
  questions: QuizQuestion[];
}

export interface QuizTopicMeta {
  id: string;
  name: string;
  year: YearLevel;
  subject: Subject;
  description: string;
  iconName: string;
}

export interface QuizUserAnswer {
  questionId: string;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizState {
  currentIndex: number;
  answers: Record<string, QuizUserAnswer>;
  isCompleted: boolean;
  score: number;
  streak: number;
  maxStreak: number;
}

export type AchievementBadgeCategory = 'questions_count' | 'perfect_subject' | 'kbat' | 'mastery' | 'daily_streak';

export interface AchievementBadge {
  id: string;
  name: string;
  titleMs: string;
  description: string;
  category: AchievementBadgeCategory;
  iconName: string;
  requirementText: string;
  threshold?: number;
  subjectRequirement?: Subject;
  colorScheme: 'gold' | 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
  isUnlocked?: boolean;
  unlockedAt?: string;
  progressCurrent?: number;
  progressMax?: number;
}

export interface StudentProfile {
  id: string;
  name: string;
  className: string;
  year: YearLevel;
  avatarId: string;
  schoolName?: string;
  createdAt: string;
}

export interface StudentAchievementStats {
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalQuizzesCompleted: number;
  perfectQuizzesCount: number;
  perfectQuizzesBySubject: Record<Subject, number>;
  unlockedBadges: Record<string, string>; // badgeId -> ISO string date unlocked
}

export interface LeaderboardEntry {
  id: string;
  studentName: string;
  className: string;
  year: YearLevel;
  avatarId: string;
  schoolName?: string;
  totalScore: number;
  challengesCompleted: number;
  dailyStreak: number;
  quizzesCompleted: number;
  correctAnswers: number;
  totalQuestions: number;
  badgesCount: number;
  accuracyRate: number;
  rankTitle: string;
  isCurrentUser?: boolean;
}

export interface CashVoucherTier {
  id: string;
  title: string;
  amountRM: number;
  targetPoints: number;
  category: string;
  description: string;
  sponsor: string;
  validityDays: number;
  colorScheme: 'emerald' | 'blue' | 'purple' | 'amber';
}

export interface StudentVoucherClaim {
  id: string;
  voucherTierId: string;
  studentId: string;
  studentName: string;
  className: string;
  schoolName?: string;
  code: string;
  amountRM: number;
  unlockedAt: string;
  claimedAt?: string;
  isRedeemed: boolean;
  redeemedAt?: string;
}

export type QuizMode = 'practice' | 'daily' | 'adaptive' | 'matriks';

export interface MatriksPembelajaranSection {
  id: string; // e.g. 'bahagian-a', 'bahagian-1'
  sectionCode: string; // 'Bahagian A', 'Bahagian 1', etc.
  title: string; // e.g. 'Tatabahasa & Pemahaman Petikan'
  itemTypes: string[]; // ['OAP', 'OPB', 'SRTb']
  marks: number;
  questionCount: number;
  questionCountText: string; // '10 soalan (10 markah)'
  constructs: string[];
  description: string;
}

export interface MatriksPembelajaranSpec {
  subject: Subject;
  year: YearLevel;
  instrumentType: string;
  totalMarks: number; // 50
  timeLimitMinutes: number; // 75 mins (1 Jam 15 Minit)
  difficultyRatio: string; // 'Rendah : Sederhana : Tinggi (5 : 3 : 2)'
  scoringMethods: string[]; // ['Dikotomus', 'Analitikal', 'Holistik']
  constructs: string[];
  sections: MatriksPembelajaranSection[];
}

export interface StudentAttemptRecord {
  id?: string;
  studentId: string;
  questionId: string;
  year: YearLevel;
  subject: Subject;
  topic: string;
  subtopic?: string;
  difficulty: QuestionDifficulty;
  isCorrect: boolean;
  selectedOption: 'A' | 'B' | 'C' | 'D' | null;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  timestamp: number;
  timeSpentSeconds?: number;
}

export interface TopicPerformanceSummary {
  topic: string;
  subject: Subject;
  year: YearLevel;
  totalAttempts: number;
  correctCount: number;
  wrongCount: number;
  accuracyRate: number; // 0 - 100%
  lastAttempted: number;
  mistakeQuestionIds: string[];
  isLowestTwentyPercent?: boolean;
}

export interface AdaptiveReviewResult {
  questions: QuizQuestion[];
  targetTopics: TopicPerformanceSummary[];
  struggleTopicsCount: number;
  totalTopicsInHistory: number;
  isFromStruggleHistory: boolean;
  diagnosticNote: string;
}

