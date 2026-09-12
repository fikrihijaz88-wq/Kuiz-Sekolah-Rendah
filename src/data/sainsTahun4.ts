import { QuizQuestion } from '../types';

export const SAINS_TAHUN_4_QUESTIONS: QuizQuestion[] = [
  // =========================================================================
  // TOPIK 1: KEMAHIRAN SAINTIFIK (PEMBOLEH UBAH & HIPOTESIS) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-kemahiran-01',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.10 (Mengawal Pemboleh Ubah)',
    diagram: {
      title: 'Rajah 1: Eksperimen Ayunan Bandul Ringkas',
      type: 'custom_svg',
      caption: 'Bandul A menggunakan tali 15 cm, manakala Bandul B menggunakan tali 30 cm.',
      svgContent: `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="140" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="30" y1="20" x2="310" y2="20" stroke="#334155" stroke-width="4"/>
        
        <!-- Bandul A -->
        <circle cx="90" cy="20" r="3" fill="#1e293b"/>
        <line x1="90" y1="20" x2="90" y2="65" stroke="#0284c7" stroke-width="2"/>
        <circle cx="90" cy="73" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="90" y="100" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Bandul A (15 cm)</text>
        <text x="90" y="115" font-size="9" fill="#0c4a6e" text-anchor="middle">20 ayunan / minit</text>

        <!-- Bandul B -->
        <circle cx="230" cy="20" r="3" fill="#1e293b"/>
        <line x1="230" y1="20" x2="230" y2="95" stroke="#0284c7" stroke-width="2"/>
        <circle cx="230" cy="103" r="10" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="230" y="123" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Bandul B (30 cm)</text>
        <text x="230" y="135" font-size="9" fill="#0c4a6e" text-anchor="middle">12 ayunan / minit</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 1, apakah Pemboleh Ubah Dimanipulasi (PM) dalam eksperimen ini?',
    options: {
      A: 'Panjang tali bandul',
      B: 'Bilangan ayunan bandul dalam seminit',
      C: 'Jisim ladung bandul',
      D: 'Warna bilik makmal',
    },
    correctAnswer: 'A',
    explanation: 'Pemboleh ubah dimanipulasi (PM) ialah perkara yang sengaja diubah atau dibezakan pada awal eksperimen, iaitu panjang tali bandul (15 cm dan 30 cm).',
  },
  {
    id: 't4-sn-kemahiran-02',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 1.1 / SP 1.1.11 (Membuat Hipotesis)',
    stimulus: 'Sekumpulan murid Tahun 4 mendapati bahawa semakin panjang tali bandul, semakin berkurang bilangan ayunan lengkap dalam tempoh satu minit.',
    question: 'Pernyataan manakah yang merupakan HIPOTESIS yang tepat bagi penyiasatan ini?',
    options: {
      A: 'Semakin bertambah panjang tali bandul, semakin berkurang bilangan ayunan bandul dalam satu minit',
      B: 'Bandul bergoyang kerana ada angin kipas',
      C: 'Panjang tali bandul sama dengan berat ladung',
      D: 'Semua bandul berayun pada kelajuan yang sama',
    },
    correctAnswer: 'A',
    explanation: 'Hipotesis menyatakan hubungan antara pemboleh ubah dimanipulasi (panjang tali) dengan pemboleh ubah bergerak balas (bilangan ayunan).',
  },
  {
    id: 't4-sn-kemahiran-03',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.8 (Mentafsir Data)',
    diagram: {
      title: 'Jadual 1: Masa Yang Diambil Untuk Air Mendidih',
      type: 'table_data',
      caption: 'Data menunjukkan hubungan isi padu air dengan masa didihan.',
      data: {
        headers: ['Bikar', 'Isi Padu Air (ml)', 'Masa Mendidih (Minit)'],
        rows: [
          ['P', '100', '4'],
          ['Q', '200', '8'],
          ['R', '300', '12'],
          ['S', '400', '16'],
        ],
      },
    },
    question: 'Berdasarkan Jadual 1, ramalkan masa yang diambil untuk 250 ml air mendidih jika menggunakan saiz api yang sama.',
    options: {
      A: '10 minit',
      B: '6 minit',
      C: '14 minit',
      D: '20 minit',
    },
    correctAnswer: 'A',
    explanation: 'Isi padu 250 ml berada tepat di tengah-tengah antara 200 ml (8 minit) dan 300 ml (12 minit). Oleh itu, masa yang diramalkan ialah (8 + 12) ÷ 2 = 10 minit.',
  },
  {
    id: 't4-sn-kemahiran-04',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 1.1 / SP 1.1.10 (Pemboleh Ubah Dimalarkan)',
    question: 'Dalam eksperimen mengkaji kadar keterlarutan gula dalam air panas dan air sejuk, apakah pemboleh ubah yang MESTI DIMALARKAN (dikekalkan sama sepanjang eksperimen)?',
    options: {
      A: 'Isi padu air dan saiz butiran gula yang digunakan',
      B: 'Suhu air yang digunakan',
      C: 'Masa gula larut sepenuhnya',
      D: 'Kemanisan air teh yang dihasilkan',
    },
    correctAnswer: 'A',
    explanation: 'Pemboleh ubah dimalarkan (PDM) ialah faktor yang mesti ditetapkan sama seperti isi padu air dan kuantiti/saiz gula agar penyiasatan adalah adil.',
  },
  {
    id: 't4-sn-kemahiran-05',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 1.1 / SP 1.1.4 (Membuat Inferens)',
    question: 'Apakah maksud "Membuat Inferens" dalam Kemahiran Proses Sains?',
    options: {
      A: 'Menyatakan penerangan awal atau sebab yang munasabah bagi sesuatu peristiwa atau pemerhatian',
      B: 'Mengukur suhu menggunakan pembaris kayu',
      C: 'Melukis rajah menggunakan komputer riba',
      D: 'Menghafal nama-nama saintis terkemuka',
    },
    correctAnswer: 'A',
    explanation: 'Membuat inferens ialah membuat kesimpulan awal yang munasabah untuk menerangkan sebab berlakunya sesuatu pemerhatian.',
  },
  {
    id: 't4-sn-kemahiran-06',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.9 (Mendefinisi Secara Operasi)',
    diagram: {
      title: 'Rajah 2: Menguji Kekuatan Bahan Magnet',
      type: 'custom_svg',
      caption: 'Magnet bar menarik bilangan klip kertas besi yang berbeza.',
      svgContent: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="120" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="50" y="25" width="80" height="25" fill="#ef4444" rx="3"/>
        <text x="90" y="42" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Magnet X</text>
        <line x1="90" y1="50" x2="90" y2="70" stroke="#64748b" stroke-width="1.5"/>
        <rect x="75" y="70" width="30" height="35" fill="#e2e8f0" stroke="#94a3b8" rx="4"/>
        <text x="90" y="92" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">12 klip</text>

        <rect x="190" y="25" width="80" height="25" fill="#3b82f6" rx="3"/>
        <text x="230" y="42" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Magnet Y</text>
        <line x1="230" y1="50" x2="230" y2="70" stroke="#64748b" stroke-width="1.5"/>
        <rect x="215" y="70" width="30" height="35" fill="#e2e8f0" stroke="#94a3b8" rx="4"/>
        <text x="230" y="92" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">4 klip</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 2, apakah definisi secara operasi bagi "kekuatan magnet"?',
    options: {
      A: 'Kekuatan magnet ditunjukkan oleh bilangan klip kertas yang dapat ditarik oleh magnet',
      B: 'Kekuatan magnet ialah saiz warna merah magnet itu',
      C: 'Kekuatan magnet ialah harga magnet di kedai',
      D: 'Kekuatan magnet ialah panjang pembaris',
    },
    correctAnswer: 'A',
    explanation: 'Definisi secara operasi menerangkan konsep sains berdasarkan perkara yang boleh diukur atau diperhatikan semasa penyiasatan dijalankan.',
  },
  {
    id: 't4-sn-kemahiran-07',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 1.1 / SP 1.1.5 (Meramal)',
    stimulus: 'Langit menjadi gelap dan mendung dengan awan kumulonimbus tebal serta angin bertiup kencang.',
    question: 'Apakah ramalan saintifik yang paling tepat tentang keadaan cuaca yang bakal berlaku sebentar lagi?',
    options: {
      A: 'Hujan lebat atau ribut petir akan turun tidak lama lagi',
      B: 'Hari akan menjadi bertambah panas terik',
      C: 'Pelangi akan muncul serta-merta tanpa hujan',
      D: 'Matahari akan bersinar lebih terang daripada biasa',
    },
    correctAnswer: 'A',
    explanation: 'Awan hitam tebal dan angin kencang adalah tanda fizikal bahawa proses pemeluwapan wap air berlaku dengan pantas dan hujan lebat bakal turun.',
  },
  {
    id: 't4-sn-kemahiran-08',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 1.1 / SP 1.1.10 (Pemboleh Ubah Bergerak Balas)',
    stimulus: 'Farah menjalankan penyiasatan untuk melihat bagaimana bilangan bateri mempengaruhi kecerahan mentol dalam litar lengkap.',
    question: 'Apakah Pemboleh Ubah Bergerak Balas (PB) dalam penyiasatan Farah?',
    options: {
      A: 'Kecerahan mentol',
      B: 'Bilangan bateri',
      C: 'Jenis suis yang digunakan',
      D: 'Panjang wayar penyambung',
    },
    correctAnswer: 'A',
    explanation: 'Pemboleh ubah bergerak balas (PB) ialah hasil atau kesan yang diperhatikan/diukur selepas perubahan dibuat, iaitu kecerahan mentol.',
  },
  {
    id: 't4-sn-kemahiran-09',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 1.1 / SP 1.1.12 (Mengeksperimen)',
    question: 'Mengapakah sesuatu penyiasatan saintifik hanya boleh mengubah SATU pemboleh ubah dimanipulasi pada satu-satu masa?',
    options: {
      A: 'Untuk memastikan penyiasatan itu adil dan keputusannya tepat serta sahih',
      B: 'Supaya radas makmal tidak cepat rosak',
      C: 'Supaya masa eksperimen menjadi sangat lama',
      D: 'Kerana murid Tahun 4 tidak boleh mencatat lebih daripada satu data',
    },
    correctAnswer: 'A',
    explanation: 'Penyiasatan yang adil memerlukan hanya satu pemboleh ubah dimanipulasi pada satu masa supaya kesan yang terhasil benar-benar berpunca daripada pemboleh ubah tersebut.',
  },
  {
    id: 't4-sn-kemahiran-10',
    year: 4,
    subject: 'Sains',
    topic: 'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 1.1 / SP 1.1.7 (Menggunakan Perhubungan Ruang dan Masa)',
    question: 'Sekiranya sebuku ais diletakkan di atas meja pada suhu bilik, apakah hubungan antara masa dengan saiz ais tersebut?',
    options: {
      A: 'Semakin bertambah masa, semakin berkurang saiz ais kerana ais melebur',
      B: 'Semakin bertambah masa, saiz ais semakin membesar',
      C: 'Saiz ais kekal sama selama-lamanya',
      D: 'Ais bertukar menjadi ketulan besi',
    },
    correctAnswer: 'A',
    explanation: 'Menggunakan perhubungan ruang dan masa menghuraikan perubahan parameter (saiz ais) mengikut peredaran masa akibat peleburan.',
  },

  // =========================================================================
  // TOPIK 2: MANUSIA (PERNAFASAN, PERKUMUHAN & RANGSANGAN) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-manusia-01',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.1 / SP 2.1.1 (Organ Pernafasan Manusia)',
    question: 'Apakah organ pernafasan utama bagi manusia?',
    options: {
      A: 'Peparu',
      B: 'Jantung',
      C: 'Perut',
      D: 'Insang',
    },
    correctAnswer: 'A',
    explanation: 'Organ pernafasan utama manusia ialah peparu (kiri dan kanan), tempat berlakunya pertukaran gas oksigen dan karbon dioksida.',
  },
  {
    id: 't4-sn-manusia-02',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 2.1 / SP 2.1.2 (Laluan Udara Semasa Tarikan Nafas)',
    diagram: {
      title: 'Rajah 3: Model Laluan Pernafasan Manusia',
      type: 'custom_svg',
      caption: 'Laluan udara masuk semasa proses menarik nafas.',
      svgContent: `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="130" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <rect x="25" y="45" width="75" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="62" y="69" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Hidung</text>

        <text x="115" y="69" font-size="14" fill="#16a34a" text-anchor="middle">→</text>

        <rect x="130" y="45" width="80" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="170" y="69" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Trakea</text>

        <text x="225" y="69" font-size="14" fill="#16a34a" text-anchor="middle">→</text>

        <rect x="240" y="45" width="75" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
        <text x="277" y="69" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Peparu</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 3, bagaimanakah laluan udara semasa manusia MENARIK NAFAS?',
    options: {
      A: 'Hidung → Trakea → Peparu',
      B: 'Peparu → Trakea → Hidung',
      C: 'Mulut → Perut → Jantung',
      D: 'Trakea → Hidung → Peparu',
    },
    correctAnswer: 'A',
    explanation: 'Semasa menarik nafas, udara kaya oksigen masuk melalui hidung, menuruni saluran trakea dan masuk ke dalam peparu.',
  },
  {
    id: 't4-sn-manusia-03',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 2.1 / SP 2.1.3 (Kadar Pernafasan)',
    question: 'Mengapakah kadar pernafasan seseorang menjadi LEBIH TINGGI (cepat) selepas melakukan aktiviti cergas seperti berlari pecut 100 meter?',
    options: {
      A: 'Kerana badan memerlukan lebih banyak gas oksigen dengan cepat untuk menghasilkan tenaga',
      B: 'Kerana suhu udara di luar semakin sejuk',
      C: 'Kerana bilangan peparu bertambah menjadi tiga',
      D: 'Supaya berat badan dapat dikurangkan dengan segera',
    },
    correctAnswer: 'A',
    explanation: 'Semasa bersenam cergas, otot memerlukan lebih banyak tenaga. Jantung mengepam darah lebih laju dan peparu bernafas lebih kerap untuk membekalkan lebih banyak oksigen.',
  },
  {
    id: 't4-sn-manusia-04',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.2 / SP 2.2.1 (Organ Perkumuhan Manusia)',
    diagram: {
      title: 'Rajah 4: Organ Perkumuhan Utama Manusia',
      type: 'custom_svg',
      caption: 'Organ X menyingkirkan air kencing dari badan manusia.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Ginjal Kiri dan Kanan berbentuk kacang -->
        <ellipse cx="120" cy="65" rx="20" ry="32" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
        <ellipse cx="200" cy="65" rx="20" ry="32" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Tiub Ureter -->
        <path d="M 125 75 Q 150 110 160 115" stroke="#ea580c" stroke-width="2.5" fill="none"/>
        <path d="M 195 75 Q 170 110 160 115" stroke="#ea580c" stroke-width="2.5" fill="none"/>
        <text x="160" y="35" font-size="12" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Organ X (Ginjal / Buah Pinggang)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 4, apakah hasil perkumuhan yang disingkirkan oleh Organ X (ginjal)?',
    options: {
      A: 'Air kencing (urea, garam mineral berlebihan dan air)',
      B: 'Gas karbon dioksida',
      C: 'Tinja (najis pejal)',
      D: 'Peluh berbau',
    },
    correctAnswer: 'A',
    explanation: 'Ginjal (buah pinggang) menapis darah dan menyingkirkan bahan kumuh dalam bentuk air kencing yang mengandungi urea, air dan garam mineral berlebihan.',
  },
  {
    id: 't4-sn-manusia-05',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 2.2 / SP 2.2.2 (Perkumuhan vs Penyahtinjaan)',
    question: 'Apakah perbezaan antara proses PERKUMUHAN dengan proses PENYAHTINJAAN?',
    options: {
      A: 'Perkumuhan ialah penyingkiran bahan buangan daripada sel badan (cth: peluh, air kencing), manakala penyahtinjaan ialah penyingkiran sisa makanan tidak tercerna (tinja) melalui dubur',
      B: 'Perkumuhan hanya berlaku semasa tidur, manakala penyahtinjaan berlaku semasa makan',
      C: 'Perkumuhan menghasilkan tinja, manakala penyahtinjaan menghasilkan oksigen',
      D: 'Kedua-duanya adalah proses yang sama tanpa sebarang perbezaan',
    },
    correctAnswer: 'A',
    explanation: 'Perkumuhan menyingkirkan sisa metabolisme badan (air kencing, peluh, karbon dioksida). Penyahtinjaan menyingkirkan sisa makanan yang tidak dihadamkan (tinja) melalui dubur.',
  },
  {
    id: 't4-sn-manusia-06',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 2.3 / SP 2.3.1 (Gerak Balas Terhadap Rangsangan)',
    diagram: {
      title: 'Rajah 5: Tindakan Spontan Terhadap Rangsangan Panas',
      type: 'custom_svg',
      caption: 'Tangan ditarik dengan pantas sebaik sahaja tersentuh cerek panas.',
      svgContent: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="120" rx="10" fill="#fff7ed" stroke="#fdba74" stroke-width="1.5"/>
        <!-- Cerek Panas -->
        <rect x="50" y="45" width="55" height="50" rx="6" fill="#64748b"/>
        <ellipse cx="77" cy="45" rx="20" ry="6" fill="#94a3b8"/>
        <!-- Stim Panas -->
        <path d="M 70 35 Q 65 20 75 15" stroke="#ea580c" stroke-width="2" fill="none"/>
        <path d="M 85 35 Q 90 20 80 15" stroke="#ea580c" stroke-width="2" fill="none"/>
        <!-- Tangan Menjauh -->
        <path d="M 170 65 L 140 65" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3"/>
        <circle cx="210" cy="65" r="22" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
        <text x="210" y="69" font-size="10" font-weight="bold" fill="#9a3412" text-anchor="middle">Tangan</text>
        <text x="210" y="105" font-size="9" fill="#c2410c" text-anchor="middle">Menarik tangan dengan serta-merta</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 5, mengapakah manusia bergerak balas secara spontan dengan menarik tangan apabila tersentuh objek yang sangat panas?',
    options: {
      A: 'Untuk melindungi diri daripada kecederaan dan melecur',
      B: 'Untuk menguji kepanasan air di dalam cerek',
      C: 'Kerana terkejut mendengar bunyi loceng',
      D: 'Sebagai senaman otot jari',
    },
    correctAnswer: 'A',
    explanation: 'Gerak balas terhadap rangsangan (tindakan refleks) membolehkan manusia mengelakkan bahaya atau kecederaan fizikal yang serius pada tubuh badan.',
  },
  {
    id: 't4-sn-manusia-07',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.1 / SP 2.1.4 (Kandungan Oksigen & Karbon Dioksida)',
    question: 'Bandingkan kandungan gas semasa menarik nafas dan menghembus nafas:',
    options: {
      A: 'Udara sedutan mengandungi lebih banyak oksigen, manakala udara hembusan mengandungi lebih banyak karbon dioksida',
      B: 'Udara hembusan mengandungi lebih banyak oksigen berbanding udara sedutan',
      C: 'Kedua-dua udara sedutan dan hembusan mengandungi jumlah gas yang sama',
      D: 'Udara hembusan tidak mengandungi sebarang wap air',
    },
    correctAnswer: 'A',
    explanation: 'Semasa menarik nafas, kita menyedut oksigen yang diperlukan sel. Semasa menghembus nafas, badan mengeluarkan gas buangan iaitu karbon dioksida dan wap air.',
  },
  {
    id: 't4-sn-manusia-08',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 2.3 / SP 2.3.4 (Tabiat Buruk Menjejaskan Rangsangan)',
    question: 'Apakah kesan pengambilan alkohol (minuman keras) atau penyalahgunaan dadah terhadap gerak balas manusia?',
    options: {
      A: 'Melambatkan gerak balas terhadap rangsangan dan meningkatkan risiko kemalangan',
      B: 'Menjadikan manusia bergerak balas sepantas kilat',
      C: 'Memperbaiki daya ingatan dan fokus',
      D: 'Menguatkan organ deria sentuhan',
    },
    correctAnswer: 'A',
    explanation: 'Dadah dan alkohol mengganggu fungsi sistem saraf pusat dan melambatkan masa tindak balas manusia terhadap rangsangan di sekeliling.',
  },
  {
    id: 't4-sn-manusia-09',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 2.2 / SP 2.2.1 (Perkumuhan Kulit)',
    question: 'Organ perkumuhan KULIT menyingkirkan bahan kumuh dalam bentuk:',
    options: {
      A: 'Peluh',
      B: 'Air kencing',
      C: 'Karbon dioksida',
      D: 'Tinja',
    },
    correctAnswer: 'A',
    explanation: 'Kulit menyingkirkan peluh yang mengandungi air, garam mineral dan sedikit urea melalui liang peluh.',
  },
  {
    id: 't4-sn-manusia-10',
    year: 4,
    subject: 'Sains',
    topic: 'Manusia (Pernafasan, Perkumuhan & Rangsangan)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 2.2 / SP 2.2.3 (Kepentingan Perkumuhan)',
    question: 'Apakah yang akan berlaku kepada kesihatan tubuh badan jika bahan kumuh tidak disingkirkan daripada badan?',
    options: {
      A: 'Bahan toksik akan terkumpul dalam darah dan boleh menyebabkan penyakit berbahaya seperti kegagalan buah pinggang atau keracunan',
      B: 'Badan akan menjadi lebih kuat dan bertenaga',
      C: 'Kadar degupan jantung akan berhenti serta-merta tanpa sebarang rasa sakit',
      D: 'Kulit akan bertukar menjadi kalis air',
    },
    correctAnswer: 'A',
    explanation: 'Penyingkiran bahan kumuh amat penting kerana jika sisa toksik terkumpul, ia boleh meracuni sel-sel organ penting dan membawa maut.',
  },

  // =========================================================================
  // TOPIK 3: HAIWAN (ORGAN PERNAFASAN & VERTEBRATA) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-haiwan-01',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Organ Pernafasan Haiwan)',
    question: 'Haiwan seperti belalang, ulat bulu dan lipas bernafas menggunakan:',
    options: {
      A: 'Spirakel (liang pernafasan pada bahagian sisi badan)',
      B: 'Peparu seperti manusia',
      C: 'Insang seperti ikan',
      D: 'Kulit luar yang tebal',
    },
    correctAnswer: 'A',
    explanation: 'Serangga seperti belalang dan lipas mempunyai bukaan liang halus yang dipanggil spirakel pada kedua-dua sisi abdomennya untuk pernafasan.',
  },
  {
    id: 't4-sn-haiwan-02',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.2 (Haiwan Mempunyai Dua Organ Pernafasan)',
    diagram: {
      title: 'Rajah 6: Haiwan Yang Boleh Hidup Di Darat dan Di Air',
      type: 'custom_svg',
      caption: 'Katak dan sesilia mempunyai kebolehan bernafas di dua habitat berbeza.',
      svgContent: `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="30" y="25" width="130" height="80" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
        <text x="95" y="50" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Di Darat</text>
        <text x="95" y="75" font-size="10" fill="#166534" text-anchor="middle">Bernafas guna:</text>
        <text x="95" y="92" font-size="11" font-weight="bold" fill="#14532d" text-anchor="middle">PEPARU</text>

        <rect x="180" y="25" width="130" height="80" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
        <text x="245" y="50" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Di Dalam Air</text>
        <text x="245" y="75" font-size="10" fill="#075985" text-anchor="middle">Bernafas guna:</text>
        <text x="245" y="92" font-size="11" font-weight="bold" fill="#0c4a6e" text-anchor="middle">KULIT LEMBAP</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 6, haiwan manakah yang mempunyai DUA organ pernafasan seperti ini?',
    options: {
      A: 'Katak dan Salamander',
      B: 'Ikan puyu dan Kucing',
      C: 'Penyu dan Burung helang',
      D: 'Ular dan Harimau',
    },
    correctAnswer: 'A',
    explanation: 'Haiwan amfibia seperti katak dewasa dan salamander bernafas menggunakan peparu ketika di darat dan menyerap oksigen melalui kulit lembap semasa di dalam air.',
  },
  {
    id: 't4-sn-haiwan-03',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Paus & Lumba-lumba)',
    question: 'Ikan paus dan dolfin (ikan lumba-lumba) hidup di dalam laut, tetapi mengapakah mereka kerap timbul ke permukaan air?',
    options: {
      A: 'Kerana mereka bernafas menggunakan peparu dan perlu menyedut udara dari permukaan air',
      B: 'Untuk melihat pemandangan kapal di laut',
      C: 'Kerana air laut terlalu masin untuk insang mereka',
      D: 'Untuk tidur di atas air',
    },
    correctAnswer: 'A',
    explanation: 'Paus dan dolfin ialah mamalia akuatik yang bernafas menggunakan peparu (bukan insang). Mereka mesti timbul ke permukaan air untuk menyedut udara atmosfera.',
  },
  {
    id: 't4-sn-haiwan-04',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.2 / SP 3.2.1 (Haiwan Vertebrata & Invertebrata)',
    question: 'Apakah ciri utama yang membezakan haiwan vertebrata daripada haiwan invertebrata?',
    options: {
      A: 'Haiwan vertebrata mempunyai tulang belakang, manakala haiwan invertebrata tidak mempunyai tulang belakang',
      B: 'Haiwan vertebrata hanya hidup di darat',
      C: 'Haiwan invertebrata semuanya boleh terbang',
      D: 'Haiwan vertebrata tidak mempunyai darah',
    },
    correctAnswer: 'A',
    explanation: 'Vertebrata ialah haiwan yang mempunyai tulang belakang (vertebra), manakala invertebrata ialah haiwan tanpa tulang belakang.',
  },
  {
    id: 't4-sn-haiwan-05',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.2 / SP 3.2.2 (Pengelasan 5 Kumpulan Vertebrata)',
    diagram: {
      title: 'Rajah 7: 5 Kumpulan Haiwan Vertebrata',
      type: 'custom_svg',
      caption: 'Mamalia, Burung, Reptilia, Amfibia, dan Ikan.',
      svgContent: `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="15" y="20" width="55" height="90" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
        <text x="42" y="45" font-size="9" font-weight="bold" fill="#b45309" text-anchor="middle">Mamalia</text>
        <text x="42" y="70" font-size="8" fill="#78350f" text-anchor="middle">Berbulu</text>
        <text x="42" y="85" font-size="8" fill="#78350f" text-anchor="middle">halus</text>

        <rect x="78" y="20" width="55" height="90" rx="6" fill="#e0f2fe" stroke="#0284c7"/>
        <text x="105" y="45" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Burung</text>
        <text x="105" y="70" font-size="8" fill="#075985" text-anchor="middle">Bulu</text>
        <text x="105" y="85" font-size="8" fill="#075985" text-anchor="middle">pelepah</text>

        <rect x="141" y="20" width="55" height="90" rx="6" fill="#fee2e2" stroke="#ef4444"/>
        <text x="168" y="45" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">Reptilia</text>
        <text x="168" y="70" font-size="8" fill="#7f1d1d" text-anchor="middle">Sisik</text>
        <text x="168" y="85" font-size="8" fill="#7f1d1d" text-anchor="middle">kering</text>

        <rect x="204" y="20" width="55" height="90" rx="6" fill="#dcfce7" stroke="#22c55e"/>
        <text x="231" y="45" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Amfibia</text>
        <text x="231" y="70" font-size="8" fill="#14532d" text-anchor="middle">Kulit</text>
        <text x="231" y="85" font-size="8" fill="#14532d" text-anchor="middle">lembap</text>

        <rect x="267" y="20" width="58" height="90" rx="6" fill="#f3e8ff" stroke="#a855f7"/>
        <text x="296" y="45" font-size="9" font-weight="bold" fill="#7e22ce" text-anchor="middle">Ikan</text>
        <text x="296" y="70" font-size="8" fill="#581c87" text-anchor="middle">Sisik &</text>
        <text x="296" y="85" font-size="8" fill="#581c87" text-anchor="middle">sirip</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 7, haiwan manakah yang dikelaskan dalam kumpulan REPTILIA?',
    options: {
      A: 'Buaya, Ular dan Cicak',
      B: 'Kucing, Arnab dan Kambing',
      C: 'Katak dan Salamander',
      D: 'Burung merpati dan Ayam',
    },
    correctAnswer: 'A',
    explanation: 'Reptilia mempunyai kulit bersisik kering, bertelur (kebanyakannya), dan bernafas menggunakan peparu, contohnya buaya, ular, cicak dan kura-kura.',
  },
  {
    id: 't4-sn-haiwan-06',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 3.2 / SP 3.2.3 (Ciri Khas Mamalia)',
    question: 'Kelawar boleh terbang di udara seperti burung, tetapi dikelaskan sebagai MAMALIA. Mengapa?',
    options: {
      A: 'Kerana badannya dilitupi bulu halus, melahirkan anak dan menyusukan anaknya',
      B: 'Kerana kelawar makan buah-buahan sahaja',
      C: 'Kerana kelawar hanya aktif pada waktu malam',
      D: 'Kerana kelawar mempunyai paruh',
    },
    correctAnswer: 'A',
    explanation: 'Ciri khusus mamalia ialah berbulu halus, melahirkan anak dan mempunyai kelenjar susu untuk menyusukan anak. Kelawar mempunyai semua ciri mamalia ini.',
  },
  {
    id: 't4-sn-haiwan-07',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.2 / SP 3.2.1 (Haiwan Invertebrata)',
    question: 'Antara berikut, yang manakah merupakan contoh haiwan INVERTEBRATA (tidak mempunyai tulang belakang)?',
    options: {
      A: 'Cacing tanah, obor-obor dan ketam',
      B: 'Ikan kembung dan lembu',
      C: 'Kuda dan katak',
      D: 'Burung hantu dan buaya',
    },
    correctAnswer: 'A',
    explanation: 'Cacing tanah, obor-obor, ketam, lipas dan sotong ialah haiwan invertebrata kerana tidak mempunyai rangka tulang belakang.',
  },
  {
    id: 't4-sn-haiwan-08',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Pernafasan Cacing Tanah)',
    question: 'Cacing tanah bernafas melalui kulit lembapnya. Mengapakah cacing tanah akan lemas dan mati jika tanah tempat tinggalnya terlalu kering kontang?',
    options: {
      A: 'Oksigen hanya boleh melarut dan meresap masuk melalui lapisan kulit yang lembap',
      B: 'Kerana cacing suka berenang di dalam air',
      C: 'Kerana cacing tidak mempunyai darah',
      D: 'Kerana cacing bertukar menjadi serangga',
    },
    correctAnswer: 'A',
    explanation: 'Bagi haiwan yang bernafas melalui kulit lembap, gas oksigen perlu larut dalam mukus cecair lembap pada kulit sebelum dapat diserap masuk ke dalam salur darah.',
  },
  {
    id: 't4-sn-haiwan-09',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 3.2 / SP 3.2.3 (Platipus Bertelur)',
    question: 'Platipus ialah haiwan unik di Australia yang bertelur tetapi tetap dikelaskan sebagai mamalia. Apakah ciri mamalia yang terdapat padanya?',
    options: {
      A: 'Ibu platipus menyusukan anaknya dengan susu badannya dan mempunyai bulu',
      B: 'Platipus boleh bernafas di dalam air guna insang',
      C: 'Platipus mempunyai sayap untuk terbang',
      D: 'Platipus berdarah sejuk seperti reptilia',
    },
    correctAnswer: 'A',
    explanation: 'Platipus tergolong dalam kumpulan mamalia monotremata kerana walaupun bertelur, ia menyusukan anak dan badannya berbulu.',
  },
  {
    id: 't4-sn-haiwan-10',
    year: 4,
    subject: 'Sains',
    topic: 'Haiwan (Organ Pernafasan & Pengelasan Vertebrata)',
    difficulty: 'Mudah',
    learningStandard: 'SK 3.1 / SP 3.1.1 (Pernafasan Berudu)',
    question: 'Sebelum berudu membesar menjadi anak katak, apakah organ pernafasan yang digunakannya semasa berada di dalam air?',
    options: {
      A: 'Insang',
      B: 'Peparu',
      C: 'Spirakel',
      D: 'Kulit kering',
    },
    correctAnswer: 'A',
    explanation: 'Berudu hidup sepenuhnya di dalam air dan bernafas menggunakan insang sama seperti ikan.',
  },

  // =========================================================================
  // TOPIK 4: TUMBUH-TUMBUHAN (GERAK BALAS & FOTOSINTESIS) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-tumbuhan-01',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.1 (Gerak Balas Bahagian Tumbuhan)',
    question: 'Pucuk dan daun tumbuhan sentiasa bertumbuh dan membengkok ke arah rangsangan:',
    options: {
      A: 'Cahaya matahari (fototropisme)',
      B: 'Bawah tanah (graviti)',
      C: 'Kegelapan malam',
      D: 'Kawasan yang tiada udara',
    },
    correctAnswer: 'A',
    explanation: 'Pucuk tumbuhan menunjukkan gerak balas fototropisme positif dengan membengkok ke arah cahaya matahari untuk mendapatkan tenaga membuat makanan.',
  },
  {
    id: 't4-sn-tumbuhan-02',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.2 (Penyiasatan Gerak Balas Pucuk)',
    diagram: {
      title: 'Rajah 8: Anak Benih Di Dalam Kotak Berlubang',
      type: 'custom_svg',
      caption: 'Cahaya matahari hanya masuk melalui lubang kecil di sebelah kanan.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Kotak Hitam -->
        <rect x="60" y="20" width="180" height="95" fill="#1e293b" rx="4"/>
        <!-- Lubang Cahaya di kanan -->
        <rect x="238" y="40" width="8" height="30" fill="#fef08a"/>
        <line x1="245" y1="45" x2="285" y2="40" stroke="#f59e0b" stroke-width="2"/>
        <line x1="245" y1="55" x2="285" y2="55" stroke="#f59e0b" stroke-width="2"/>
        <line x1="245" y1="65" x2="285" y2="70" stroke="#f59e0b" stroke-width="2"/>
        <text x="280" y="30" font-size="9" font-weight="bold" fill="#d97706">Cahaya</text>

        <!-- Pasu Pokok -->
        <rect x="90" y="85" width="40" height="25" fill="#b45309" rx="2"/>
        <!-- Batang Membengkok Ke Kanan Menuju Lubang -->
        <path d="M 110 85 Q 120 55 190 52" stroke="#22c55e" stroke-width="4" fill="none"/>
        <ellipse cx="195" cy="52" rx="10" ry="6" fill="#16a34a"/>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 8, mengapakah pucuk pokok membengkok ke arah lubang di sebelah kanan kotak?',
    options: {
      A: 'Pucuk bergerak balas terhadap arah datangnya cahaya matahari',
      B: 'Pucuk takut pada dinding kotak yang gelap',
      C: 'Angin meniup pucuk ke sebelah kanan',
      D: 'Akar menolak pokok ke sebelah kanan',
    },
    correctAnswer: 'A',
    explanation: 'Pucuk tumbuhan bergerak balas secara positif terhadap cahaya matahari untuk memastikan daun menerima cahaya secukupnya bagi proses fotosintesis.',
  },
  {
    id: 't4-sn-tumbuhan-03',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.1 (Gerak Balas Akar)',
    question: 'Bahagian AKAR tumbuhan bergerak balas terhadap DUA rangsangan utama iaitu:',
    options: {
      A: 'Tarikan graviti bumi (ke bawah) dan sumber air',
      B: 'Cahaya matahari dan angin kencang',
      C: 'Bunyi muzik dan suhu sejuk',
      D: 'Cahaya lampu suluh dan baja',
    },
    correctAnswer: 'A',
    explanation: 'Akar tumbuhan menunjukkan geotropisme positif (tumbuh ke bawah mengikut tarikan graviti) dan hidrotropisme positif (tumbuh ke arah punca air dan kelembapan).',
  },
  {
    id: 't4-sn-tumbuhan-04',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.1 / SP 4.1.3 (Gerak Balas Sentuhan Daun Semalu)',
    question: 'Apakah yang berlaku kepada daun pokok semalu sebaik sahaja disentuh oleh jari?',
    options: {
      A: 'Anak daunnya akan menguncup dengan pantas',
      B: 'Daunnya akan gugur serta-merta',
      C: 'Daunnya akan bertukar warna menjadi merah',
      D: 'Pokok itu akan mengeluarkan bunga serta-merta',
    },
    correctAnswer: 'A',
    explanation: 'Pokok semalu (Mimosa pudica) bergerak balas terhadap rangsangan sentuhan (tigmonasti) dengan menguncupkan daunnya sebagai mekanisme perlindungan diri daripada musuh.',
  },
  {
    id: 't4-sn-tumbuhan-05',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.2 / SP 4.2.1 (Keperluan Fotosintesis)',
    diagram: {
      title: 'Rajah 9: Proses Fotosintesis Tumbuhan Hijau',
      type: 'custom_svg',
      caption: 'Tumbuhan hijau memerlukan 4 faktor untuk menghasilkan glukosa dan oksigen.',
      svgContent: `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="140" rx="10" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <!-- Daun Hijau Tengah -->
        <ellipse cx="170" cy="70" rx="45" ry="25" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
        <text x="170" y="74" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Klorofil</text>

        <!-- Cahaya Matahari -->
        <circle cx="50" cy="35" r="16" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <path d="M 70 40 L 120 58" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="50" y="65" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Cahaya Matahari</text>

        <!-- Karbon Dioksida Masuk -->
        <text x="70" y="115" font-size="9" font-weight="bold" fill="#0f766e">Karbon Dioksida</text>
        <path d="M 125 110 L 145 90" stroke="#0f766e" stroke-width="2"/>

        <!-- Air Dari Akar -->
        <text x="170" y="125" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="middle">Air (dari akar)</text>
        <path d="M 170 115 L 170 95" stroke="#0284c7" stroke-width="2"/>

        <!-- Hasil Keluar: Glukosa & Oksigen -->
        <path d="M 215 65 L 260 50" stroke="#ea580c" stroke-width="2"/>
        <text x="285" y="48" font-size="9" font-weight="bold" fill="#c2410c">Oksigen</text>

        <path d="M 215 75 L 260 90" stroke="#15803d" stroke-width="2"/>
        <text x="285" y="93" font-size="9" font-weight="bold" fill="#15803d">Glukosa (Kanji)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 9, apakah DUA HASIL utama daripada proses fotosintesis?',
    options: {
      A: 'Glukosa (makanan tumbuhan) dan Gas Oksigen',
      B: 'Karbon dioksida dan Air hujan',
      C: 'Baja kimia dan Haba panas',
      D: 'Tanah liat dan Pasir',
    },
    correctAnswer: 'A',
    explanation: 'Persamaan perkataan fotosintesis: Karbon Dioksida + Air (dengan kehadiran Cahaya Matahari & Klorofil) menghasilkan Glukosa + Oksigen.',
  },
  {
    id: 't4-sn-tumbuhan-06',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.2 / SP 4.2.2 (Klorofil)',
    question: 'Apakah fungsi pigmen hijau (klorofil) yang terdapat pada daun tumbuhan?',
    options: {
      A: 'Menyerap tenaga cahaya daripada matahari untuk proses fotosintesis',
      B: 'Menarik perhatian rama-rama untuk bertelur',
      C: 'Menghalang air hujan daripada membasahi daun',
      D: 'Menjadikan pokok berbau harum',
    },
    correctAnswer: 'A',
    explanation: 'Klorofil ialah pigmen hijau pada tumbuhan yang bertindak memerangkap atau menyerap tenaga cahaya matahari yang amat diperlukan dalam fotosintesis.',
  },
  {
    id: 't4-sn-tumbuhan-07',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 4.2 / SP 4.2.3 (Ujian Kanji Iodin)',
    question: 'Dalam eksperimen sains, larutan iodin dititiskan ke atas daun hijau yang telah dididihkan. Warna larutan iodin bertukar daripada perang kepada biru tua. Apakah yang dibuktikan oleh pemerhatian ini?',
    options: {
      A: 'Daun tersebut mengandungi kanji hasil daripada proses fotosintesis',
      B: 'Daun itu telah beracun dan tidak boleh dimakan',
      C: 'Daun itu tidak menerima air yang cukup',
      D: 'Iodin telah merosakkan klorofil pada daun',
    },
    correctAnswer: 'A',
    explanation: 'Ujian iodin digunakan untuk menguji kehadiran kanji. Pertukaran warna larutan iodin dari perang kepada biru tua membuktikan kanji telah terhasil melalui fotosintesis.',
  },
  {
    id: 't4-sn-tumbuhan-08',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Mudah',
    learningStandard: 'SK 4.2 / SP 4.2.4 (Penyimpanan Makanan Tumbuhan)',
    question: 'Glukosa yang berlebihan yang dihasilkan semasa fotosintesis akan disimpan dalam bentuk kanji pada bahagian:',
    options: {
      A: 'Buah, biji benih, batang, akar dan daun',
      B: 'Hanya pada bunga sahaja',
      C: 'Pada dinding pasu bunga',
      D: 'Di dalam air siraman',
    },
    correctAnswer: 'A',
    explanation: 'Tumbuhan menyimpan kanji pada pelbagai organ seperti akar umbi (ubi kentang, lobak), buah (pisang, mangga), biji benih (beras, jagung), dan batang (tebu).',
  },
  {
    id: 't4-sn-tumbuhan-09',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 4.2 / SP 4.2.5 (Kepentingan Fotosintesis)',
    question: 'Apakah yang akan berlaku kepada hidupan di bumi jika semua tumbuh-tumbuhan hijau mati dan tidak lagi menjalankan fotosintesis?',
    options: {
      A: 'Manusia dan haiwan akan kehabisan sumber makanan dan bekalan oksigen, menyebabkan kepupusan hidupan di bumi',
      B: 'Paras gas karbon dioksida di udara akan berkurang mendadak',
      C: 'Bumi akan menjadi bertambah sejuk dan beku',
      D: 'Haiwan karnivor akan terus hidup selesa tanpa sebarang masalah',
    },
    correctAnswer: 'A',
    explanation: 'Tumbuhan ialah pengeluar utama dalam rantai makanan dan membekalkan gas oksigen untuk semua hidupan bernafas. Tanpa tumbuhan, hidupan lain tidak dapat hidup.',
  },
  {
    id: 't4-sn-tumbuhan-10',
    year: 4,
    subject: 'Sains',
    topic: 'Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 4.1 / SP 4.1.2 (Geotropisme Positif)',
    question: 'Walaupun sebiji pasu pokok diletakkan secara mengiring atau terbalik, akarnya tetap akan membengkok dan tumbuh ke arah bawah. Mengapakah perkara ini berlaku?',
    options: {
      A: 'Akar sentiasa bergerak balas positif terhadap tarikan graviti bumi',
      B: 'Akar ingin menjauhkan diri daripada pasu',
      C: 'Akar tidak sukakan tanah hitam',
      D: 'Kerana daun menolak akar ke bawah',
    },
    correctAnswer: 'A',
    explanation: 'Akar tumbuhan mempunyai kepekaan geotropisme positif, memastikannya sentiasa membesar ke arah bawah menuju tarikan graviti bagi mencengkam tanah.',
  },

  // =========================================================================
  // TOPIK 5: SIFAT CAHAYA (PANTULAN & PEMBIASAN) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-sifat-cahaya-01',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.1 / SP 5.1.1 (Cahaya Bergerak Lurus)',
    question: 'Apakah sifat asas pergerakan cahaya dalam satu medium yang sama?',
    options: {
      A: 'Cahaya bergerak lurus',
      B: 'Cahaya bergerak secara bengkak-bengkok',
      C: 'Cahaya bergerak dalam bentuk bulatan sahaja',
      D: 'Cahaya hanya bergerak jika ditiup angin',
    },
    correctAnswer: 'A',
    explanation: 'Prinsip asas cahaya menyatakan bahawa cahaya bergerak mengikut garis lurus.',
  },
  {
    id: 't4-sn-sifat-cahaya-02',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.2 / SP 5.2.1 (Pantulan Cahaya)',
    diagram: {
      title: 'Rajah 10: Gambar Rajah Sinar Pantulan Cahaya',
      type: 'custom_svg',
      caption: 'Sinar tuju memantul pada permukaan cermin satah yang rata dan berkilat.',
      svgContent: `<svg viewBox="0 0 340 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Cermin Satah di bawah -->
        <rect x="40" y="110" width="260" height="10" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
        <line x1="40" y1="120" x2="300" y2="120" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="170" y="134" font-size="9" fill="#334155" text-anchor="middle">Cermin Satah (Permukaan Berkilat)</text>

        <!-- Garis Normal Tengah (90 darjah) -->
        <line x1="170" y1="25" x2="170" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="170" y="20" font-size="8" fill="#64748b" text-anchor="middle">Garis Normal</text>

        <!-- Sinar Tuju Masuk -->
        <line x1="70" y1="35" x2="170" y2="110" stroke="#dc2626" stroke-width="2.5"/>
        <polygon points="120,72 113,67 117,80" fill="#dc2626"/>
        <text x="85" y="55" font-size="9" font-weight="bold" fill="#dc2626">Sinar Tuju</text>

        <!-- Sinar Pantulan Keluar -->
        <line x1="170" y1="110" x2="270" y2="35" stroke="#2563eb" stroke-width="2.5"/>
        <polygon points="220,72 227,67 223,80" fill="#2563eb"/>
        <text x="255" y="55" font-size="9" font-weight="bold" fill="#2563eb">Sinar Pantulan</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 10, apakah sifat permukaan yang memantulkan cahaya dengan PALING BAIK dan TERATUR?',
    options: {
      A: 'Permukaan yang rata, licin dan berkilat',
      B: 'Permukaan yang kasar dan bergelombang',
      C: 'Permukaan yang lembut dan basah',
      D: 'Permukaan span yang berlubang-lubang',
    },
    correctAnswer: 'A',
    explanation: 'Permukaan rata, licin dan berkilat seperti cermin satah memantulkan cahaya secara sekata mengikut hukum pantulan cahaya.',
  },
  {
    id: 't4-sn-sifat-cahaya-03',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.2 / SP 5.2.2 (Aplikasi Pantulan: Periskop)',
    diagram: {
      title: 'Rajah 11: Prinsip Pantulan Pada Periskop',
      type: 'custom_svg',
      caption: 'Dua keping cermin satah diletakkan pada sudut 45 darjah.',
      svgContent: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="140" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Tiub Periskop Z-shape -->
        <path d="M 50 30 L 120 30 L 120 110 L 220 110" fill="none" stroke="#334155" stroke-width="22" stroke-linejoin="miter"/>
        <path d="M 50 30 L 120 30 L 120 110 L 220 110" fill="none" stroke="#f1f5f9" stroke-width="16" stroke-linejoin="miter"/>

        <!-- Cermin 1 di bucu atas (45 deg) -->
        <line x1="112" y1="22" x2="128" y2="38" stroke="#0284c7" stroke-width="3"/>
        <text x="145" y="26" font-size="8" font-weight="bold" fill="#0284c7">Cermin 1 (45°)</text>

        <!-- Cermin 2 di bucu bawah (45 deg) -->
        <line x1="112" y1="102" x2="128" y2="118" stroke="#0284c7" stroke-width="3"/>
        <text x="75" y="125" font-size="8" font-weight="bold" fill="#0284c7">Cermin 2 (45°)</text>

        <!-- Sinar Cahaya Merah Melalui Periskop -->
        <path d="M 55 30 L 120 30 L 120 110 L 210 110" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="240" y="113" font-size="9" font-weight="bold" fill="#1e293b">Mata Pemerhati</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 11, alat optik periskop ini membolehkan krew kapal selam melihat objek di permukaan laut menggunakan prinsip:',
    options: {
      A: 'Pantulan cahaya oleh dua cermin satah',
      B: 'Penyerapan haba oleh logam tiub',
      C: 'Pembiasan bunyi melalui air',
      D: 'Penyerakan warna pelangi',
    },
    correctAnswer: 'A',
    explanation: 'Periskop menggunakan dua cermin satah yang diletakkan pada sudut 45 darjah untuk memantulkan cahaya dari objek ke mata pemerhati.',
  },
  {
    id: 't4-sn-sifat-cahaya-04',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.3 / SP 5.3.1 (Pembiasan Cahaya)',
    diagram: {
      title: 'Rajah 12: Pensel Kelihatan Patah Di Dalam Air',
      type: 'custom_svg',
      caption: 'Fenomena pembiasan apabila cahaya bergerak melalui dua medium berbeza (udara dan air).',
      svgContent: `<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="140" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Gelas Kaca -->
        <rect x="110" y="30" width="100" height="95" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <!-- Air di dalam gelas -->
        <rect x="111" y="65" width="98" height="58" fill="#bae6fd" fill-opacity="0.6"/>
        <text x="160" y="80" font-size="8" fill="#0369a1" text-anchor="middle">Air (Medium Tumpat)</text>
        <text x="160" y="50" font-size="8" fill="#475569" text-anchor="middle">Udara</text>

        <!-- Pensel Atas -->
        <line x1="85" y1="15" x2="155" y2="65" stroke="#f59e0b" stroke-width="5"/>
        <!-- Pensel Bawah Beralih (Tampak Patah) -->
        <line x1="163" y1="65" x2="195" y2="115" stroke="#f59e0b" stroke-width="5"/>

        <text x="240" y="70" font-size="9" font-weight="bold" fill="#dc2626">Kelihatan</text>
        <text x="240" y="84" font-size="9" font-weight="bold" fill="#dc2626">Bengkok / Patah</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 12, mengapakah pensel kelihatan bengkok atau patah apabila sebahagiannya direndam di dalam air?',
    options: {
      A: 'Kerana arah pergerakan cahaya terbias (berubah arah) apabila bergerak dari air ke udara',
      B: 'Kerana pensel itu patah akibat tekanan air yang berat',
      C: 'Kerana air melarutkan kayu pensel',
      D: 'Kerana cermin kaca gelas memantulkan bayang-bayang pensel',
    },
    correctAnswer: 'A',
    explanation: 'Pembiasan cahaya ialah perubahan arah perambatan cahaya apabila merambat melalui dua medium berketumpatan berbeza (air dan udara), menjadikan pensel tampak bengkok.',
  },
  {
    id: 't4-sn-sifat-cahaya-05',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.3 / SP 5.3.2 (Contoh Pembiasan)',
    question: 'Antara fenomena berikut, yang manakah berlaku disebabkan oleh PEMBIASAN CAHAYA?',
    options: {
      A: 'Kolam renang kelihatan lebih cetek daripada kedalaman sebenarnya dan pembentukan pelangi',
      B: 'Bayang-bayang pokok terbentuk di atas tanah',
      C: 'Melihat wajah sendiri pada cermin almari solek',
      D: 'Lampu suluh menyinari lorong yang gelap',
    },
    correctAnswer: 'A',
    explanation: 'Dasar kolam kelihatan cetek, pembentukan pelangi melalui titisan air, dan tulisan kelihatan besar di bawah kanta pembesar adalah contoh fenomena pembiasan cahaya.',
  },
  {
    id: 't4-sn-sifat-cahaya-06',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 5.2 / SP 5.2.3 (Cermin Cembung di Selekoh Jalan)',
    question: 'Mengapakah cermin cembung dipasang di selekoh jalan raya yang berbahaya?',
    options: {
      A: 'Untuk memberikan medan penglihatan yang lebih luas bagi melihat kenderaan dari arah bertentangan',
      B: 'Untuk memanaskan jalan raya supaya tidak licin',
      C: 'Untuk mencantikkan pemandangan jalan bukit',
      D: 'Untuk menyerap bunyi bising enjin kereta',
    },
    correctAnswer: 'A',
    explanation: 'Cermin cembung menghasilkan imej tegak yang lebih kecil dengan medan pemandangan yang lebih luas, membolehkan pemandu melihat kenderaan di balik selekoh terlindung.',
  },
  {
    id: 't4-sn-sifat-cahaya-07',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Mudah',
    learningStandard: 'SK 5.2 / SP 5.2.2 (Cermin Pergigian)',
    question: 'Doktor gigi menggunakan cermin kecil untuk memeriksa gigi geraham pesakit. Apakah sifat cahaya yang diaplikasikan oleh alat tersebut?',
    options: {
      A: 'Pantulan cahaya',
      B: 'Penyerapan cahaya',
      C: 'Penyerakan cahaya',
      D: 'Kelajuan cahaya',
    },
    correctAnswer: 'A',
    explanation: 'Cermin pergigian memantulkan cahaya ke bahagian belakang gigi pesakit yang terlindung dan membentuk imej gigi yang jelas untuk diperiksa doktor.',
  },
  {
    id: 't4-sn-sifat-cahaya-08',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'KBAT (Aras Rendah)',
    learningStandard: 'SK 5.3 / SP 5.3.3 (Kanta Pembesar)',
    question: 'Seorang murid menggunakan kanta pembesar untuk melihat semut kecil di atas daun. Huruf dan badan semut kelihatan bertambah besar. Mengapa?',
    options: {
      A: 'Kanta cembung membiaskan cahaya untuk membesarkan imej objek',
      B: 'Kanta pembesar mengeluarkan cahaya ultraviolet',
      C: 'Semut tersebut telah membesar semasa dilihat',
      D: 'Kanta memerangkap bayang-bayang semut',
    },
    correctAnswer: 'A',
    explanation: 'Kanta cembung menggunakan prinsip pembiasan cahaya untuk memfokuskan sinar cahaya dan menghasilkan imej yang diperbesarkan.',
  },
  {
    id: 't4-sn-sifat-cahaya-09',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 5.3 / SP 5.3.4 (Pembentukan Pelangi)',
    question: 'Bilakah pelangi biasanya terbentuk di langit?',
    options: {
      A: 'Selepas hujan reda ketika matahari bersinar di belakang pemerhati',
      B: 'Pada waktu tengah malam yang gelap pekat',
      C: 'Semasa ribut petir di bawah tanah',
      D: 'Ketika musim kemarau tanpa sebarang awan',
    },
    correctAnswer: 'A',
    explanation: 'Pelangi terbentuk apabila cahaya matahari dibiaskan, dipantulkan dan diserakkan oleh titisan-titisan air hujan yang masih terapung di udara.',
  },
  {
    id: 't4-sn-sifat-cahaya-10',
    year: 4,
    subject: 'Sains',
    topic: 'Sifat Cahaya (Pantulan & Pembiasan)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 5.1 / SP 5.1.2 (Saiz Bayang-bayang)',
    question: 'Bagaimanakah kita boleh menjadikan bayang-bayang suatu objek menjadi LEBIH BESAR pada skrin?',
    options: {
      A: 'Mendekatkan objek tersebut dengan sumber cahaya (lampu suluh)',
      B: 'Menjauhkan objek tersebut daripada sumber cahaya',
      C: 'Mengurangkan kuasa bateri lampu suluh',
      D: 'Mengecat objek tersebut dengan warna putih',
    },
    correctAnswer: 'A',
    explanation: 'Semakin dekat jarak antara sumber cahaya dengan objek, semakin banyak sudut cahaya dihalang, maka semakin besar saiz bayang-bayang yang terhasil pada skrin.',
  },

  // =========================================================================
  // TOPIK 6: TENAGA & MESIN RINGKAS (BENTUK/PERUBAHAN TENAGA & TUAS) (10 SOALAN)
  // =========================================================================
  {
    id: 't4-sn-tenaga-mesin-01',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.1 (Sumber Tenaga)',
    question: 'Apakah sumber tenaga primer yang paling utama bagi bumi kita?',
    options: {
      A: 'Matahari',
      B: 'Bateri sel kering',
      C: 'Petroleum',
      D: 'Arang batu',
    },
    correctAnswer: 'A',
    explanation: 'Matahari ialah sumber tenaga utama yang membekalkan tenaga suria (cahaya dan haba) kepada seluruh hidupan dan cuaca di bumi.',
  },
  {
    id: 't4-sn-tenaga-mesin-02',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 7.1 / SP 7.1.4 (Perubahan Bentuk Tenaga)',
    diagram: {
      title: 'Rajah 13: Perubahan Bentuk Tenaga Pada Televisyen',
      type: 'custom_svg',
      caption: 'Tenaga elektrik dibekalkan ke televisyen apabila suis dipasang.',
      svgContent: `<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="120" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <rect x="20" y="40" width="100" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="70" y="64" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Tenaga Elektrik</text>

        <text x="135" y="65" font-size="16" fill="#3b82f6" text-anchor="middle">→</text>

        <rect x="150" y="25" width="165" height="70" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="232" y="47" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Tenaga Cahaya</text>
        <text x="232" y="63" font-size="10" fill="#92400e" text-anchor="middle">+</text>
        <text x="232" y="78" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Tenaga Bunyi + Haba</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 13, apakah perubahan bentuk tenaga yang berlaku apabila televisyen dihidupkan?',
    options: {
      A: 'Tenaga elektrik → Tenaga cahaya + Tenaga bunyi + Tenaga haba',
      B: 'Tenaga kimia → Tenaga kinetik sahaja',
      C: 'Tenaga keupayaan → Tenaga nuklear',
      D: 'Tenaga angin → Tenaga elektrik',
    },
    correctAnswer: 'A',
    explanation: 'Televisyen menggunakan tenaga elektrik daripada punca kuasa dan menukarkannya kepada tenaga cahaya (skrin), tenaga bunyi (pembesar suara) serta sedikit tenaga haba.',
  },
  {
    id: 't4-sn-tenaga-mesin-03',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 7.1 / SP 7.1.3 (Tenaga Boleh Dibaharui)',
    question: 'Antara sumber tenaga berikut, yang manakah merupakan SUMBER TENAGA YANG BOLEH DIBAHARUI (tidak akan habis)?',
    options: {
      A: 'Suria (matahari), angin, dan biojisim',
      B: 'Petroleum, arang batu dan gas asli',
      C: 'Bateri kereta dan minyak petrol',
      D: 'Plastik dan bahan galian plumbum',
    },
    correctAnswer: 'A',
    explanation: 'Tenaga boleh dibaharui sentiasa ada dan dijana semula secara semulajadi tanpa risiko kehabisan, contohnya tenaga suria, angin, air dan biojisim.',
  },
  {
    id: 't4-sn-tenaga-mesin-04',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Mudah',
    learningStandard: 'SK 10.1 / SP 10.1.1 (Tiga Komponen Tuas)',
    diagram: {
      title: 'Rajah 14: Tiga Komponen Dalam Tuas',
      type: 'custom_svg',
      caption: 'Beban (B), Fulkrum (F), dan Daya (D).',
      svgContent: `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="340" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Palang Tuas -->
        <line x1="40" y1="65" x2="300" y2="65" stroke="#475569" stroke-width="5"/>
        <!-- Fulkrum Segi Tiga di Tengah -->
        <polygon points="170,65 155,95 185,95" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
        <text x="170" y="112" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">Fulkrum (Titik Sokong)</text>

        <!-- Beban di Kiri -->
        <rect x="45" y="35" width="30" height="30" fill="#ef4444" stroke="#dc2626" rx="3"/>
        <text x="60" y="25" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Beban</text>

        <!-- Daya Tekan di Kanan -->
        <path d="M 285 20 L 285 55" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow)"/>
        <polygon points="285,60 280,50 290,50" fill="#2563eb"/>
        <text x="285" y="15" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Daya</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 14, apakah yang dimaksudkan dengan FULKRUM dalam sistem tuas?',
    options: {
      A: 'Titik sokongan tetap tempat berputarnya sesuatu tuas',
      B: 'Objek berat yang hendak digerakkan atau diangkat',
      C: 'Tolakan atau tarikan yang dikenakan oleh manusia',
      D: 'Tali yang mengikat beban',
    },
    correctAnswer: 'A',
    explanation: 'Fulkrum ialah titik tetap atau paksi sokongan di mana palang tuas boleh berpusing atau berayun.',
  },
  {
    id: 't4-sn-tenaga-mesin-05',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 10.1 / SP 10.1.2 (Kedudukan Komponen Tuas Kelas Pertama)',
    question: 'Dalam sebilah GUNTING (tuas kelas pertama), di manakah kedudukan FULKRUM?',
    options: {
      A: 'Di tengah-tengah (skru engsel pemutar) antara beban dan daya',
      B: 'Di hujung mata gunting yang tajam',
      C: 'Di pemegang plastik tempat jari menekan',
      D: 'Pada kertas yang dipotong',
    },
    correctAnswer: 'A',
    explanation: 'Pada gunting, skru engsel tengah ialah Fulkrum, kertas yang hendak dipotong ialah Beban, dan jari yang menekan pemegang ialah Daya.',
  },
  {
    id: 't4-sn-tenaga-mesin-06',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'KBAT (Aras Tinggi)',
    learningStandard: 'SK 10.1 / SP 10.1.3 (Tuas Memudahkan Kerja)',
    question: 'Bagaimanakah cara untuk mengangkat batu yang sangat berat menggunakan rod besi dengan menggunakan daya yang PALING SEDIKIT (paling ringan)?',
    options: {
      A: 'Meletakkan fulkrum sedekat mungkin dengan beban (batu), dan mengenakan daya sejauh mungkin dari fulkrum',
      B: 'Meletakkan fulkrum jauh daripada batu berat',
      C: 'Mengenakan daya betul-betul di atas fulkrum',
      D: 'Menggunakan rod besi yang sangat pendek',
    },
    correctAnswer: 'A',
    explanation: 'Semakin dekat fulkrum dengan beban (dan semakin panjang jarak antara fulkrum dengan daya), semakin sedikit daya yang diperlukan untuk mengangkat beban berat tersebut.',
  },
  {
    id: 't4-sn-tenaga-mesin-07',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 10.1 / SP 10.1.2 (Tuas Kereta Sorong)',
    diagram: {
      title: 'Rajah 15: Kereta Sorong Satu Roda',
      type: 'custom_svg',
      caption: 'Kedudukan roda, tong simen dan pemegang tangan.',
      svgContent: `<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm">
        <rect width="320" height="130" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Roda Hadapan (Fulkrum) -->
        <circle cx="65" cy="95" r="15" fill="#334155" stroke="#0f172a" stroke-width="2"/>
        <circle cx="65" cy="95" r="5" fill="#cbd5e1"/>
        <text x="65" y="123" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">Roda (F)</text>

        <!-- Gandar Pemegang Mencondong Ke Atas -->
        <line x1="65" y1="95" x2="270" y2="45" stroke="#64748b" stroke-width="4"/>

        <!-- Bekas Beban di Tengah -->
        <polygon points="110,90 190,75 180,45 100,55" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
        <text x="145" y="65" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Beban (B)</text>

        <!-- Pemegang Tangan Di Hujung Kanan -->
        <path d="M 270 45 L 270 20" stroke="#2563eb" stroke-width="3"/>
        <text x="270" y="15" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Daya (D)</text>
      </svg>`,
    },
    question: 'Berdasarkan Rajah 15, apakah susunan komponen bagi sebuah kereta sorong?',
    options: {
      A: 'Fulkrum (Roda) → Beban (Tong simen di tengah) → Daya (Pemegang tangan)',
      B: 'Beban di tengah → Fulkrum di hujung pemegang',
      C: 'Daya di tengah → Roda di atas tong',
      D: 'Fulkrum di tengah roda belakang',
    },
    correctAnswer: 'A',
    explanation: 'Kereta sorong ialah tuas kelas kedua di mana Beban terletak di antara Fulkrum (roda hadapan) dengan Daya angkat (tangan pemegang).',
  },
  {
    id: 't4-sn-tenaga-mesin-08',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Mudah',
    learningStandard: 'SK 7.1 / SP 7.1.4 (Perubahan Tenaga Lilin)',
    question: 'Apakah perubahan bentuk tenaga yang berlaku apabila sebatang lilin dinyalakan apinya?',
    options: {
      A: 'Tenaga kimia → Tenaga haba + Tenaga cahaya',
      B: 'Tenaga kinetik → Tenaga bunyi sahaja',
      C: 'Tenaga elektrik → Tenaga kimia',
      D: 'Tenaga nuklear → Tenaga keupayaan',
    },
    correctAnswer: 'A',
    explanation: 'Lilin menyimpan tenaga kimia dalam bahan lilin paraffin. Apabila dibakar, tenaga kimia bertukar menjadi tenaga haba dan tenaga cahaya.',
  },
  {
    id: 't4-sn-tenaga-mesin-09',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'Sederhana',
    learningStandard: 'SK 10.1 / SP 10.1.2 (Penyepit Ais)',
    question: 'Penyepit ais atau penyepit kuih merupakan contoh tuas di mana DAYA terletak di tengah-tengah. Alat manakah yang mempunyai prinsip kedudukan tuas yang sama dengannya?',
    options: {
      A: 'Joran pancing dan penyapu sampah',
      B: 'Gunting dan jongkang-jongkit',
      C: 'Pembuka penutup botol',
      D: 'Kereta sorong',
    },
    correctAnswer: 'A',
    explanation: 'Joran pancing dan penyapu sampah ialah tuas kelas ketiga di mana Daya yang dikenakan oleh tangan terletak di antara Fulkrum dan Beban.',
  },
  {
    id: 't4-sn-tenaga-mesin-10',
    year: 4,
    subject: 'Sains',
    topic: 'Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)',
    difficulty: 'KBAT (Aras Sederhana)',
    learningStandard: 'SK 7.2 / SP 7.2.2 (Amalan Menjimatkan Tenaga)',
    question: 'Mengapakah kita perlu mengamalkan penjimatan penggunaan tenaga elektrik di rumah dan sekolah?',
    options: {
      A: 'Mengurangkan pelepasan gas rumah hijau dan memelihara sumber bahan api fosil yang terhad',
      B: 'Supaya syarikat elektrik kehabisan wang',
      C: 'Supaya lampu elektrik tidak menghasilkan cahaya',
      D: 'Kerana elektrik tidak berguna kepada manusia',
    },
    correctAnswer: 'A',
    explanation: 'Sebahagian besar elektrik dijana menggunakan arang batu dan gas asli. Menjimatkan elektrik dapat mengurangkan pencemaran alam sekitar dan menjimatkan sumber bumi.',
  },
];
