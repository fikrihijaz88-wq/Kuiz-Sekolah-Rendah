import { QuizQuestion } from '../types';

export const MATEMATIK_TAHUN_4_KBAT_QUESTIONS: QuizQuestion[] = [
  {
    "id": "mat-t4-vis-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Berdasarkan satah Cartes di atas, apakah koordinat bagi titik A (Perpustakaan)?",
    "options": {
      "A": "(2, 4)",
      "B": "(4, 2)",
      "C": "(2, 0)",
      "D": "(0, 4)"
    },
    "correctAnswer": "A",
    "explanation": "Koordinat dinyatakan dalam bentuk (x, y). Bergerak 2 unit ke kanan pada paksi mengufuk (x) dan 4 unit ke atas pada paksi mencancang (y), iaitu (2, 4).",
    "learningStandard": "SP 8.1.1 Menamakan koordinat titik pada sukuan pertama satah Cartes.",
    "diagram": {
      "title": "Rajah: Satah Cartes Lokasi Tempat",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 240 195\" width=\"220\" height=\"180\" xmlns=\"http://www.w3.org/2000/svg\">\n    <text x=\"120\" y=\"14\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">Satah Cartes (Paksi Mengufuk & Mencancang)</text>\n    <line x1=\"40\" y1=\"160\" x2=\"199\" y2=\"160\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"1\" stroke=\"#334155\" stroke-width=\"2.5\"/>\n    <polygon points=\"202,160 194,156 194,164\" fill=\"#334155\"/>\n    <polygon points=\"40,-2 36,6 44,6\" fill=\"#334155\"/>\n    <text x=\"196\" y=\"174\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">x</text>\n    <text x=\"26\" y=\"8\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\">y</text>\n    <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"160\" x2=\"184\" y2=\"160\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"40\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">0</text><line x1=\"64\" y1=\"160\" x2=\"64\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"136\" x2=\"184\" y2=\"136\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"64\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">1</text><text x=\"30\" y=\"140\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">1</text><line x1=\"88\" y1=\"160\" x2=\"88\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"112\" x2=\"184\" y2=\"112\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"88\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">2</text><text x=\"30\" y=\"116\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">2</text><line x1=\"112\" y1=\"160\" x2=\"112\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"88\" x2=\"184\" y2=\"88\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"112\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">3</text><text x=\"30\" y=\"92\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">3</text><line x1=\"136\" y1=\"160\" x2=\"136\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"64\" x2=\"184\" y2=\"64\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"136\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">4</text><text x=\"30\" y=\"68\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">4</text><line x1=\"160\" y1=\"160\" x2=\"160\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"40\" x2=\"184\" y2=\"40\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"160\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">5</text><text x=\"30\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">5</text><line x1=\"184\" y1=\"160\" x2=\"184\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"16\" x2=\"184\" y2=\"16\" stroke=\"#E2E8F0\" stroke-width=\"1.5\"/><text x=\"184\" y=\"174\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">6</text><text x=\"30\" y=\"20\" font-size=\"10\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">6</text>\n      <circle cx=\"88\" cy=\"64\" r=\"6\" fill=\"#2563EB\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n      <rect x=\"94\" y=\"46\" width=\"48\" height=\"18\" rx=\"4\" fill=\"#0F172A\" opacity=\"0.88\"/>\n      <text x=\"118\" y=\"58\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">A (Perpustakaan)(2,4)</text>\n    \n      <circle cx=\"160\" cy=\"88\" r=\"6\" fill=\"#16A34A\" stroke=\"#FFFFFF\" stroke-width=\"2\"/>\n      <rect x=\"166\" y=\"70\" width=\"48\" height=\"18\" rx=\"4\" fill=\"#0F172A\" opacity=\"0.88\"/>\n      <text x=\"190\" y=\"82\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">B (Klinik)(5,3)</text>\n    \n  </svg>",
      "caption": "Baca nilai paksi-x dahulu, kemudian diikuti paksi-y: (x, y)."
    }
  },
  {
    "id": "t4-mat-topik1-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Membanding & Menyusun Nombor",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Jadual menunjukkan bilangan pengunjung ke Karnival Buku di empat buah daerah: Daerah P (45,820), Daerah Q (54,280), Daerah R (54,820), dan Daerah S (45,280). Susun daerah mengikut bilangan pengunjung dalam tertib menaik.",
    "options": {
      "A": "Daerah S, Daerah P, Daerah Q, Daerah R",
      "B": "Daerah P, Daerah S, Daerah Q, Daerah R",
      "C": "Daerah R, Daerah Q, Daerah P, Daerah S",
      "D": "Daerah S, Daerah P, Daerah R, Daerah Q"
    },
    "correctAnswer": "A",
    "explanation": "Syabas! Bandingkan nilai ribu dan ratus: 45,280 (S) < 45,820 (P) < 54,280 (Q) < 54,820 (R). Maka susunan tertib menaik ialah Daerah S, Daerah P, Daerah Q, Daerah R.",
    "learningStandard": "SK 1.1 / SP 1.1.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik1-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Anggaran Kuantiti Berpandukan Rujukan",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah balang kaca yang diisi separuh penuh mengandungi kira-kira 10,000 biji manik. Berapakah anggaran paling munasabah bagi bilangan manik jika balang yang sama saiz itu diisi penuh?",
    "options": {
      "A": "12,000 biji",
      "B": "15,000 biji",
      "C": "20,000 biji",
      "D": "30,000 biji"
    },
    "correctAnswer": "C",
    "explanation": "Hebat! Jika separuh penuh ialah 10,000 biji manik, maka balang penuh bersamaan dua kali ganda: 2 × 10,000 = 20,000 biji manik.",
    "learningStandard": "SK 1.5 / SP 1.5.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik1-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Nilai Tempat dan Nilai Digit",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Dalam nombor keselamatan 74,389, digit manakah yang mempunyai nilai digit bersamaan dengan 4,000?",
    "options": {
      "A": "7",
      "B": "4",
      "C": "3",
      "D": "8"
    },
    "correctAnswer": "B",
    "explanation": "Tepat sekali! Digit 4 berada pada nilai tempat ribu, jadi nilai digitnya ialah 4,000.",
    "learningStandard": "SK 1.1 / SP 1.1.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik1-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Membundar Nombor (Julat)",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Suatu nombor 5-digit apabila dibundarkan kepada puluh ribu terdekat menjadi 80,000. Antara nombor berikut, yang manakah nilai terkecil yang mungkin bagi nombor tersebut?",
    "options": {
      "A": "74,999",
      "B": "75,000",
      "C": "79,500",
      "D": "84,999"
    },
    "correctAnswer": "B",
    "explanation": "Bijak! Untuk dibundarkan kepada 80,000 terdekat, julat nombor yang diterima ialah antara 75,000 hingga 84,999. Nilai terkecil yang mungkin ialah 75,000.",
    "learningStandard": "SK 1.4 / SP 1.4.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik1-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Pola Nombor Berulang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Diberi satu urutan pola nombor bertambah enam-enam: 24,105, 24,111, P, 24,123, Q. Hitung nilai bagi P + Q.",
    "options": {
      "A": "48,246",
      "B": "48,240",
      "C": "48,252",
      "D": "48,234"
    },
    "correctAnswer": "A",
    "explanation": "Tahniah! Pola nombor ialah +6. Maka P = 24,111 + 6 = 24,117. Q = 24,123 + 6 = 24,129. Hasil tambah P + Q = 24,117 + 24,129 = 48,246.",
    "learningStandard": "SK 1.2 / SP 1.2.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "mat-t4-vis-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Ruang dan Geometri",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Berdasarkan rajah segi tiga bersudut tegak di atas, hitung luas segi tiga tersebut menggunakan rumus: 1/2 × Tapak × Tinggi.",
    "options": {
      "A": "14 cm²",
      "B": "24 cm²",
      "C": "48 cm²",
      "D": "36 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas = 1/2 × 8 cm × 6 cm = 1/2 × 48 cm² = 24 cm².",
    "learningStandard": "SP 6.3.2 Menentukan luas segi tiga menggunakan rumus.",
    "diagram": {
      "title": "Rajah: Segi Tiga Bersudut Tegak",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 220 150\" width=\"200\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,120 180,120 180,30\" fill=\"#E0F2FE\" stroke=\"#0284C7\" stroke-width=\"3\"/>\n      <rect x=\"160\" y=\"100\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n      <text x=\"105\" y=\"138\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369A1\" text-anchor=\"middle\">Tapak = 8 cm</text>\n      <text x=\"195\" y=\"80\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369A1\" text-anchor=\"start\">Tinggi = 6 cm</text>\n    </svg>",
      "caption": "Gunakan formula Luas = 1/2 × Tapak × Tinggi."
    }
  },
  {
    "id": "t4-mat-topik1-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Membina Nombor dengan Syarat",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Aiman diberi lima keping kad angka: [5, 0, 8, 3, 7]. Aiman diminta membina nombor ganjil 5-digit yang terbesar dengan menggunakan setiap kad angka sekali sahaja. Apakah nombor tersebut?",
    "options": {
      "A": "87,530",
      "B": "87,503",
      "C": "87,305",
      "D": "85,703"
    },
    "correctAnswer": "B",
    "explanation": "Bagus! Untuk membentuk nombor ganjil terbesar: letakkan digit terbesar di nilai tempat tertinggi (puluh ribu: 8, ribu: 7, ratus: 5). Kerana nombor mesti ganjil, digit sa mestilah 3 (angka ganjil terkecil yang ada), dan digit puluh ialah 0. Nombor terbentuk ialah 87,503.",
    "learningStandard": "SK 1.1 / SP 1.1.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik1-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Penyelesaian Masalah Operasi Bergabung",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah kilang menghasilkan 48,650 botol sos. Sebanyak 12,300 botol dihantar ke Pasaraya Mega, 18,450 botol ke Pasaraya Segar, dan bakinya diagihkan sama banyak kepada 2 buah kedai runcit komuniti. Berapakah botol sos yang diterima oleh setiap kedai runcit komuniti itu?",
    "options": {
      "A": "8,950",
      "B": "9,450",
      "C": "17,900",
      "D": "7,950"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! Jumlah botol dihantar ke pasaraya = 12,300 + 18,450 = 30,750 botol. Baki sos = 48,650 - 30,750 = 17,900 botol. Setiap kedai runcit menerima = 17,900 ÷ 2 = 8,950 botol.",
    "learningStandard": "SK 1.7 / SP 1.7.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik1-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Penaakulan Nombor Misteri",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Saya adalah nombor 5-digit. Digit puluh ribu saya ialah 6. Digit ribu saya adalah separuh daripada digit puluh ribu. Digit ratus saya ialah digit terbesar (9), dan hasil tambah semua digit saya ialah 22. Jika digit sa saya ialah 0, apakah digit puluh saya?",
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "correctAnswer": "C",
    "explanation": "Hebat sekali! Digit puluh ribu = 6, digit ribu = 6 ÷ 2 = 3, digit ratus = 9, digit sa = 0. Jumlah setakat ini = 6 + 3 + 9 + 0 = 18. Kerana jumlah keseluruhan digit ialah 22, maka digit puluh = 22 - 18 = 4.",
    "learningStandard": "SK 1.1 / SP 1.1.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik1-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Penyelesaian Masalah Pelbagai Langkah Agihan",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Jabatan Kesihatan memperuntukkan 95,000 kotak pelitup muka untuk tiga zon. Zon Utara menerima 28,400 kotak. Zon Tengah menerima 8,500 kotak lebih banyak daripada Zon Utara. Baki pelitup muka diagihkan kepada Zon Selatan. Berapakah bilangan kotak pelitup muka yang diterima oleh Zon Selatan?",
    "options": {
      "A": "29,700",
      "B": "36,900",
      "C": "58,100",
      "D": "31,200"
    },
    "correctAnswer": "A",
    "explanation": "Luar biasa! Zon Utara = 28,400. Zon Tengah = 28,400 + 8,500 = 36,900. Jumlah Zon Utara dan Tengah = 28,400 + 36,900 = 65,300. Maka Zon Selatan = 95,000 - 65,300 = 29,700 kotak.",
    "learningStandard": "SK 1.7 / SP 1.7.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik1-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Analisis Kod Keselamatan 5-Digit",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah peti besi dilindungi kod 5-digit dengan ciri-ciri berikut: (1) Nombor genap antara 60,000 hingga 70,000, (2) Nilai digit ribu ialah 8,000, (3) Digit ratus ialah dua kali ganda digit puluh, (4) Apabila dibundarkan kepada puluh ribu terdekat menjadi 70,000. Antara berikut, kod manakah yang betul?",
    "options": {
      "A": "68,632",
      "B": "68,362",
      "C": "58,632",
      "D": "68,631"
    },
    "correctAnswer": "A",
    "explanation": "Pintar! Kod 68,632 memenuhi semua syarat: nombor genap berakhir dengan 2, digit ribu 8, digit ratus (6) adalah dua kali ganda digit puluh (3), dan dibundar kepada puluh ribu terdekat menjadi 70,000.",
    "learningStandard": "SK 1.4 / SP 1.4.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "mat-t4-vis-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Isi Padu Bentuk 3D",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Rujuk bongkah kuboid 3D di atas. Berapakah isi padu kuboid tersebut (Panjang × Lebar × Tinggi)?",
    "options": {
      "A": "48 cm³",
      "B": "96 cm³",
      "C": "32 cm³",
      "D": "120 cm³"
    },
    "correctAnswer": "B",
    "explanation": "Isi Padu Kuboid = 8 cm (Panjang) × 3 cm (Lebar) × 4 cm (Tinggi) = 96 cm³.",
    "learningStandard": "SP 6.4.1 Menentukan isi padu kuboid.",
    "diagram": {
      "title": "Rajah: Bongkah Kuboid 3D",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 240 160\" width=\"220\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"70,30 190,30 190,90 70,90\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <polygon points=\"30,60 70,30 190,30 150,60\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"2\"/>\n      <polygon points=\"150,60 190,30 190,90 150,120\" fill=\"#C4B5FD\" stroke=\"#7C3AED\" stroke-width=\"2\"/>\n      <polygon points=\"30,60 150,60 150,120 30,120\" fill=\"#EDE9FE\" stroke=\"#7C3AED\" stroke-width=\"2.5\"/>\n      <text x=\"90\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"middle\">Panjang = 8 cm</text>\n      <text x=\"15\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"end\">Tinggi = 4 cm</text>\n      <text x=\"185\" y=\"50\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"start\">Lebar = 3 cm</text>\n    </svg>",
      "caption": "Isi padu = Panjang × Lebar × Tinggi = 8 × 3 × 4."
    }
  },
  {
    "id": "t4-mat-topik2-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pecahan daripada Kuantiti",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Puan Aminah memotong sebiji piza kepada 8 bahagian yang sama besar. Anaknya memakan 3 bahagian dan suaminya memakan 2 bahagian. Berapakah pecahan piza yang masih belum dimakan?",
    "options": {
      "A": "3/8",
      "B": "5/8",
      "C": "1/4",
      "D": "1/2"
    },
    "correctAnswer": "A",
    "explanation": "Bagus! Jumlah bahagian dimakan = 3 + 2 = 5 bahagian. Piza asalnya 8 bahagian (8/8). Baki piza = 8/8 - 5/8 = 3/8.",
    "learningStandard": "SK 2.1 / SP 2.1.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik2-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penukaran Pecahan kepada Peratusan",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Dalam satu kuiz Matematik yang mengandungi 25 soalan, Hakimi berjaya menjawab 21 soalan dengan tepat. Berapakah peratusan markah yang diperoleh Hakimi?",
    "options": {
      "A": "80%",
      "B": "84%",
      "C": "88%",
      "D": "92%"
    },
    "correctAnswer": "B",
    "explanation": "Syabas! Peratusan = (21 ÷ 25) × 100% = 21 × 4% = 84%.",
    "learningStandard": "SK 2.3 / SP 2.3.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik2-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penolakan Nombor Perpuluhan",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Seutas tali sepanjang 5 m dipotong sebanyak 2.35 m untuk mengikat bungkusan kotak. Berapakah panjang baki tali yang belum digunakan dalam meter?",
    "options": {
      "A": "2.65 m",
      "B": "2.75 m",
      "C": "3.65 m",
      "D": "3.35 m"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! 5.00 m - 2.35 m = 2.65 m.",
    "learningStandard": "SK 2.2 / SP 2.2.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik2-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Operasi Tambah dan Tolak Pecahan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Ibu menggunakan 2 1/2 kg tepung untuk membuat biskut dan 1 3/4 kg tepung untuk membuat kek span. Berapakah jumlah jisim tepung yang digunakan oleh ibu?",
    "options": {
      "A": "3 3/4 kg",
      "B": "4 1/4 kg",
      "C": "4 1/2 kg",
      "D": "3 1/4 kg"
    },
    "correctAnswer": "B",
    "explanation": "Hebat! Samakan penyebut: 2 1/2 = 2 2/4. Jumlahkan: 2 2/4 + 1 3/4 = 3 5/4 = 4 1/4 kg.",
    "learningStandard": "SK 2.1 / SP 2.1.3 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik2-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pengiraan Nilai Diskaun Peratusan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah kedai pakaian memberi diskaun sebanyak 25% bagi sehelai kemeja yang berharga asal RM80. Berapakah harga kemeja tersebut selepas diskaun?",
    "options": {
      "A": "RM20",
      "B": "RM55",
      "C": "RM60",
      "D": "RM65"
    },
    "correctAnswer": "C",
    "explanation": "Bagus! Nilai potongan diskaun = 25% × RM80 = (25/100) × 80 = RM20. Harga baharu = RM80 - RM20 = RM60.",
    "learningStandard": "SK 2.3 / SP 2.3.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "mat-t4-vis-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pengurusan Data",
    "difficulty": "Sederhana",
    "question": "Rujuk jadual kutipan tin kitar semula di atas. Berapakah perbezaan bilangan tin yang dikutip antara Tahun 4 Amanah dan Tahun 4 Bestari?",
    "options": {
      "A": "50 tin",
      "B": "60 tin",
      "C": "70 tin",
      "D": "40 tin"
    },
    "correctAnswer": "B",
    "explanation": "Perbezaan = 210 tin (4 Amanah) - 150 tin (4 Bestari) = 60 tin.",
    "learningStandard": "SP 8.2.1 Menyelesaikan masalah melibatkan data berjadual.",
    "diagram": {
      "title": "Jadual Kutipan Tin Kitar Semula",
      "type": "table_data",
      "data": {
        "headers": [
          "Kelas",
          "Bilangan Tin (Biji)"
        ],
        "rows": [
          [
            "4 Amanah",
            "210"
          ],
          [
            "4 Bestari",
            "150"
          ],
          [
            "4 Cemerlang",
            "180"
          ]
        ]
      },
      "caption": "Tolak bilangan tin 4 Bestari daripada 4 Amanah untuk mencari beza."
    }
  },
  {
    "id": "t4-mat-topik2-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penyelesaian Masalah Peratusan dan Pecahan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah bakul mengandungi 120 biji buah-buahan. Sebanyak 40% daripadanya ialah buah epal, 1/4 daripadanya ialah buah oren, dan bakinya ialah buah mangga. Berapakah bilangan buah mangga di dalam bakul itu?",
    "options": {
      "A": "42 biji",
      "B": "48 biji",
      "C": "30 biji",
      "D": "36 biji"
    },
    "correctAnswer": "A",
    "explanation": "Tahniah! Bilangan epal = 40% × 120 = 48 biji. Bilangan oren = 1/4 × 120 = 30 biji. Jumlah epal dan oren = 48 + 30 = 78 biji. Baki buah mangga = 120 - 78 = 42 biji.",
    "learningStandard": "SK 2.4 / SP 2.4.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik2-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penyelesaian Persamaan Perpuluhan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Diberi: 14.65 + 8.2 + P = 30.00. Apakah nilai bagi P?",
    "options": {
      "A": "7.15",
      "B": "7.25",
      "C": "6.85",
      "D": "8.15"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! 14.65 + 8.20 = 22.85. Maka nilai P = 30.00 - 22.85 = 7.15.",
    "learningStandard": "SK 2.2 / SP 2.2.3 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik2-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penyelesaian Masalah Pecahan Berperingkat",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Farid mempunyai RM150. Dia membelanjakan 2/5 daripada wang itu untuk membeli beg sekolah. Kemudian dia membelanjakan 1/3 daripada baki wangnya untuk membeli buku latihan. Berapakah baki wang yang masih ada pada Farid?",
    "options": {
      "A": "RM50",
      "B": "RM60",
      "C": "RM70",
      "D": "RM80"
    },
    "correctAnswer": "B",
    "explanation": "Luar biasa! Belanja beg sekolah = 2/5 × RM150 = RM60. Baki wang selepas beli beg = RM150 - RM60 = RM90. Belanja buku latihan = 1/3 × RM90 = RM30. Baki wang akhir = RM90 - RM30 = RM60.",
    "learningStandard": "SK 2.4 / SP 2.4.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik2-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Operasi Bahagi Perpuluhan Kontekstual",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah jug mengandungi 2.5 liter susu segar. Sebanyak 0.85 liter susu digunakan untuk membuat puding karamel. Baki susu itu dituangkan sama banyak ke dalam 5 buah cawan. Berapakah isi padu susu, dalam liter, di dalam setiap cawan?",
    "options": {
      "A": "0.33 liter",
      "B": "0.35 liter",
      "C": "0.42 liter",
      "D": "0.51 liter"
    },
    "correctAnswer": "A",
    "explanation": "Cemerlang! Baki susu selepas buat puding = 2.50 liter - 0.85 liter = 1.65 liter. Dituang sama banyak ke dalam 5 cawan: 1.65 ÷ 5 = 0.33 liter setiap cawan.",
    "learningStandard": "SK 2.2 / SP 2.2.4 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik2-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Analisis Peratusan Murid Hadir",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Kelas 4 Bestari mempunyai 40 orang murid. 60% daripadanya ialah murid perempuan. Pada satu hari hujan lebat, 1/4 daripada murid perempuan dan 4 orang murid lelaki tidak hadir ke sekolah. Berapakah peratusan murid yang hadir pada hari tersebut?",
    "options": {
      "A": "70%",
      "B": "72.5%",
      "C": "75%",
      "D": "77.5%"
    },
    "correctAnswer": "C",
    "explanation": "Pintar sekali! Jumlah murid perempuan = 60% × 40 = 24 orang. Murid lelaki = 40 - 24 = 16 orang. Murid perempuan tidak hadir = 1/4 × 24 = 6 orang. Murid lelaki tidak hadir = 4 orang. Jumlah tidak hadir = 6 + 4 = 10 orang. Murid hadir = 40 - 10 = 30 orang. Peratusan hadir = (30/40) × 100% = 75%.",
    "learningStandard": "SK 2.4 / SP 2.4.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik3-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Instrumen Pembayaran",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Encik Danial ingin membeli barangan elektrik secara dalam talian tanpa perlu berhutang dan memotong terus daripada baki akaun simpanan banknya. Apakah instrumen pembayaran yang paling sesuai?",
    "options": {
      "A": "Kad Kredit",
      "B": "Kad Debit",
      "C": "Wang Pos",
      "D": "Cek Tertunda"
    },
    "correctAnswer": "B",
    "explanation": "Tepat! Kad Debit memotong wang terus daripada baki simpanan pemilik akaun secara serta-merta tanpa mengenakan hutang atau caj faedah pinjaman.",
    "learningStandard": "SK 3.1 / SP 3.1.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik3-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Tolak Nilai Wang Harian",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Aisyah mempunyai wang saku berjumlah RM250. Dia membeli sebuah beg galas berharga RM89.90 dan sepasang kasut sukan berharga RM115.50. Berapakah baki wang Aisyah?",
    "options": {
      "A": "RM44.60",
      "B": "RM45.40",
      "C": "RM54.60",
      "D": "RM34.60"
    },
    "correctAnswer": "A",
    "explanation": "Syabas! Jumlah perbelanjaan Aisyah = RM89.90 + RM115.50 = RM205.40. Baki wang = RM250.00 - RM205.40 = RM44.60.",
    "learningStandard": "SK 3.1 / SP 3.1.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik3-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Keperluan vs Kehendak",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Antara perbelanjaan berikut, yang manakah dikategorikan sebagai \"Keperluan Asas\" bagi kehidupan seorang murid sekolah?",
    "options": {
      "A": "Membeli kasut roda berjenama mewah",
      "B": "Membeli pakaian seragam sekolah yang bersih dan lengkap",
      "C": "Membeli peranti permainan video terkini",
      "D": "Membeli fon telinga tanpa wayar edisi terhad"
    },
    "correctAnswer": "B",
    "explanation": "Bijak! Pakaian seragam sekolah merupakan keperluan asas bagi menuntut ilmu, manakala kasut roda dan permainan video ialah kehendak.",
    "learningStandard": "SK 3.3 / SP 3.3.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik3-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Faedah Mudah Simpanan Bank",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Encik Roslan menyimpan RM15,000 dalam akaun simpanan tetap di sebuah bank tempatan. Bank tersebut menawarkan kadar faedah mudah sebanyak 3% setahun. Berapakah jumlah keseluruhan wang simpanan Encik Roslan selepas 1 tahun?",
    "options": {
      "A": "RM15,300",
      "B": "RM15,450",
      "C": "RM15,600",
      "D": "RM16,000"
    },
    "correctAnswer": "B",
    "explanation": "Hebat! Faedah setahun = 3% × RM15,000 = (3/100) × 15,000 = RM450. Jumlah keseluruhan wang = RM15,000 + RM450 = RM15,450.",
    "learningStandard": "SK 3.2 / SP 3.2.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik3-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Pembahagian Derma dan Pecahan Wang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah syarikat korporat memperuntukkan RM72,000 untuk didermakan sama rata kepada 6 buah pusat kebajikan warga emas. Pusat Kebajikan Nur Kasih menggunakan 3/4 daripada wang derma yang diterimanya untuk membeli katil perubatan khas. Berapakah wang yang dibelanjakan untuk katil perubatan itu?",
    "options": {
      "A": "RM8,000",
      "B": "RM9,000",
      "C": "RM10,500",
      "D": "RM12,000"
    },
    "correctAnswer": "B",
    "explanation": "Tahniah! Setiap pusat kebajikan menerima = RM72,000 ÷ 6 = RM12,000. Wang untuk katil khas = 3/4 × RM12,000 = RM9,000.",
    "learningStandard": "SK 3.1 / SP 3.1.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik3-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Untung Bersih Jualan Karnival",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Kelab Kitar Semula sekolah mengeluarkan modal RM450 untuk menjual air jus mangga di Hari Kantin. Mereka berjaya mengutip hasil jualan sebanyak RM1,120. Walau bagaimanapun, mereka terpaksa membayar kos tambahan RM85 untuk cawan terbiodegradasi. Berapakah untung bersih yang diperoleh kelab tersebut?",
    "options": {
      "A": "RM585",
      "B": "RM670",
      "C": "RM495",
      "D": "RM615"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! Jumlah kos perbelanjaan = RM450 + RM85 = RM535. Untung bersih = Hasil Jualan - Jumlah Kos = RM1,120 - RM535 = RM585.",
    "learningStandard": "SK 3.3 / SP 3.3.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik3-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Bayaran Ansuran Barangan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Puan Haliza membeli sebuah motosikal elektrik dengan bayaran wang pendahuluan sebanyak RM1,200. Baki harga dibayar secara ansuran bulanan sebanyak RM280 sebulan selama 36 bulan. Berapakah jumlah wang keseluruhan yang dibayar oleh Puan Haliza?",
    "options": {
      "A": "RM10,080",
      "B": "RM11,280",
      "C": "RM11,480",
      "D": "RM12,280"
    },
    "correctAnswer": "B",
    "explanation": "Bagus! Jumlah bayaran ansuran = 36 bulan × RM280 = RM10,080. Jumlah keseluruhan = Wang Pendahuluan + Ansuran = RM1,200 + RM10,080 = RM11,280.",
    "learningStandard": "SK 3.1 / SP 3.1.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik3-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Pelan Simpanan Formula Kewangan",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Encik Johari memperoleh gaji bersih sebanyak RM6,500 sebulan. Dia mengamalkan formula pengurusan kewangan 50:30:20, iaitu memperuntukkan 20% daripada gaji bulanannya untuk tabung simpanan kecemasan. Berapakah jumlah simpanan yang berjaya dikumpulkannya jika dia berdisiplin selama 1 tahun (12 bulan)?",
    "options": {
      "A": "RM14,400",
      "B": "RM15,600",
      "C": "RM16,800",
      "D": "RM13,200"
    },
    "correctAnswer": "B",
    "explanation": "Luar biasa! Simpanan sebulan = 20% × RM6,500 = (20/100) × 6,500 = RM1,300. Jumlah simpanan dalam 12 bulan = 12 × RM1,300 = RM15,600.",
    "learningStandard": "SK 3.3 / SP 3.3.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik3-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Penilaian Tawaran Harga Diskaun vs Rebat",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah televisyen pintar berharga RM3,600. Kedai Alpha menawarkan diskaun tunai 15%. Kedai Beta menawarkan rebat tunai RM400 berserta baucar hadiah percuma RM150 (baucar tidak boleh ditolak daripada harga). Kedai manakah yang memerlukan bayaran wang tunai paling rendah dan berapakah harga bayaran itu?",
    "options": {
      "A": "Kedai Alpha, dengan bayaran RM3,060",
      "B": "Kedai Beta, dengan bayaran RM3,050",
      "C": "Kedai Alpha, dengan bayaran RM3,150",
      "D": "Kedai Beta, dengan bayaran RM3,200"
    },
    "correctAnswer": "A",
    "explanation": "Pintar! Kedai Alpha: Diskaun 15% = 0.15 × RM3,600 = RM540. Harga perlu dibayar = RM3,600 - RM540 = RM3,060. Kedai Beta: Bayaran tunai = RM3,600 - RM400 = RM3,200 (baucar tidak mengurangkan bayaran tunai). Maka Kedai Alpha menawarkan bayaran tunai paling rendah iaitu RM3,060.",
    "learningStandard": "SK 3.3 / SP 3.3.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik3-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Penyelesaian Masalah Songsang Harga Asal",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sempena jualan ulang tahun gedung beli-belah, sebuah ketuhar elektrik dijual pada harga RM720 selepas potongan diskaun sebanyak 20%. Berapakah harga asal ketuhar elektrik itu sebelum diskaun?",
    "options": {
      "A": "RM850",
      "B": "RM864",
      "C": "RM900",
      "D": "RM960"
    },
    "correctAnswer": "C",
    "explanation": "Hebat sekali! Selepas diskaun 20%, harga RM720 mewakili 80% daripada harga asal (100% - 20% = 80%). Maka 80% = RM720. 1% = 720 ÷ 80 = RM9. Harga asal (100%) = 100 × RM9 = RM900.",
    "learningStandard": "SK 3.3 / SP 3.3.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik4-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Penukaran Sistem 12 Jam dan 24 Jam",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah majlis bacaan doa selamat di rumah datuk dijadualkan bermula pada pukul 9:25 malam. Nyatakan waktu tersebut dalam sistem 24 jam.",
    "options": {
      "A": "Jam 0925",
      "B": "Jam 1925",
      "C": "Jam 2125",
      "D": "Jam 2225"
    },
    "correctAnswer": "C",
    "explanation": "Tepat! Untuk waktu malam (p.m.), tambah 12 kepada angka jam: 9 + 12 = 21. Maka pukul 9:25 malam bersamaan dengan Jam 2125.",
    "learningStandard": "SK 4.1 / SP 4.1.2 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik4-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Tempoh Masa Perjalanan Bas",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah bas ekspres bertolak dari Terminal Bersepadu Selatan (TBS) pada Jam 0830 dan selamat tiba di Ipoh pada Jam 1145. Berapakah tempoh masa perjalanan bas tersebut?",
    "options": {
      "A": "2 jam 45 minit",
      "B": "3 jam 15 minit",
      "C": "3 jam 45 minit",
      "D": "4 jam 15 minit"
    },
    "correctAnswer": "B",
    "explanation": "Syabas! Tolak waktu bertolak daripada waktu tiba: Dari Jam 0830 ke Jam 1130 ialah 3 jam. Tambah lagi 15 minit ke Jam 1145. Maka tempoh perjalanan ialah 3 jam 15 minit.",
    "learningStandard": "SK 4.2 / SP 4.2.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik4-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Perkaitan Abad dan Tahun",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Kota A Famosa di Melaka telah dibina oleh penjajah Portugis kira-kira 5 abad yang lalu. Berapakah tempoh masa tersebut dalam unit tahun?",
    "options": {
      "A": "50 tahun",
      "B": "500 tahun",
      "C": "5,000 tahun",
      "D": "50,000 tahun"
    },
    "correctAnswer": "B",
    "explanation": "Bagus! 1 abad bersamaan dengan 100 tahun. Maka 5 abad = 5 × 100 = 500 tahun.",
    "learningStandard": "SK 4.4 / SP 4.4.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik4-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Menentukan Waktu Selesai Aktiviti",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Jamuan Hari Raya di sekolah bermula pada Jam 1045 dan berlangsung selama 3 jam 30 minit. Pada pukul berapakah jamuan itu tamat dalam sistem 12 jam?",
    "options": {
      "A": "Pukul 1:45 petang",
      "B": "Pukul 2:15 petang",
      "C": "Pukul 2:30 petang",
      "D": "Pukul 3:15 petang"
    },
    "correctAnswer": "B",
    "explanation": "Tahniah! 10 jam 45 minit + 3 jam 30 minit = 13 jam 75 minit = 14 jam 15 minit (Jam 1415). Tukar kepada sistem 12 jam: 14 - 12 = 2. Waktu tamat ialah Pukul 2:15 petang.",
    "learningStandard": "SK 4.3 / SP 4.3.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik4-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Penukaran Tempoh Abad dan Dekad",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Bangunan Sultan Abdul Samad di Kuala Lumpur siap dibina pada tahun 1897. Berapakah usia bangunan bersejarah itu pada tahun 2027 dalam unit abad dan tahun?",
    "options": {
      "A": "1 abad 30 tahun",
      "B": "1 abad 40 tahun",
      "C": "2 abad 10 tahun",
      "D": "1 abad 20 tahun"
    },
    "correctAnswer": "A",
    "explanation": "Bijak! 2027 - 1897 = 130 tahun. Kerana 100 tahun = 1 abad, maka 130 tahun = 1 abad 30 tahun.",
    "learningStandard": "SK 4.4 / SP 4.4.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik4-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Hasil Tambah Tempoh Masa Berbilang Aktiviti",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hazim menghadiri tiga sesi bimbingan dalam talian: Sains (1 jam 15 minit), Matematik (1 jam 45 minit), dan Bahasa Inggeris (1 jam 10 minit). Berapakah jumlah masa yang diluangkan oleh Hazim?",
    "options": {
      "A": "3 jam 50 minit",
      "B": "4 jam 10 minit",
      "C": "4 jam 20 minit",
      "D": "4 jam 30 minit"
    },
    "correctAnswer": "B",
    "explanation": "Hebat! Jam: 1 + 1 + 1 = 3 jam. Minit: 15 + 45 + 10 = 70 minit. Tukar 70 minit = 1 jam 10 minit. Jumlah masa = 3 jam + 1 jam 10 minit = 4 jam 10 minit.",
    "learningStandard": "SK 4.3 / SP 4.3.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik4-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Operasi Tambah Dekad dan Tahun",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung hasil tambah: 4 dekad 7 tahun + 2 dekad 8 tahun. Nyatakan jawapan dalam dekad dan tahun.",
    "options": {
      "A": "6 dekad 15 tahun",
      "B": "7 dekad 5 tahun",
      "C": "7 dekad 3 tahun",
      "D": "8 dekad 2 tahun"
    },
    "correctAnswer": "B",
    "explanation": "Tepat! 4 dekad + 2 dekad = 6 dekad. 7 tahun + 8 tahun = 15 tahun. Kerana 10 tahun = 1 dekad, maka 15 tahun = 1 dekad 5 tahun. Jumlah = 6 + 1 = 7 dekad 5 tahun.",
    "learningStandard": "SK 4.4 / SP 4.4.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik4-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Penyelesaian Masalah Pelayaran Merentasi Hari",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah kapal kargo bertolak dari Pelabuhan Klang pada hari Selasa Jam 2200 menuju ke Kota Kinabalu. Pelayaran itu mengambil masa selama 58 jam. Pada hari dan jam berapakah kapal itu dijangka selamat tiba di destinasinya?",
    "options": {
      "A": "Khamis Jam 0800",
      "B": "Jumaat Jam 0800",
      "C": "Jumaat Jam 1200",
      "D": "Sabtu Jam 0600"
    },
    "correctAnswer": "B",
    "explanation": "Luar biasa! 58 jam = 48 jam (2 hari lengkap) + 10 jam. Selasa Jam 2200 + 48 jam = Khamis Jam 2200. Khamis Jam 2200 + 10 jam = Jumaat Jam 0800 (pukul 8:00 pagi).",
    "learningStandard": "SK 4.3 / SP 4.3.3 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik4-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Pengurusan Jadual Ulang Kaji Mingguan",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Farah menetapkan jadual mengulang kaji pelajaran selama 2 jam 30 minit setiap hari dari hari Isnin hingga Jumaat (5 hari), dan 3 jam 45 minit setiap hari pada hari Sabtu dan Ahad (2 hari). Berapakah jumlah masa mengulang kaji Farah dalam tempoh seminggu?",
    "options": {
      "A": "18 jam 30 minit",
      "B": "19 jam 15 minit",
      "C": "20 jam",
      "D": "21 jam 30 minit"
    },
    "correctAnswer": "C",
    "explanation": "Cemerlang! Isnin - Jumaat: 5 × 2 jam 30 minit = 10 jam + 150 minit = 12 jam 30 minit. Sabtu & Ahad: 2 × 3 jam 45 minit = 6 jam + 90 minit = 7 jam 30 minit. Jumlah keseluruhan = 12 jam 30 minit + 7 jam 30 minit = 19 jam + 60 minit = 20 jam genap.",
    "learningStandard": "SK 4.3 / SP 4.3.3 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik4-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Beza Usia Binaan Warisan Sejarah",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Usia Menara Condong Teluk Intan ialah 1 abad 4 dekad manakala usia sebuah jambatan gantung bersejarah ialah 8 dekad 5 tahun. Berapakah beza usia antara kedua-dua binaan bersejarah tersebut dalam dekad dan tahun?",
    "options": {
      "A": "4 dekad 5 tahun",
      "B": "5 dekad 5 tahun",
      "C": "6 dekad 5 tahun",
      "D": "5 dekad 8 tahun"
    },
    "correctAnswer": "B",
    "explanation": "Pintar! Tukar kepada tahun: Menara Condong = 100 + 40 = 140 tahun. Jambatan gantung = 80 + 5 = 85 tahun. Beza usia = 140 - 85 = 55 tahun. Tukar 55 tahun = 5 dekad 5 tahun.",
    "learningStandard": "SK 4.4 / SP 4.4.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik5-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Penukaran Unit Meter dan Sentimeter",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Seutas kain rentang Hari Kebangsaan berukuran 3 m 45 cm panjang. Nyatakan panjang kain rentang itu dalam sentimeter (cm) sahaja.",
    "options": {
      "A": "345 cm",
      "B": "3,045 cm",
      "C": "3,450 cm",
      "D": "34.5 cm"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! 1 m = 100 cm. Maka 3 m = 300 cm. 300 cm + 45 cm = 345 cm.",
    "learningStandard": "SK 5.1 / SP 5.1.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik5-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Hasil Tambah Jisim Barangan Dapur",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Ibu membeli 2 kg tepung gandum, 1.5 kg gula perang, dan 500 g serbuk koko untuk membuat kuih. Berapakah jumlah jisim barangan tersebut dalam unit kilogram (kg)?",
    "options": {
      "A": "3.5 kg",
      "B": "4 kg",
      "C": "4.5 kg",
      "D": "5 kg"
    },
    "correctAnswer": "B",
    "explanation": "Bagus! 500 g = 0.5 kg. Jumlah jisim = 2 kg + 1.5 kg + 0.5 kg = 4 kg.",
    "learningStandard": "SK 5.2 / SP 5.2.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik5-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Baki Cecair dalam Jug",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah teko mengandungi 1 liter 800 ml teh panas. Ayah menuang 350 ml ke dalam cawannya. Berapakah baki teh panas di dalam teko?",
    "options": {
      "A": "1 liter 450 ml",
      "B": "1 liter 550 ml",
      "C": "1 liter 350 ml",
      "D": "1 liter 250 ml"
    },
    "correctAnswer": "A",
    "explanation": "Syabas! 1,800 ml - 350 ml = 1,450 ml = 1 liter 450 ml.",
    "learningStandard": "SK 5.3 / SP 5.3.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik5-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Penolakan Jisim Muatan Lori",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah lori membawa muatan 3,200 kg beras. Pemandu lori menghantar 1,450 kg ke Kedai Runcit A dan 980 kg ke Kedai Runcit B. Berapakah baki jisim beras yang masih tinggal di dalam lori?",
    "options": {
      "A": "670 kg",
      "B": "770 kg",
      "C": "870 kg",
      "D": "970 kg"
    },
    "correctAnswer": "B",
    "explanation": "Hebat! Jumlah beras dihantar = 1,450 kg + 980 kg = 2,430 kg. Baki beras = 3,200 kg - 2,430 kg = 770 kg.",
    "learningStandard": "SK 5.2 / SP 5.2.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik5-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Perimeter Pagar Kebun Tolak Pintu",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Pak Samad ingin memagar kebun sayurnya yang berbentuk segi empat tepat berukuran 24 m panjang dan 15 m lebar. Dia meninggalkan ruang selebar 3 m untuk laluan pintu pagar tanpa dawai. Berapakah panjang dawai pagar yang digunakannya?",
    "options": {
      "A": "72 m",
      "B": "75 m",
      "C": "78 m",
      "D": "81 m"
    },
    "correctAnswer": "B",
    "explanation": "Tahniah! Perimeter keseluruhan kebun = 2 × (24 m + 15 m) = 2 × 39 m = 78 m. Tolak ruang pintu: 78 m - 3 m = 75 m.",
    "learningStandard": "SK 5.1 / SP 5.1.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik5-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Kadar Penggunaan Bahan Api Kereta",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah kereta sedan memerlukan 7 liter petrol untuk bergerak sejauh 105 km. Berapakah jarak, dalam km, yang boleh dilalui oleh kereta tersebut jika diisi dengan 25 liter petrol?",
    "options": {
      "A": "325 km",
      "B": "350 km",
      "C": "375 km",
      "D": "400 km"
    },
    "correctAnswer": "C",
    "explanation": "Bijak! Jarak bagi 1 liter petrol = 105 km ÷ 7 = 15 km/liter. Bagi 25 liter petrol = 25 × 15 km = 375 km.",
    "learningStandard": "SK 5.3 / SP 5.3.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik5-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Pembahagian Cecair ke dalam Botol Kecil",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Puan Halimah menyediakan 6 liter air sirap selasih untuk majlis tahlil. Dia menuang air itu ke dalam cawan-cawan yang berkapasiti 250 ml sehingga penuh. Berapakah bilangan cawan yang berjaya diisi?",
    "options": {
      "A": "20 biji",
      "B": "24 biji",
      "C": "25 biji",
      "D": "30 biji"
    },
    "correctAnswer": "B",
    "explanation": "Tepat! 6 liter = 6,000 ml. Bilangan cawan = 6,000 ml ÷ 250 ml = 24 biji cawan.",
    "learningStandard": "SK 5.3 / SP 5.3.2 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik5-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Kadar Jisim Bahan Resipi Katering",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Resipi membuat sebiji kek lapis Sarawak memerlukan 350 g tepung gandum dan 250 g mentega tulen. Seorang pembuat kek menerima tempahan sebanyak 15 biji kek yang sama. Berapakah jumlah jisim tepung gandum yang diperlukannya dalam kilogram (kg)?",
    "options": {
      "A": "4.75 kg",
      "B": "5.25 kg",
      "C": "5.50 kg",
      "D": "6.00 kg"
    },
    "correctAnswer": "B",
    "explanation": "Luar biasa! Tepung untuk 15 biji kek = 15 × 350 g = 5,250 g. Tukar kepada kilogram: 5,250 ÷ 1,000 = 5.25 kg.",
    "learningStandard": "SK 5.2 / SP 5.2.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik5-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Kadar Bertingkat Tambang Kurier Mengikut Jisim",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah syarikat kurier mengenakan caj RM6.00 bagi 500 g pertama. Setiap tambahan 250 g atau sebahagian daripadanya dikenakan caj RM1.50. Ammar menghantar sebuah bungkusan seberat 1.5 kg. Berapakah jumlah caj penghantaran yang perlu dibayar?",
    "options": {
      "A": "RM10.50",
      "B": "RM12.00",
      "C": "RM13.50",
      "D": "RM15.00"
    },
    "correctAnswer": "B",
    "explanation": "Cemerlang! 1.5 kg = 1,500 g. 500 g pertama = RM6.00. Baki berat = 1,500 g - 500 g = 1,000 g. Bilangan unit 250 g tambahan = 1,000 ÷ 250 = 4 unit. Caj tambahan = 4 × RM1.50 = RM6.00. Jumlah keseluruhan = RM6.00 + RM6.00 = RM12.00.",
    "learningStandard": "SK 5.2 / SP 5.2.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik5-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Kenaikan Aras Cecair dan Isi Padu Objek",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah tangki kaca berbentuk kuboid berukuran 50 cm panjang dan 30 cm lebar mengandungi air separuh penuh. Danial memasukkan beberapa ketul batu hiasan ke dalam tangki itu menyebabkan aras air meningkat sebanyak 6 cm. Berapakah isi padu batu hiasan tersebut dalam unit liter?",
    "options": {
      "A": "6 liter",
      "B": "7.5 liter",
      "C": "9 liter",
      "D": "12 liter"
    },
    "correctAnswer": "C",
    "explanation": "Pintar sekali! Isi padu batu = Isi padu peningkatan air = Panjang × Lebar × Kenaikan tinggi = 50 cm × 30 cm × 6 cm = 9,000 cm³. Kerana 1,000 cm³ = 1 liter, maka 9,000 cm³ = 9 liter.",
    "learningStandard": "SK 5.3 / SP 5.3.2 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik6-01",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Koordinat Asalan Satah Cartes",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Pada satah Cartes, titik persilangan antara paksi mengufuk (paksi-x) dan paksi mencancang (paksi-y) dinamakan asalan. Apakah koordinat bagi asalan?",
    "options": {
      "A": "(0, 0)",
      "B": "(1, 0)",
      "C": "(0, 1)",
      "D": "(1, 1)"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! Titik asalan ialah titik rujukan sifar bagi kedua-dua paksi pada satah Cartes, ditulis sebagai (0, 0).",
    "learningStandard": "SK 7.1 / SP 7.1.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik6-02",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Nisbah Kuantiti Mudah",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Di dalam sebuah bekas alat tulis terdapat 4 batang pen biru dan 9 batang pen hitam. Nyatakan nisbah bilangan pen biru kepada bilangan pen hitam.",
    "options": {
      "A": "9 : 4",
      "B": "4 : 9",
      "C": "4 : 13",
      "D": "9 : 13"
    },
    "correctAnswer": "B",
    "explanation": "Syabas! Nisbah pen biru (4) kepada pen hitam (9) ditulis mengikut turutan iaitu 4 : 9.",
    "learningStandard": "SK 7.2 / SP 7.2.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik6-03",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Jarak Mengufuk dari Paksi-y",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Titik K terletak pada koordinat (3, 7). Berapakah jarak mengufuk titik K dari paksi mencancang (paksi-y)?",
    "options": {
      "A": "3 unit",
      "B": "7 unit",
      "C": "4 unit",
      "D": "10 unit"
    },
    "correctAnswer": "A",
    "explanation": "Bagus! Nilai koordinat pertama (nilai-x) ialah 3, yang mewakili jarak mengufuk dari paksi-y sejauh 3 unit.",
    "learningStandard": "SK 7.1 / SP 7.1.1 (KBAT Aras Rendah)"
  },
  {
    "id": "t4-mat-topik6-04",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Mencari Kuantiti Berdasarkan Nisbah",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Nisbah bilangan murid lelaki kepada bilangan murid perempuan dalam Pasukan Catur ialah 3 : 5. Jika bilangan murid lelaki ialah 12 orang, berapakah bilangan murid perempuan dalam pasukan itu?",
    "options": {
      "A": "15 orang",
      "B": "20 orang",
      "C": "25 orang",
      "D": "30 orang"
    },
    "correctAnswer": "B",
    "explanation": "Hebat! 3 bahagian = 12 orang, jadi 1 bahagian = 12 ÷ 3 = 4 orang. Murid perempuan mempunyai 5 bahagian = 5 × 4 = 20 orang.",
    "learningStandard": "SK 7.2 / SP 7.2.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik6-05",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Menentukan Bucu Keempat Segi Empat Tepat",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Tiga bucu bagi sebuah segi empat tepat pada satah Cartes masing-masing terletak pada koordinat A(2, 1), B(8, 1), dan C(8, 5). Apakah koordinat bagi bucu keempat, iaitu titik D?",
    "options": {
      "A": "(2, 5)",
      "B": "(5, 2)",
      "C": "(1, 5)",
      "D": "(2, 8)"
    },
    "correctAnswer": "A",
    "explanation": "Tahniah! Titik D mesti mempunyai nilai-x yang sama dengan A (iaitu 2) dan nilai-y yang sama dengan C (iaitu 5). Maka koordinat bucu D ialah (2, 5).",
    "learningStandard": "SK 7.1 / SP 7.1.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik6-06",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Kadaran Harga Barangan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Harga bagi 5 buah buku nota berjenama ialah RM17.50. Berapakah harga yang perlu dibayar bagi 12 buah buku nota yang sama?",
    "options": {
      "A": "RM35.00",
      "B": "RM38.50",
      "C": "RM42.00",
      "D": "RM45.50"
    },
    "correctAnswer": "C",
    "explanation": "Bijak! Harga seunit buku nota = RM17.50 ÷ 5 = RM3.50. Harga bagi 12 buah buku nota = 12 × RM3.50 = RM42.00.",
    "learningStandard": "SK 7.3 / SP 7.3.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik6-07",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Pergerakan Grid Robot Berarah",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah robot bermula dari stesen P pada koordinat (1, 2). Robot itu bergerak 6 unit mengufuk ke kanan (ke timur) dan kemudian 4 unit mencancang ke atas (ke utara) sehingga berhenti di stesen Q. Apakah koordinat bagi stesen Q?",
    "options": {
      "A": "(7, 6)",
      "B": "(6, 7)",
      "C": "(5, 6)",
      "D": "(7, 8)"
    },
    "correctAnswer": "A",
    "explanation": "Tepat! Nilai-x baharu = 1 + 6 = 7. Nilai-y baharu = 2 + 4 = 6. Maka koordinat stesen Q ialah (7, 6).",
    "learningStandard": "SK 7.1 / SP 7.1.1 (KBAT Aras Sederhana)"
  },
  {
    "id": "t4-mat-topik6-08",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Nisbah Campuran Bahan Maksimum",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Nisbah bancuhan simen kepada pasir untuk membina dinding konkrit yang kukuh ialah 1 : 4. Seorang kontraktor mempunyai stok 35 kg simen dan 120 kg pasir di tapak pembinaannya. Berapakah jisim maksimum konkrit (simen + pasir) yang boleh dibancuh mengikut nisbah tepat itu tanpa pembaziran pasir?",
    "options": {
      "A": "140 kg",
      "B": "150 kg",
      "C": "155 kg",
      "D": "175 kg"
    },
    "correctAnswer": "B",
    "explanation": "Luar biasa! 120 kg pasir memerlukan simen sebanyak 120 ÷ 4 = 30 kg simen (stok 35 kg simen mencukupi). Jumlah jisim bancuhan maksimum = 30 kg simen + 120 kg pasir = 150 kg.",
    "learningStandard": "SK 7.2 / SP 7.2.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik6-09",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Penentuan Koordinat Bot Penyelamat di Tengah",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Dua buah pos pengawal marin terletak pada kedudukan Pos X(2, 3) dan Pos Y(10, 3). Sebuah bot nelayan yang rosak terapung tepat di tengah-tengah antara Pos X dan Pos Y secara mengufuk, tetapi berjarak 5 unit mencancang ke utara. Apakah koordinat bot nelayan yang terapung itu?",
    "options": {
      "A": "(6, 8)",
      "B": "(5, 8)",
      "C": "(6, 5)",
      "D": "(8, 6)"
    },
    "correctAnswer": "A",
    "explanation": "Cemerlang! Titik tengah mengufuk antara x=2 dan x=10 ialah (2 + 10) ÷ 2 = 6. Bot nelayan berada 5 unit mencancang ke utara daripada garisan y=3, maka y = 3 + 5 = 8. Koordinat bot nelayan ialah (6, 8).",
    "learningStandard": "SK 7.1 / SP 7.1.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik6-10",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Kadaran Bertingkat Mesin Cetak Berkelajuan Tinggi",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Sebuah mesin fotokopi mencetak 180 halaman dalam masa 3 minit. Pihak sekolah perlu mencetak 1,500 set kertas soalan peperiksaan yang setiap satunya mengandungi 4 halaman. Berapakah tempoh masa yang diperlukan oleh mesin tersebut dalam jam dan minit?",
    "options": {
      "A": "1 jam 30 minit",
      "B": "1 jam 40 minit",
      "C": "1 jam 50 minit",
      "D": "2 jam 10 minit"
    },
    "correctAnswer": "B",
    "explanation": "Pintar sekali! Kadar cetakan mesin = 180 ÷ 3 = 60 halaman seminit. Jumlah keseluruhan halaman = 1,500 set × 4 halaman = 6,000 halaman. Tempoh masa = 6,000 ÷ 60 = 100 minit. Tukar 100 minit = 1 jam 40 minit.",
    "learningStandard": "SK 7.3 / SP 7.3.1 (KBAT Aras Tinggi)"
  },
  {
    "id": "t4-mat-topik1-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Pembundaran Nombor",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah kilang mencetak 68,472 naskhah majalah. Bundarkan nombor tersebut kepada puluh ribu yang terdekat.",
    "options": {
      "A": "70,000",
      "B": "68,000",
      "C": "60,000",
      "D": "69,000"
    },
    "correctAnswer": "A",
    "explanation": "Digit ribu ialah 8 (≥ 5), maka digit puluh ribu 6 ditambah 1 menjadi 70,000.",
    "learningStandard": "SK 1.4 Pembundaran"
  },
  {
    "id": "t4-mat-topik1-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Pola Nombor",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Kenal pasti nombor seterusnya dalam pola: 23,400, 23,450, 23,500, _______.",
    "options": {
      "A": "23,550",
      "B": "23,600",
      "C": "24,000",
      "D": "23,520"
    },
    "correctAnswer": "A",
    "explanation": "Pola nombor bertambah sebanyak 50 setiap langkah: 23,500 + 50 = 23,550.",
    "learningStandard": "SK 1.5 Pola Nombor"
  },
  {
    "id": "t4-mat-topik1-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Penyelesaian Masalah Tambah Tolak",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Pusat Edaran A mempunyai 52,000 buku teks. Sebanyak 18,450 naskhah dihantar ke Zon Utara dan 14,200 naskhah dihantar ke Zon Selatan. Berapakah baki buku di pusat tersebut?",
    "options": {
      "A": "19,350",
      "B": "20,350",
      "C": "18,350",
      "D": "21,350"
    },
    "correctAnswer": "A",
    "explanation": "52,000 - (18,450 + 14,200) = 52,000 - 32,650 = 19,350.",
    "learningStandard": "SK 1.6 Penyelesaian Masalah"
  },
  {
    "id": "t4-mat-topik1-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Pendaraban Nombor Besar",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah syarikat mengeksport 125 kotak biskut setiap hari. Setiap kotak mengandungi 48 bungkus biskut. Berapakah jumlah bungkus biskut dieksport setiap hari?",
    "options": {
      "A": "6,000",
      "B": "5,500",
      "C": "6,200",
      "D": "7,000"
    },
    "correctAnswer": "A",
    "explanation": "125 × 48 = 6,000 bungkus biskut.",
    "learningStandard": "SK 1.6 Operasi Darab"
  },
  {
    "id": "t4-mat-topik1-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Nombor hingga 100,000",
    "subtopic": "Pembahagian dan Baki",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebanyak 34,560 kilogram beras dibungkus sama banyak ke dalam 100 guni besar. Berapakah baki beras yang tinggal selepas pengagihan penuh?",
    "options": {
      "A": "60 kg",
      "B": "56 kg",
      "C": "0 kg",
      "D": "34 kg"
    },
    "correctAnswer": "A",
    "explanation": "34,560 ÷ 100 = 345 guni dengan baki 60 kg.",
    "learningStandard": "SK 1.6 Operasi Bahagi"
  },
  {
    "id": "t4-mat-topik2-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pecahan Tak Wajar kepada Nombor Bercampur",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Tukarkan pecahan tak wajar 17/5 kepada nombor bercampur.",
    "options": {
      "A": "3 2/5",
      "B": "3 1/5",
      "C": "2 3/5",
      "D": "3 4/5"
    },
    "correctAnswer": "A",
    "explanation": "17 ÷ 5 = 3 baki 2, maka 17/5 = 3 2/5.",
    "learningStandard": "SK 2.1 Pecahan"
  },
  {
    "id": "t4-mat-topik2-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penolakan Pecahan Berbeza Penyebut",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung nilai bagi 7/8 - 1/4.",
    "options": {
      "A": "5/8",
      "B": "6/8",
      "C": "3/8",
      "D": "1/2"
    },
    "correctAnswer": "A",
    "explanation": "Samakan penyebut: 1/4 = 2/8. Maka 7/8 - 2/8 = 5/8.",
    "learningStandard": "SK 2.1 Operasi Tolak Pecahan"
  },
  {
    "id": "t4-mat-topik2-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pendaraban Perpuluhan",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Hitung 4.25 × 6.",
    "options": {
      "A": "25.50",
      "B": "24.30",
      "C": "25.25",
      "D": "26.00"
    },
    "correctAnswer": "A",
    "explanation": "4.25 × 6 = 25.50.",
    "learningStandard": "SK 2.2 Perpuluhan"
  },
  {
    "id": "t4-mat-topik2-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penukaran Pecahan kepada Peratus",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Tukarkan 3/4 kepada bentuk peratusan.",
    "options": {
      "A": "75%",
      "B": "70%",
      "C": "80%",
      "D": "60%"
    },
    "correctAnswer": "A",
    "explanation": "3/4 × 100% = 75%.",
    "learningStandard": "SK 2.3 Peratus"
  },
  {
    "id": "t4-mat-topik2-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Penyelesaian Masalah Peratus",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Daripada 80 orang murid, 25% menyertai persatuan pengakap. Berapakah bilangan murid yang menyertai pengakap?",
    "options": {
      "A": "20 orang",
      "B": "25 orang",
      "C": "16 orang",
      "D": "30 orang"
    },
    "correctAnswer": "A",
    "explanation": "25/100 × 80 = 1/4 × 80 = 20 orang.",
    "learningStandard": "SK 2.3 Peratusan Kuantiti"
  },
  {
    "id": "t4-mat-topik3-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Operasi Bergabung Wang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung: RM45,600 + RM12,350 - RM8,900.",
    "options": {
      "A": "RM49,050",
      "B": "RM48,950",
      "C": "RM50,050",
      "D": "RM47,850"
    },
    "correctAnswer": "A",
    "explanation": "RM45,600 + RM12,350 = RM57,950. RM57,950 - RM8,900 = RM49,050.",
    "learningStandard": "SK 3.1 Operasi Bergabung Wang"
  },
  {
    "id": "t4-mat-topik3-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Pendaraban Nilai Wang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah kedai komputer menjual 15 unit komputer riba dengan harga RM2,400 seunit. Berapakah jumlah jualan keseluruhan?",
    "options": {
      "A": "RM36,000",
      "B": "RM34,000",
      "C": "RM38,000",
      "D": "RM35,500"
    },
    "correctAnswer": "A",
    "explanation": "15 × RM2,400 = RM36,000.",
    "learningStandard": "SK 3.1 Pendaraban Wang"
  },
  {
    "id": "t4-mat-topik3-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Mata Wang Utama Dunia",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Mata wang rasmi bagi negara Jepun ialah:",
    "options": {
      "A": "Yen",
      "B": "Won",
      "C": "Dollar",
      "D": "Baht"
    },
    "correctAnswer": "A",
    "explanation": "Mata wang rasmi Jepun ialah Yen (¥).",
    "learningStandard": "SK 3.3 Mata Wang Asing"
  },
  {
    "id": "t4-mat-topik3-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Instrumen Pembayaran",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Kaedah pembayaran tanpa tunai menggunakan kad bank yang memotong wang terus daripada akaun simpanan dipanggil:",
    "options": {
      "A": "Kad Debit",
      "B": "Kad Kredit",
      "C": "Cek Tertunda",
      "D": "Wang Pos"
    },
    "correctAnswer": "A",
    "explanation": "Kad debit memotong baki akaun simpanan pemilik secara langsung semasa transaksi.",
    "learningStandard": "SK 3.2 Instrumen Pembayaran"
  },
  {
    "id": "t4-mat-topik3-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Wang hingga RM100,000 & Pengurusan Wang",
    "subtopic": "Belanjawan Kewangan KBAT",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Gaji bulanan Encik Faizal ialah RM4,500. Dia menyimpan 15% daripada gajinya untuk simpanan kecemasan setiap bulan. Berapakah wang simpanannya sebulan?",
    "options": {
      "A": "RM675",
      "B": "RM650",
      "C": "RM700",
      "D": "RM625"
    },
    "correctAnswer": "A",
    "explanation": "15/100 × RM4,500 = RM675 sebulan.",
    "learningStandard": "SK 3.4 Pengurusan Kewangan"
  },
  {
    "id": "t4-mat-topik4-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Sistem 24 Jam",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Tukarkan pukul 9:45 malam kepada sistem 24 jam.",
    "options": {
      "A": "Jam 2145",
      "B": "Jam 0945",
      "C": "Jam 2045",
      "D": "Jam 2245"
    },
    "correctAnswer": "A",
    "explanation": "Pukul 9:45 p.m. + 12 jam = Jam 2145.",
    "learningStandard": "SK 4.1 Sistem 24 Jam"
  },
  {
    "id": "t4-mat-topik4-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Perkaitan Abad dan Tahun",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Sebuah monumen bersejarah telah berusia 3 abad 45 tahun. Berapakah usia monumen itu dalam tahun?",
    "options": {
      "A": "345 tahun",
      "B": "3045 tahun",
      "C": "75 tahun",
      "D": "3450 tahun"
    },
    "correctAnswer": "A",
    "explanation": "1 abad = 100 tahun. 3 abad 45 tahun = (3 × 100) + 45 = 345 tahun.",
    "learningStandard": "SK 4.2 Perkaitan Masa Abad dan Tahun"
  },
  {
    "id": "t4-mat-topik4-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Penolakan Masa Dekad dan Tahun",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung: 6 dekad 2 tahun - 2 dekad 7 tahun.",
    "options": {
      "A": "3 dekad 5 tahun",
      "B": "3 dekad 7 tahun",
      "C": "4 dekad 5 tahun",
      "D": "3 dekad 3 tahun"
    },
    "correctAnswer": "A",
    "explanation": "Pinjam 1 dekad (10 tahun): 5 dekad 12 tahun - 2 dekad 7 tahun = 3 dekad 5 tahun.",
    "learningStandard": "SK 4.3 Operasi Tolak Masa"
  },
  {
    "id": "t4-mat-topik4-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Pendaraban Masa",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung: 4 × 2 hari 8 jam.",
    "options": {
      "A": "9 hari 8 jam",
      "B": "8 hari 32 jam",
      "C": "9 hari 4 jam",
      "D": "10 hari 2 jam"
    },
    "correctAnswer": "A",
    "explanation": "4 × 2 hari = 8 hari. 4 × 8 jam = 32 jam = 1 hari 8 jam. Jumlah = 9 hari 8 jam.",
    "learningStandard": "SK 4.3 Pendaraban Masa"
  },
  {
    "id": "t4-mat-topik4-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Perkaitan Abad/Dekad",
    "subtopic": "Tempoh Masa Perjalanan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah bas bertolak dari Melaka pada Jam 0830 dan tiba di Ipoh pada Jam 1415 hari yang sama. Berapakah tempoh masa perjalanannya?",
    "options": {
      "A": "5 jam 45 minit",
      "B": "5 jam 15 minit",
      "C": "6 jam 15 minit",
      "D": "5 jam 30 minit"
    },
    "correctAnswer": "A",
    "explanation": "Dari 0830 hingga 1415 = (1415 - 0830) = 5 jam 45 minit.",
    "learningStandard": "SK 4.4 Tempoh Masa"
  },
  {
    "id": "t4-mat-topik5-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Penukaran Kilometer dan Meter",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Tukarkan 4.85 kilometer kepada meter.",
    "options": {
      "A": "4,850 m",
      "B": "485 m",
      "C": "48,500 m",
      "D": "4.85 m"
    },
    "correctAnswer": "A",
    "explanation": "1 km = 1,000 m. 4.85 × 1,000 = 4,850 m.",
    "learningStandard": "SK 5.1 Unit Panjang"
  },
  {
    "id": "t4-mat-topik5-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Penolakan Jisim",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Seketul daging seberat 3 kg 450 g dipotong 1 kg 800 g untuk dimasak rendang. Berapakah baki berat daging?",
    "options": {
      "A": "1 kg 650 g",
      "B": "1 kg 750 g",
      "C": "2 kg 650 g",
      "D": "1 kg 550 g"
    },
    "correctAnswer": "A",
    "explanation": "3,450 g - 1,800 g = 1,650 g = 1 kg 650 g.",
    "learningStandard": "SK 5.2 Operasi Jisim"
  },
  {
    "id": "t4-mat-topik5-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Pendaraban Isi Padu",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah botol mengandungi 750 mℓ air mineral. Berapakah jumlah isi padu bagi 8 botol yang sama dalam liter?",
    "options": {
      "A": "6 ℓ",
      "B": "5.5 ℓ",
      "C": "6.5 ℓ",
      "D": "7 ℓ"
    },
    "correctAnswer": "A",
    "explanation": "750 mℓ × 8 = 6,000 mℓ = 6 ℓ.",
    "learningStandard": "SK 5.3 Isi Padu Cecair"
  },
  {
    "id": "t4-mat-topik5-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Pembahagian Panjang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Segulung dawai sepanjang 18 m 40 cm dipotong kepada 4 bahagian sama panjang. Berapakah panjang setiap bahagian?",
    "options": {
      "A": "4 m 60 cm",
      "B": "4 m 40 cm",
      "C": "4 m 80 cm",
      "D": "5 m 10 cm"
    },
    "correctAnswer": "A",
    "explanation": "18 m 40 cm = 1,840 cm ÷ 4 = 460 cm = 4 m 60 cm.",
    "learningStandard": "SK 5.1 Pembahagian Panjang"
  },
  {
    "id": "t4-mat-topik5-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Panjang, Jisim & Isi Padu Cecair",
    "subtopic": "Penyelesaian Masalah Gabungan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah tangki mengandungi 25 ℓ air. Sebanyak 14 ℓ 350 mℓ digunakan untuk menyiram pokok dan 3 ℓ 800 mℓ untuk mencuci kereta. Berapakah baki air di dalam tangki?",
    "options": {
      "A": "6 ℓ 850 mℓ",
      "B": "7 ℓ 150 mℓ",
      "C": "6 ℓ 250 mℓ",
      "D": "7 ℓ 850 mℓ"
    },
    "correctAnswer": "A",
    "explanation": "Jumlah guna: 14 ℓ 350 mℓ + 3 ℓ 800 mℓ = 18 ℓ 150 mℓ. Baki: 25 ℓ - 18 ℓ 150 mℓ = 6 ℓ 850 mℓ.",
    "learningStandard": "SK 5.3 Penyelesaian Masalah Isi Padu"
  },
  {
    "id": "t4-mat-topik6-11",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Membaca Koordinat Satah Cartes",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Titik A berada 3 unit ke kanan dari asalan dan 5 unit ke atas. Apakah koordinat titik A?",
    "options": {
      "A": "(3, 5)",
      "B": "(5, 3)",
      "C": "(0, 3)",
      "D": "(5, 0)"
    },
    "correctAnswer": "A",
    "explanation": "Koordinat ditulis sebagai (x, y). Maka titik A ialah (3, 5).",
    "learningStandard": "SK 7.1 Koordinat Satah Cartes"
  },
  {
    "id": "t4-mat-topik6-12",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Jarak Mengufuk dan Mencancang",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Titik P mempunyai koordinat (2, 1) dan titik Q mempunyai koordinat (7, 5). Berapakah jarak mengufuk dan jarak mencancang dari P ke Q?",
    "options": {
      "A": "5 unit mengufuk, 4 unit mencancang",
      "B": "4 unit mengufuk, 5 unit mencancang",
      "C": "7 unit mengufuk, 5 unit mencancang",
      "D": "2 unit mengufuk, 1 unit mencancang"
    },
    "correctAnswer": "A",
    "explanation": "Jarak mengufuk: 7 - 2 = 5 unit. Jarak mencancang: 5 - 1 = 4 unit.",
    "learningStandard": "SK 7.1 Jarak Koordinat"
  },
  {
    "id": "t4-mat-topik6-13",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Konsep Asas Nisbah",
    "difficulty": "KBAT (Aras Rendah)",
    "question": "Di dalam sebuah bakul terdapat 4 biji epal hijau dan 7 biji epal merah. Apakah nisbah bilangan epal hijau kepada bilangan epal merah?",
    "options": {
      "A": "4 : 7",
      "B": "7 : 4",
      "C": "4 : 11",
      "D": "7 : 11"
    },
    "correctAnswer": "A",
    "explanation": "Nisbah epal hijau kepada epal merah ialah 4 : 7.",
    "learningStandard": "SK 7.2 Nisbah"
  },
  {
    "id": "t4-mat-topik6-14",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Nisbah Bahagian kepada Keseluruhan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Sebuah kelas mempunyai 12 orang murid lelaki dan 18 orang murid perempuan. Apakah nisbah termudah bilangan murid lelaki kepada jumlah keseluruhan murid?",
    "options": {
      "A": "2 : 5",
      "B": "3 : 5",
      "C": "2 : 3",
      "D": "12 : 18"
    },
    "correctAnswer": "A",
    "explanation": "Jumlah murid = 12 + 18 = 30. Nisbah lelaki kepada jumlah = 12 : 30 = 2 : 5.",
    "learningStandard": "SK 7.2 Nisbah Termudah"
  },
  {
    "id": "t4-mat-topik6-15",
    "year": 4,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kadaran",
    "subtopic": "Kadaran Kaedah Unitari",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Harga bagi 5 batang pen ialah RM15. Berapakah harga bagi 9 batang pen yang sama?",
    "options": {
      "A": "RM27",
      "B": "RM25",
      "C": "RM30",
      "D": "RM24"
    },
    "correctAnswer": "A",
    "explanation": "Harga sebatang pen: RM15 ÷ 5 = RM3. Harga 9 batang: 9 × RM3 = RM27.",
    "learningStandard": "SK 7.3 Kadaran Unitari"
  }
];
