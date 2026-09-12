import { QuizQuestion } from '../types';

export const SAINS_TAHUN_2_QUESTIONS: QuizQuestion[] = [
  // =========================================================================
  // TOPIK 1: KEMAHIRAN SAINTIFIK & PERATURAN BILIK SAINS (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-kemahiran-01',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Mudah',
    learningStandard: 'SK 1.1 / SP 1.1.1 (Memerhati)',
    stimulus: 'Aina memerhatikan sebiji buah durian di atas meja menggunakan organ derianya.',
    question: 'Antara berikut, deria manakah yang digunakan oleh Aina untuk mengetahui bahawa kulit buah durian itu berduri dan tajam?',
    options: {
      A: 'Deria sentuhan (kulit)',
      B: 'Deria pendengaran (telinga)',
      C: 'Deria rasa (lidah)',
      D: 'Deria bau (hidung)',
    },
    correctAnswer: 'A',
    explanation: 'Deria sentuhan melalui kulit membolehkan kita mengesan tekstur permukaan seperti tajam, kasar, halus atau licin.',
  },
  {
    id: 't2-sn-kemahiran-02',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.2 (Mengelas)',
    diagram: {
      title: 'Rajah 1: Pengelasan Haiwan Mengikut Litupan Badan',
      type: 'custom_svg',
      caption: 'Kumpulan X mempunyai bulu pelepah, manakala Kumpulan Y mempunyai sisik.',
      svgContent: `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="130" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="20" y="20" width="140" height="90" rx="8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="90" y="42" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Kumpulan X</text>
        <text x="90" y="62" font-size="11" fill="#0c4a6e" text-anchor="middle">• Burung Helang</text>
        <text x="90" y="80" font-size="11" fill="#0c4a6e" text-anchor="middle">• Ayam</text>
        <text x="90" y="98" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">• [ Haiwan P ]</text>
        
        <rect x="180" y="20" width="140" height="90" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="250" y="42" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Kumpulan Y</text>
        <text x="250" y="62" font-size="11" fill="#78350f" text-anchor="middle">• Ikan Keli</text>
        <text x="250" y="80" font-size="11" fill="#78350f" text-anchor="middle">• Ular Sawa</text>
        <text x="250" y="98" font-size="11" font-weight="bold" fill="#d97706" text-anchor="middle">• Tenggiling</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 1, apakah haiwan yang paling sesuai mewakili Haiwan P dalam Kumpulan X?',
    options: {
      A: 'Itik',
      B: 'Ikan Emas',
      C: 'Buaya',
      D: 'Katak',
    },
    correctAnswer: 'A',
    explanation: 'Kumpulan X dikelaskan mengikut ciri berbulu pelepah (aves/unggas). Itik mempunyai bulu pelepah sama seperti ayam dan burung helang.',
  },
  {
    id: 't2-sn-kemahiran-03',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)',
    question: 'Apakah tindakan yang WAJIB murid lakukan sebelum masuk ke dalam Bilik Sains?',
    options: {
      A: 'Berbaris di luar dan menunggu arahan guru sebelum masuk',
      B: 'Terus berlari masuk untuk mendapatkan tempat duduk hadapan',
      C: 'Membawa makanan dan minuman ke meja makmal',
      D: 'Menyentuh semua radas sains di atas meja',
    },
    correctAnswer: 'A',
    explanation: 'Murid wajib beratur di luar bilik sains dan hanya boleh masuk selepas mendapat kebenaran dan arahan guru demi keselamatan.',
  },
  {
    id: 't2-sn-kemahiran-04',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.3 (Mengukur dan Menggunakan Nombor)',
    diagram: {
      title: 'Rajah 2: Mengukur Panjang Pensel Menggunakan Pembaris',
      type: 'custom_svg',
      caption: 'Pensel diletakkan dari tanda 0 cm hingga hujung mata pensel.',
      svgContent: `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="120" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>
        <!-- Pembaris -->
        <rect x="30" y="55" width="280" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" rx="3"/>
        <line x1="40" y1="55" x2="40" y2="75" stroke="#854d0e" stroke-width="2"/>
        <text x="40" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">0</text>
        <line x1="75" y1="55" x2="75" y2="70" stroke="#854d0e" stroke-width="1.5"/>
        <text x="75" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">2</text>
        <line x1="110" y1="55" x2="110" y2="70" stroke="#854d0e" stroke-width="1.5"/>
        <text x="110" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">4</text>
        <line x1="145" y1="55" x2="145" y2="70" stroke="#854d0e" stroke-width="1.5"/>
        <text x="145" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">6</text>
        <line x1="180" y1="55" x2="180" y2="75" stroke="#854d0e" stroke-width="2"/>
        <text x="180" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">8</text>
        <line x1="215" y1="55" x2="215" y2="70" stroke="#854d0e" stroke-width="1.5"/>
        <text x="215" y="88" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">10</text>
        <!-- Pensel -->
        <rect x="40" y="25" width="140" height="16" fill="#3b82f6" rx="2"/>
        <polygon points="180,25 200,33 180,41" fill="#fbcfe8"/>
        <polygon points="195,31 200,33 195,35" fill="#1e293b"/>
        <!-- Garis penunjuk -->
        <line x1="40" y1="18" x2="40" y2="52" stroke="#dc2626" stroke-dasharray="2 2" stroke-width="1.5"/>
        <line x1="200" y1="18" x2="200" y2="75" stroke="#dc2626" stroke-dasharray="2 2" stroke-width="1.5"/>
        <text x="200" y="88" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">9 cm</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 2, berapakah panjang pensel tersebut?',
    options: {
      A: '9 sentimeter (cm)',
      B: '7 sentimeter (cm)',
      C: '11 sentimeter (cm)',
      D: '15 sentimeter (cm)',
    },
    correctAnswer: 'A',
    explanation: 'Hujung pemadam pensel bermula tepat pada tanda 0 cm dan mata pensel berakhir tepat pada senggatan 9 cm. Maka panjang pensel ialah 9 cm.',
  },
  {
    id: 't2-sn-kemahiran-05',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)',
    question: 'Semasa menjalankan eksperimen, tabung uji yang dipegang oleh Danish terjatuh dan pecah. Apakah tindakan yang patut Danish lakukan dengan segera?',
    options: {
      A: 'Melaporkan kejadian itu kepada guru dengan segera',
      B: 'Kutip serpihan kaca dengan tangan kosong tanpa memakai sarung tangan',
      C: 'Menyembunyikan serpihan kaca di bawah meja',
      D: 'Berlari keluar meninggalkan bilik sains',
    },
    correctAnswer: 'A',
    explanation: 'Sebarang kemalangan, kecederaan atau radas kaca yang pecah di dalam bilik sains mesti dilaporkan serta-merta kepada guru.',
  },
  {
    id: 't2-sn-kemahiran-06',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.2 / SP 1.2.3 (Kemahiran Manipulatif)',
    diagram: {
      title: 'Rajah 3: Menyimpan Bikar dan Silinder Penyukat',
      type: 'custom_svg',
      caption: 'Radas sains dibersihkan dan dikeringkan sebelum disimpan.',
      svgContent: `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="110" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="40" y="20" width="100" height="70" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="90" y="45" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Langkah 1</text>
        <text x="90" y="65" font-size="10" fill="#166534" text-anchor="middle">Basuh dengan air</text>
        
        <path d="M 150 55 L 175 55" stroke="#047857" stroke-width="3" marker-end="url(#arrow)"/>
        
        <rect x="185" y="20" width="100" height="70" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="235" y="45" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Langkah 2</text>
        <text x="235" y="65" font-size="10" fill="#075985" text-anchor="middle">Kering & Simpan</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 3, mengapakah radas sains perlu dibersihkan dan dikeringkan dengan betul sebelum disimpan?',
    options: {
      A: 'Supaya radas bersih, selamat dan tidak rosak untuk kegunaan seterusnya',
      B: 'Supaya radas boleh ditukar menjadi baharu',
      C: 'Supaya radas tidak boleh digunakan lagi oleh murid lain',
      D: 'Supaya guru tidak dapat memeriksa radas tersebut',
    },
    correctAnswer: 'A',
    explanation: 'Membersihkan, mengeringkan dan menyimpan radas sains di tempat asalnya merupakan amalan kemahiran manipulatif yang menjamin keselamatan dan ketahanan peralatan.',
  },
  {
    id: 't2-sn-kemahiran-07',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 1.1 / SP 1.1.1 (Memerhati)',
    question: 'Amir membunyikan loceng basikalnya. Apakah organ deria yang terlibat untuk membuat pemerhatian tentang bunyi tersebut?',
    options: {
      A: 'Telinga (deria pendengaran)',
      B: 'Mata (deria penglihatan)',
      C: 'Lidah (deria rasa)',
      D: 'Hidung (deria bau)',
    },
    correctAnswer: 'A',
    explanation: 'Bunyi loceng dikesan oleh organ telinga melalui deria pendengaran.',
  },
  {
    id: 't2-sn-kemahiran-08',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.4 (Berkomunikasi)',
    question: 'Sekumpulan murid Tahun 2 merekodkan bilangan daun anak benih kacang hijau setiap 2 hari ke dalam sebuah jadual. Kemahiran proses sains apakah yang sedang mereka lakukan?',
    options: {
      A: 'Berkomunikasi',
      B: 'Membuat hipotesis',
      C: 'Mengawal pemboleh ubah',
      D: 'Mengeksperimen',
    },
    correctAnswer: 'A',
    explanation: 'Merekodkan dan mempersembahkan maklumat atau idea dalam bentuk jadual, carta, graf atau tulisan ialah kemahiran proses sains Berkomunikasi.',
  },
  {
    id: 't2-sn-kemahiran-09',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)',
    question: 'Mengapakah kita DILARANG sama sekali makan dan minum di dalam Bilik Sains?',
    options: {
      A: 'Makanan dan minuman boleh tercemar dengan bahan kimia berbahaya atau kuman di atas meja',
      B: 'Makanan akan menjadi sejuk dengan terlalu cepat',
      C: 'Supaya murid berasa lapar selepas kelas sains tamat',
      D: 'Meja makmal tidak mempunyai pinggan dan cawan',
    },
    correctAnswer: 'A',
    explanation: 'Bilik sains mengandungi pelbagai bahan kimia, radas dan sisa eksperimen yang boleh meracuni makanan dan membahayakan kesihatan jika termakan.',
  },
  {
    id: 't2-sn-kemahiran-10',
    year: 2,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik & Peraturan Bilik Sains',
    difficulty: 'Mudah',
    learningStandard: 'SK 1.2 / SP 1.2.2 (Mengendalikan Spesimen Hidup)',
    question: 'Selepas selesai menyiasat seekor siput babi di luar bilik darjah, apakah yang perlu murid lakukan terhadap spesimen hidup itu?',
    options: {
      A: 'Melepaskan siput babi semula ke habitat asalnya dengan cermat',
      B: 'Membuang siput babi ke dalam tong sampah',
      C: 'Menyimpan siput babi di dalam beg sekolah',
      D: 'Membiarkan siput babi terdedah di bawah terik matahari',
    },
    correctAnswer: 'A',
    explanation: 'Spesimen hidup mesti dikendalikan dengan betul dan cermat serta dilepaskan kembali ke habitat asalnya.',
  },

  // =========================================================================
  // TOPIK 2: MANUSIA (TUMBESARAN & PEWARISAN) (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-manusia-01',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Tumbesaran Manusia)',
    question: 'Apakah tiga perubahan fizikal yang dialami oleh manusia sejak peringkat bayi hingga kanak-kanak?',
    options: {
      A: 'Pertambahan tinggi, pertambahan berat badan, dan pertambahan saiz tapak kaki',
      B: 'Pengurangan saiz tapak tangan dan ketinggian',
      C: 'Perubahan bilangan jari tangan dan jari kaki',
      D: 'Perubahan warna darah dan tulang',
    },
    correctAnswer: 'A',
    explanation: 'Semasa membesar, manusia mengalami pertambahan ketinggian, berat badan dan saiz anggota badan seperti tapak kaki dan tangan.',
  },
  {
    id: 't2-sn-manusia-02',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.2 (Pewarisan Ciri)',
    diagram: {
      title: 'Rajah 4: Ciri-ciri Pewarisan Keluarga Adam',
      type: 'custom_svg',
      caption: 'Ibu dan bapa Adam mewariskan ciri fizikal kepada Adam.',
      svgContent: `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="140" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
        <rect x="25" y="20" width="130" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="90" y="40" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Bapa Adam</text>
        <text x="90" y="58" font-size="10" fill="#1d4ed8" text-anchor="middle">Rambut Kerinting</text>

        <rect x="185" y="20" width="130" height="50" rx="6" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
        <text x="250" y="40" font-size="11" font-weight="bold" fill="#831843" text-anchor="middle">Ibu Adam</text>
        <text x="250" y="58" font-size="10" fill="#be185d" text-anchor="middle">Iris Mata Hitam</text>

        <line x1="90" y1="70" x2="170" y2="90" stroke="#64748b" stroke-width="1.5"/>
        <line x1="250" y1="70" x2="170" y2="90" stroke="#64748b" stroke-width="1.5"/>

        <rect x="105" y="90" width="130" height="40" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="170" y="108" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Adam (Anak)</text>
        <text x="170" y="122" font-size="10" fill="#b45309" text-anchor="middle">Rambut: ?</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 4, ciri fizikal apakah yang diwarisi oleh Adam daripada bapanya?',
    options: {
      A: 'Jenis rambut kerinting',
      B: 'Warna baju yang sama',
      C: 'Kegemaran bermain bola',
      D: 'Saiz kasut yang sama',
    },
    correctAnswer: 'A',
    explanation: 'Ciri-ciri fizikal seperti jenis rambut (lurus atau kerinting), warna iris mata dan warna kulit diwarisi daripada ibu bapa atau keturunan.',
  },
  {
    id: 't2-sn-manusia-03',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.3 (Iris Mata)',
    question: 'Antara berikut, yang manakah merupakan ciri keturunan yang BOLEH diwarisi oleh seorang anak daripada ibu atau bapanya?',
    options: {
      A: 'Warna iris mata (contohnya coklat atau hitam)',
      B: 'Panjang kuku jari',
      C: 'Tali kasut yang dipakai',
      D: 'Warna beg sekolah',
    },
    correctAnswer: 'A',
    explanation: 'Warna iris mata merupakan ciri genetik semulajadi yang diwarisi daripada ibu bapa.',
  },
  {
    id: 't2-sn-manusia-04',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Carta Tumbesaran)',
    diagram: {
      title: 'Rajah 5: Ketinggian Sarah Mengikut Peringkat Umur',
      type: 'custom_svg',
      caption: 'Graf palang menunjukkan perubahan ketinggian Sarah dari umur 1 hingga 8 tahun.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Paksi -->
        <line x1="45" y1="105" x2="290" y2="105" stroke="#475569" stroke-width="1.5"/>
        <line x1="45" y1="20" x2="45" y2="105" stroke="#475569" stroke-width="1.5"/>
        <!-- Palang -->
        <rect x="70" y="80" width="35" height="25" fill="#93c5fd" rx="2"/>
        <text x="87" y="74" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">70cm</text>
        <text x="87" y="118" font-size="9" fill="#334155" text-anchor="middle">1 Tahun</text>

        <rect x="135" y="60" width="35" height="45" fill="#60a5fa" rx="2"/>
        <text x="152" y="54" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">95cm</text>
        <text x="152" y="118" font-size="9" fill="#334155" text-anchor="middle">4 Tahun</text>

        <rect x="200" y="35" width="35" height="70" fill="#2563eb" rx="2"/>
        <text x="217" y="29" font-size="9" fill="#1e40af" font-weight="bold" text-anchor="middle">120cm</text>
        <text x="217" y="118" font-size="9" fill="#334155" text-anchor="middle">8 Tahun</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 5, apakah kesimpulan yang boleh dibuat tentang tumbesaran Sarah?',
    options: {
      A: 'Ketinggian Sarah semakin bertambah apabila usianya meningkat',
      B: 'Ketinggian Sarah tidak berubah sejak umur 1 tahun',
      C: 'Sarah menjadi semakin rendah pada umur 8 tahun',
      D: 'Tumbesaran Sarah terhenti pada umur 4 tahun',
    },
    correctAnswer: 'A',
    explanation: 'Data menunjukkan ketinggian Sarah meningkat secara berperingkat iaitu 70 cm pada 1 tahun, 95 cm pada 4 tahun, dan 120 cm pada 8 tahun.',
  },
  {
    id: 't2-sn-manusia-05',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 3.1 / SP 3.1.2 (Pewarisan Daripada Datuk & Nenek)',
    question: 'Kedua-dua ibu dan bapa Daniel mempunyai rambut lurus, tetapi Daniel mempunyai rambut ikal sama seperti datuknya. Mengapakah keadaan ini boleh berlaku?',
    options: {
      A: 'Ciri fizikal juga boleh diwarisi daripada datuk atau nenek',
      B: 'Daniel tersalah menggunakan syampu rambut',
      C: 'Rambut Daniel akan menjadi lurus semula esok hari',
      D: 'Rambut ikal Daniel terjadi kerana Daniel suka bersukan',
    },
    correctAnswer: 'A',
    explanation: 'Pewarisan ciri boleh diwarisi daripada generasi terdahulu seperti datuk dan nenek selain daripada ibu bapa.',
  },
  {
    id: 't2-sn-manusia-06',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Tumbesaran Saiz)',
    question: 'Baju sekolah yang dipakai oleh Danish semasa di Tahun 1 kini menjadi sempit dan ketat apabila dia berada di Tahun 2. Mengapakah perkara ini berlaku?',
    options: {
      A: 'Saiz badan Danish telah membesar dan ketinggiannya bertambah',
      B: 'Baju sekolah tersebut telah mengecil kerana dibasuh',
      C: 'Danish tidak memakai baju itu dengan betul',
      D: 'Baju sekolah Tahun 1 tidak boleh dipakai di Tahun 2',
    },
    correctAnswer: 'A',
    explanation: 'Kanak-kanak mengalami proses tumbesaran fizikal yang menyebabkan saiz badan bertambah besar dan tinggi.',
  },
  {
    id: 't2-sn-manusia-07',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Perbezaan Antara Individu)',
    question: 'Walaupun murid-murid di dalam kelas 2 Amanah mempunyai umur yang sama (8 tahun), mengapakah ketinggian dan berat mereka berbeza-beza?',
    options: {
      A: 'Tumbesaran adalah berbeza antara individu kerana faktor genetik dan pemakanan',
      B: 'Kerana ada murid yang tidak belajar sains',
      C: 'Kerana mereka menggunakan pembaris yang berlainan warna',
      D: 'Kerana tarikh lahir mereka berbeza hari',
    },
    correctAnswer: 'A',
    explanation: 'Kadar tumbesaran setiap kanak-kanak adalah unik dan dipengaruhi oleh faktor keturunan (genetik) serta amalan pemakanan seimbang.',
  },
  {
    id: 't2-sn-manusia-08',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.2 (Warna Kulit)',
    question: 'Antara berikut, pasangan ciri fizikal manakah yang merupakan ciri pewarisan manusia?',
    options: {
      A: 'Warna kulit cerah atau gelap',
      B: 'Corak kasut sukan',
      C: 'Jenis beg galas',
      D: 'Jenama jam tangan',
    },
    correctAnswer: 'A',
    explanation: 'Warna kulit merupakan ciri fizikal tubuh badan manusia yang diwarisi daripada ibu bapa.',
  },
  {
    id: 't2-sn-manusia-09',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Keperluan Tumbesaran)',
    question: 'Apakah amalan penting yang membantu tumbesaran kanak-kanak berlaku dengan sihat dan sempurna?',
    options: {
      A: 'Makan makanan seimbang, bersenam dan tidur secukupnya',
      B: 'Tidur lewat malam sambil bermain permainan video',
      C: 'Hanya makan snek ringan dan minuman bergas',
      D: 'Duduk di dalam bilik sepanjang hari tanpa bergerak',
    },
    correctAnswer: 'A',
    explanation: 'Pemakanan bernutrisi seimbang (piramid makanan), senaman dan rehat yang cukup sangat penting untuk perkembangan fizikal kanak-kanak.',
  },
  {
    id: 't2-sn-manusia-10',
    year: 2,
    subject: 'Sains',
    topic: 'Manusia (Tumbesaran & Pewarisan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.2 (Pewarisan)',
    question: 'Anak yang dilahirkan akan mempunyai ciri-ciri yang menyerupai:',
    options: {
      A: 'Ibu, bapa atau keturunannya',
      B: 'Rakan-rakan sekelasnya',
      C: 'Guru kelasnya',
      D: 'Jiran sebelah rumahnya',
    },
    correctAnswer: 'A',
    explanation: 'Melalui proses pembiakan manusia, ciri keturunan diwariskan daripada ibu, bapa atau nenek moyang kepada anak.',
  },

  // =========================================================================
  // TOPIK 3: HAIWAN (PEMBIAKAN & KITAR HIDUP) (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-haiwan-01',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.1 (Cara Pembiakan Haiwan)',
    question: 'Bagaimanakah haiwan membiak untuk memastikan spesiesnya tidak pupus?',
    options: {
      A: 'Bertelur atau melahirkan anak',
      B: 'Menanam biji benih di dalam tanah',
      C: 'Menghasilkan spora di bawah daun',
      D: 'Membeli anak haiwan di kedai',
    },
    correctAnswer: 'A',
    explanation: 'Haiwan membiak melalui dua cara utama, iaitu sama ada secara bertelur (ovipar) atau melahirkan anak (vivipar).',
  },
  {
    id: 't2-sn-haiwan-02',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.5 (Kitar Hidup Rama-rama)',
    diagram: {
      title: 'Rajah 6: Kitar Hidup Rama-rama',
      type: 'custom_svg',
      caption: 'Peringkat kitar hidup lengkap seekor rama-rama.',
      svgContent: `<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="150" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <!-- Telur -->
        <circle cx="60" cy="45" r="24" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="60" y="44" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Telur</text>
        <text x="60" y="56" font-size="8" fill="#166534" text-anchor="middle">(Daun)</text>

        <!-- Arrow 1 -->
        <path d="M 88 45 L 122 45" stroke="#15803d" stroke-width="2" marker-end="url(#arrow)" stroke-dasharray="2 2"/>

        <!-- Beluncas -->
        <circle cx="150" cy="45" r="24" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="150" y="44" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Beluncas</text>
        <text x="150" y="56" font-size="8" fill="#166534" text-anchor="middle">(Ulat)</text>

        <!-- Arrow 2 -->
        <path d="M 174 45 L 210 45" stroke="#15803d" stroke-width="2"/>

        <!-- Peringkat X -->
        <circle cx="240" cy="45" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="240" y="49" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">[ X ]</text>

        <!-- Arrow Down to Rama-rama -->
        <path d="M 240 73 L 240 100 L 180 100" stroke="#15803d" stroke-width="2"/>

        <!-- Rama-rama Dewasa -->
        <rect x="70" y="85" width="100" height="35" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="120" y="106" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Rama-rama Dewasa</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 6, apakah peringkat kitar hidup yang diwakili oleh [ X ]?',
    options: {
      A: 'Pupa (Kepompong)',
      B: 'Anak ayam',
      C: 'Berudu',
      D: 'Nimfa',
    },
    correctAnswer: 'A',
    explanation: 'Kitar hidup rama-rama bermula daripada Telur -> Beluncas (larva) -> Pupa (kepompong) -> Rama-rama dewasa.',
  },
  {
    id: 't2-sn-haiwan-03',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.2 (Bilangan Telur)',
    question: 'Antara haiwan berikut, yang manakah bertelur dalam bilangan yang BANYAK?',
    options: {
      A: 'Katak dan Penyu',
      B: 'Burung unta dan Ayam',
      C: 'Penguin dan Burung merpati',
      D: 'Gajah dan Kucing',
    },
    correctAnswer: 'A',
    explanation: 'Katak dan penyu bertelur sangat banyak (beratus-ratus biji) untuk memastikan kelangsungan hidup anak-anaknya daripada ancaman pemangsa.',
  },
  {
    id: 't2-sn-haiwan-04',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.5 (Kitar Hidup Katak)',
    diagram: {
      title: 'Rajah 7: Kitar Hidup Katak',
      type: 'custom_svg',
      caption: 'Katak mengalami perubahan bentuk fizikal semasa membesar.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="20" y="45" width="60" height="40" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="50" y="69" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Telur</text>

        <text x="90" y="68" font-size="14" fill="#64748b" text-anchor="middle">→</text>

        <rect x="105" y="45" width="60" height="40" rx="6" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
        <text x="135" y="69" font-size="10" font-weight="bold" fill="#a16207" text-anchor="middle">Berudu</text>

        <text x="175" y="68" font-size="14" fill="#64748b" text-anchor="middle">→</text>

        <rect x="190" y="45" width="80" height="40" rx="6" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="230" y="63" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Anak Katak</text>
        <text x="230" y="76" font-size="8" fill="#166534" text-anchor="middle">(Katak Muda)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 7, di manakah katak bertelur dan di manakah berudu hidup sebelum menjadi katak dewasa?',
    options: {
      A: 'Di dalam air',
      B: 'Di atas dahan pokok yang tinggi',
      C: 'Di dalam lubang tanah yang kering kontang',
      D: 'Di atas bumbung rumah',
    },
    correctAnswer: 'A',
    explanation: 'Katak bertelur di dalam air dan anak katak (berudu) bernafas menggunakan insang dan berenang di dalam air.',
  },
  {
    id: 't2-sn-haiwan-05',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.6 (Anak Tidak Menyerupai Induk)',
    question: 'Antara haiwan berikut, anak bagi haiwan manakah yang TIDAK MENYERUPAI rupa induknya semasa baru menetas?',
    options: {
      A: 'Rama-rama (anaknya beluncas/ulat)',
      B: 'Kucing (anaknya anak kucing)',
      C: 'Lembu (anaknya anak lembu)',
      D: 'Ayam (anaknya anak ayam)',
    },
    correctAnswer: 'A',
    explanation: 'Anak rama-rama yang menetas daripada telur ialah beluncas yang rupanya sangat berbeza daripada induk rama-rama dewasa.',
  },
  {
    id: 't2-sn-haiwan-06',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.3 (Bilangan Anak Melahirkan)',
    question: 'Antara kumpulan haiwan melahirkan anak berikut, yang manakah melahirkan bilangan anak yang SEDIKIT (biasanya satu atau dua anak sahaja setiap kelahiran)?',
    options: {
      A: 'Gajah, lembu dan kuda',
      B: 'Kucing, arnab dan tikus',
      C: 'Ikan paus dan tikus mondok',
      D: 'Kucing dan anjing',
    },
    correctAnswer: 'A',
    explanation: 'Haiwan bersaiz besar seperti gajah, lembu dan kuda melahirkan bilangan anak yang sedikit (1 atau 2 ekor). Kucing dan arnab melahirkan anak yang banyak.',
  },
  {
    id: 't2-sn-haiwan-07',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 4.1 / SP 4.1.4 (Kelangsungan Hidup Haiwan)',
    question: 'Mengapakah penyu menimbus telurnya di dalam pasir pantai yang dalam selepas bertelur?',
    options: {
      A: 'Melindungi telur daripada dimakan oleh musuh atau pemangsa seperti burung dan biawak',
      B: 'Supaya telur penyu menjadi sejuk dan beku',
      C: 'Supaya telur penyu boleh bertukar menjadi batu karang',
      D: 'Kerana penyu tidak mahu anak-anaknya menetas',
    },
    correctAnswer: 'A',
    explanation: 'Penyu menimbus telurnya dengan pasir untuk menyembunyikannya daripada pemangsa dan mengekalkan suhu yang sesuai untuk pengeraman.',
  },
  {
    id: 't2-sn-haiwan-08',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.6 (Anak Menyerupai Induk)',
    question: 'Antara haiwan bertelur berikut, yang manakah anaknya MENYERUPAI rupa bentuk induknya sebaik sahaja menetas?',
    options: {
      A: 'Buaya dan Burung',
      B: 'Katak',
      C: 'Rama-rama',
      D: 'Nyamuk',
    },
    correctAnswer: 'A',
    explanation: 'Anak buaya dan anak burung mempunyai rupa bentuk yang menyerupai induknya sejak menetas dari telur.',
  },
  {
    id: 't2-sn-haiwan-09',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.5 (Kitar Hidup Nyamuk)',
    question: 'Susun kitar hidup nyamuk mengikut urutan yang betul:',
    options: {
      A: 'Telur → Jentik-jentik → Pupa → Nyamuk dewasa',
      B: 'Nyamuk dewasa → Pupa → Jentik-jentik → Telur',
      C: 'Telur → Beluncas → Berudu → Nyamuk',
      D: 'Telur → Anak nyamuk → Pupa → Nyamuk',
    },
    correctAnswer: 'A',
    explanation: 'Kitar hidup nyamuk adalah Telur -> Jentik-jentik -> Pupa -> Nyamuk dewasa.',
  },
  {
    id: 't2-sn-haiwan-10',
    year: 2,
    subject: 'Sains',
    topic: 'Haiwan (Pembiakan & Kitar Hidup)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 4.1 / SP 4.1.1 (Kepentingan Pembiakan)',
    question: 'Apakah yang akan berlaku jika semua haiwan di bumi berhenti membiak?',
    options: {
      A: 'Bilangan haiwan akan berkurang dan lama-kelamaan pupus dari muka bumi',
      B: 'Haiwan akan hidup selama-lamanya',
      C: 'Haiwan akan bertukar menjadi tumbuhan',
      D: 'Bumi akan dipenuhi dengan lebih banyak spesies haiwan baharu',
    },
    correctAnswer: 'A',
    explanation: 'Pembiakan amat penting untuk menambah bilangan spesies agar haiwan tidak pupus apabila induknya mati.',
  },

  // =========================================================================
  // TOPIK 4: TUMBUH-TUMBUHAN (PERCAMBAHAN & TUMBESARAN) (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-tumbuhan-01',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.1 / SP 5.1.1 (Keperluan Percambahan Biji Benih)',
    question: 'Apakah TIGA keperluan asas yang diperlukan oleh biji benih untuk bercambah?',
    options: {
      A: 'Air, udara dan suhu yang sesuai',
      B: 'Baja kimia, tanah liat dan pasu besar',
      C: 'Cahaya lampu neon, ais dan kipas',
      D: 'Gula, garam dan minyak',
    },
    correctAnswer: 'A',
    explanation: 'Biji benih hanya memerlukan air, udara dan suhu yang sesuai untuk mula bercambah. (Cahaya matahari hanya diperlukan selepas daun hijau tumbuh).',
  },
  {
    id: 't2-sn-tumbuhan-02',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.1 / SP 5.1.2 (Peringkat Percambahan)',
    diagram: {
      title: 'Rajah 8: Percambahan Biji Benih Kacang Hijau',
      type: 'custom_svg',
      caption: 'Struktur pertama yang keluar daripada biji benih semasa bercambah.',
      svgContent: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="140" rx="10" fill="#fdfbf7" stroke="#e2e8f0" stroke-width="1.5"/>
        <ellipse cx="140" cy="50" rx="28" ry="20" fill="#15803d" stroke="#166534" stroke-width="1.5"/>
        <path d="M 140 68 Q 145 100 135 125" fill="none" stroke="#ca8a04" stroke-width="3"/>
        <path d="M 140 90 Q 155 98 160 110" fill="none" stroke="#ca8a04" stroke-width="2"/>
        <path d="M 138 105 Q 120 115 115 120" fill="none" stroke="#ca8a04" stroke-width="2"/>

        <line x1="165" y1="110" x2="220" y2="110" stroke="#dc2626" stroke-width="1.5"/>
        <text x="225" y="114" font-size="11" font-weight="bold" fill="#dc2626">Bahagian Q (Akar)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 8, apakah bahagian yang mula-mula sekali keluar menembusi kulit biji benih?',
    options: {
      A: 'Akar',
      B: 'Bunga',
      C: 'Buah',
      D: 'Daun pertama',
    },
    correctAnswer: 'A',
    explanation: 'Semasa biji benih bercambah, akar ialah bahagian pertama yang keluar ke arah bawah untuk menyerap air dan mencengkam tanah.',
  },
  {
    id: 't2-sn-tumbuhan-03',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.1 / SP 5.1.3 (Urutan Tumbesaran Tumbuhan)',
    question: 'Susun urutan tumbesaran pokok cili daripada biji benih:',
    options: {
      A: 'Biji benih → Anak benih → Pokok berbunga → Pokok berbuah',
      B: 'Pokok berbuah → Bunga → Anak benih → Biji benih',
      C: 'Biji benih → Pokok berbuah → Anak benih → Bunga',
      D: 'Bunga → Biji benih → Pokok berbuah → Anak benih',
    },
    correctAnswer: 'A',
    explanation: 'Urutan tumbesaran tumbuhan bermula daripada biji benih yang bercambah menjadi anak benih, kemudian membesar menjadi pokok dewasa yang berbunga dan akhirnya menghasilkan buah.',
  },
  {
    id: 't2-sn-tumbuhan-04',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.1 / SP 5.1.4 (Pemerhatian Tumbesaran)',
    diagram: {
      title: 'Rajah 9: Anak Pokok Selepas 2 Minggu',
      type: 'custom_svg',
      caption: 'Perubahan fizikal pada pokok semasa proses tumbesaran.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Pokok Kecil Minggu 1 -->
        <rect x="50" y="85" width="40" height="30" fill="#78350f" rx="3"/>
        <line x1="70" y1="85" x2="70" y2="55" stroke="#15803d" stroke-width="2.5"/>
        <ellipse cx="62" cy="55" rx="10" ry="5" fill="#22c55e"/>
        <ellipse cx="78" cy="55" rx="10" ry="5" fill="#22c55e"/>
        <text x="70" y="123" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">Hari ke-3 (2 daun)</text>

        <!-- Arrow -->
        <text x="135" y="75" font-size="16" fill="#64748b" text-anchor="middle">→</text>

        <!-- Pokok Besar Minggu 2 -->
        <rect x="180" y="80" width="55" height="35" fill="#78350f" rx="3"/>
        <line x1="207" y1="80" x2="207" y2="30" stroke="#15803d" stroke-width="4"/>
        <ellipse cx="192" cy="35" rx="15" ry="7" fill="#16a34a"/>
        <ellipse cx="222" cy="35" rx="15" ry="7" fill="#16a34a"/>
        <ellipse cx="190" cy="52" rx="15" ry="7" fill="#16a34a"/>
        <ellipse cx="224" cy="52" rx="15" ry="7" fill="#16a34a"/>
        <ellipse cx="207" cy="20" rx="8" ry="12" fill="#16a34a"/>
        <text x="207" y="123" font-size="9" font-weight="bold" fill="#334155" text-anchor="middle">Hari ke-14 (6 daun)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 9, apakah perubahan yang dialami oleh pokok apabila ia membesar?',
    options: {
      A: 'Ketinggian pokok bertambah, bilangan daun bertambah, dan lilitan batang bertambah',
      B: 'Warna pasu bertukar menjadi hijau',
      C: 'Bilangan daun berkurangan dan batang menjadi pendek',
      D: 'Pokok berhenti memerlukan air',
    },
    correctAnswer: 'A',
    explanation: 'Semasa tumbesaran tumbuhan, ketinggian bertambah, bilangan daun bertambah, dan saiz batang pokok menjadi lebih tebal.',
  },
  {
    id: 't2-sn-tumbuhan-05',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 5.1 / SP 5.1.5 (Keperluan Asas Tumbuhan)',
    question: 'Hakim meletakkan dua pasu pokok cili di halaman rumahnya. Pasu A disiram air setiap hari, manakala Pasu B tidak disiram air langsung selama dua minggu. Apakah yang akan terjadi kepada pokok di dalam Pasu B?',
    options: {
      A: 'Pokok dalam Pasu B akan layu dan akhirnya mati kerana ketiadaan air',
      B: 'Pokok dalam Pasu B akan membesar dua kali ganda lebih cepat',
      C: 'Pokok dalam Pasu B akan mengeluarkan buah cili berwarna ungu',
      D: 'Tiada apa-apa perubahan yang berlaku',
    },
    correctAnswer: 'A',
    explanation: 'Air merupakan salah satu keperluan asas bagi tumbuhan hidup. Tanpa air, tumbuhan tidak dapat menyerap nutrien lalu layu dan mati.',
  },
  {
    id: 't2-sn-tumbuhan-06',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.1 / SP 5.1.5 (Cahaya Matahari)',
    question: 'Mengapakah tumbuhan hijau memerlukan cahaya matahari?',
    options: {
      A: 'Untuk membuat makanannya sendiri melalui daun hijau',
      B: 'Untuk memanaskan tanah sahaja',
      C: 'Untuk menakutkan serangga perosak',
      D: 'Supaya bunganya kelihatan berkilat pada waktu malam',
    },
    correctAnswer: 'A',
    explanation: 'Tumbuhan menggunakan tenaga daripada cahaya matahari untuk membuat makanan sendiri melalui proses fotosintesis.',
  },
  {
    id: 't2-sn-tumbuhan-07',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.1 / SP 5.1.6 (Kepentingan Tumbuhan Kepada Manusia)',
    question: 'Apakah kepentingan tumbuhan kepada manusia dan haiwan?',
    options: {
      A: 'Membekalkan sumber makanan, tempat perlindungan dan menghasilkan gas oksigen untuk bernafas',
      B: 'Menghalang hujan daripada turun ke bumi',
      C: 'Menghapuskan semua serangga di dunia',
      D: 'Menyerap semua air di lautan',
    },
    correctAnswer: 'A',
    explanation: 'Tumbuhan sangat penting sebagai pembekal oksigen, sumber makanan serta tempat perlindungan untuk hidupan.',
  },
  {
    id: 't2-sn-tumbuhan-08',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 5.1 / SP 5.1.1 (Penyiasatan Percambahan)',
    question: 'Siti meletakkan biji benih di dalam peti sejuk beku. Selepas seminggu, biji benih itu masih tidak bercambah walaupun kapasnya basah. Mengapa?',
    options: {
      A: 'Suhu di dalam peti sejuk terlalu sejuk dan tidak sesuai untuk percambahan',
      B: 'Peti sejuk tidak mempunyai bekalan elektrik',
      C: 'Biji benih takut kepada ais',
      D: 'Biji benih memerlukan susu untuk bercambah',
    },
    correctAnswer: 'A',
    explanation: 'Biji benih memerlukan suhu yang sesuai (suhu bilik) untuk bercambah. Suhu beku menghentikan aktiviti enzim di dalam biji benih.',
  },
  {
    id: 't2-sn-tumbuhan-09',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.1 / SP 5.1.5 (Keperluan Asas)',
    question: 'Antara berikut, yang manakah BUKAN keperluan asas bagi tumbuhan dewasa untuk terus hidup?',
    options: {
      A: 'Coklat manis',
      B: 'Air',
      C: 'Udara',
      D: 'Cahaya matahari',
    },
    correctAnswer: 'A',
    explanation: 'Keperluan asas tumbuhan ialah air, udara dan cahaya matahari. Coklat bukan keperluan asas tumbuhan.',
  },
  {
    id: 't2-sn-tumbuhan-10',
    year: 2,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Percambahan & Tumbesaran)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.1 / SP 5.1.3 (Kotiledon)',
    question: 'Semasa biji benih baru bercambah dan belum mempunyai daun hijau, dari manakah anak benih memperoleh makanannya?',
    options: {
      A: 'Kotiledon (isi biji benih)',
      B: 'Cahaya bulan',
      C: 'Air hujan semata-mata',
      D: 'Batu-bata di dalam tanah',
    },
    correctAnswer: 'A',
    explanation: 'Kotiledon menyimpan makanan untuk anak benih sehingga daun hijau pertama tumbuh dan mampu membuat makanan sendiri.',
  },

  // =========================================================================
  // TOPIK 5: TERANG, GELAP & BAYANG-BAYANG (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-terang-gelap-01',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Mudah',
    learningStandard: 'SK 6.1 / SP 6.1.1 (Sumber Cahaya)',
    question: 'Antara berikut, yang manakah merupakan sumber cahaya semulajadi yang paling utama di bumi?',
    options: {
      A: 'Matahari',
      B: 'Lilin',
      C: 'Lampu suluh',
      D: 'Cermin',
    },
    correctAnswer: 'A',
    explanation: 'Matahari ialah sumber cahaya semulajadi yang terbesar dan paling utama menerangi bumi pada waktu siang.',
  },
  {
    id: 't2-sn-terang-gelap-02',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Sederhana',
    learningStandard: 'SK 6.1 / SP 6.1.3 (Pembentukan Bayang-bayang)',
    diagram: {
      title: 'Rajah 10: Eksperimen Pembentukan Bayang-bayang',
      type: 'custom_svg',
      caption: 'Cahaya lampu suluh dihalang oleh objek legap (bola).',
      svgContent: `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="140" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
        <!-- Lampu Suluh -->
        <rect x="20" y="50" width="35" height="20" rx="2" fill="#cbd5e1"/>
        <polygon points="55,45 75,40 75,80 55,75" fill="#94a3b8"/>
        <!-- Pancaran Cahaya Kuning -->
        <polygon points="75,60 140,30 140,90" fill="#fef08a" fill-opacity="0.35"/>
        <polygon points="170,18 290,10 290,110 170,102" fill="#fef08a" fill-opacity="0.35"/>
        <!-- Objek Bola Legap -->
        <circle cx="155" cy="60" r="18" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        <text x="155" y="95" font-size="9" fill="#fca5a5" text-anchor="middle">Objek Legap</text>
        <!-- Skrin Putih -->
        <line x1="290" y1="15" x2="290" y2="115" stroke="#ffffff" stroke-width="4"/>
        <!-- Bayang-bayang pada skrin -->
        <ellipse cx="290" cy="60" rx="3" ry="24" fill="#000000"/>
        <text x="290" y="130" font-size="9" font-weight="bold" fill="#cbd5e1" text-anchor="middle">Bayang-bayang</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 10, bagaimanakah bayang-bayang terbentuk pada skrin?',
    options: {
      A: 'Apabila cahaya yang bergerak lurus dihalang oleh suatu objek legap',
      B: 'Apabila cahaya dibiaskan ke dalam air',
      C: 'Apabila objek mengeluarkan cahayanya sendiri',
      D: 'Apabila skrin dipadamkan suisnya',
    },
    correctAnswer: 'A',
    explanation: 'Bayang-bayang terhasil kerana cahaya bergerak lurus dan tidak dapat menembusi objek legap yang menghalangnya.',
  },
  {
    id: 't2-sn-terang-gelap-03',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Mudah',
    learningStandard: 'SK 6.1 / SP 6.1.4 (Kejelasan Bayang-bayang)',
    question: 'Objek manakah yang akan menghasilkan bayang-bayang yang PALING JELAS dan GELAP?',
    options: {
      A: 'Buku teks tebal (objek legap)',
      B: 'Plastik pembungkus makanan yang jernih (lut sinar)',
      C: 'Kertas surih (lut cahaya)',
      D: 'Cermin mata jernih',
    },
    correctAnswer: 'A',
    explanation: 'Objek legap menghalang semua cahaya daripada melaluinya, maka bayang-bayang yang terbentuk adalah sangat jelas dan gelap.',
  },
  {
    id: 't2-sn-terang-gelap-04',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Sederhana',
    learningStandard: 'SK 6.1 / SP 6.1.4 (Objek Lut Sinar)',
    diagram: {
      title: 'Rajah 11: Cahaya Melalui Tiga Jenis Bahan Berbeza',
      type: 'custom_svg',
      caption: 'Bahan P: Bayang-bayang sangat jelas. Bahan Q: Tiada bayang-bayang terbentuk.',
      svgContent: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Bahan P -->
        <rect x="30" y="25" width="110" height="70" rx="6" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
        <text x="85" y="50" font-size="11" font-weight="bold" fill="#9a3412" text-anchor="middle">Bahan P (Kayu)</text>
        <text x="85" y="70" font-size="9" fill="#c2410c" text-anchor="middle">Legap</text>
        <text x="85" y="85" font-size="9" font-weight="bold" fill="#7c2d12" text-anchor="middle">Bayang gelap</text>

        <!-- Bahan Q -->
        <rect x="180" y="25" width="110" height="70" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="235" y="50" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Bahan Q (Kaca Jernih)</text>
        <text x="235" y="70" font-size="9" fill="#0284c7" text-anchor="middle">Lut sinar</text>
        <text x="235" y="85" font-size="9" font-weight="bold" fill="#075985" text-anchor="middle">Tiada bayang</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 11, mengapakah Bahan Q (kaca jernih) TIDAK menghasilkan bayang-bayang yang jelas?',
    options: {
      A: 'Kerana Bahan Q membenarkan hampir semua cahaya melaluinya',
      B: 'Kerana Bahan Q menyerap semua cahaya',
      C: 'Kerana Bahan Q memantulkan cahaya ke siling',
      D: 'Kerana Bahan Q berwarna hitam',
    },
    correctAnswer: 'A',
    explanation: 'Objek lut sinar membenarkan semua atau hampir semua cahaya menembusinya, oleh itu tiada bayang-bayang yang terbentuk.',
  },
  {
    id: 't2-sn-terang-gelap-05',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Mudah',
    learningStandard: 'SK 6.1 / SP 6.1.2 (Keadaan Terang dan Gelap)',
    question: 'Apakah perbezaan melakukan aktiviti membaca buku di dalam bilik yang terang berbanding bilik yang gelap?',
    options: {
      A: 'Di bilik terang, kita boleh membaca dengan jelas dan mudah kerana ada cahaya',
      B: 'Di bilik gelap, tulisan buku menjadi lebih besar dan terang',
      C: 'Bilik gelap lebih menyihatkan mata semasa membaca',
      D: 'Tiada apa-apa perbezaan antara bilik terang dan bilik gelap',
    },
    correctAnswer: 'A',
    explanation: 'Mata kita memerlukan cahaya untuk melihat objek di sekeliling. Membaca di tempat terang melindungi mata daripada keletihan.',
  },
  {
    id: 't2-sn-terang-gelap-06',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 6.1 / SP 6.1.5 (Permainan Bayang-bayang)',
    question: 'Dalam persembahan Wayang Kulit, dalang menggunakan sumber cahaya lampu untuk menghasilkan watak bayang-bayang pada kelir (kain putih). Patung wayang kulit diperbuat daripada:',
    options: {
      A: 'Kulit lembu yang legap supaya membentuk bayang-bayang yang jelas dan tajam',
      B: 'Plastik jernih lut sinar supaya cahaya tembus sepenuhnya',
      C: 'Kaca lut sinar yang mudah pecah',
      D: 'Kertas tisu basah',
    },
    correctAnswer: 'A',
    explanation: 'Patung wayang kulit dibuat daripada kulit lembu/kambing yang bersifat legap bagi menghalang cahaya lampu dan membentuk bayang-bayang watak yang tajam.',
  },
  {
    id: 't2-sn-terang-gelap-07',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Mudah',
    learningStandard: 'SK 6.1 / SP 6.1.1 (Bukan Sumber Cahaya)',
    question: 'Adakah cermin muka merupakan sumber cahaya? Mengapa?',
    options: {
      A: 'Bukan, cermin hanya memantulkan cahaya daripada sumber cahaya lain',
      B: 'Ya, cermin mengeluarkan cahayanya sendiri pada waktu malam',
      C: 'Ya, cermin disambung kepada bateri',
      D: 'Bukan, cermin ialah sejenis tumbuhan',
    },
    correctAnswer: 'A',
    explanation: 'Sumber cahaya ialah objek yang mengeluarkan cahaya sendiri (cth: matahari, lampu, api). Cermin dan bulan bukan sumber cahaya, ia hanya memantulkan cahaya.',
  },
  {
    id: 't2-sn-terang-gelap-08',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Sederhana',
    learningStandard: 'SK 6.1 / SP 6.1.4 (Lut Cahaya)',
    question: 'Apakah sifat bahan yang membenarkan SEBAHAGIAN sahaja cahaya melaluinya dan menghasilkan bayang-bayang yang KURANG JELAS?',
    options: {
      A: 'Lut cahaya (contohnya kertas surih atau plastik berwarna)',
      B: 'Legap',
      C: 'Lut sinar',
      D: 'Besi keluli',
    },
    correctAnswer: 'A',
    explanation: 'Bahan lut cahaya membenarkan sebahagian cahaya melaluinya, menyebabkan bayang-bayang yang terhasil kelihatan kabur atau kurang jelas.',
  },
  {
    id: 't2-sn-terang-gelap-09',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 6.1 / SP 6.1.3 (Kedudukan Bayang-bayang)',
    question: 'Jika sumber cahaya berada di sebelah KANAN sebuah kotak, di manakah kedudukan bayang-bayang kotak tersebut akan terbentuk?',
    options: {
      A: 'Di sebelah KIRI kotak',
      B: 'Di sebelah KANAN kotak bersama lampu',
      C: 'Di atas kotak',
      D: 'Di dalam mentol lampu',
    },
    correctAnswer: 'A',
    explanation: 'Bayang-bayang sentiasa terbentuk pada arah yang bertentangan dengan kedudukan punca atau sumber cahaya.',
  },
  {
    id: 't2-sn-terang-gelap-10',
    year: 2,
    subject: 'Sains',
    topic: 'Terang, Gelap & Bayang-bayang',
    difficulty: 'Mudah',
    learningStandard: 'SK 6.1 / SP 6.1.1 (Haiwan Bercahaya)',
    question: 'Haiwan manakah yang dapat menghasilkan cahaya sendiri pada waktu malam yang gelap?',
    options: {
      A: 'Kelip-kelip (kunang-kunang)',
      B: 'Semut hitam',
      C: 'Kucing rumah',
      D: 'Katak puru',
    },
    correctAnswer: 'A',
    explanation: 'Kelip-kelip (kunang-kunang) mempunyai organ khas pada abdomennya yang menghasilkan cahaya bioluminesens semulajadi.',
  },

  // =========================================================================
  // TOPIK 6: ELEKTRIK (KOMPONEN LITAR & KONDUKTOR) (10 SOALAN)
  // =========================================================================
  {
    id: 't2-sn-elektrik-01',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.1 (Komponen Litar)',
    question: 'Apakah fungsi utama sel kering (bateri) di dalam suatu litar elektrik?',
    options: {
      A: 'Membekalkan tenaga elektrik',
      B: 'Menghubungkan litar dengan memutuskan wayar',
      C: 'Mengeluarkan cahaya terang',
      D: 'Menyerap haba panas',
    },
    correctAnswer: 'A',
    explanation: 'Sel kering berfungsi sebagai punca kuasa yang membekalkan tenaga elektrik kepada litar.',
  },
  {
    id: 't2-sn-elektrik-02',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 7.1 / SP 7.1.2 (Fungsi Suis)',
    diagram: {
      title: 'Rajah 12: Litar Elektrik Lengkap',
      type: 'custom_svg',
      caption: 'Litar dengan sel kering, mentol, suis tertutup dan wayar penyambung.',
      svgContent: `<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="150" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Wayar Litar -->
        <rect x="50" y="30" width="240" height="90" fill="none" stroke="#2563eb" stroke-width="3" rx="8"/>

        <!-- Bateri (Sel Kering) di atas -->
        <rect x="135" y="20" width="55" height="20" rx="3" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="190" y="25" width="6" height="10" fill="#dc2626"/>
        <text x="145" y="34" font-size="9" fill="#f8fafc" font-weight="bold">-</text>
        <text x="180" y="34" font-size="9" fill="#f8fafc" font-weight="bold">+</text>

        <!-- Suis di sebelah kanan -->
        <circle cx="290" cy="65" r="4" fill="#dc2626"/>
        <circle cx="290" cy="85" r="4" fill="#dc2626"/>
        <line x1="290" y1="65" x2="290" y2="85" stroke="#16a34a" stroke-width="3"/>
        <text x="315" y="78" font-size="9" font-weight="bold" fill="#15803d">Suis Tertutup</text>

        <!-- Mentol Menyala di bawah -->
        <circle cx="160" cy="120" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <path d="M 155 120 L 160 114 L 165 120" fill="none" stroke="#eab308" stroke-width="2"/>
        <!-- Sinar Cahaya Mentol -->
        <line x1="160" y1="98" x2="160" y2="92" stroke="#eab308" stroke-width="2"/>
        <line x1="140" y1="110" x2="135" y2="105" stroke="#eab308" stroke-width="2"/>
        <line x1="180" y1="110" x2="185" y2="105" stroke="#eab308" stroke-width="2"/>
        <text x="160" y="145" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Mentol Menyala</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 12, mengapakah mentol menyala dengan terang?',
    options: {
      A: 'Kerana suis ditutup dan membentuk litar elektrik yang lengkap',
      B: 'Kerana wayar penyambung telah dipotong',
      C: 'Kerana sel kering telah kehabisan tenaga',
      D: 'Kerana mentol diperbuat daripada plastik',
    },
    correctAnswer: 'A',
    explanation: 'Apabila suis ditutup, arus elektrik dapat mengalir melalui seluruh litar yang lengkap, menyebabkan mentol menyala.',
  },
  {
    id: 't2-sn-elektrik-03',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.3 (Fungsi Suis)',
    question: 'Apakah fungsi suis di dalam sebuah litar elektrik?',
    options: {
      A: 'Menyambung atau memutuskan litar elektrik',
      B: 'Menghasilkan tenaga cahaya',
      C: 'Menyimpan tenaga air',
      D: 'Menggantikan fungsi sel kering',
    },
    correctAnswer: 'A',
    explanation: 'Suis digunakan untuk melengkapkan (menyambung) atau memutuskan pengaliran arus elektrik dalam litar.',
  },
  {
    id: 't2-sn-elektrik-04',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 7.1 / SP 7.1.4 (Penyelesaian Masalah Litar)',
    question: 'Amir memasang litar elektrik dengan betul, tetapi mentol masih TIDAK menyala walaupun suis telah ditutup. Antara berikut, apakah kemungkinan puncanya?',
    options: {
      A: 'Sel kering telah kehabisan tenaga atau filamen mentol telah rosak (terbakar)',
      B: 'Wayar elektrik dipasang terlalu kemas',
      C: 'Mentol menerima terlalu banyak tenaga elektrik',
      D: 'Bilik sains terlalu sejuk',
    },
    correctAnswer: 'A',
    explanation: 'Mentol tidak menyala mungkin disebabkan oleh sel kering yang kehabisan tenaga, mentol rosak/terbakar, pemasangan wayar yang longgar, atau suis yang rosak.',
  },
  {
    id: 't2-sn-elektrik-05',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 7.1 / SP 7.1.5 (Konduktor dan Penebat)',
    diagram: {
      title: 'Rajah 13: Menguji Bahan Konduktor dan Penebat',
      type: 'custom_svg',
      caption: 'Objek X diletakkan di antara klip buaya pada litar penyiasatan.',
      svgContent: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <path d="M 40 60 L 100 60" stroke="#2563eb" stroke-width="3"/>
        <path d="M 220 60 L 280 60" stroke="#2563eb" stroke-width="3"/>

        <!-- Objek X (Klip Kertas Besi) -->
        <rect x="110" y="45" width="100" height="30" rx="6" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
        <text x="160" y="64" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">Klip Kertas Logam</text>

        <!-- Mentol Menyala -->
        <circle cx="280" cy="60" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <text x="280" y="95" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Menyala!</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 13, apabila klip kertas logam diuji, mentol menyala. Ini membuktikan bahawa logam ialah sejenis:',
    options: {
      A: 'Konduktor elektrik (membenarkan arus elektrik mengalir melaluinya)',
      B: 'Penebat elektrik',
      C: 'Bahan lut sinar',
      D: 'Bahan magnet yang rosak',
    },
    correctAnswer: 'A',
    explanation: 'Konduktor elektrik ialah bahan yang membenarkan arus elektrik mengalir melaluinya, seperti kebanyakan logam (besi, tembaga, aluminium).',
  },
  {
    id: 't2-sn-elektrik-06',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.5 (Penebat Elektrik)',
    question: 'Antara objek berikut, yang manakah merupakan PENEBAT ELEKTRIK (tidak membenarkan arus elektrik mengalir)?',
    options: {
      A: 'Pemadam getah dan pembaris plastik',
      B: 'Paku besi dan kunci rumah tembaga',
      C: 'Duit syiling 50 sen dan sudu besi',
      D: 'Klip kertas logam',
    },
    correctAnswer: 'A',
    explanation: 'Getah, plastik, kayu dan kaca ialah penebat elektrik yang tidak membenarkan arus elektrik mengalir.',
  },
  {
    id: 't2-sn-elektrik-07',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 7.1 / SP 7.1.5 (Aplikasi Keselamatan Elektrik)',
    question: 'Mengapakah bahagian luar wayar elektrik dibalut dengan lapisan plastik berwarna-warni?',
    options: {
      A: 'Plastik ialah penebat elektrik yang melindungi manusia daripada terkena renjatan elektrik',
      B: 'Supaya wayar kelihatan cantik dan wangi',
      C: 'Supaya elektrik boleh mengalir lebih pantas ke udara',
      D: 'Supaya wayar bertambah berat',
    },
    correctAnswer: 'A',
    explanation: 'Plastik adalah penebat elektrik yang selamat dipegang dan menghalang arus elektrik daripada menyentuh tangan kita.',
  },
  {
    id: 't2-sn-elektrik-08',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.1 (Wayar Penyambung)',
    question: 'Apakah fungsi wayar penyambung di dalam litar elektrik?',
    options: {
      A: 'Menyambungkan setiap komponen elektrik untuk membolehkan arus mengalir',
      B: 'Membekalkan cahaya pada waktu malam',
      C: 'Menyimpan bateri',
      D: 'Memadamkan mentol yang panas',
    },
    correctAnswer: 'A',
    explanation: 'Wayar penyambung menghubungkan sel kering, suis dan mentol menjadi sebuah litar lengkap.',
  },
  {
    id: 't2-sn-elektrik-09',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 7.1 / SP 7.1.4 (Kecerahan Mentol)',
    question: 'Apakah yang akan berlaku kepada kecerahan mentol jika satu lagi sel kering baharu ditambah secara bersiri ke dalam litar tersebut?',
    options: {
      A: 'Mentol akan menyala dengan lebih cerah kerana tenaga elektrik bertambah',
      B: 'Kecerahan mentol akan menjadi semakin malap',
      C: 'Mentol akan serta-merta bertukar warna menjadi biru',
      D: 'Tiada apa-apa perubahan pada kecerahan mentol',
    },
    correctAnswer: 'A',
    explanation: 'Menambah bilangan sel kering menambah voltan dan arus elektrik, menyebabkan mentol menyala dengan lebih cerah.',
  },
  {
    id: 't2-sn-elektrik-10',
    year: 2,
    subject: 'Sains',
    topic: 'Elektrik (Komponen Litar & Konduktor)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.2 (Litar Terbuka)',
    question: 'Apakah yang dimaksudkan dengan litar tidak lengkap (litar terbuka)?',
    options: {
      A: 'Litar yang mempunyai suis terbuka atau sambungan wayar terputus sehingga mentol tidak menyala',
      B: 'Litar yang menggunakan bateri yang terlalu besar',
      C: 'Litar yang diletakkan di luar bilik sains',
      D: 'Litar yang tidak mempunyai suis langsung',
    },
    correctAnswer: 'A',
    explanation: 'Litar terbuka atau tidak lengkap berlaku apabila terdapat pemutus sambungan (seperti suis terbuka atau wayar tercabut), menghalang arus elektrik daripada mengalir.',
  },
];
