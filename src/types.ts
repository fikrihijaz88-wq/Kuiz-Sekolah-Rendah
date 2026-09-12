export type YearLevel = 2 | 4;
export type Subject = 'Matematik' | 'Bahasa Inggeris' | 'Sains' | 'Pendidikan Islam' | 'Bahasa Melayu';

export type QuestionDifficulty =
  | 'Mudah'
  | 'Sederhana'
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

export interface StudentAchievementStats {
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  totalQuizzesCompleted: number;
  perfectQuizzesCount: number;
  perfectQuizzesBySubject: Record<Subject, number>;
  unlockedBadges: Record<string, string>; // badgeId -> ISO string date unlocked
}

