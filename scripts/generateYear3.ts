import * as fs from 'fs';
import { QuizQuestion } from '../src/types';

// ==========================================
// TAHUN 3 - MATEMATIK (6 topics x 15 = 90 questions)
// ==========================================
const m3Topics = [
  'Nombor hingga 10,000',
  'Operasi Asas Tambah & Tolak',
  'Operasi Darab & Bahagi',
  'Pecahan, Perpuluhan & Peratus',
  'Wang hingga RM10,000',
  'Masa, Waktu & Ukuran',
];

const m3Questions: QuizQuestion[] = [];

// Helper to push
function addM3(
  topicIdx: number,
  qIdx: number,
  subtopic: string,
  difficulty: 'Mudah' | 'Sederhana' | 'Sukar',
  question: string,
  options: { A: string; B: string; C: string; D: string },
  correctAnswer: 'A' | 'B' | 'C' | 'D',
  explanation: string,
  learningStandard: string
) {
  m3Questions.push({
    id: `m3-t${topicIdx + 1}-${String(qIdx).padStart(2, '0')}`,
    year: 3,
    subject: 'Matematik',
    topic: m3Topics[topicIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard,
  });
}

// Topik 1: Nombor hingga 10,000
addM3(0, 1, 'Nilai Tempat & Nilai Digit', 'Mudah', 'Apakah nilai tempat bagi digit 8 dalam nombor 8,429?', { A: 'Sa', B: 'Puluh', C: 'Ratus', D: 'Ribu' }, 'D', 'Digit 8 berada pada kedudukan ribu.', 'SK 1.1 Menamakan nombor hingga 10,000');
addM3(0, 2, 'Nilai Tempat & Nilai Digit', 'Mudah', 'Apakah nilai digit bagi angka 6 dalam nombor 3,615?', { A: '6', B: '60', C: '600', D: '6,000' }, 'C', 'Angka 6 berada pada nilai tempat ratus, maka nilainya 600.', 'SK 1.1 Nilai digit nombor');
addM3(0, 3, 'Cerakinan Nombor', 'Mudah', 'Cerakinkan 7,042 mengikut nilai digit.', { A: '7,000 + 40 + 2', B: '700 + 40 + 2', C: '7,000 + 400 + 2', D: '7,000 + 4 + 2' }, 'A', '7,042 = 7,000 + 0 + 40 + 2.', 'SK 1.2 Mencerakinkan nombor');
addM3(0, 4, 'Cerakinan Nilai Tempat', 'Sederhana', 'Cerakinkan 9,518 mengikut nilai tempat.', { A: '9 ribu + 5 ratus + 1 puluh + 8 sa', B: '9000 + 500 + 10 + 8', C: '9 ratus + 5 puluh + 1 ribu + 8 sa', D: '9 ribu + 5 puluh + 1 ratus + 8 sa' }, 'A', 'Cerakinan nilai tempat menyebut perkataan ribu, ratus, puluh dan sa.', 'SK 1.2 Cerakinan nilai tempat');
addM3(0, 5, 'Perbandingan Nombor', 'Mudah', 'Antara nombor berikut, yang manakah paling besar nilainya?', { A: '4,520', B: '4,502', C: '4,525', D: '4,255' }, 'C', '4,525 mempunyai nilai paling besar kerana digit sa adalah 5.', 'SK 1.3 Membanding nilai dua nombor');
addM3(0, 6, 'Susunan Tertib Naik', 'Sederhana', 'Susun nombor berikut mengikut tertib menaik: 6,120, 6,012, 6,210, 6,021', { A: '6,012, 6,021, 6,120, 6,210', B: '6,210, 6,120, 6,021, 6,012', C: '6,021, 6,012, 6,120, 6,210', D: '6,012, 6,120, 6,021, 6,210' }, 'A', 'Tertib menaik disusun daripada nilai terkecil hingga terbesar.', 'SK 1.3 Menyusun nombor');
addM3(0, 7, 'Pembundaran Ratus Terdekat', 'Sederhana', 'Bundarkan 5,348 kepada ratus terdekat.', { A: '5,300', B: '5,350', C: '5,400', D: '5,000' }, 'A', 'Digit puluh ialah 4 (< 5), jadi digit ratus kekal 3 menjadi 5,300.', 'SK 1.6 Membundarkan nombor');
addM3(0, 8, 'Pembundaran Ribu Terdekat', 'Sederhana', 'Bundarkan 8,760 kepada ribu terdekat.', { A: '8,000', B: '8,700', C: '9,000', D: '8,800' }, 'C', 'Digit ratus ialah 7 (≥ 5), tambah 1 pada ribu (8+1=9) menjadi 9,000.', 'SK 1.6 Membundarkan nombor');
addM3(0, 9, 'Pola Nombor', 'Mudah', 'Lengkapkan pola: 2,100, 2,200, 2,300, [ ? ], 2,500', { A: '2,350', B: '2,400', C: '2,450', D: '2,310' }, 'B', 'Pola nombor bertambah seratus-seratus secara tertib menaik.', 'SK 1.5 Mengenal pasti pola nombor');
addM3(0, 10, 'Pola Nombor Menurun', 'Sederhana', 'Apakah nombor seterusnya bagi pola berikut: 7,850, 7,800, 7,750, [ ? ]', { A: '7,700', B: '7,650', C: '7,600', D: '7,720' }, 'A', 'Pola nombor berkurang 50 secara tertib menurun. 7,750 - 50 = 7,700.', 'SK 1.5 Pola menurun');
addM3(0, 11, 'Perkataan ke Angka', 'Mudah', 'Tuliskan "tujuh ribu empat puluh lapan" dalam angka.', { A: '7,408', B: '7,048', C: '7,480', D: '7,084' }, 'B', 'Tujuh ribu (7,000) dan empat puluh lapan (48) ditulis sebagai 7,048.', 'SK 1.1 Menulis nombor dalam angka');
addM3(0, 12, 'Angka ke Perkataan', 'Mudah', 'Nyatakan 6,305 dalam perkataan.', { A: 'Enam ribu tiga puluh lima', B: 'Enam ribu tiga ratus lima', C: 'Enam ratus tiga puluh lima', D: 'Enam ribu tiga ratus lima puluh' }, 'B', '6,305 dibaca sebagai enam ribu tiga ratus lima.', 'SK 1.1 Membaca nombor dalam perkataan');
addM3(0, 13, 'Anggaran Kuantiti', 'Sederhana', 'Balang A mengandungi 500 biji manik. Balang B dua kali lebih tinggi dan penuh. Anggarkan bilangan manik di balang B.', { A: 'Lebih kurang 250', B: 'Lebih kurang 500', C: 'Lebih kurang 1,000', D: 'Lebih kurang 5,000' }, 'C', 'Dua kali ganda 500 ialah lebih kurang 1,000 biji manik.', 'SK 1.4 Membuat anggaran');
addM3(0, 14, 'Nilai Antara Dua Nombor', 'Sederhana', 'Nombor manakah yang terletak di antara 4,890 dengan 5,010?', { A: '4,850', B: '4,950', C: '5,020', D: '5,100' }, 'B', '4,950 berada di antara 4,890 dan 5,010.', 'SK 1.3 Perbandingan nombor');
addM3(0, 15, 'Penyelesaian Masalah KBAT', 'Sukar', 'Sebuah kilang menghasilkan 4,320 bungkusan biskut pada hari Isnin dan 4,850 pada hari Selasa. Berapakah jumlah bungkusan yang dibundarkan kepada ribu terdekat?', { A: '9,000', B: '8,000', C: '10,000', D: '7,000' }, 'A', '4,320 + 4,850 = 9,170. Dibundarkan kepada ribu terdekat ialah 9,000.', 'SK 1.6 Penyelesaian masalah bundar');

// Topik 2: Operasi Asas Tambah & Tolak
addM3(1, 1, 'Tambah Dua Nombor', 'Mudah', 'Kira 2,450 + 1,320 =', { A: '3,770', B: '3,750', C: '3,870', D: '3,670' }, 'A', '2,450 + 1,320 = 3,770 tanpa mengumpul semula.', 'SK 2.1 Tambah sebarang dua nombor');
addM3(1, 2, 'Tambah Mengumpul Semula', 'Sederhana', 'Cari hasil tambah 3,576 dan 2,685.', { A: '6,261', B: '6,251', C: '6,161', D: '6,241' }, 'A', '3,576 + 2,685 = 6,261 dengan mengumpul semula.', 'SK 2.1 Tambah dengan mengumpul semula');
addM3(1, 3, 'Tambah Tiga Nombor', 'Sederhana', '1,204 + 3,450 + 825 =', { A: '5,479', B: '5,379', C: '5,579', D: '4,479' }, 'A', '1,204 + 3,450 = 4,654. 4,654 + 825 = 5,479.', 'SK 2.1 Tambah hingga tiga nombor');
addM3(1, 4, 'Tolak Dua Nombor', 'Mudah', 'Selesaikan 5,894 - 2,431 =', { A: '3,463', B: '3,453', C: '3,473', D: '2,463' }, 'A', '5,894 - 2,431 = 3,463.', 'SK 2.2 Tolak sebarang dua nombor');
addM3(1, 5, 'Tolak Mengumpul Semula', 'Sederhana', 'Cari beza antara 7,340 dengan 3,582.', { A: '3,758', B: '3,768', C: '3,858', D: '3,658' }, 'A', '7,340 - 3,582 = 3,758.', 'SK 2.2 Tolak dengan mengumpul semula');
addM3(1, 6, 'Tolak Berturut-turut', 'Sederhana', '9,000 - 3,450 - 1,200 =', { A: '4,350', B: '4,250', C: '4,450', D: '5,350' }, 'A', '9,000 - 3,450 = 5,550. 5,550 - 1,200 = 4,350.', 'SK 2.2 Tolak berturut-turut');
addM3(1, 7, 'Mencari Nilai Anu Tambah', 'Sederhana', 'Cari nilai P: P + 1,450 = 4,800', { A: '3,350', B: '3,450', C: '3,250', D: '6,250' }, 'A', 'P = 4,800 - 1,450 = 3,350.', 'SK 2.6 Penggunaan anu');
addM3(1, 8, 'Mencari Nilai Anu Tolak', 'Sederhana', 'Cari nilai Q: 6,500 - Q = 4,200', { A: '2,300', B: '2,400', C: '1,300', D: '10,700' }, 'A', 'Q = 6,500 - 4,200 = 2,300.', 'SK 2.6 Penggunaan anu');
addM3(1, 9, 'Tambah Masalah Harian', 'Mudah', 'Di perpustakaan ada 2,150 buah buku fiksyen dan 1,820 buku bukan fiksyen. Berapakah jumlah buku?', { A: '3,970', B: '3,870', C: '3,950', D: '4,070' }, 'A', '2,150 + 1,820 = 3,970 buah buku.', 'SK 2.7 Menyelesaikan masalah');
addM3(1, 10, 'Tolak Masalah Harian', 'Mudah', 'Pak Ali menuai 4,600 biji kelapa. Sebanyak 2,350 biji telah dijual. Berapakah baki kelapa?', { A: '2,250', B: '2,150', C: '2,350', D: '2,200' }, 'A', '4,600 - 2,350 = 2,250 biji kelapa.', 'SK 2.7 Menyelesaikan masalah');
addM3(1, 11, 'Kombinasi Tambah Tolak', 'Sederhana', 'Kira: 3,200 + 1,500 - 800 =', { A: '3,900', B: '3,800', C: '4,000', D: '4,100' }, 'A', '3,200 + 1,500 = 4,700. 4,700 - 800 = 3,900.', 'SK 2.3 Operasi bergabung tambah dan tolak');
addM3(1, 12, 'Penyelesaian Masalah KBAT', 'Sukar', 'Dewan A memuatkan 1,450 orang. Dewan B memuatkan 350 orang lebih daripada Dewan A. Berapakah jumlah muatan kedua-dua dewan?', { A: '3,250', B: '1,800', C: '3,150', D: '3,300' }, 'A', 'Dewan B = 1,450 + 350 = 1,800. Jumlah kedua-dua dewan = 1,450 + 1,800 = 3,250 orang.', 'SK 2.7 Penyelesaian masalah KBAT');
addM3(1, 13, 'Penolakan dengan Angka Sifar', 'Sederhana', '5,000 - 2,367 =', { A: '2,633', B: '2,733', C: '3,633', D: '2,643' }, 'A', '5,000 - 2,367 = 2,633.', 'SK 2.2 Tolak melibatkan sifar');
addM3(1, 14, 'Menganggar Hasil Tambah', 'Sederhana', 'Anggarkan hasil tambah 2,980 dan 4,020 dengan membundarkan kepada ribu terdekat.', { A: '7,000', B: '6,000', C: '8,000', D: '6,500' }, 'A', '2,980 dibundarkan jadi 3,000. 4,020 dibundarkan jadi 4,000. 3,000 + 4,000 = 7,000.', 'SK 2.1 Menganggar hasil tambah');
addM3(1, 15, 'Soalan Penyelesaian Berperingkat', 'Sukar', 'Sebuah lori membawa 8,500 botol susu. Lori itu menurunkan 3,200 botol di pasar raya X dan 2,750 di pasar raya Y. Berapakah botol susu yang masih ada di dalam lori?', { A: '2,550', B: '2,450', C: '2,650', D: '3,550' }, 'A', '8,500 - (3,200 + 2,750) = 8,500 - 5,950 = 2,550 botol susu.', 'SK 2.7 Penyelesaian masalah harian');

// Topik 3: Operasi Darab & Bahagi
addM3(2, 1, 'Sifir Asas Darab', 'Mudah', 'Kira 7 × 8 =', { A: '54', B: '56', C: '58', D: '64' }, 'B', '7 × 8 = 56 mengikut fakta asas sifir 7 dan 8.', 'SK 2.3 Mendarab dalam lingkungan sifir asas');
addM3(2, 2, 'Darab Nombor Dua Digit', 'Mudah', 'Kira 42 × 3 =', { A: '126', B: '124', C: '128', D: '136' }, 'A', '40 × 3 = 120, 2 × 3 = 6. 120 + 6 = 126.', 'SK 2.3 Mendarab nombor dua digit dengan satu digit');
addM3(2, 3, 'Darab dengan 10, 100, 1000', 'Mudah', '58 × 100 =', { A: '580', B: '5,800', C: '58,000', D: '508' }, 'B', 'Mendarab dengan 100 menambah dua sifar di hujung nombor: 5,800.', 'SK 2.3 Mendarab dengan 100');
addM3(2, 4, 'Darab Tiga Digit dengan Satu Digit', 'Sederhana', '235 × 4 =', { A: '940', B: '920', C: '930', D: '840' }, 'A', '235 × 4 = 940.', 'SK 2.3 Mendarab hingga tiga digit');
addM3(2, 5, 'Bahagi Sifir Asas', 'Mudah', 'Kira 63 ÷ 7 =', { A: '8', B: '9', C: '7', D: '6' }, 'B', 'Fakta asas bahagi: 9 × 7 = 63, maka 63 ÷ 7 = 9.', 'SK 2.4 Membahagi dalam lingkungan sifir');
addM3(2, 6, 'Bahagi Dua Digit', 'Mudah', '84 ÷ 4 =', { A: '21', B: '22', C: '24', D: '20' }, 'A', '80 ÷ 4 = 20, 4 ÷ 4 = 1. 20 + 1 = 21.', 'SK 2.4 Membahagi sebarang nombor');
addM3(2, 7, 'Bahagi Tiga Digit', 'Sederhana', '456 ÷ 3 =', { A: '152', B: '151', C: '153', D: '142' }, 'A', '456 ÷ 3 = 152.', 'SK 2.4 Membahagi tiga digit dengan satu digit');
addM3(2, 8, 'Bahagi Berbaki', 'Sederhana', 'Apakah baki bagi 79 ÷ 6?', { A: '1', B: '2', C: '3', D: '5' }, 'A', '79 ÷ 6 = 13 baki 1 (kerana 13 × 6 = 78).', 'SK 2.4 Pembahagian melibatkan baki');
addM3(2, 9, 'Bahagi dengan 10 dan 100', 'Mudah', '7,200 ÷ 100 =', { A: '72', B: '720', C: '7', D: '702' }, 'A', 'Membahagi dengan 100 memotong dua digit sifar: 72.', 'SK 2.4 Membahagi dengan 100');
addM3(2, 10, 'Masalah Harian Darab', 'Mudah', 'Sebuah kotak ada 24 batang pensel. Berapakah bilangan pensel dalam 6 buah kotak yang sama?', { A: '144', B: '124', C: '134', D: '154' }, 'A', '24 × 6 = 144 batang pensel.', 'SK 2.7 Menyelesaikan masalah darab');
addM3(2, 11, 'Masalah Harian Bahagi', 'Mudah', 'Cikgu Siti mengagihkan 180 keping biskut sama banyak kepada 9 orang murid. Berapakah keping biskut setiap murid dapat?', { A: '20', B: '18', C: '25', D: '15' }, 'A', '180 ÷ 9 = 20 keping biskut.', 'SK 2.7 Menyelesaikan masalah bahagi');
addM3(2, 12, 'Mencari Anu Darab', 'Sederhana', 'Cari nilai K: K × 8 = 72', { A: '8', B: '9', C: '7', D: '6' }, 'B', 'K = 72 ÷ 8 = 9.', 'SK 2.6 Penggunaan anu dalam darab');
addM3(2, 13, 'Darab Tiga Digit Mengumpul Semula', 'Sederhana', 'Kira 368 × 5 =', { A: '1,840', B: '1,820', C: '1,740', D: '1,850' }, 'A', '368 × 5 = 1,840.', 'SK 2.3 Mendarab dengan mengumpul semula');
addM3(2, 14, 'Bahagi Ribu dengan Satu Digit', 'Sederhana', '2,408 ÷ 4 =', { A: '602', B: '620', C: '62', D: '608' }, 'A', '2,408 ÷ 4 = 602.', 'SK 2.4 Membahagi nombor hingga 4 digit');
addM3(2, 15, 'Penyelesaian Masalah KBAT', 'Sukar', 'Pak Samad menjual 9 bakul buah durian. Setiap bakul mengandungi 15 biji durian. Sebanyak 8 biji durian telah rosak. Berapakah biji durian yang elok?', { A: '127', B: '135', C: '125', D: '130' }, 'A', 'Jumlah durian = 9 × 15 = 135. Durian yang elok = 135 - 8 = 127 biji.', 'SK 2.7 Operasi bergabung darab dan tolak');

// Topik 4: Pecahan, Perpuluhan & Peratus
addM3(3, 1, 'Pecahan Wajar', 'Mudah', 'Antara pecahan berikut, yang manakah merupakan pecahan wajar?', { A: '3/4', B: '5/3', C: '7/2', D: '4/4' }, 'A', 'Pecahan wajar mempunyai pengangka yang lebih kecil daripada penyebut (3 < 4).', 'SK 3.1 Mengenal pecahan wajar');
addM3(3, 2, 'Pecahan Setara', 'Mudah', 'Pecahan manakah yang setara dengan 1/2?', { A: '2/4', B: '2/3', C: '1/4', D: '3/5' }, 'A', '1/2 = (1×2)/(2×2) = 2/4.', 'SK 3.1 Menyatakan pecahan setara');
addM3(3, 3, 'Pecahan Termudah', 'Sederhana', 'Permudahkan pecahan 4/8 kepada bentuk termudah.', { A: '1/2', B: '2/4', C: '1/4', D: '2/3' }, 'A', 'Bahagikan pengangka dan penyebut dengan 4: 4÷4 / 8÷4 = 1/2.', 'SK 3.1 Menukar pecahan kepada bentuk termudah');
addM3(3, 4, 'Tambah Pecahan Sama Penyebut', 'Mudah', 'Kira 2/7 + 3/7 =', { A: '5/7', B: '5/14', C: '1/7', D: '6/7' }, 'A', 'Penyebut sama, jumlahkan pengangka: (2+3)/7 = 5/7.', 'SK 3.1 Menambah dua pecahan wajar');
addM3(3, 5, 'Tolak Pecahan Sama Penyebut', 'Mudah', 'Kira 6/9 - 2/9 =', { A: '4/9', B: '4/0', C: '8/9', D: '3/9' }, 'A', '6/9 - 2/9 = 4/9.', 'SK 3.1 Menolak pecahan wajar');
addM3(3, 6, 'Mengenal Perpuluhan', 'Mudah', 'Tukarkan pecahan 3/10 kepada perpuluhan.', { A: '0.3', B: '0.03', C: '3.0', D: '0.33' }, 'A', '3/10 ditulis sebagai 0.3 dalam bentuk perpuluhan.', 'SK 3.2 Mengenal perpuluhan');
addM3(3, 7, 'Perpuluhan Perseratus', 'Mudah', 'Tukarkan 45/100 kepada perpuluhan.', { A: '0.45', B: '4.5', C: '0.045', D: '45.0' }, 'A', '45 perseratus ditulis sebagai 0.45.', 'SK 3.2 Menukar pecahan perseratus kepada perpuluhan');
addM3(3, 8, 'Banding Nilai Perpuluhan', 'Sederhana', 'Antara nombor perpuluhan berikut, yang manakah paling besar nilainya?', { A: '0.7', B: '0.65', C: '0.09', D: '0.58' }, 'A', '0.7 (sama dengan 0.70) adalah lebih besar daripada 0.65, 0.58 dan 0.09.', 'SK 3.2 Membanding nilai perpuluhan');
addM3(3, 9, 'Tambah Perpuluhan', 'Sederhana', '0.4 + 0.35 =', { A: '0.75', B: '0.39', C: '0.79', D: '0.45' }, 'A', '0.40 + 0.35 = 0.75.', 'SK 3.2 Menambah dua nombor perpuluhan');
addM3(3, 10, 'Tolak Perpuluhan', 'Sederhana', '0.85 - 0.32 =', { A: '0.53', B: '0.52', C: '0.43', D: '0.63' }, 'A', '0.85 - 0.32 = 0.53.', 'SK 3.2 Menolak nombor perpuluhan');
addM3(3, 11, 'Mengenal Peratus', 'Mudah', 'Tukarkan 25/100 kepada peratus.', { A: '25%', B: '2.5%', C: '250%', D: '0.25%' }, 'A', 'Pecahan perseratus 25/100 ditulis sebagai 25%.', 'SK 3.3 Mengenal peratus');
addM3(3, 12, 'Simbol Peratus', 'Mudah', 'Apakah nama bagi simbol "%"?', { A: 'Peratus', B: 'Perpuluhan', C: 'Pecahan', D: 'Nisbah' }, 'A', 'Simbol % dinamakan peratus (perseratus).', 'SK 3.3 Mengenal simbol peratus');
addM3(3, 13, 'Peratus ke Pecahan', 'Sederhana', 'Tuliskan 60% dalam bentuk pecahan termudah.', { A: '3/5', B: '6/10', C: '60/100', D: '1/2' }, 'A', '60% = 60/100. Permudahkan dengan bahagi 20: 3/5.', 'SK 3.3 Menukar peratus kepada pecahan');
addM3(3, 14, 'Masalah Pecahan', 'Sederhana', 'Ibu memotong sebiji kek kepada 8 bahagian sama besar. Amin makan 3 bahagian. Berapakah pecahan kek yang tinggal?', { A: '5/8', B: '3/8', C: '4/8', D: '2/8' }, 'A', 'Kek penuh = 8/8. Baki kek = 8/8 - 3/8 = 5/8.', 'SK 3.4 Menyelesaikan masalah pecahan');
addM3(3, 15, 'Masalah KBAT Peratus', 'Sukar', 'Dalam satu ujian terdapat 100 soalan. Sarah menjawab 85 soalan dengan betul. Berapakah peratus soalan yang salah dijawab?', { A: '15%', B: '85%', C: '25%', D: '10%' }, 'A', 'Bilangan soalan salah = 100 - 85 = 15. Dalam peratus = 15%.', 'SK 3.4 Menyelesaikan masalah peratus');

// Topik 5: Wang hingga RM10,000
addM3(4, 1, 'Mengenal Nilai Wang', 'Mudah', 'Nilai bagi sekeping wang kertas RM100 dan sekeping RM50 ialah:', { A: 'RM150', B: 'RM105', C: 'RM15', D: 'RM200' }, 'A', 'RM100 + RM50 = RM150.', 'SK 4.1 Menamakan nilai wang');
addM3(4, 2, 'Tambah Wang', 'Mudah', 'RM2,350 + RM1,420 =', { A: 'RM3,770', B: 'RM3,750', C: 'RM3,670', D: 'RM3,870' }, 'A', 'RM2,350 + RM1,420 = RM3,770.', 'SK 4.2 Menambah wang');
addM3(4, 3, 'Tambah Wang dengan Sen', 'Sederhana', 'RM450.50 + RM218.70 =', { A: 'RM669.20', B: 'RM668.20', C: 'RM669.10', D: 'RM670.20' }, 'A', 'RM450.50 + RM218.70 = RM669.20.', 'SK 4.2 Menambah wang dengan sen');
addM3(4, 4, 'Tolak Wang', 'Mudah', 'RM5,800 - RM2,300 =', { A: 'RM3,500', B: 'RM3,400', C: 'RM3,600', D: 'RM2,500' }, 'A', 'RM5,800 - RM2,300 = RM3,500.', 'SK 4.3 Menolak wang');
addM3(4, 5, 'Tolak Wang Berperingkat', 'Sederhana', 'RM8,000 - RM3,450 - RM1,200 =', { A: 'RM3,350', B: 'RM3,450', C: 'RM4,350', D: 'RM3,250' }, 'A', 'RM8,000 - RM3,450 = RM4,550. RM4,550 - RM1,200 = RM3,350.', 'SK 4.3 Menolak hingga tiga nilai wang');
addM3(4, 6, 'Darab Wang', 'Mudah', 'RM45 × 6 =', { A: 'RM270', B: 'RM240', C: 'RM260', D: 'RM280' }, 'A', 'RM45 × 6 = RM270.', 'SK 4.4 Mendarab wang');
addM3(4, 7, 'Darab Wang dengan 10 dan 100', 'Mudah', 'RM68 × 100 =', { A: 'RM6,800', B: 'RM680', C: 'RM68,000', D: 'RM608' }, 'A', 'RM68 × 100 = RM6,800.', 'SK 4.4 Mendarab wang dengan 100');
addM3(4, 8, 'Bahagi Wang', 'Mudah', 'RM360 ÷ 4 =', { A: 'RM90', B: 'RM80', C: 'RM95', D: 'RM70' }, 'A', 'RM360 ÷ 4 = RM90.', 'SK 4.5 Membahagi wang');
addM3(4, 9, 'Bahagi Wang dengan 100', 'Mudah', 'RM4,500 ÷ 100 =', { A: 'RM45', B: 'RM450', C: 'RM4.50', D: 'RM4500' }, 'A', 'RM4,500 ÷ 100 = RM45.', 'SK 4.5 Membahagi wang dengan 100');
addM3(4, 10, 'Pengurusan Wang Simpanan', 'Mudah', 'Mengapakah kita digalakkan menabung wang simpanan di bank?', { A: 'Untuk kegunaan masa hadapan dan kecemasan', B: 'Supaya wang cepat habis dibelanjakan', C: 'Untuk membeli barang mewah semata-mata', D: 'Kerana tiada tempat menyimpan di rumah' }, 'A', 'Menabung menjamin simpanan selamat bagi masa depan dan kecemasan.', 'SK 4.7 Pengurusan kewangan berhemah');
addM3(4, 11, 'Keperluan vs Kehendak', 'Mudah', 'Antara berikut, yang manakah merupakan "keperluan asas"?', { A: 'Makanan berkhasiat', B: 'Alat permainan video', C: 'Kasut berjenama mahal', D: 'Jam tangan pintar' }, 'A', 'Makanan berkhasiat ialah keperluan asas hidup manusia.', 'SK 4.7 Keperluan dan kehendak');
addM3(4, 12, 'Mata Wang Negara ASEAN', 'Sederhana', 'Apakah mata wang rasmi bagi negara Singapura?', { A: 'Dolar Singapura', B: 'Rupiah', C: 'Baht', D: 'Peso' }, 'A', 'Singapura menggunakan mata wang Dolar Singapura (SGD).', 'SK 4.8 Mengenal mata wang negara ASEAN');
addM3(4, 13, 'Mata Wang Negara Thailand', 'Sederhana', 'Apakah mata wang bagi negara jiran Thailand?', { A: 'Baht', B: 'Ringgit', C: 'Dong', D: 'Kyat' }, 'A', 'Mata wang rasmi Thailand ialah Baht.', 'SK 4.8 Mengenal mata wang serantau');
addM3(4, 14, 'Masalah Kira Baki Wang', 'Sederhana', 'Farid membeli sebuah beg berharga RM78. Dia membayar dengan sekeping wang kertas RM100. Berapakah baki wangnya?', { A: 'RM22', B: 'RM32', C: 'RM28', D: 'RM12' }, 'A', 'Baki wang = RM100 - RM78 = RM22.', 'SK 4.6 Penyelesaian masalah wang');
addM3(4, 15, 'Penyelesaian Masalah KBAT', 'Sukar', 'Danial mempunyai wang sebanyak RM3,500. Dia membeli komputer riba berharga RM2,199 dan sebuah pencetak berharga RM350. Berapakah baki wang Danial?', { A: 'RM951', B: 'RM961', C: 'RM1,051', D: 'RM851' }, 'A', 'Jumlah belanja = RM2,199 + RM350 = RM2,549. Baki wang = RM3,500 - RM2,549 = RM951.', 'SK 4.6 Penyelesaian masalah gabungan');

// Topik 6: Masa, Waktu & Ukuran
addM3(5, 1, 'Perkaitan Jam dan Minit', 'Mudah', '1 jam bersamaan dengan berapa minit?', { A: '60 minit', B: '100 minit', C: '30 minit', D: '24 minit' }, 'A', '1 jam = 60 minit.', 'SK 5.1 Perkaitan masa');
addM3(5, 2, 'Perkaitan Hari dan Jam', 'Mudah', 'Berapakah bilangan jam dalam 1 hari?', { A: '24 jam', B: '12 jam', C: '60 jam', D: '48 jam' }, 'A', 'Satu hari mempunyai 24 jam.', 'SK 5.1 Perkaitan hari dan jam');
addM3(5, 3, 'Perkaitan Minggu dan Hari', 'Mudah', 'Berapakah hari dalam 3 minggu?', { A: '21 hari', B: '14 hari', C: '28 hari', D: '18 hari' }, 'A', '1 minggu = 7 hari. 3 minggu = 3 × 7 = 21 hari.', 'SK 5.1 Perkaitan minggu dan hari');
addM3(5, 4, 'Perkaitan Tahun dan Bulan', 'Mudah', '1 tahun mengandungi berapa bulan?', { A: '12 bulan', B: '10 bulan', C: '14 bulan', D: '24 bulan' }, 'A', 'Satu tahun mempunyai 12 bulan.', 'SK 5.1 Perkaitan tahun dan bulan');
addM3(5, 5, 'Tambah Masa', 'Sederhana', '2 jam 25 minit + 1 jam 15 minit =', { A: '3 jam 40 minit', B: '3 jam 30 minit', C: '4 jam 40 minit', D: '3 jam 50 minit' }, 'A', '(2+1) jam + (25+15) minit = 3 jam 40 minit.', 'SK 5.2 Operasi asas masa');
addM3(5, 6, 'Tolak Masa', 'Sederhana', '5 jam 45 minit - 2 jam 20 minit =', { A: '3 jam 25 minit', B: '3 jam 15 minit', C: '2 jam 25 minit', D: '3 jam 35 minit' }, 'A', '(5-2) jam + (45-20) minit = 3 jam 25 minit.', 'SK 5.2 Operasi asas masa');
addM3(5, 7, 'Ukuran Panjang cm ke m', 'Mudah', '1 meter (m) bersamaan dengan berapa sentimeter (cm)?', { A: '100 cm', B: '10 cm', C: '1,000 cm', D: '1 cm' }, 'A', '1 m = 100 cm.', 'SK 6.1 Perkaitan unit panjang');
addM3(5, 8, 'Tukar Unit Panjang', 'Mudah', 'Tukarkan 4 m kepada cm.', { A: '400 cm', B: '40 cm', C: '4,000 cm', D: '44 cm' }, 'A', '4 m × 100 = 400 cm.', 'SK 6.1 Pertukaran unit panjang');
addM3(5, 9, 'Ukuran Jisim g ke kg', 'Mudah', '1 kilogram (kg) bersamaan dengan berapa gram (g)?', { A: '1,000 g', B: '100 g', C: '10 g', D: '10,000 g' }, 'A', '1 kg = 1,000 g.', 'SK 6.2 Perkaitan unit jisim');
addM3(5, 10, 'Tukar Unit Jisim', 'Sederhana', 'Tukarkan 3 kg 250 g kepada gram (g).', { A: '3,250 g', B: '3,025 g', C: '325 g', D: '32,500 g' }, 'A', '3 kg = 3,000 g. 3,000 g + 250 g = 3,250 g.', 'SK 6.2 Pertukaran unit jisim');
addM3(5, 11, 'Isi Padu Cecair ml ke l', 'Mudah', '1 liter (ℓ) bersamaan dengan berapa mililiter (mℓ)?', { A: '1,000 mℓ', B: '100 mℓ', C: '10 mℓ', D: '500 mℓ' }, 'A', '1 liter = 1,000 mililiter.', 'SK 6.3 Perkaitan unit isi padu cecair');
addM3(5, 12, 'Bentuk Geometri Prisma', 'Mudah', 'Prisma segi empat tepat juga dikenali sebagai:', { A: 'Kuboid', B: 'Kubus', C: 'Silinder', D: 'Piramid' }, 'A', 'Prisma segi empat tepat dikenali sebagai kuboid.', 'SK 7.1 Mengenal bentuk prisma');
addM3(5, 13, 'Ciri Prisma Segi Tiga', 'Sederhana', 'Berapakah bilangan permukaan rata bagi sebuah prisma segi tiga?', { A: '5 permukaan', B: '6 permukaan', C: '4 permukaan', D: '3 permukaan' }, 'A', 'Prisma segi tiga mempunyai 2 muka segi tiga dan 3 muka segi empat = 5 muka rata.', 'SK 7.1 Ciri-ciri bentuk prisma');
addM3(5, 14, 'Simetri Bentuk 2D', 'Mudah', 'Berapakah bilangan paksi simetri bagi sebuah segi empat sama?', { A: '4 paksi simetri', B: '2 paksi simetri', C: '1 paksi simetri', D: '3 paksi simetri' }, 'A', 'Segi empat sama mempunyai 4 paksi simetri.', 'SK 7.2 Paksi simetri');
addM3(5, 15, 'Masalah Gabungan Masa KBAT', 'Sukar', 'Sebuah bas bertolak dari Kuala Lumpur pada jam 9:15 pagi dan tiba di Ipoh pada jam 11:45 pagi. Berapakah tempoh masa perjalanan bas tersebut?', { A: '2 jam 30 minit', B: '2 jam 15 minit', C: '3 jam 30 minit', D: '1 jam 45 minit' }, 'A', 'Dari 9:15 pagi ke 11:15 pagi = 2 jam. Tambah 30 minit ke 11:45 pagi = 2 jam 30 minit.', 'SK 5.3 Menyelesaikan masalah masa');

// Write out to src/data/matematikTahun3.ts
const matT3FileContent = `import { QuizQuestion } from '../types';

export const MATEMATIK_TAHUN_3_QUESTIONS: QuizQuestion[] = ${JSON.stringify(m3Questions, null, 2)};
`;

fs.writeFileSync('src/data/matematikTahun3.ts', matT3FileContent, 'utf8');
console.log(`Generated ${m3Questions.length} questions for Matematik Tahun 3.`);
