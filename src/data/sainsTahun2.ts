import { QuizQuestion } from '../types';

export const SAINS_TAHUN_2_QUESTIONS: QuizQuestion[] = [
  {
    "id": "sai-t2-vis-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik",
    "difficulty": "Mudah",
    "question": "Perhatikan rajah litar elektrik di atas. Mengapakah mentol tersebut menyala dengan terang?",
    "options": {
      "A": "Kerana suis ditutup dan membentuk litar lengkap",
      "B": "Kerana bateri dicabut",
      "C": "Kerana wayar penyambung terputus",
      "D": "Kerana tiada arus elektrik"
    },
    "correctAnswer": "A",
    "explanation": "Apabila suis ditutup, litar menjadi lengkap membolehkan arus elektrik mengalir dari sel kering ke mentol untuk menyalakannya.",
    "learningStandard": "SP 7.1.3 Membina litar elektrik lengkap dengan menggunakan komponen.",
    "diagram": {
      "title": "Rajah: Litar Elektrik Lengkap",
      "type": "science_visual",
      "svgContent": "<svg viewBox=\"0 0 260 160\" width=\"240\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"5\" y=\"5\" width=\"250\" height=\"150\" rx=\"8\" fill=\"#F8FAFC\" stroke=\"#E2E8F0\" stroke-width=\"1\"/>\n    <!-- Wire Loop -->\n    <path d=\"M 40 40 L 220 40 L 220 120 L 40 120 Z\" fill=\"none\" stroke=\"#2563EB\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n    \n    <!-- Battery -->\n    <rect x=\"100\" y=\"30\" width=\"40\" height=\"20\" rx=\"3\" fill=\"#F59E0B\" stroke=\"#B45309\" stroke-width=\"2\"/>\n    <rect x=\"140\" y=\"35\" width=\"5\" height=\"10\" fill=\"#94A3B8\"/>\n    <text x=\"120\" y=\"44\" font-size=\"10\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">Bateri</text>\n    \n    <!-- Switch -->\n    <circle cx=\"55\" cy=\"80\" r=\"4\" fill=\"#EF4444\"/>\n    <circle cx=\"55\" cy=\"100\" r=\"4\" fill=\"#EF4444\"/>\n    <line x1=\"55\" y1=\"80\" x2=\"55\" y2=\"100\" stroke=\"#EF4444\" stroke-width=\"3\"/>\n    <text x=\"25\" y=\"94\" font-size=\"9\" font-weight=\"bold\" fill=\"#64748B\" text-anchor=\"end\">Suis Tertutup</text>\n\n    <!-- Bulb -->\n    <circle cx=\"220\" cy=\"80\" r=\"16\" fill=\"#FEF08A\" stroke=\"#EAB308\" stroke-width=\"2.5\"/>\n    <path d=\"M 215 75 Q 220 70 225 75 Q 220 85 215 75\" fill=\"none\" stroke=\"#CA8A04\" stroke-width=\"1.5\"/>\n    \n      <!-- Glow rays -->\n      <line x1=\"220\" y1=\"56\" x2=\"220\" y2=\"48\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n      <line x1=\"240\" y1=\"68\" x2=\"246\" y2=\"62\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n      <line x1=\"240\" y1=\"92\" x2=\"246\" y2=\"98\" stroke=\"#F59E0B\" stroke-width=\"2\"/>\n      <text x=\"220\" y=\"112\" font-size=\"9\" font-weight=\"bold\" fill=\"#16A34A\" text-anchor=\"middle\">Mentol Menyala ✨</text>\n    \n    <text x=\"130\" y=\"145\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">Litar Bersiri Lengkap (Suis Tertutup)</text>\n  </svg>",
      "caption": "Suis yang tertutup membolehkan arus elektrik mengalir tanpa terputus."
    }
  },
  {
    "id": "t2-sn-kemahiran-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.1 / SP 1.1.1 (Memerhati)",
    "stimulus": "Aina memerhatikan sebiji buah durian di atas meja menggunakan organ derianya.",
    "question": "Antara berikut, deria manakah yang digunakan oleh Aina untuk mengetahui bahawa kulit buah durian itu berduri dan tajam?",
    "options": {
      "A": "Deria sentuhan (kulit)",
      "B": "Deria pendengaran (telinga)",
      "C": "Deria rasa (lidah)",
      "D": "Deria bau (hidung)"
    },
    "correctAnswer": "A",
    "explanation": "Deria sentuhan melalui kulit membolehkan kita mengesan tekstur permukaan seperti tajam, kasar, halus atau licin."
  },
  {
    "id": "t2-sn-kemahiran-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.2 (Mengelas)",
    "question": "Berdasarkan Rajah 1, apakah haiwan yang paling sesuai mewakili Haiwan P dalam Kumpulan X?",
    "options": {
      "A": "Itik",
      "B": "Ikan Emas",
      "C": "Buaya",
      "D": "Katak"
    },
    "correctAnswer": "A",
    "explanation": "Kumpulan X dikelaskan mengikut ciri berbulu pelepah (aves/unggas). Itik mempunyai bulu pelepah sama seperti ayam dan burung helang."
  },
  {
    "id": "t2-sn-kemahiran-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)",
    "question": "Apakah tindakan yang WAJIB murid lakukan sebelum masuk ke dalam Bilik Sains?",
    "options": {
      "A": "Berbaris di luar dan menunggu arahan guru sebelum masuk",
      "B": "Terus berlari masuk untuk mendapatkan tempat duduk hadapan",
      "C": "Membawa makanan dan minuman ke meja makmal",
      "D": "Menyentuh semua radas sains di atas meja"
    },
    "correctAnswer": "A",
    "explanation": "Murid wajib beratur di luar bilik sains dan hanya boleh masuk selepas mendapat kebenaran dan arahan guru demi keselamatan."
  },
  {
    "id": "t2-sn-kemahiran-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.3 (Mengukur dan Menggunakan Nombor)",
    "question": "Berdasarkan Rajah 2, berapakah panjang pensel tersebut?",
    "options": {
      "A": "9 sentimeter (cm)",
      "B": "7 sentimeter (cm)",
      "C": "11 sentimeter (cm)",
      "D": "15 sentimeter (cm)"
    },
    "correctAnswer": "A",
    "explanation": "Hujung pemadam pensel bermula tepat pada tanda 0 cm dan mata pensel berakhir tepat pada senggatan 9 cm. Maka panjang pensel ialah 9 cm."
  },
  {
    "id": "t2-sn-kemahiran-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)",
    "question": "Semasa menjalankan eksperimen, tabung uji yang dipegang oleh Danish terjatuh dan pecah. Apakah tindakan yang patut Danish lakukan dengan segera?",
    "options": {
      "A": "Melaporkan kejadian itu kepada guru dengan segera",
      "B": "Kutip serpihan kaca dengan tangan kosong tanpa memakai sarung tangan",
      "C": "Menyembunyikan serpihan kaca di bawah meja",
      "D": "Berlari keluar meninggalkan bilik sains"
    },
    "correctAnswer": "A",
    "explanation": "Sebarang kemalangan, kecederaan atau radas kaca yang pecah di dalam bilik sains mesti dilaporkan serta-merta kepada guru."
  },
  {
    "id": "sai-t2-vis-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Campuran",
    "difficulty": "Sederhana",
    "question": "Rujuk jadual eksperimen keterlarutan bahan di dalam air di atas. Bahan manakah yang TIDAK larut di dalam air?",
    "options": {
      "A": "Pasir Sungai",
      "B": "Gula Pasir",
      "C": "Garam Halus",
      "D": "Serbuk Minuman"
    },
    "correctAnswer": "A",
    "explanation": "Pasir sungai tidak larut di dalam air dan akan mendap di dasar bikar.",
    "learningStandard": "SP 8.1.2 Mengenal pasti bahan yang boleh larut dan tidak boleh larut dalam air.",
    "diagram": {
      "title": "Jadual Keterlarutan Bahan Dalam Air",
      "type": "table_data",
      "data": {
        "headers": [
          "Bahan",
          "Pemerhatian di Dalam Air"
        ],
        "rows": [
          [
            "Gula Pasir",
            "Larut sepenuhnya (Air manis)"
          ],
          [
            "Garam Halus",
            "Larut sepenuhnya (Air masin jernih)"
          ],
          [
            "Pasir Sungai",
            "Tidak larut (Mendap di dasar bikar)"
          ]
        ]
      },
      "caption": "Bahan larut akan bercampur sekata manakala bahan tidak larut akan mendap."
    }
  },
  {
    "id": "t2-sn-kemahiran-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.2 / SP 1.2.3 (Kemahiran Manipulatif)",
    "question": "Berdasarkan Rajah 3, mengapakah radas sains perlu dibersihkan dan dikeringkan dengan betul sebelum disimpan?",
    "options": {
      "A": "Supaya radas bersih, selamat dan tidak rosak untuk kegunaan seterusnya",
      "B": "Supaya radas boleh ditukar menjadi baharu",
      "C": "Supaya radas tidak boleh digunakan lagi oleh murid lain",
      "D": "Supaya guru tidak dapat memeriksa radas tersebut"
    },
    "correctAnswer": "A",
    "explanation": "Membersihkan, mengeringkan dan menyimpan radas sains di tempat asalnya merupakan amalan kemahiran manipulatif yang menjamin keselamatan dan ketahanan peralatan."
  },
  {
    "id": "t2-sn-kemahiran-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 1.1 / SP 1.1.1 (Memerhati)",
    "question": "Amir membunyikan loceng basikalnya. Apakah organ deria yang terlibat untuk membuat pemerhatian tentang bunyi tersebut?",
    "options": {
      "A": "Telinga (deria pendengaran)",
      "B": "Mata (deria penglihatan)",
      "C": "Lidah (deria rasa)",
      "D": "Hidung (deria bau)"
    },
    "correctAnswer": "A",
    "explanation": "Bunyi loceng dikesan oleh organ telinga melalui deria pendengaran."
  },
  {
    "id": "t2-sn-kemahiran-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.1 / SP 1.1.4 (Berkomunikasi)",
    "question": "Sekumpulan murid Tahun 2 merekodkan bilangan daun anak benih kacang hijau setiap 2 hari ke dalam sebuah jadual. Kemahiran proses sains apakah yang sedang mereka lakukan?",
    "options": {
      "A": "Berkomunikasi",
      "B": "Membuat hipotesis",
      "C": "Mengawal pemboleh ubah",
      "D": "Mengeksperimen"
    },
    "correctAnswer": "A",
    "explanation": "Merekodkan dan mempersembahkan maklumat atau idea dalam bentuk jadual, carta, graf atau tulisan ialah kemahiran proses sains Berkomunikasi."
  },
  {
    "id": "t2-sn-kemahiran-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)",
    "question": "Mengapakah kita DILARANG sama sekali makan dan minum di dalam Bilik Sains?",
    "options": {
      "A": "Makanan dan minuman boleh tercemar dengan bahan kimia berbahaya atau kuman di atas meja",
      "B": "Makanan akan menjadi sejuk dengan terlalu cepat",
      "C": "Supaya murid berasa lapar selepas kelas sains tamat",
      "D": "Meja makmal tidak mempunyai pinggan dan cawan"
    },
    "correctAnswer": "A",
    "explanation": "Bilik sains mengandungi pelbagai bahan kimia, radas dan sisa eksperimen yang boleh meracuni makanan dan membahayakan kesihatan jika termakan."
  },
  {
    "id": "t2-sn-kemahiran-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.2 / SP 1.2.2 (Mengendalikan Spesimen Hidup)",
    "question": "Selepas selesai menyiasat seekor siput babi di luar bilik darjah, apakah yang perlu murid lakukan terhadap spesimen hidup itu?",
    "options": {
      "A": "Melepaskan siput babi semula ke habitat asalnya dengan cermat",
      "B": "Membuang siput babi ke dalam tong sampah",
      "C": "Menyimpan siput babi di dalam beg sekolah",
      "D": "Membiarkan siput babi terdedah di bawah terik matahari"
    },
    "correctAnswer": "A",
    "explanation": "Spesimen hidup mesti dikendalikan dengan betul dan cermat serta dilepaskan kembali ke habitat asalnya."
  },
  {
    "id": "sai-t2-vis-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang dan Gelap",
    "difficulty": "Mudah",
    "question": "Perhatikan neraca tuas di atas. Apakah kesimpulan tentang perbandingan jisim Objek X dan Objek Y?",
    "options": {
      "A": "Objek X lebih berat daripada Objek Y",
      "B": "Objek Y lebih berat daripada Objek X",
      "C": "Objek X dan Y sama jisim",
      "D": "Objek X terapung di udara"
    },
    "correctAnswer": "A",
    "explanation": "Lengan neraca di sebelah Objek X condong ke bawah, membuktikan bahawa Objek X mempunyai jisim yang lebih berat.",
    "learningStandard": "SP 6.1.2 Mengukur dan membandingkan jisim menggunakan alat tidak piawai / neraca.",
    "diagram": {
      "title": "Rajah: Neraca Tuas Perbandingan Jisim",
      "type": "science_visual",
      "svgContent": "<svg viewBox=\"0 0 240 160\" width=\"220\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polygon points=\"110,140 130,140 120,60\" fill=\"#64748B\"/>\n    <rect x=\"80\" y=\"140\" width=\"80\" height=\"10\" rx=\"3\" fill=\"#334155\"/>\n    <circle cx=\"120\" cy=\"60\" r=\"6\" fill=\"#F59E0B\"/>\n    <line x1=\"40\" y1=\"75\" x2=\"200\" y2=\"45\" stroke=\"#475569\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n    <line x1=\"40\" y1=\"75\" x2=\"30\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"40\" y1=\"75\" x2=\"50\" y2=\"110\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"40\" cy=\"110\" rx=\"22\" ry=\"6\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"28\" y=\"92\" width=\"24\" height=\"16\" rx=\"3\" fill=\"#3B82F6\" stroke=\"#1D4ED8\" stroke-width=\"1.5\"/>\n    <text x=\"40\" y=\"104\" font-size=\"8\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">Objek X</text>\n    <line x1=\"200\" y1=\"45\" x2=\"190\" y2=\"80\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <line x1=\"200\" y1=\"45\" x2=\"210\" y2=\"80\" stroke=\"#94A3B8\" stroke-width=\"1.5\"/>\n    <ellipse cx=\"200\" cy=\"80\" rx=\"22\" ry=\"6\" fill=\"#CBD5E1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <rect x=\"188\" y=\"62\" width=\"24\" height=\"16\" rx=\"3\" fill=\"#10B981\" stroke=\"#047857\" stroke-width=\"1.5\"/>\n    <text x=\"200\" y=\"74\" font-size=\"8\" font-weight=\"bold\" fill=\"#FFFFFF\" text-anchor=\"middle\">Objek Y</text>\n    <text x=\"120\" y=\"22\" font-size=\"11\" font-weight=\"bold\" fill=\"#1E293B\" text-anchor=\"middle\">Neraca Tuas (Perbandingan Jisim)</text>\n  </svg>",
      "caption": "Sisi objek yang lebih berat akan condong ke bawah."
    }
  },
  {
    "id": "t2-sn-kemahiran-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.1 / SP 1.1.1 (Memerhati)",
    "question": "Organ deria yang manakah digunakan untuk memerhati warna pelangi di langit?",
    "options": {
      "A": "Mata (Deria Penglihatan)",
      "B": "Telinga (Deria Pendengaran)",
      "C": "Hidung (Deria Bau)",
      "D": "Lidah (Deria Rasa)"
    },
    "correctAnswer": "A",
    "explanation": "Deria penglihatan menggunakan mata untuk melihat warna, saiz dan bentuk."
  },
  {
    "id": "t2-sn-kemahiran-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Peraturan Bilik Sains)",
    "question": "Apakah tindakan segera yang perlu diambil jika sebuah bikar kaca terjatuh dan pecah di dalam Bilik Sains?",
    "options": {
      "A": "Melaporkan kepada guru dengan segera",
      "B": "Menyembunyikan serpihan kaca di bawah meja",
      "C": "Mengutip serpihan kaca tajam dengan tangan kosong",
      "D": "Meninggalkan bilik sains dan lari pulang"
    },
    "correctAnswer": "A",
    "explanation": "Sebarang kemalangan atau radas pecah mesti dilaporkan kepada guru dengan segera untuk keselamatan."
  },
  {
    "id": "t2-sn-kemahiran-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Sederhana",
    "learningStandard": "SK 1.2 / SP 1.2.3 (Melakar Spesimen)",
    "question": "Semasa melakar spesimen daun pokok bunga raya dalam buku amali sains, lakaran perlulah:",
    "options": {
      "A": "Tepat, jelas dan berlabel",
      "B": "Diwarnakan secara imaginasi seperti kartun",
      "C": "Dilukis tanpa melihat daun sebenar",
      "D": "Dilukis bersaiz terlalu kecil sehingga sukar dibaca"
    },
    "correctAnswer": "A",
    "explanation": "Kemahiran manipulatif melakar memerlukan lakaran yang tepat, kemas, jelas dan berlabel mengikut spesimen sebenar."
  },
  {
    "id": "t2-sn-kemahiran-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "Mudah",
    "learningStandard": "SK 1.1 / SP 1.1.2 (Mengelas)",
    "question": "Aiman mengasingkan objek kepada dua kumpulan: Objek Terapung dan Objek Tenggelam. Kemahiran proses sains apakah yang digunakan oleh Aiman?",
    "options": {
      "A": "Mengelas",
      "B": "Mengukur",
      "C": "Meramal",
      "D": "Membuat inferens"
    },
    "correctAnswer": "A",
    "explanation": "Mengasingkan objek mengikut ciri sepunya dan berbeza dinamakan kemahiran Mengelas."
  },
  {
    "id": "t2-sn-kemahiran-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Kemahiran Saintifik & Peraturan Bilik Sains",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 2.1 / SP 2.1.1 (Kebersihan Bilik Sains)",
    "question": "Sebelum meninggalkan Bilik Sains selepas aktiviti penyiasatan tamat, murid WAJIB memastikan:",
    "options": {
      "A": "Kerusi disusun rapi, radas dicuci dan bilik sains bersih",
      "B": "Pili air dan suis lampu dibiarkan terpasang",
      "C": "Sisa bahan eksperimen ditinggalkan di atas meja",
      "D": "Radas kaca dibawa pulang ke rumah"
    },
    "correctAnswer": "A",
    "explanation": "Murid mesti membersihkan radas, mengemas meja, menyusun kerusi dan menutup suis elektrik sebelum keluar."
  },
  {
    "id": "t2-sn-manusia-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Tumbesaran Manusia)",
    "question": "Apakah tiga perubahan fizikal yang dialami oleh manusia sejak peringkat bayi hingga kanak-kanak?",
    "options": {
      "A": "Pertambahan tinggi, pertambahan berat badan, dan pertambahan saiz tapak kaki",
      "B": "Pengurangan saiz tapak tangan dan ketinggian",
      "C": "Perubahan bilangan jari tangan dan jari kaki",
      "D": "Perubahan warna darah dan tulang"
    },
    "correctAnswer": "A",
    "explanation": "Semasa membesar, manusia mengalami pertambahan ketinggian, berat badan dan saiz anggota badan seperti tapak kaki dan tangan."
  },
  {
    "id": "t2-sn-manusia-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Pewarisan Ciri)",
    "question": "Berdasarkan Rajah 4, ciri fizikal apakah yang diwarisi oleh Adam daripada bapanya?",
    "options": {
      "A": "Jenis rambut kerinting",
      "B": "Warna baju yang sama",
      "C": "Kegemaran bermain bola",
      "D": "Saiz kasut yang sama"
    },
    "correctAnswer": "A",
    "explanation": "Ciri-ciri fizikal seperti jenis rambut (lurus atau kerinting), warna iris mata dan warna kulit diwarisi daripada ibu bapa atau keturunan."
  },
  {
    "id": "t2-sn-manusia-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.3 (Iris Mata)",
    "question": "Antara berikut, yang manakah merupakan ciri keturunan yang BOLEH diwarisi oleh seorang anak daripada ibu atau bapanya?",
    "options": {
      "A": "Warna iris mata (contohnya coklat atau hitam)",
      "B": "Panjang kuku jari",
      "C": "Tali kasut yang dipakai",
      "D": "Warna beg sekolah"
    },
    "correctAnswer": "A",
    "explanation": "Warna iris mata merupakan ciri genetik semulajadi yang diwarisi daripada ibu bapa."
  },
  {
    "id": "t2-sn-manusia-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Carta Tumbesaran)",
    "question": "Berdasarkan Rajah 5, apakah kesimpulan yang boleh dibuat tentang tumbesaran Sarah?",
    "options": {
      "A": "Ketinggian Sarah semakin bertambah apabila usianya meningkat",
      "B": "Ketinggian Sarah tidak berubah sejak umur 1 tahun",
      "C": "Sarah menjadi semakin rendah pada umur 8 tahun",
      "D": "Tumbesaran Sarah terhenti pada umur 4 tahun"
    },
    "correctAnswer": "A",
    "explanation": "Data menunjukkan ketinggian Sarah meningkat secara berperingkat iaitu 70 cm pada 1 tahun, 95 cm pada 4 tahun, dan 120 cm pada 8 tahun."
  },
  {
    "id": "t2-sn-manusia-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Pewarisan Daripada Datuk & Nenek)",
    "question": "Kedua-dua ibu dan bapa Daniel mempunyai rambut lurus, tetapi Daniel mempunyai rambut ikal sama seperti datuknya. Mengapakah keadaan ini boleh berlaku?",
    "options": {
      "A": "Ciri fizikal juga boleh diwarisi daripada datuk atau nenek",
      "B": "Daniel tersalah menggunakan syampu rambut",
      "C": "Rambut Daniel akan menjadi lurus semula esok hari",
      "D": "Rambut ikal Daniel terjadi kerana Daniel suka bersukan"
    },
    "correctAnswer": "A",
    "explanation": "Pewarisan ciri boleh diwarisi daripada generasi terdahulu seperti datuk dan nenek selain daripada ibu bapa."
  },
  {
    "id": "t2-sn-manusia-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Tumbesaran Saiz)",
    "question": "Baju sekolah yang dipakai oleh Danish semasa di Tahun 1 kini menjadi sempit dan ketat apabila dia berada di Tahun 2. Mengapakah perkara ini berlaku?",
    "options": {
      "A": "Saiz badan Danish telah membesar dan ketinggiannya bertambah",
      "B": "Baju sekolah tersebut telah mengecil kerana dibasuh",
      "C": "Danish tidak memakai baju itu dengan betul",
      "D": "Baju sekolah Tahun 1 tidak boleh dipakai di Tahun 2"
    },
    "correctAnswer": "A",
    "explanation": "Kanak-kanak mengalami proses tumbesaran fizikal yang menyebabkan saiz badan bertambah besar dan tinggi."
  },
  {
    "id": "t2-sn-manusia-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Perbezaan Antara Individu)",
    "question": "Walaupun murid-murid di dalam kelas 2 Amanah mempunyai umur yang sama (8 tahun), mengapakah ketinggian dan berat mereka berbeza-beza?",
    "options": {
      "A": "Tumbesaran adalah berbeza antara individu kerana faktor genetik dan pemakanan",
      "B": "Kerana ada murid yang tidak belajar sains",
      "C": "Kerana mereka menggunakan pembaris yang berlainan warna",
      "D": "Kerana tarikh lahir mereka berbeza hari"
    },
    "correctAnswer": "A",
    "explanation": "Kadar tumbesaran setiap kanak-kanak adalah unik dan dipengaruhi oleh faktor keturunan (genetik) serta amalan pemakanan seimbang."
  },
  {
    "id": "t2-sn-manusia-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Warna Kulit)",
    "question": "Antara berikut, pasangan ciri fizikal manakah yang merupakan ciri pewarisan manusia?",
    "options": {
      "A": "Warna kulit cerah atau gelap",
      "B": "Corak kasut sukan",
      "C": "Jenis beg galas",
      "D": "Jenama jam tangan"
    },
    "correctAnswer": "A",
    "explanation": "Warna kulit merupakan ciri fizikal tubuh badan manusia yang diwarisi daripada ibu bapa."
  },
  {
    "id": "t2-sn-manusia-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Keperluan Tumbesaran)",
    "question": "Apakah amalan penting yang membantu tumbesaran kanak-kanak berlaku dengan sihat dan sempurna?",
    "options": {
      "A": "Makan makanan seimbang, bersenam dan tidur secukupnya",
      "B": "Tidur lewat malam sambil bermain permainan video",
      "C": "Hanya makan snek ringan dan minuman bergas",
      "D": "Duduk di dalam bilik sepanjang hari tanpa bergerak"
    },
    "correctAnswer": "A",
    "explanation": "Pemakanan bernutrisi seimbang (piramid makanan), senaman dan rehat yang cukup sangat penting untuk perkembangan fizikal kanak-kanak."
  },
  {
    "id": "t2-sn-manusia-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Pewarisan)",
    "question": "Anak yang dilahirkan akan mempunyai ciri-ciri yang menyerupai:",
    "options": {
      "A": "Ibu, bapa atau keturunannya",
      "B": "Rakan-rakan sekelasnya",
      "C": "Guru kelasnya",
      "D": "Jiran sebelah rumahnya"
    },
    "correctAnswer": "A",
    "explanation": "Melalui proses pembiakan manusia, ciri keturunan diwariskan daripada ibu, bapa atau nenek moyang kepada anak."
  },
  {
    "id": "t2-sn-manusia-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Perubahan Saiz Tubuh)",
    "question": "Kasut sekolah Daniel semasa Tahun 1 kini terasa ketat dan tidak muat lagi semasa Tahun 2. Ini membuktikan berlaku perubahan dari segi:",
    "options": {
      "A": "Saiz tapak kaki Daniel semakin membesar",
      "B": "Kasut Daniel telah mengecil sendiri",
      "C": "Kaki Daniel telah mengecil",
      "D": "Kasut Daniel menjadi terlalu lembut"
    },
    "correctAnswer": "A",
    "explanation": "Tumbesaran manusia menyebabkan pertambahan saiz tapak kaki, tinggi dan berat badan."
  },
  {
    "id": "t2-sn-manusia-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Jenis Rambut Pewarisan)",
    "question": "Farah mempunyai rambut keriting seperti ibunya. Ciri pewarisan apakah yang diwarisi oleh Farah?",
    "options": {
      "A": "Jenis rambut",
      "B": "Warna baju",
      "C": "Ketinggian kasut",
      "D": "Cara bercakap"
    },
    "correctAnswer": "A",
    "explanation": "Jenis rambut (lurus, ikal atau keriting) adalah antara ciri genetik yang diwarisi daripada ibu bapa."
  },
  {
    "id": "t2-sn-manusia-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 3.1 / SP 3.1.2 (Warna Iris Mata)",
    "question": "Antara ciri berikut, yang manakah BOLEH diwarisi oleh seorang anak daripada ibu atau bapanya?",
    "options": {
      "A": "Warna iris mata",
      "B": "Minat bermain badminton",
      "C": "Jenama beg sekolah",
      "D": "Gred markah peperiksaan"
    },
    "correctAnswer": "A",
    "explanation": "Warna iris mata (hitam, coklat, biru) diwarisi secara genetik daripada ibu bapa."
  },
  {
    "id": "t2-sn-manusia-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "Mudah",
    "learningStandard": "SK 3.1 / SP 3.1.1 (Ukuran Berat Badan)",
    "question": "Alat pengukur yang manakah digunakan untuk mengukur berat badan seseorang murid?",
    "options": {
      "A": "Penimbang berat badan",
      "B": "Pita pengukur panjang",
      "C": "Pembaris kayu",
      "D": "Jam randik"
    },
    "correctAnswer": "A",
    "explanation": "Penimbang berat badan (unit kilogram, kg) digunakan untuk merekod berat badan."
  },
  {
    "id": "t2-sn-manusia-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Manusia (Tumbesaran & Pewarisan)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 3.1 / SP 3.1.3 (Perbezaan Tumbesaran Individu)",
    "question": "Mengapakah ketinggian dan berat badan antara murid-murid dalam satu kelas Tahun 2 berbeza-beza walaupun mereka sebaya?",
    "options": {
      "A": "Kadar tumbesaran setiap individu adalah berbeza dipengaruhi genetik dan pemakanan",
      "B": "Kerana ada murid yang tidak pernah mandi",
      "C": "Kerana warna baju sekolah mereka berbeza",
      "D": "Kerana mereka belajar subjek yang berlainan"
    },
    "correctAnswer": "A",
    "explanation": "Tumbesaran setiap individu berbeza bergantung kepada faktor pewarisan genetik serta pengambilan nutrisi makanan yang seimbang."
  },
  {
    "id": "t2-sn-haiwan-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.1 (Cara Pembiakan Haiwan)",
    "question": "Bagaimanakah haiwan membiak untuk memastikan spesiesnya tidak pupus?",
    "options": {
      "A": "Bertelur atau melahirkan anak",
      "B": "Menanam biji benih di dalam tanah",
      "C": "Menghasilkan spora di bawah daun",
      "D": "Membeli anak haiwan di kedai"
    },
    "correctAnswer": "A",
    "explanation": "Haiwan membiak melalui dua cara utama, iaitu sama ada secara bertelur (ovipar) atau melahirkan anak (vivipar)."
  },
  {
    "id": "t2-sn-haiwan-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.5 (Kitar Hidup Rama-rama)",
    "question": "Berdasarkan Rajah 6, apakah peringkat kitar hidup yang diwakili oleh [ X ]?",
    "options": {
      "A": "Pupa (Kepompong)",
      "B": "Anak ayam",
      "C": "Berudu",
      "D": "Nimfa"
    },
    "correctAnswer": "A",
    "explanation": "Kitar hidup rama-rama bermula daripada Telur -> Beluncas (larva) -> Pupa (kepompong) -> Rama-rama dewasa."
  },
  {
    "id": "t2-sn-haiwan-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.2 (Bilangan Telur)",
    "question": "Antara haiwan berikut, yang manakah bertelur dalam bilangan yang BANYAK?",
    "options": {
      "A": "Katak dan Penyu",
      "B": "Burung unta dan Ayam",
      "C": "Penguin dan Burung merpati",
      "D": "Gajah dan Kucing"
    },
    "correctAnswer": "A",
    "explanation": "Katak dan penyu bertelur sangat banyak (beratus-ratus biji) untuk memastikan kelangsungan hidup anak-anaknya daripada ancaman pemangsa."
  },
  {
    "id": "t2-sn-haiwan-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.5 (Kitar Hidup Katak)",
    "question": "Berdasarkan Rajah 7, di manakah katak bertelur dan di manakah berudu hidup sebelum menjadi katak dewasa?",
    "options": {
      "A": "Di dalam air",
      "B": "Di atas dahan pokok yang tinggi",
      "C": "Di dalam lubang tanah yang kering kontang",
      "D": "Di atas bumbung rumah"
    },
    "correctAnswer": "A",
    "explanation": "Katak bertelur di dalam air dan anak katak (berudu) bernafas menggunakan insang dan berenang di dalam air."
  },
  {
    "id": "t2-sn-haiwan-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.6 (Anak Tidak Menyerupai Induk)",
    "question": "Antara haiwan berikut, anak bagi haiwan manakah yang TIDAK MENYERUPAI rupa induknya semasa baru menetas?",
    "options": {
      "A": "Rama-rama (anaknya beluncas/ulat)",
      "B": "Kucing (anaknya anak kucing)",
      "C": "Lembu (anaknya anak lembu)",
      "D": "Ayam (anaknya anak ayam)"
    },
    "correctAnswer": "A",
    "explanation": "Anak rama-rama yang menetas daripada telur ialah beluncas yang rupanya sangat berbeza daripada induk rama-rama dewasa."
  },
  {
    "id": "t2-sn-haiwan-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.3 (Bilangan Anak Melahirkan)",
    "question": "Antara kumpulan haiwan melahirkan anak berikut, yang manakah melahirkan bilangan anak yang SEDIKIT (biasanya satu atau dua anak sahaja setiap kelahiran)?",
    "options": {
      "A": "Gajah, lembu dan kuda",
      "B": "Kucing, arnab dan tikus",
      "C": "Ikan paus dan tikus mondok",
      "D": "Kucing dan anjing"
    },
    "correctAnswer": "A",
    "explanation": "Haiwan bersaiz besar seperti gajah, lembu dan kuda melahirkan bilangan anak yang sedikit (1 atau 2 ekor). Kucing dan arnab melahirkan anak yang banyak."
  },
  {
    "id": "t2-sn-haiwan-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 4.1 / SP 4.1.4 (Kelangsungan Hidup Haiwan)",
    "question": "Mengapakah penyu menimbus telurnya di dalam pasir pantai yang dalam selepas bertelur?",
    "options": {
      "A": "Melindungi telur daripada dimakan oleh musuh atau pemangsa seperti burung dan biawak",
      "B": "Supaya telur penyu menjadi sejuk dan beku",
      "C": "Supaya telur penyu boleh bertukar menjadi batu karang",
      "D": "Kerana penyu tidak mahu anak-anaknya menetas"
    },
    "correctAnswer": "A",
    "explanation": "Penyu menimbus telurnya dengan pasir untuk menyembunyikannya daripada pemangsa dan mengekalkan suhu yang sesuai untuk pengeraman."
  },
  {
    "id": "t2-sn-haiwan-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.6 (Anak Menyerupai Induk)",
    "question": "Antara haiwan bertelur berikut, yang manakah anaknya MENYERUPAI rupa bentuk induknya sebaik sahaja menetas?",
    "options": {
      "A": "Buaya dan Burung",
      "B": "Katak",
      "C": "Rama-rama",
      "D": "Nyamuk"
    },
    "correctAnswer": "A",
    "explanation": "Anak buaya dan anak burung mempunyai rupa bentuk yang menyerupai induknya sejak menetas dari telur."
  },
  {
    "id": "t2-sn-haiwan-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.5 (Kitar Hidup Nyamuk)",
    "question": "Susun kitar hidup nyamuk mengikut urutan yang betul:",
    "options": {
      "A": "Telur → Jentik-jentik → Pupa → Nyamuk dewasa",
      "B": "Nyamuk dewasa → Pupa → Jentik-jentik → Telur",
      "C": "Telur → Beluncas → Berudu → Nyamuk",
      "D": "Telur → Anak nyamuk → Pupa → Nyamuk"
    },
    "correctAnswer": "A",
    "explanation": "Kitar hidup nyamuk adalah Telur -> Jentik-jentik -> Pupa -> Nyamuk dewasa."
  },
  {
    "id": "t2-sn-haiwan-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 4.1 / SP 4.1.1 (Kepentingan Pembiakan)",
    "question": "Apakah yang akan berlaku jika semua haiwan di bumi berhenti membiak?",
    "options": {
      "A": "Bilangan haiwan akan berkurang dan lama-kelamaan pupus dari muka bumi",
      "B": "Haiwan akan hidup selama-lamanya",
      "C": "Haiwan akan bertukar menjadi tumbuhan",
      "D": "Bumi akan dipenuhi dengan lebih banyak spesies haiwan baharu"
    },
    "correctAnswer": "A",
    "explanation": "Pembiakan amat penting untuk menambah bilangan spesies agar haiwan tidak pupus apabila induknya mati."
  },
  {
    "id": "t2-sn-haiwan-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.2 (Haiwan Bertelur Sedikit)",
    "question": "Antara haiwan bertelur berikut, yang manakah bertelur SEDIKIT (1 hingga 2 biji) dan menjaga telurnya?",
    "options": {
      "A": "Burung merpati / Burung helang",
      "B": "Katak",
      "C": "Ikan mas",
      "D": "Penyu"
    },
    "correctAnswer": "A",
    "explanation": "Burung bertelur sedikit dan mengeram serta menjaga telurnya di dalam sarang."
  },
  {
    "id": "t2-sn-haiwan-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.3 (Haiwan Melahirkan Anak Banyak)",
    "question": "Haiwan manakah yang melahirkan anak yang BANYAK dalam satu kelahiran?",
    "options": {
      "A": "Kucing dan Arnab",
      "B": "Gajah",
      "C": "Lembu",
      "D": "Kuda"
    },
    "correctAnswer": "A",
    "explanation": "Kucing dan arnab boleh melahirkan 3 hingga 6 ekor anak sekaligus dalam satu kelahiran."
  },
  {
    "id": "t2-sn-haiwan-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 4.1 / SP 4.1.4 (Perubahan Rupa Anak Katak)",
    "question": "Anak katak yang baru menetas daripada telur dipanggil berudu. Bagaimanakah pernafasan berudu semasa di dalam air?",
    "options": {
      "A": "Bernafas menggunakan insang",
      "B": "Bernafas menggunakan paru-paru",
      "C": "Bernafas melalui belalai",
      "D": "Tidak bernafas langsung"
    },
    "correctAnswer": "A",
    "explanation": "Berudu hidup di dalam air dan bernafas menggunakan insang sebelum bertukar menjadi katak dewasa yang bernafas melalui peparu dan kulit lembap."
  },
  {
    "id": "t2-sn-haiwan-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "Mudah",
    "learningStandard": "SK 4.1 / SP 4.1.5 (Pupa Rama-rama)",
    "question": "Peringkat di mana ulat beluncas membungkus dirinya dalam kepompong sebelum menjadi rama-rama dinamakan:",
    "options": {
      "A": "Pupa (Kepompong)",
      "B": "Berudu",
      "C": "Telur",
      "D": "Jentik-jentik"
    },
    "correctAnswer": "A",
    "explanation": "Pupa ialah peringkat kepompong di mana beluncas mengalami metamorfosis menjadi rama-rama dewasa yang bersayap indah."
  },
  {
    "id": "t2-sn-haiwan-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Haiwan (Pembiakan & Kitar Hidup)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 4.1 / SP 4.1.2 (Melindungi Telur)",
    "question": "Mengapakah penyu bertelur dengan amat banyak (berpuluh-puluh biji) di pantai dan menimbus telurnya di dalam pasir?",
    "options": {
      "A": "Untuk melindungi telur daripada pemangsa dan memastikan peluang anak penyu hidup lebih tinggi",
      "B": "Kerana penyu mahu pasir pantai menjadi hangat",
      "C": "Kerana penyu tidak suka berenang di laut",
      "D": "Supaya telur penyu dijumpai oleh manusia"
    },
    "correctAnswer": "A",
    "explanation": "Penyu bertelur banyak dan menimbusnya di pasir supaya sebahagian telur terselamat daripada musuh dan spesiesnya dapat terus hidup."
  },
  {
    "id": "t2-sn-tumbuhan-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.1 (Keperluan Percambahan Biji Benih)",
    "question": "Apakah TIGA keperluan asas yang diperlukan oleh biji benih untuk bercambah?",
    "options": {
      "A": "Air, udara dan suhu yang sesuai",
      "B": "Baja kimia, tanah liat dan pasu besar",
      "C": "Cahaya lampu neon, ais dan kipas",
      "D": "Gula, garam dan minyak"
    },
    "correctAnswer": "A",
    "explanation": "Biji benih hanya memerlukan air, udara dan suhu yang sesuai untuk mula bercambah. (Cahaya matahari hanya diperlukan selepas daun hijau tumbuh)."
  },
  {
    "id": "t2-sn-tumbuhan-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.1 / SP 5.1.2 (Peringkat Percambahan)",
    "question": "Berdasarkan Rajah 8, apakah bahagian yang mula-mula sekali keluar menembusi kulit biji benih?",
    "options": {
      "A": "Akar",
      "B": "Bunga",
      "C": "Buah",
      "D": "Daun pertama"
    },
    "correctAnswer": "A",
    "explanation": "Semasa biji benih bercambah, akar ialah bahagian pertama yang keluar ke arah bawah untuk menyerap air dan mencengkam tanah."
  },
  {
    "id": "t2-sn-tumbuhan-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.3 (Urutan Tumbesaran Tumbuhan)",
    "question": "Susun urutan tumbesaran pokok cili daripada biji benih:",
    "options": {
      "A": "Biji benih → Anak benih → Pokok berbunga → Pokok berbuah",
      "B": "Pokok berbuah → Bunga → Anak benih → Biji benih",
      "C": "Biji benih → Pokok berbuah → Anak benih → Bunga",
      "D": "Bunga → Biji benih → Pokok berbuah → Anak benih"
    },
    "correctAnswer": "A",
    "explanation": "Urutan tumbesaran tumbuhan bermula daripada biji benih yang bercambah menjadi anak benih, kemudian membesar menjadi pokok dewasa yang berbunga dan akhirnya menghasilkan buah."
  },
  {
    "id": "t2-sn-tumbuhan-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.1 / SP 5.1.4 (Pemerhatian Tumbesaran)",
    "question": "Berdasarkan Rajah 9, apakah perubahan yang dialami oleh pokok apabila ia membesar?",
    "options": {
      "A": "Ketinggian pokok bertambah, bilangan daun bertambah, dan lilitan batang bertambah",
      "B": "Warna pasu bertukar menjadi hijau",
      "C": "Bilangan daun berkurangan dan batang menjadi pendek",
      "D": "Pokok berhenti memerlukan air"
    },
    "correctAnswer": "A",
    "explanation": "Semasa tumbesaran tumbuhan, ketinggian bertambah, bilangan daun bertambah, dan saiz batang pokok menjadi lebih tebal."
  },
  {
    "id": "t2-sn-tumbuhan-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 5.1 / SP 5.1.5 (Keperluan Asas Tumbuhan)",
    "question": "Hakim meletakkan dua pasu pokok cili di halaman rumahnya. Pasu A disiram air setiap hari, manakala Pasu B tidak disiram air langsung selama dua minggu. Apakah yang akan terjadi kepada pokok di dalam Pasu B?",
    "options": {
      "A": "Pokok dalam Pasu B akan layu dan akhirnya mati kerana ketiadaan air",
      "B": "Pokok dalam Pasu B akan membesar dua kali ganda lebih cepat",
      "C": "Pokok dalam Pasu B akan mengeluarkan buah cili berwarna ungu",
      "D": "Tiada apa-apa perubahan yang berlaku"
    },
    "correctAnswer": "A",
    "explanation": "Air merupakan salah satu keperluan asas bagi tumbuhan hidup. Tanpa air, tumbuhan tidak dapat menyerap nutrien lalu layu dan mati."
  },
  {
    "id": "t2-sn-tumbuhan-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.1 / SP 5.1.5 (Cahaya Matahari)",
    "question": "Mengapakah tumbuhan hijau memerlukan cahaya matahari?",
    "options": {
      "A": "Untuk membuat makanannya sendiri melalui daun hijau",
      "B": "Untuk memanaskan tanah sahaja",
      "C": "Untuk menakutkan serangga perosak",
      "D": "Supaya bunganya kelihatan berkilat pada waktu malam"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan menggunakan tenaga daripada cahaya matahari untuk membuat makanan sendiri melalui proses fotosintesis."
  },
  {
    "id": "t2-sn-tumbuhan-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.6 (Kepentingan Tumbuhan Kepada Manusia)",
    "question": "Apakah kepentingan tumbuhan kepada manusia dan haiwan?",
    "options": {
      "A": "Membekalkan sumber makanan, tempat perlindungan dan menghasilkan gas oksigen untuk bernafas",
      "B": "Menghalang hujan daripada turun ke bumi",
      "C": "Menghapuskan semua serangga di dunia",
      "D": "Menyerap semua air di lautan"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan sangat penting sebagai pembekal oksigen, sumber makanan serta tempat perlindungan untuk hidupan."
  },
  {
    "id": "t2-sn-tumbuhan-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 5.1 / SP 5.1.1 (Penyiasatan Percambahan)",
    "question": "Siti meletakkan biji benih di dalam peti sejuk beku. Selepas seminggu, biji benih itu masih tidak bercambah walaupun kapasnya basah. Mengapa?",
    "options": {
      "A": "Suhu di dalam peti sejuk terlalu sejuk dan tidak sesuai untuk percambahan",
      "B": "Peti sejuk tidak mempunyai bekalan elektrik",
      "C": "Biji benih takut kepada ais",
      "D": "Biji benih memerlukan susu untuk bercambah"
    },
    "correctAnswer": "A",
    "explanation": "Biji benih memerlukan suhu yang sesuai (suhu bilik) untuk bercambah. Suhu beku menghentikan aktiviti enzim di dalam biji benih."
  },
  {
    "id": "t2-sn-tumbuhan-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.5 (Keperluan Asas)",
    "question": "Antara berikut, yang manakah BUKAN keperluan asas bagi tumbuhan dewasa untuk terus hidup?",
    "options": {
      "A": "Coklat manis",
      "B": "Air",
      "C": "Udara",
      "D": "Cahaya matahari"
    },
    "correctAnswer": "A",
    "explanation": "Keperluan asas tumbuhan ialah air, udara dan cahaya matahari. Coklat bukan keperluan asas tumbuhan."
  },
  {
    "id": "t2-sn-tumbuhan-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.1 / SP 5.1.3 (Kotiledon)",
    "question": "Semasa biji benih baru bercambah dan belum mempunyai daun hijau, dari manakah anak benih memperoleh makanannya?",
    "options": {
      "A": "Kotiledon (isi biji benih)",
      "B": "Cahaya bulan",
      "C": "Air hujan semata-mata",
      "D": "Batu-bata di dalam tanah"
    },
    "correctAnswer": "A",
    "explanation": "Kotiledon menyimpan makanan untuk anak benih sehingga daun hijau pertama tumbuh dan mampu membuat makanan sendiri."
  },
  {
    "id": "t2-sn-tumbuhan-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.4 (Urutan Tumbesaran Tumbuhan)",
    "question": "Susun urutan peringkat tumbesaran pokok cili yang betul:",
    "options": {
      "A": "Biji benih → Percambahan → Anak pokok → Pokok berbunga → Pokok berbuah",
      "B": "Pokok berbuah → Pokok berbunga → Biji benih → Anak pokok",
      "C": "Percambahan → Pokok berbuah → Biji benih → Pokok berbunga",
      "D": "Biji benih → Pokok berbuah → Anak pokok → Pokok berbunga"
    },
    "correctAnswer": "A",
    "explanation": "Urutan yang betul bermula daripada Biji benih -> Percambahan -> Anak pokok -> Pokok berbunga -> Pokok berbuah."
  },
  {
    "id": "t2-sn-tumbuhan-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.3 (Pertambahan Bilangan Daun)",
    "question": "Apakah perubahan yang dapat dilihat pada anak pokok selepas 2 minggu membesar dengan sihat?",
    "options": {
      "A": "Ketinggian pokok bertambah dan bilangan daun bertambah",
      "B": "Batang pokok menjadi semakin pendek",
      "C": "Daun pokok gugur semuanya dan layu",
      "D": "Akar pokok tercabut sendiri"
    },
    "correctAnswer": "A",
    "explanation": "Tanda tumbesaran tumbuhan ialah peningkatan ketinggian pokok, lilitan batang dan pertambahan daun."
  },
  {
    "id": "t2-sn-tumbuhan-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 5.1 / SP 5.1.5 (Fungsi Cahaya Matahari)",
    "question": "Apakah yang akan berlaku kepada pokok hijau jika diletakkan di dalam kotak gelap bertutup selama seminggu?",
    "options": {
      "A": "Daunnya bertukar menjadi kuning pucat dan akhirnya layu kerana tiada cahaya matahari",
      "B": "Pokok itu akan tumbuh berbuah dengan lebat",
      "C": "Pokok itu akan menjadi pokok bunga berwarna ungu",
      "D": "Pokok itu membesar dua kali ganda lebih cepat"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan memerlukan cahaya matahari untuk membuat makanannya sendiri (fotosintesis). Tanpa cahaya, pokok menjadi pucat dan mati."
  },
  {
    "id": "t2-sn-tumbuhan-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "Mudah",
    "learningStandard": "SK 5.1 / SP 5.1.1 (Fungsi Air)",
    "question": "Apakah fungsi utama akar menyerap air dari dalam tanah bagi tumbuhan?",
    "options": {
      "A": "Membawa air dan nutrien ke seluruh bahagian tumbuhan untuk terus hidup",
      "B": "Mencuci daun pokok supaya sentiasa berkilat",
      "C": "Mengeringkan tanah di sekeliling pasu",
      "D": "Menghalang serangga daripada hinggap"
    },
    "correctAnswer": "A",
    "explanation": "Akar menyerap air dan garam mineral dari dalam tanah dan disalurkan melalui batang ke daun untuk tumbesaran."
  },
  {
    "id": "t2-sn-tumbuhan-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Tumbuh-tumbuhan (Percambahan & Tumbesaran)",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 5.1 / SP 5.1.6 (Kepentingan Tumbuhan)",
    "question": "Mengapakah tumbuh-tumbuhan sangat penting kepada manusia dan haiwan di muka bumi?",
    "options": {
      "A": "Tumbuhan membekalkan makanan, oksigen segar dan tempat perlindungan",
      "B": "Tumbuhan menghasilkan ais krim dan gula-gula",
      "C": "Tumbuhan mengurangkan kawasan tanah lapang",
      "D": "Tumbuhan mengeluarkan bunyi muzik di dalam hutan"
    },
    "correctAnswer": "A",
    "explanation": "Tumbuhan adalah pengeluar utama yang membekalkan oksigen untuk bernafas dan sumber makanan kepada manusia dan haiwan."
  },
  {
    "id": "t2-sn-terang-gelap-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.1 (Sumber Cahaya)",
    "question": "Antara berikut, yang manakah merupakan sumber cahaya semulajadi yang paling utama di bumi?",
    "options": {
      "A": "Matahari",
      "B": "Lilin",
      "C": "Lampu suluh",
      "D": "Cermin"
    },
    "correctAnswer": "A",
    "explanation": "Matahari ialah sumber cahaya semulajadi yang terbesar dan paling utama menerangi bumi pada waktu siang."
  },
  {
    "id": "t2-sn-terang-gelap-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Sederhana",
    "learningStandard": "SK 6.1 / SP 6.1.3 (Pembentukan Bayang-bayang)",
    "question": "Berdasarkan Rajah 10, bagaimanakah bayang-bayang terbentuk pada skrin?",
    "options": {
      "A": "Apabila cahaya yang bergerak lurus dihalang oleh suatu objek legap",
      "B": "Apabila cahaya dibiaskan ke dalam air",
      "C": "Apabila objek mengeluarkan cahayanya sendiri",
      "D": "Apabila skrin dipadamkan suisnya"
    },
    "correctAnswer": "A",
    "explanation": "Bayang-bayang terhasil kerana cahaya bergerak lurus dan tidak dapat menembusi objek legap yang menghalangnya."
  },
  {
    "id": "t2-sn-terang-gelap-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.4 (Kejelasan Bayang-bayang)",
    "question": "Objek manakah yang akan menghasilkan bayang-bayang yang PALING JELAS dan GELAP?",
    "options": {
      "A": "Buku teks tebal (objek legap)",
      "B": "Plastik pembungkus makanan yang jernih (lut sinar)",
      "C": "Kertas surih (lut cahaya)",
      "D": "Cermin mata jernih"
    },
    "correctAnswer": "A",
    "explanation": "Objek legap menghalang semua cahaya daripada melaluinya, maka bayang-bayang yang terbentuk adalah sangat jelas dan gelap."
  },
  {
    "id": "t2-sn-terang-gelap-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Sederhana",
    "learningStandard": "SK 6.1 / SP 6.1.4 (Objek Lut Sinar)",
    "question": "Berdasarkan Rajah 11, mengapakah Bahan Q (kaca jernih) TIDAK menghasilkan bayang-bayang yang jelas?",
    "options": {
      "A": "Kerana Bahan Q membenarkan hampir semua cahaya melaluinya",
      "B": "Kerana Bahan Q menyerap semua cahaya",
      "C": "Kerana Bahan Q memantulkan cahaya ke siling",
      "D": "Kerana Bahan Q berwarna hitam"
    },
    "correctAnswer": "A",
    "explanation": "Objek lut sinar membenarkan semua atau hampir semua cahaya menembusinya, oleh itu tiada bayang-bayang yang terbentuk."
  },
  {
    "id": "t2-sn-terang-gelap-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.2 (Keadaan Terang dan Gelap)",
    "question": "Apakah perbezaan melakukan aktiviti membaca buku di dalam bilik yang terang berbanding bilik yang gelap?",
    "options": {
      "A": "Di bilik terang, kita boleh membaca dengan jelas dan mudah kerana ada cahaya",
      "B": "Di bilik gelap, tulisan buku menjadi lebih besar dan terang",
      "C": "Bilik gelap lebih menyihatkan mata semasa membaca",
      "D": "Tiada apa-apa perbezaan antara bilik terang dan bilik gelap"
    },
    "correctAnswer": "A",
    "explanation": "Mata kita memerlukan cahaya untuk melihat objek di sekeliling. Membaca di tempat terang melindungi mata daripada keletihan."
  },
  {
    "id": "t2-sn-terang-gelap-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 6.1 / SP 6.1.5 (Permainan Bayang-bayang)",
    "question": "Dalam persembahan Wayang Kulit, dalang menggunakan sumber cahaya lampu untuk menghasilkan watak bayang-bayang pada kelir (kain putih). Patung wayang kulit diperbuat daripada:",
    "options": {
      "A": "Kulit lembu yang legap supaya membentuk bayang-bayang yang jelas dan tajam",
      "B": "Plastik jernih lut sinar supaya cahaya tembus sepenuhnya",
      "C": "Kaca lut sinar yang mudah pecah",
      "D": "Kertas tisu basah"
    },
    "correctAnswer": "A",
    "explanation": "Patung wayang kulit dibuat daripada kulit lembu/kambing yang bersifat legap bagi menghalang cahaya lampu dan membentuk bayang-bayang watak yang tajam."
  },
  {
    "id": "t2-sn-terang-gelap-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.1 (Bukan Sumber Cahaya)",
    "question": "Adakah cermin muka merupakan sumber cahaya? Mengapa?",
    "options": {
      "A": "Bukan, cermin hanya memantulkan cahaya daripada sumber cahaya lain",
      "B": "Ya, cermin mengeluarkan cahayanya sendiri pada waktu malam",
      "C": "Ya, cermin disambung kepada bateri",
      "D": "Bukan, cermin ialah sejenis tumbuhan"
    },
    "correctAnswer": "A",
    "explanation": "Sumber cahaya ialah objek yang mengeluarkan cahaya sendiri (cth: matahari, lampu, api). Cermin dan bulan bukan sumber cahaya, ia hanya memantulkan cahaya."
  },
  {
    "id": "t2-sn-terang-gelap-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Sederhana",
    "learningStandard": "SK 6.1 / SP 6.1.4 (Lut Cahaya)",
    "question": "Apakah sifat bahan yang membenarkan SEBAHAGIAN sahaja cahaya melaluinya dan menghasilkan bayang-bayang yang KURANG JELAS?",
    "options": {
      "A": "Lut cahaya (contohnya kertas surih atau plastik berwarna)",
      "B": "Legap",
      "C": "Lut sinar",
      "D": "Besi keluli"
    },
    "correctAnswer": "A",
    "explanation": "Bahan lut cahaya membenarkan sebahagian cahaya melaluinya, menyebabkan bayang-bayang yang terhasil kelihatan kabur atau kurang jelas."
  },
  {
    "id": "t2-sn-terang-gelap-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 6.1 / SP 6.1.3 (Kedudukan Bayang-bayang)",
    "question": "Jika sumber cahaya berada di sebelah KANAN sebuah kotak, di manakah kedudukan bayang-bayang kotak tersebut akan terbentuk?",
    "options": {
      "A": "Di sebelah KIRI kotak",
      "B": "Di sebelah KANAN kotak bersama lampu",
      "C": "Di atas kotak",
      "D": "Di dalam mentol lampu"
    },
    "correctAnswer": "A",
    "explanation": "Bayang-bayang sentiasa terbentuk pada arah yang bertentangan dengan kedudukan punca atau sumber cahaya."
  },
  {
    "id": "t2-sn-terang-gelap-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.1 (Haiwan Bercahaya)",
    "question": "Haiwan manakah yang dapat menghasilkan cahaya sendiri pada waktu malam yang gelap?",
    "options": {
      "A": "Kelip-kelip (kunang-kunang)",
      "B": "Semut hitam",
      "C": "Kucing rumah",
      "D": "Katak puru"
    },
    "correctAnswer": "A",
    "explanation": "Kelip-kelip (kunang-kunang) mempunyai organ khas pada abdomennya yang menghasilkan cahaya bioluminesens semulajadi."
  },
  {
    "id": "t2-sn-terang-gelap-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.1 (Keadaan Terang dan Gelap)",
    "question": "Pada waktu malam yang gelap-gelita tanpa bekalan elektrik, apakah alat buatan manusia yang boleh kita gunakan untuk menerangi bilik?",
    "options": {
      "A": "Lilin atau lampu suluh berkuasa bateri",
      "B": "Pembaris plastik",
      "C": "Cermin muka",
      "D": "Buku teks sains"
    },
    "correctAnswer": "A",
    "explanation": "Lilin dan lampu suluh ialah sumber cahaya buatan manusia yang menerangi kegelapan."
  },
  {
    "id": "t2-sn-terang-gelap-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.2 (Kepentingan Cahaya)",
    "question": "Mengapakah manusia sukar membaca buku di dalam bilik yang gelap gelita?",
    "options": {
      "A": "Kerana mata memerlukan cahaya yang dipantulkan dari objek untuk melihat dengan jelas",
      "B": "Kerana buku teks akan hilang tulisannya dalam gelap",
      "C": "Kerana bilik gelap terlalu sejuk",
      "D": "Kerana tulisan buku hanya menyala pada waktu siang"
    },
    "correctAnswer": "A",
    "explanation": "Kita dapat melihat objek di sekeliling apabila ada cahaya yang terpantul daripada objek itu ke dalam mata kita."
  },
  {
    "id": "t2-sn-terang-gelap-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Sederhana",
    "learningStandard": "SK 6.1 / SP 6.1.4 (Kejelasan Bayang-bayang)",
    "question": "Antara bahan berikut, yang manakah menghasilkan bayang-bayang yang PALING GELAP dan JELAS?",
    "options": {
      "A": "Kadbod tebal / kepingan kayu (Objek legap)",
      "B": "Kepingan plastik pembalut lutsinar",
      "C": "Cermin tingkap kaca jernih",
      "D": "Udara bersih di dalam bilik"
    },
    "correctAnswer": "A",
    "explanation": "Objek legap menghalang semua cahaya daripada melaluinya, menghasilkan bayang-bayang yang paling gelap dan jelas."
  },
  {
    "id": "t2-sn-terang-gelap-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "Mudah",
    "learningStandard": "SK 6.1 / SP 6.1.3 (Kedudukan Bayang-bayang)",
    "question": "Jika sumber cahaya berada di sebelah kiri objek, di manakah kedudukan bayang-bayang terbentuk?",
    "options": {
      "A": "Di sebelah kanan objek (bertentangan dengan sumber cahaya)",
      "B": "Di sebelah kiri objek bersama cahaya",
      "C": "Tepat di atas lampu suluh",
      "D": "Di dalam objek itu sendiri"
    },
    "correctAnswer": "A",
    "explanation": "Bayang-bayang sentiasa terbentuk pada arah yang bertentangan dengan kedudukan punca cahaya."
  },
  {
    "id": "t2-sn-terang-gelap-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Terang, Gelap & Bayang-bayang",
    "difficulty": "KBAT (Aras Rendah)",
    "learningStandard": "SK 6.1 / SP 6.1.5 (Permainan Wayang Kulit)",
    "question": "Permainan tradisional wayang kulit mengaplikasikan konsep sains yang mana?",
    "options": {
      "A": "Pembentukan bayang-bayang apabila cahaya lampu dihalang oleh watak patung legap",
      "B": "Pengecasan bateri elektrik secara pantas",
      "C": "Percambahan biji benih dalam tanah",
      "D": "Pewarisan ciri genetik daripada induk"
    },
    "correctAnswer": "A",
    "explanation": "Wayang kulit menggunakan kelir (kain putih) dan lampu untuk menghasilkan bayang-bayang patung kulit berukir yang legap."
  },
  {
    "id": "t2-sn-elektrik-01",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.1 (Komponen Litar)",
    "question": "Apakah fungsi utama sel kering (bateri) di dalam suatu litar elektrik?",
    "options": {
      "A": "Membekalkan tenaga elektrik",
      "B": "Menghubungkan litar dengan memutuskan wayar",
      "C": "Mengeluarkan cahaya terang",
      "D": "Menyerap haba panas"
    },
    "correctAnswer": "A",
    "explanation": "Sel kering berfungsi sebagai punca kuasa yang membekalkan tenaga elektrik kepada litar."
  },
  {
    "id": "t2-sn-elektrik-02",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.2 (Fungsi Suis)",
    "question": "Berdasarkan Rajah 12, mengapakah mentol menyala dengan terang?",
    "options": {
      "A": "Kerana suis ditutup dan membentuk litar elektrik yang lengkap",
      "B": "Kerana wayar penyambung telah dipotong",
      "C": "Kerana sel kering telah kehabisan tenaga",
      "D": "Kerana mentol diperbuat daripada plastik"
    },
    "correctAnswer": "A",
    "explanation": "Apabila suis ditutup, arus elektrik dapat mengalir melalui seluruh litar yang lengkap, menyebabkan mentol menyala."
  },
  {
    "id": "t2-sn-elektrik-03",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.3 (Fungsi Suis)",
    "question": "Apakah fungsi suis di dalam sebuah litar elektrik?",
    "options": {
      "A": "Menyambung atau memutuskan litar elektrik",
      "B": "Menghasilkan tenaga cahaya",
      "C": "Menyimpan tenaga air",
      "D": "Menggantikan fungsi sel kering"
    },
    "correctAnswer": "A",
    "explanation": "Suis digunakan untuk melengkapkan (menyambung) atau memutuskan pengaliran arus elektrik dalam litar."
  },
  {
    "id": "t2-sn-elektrik-04",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.4 (Penyelesaian Masalah Litar)",
    "question": "Amir memasang litar elektrik dengan betul, tetapi mentol masih TIDAK menyala walaupun suis telah ditutup. Antara berikut, apakah kemungkinan puncanya?",
    "options": {
      "A": "Sel kering telah kehabisan tenaga atau filamen mentol telah rosak (terbakar)",
      "B": "Wayar elektrik dipasang terlalu kemas",
      "C": "Mentol menerima terlalu banyak tenaga elektrik",
      "D": "Bilik sains terlalu sejuk"
    },
    "correctAnswer": "A",
    "explanation": "Mentol tidak menyala mungkin disebabkan oleh sel kering yang kehabisan tenaga, mentol rosak/terbakar, pemasangan wayar yang longgar, atau suis yang rosak."
  },
  {
    "id": "t2-sn-elektrik-05",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.5 (Konduktor dan Penebat)",
    "question": "Berdasarkan Rajah 13, apabila klip kertas logam diuji, mentol menyala. Ini membuktikan bahawa logam ialah sejenis:",
    "options": {
      "A": "Konduktor elektrik (membenarkan arus elektrik mengalir melaluinya)",
      "B": "Penebat elektrik",
      "C": "Bahan lut sinar",
      "D": "Bahan magnet yang rosak"
    },
    "correctAnswer": "A",
    "explanation": "Konduktor elektrik ialah bahan yang membenarkan arus elektrik mengalir melaluinya, seperti kebanyakan logam (besi, tembaga, aluminium)."
  },
  {
    "id": "t2-sn-elektrik-06",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.5 (Penebat Elektrik)",
    "question": "Antara objek berikut, yang manakah merupakan PENEBAT ELEKTRIK (tidak membenarkan arus elektrik mengalir)?",
    "options": {
      "A": "Pemadam getah dan pembaris plastik",
      "B": "Paku besi dan kunci rumah tembaga",
      "C": "Duit syiling 50 sen dan sudu besi",
      "D": "Klip kertas logam"
    },
    "correctAnswer": "A",
    "explanation": "Getah, plastik, kayu dan kaca ialah penebat elektrik yang tidak membenarkan arus elektrik mengalir."
  },
  {
    "id": "t2-sn-elektrik-07",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 7.1 / SP 7.1.5 (Aplikasi Keselamatan Elektrik)",
    "question": "Mengapakah bahagian luar wayar elektrik dibalut dengan lapisan plastik berwarna-warni?",
    "options": {
      "A": "Plastik ialah penebat elektrik yang melindungi manusia daripada terkena renjatan elektrik",
      "B": "Supaya wayar kelihatan cantik dan wangi",
      "C": "Supaya elektrik boleh mengalir lebih pantas ke udara",
      "D": "Supaya wayar bertambah berat"
    },
    "correctAnswer": "A",
    "explanation": "Plastik adalah penebat elektrik yang selamat dipegang dan menghalang arus elektrik daripada menyentuh tangan kita."
  },
  {
    "id": "t2-sn-elektrik-08",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.1 (Wayar Penyambung)",
    "question": "Apakah fungsi wayar penyambung di dalam litar elektrik?",
    "options": {
      "A": "Menyambungkan setiap komponen elektrik untuk membolehkan arus mengalir",
      "B": "Membekalkan cahaya pada waktu malam",
      "C": "Menyimpan bateri",
      "D": "Memadamkan mentol yang panas"
    },
    "correctAnswer": "A",
    "explanation": "Wayar penyambung menghubungkan sel kering, suis dan mentol menjadi sebuah litar lengkap."
  },
  {
    "id": "t2-sn-elektrik-09",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "KBAT (Aras Tinggi)",
    "learningStandard": "SK 7.1 / SP 7.1.4 (Kecerahan Mentol)",
    "question": "Apakah yang akan berlaku kepada kecerahan mentol jika satu lagi sel kering baharu ditambah secara bersiri ke dalam litar tersebut?",
    "options": {
      "A": "Mentol akan menyala dengan lebih cerah kerana tenaga elektrik bertambah",
      "B": "Kecerahan mentol akan menjadi semakin malap",
      "C": "Mentol akan serta-merta bertukar warna menjadi biru",
      "D": "Tiada apa-apa perubahan pada kecerahan mentol"
    },
    "correctAnswer": "A",
    "explanation": "Menambah bilangan sel kering menambah voltan dan arus elektrik, menyebabkan mentol menyala dengan lebih cerah."
  },
  {
    "id": "t2-sn-elektrik-10",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.2 (Litar Terbuka)",
    "question": "Apakah yang dimaksudkan dengan litar tidak lengkap (litar terbuka)?",
    "options": {
      "A": "Litar yang mempunyai suis terbuka atau sambungan wayar terputus sehingga mentol tidak menyala",
      "B": "Litar yang menggunakan bateri yang terlalu besar",
      "C": "Litar yang diletakkan di luar bilik sains",
      "D": "Litar yang tidak mempunyai suis langsung"
    },
    "correctAnswer": "A",
    "explanation": "Litar terbuka atau tidak lengkap berlaku apabila terdapat pemutus sambungan (seperti suis terbuka atau wayar tercabut), menghalang arus elektrik daripada mengalir."
  },
  {
    "id": "t2-sn-elektrik-11",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.5 (Konduktor Elektrik)",
    "question": "Bahan yang membenarkan arus elektrik mengalir melaluinya dinamakan:",
    "options": {
      "A": "Konduktor elektrik",
      "B": "Penebat elektrik",
      "C": "Kotiledon",
      "D": "Spesimen sains"
    },
    "correctAnswer": "A",
    "explanation": "Konduktor elektrik ialah bahan yang membenarkan arus elektrik mengalir melaluinya, seperti logam."
  },
  {
    "id": "t2-sn-elektrik-12",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.5 (Penebat Elektrik)",
    "question": "Antara objek harian berikut, yang manakah merupakan PENEBAT elektrik (tidak membenarkan mentol menyala)?",
    "options": {
      "A": "Pemadam getah dan pembaris plastik",
      "B": "Klip kertas besi",
      "C": "Paku besi",
      "D": "Duit syiling tembaga"
    },
    "correctAnswer": "A",
    "explanation": "Getah dan plastik ialah penebat elektrik yang menghalang pengaliran arus elektrik."
  },
  {
    "id": "t2-sn-elektrik-13",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Sederhana",
    "learningStandard": "SK 7.1 / SP 7.1.1 (Pemegang Mentol)",
    "question": "Apakah fungsi pemegang mentol di dalam litar elektrik?",
    "options": {
      "A": "Memegang mentol pada kedudukannya dan menghubungkan terminal ke wayar",
      "B": "Membekalkan tenaga elektrik ke seluruh litar",
      "C": "Memutuskan sambungan elektrik jika suis rosak",
      "D": "Menyejukkan mentol yang panas"
    },
    "correctAnswer": "A",
    "explanation": "Pemegang mentol memegang mentol dengan kukuh dan menyambungkannya ke litar elektrik."
  },
  {
    "id": "t2-sn-elektrik-14",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "Mudah",
    "learningStandard": "SK 7.1 / SP 7.1.6 (Keselamatan Elektrik)",
    "question": "Mengapakah pemegang wayar elektrik disalut dengan lapisan plastik?",
    "options": {
      "A": "Plastik ialah penebat yang menghalang kita daripada terkena renjatan elektrik",
      "B": "Supaya wayar kelihatan cantik dan berkilat",
      "C": "Untuk menambah berat wayar penyambung",
      "D": "Supaya wayar tidak mudah basah"
    },
    "correctAnswer": "A",
    "explanation": "Plastik ialah penebat elektrik yang melindungi pengguna daripada bahaya renjatan elektrik."
  },
  {
    "id": "t2-sn-elektrik-15",
    "year": 2,
    "subject": "Sains",
    "topic": "Elektrik (Komponen Litar & Konduktor)",
    "difficulty": "KBAT (Aras Sederhana)",
    "learningStandard": "SK 7.1 / SP 7.1.3 (Menyiasat Mentol Tidak Menyala)",
    "question": "Suis telah ditutup tetapi mentol masih tidak menyala. Antara berikut, apakah kemungkinan punca masalah itu?",
    "options": {
      "A": "Filamen mentol telah putus (mentol terbakar) atau bateri telah kehabisan tenaga",
      "B": "Bilik sains terlalu terang dengan cahaya matahari",
      "C": "Wayar penyambung diperbuat daripada kuprum",
      "D": "Suis diperbuat daripada bahan konduktor"
    },
    "correctAnswer": "A",
    "explanation": "Jika litar lengkap tetapi mentol tidak menyala, puncanya mungkin sel kering habis, mentol rosak/terbakar, atau wayar dipasang longgar."
  }
];
