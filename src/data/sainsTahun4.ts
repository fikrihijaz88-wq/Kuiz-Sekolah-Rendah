import { QuizQuestion } from '../types';

export const SAINS_TAHUN_4_QUESTIONS: QuizQuestion[] = [
  {
    "id": "sai-t4-vis-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Proses Hidup Manusia (Pernafasan)",
    "difficulty": "Sederhana",
    "question": "Berdasarkan rajah organ pernafasan manusia di atas, apakah laluan udara yang betul semasa proses menarik nafas?",
    "options": {
      "A": "Hidung ➔ Trakea ➔ Peparu",
      "B": "Peparu ➔ Trakea ➔ Hidung",
      "C": "Mulut ➔ Perut ➔ Jantung",
      "D": "Hidung ➔ Jantung ➔ Peparu"
    },
    "correctAnswer": "A",
    "explanation": "Semasa menarik nafas, udara beroksigen masuk melalui hidung, menuruni saluran trakea, dan memasuki peparu.",
    "learningStandard": "SP 2.1.1 Mengenal pasti organ yang terlibat dalam proses pernafasan.",
    "diagram": {
      "title": "Rajah: Organ Pernafasan Manusia",
      "type": "science_visual",
      "svgContent": "<svg viewBox=\"0 0 220 180\" width=\"200\" height=\"170\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"5\" y=\"5\" width=\"210\" height=\"170\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\"/>\n    <!-- Nose / Trachea -->\n    <path d=\"M 110 25 L 110 70\" stroke=\"#E11D48\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <text x=\"110\" y=\"20\" font-size=\"9\" font-weight=\"bold\" fill=\"#9F1239\" text-anchor=\"middle\">Hidung / Trakea</text>\n    <!-- Bronchus split -->\n    <line x1=\"110\" y1=\"70\" x2=\"80\" y2=\"95\" stroke=\"#E11D48\" stroke-width=\"4\"/>\n    <line x1=\"110\" y1=\"70\" x2=\"140\" y2=\"95\" stroke=\"#E11D48\" stroke-width=\"4\"/>\n    <!-- Left Lung -->\n    <ellipse cx=\"70\" cy=\"115\" rx=\"25\" ry=\"35\" fill=\"#FDA4AF\" stroke=\"#E11D48\" stroke-width=\"2\"/>\n    <text x=\"70\" y=\"120\" font-size=\"9\" font-weight=\"bold\" fill=\"#881337\" text-anchor=\"middle\">Peparu Kiri</text>\n    <!-- Right Lung -->\n    <ellipse cx=\"150\" cy=\"115\" rx=\"25\" ry=\"35\" fill=\"#FDA4AF\" stroke=\"#E11D48\" stroke-width=\"2\"/>\n    <text x=\"150\" y=\"120\" font-size=\"9\" font-weight=\"bold\" fill=\"#881337\" text-anchor=\"middle\">Peparu Kanan</text>\n    <!-- Diaphragm -->\n    <path d=\"M 40 155 Q 110 140 180 155\" fill=\"none\" stroke=\"#64748B\" stroke-width=\"3\"/>\n    <text x=\"110\" y=\"168\" font-size=\"9\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">Diafragma</text>\n    <text x=\"110\" y=\"12\" font-size=\"10\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Laluan Udara Semasa Bernafas</text>\n  </svg>",
      "caption": "Perhatikan hidung, saluran trakea, peparu kiri/kanan dan diafragma."
    }
  },
  {
    "id": "t4-sn-kemahiran-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.10 (Mengawal Pemboleh Ubah)",
    "stimulus": "Dalam satu eksperimen bandul, dua tali bandul berbeza panjang (15 cm dan 30 cm) digunakan untuk mengira bilangan ayunan lengkap dalam tempoh satu minit.",
    "question": "Berdasarkan penyiasatan bandul di atas, apakah Pemboleh Ubah Dimanipulasi (PM)?",
    "options": {
      "A": "Panjang tali bandul",
      "B": "Bilangan ayunan bandul dalam seminit",
      "C": "Jisim ladung bandul",
      "D": "Warna bilik makmal"
    },
    "correctAnswer": "A",
    "explanation": "Pemboleh ubah dimanipulasi (PM) ialah perkara yang sengaja diubah atau dibezakan pada awal eksperimen, iaitu panjang tali bandul (15 cm dan 30 cm)."
  },
  {
    "id": "t4-sn-kemahiran-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 1.1 / SP 1.1.11 (Membuat Hipotesis)",
    "stimulus": "Sekumpulan murid Tahun 4 mendapati bahawa semakin panjang tali bandul, semakin berkurang bilangan ayunan lengkap dalam tempoh satu minit.",
    "question": "Pernyataan manakah yang merupakan HIPOTESIS yang tepat bagi penyiasatan ini?",
    "options": {
      "A": "Semakin bertambah panjang tali bandul, semakin berkurang bilangan ayunan bandul dalam satu minit",
      "B": "Bandul bergoyang kerana ada angin kipas",
      "C": "Panjang tali bandul sama dengan berat ladung",
      "D": "Semua bandul berayun pada kelajuan yang sama"
    },
    "correctAnswer": "A",
    "explanation": "Hipotesis menyatakan hubungan antara pemboleh ubah dimanipulasi (panjang tali) dengan pemboleh ubah bergerak balas (bilangan ayunan)."
  },
  {
    "id": "t4-sn-kemahiran-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.8 (Mentafsir Data)",
    "stimulus": "Data masa air mendidih:\n• 100 ml air = 4 minit\n• 200 ml air = 8 minit\n• 300 ml air = 12 minit",
    "question": "Berdasarkan jadual data eksperimen di atas, ramalkan masa yang diambil untuk 250 ml air mendidih jika menggunakan saiz api yang sama.",
    "options": {
      "A": "10 minit",
      "B": "6 minit",
      "C": "14 minit",
      "D": "20 minit"
    },
    "correctAnswer": "A",
    "explanation": "Isi padu 250 ml berada tepat di tengah-tengah antara 200 ml (8 minit) dan 300 ml (12 minit). Oleh itu, masa yang diramalkan ialah (8 + 12) ÷ 2 = 10 minit."
  },
  {
    "id": "t4-sn-kemahiran-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 1.1 / SP 1.1.10 (Pemboleh Ubah Dimalarkan)",
    "question": "Dalam eksperimen mengkaji kadar keterlarutan gula dalam air panas dan air sejuk, apakah pemboleh ubah yang MESTI DIMALARKAN (dikekalkan sama sepanjang eksperimen)?",
    "options": {
      "A": "Isi padu air dan saiz butiran gula yang digunakan",
      "B": "Suhu air yang digunakan",
      "C": "Masa gula larut sepenuhnya",
      "D": "Kemanisan air teh yang dihasilkan"
    },
    "correctAnswer": "A",
    "explanation": "Pemboleh ubah dimalarkan (PDM) ialah faktor yang mesti ditetapkan sama seperti isi padu air dan kuantiti/saiz gula agar penyiasatan adalah adil."
  },
  {
    "id": "t4-sn-kemahiran-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.1 / SP 1.1.4 (Membuat Inferens)",
    "question": "Apakah maksud \"Membuat Inferens\" dalam Kemahiran Proses Sains?",
    "options": {
      "A": "Menyatakan penerangan awal atau sebab yang munasabah bagi sesuatu peristiwa atau pemerhatian",
      "B": "Mengukur suhu menggunakan pembaris kayu",
      "C": "Melukis rajah menggunakan komputer riba",
      "D": "Menghafal nama-nama saintis terkemuka"
    },
    "correctAnswer": "A",
    "explanation": "Membuat inferens ialah membuat kesimpulan awal yang munasabah untuk menerangkan sebab berlakunya sesuatu pemerhatian."
  },
  {
    "id": "sai-t4-vis-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Fotosintesis",
    "difficulty": "Sederhana",
    "question": "Berdasarkan rajah fotosintesis di atas, apakah DUA hasil utama yang dihasilkan oleh tumbuhan hijau selepas proses fotosintesis?",
    "options": {
      "A": "Glukosa (makanan) dan Gas Oksigen",
      "B": "Karbon dioksida dan Air",
      "C": "Cahaya matahari dan Tanah",
      "D": "Baja dan Racun"
    },
    "correctAnswer": "A",
    "explanation": "Hasil proses fotosintesis ialah glukosa (kanji untuk tumbuhan) dan gas oksigen yang dibebaskan ke udara.",
    "learningStandard": "SP 4.2.2 Menyatakan hasil fotosintesis melalui pemerhatian.",
    "diagram": {
      "title": "Rajah: Proses Fotosintesis Tumbuhan",
      "type": "science_visual",
      "svgContent": "<svg viewBox=\"0 0 240 200\" width=\"220\" height=\"190\" xmlns=\"http://www.w3.org/2000/svg\">\n    <!-- Background / Soil -->\n    <rect x=\"10\" y=\"150\" width=\"220\" height=\"40\" fill=\"#78350F\" rx=\"4\"/>\n    <text x=\"120\" y=\"175\" font-size=\"10\" font-weight=\"bold\" fill=\"#FEF3C7\" text-anchor=\"middle\">Tanah & Akar (Menyerap Air)</text>\n    <!-- Sun -->\n    <circle cx=\"35\" cy=\"35\" r=\"16\" fill=\"#FBBF24\" stroke=\"#D97706\" stroke-width=\"2\"/>\n    <line x1=\"35\" y1=\"12\" x2=\"35\" y2=\"5\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n    <line x1=\"12\" y1=\"35\" x2=\"5\" y2=\"35\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n    <line x1=\"52\" y1=\"52\" x2=\"60\" y2=\"60\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n    <text x=\"35\" y=\"65\" font-size=\"9\" font-weight=\"bold\" fill=\"#B45309\" text-anchor=\"middle\">Cahaya Matahari</text>\n    <!-- Stem -->\n    <line x1=\"120\" y1=\"150\" x2=\"120\" y2=\"60\" stroke=\"#16A34A\" stroke-width=\"5\"/>\n    <!-- Leaves -->\n    <path d=\"M 120 110 Q 80 90 70 110 Q 95 125 120 110\" fill=\"#22C55E\" stroke=\"#15803D\" stroke-width=\"2\"/>\n    <path d=\"M 120 90 Q 160 70 170 90 Q 145 105 120 90\" fill=\"#22C55E\" stroke=\"#15803D\" stroke-width=\"2\"/>\n    <!-- Gas Inputs/Outputs -->\n    <text x=\"65\" y=\"85\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">Karbon Dioksida ➔</text>\n    <text x=\"135\" y=\"55\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\">➔ Oksigen + Glukosa</text>\n    <text x=\"120\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Keperluan & Hasil Fotosintesis</text>\n  </svg>",
      "caption": "Keperluan: Cahaya + Karbon Dioksida + Air. Hasil: Oksigen + Glukosa."
    }
  },
  {
    "id": "t4-sn-kemahiran-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.9 (Mendefinisi Secara Operasi)",
    "stimulus": "Dalam satu penyiasatan, Magnet Bar A dapat menarik 12 batang klip kertas manakala Magnet Bar B hanya dapat menarik 5 batang klip kertas.",
    "question": "Berdasarkan penyiasatan di atas, apakah definisi secara operasi bagi \"kekuatan magnet\"?",
    "options": {
      "A": "Kekuatan magnet ditunjukkan oleh bilangan klip kertas yang dapat ditarik oleh magnet",
      "B": "Kekuatan magnet ialah saiz warna merah magnet itu",
      "C": "Kekuatan magnet ialah harga magnet di kedai",
      "D": "Kekuatan magnet ialah panjang pembaris"
    },
    "correctAnswer": "A",
    "explanation": "Definisi secara operasi menerangkan konsep sains berdasarkan perkara yang boleh diukur atau diperhatikan semasa penyiasatan dijalankan."
  },
  {
    "id": "t4-sn-kemahiran-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 1.1 / SP 1.1.5 (Meramal)",
    "stimulus": "Langit menjadi gelap dan mendung dengan awan kumulonimbus tebal serta angin bertiup kencang.",
    "question": "Apakah ramalan saintifik yang paling tepat tentang keadaan cuaca yang bakal berlaku sebentar lagi?",
    "options": {
      "A": "Hujan lebat atau ribut petir akan turun tidak lama lagi",
      "B": "Hari akan menjadi bertambah panas terik",
      "C": "Pelangi akan muncul serta-merta tanpa hujan",
      "D": "Matahari akan bersinar lebih terang daripada biasa"
    },
    "correctAnswer": "A",
    "explanation": "Awan hitam tebal dan angin kencang adalah tanda fizikal bahawa proses pemeluwapan wap air berlaku dengan pantas dan hujan lebat bakal turun."
  },
  {
    "id": "t4-sn-kemahiran-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.10 (Pemboleh Ubah Bergerak Balas)",
    "stimulus": "Farah menjalankan penyiasatan untuk melihat bagaimana bilangan bateri mempengaruhi kecerahan mentol dalam litar lengkap.",
    "question": "Apakah Pemboleh Ubah Bergerak Balas (PB) dalam penyiasatan Farah?",
    "options": {
      "A": "Kecerahan mentol",
      "B": "Bilangan bateri",
      "C": "Jenis suis yang digunakan",
      "D": "Panjang wayar penyambung"
    },
    "correctAnswer": "A",
    "explanation": "Pemboleh ubah bergerak balas (PB) ialah hasil atau kesan yang diperhatikan/diukur selepas perubahan dibuat, iaitu kecerahan mentol."
  },
  {
    "id": "t4-sn-kemahiran-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 1.1 / SP 1.1.12 (Mengeksperimen)",
    "question": "Mengapakah sesuatu penyiasatan saintifik hanya boleh mengubah SATU pemboleh ubah dimanipulasi pada satu-satu masa?",
    "options": {
      "A": "Untuk memastikan penyiasatan itu adil dan keputusannya tepat serta sahih",
      "B": "Supaya radas makmal tidak cepat rosak",
      "C": "Supaya masa eksperimen menjadi sangat lama",
      "D": "Kerana murid Tahun 4 tidak boleh mencatat lebih daripada satu data"
    },
    "correctAnswer": "A",
    "explanation": "Penyiasatan yang adil memerlukan hanya satu pemboleh ubah dimanipulasi pada satu masa supaya kesan yang terhasil benar-benar berpunca daripada pemboleh ubah tersebut."
  },
  {
    "id": "t4-sn-kemahiran-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.1 / SP 1.1.7 (Menggunakan Perhubungan Ruang dan Masa)",
    "question": "Sekiranya sebuku ais diletakkan di atas meja pada suhu bilik, apakah hubungan antara masa dengan saiz ais tersebut?",
    "options": {
      "A": "Semakin bertambah masa, semakin berkurang saiz ais kerana ais melebur",
      "B": "Semakin bertambah masa, saiz ais semakin membesar",
      "C": "Saiz ais kekal sama selama-lamanya",
      "D": "Ais bertukar menjadi ketulan besi"
    },
    "correctAnswer": "A",
    "explanation": "Menggunakan perhubungan ruang dan masa menghuraikan perubahan parameter (saiz ais) mengikut peredaran masa akibat peleburan."
  },
  {
    "id": "sai-t4-vis-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya",
    "difficulty": "Sederhana",
    "question": "Berdasarkan rajah pantulan cahaya pada cermin satah di atas, apakah hubungan antara Sudut Tuju (i) dan Sudut Pantulan (r)?",
    "options": {
      "A": "Sudut Tuju (i) sentiasa SAMA dengan Sudut Pantulan (r)",
      "B": "Sudut Tuju sentiasa lebih besar daripada Sudut Pantulan",
      "C": "Sudut Pantulan sentiasa bernilai 90 darjah",
      "D": "Sudut Tuju tidak mempunyai hubungan dengan pantulan"
    },
    "correctAnswer": "A",
    "explanation": "Menurut hukum pantulan cahaya pada permukaan licin dan rata, sudut tuju (i) sentiasa sama dengan sudut pantulan (r).",
    "learningStandard": "SP 5.2.1 Menyatakan bahawa cahaya boleh dipantulkan.",
    "diagram": {
      "title": "Rajah: Hukum Pantulan Cahaya",
      "type": "science_visual",
      "svgContent": "<svg viewBox=\"0 0 240 160\" width=\"220\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Mirror Surface -->\n      <line x1=\"20\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#334155\" stroke-width=\"4\"/>\n      <rect x=\"20\" y=\"122\" width=\"200\" height=\"12\" fill=\"#94A3B8\" opacity=\"0.4\"/>\n      <text x=\"120\" y=\"148\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Cermin Satah (Permukaan Licin)</text>\n      <!-- Normal Line -->\n      <line x1=\"120\" y1=\"30\" x2=\"120\" y2=\"120\" stroke=\"#94A3B8\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n      <text x=\"125\" y=\"45\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748B\">Garis Normal</text>\n      <!-- Incident Ray -->\n      <line x1=\"45\" y1=\"45\" x2=\"120\" y2=\"120\" stroke=\"#EF4444\" stroke-width=\"3\"/>\n      <polygon points=\"85,85 80,75 90,78\" fill=\"#EF4444\"/>\n      <text x=\"40\" y=\"40\" font-size=\"9\" font-weight=\"bold\" fill=\"#DC2626\">Sinar Tuju (i)</text>\n      <!-- Reflected Ray -->\n      <line x1=\"120\" y1=\"120\" x2=\"195\" y2=\"45\" stroke=\"#3B82F6\" stroke-width=\"3\"/>\n      <polygon points=\"155,85 165,78 160,75\" fill=\"#3B82F6\"/>\n      <text x=\"195\" y=\"40\" font-size=\"9\" font-weight=\"bold\" fill=\"#2563EB\">Sinar Pantulan (r)</text>\n      <text x=\"120\" y=\"20\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Sinar Tuju (i) = Sinar Pantulan (r)</text>\n    </svg>",
      "caption": "Cahaya memantul pada sudut yang sama dengan sudut datangnya."
    }
  },
  {
    "id": "t4-sn-manusia-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Organ Pernafasan Manusia)",
    "question": "Apakah organ pernafasan utama bagi manusia?",
    "options": {
      "A": "Peparu",
      "B": "Jantung",
      "C": "Perut",
      "D": "Insang"
    },
    "correctAnswer": "A",
    "explanation": "Organ pernafasan utama manusia ialah peparu (kiri dan kanan), tempat berlakunya pertukaran gas oksigen dan karbon dioksida."
  },
  {
    "id": "t4-sn-manusia-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 2.1 / SP 2.1.2 (Laluan Udara Semasa Tarikan Nafas)",
    "question": "Semasa manusia melakukan proses MENARIK NAFAS, apakah susunan laluan udara beroksigen yang betul masuk ke dalam tubuh?",
    "options": {
      "A": "Hidung → Trakea → Peparu",
      "B": "Peparu → Trakea → Hidung",
      "C": "Mulut → Perut → Jantung",
      "D": "Trakea → Hidung → Peparu"
    },
    "correctAnswer": "A",
    "explanation": "Semasa menarik nafas, udara kaya oksigen masuk melalui hidung, menuruni saluran trakea dan masuk ke dalam peparu."
  },
  {
    "id": "t4-sn-manusia-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 2.1 / SP 2.1.3 (Kadar Pernafasan)",
    "question": "Mengapakah kadar pernafasan seseorang menjadi LEBIH TINGGI (cepat) selepas melakukan aktiviti cergas seperti berlari pecut 100 meter?",
    "options": {
      "A": "Kerana badan memerlukan lebih banyak gas oksigen dengan cepat untuk menghasilkan tenaga",
      "B": "Kerana suhu udara di luar semakin sejuk",
      "C": "Kerana bilangan peparu bertambah menjadi tiga",
      "D": "Supaya berat badan dapat dikurangkan dengan segera"
    },
    "correctAnswer": "A",
    "explanation": "Semasa bersenam cergas, otot memerlukan lebih banyak tenaga. Jantung mengepam darah lebih laju dan peparu bernafas lebih kerap untuk membekalkan lebih banyak oksigen."
  },
  {
    "id": "t4-sn-manusia-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.2 / SP 2.2.1 (Organ Perkumuhan Manusia)",
    "question": "Ginjal (buah pinggang) merupakan salah satu organ perkumuhan manusia yang penting. Apakah hasil perkumuhan yang disingkirkan oleh ginjal?",
    "options": {
      "A": "Air kencing (urea, garam mineral berlebihan dan air)",
      "B": "Gas karbon dioksida",
      "C": "Tinja (najis pejal)",
      "D": "Peluh berbau"
    },
    "correctAnswer": "A",
    "explanation": "Ginjal (buah pinggang) menapis darah dan menyingkirkan bahan kumuh dalam bentuk air kencing yang mengandungi urea, air dan garam mineral berlebihan."
  },
  {
    "id": "t4-sn-manusia-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 2.2 / SP 2.2.2 (Perkumuhan vs Penyahtinjaan)",
    "question": "Apakah perbezaan antara proses PERKUMUHAN dengan proses PENYAHTINJAAN?",
    "options": {
      "A": "Perkumuhan ialah penyingkiran bahan buangan daripada sel badan (cth: peluh, air kencing), manakala penyahtinjaan ialah penyingkiran sisa makanan tidak tercerna (tinja) melalui dubur",
      "B": "Perkumuhan hanya berlaku semasa tidur, manakala penyahtinjaan berlaku semasa makan",
      "C": "Perkumuhan menghasilkan tinja, manakala penyahtinjaan menghasilkan oksigen",
      "D": "Kedua-duanya adalah proses yang sama tanpa sebarang perbezaan"
    },
    "correctAnswer": "A",
    "explanation": "Perkumuhan menyingkirkan sisa metabolisme badan (air kencing, peluh, karbon dioksida). Penyahtinjaan menyingkirkan sisa makanan yang tidak dihadamkan (tinja) melalui dubur."
  },
  {
    "id": "t4-sn-manusia-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 2.3 / SP 2.3.1 (Gerak Balas Terhadap Rangsangan)",
    "question": "Mengapakah manusia bergerak balas secara spontan dengan menarik tangan apabila tersentuh objek yang sangat panas seperti cerek mendidih?",
    "options": {
      "A": "Untuk melindungi diri daripada kecederaan dan melecur",
      "B": "Untuk menguji kepanasan air di dalam cerek",
      "C": "Kerana terkejut mendengar bunyi loceng",
      "D": "Sebagai senaman otot jari"
    },
    "correctAnswer": "A",
    "explanation": "Gerak balas terhadap rangsangan (tindakan refleks) membolehkan manusia mengelakkan bahaya atau kecederaan fizikal yang serius pada tubuh badan."
  },
  {
    "id": "t4-sn-manusia-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.1 / SP 2.1.4 (Kandungan Oksigen & Karbon Dioksida)",
    "question": "Bandingkan kandungan gas semasa menarik nafas dan menghembus nafas:",
    "options": {
      "A": "Udara sedutan mengandungi lebih banyak oksigen, manakala udara hembusan mengandungi lebih banyak karbon dioksida",
      "B": "Udara hembusan mengandungi lebih banyak oksigen berbanding udara sedutan",
      "C": "Kedua-dua udara sedutan dan hembusan mengandungi jumlah gas yang sama",
      "D": "Udara hembusan tidak mengandungi sebarang wap air"
    },
    "correctAnswer": "A",
    "explanation": "Semasa menarik nafas, kita menyedut oksigen yang diperlukan sel. Semasa menghembus nafas, badan mengeluarkan gas buangan iaitu karbon dioksida dan wap air."
  },
  {
    "id": "t4-sn-manusia-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 2.3 / SP 2.3.4 (Tabiat Buruk Menjejaskan Rangsangan)",
    "question": "Apakah kesan pengambilan alkohol (minuman keras) atau penyalahgunaan dadah terhadap gerak balas manusia?",
    "options": {
      "A": "Melambatkan gerak balas terhadap rangsangan dan meningkatkan risiko kemalangan",
      "B": "Menjadikan manusia bergerak balas sepantas kilat",
      "C": "Memperbaiki daya ingatan dan fokus",
      "D": "Menguatkan organ deria sentuhan"
    },
    "correctAnswer": "A",
    "explanation": "Dadah dan alkohol mengganggu fungsi sistem saraf pusat dan melambatkan masa tindak balas manusia terhadap rangsangan di sekeliling."
  },
  {
    "id": "t4-sn-manusia-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.2 / SP 2.2.1 (Perkumuhan Kulit)",
    "question": "Organ perkumuhan KULIT menyingkirkan bahan kumuh dalam bentuk:",
    "options": {
      "A": "Peluh",
      "B": "Air kencing",
      "C": "Karbon dioksida",
      "D": "Tinja"
    },
    "correctAnswer": "A",
    "explanation": "Kulit menyingkirkan peluh yang mengandungi air, garam mineral dan sedikit urea melalui liang peluh."
  },
  {
    "id": "t4-sn-manusia-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 2.2 / SP 2.2.3 (Kepentingan Perkumuhan)",
    "question": "Apakah yang akan berlaku kepada kesihatan tubuh badan jika bahan kumuh tidak disingkirkan daripada badan?",
    "options": {
      "A": "Bahan toksik akan terkumpul dalam darah dan boleh menyebabkan penyakit berbahaya seperti kegagalan buah pinggang atau keracunan",
      "B": "Badan akan menjadi lebih kuat dan bertenaga",
      "C": "Kadar degupan jantung akan berhenti serta-merta tanpa sebarang rasa sakit",
      "D": "Kulit akan bertukar menjadi kalis air"
    },
    "correctAnswer": "A",
    "explanation": "Penyingkiran bahan kumuh amat penting kerana jika sisa toksik terkumpul, ia boleh meracuni sel-sel organ penting dan membawa maut."
  },
  {
    "id": "t4-sn-haiwan-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Organ Pernafasan Haiwan)",
    "question": "Haiwan seperti belalang, ulat bulu dan lipas bernafas menggunakan:",
    "options": {
      "A": "Spirakel (liang pernafasan pada bahagian sisi badan)",
      "B": "Peparu seperti manusia",
      "C": "Insang seperti ikan",
      "D": "Kulit luar yang tebal"
    },
    "correctAnswer": "A",
    "explanation": "Serangga seperti belalang dan lipas mempunyai bukaan liang halus yang dipanggil spirakel pada kedua-dua sisi abdomennya untuk pernafasan."
  },
  {
    "id": "t4-sn-haiwan-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Haiwan Mempunyai Dua Organ Pernafasan)",
    "question": "Sebilangan haiwan amfibia bernafas menggunakan peparu ketika berada di darat dan menyerap oksigen melalui kulit lembap semasa di dalam air. Haiwan manakah yang mempunyai DUA organ pernafasan seperti ini?",
    "options": {
      "A": "Katak dan Salamander",
      "B": "Ikan puyu dan Kucing",
      "C": "Penyu dan Burung helang",
      "D": "Ular dan Harimau"
    },
    "correctAnswer": "A",
    "explanation": "Haiwan amfibia seperti katak dewasa dan salamander bernafas menggunakan peparu ketika di darat dan menyerap oksigen melalui kulit lembap semasa di dalam air."
  },
  {
    "id": "t4-sn-haiwan-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Paus & Lumba-lumba)",
    "question": "Ikan paus dan dolfin (ikan lumba-lumba) hidup di dalam laut, tetapi mengapakah mereka kerap timbul ke permukaan air?",
    "options": {
      "A": "Kerana mereka bernafas menggunakan peparu dan perlu menyedut udara dari permukaan air",
      "B": "Untuk melihat pemandangan kapal di laut",
      "C": "Kerana air laut terlalu masin untuk insang mereka",
      "D": "Untuk tidur di atas air"
    },
    "correctAnswer": "A",
    "explanation": "Paus dan dolfin ialah mamalia akuatik yang bernafas menggunakan peparu (bukan insang). Mereka mesti timbul ke permukaan air untuk menyedut udara atmosfera."
  },
  {
    "id": "t4-sn-haiwan-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.2 / SP 3.2.1 (Haiwan Vertebrata & Invertebrata)",
    "question": "Apakah ciri utama yang membezakan haiwan vertebrata daripada haiwan invertebrata?",
    "options": {
      "A": "Haiwan vertebrata mempunyai tulang belakang, manakala haiwan invertebrata tidak mempunyai tulang belakang",
      "B": "Haiwan vertebrata hanya hidup di darat",
      "C": "Haiwan invertebrata semuanya boleh terbang",
      "D": "Haiwan vertebrata tidak mempunyai darah"
    },
    "correctAnswer": "A",
    "explanation": "Vertebrata ialah haiwan yang mempunyai tulang belakang (vertebra), manakala invertebrata ialah haiwan tanpa tulang belakang."
  },
  {
    "id": "t4-sn-haiwan-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.2 / SP 3.2.2 (Pengelasan 5 Kumpulan Vertebrata)",
    "question": "Antara kumpulan haiwan berikut, yang manakah kesemuanya dikelaskan dalam kumpulan REPTILIA (berkulit sisik kering dan berdarah sejuk)?",
    "options": {
      "A": "Buaya, Ular dan Cicak",
      "B": "Kucing, Arnab dan Kambing",
      "C": "Katak dan Salamander",
      "D": "Burung merpati dan Ayam"
    },
    "correctAnswer": "A",
    "explanation": "Reptilia mempunyai kulit bersisik kering, bertelur (kebanyakannya), dan bernafas menggunakan peparu, contohnya buaya, ular, cicak dan kura-kura."
  },
  {
    "id": "t4-sn-haiwan-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 3.2 / SP 3.2.3 (Ciri Khas Mamalia)",
    "question": "Kelawar boleh terbang di udara seperti burung, tetapi dikelaskan sebagai MAMALIA. Mengapa?",
    "options": {
      "A": "Kerana badannya dilitupi bulu halus, melahirkan anak dan menyusukan anaknya",
      "B": "Kerana kelawar makan buah-buahan sahaja",
      "C": "Kerana kelawar hanya aktif pada waktu malam",
      "D": "Kerana kelawar mempunyai paruh"
    },
    "correctAnswer": "A",
    "explanation": "Ciri khusus mamalia ialah berbulu halus, melahirkan anak dan mempunyai kelenjar susu untuk menyusukan anak. Kelawar mempunyai semua ciri mamalia ini."
  },
  {
    "id": "t4-sn-haiwan-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.2 / SP 3.2.1 (Haiwan Invertebrata)",
    "question": "Antara berikut, yang manakah merupakan contoh haiwan INVERTEBRATA (tidak mempunyai tulang belakang)?",
    "options": {
      "A": "Cacing tanah, obor-obor dan ketam",
      "B": "Ikan kembung dan lembu",
      "C": "Kuda dan katak",
      "D": "Burung hantu dan buaya"
    },
    "correctAnswer": "A",
    "explanation": "Cacing tanah, obor-obor, ketam, lipas dan sotong ialah haiwan invertebrata kerana tidak mempunyai rangka tulang belakang."
  },
  {
    "id": "t4-sn-haiwan-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Pernafasan Cacing Tanah)",
    "question": "Cacing tanah bernafas melalui kulit lembapnya. Mengapakah cacing tanah akan lemas dan mati jika tanah tempat tinggalnya terlalu kering kontang?",
    "options": {
      "A": "Oksigen hanya boleh melarut dan meresap masuk melalui lapisan kulit yang lembap",
      "B": "Kerana cacing suka berenang di dalam air",
      "C": "Kerana cacing tidak mempunyai darah",
      "D": "Kerana cacing bertukar menjadi serangga"
    },
    "correctAnswer": "A",
    "explanation": "Bagi haiwan yang bernafas melalui kulit lembap, gas oksigen perlu larut dalam mukus cecair lembap pada kulit sebelum dapat diserap masuk ke dalam salur darah."
  },
  {
    "id": "t4-sn-haiwan-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 3.2 / SP 3.2.3 (Platipus Bertelur)",
    "question": "Platipus ialah haiwan unik di Australia yang bertelur tetapi tetap dikelaskan sebagai mamalia. Apakah ciri mamalia yang terdapat padanya?",
    "options": {
      "A": "Ibu platipus menyusukan anaknya dengan susu badannya dan mempunyai bulu",
      "B": "Platipus boleh bernafas di dalam air guna insang",
      "C": "Platipus mempunyai sayap untuk terbang",
      "D": "Platipus berdarah sejuk seperti reptilia"
    },
    "correctAnswer": "A",
    "explanation": "Platipus tergolong dalam kumpulan mamalia monotremata kerana walaupun bertelur, ia menyusukan anak dan badannya berbulu."
  },
  {
    "id": "t4-sn-haiwan-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Pernafasan Berudu)",
    "question": "Sebelum berudu membesar menjadi anak katak, apakah organ pernafasan yang digunakannya semasa berada di dalam air?",
    "options": {
      "A": "Insang",
      "B": "Peparu",
      "C": "Spirakel",
      "D": "Kulit kering"
    },
    "correctAnswer": "A",
    "explanation": "Berudu hidup sepenuhnya di dalam air dan bernafas menggunakan insang sama seperti ikan."
  },
  {
    "id": "t4-sn-tumbuhan-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.1 (Gerak Balas Bahagian Tumbuhan)",
    "question": "Pucuk dan daun tumbuhan sentiasa bertumbuh dan membengkok ke arah rangsangan:",
    "options": {
      "A": "Cahaya matahari (fototropisme)",
      "B": "Bawah tanah (graviti)",
      "C": "Kegelapan malam",
      "D": "Kawasan yang tiada udara"
    },
    "correctAnswer": "A",
    "explanation": "Pucuk tumbuhan menunjukkan gerak balas fototropisme positif dengan membengkok ke arah cahaya matahari untuk mendapatkan tenaga membuat makanan."
  },
  {
    "id": "t4-sn-tumbuhan-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.2 (Penyiasatan Gerak Balas Pucuk)",
    "stimulus": "Sebuah anak benih diletakkan di dalam kotak gelap yang mempunyai satu lubang kecil di sebelah kanan yang membenarkan cahaya matahari masuk.",
    "question": "Mengapakah pucuk pokok membengkok ke arah lubang di sebelah kanan kotak tersebut?",
    "options": {
      "A": "Pucuk bergerak balas terhadap arah datangnya cahaya matahari",
      "B": "Pucuk takut pada dinding kotak yang gelap",
      "C": "Angin meniup pucuk ke sebelah kanan",
      "D": "Akar menolak pokok ke sebelah kanan"
    },
    "correctAnswer": "A",
    "explanation": "Pucuk tumbuhan bergerak balas secara positif terhadap cahaya matahari untuk memastikan daun menerima cahaya secukupnya bagi proses fotosintesis."
  },
  {
    "id": "t4-sn-tumbuhan-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.1 (Gerak Balas Akar)",
    "question": "Bahagian AKAR tumbuhan bergerak balas terhadap DUA rangsangan utama iaitu:",
    "options": {
      "A": "Tarikan graviti bumi (ke bawah) dan sumber air",
      "B": "Cahaya matahari dan angin kencang",
      "C": "Bunyi muzik dan suhu sejuk",
      "D": "Cahaya lampu suluh dan baja"
    },
    "correctAnswer": "A",
    "explanation": "Akar tumbuhan menunjukkan geotropisme positif (tumbuh ke bawah mengikut tarikan graviti) dan hidrotropisme positif (tumbuh ke arah punca air dan kelembapan)."
  },
  {
    "id": "t4-sn-tumbuhan-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.3 (Gerak Balas Sentuhan Daun Semalu)",
    "question": "Apakah yang berlaku kepada daun pokok semalu sebaik sahaja disentuh oleh jari?",
    "options": {
      "A": "Anak daunnya akan menguncup dengan pantas",
      "B": "Daunnya akan gugur serta-merta",
      "C": "Daunnya akan bertukar warna menjadi merah",
      "D": "Pokok itu akan mengeluarkan bunga serta-merta"
    },
    "correctAnswer": "A",
    "explanation": "Pokok semalu (Mimosa pudica) bergerak balas terhadap rangsangan sentuhan (tigmonasti) dengan menguncupkan daunnya sebagai mekanisme perlindungan diri daripada musuh."
  },
  {
    "id": "t4-sn-tumbuhan-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.2 / SP 4.2.1 (Keperluan Fotosintesis)",
    "question": "Melalui proses fotosintesis dengan bantuan cahaya matahari dan klorofil, apakah DUA HASIL utama yang dihasilkan oleh tumbuhan hijau?",
    "options": {
      "A": "Glukosa (makanan tumbuhan) dan Gas Oksigen",
      "B": "Karbon dioksida dan Air hujan",
      "C": "Baja kimia dan Haba panas",
      "D": "Tanah liat dan Pasir"
    },
    "correctAnswer": "A",
    "explanation": "Persamaan perkataan fotosintesis: Karbon Dioksida + Air (dengan kehadiran Cahaya Matahari & Klorofil) menghasilkan Glukosa + Oksigen."
  },
  {
    "id": "t4-sn-tumbuhan-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.2 / SP 4.2.2 (Klorofil)",
    "question": "Apakah fungsi pigmen hijau (klorofil) yang terdapat pada daun tumbuhan?",
    "options": {
      "A": "Menyerap tenaga cahaya daripada matahari untuk proses fotosintesis",
      "B": "Menarik perhatian rama-rama untuk bertelur",
      "C": "Menghalang air hujan daripada membasahi daun",
      "D": "Menjadikan pokok berbau harum"
    },
    "correctAnswer": "A",
    "explanation": "Klorofil ialah pigmen hijau pada tumbuhan yang bertindak memerangkap atau menyerap tenaga cahaya matahari yang amat diperlukan dalam fotosintesis."
  },
  {
    "id": "t4-sn-tumbuhan-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 4.2 / SP 4.2.3 (Ujian Kanji Iodin)",
    "question": "Dalam eksperimen sains, larutan iodin dititiskan ke atas daun hijau yang telah dididihkan. Warna larutan iodin bertukar daripada perang kepada biru tua. Apakah yang dibuktikan oleh pemerhatian ini?",
    "options": {
      "A": "Daun tersebut mengandungi kanji hasil daripada proses fotosintesis",
      "B": "Daun itu telah beracun dan tidak boleh dimakan",
      "C": "Daun itu tidak menerima air yang cukup",
      "D": "Iodin telah merosakkan klorofil pada daun"
    },
    "correctAnswer": "A",
    "explanation": "Ujian iodin digunakan untuk menguji kehadiran kanji. Pertukaran warna larutan iodin dari perang kepada biru tua membuktikan kanji telah terhasil melalui fotosintesis."
  },
  {
    "id": "t4-sn-tumbuhan-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.2 / SP 4.2.4 (Penyimpanan Makanan Tumbuhan)",
    "question": "Glukosa yang berlebihan yang dihasilkan semasa fotosintesis akan disimpan dalam bentuk kanji pada bahagian:",
    "options": {
      "A": "Buah, biji benih, batang, akar dan daun",
      "B": "Hanya pada bunga sahaja",
      "C": "Pada dinding pasu bunga",
      "D": "Di dalam air siraman"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan menyimpan kanji pada pelbagai organ seperti akar umbi (ubi kentang, lobak), buah (pisang, mangga), biji benih (beras, jagung), dan batang (tebu)."
  },
  {
    "id": "t4-sn-tumbuhan-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 4.2 / SP 4.2.5 (Kepentingan Fotosintesis)",
    "question": "Apakah yang akan berlaku kepada hidupan di bumi jika semua tumbuh-tumbuhan hijau mati dan tidak lagi menjalankan fotosintesis?",
    "options": {
      "A": "Manusia dan haiwan akan kehabisan sumber makanan dan bekalan oksigen, menyebabkan kepupusan hidupan di bumi",
      "B": "Paras gas karbon dioksida di udara akan berkurang mendadak",
      "C": "Bumi akan menjadi bertambah sejuk dan beku",
      "D": "Haiwan karnivor akan terus hidup selesa tanpa sebarang masalah"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan ialah pengeluar utama dalam rantai makanan dan membekalkan gas oksigen untuk semua hidupan bernafas. Tanpa tumbuhan, hidupan lain tidak dapat hidup."
  },
  {
    "id": "t4-sn-tumbuhan-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.2 (Geotropisme Positif)",
    "question": "Walaupun sebiji pasu pokok diletakkan secara mengiring atau terbalik, akarnya tetap akan membengkok dan tumbuh ke arah bawah. Mengapakah perkara ini berlaku?",
    "options": {
      "A": "Akar sentiasa bergerak balas positif terhadap tarikan graviti bumi",
      "B": "Akar ingin menjauhkan diri daripada pasu",
      "C": "Akar tidak sukakan tanah hitam",
      "D": "Kerana daun menolak akar ke bawah"
    },
    "correctAnswer": "A",
    "explanation": "Akar tumbuhan mempunyai kepekaan geotropisme positif, memastikannya sentiasa membesar ke arah bawah menuju tarikan graviti bagi mencengkam tanah."
  },
  {
    "id": "t4-sn-sifat-cahaya-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.1 (Cahaya Bergerak Lurus)",
    "question": "Apakah sifat asas pergerakan cahaya dalam satu medium yang sama?",
    "options": {
      "A": "Cahaya bergerak lurus",
      "B": "Cahaya bergerak secara bengkak-bengkok",
      "C": "Cahaya bergerak dalam bentuk bulatan sahaja",
      "D": "Cahaya hanya bergerak jika ditiup angin"
    },
    "correctAnswer": "A",
    "explanation": "Prinsip asas cahaya menyatakan bahawa cahaya bergerak mengikut garis lurus."
  },
  {
    "id": "t4-sn-sifat-cahaya-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.2 / SP 5.2.1 (Pantulan Cahaya)",
    "question": "Apabila sinar cahaya dipancarkan ke atas pelbagai jenis permukaan, apakah jenis permukaan yang memantulkan cahaya dengan PALING BAIK dan TERATUR?",
    "options": {
      "A": "Permukaan yang rata, licin dan berkilat",
      "B": "Permukaan yang kasar dan bergelombang",
      "C": "Permukaan yang lembut dan basah",
      "D": "Permukaan span yang berlubang-lubang"
    },
    "correctAnswer": "A",
    "explanation": "Permukaan rata, licin dan berkilat seperti cermin satah memantulkan cahaya secara sekata mengikut hukum pantulan cahaya."
  },
  {
    "id": "t4-sn-sifat-cahaya-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.2 / SP 5.2.2 (Aplikasi Pantulan: Periskop)",
    "question": "Alat optik periskop membolehkan kru kapal selam melihat objek di atas permukaan laut. Apakah prinsip cahaya yang diaplikasikan oleh periskop?",
    "options": {
      "A": "Pantulan cahaya oleh dua cermin satah",
      "B": "Penyerapan haba oleh logam tiub",
      "C": "Pembiasan bunyi melalui air",
      "D": "Penyerakan warna pelangi"
    },
    "correctAnswer": "A",
    "explanation": "Periskop menggunakan dua cermin satah yang diletakkan pada sudut 45 darjah untuk memantulkan cahaya dari objek ke mata pemerhati."
  },
  {
    "id": "t4-sn-sifat-cahaya-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.3 / SP 5.3.1 (Pembiasan Cahaya)",
    "question": "Mengapakah sebatang pensel kelihatan bengkok atau patah apabila sebahagiannya direndam di dalam segelas air jernih?",
    "options": {
      "A": "Kerana arah pergerakan cahaya terbias (berubah arah) apabila bergerak dari air ke udara",
      "B": "Kerana pensel itu patah akibat tekanan air yang berat",
      "C": "Kerana air melarutkan kayu pensel",
      "D": "Kerana cermin kaca gelas memantulkan bayang-bayang pensel"
    },
    "correctAnswer": "A",
    "explanation": "Pembiasan cahaya ialah perubahan arah perambatan cahaya apabila merambat melalui dua medium berketumpatan berbeza (air dan udara), menjadikan pensel tampak bengkok."
  },
  {
    "id": "t4-sn-sifat-cahaya-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.3 / SP 5.3.2 (Contoh Pembiasan)",
    "question": "Antara fenomena berikut, yang manakah berlaku disebabkan oleh PEMBIASAN CAHAYA?",
    "options": {
      "A": "Kolam renang kelihatan lebih cetek daripada kedalaman sebenarnya dan pembentukan pelangi",
      "B": "Bayang-bayang pokok terbentuk di atas tanah",
      "C": "Melihat wajah sendiri pada cermin almari solek",
      "D": "Lampu suluh menyinari lorong yang gelap"
    },
    "correctAnswer": "A",
    "explanation": "Dasar kolam kelihatan cetek, pembentukan pelangi melalui titisan air, dan tulisan kelihatan besar di bawah kanta pembesar adalah contoh fenomena pembiasan cahaya."
  },
  {
    "id": "t4-sn-sifat-cahaya-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 5.2 / SP 5.2.3 (Cermin Cembung di Selekoh Jalan)",
    "question": "Mengapakah cermin cembung dipasang di selekoh jalan raya yang berbahaya?",
    "options": {
      "A": "Untuk memberikan medan penglihatan yang lebih luas bagi melihat kenderaan dari arah bertentangan",
      "B": "Untuk memanaskan jalan raya supaya tidak licin",
      "C": "Untuk mencantikkan pemandangan jalan bukit",
      "D": "Untuk menyerap bunyi bising enjin kereta"
    },
    "correctAnswer": "A",
    "explanation": "Cermin cembung menghasilkan imej tegak yang lebih kecil dengan medan pemandangan yang lebih luas, membolehkan pemandu melihat kenderaan di balik selekoh terlindung."
  },
  {
    "id": "t4-sn-sifat-cahaya-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.2 / SP 5.2.2 (Cermin Pergigian)",
    "question": "Doktor gigi menggunakan cermin kecil untuk memeriksa gigi geraham pesakit. Apakah sifat cahaya yang diaplikasikan oleh alat tersebut?",
    "options": {
      "A": "Pantulan cahaya",
      "B": "Penyerapan cahaya",
      "C": "Penyerakan cahaya",
      "D": "Kelajuan cahaya"
    },
    "correctAnswer": "A",
    "explanation": "Cermin pergigian memantulkan cahaya ke bahagian belakang gigi pesakit yang terlindung dan membentuk imej gigi yang jelas untuk diperiksa doktor."
  },
  {
    "id": "t4-sn-sifat-cahaya-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 5.3 / SP 5.3.3 (Kanta Pembesar)",
    "question": "Seorang murid menggunakan kanta pembesar untuk melihat semut kecil di atas daun. Huruf dan badan semut kelihatan bertambah besar. Mengapa?",
    "options": {
      "A": "Kanta cembung membiaskan cahaya untuk membesarkan imej objek",
      "B": "Kanta pembesar mengeluarkan cahaya ultraviolet",
      "C": "Semut tersebut telah membesar semasa dilihat",
      "D": "Kanta memerangkap bayang-bayang semut"
    },
    "correctAnswer": "A",
    "explanation": "Kanta cembung menggunakan prinsip pembiasan cahaya untuk memfokuskan sinar cahaya dan menghasilkan imej yang diperbesarkan."
  },
  {
    "id": "t4-sn-sifat-cahaya-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.3 / SP 5.3.4 (Pembentukan Pelangi)",
    "question": "Bilakah pelangi biasanya terbentuk di langit?",
    "options": {
      "A": "Selepas hujan reda ketika matahari bersinar di belakang pemerhati",
      "B": "Pada waktu tengah malam yang gelap pekat",
      "C": "Semasa ribut petir di bawah tanah",
      "D": "Ketika musim kemarau tanpa sebarang awan"
    },
    "correctAnswer": "A",
    "explanation": "Pelangi terbentuk apabila cahaya matahari dibiaskan, dipantulkan dan diserakkan oleh titisan-titisan air hujan yang masih terapung di udara."
  },
  {
    "id": "t4-sn-sifat-cahaya-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 5.1 / SP 5.1.2 (Saiz Bayang-bayang)",
    "question": "Bagaimanakah kita boleh menjadikan bayang-bayang suatu objek menjadi LEBIH BESAR pada skrin?",
    "options": {
      "A": "Mendekatkan objek tersebut dengan sumber cahaya (lampu suluh)",
      "B": "Menjauhkan objek tersebut daripada sumber cahaya",
      "C": "Mengurangkan kuasa bateri lampu suluh",
      "D": "Mengecat objek tersebut dengan warna putih"
    },
    "correctAnswer": "A",
    "explanation": "Semakin dekat jarak antara sumber cahaya dengan objek, semakin banyak sudut cahaya dihalang, maka semakin besar saiz bayang-bayang yang terhasil pada skrin."
  },
  {
    "id": "t4-sn-tenaga-mesin-01",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.1 (Sumber Tenaga)",
    "question": "Apakah sumber tenaga primer yang paling utama bagi bumi kita?",
    "options": {
      "A": "Matahari",
      "B": "Bateri sel kering",
      "C": "Petroleum",
      "D": "Arang batu"
    },
    "correctAnswer": "A",
    "explanation": "Matahari ialah sumber tenaga utama yang membekalkan tenaga suria (cahaya dan haba) kepada seluruh hidupan dan cuaca di bumi."
  },
  {
    "id": "t4-sn-tenaga-mesin-02",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.4 (Perubahan Bentuk Tenaga)",
    "question": "Apakah perubahan bentuk tenaga yang berlaku apabila sebuah televisyen di rumah dihidupkan?",
    "options": {
      "A": "Tenaga elektrik → Tenaga cahaya + Tenaga bunyi + Tenaga haba",
      "B": "Tenaga kimia → Tenaga kinetik sahaja",
      "C": "Tenaga keupayaan → Tenaga nuklear",
      "D": "Tenaga angin → Tenaga elektrik"
    },
    "correctAnswer": "A",
    "explanation": "Televisyen menggunakan tenaga elektrik daripada punca kuasa dan menukarkannya kepada tenaga cahaya (skrin), tenaga bunyi (pembesar suara) serta sedikit tenaga haba."
  },
  {
    "id": "t4-sn-tenaga-mesin-03",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.3 (Tenaga Boleh Dibaharui)",
    "question": "Antara sumber tenaga berikut, yang manakah merupakan SUMBER TENAGA YANG BOLEH DIBAHARUI (tidak akan habis)?",
    "options": {
      "A": "Suria (matahari), angin, dan biojisim",
      "B": "Petroleum, arang batu dan gas asli",
      "C": "Bateri kereta dan minyak petrol",
      "D": "Plastik dan bahan galian plumbum"
    },
    "correctAnswer": "A",
    "explanation": "Tenaga boleh dibaharui sentiasa ada dan dijana semula secara semulajadi tanpa risiko kehabisan, contohnya tenaga suria, angin, air dan biojisim."
  },
  {
    "id": "t4-sn-tenaga-mesin-04",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "learningStandard": "SK 10.1 / SP 10.1.1 (Tiga Komponen Tuas)",
    "question": "Dalam sistem mesin ringkas tuas, apakah yang dimaksudkan dengan istilah FULKRUM?",
    "options": {
      "A": "Titik sokongan tetap tempat berputarnya sesuatu tuas",
      "B": "Objek berat yang hendak digerakkan atau diangkat",
      "C": "Tolakan atau tarikan yang dikenakan oleh manusia",
      "D": "Tali yang mengikat beban"
    },
    "correctAnswer": "A",
    "explanation": "Fulkrum ialah titik tetap atau paksi sokongan di mana palang tuas boleh berpusing atau berayun."
  },
  {
    "id": "t4-sn-tenaga-mesin-05",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 10.1 / SP 10.1.2 (Kedudukan Komponen Tuas Kelas Pertama)",
    "question": "Dalam sebilah GUNTING (tuas kelas pertama), di manakah kedudukan FULKRUM?",
    "options": {
      "A": "Di tengah-tengah (skru engsel pemutar) antara beban dan daya",
      "B": "Di hujung mata gunting yang tajam",
      "C": "Di pemegang plastik tempat jari menekan",
      "D": "Pada kertas yang dipotong"
    },
    "correctAnswer": "A",
    "explanation": "Pada gunting, skru engsel tengah ialah Fulkrum, kertas yang hendak dipotong ialah Beban, dan jari yang menekan pemegang ialah Daya."
  },
  {
    "id": "t4-sn-tenaga-mesin-06",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 10.1 / SP 10.1.3 (Tuas Memudahkan Kerja)",
    "question": "Bagaimanakah cara untuk mengangkat batu yang sangat berat menggunakan rod besi dengan menggunakan daya yang PALING SEDIKIT (paling ringan)?",
    "options": {
      "A": "Meletakkan fulkrum sedekat mungkin dengan beban (batu), dan mengenakan daya sejauh mungkin dari fulkrum",
      "B": "Meletakkan fulkrum jauh daripada batu berat",
      "C": "Mengenakan daya betul-betul di atas fulkrum",
      "D": "Menggunakan rod besi yang sangat pendek"
    },
    "correctAnswer": "A",
    "explanation": "Semakin dekat fulkrum dengan beban (dan semakin panjang jarak antara fulkrum dengan daya), semakin sedikit daya yang diperlukan untuk mengangkat beban berat tersebut."
  },
  {
    "id": "t4-sn-tenaga-mesin-07",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 10.1 / SP 10.1.2 (Tuas Kereta Sorong)",
    "question": "Kereta sorong merupakan contoh tuas kelas kedua. Apakah susunan kedudukan komponen bagi sebuah kereta sorong satu roda?",
    "options": {
      "A": "Fulkrum (Roda) → Beban (Tong simen di tengah) → Daya (Pemegang tangan)",
      "B": "Beban di tengah → Fulkrum di hujung pemegang",
      "C": "Daya di tengah → Roda di atas tong",
      "D": "Fulkrum di tengah roda belakang"
    },
    "correctAnswer": "A",
    "explanation": "Kereta sorong ialah tuas kelas kedua di mana Beban terletak di antara Fulkrum (roda hadapan) dengan Daya angkat (tangan pemegang)."
  },
  {
    "id": "t4-sn-tenaga-mesin-08",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.4 (Perubahan Tenaga Lilin)",
    "question": "Apakah perubahan bentuk tenaga yang berlaku apabila sebatang lilin dinyalakan apinya?",
    "options": {
      "A": "Tenaga kimia → Tenaga haba + Tenaga cahaya",
      "B": "Tenaga kinetik → Tenaga bunyi sahaja",
      "C": "Tenaga elektrik → Tenaga kimia",
      "D": "Tenaga nuklear → Tenaga keupayaan"
    },
    "correctAnswer": "A",
    "explanation": "Lilin menyimpan tenaga kimia dalam bahan lilin paraffin. Apabila dibakar, tenaga kimia bertukar menjadi tenaga haba dan tenaga cahaya."
  },
  {
    "id": "t4-sn-tenaga-mesin-09",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 10.1 / SP 10.1.2 (Penyepit Ais)",
    "question": "Penyepit ais atau penyepit kuih merupakan contoh tuas di mana DAYA terletak di tengah-tengah. Alat manakah yang mempunyai prinsip kedudukan tuas yang sama dengannya?",
    "options": {
      "A": "Joran pancing dan penyapu sampah",
      "B": "Gunting dan jongkang-jongkit",
      "C": "Pembuka penutup botol",
      "D": "Kereta sorong"
    },
    "correctAnswer": "A",
    "explanation": "Joran pancing dan penyapu sampah ialah tuas kelas ketiga di mana Daya yang dikenakan oleh tangan terletak di antara Fulkrum dan Beban."
  },
  {
    "id": "t4-sn-tenaga-mesin-10",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 7.2 / SP 7.2.2 (Amalan Menjimatkan Tenaga)",
    "question": "Mengapakah kita perlu mengamalkan penjimatan penggunaan tenaga elektrik di rumah dan sekolah?",
    "options": {
      "A": "Mengurangkan pelepasan gas rumah hijau dan memelihara sumber bahan api fosil yang terhad",
      "B": "Supaya syarikat elektrik kehabisan wang",
      "C": "Supaya lampu elektrik tidak menghasilkan cahaya",
      "D": "Kerana elektrik tidak berguna kepada manusia"
    },
    "correctAnswer": "A",
    "explanation": "Sebahagian besar elektrik dijana menggunakan arang batu dan gas asli. Menjimatkan elektrik dapat mengurangkan pencemaran alam sekitar dan menjimatkan sumber bumi."
  },
  {
    "id": "t4-sn-kemahiran-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "question": "Dalam suatu penyiasatan sains, pemboleh ubah yang ditetapkan sepanjang eksperimen untuk memastikan ujian yang adil dinamakan:",
    "options": {
      "A": "Pemboleh ubah dimalarkan (PMal)",
      "B": "Pemboleh ubah dimanipulasi (PM)",
      "C": "Pemboleh ubah bergerak balas (PB)",
      "D": "Pemboleh ubah luaran"
    },
    "correctAnswer": "A",
    "explanation": "Pemboleh ubah dimalarkan mesti dikekalkan sama sepanjang eksperimen bagi menjamin keadilan ujian.",
    "learningStandard": "SK 1.1 Kemahiran Proses Sains"
  },
  {
    "id": "t4-sn-kemahiran-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "question": "Pilih pernyataan hipotesis yang betul bagi hubungan antara haba dan kadar penyejatan air.",
    "options": {
      "A": "Semakin tinggi suhu persekitaran, semakin cepat kadar penyejatan air",
      "B": "Suhu air tidak berubah",
      "C": "Air menyejat pada waktu malam sahaja",
      "D": "Warna air mempengaruhi suhunya"
    },
    "correctAnswer": "A",
    "explanation": "Hipotesis mengaitkan pemboleh ubah dimanipulasi (suhu) dan bergerak balas (kadar penyejatan).",
    "learningStandard": "SK 1.1 Membuat Hipotesis"
  },
  {
    "id": "t4-sn-kemahiran-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Mudah",
    "question": "Alat pengukur yang paling tepat digunakan untuk mengukur isi padu cecair dengan kejituan tinggi di makmal ialah:",
    "options": {
      "A": "Silinder penyukat",
      "B": "Bikar kaca",
      "C": "Pembaris meter",
      "D": "Neraca tuas"
    },
    "correctAnswer": "A",
    "explanation": "Silinder penyukat direka dengan senggatan tepat untuk mengukur isi padu cecair.",
    "learningStandard": "SK 1.1 Mengukur dan Menggunakan Nombor"
  },
  {
    "id": "t4-sn-kemahiran-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sederhana",
    "question": "Mata pemerhati semasa membaca paras meniskus air pada silinder penyukat mestilah berada:",
    "options": {
      "A": "Aras dengan dasar meniskus cecair",
      "B": "Di atas permukaan cecair",
      "C": "Di bawah dasar silinder",
      "D": "Dari arah serong sisi"
    },
    "correctAnswer": "A",
    "explanation": "Kedudukan mata mesti selaras dengan dasar meniskus melengkung untuk mengelakkan ralat paralaks.",
    "learningStandard": "SK 1.1 Kemahiran Manipulatif"
  },
  {
    "id": "t4-sn-kemahiran-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)",
    "difficulty": "Sukar",
    "question": "Apakah kesimpulan yang tepat jika pemerhatian menunjukkan anak benih tanpa air layu dan mati selepas 5 hari?",
    "options": {
      "A": "Tumbuhan memerlukan air untuk terus hidup",
      "B": "Anak benih tidak memerlukan tanah",
      "C": "Semua tumbuhan boleh hidup dalam gelap",
      "D": "Air menyebabkan akar pokok reput"
    },
    "correctAnswer": "A",
    "explanation": "Eksperimen membuktikan air adalah keperluan asas mutlak percambahan dan kehidupan tumbuhan.",
    "learningStandard": "SK 1.1 Membuat Kesimpulan"
  },
  {
    "id": "t4-sn-manusia-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "question": "Apakah organ perkumuhan yang menyingkirkan karbon dioksida dan wap air daripada badan?",
    "options": {
      "A": "Peparu",
      "B": "Kulit",
      "C": "Ginjal",
      "D": "Jantung"
    },
    "correctAnswer": "A",
    "explanation": "Peparu menyingkirkan gas karbon dioksida dan wap air semasa proses hembusan nafas.",
    "learningStandard": "SK 2.2 Perkumuhan Manusia"
  },
  {
    "id": "t4-sn-manusia-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "question": "Air kencing dihasilkan oleh organ perkumuhan iaitu:",
    "options": {
      "A": "Ginjal",
      "B": "Hati",
      "C": "Perut",
      "D": "Pundi hempedu"
    },
    "correctAnswer": "A",
    "explanation": "Ginjal menapis darah dan menyingkirkan urea, air berlebihan serta garam mineral sebagai air kencing.",
    "learningStandard": "SK 2.2 Fungsi Ginjal"
  },
  {
    "id": "t4-sn-manusia-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Mudah",
    "question": "Kulit menyingkirkan bahan kumuh dalam bentuk:",
    "options": {
      "A": "Peluh",
      "B": "Air kencing",
      "C": "Tinja",
      "D": "Karbon dioksida"
    },
    "correctAnswer": "A",
    "explanation": "Kelenjar peluh pada kulit merembeskan peluh untuk menyejukkan badan dan membuang sisa garam.",
    "learningStandard": "SK 2.2 Perkumuhan Kulit"
  },
  {
    "id": "t4-sn-manusia-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Sederhana",
    "question": "Tangan terangkat secara spontan apabila tersentuh cerek panas. Tindakan ini dinamakan gerak balas terhadap:",
    "options": {
      "A": "Rangsangan haba/panas",
      "B": "Rangsangan bau",
      "C": "Rangsangan bunyi",
      "D": "Rangsangan cahaya"
    },
    "correctAnswer": "A",
    "explanation": "Tindakan refleks menarik tangan melindungi badan daripada kecederaan akibat haba panas.",
    "learningStandard": "SK 2.3 Gerak Balas terhadap Rangsangan"
  },
  {
    "id": "t4-sn-manusia-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Manusia (Pernafasan, Perkumuhan & Rangsangan)",
    "difficulty": "Sukar",
    "question": "Apakah tabiat buruk yang boleh melambatkan gerak balas manusia terhadap rangsangan kecemasan?",
    "options": {
      "A": "Mengambil minuman beralkohol dan penyalahgunaan dadah",
      "B": "Bersenam secara kerap",
      "C": "Minum banyak air mineral",
      "D": "Tidur lapan jam sehari"
    },
    "correctAnswer": "A",
    "explanation": "Alkohol dan dadah menjejaskan fungsi sistem saraf pusat dan melambatkan masa tindak balas.",
    "learningStandard": "SK 2.3 Tabiat Menjejaskan Gerak Balas"
  },
  {
    "id": "t4-sn-haiwan-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "question": "Belalang dan rama-rama bernafas menggunakan struktur khas pada sisi badannya yang dipanggil:",
    "options": {
      "A": "Spirakel",
      "B": "Insang",
      "C": "Kulit lembap",
      "D": "Peparu"
    },
    "correctAnswer": "A",
    "explanation": "Serangga bernafas melalui liang halus pada abdomen yang disebut spirakel.",
    "learningStandard": "SK 3.1 Organ Pernafasan Haiwan"
  },
  {
    "id": "t4-sn-haiwan-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "question": "Cacing tanah dan lintah bernafas melalui:",
    "options": {
      "A": "Kulit lembap",
      "B": "Insang",
      "C": "Spirakel",
      "D": "Peparu buku"
    },
    "correctAnswer": "A",
    "explanation": "Cacing tanah menyerap oksigen terus melalui permukaan kulit yang sentiasa lembap.",
    "learningStandard": "SK 3.1 Haiwan Kulit Lembap"
  },
  {
    "id": "t4-sn-haiwan-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sederhana",
    "question": "Haiwan amfibia seperti katak dewasa bernafas menggunakan:",
    "options": {
      "A": "Peparu dan kulit lembap",
      "B": "Insang sahaja",
      "C": "Spirakel sahaja",
      "D": "Sirip dan ekor"
    },
    "correctAnswer": "A",
    "explanation": "Katak dewasa bernafas menggunakan peparu di darat dan kulit lembap semasa berada di dalam air.",
    "learningStandard": "SK 3.1 Haiwan Berbilang Organ Pernafasan"
  },
  {
    "id": "t4-sn-haiwan-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Mudah",
    "question": "Apakah ciri utama kumpulan haiwan vertebrata?",
    "options": {
      "A": "Mempunyai tulang belakang",
      "B": "Mempunyai cangkerang keras",
      "C": "Berdarah sejuk sahaja",
      "D": "Tidak mempunyai kaki"
    },
    "correctAnswer": "A",
    "explanation": "Vertebrata ialah haiwan yang memiliki struktur tulang belakang.",
    "learningStandard": "SK 3.2 Pengelasan Vertebrata"
  },
  {
    "id": "t4-sn-haiwan-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Haiwan (Organ Pernafasan & Pengelasan Vertebrata)",
    "difficulty": "Sukar",
    "question": "Paus dan lumba-lumba dikelaskan sebagai mamalia dan bukannya ikan kerana:",
    "options": {
      "A": "Melahirkan anak, menyusukan anak dan bernafas melalui peparu",
      "B": "Berenang menggunakan sirip",
      "C": "Tinggal di lautan luas",
      "D": "Mempunyai sisik berkilat"
    },
    "correctAnswer": "A",
    "explanation": "Paus ialah mamalia akuatik berdarah panas yang bernafas melalui peparu dan menyusukan anaknya.",
    "learningStandard": "SK 3.2 Ciri Khas Mamalia Akuatik"
  },
  {
    "id": "t4-sn-tumbuhan-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "question": "Pucuk dan daun tumbuhan tumbuh membengkok ke arah:",
    "options": {
      "A": "Cahaya matahari",
      "B": "Tarikan graviti",
      "C": "Kegelapan",
      "D": "Bawah tanah"
    },
    "correctAnswer": "A",
    "explanation": "Pucuk tumbuhan menunjukkan fototropisme positif dengan tumbuh ke arah sumber cahaya matahari.",
    "learningStandard": "SK 4.1 Gerak Balas Tumbuhan"
  },
  {
    "id": "t4-sn-tumbuhan-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "question": "Akar tumbuhan sentiasa tumbuh ke bawah tanah mengikut gerak balas terhadap:",
    "options": {
      "A": "Tarikan graviti dan sumber air",
      "B": "Cahaya lampu",
      "C": "Bunyi bising",
      "D": "Hembusan angin"
    },
    "correctAnswer": "A",
    "explanation": "Akar menunjukkan geotropisme dan hidrotropisme positif untuk menyerap air.",
    "learningStandard": "SK 4.1 Gerak Balas Akar"
  },
  {
    "id": "t4-sn-tumbuhan-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Mudah",
    "question": "Daun pokok semalu menguncup apabila disentuh. Ini adalah gerak balas terhadap:",
    "options": {
      "A": "Sentuhan",
      "B": "Graviti",
      "C": "Cahaya",
      "D": "Air"
    },
    "correctAnswer": "A",
    "explanation": "Pokok semalu bergerak balas dengan segera menguncupkan daunnya apabila disentuh.",
    "learningStandard": "SK 4.1 Gerak Balas Sentuhan"
  },
  {
    "id": "t4-sn-tumbuhan-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sederhana",
    "question": "Pigmen hijau di dalam daun yang berfungsi menyerap tenaga cahaya matahari dinamakan:",
    "options": {
      "A": "Klorofil",
      "B": "Stoma",
      "C": "Glukosa",
      "D": "Oksigen"
    },
    "correctAnswer": "A",
    "explanation": "Klorofil ialah pigmen hijau yang menangkap tenaga cahaya untuk proses fotosintesis.",
    "learningStandard": "SK 4.2 Fotosintesis"
  },
  {
    "id": "t4-sn-tumbuhan-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Gerak Balas & Fotosintesis)",
    "difficulty": "Sukar",
    "question": "Dua hasil utama proses fotosintesis yang sangat penting kepada hidupan di Bumi ialah:",
    "options": {
      "A": "Glukosa (makanan/kanji) dan gas oksigen",
      "B": "Karbon dioksida dan air",
      "C": "Baja dan tanah hitam",
      "D": "Klorofil dan racun serangga"
    },
    "correctAnswer": "A",
    "explanation": "Fotosintesis menghasilkan glukosa untuk makanan dan membebaskan oksigen untuk pernafasan.",
    "learningStandard": "SK 4.2 Hasil Fotosintesis"
  },
  {
    "id": "t4-sn-cahaya-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "question": "Cahaya bergerak mengikut:",
    "options": {
      "A": "Garis lurus",
      "B": "Garis bengkak-bengkok",
      "C": "Bulatan spiral",
      "D": "Gelombang melengkung"
    },
    "correctAnswer": "A",
    "explanation": "Sifat utama cahaya ialah bergerak dalam garis lurus.",
    "learningStandard": "SK 5.1 Pergerakan Cahaya"
  },
  {
    "id": "t4-sn-cahaya-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "question": "Pembentukan bayang-bayang berlaku apabila:",
    "options": {
      "A": "Cahaya yang bergerak lurus dihalang oleh objek legap atau separa lut sinar",
      "B": "Cahaya dibiaskan dalam cermin",
      "C": "Cahaya hilang di dalam air",
      "D": "Objek mengeluarkan api"
    },
    "correctAnswer": "A",
    "explanation": "Apabila pancaran cahaya terhalang oleh objek yang tidak dapat ditembusi, kawasan gelap bayang-bayang terbentuk.",
    "learningStandard": "SK 5.1 Pembentukan Bayang-bayang"
  },
  {
    "id": "t4-sn-cahaya-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Mudah",
    "question": "Cermin sisi kereta menggunakan prinsip:",
    "options": {
      "A": "Pantulan cahaya",
      "B": "Pembiasan cahaya",
      "C": "Penyerapan cahaya",
      "D": "Penyerakan cahaya"
    },
    "correctAnswer": "A",
    "explanation": "Cermin sisi kereta memantulkan imej kenderaan di belakang ke mata pemandu.",
    "learningStandard": "SK 5.2 Pantulan Cahaya"
  },
  {
    "id": "t4-sn-cahaya-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sederhana",
    "question": "Batang penyedut minuman kelihatan bengkok apabila diletakkan di dalam gelas berisi air kerana:",
    "options": {
      "A": "Pembiasan cahaya apabila bergerak melalui dua medium berbeza",
      "B": "Air mencairkan plastik",
      "C": "Pantulan cahaya dari dasar gelas",
      "D": "Cahaya bergerak lebih perlahan di udara"
    },
    "correctAnswer": "A",
    "explanation": "Pembiasan cahaya berlaku apabila arah perambatan cahaya membengkok semasa merentasi medium udara dan air.",
    "learningStandard": "SK 5.3 Pembiasan Cahaya"
  },
  {
    "id": "t4-sn-cahaya-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Sifat Cahaya (Pantulan & Pembiasan)",
    "difficulty": "Sukar",
    "question": "Alat periskop pada kapal selam membolehkan kelasi melihat objek di permukaan laut dengan menggabungkan dua keping cermin yang dipasang pada sudut:",
    "options": {
      "A": "45 darjah",
      "B": "90 darjah",
      "C": "180 darjah",
      "D": "30 darjah"
    },
    "correctAnswer": "A",
    "explanation": "Dua cermin satah condong 45° memantulkan sinar cahaya dua kali masuk ke mata pemerhati.",
    "learningStandard": "SK 5.2 Aplikasi Pantulan Cahaya"
  },
  {
    "id": "t4-sn-tenaga-11",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "question": "Sumber tenaga utama yang membekalkan cahaya dan haba kepada Bumi ialah:",
    "options": {
      "A": "Matahari",
      "B": "Arang batu",
      "C": "Bateri",
      "D": "Angin"
    },
    "correctAnswer": "A",
    "explanation": "Matahari adalah sumber tenaga primer dan terbesar di Sistem Suria.",
    "learningStandard": "SK 6.1 Sumber Tenaga"
  },
  {
    "id": "t4-sn-tenaga-12",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "question": "Apakah perubahan bentuk tenaga yang berlaku apabila televisyen dihidupkan?",
    "options": {
      "A": "Tenaga elektrik → Tenaga cahaya + Tenaga bunyi",
      "B": "Tenaga kimia → Tenaga kinetik",
      "C": "Tenaga keupayaan → Tenaga haba",
      "D": "Tenaga suria → Tenaga nuklear"
    },
    "correctAnswer": "A",
    "explanation": "Televisyen menukar tenaga elektrik kepada paparan skrin (cahaya) dan pembesar suara (bunyi).",
    "learningStandard": "SK 6.1 Perubahan Bentuk Tenaga"
  },
  {
    "id": "t4-sn-tenaga-13",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Mudah",
    "question": "Antara sumber tenaga berikut, yang manakah merupakan Sumber Tenaga Boleh Baharu?",
    "options": {
      "A": "Tenaga suria, angin dan hidro",
      "B": "Petroleum dan gas asli",
      "C": "Arang batu",
      "D": "Uranium"
    },
    "correctAnswer": "A",
    "explanation": "Tenaga boleh baharu seperti matahari, angin dan air terjun tidak akan habis diguna.",
    "learningStandard": "SK 6.1 Tenaga Boleh Baharu"
  },
  {
    "id": "t4-sn-tenaga-14",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sederhana",
    "question": "Tiga komponen utama dalam sistem tuas ialah:",
    "options": {
      "A": "Fulkrum, beban dan daya",
      "B": "Roda, gandar dan gear",
      "C": "Tali, takal dan paku",
      "D": "Skru, baji dan satah"
    },
    "correctAnswer": "A",
    "explanation": "Sistem tuas terdiri daripada fulkrum (titik sokongan), beban dan daya.",
    "learningStandard": "SK 7.1 Sistem Tuas"
  },
  {
    "id": "t4-sn-tenaga-15",
    "year": 4,
    "subject": "Sains",
    "topic": "Tenaga & Mesin Ringkas (Perubahan Tenaga & Tuas)",
    "difficulty": "Sukar",
    "question": "Semakin dekat kedudukan fulkrum dengan beban, semakin:",
    "options": {
      "A": "Sedikit daya yang diperlukan untuk mengangkat beban tersebut",
      "B": "Banyak daya yang diperlukan",
      "C": "Berat beban menjadi berlipat ganda",
      "D": "Sukar tuas digerakkan"
    },
    "correctAnswer": "A",
    "explanation": "Mendekatkan fulkrum kepada beban memanjangkan lengan daya, membolehkan beban diangkat dengan daya yang minimum.",
    "learningStandard": "SK 7.1 Prinsip Kerja Tuas"
  }
];
