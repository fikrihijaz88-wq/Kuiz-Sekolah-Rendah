import React, { useState } from 'react';
import { YearLevel, Subject, QuizQuestion } from '../types';
import { Sparkles, Loader2, Play, Code, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface AIGeneratorViewProps {
  onLoadQuestionsIntoQuiz: (questions: QuizQuestion[]) => void;
  onOpenSchemaWithQuestions: (questions: QuizQuestion[]) => void;
}

const SYLLABUS_TOPICS_BY_LEVEL: Record<string, string[]> = {
  '1-Matematik': [
    'Nombor hingga 100',
    'Tambah dan Tolak Asas',
    'Pecahan Mudah (Satu Perdua & Satu Perempat)',
    'Wang hingga RM10',
    'Masa, Waktu & Bentuk Ruang',
  ],
  '1-Sains': [
    'Kemahiran Saintifik & 5 Deria Manusia',
    'Benda Hidup dan Benda Bukan Hidup',
    'Bahagian Tubuh Haiwan & Ciri Fizikal',
    'Bahagian Tubuh Tumbuhan & Kepentingannya',
    'Magnet & Bentuk Bentuk Muka Bumi',
  ],
  '1-Bahasa Melayu': [
    'Kemahiran Mendengar & Bertutur Asas',
    'Kemahiran Membaca & Memahami Ayat Mudah',
    'Kemahiran Menulis Ayat Tunggal & Ejaan',
    'Seni Bahasa, Pantun & Lagu Kanak-kanak',
    'Tatabahasa Asas (Kata Nama, Kata Kerja, Kata Adjektif)',
  ],
  '1-Bahasa Inggeris': [
    'Friends & Greetings (CEFR A1)',
    'At School & Classroom Objects',
    'My Family and Pets',
    'Colours, Shapes and Numbers (1-20)',
    'Lunchtime, Food and Drinks',
  ],
  '1-Pendidikan Islam': [
    'Al-Quran & Huruf Hijaiyyah Bersambung',
    'Akidah: Rukun Iman & Nama Allah As-Salam',
    'Ibadah: Bersuci & Rukun Wuduk',
    'Sirah: Peristiwa Kelahiran Nabi Muhammad SAW',
    'Adab: Menghormati Ibu Bapa & Pelajaran Jawi Asas',
  ],
  '1-Bahasa Arab': [
    'هَيَّا نَتَعَرَّفُ إِلَى الْحُرُوفِ (Huruf Hijaiyyah Berbaris)',
    'أَنَا وَأُسْرَتِي (Saya dan Keluarga)',
    'أَدَوَاتِي الْمَدْرَسِيَّةُ (Peralatan Sekolah Saya)',
    'جِسْمِي السَّلِيمُ (Anggota Badan Asas)',
    'الْأَلْوَانُ وَالْأَرْقَامُ (Warna dan Nombor 1-10)',
  ],
  '1-Bahasa Cina': [
    '早安与礼貌问候 (Selamat Pagi & Ucapan Sopan)',
    '我的五官与身体 (Pancaindera & Anggota Badan)',
    '可爱的家庭 (Keluarga Saya yang Mesra)',
    '文具与教室 (Alat Tulis & Bilik Darjah)',
    '数字与颜色 (Nombor 1-10 & Warna-warni)',
  ],
  '2-Matematik': [
    'Nombor hingga 1,000 (Nilai tempat & Tertib)',
    'Operasi Asas (Tambah & Tolak)',
    'Operasi Asas (Darab & Bahagi Asas)',
    'Wang hingga RM100 (Kertas & Syiling)',
    'Masa dan Waktu (Muka jam analog & digital)',
    'Pecahan Mudah (Satu perdua & Satu perempat)',
  ],
  '2-Bahasa Inggeris': [
    'Vocabulary: Animals & Pets (CEFR A1)',
    'Vocabulary: At School & Classroom Items',
    'Vocabulary: Family, Home & Food',
    'Grammar: Simple Present Tense & Pronouns (He/She/It)',
    'Prepositions of Place (in, on, under, next to)',
    'Basic Phonics & Spelling (Letter sounds & rhymes)',
  ],
  '2-Sains': [
    'Kemahiran Saintifik & Peraturan Bilik Sains',
    'Manusia: Tumbesaran & Pewarisan Ciri',
    'Haiwan: Pembiakan & Kitar Hidup',
    'Tumbuh-tumbuhan: Percambahan & Tumbesaran',
    'Terang, Gelap & Bayang-bayang',
    'Elektrik: Komponen Litar, Konduktor & Penebat',
    'Campuran & Keterlarutan Bahan',
    'Bumi: Bentuk Muka Bumi & Kitaran Air Semula Jadi',
  ],
  '3-Matematik': [
    'Nombor hingga 10,000 (Nilai Tempat, Digit & Bundar)',
    'Operasi Asas Tambah & Tolak (Mengumpul Semula)',
    'Operasi Darab & Bahagi (Sifir 6, 7, 8, 9)',
    'Pecahan Wajar, Pecahan Setara & Bentuk Termudah',
    'Perpuluhan & Peratus',
    'Wang hingga RM10,000 (Operasi Asas & Simpanan)',
    'Masa, Waktu, Ukuran Panjang, Jisim & Ruang',
  ],
  '3-Sains': [
    'Kemahiran Saintifik & Peraturan Bilik Sains',
    'Manusia: Jenis Gigi, Struktur Gigi & Laluan Pencernaan',
    'Haiwan: Tabiat Pemakanan & Kegigian Haiwan',
    'Tumbuh-tumbuhan: Cara Pembiakan Tumbuhan',
    'Pengukuran: Luas & Isi Padu',
    'Ketumpatan: Objek Terapung dan Tenggelam',
    'Asid dan Alkali (Kertas Litmus Merah & Biru)',
    'Sistem Suria: Planet & Mesin Ringkas Takal',
  ],
  '3-Bahasa Melayu': [
    'Kemahiran Mendengar, Bertutur & Membaca Pemahaman',
    'Tatabahasa: Kata Ganti Nama Diri Istana & Kata Adjektif',
    'Kata Tugas: Kata Sendi Nama, Kata Hubung & Kata Seru',
    'Imbuhan: Awalan meN-, peN-, beR- & Akhiran -an, -kan',
    'Simpulan Bahasa & Pantun Nasihat 4 Kerat',
    'Membina Ayat Tunggal, Ayat Majmuk & Ejaan',
  ],
  '3-Bahasa Inggeris': [
    'Welcome & Telling Time (Half past / o\'clock) (CEFR A1)',
    'Everyday Routines & Adverbs of Frequency',
    'Right Now: Present Continuous Tense & Sports',
    'Food, Please! Countable/Uncountable & Some/Any',
    'Out and About: Rules, Signs (Must / Mustn\'t)',
    'Past Simple: Was and Were',
  ],
  '3-Pendidikan Islam': [
    'Al-Quran & Tajwid (Hukum Izhar Halqi & Idgham)',
    'Akidah: Beriman kepada Kitab & Nama Allah Al-Alim/Al-Basir',
    'Ibadah: Solat Berjemaah (27 Darjat) & Syarat Sah Solat',
    'Sirah: Peristiwa Hijrah ke Madinah & Muhajirin-Ansar',
    'Adab: Menuntut Ilmu, Menghormati Guru & Jawi Asas',
  ],
  '3-Bahasa Arab': [
    'تَفَضَّلْ إِلَى الْفَصْلِ (Di Bilik Darjah & Peralatan)',
    'مَلَابِسِي الْجَمِيلَةُ (Pakaian Saya yang Cantik)',
    'الْأَلْوَانُ حَوْلَنَا (Warna-warna di Sekeliling Kita)',
    'الْأَرْقَامُ وَالأَعْدَادُ (Nombor 11-20 & 1-30)',
    'الْوَقْتُ وَالسَّاعَةُ (Masa dan Waktu Asas)',
  ],
  '3-Bahasa Cina': [
    '学校与课堂生活 (Kehidupan Sekolah & Perpustakaan)',
    '家庭与亲情 (Keluarga & Kasih Sayang)',
    '大自然的奥妙与天气 (Keajaiban Alam & Cuaca)',
    '健康生活与饮食 (Gaya Hidup Sihat & Pemakanan)',
    '传统节日与文化 (Perayaan Kuih Bulan & Tradisi)',
  ],
  '4-Matematik': [
    'Nombor hingga 100,000 (Nilai digit & Bundar)',
    'Pecahan, Perpuluhan & Peratus',
    'Wang hingga RM100,000 & Pengurusan Kewangan',
    'Masa dan Waktu (Sistem 24 jam & Dekad/Abad)',
    'Panjang, Jisim & Isi Padu Cecair',
    'Koordinat Suku Pertama, Nisbah & Kadaran',
    'Penyelesaian Masalah KBAT (Aras Rendah-Sederhana)',
  ],
  '4-Sains': [
    'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    'Manusia: Organ Pernafasan, Perkumuhan & Rangsangan',
    'Haiwan: Organ Pernafasan & Pengelasan Vertebrata',
    'Tumbuh-tumbuhan: Gerak Balas & Fotosintesis',
    'Sifat Cahaya: Pantulan, Pembiasan & Pergerakan Lurus',
    'Bunyi & Tenaga: Bentuk & Perubahan Tenaga',
    'Sifat Bahan & Mesin Ringkas (Tuas)',
    'Bumi: Graviti & Putaran Bumi (Siang dan Malam)',
  ],
  '4-Bahasa Inggeris': [
    'Past Simple Tense (Regular -ed & Irregular verbs)',
    'Comparatives & Superlatives (Comparing adjectives)',
    'Modals (must, mustn\'t, should, can)',
    'Reading Comprehension (Short passage with inference)',
    'Connectors (because, so, although, but, and)',
    'Everyday Conversation & Social Contexts',
  ],
  '2-Pendidikan Islam': [
    'Al-Quran & Tajwid (Huruf Hijaiyyah & Surah Pilihan)',
    'Akidah (Rukun Iman, Rukun Islam & Sifat Allah)',
    'Ibadah (Wuduk, Bersuci & Solat Fardhu)',
    'Sirah & Akhlak (Kelahiran Nabi Muhammad SAW & Adab Harian)',
    'Pelajaran Jawi (Suku Kata Terbuka, Tertutup & Diftong)',
  ],
  '2-Bahasa Melayu': [
    'Golongan Kata & Tatabahasa Asas',
    'Kata Tugas & Penjodoh Bilangan',
    'Imbuhan & Pembentukan Kata',
    'Pemahaman Petikan & Peribahasa Mudah',
    'Struktur Ayat & Tanda Baca',
  ],
  '4-Pendidikan Islam': [
    'Al-Quran & Tajwid (Hukum Nun Sakinah & Surah Pilihan)',
    'Akidah (Hari Kiamat & Sifat Al-Adl serta Al-Alim)',
    'Ibadah (Mandi Wajib, Solat Jumaat & Batal Solat)',
    'Sirah & Akhlak (Peristiwa Hijrah & Adab Kemasyarakatan)',
    'Pelajaran Jawi (Kata Pinjaman, Imbuhan & Ayat Tradisi)',
  ],
  '4-Bahasa Melayu': [
    'Morfologi & Golongan Kata Lanjutan',
    'Kata Tugas & Sistem Sintaksis',
    'Imbuhan Lanjutan, Kata Majmuk & Kata Ganda',
    'Pemahaman Prosa, Puisi & Seni Bahasa',
    'Bina Ayat, Sintaksis & Sistem Ejaan',
  ],
  '5-Matematik': [
    'Nombor Bulat & Operasi Asas hingga 1,000,000 (Nombor Perdana & Pola)',
    'Pecahan, Perpuluhan (3 tempat) dan Peratus',
    'Wang hingga RM1,000,000 (Faedah & Pelaburan)',
    'Masa dan Waktu (Abad, Dekad, Tahun)',
    'Ukuran & Sukatan (Panjang km/m, Jisim kg/g, Isi Padu l/ml)',
    'Ruang, Poligon Sekata, Sudut & Luas Gabungan',
    'Koordinat Satah Cartes, Nisbah dan Kadaran',
    'Pengurusan Data (Mod, Median, Min, Julat)',
  ],
  '5-Sains': [
    'Kemahiran Saintifik & Peraturan Bilik Sains',
    'Manusia: Sistem Rangka & Peredaran Darah',
    'Haiwan: Kemandirian Spesies & Rantai Makanan',
    'Tumbuh-tumbuhan: Kemandirian & Agen Pencaran Biji Benih',
    'Elektrik: Litar Bersiri & Selari',
    'Haba, Suhu & Pengujian Asid Alkali Litmus',
    'Bumi, Fasa Bulan, Putaran & Kestabilan Binaan',
  ],
  '5-Bahasa Melayu': [
    'Morfologi: Kata Ganti Diri Istana & Kata Adjektif Pancaindera',
    'Sintaksis: Kata Pemeri, Kata Hubung Pancangan & Ayat Songsang',
    'Imbuhan: Apitan memper-...-kan & Kata Sisipan (-el-, -er-, -em-, -in-)',
    'Seni Bahasa: Peribahasa Kiasan, Pantun Nasihat & Sajak',
    'Pemahaman Petikan Rencana & Ulasan Kritis Nilai Murni',
  ],
  '5-Bahasa Inggeris': [
    'Towns and Cities (There is/are & Comparatives)',
    'Wild Life & Endangered Animals (Superlatives & Habitats)',
    'Learning World & School Routines (Present Continuous)',
    'Food and Health (Quantifiers: much, many, plenty of)',
    'Sport & Biographies (Past Simple Irregular Verbs)',
    'Going Away & Travel Plans (Future with "be going to")',
  ],
  '5-Pendidikan Islam': [
    'Al-Quran & Tajwid (Hukum Mim Sakinah & Surah Al-Qadr)',
    'Hadis (Mencegah Kemungkaran & Tanggungjawab)',
    'Akidah (Sifat Al-Khabir, Al-Basir & Hari Kiamat)',
    'Ibadah (Solat Jenazah 4 Takbir, Tayammum & Solat Berjemaah)',
    'Sirah (Pembukaan Kota Mekah & Khutbah Haji Wada)',
    'Akhlak Islamiah (Adab Mengasihi Ibu Bapa & Jual Beli)',
    'Pelajaran Jawi (Kata Pinjaman Bahasa Inggeris & Arab)',
  ],
  '2-Bahasa Arab': [
    'هَيَّا نَتَعَرَّفُ إِلَى الْحُرُوفِ (Huruf Hijaiyyah Berbaris)',
    'أَنَا أُحِبُّ أُسْرَتِي (Keluarga Saya)',
    'جِسْمِي السَّلِيمُ (Anggota Badan & Kesihatan)',
    'أُحِبُّ مَدْرَسَتِي (Peralatan Sekolah & Bilik Darjah)',
    'الْأَرْقَامُ وَالأَعْدَادُ (Nombor 1-20)',
    'الْفَوَاكِهُ اللَّذِيذَةُ (Buah-buahan)',
  ],
  '4-Bahasa Arab': [
    'فِي الْفَصْلِ (Di Dalam Bilik Darjah)',
    'أَعْضَاءُ الْجِسْمِ (Anggota Badan Lanjutan)',
    'أُسْرَتِي الْحَبِيبَةُ (Keluarga & Kata Ganti Diri)',
    'مَلَابِسِي الْجَمِيلَةُ (Pakaian & Warna)',
    'الْأَرْقَامُ وَالأَعْدَادُ (Nombor 1-100)',
    'فِي حَدِيقَةِ الْحَيَوَانَاتِ (Haiwan & Sifat)',
  ],
  '5-Bahasa Arab': [
    'فِي مَطْبَخِي (Di Dapur & Peralatan Memasak)',
    'مَا أَجْمَلَ مَدْرَسَتِي (Kemudahan Sekolah & Bangunan)',
    'مَأْكُولَاتِي وَمَشْرُوبَاتِي (Makanan & Minuman Kegemaran)',
    'هَيَّا نَشْتَرِي (Jual Beli & Mata Wang)',
    'الْأَرْقَامُ وَالأَعْدَادُ (Nombor 1-200)',
    'الْوَقْتُ وَالسَّاعَةُ (Masa & Waktu)',
  ],
  '2-Bahasa Cina': [
    '问候与礼貌 (Salam & Kesopanan)',
    '我的身体 (Anggota Badan)',
    '我的家庭 (Keluarga Saya)',
    '学校与文具 (Sekolah & Alat Tulis)',
    '数字与颜色 (Nombor 1-20 & Warna)',
    '美味的水果 (Buah-buahan)',
  ],
  '4-Bahasa Cina': [
    '校园生活 (Kehidupan di Sekolah)',
    '我的爱好 (Hobi & Aktiviti Masa Lapang)',
    '衣服与装扮 (Pakaian & Aksesori)',
    '时间与节日 (Masa, Hari & Perayaan)',
    '交通工具 (Kenderaan & Perjalanan)',
    '美味的食物 (Makanan & Minuman)',
  ],
  '5-Bahasa Cina': [
    '我的志愿 (Cita-cita Saya)',
    '环保与大自然 (Cintai Alam Sekitar)',
    '传统节日与文化 (Perayaan & Kebudayaan)',
    '去旅行 (Melancong & Tempat Menarik)',
    '健康生活 (Gaya Hidup Sihat & Sukan)',
    '买卖与消费 (Jual Beli & Menabung)',
  ],
  '6-Matematik': [
    'Nombor hingga 10 Juta & Nombor Perdana',
    'Pecahan Juta & Perpuluhan Juta',
    'Pecahan, Perpuluhan (3 tempat) & Peratusan Kenaikan/Penurunan',
    'Wang, Untung Rugi, Diskaun, Cukai, Insurans, Aset & Liabiliti',
    'Masa: Zon Waktu Dunia (GMT) & Tempoh Masa',
    'Ukuran & Sukatan Gabungan (Panjang, Jisim, Isi Padu)',
    'Ruang: Sudut Pedalaman, Luas Gabungan 2D & Isi Padu 3D',
    'Koordinat Satah Cartes, Nisbah & Kadaran',
    'Pengurusan Data (Mod, Median, Min, Julat & Kebolehjadian)',
  ],
  '6-Sains': [
    'Kemahiran Saintifik: Pemboleh Ubah & Hipotesis Lanjutan',
    'Manusia: Sistem Pembiakan & Sistem Saraf Pusat/Periferi',
    'Mikroorganisma: Fungi, Bakteria, Virus & Proses Hidup',
    'Interaksi Antara Hidupan: Simbiosis (Mutualisme/Komensalisme/Parasitisme)',
    'Pemeliharaan & Pemuliharaan Hidupan Terancam',
    'Daya Geseran, Tekanan Udara & Formula Kelajuan (Laju = Jarak / Masa)',
    'Pengawetan Makanan: Pempasteuran, Pengetinan & Pengeringan',
    'Bahan Buangan: Terbiodegradasi & Amalan 5R',
    'Gerhana Bulan & Gerhana Matahari',
    'Mesin Kompleks: Gabungan Mesin Ringkas pada Basikal & Kren',
  ],
  '6-Bahasa Melayu': [
    'Tatabahasa: Kata Majmuk Mantap (Ejaan Bercantum) & Kata Ganda Berentak',
    'Sintaksis: Hukum D-M, Frasa Nama & Kesalahan Tatabahasa Lazim',
    'Ayat: Pasif Diri 1/2/3, Susunan Songsang & Cakap Ajuk/Pindah',
    'Peribahasa, Kiasan, Perumpamaan & Pantun 4 Kerat',
    'Pemahaman Kritis: Rencana Inap Desa, Sains & Ulasan Nilai Murni',
    'Morfologi: Imbuhan Apitan memper-...-kan & peN-...-an',
  ],
  '6-Bahasa Inggeris': [
    'Emergencies: Past Continuous vs Past Simple (While / When) (CEFR A2-B1)',
    'Life in the Past & Used to',
    'Adventure Sports & Present Perfect (Ever / Never)',
    'Cool Jobs & Relative Pronouns (Who, Which, Where)',
    'How is it made? Present Passive (is/are + Past Participle)',
    'What\'s your opinion? Zero & First Conditional (If + Present, Will)',
    'Space Exploration & Connectors (Although, However)',
  ],
  '6-Pendidikan Islam': [
    'Al-Quran & Tajwid: Mad Wajib Muttasil, Mad Jaiz Munfasil & Waqaf',
    'Akidah: Beriman kepada Qada\' dan Qadar & Nama Allah Al-Muqtadir',
    'Ibadah: Solat Jenazah (4 Takbir) & Solat Sunat Aidilfitri/Aidiladha',
    'Sirah: Peristiwa Fathu Makkah (Pembukaan Kota Mekah Tahun 8 H)',
    'Adab: Jual Beli Patuh Syariah & Menjaga Kemudahan Awam',
    'Pelajaran Jawi: Teks Karangan Jawi & Peribahasa',
  ],
  '6-Bahasa Arab': [
    'يَوْمُ الرِّيَاضَةِ الْمَدْرَسِيَّةُ (Hari Sukan Sekolah & Acara Larian)',
    'فِي مَطْبَخِ أُمِّي (Di Dapur Ibu & Peralatan Memasak)',
    'مِهْنَتِي فِي الْمُسْتَقْبَلِ (Kerjaya & Cita-cita Saya)',
    'زِيَارَةٌ إِلَى الْمَتْحَفِ (Lawatan ke Muzium & Mercu Tanda)',
    'الْحَيَوَانَاتُ فِي حَدِيقَةِ الْحَيَوَانِ (Haiwan di Zoo)',
  ],
  '6-Bahasa Cina': [
    '成长与理想 (Pembesaran & Impian Masa Hadapan)',
    '科技与环保 (Sains, Kecerdasan Buatan & Kitar Semula)',
    '环境保护与地球 (Pemuliharaan Alam Sekitar & Bumi Hijau)',
    '历史人物与美德 (Tokoh Sejarah & Nilai Murni)',
    '文学修辞与成语 (Tatabahasa & Peribahasa 众志成城)',
  ],
};

export const AIGeneratorView: React.FC<AIGeneratorViewProps> = ({
  onLoadQuestionsIntoQuiz,
  onOpenSchemaWithQuestions,
}) => {
  const [year, setYear] = useState<YearLevel>(2);
  const [subject, setSubject] = useState<Subject>('Matematik');
  const [topic, setTopic] = useState<string>(SYLLABUS_TOPICS_BY_LEVEL['2-Matematik'][0]);
  const [count, setCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('Campuran (Mudah & Sederhana)');
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [generatedQuestions, setGeneratedQuestions] = useState<QuizQuestion[] | null>(null);

  // When year or subject changes, reset topic to first available
  const handleYearChange = (newYear: YearLevel) => {
    setYear(newYear);
    const key = `${newYear}-${subject}`;
    const topics = SYLLABUS_TOPICS_BY_LEVEL[key] || [];
    setTopic(topics[0] || '');
  };

  const handleSubjectChange = (newSubject: Subject) => {
    setSubject(newSubject);
    const key = `${year}-${newSubject}`;
    const topics = SYLLABUS_TOPICS_BY_LEVEL[key] || [];
    setTopic(topics[0] || '');
  };

  const currentTopicKey = `${year}-${subject}`;
  const availableTopics = SYLLABUS_TOPICS_BY_LEVEL[currentTopicKey] || [];

  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year,
          subject,
          topic,
          count,
          difficulty,
          customPrompt,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Gagal menjana soalan kuiz.');
      }

      const questions: QuizQuestion[] = result.data.questions || [];
      if (questions.length === 0) {
        throw new Error('Tiada soalan dikembalikan daripada sistem AI.');
      }

      setGeneratedQuestions(questions);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message ||
          'Ralat ketika menghubungi perkhidmatan AI. Sila semak sambungan rangkaian atau cuba lagi.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Generator Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Penjana Soalan AI KSSR Semakan (Gemini 3.8)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Hasilkan soalan aneka pilihan KSSR Semakan baharu dengan 4 pilihan jawapan (A, B, C, D) & ulasan pedagogi mengikut skema JSON rasmi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Year selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Tahap Murid (Tahun)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <button
                type="button"
                id="gen-select-year-1"
                onClick={() => handleYearChange(1)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 1
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 1
              </button>
              <button
                type="button"
                id="gen-select-year-2"
                onClick={() => handleYearChange(2)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 2
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 2
              </button>
              <button
                type="button"
                id="gen-select-year-3"
                onClick={() => handleYearChange(3)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 3
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 3
              </button>
              <button
                type="button"
                id="gen-select-year-4"
                onClick={() => handleYearChange(4)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 4
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 4
              </button>
              <button
                type="button"
                id="gen-select-year-5"
                onClick={() => handleYearChange(5)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 5
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 5
              </button>
              <button
                type="button"
                id="gen-select-year-6"
                onClick={() => handleYearChange(6)}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition cursor-pointer text-center ${
                  year === 6
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 6
              </button>
            </div>
          </div>

          {/* Subject selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Mata Pelajaran
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-2">
              <button
                type="button"
                id="gen-select-subject-math"
                onClick={() => handleSubjectChange('Matematik')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Matematik'
                    ? 'border-blue-600 bg-blue-50 text-blue-950 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Matematik
              </button>
              <button
                type="button"
                id="gen-select-subject-science"
                onClick={() => handleSubjectChange('Sains')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Sains'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Sains
              </button>
              <button
                type="button"
                id="gen-select-subject-bm"
                onClick={() => handleSubjectChange('Bahasa Melayu')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Bahasa Melayu'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 ring-2 ring-amber-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                B. Melayu
              </button>
              <button
                type="button"
                id="gen-select-subject-english"
                onClick={() => handleSubjectChange('Bahasa Inggeris')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Bahasa Inggeris'
                    ? 'border-purple-600 bg-purple-50 text-purple-950 ring-2 ring-purple-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                English
              </button>
              <button
                type="button"
                id="gen-select-subject-islamic"
                onClick={() => handleSubjectChange('Pendidikan Islam')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Pendidikan Islam'
                    ? 'border-teal-600 bg-teal-50 text-teal-950 ring-2 ring-teal-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Pend. Islam
              </button>
              <button
                type="button"
                id="gen-select-subject-arabic"
                onClick={() => handleSubjectChange('Bahasa Arab')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Bahasa Arab'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Bahasa Arab
              </button>
              <button
                type="button"
                id="gen-select-subject-chinese"
                onClick={() => handleSubjectChange('Bahasa Cina')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Bahasa Cina'
                    ? 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Bahasa Cina
              </button>
            </div>
          </div>

          {/* Topic Dropdown */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Topik Mengikut Sukatan KPM
            </label>
            <select
              id="gen-select-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {availableTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Question Count & Difficulty */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Bilangan Soalan
            </label>
            <div className="flex gap-2">
              {[3, 5, 8, 10].map((num) => (
                <button
                  key={num}
                  type="button"
                  id={`gen-count-${num}`}
                  onClick={() => setCount(num)}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                    count === num
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Aras Kesukaran
            </label>
            <select
              id="gen-select-difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Campuran (Mudah & Sederhana)">Campuran (Mudah & Sederhana)</option>
              <option value="Mudah">Mudah (Asas Penguasaan TP1-TP3)</option>
              <option value="Sederhana">Sederhana (Aplikasi TP4-TP5)</option>
              <option value="KBAT (Aras Rendah)">KBAT (Aras Rendah - Aplikasi Konteks Asas)</option>
              <option value="KBAT (Aras Sederhana)">KBAT (Aras Sederhana - Analisis Pelbagai Langkah)</option>
              <option value="KBAT (Aras Tinggi)">KBAT (Aras Tinggi - Menilai & Penaakulan Logik)</option>
              <option value="KBAT (Aras Rendah-Sederhana)">KBAT (Umum TP5-TP6)</option>
            </select>
          </div>

          {/* Custom Focus Prompt */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Fokus Khusus Guru (Pilihan Tambahan)
            </label>
            <input
              type="text"
              id="gen-custom-prompt"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder={
                subject === 'Matematik'
                  ? 'Contoh: Soalan cerita jual beli buku, melibatkan baki wang kertas...'
                  : 'Example: Focus on irregular verbs in past tense (went, saw, ate) or nature in Malaysia...'
              }
              className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
            <div>
              <strong className="block font-semibold">Ralat Penjanaan AI</strong>
              <p>{errorMsg}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            id="btn-generate-ai-questions"
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-sm hover:shadow transition disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sedang Menjana Soalan KSSR Semakan...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Jana {count} Soalan KSSR AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Results Preview */}
      {generatedQuestions && generatedQuestions.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {generatedQuestions.length} Soalan KSSR Berjaya Dijana
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Semua soalan mengandungi 4 pilihan jawapan (A, B, C, D), 1 jawapan betul, dan ulasan pedagogi.
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                id="btn-start-quiz-with-generated"
                onClick={() => onLoadQuestionsIntoQuiz(generatedQuestions)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Mula Kuiz Dengan Soalan Ini</span>
              </button>

              <button
                id="btn-view-schema-generated"
                onClick={() => onOpenSchemaWithQuestions(generatedQuestions)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition cursor-pointer"
              >
                <Code className="w-4 h-4" />
                <span>Lihat JSON</span>
              </button>
            </div>
          </div>

          {/* Cards List Preview */}
          <div className="space-y-4">
            {generatedQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      Tahun {q.year} • {q.subject}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {q.difficulty}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Jawapan Betul: {q.correctAnswer}
                  </span>
                </div>

                {q.stimulus && (
                  <div className="mb-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs italic font-serif">
                    "{q.stimulus}"
                  </div>
                )}

                <p className="font-semibold text-slate-900 text-sm sm:text-base mb-3">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs sm:text-sm">
                  {(['A', 'B', 'C', 'D'] as const).map((optKey) => (
                    <div
                      key={optKey}
                      className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                        q.correctAnswer === optKey
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      <span className="font-bold w-5">{optKey}.</span>
                      <span>{q.options[optKey]}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                  <strong className="text-indigo-700 font-semibold mr-1">
                    Ulasan Pedagogi:
                  </strong>
                  {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
