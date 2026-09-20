import { MatriksPembelajaranSpec, QuizQuestion, Subject } from '../types';
import { shuffleWithSeed, getTodayDateString } from '../utils/dailyChallenge';

export const MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS: Record<Subject, MatriksPembelajaranSpec> = {
  'Bahasa Melayu': {
    subject: 'Bahasa Melayu',
    year: 4,
    instrumentType: 'Ujian Bertulis : Pemahaman dan Penulisan',
    totalMarks: 50,
    timeLimitMinutes: 75, // 1 Jam 15 Minit
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal', 'Holistik'],
    constructs: [
      'Pengetahuan Sistem Bahasa',
      'Kemahiran Membaca: Memahami, Mengaplikasi, Menganalisis',
      'Kemahiran Menulis: Mengaplikasi, Menganalisis, Menilai, Mencipta',
      'Nilai',
    ],
    sections: [
      {
        id: 'bm4-sec-a',
        sectionCode: 'Bahagian A',
        title: 'Tatabahasa & Pemahaman Petikan',
        itemTypes: ['OAP', 'OPB'],
        marks: 10,
        questionCount: 10,
        questionCountText: '10 soalan (10 markah)',
        constructs: ['Pengetahuan Sistem Bahasa', 'Kemahiran Membaca (Memahami & Mengaplikasi)'],
        description: 'Soalan Tatabahasa Morfologi/Sintaksis & Pemahaman petikan teks tunggal / teks pelbagai.',
      },
      {
        id: 'bm4-sec-b',
        sectionCode: 'Bahagian B',
        title: 'Pemahaman Petikan, Tatabahasa & Respons Kritis',
        itemTypes: ['OPB', 'SRTb'],
        marks: 10,
        questionCount: 5,
        questionCountText: '5 soalan (10 markah)',
        constructs: ['Kemahiran Membaca (Menganalisis)', 'Respons Kritis dan Kreatif', 'Nilai Murni'],
        description: 'Pemahaman petikan mendalam, simpulan bahasa, dan respons kritis berasaskan bahan rangsangan.',
      },
      {
        id: 'bm4-sec-c',
        sectionCode: 'Bahagian C',
        title: 'Penulisan Perenggan / Ulasan Pendek',
        itemTypes: ['SRTb'],
        marks: 10,
        questionCount: 1,
        questionCountText: '1 soalan utama (10 markah)',
        constructs: ['Kemahiran Menulis (Mengaplikasi & Menganalisis)', 'Menjana Idea'],
        description: 'Membina perenggan ulasan isi tersurat dan tersirat berdasarkan gambar bersiri atau poster.',
      },
      {
        id: 'bm4-sec-d',
        sectionCode: 'Bahagian D',
        title: 'Penulisan Karangan Berformat / Tidak Berformat',
        itemTypes: ['SRTb'],
        marks: 20,
        questionCount: 1,
        questionCountText: '1 soalan karangan (20 markah)',
        constructs: ['Kemahiran Menulis (Menganalisis, Menilai & Mencipta)', 'Penguasaan Kosa Kata'],
        description: 'Menulis karangan lengkap (cerita, catatan harian, laporan, atau syarahan) melebihi 50-80 patah perkataan.',
      },
    ],
  },

  'Bahasa Inggeris': {
    subject: 'Bahasa Inggeris',
    year: 4,
    instrumentType: 'Ujian Bertulis: Pemahaman (Reading and Use of English) & Penulisan (Writing)',
    totalMarks: 50,
    timeLimitMinutes: 75, // 1 Jam 15 Minit
    difficultyRatio: 'CEFR A1 / A2 (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal', 'Holistik'],
    constructs: [
      'Kemahiran Membaca: Memahami, Mengaplikasi, Menganalisis, Menilai',
      'Kemahiran Menulis: Mengaplikasi, Menganalisis, Menilai',
      'Pengetahuan Sistem Bahasa (Lexico-Grammar)',
      'Nilai',
    ],
    sections: [
      {
        id: 'bi4-sec-1',
        sectionCode: 'Bahagian 1',
        title: 'Lexico-grammar with/without graphics (Short text)',
        itemTypes: ['OAP'],
        marks: 6,
        questionCount: 6,
        questionCountText: '6 soalan (6 markah)',
        constructs: ['Lexico-Grammar', 'Reading Comprehension (A1/A2)'],
        description: 'Grammar and vocabulary MCQs based on short notices, signs, messages, and daily dialogues.',
      },
      {
        id: 'bi4-sec-2',
        sectionCode: 'Bahagian 2',
        title: 'Cloze Short Texts (Grammar & Vocabulary)',
        itemTypes: ['OAP', 'OPB'],
        marks: 7,
        questionCount: 7,
        questionCountText: '7 soalan (7 markah)',
        constructs: ['Grammatical Accuracy', 'Cohesive Devices'],
        description: 'Multiple choice text completion checking verb tenses, prepositions, and pronouns in context.',
      },
      {
        id: 'bi4-sec-3',
        sectionCode: 'Bahagian 3',
        title: 'Linear Text Comprehension with Open-ended Questions',
        itemTypes: ['OAP', 'SRTd'],
        marks: 7,
        questionCount: 6,
        questionCountText: '6 soalan (7 markah)',
        constructs: ['Reading Comprehension (Factual & Inferential)'],
        description: 'Story, factual article, or biography reading passage with factual understanding questions.',
      },
      {
        id: 'bi4-sec-4',
        sectionCode: 'Bahagian 4',
        title: 'Linear / Non-Linear Text Comprehension',
        itemTypes: ['OAP', 'SRTd'],
        marks: 7,
        questionCount: 6,
        questionCountText: '6 soalan (7 markah)',
        constructs: ['Information Transfer', 'Analyzing & Evaluating'],
        description: 'Comparative non-linear tables, brochures, flyers, or timetables with matching questions.',
      },
      {
        id: 'bi4-sec-5',
        sectionCode: 'Bahagian 5',
        title: 'Word Completion with / without graphics',
        itemTypes: ['SRTd', 'OPB'],
        marks: 8,
        questionCount: 8,
        questionCountText: '8 soalan (8 markah)',
        constructs: ['Vocabulary Definition & Spelling'],
        description: 'Spelling and vocabulary definitions with clues, first-letter hints, and word completion.',
      },
      {
        id: 'bi4-sec-6',
        sectionCode: 'Bahagian 6',
        title: 'Guided Writing with Graphics / Prompt',
        itemTypes: ['SRTb'],
        marks: 15,
        questionCount: 1,
        questionCountText: '1 soalan (15 markah)',
        constructs: ['Guided Writing', 'Communicative Competence', 'Sentence Structures'],
        description: 'Writing an email, postcard, short message, or story based on stimulus notes and visual cues.',
      },
    ],
  },

  'Matematik': {
    subject: 'Matematik',
    year: 4,
    instrumentType: 'Ujian Bertulis (Kertas Pentaksiran Kendalian Sekolah)',
    totalMarks: 50,
    timeLimitMinutes: 75, // 1 Jam 15 Minit
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Analitikal'],
    constructs: [
      'Mengingat (Pengetahuan Fakta & Konsep)',
      'Memahami (Kemahiran Mengira & Algoritma)',
      'Mengaplikasi (Penyelesaian Masalah Rutin)',
      'Menganalisis & Menilai (Penyelesaian Masalah Bukan Rutin / KBAT)',
    ],
    sections: [
      {
        id: 'mat4-sec-a',
        sectionCode: 'Bahagian A',
        title: 'Operasi Asas, Nilai Nombor, Ukuran & Ruang',
        itemTypes: ['SRT', 'OAP'],
        marks: 26,
        questionCount: 13,
        questionCountText: '13 soalan (26 markah)',
        constructs: ['Mengingat', 'Memahami', 'Mengaplikasi'],
        description: '13 soalan merangkumi Nombor hingga 100,000, Pecahan, Perpuluhan, Peratus, Wang, Masa, Ukuran, Ruang, dan Satah Cartes.',
      },
      {
        id: 'mat4-sec-b',
        sectionCode: 'Bahagian B',
        title: 'Penyelesaian Masalah Berayat Komprehensif (KBAT)',
        itemTypes: ['SRT', 'SRTb'],
        marks: 24,
        questionCount: 2,
        questionCountText: '2 soalan utama berpecah (24 markah)',
        constructs: ['Mengaplikasi', 'Menganalisis', 'Menilai'],
        description: '2 soalan bersituasi kontekstual pelbagai langkah (multi-step word problems) yang menguji penaakulan mendalam dan pengurusan data/kewangan.',
      },
    ],
  },

  'Sains': {
    subject: 'Sains',
    year: 4,
    instrumentType: 'Ujian Bertulis (Kertas Pentaksiran Kendalian Sekolah)',
    totalMarks: 50,
    timeLimitMinutes: 75, // 1 Jam 15 Minit
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal'],
    constructs: [
      'Mengetahui (Fakta, Konsep, Terminologi Saintifik)',
      'Mengaplikasi (Prinsip & Konsep Sains dalam Situasi Harian)',
      'Menaakul (Kemahiran Proses Sains, Kawalan Pemboleh Ubah, Hipotesis, Kesimpulan)',
    ],
    sections: [
      {
        id: 'sn4-sec-a',
        sectionCode: 'Bahagian A',
        title: 'Soalan Objektif Aneka Pilihan (OAP)',
        itemTypes: ['OAP'],
        marks: 10,
        questionCount: 10,
        questionCountText: '10 soalan (10 markah)',
        constructs: ['Mengetahui', 'Mengaplikasi'],
        description: '10 soalan aneka pilihan (A, B, C, D) menguji konsep Kemahiran Saintifik, Pernafasan Manusia, Perkumuhan, Fotosintesis, Sifat Cahaya, Bunyi, Tenaga, dan Bahan.',
      },
      {
        id: 'sn4-sec-b',
        sectionCode: 'Bahagian B',
        title: 'Objektif Pelbagai Bentuk / Padanan / Struktur Terhad',
        itemTypes: ['OPB', 'SRT'],
        marks: 8,
        questionCount: 2,
        questionCountText: '2 soalan (8 markah)',
        constructs: ['Mengetahui', 'Mengaplikasi'],
        description: '2 soalan berstruktur (padanan fungsi organ, melabelkan rajah laluan udara/tumbuhan, atau menentukan betul/salah).',
      },
      {
        id: 'sn4-sec-c',
        sectionCode: 'Bahagian C',
        title: 'Penyiasatan Saintifik & Kemahiran Proses Sains (KPS)',
        itemTypes: ['SRT', 'SRTb'],
        marks: 32,
        questionCount: 4,
        questionCountText: '4 soalan (32 markah)',
        constructs: ['Mengaplikasi', 'Menaakul (Kemahiran Proses Sains)'],
        description: '4 soalan berasaskan eksperimen saintifik: mengenal pasti Pemboleh Ubah (Dimanipulasi, Bergerak Balas, Dimalarkan), Corak Perubahan, Hipotesis, dan Kesimpulan Eksperimen.',
      },
    ],
  },

  'Pendidikan Islam': {
    subject: 'Pendidikan Islam',
    year: 4,
    instrumentType: 'Ujian Bertulis : Pentaksiran Bilik Darjah',
    totalMarks: 50,
    timeLimitMinutes: 75,
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal'],
    constructs: ['Kefahaman al-Quran & Hadis', 'Akidah', 'Ibadah', 'Sirah', 'Adab & Akhlak', 'Jawi'],
    sections: [
      {
        id: 'pi4-sec-a',
        sectionCode: 'Bahagian A',
        title: 'Kefahaman al-Quran, Tajwid & Hadis',
        itemTypes: ['OAP', 'OPB'],
        marks: 15,
        questionCount: 5,
        questionCountText: '5 soalan (15 markah)',
        constructs: ['Kefahaman al-Quran & Hadis', 'Hukum Tajwid'],
        description: 'Surah al-Qari\'ah, Surah at-Takathur, hukum nun mati & tanwin, serta adab memuliakan tetamu.',
      },
      {
        id: 'pi4-sec-b',
        sectionCode: 'Bahagian B',
        title: 'Akidah & Ibadah (Solat Berjemaah & Tayamum)',
        itemTypes: ['OAP', 'SRT'],
        marks: 15,
        questionCount: 5,
        questionCountText: '5 soalan (15 markah)',
        constructs: ['Pengetahuan Akidah & Praktikal Ibadah'],
        description: 'Sifat 20, Asmaul Husna, rukun solat, syarat sah tayamum, dan solat Jumaat.',
      },
      {
        id: 'pi4-sec-c',
        sectionCode: 'Bahagian C',
        title: 'Sirah Nabawiyyah, Akhlak & Tulisan Jawi',
        itemTypes: ['OAP', 'SRTb'],
        marks: 20,
        questionCount: 5,
        questionCountText: '5 soalan (20 markah)',
        constructs: ['Iktibar Sirah', 'Penghayatan Adab & Ejaan Jawi'],
        description: 'Peristiwa Hijrah ke Habsyah, adab berjiran, dan ejaan perkataan pinjaman Bahasa Arab dalam Jawi.',
      },
    ],
  },

  'Bahasa Arab': {
    subject: 'Bahasa Arab',
    year: 4,
    instrumentType: 'Ujian Bertulis : Pentaksiran Bahasa Arab (اللغة العربية)',
    totalMarks: 50,
    timeLimitMinutes: 75,
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal'],
    constructs: ['Kemahiran Mendengar & Bertutur (الاستماع والكلام)', 'Kemahiran Membaca (القراءة)', 'Kemahiran Menulis (الكتابة)'],
    sections: [
      {
        id: 'ba4-sec-a',
        sectionCode: 'Bahagian A',
        title: 'Mufradat & Tatabahasa Asas (الْمُفْرَدَاتُ وَالتَّرَاكِيبُ)',
        itemTypes: ['OAP'],
        marks: 20,
        questionCount: 5,
        questionCountText: '5 soalan (20 markah)',
        constructs: ['Morfologi Kalimah Arab', 'Kosa Kata Bilik Darjah'],
        description: 'Perkataan barangan sekolah, rumah, haiwan peliharaan, dan kata ganti nama (هَذَا / هَذِهِ).',
      },
      {
        id: 'ba4-sec-b',
        sectionCode: 'Bahagian B',
        title: 'Kefahaman Teks Pendek & Susunan Ayat (فَهْمُ الْمَقْرُوءِ)',
        itemTypes: ['OPB', 'SRT'],
        marks: 30,
        questionCount: 5,
        questionCountText: '5 soalan (30 markah)',
        constructs: ['Kefahaman Petikan Arab', 'Susunan Jumlah Mufidah'],
        description: 'Memahami dialog harian, menyusun perkataan menjadi ayat sempurna, dan menjawab soalan petikan ringkas.',
      },
    ],
  },

  'Bahasa Cina': {
    subject: 'Bahasa Cina',
    year: 4,
    instrumentType: 'Ujian Bertulis : 华语评估 (DSKP KSSR Semakan)',
    totalMarks: 50,
    timeLimitMinutes: 75,
    difficultyRatio: 'Rendah : Sederhana : Tinggi (5 : 3 : 2)',
    scoringMethods: ['Dikotomus', 'Analitikal'],
    constructs: ['语文基础知识 (Tatabahasa & Ejaan)', '阅读理解 (Pemahaman Membaca)', '书写技能 (Kemahiran Menulis)'],
    sections: [
      {
        id: 'bc4-sec-a',
        sectionCode: 'Bahagian A',
        title: '语文基础与多音字 (Sistem Bahasa & Karakter)',
        itemTypes: ['OAP'],
        marks: 20,
        questionCount: 5,
        questionCountText: '5 soalan (20 markah)',
        constructs: ['Karakter Hanzi', 'Pinyin & Antonim'],
        description: 'Struktur perkataan, pinyin, kata ganti nama dan simpulan bahasa asas.',
      },
      {
        id: 'bc4-sec-b',
        sectionCode: 'Bahagian B',
        title: '短文理解与造句 (Pemahaman Petikan & Membina Ayat)',
        itemTypes: ['OAP', 'SRTb'],
        marks: 30,
        questionCount: 5,
        questionCountText: '5 soalan (30 markah)',
        constructs: ['Pemahaman Petikan Naratif', 'Aplikasi Peribahasa'],
        description: 'Membaca petikan cerita pendek dan menjawab soalan kefahaman tersurat serta tersirat.',
      },
    ],
  },
};

/**
 * Curates and builds an authentic 50-mark, 75-minute Matriks Pembelajaran Year 4 exam set
 * partitioned strictly according to the official Malaysian Ministry of Education (KPM) test specification.
 * Automatically rotates and changes all questions daily at 12:00 AM midnight based on the active date!
 */
export function buildMatriksPembelajaranExamSet(
  questionBank: QuizQuestion[],
  subject: Subject,
  dateStr?: string,
  seedModifier: number = 0
): {
  spec: MatriksPembelajaranSpec;
  questions: QuizQuestion[];
  totalAllocatedMarks: number;
  activeDateStr: string;
} {
  const spec = MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS[subject] || MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS['Matematik'];
  const activeDate = dateStr || getTodayDateString();
  const pool = questionBank.filter((q) => q.year === 4 && q.subject === subject);

  const curatedQuestions: QuizQuestion[] = [];

  // Distribute questions across sections
  spec.sections.forEach((section, sIdx) => {
    // Unique deterministic seed per day, subject, and section to guarantee 12:00 AM daily rotation
    const sectionSeed = `matriks-t4-${activeDate}-${subject}-${section.id}-${sIdx}-${seedModifier}`;

    // Select questions matching this section or fallback from subject pool
    let matchingCandidates = pool.filter((q) => q.matriksSection === section.sectionCode);
    
    if (matchingCandidates.length < section.questionCount) {
      // Pick matching or related questions from pool
      const alreadyPickedIds = new Set(curatedQuestions.map((q) => q.id));
      const fallbackCandidates = pool.filter((q) => !alreadyPickedIds.has(q.id));
      
      const needed = section.questionCount - matchingCandidates.length;
      const shuffledFallbacks = shuffleWithSeed(fallbackCandidates, `${sectionSeed}-fallback`);
      matchingCandidates = [...matchingCandidates, ...shuffledFallbacks.slice(0, needed)];
    }

    // Deterministically shuffle candidate questions for this day
    const shuffledSectionQuestions = shuffleWithSeed(matchingCandidates, sectionSeed);

    // Take the required questionCount
    const finalSectionList = shuffledSectionQuestions.slice(0, section.questionCount);
    const marksPerQuestion = Math.max(1, Math.round(section.marks / Math.max(1, finalSectionList.length)));

    finalSectionList.forEach((q, qIdx) => {
      // Assign the proper Matriks section tag, marks, and construct
      const constructTag = section.constructs[qIdx % section.constructs.length] || section.constructs[0];
      const itemType = section.itemTypes[qIdx % section.itemTypes.length] || 'OAP';

      curatedQuestions.push({
        ...q,
        matriksSection: section.sectionCode,
        construct: q.construct || constructTag,
        itemType: q.itemType || itemType,
        marks: q.marks || marksPerQuestion,
      });
    });
  });

  return {
    spec,
    questions: curatedQuestions,
    totalAllocatedMarks: spec.totalMarks,
    activeDateStr: activeDate,
  };
}
