import * as fs from 'fs';
import { QuizQuestion } from '../src/types';
import { MATEMATIK_TAHUN_5_QUESTIONS } from '../src/data/matematikTahun5';
import { SAINS_TAHUN_5_QUESTIONS } from '../src/data/sainsTahun5';

// 1. MATEMATIK TAHUN 5 (+5 per topic x 8 topics = +40 questions)
const mat5Topics = [
  'Nombor Bulat & Operasi Asas hingga 1,000,000',
  'Pecahan, Perpuluhan dan Peratus',
  'Wang hingga RM1,000,000',
  'Masa dan Waktu (Abad, Dekad, Tahun)',
  'Ukuran & Sukatan (Panjang, Jisim, Isi Padu)',
  'Ruang, Sudut & Bentuk Gabungan',
  'Koordinat, Nisbah dan Kadaran',
  'Pengurusan Data (Mod, Median, Min, Julat)',
];

const mat5Extra: QuizQuestion[] = [];
function addM5(tIdx: number, qIdx: number, subtopic: string, difficulty: 'Mudah' | 'Sederhana' | 'Sukar', question: string, options: any, correctAnswer: 'A' | 'B' | 'C' | 'D', explanation: string, ls: string) {
  mat5Extra.push({
    id: `t5-mat-extra-${tIdx + 1}-${qIdx}`,
    year: 5,
    subject: 'Matematik',
    topic: mat5Topics[tIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard: ls,
  });
}

// Topic 1: Nombor Bulat & Operasi Asas hingga 1,000,000
addM5(0, 11, 'Nombor Perdana Lingkungan 100', 'Mudah', 'Antara nombor berikut, yang manakah BUKAN nombor perdana?', { A: '91', B: '79', C: '83', D: '89' }, 'A', '91 bukan nombor perdana kerana 91 boleh dibahagi dengan 7 dan 13 (7 × 13 = 91).', 'SK 1.2 Nombor Perdana');
addM5(0, 12, 'Pola Nombor Menaik', 'Sederhana', 'Apakah nombor yang hilang dalam pola: 340,000, 345,000, 350,000, _______?', { A: '355,000', B: '360,000', C: '350,500', D: '351,000' }, 'A', 'Pola nombor bertambah lima ribu-lima ribu: 350,000 + 5,000 = 355,000.', 'SK 1.5 Pola Nombor');
addM5(0, 13, 'Operasi Bergabung Darab dan Bahagi', 'Sederhana', 'Hitung: 12,400 × 5 ÷ 100.', { A: '620', B: '6,200', C: '62', D: '62,000' }, 'A', '12,400 × 5 = 62,000. 62,000 ÷ 100 = 620.', 'SK 1.7 Operasi Bergabung');
addM5(0, 14, 'Penggunaan Tanda Kurung', 'Sederhana', 'Hitung: 250,000 + (45,000 - 18,500) × 2.', { A: '303,000', B: '300,000', C: '310,000', D: '298,000' }, 'A', 'Selesaikan kurungan dahulu: 45,000 - 18,500 = 26,500. Kemudian darab: 26,500 × 2 = 53,000. 250,000 + 53,000 = 303,000.', 'SK 1.7 Operasi Bergabung Kurungan');
addM5(0, 15, 'Penyelesaian Masalah Industri KBAT', 'Sukar', 'Sebuah kilang menghasilkan 480,000 penyedut minuman mesra alam sebulan. Jika penyedut diedarkan sama banyak kepada 60 buah pasar raya, berapakah bilangan penyedut setiap pasar raya?', { A: '8,000 unit', B: '80,000 unit', C: '6,000 unit', D: '800 unit' }, 'A', '480,000 ÷ 60 = 8,000 unit bagi setiap pasar raya.', 'SK 1.9 Penyelesaian Masalah');

// Topic 2: Pecahan, Perpuluhan dan Peratus
addM5(1, 11, 'Pendaraban Pecahan dengan Nombor Bulat', 'Mudah', 'Hitung: 3/5 × 250.', { A: '150', B: '120', C: '175', D: '100' }, 'A', '250 ÷ 5 = 50. 3 × 50 = 150.', 'SK 2.1 Pecahan');
addM5(1, 12, 'Pendaraban Dua Pecahan', 'Sederhana', 'Hitung nilai bagi 2/3 × 3/4 dalam bentuk termudah.', { A: '1/2', B: '6/12', C: '2/4', D: '5/7' }, 'A', '2/3 × 3/4 = 6/12 = 1/2.', 'SK 2.1 Pendaraban Pecahan');
addM5(1, 13, 'Pembahagian Perpuluhan', 'Sederhana', 'Hitung: 36.48 ÷ 6.', { A: '6.08', B: '6.8', C: '6.80', D: '0.68' }, 'A', '36.48 ÷ 6 = 6.08.', 'SK 2.2 Operasi Perpuluhan');
addM5(1, 14, 'Penukaran Peratus kepada Perpuluhan', 'Mudah', 'Tukarkan 145% kepada nombor perpuluhan.', { A: '1.45', B: '14.5', C: '0.145', D: '145.0' }, 'A', '145 ÷ 100 = 1.45.', 'SK 2.3 Hubungan Peratus dan Perpuluhan');
addM5(1, 15, 'Peratusan Kenaikan KBAT', 'Sukar', 'Gaji Puan Aisyah ialah RM3,200 sebulan. Dia menerima kenaikan gaji sebanyak 5%. Berapakah jumlah gaji baharunya?', { A: 'RM3,360', B: 'RM3,350', C: 'RM3,400', D: 'RM3,250' }, 'A', 'Kenaikan: 5/100 × RM3,200 = RM160. Gaji baharu: RM3,200 + RM160 = RM3,360.', 'SK 2.3 Penyelesaian Masalah Peratus');

// Topic 3: Wang hingga RM1,000,000
addM5(2, 11, 'Faedah Simpanan Mudah', 'Sederhana', 'Encik Johan menyimpan RM20,000 dalam akaun simpanan tetap dengan kadar faedah 3% setahun. Berapakah nilai faedah yang diterimanya selepas 1 tahun?', { A: 'RM600', B: 'RM6,000', C: 'RM300', D: 'RM60' }, 'A', 'Faedah = 3/100 × RM20,000 = RM600.', 'SK 3.2 Faedah Mudah');
addM5(2, 12, 'Untung dan Rugi', 'Sederhana', 'Seorang peniaga membeli sebuah basikal dengan harga kos RM350 dan menjualnya dengan harga RM480. Berapakah keuntungan yang diperolehnya?', { A: 'RM130', B: 'RM120', C: 'RM150', D: 'RM140' }, 'A', 'Untung = Harga Jual - Harga Kos = RM480 - RM350 = RM130.', 'SK 3.1 Untung dan Rugi');
addM5(2, 13, 'Harga Diskaun', 'Mudah', 'Sebuah jam tangan berharga RM200 diberi diskaun sebanyak 20%. Berapakah harga jualan selepas diskaun?', { A: 'RM160', B: 'RM180', C: 'RM170', D: 'RM150' }, 'A', 'Diskaun = 20/100 × RM200 = RM40. Harga jualan = RM200 - RM40 = RM160.', 'SK 3.1 Diskaun');
addM5(2, 14, 'Aset dan Liabiliti', 'Mudah', 'Antara berikut, yang manakah dikategorikan sebagai liabiliti bagi seseorang individu?', { A: 'Pinjaman kad kredit yang belum dibayar', B: 'Rumah kediaman sendiri', C: 'Simpanan wang di bank', D: 'Barang kemas bernilai tinggi' }, 'A', 'Liabiliti ialah tanggungan hutang kewangan yang perlu dibayar balik.', 'SK 3.3 Pengurusan Kewangan');
addM5(2, 15, 'Pelaburan dan Dividen KBAT', 'Sukar', 'Puan Zurina melabur RM50,000 dalam unit amanah saham. Pada akhir tahun, syarikat mengumumkan dividen 6%. Berapakah jumlah keseluruhan wang Puan Zurina bersama dividen?', { A: 'RM53,000', B: 'RM56,000', C: 'RM52,500', D: 'RM54,000' }, 'A', 'Dividen = 6/100 × RM50,000 = RM3,000. Jumlah keseluruhan = RM50,000 + RM3,000 = RM53,000.', 'SK 3.2 Pelaburan dan Dividen');

// Topic 4: Masa dan Waktu (Abad, Dekad, Tahun)
addM5(3, 11, 'Pertukaran Abad kepada Tahun', 'Mudah', 'Tukarkan 4.5 abad kepada tahun.', { A: '450 tahun', B: '45 tahun', C: '4,500 tahun', D: '405 tahun' }, 'A', '1 abad = 100 tahun. 4.5 × 100 = 450 tahun.', 'SK 4.1 Abad dan Tahun');
addM5(3, 12, 'Pertukaran Dekad kepada Tahun', 'Mudah', 'Tukarkan 3 1/2 dekad kepada tahun.', { A: '35 tahun', B: '30 tahun', C: '32 tahun', D: '40 tahun' }, 'A', '1 dekad = 10 tahun. 3 1/2 × 10 = 35 tahun.', 'SK 4.1 Dekad dan Tahun');
addM5(3, 13, 'Penambahan Abad dan Dekad', 'Sederhana', 'Hitung: 2 abad 4 dekad + 1 abad 8 dekad.', { A: '4 abad 2 dekad', B: '3 abad 12 dekad', C: '4 abad 4 dekad', D: '3 abad 2 dekad' }, 'A', '4 dekad + 8 dekad = 12 dekad = 1 abad 2 dekad. 2 + 1 + 1 = 4 abad 2 dekad.', 'SK 4.2 Operasi Masa');
addM5(3, 14, 'Pendaraban Masa Abad', 'Sederhana', 'Hitung: 3 × 1 abad 25 tahun.', { A: '3 abad 75 tahun', B: '3 abad 50 tahun', C: '4 abad 25 tahun', D: '4 abad 75 tahun' }, 'A', '3 × 1 abad = 3 abad. 3 × 25 tahun = 75 tahun. Jumlah = 3 abad 75 tahun.', 'SK 4.2 Operasi Darab Masa');
addM5(3, 15, 'Zon Masa Antarabangsa KBAT', 'Sukar', 'Kuala Lumpur berada pada zon waktu GMT+8 manakala London berada pada zon waktu GMT+0. Jika waktu di Kuala Lumpur ialah pukul 8:00 malam hari Selasa, pukul berapakah waktu di London pada ketika itu?', { A: '12:00 tengah hari hari Selasa', B: '4:00 petang hari Selasa', C: '12:00 tengah malam hari Rabu', D: '8:00 pagi hari Selasa' }, 'A', 'London 8 jam di belakang Kuala Lumpur: 8:00 p.m. - 8 jam = 12:00 tengah hari Selasa.', 'SK 4.3 Zon Waktu Antarabangsa');

// Topic 5: Ukuran & Sukatan (Panjang, Jisim, Isi Padu)
addM5(4, 11, 'Penukaran Kilometer kepada Pecahan', 'Mudah', 'Nyatakan 3 km 750 m sebagai nombor bercampur kilometer.', { A: '3 3/4 km', B: '3 1/2 km', C: '3 1/4 km', D: '3 7/10 km' }, 'A', '750 m = 750/1000 km = 3/4 km. Jadi 3 3/4 km.', 'SK 5.1 Penukaran Unit Panjang');
addM5(4, 12, 'Pendaraban Jisim dengan Perpuluhan', 'Sederhana', 'Hitung: 6 × 2.45 kg dalam kilogram dan gram.', { A: '14 kg 700 g', B: '14 kg 450 g', C: '12 kg 700 g', D: '15 kg 200 g' }, 'A', '6 × 2.45 kg = 14.7 kg = 14 kg 700 g.', 'SK 5.2 Operasi Jisim');
addM5(4, 13, 'Pembahagian Isi Padu Cecair', 'Sederhana', 'Sebanyak 15 ℓ jus oren dituang sama banyak ke dalam 20 biji jag. Berapakah isi padu jus dalam setiap jag dalam mililiter?', { A: '750 mℓ', B: '650 mℓ', C: '700 mℓ', D: '800 mℓ' }, 'A', '15 ℓ = 15,000 mℓ. 15,000 ÷ 20 = 750 mℓ setiap jag.', 'SK 5.3 Operasi Isi Padu');
addM5(4, 14, 'Penolakan Gabungan Sukatan', 'Sederhana', 'Hitung: 8 kg - 2 kg 450 g - 1 kg 800 g.', { A: '3 kg 750 g', B: '4 kg 250 g', C: '3 kg 250 g', D: '4 kg 750 g' }, 'A', '8,000 g - 2,450 g = 5,550 g. 5,550 g - 1,800 g = 3,750 g = 3 kg 750 g.', 'SK 5.2 Operasi Tolak Jisim');
addM5(4, 15, 'Penyelesaian Masalah Sukatan KBAT', 'Sukar', 'Puan Noraini memerlukan 350 mℓ susu cair untuk sebiji kek span. Dia ingin membuat 8 biji kek yang sama. Berapakah bilangan kotak susu 1 liter yang perlu dibelinya?', { A: '3 kotak', B: '2 kotak', C: '4 kotak', D: '1 kotak' }, 'A', 'Jumlah susu: 8 × 350 mℓ = 2,800 mℓ = 2.8 liter. Maka dia perlu membeli 3 kotak susu 1 liter.', 'SK 5.3 Aplikasi Isi Padu');

// Topic 6: Ruang, Sudut & Bentuk Gabungan
addM5(5, 11, 'Jenis Sudut (Tirus, Cakah, Tegak)', 'Mudah', 'Sudut yang besarnya lebih daripada 90° tetapi kurang daripada 180° dinamakan:', { A: 'Sudut cakah', B: 'Sudut tirus', C: 'Sudut tegak', D: 'Sudut refleks' }, 'A', 'Sudut cakah mempunyai ukuran antara 90° hingga 180°.', 'SK 6.1 Jenis Sudut');
addM5(5, 12, 'Sudut Pedalaman Segi Tiga', 'Mudah', 'Jumlah hasil tambah sudut pedalaman bagi mana-mana bentuk segi tiga ialah:', { A: '180°', B: '360°', C: '90°', D: '270°' }, 'A', 'Jumlah sudut pedalaman mana-mana segi tiga sentiasa 180°.', 'SK 6.1 Sudut Segi Tiga');
addM5(5, 13, 'Perimeter Bentuk Gabungan', 'Sederhana', 'Sebuah bentuk gabungan terdiri daripada segi empat sama bersisi 6 cm dan segi tiga sama sisi bersisi 6 cm yang berkongsi satu sisi. Berapakah perimeter bentuk gabungan itu?', { A: '30 cm', B: '36 cm', C: '24 cm', D: '42 cm' }, 'A', 'Sisi luaran = 3 sisi segi empat + 2 sisi segi tiga = 5 sisi × 6 cm = 30 cm.', 'SK 6.2 Perimeter');
addM5(5, 14, 'Luas Segi Tiga', 'Sederhana', 'Hitung luas sebuah segi tiga bersudut tegak yang mempunyai tapak 8 cm dan tinggi 12 cm.', { A: '48 cm²', B: '96 cm²', C: '40 cm²', D: '24 cm²' }, 'A', 'Luas segi tiga = 1/2 × tapak × tinggi = 1/2 × 8 × 12 = 48 cm².', 'SK 6.3 Luas');
addM5(5, 15, 'Isi Padu Bentuk Gabungan Kubus & Kuboid KBAT', 'Sukar', 'Sebuah bongkah gabungan terdiri daripada kubus bersisi 4 cm dan kuboid berukuran 6 cm × 4 cm × 5 cm. Berapakah jumlah isi padu bentuk gabungan itu?', { A: '184 cm³', B: '120 cm³', C: '64 cm³', D: '160 cm³' }, 'A', 'Isi padu kubus: 4 × 4 × 4 = 64 cm³. Isi padu kuboid: 6 × 4 × 5 = 120 cm³. Jumlah = 64 + 120 = 184 cm³.', 'SK 6.4 Isi Padu Bongkah Gabungan');

// Topic 7: Koordinat, Nisbah dan Kadaran
addM5(6, 11, 'Asalan Satah Cartes', 'Mudah', 'Apakah koordinat bagi titik asalan pada satah Cartes?', { A: '(0, 0)', B: '(1, 1)', C: '(0, 1)', D: '(1, 0)' }, 'A', 'Titik persilangan paksi-x dan paksi-y dinamakan asalan dengan koordinat (0, 0).', 'SK 7.1 Koordinat Satah Cartes');
addM5(6, 12, 'Jarak Mencancang', 'Mudah', 'Titik M berada pada (4, 2) dan titik N berada pada (4, 9). Berapakah jarak mencancang antara titik M dan N?', { A: '7 unit', B: '5 unit', C: '9 unit', D: '4 unit' }, 'A', 'Jarak mencancang = 9 - 2 = 7 unit.', 'SK 7.1 Jarak Mencancang');
addM5(6, 13, 'Nisbah Termudah', 'Mudah', 'Permudahkan nisbah 15 : 25 kepada sebutan terendah.', { A: '3 : 5', B: '5 : 3', C: '1 : 5', D: '3 : 10' }, 'A', 'Bahagikan kedua-dua nombor dengan 5: 15 ÷ 5 = 3, 25 ÷ 5 = 5. Nisbah = 3 : 5.', 'SK 7.2 Nisbah Termudah');
addM5(6, 14, 'Kadaran Harga Barang', 'Sederhana', 'Harga bagi 4 kilogram mangga harumanis ialah RM48. Berapakah harga bagi 7 kilogram mangga yang sama?', { A: 'RM84', B: 'RM72', C: 'RM96', D: 'RM80' }, 'A', 'Harga 1 kg = RM48 ÷ 4 = RM12. Harga 7 kg = 7 × RM12 = RM84.', 'SK 7.3 Kadaran Kaedah Unitari');
addM5(6, 15, 'Penyelesaian Masalah Nisbah Campuran KBAT', 'Sukar', 'Nisbah bilangan kelereng biru kepada kelereng merah di dalam balang ialah 2 : 3. Jika terdapat 24 biji kelereng biru, berapakah jumlah keseluruhan kelereng di dalam balang itu?', { A: '60 biji', B: '36 biji', C: '48 biji', D: '50 biji' }, 'A', '2 bahagian = 24 biji -> 1 bahagian = 12 biji. Jumlah bahagian = 2 + 3 = 5 bahagian. Jumlah = 5 × 12 = 60 biji kelereng.', 'SK 7.2 Aplikasi Nisbah');

// Topic 8: Pengurusan Data (Mod, Median, Min, Julat)
addM5(7, 11, 'Definisi Mod', 'Mudah', 'Dalam satu set data, nilai yang mempunyai kekerapan paling tinggi dinamakan:', { A: 'Mod', B: 'Median', C: 'Min', D: 'Julat' }, 'A', 'Mod ialah nilai data yang paling kerap berulang.', 'SK 8.1 Mod');
addM5(7, 12, 'Mencari Mod', 'Mudah', 'Diberi data markah kuiz: 6, 8, 7, 8, 9, 8, 5, 7. Apakah mod bagi data tersebut?', { A: '8', B: '7', C: '6', D: '9' }, 'A', 'Nombor 8 muncul sebanyak 3 kali (paling kerap), maka mod ialah 8.', 'SK 8.1 Menentukan Mod');
addM5(7, 13, 'Definisi Median', 'Mudah', 'Nilai data yang terletak di kedudukan paling tengah selepas data disusun mengikut tertib dinamakan:', { A: 'Median', B: 'Mod', C: 'Min', D: 'Julat' }, 'A', 'Median ialah nilai titik tengah bagi set data bertertib.', 'SK 8.1 Median');
addM5(7, 14, 'Mencari Julat', 'Sederhana', 'Diberi set suhu harian (°C): 28, 32, 29, 35, 30. Apakah julat suhu bagi set data tersebut?', { A: '7°C', B: '6°C', C: '5°C', D: '8°C' }, 'A', 'Julat = Nilai Maksimum - Nilai Minimum = 35 - 28 = 7°C.', 'SK 8.1 Julat Data');
addM5(7, 15, 'Pengiraan Min Purata KBAT', 'Sukar', 'Markah bagi 4 orang murid dalam ujian Matematik ialah 80, 85, 90, dan 65. Berapakah min markah mereka?', { A: '80', B: '82', C: '85', D: '78' }, 'A', 'Min = (80 + 85 + 90 + 65) ÷ 4 = 320 ÷ 4 = 80.', 'SK 8.1 Min Data');

const allMat5 = [...MATEMATIK_TAHUN_5_QUESTIONS, ...mat5Extra];
fs.writeFileSync('src/data/matematikTahun5.ts', `import { QuizQuestion } from '../types';\n\nexport const MATEMATIK_TAHUN_5_QUESTIONS: QuizQuestion[] = ${JSON.stringify(allMat5, null, 2)};\n`, 'utf8');
console.log(`Updated Matematik Tahun 5: total ${allMat5.length} questions.`);

// 2. SAINS TAHUN 5 (+5 per topic x 7 topics = +35 questions)
const sn5Topics = [
  'Kemahiran Saintifik & Peraturan Bilik Sains',
  'Manusia (Sistem Rangka & Peredaran Darah)',
  'Haiwan (Kemandirian Spesies & Rantai Makanan)',
  'Tumbuh-tumbuhan (Kemandirian & Pencaran)',
  'Elektrik (Litar Bersiri & Selari)',
  'Haba, Suhu & Asid Alkali',
  'Bumi, Angkasa & Kestabilan Struktur',
];

const sn5Extra: QuizQuestion[] = [];
function addS5(tIdx: number, qIdx: number, subtopic: string, difficulty: 'Mudah' | 'Sederhana' | 'Sukar', question: string, options: any, correctAnswer: 'A' | 'B' | 'C' | 'D', explanation: string, ls: string) {
  sn5Extra.push({
    id: `t5-sn-extra-${tIdx + 1}-${qIdx}`,
    year: 5,
    subject: 'Sains',
    topic: sn5Topics[tIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard: ls,
  });
}

// Topic 1: Kemahiran Saintifik & Peraturan Bilik Sains
addS5(0, 11, 'Peraturan Makmal Bahan Kimia', 'Mudah', 'Apakah tindakan pertama yang wajib diambil sekiranya terdapat bahan kimia tertumpah di lantai bilik sains?', { A: 'Segera memaklumkan kepada guru sains yang bertugas', B: 'Membersihkannya sendiri dengan tangan kosong', C: 'Membiarkannya kering sendiri', D: 'Menutupnya dengan kertas buku teks' }, 'A', 'Sebarang kemalangan atau tumpahan bahan kimia mesti dilaporkan kepada guru dengan serta-merta.', 'SK 2.1 Peraturan Bilik Sains');
addS5(0, 12, 'Mengukur Suhu Cecair', 'Mudah', 'Semasa mengukur suhu air dengan termometer makmal, mentol termometer mestilah:', { A: 'Tenggelam sepenuhnya dalam cecair tanpa menyentuh dasar bikar', B: 'Menyentuh terus dasar bikar kaca', C: 'Diletakkan di atas permukaan udara', D: 'Dipegang menggunakan jari' }, 'A', 'Mentol termometer tidak boleh menyentuh dasar bekas kaca agar bacaan suhu air tepat.', 'SK 1.1 Kemahiran Manipulatif');
addS5(0, 13, 'Mendefinisi Secara Operasi', 'Sederhana', 'Mendefinisi secara operasi tentang "kadar pernafasan manusia" boleh dinyatakan sebagai:', { A: 'Bilangan pergerakan dada naik dan turun dalam tempoh satu minit', B: 'Jumlah oksigen dalam udara', C: 'Kecergasan seseorang berlari', D: 'Warna darah manusia' }, 'A', 'Definisi operasi menyatakan tindakan yang dilakukan dan pemerhatian yang diukur.', 'SK 1.1 Mendefinisi Secara Operasi');
addS5(0, 14, 'Meramal Berdasarkan Corak', 'Sederhana', 'Suhu air mendidih yang dibiarkan menyejuk dicatat setiap 5 minit: 100°C, 85°C, 72°C, 61°C. Apakah ramalan suhu air selepas 2 jam?', { A: 'Menyamai suhu bilik persekitaran (sekitar 28°C-30°C)', B: '0°C (membeku)', C: '100°C', D: 'Menjadi lebih panas semula' }, 'A', 'Suhu air akan terus menurun sehingga mencapai keseimbangan terma dengan suhu bilik.', 'SK 1.1 Kemahiran Meramal');
addS5(0, 15, 'Etika Pelupusan Sisa Biologi KBAT', 'Sukar', 'Mengapakah sisa cecair biologi seperti kultur bakteria tidak boleh dibuang terus ke dalam singki bilik sains tanpa dinyahjangkit?', { A: 'Boleh mencemarkan punca air dan menyebarkan penyakit berjangkit', B: 'Akan menyebabkan singki tersumbat dengan kertas', C: 'Mencairkan paip plastik PVC', D: 'Menjadikan air singki berbuih wangi' }, 'A', 'Sisa biologi perlu dinyahjangkit dengan peluntur atau autoklaf untuk membunuh patogen berbahaya.', 'SK 2.1 Keselamatan Bilik Sains');

// Topic 2: Manusia (Sistem Rangka & Peredaran Darah)
addS5(1, 11, 'Fungsi Sangkar Rusuk', 'Mudah', 'Apakah organ penting yang dilindungi oleh sangkar rusuk manusia?', { A: 'Jantung dan peparu', B: 'Otak dan mata', C: 'Pundi kencing', D: 'Usus kecil dan dubur' }, 'A', 'Sangkar rusuk melindungi organ vital rongga toraks iaitu jantung dan peparu.', 'SK 2.1 Sistem Rangka Manusia');
addS5(1, 12, 'Fungsi Sendi Tubuh', 'Mudah', 'Bahagian pertemuan antara dua atau lebih tulang yang membolehkan pergerakan berlaku dipanggil:', { A: 'Sendi', B: 'Ligamen', C: 'Rawan', D: 'Saraf' }, 'A', 'Sendi menghubungkan tulang dan membolehkan fleksibiliti serta pergerakan.', 'SK 2.1 Sistem Sendi');
addS5(1, 13, 'Salur Darah Arteri dan Vena', 'Sederhana', 'Salur darah yang mengangkut darah kaya dengan gas oksigen dari jantung ke seluruh tubuh ialah:', { A: 'Arteri', B: 'Vena', C: 'Kapilari limfa', D: 'Trakea' }, 'A', 'Arteri membawa darah beroksigen tinggi dari jantung ke tisu badan.', 'SK 2.2 Sistem Peredaran Darah');
addS5(1, 14, 'Darah Kaya Karbon Dioksida', 'Sederhana', 'Darah yang mengandungi kepekatan karbon dioksida tinggi diangkut semula ke peparu untuk:', { A: 'Menyingkirkan gas karbon dioksida dan menyerap oksigen baharu', B: 'Disimpan sebagai lemak badan', C: 'Membekalkan tenaga ke otak', D: 'Membekukan luka' }, 'A', 'Di peparu, pertukaran gas berlaku: karbon dioksida dihembus keluar dan oksigen disedut masuk.', 'SK 2.2 Pertukaran Gas di Peparu');
addS5(1, 15, 'Hubung Kait Sistem Tubuh KBAT', 'Sukar', 'Bagaimanakah sistem peredaran darah bekerjasama dengan sistem pencernaan manusia?', { A: 'Darah menyerap nutrien makanan dari usus kecil dan mengangkutnya ke seluruh sel badan', B: 'Darah mengunyah makanan di dalam mulut', C: 'Darah menghasilkan asid perut', D: 'Darah mengeluarkan tinja melalui dubur' }, 'A', 'Sistem peredaran darah mengedarkan glukosa dan nutrien hasil pencernaan ke semua sel hidup.', 'SK 2.3 Hubungan Antara Sistem Tubuh');

// Topic 3: Haiwan (Kemandirian Spesies & Rantai Makanan)
addS5(2, 11, 'Kemandirian Mamalia Menjaga Anak', 'Mudah', 'Kanggaru memastikan kemandirian anaknya daripada bahaya pemangsa dengan:', { A: 'Membawa dan menyusukan anaknya di dalam kantung khas di perut', B: 'Menanam anaknya di dalam tanah pasir', C: 'Meninggalkan anak di atas pokok tinggi', D: 'Bertelur di dalam sarang lumpur' }, 'A', 'Anak kanggaru yang belum matang membesar dan terlindung di dalam kantung ibunya.', 'SK 3.1 Kemandirian Haiwan');
addS5(2, 12, 'Penyembunyian Diri (Kamera/Penyamaran)', 'Mudah', 'Sesumpah dan belalang daun mengelakkan diri daripada dikesan musuh melalui:', { A: 'Penyamaran warna dan bentuk mengikut persekitaran', B: 'Mengeluarkan bau wangi', C: 'Memancarkan cahaya terang', D: 'Menghasilkan bunyi kicauan merdu' }, 'A', 'Penyamaran (kamuflaj) menyukarkan pemangsa mengesan keberadaan mangsa.', 'SK 3.1 Perlindungan daripada Musuh');
addS5(2, 13, 'Definisi Pengeluar Rantai Makanan', 'Mudah', 'Dalam sesebuah siratan makanan, organisma yang sentiasa bertindak sebagai pengeluar ialah:', { A: 'Tumbuh-tumbuhan hijau yang melakukan fotosintesis', B: 'Haiwan herbivor pemakan daun', C: 'Burung pemangsa', D: 'Bakteria pengurai' }, 'A', 'Tumbuhan hijau ialah pengeluar kerana membina makanan sendiri menggunakan cahaya matahari.', 'SK 3.2 Rantai Makanan dan Siratan Makanan');
addS5(2, 14, 'Pengguna Tertier', 'Sederhana', 'Dalam rantai makanan: Padi → Tikus → Ular → Helang. Haiwan manakah merupakan pengguna tertier (puncak)?', { A: 'Burung helang', B: 'Ular', C: 'Tikus', D: 'Padi' }, 'A', 'Helang berada di peringkat pengguna tertier memakan ular.', 'SK 3.2 Peringkat Trofik Rantai Makanan');
addS5(2, 15, 'Gangguan Rantai Makanan KBAT', 'Sukar', 'Apakah yang akan berlaku jika racun tikus digunakan secara berlebihan sehingga memusnahkan seluruh populasi tikus di sawah padi?', { A: 'Populasi burung hantu dan ular berkurang akibat kehilangan punca makanan utama', B: 'Pokok padi akan mati serta-merta', C: 'Burung helang bertukar menjadi pemakan padi', D: 'Tiada perubahan langsung kepada ekosistem' }, 'A', 'Kehilangan satu spesies mangsa utama menjejaskan populasi pemangsa dalam siratan makanan.', 'SK 3.2 Keseimbangan Ekosistem');

// Topic 4: Tumbuh-tumbuhan (Kemandirian & Pencaran)
addS5(3, 11, 'Pencaran Melalui Air', 'Mudah', 'Buah kelapa dan buah teratai dipencarkan melalui air kerana mempunyai ciri:', { A: 'Sabut berlapis udara dan berongga yang membolehkannya terapung', B: 'Bulu halus yang ringan', C: 'Isi buah yang sangat manis', D: 'Cangkuk berduri tajam' }, 'A', 'Sabut berongga udara membolehkan buah terapung dan dihanyutkan arus air ke pulau lain.', 'SK 4.2 Pencaran Biji Benih');
addS5(3, 12, 'Pencaran Melalui Haiwan', 'Mudah', 'Buah kemuncup dan buah kelulut membiak ke kawasan baharu dengan:', { A: 'Mempunyai cangkuk kecil yang melekat pada bulu haiwan atau pakaian manusia', B: 'Meletup dan melontarkan biji', C: 'Terapung di atas air sungai', D: 'Mempunyai sayap nipis diterbangkan angin' }, 'A', 'Cangkuk halus melekat pada haiwan yang lalu-lalang dan jatuh di tempat lain.', 'SK 4.2 Pencaran oleh Haiwan');
addS5(3, 13, 'Pencaran Mekanisme Letupan', 'Mudah', 'Buah keembung dan buah getah memencarkan biji benihnya melalui:', { A: 'Mekanisme letupan apabila kulit buah kering dan merekah', B: 'Dihanyutkan air banjir', C: 'Diterbangkan angin sepoi-sepoi', D: 'Dimakan oleh kera' }, 'A', 'Kulit buah yang mengering menghasilkan tegangan lalu meletup melontarkan biji benih jauh.', 'SK 4.2 Mekanisme Letupan');
addS5(3, 14, 'Ciri Biji Benih Pencaran Angin', 'Mudah', 'Biji benih lalang dan angsana mudah diterbangkan angin kerana:', { A: 'Kecil, ringan dan mempunyai struktur seperti sayap atau rerambut halus', B: 'Mempunyai kulit berlendir tebal', C: 'Sangat berat dan keras', D: 'Berbau busuk' }, 'A', 'Struktur sayap nipis membolehkannya melayang jauh ditiup angin.', 'SK 4.2 Pencaran Angin');
addS5(3, 15, 'Kepentingan Pencaran Jauh KBAT', 'Sukar', 'Mengapakah biji benih perlu dipencarkan jauh daripada pokok induknya?', { A: 'Mengelakkan persaingan untuk mendapatkan cahaya matahari, air, ruang dan nutrien', B: 'Supaya pokok induk tidak berbuah lagi', C: 'Supaya daun tidak gugur', D: 'Menghalang serangga menghampiri pokok induk' }, 'A', 'Pencaran jauh membolehkan anak pokok tumbuh subur tanpa bersaing sengit dengan induk.', 'SK 4.2 Kemandirian Spesies Tumbuhan');

// Topic 5: Elektrik (Litar Bersiri & Selari)
addS5(4, 11, 'Komponen Litar Elektrik', 'Mudah', 'Komponen elektrik yang berfungsi untuk menyambung atau memutuskan litar elektrik ialah:', { A: 'Suis', B: 'Mentol', C: 'Sel kering', D: 'Wayar penyambung' }, 'A', 'Suis mengawal aliran arus elektrik dengan melengkapkan atau memutuskan litar.', 'SK 5.1 Komponen Litar');
addS5(4, 12, 'Kecerahan Mentol Litar Selari', 'Sederhana', 'Dalam litar selari, jika satu mentol terbakar, apakah yang berlaku kepada mentol yang lain?', { A: 'Mentol lain terus menyala kerana mempunyai laluan arus elektrik yang berasingan', B: 'Semua mentol lain terus terpadam', C: 'Mentol lain akan meletup', D: 'Bateri menjadi cepat rosak' }, 'A', 'Litar selari mempunyai lebih daripada satu laluan arus elektrik yang bebas.', 'SK 5.2 Litar Bersiri dan Litar Selari');
addS5(4, 13, 'Litar Bersiri', 'Sederhana', 'Apakah kelemahan utama penyambungan mentol secara litar bersiri?', { A: 'Jika satu mentol rosak, semua mentol lain tidak akan menyala', B: 'Menggunakan wayar yang terlalu banyak', C: 'Mentol menyala terlalu terang menyilaukan mata', D: 'Memerlukan voltan elektrik yang tinggi' }, 'A', 'Litar bersiri hanya mempunyai satu laluan tunggal; jika putus di satu titik, litar terputus.', 'SK 5.2 Ciri Litar Bersiri');
addS5(4, 14, 'Faktor Kecerahan Mentol', 'Sederhana', 'Kecerahan mentol dalam litar bersiri boleh ditingkatkan dengan cara:', { A: 'Menambah bilangan sel kering yang disambung secara bersiri', B: 'Menambah lebih banyak mentol', C: 'Memanjangkan wayar penyambung', D: 'Membuka suis litar' }, 'A', 'Menambah sel kering membekalkan lebih banyak voltan dan tenaga elektrik.', 'SK 5.2 Kecerahan Mentol');
addS5(4, 15, 'Penjimatan & Keselamatan Elektrik KBAT', 'Sukar', 'Mengapakah kita dilarang menyentuh suis atau peralatan elektrik dengan tangan yang basah?', { A: 'Air adalah konduktor elektrik dan boleh menyebabkan renjatan elektrik yang membawa maut', B: 'Air akan merosakkan warna plastik suis', C: 'Bil elektrik akan melambung tinggi', D: 'Mentol akan terus terbakar' }, 'A', 'Air mengalirkan elektrik dan boleh mengalirkan arus terus ke tubuh manusia.', 'SK 5.3 Keselamatan Penggunaan Elektrik');

// Topic 6: Haba, Suhu & Asid Alkali
addS5(5, 11, 'Definisi Suhu', 'Mudah', 'Apakah definisi saintifik bagi "suhu"?', { A: 'Darjah kepanasan atau kesejukan sesuatu bahan', B: 'Jumlah cecair di dalam bikar', C: 'Berat sesuatu jirim', D: 'Ketumpatan sesuatu objek' }, 'A', 'Suhu ialah ukuran darjah kepanasan atau kesejukan bahan.', 'SK 6.1 Suhu dan Haba');
addS5(5, 12, 'Pengembangan Jirim', 'Mudah', 'Apabila sesuatu bahan pepejal menerima haba, bahan tersebut akan:', { A: 'Mengembang dan bertambah saiznya', B: 'Mengecut menjadi lebih kecil', C: 'Kehilangan berat', D: 'Bertukar menjadi gas serta-merta' }, 'A', 'Bahan mengembang apabila dipanaskan kerana zarah bergetar lebih bertenaga.', 'SK 6.1 Pengembangan dan Pengecutan Jirim');
addS5(5, 13, 'Aplikasi Ruang pada Landasan Kereta Api', 'Sederhana', 'Ruang senggang kecil dibiarkan di antara sambungan rel landasan kereta api bertujuan untuk:', { A: 'Memberi ruang bagi landasan besi mengembang pada hari panas tanpa membengkok', B: 'Menjimatkan penggunaan besi landasan', C: 'Mengurangkan bunyi bising roda kereta api', D: 'Membolehkan air hujan mengalir keluar' }, 'A', 'Ruang membolehkan rel besi memanjang semasa cuaca panas terik dengan selamat.', 'SK 6.1 Aplikasi Haba dalam Kehidupan');
addS5(5, 14, 'Sifat Bahan Bersifat Neutral', 'Mudah', 'Larutan gula dan garam tidak mengubah warna kertas litmus merah mahupun biru. Ini membuktikan larutan tersebut adalah:', { A: 'Neutral', B: 'Berasid pekat', C: 'Beralkali lemah', D: 'Beracun' }, 'A', 'Bahan neutral mempunyai nilai pH 7 dan tidak mengubah warna kertas litmus.', 'SK 6.2 Sifat Asid, Alkali dan Neutral');
addS5(5, 15, 'Sengatan Tebuan Bersifat Alkali KBAT', 'Sukar', 'Bisa sengatan tebuan bersifat alkali. Apakah bahan dapur yang paling sesuai disapu pada bahagian kulit yang disengat untuk melegakan kesakitan?', { A: 'Cuka makan yang bersifat asid lemah untuk meneutralkannya', B: 'Air sabun pekat', C: 'Serbuk penaik', D: 'Ubat gigi beralkali' }, 'A', 'Cuka bersifat asid lemah bertindak meneutralkan sifat alkali bisa tebuan.', 'SK 6.2 Aplikasi Peneutralan');

// Topic 7: Bumi, Angkasa & Kestabilan Struktur
addS5(6, 11, 'Peredaran dan Putaran Bumi', 'Mudah', 'Bumi berputar pada paksinya dari arah barat ke timur. Satu putaran lengkap mengambil masa:', { A: '24 jam (1 hari)', B: '365 1/4 hari', C: '12 jam', D: '30 hari' }, 'A', 'Bumi berputar pada paksinya lengkap dalam masa 24 jam.', 'SK 7.1 Putaran dan Peredaran Bumi');
addS5(6, 12, 'Kesan Putaran Bumi', 'Mudah', 'Antara kejadian alam berikut, yang manakah berlaku akibat putaran Bumi pada paksinya?', { A: 'Kejadian siang dan malam serta perubahan panjang bayang-bayang', B: 'Kejadian empat musim di kutub', C: 'Gerhana matahari total', D: 'Letusan gunung berapi' }, 'A', 'Putaran Bumi menyebabkan bahagian menghadap Matahari mengalami siang dan sebaliknya malam.', 'SK 7.1 Kesan Putaran Bumi');
addS5(6, 13, 'Fasa-fasa Bulan', 'Sederhana', 'Fasa Bulan di mana seluruh permukaan Bulan kelihatan cerah bercahaya dipanggil:', { A: 'Bulan purnama', B: 'Anak bulan', C: 'Bulan sabit', D: 'Bulan separa' }, 'A', 'Bulan purnama berlaku apabila Bumi berada di antara Matahari dan Bulan.', 'SK 7.2 Fasa-fasa Bulan');
addS5(6, 14, 'Kestabilan Struktur Bangunan', 'Mudah', 'Dua faktor utama yang mempengaruhi kestabilan sesuatu objek atau bangunan ialah:', { A: 'Luas tapak dan ketinggian pusat graviti', B: 'Warna cat dan kilauan permukaan', C: 'Jenis kaca tingkap', D: 'Ketebalan pintu' }, 'A', 'Tapak yang lebih luas dan pusat graviti yang lebih rendah menjadikan objek lebih stabil.', 'SK 8.1 Kestabilan Struktur');
addS5(6, 15, 'Kekuatan Bahan Struktur KBAT', 'Sukar', 'Jambatan konkrit moden diperkukuh dengan menggunakan rasuk keluli berbentuk \'I\' dan kekuda segi tiga kerana:', { A: 'Bentuk kekuda segi tiga mampu mengagihkan beban berat dengan sekata dan kukuh', B: 'Kelihatan cantik dari udara', C: 'Mudah terapung di atas air', D: 'Mengurangkan tiupan angin' }, 'A', 'Bentuk segi tiga dan rasuk-I memberikan kekuatan struktur maksimum terhadap daya lenturan.', 'SK 8.1 Kekuatan dan Ketahanan Struktur');

const allSn5 = [...SAINS_TAHUN_5_QUESTIONS, ...sn5Extra];
fs.writeFileSync('src/data/sainsTahun5.ts', `import { QuizQuestion } from '../types';\n\nexport const SAINS_TAHUN_5_QUESTIONS: QuizQuestion[] = ${JSON.stringify(allSn5, null, 2)};\n`, 'utf8');
console.log(`Updated Sains Tahun 5: total ${allSn5.length} questions.`);
