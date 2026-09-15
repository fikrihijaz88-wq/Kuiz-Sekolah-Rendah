import { QuizQuestion, QuizTopicMeta } from '../types';
import { MATEMATIK_TAHUN_1_QUESTIONS } from './matematikTahun1';
import { SAINS_TAHUN_1_QUESTIONS } from './sainsTahun1';
import { BAHASA_MELAYU_TAHUN_1_QUESTIONS } from './bahasaMelayuTahun1';
import { ENGLISH_TAHUN_1_QUESTIONS } from './englishTahun1';
import { PENDIDIKAN_ISLAM_TAHUN_1_QUESTIONS } from './pendidikanIslamTahun1';
import { BAHASA_ARAB_TAHUN_1_QUESTIONS } from './bahasaArabTahun1';
import { BAHASA_CINA_TAHUN_1_QUESTIONS } from './bahasaCinaTahun1';
import { MATEMATIK_TAHUN_2_QUESTIONS } from './matematikTahun2';
import { SAINS_TAHUN_2_QUESTIONS } from './sainsTahun2';
import { ENGLISH_TAHUN_2_QUESTIONS } from './englishTahun2';
import { PENDIDIKAN_ISLAM_TAHUN_2_QUESTIONS } from './pendidikanIslamTahun2';
import { BAHASA_MELAYU_TAHUN_2_QUESTIONS } from './bahasaMelayuTahun2';
import { BAHASA_ARAB_TAHUN_2_QUESTIONS } from './bahasaArabTahun2';
import { BAHASA_CINA_TAHUN_2_QUESTIONS } from './bahasaCinaTahun2';
import { MATEMATIK_TAHUN_3_QUESTIONS } from './matematikTahun3';
import { SAINS_TAHUN_3_QUESTIONS } from './sainsTahun3';
import { BAHASA_MELAYU_TAHUN_3_QUESTIONS } from './bahasaMelayuTahun3';
import { ENGLISH_TAHUN_3_QUESTIONS } from './englishTahun3';
import { PENDIDIKAN_ISLAM_TAHUN_3_QUESTIONS } from './pendidikanIslamTahun3';
import { BAHASA_ARAB_TAHUN_3_QUESTIONS } from './bahasaArabTahun3';
import { BAHASA_CINA_TAHUN_3_QUESTIONS } from './bahasaCinaTahun3';
import { MATEMATIK_TAHUN_4_KBAT_QUESTIONS } from './matematikTahun4Kbat';
import { SAINS_TAHUN_4_QUESTIONS } from './sainsTahun4';
import { ENGLISH_TAHUN_4_QUESTIONS } from './englishTahun4';
import { PENDIDIKAN_ISLAM_TAHUN_4_QUESTIONS } from './pendidikanIslamTahun4';
import { BAHASA_MELAYU_TAHUN_4_QUESTIONS } from './bahasaMelayuTahun4';
import { BAHASA_ARAB_TAHUN_4_QUESTIONS } from './bahasaArabTahun4';
import { BAHASA_CINA_TAHUN_4_QUESTIONS } from './bahasaCinaTahun4';
import { MATEMATIK_TAHUN_5_QUESTIONS } from './matematikTahun5';
import { SAINS_TAHUN_5_QUESTIONS } from './sainsTahun5';
import { BAHASA_MELAYU_TAHUN_5_QUESTIONS } from './bahasaMelayuTahun5';
import { ENGLISH_TAHUN_5_QUESTIONS } from './englishTahun5';
import { PENDIDIKAN_ISLAM_TAHUN_5_QUESTIONS } from './pendidikanIslamTahun5';
import { BAHASA_ARAB_TAHUN_5_QUESTIONS } from './bahasaArabTahun5';
import { BAHASA_CINA_TAHUN_5_QUESTIONS } from './bahasaCinaTahun5';
import { MATEMATIK_TAHUN_6_QUESTIONS } from './matematikTahun6';
import { SAINS_TAHUN_6_QUESTIONS } from './sainsTahun6';
import { BAHASA_MELAYU_TAHUN_6_QUESTIONS } from './bahasaMelayuTahun6';
import { ENGLISH_TAHUN_6_QUESTIONS } from './englishTahun6';
import { PENDIDIKAN_ISLAM_TAHUN_6_QUESTIONS } from './pendidikanIslamTahun6';
import { BAHASA_ARAB_TAHUN_6_QUESTIONS } from './bahasaArabTahun6';
import { BAHASA_CINA_TAHUN_6_QUESTIONS } from './bahasaCinaTahun6';

export const KSSR_TOPICS: QuizTopicMeta[] = [
  // ==========================================
  // TAHUN 1 - MATEMATIK
  // ==========================================
  {
    id: 't1-mat-nombor',
    name: 'Nombor hingga 100',
    year: 1,
    subject: 'Matematik',
    description: 'Membilang, menulis nombor, nilai tempat puluh dan sa, serta susunan tertib hingga 100.',
    iconName: 'Hash',
  },
  {
    id: 't1-mat-tambah-tolak',
    name: 'Tambah dan Tolak Asas',
    year: 1,
    subject: 'Matematik',
    description: 'Konsep gabungan himpunan, penambahan, penolakan dan penyelesaian masalah mudah dalam lingkungan 100.',
    iconName: 'Calculator',
  },
  {
    id: 't1-mat-pecahan',
    name: 'Pecahan Mudah (Satu Perdua & Satu Perempat)',
    year: 1,
    subject: 'Matematik',
    description: 'Mengenal konsep satu perdua (separuh) dan satu perempat (suku) daripada satu objek penuh.',
    iconName: 'PieChart',
  },
  {
    id: 't1-mat-wang',
    name: 'Wang hingga RM10',
    year: 1,
    subject: 'Matematik',
    description: 'Mengenal syiling 5 sen, 10 sen, 20 sen, 50 sen dan wang kertas RM1, RM5, RM10 serta pertukaran wang.',
    iconName: 'Coins',
  },
  {
    id: 't1-mat-masa-ruang',
    name: 'Masa, Waktu & Bentuk Ruang',
    year: 1,
    subject: 'Matematik',
    description: 'Waktu dalam sehari, hari dalam seminggu, muka jam analog dan bentuk 2D/3D asas.',
    iconName: 'Clock',
  },

  // ==========================================
  // TAHUN 1 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't1-sn-deria-kemahiran',
    name: 'Kemahiran Saintifik & 5 Deria Manusia',
    year: 1,
    subject: 'Sains',
    description: 'Mengenal 5 organ deria manusia, kemahiran memerhati, mengelas dan mematuhi peraturan bilik sains.',
    iconName: 'FlaskConical',
  },
  {
    id: 't1-sn-benda-hidup',
    name: 'Benda Hidup dan Benda Bukan Hidup',
    year: 1,
    subject: 'Sains',
    description: 'Ciri benda hidup (bernafas, memerlukan makanan/air, bergerak, membesar, membiak) vs bukan hidup.',
    iconName: 'Users',
  },
  {
    id: 't1-sn-haiwan',
    name: 'Bahagian Tubuh Haiwan & Ciri Fizikal',
    year: 1,
    subject: 'Sains',
    description: 'Mengenal bahagian tubuh haiwan seperti paruh, sisik, kepak, bulu pelepah, ekor dan cengkerang.',
    iconName: 'Bug',
  },
  {
    id: 't1-sn-tumbuhan',
    name: 'Bahagian Tumbuh-tumbuhan (Daun, Bunga, Batang, Akar)',
    year: 1,
    subject: 'Sains',
    description: 'Mengenal jenis urat daun, jenis akar (serabut/tunjang), jenis batang dan pokok berbunga vs tidak berbunga.',
    iconName: 'Sprout',
  },
  {
    id: 't1-sn-magnet',
    name: 'Magnet & Tarikan Kutub',
    year: 1,
    subject: 'Sains',
    description: 'Bentuk magnet, kutub utara/selatan, tindakan tolak/tarik, dan bahan magnetik vs bukan magnetik.',
    iconName: 'Zap',
  },

  // ==========================================
  // TAHUN 1 - BAHASA MELAYU
  // ==========================================
  {
    id: 't1-bm-abjad-sukukata',
    name: 'Huruf, Suku Kata & Sebutan',
    year: 1,
    subject: 'Bahasa Melayu',
    description: 'Huruf vokal (a, e, i, o, u), huruf konsonan, suku kata terbuka (KV) dan tertutup (KVK).',
    iconName: 'BookOpen',
  },
  {
    id: 't1-bm-kata-nama',
    name: 'Golongan Kata & Kata Nama Asas',
    year: 1,
    subject: 'Bahasa Melayu',
    description: 'Mengenal kata nama am (benda, orang, haiwan, tempat) dan kata nama khas berhuruf besar.',
    iconName: 'BookText',
  },
  {
    id: 't1-bm-kata-kerja-adjektif',
    name: 'Kata Kerja & Kata Adjektif',
    year: 1,
    subject: 'Bahasa Melayu',
    description: 'Kata kerja perbuatan harian dan kata adjektif sifat/warna/saiz/bentuk asas.',
    iconName: 'Sparkles',
  },
  {
    id: 't1-bm-frasa-ayat',
    name: 'Kata Hubung & Kata Sendi Nama',
    year: 1,
    subject: 'Bahasa Melayu',
    description: 'Kata hubung gabungan (dan, atau, tetapi) dan kata sendi nama (di, ke, dari, pada).',
    iconName: 'PenTool',
  },
  {
    id: 't1-bm-tanda-baca-pemahaman',
    name: 'Membina Ayat & Tanda Baca',
    year: 1,
    subject: 'Bahasa Melayu',
    description: 'Penggunaan huruf besar, tanda noktah (.), tanda soal (?), tanda seru (!) dan menyusun ayat.',
    iconName: 'Bookmark',
  },

  // ==========================================
  // TAHUN 1 - BAHASA INGGERIS
  // ==========================================
  {
    id: 't1-bi-phonics',
    name: 'Phonics & Alphabet',
    year: 1,
    subject: 'Bahasa Inggeris',
    description: 'Recognizing initial letter sounds, short vowel sounds (a, e, i, o, u), and blending CVC sounds.',
    iconName: 'SpellCheck',
  },
  {
    id: 't1-bi-greetings-family',
    name: 'Friends & Greetings',
    year: 1,
    subject: 'Bahasa Inggeris',
    description: 'Polite greetings, introducing self, pronouns (he, she), and making friends.',
    iconName: 'Users',
  },
  {
    id: 't1-bi-classroom-colors',
    name: 'At School & Classroom Objects',
    year: 1,
    subject: 'Bahasa Inggeris',
    description: 'Identifying pencil, ruler, book, bag, prepositions (in, on, under), and classroom commands.',
    iconName: 'Palette',
  },
  {
    id: 't1-bi-numbers-pets',
    name: "Let's Play & Toys",
    year: 1,
    subject: 'Bahasa Inggeris',
    description: 'Naming toys (kite, doll, bike), adjectives (big, small, long, short), and possessives (his, her).',
    iconName: 'Hash',
  },
  {
    id: 't1-bi-simple-sentences',
    name: 'Pet Show & Animals',
    year: 1,
    subject: 'Bahasa Inggeris',
    description: 'Animal names, sounds, body parts, plural animals with -s, and sentence structures.',
    iconName: 'Sparkles',
  },

  // ==========================================
  // TAHUN 1 - PENDIDIKAN ISLAM
  // ==========================================
  {
    id: 't1-pi-hijaiyyah-quran',
    name: 'Huruf Hijaiyyah & Surah Al-Fatihah serta Al-Ikhlas',
    year: 1,
    subject: 'Pendidikan Islam',
    description: 'Mengenal huruf Hijaiyyah tunggal/berbaris dan kefahaman Surah Al-Fatihah serta Surah Al-Ikhlas.',
    iconName: 'BookOpen',
  },
  {
    id: 't1-pi-rukun-iman-islam',
    name: 'Asas Rukun Iman & Rukun Islam',
    year: 1,
    subject: 'Pendidikan Islam',
    description: 'Mengenal 6 Rukun Iman, 5 Rukun Islam, mengucap Kalimah Syahadah dan beriman kepada Allah SWT.',
    iconName: 'HeartHandshake',
  },
  {
    id: 't1-pi-kebersihan-wuduk',
    name: 'Bersuci daripada Hadas, Istinjak & Rukun Wuduk',
    year: 1,
    subject: 'Pendidikan Islam',
    description: 'Konsep kebersihan diri, alat dan adab istinjak, serta 6 rukun wuduk mengikut tertib.',
    iconName: 'Moon',
  },
  {
    id: 't1-pi-sirah-adab',
    name: 'Kelahiran Nabi Muhammad SAW & Adab Makan serta Tidur',
    year: 1,
    subject: 'Pendidikan Islam',
    description: 'Kisah ringkas kelahiran Nabi Muhammad SAW, adab makan minum, adab tidur dan adab bersama ibu bapa.',
    iconName: 'GraduationCap',
  },
  {
    id: 't1-pi-jawi-asas',
    name: 'Huruf Jawi Tunggal & Sambungan Suku Kata Terbuka',
    year: 1,
    subject: 'Pendidikan Islam',
    description: 'Mengenal huruf Jawi tunggal, bunyi vokal alif, wau, ya, dan menyambung suku kata terbuka mudah.',
    iconName: 'PenTool',
  },

  // ==========================================
  // TAHUN 1 - BAHASA ARAB
  // ==========================================
  {
    id: 't1-ba-fasl',
    name: 'Di Dalam Kelas (فِي الْفَصْلِ)',
    year: 1,
    subject: 'Bahasa Arab',
    description: 'Mengenal ucapan selamat dan objek di bilik darjah (بَابٌ, نَافِذَةٌ, مَكْتَبٌ, كُرْسِيٌّ, سَبُّورَةٌ).',
    iconName: 'BookOpen',
  },
  {
    id: 't1-ba-adawat',
    name: 'Peralatan Belajar & Tulis (أَدَوَاتِي الْمَدْرَسِيَّةُ)',
    year: 1,
    subject: 'Bahasa Arab',
    description: 'Mengenal perkataan qalamun (قَلَمٌ), kitabun (كِتَابٌ), mistaratun (مِسْطَرَةٌ), mimhatun (مِمْحَاةٌ).',
    iconName: 'PenTool',
  },
  {
    id: 't1-ba-jism',
    name: 'Anggota Badan Saya (جِسْمِي السَّلِيمُ)',
    year: 1,
    subject: 'Bahasa Arab',
    description: 'Mengenal anggota badan seperti ra\'sun (رَأْسٌ), \'ainun (عَيْنٌ), uznun (أُذُنٌ), yadun (يَدٌ), rijlun (رِجْلٌ).',
    iconName: 'Users',
  },
  {
    id: 't1-ba-arqam',
    name: 'Nombor 1 Hingga 10 (الْأَرْقَامُ وَالْأَعْدَادُ)',
    year: 1,
    subject: 'Bahasa Arab',
    description: 'Mengenal dan membilang nombor arab dari wahidun (١) hingga \'asyaratun (١٠).',
    iconName: 'Hash',
  },
  {
    id: 't1-ba-hayawan-usrah',
    name: 'Haiwan & Keluarga (حَيَوَانَاتِي وَأُسْرَتِي)',
    year: 1,
    subject: 'Bahasa Arab',
    description: 'Mengenal ahli keluarga (أَبٌ, أُمٌّ, أَخٌ, أُخْتٌ) dan haiwan peliharaan (قِطٌّ, طَائِرٌ, سَمَكٌ).',
    iconName: 'HeartHandshake',
  },

  // ==========================================
  // TAHUN 1 - BAHASA CINA
  // ==========================================
  {
    id: 't1-bc-pinyin',
    name: 'Hanyu Pinyin & Sebutan Asas (汉语拼音与发音)',
    year: 1,
    subject: 'Bahasa Cina',
    description: 'Konsonan shengmu (b, p, m, f, d, t, n, l), vokal yunmu (a, o, e, i, u, ü) dan 4 tanda nada.',
    iconName: 'SpellCheck',
  },
  {
    id: 't1-bc-shuzi',
    name: 'Nombor & Hari (数字与星期)',
    year: 1,
    subject: 'Bahasa Cina',
    description: 'Nombor satu hingga sepuluh (一至十), hari dalam seminggu (星期一至星期日).',
    iconName: 'Hash',
  },
  {
    id: 't1-bc-jiating',
    name: 'Diri Saya & Keluarga (我与我的家人)',
    year: 1,
    subject: 'Bahasa Cina',
    description: 'Panggilan bapa (爸爸), ibu (妈妈), abang (哥哥), kakak (姐姐), adik (弟弟/妹妹), datuk dan nenek.',
    iconName: 'Users',
  },
  {
    id: 't1-bc-jiaoshi',
    name: 'Sekolah & Bilik Darjah (学校与教室)',
    year: 1,
    subject: 'Bahasa Cina',
    description: 'Peralatan sekolah seperti buku (书), pensel (铅笔), pemadam (橡皮), meja (桌子), kerusi (椅子).',
    iconName: 'BookOpen',
  },
  {
    id: 't1-bc-yanse',
    name: 'Warna & Bentuk (颜色与形状)',
    year: 1,
    subject: 'Bahasa Cina',
    description: 'Mengenal warna merah (红色), kuning (黄色), biru (蓝色), hijau (绿色) dan bentuk asas.',
    iconName: 'Palette',
  },
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
  {
    id: 't2-bi-freetime',
    name: 'Free Time & Daily Routines',
    year: 2,
    subject: 'Bahasa Inggeris',
    description: 'Days of the week, daily activities, hobbies, sports, and time expressions.',
    iconName: 'Clock',
  },
  {
    id: 't2-bi-clothes-robot',
    name: 'Clothes, Body Parts & The Robot',
    year: 2,
    subject: 'Bahasa Inggeris',
    description: 'Clothing items, human & robot body parts, abilities with can/cannot.',
    iconName: 'Palette',
  },

  // ==========================================
  // TAHUN 2 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't2-pi-quran-tajwid',
    name: 'Al-Quran & Tajwid (Surah An-Nas, Al-Falaq & Mad Asli)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Hukum Mad Asli, huruf berbaris sukun/syaddah, serta kefahaman Surah An-Nas, Al-Falaq & Al-Ikhlas.',
    iconName: 'BookOpen',
  },
  {
    id: 't2-pi-akidah',
    name: 'Akidah (Sifat Allah Al-Ahad, Al-Somad & Rukun Iman)',
    year: 2,
    subject: 'Pendidikan Islam',
    description: 'Konsep 6 Rukun Iman, 5 Rukun Islam, serta sifat Allah Al-Ahad (Esa) dan As-Samad.',
    iconName: 'HeartHandshake',
  },
  {
    id: 't2-pi-ibadah',
    name: 'Ibadah (Wuduk Sempurna, Syarat & Rukun Solat)',
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
  // TAHUN 3 - MATEMATIK (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-mat-nombor',
    name: 'Nombor hingga 10,000',
    year: 3,
    subject: 'Matematik',
    description: 'Nilai tempat, nilai digit, cerakinan, pola nombor dan pembundaran hingga 10,000.',
    iconName: 'Hash',
  },
  {
    id: 't3-mat-tambah-tolak',
    name: 'Operasi Asas Tambah & Tolak',
    year: 3,
    subject: 'Matematik',
    description: 'Tambah tolak hingga 10,000 dengan mengumpul semula dan penyelesaian masalah harian.',
    iconName: 'Calculator',
  },
  {
    id: 't3-mat-darab-bahagi',
    name: 'Operasi Darab & Bahagi',
    year: 3,
    subject: 'Matematik',
    description: 'Sifir 6, 7, 8, 9, pendaraban nombor hingga tiga digit dan pembahagian.',
    iconName: 'Layers',
  },
  {
    id: 't3-mat-pecahan-perpuluhan',
    name: 'Pecahan, Perpuluhan & Peratus',
    year: 3,
    subject: 'Matematik',
    description: 'Pecahan setara, pecahan termudah, tambah tolak pecahan wajar, perpuluhan dan peratus.',
    iconName: 'PieChart',
  },
  {
    id: 't3-mat-wang',
    name: 'Wang hingga RM10,000',
    year: 3,
    subject: 'Matematik',
    description: 'Operasi asas wang, simpanan dan pelaburan serta penyelesaian masalah kewangan.',
    iconName: 'Coins',
  },
  {
    id: 't3-mat-masa-ukuran',
    name: 'Masa, Waktu & Ukuran',
    year: 3,
    subject: 'Matematik',
    description: 'Perkaitan jam dan minit, kalendar, ukuran panjang (cm/m), jisim (g/kg), dan bentuk prisma.',
    iconName: 'Clock',
  },

  // ==========================================
  // TAHUN 3 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-sn-manusia',
    name: 'Manusia (Gigi & Pencernaan)',
    year: 3,
    subject: 'Sains',
    description: 'Jenis gigi (taring, kacip, geraham), struktur gigi, set gigi susu/kekal dan laluan pencernaan.',
    iconName: 'Users',
  },
  {
    id: 't3-sn-haiwan',
    name: 'Haiwan & Tabiat Pemakanan',
    year: 3,
    subject: 'Sains',
    description: 'Herbivor, karnivor, omnivor serta kegigian haiwan mengikut pemakanan.',
    iconName: 'Sparkles',
  },
  {
    id: 't3-sn-tumbuhan',
    name: 'Tumbuhan & Cara Pembiakan',
    year: 3,
    subject: 'Sains',
    description: 'Pembiakan melalui biji benih, spora, daun, keratan batang, anak pokok dan batang bawah tanah.',
    iconName: 'Flower2',
  },
  {
    id: 't3-sn-ketumpatan',
    name: 'Ketumpatan, Asid & Alkali',
    year: 3,
    subject: 'Sains',
    description: 'Objek terapung/tenggelam, perbezaan ketumpatan berbanding air, dan ujian kertas litmus.',
    iconName: 'FlaskConical',
  },
  {
    id: 't3-sn-suria-mesin',
    name: 'Sistem Suria & Takal',
    year: 3,
    subject: 'Sains',
    description: 'Urutan planet Sistem Suria dari Matahari dan kegunaan takal dalam kehidupan seharian.',
    iconName: 'Globe',
  },

  // ==========================================
  // TAHUN 3 - BAHASA MELAYU (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-bm-tatabahasa',
    name: 'Tatabahasa & Golongan Kata',
    year: 3,
    subject: 'Bahasa Melayu',
    description: 'Kata ganti nama diri istana, kata adjektif pancaindera, kata sendi dan kata hubung.',
    iconName: 'BookOpen',
  },
  {
    id: 't3-bm-imbuhan',
    name: 'Imbuhan & Pembentukan Kata',
    year: 3,
    subject: 'Bahasa Melayu',
    description: 'Awalan meN- (me-, mem-, men-, meng-, meny-), peN-, beR-, teR- dan akhiran -an, -kan.',
    iconName: 'Layers',
  },
  {
    id: 't3-bm-simpulan',
    name: 'Simpulan Bahasa & Seni Bahasa',
    year: 3,
    subject: 'Bahasa Melayu',
    description: 'Simpulan bahasa popular (ringan tulang, hati waja, buah tangan) dan pantun nasihat 4 kerat.',
    iconName: 'Bookmark',
  },
  {
    id: 't3-bm-pemahaman',
    name: 'Pemahaman Petikan & Ayat',
    year: 3,
    subject: 'Bahasa Melayu',
    description: 'Membaca kritis petikan prosa, gotong-royong, keselamatan, dan nilai murni masyarakat.',
    iconName: 'FileText',
  },

  // ==========================================
  // TAHUN 3 - BAHASA INGGERIS (CEFR A1 GET SMART PLUS 3)
  // ==========================================
  {
    id: 't3-bi-everyday',
    name: 'Everyday Life & Routines',
    year: 3,
    subject: 'Bahasa Inggeris',
    description: 'Telling clock time (half past / o\'clock), daily routines and adverbs of frequency (always, sometimes, never).',
    iconName: 'CalendarDays',
  },
  {
    id: 't3-bi-present-cont',
    name: 'Actions & Right Now',
    year: 3,
    subject: 'Bahasa Inggeris',
    description: 'Present continuous tense (is/are + verb-ing), sports and action questions.',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 't3-bi-food',
    name: 'Food & Healthy Living',
    year: 3,
    subject: 'Bahasa Inggeris',
    description: 'Countable & uncountable nouns, some / any, healthy meals and recipes.',
    iconName: 'Share2',
  },
  {
    id: 't3-bi-rules-past',
    name: 'Rules, Signs & Past Simple',
    year: 3,
    subject: 'Bahasa Inggeris',
    description: 'Modal verbs must / mustn\'t, classroom rules and past simple (was / were).',
    iconName: 'FileText',
  },

  // ==========================================
  // TAHUN 3 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-pi-quran-tajwid',
    name: 'Al-Quran & Tajwid',
    year: 3,
    subject: 'Pendidikan Islam',
    description: 'Hukum Izhar Halqi, Idgham Maal Ghunnah dan tadabbur Surah Al-Kafirun & Al-Asr.',
    iconName: 'BookOpen',
  },
  {
    id: 't3-pi-akidah',
    name: 'Akidah & Rukun Iman',
    year: 3,
    subject: 'Pendidikan Islam',
    description: 'Beriman kepada Kitab-kitab Allah dan penghayatan nama Allah Al-Alim serta Al-Basir.',
    iconName: 'Sparkles',
  },
  {
    id: 't3-pi-ibadah',
    name: 'Ibadah Solat & Syariat',
    year: 3,
    subject: 'Pendidikan Islam',
    description: 'Solat berjemaah (kelebihan 27 darjat), syarat sah solat dan perkara membatalkan solat.',
    iconName: 'Sun',
  },
  {
    id: 't3-pi-sirah-adab',
    name: 'Sirah Nabawiyyah & Adab Islamiah',
    year: 3,
    subject: 'Pendidikan Islam',
    description: 'Peristiwa Hijrah ke Madinah, persaudaraan Muhajirin-Ansar dan adab menuntut ilmu.',
    iconName: 'Users',
  },

  // ==========================================
  // TAHUN 3 - BAHASA ARAB (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-ba-fasl',
    name: 'تَفَضَّلْ إِلَى الْفَصْلِ (Di Bilik Darjah)',
    year: 3,
    subject: 'Bahasa Arab',
    description: 'Peralatan kelas (سَبُّورَةٌ, مِمْسَحَةٌ, كُرْسِيٌّ) dan kata tunjuk هَذَا / هَذِهِ.',
    iconName: 'BookOpen',
  },
  {
    id: 't3-ba-malabis',
    name: 'مَلَابِسِي الْجَمِيلَةُ (Pakaian Saya yang Cantik)',
    year: 3,
    subject: 'Bahasa Arab',
    description: 'Kosa kata pakaian dan aksesori (قَمِيصٌ, فُسْتَانٌ, خِمَارٌ, حِذَاءٌ, حِزَامٌ).',
    iconName: 'Sparkles',
  },
  {
    id: 't3-ba-alwan-arqaam',
    name: 'الْأَلْوَانُ وَالْأَرْقَامُ (Warna dan Nombor 11-20)',
    year: 3,
    subject: 'Bahasa Arab',
    description: 'Warna-warni asas (أَحْمَرُ, أَزْرَقُ, أَخْضَرُ) dan nombor 11 hingga 20.',
    iconName: 'Coins',
  },

  // ==========================================
  // TAHUN 3 - BAHASA CINA (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't3-bc-xuexiao',
    name: '学校与课堂生活 (Kehidupan Sekolah)',
    year: 3,
    subject: 'Bahasa Cina',
    description: 'Perpustakaan (图书馆), aktiviti membaca (看故事书), bilik darjah dan adab murid.',
    iconName: 'BookOpen',
  },
  {
    id: 't3-bc-ziran',
    name: '大自然与天气 (Alam & Cuaca)',
    year: 3,
    subject: 'Bahasa Cina',
    description: 'Keadaan cuaca (下雨, 晴天, 刮风), tumbuh-tumbuhan dan flora fauna.',
    iconName: 'Globe',
  },
  {
    id: 't3-bc-jiankang-jieri',
    name: '健康饮食与节日 (Pemakanan Sihat & Budaya)',
    year: 3,
    subject: 'Bahasa Cina',
    description: 'Sayur dan buah (蔬菜水果) serta perayaan tradisional seperti Pesta Tanglung (中秋节, 月饼).',
    iconName: 'Sparkles',
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

  // ==========================================
  // TAHUN 5 - MATEMATIK (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't5-mat-nombor',
    name: 'Nombor Bulat & Operasi Asas hingga 1,000,000',
    year: 5,
    subject: 'Matematik',
    description: 'Nombor perdana, pola nombor, nilai tempat & operasi bergabung kurungan hingga 1,000,000.',
    iconName: 'Hash',
  },
  {
    id: 't5-mat-pecahan',
    name: 'Pecahan, Perpuluhan dan Peratus',
    year: 5,
    subject: 'Matematik',
    description: 'Darab pecahan, perpuluhan 3 tempat, peratus diskaun, faedah & kuantiti.',
    iconName: 'PieChart',
  },
  {
    id: 't5-mat-wang',
    name: 'Wang hingga RM1,000,000',
    year: 5,
    subject: 'Matematik',
    description: 'Faedah mudah & kompaun, simpanan, pelaburan, untung rugi, harga kos & harga jual.',
    iconName: 'Coins',
  },
  {
    id: 't5-mat-masa',
    name: 'Masa dan Waktu (Abad, Dekad, Tahun)',
    year: 5,
    subject: 'Matematik',
    description: 'Hubungan abad, dekad dan tahun, penukaran unit masa dan operasi bergabung masa.',
    iconName: 'Clock',
  },
  {
    id: 't5-mat-ukuran',
    name: 'Ukuran & Sukatan (Panjang, Jisim, Isi Padu)',
    year: 5,
    subject: 'Matematik',
    description: 'Penukaran unit km/m, kg/g, l/ml, operasi bergabung dan penyelesaian masalah harian.',
    iconName: 'Ruler',
  },
  {
    id: 't5-mat-ruang',
    name: 'Ruang, Sudut & Bentuk Gabungan',
    year: 5,
    subject: 'Matematik',
    description: 'Sudut poligon sekata, luas bentuk gabungan 2D, perimeter dan isi padu bentuk 3D.',
    iconName: 'Box',
  },
  {
    id: 't5-mat-koordinat',
    name: 'Koordinat, Nisbah dan Kadaran',
    year: 5,
    subject: 'Matematik',
    description: 'Satah Cartes sukuan pertama, jarak mengufuk & mencancang, nisbah termudah dan kadaran.',
    iconName: 'MapPin',
  },
  {
    id: 't5-mat-data',
    name: 'Pengurusan Data (Mod, Median, Min, Julat)',
    year: 5,
    subject: 'Matematik',
    description: 'Mentafsir piktograf, carta palang, carta pai, mengira min, median, mod dan julat.',
    iconName: 'BarChart3',
  },

  // ==========================================
  // TAHUN 5 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't5-sn-kemahiran',
    name: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    year: 5,
    subject: 'Sains',
    description: 'Hipotesis eksperimen, pemboleh ubah dimanipulasi, bergerak balas dan dimalarkan.',
    iconName: 'FlaskConical',
  },
  {
    id: 't5-sn-manusia',
    name: 'Manusia (Sistem Rangka & Peredaran Darah)',
    year: 5,
    subject: 'Sains',
    description: 'Fungsi rangka utama, jantung, laluan peredaran darah beroksigen & hubungan antara sistem tubuh.',
    iconName: 'Users',
  },
  {
    id: 't5-sn-haiwan',
    name: 'Haiwan (Kemandirian Spesies & Rantai Makanan)',
    year: 5,
    subject: 'Sains',
    description: 'Penyesuaian iklim melampau, perlindungan diri, siratan makanan & kesan perubahan populasi.',
    iconName: 'Bug',
  },
  {
    id: 't5-sn-tumbuhan',
    name: 'Tumbuh-tumbuhan (Kemandirian & Pencaran)',
    year: 5,
    subject: 'Sains',
    description: 'Ciri perlindungan tumbuhan, agen pencaran biji benih: angin, air, haiwan, mekanisme letupan.',
    iconName: 'Sprout',
  },
  {
    id: 't5-sn-elektrik',
    name: 'Elektrik (Litar Bersiri & Selari)',
    year: 5,
    subject: 'Sains',
    description: 'Perbandingan litar bersiri & selari, faktor kecerahan mentol, dan langkah keselamatan elektrik.',
    iconName: 'Zap',
  },
  {
    id: 't5-sn-haba-jirim',
    name: 'Haba, Suhu & Asid Alkali',
    year: 5,
    subject: 'Sains',
    description: 'Pengembangan & pengecutan jirim, termometer, takat beku/didih, dan ujian kertas litmus asid alkali.',
    iconName: 'Flame',
  },
  {
    id: 't5-sn-bumi-teknologi',
    name: 'Bumi, Angkasa & Kestabilan Struktur',
    year: 5,
    subject: 'Sains',
    description: 'Putaran bumi & siang malam, fasa bulan, serta faktor kestabilan & kekuatan binaan struktur.',
    iconName: 'Globe',
  },

  // ==========================================
  // TAHUN 5 - BAHASA MELAYU (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't5-bm-morfologi',
    name: 'Morfologi & Golongan Kata Lanjutan',
    year: 5,
    subject: 'Bahasa Melayu',
    description: 'Kata ganti nama diri istana/pangkat, kata kerja transitif berpelengkap, dan kata adjektif perasaan/pancaindera.',
    iconName: 'BookOpen',
  },
  {
    id: 't5-bm-sintaksis-kata-tugas',
    name: 'Kata Tugas & Sintaksis Kompleks',
    year: 5,
    subject: 'Bahasa Melayu',
    description: 'Kata pemeri (ialah/adalah), kata hubung pancangan, ayat susunan songsang, dan ragam ayat aktif-pasif.',
    iconName: 'Layers',
  },
  {
    id: 't5-bm-imbuhan-sisipan',
    name: 'Imbuhan Apitan & Sisipan',
    year: 5,
    subject: 'Bahasa Melayu',
    description: 'Imbuhan apitan memper-...-kan, peN-...-an, kata sisipan (-el-, -er-, -em-, -in-), dan kata majmuk kiasan.',
    iconName: 'Sparkles',
  },
  {
    id: 't5-bm-seni-bahasa-peribahasa',
    name: 'Peribahasa & Seni Bahasa',
    year: 5,
    subject: 'Bahasa Melayu',
    description: 'Peribahasa bertema, pantun empat kerat nasihat/budi, sajak patriotik, dan pengajaran nilai murni.',
    iconName: 'FileText',
  },
  {
    id: 't5-bm-pemahaman-ulasan',
    name: 'Pemahaman Petikan & Nilai Murni',
    year: 5,
    subject: 'Bahasa Melayu',
    description: 'Membaca petikan berita/rencana teknologi hijau, analisis tersirat/tersurat, dan rumusan kritis.',
    iconName: 'CheckCircle',
  },

  // ==========================================
  // TAHUN 5 - BAHASA INGGERIS (CEFR A2 HIGH)
  // ==========================================
  {
    id: 't5-eng-towns-cities',
    name: 'Towns and Cities (Unit 1)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'There is / There are, city landmarks, comparative & superlative adjectives for places.',
    iconName: 'Building',
  },
  {
    id: 't5-eng-wild-life',
    name: 'Wild Life & Animal Kingdom (Unit 3)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'Superlative traits, rainforest wildlife, endangered species protection, and reading comprehension.',
    iconName: 'Feather',
  },
  {
    id: 't5-eng-learning-world',
    name: 'Learning World & Study Habits (Unit 4)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'Present continuous vs simple present, school routines, learning skills and subjects.',
    iconName: 'GraduationCap',
  },
  {
    id: 't5-eng-food-health',
    name: 'Food and Health (Unit 5)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'Countable/uncountable nouns, quantifiers (much, many, plenty of), healthy eating choices.',
    iconName: 'Utensils',
  },
  {
    id: 't5-eng-sport-growing-up',
    name: 'Sport, History & Biographies (Unit 6 & 7)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'Past simple irregular verbs, was/were, sports tournaments, milestones and biographies.',
    iconName: 'Trophy',
  },
  {
    id: 't5-eng-going-away',
    name: 'Going Away & Travel Plans (Unit 8)',
    year: 5,
    subject: 'Bahasa Inggeris',
    description: 'Future plans with "be going to", packing essentials, weather, and vacation dialogue.',
    iconName: 'Compass',
  },

  // ==========================================
  // TAHUN 5 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't5-pi-quran-tajwid',
    name: 'Al-Quran, Tajwid & Hafazan',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Hukum Idgham Maal Ghunnah, Idgham Bila Ghunnah, Mim Sakinah (Izhar Syafawi, Idgham Mislain), dan Surah Al-Qadr.',
    iconName: 'BookOpen',
  },
  {
    id: 't5-pi-hadis',
    name: 'Hadis & Tuntutan Ibadah',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Hadis sayangi orang muda & hormati orang tua, pemimpin adil, larangan membazir, menuntut ilmu dan silaturahim.',
    iconName: 'Shield',
  },
  {
    id: 't5-pi-akidah',
    name: 'Akidah: Nama-nama Allah (Asmaul Husna)',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Nama Allah Al-Malik, Al-Hasib, Al-Khabir, As-Sabur, Al-Hadi, Al-Adl, Al-Qawiyyu, Al-Hakim, Al-Ghaffar & Al-Mujib.',
    iconName: 'Sparkles',
  },
  {
    id: 't5-pi-ibadah',
    name: 'Ibadah: Solat Sunat & Pengurusan Jenazah',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Solat Sunat Rawatib, Dhuha, Tahajjud, Istikharah, serta 4 fardu kifayah pengurusan jenazah dan solat jenazah.',
    iconName: 'Clock',
  },
  {
    id: 't5-pi-sirah-adab',
    name: 'Sirah & Adab Islamiah',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Perjanjian Hudaibiyah, Pembukaan Kota Mekah (Fathu Makkah), Haji Wada, adab media sosial, alam sekitar & adab berniaga.',
    iconName: 'Users',
  },
  {
    id: 't5-pi-jawi',
    name: 'Pelajaran Jawi (Kata Pinjaman & Imbuhan)',
    year: 5,
    subject: 'Pendidikan Islam',
    description: 'Ejaan Jawi kata pinjaman Bahasa Inggeris & Arab, imbuhan awalan/akhiran/apitan, diftong, hamzah, dan kata ganda.',
    iconName: 'PenTool',
  },

  // ==========================================
  // TAHUN 2 - BAHASA ARAB
  // ==========================================
  {
    id: 't2-ba-taaruf',
    name: 'هَيَّا نَتَعَارَفْ (Mari Berkenalan & Sapaan)',
    year: 2,
    subject: 'Bahasa Arab',
    description: 'Ucapan salam, sapaan pagi/petang, bertanyakan khabar (كَيْفَ حَالُكَ), dan memperkenalkan diri.',
    iconName: 'Languages',
  },
  {
    id: 't2-ba-usrah',
    name: 'أُسْرَتِي وَأَقَارِبِي (Keluargaku)',
    year: 2,
    subject: 'Bahasa Arab',
    description: 'Panggilan bapa (أَبٌ), ibu (أُمٌّ), saudara lelaki/perempuan, datuk (جَدٌّ) dan nenek (جَدَّةٌ).',
    iconName: 'Users',
  },
  {
    id: 't2-ba-jism',
    name: 'جِسْمِي السَّلِيمُ (Anggota Badanku)',
    year: 2,
    subject: 'Bahasa Arab',
    description: 'Bahagian kepala (رَأْسٌ), mata (عَيْنٌ), telinga (أُذُنٌ), tangan (يَدٌ) dan kaki (رِجْلٌ).',
    iconName: 'Sparkles',
  },
  {
    id: 't2-ba-bait',
    name: 'فِي بَيْتِي (Di Rumahku & Peralatan)',
    year: 2,
    subject: 'Bahasa Arab',
    description: 'Ruang tamu, bilik tidur, dapur, serta peralatan rumah (serba-serbi kediaman).',
    iconName: 'Bookmark',
  },
  {
    id: 't2-ba-arqam',
    name: 'الأَرْقَامُ (1-20) وَحُرُوفُ الْهِجَاءِ (Nombor & Fonetik)',
    year: 2,
    subject: 'Bahasa Arab',
    description: 'Nombor 1 hingga 20 dalam Bahasa Arab, bunyi baris fathah, kasrah, dhommah dan sukun.',
    iconName: 'Hash',
  },

  // ==========================================
  // TAHUN 2 - BAHASA CINA (SK)
  // ==========================================
  {
    id: 't2-bc-pinyin',
    name: '拼音与基础笔画 (Pinyin & Goresan Asas)',
    year: 2,
    subject: 'Bahasa Cina',
    description: 'Konsonan shengmu, vokal yunmu, 4 tanda nada pinyin dan urutan goresan Hanzi asas.',
    iconName: 'Languages',
  },
  {
    id: 't2-bc-jiating',
    name: '我和家人 (Saya dan Keluarga)',
    year: 2,
    subject: 'Bahasa Cina',
    description: 'Panggilan ahli keluarga: 爸爸, 妈妈, 哥哥, 姐姐, 弟弟, 妹妹, datuk dan nenek.',
    iconName: 'Users',
  },
  {
    id: 't2-bc-shenti',
    name: '身体器官与感觉 (Anggota Badan & Deria)',
    year: 2,
    subject: 'Bahasa Cina',
    description: 'Anggota deria (眼睛, 耳朵, 口, 鼻子, 手, 脚) dan fungsi penjagaan kebersihan.',
    iconName: 'Sparkles',
  },
  {
    id: 't2-bc-dongwu',
    name: '可爱的动物与颜色 (Haiwan & Warna)',
    year: 2,
    subject: 'Bahasa Cina',
    description: 'Haiwan peliharaan (小猫, 小狗, 小鸟, 鱼) dan warna-warna asas (红, 蓝, 黄, 白, 绿).',
    iconName: 'Bug',
  },
  {
    id: 't2-bc-shuzi',
    name: '数字与日常问候 (Nombor & Ucapan Harian)',
    year: 2,
    subject: 'Bahasa Cina',
    description: 'Nombor Hanzi 1-10, ucapan sapaan 早安, 谢谢, 不客气, 对不起 dan 没关系.',
    iconName: 'Hash',
  },

  // ==========================================
  // TAHUN 4 - BAHASA ARAB
  // ==========================================
  {
    id: 't4-ba-madrasah',
    name: 'فِي الْمَدْرَسَةِ وَالْفَصْلِ (Di Sekolah & Bilik Darjah)',
    year: 4,
    subject: 'Bahasa Arab',
    description: 'Peralatan bilik darjah (قَلَمٌ, كِتَابٌ, مِمْسَحَةٌ, سَبُّورَةٌ) dan kata tunjuk هَذَا / هَذِهِ.',
    iconName: 'Languages',
  },
  {
    id: 't4-ba-malabis',
    name: 'مَلَابِسِي الْجَمِيلَةُ (Pakaian Saya)',
    year: 4,
    subject: 'Bahasa Arab',
    description: 'Pakaian sekolah dan harian (قَمِيصٌ, بَنْطَلُونٌ, فُسْتَانٌ, حِذَاءٌ, حِزَامٌ) dan kata kerja يَلْبَسُ.',
    iconName: 'Bookmark',
  },
  {
    id: 't4-ba-alwan',
    name: 'الأَلْوَانُ وَالصِّفَاتُ (Warna & Sifat)',
    year: 4,
    subject: 'Bahasa Arab',
    description: 'Warna Muzakkar vs Muannas (أَحْمَرُ / حَمْرَاءُ, أَزْرَقُ / زَرْقَاءُ) dan kata sifat.',
    iconName: 'Sparkles',
  },
  {
    id: 't4-ba-ayyam',
    name: 'أَيَّامُ الأُسْبُوعِ وَالأَوْقَاتُ (Hari & Masa)',
    year: 4,
    subject: 'Bahasa Arab',
    description: 'Tujuh hari seminggu (يَوْمُ الأَحَدِ hingga يَوْمُ السَّبْتِ), pagi (صَبَاحًا) dan petang (مَسَاءً).',
    iconName: 'Clock',
  },
  {
    id: 't4-ba-arqam',
    name: 'الأَرْقَامُ (21-40) وَالتَّرَاكِيبُ (Nombor 21-40 & Tatabahasa)',
    year: 4,
    subject: 'Bahasa Arab',
    description: 'Nombor 21 hingga 40, kata ganti nama (أَنَا, أَنْتَ, أَنْتِ, نَحْنُ) dan ayat tanya.',
    iconName: 'Hash',
  },

  // ==========================================
  // TAHUN 4 - BAHASA CINA (SK)
  // ==========================================
  {
    id: 't4-bc-xiaoyuan',
    name: '学校生活与作息 (Kehidupan Sekolah & Rutin)',
    year: 4,
    subject: 'Bahasa Cina',
    description: 'Warga sekolah, kemudahan sekolah, jadual waktu, dan peraturan bilik darjah.',
    iconName: 'Languages',
  },
  {
    id: 't4-bc-richang',
    name: '我的爱好与课外活动 (Hobi & Aktiviti Kokurikulum)',
    year: 4,
    subject: 'Bahasa Cina',
    description: 'Hobi, sukan dan permainan, unit beruniform, dan kelab persatuan.',
    iconName: 'Clock',
  },
  {
    id: 't4-bc-meishi',
    name: '美味食物与健康饮食 (Makanan & Pemakanan Sihat)',
    year: 4,
    subject: 'Bahasa Cina',
    description: 'Makanan ruji tempatan, buah-buahan, sayur-sayuran, rasa, dan piramid makanan.',
    iconName: 'Bookmark',
  },
  {
    id: 't4-bc-chuandai',
    name: '我的家乡与公共场所 (Kampung Saya & Tempat Awam)',
    year: 4,
    subject: 'Bahasa Cina',
    description: 'Tempat awam (hospital, balai polis, perpustakaan), pengangkutan awam dan adab awam.',
    iconName: 'Sparkles',
  },
  {
    id: 't4-bc-xingqi',
    name: '节日与传统文化 (Perayaan & Kebudayaan Tradisional)',
    year: 4,
    subject: 'Bahasa Cina',
    description: 'Perayaan utama di Malaysia (Tahun Baru Cina, Hari Raya, Deepavali), adat resam dan perpaduan.',
    iconName: 'Calendar',
  },

  // ==========================================
  // TAHUN 5 - BAHASA ARAB
  // ==========================================
  {
    id: 't5-ba-matbakh',
    name: 'فِي الْمَطْبَخِ وَمَائِدَةِ الطَّعَامِ (Di Dapur & Meja Makan)',
    year: 5,
    subject: 'Bahasa Arab',
    description: 'Peralatan makan (صَحْنٌ, مِلْعَقَةٌ, سِكِّينٌ), alatan dapur (ثَلَّاجَةٌ, قِدْرٌ), kata kerja memasak dan adab makan.',
    iconName: 'Languages',
  },
  {
    id: 't5-ba-hayawan',
    name: 'فِي حَدِيقَةِ الْحَيَوَانَاتِ (Di Zoo & Haiwan)',
    year: 5,
    subject: 'Bahasa Arab',
    description: 'Haiwan liar pemangsa (أَسَدٌ, نَمِرٌ), gajah & zirafah (فِيلٌ, زَرَافَةٌ), perbandingan sifat dan adab berihsan.',
    iconName: 'Bug',
  },
  {
    id: 't5-ba-mihnah',
    name: 'مِهْنَتِي الْمُسْتَقْبَلِيَّةُ (Cita-cita & Kerjaya)',
    year: 5,
    subject: 'Bahasa Arab',
    description: 'Kerjaya doktor (طَبِيبٌ), guru (مُعَلِّمٌ), jurutera (مُهَنْدِسٌ), anggota keselamatan, tempat kerja dan cita-cita.',
    iconName: 'Sparkles',
  },
  {
    id: 't5-ba-arqam',
    name: 'الأَرْقَامُ (41-60) وَالتَّرَاكِيبُ (Nombor 41-60 & Tatabahasa)',
    year: 5,
    subject: 'Bahasa Arab',
    description: 'Nombor 41-60 (وَاحِدٌ وَأَرْبَعُونَ ... سِتُّونَ), fi\'il madhi & mudhari\', zhorof makan dan operasi matematik.',
    iconName: 'Hash',
  },
  {
    id: 't5-ba-naql',
    name: 'وَسَائِلُ النَّقْلِ وَالسَّفَرُ (Pengangkutan & Perjalanan)',
    year: 5,
    subject: 'Bahasa Arab',
    description: 'Kenderaan darat, laut & udara (قِطَارٌ, طَائِرَةٌ, سَفِينَةٌ), terminal (مَطَارٌ, مَحَطَّةٌ) dan keselamatan lalu lintas.',
    iconName: 'Bookmark',
  },

  // ==========================================
  // TAHUN 5 - BAHASA CINA (SK)
  // ==========================================
  {
    id: 't5-bc-huanjing',
    name: '大自然与环境保护 (Alam Semula Jadi & Pemuliharaan)',
    year: 5,
    subject: 'Bahasa Cina',
    description: 'Landskap alam (高山, 河流, 海洋), hutan hujan tropika, amalan 3R, kitar semula dan perlindungan hidupan liar.',
    iconName: 'Languages',
  },
  {
    id: 't5-bc-keji',
    name: '科技生活与发明 (Kehidupan Berteknologi & Ciptaan)',
    year: 5,
    subject: 'Bahasa Cina',
    description: 'Peranti pintar (电脑, 智能手机), pembelajaran digital, e-dompet, kecerdasan buatan (AI) dan reka cipta sains.',
    iconName: 'Sparkles',
  },
  {
    id: 't5-bc-zhiye',
    name: '我的理想与职业 (Aspirasi Cita-cita & Kerjaya)',
    year: 5,
    subject: 'Bahasa Cina',
    description: 'Profesion profesional (医生, 老师, 工程师, 科学家), atlet sukan, peribahasa motivasi dan kegigihan belajar.',
    iconName: 'Bookmark',
  },
  {
    id: 't5-bc-youyi',
    name: '友情与互助精神 (Persahabatan & Semangat Kerjasama)',
    year: 5,
    subject: 'Bahasa Cina',
    description: 'Sahabat sejati (好朋友, 知己), kerjasama gotong-royong, toleransi, simpulan bahasa persahabatan dan perpaduan kaum.',
    iconName: 'Users',
  },
  {
    id: 't5-bc-anquan',
    name: '安全常识与自护 (Kesedaran Keselamatan & Perlindungan Diri)',
    year: 5,
    subject: 'Bahasa Cina',
    description: 'Keselamatan jalan raya (斑马线, 安全带), pencegahan kebakaran, peti cemas (急救箱) dan perlindungan batasan diri.',
    iconName: 'PenTool',
  },

  // ==========================================
  // TAHUN 6 - MATEMATIK (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-mat-nombor',
    name: 'Nombor hingga 10 Juta & Operasi',
    year: 6,
    subject: 'Matematik',
    description: 'Nombor 7 digit, nombor perdana & gubahan, pecahan dan perpuluhan juta, serta operasi bergabung kurungan.',
    iconName: 'Hash',
  },
  {
    id: 't6-mat-pecahan-peratus',
    name: 'Pecahan, Perpuluhan & Peratus',
    year: 6,
    subject: 'Matematik',
    description: 'Pendaraban pecahan bercampur, perpuluhan 3 tempat, peratusan kenaikan, keuntungan dan diskaun.',
    iconName: 'Percent',
  },
  {
    id: 't6-mat-wang-kewangan',
    name: 'Wang, Untung Rugi & Celik Kewangan',
    year: 6,
    subject: 'Matematik',
    description: 'Harga kos, harga jual, untung, rugi, diskaun, rebat, baucar, cukai perkhidmatan, insurans, aset & liabiliti.',
    iconName: 'Banknote',
  },
  {
    id: 't6-mat-masa-ruang',
    name: 'Masa, Zon Waktu & Ruang',
    year: 6,
    subject: 'Matematik',
    description: 'Zon masa antarabangsa (GMT), sudut pedalaman poligon, perimeter, luas gabungan 2D dan isi padu 3D.',
    iconName: 'Hourglass',
  },
  {
    id: 't6-mat-koordinat-data',
    name: 'Koordinat, Nisbah & Kebolehjadian',
    year: 6,
    subject: 'Matematik',
    description: 'Satah Cartes sukuan pertama, skala, nisbah termudah, min/mod/median/julat dan peristiwa kebolehjadian.',
    iconName: 'Compass',
  },

  // ==========================================
  // TAHUN 6 - SAINS (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-sn-manusia-saraf',
    name: 'Pembiakan Manusia & Sistem Saraf',
    year: 6,
    subject: 'Sains',
    description: 'Organ pembiakan lelaki & perempuan, persenyawaan dan fungsi sistem saraf pusat (otak & saraf tunjang).',
    iconName: 'Users',
  },
  {
    id: 't6-sn-mikro-interaksi',
    name: 'Mikroorganisma & Interaksi Hidupan',
    year: 6,
    subject: 'Sains',
    description: 'Fungi, bakteria, virus, proses hidup mikroorganisma, simbiosis (mutualisme, komensalisme, parasitisme).',
    iconName: 'FlaskConical',
  },
  {
    id: 't6-sn-daya-kelajuan',
    name: 'Daya, Tekanan & Kelajuan',
    year: 6,
    subject: 'Sains',
    description: 'Daya geseran, tekanan udara/atmosfera, dan pengiraan kelajuan kenderaan (laju = jarak / masa).',
    iconName: 'Gauge',
  },
  {
    id: 't6-sn-pengawetan-buangan',
    name: 'Pengawetan Makanan & Bahan Buangan',
    year: 6,
    subject: 'Sains',
    description: 'Pempasteuran, pengetinan, pengeringan, penjerukan, bahan terbiodegradasi dan amalan 5R.',
    iconName: 'ShieldCheck',
  },
  {
    id: 't6-sn-gerhana-mesin',
    name: 'Gerhana & Mesin Kompleks',
    year: 6,
    subject: 'Sains',
    description: 'Fenomena Gerhana Bulan & Matahari serta gabungan mesin ringkas pada basikal dan kren.',
    iconName: 'Moon',
  },

  // ==========================================
  // TAHUN 6 - BAHASA MELAYU (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-bm-tatabahasa',
    name: 'Tatabahasa Lanjutan & Morfologi',
    year: 6,
    subject: 'Bahasa Melayu',
    description: 'Kata majmuk mantap, kata ganda berentak, hukum D-M, dan kesalahan tatabahasa lazim.',
    iconName: 'BookOpen',
  },
  {
    id: 't6-bm-sintaksis',
    name: 'Sintaksis & Pembinaan Ayat',
    year: 6,
    subject: 'Bahasa Melayu',
    description: 'Ayat pasif diri pertama/kedua/ketiga, ayat susunan songsang, dan cakap ajuk / cakap pindah.',
    iconName: 'Layers',
  },
  {
    id: 't6-bm-peribahasa',
    name: 'Peribahasa, Kiasan & Seni Bahasa',
    year: 6,
    subject: 'Bahasa Melayu',
    description: 'Peribahasa perpaduan, perumpamaan, simpulan bahasa kiasan dan penghayatan puisi sastera.',
    iconName: 'Bookmark',
  },
  {
    id: 't6-bm-pemahaman',
    name: 'Pemahaman Petikan & Kosa Kata Kritis',
    year: 6,
    subject: 'Bahasa Melayu',
    description: 'Analisis petikan kritis, wacana pelancongan inap desa, sains, dan perpaduan nasional.',
    iconName: 'FileText',
  },

  // ==========================================
  // TAHUN 6 - BAHASA INGGERIS (CEFR A2 HIGH / B1 ACADEMY STARS 6)
  // ==========================================
  {
    id: 't6-bi-emergencies',
    name: 'Emergencies & Past Tenses',
    year: 6,
    subject: 'Bahasa Inggeris',
    description: 'Past continuous vs past simple with while/when, first aid and emergency responses.',
    iconName: 'AlertTriangle',
  },
  {
    id: 't6-bi-passive',
    name: 'Passive Voice & Manufacturing',
    year: 6,
    subject: 'Bahasa Inggeris',
    description: 'Present passive sentences (is/are + past participle), materials, goods and inventions.',
    iconName: 'Factory',
  },
  {
    id: 't6-bi-conditionals',
    name: 'Conditionals & Future Predictions',
    year: 6,
    subject: 'Bahasa Inggeris',
    description: 'Zero & first conditional (if + present, will + verb), relative pronouns (who, which, where).',
    iconName: 'SlidersHorizontal',
  },
  {
    id: 't6-bi-space',
    name: 'Space Exploration & Connectors',
    year: 6,
    subject: 'Bahasa Inggeris',
    description: 'Connectors of contrast (although, however) and space exploration texts.',
    iconName: 'Compass',
  },

  // ==========================================
  // TAHUN 6 - PENDIDIKAN ISLAM (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-pi-quran-tajwid',
    name: 'Al-Quran & Tajwid Lanjutan',
    year: 6,
    subject: 'Pendidikan Islam',
    description: 'Mad Wajib Muttasil, Mad Jaiz Munfasil, Mad Asli, waqaf dan tadabbur Surah Al-Qadr.',
    iconName: 'BookOpen',
  },
  {
    id: 't6-pi-akidah',
    name: 'Akidah: Rukun Iman Lanjutan',
    year: 6,
    subject: 'Pendidikan Islam',
    description: 'Beriman kepada Qada\' dan Qadar, nama Allah Al-Muntaqim & Al-Muqtadir, serta menjauhi syirik.',
    iconName: 'Sparkles',
  },
  {
    id: 't6-pi-ibadah',
    name: 'Ibadah: Solat Jenazah & Hari Raya',
    year: 6,
    subject: 'Pendidikan Islam',
    description: 'Rukun dan kaifiat Solat Jenazah (4 takbir), Solat Sunat Aidilfitri/Aidiladha.',
    iconName: 'Sun',
  },
  {
    id: 't6-pi-sirah-adab',
    name: 'Sirah & Pembukaan Kota Mekah',
    year: 6,
    subject: 'Pendidikan Islam',
    description: 'Peristiwa Fathu Makkah (Tahun 8 H), adab berjual beli dan menjaga kemudahan awam.',
    iconName: 'Users',
  },

  // ==========================================
  // TAHUN 6 - BAHASA ARAB (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-ba-riyadah',
    name: 'يَوْمُ الرِّيَاضَةِ الْمَدْرَسِيَّةُ (Hari Sukan)',
    year: 6,
    subject: 'Bahasa Arab',
    description: 'Sukan bola sepak (كُرَةُ الْقَدَمِ), lumba lari (سِبَاقُ الْجَرْيِ), peralatan sukan dan sorakan.',
    iconName: 'Activity',
  },
  {
    id: 't6-ba-matbakh',
    name: 'فِي مَطْبَخِ أُمِّي (Di Dapur Ibu)',
    year: 6,
    subject: 'Bahasa Arab',
    description: 'Peti sejuk (ثَلَّاجَةٌ), kata kerja memasak (تَطْبُخُ), hidangan dan bahan masakan.',
    iconName: 'Sparkles',
  },
  {
    id: 't6-ba-mihnah',
    name: 'مِهْنَتِي فِي الْمُسْتَقْبَلِ (Kerjaya Saya)',
    year: 6,
    subject: 'Bahasa Arab',
    description: 'Cita-cita kerjaya: doktor (طَبِيبٌ), guru, jurutera, dan polis.',
    iconName: 'Bookmark',
  },

  // ==========================================
  // TAHUN 6 - BAHASA CINA (KSSR SEMAKAN)
  // ==========================================
  {
    id: 't6-bc-lixiang',
    name: '成长与理想 (Pembesaran & Impian)',
    year: 6,
    subject: 'Bahasa Cina',
    description: 'Impian kerjaya, nilai kegigihan belajar dan peribahasa (一分耕耘，一分收获).',
    iconName: 'Bookmark',
  },
  {
    id: 't6-bc-keji-huanbao',
    name: '科技与环保 (Sains & Alam Sekitar)',
    year: 6,
    subject: 'Bahasa Cina',
    description: 'Pengasingan sampah (垃圾分类), kecerdasan buatan (人工智能), dan pemeliharaan bumi hijau.',
    iconName: 'Globe',
  },
  {
    id: 't6-bc-chengyu',
    name: '文学修辞与成语 (Tatabahasa & Peribahasa)',
    year: 6,
    subject: 'Bahasa Cina',
    description: 'Peribahasa perpaduan (众志成城), simpulan bahasa empat aksara dan apresiasi sastera.',
    iconName: 'PenTool',
  },
];

export const INITIAL_KSSR_QUESTIONS: QuizQuestion[] = [
  ...MATEMATIK_TAHUN_1_QUESTIONS,
  ...SAINS_TAHUN_1_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_1_QUESTIONS,
  ...ENGLISH_TAHUN_1_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_1_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_1_QUESTIONS,
  ...BAHASA_CINA_TAHUN_1_QUESTIONS,
  ...MATEMATIK_TAHUN_2_QUESTIONS,
  ...SAINS_TAHUN_2_QUESTIONS,
  ...ENGLISH_TAHUN_2_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_2_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_2_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_2_QUESTIONS,
  ...BAHASA_CINA_TAHUN_2_QUESTIONS,
  ...MATEMATIK_TAHUN_3_QUESTIONS,
  ...SAINS_TAHUN_3_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_3_QUESTIONS,
  ...ENGLISH_TAHUN_3_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_3_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_3_QUESTIONS,
  ...BAHASA_CINA_TAHUN_3_QUESTIONS,
  ...MATEMATIK_TAHUN_4_KBAT_QUESTIONS,
  ...SAINS_TAHUN_4_QUESTIONS,
  ...ENGLISH_TAHUN_4_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_4_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_4_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_4_QUESTIONS,
  ...BAHASA_CINA_TAHUN_4_QUESTIONS,
  ...MATEMATIK_TAHUN_5_QUESTIONS,
  ...SAINS_TAHUN_5_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_5_QUESTIONS,
  ...ENGLISH_TAHUN_5_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_5_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_5_QUESTIONS,
  ...BAHASA_CINA_TAHUN_5_QUESTIONS,
  ...MATEMATIK_TAHUN_6_QUESTIONS,
  ...SAINS_TAHUN_6_QUESTIONS,
  ...BAHASA_MELAYU_TAHUN_6_QUESTIONS,
  ...ENGLISH_TAHUN_6_QUESTIONS,
  ...PENDIDIKAN_ISLAM_TAHUN_6_QUESTIONS,
  ...BAHASA_ARAB_TAHUN_6_QUESTIONS,
  ...BAHASA_CINA_TAHUN_6_QUESTIONS,
];
