import { QuizQuestion } from '../types';

export const MATEMATIK_TAHUN_3_QUESTIONS: QuizQuestion[] = [
  {
    "id": "mat-t3-vis-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "difficulty": "Sederhana",
    "question": "Berdasarkan abakus 4-digit di atas, apakah nilai nombor yang diwakili?",
    "options": {
      "A": "3,524",
      "B": "4,523",
      "C": "3,024",
      "D": "2,534"
    },
    "correctAnswer": "A",
    "explanation": "Nilai tempat pada abakus: Ribu = 3, Ratus = 5 (manik atas aktif), Puluh = 2, Sa = 4. Nilai nombor ialah 3,524.",
    "learningStandard": "SP 1.1.2 Menentukan nilai nombor pada abakus 4 digit.",
    "diagram": {
      "title": "Rajah: Abakus 4 Digit",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 240 145\" width=\"220\" height=\"135\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"10\" y=\"10\" width=\"220\" height=\"110\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#78350F\" stroke-width=\"6\"/>\n    <line x1=\"10\" y1=\"50\" x2=\"230\" y2=\"50\" stroke=\"#78350F\" stroke-width=\"5\"/>\n    <line x1=\"35\" y1=\"20\" x2=\"35\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"3\"/><rect x=\"23\" y=\"26\" width=\"24\" height=\"12\" rx=\"3\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/><rect x=\"23\" y=\"54\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"23\" y=\"65\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"23\" y=\"76\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"23\" y=\"102\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><line x1=\"91.66666666666666\" y1=\"20\" x2=\"91.66666666666666\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"3\"/><rect x=\"79.66666666666666\" y=\"36\" width=\"24\" height=\"12\" rx=\"3\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/><rect x=\"79.66666666666666\" y=\"72\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"79.66666666666666\" y=\"82\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"79.66666666666666\" y=\"92\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"79.66666666666666\" y=\"102\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><line x1=\"148.33333333333331\" y1=\"20\" x2=\"148.33333333333331\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"3\"/><rect x=\"136.33333333333331\" y=\"26\" width=\"24\" height=\"12\" rx=\"3\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/><rect x=\"136.33333333333331\" y=\"54\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"136.33333333333331\" y=\"65\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"136.33333333333331\" y=\"92\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"136.33333333333331\" y=\"102\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><line x1=\"205\" y1=\"20\" x2=\"205\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"3\"/><rect x=\"193\" y=\"26\" width=\"24\" height=\"12\" rx=\"3\" fill=\"#D97706\" stroke=\"#78350F\" stroke-width=\"1.5\"/><rect x=\"193\" y=\"54\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"193\" y=\"65\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"193\" y=\"76\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/><rect x=\"193\" y=\"87\" width=\"24\" height=\"9\" rx=\"2\" fill=\"#2563EB\" stroke=\"#1E3A8A\" stroke-width=\"1.2\"/>\n    <text x=\"120\" y=\"138\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">Abakus mewakili: 3,524</text>\n  </svg>",
      "caption": "Manik atas bernilai 5 apabila digerakkan mendekati palang tengah."
    }
  },
  {
    "id": "m3-t1-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Nilai Tempat & Nilai Digit",
    "difficulty": "Mudah",
    "question": "Apakah nilai tempat bagi digit 8 dalam nombor 8,429?",
    "options": {
      "A": "Sa",
      "B": "Puluh",
      "C": "Ratus",
      "D": "Ribu"
    },
    "correctAnswer": "D",
    "explanation": "Digit 8 berada pada kedudukan ribu.",
    "learningStandard": "SK 1.1 Menamakan nombor hingga 10,000"
  },
  {
    "id": "m3-t1-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Nilai Tempat & Nilai Digit",
    "difficulty": "Mudah",
    "question": "Apakah nilai digit bagi angka 6 dalam nombor 3,615?",
    "options": {
      "A": "6",
      "B": "60",
      "C": "600",
      "D": "6,000"
    },
    "correctAnswer": "C",
    "explanation": "Angka 6 berada pada nilai tempat ratus, maka nilainya 600.",
    "learningStandard": "SK 1.1 Nilai digit nombor"
  },
  {
    "id": "m3-t1-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Cerakinan Nombor",
    "difficulty": "Mudah",
    "question": "Cerakinkan 7,042 mengikut nilai digit.",
    "options": {
      "A": "7,000 + 40 + 2",
      "B": "700 + 40 + 2",
      "C": "7,000 + 400 + 2",
      "D": "7,000 + 4 + 2"
    },
    "correctAnswer": "A",
    "explanation": "7,042 = 7,000 + 0 + 40 + 2.",
    "learningStandard": "SK 1.2 Mencerakinkan nombor"
  },
  {
    "id": "m3-t1-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Cerakinan Nilai Tempat",
    "difficulty": "Sederhana",
    "question": "Cerakinkan 9,518 mengikut nilai tempat.",
    "options": {
      "A": "9 ribu + 5 ratus + 1 puluh + 8 sa",
      "B": "9000 + 500 + 10 + 8",
      "C": "9 ratus + 5 puluh + 1 ribu + 8 sa",
      "D": "9 ribu + 5 puluh + 1 ratus + 8 sa"
    },
    "correctAnswer": "A",
    "explanation": "Cerakinan nilai tempat menyebut perkataan ribu, ratus, puluh dan sa.",
    "learningStandard": "SK 1.2 Cerakinan nilai tempat"
  },
  {
    "id": "m3-t1-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Perbandingan Nombor",
    "difficulty": "Mudah",
    "question": "Antara nombor berikut, yang manakah paling besar nilainya?",
    "options": {
      "A": "4,520",
      "B": "4,502",
      "C": "4,525",
      "D": "4,255"
    },
    "correctAnswer": "C",
    "explanation": "4,525 mempunyai nilai paling besar kerana digit sa adalah 5.",
    "learningStandard": "SK 1.3 Membanding nilai dua nombor"
  },
  {
    "id": "mat-t3-vis-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa dan Waktu",
    "difficulty": "Sederhana",
    "question": "Berdasarkan muka jam analog di atas, apakah waktu yang ditunjukkan?",
    "options": {
      "A": "Pukul 7:15",
      "B": "Pukul 7:45 (Lapan kurang suku)",
      "C": "Pukul 8:45",
      "D": "Pukul 7:30"
    },
    "correctAnswer": "B",
    "explanation": "Jarum jam menghampiri angka 8 dan jarum minit berada tepat pada angka 9 (45 minit), menunjukkan pukul 7:45.",
    "learningStandard": "SP 5.1.1 Menyatakan waktu dalam jam dan minit.",
    "diagram": {
      "title": "Rajah: Jam Analogi (7:45)",
      "type": "math_clock",
      "svgContent": "<svg viewBox=\"0 0 200 200\" width=\"180\" height=\"180\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle cx=\"100\" cy=\"100\" r=\"92\" fill=\"#FEF3C7\" stroke=\"#F59E0B\" stroke-width=\"5\"/>\n    <circle cx=\"100\" cy=\"100\" r=\"82\" fill=\"#FFFFFF\" stroke=\"#CBD5E1\" stroke-width=\"2\"/>\n    <text x=\"135.0\" y=\"43.4\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">1</text><text x=\"160.6\" y=\"69.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">2</text><text x=\"170.0\" y=\"104.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">3</text><text x=\"160.6\" y=\"139.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">4</text><text x=\"135.0\" y=\"164.6\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">5</text><text x=\"100.0\" y=\"174.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">6</text><text x=\"65.0\" y=\"164.6\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">7</text><text x=\"39.4\" y=\"139.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">8</text><text x=\"30.0\" y=\"104.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">9</text><text x=\"39.4\" y=\"69.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">10</text><text x=\"65.0\" y=\"43.4\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">11</text><text x=\"100.0\" y=\"34.0\" font-size=\"12\" font-family=\"sans-serif\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">12</text>\n    <!-- Hour Hand (Blue) -->\n    <line x1=\"100\" y1=\"100\" x2=\"68.3\" y2=\"124.4\" stroke=\"#2563EB\" stroke-width=\"6\" stroke-linecap=\"round\"/>\n    <!-- Minute Hand (Red) -->\n    <line x1=\"100\" y1=\"100\" x2=\"40.0\" y2=\"100.0\" stroke=\"#EF4444\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <!-- Center Pin -->\n    <circle cx=\"100\" cy=\"100\" r=\"6\" fill=\"#1E293B\"/>\n    <circle cx=\"100\" cy=\"100\" r=\"3\" fill=\"#FACC15\"/>\n    <text x=\"100\" y=\"145\" font-size=\"11\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"middle\">Pukul 7:45</text>\n  </svg>",
      "caption": "Jarum minit menunjuk ke angka 9 mewakili 45 minit."
    }
  },
  {
    "id": "m3-t1-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Susunan Tertib Naik",
    "difficulty": "Sederhana",
    "question": "Susun nombor berikut mengikut tertib menaik: 6,120, 6,012, 6,210, 6,021",
    "options": {
      "A": "6,012, 6,021, 6,120, 6,210",
      "B": "6,210, 6,120, 6,021, 6,012",
      "C": "6,021, 6,012, 6,120, 6,210",
      "D": "6,012, 6,120, 6,021, 6,210"
    },
    "correctAnswer": "A",
    "explanation": "Tertib menaik disusun daripada nilai terkecil hingga terbesar.",
    "learningStandard": "SK 1.3 Menyusun nombor"
  },
  {
    "id": "m3-t1-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Pembundaran Ratus Terdekat",
    "difficulty": "Sederhana",
    "question": "Bundarkan 5,348 kepada ratus terdekat.",
    "options": {
      "A": "5,300",
      "B": "5,350",
      "C": "5,400",
      "D": "5,000"
    },
    "correctAnswer": "A",
    "explanation": "Digit puluh ialah 4 (< 5), jadi digit ratus kekal 3 menjadi 5,300.",
    "learningStandard": "SK 1.6 Membundarkan nombor"
  },
  {
    "id": "m3-t1-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Pembundaran Ribu Terdekat",
    "difficulty": "Sederhana",
    "question": "Bundarkan 8,760 kepada ribu terdekat.",
    "options": {
      "A": "8,000",
      "B": "8,700",
      "C": "9,000",
      "D": "8,800"
    },
    "correctAnswer": "C",
    "explanation": "Digit ratus ialah 7 (≥ 5), tambah 1 pada ribu (8+1=9) menjadi 9,000.",
    "learningStandard": "SK 1.6 Membundarkan nombor"
  },
  {
    "id": "m3-t1-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Pola Nombor",
    "difficulty": "Mudah",
    "question": "Lengkapkan pola: 2,100, 2,200, 2,300, [ ? ], 2,500",
    "options": {
      "A": "2,350",
      "B": "2,400",
      "C": "2,450",
      "D": "2,310"
    },
    "correctAnswer": "B",
    "explanation": "Pola nombor bertambah seratus-seratus secara tertib menaik.",
    "learningStandard": "SK 1.5 Mengenal pasti pola nombor"
  },
  {
    "id": "m3-t1-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Pola Nombor Menurun",
    "difficulty": "Sederhana",
    "question": "Apakah nombor seterusnya bagi pola berikut: 7,850, 7,800, 7,750, [ ? ]",
    "options": {
      "A": "7,700",
      "B": "7,650",
      "C": "7,600",
      "D": "7,720"
    },
    "correctAnswer": "A",
    "explanation": "Pola nombor berkurang 50 secara tertib menurun. 7,750 - 50 = 7,700.",
    "learningStandard": "SK 1.5 Pola menurun"
  },
  {
    "id": "mat-t3-vis-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan Wajar",
    "difficulty": "Sederhana",
    "question": "Berdasarkan jalur pecahan di atas, apakah pecahan kawasan yang diwarnakan hijau?",
    "options": {
      "A": "3/8",
      "B": "4/8",
      "C": "5/8",
      "D": "6/8"
    },
    "correctAnswer": "C",
    "explanation": "Jalur pecahan dibahagikan kepada 8 bahagian sama besar dan 5 bahagian diwarnakan hijau, mewakili 5/8.",
    "learningStandard": "SP 3.1.3 Menyatakan pecahan wajar daripada gambar rajah.",
    "diagram": {
      "title": "Rajah: Jalur Pecahan Lapan Bahagian",
      "type": "math_fraction",
      "svgContent": "<svg viewBox=\"0 0 260 85\" width=\"250\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"8\" y=\"13\" width=\"244\" height=\"44\" rx=\"4\" fill=\"#E2E8F0\"/>\n    <rect x=\"10\" y=\"15\" width=\"30\" height=\"40\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"40\" y=\"15\" width=\"30\" height=\"40\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"70\" y=\"15\" width=\"30\" height=\"40\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"100\" y=\"15\" width=\"30\" height=\"40\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"130\" y=\"15\" width=\"30\" height=\"40\" fill=\"#10B981\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"160\" y=\"15\" width=\"30\" height=\"40\" fill=\"#FFFFFF\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"190\" y=\"15\" width=\"30\" height=\"40\" fill=\"#FFFFFF\" stroke=\"#1E293B\" stroke-width=\"2\"/><rect x=\"220\" y=\"15\" width=\"30\" height=\"40\" fill=\"#FFFFFF\" stroke=\"#1E293B\" stroke-width=\"2\"/>\n    <text x=\"130\" y=\"76\" font-size=\"12\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">5 daripada 8 petak berwarna</text>\n  </svg>",
      "caption": "Kira bilangan petak hijau berbanding jumlah 8 petak."
    }
  },
  {
    "id": "m3-t1-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Perkataan ke Angka",
    "difficulty": "Mudah",
    "question": "Tuliskan \"tujuh ribu empat puluh lapan\" dalam angka.",
    "options": {
      "A": "7,408",
      "B": "7,048",
      "C": "7,480",
      "D": "7,084"
    },
    "correctAnswer": "B",
    "explanation": "Tujuh ribu (7,000) dan empat puluh lapan (48) ditulis sebagai 7,048.",
    "learningStandard": "SK 1.1 Menulis nombor dalam angka"
  },
  {
    "id": "m3-t1-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Angka ke Perkataan",
    "difficulty": "Mudah",
    "question": "Nyatakan 6,305 dalam perkataan.",
    "options": {
      "A": "Enam ribu tiga puluh lima",
      "B": "Enam ribu tiga ratus lima",
      "C": "Enam ratus tiga puluh lima",
      "D": "Enam ribu tiga ratus lima puluh"
    },
    "correctAnswer": "B",
    "explanation": "6,305 dibaca sebagai enam ribu tiga ratus lima.",
    "learningStandard": "SK 1.1 Membaca nombor dalam perkataan"
  },
  {
    "id": "m3-t1-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Anggaran Kuantiti",
    "difficulty": "Sederhana",
    "question": "Balang A mengandungi 500 biji manik. Balang B dua kali lebih tinggi dan penuh. Anggarkan bilangan manik di balang B.",
    "options": {
      "A": "Lebih kurang 250",
      "B": "Lebih kurang 500",
      "C": "Lebih kurang 1,000",
      "D": "Lebih kurang 5,000"
    },
    "correctAnswer": "C",
    "explanation": "Dua kali ganda 500 ialah lebih kurang 1,000 biji manik.",
    "learningStandard": "SK 1.4 Membuat anggaran"
  },
  {
    "id": "m3-t1-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Nilai Antara Dua Nombor",
    "difficulty": "Sederhana",
    "question": "Nombor manakah yang terletak di antara 4,890 dengan 5,010?",
    "options": {
      "A": "4,850",
      "B": "4,950",
      "C": "5,020",
      "D": "5,100"
    },
    "correctAnswer": "B",
    "explanation": "4,950 berada di antara 4,890 dan 5,010.",
    "learningStandard": "SK 1.3 Perbandingan nombor"
  },
  {
    "id": "m3-t1-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Nombor hingga 10,000",
    "subtopic": "Penyelesaian Masalah KBAT",
    "difficulty": "Sukar",
    "question": "Sebuah kilang menghasilkan 4,320 bungkusan biskut pada hari Isnin dan 4,850 pada hari Selasa. Berapakah jumlah bungkusan yang dibundarkan kepada ribu terdekat?",
    "options": {
      "A": "9,000",
      "B": "8,000",
      "C": "10,000",
      "D": "7,000"
    },
    "correctAnswer": "A",
    "explanation": "4,320 + 4,850 = 9,170. Dibundarkan kepada ribu terdekat ialah 9,000.",
    "learningStandard": "SK 1.6 Penyelesaian masalah bundar"
  },
  {
    "id": "mat-t3-vis-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Bentuk dan Ruang",
    "difficulty": "Sederhana",
    "question": "Rujuk rajah segi empat tepat di atas. Berapakah perimeter (jumlah ukur keliling sisi luar) bagi segi empat tepat tersebut?",
    "options": {
      "A": "15 cm",
      "B": "25 cm",
      "C": "30 cm",
      "D": "50 cm"
    },
    "correctAnswer": "C",
    "explanation": "Perimeter = 2 × (Panjang + Lebar) = 2 × (10 cm + 5 cm) = 2 × 15 cm = 30 cm.",
    "learningStandard": "SP 6.3.1 Menentukan perimeter bentuk poligon asas.",
    "diagram": {
      "title": "Rajah: Segi Empat Tepat Berdimensi",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 240 140\" width=\"220\" height=\"130\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"30\" y=\"30\" width=\"160\" height=\"70\" rx=\"4\" fill=\"#FEF3C7\" stroke=\"#D97706\" stroke-width=\"3\"/>\n      <text x=\"110\" y=\"20\" font-size=\"12\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"middle\">Panjang = 10 cm</text>\n      <text x=\"200\" y=\"70\" font-size=\"12\" font-weight=\"bold\" fill=\"#92400E\" text-anchor=\"start\">Lebar = 5 cm</text>\n    </svg>",
      "caption": "Perimeter ialah hasil tambah kesemua 4 sisi luar: 10 + 5 + 10 + 5 = 30 cm."
    }
  },
  {
    "id": "m3-t2-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tambah Dua Nombor",
    "difficulty": "Mudah",
    "question": "Kira 2,450 + 1,320 =",
    "options": {
      "A": "3,770",
      "B": "3,750",
      "C": "3,870",
      "D": "3,670"
    },
    "correctAnswer": "A",
    "explanation": "2,450 + 1,320 = 3,770 tanpa mengumpul semula.",
    "learningStandard": "SK 2.1 Tambah sebarang dua nombor"
  },
  {
    "id": "m3-t2-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tambah Mengumpul Semula",
    "difficulty": "Sederhana",
    "question": "Cari hasil tambah 3,576 dan 2,685.",
    "options": {
      "A": "6,261",
      "B": "6,251",
      "C": "6,161",
      "D": "6,241"
    },
    "correctAnswer": "A",
    "explanation": "3,576 + 2,685 = 6,261 dengan mengumpul semula.",
    "learningStandard": "SK 2.1 Tambah dengan mengumpul semula"
  },
  {
    "id": "m3-t2-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tambah Tiga Nombor",
    "difficulty": "Sederhana",
    "question": "1,204 + 3,450 + 825 =",
    "options": {
      "A": "5,479",
      "B": "5,379",
      "C": "5,579",
      "D": "4,479"
    },
    "correctAnswer": "A",
    "explanation": "1,204 + 3,450 = 4,654. 4,654 + 825 = 5,479.",
    "learningStandard": "SK 2.1 Tambah hingga tiga nombor"
  },
  {
    "id": "m3-t2-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tolak Dua Nombor",
    "difficulty": "Mudah",
    "question": "Selesaikan 5,894 - 2,431 =",
    "options": {
      "A": "3,463",
      "B": "3,453",
      "C": "3,473",
      "D": "2,463"
    },
    "correctAnswer": "A",
    "explanation": "5,894 - 2,431 = 3,463.",
    "learningStandard": "SK 2.2 Tolak sebarang dua nombor"
  },
  {
    "id": "m3-t2-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tolak Mengumpul Semula",
    "difficulty": "Sederhana",
    "question": "Cari beza antara 7,340 dengan 3,582.",
    "options": {
      "A": "3,758",
      "B": "3,768",
      "C": "3,858",
      "D": "3,658"
    },
    "correctAnswer": "A",
    "explanation": "7,340 - 3,582 = 3,758.",
    "learningStandard": "SK 2.2 Tolak dengan mengumpul semula"
  },
  {
    "id": "mat-t3-vis-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang",
    "difficulty": "Sederhana",
    "question": "Berdasarkan rajah wang kertas di atas, berapakah jumlah keseluruhan wang tersebut?",
    "options": {
      "A": "RM 150",
      "B": "RM 170",
      "C": "RM 180",
      "D": "RM 200"
    },
    "correctAnswer": "B",
    "explanation": "1 keping RM100 + 1 keping RM50 + 1 keping RM20 = RM 100 + RM 50 + RM 20 = RM 170.",
    "learningStandard": "SP 4.1.1 Menggabungkan nilai wang hingga RM10,000.",
    "diagram": {
      "title": "Rajah: Gabungan Wang Kertas RM100, RM50, RM20",
      "type": "math_visual",
      "svgContent": "<svg viewBox=\"0 0 260 85\" width=\"260\" height=\"85\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"5\" y=\"5\" width=\"250\" height=\"75\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#CBD5E1\"/>\n    \n        <g transform=\"translate(15, 20)\">\n          <rect x=\"0\" y=\"0\" width=\"56\" height=\"34\" rx=\"4\" fill=\"#DDD6FE\" stroke=\"#7C3AED\" stroke-width=\"2\"/>\n          <circle cx=\"28\" cy=\"17\" r=\"9\" fill=\"#FFFFFF\" opacity=\"0.8\"/>\n          <text x=\"28\" y=\"21\" font-size=\"10\" font-weight=\"bold\" fill=\"#4C1D95\" text-anchor=\"middle\">RM100</text>\n        </g>\n      \n        <g transform=\"translate(75, 20)\">\n          <rect x=\"0\" y=\"0\" width=\"56\" height=\"34\" rx=\"4\" fill=\"#6EE7B7\" stroke=\"#059669\" stroke-width=\"2\"/>\n          <circle cx=\"28\" cy=\"17\" r=\"9\" fill=\"#FFFFFF\" opacity=\"0.8\"/>\n          <text x=\"28\" y=\"21\" font-size=\"10\" font-weight=\"bold\" fill=\"#064E3B\" text-anchor=\"middle\">RM50</text>\n        </g>\n      \n        <g transform=\"translate(135, 20)\">\n          <rect x=\"0\" y=\"0\" width=\"56\" height=\"34\" rx=\"4\" fill=\"#FDE047\" stroke=\"#CA8A04\" stroke-width=\"2\"/>\n          <circle cx=\"28\" cy=\"17\" r=\"9\" fill=\"#FFFFFF\" opacity=\"0.8\"/>\n          <text x=\"28\" y=\"21\" font-size=\"10\" font-weight=\"bold\" fill=\"#713F12\" text-anchor=\"middle\">RM20</text>\n        </g>\n      \n    <text x=\"130\" y=\"72\" font-size=\"11\" font-weight=\"bold\" fill=\"#0F172A\" text-anchor=\"middle\">1x RM100 + 1x RM50 + 1x RM20 = RM170</text>\n  </svg>",
      "caption": "Campurkan nilai setiap keping wang kertas."
    }
  },
  {
    "id": "m3-t2-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tolak Berturut-turut",
    "difficulty": "Sederhana",
    "question": "9,000 - 3,450 - 1,200 =",
    "options": {
      "A": "4,350",
      "B": "4,250",
      "C": "4,450",
      "D": "5,350"
    },
    "correctAnswer": "A",
    "explanation": "9,000 - 3,450 = 5,550. 5,550 - 1,200 = 4,350.",
    "learningStandard": "SK 2.2 Tolak berturut-turut"
  },
  {
    "id": "m3-t2-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Mencari Nilai Anu Tambah",
    "difficulty": "Sederhana",
    "question": "Cari nilai P: P + 1,450 = 4,800",
    "options": {
      "A": "3,350",
      "B": "3,450",
      "C": "3,250",
      "D": "6,250"
    },
    "correctAnswer": "A",
    "explanation": "P = 4,800 - 1,450 = 3,350.",
    "learningStandard": "SK 2.6 Penggunaan anu"
  },
  {
    "id": "m3-t2-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Mencari Nilai Anu Tolak",
    "difficulty": "Sederhana",
    "question": "Cari nilai Q: 6,500 - Q = 4,200",
    "options": {
      "A": "2,300",
      "B": "2,400",
      "C": "1,300",
      "D": "10,700"
    },
    "correctAnswer": "A",
    "explanation": "Q = 6,500 - 4,200 = 2,300.",
    "learningStandard": "SK 2.6 Penggunaan anu"
  },
  {
    "id": "m3-t2-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tambah Masalah Harian",
    "difficulty": "Mudah",
    "question": "Di perpustakaan ada 2,150 buah buku fiksyen dan 1,820 buku bukan fiksyen. Berapakah jumlah buku?",
    "options": {
      "A": "3,970",
      "B": "3,870",
      "C": "3,950",
      "D": "4,070"
    },
    "correctAnswer": "A",
    "explanation": "2,150 + 1,820 = 3,970 buah buku.",
    "learningStandard": "SK 2.7 Menyelesaikan masalah"
  },
  {
    "id": "m3-t2-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Tolak Masalah Harian",
    "difficulty": "Mudah",
    "question": "Pak Ali menuai 4,600 biji kelapa. Sebanyak 2,350 biji telah dijual. Berapakah baki kelapa?",
    "options": {
      "A": "2,250",
      "B": "2,150",
      "C": "2,350",
      "D": "2,200"
    },
    "correctAnswer": "A",
    "explanation": "4,600 - 2,350 = 2,250 biji kelapa.",
    "learningStandard": "SK 2.7 Menyelesaikan masalah"
  },
  {
    "id": "m3-t2-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Kombinasi Tambah Tolak",
    "difficulty": "Sederhana",
    "question": "Kira: 3,200 + 1,500 - 800 =",
    "options": {
      "A": "3,900",
      "B": "3,800",
      "C": "4,000",
      "D": "4,100"
    },
    "correctAnswer": "A",
    "explanation": "3,200 + 1,500 = 4,700. 4,700 - 800 = 3,900.",
    "learningStandard": "SK 2.3 Operasi bergabung tambah dan tolak"
  },
  {
    "id": "m3-t2-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Penyelesaian Masalah KBAT",
    "difficulty": "Sukar",
    "question": "Dewan A memuatkan 1,450 orang. Dewan B memuatkan 350 orang lebih daripada Dewan A. Berapakah jumlah muatan kedua-dua dewan?",
    "options": {
      "A": "3,250",
      "B": "1,800",
      "C": "3,150",
      "D": "3,300"
    },
    "correctAnswer": "A",
    "explanation": "Dewan B = 1,450 + 350 = 1,800. Jumlah kedua-dua dewan = 1,450 + 1,800 = 3,250 orang.",
    "learningStandard": "SK 2.7 Penyelesaian masalah KBAT"
  },
  {
    "id": "m3-t2-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Penolakan dengan Angka Sifar",
    "difficulty": "Sederhana",
    "question": "5,000 - 2,367 =",
    "options": {
      "A": "2,633",
      "B": "2,733",
      "C": "3,633",
      "D": "2,643"
    },
    "correctAnswer": "A",
    "explanation": "5,000 - 2,367 = 2,633.",
    "learningStandard": "SK 2.2 Tolak melibatkan sifar"
  },
  {
    "id": "m3-t2-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Menganggar Hasil Tambah",
    "difficulty": "Sederhana",
    "question": "Anggarkan hasil tambah 2,980 dan 4,020 dengan membundarkan kepada ribu terdekat.",
    "options": {
      "A": "7,000",
      "B": "6,000",
      "C": "8,000",
      "D": "6,500"
    },
    "correctAnswer": "A",
    "explanation": "2,980 dibundarkan jadi 3,000. 4,020 dibundarkan jadi 4,000. 3,000 + 4,000 = 7,000.",
    "learningStandard": "SK 2.1 Menganggar hasil tambah"
  },
  {
    "id": "m3-t2-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Asas Tambah & Tolak",
    "subtopic": "Soalan Penyelesaian Berperingkat",
    "difficulty": "Sukar",
    "question": "Sebuah lori membawa 8,500 botol susu. Lori itu menurunkan 3,200 botol di pasar raya X dan 2,750 di pasar raya Y. Berapakah botol susu yang masih ada di dalam lori?",
    "options": {
      "A": "2,550",
      "B": "2,450",
      "C": "2,650",
      "D": "3,550"
    },
    "correctAnswer": "A",
    "explanation": "8,500 - (3,200 + 2,750) = 8,500 - 5,950 = 2,550 botol susu.",
    "learningStandard": "SK 2.7 Penyelesaian masalah harian"
  },
  {
    "id": "m3-t3-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Sifir Asas Darab",
    "difficulty": "Mudah",
    "question": "Kira 7 × 8 =",
    "options": {
      "A": "54",
      "B": "56",
      "C": "58",
      "D": "64"
    },
    "correctAnswer": "B",
    "explanation": "7 × 8 = 56 mengikut fakta asas sifir 7 dan 8.",
    "learningStandard": "SK 2.3 Mendarab dalam lingkungan sifir asas"
  },
  {
    "id": "m3-t3-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Darab Nombor Dua Digit",
    "difficulty": "Mudah",
    "question": "Kira 42 × 3 =",
    "options": {
      "A": "126",
      "B": "124",
      "C": "128",
      "D": "136"
    },
    "correctAnswer": "A",
    "explanation": "40 × 3 = 120, 2 × 3 = 6. 120 + 6 = 126.",
    "learningStandard": "SK 2.3 Mendarab nombor dua digit dengan satu digit"
  },
  {
    "id": "m3-t3-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Darab dengan 10, 100, 1000",
    "difficulty": "Mudah",
    "question": "58 × 100 =",
    "options": {
      "A": "580",
      "B": "5,800",
      "C": "58,000",
      "D": "508"
    },
    "correctAnswer": "B",
    "explanation": "Mendarab dengan 100 menambah dua sifar di hujung nombor: 5,800.",
    "learningStandard": "SK 2.3 Mendarab dengan 100"
  },
  {
    "id": "m3-t3-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Darab Tiga Digit dengan Satu Digit",
    "difficulty": "Sederhana",
    "question": "235 × 4 =",
    "options": {
      "A": "940",
      "B": "920",
      "C": "930",
      "D": "840"
    },
    "correctAnswer": "A",
    "explanation": "235 × 4 = 940.",
    "learningStandard": "SK 2.3 Mendarab hingga tiga digit"
  },
  {
    "id": "m3-t3-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi Sifir Asas",
    "difficulty": "Mudah",
    "question": "Kira 63 ÷ 7 =",
    "options": {
      "A": "8",
      "B": "9",
      "C": "7",
      "D": "6"
    },
    "correctAnswer": "B",
    "explanation": "Fakta asas bahagi: 9 × 7 = 63, maka 63 ÷ 7 = 9.",
    "learningStandard": "SK 2.4 Membahagi dalam lingkungan sifir"
  },
  {
    "id": "m3-t3-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi Dua Digit",
    "difficulty": "Mudah",
    "question": "84 ÷ 4 =",
    "options": {
      "A": "21",
      "B": "22",
      "C": "24",
      "D": "20"
    },
    "correctAnswer": "A",
    "explanation": "80 ÷ 4 = 20, 4 ÷ 4 = 1. 20 + 1 = 21.",
    "learningStandard": "SK 2.4 Membahagi sebarang nombor"
  },
  {
    "id": "m3-t3-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi Tiga Digit",
    "difficulty": "Sederhana",
    "question": "456 ÷ 3 =",
    "options": {
      "A": "152",
      "B": "151",
      "C": "153",
      "D": "142"
    },
    "correctAnswer": "A",
    "explanation": "456 ÷ 3 = 152.",
    "learningStandard": "SK 2.4 Membahagi tiga digit dengan satu digit"
  },
  {
    "id": "m3-t3-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi Berbaki",
    "difficulty": "Sederhana",
    "question": "Apakah baki bagi 79 ÷ 6?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "5"
    },
    "correctAnswer": "A",
    "explanation": "79 ÷ 6 = 13 baki 1 (kerana 13 × 6 = 78).",
    "learningStandard": "SK 2.4 Pembahagian melibatkan baki"
  },
  {
    "id": "m3-t3-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi dengan 10 dan 100",
    "difficulty": "Mudah",
    "question": "7,200 ÷ 100 =",
    "options": {
      "A": "72",
      "B": "720",
      "C": "7",
      "D": "702"
    },
    "correctAnswer": "A",
    "explanation": "Membahagi dengan 100 memotong dua digit sifar: 72.",
    "learningStandard": "SK 2.4 Membahagi dengan 100"
  },
  {
    "id": "m3-t3-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Masalah Harian Darab",
    "difficulty": "Mudah",
    "question": "Sebuah kotak ada 24 batang pensel. Berapakah bilangan pensel dalam 6 buah kotak yang sama?",
    "options": {
      "A": "144",
      "B": "124",
      "C": "134",
      "D": "154"
    },
    "correctAnswer": "A",
    "explanation": "24 × 6 = 144 batang pensel.",
    "learningStandard": "SK 2.7 Menyelesaikan masalah darab"
  },
  {
    "id": "m3-t3-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Masalah Harian Bahagi",
    "difficulty": "Mudah",
    "question": "Cikgu Siti mengagihkan 180 keping biskut sama banyak kepada 9 orang murid. Berapakah keping biskut setiap murid dapat?",
    "options": {
      "A": "20",
      "B": "18",
      "C": "25",
      "D": "15"
    },
    "correctAnswer": "A",
    "explanation": "180 ÷ 9 = 20 keping biskut.",
    "learningStandard": "SK 2.7 Menyelesaikan masalah bahagi"
  },
  {
    "id": "m3-t3-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Mencari Anu Darab",
    "difficulty": "Sederhana",
    "question": "Cari nilai K: K × 8 = 72",
    "options": {
      "A": "8",
      "B": "9",
      "C": "7",
      "D": "6"
    },
    "correctAnswer": "B",
    "explanation": "K = 72 ÷ 8 = 9.",
    "learningStandard": "SK 2.6 Penggunaan anu dalam darab"
  },
  {
    "id": "m3-t3-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Darab Tiga Digit Mengumpul Semula",
    "difficulty": "Sederhana",
    "question": "Kira 368 × 5 =",
    "options": {
      "A": "1,840",
      "B": "1,820",
      "C": "1,740",
      "D": "1,850"
    },
    "correctAnswer": "A",
    "explanation": "368 × 5 = 1,840.",
    "learningStandard": "SK 2.3 Mendarab dengan mengumpul semula"
  },
  {
    "id": "m3-t3-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Bahagi Ribu dengan Satu Digit",
    "difficulty": "Sederhana",
    "question": "2,408 ÷ 4 =",
    "options": {
      "A": "602",
      "B": "620",
      "C": "62",
      "D": "608"
    },
    "correctAnswer": "A",
    "explanation": "2,408 ÷ 4 = 602.",
    "learningStandard": "SK 2.4 Membahagi nombor hingga 4 digit"
  },
  {
    "id": "m3-t3-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Operasi Darab & Bahagi",
    "subtopic": "Penyelesaian Masalah KBAT",
    "difficulty": "Sukar",
    "question": "Pak Samad menjual 9 bakul buah durian. Setiap bakul mengandungi 15 biji durian. Sebanyak 8 biji durian telah rosak. Berapakah biji durian yang elok?",
    "options": {
      "A": "127",
      "B": "135",
      "C": "125",
      "D": "130"
    },
    "correctAnswer": "A",
    "explanation": "Jumlah durian = 9 × 15 = 135. Durian yang elok = 135 - 8 = 127 biji.",
    "learningStandard": "SK 2.7 Operasi bergabung darab dan tolak"
  },
  {
    "id": "m3-t4-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pecahan Wajar",
    "difficulty": "Mudah",
    "question": "Antara pecahan berikut, yang manakah merupakan pecahan wajar?",
    "options": {
      "A": "3/4",
      "B": "5/3",
      "C": "7/2",
      "D": "4/4"
    },
    "correctAnswer": "A",
    "explanation": "Pecahan wajar mempunyai pengangka yang lebih kecil daripada penyebut (3 < 4).",
    "learningStandard": "SK 3.1 Mengenal pecahan wajar"
  },
  {
    "id": "m3-t4-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pecahan Setara",
    "difficulty": "Mudah",
    "question": "Pecahan manakah yang setara dengan 1/2?",
    "options": {
      "A": "2/4",
      "B": "2/3",
      "C": "1/4",
      "D": "3/5"
    },
    "correctAnswer": "A",
    "explanation": "1/2 = (1×2)/(2×2) = 2/4.",
    "learningStandard": "SK 3.1 Menyatakan pecahan setara"
  },
  {
    "id": "m3-t4-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Pecahan Termudah",
    "difficulty": "Sederhana",
    "question": "Permudahkan pecahan 4/8 kepada bentuk termudah.",
    "options": {
      "A": "1/2",
      "B": "2/4",
      "C": "1/4",
      "D": "2/3"
    },
    "correctAnswer": "A",
    "explanation": "Bahagikan pengangka dan penyebut dengan 4: 4÷4 / 8÷4 = 1/2.",
    "learningStandard": "SK 3.1 Menukar pecahan kepada bentuk termudah"
  },
  {
    "id": "m3-t4-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Tambah Pecahan Sama Penyebut",
    "difficulty": "Mudah",
    "question": "Kira 2/7 + 3/7 =",
    "options": {
      "A": "5/7",
      "B": "5/14",
      "C": "1/7",
      "D": "6/7"
    },
    "correctAnswer": "A",
    "explanation": "Penyebut sama, jumlahkan pengangka: (2+3)/7 = 5/7.",
    "learningStandard": "SK 3.1 Menambah dua pecahan wajar"
  },
  {
    "id": "m3-t4-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Tolak Pecahan Sama Penyebut",
    "difficulty": "Mudah",
    "question": "Kira 6/9 - 2/9 =",
    "options": {
      "A": "4/9",
      "B": "4/0",
      "C": "8/9",
      "D": "3/9"
    },
    "correctAnswer": "A",
    "explanation": "6/9 - 2/9 = 4/9.",
    "learningStandard": "SK 3.1 Menolak pecahan wajar"
  },
  {
    "id": "m3-t4-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Mengenal Perpuluhan",
    "difficulty": "Mudah",
    "question": "Tukarkan pecahan 3/10 kepada perpuluhan.",
    "options": {
      "A": "0.3",
      "B": "0.03",
      "C": "3.0",
      "D": "0.33"
    },
    "correctAnswer": "A",
    "explanation": "3/10 ditulis sebagai 0.3 dalam bentuk perpuluhan.",
    "learningStandard": "SK 3.2 Mengenal perpuluhan"
  },
  {
    "id": "m3-t4-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Perpuluhan Perseratus",
    "difficulty": "Mudah",
    "question": "Tukarkan 45/100 kepada perpuluhan.",
    "options": {
      "A": "0.45",
      "B": "4.5",
      "C": "0.045",
      "D": "45.0"
    },
    "correctAnswer": "A",
    "explanation": "45 perseratus ditulis sebagai 0.45.",
    "learningStandard": "SK 3.2 Menukar pecahan perseratus kepada perpuluhan"
  },
  {
    "id": "m3-t4-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Banding Nilai Perpuluhan",
    "difficulty": "Sederhana",
    "question": "Antara nombor perpuluhan berikut, yang manakah paling besar nilainya?",
    "options": {
      "A": "0.7",
      "B": "0.65",
      "C": "0.09",
      "D": "0.58"
    },
    "correctAnswer": "A",
    "explanation": "0.7 (sama dengan 0.70) adalah lebih besar daripada 0.65, 0.58 dan 0.09.",
    "learningStandard": "SK 3.2 Membanding nilai perpuluhan"
  },
  {
    "id": "m3-t4-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Tambah Perpuluhan",
    "difficulty": "Sederhana",
    "question": "0.4 + 0.35 =",
    "options": {
      "A": "0.75",
      "B": "0.39",
      "C": "0.79",
      "D": "0.45"
    },
    "correctAnswer": "A",
    "explanation": "0.40 + 0.35 = 0.75.",
    "learningStandard": "SK 3.2 Menambah dua nombor perpuluhan"
  },
  {
    "id": "m3-t4-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Tolak Perpuluhan",
    "difficulty": "Sederhana",
    "question": "0.85 - 0.32 =",
    "options": {
      "A": "0.53",
      "B": "0.52",
      "C": "0.43",
      "D": "0.63"
    },
    "correctAnswer": "A",
    "explanation": "0.85 - 0.32 = 0.53.",
    "learningStandard": "SK 3.2 Menolak nombor perpuluhan"
  },
  {
    "id": "m3-t4-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Mengenal Peratus",
    "difficulty": "Mudah",
    "question": "Tukarkan 25/100 kepada peratus.",
    "options": {
      "A": "25%",
      "B": "2.5%",
      "C": "250%",
      "D": "0.25%"
    },
    "correctAnswer": "A",
    "explanation": "Pecahan perseratus 25/100 ditulis sebagai 25%.",
    "learningStandard": "SK 3.3 Mengenal peratus"
  },
  {
    "id": "m3-t4-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Simbol Peratus",
    "difficulty": "Mudah",
    "question": "Apakah nama bagi simbol \"%\"?",
    "options": {
      "A": "Peratus",
      "B": "Perpuluhan",
      "C": "Pecahan",
      "D": "Nisbah"
    },
    "correctAnswer": "A",
    "explanation": "Simbol % dinamakan peratus (perseratus).",
    "learningStandard": "SK 3.3 Mengenal simbol peratus"
  },
  {
    "id": "m3-t4-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Peratus ke Pecahan",
    "difficulty": "Sederhana",
    "question": "Tuliskan 60% dalam bentuk pecahan termudah.",
    "options": {
      "A": "3/5",
      "B": "6/10",
      "C": "60/100",
      "D": "1/2"
    },
    "correctAnswer": "A",
    "explanation": "60% = 60/100. Permudahkan dengan bahagi 20: 3/5.",
    "learningStandard": "SK 3.3 Menukar peratus kepada pecahan"
  },
  {
    "id": "m3-t4-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Masalah Pecahan",
    "difficulty": "Sederhana",
    "question": "Ibu memotong sebiji kek kepada 8 bahagian sama besar. Amin makan 3 bahagian. Berapakah pecahan kek yang tinggal?",
    "options": {
      "A": "5/8",
      "B": "3/8",
      "C": "4/8",
      "D": "2/8"
    },
    "correctAnswer": "A",
    "explanation": "Kek penuh = 8/8. Baki kek = 8/8 - 3/8 = 5/8.",
    "learningStandard": "SK 3.4 Menyelesaikan masalah pecahan"
  },
  {
    "id": "m3-t4-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Pecahan, Perpuluhan & Peratus",
    "subtopic": "Masalah KBAT Peratus",
    "difficulty": "Sukar",
    "question": "Dalam satu ujian terdapat 100 soalan. Sarah menjawab 85 soalan dengan betul. Berapakah peratus soalan yang salah dijawab?",
    "options": {
      "A": "15%",
      "B": "85%",
      "C": "25%",
      "D": "10%"
    },
    "correctAnswer": "A",
    "explanation": "Bilangan soalan salah = 100 - 85 = 15. Dalam peratus = 15%.",
    "learningStandard": "SK 3.4 Menyelesaikan masalah peratus"
  },
  {
    "id": "m3-t5-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Mengenal Nilai Wang",
    "difficulty": "Mudah",
    "question": "Nilai bagi sekeping wang kertas RM100 dan sekeping RM50 ialah:",
    "options": {
      "A": "RM150",
      "B": "RM105",
      "C": "RM15",
      "D": "RM200"
    },
    "correctAnswer": "A",
    "explanation": "RM100 + RM50 = RM150.",
    "learningStandard": "SK 4.1 Menamakan nilai wang"
  },
  {
    "id": "m3-t5-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Tambah Wang",
    "difficulty": "Mudah",
    "question": "RM2,350 + RM1,420 =",
    "options": {
      "A": "RM3,770",
      "B": "RM3,750",
      "C": "RM3,670",
      "D": "RM3,870"
    },
    "correctAnswer": "A",
    "explanation": "RM2,350 + RM1,420 = RM3,770.",
    "learningStandard": "SK 4.2 Menambah wang"
  },
  {
    "id": "m3-t5-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Tambah Wang dengan Sen",
    "difficulty": "Sederhana",
    "question": "RM450.50 + RM218.70 =",
    "options": {
      "A": "RM669.20",
      "B": "RM668.20",
      "C": "RM669.10",
      "D": "RM670.20"
    },
    "correctAnswer": "A",
    "explanation": "RM450.50 + RM218.70 = RM669.20.",
    "learningStandard": "SK 4.2 Menambah wang dengan sen"
  },
  {
    "id": "m3-t5-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Tolak Wang",
    "difficulty": "Mudah",
    "question": "RM5,800 - RM2,300 =",
    "options": {
      "A": "RM3,500",
      "B": "RM3,400",
      "C": "RM3,600",
      "D": "RM2,500"
    },
    "correctAnswer": "A",
    "explanation": "RM5,800 - RM2,300 = RM3,500.",
    "learningStandard": "SK 4.3 Menolak wang"
  },
  {
    "id": "m3-t5-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Tolak Wang Berperingkat",
    "difficulty": "Sederhana",
    "question": "RM8,000 - RM3,450 - RM1,200 =",
    "options": {
      "A": "RM3,350",
      "B": "RM3,450",
      "C": "RM4,350",
      "D": "RM3,250"
    },
    "correctAnswer": "A",
    "explanation": "RM8,000 - RM3,450 = RM4,550. RM4,550 - RM1,200 = RM3,350.",
    "learningStandard": "SK 4.3 Menolak hingga tiga nilai wang"
  },
  {
    "id": "m3-t5-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Darab Wang",
    "difficulty": "Mudah",
    "question": "RM45 × 6 =",
    "options": {
      "A": "RM270",
      "B": "RM240",
      "C": "RM260",
      "D": "RM280"
    },
    "correctAnswer": "A",
    "explanation": "RM45 × 6 = RM270.",
    "learningStandard": "SK 4.4 Mendarab wang"
  },
  {
    "id": "m3-t5-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Darab Wang dengan 10 dan 100",
    "difficulty": "Mudah",
    "question": "RM68 × 100 =",
    "options": {
      "A": "RM6,800",
      "B": "RM680",
      "C": "RM68,000",
      "D": "RM608"
    },
    "correctAnswer": "A",
    "explanation": "RM68 × 100 = RM6,800.",
    "learningStandard": "SK 4.4 Mendarab wang dengan 100"
  },
  {
    "id": "m3-t5-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Bahagi Wang",
    "difficulty": "Mudah",
    "question": "RM360 ÷ 4 =",
    "options": {
      "A": "RM90",
      "B": "RM80",
      "C": "RM95",
      "D": "RM70"
    },
    "correctAnswer": "A",
    "explanation": "RM360 ÷ 4 = RM90.",
    "learningStandard": "SK 4.5 Membahagi wang"
  },
  {
    "id": "m3-t5-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Bahagi Wang dengan 100",
    "difficulty": "Mudah",
    "question": "RM4,500 ÷ 100 =",
    "options": {
      "A": "RM45",
      "B": "RM450",
      "C": "RM4.50",
      "D": "RM4500"
    },
    "correctAnswer": "A",
    "explanation": "RM4,500 ÷ 100 = RM45.",
    "learningStandard": "SK 4.5 Membahagi wang dengan 100"
  },
  {
    "id": "m3-t5-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Pengurusan Wang Simpanan",
    "difficulty": "Mudah",
    "question": "Mengapakah kita digalakkan menabung wang simpanan di bank?",
    "options": {
      "A": "Untuk kegunaan masa hadapan dan kecemasan",
      "B": "Supaya wang cepat habis dibelanjakan",
      "C": "Untuk membeli barang mewah semata-mata",
      "D": "Kerana tiada tempat menyimpan di rumah"
    },
    "correctAnswer": "A",
    "explanation": "Menabung menjamin simpanan selamat bagi masa depan dan kecemasan.",
    "learningStandard": "SK 4.7 Pengurusan kewangan berhemah"
  },
  {
    "id": "m3-t5-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Keperluan vs Kehendak",
    "difficulty": "Mudah",
    "question": "Antara berikut, yang manakah merupakan \"keperluan asas\"?",
    "options": {
      "A": "Makanan berkhasiat",
      "B": "Alat permainan video",
      "C": "Kasut berjenama mahal",
      "D": "Jam tangan pintar"
    },
    "correctAnswer": "A",
    "explanation": "Makanan berkhasiat ialah keperluan asas hidup manusia.",
    "learningStandard": "SK 4.7 Keperluan dan kehendak"
  },
  {
    "id": "m3-t5-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Mata Wang Negara ASEAN",
    "difficulty": "Sederhana",
    "question": "Apakah mata wang rasmi bagi negara Singapura?",
    "options": {
      "A": "Dolar Singapura",
      "B": "Rupiah",
      "C": "Baht",
      "D": "Peso"
    },
    "correctAnswer": "A",
    "explanation": "Singapura menggunakan mata wang Dolar Singapura (SGD).",
    "learningStandard": "SK 4.8 Mengenal mata wang negara ASEAN"
  },
  {
    "id": "m3-t5-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Mata Wang Negara Thailand",
    "difficulty": "Sederhana",
    "question": "Apakah mata wang bagi negara jiran Thailand?",
    "options": {
      "A": "Baht",
      "B": "Ringgit",
      "C": "Dong",
      "D": "Kyat"
    },
    "correctAnswer": "A",
    "explanation": "Mata wang rasmi Thailand ialah Baht.",
    "learningStandard": "SK 4.8 Mengenal mata wang serantau"
  },
  {
    "id": "m3-t5-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Masalah Kira Baki Wang",
    "difficulty": "Sederhana",
    "question": "Farid membeli sebuah beg berharga RM78. Dia membayar dengan sekeping wang kertas RM100. Berapakah baki wangnya?",
    "options": {
      "A": "RM22",
      "B": "RM32",
      "C": "RM28",
      "D": "RM12"
    },
    "correctAnswer": "A",
    "explanation": "Baki wang = RM100 - RM78 = RM22.",
    "learningStandard": "SK 4.6 Penyelesaian masalah wang"
  },
  {
    "id": "m3-t5-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Wang hingga RM10,000",
    "subtopic": "Penyelesaian Masalah KBAT",
    "difficulty": "Sukar",
    "question": "Danial mempunyai wang sebanyak RM3,500. Dia membeli komputer riba berharga RM2,199 dan sebuah pencetak berharga RM350. Berapakah baki wang Danial?",
    "options": {
      "A": "RM951",
      "B": "RM961",
      "C": "RM1,051",
      "D": "RM851"
    },
    "correctAnswer": "A",
    "explanation": "Jumlah belanja = RM2,199 + RM350 = RM2,549. Baki wang = RM3,500 - RM2,549 = RM951.",
    "learningStandard": "SK 4.6 Penyelesaian masalah gabungan"
  },
  {
    "id": "m3-t6-01",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Perkaitan Jam dan Minit",
    "difficulty": "Mudah",
    "question": "1 jam bersamaan dengan berapa minit?",
    "options": {
      "A": "60 minit",
      "B": "100 minit",
      "C": "30 minit",
      "D": "24 minit"
    },
    "correctAnswer": "A",
    "explanation": "1 jam = 60 minit.",
    "learningStandard": "SK 5.1 Perkaitan masa"
  },
  {
    "id": "m3-t6-02",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Perkaitan Hari dan Jam",
    "difficulty": "Mudah",
    "question": "Berapakah bilangan jam dalam 1 hari?",
    "options": {
      "A": "24 jam",
      "B": "12 jam",
      "C": "60 jam",
      "D": "48 jam"
    },
    "correctAnswer": "A",
    "explanation": "Satu hari mempunyai 24 jam.",
    "learningStandard": "SK 5.1 Perkaitan hari dan jam"
  },
  {
    "id": "m3-t6-03",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Perkaitan Minggu dan Hari",
    "difficulty": "Mudah",
    "question": "Berapakah hari dalam 3 minggu?",
    "options": {
      "A": "21 hari",
      "B": "14 hari",
      "C": "28 hari",
      "D": "18 hari"
    },
    "correctAnswer": "A",
    "explanation": "1 minggu = 7 hari. 3 minggu = 3 × 7 = 21 hari.",
    "learningStandard": "SK 5.1 Perkaitan minggu dan hari"
  },
  {
    "id": "m3-t6-04",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Perkaitan Tahun dan Bulan",
    "difficulty": "Mudah",
    "question": "1 tahun mengandungi berapa bulan?",
    "options": {
      "A": "12 bulan",
      "B": "10 bulan",
      "C": "14 bulan",
      "D": "24 bulan"
    },
    "correctAnswer": "A",
    "explanation": "Satu tahun mempunyai 12 bulan.",
    "learningStandard": "SK 5.1 Perkaitan tahun dan bulan"
  },
  {
    "id": "m3-t6-05",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Tambah Masa",
    "difficulty": "Sederhana",
    "question": "2 jam 25 minit + 1 jam 15 minit =",
    "options": {
      "A": "3 jam 40 minit",
      "B": "3 jam 30 minit",
      "C": "4 jam 40 minit",
      "D": "3 jam 50 minit"
    },
    "correctAnswer": "A",
    "explanation": "(2+1) jam + (25+15) minit = 3 jam 40 minit.",
    "learningStandard": "SK 5.2 Operasi asas masa"
  },
  {
    "id": "m3-t6-06",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Tolak Masa",
    "difficulty": "Sederhana",
    "question": "5 jam 45 minit - 2 jam 20 minit =",
    "options": {
      "A": "3 jam 25 minit",
      "B": "3 jam 15 minit",
      "C": "2 jam 25 minit",
      "D": "3 jam 35 minit"
    },
    "correctAnswer": "A",
    "explanation": "(5-2) jam + (45-20) minit = 3 jam 25 minit.",
    "learningStandard": "SK 5.2 Operasi asas masa"
  },
  {
    "id": "m3-t6-07",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Ukuran Panjang cm ke m",
    "difficulty": "Mudah",
    "question": "1 meter (m) bersamaan dengan berapa sentimeter (cm)?",
    "options": {
      "A": "100 cm",
      "B": "10 cm",
      "C": "1,000 cm",
      "D": "1 cm"
    },
    "correctAnswer": "A",
    "explanation": "1 m = 100 cm.",
    "learningStandard": "SK 6.1 Perkaitan unit panjang"
  },
  {
    "id": "m3-t6-08",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Tukar Unit Panjang",
    "difficulty": "Mudah",
    "question": "Tukarkan 4 m kepada cm.",
    "options": {
      "A": "400 cm",
      "B": "40 cm",
      "C": "4,000 cm",
      "D": "44 cm"
    },
    "correctAnswer": "A",
    "explanation": "4 m × 100 = 400 cm.",
    "learningStandard": "SK 6.1 Pertukaran unit panjang"
  },
  {
    "id": "m3-t6-09",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Ukuran Jisim g ke kg",
    "difficulty": "Mudah",
    "question": "1 kilogram (kg) bersamaan dengan berapa gram (g)?",
    "options": {
      "A": "1,000 g",
      "B": "100 g",
      "C": "10 g",
      "D": "10,000 g"
    },
    "correctAnswer": "A",
    "explanation": "1 kg = 1,000 g.",
    "learningStandard": "SK 6.2 Perkaitan unit jisim"
  },
  {
    "id": "m3-t6-10",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Tukar Unit Jisim",
    "difficulty": "Sederhana",
    "question": "Tukarkan 3 kg 250 g kepada gram (g).",
    "options": {
      "A": "3,250 g",
      "B": "3,025 g",
      "C": "325 g",
      "D": "32,500 g"
    },
    "correctAnswer": "A",
    "explanation": "3 kg = 3,000 g. 3,000 g + 250 g = 3,250 g.",
    "learningStandard": "SK 6.2 Pertukaran unit jisim"
  },
  {
    "id": "m3-t6-11",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Isi Padu Cecair ml ke l",
    "difficulty": "Mudah",
    "question": "1 liter (ℓ) bersamaan dengan berapa mililiter (mℓ)?",
    "options": {
      "A": "1,000 mℓ",
      "B": "100 mℓ",
      "C": "10 mℓ",
      "D": "500 mℓ"
    },
    "correctAnswer": "A",
    "explanation": "1 liter = 1,000 mililiter.",
    "learningStandard": "SK 6.3 Perkaitan unit isi padu cecair"
  },
  {
    "id": "m3-t6-12",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Bentuk Geometri Prisma",
    "difficulty": "Mudah",
    "question": "Prisma segi empat tepat juga dikenali sebagai:",
    "options": {
      "A": "Kuboid",
      "B": "Kubus",
      "C": "Silinder",
      "D": "Piramid"
    },
    "correctAnswer": "A",
    "explanation": "Prisma segi empat tepat dikenali sebagai kuboid.",
    "learningStandard": "SK 7.1 Mengenal bentuk prisma"
  },
  {
    "id": "m3-t6-13",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Ciri Prisma Segi Tiga",
    "difficulty": "Sederhana",
    "question": "Berapakah bilangan permukaan rata bagi sebuah prisma segi tiga?",
    "options": {
      "A": "5 permukaan",
      "B": "6 permukaan",
      "C": "4 permukaan",
      "D": "3 permukaan"
    },
    "correctAnswer": "A",
    "explanation": "Prisma segi tiga mempunyai 2 muka segi tiga dan 3 muka segi empat = 5 muka rata.",
    "learningStandard": "SK 7.1 Ciri-ciri bentuk prisma"
  },
  {
    "id": "m3-t6-14",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Simetri Bentuk 2D",
    "difficulty": "Mudah",
    "question": "Berapakah bilangan paksi simetri bagi sebuah segi empat sama?",
    "options": {
      "A": "4 paksi simetri",
      "B": "2 paksi simetri",
      "C": "1 paksi simetri",
      "D": "3 paksi simetri"
    },
    "correctAnswer": "A",
    "explanation": "Segi empat sama mempunyai 4 paksi simetri.",
    "learningStandard": "SK 7.2 Paksi simetri"
  },
  {
    "id": "m3-t6-15",
    "year": 3,
    "subject": "Matematik",
    "topic": "Masa, Waktu & Ukuran",
    "subtopic": "Masalah Gabungan Masa KBAT",
    "difficulty": "Sukar",
    "question": "Sebuah bas bertolak dari Kuala Lumpur pada jam 9:15 pagi dan tiba di Ipoh pada jam 11:45 pagi. Berapakah tempoh masa perjalanan bas tersebut?",
    "options": {
      "A": "2 jam 30 minit",
      "B": "2 jam 15 minit",
      "C": "3 jam 30 minit",
      "D": "1 jam 45 minit"
    },
    "correctAnswer": "A",
    "explanation": "Dari 9:15 pagi ke 11:15 pagi = 2 jam. Tambah 30 minit ke 11:45 pagi = 2 jam 30 minit.",
    "learningStandard": "SK 5.3 Menyelesaikan masalah masa"
  }
];
