import { QuizQuestion, QuizTopicMeta } from '../types';
import { MATEMATIK_TAHUN_2_QUESTIONS } from './matematikTahun2';
import { SAINS_TAHUN_2_QUESTIONS } from './sainsTahun2';
import { ENGLISH_TAHUN_2_QUESTIONS } from './englishTahun2';
import { PENDIDIKAN_ISLAM_TAHUN_2_QUESTIONS } from './pendidikanIslamTahun2';
import { BAHASA_MELAYU_TAHUN_2_QUESTIONS } from './bahasaMelayuTahun2';
import { MATEMATIK_TAHUN_4_KBAT_QUESTIONS } from './matematikTahun4Kbat';
import { SAINS_TAHUN_4_QUESTIONS } from './sainsTahun4';
import { ENGLISH_TAHUN_4_QUESTIONS } from './englishTahun4';
import { PENDIDIKAN_ISLAM_TAHUN_4_QUESTIONS } from './pendidikanIslamTahun4';
import { BAHASA_MELAYU_TAHUN_4_QUESTIONS } from './bahasaMelayuTahun4';

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
  // TAHUN 2 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't2-sn-kemahiran',
    name: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    year: 2,
    subject: 'Sains',
    description: '5 deria pemerhatian, mengelas, mengukur, kemahiran manipulatif dan keselamatan bilik sains.',
    iconName: 'FlaskConical',
  },
  {
    id: 't2-sn-manusia',
    name: 'Manusia (Tumbesaran & Pewarisan)',
    year: 2,
    subject: 'Sains',
    description: 'Tumbesaran saiz, berat, tinggi dan ciri pewarisan ibu bapa seperti iris mata dan jenis rambut.',
    iconName: 'Users',
  },
  {
    id: 't2-sn-haiwan',
    name: 'Haiwan (Pembiakan & Kitar Hidup)',
    year: 2,
    subject: 'Sains',
    description: 'Haiwan bertelur vs melahirkan, bilangan anak, serta kitar hidup rama-rama dan katak.',
    iconName: 'Bug',
  },
  {
    id: 't2-sn-tumbuhan',
    name: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    year: 2,
    subject: 'Sains',
    description: 'Keperluan asas percambahan biji benih, urutan tumbesaran pokok dan keperluan asas tumbuhan.',
    iconName: 'Sprout',
  },
  {
    id: 't2-sn-terang-gelap',
    name: 'Terang, Gelap & Bayang-bayang',
    year: 2,
    subject: 'Sains',
    description: 'Sumber cahaya semulajadi dan buatan, pembentukan bayang-bayang, bahan legap vs lut sinar.',
    iconName: 'Sun',
  },
  {
    id: 't2-sn-elektrik',
    name: 'Elektrik (Komponen Litar & Konduktor)',
    year: 2,
    subject: 'Sains',
    description: 'Sel kering, mentol, suis, wayar, fungsi komponen, litar lengkap dan bahan konduktor/penebat.',
    iconName: 'Zap',
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
  // TAHUN 2 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't2-pi-quran-tajwid',
    name: 'Al-Quran & Tajwid (Huruf Hijaiyyah & Surah Pilihan)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Hukum Mad Asli, huruf berbaris sukun/syaddah, serta kefahaman Surah An-Nas, Al-Falaq & Al-Ikhlas.',
    iconName: 'BookOpen',
  },
  {
    id: 't2-pi-akidah',
    name: 'Akidah (Rukun Iman, Rukun Islam & Sifat Allah)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Konsep 6 Rukun Iman, 5 Rukun Islam, serta sifat Allah Al-Ahad (Esa) dan As-Samad.',
    iconName: 'HeartHandshake',
  },
  {
    id: 't2-pi-ibadah',
    name: 'Ibadah (Wuduk, Bersuci & Solat Fardhu)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Rukun & sunat wuduk, cara bersuci (istinjak), waktu solat fardhu 5 waktu serta bacaan rukun solat.',
    iconName: 'Sparkles',
  },
  {
    id: 't2-pi-sirah-akhlak',
    name: 'Sirah & Akhlak (Kelahiran Nabi Muhammad SAW & Adab Harian)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Kelahiran baginda Nabi SAW, salasilah keluarga, gelaran Al-Amin, adab makan, masuk tandas dan ucapan salam.',
    iconName: 'Users',
  },
  {
    id: 't2-pi-jawi',
    name: 'Pelajaran Jawi (Suku Kata Terbuka, Tertutup & Diftong)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Vokal jawi (Alif, Wau, Ya), suku kata terbuka (KVKV), suku kata tertutup, serta diftong ai, au dan oi.',
    iconName: 'PenTool',
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
  // TAHUN 4 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't4-sn-kemahiran',
    name: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    year: 4,
    subject: 'Sains',
    description: 'Pemboleh ubah dimanipulasi, bergerak balas dan dimalarkan, membuat hipotesis serta mentafsir data.',
    iconName: 'Microscope',
  },
  {
    id: 't4-sn-manusia',
    name: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    year: 4,
    subject: 'Sains',
    description: 'Organ pernafasan (peparu/trakea), kadar pernafasan, organ perkumuhan (ginjal/kulit) dan gerak balas rangsangan.',
    iconName: 'HeartPulse',
  },
  {
    id: 't4-sn-haiwan',
    name: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    year: 4,
    subject: 'Sains',
    description: 'Organ pernafasan (insang, peparu, spirakel, kulit lembap) dan 5 kumpulan haiwan vertebrata.',
    iconName: 'Fish',
  },
  {
    id: 't4-sn-tumbuhan',
    name: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    year: 4,
    subject: 'Sains',
    description: 'Gerak balas fototropisme, geotropisme, hidrotropisme, serta keperluan dan hasil fotosintesis (kanji).',
    iconName: 'Leaf',
  },
  {
    id: 't4-sn-sifat-cahaya',
    name: 'Sifat Cahaya (Pantulan & Pembiasan)',
    year: 4,
    subject: 'Sains',
    description: 'Cahaya bergerak lurus, hukum pantulan cahaya, aplikasi periskop, dan pembiasan cahaya.',
    iconName: 'Sparkle',
  },
  {
    id: 't4-sn-tenaga-mesin',
    name: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    year: 4,
    subject: 'Sains',
    description: 'Bentuk tenaga dan perubahannya, sumber boleh dibaharui, serta sistem tuas (beban, fulkrum, daya).',
    iconName: 'Wrench',
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

  // ==========================================
  // TAHUN 4 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't4-pi-quran-tajwid',
    name: 'Al-Quran & Tajwid (Hukum Nun Sakinah & Surah Pilihan)',
    year: 4,
    subject: 'Pendidikan Islam',
    description: 'Hukum Nun Sakinah & Tanwin (Izhar, Idgham, Iqlab, Ikhfa\') serta tadabbur Surah Al-Qadr & At-Tin.',
    iconName: 'BookOpen',
  },
  {
    id: 't4-pi-akidah',
    name: 'Akidah (Hari Kiamat & Sifat Al-Adl serta Al-Alim)',
    year: 4,
    subject: 'Pendidikan Islam',
    description: 'Pengertian Hari Kiamat, tanda-tanda kiamat, alam barzakh, mizan, titian sirat serta sifat Allah Al-Adl dan Al-Alim.',
    iconName: 'Sparkles',
  },
  {
    id: 't4-pi-ibadah',
    name: 'Ibadah (Mandi Wajib, Solat Jumaat & Batal Solat)',
    year: 4,
    subject: 'Pendidikan Islam',
    description: 'Sebab, rukun dan adab mandi wajib, fardhu ain solat Jumaat, amalan sunat Jumaat dan perkara membatalkan solat.',
    iconName: 'ShieldCheck',
  },
  {
    id: 't4-pi-sirah-akhlak',
    name: 'Sirah & Akhlak (Peristiwa Hijrah & Adab Kemasyarakatan)',
    year: 4,
    subject: 'Pendidikan Islam',
    description: 'Faktor & kronologi Hijrah ke Madinah, pengorbanan sahabat, Piagam Madinah, adab berjiran, ziarah pesakit dan jenazah.',
    iconName: 'Users',
  },
  {
    id: 't4-pi-jawi',
    name: 'Pelajaran Jawi (Kata Pinjaman, Imbuhan & Ayat Tradisi)',
    year: 4,
    subject: 'Pendidikan Islam',
    description: 'Ejaan kata serapan Inggeris & Arab, imbuhan awalan/akhiran/apitan, serta perkataan tradisi dan mutiara kata.',
    iconName: 'PenTool',
  },
  // ==========================================
  // TAHUN 2 - BAHASA MELAYU (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't2-bm-golongan-kata',
    name: 'Golongan Kata & Tatabahasa Asas',
    year: 2,
    subject: 'Bahasa Melayu',
    description: 'Kata nama am, kata nama khas, kata ganti nama diri, kata kerja aktif/pasif, dan pelbagai jenis kata adjektif.',
    iconName: 'BookOpen',
  },
  {
    id: 't2-bm-kata-tugas',
    name: 'Kata Tugas & Penjodoh Bilangan',
    year: 2,
    subject: 'Bahasa Melayu',
    description: 'Penjodoh bilangan benda/haiwan, kata hubung gabungan, kata sendi nama, kata arah, kata tanya dan kata perintah.',
    iconName: 'Layers',
  },
  {
    id: 't2-bm-imbuhan',
    name: 'Imbuhan & Pembentukan Kata',
    year: 2,
    subject: 'Bahasa Melayu',
    description: 'Imbuhan awalan (meN-, ber-, ter-, di-), imbuhan akhiran (-an, -kan), kata ganda penuh dan kata majmuk bebas.',
    iconName: 'Sparkles',
  },
  {
    id: 't2-bm-pemahaman',
    name: 'Pemahaman Petikan & Peribahasa Mudah',
    year: 2,
    subject: 'Bahasa Melayu',
    description: 'Membaca petikan naratif/bukan naratif, penghayatan nilai murni, pantun kanak-kanak dan simpulan bahasa mudah.',
    iconName: 'FileText',
  },
  {
    id: 't2-bm-struktur-ayat',
    name: 'Struktur Ayat & Tanda Baca',
    year: 2,
    subject: 'Bahasa Melayu',
    description: 'Pola ayat dasar (FN+FN, FN+FK, FN+FA, FN+FS), ayat penyata, ayat tanya, ayat seruan, serta ketepatan tanda baca mekanis.',
    iconName: 'CheckCircle',
  },
  // ==========================================
  // TAHUN 4 - BAHASA MELAYU (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't4-bm-morfologi',
    name: 'Morfologi & Golongan Kata Lanjutan',
    year: 4,
    subject: 'Bahasa Melayu',
    description: 'Kata nama konkrit/abstrak, kata ganti nama jamak/istana, kata kerja transitif dua objek/tak transitif, dan kata adjektif pancaindera.',
    iconName: 'BookOpen',
  },
  {
    id: 't4-bm-kata-tugas-sintaksis',
    name: 'Kata Tugas & Sistem Sintaksis',
    year: 4,
    subject: 'Bahasa Melayu',
    description: 'Kata hubung pancangan (keterangan/relatif/komplemen), kata sendi nama lanjutan, kata penguat, kata bantu, dan ayat susunan songsang.',
    iconName: 'Layers',
  },
  {
    id: 't4-bm-imbuhan-majmuk-ganda',
    name: 'Imbuhan Lanjutan, Kata Majmuk & Kata Ganda',
    year: 4,
    subject: 'Bahasa Melayu',
    description: 'Imbuhan apitan (ke-...-an, meN-...-kan, peN-...-an, ber-...-kan), kata majmuk mantap dieja bercantum, serta kata ganda berentak & separa.',
    iconName: 'Sparkles',
  },
  {
    id: 't4-bm-seni-bahasa',
    name: 'Pemahaman Prosa, Puisi & Seni Bahasa',
    year: 4,
    subject: 'Bahasa Melayu',
    description: 'Petikan karangan laporan/berita/wawancara, pantun empat kerat (rima a-b-a-b), sajak, syair nasihat, dan peribahasa warisan berunsur kiasan.',
    iconName: 'FileText',
  },
  {
    id: 't4-bm-bina-ayat-ejaan',
    name: 'Bina Ayat, Sintaksis & Sistem Ejaan',
    year: 4,
    subject: 'Bahasa Melayu',
    description: 'Penukaran aktif-pasif pelbagai pelaku, cakap ajuk-cakap pindah, hukum D-M, tanda baca lanjutan (: ; () -), dan pembetulan kesalahan ejaan DBP.',
    iconName: 'CheckCircle',
  },
];

export const INITIAL_KSSR_QUESTIONS: QuizQuestion[] = [
  ...MATEMATIK_TAHUN_2_QUESTIONS,
  ...SAINS_TAHUN_2_QUESTIONS,
  ...ENGLISH_TAHUN_2_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_2_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_2_QUESTIONS,
  ...MATEMATIK_TAHUN_4_KBAT_QUESTIONS,
  ...SAINS_TAHUN_4_QUESTIONS,
  ...ENGLISH_TAHUN_4_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_4_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_4_QUESTIONS,
];
