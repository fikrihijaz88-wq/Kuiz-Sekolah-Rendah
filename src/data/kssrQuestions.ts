import { QuizQuestion, QuizTopicMeta } from '../types';
import { MATEMATIK_TAHUN_2_QUESTIONS } from './matematikTahun2';
import { ENGLISH_TAHUN_2_QUESTIONS } from './englishTahun2';
import { MATEMATIK_TAHUN_4_KBAT_QUESTIONS } from './matematikTahun4Kbat';
import { ENGLISH_TAHUN_4_QUESTIONS } from './englishTahun4';

export const KSSR_TOPICS: QuizTopicMeta[] = [
  // ==========================================
  // TAHUN 2 - MATEMATIK
  // ==========================================
  {
    id: 't2-mat-nombor',
    name: 'Nombor hingga 1,000',
    year: 2,
    subject: 'Matematik',
    description: 'Nilai tempat, nilai digit, susunan tertib dan membundar nombor hingga 1,000.',
    iconName: 'Hash',
  },
  {
    id: 't2-mat-operasi',
    name: 'Operasi Asas (Tambah, Tolak, Darab, Bahagi)',
    year: 2,
    subject: 'Matematik',
    description: 'Tambah tolak hingga 1,000, serta asas sifir darab dan bahagi.',
    iconName: 'Calculator',
  },
  {
    id: 't2-mat-wang',
    name: 'Wang hingga RM100',
    year: 2,
    subject: 'Matematik',
    description: 'Kenal pasti nilai wang kertas & syiling, tambah dan tolak nilai wang.',
    iconName: 'Coins',
  },
  {
    id: 't2-mat-masa',
    name: 'Masa dan Waktu',
    year: 2,
    subject: 'Matematik',
    description: 'Membaca muka jam, pecahan jam (setengah, suku), dan perkaitan hari.',
    iconName: 'Clock',
  },
  {
    id: 't2-mat-pecahan',
    name: 'Pecahan Mudah',
    year: 2,
    subject: 'Matematik',
    description: 'Konsep pecahan wajar satu perdua, satu pertiga, satu perempat.',
    iconName: 'PieChart',
  },

  // ==========================================
  // TAHUN 2 - BAHASA INGGERIS
  // ==========================================
  {
    id: 't2-bi-vocab',
    name: 'Vocabulary (Animals, School, Family, Food)',
    year: 2,
    subject: 'Bahasa Inggeris',
    description: 'Essential CEFR A1 words for animals, classroom objects, family and food.',
    iconName: 'BookOpen',
  },
  {
    id: 't2-bi-grammar',
    name: 'Present Tense, Pronouns & Prepositions',
    year: 2,
    subject: 'Bahasa Inggeris',
    description: 'Simple sentences with he/she/it, in/on/under, and basic verbs.',
    iconName: 'Sparkles',
  },
  {
    id: 't2-bi-phonics',
    name: 'Basic Phonics & Spelling',
    year: 2,
    subject: 'Bahasa Inggeris',
    description: 'Letter sound blending, vowel digraphs, and rhyming words.',
    iconName: 'SpellCheck',
  },

  // ==========================================
  // TAHUN 4 - MATEMATIK
  // ==========================================
  {
    id: 't4-mat-nombor',
    name: 'Nombor hingga 100,000',
    year: 4,
    subject: 'Matematik',
    description: 'Membaca, menulis nilai digit, cerakinkan dan membundar hingga puluh ribu terdekat.',
    iconName: 'TrendingUp',
  },
  {
    id: 't4-mat-pecahan',
    name: 'Pecahan, Perpuluhan & Peratus',
    year: 4,
    subject: 'Matematik',
    description: 'Pecahan tak wajar, nombor bercampur, operasi perpuluhan dan penukaran peratus.',
    iconName: 'Percent',
  },
  {
    id: 't4-mat-wang',
    name: 'Wang hingga RM100,000 & Pengurusan Wang',
    year: 4,
    subject: 'Matematik',
    description: 'Operasi bergabung nilai wang, simpanan, faedah mudah, dan perancangan belanja.',
    iconName: 'Banknote',
  },
  {
    id: 't4-mat-masa',
    name: 'Masa, Waktu & Perkaitan Abad/Dekad',
    year: 4,
    subject: 'Matematik',
    description: 'Sistem 12 jam & 24 jam, tempoh masa, serta dekad, abad dan tahun.',
    iconName: 'Hourglass',
  },
  {
    id: 't4-mat-sukatan',
    name: 'Panjang, Jisim & Isi Padu Cecair',
    year: 4,
    subject: 'Matematik',
    description: 'Penukaran unit km-m, kg-g, l-ml serta penyelesaian masalah sukatan.',
    iconName: 'Scale',
  },
  {
    id: 't4-mat-koordinat',
    name: 'Koordinat, Nisbah & Kadaran',
    year: 4,
    subject: 'Matematik',
    description: 'Kedudukan pada sukuan pertama paksi-x dan paksi-y serta nisbah 1:1 hingga 1:10.',
    iconName: 'Compass',
  },

  // ==========================================
  // TAHUN 4 - BAHASA INGGERIS
  // ==========================================
  {
    id: 't4-bi-past-tense',
    name: 'Past Simple Tense (Regular & Irregular)',
    year: 4,
    subject: 'Bahasa Inggeris',
    description: 'CEFR A2 verbs in past form (went, saw, played, bought) and timeline contexts.',
    iconName: 'CalendarDays',
  },
  {
    id: 't4-bi-comparison',
    name: 'Comparatives & Superlatives',
    year: 4,
    subject: 'Bahasa Inggeris',
    description: 'Comparing objects and people (faster than, the biggest, more interesting).',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 't4-bi-modals-connectors',
    name: 'Modals & Sentence Connectors',
    year: 4,
    subject: 'Bahasa Inggeris',
    description: 'Using must, mustn\'t, should, because, so, and although in daily life.',
    iconName: 'Share2',
  },
  {
    id: 't4-bi-reading',
    name: 'Reading Comprehension (Passages)',
    year: 4,
    subject: 'Bahasa Inggeris',
    description: 'Get Smart Plus 4 themed texts on Malaysian culture, nature, and sports.',
    iconName: 'FileText',
  },
];

export const INITIAL_KSSR_QUESTIONS: QuizQuestion[] = [
  ...MATEMATIK_TAHUN_2_QUESTIONS,
  ...ENGLISH_TAHUN_2_QUESTIONS,
  ...MATEMATIK_TAHUN_4_KBAT_QUESTIONS,
  ...ENGLISH_TAHUN_4_QUESTIONS,
];
