import { QuizQuestion } from '../types';

export const MATEMATIK_TAHUN_6_QUESTIONS: QuizQuestion[] = [
  {
    "id": "mat-t6-vis-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pengurusan Data dan Kebolehjadian",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Berdasarkan carta palang jualan buku di atas, berapakah purata jualan buku sehari bagi tempoh 4 hari tersebut?",
    "options": {
      "A": "50 buah",
      "B": "55 buah",
      "C": "60 buah",
      "D": "65 buah"
    },
    "correctAnswer": "C",
    "explanation": "Jumlah jualan = 50 + 70 + 40 + 80 = 240 buah. Purata = 240 ÷ 4 hari = 60 buah buku sehari.",
    "learningStandard": "SP 8.2.1 Menentukan purata (min) daripada carta palang.",
    "diagram": {
      "title": "Carta Palang: Jualan Buku 4 Hari",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 280 170\" width=\"260\" height=\"160\" xmlns=\"http://www.w3.org/2000/svg\">\n    <text x=\"140\" y=\"16\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">Jualan Buku (Buah)</text>\n    <line x1=\"40\" y1=\"25\" x2=\"40\" y2=\"135\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    <line x1=\"40\" y1=\"135\" x2=\"265\" y2=\"135\" stroke=\"#94A3B8\" stroke-width=\"2\"/>\n    \n      <rect x=\"50\" y=\"66.25\" width=\"32\" height=\"68.75\" rx=\"4\" fill=\"#3B82F6\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <text x=\"66\" y=\"60.25\" font-size=\"11\" font-weight=\"bold\" fill=\"#3B82F6\" text-anchor=\"middle\">50</text>\n      <text x=\"66\" y=\"151\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Isn</text>\n    \n      <rect x=\"102\" y=\"38.75\" width=\"32\" height=\"96.25\" rx=\"4\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <text x=\"118\" y=\"32.75\" font-size=\"11\" font-weight=\"bold\" fill=\"#10B981\" text-anchor=\"middle\">70</text>\n      <text x=\"118\" y=\"151\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Sel</text>\n    \n      <rect x=\"154\" y=\"80\" width=\"32\" height=\"55\" rx=\"4\" fill=\"#F59E0B\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <text x=\"170\" y=\"74\" font-size=\"11\" font-weight=\"bold\" fill=\"#F59E0B\" text-anchor=\"middle\">40</text>\n      <text x=\"170\" y=\"151\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Rab</text>\n    \n      <rect x=\"206\" y=\"25\" width=\"32\" height=\"110\" rx=\"4\" fill=\"#EC4899\" stroke=\"#1E293B\" stroke-width=\"1.5\"/>\n      <text x=\"222\" y=\"19\" font-size=\"11\" font-weight=\"bold\" fill=\"#EC4899\" text-anchor=\"middle\">80</text>\n      <text x=\"222\" y=\"151\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Kha</text>\n    \n  </svg>",
      "caption": "Purata = Jumlah Keseluruhan ÷ Bilangan Hari."
    }
  },
  {
    "id": "m6-nombor-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "subtopic": "Pecahan Juta & Perpuluhan Juta",
    "difficulty": "Sederhana",
    "question": "Tukarkan 2 3/4 juta kepada nombor bulat.",
    "options": {
      "A": "2,340,000",
      "B": "2,750,000",
      "C": "2,250,000",
      "D": "2,700,000"
    },
    "correctAnswer": "B",
    "explanation": "2 3/4 juta = 2,000,000 + (3/4 × 1,000,000) = 2,000,000 + 750,000 = 2,750,000.",
    "learningStandard": "SK 1.1 / SP 1.1.5 Menukar nombor dalam pecahan juta dan perpuluhan juta kepada nombor bulat dan sebaliknya."
  },
  {
    "id": "m6-nombor-02",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "subtopic": "Nombor Perdana & Gubahan",
    "difficulty": "Mudah",
    "question": "Antara kumpulan nombor berikut, yang manakah SEMUANYA nombor perdana dalam lingkungan 1 hingga 20?",
    "options": {
      "A": "2, 3, 5, 7, 11, 13, 17, 19",
      "B": "1, 3, 5, 7, 9, 11, 13, 15",
      "C": "2, 4, 6, 8, 10, 12, 14, 16",
      "D": "3, 5, 7, 9, 11, 13, 17, 19"
    },
    "correctAnswer": "A",
    "explanation": "Nombor perdana hanya boleh dibahagi dengan 1 dan dirinya sendiri. (1 dan 9 bukan nombor perdana).",
    "learningStandard": "SK 1.2 / SP 1.2.1 Mengenal pasti nombor perdana dalam lingkungan 100."
  },
  {
    "id": "m6-nombor-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "subtopic": "Operasi Bergabung Kurungan",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Hitung: 1.5 juta - (450,000 × 2) + 180,000 =",
    "options": {
      "A": "780,000",
      "B": "880,000",
      "C": "680,000",
      "D": "980,000"
    },
    "correctAnswer": "A",
    "explanation": "1.5 juta = 1,500,000. Kurungan: 450,000 × 2 = 900,000. Seterusnya: 1,500,000 - 900,000 + 180,000 = 600,000 + 180,000 = 780,000.",
    "learningStandard": "SK 1.4 / SP 1.4.1 Menyelesaikan ayat matematik operasi bergabung melibatkan nombor bulat hingga 10,000,000."
  },
  {
    "id": "m6-pecahan-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pendaraban Pecahan Bercampur",
    "difficulty": "Sederhana",
    "question": "Hitung: 1 1/2 × 3/5 =",
    "options": {
      "A": "9/10",
      "B": "3/10",
      "C": "1 3/10",
      "D": "4/7"
    },
    "correctAnswer": "A",
    "explanation": "Tukarkan kepada pecahan tak wajar: 3/2 × 3/5 = (3×3) / (2×5) = 9/10.",
    "learningStandard": "SK 2.1 / SP 2.1.1 Mendarab pecahan melibatkan nombor bercampur."
  },
  {
    "id": "m6-peratus-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Peratusan Kenaikan & Penurunan",
    "difficulty": "KBAT (Aras Tinggi)",
    "question": "Harga sepasang kasut sukan meningkat daripada RM150 kepada RM180. Berapakah peratusan kenaikan harga kasut itu?",
    "options": {
      "A": "15%",
      "B": "20%",
      "C": "25%",
      "D": "30%"
    },
    "correctAnswer": "B",
    "explanation": "Kenaikan nilai = RM180 - RM150 = RM30. Peratusan kenaikan = (RM30 / RM150) × 100% = 1/5 × 100% = 20%.",
    "learningStandard": "SK 2.3 / SP 2.3.1 Menyelesaikan masalah harian melibatkan peratusan keuntungan, kenaikan dan penurunan."
  },
  {
    "id": "mat-t6-vis-02",
    "year": 6,
    "subject": "Matematik",
    "topic": "Ruang dan Geometri",
    "difficulty": "Sederhana",
    "question": "Berdasarkan rajah segi tiga bersudut tegak di atas (tapak = 10 cm, tinggi = 8 cm), apakah luas segi tiga tersebut?",
    "options": {
      "A": "18 cm²",
      "B": "40 cm²",
      "C": "80 cm²",
      "D": "36 cm²"
    },
    "correctAnswer": "B",
    "explanation": "Luas = 1/2 × Tapak × Tinggi = 1/2 × 10 cm × 8 cm = 40 cm².",
    "learningStandard": "SP 6.2.1 Mengira luas bentuk poligon gabungan.",
    "diagram": {
      "title": "Rajah: Geometri Segi Tiga Bersudut Tegak",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 220 150\" width=\"200\" height=\"140\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"30,120 180,120 180,30\" fill=\"#E0F2FE\" stroke=\"#0284C7\" stroke-width=\"3\"/>\n      <rect x=\"160\" y=\"100\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"#0284C7\" stroke-width=\"2\"/>\n      <text x=\"105\" y=\"138\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369A1\" text-anchor=\"middle\">Tapak = 10 cm</text>\n      <text x=\"195\" y=\"80\" font-size=\"12\" font-weight=\"bold\" fill=\"#0369A1\" text-anchor=\"start\">Tinggi = 8 cm</text>\n    </svg>",
      "caption": "Formula Luas: 1/2 × Tapak × Tinggi."
    }
  },
  {
    "id": "m6-wang-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "subtopic": "Diskaun dan Harga Jual",
    "difficulty": "Sederhana",
    "question": "Sebuah televisyen pintar berharga RM2,400 ditawarkan dengan diskaun sebanyak 15%. Berapakah harga yang perlu dibayar oleh pembeli selepas potongan diskaun?",
    "options": {
      "A": "RM2,040",
      "B": "RM2,160",
      "C": "RM1,980",
      "D": "RM2,200"
    },
    "correctAnswer": "A",
    "explanation": "Nilai diskaun = 15/100 × RM2,400 = RM360. Harga bayaran = RM2,400 - RM360 = RM2,040.",
    "learningStandard": "SK 3.1 / SP 3.1.1 Menyelesaikan masalah melibatkan kos, harga jual, untung, rugi, diskaun dan rebat."
  },
  {
    "id": "m6-wang-02",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "subtopic": "Aset dan Liabiliti",
    "difficulty": "Mudah",
    "question": "Manakah antara berikut dikategorikan sebagai \"Liabiliti\" (tanggungan hutang kewangan)?",
    "options": {
      "A": "Wang simpanan tetap di bank",
      "B": "Hutang kad kredit dan pinjaman perumahan",
      "C": "Rumah kediaman hak milik sendiri",
      "D": "Saham dan unit amanah"
    },
    "correctAnswer": "B",
    "explanation": "Liabiliti ialah tanggungan atau hutang yang perlu dibayar, manakala simpanan dan hartanah adalah aset.",
    "learningStandard": "SK 3.2 / SP 3.2.1 Mengenal pasti dan membezakan antara aset dan liabiliti."
  },
  {
    "id": "m6-masa-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "subtopic": "Zon Waktu Antarabangsa",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Waktu di Tokyo, Jepun mendahului waktu di Kuala Lumpur selama 1 jam (+1 jam). Jika waktu di Kuala Lumpur ialah jam 0930 pada hari Isnin, apakah waktu di Tokyo?",
    "options": {
      "A": "Jam 0830 hari Isnin",
      "B": "Jam 1030 hari Isnin",
      "C": "Jam 1130 hari Isnin",
      "D": "Jam 1030 hari Ahad"
    },
    "correctAnswer": "B",
    "explanation": "Tokyo mendahului KL 1 jam: Jam 0930 + 1 jam = Jam 1030 pada hari yang sama (Isnin).",
    "learningStandard": "SK 4.1 / SP 4.1.1 Mengenal zon waktu dan menyelesaikan masalah melibatkan zon waktu dunia."
  },
  {
    "id": "m6-ruang-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "subtopic": "Sudut Pedalaman Poligon",
    "difficulty": "Sederhana",
    "question": "Berapakah jumlah nilai sudut pedalaman bagi sebuah segi tiga?",
    "options": {
      "A": "90°",
      "B": "180°",
      "C": "270°",
      "D": "360°"
    },
    "correctAnswer": "B",
    "explanation": "Jumlah sudut pedalaman bagi mana-mana segi tiga ialah sentiasa 180°.",
    "learningStandard": "SK 6.1 / SP 6.1.1 Mengukur dan menyatakan nilai sudut pedalaman poligon sekata."
  },
  {
    "id": "m6-data-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "subtopic": "Mod, Median, Min & Julat",
    "difficulty": "Sederhana",
    "question": "Diberi satu set data markah ujian: 70, 85, 90, 85, 60, 85, 95. Apakah \"Mod\" bagi data ini?",
    "options": {
      "A": "85",
      "B": "70",
      "C": "90",
      "D": "60"
    },
    "correctAnswer": "A",
    "explanation": "Mod ialah nilai data yang mempunyai kekerapan tertinggi. Nilai 85 berulang sebanyak 3 kali.",
    "learningStandard": "SK 8.1 / SP 8.1.1 Mentafsir data daripada carta dan mencari mod, median, min dan julat."
  },
  {
    "id": "mat-t6-vis-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Ruang dan Geometri",
    "difficulty": "KBAT (Aras Sederhana)",
    "question": "Rujuk rajah bongkah kuboid 3D di atas (Panjang 10 cm, Lebar 5 cm, Tinggi 6 cm). Hitung isi padu kuboid tersebut dalam cm³.",
    "options": {
      "A": "150 cm³",
      "B": "200 cm³",
      "C": "300 cm³",
      "D": "350 cm³"
    },
    "correctAnswer": "C",
    "explanation": "Isi Padu = 10 cm × 5 cm × 6 cm = 300 cm³.",
    "learningStandard": "SP 6.3.1 Mengira isi padu bentuk 3D gabungan.",
    "diagram": {
      "title": "Rajah: Bongkah Kuboid 3D (10x5x6 cm)",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 240 160\" width=\"220\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon points=\"70,30 190,30 190,90 70,90\" fill=\"#E2E8F0\" stroke=\"#94A3B8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n      <polygon points=\"30,60 70,30 190,30 150,60\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"2\"/>\n      <polygon points=\"150,60 190,30 190,90 150,120\" fill=\"#C4B5FD\" stroke=\"#7C3AED\" stroke-width=\"2\"/>\n      <polygon points=\"30,60 150,60 150,120 30,120\" fill=\"#EDE9FE\" stroke=\"#7C3AED\" stroke-width=\"2.5\"/>\n      <text x=\"90\" y=\"140\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"middle\">Panjang = 10 cm</text>\n      <text x=\"15\" y=\"95\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"end\">Tinggi = 6 cm</text>\n      <text x=\"185\" y=\"50\" font-size=\"11\" font-weight=\"bold\" fill=\"#5B21B6\" text-anchor=\"start\">Lebar = 5 cm</text>\n    </svg>",
      "caption": "Isi Padu = Panjang × Lebar × Tinggi = 10 × 5 × 6."
    }
  },
  {
    "id": "m6-kebolehjadian-01",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "subtopic": "Konsep Kebolehjadian Peristiwa",
    "difficulty": "Mudah",
    "question": "Apakah kebolehjadian bahawa \"Matahari akan terbit dari sebelah barat esok pagi\"?",
    "options": {
      "A": "Pasti",
      "B": "Lebih mungkin",
      "C": "Sama kemungkinan",
      "D": "Mustahil"
    },
    "correctAnswer": "D",
    "explanation": "Matahari terbit dari sebelah timur secara hukum alam semula jadi, jadi terbit dari barat adalah peristiwa yang mustahil berlaku.",
    "learningStandard": "SK 8.2 / SP 8.2.1 Menyatakan kebolehjadian sesuatu peristiwa sebagai mustahil, kurang mungkin, sama kemungkinan, lebih mungkin atau pasti."
  },
  {
    "id": "m6-mat-t1-04",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Tukarkan 0.35 juta kepada nombor bulat.",
    "options": {
      "A": "350,000",
      "B": "35,000",
      "C": "3,500,000",
      "D": "3,500"
    },
    "correctAnswer": "A",
    "explanation": "0.35 × 1,000,000 = 350,000.",
    "learningStandard": "SK 1.1 Perpuluhan Juta"
  },
  {
    "id": "m6-mat-t1-05",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Tukarkan 4,200,000 kepada perpuluhan juta.",
    "options": {
      "A": "4.2 juta",
      "B": "4.02 juta",
      "C": "0.42 juta",
      "D": "42 juta"
    },
    "correctAnswer": "A",
    "explanation": "4,200,000 ÷ 1,000,000 = 4.2 juta.",
    "learningStandard": "SK 1.1 Perpuluhan Juta"
  },
  {
    "id": "m6-mat-t1-06",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Tukarkan 1,500,000 kepada pecahan juta termudah.",
    "options": {
      "A": "1 1/2 juta",
      "B": "1 1/4 juta",
      "C": "1 3/4 juta",
      "D": "1 1/5 juta"
    },
    "correctAnswer": "A",
    "explanation": "1,500,000 = 1 500,000/1,000,000 = 1 1/2 juta.",
    "learningStandard": "SK 1.1 Pecahan Juta"
  },
  {
    "id": "m6-mat-t1-07",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Hitung: 1.8 juta + 450,000.",
    "options": {
      "A": "2,250,000",
      "B": "2,200,000",
      "C": "2,000,000",
      "D": "2,500,000"
    },
    "correctAnswer": "A",
    "explanation": "1,800,000 + 450,000 = 2,250,000 atau 2.25 juta.",
    "learningStandard": "SK 1.2 Operasi Nombor Juta"
  },
  {
    "id": "m6-mat-t1-08",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Hitung: 3 1/4 juta - 800,000.",
    "options": {
      "A": "2,450,000",
      "B": "2,400,000",
      "C": "2,500,000",
      "D": "2,350,000"
    },
    "correctAnswer": "A",
    "explanation": "3,250,000 - 800,000 = 2,450,000.",
    "learningStandard": "SK 1.2 Operasi Nombor Juta"
  },
  {
    "id": "m6-mat-t1-09",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Hitung: 0.04 juta × 15.",
    "options": {
      "A": "600,000",
      "B": "60,000",
      "C": "6,000,000",
      "D": "400,000"
    },
    "correctAnswer": "A",
    "explanation": "40,000 × 15 = 600,000.",
    "learningStandard": "SK 1.2 Pendaraban Juta"
  },
  {
    "id": "m6-mat-t1-10",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Hitung: 2.4 juta ÷ 8.",
    "options": {
      "A": "300,000",
      "B": "30,000",
      "C": "3,000,000",
      "D": "400,000"
    },
    "correctAnswer": "A",
    "explanation": "2,400,000 ÷ 8 = 300,000.",
    "learningStandard": "SK 1.2 Pembahagian Juta"
  },
  {
    "id": "m6-mat-t1-11",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Antara nombor berikut, yang manakah nombor gubahan (composite number)?",
    "options": {
      "A": "51",
      "B": "43",
      "C": "47",
      "D": "53"
    },
    "correctAnswer": "A",
    "explanation": "51 ialah nombor gubahan kerana 51 = 3 × 17 (boleh dibahagi dengan selain 1 dan dirinya).",
    "learningStandard": "SK 1.3 Nombor Perdana dan Gubahan"
  },
  {
    "id": "m6-mat-t1-12",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Hitung: (1.5 juta - 700,000) ÷ 4.",
    "options": {
      "A": "200,000",
      "B": "250,000",
      "C": "150,000",
      "D": "300,000"
    },
    "correctAnswer": "A",
    "explanation": "1,500,000 - 700,000 = 800,000. 800,000 ÷ 4 = 200,000.",
    "learningStandard": "SK 1.2 Operasi Bergabung"
  },
  {
    "id": "m6-mat-t1-13",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Sebuah agensi menyumbang 1/4 juta pelitup muka kepada 50 buah hospital secara sama rata. Berapakah pelitup muka bagi setiap hospital?",
    "options": {
      "A": "5,000",
      "B": "50,000",
      "C": "2,500",
      "D": "10,000"
    },
    "correctAnswer": "A",
    "explanation": "1/4 juta = 250,000. 250,000 ÷ 50 = 5,000.",
    "learningStandard": "SK 1.4 Penyelesaian Masalah"
  },
  {
    "id": "m6-mat-t1-14",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Pola nombor: 1.2 juta, 1.5 juta, 1.8 juta, X. Apakah nilai X?",
    "options": {
      "A": "2.1 juta",
      "B": "2.0 juta",
      "C": "2.2 juta",
      "D": "2.4 juta"
    },
    "correctAnswer": "A",
    "explanation": "Pola bertambah 0.3 juta (300,000) setiap langkah: 1.8 juta + 0.3 juta = 2.1 juta.",
    "learningStandard": "SK 1.1 Pola Nombor Juta"
  },
  {
    "id": "m6-mat-t1-15",
    "year": 6,
    "subject": "Matematik",
    "topic": "Nombor hingga 10 Juta & Operasi",
    "difficulty": "Sederhana",
    "question": "Sebuah syarikat telekomunikasi mempunyai 5.85 juta pelanggan. Selepas kempen, bilangan pelanggan meningkat sebanyak 350,000. Berapakah jumlah pelanggan sekarang?",
    "options": {
      "A": "6.2 juta",
      "B": "6.15 juta",
      "C": "6.0 juta",
      "D": "6.5 juta"
    },
    "correctAnswer": "A",
    "explanation": "5,850,000 + 350,000 = 6,200,000 = 6.2 juta.",
    "learningStandard": "SK 1.4 Masalah Harian Juta"
  },
  {
    "id": "m6-mat-t2-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 3/4 ÷ 1/8.",
    "options": {
      "A": "6",
      "B": "4",
      "C": "3/32",
      "D": "8"
    },
    "correctAnswer": "A",
    "explanation": "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6.",
    "learningStandard": "SK 2.1 Pembahagian Pecahan"
  },
  {
    "id": "m6-mat-t2-04",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 2 1/2 ÷ 1/4.",
    "options": {
      "A": "10",
      "B": "8",
      "C": "5/8",
      "D": "12"
    },
    "correctAnswer": "A",
    "explanation": "5/2 ÷ 1/4 = 5/2 × 4/1 = 10.",
    "learningStandard": "SK 2.1 Pembahagian Pecahan"
  },
  {
    "id": "m6-mat-t2-05",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 4/5 × 15.5.",
    "options": {
      "A": "12.4",
      "B": "12.0",
      "C": "11.8",
      "D": "13.2"
    },
    "correctAnswer": "A",
    "explanation": "4/5 × 15.5 = 0.8 × 15.5 = 12.4.",
    "learningStandard": "SK 2.2 Pecahan dan Perpuluhan"
  },
  {
    "id": "m6-mat-t2-06",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 7.25 × 3.6.",
    "options": {
      "A": "26.1",
      "B": "25.9",
      "C": "26.25",
      "D": "27.1"
    },
    "correctAnswer": "A",
    "explanation": "7.25 × 3.6 = 26.10.",
    "learningStandard": "SK 2.2 Pendaraban Perpuluhan"
  },
  {
    "id": "m6-mat-t2-07",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 15.6 ÷ 0.4.",
    "options": {
      "A": "39",
      "B": "3.9",
      "C": "390",
      "D": "36"
    },
    "correctAnswer": "A",
    "explanation": "15.6 ÷ 0.4 = 156 ÷ 4 = 39.",
    "learningStandard": "SK 2.2 Pembahagian Perpuluhan"
  },
  {
    "id": "m6-mat-t2-08",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Tukarkan 3/8 kepada bentuk peratusan.",
    "options": {
      "A": "37.5%",
      "B": "38%",
      "C": "35%",
      "D": "36.5%"
    },
    "correctAnswer": "A",
    "explanation": "3/8 × 100% = 37.5%.",
    "learningStandard": "SK 2.3 Peratus"
  },
  {
    "id": "m6-mat-t2-09",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung 120% daripada 450.",
    "options": {
      "A": "540",
      "B": "520",
      "C": "500",
      "D": "550"
    },
    "correctAnswer": "A",
    "explanation": "120/100 × 450 = 540.",
    "learningStandard": "SK 2.3 Peratus Lebih 100%"
  },
  {
    "id": "m6-mat-t2-10",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Berapakah peratusan 45 daripada 150?",
    "options": {
      "A": "30%",
      "B": "25%",
      "C": "35%",
      "D": "40%"
    },
    "correctAnswer": "A",
    "explanation": "45/150 × 100% = 30%.",
    "learningStandard": "SK 2.3 Peratusan"
  },
  {
    "id": "m6-mat-t2-11",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Tukarkan 240% kepada nombor bercampur.",
    "options": {
      "A": "2 2/5",
      "B": "2 1/4",
      "C": "2 1/2",
      "D": "2 3/5"
    },
    "correctAnswer": "A",
    "explanation": "240/100 = 24/10 = 2 4/10 = 2 2/5.",
    "learningStandard": "SK 2.3 Peratus kepada Pecahan"
  },
  {
    "id": "m6-mat-t2-12",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Sebuah tangki mengandungi 80 liter air. 15% air digunakan untuk mencuci. Berapakah baki air dalam tangki?",
    "options": {
      "A": "68 liter",
      "B": "65 liter",
      "C": "70 liter",
      "D": "64 liter"
    },
    "correctAnswer": "A",
    "explanation": "Air diguna: 15% × 80 = 12 liter. Baki: 80 - 12 = 68 liter.",
    "learningStandard": "SK 2.3 Penyelesaian Masalah"
  },
  {
    "id": "m6-mat-t2-13",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Hitung: 5/6 ÷ 2 1/2.",
    "options": {
      "A": "1/3",
      "B": "2/3",
      "C": "1/2",
      "D": "1/4"
    },
    "correctAnswer": "A",
    "explanation": "5/6 ÷ 5/2 = 5/6 × 2/5 = 2/6 = 1/3.",
    "learningStandard": "SK 2.1 Pembahagian Pecahan"
  },
  {
    "id": "m6-mat-t2-14",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Cari nilai: 4.8 + 2.5 × 1.6.",
    "options": {
      "A": "8.8",
      "B": "11.68",
      "C": "9.2",
      "D": "10.5"
    },
    "correctAnswer": "A",
    "explanation": "Darab dahulu: 2.5 × 1.6 = 4.0. Kemudian 4.8 + 4.0 = 8.8.",
    "learningStandard": "SK 2.2 Operasi Bergabung Perpuluhan"
  },
  {
    "id": "m6-mat-t2-15",
    "year": 6,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "difficulty": "Sederhana",
    "question": "Harga asal baju ialah RM80. Semasa jualan murah harganya dinaikkan 10% kemudian diberi diskaun 10%. Berapakah harga akhirnya?",
    "options": {
      "A": "RM79.20",
      "B": "RM80.00",
      "C": "RM78.50",
      "D": "RM81.00"
    },
    "correctAnswer": "A",
    "explanation": "Naik 10%: RM80 + RM8 = RM88. Diskaun 10%: RM88 - RM8.80 = RM79.20.",
    "learningStandard": "SK 2.3 Peratus Kompaun"
  },
  {
    "id": "m6-mat-t3-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Apakah formula untuk mengira peratus keuntungan?",
    "options": {
      "A": "(Untung ÷ Harga Kos) × 100%",
      "B": "(Untung ÷ Harga Jual) × 100%",
      "C": "(Harga Kos ÷ Untung) × 100%",
      "D": "(Harga Jual ÷ Harga Kos) × 100%"
    },
    "correctAnswer": "A",
    "explanation": "Peratus Untung = (Untung ÷ Harga Kos) × 100%.",
    "learningStandard": "SK 3.1 Untung dan Rugi"
  },
  {
    "id": "m6-mat-t3-04",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Sebuah jam tangan dibeli dengan harga RM150 dan dijual dengan harga RM180. Berapakah peratus keuntungannya?",
    "options": {
      "A": "20%",
      "B": "25%",
      "C": "15%",
      "D": "30%"
    },
    "correctAnswer": "A",
    "explanation": "Untung = RM30. Peratus untung = (30/150) × 100% = 20%.",
    "learningStandard": "SK 3.1 Peratus Untung"
  },
  {
    "id": "m6-mat-t3-05",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Apakah definisi Cukai Perkhidmatan (SST)?",
    "options": {
      "A": "Cukai yang dikenakan oleh kerajaan atas perkhidmatan yang disediakan oleh perniagaan tertentu",
      "B": "Duit bonus yang diberi oleh majikan",
      "C": "Kadar keuntungan simpanan bank",
      "D": "Hutang pinjaman rumah"
    },
    "correctAnswer": "A",
    "explanation": "Cukai perkhidmatan ialah cukai kepenggunaan yang dikutip oleh pihak berkuasa atas perkhidmatan tertentu.",
    "learningStandard": "SK 3.2 Cukai Perkhidmatan"
  },
  {
    "id": "m6-mat-t3-06",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Bil makanan di sebuah restoran ialah RM120. Cukai perkhidmatan sebanyak 6% dikenakan. Berapakah jumlah yang perlu dibayar?",
    "options": {
      "A": "RM127.20",
      "B": "RM126.00",
      "C": "RM130.00",
      "D": "RM125.50"
    },
    "correctAnswer": "A",
    "explanation": "Cukai = 6/100 × RM120 = RM7.20. Jumlah = RM120 + RM7.20 = RM127.20.",
    "learningStandard": "SK 3.2 Pengiraan Cukai"
  },
  {
    "id": "m6-mat-t3-07",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Apakah perbezaan utama antara insurans dan takaful?",
    "options": {
      "A": "Takaful berlandaskan prinsip syariah dan saling membantu (tabarru'), manakala insurans konvensional berasaskan kontrak pemindahan risiko",
      "B": "Insurans tidak perlu bayar premium",
      "C": "Takaful hanya untuk kenderaan sahaja",
      "D": "Tiada perbezaan sama sekali"
    },
    "correctAnswer": "A",
    "explanation": "Takaful berteraskan konsep tolong-menolong mengikut syariah Islam.",
    "learningStandard": "SK 3.3 Insurans dan Takaful"
  },
  {
    "id": "m6-mat-t3-08",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Encik Hakimi membeli polisi insurans kenderaan untuk:",
    "options": {
      "A": "Mendapat perlindungan kewangan sekiranya berlaku kemalangan atau kecurian kereta",
      "B": "Mendapat dividen bulanan yang tinggi",
      "C": "Mengelakkan saman had laju",
      "D": "Mendapat servis minyak percuma di mana-mana bengkel"
    },
    "correctAnswer": "A",
    "explanation": "Insurans memberi perlindungan kewangan terhadap risiko luar jangka.",
    "learningStandard": "SK 3.3 Faedah Insurans"
  },
  {
    "id": "m6-mat-t3-09",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Faedah kompaun dikira berdasarkan:",
    "options": {
      "A": "Wang prinsipal asal beserta faedah yang terkumpul sebelum itu",
      "B": "Wang prinsipal sahaja",
      "C": "Jumlah perbelanjaan harian",
      "D": "Potongan cukai tahunan"
    },
    "correctAnswer": "A",
    "explanation": "Faedah kompaun mengira faedah atas prinsipal serta faedah terdahulu.",
    "learningStandard": "SK 3.4 Faedah Mudah dan Kompaun"
  },
  {
    "id": "m6-mat-t3-10",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Simpanan RM10,000 dengan faedah mudah 4% setahun selama 3 tahun akan menghasilkan faedah berjumlah:",
    "options": {
      "A": "RM1,200",
      "B": "RM400",
      "C": "RM800",
      "D": "RM1,600"
    },
    "correctAnswer": "A",
    "explanation": "Faedah = RM10,000 × 4/100 × 3 = RM1,200.",
    "learningStandard": "SK 3.4 Faedah Mudah"
  },
  {
    "id": "m6-mat-t3-11",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Apakah yang dimaksudkan dengan \"Harga Kos\"?",
    "options": {
      "A": "Jumlah wang yang dikeluarkan untuk membeli atau mengeluarkan sesuatu barangan sebelum dijual",
      "B": "Harga yang dipamerkan di rak jualan",
      "C": "Keuntungan bersih peniaga",
      "D": "Nilai diskaun promosi"
    },
    "correctAnswer": "A",
    "explanation": "Harga kos ialah kos asal perolehan atau pembuatan sesuatu barangan.",
    "learningStandard": "SK 3.1 Istilah Celik Wang"
  },
  {
    "id": "m6-mat-t3-12",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Puan Rohana membeli sehelai tudung pada harga kos RM40 dan menjualnya dengan kerugian 15%. Berapakah harga jualan tudung itu?",
    "options": {
      "A": "RM34",
      "B": "RM36",
      "C": "RM32",
      "D": "RM35"
    },
    "correctAnswer": "A",
    "explanation": "Rugi = 15/100 × RM40 = RM6. Harga jualan = RM40 - RM6 = RM34.",
    "learningStandard": "SK 3.1 Pengiraan Kerugian"
  },
  {
    "id": "m6-mat-t3-13",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Sebuah komputer riba dijual secara ansuran dengan bayaran muka RM500 dan bayaran bulanan RM180 selama 12 bulan. Berapakah jumlah harga ansuran komputer riba tersebut?",
    "options": {
      "A": "RM2,660",
      "B": "RM2,160",
      "C": "RM2,400",
      "D": "RM2,500"
    },
    "correctAnswer": "A",
    "explanation": "Bayaran bulanan: 12 × RM180 = RM2,160. Jumlah = RM500 + RM2,160 = RM2,660.",
    "learningStandard": "SK 3.1 Pembelian Ansuran"
  },
  {
    "id": "m6-mat-t3-14",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Ciri utama pelabur yang bijak dalam merancang kewangan ialah:",
    "options": {
      "A": "Mempelbagaikan portfolio pelaburan dan memahami risiko pelaburan",
      "B": "Melabur dalam skim cepat kaya dengan pulangan luar biasa",
      "C": "Meminjam wang daripada orang lain untuk membeli saham berisiko tinggi",
      "D": "Menyimpan semua wang di rumah"
    },
    "correctAnswer": "A",
    "explanation": "Pelabur bijak memahami risiko dan mempelbagaikan portfolio pelaburan secara sah.",
    "learningStandard": "SK 3.4 Pengurusan Kewangan Bijak"
  },
  {
    "id": "m6-mat-t3-15",
    "year": 6,
    "subject": "Matematik",
    "topic": "Wang, Untung Rugi & Celik Kewangan",
    "difficulty": "Sederhana",
    "question": "Encik Tan membeli sebuah rumah bernilai RM300,000. Dia membayar 10% wang pendahuluan. Berapakah baki pinjaman perumahan yang diperlukannya?",
    "options": {
      "A": "RM270,000",
      "B": "RM280,000",
      "C": "RM250,000",
      "D": "RM290,000"
    },
    "correctAnswer": "A",
    "explanation": "Wang pendahuluan: 10% × RM300,000 = RM30,000. Baki pinjaman = RM300,000 - RM30,000 = RM270,000.",
    "learningStandard": "SK 3.4 Penyelesaian Masalah Kewangan"
  },
  {
    "id": "m6-mat-t4-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Kuala Lumpur berada pada zon waktu UTC+8 manakala Sydney berada pada UTC+10. Jika waktu di Kuala Lumpur ialah 2:00 petang, waktu di Sydney ialah:",
    "options": {
      "A": "4:00 petang",
      "B": "12:00 tengah hari",
      "C": "5:00 petang",
      "D": "1:00 petang"
    },
    "correctAnswer": "A",
    "explanation": "Sydney 2 jam lebih awal daripada Kuala Lumpur (10 - 8 = +2 jam): 2:00 p.m. + 2 jam = 4:00 p.m.",
    "learningStandard": "SK 4.1 Zon Waktu Dunia"
  },
  {
    "id": "m6-mat-t4-04",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Tokyo (UTC+9) berada 1 jam di hadapan Kuala Lumpur (UTC+8). Sebuah penerbangan berlepas dari Kuala Lumpur pada jam 0900 dan mengambil masa 7 jam. Pukul berapakah waktu tempatan di Tokyo ketika pesawat mendarat?",
    "options": {
      "A": "Jam 1700",
      "B": "Jam 1600",
      "C": "Jam 1800",
      "D": "Jam 1500"
    },
    "correctAnswer": "A",
    "explanation": "Waktu KL ketika tiba: 0900 + 7 jam = 1600. Waktu Tokyo (+1 jam): 1600 + 1 jam = Jam 1700.",
    "learningStandard": "SK 4.1 Zon Waktu Perjalanan"
  },
  {
    "id": "m6-mat-t4-05",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Sebuah poligon sekata yang mempunyai 8 sisi yang sama panjang dan 8 bucu dipanggil:",
    "options": {
      "A": "Oktagon",
      "B": "Heptagon",
      "C": "Heksagon",
      "D": "Nonagon"
    },
    "correctAnswer": "A",
    "explanation": "Oktagon ialah poligon yang mempunyai 8 sisi.",
    "learningStandard": "SK 6.1 Poligon Sekata"
  },
  {
    "id": "m6-mat-t4-06",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Apakah nama poligon sekata dengan 7 sisi?",
    "options": {
      "A": "Heptagon",
      "B": "Heksagon",
      "C": "Oktagon",
      "D": "Pentagon"
    },
    "correctAnswer": "A",
    "explanation": "Heptagon mempunyai 7 sisi yang lurus dan sama panjang.",
    "learningStandard": "SK 6.1 Poligon Sekata"
  },
  {
    "id": "m6-mat-t4-07",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Jumlah sudut pedalaman bagi sebuah heksagon (6 sisi) ialah:",
    "options": {
      "A": "720°",
      "B": "540°",
      "C": "360°",
      "D": "900°"
    },
    "correctAnswer": "A",
    "explanation": "Formula: (n - 2) × 180° = (6 - 2) × 180° = 4 × 180° = 720°.",
    "learningStandard": "SK 6.1 Sudut Pedalaman Poligon"
  },
  {
    "id": "m6-mat-t4-08",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Cari luas sebuah bulatan dengan jejari 7 cm (gunakan π = 22/7).",
    "options": {
      "A": "154 cm²",
      "B": "308 cm²",
      "C": "44 cm²",
      "D": "88 cm²"
    },
    "correctAnswer": "A",
    "explanation": "Luas bulatan = πr² = 22/7 × 7 × 7 = 154 cm².",
    "learningStandard": "SK 6.2 Luas Bentuk"
  },
  {
    "id": "m6-mat-t4-09",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Lilitan sebuah bulatan dengan diameter 14 cm ialah (guna π = 22/7):",
    "options": {
      "A": "44 cm",
      "B": "88 cm",
      "C": "22 cm",
      "D": "154 cm"
    },
    "correctAnswer": "A",
    "explanation": "Lilitan = πd = 22/7 × 14 = 44 cm.",
    "learningStandard": "SK 6.2 Lilitan Bulatan"
  },
  {
    "id": "m6-mat-t4-10",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Hitung luas bentuk gabungan sebuah segi empat tepat (8 cm × 5 cm) dan segi tiga bersudut tegak (tapak 6 cm, tinggi 4 cm).",
    "options": {
      "A": "52 cm²",
      "B": "64 cm²",
      "C": "48 cm²",
      "D": "56 cm²"
    },
    "correctAnswer": "A",
    "explanation": "Luas segi empat = 40 cm². Luas segi tiga = 1/2 × 6 × 4 = 12 cm². Jumlah = 40 + 12 = 52 cm².",
    "learningStandard": "SK 6.3 Luas Bentuk Gabungan"
  },
  {
    "id": "m6-mat-t4-11",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Isi padu sebuah silinder tegak dengan jejari tapak 7 cm dan tinggi 10 cm ialah (guna π = 22/7):",
    "options": {
      "A": "1,540 cm³",
      "B": "1,440 cm³",
      "C": "770 cm³",
      "D": "2,200 cm³"
    },
    "correctAnswer": "A",
    "explanation": "Isi padu silinder = πr²h = 22/7 × 7 × 7 × 10 = 1,540 cm³.",
    "learningStandard": "SK 6.4 Isi Padu"
  },
  {
    "id": "m6-mat-t4-12",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Sebuah tangki air berbentuk kuboid berukuran 2 m × 1.5 m × 1 m diisi separuh penuh dengan air. Berapakah isi padu air dalam tangki?",
    "options": {
      "A": "1.5 m³",
      "B": "3.0 m³",
      "C": "0.75 m³",
      "D": "2.0 m³"
    },
    "correctAnswer": "A",
    "explanation": "Isi padu penuh = 2 × 1.5 × 1 = 3 m³. Separuh penuh = 3 ÷ 2 = 1.5 m³.",
    "learningStandard": "SK 6.4 Isi Padu Cecair"
  },
  {
    "id": "m6-mat-t4-13",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Diberi satu garis rentas dalam satah, sudut bertentang bucu sentiasa:",
    "options": {
      "A": "Sama saiz",
      "B": "Berjumlah 180°",
      "C": "Berjumlah 90°",
      "D": "Berbeza mengikut panjang garis"
    },
    "correctAnswer": "A",
    "explanation": "Sudut bertentang bucu yang terbentuk daripada persilangan dua garis lurus adalah sama nilai nilainya.",
    "learningStandard": "SK 6.1 Ciri Sudut"
  },
  {
    "id": "m6-mat-t4-14",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Waktu di Mekah (UTC+3) adalah 5 jam di belakang Kuala Lumpur (UTC+8). Apabila jemaah haji di Mekah solat Zohor pada jam 1230, pukul berapakah di Kuala Lumpur?",
    "options": {
      "A": "Jam 1730 (5:30 petang)",
      "B": "Jam 0730 (7:30 pagi)",
      "C": "Jam 1630",
      "D": "Jam 1830"
    },
    "correctAnswer": "A",
    "explanation": "1230 + 5 jam = Jam 1730.",
    "learningStandard": "SK 4.1 Aplikasi Zon Waktu"
  },
  {
    "id": "m6-mat-t4-15",
    "year": 6,
    "subject": "Matematik",
    "topic": "Masa, Zon Waktu & Ruang",
    "difficulty": "Sederhana",
    "question": "Sebuah kolam renang mempunyai perimeter 60 meter. Jika lebarnya ialah 10 meter, cari panjang kolam renang itu.",
    "options": {
      "A": "20 meter",
      "B": "25 meter",
      "C": "15 meter",
      "D": "30 meter"
    },
    "correctAnswer": "A",
    "explanation": "Perimeter = 2 × (panjang + lebar) = 60. Maka panjang + lebar = 30. Panjang = 30 - 10 = 20 meter.",
    "learningStandard": "SK 6.3 Perimeter Masalah"
  },
  {
    "id": "m6-mat-t5-03",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Apakah maksud peristiwa \"Mustahil\" dalam kebolehjadian?",
    "options": {
      "A": "Peristiwa yang tidak mungkin berlaku langsung",
      "B": "Peristiwa yang pasti akan berlaku",
      "C": "Peristiwa yang ada peluang berlaku separuh",
      "D": "Peristiwa yang sukar diramal"
    },
    "correctAnswer": "A",
    "explanation": "Peristiwa mustahil mempunyai nilai kebolehjadian sifar (0), iaitu langsung tidak boleh berlaku.",
    "learningStandard": "SK 8.2 Kebolehjadian"
  },
  {
    "id": "m6-mat-t5-04",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Sebiji dadu adil dilambung. Kebolehjadian mendapat nombor 7 ialah:",
    "options": {
      "A": "Mustahil",
      "B": "Pasti",
      "C": "Sama kemungkinan",
      "D": "Besar kemungkinan"
    },
    "correctAnswer": "A",
    "explanation": "Dadu standard hanya mempunyai nombor 1 hingga 6, maka mendapat nombor 7 adalah mustahil.",
    "learningStandard": "SK 8.2 Kebolehjadian"
  },
  {
    "id": "m6-mat-t5-05",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Matahari terbit di sebelah timur esok pagi. Kebolehjadian peristiwa ini adalah:",
    "options": {
      "A": "Pasti",
      "B": "Mustahil",
      "C": "Kecil kemungkinan",
      "D": "Sama kemungkinan"
    },
    "correctAnswer": "A",
    "explanation": "Matahari terbit di timur adalah hukum alam yang pasti berlaku.",
    "learningStandard": "SK 8.2 Kebolehjadian"
  },
  {
    "id": "m6-mat-t5-06",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Sekeping syiling adil dilambung. Kebolehjadian mendapat bahagian \"gambar\" ialah:",
    "options": {
      "A": "Sama kemungkinan",
      "B": "Pasti",
      "C": "Mustahil",
      "D": "Kecil kemungkinan"
    },
    "correctAnswer": "A",
    "explanation": "Syiling mempunyai 2 muka sama peluang (gambar atau angka), maka ia sama kemungkinan (50-50).",
    "learningStandard": "SK 8.2 Kebolehjadian"
  },
  {
    "id": "m6-mat-t5-07",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Dalam sebuah kotak ada 9 biji bola merah dan 1 biji bola biru. Kebolehjadian mencabut bola merah ialah:",
    "options": {
      "A": "Besar kemungkinan",
      "B": "Kecil kemungkinan",
      "C": "Mustahil",
      "D": "Sama kemungkinan"
    },
    "correctAnswer": "A",
    "explanation": "Bilangan bola merah jauh lebih banyak (9/10), maka besar kemungkinan tercabut bola merah.",
    "learningStandard": "SK 8.2 Kebolehjadian"
  },
  {
    "id": "m6-mat-t5-08",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Diberi nisbah murid lelaki kepada murid perempuan di sebuah kelas ialah 3 : 4. Jika jumlah murid lelaki ialah 15 orang, berapakah bilangan murid perempuan?",
    "options": {
      "A": "20 orang",
      "B": "18 orang",
      "C": "24 orang",
      "D": "16 orang"
    },
    "correctAnswer": "A",
    "explanation": "3 bahagian = 15 -> 1 bahagian = 5. Murid perempuan = 4 bahagian × 5 = 20 orang.",
    "learningStandard": "SK 7.2 Nisbah"
  },
  {
    "id": "m6-mat-t5-09",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Nisbah harga buku A kepada buku B ialah 5 : 2. Beza harga kedua-dua buku itu ialah RM15. Berapakah harga buku A?",
    "options": {
      "A": "RM25",
      "B": "RM20",
      "C": "RM30",
      "D": "RM35"
    },
    "correctAnswer": "A",
    "explanation": "Beza bahagian = 5 - 2 = 3 bahagian = RM15 -> 1 bahagian = RM5. Harga buku A = 5 × RM5 = RM25.",
    "learningStandard": "SK 7.2 Aplikasi Nisbah"
  },
  {
    "id": "m6-mat-t5-10",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Titik K(2, 3) digerakkan 4 unit ke kanan dan 3 unit ke atas. Apakah koordinat baharu bagi titik K?",
    "options": {
      "A": "(6, 6)",
      "B": "(5, 6)",
      "C": "(6, 5)",
      "D": "(7, 6)"
    },
    "correctAnswer": "A",
    "explanation": "x baharu = 2 + 4 = 6. y baharu = 3 + 3 = 6. Koordinat baharu = (6, 6).",
    "learningStandard": "SK 7.1 Translasi Koordinat"
  },
  {
    "id": "m6-mat-t5-11",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Jarak mengufuk dari titik A(3, 8) ke titik B(9, 8) ialah:",
    "options": {
      "A": "6 unit",
      "B": "5 unit",
      "C": "9 unit",
      "D": "8 unit"
    },
    "correctAnswer": "A",
    "explanation": "Jarak mengufuk = 9 - 3 = 6 unit.",
    "learningStandard": "SK 7.1 Jarak Mengufuk"
  },
  {
    "id": "m6-mat-t5-12",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Sebuah kereta menggunakan 5 liter petrol untuk perjalanan sejauh 75 km. Berapakah liter petrol yang diperlukan untuk perjalanan sejauh 225 km?",
    "options": {
      "A": "15 liter",
      "B": "12 liter",
      "C": "18 liter",
      "D": "20 liter"
    },
    "correctAnswer": "A",
    "explanation": "Kadar = 75 ÷ 5 = 15 km/liter. Petrol diperlukan = 225 ÷ 15 = 15 liter.",
    "learningStandard": "SK 7.3 Kadaran"
  },
  {
    "id": "m6-mat-t5-13",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Gaji harian seorang pekerja bagi 6 jam bekerja ialah RM48. Berapakah gajinya jika dia bekerja selama 9 jam pada kadar yang sama?",
    "options": {
      "A": "RM72",
      "B": "RM64",
      "C": "RM80",
      "D": "RM70"
    },
    "correctAnswer": "A",
    "explanation": "Kadar sejam = RM48 ÷ 6 = RM8. Bagi 9 jam = 9 × RM8 = RM72.",
    "learningStandard": "SK 7.3 Kadaran Kaedah Unitari"
  },
  {
    "id": "m6-mat-t5-14",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Nisbah luas segi empat sama X kepada segi empat sama Y ialah 1 : 4. Jika luas segi empat sama X ialah 9 cm², apakah luas segi empat sama Y?",
    "options": {
      "A": "36 cm²",
      "B": "27 cm²",
      "C": "18 cm²",
      "D": "45 cm²"
    },
    "correctAnswer": "A",
    "explanation": "Luas Y = 4 × 9 = 36 cm².",
    "learningStandard": "SK 7.2 Nisbah Luas"
  },
  {
    "id": "m6-mat-t5-15",
    "year": 6,
    "subject": "Matematik",
    "topic": "Koordinat, Nisbah & Kebolehjadian",
    "difficulty": "Sederhana",
    "question": "Seekor ikan berenang keluar dari akuarium lalu terbang di udara seperti burung. Kebolehjadian situasi ini ialah:",
    "options": {
      "A": "Mustahil",
      "B": "Kecil kemungkinan",
      "C": "Sama kemungkinan",
      "D": "Pasti"
    },
    "correctAnswer": "A",
    "explanation": "Ikan akuarium tidak mempunyai organ adaptasi untuk terbang di udara, menjadikannya mustahil.",
    "learningStandard": "SK 8.2 Kebolehjadian Logik"
  }
];
