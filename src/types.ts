export type YearLevel = 2 | 4;
export type Subject = 'Matematik' | 'Bahasa Inggeris';

export type QuestionDifficulty =
  | 'Mudah'
  | 'Sederhana'
  | 'KBAT (Aras Rendah)'
  | 'KBAT (Aras Sederhana)'
  | 'KBAT (Aras Tinggi)'
  | 'KBAT (Aras Rendah-Sederhana)';

export interface QuizQuestion {
  id: string;
  year: YearLevel;
  subject: Subject;
  topic: string;
  subtopic?: string;
  difficulty: QuestionDifficulty;
  stimulus?: string; // e.g. Reading passage or contextual story/dialogue
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Brief, encouraging pedagogical explanation
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
