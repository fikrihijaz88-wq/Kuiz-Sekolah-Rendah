import * as fs from 'fs';
import { QuizQuestion } from '../src/types';

// ==========================================
// 1. PENDIDIKAN ISLAM TAHUN 3 (4 topics x 15 = 60 questions)
// ==========================================
const piTopics = [
  'Al-Quran & Tajwid',
  'Akidah & Rukun Iman',
  'Ibadah Solat & Syariat',
  'Sirah Nabawiyyah & Adab Islamiah',
];
const piQuestions: QuizQuestion[] = [];
function addPI(t: number, q: number, sub: string, diff: 'Mudah' | 'Sederhana' | 'Sukar', quest: string, opt: any, ans: 'A' | 'B' | 'C' | 'D', exp: string, ls: string) {
  piQuestions.push({
    id: `pi3-t${t + 1}-${String(q).padStart(2, '0')}`,
    year: 3,
    subject: 'Pendidikan Islam',
    topic: piTopics[t],
    subtopic: sub,
    difficulty: diff,
    question: quest,
    options: opt,
    correctAnswer: ans,
    explanation: exp,
    learningStandard: ls,
  });
}

// Topic 1: Al-Quran & Tajwid
addPI(0, 1, 'Hukum Izhar Halqi', 'Mudah', 'Hukum tajwid apabila Nun Sukun (نْ) atau Tanwin bertemu dengan huruf halaq (ء, هـ, ع, ح, غ, خ) dinamakan:', { A: 'Izhar Halqi', B: 'Idgham Maal Ghunnah', C: 'Ikhfa\' Hakiki', D: 'Iqlab' }, 'A', 'Izhar Halqi berlaku apabila nun mati atau tanwin bertemu 6 huruf kerongkong.', '1.1.1 Hukum Izhar Halqi');
addPI(0, 2, 'Cara Bacaan Izhar Halqi', 'Mudah', 'Bagaimanakah cara membaca hukum Izhar Halqi dengan betul?', { A: 'Jelas dan nyata tanpa dengung', B: 'Dengung 2 harakat', C: 'Menukar bunyi kepada huruf mim', D: 'Samar-samar antara izhar dan idgham' }, 'A', 'Izhar bermaksud jelas dan nyata sebutan huruf nun tanpa dengung.', '1.1.1 Kaedah tajwid');
addPI(0, 3, 'Huruf Izhar Halqi', 'Mudah', 'Antara huruf berikut, yang manakah tergolong dalam huruf Izhar Halqi?', { A: 'Huruf Ha (ح) dan Ain (ع)', B: 'Huruf Ba (ب)', C: 'Huruf Ya (ي) dan Wau (و)', D: 'Huruf Fa (ف)' }, 'A', 'Huruf izhar halqi ialah: ء, هـ, ع, ح, غ, خ.', '1.1.1 Huruf halqi');
addPI(0, 4, 'Hukum Idgham Maal Ghunnah', 'Mudah', 'Nun Sakinah atau tanwin bertemu salah satu huruf ي, ن, م, و dibaca secara:', { A: 'Idgham Maal Ghunnah (memasukkan bunyi serta berdengung 2 harakat)', B: 'Izhar Mutlaq tanpa dengung', C: 'Iqlab', D: 'Ikhfa\' Syafawi' }, 'A', 'Idgham Maal Ghunnah memasukkan bunyi berserta dengung sempurna.', '1.1.2 Hukum Idgham');
addPI(0, 5, 'Huruf Idgham Bila Ghunnah', 'Mudah', 'Hukum Idgham Bila Ghunnah berlaku apabila bertemu dengan dua huruf iaitu:', { A: 'Lam (ل) dan Ra (ر)', B: 'Mim (م) dan Nun (ن)', C: 'Wau (و) dan Ya (ي)', D: 'Kaf (ك) dan Qaf (ق)' }, 'A', 'Dua huruf Idgham Bila Ghunnah (tanpa dengung) ialah Lam dan Ra.', '1.1.3 Idgham Bila Ghunnah');
addPI(0, 6, 'Surah Al-Kafirun', 'Mudah', 'Surah Al-Kafirun mengandungi berapa ayat?', { A: '6 ayat', B: '5 ayat', C: '7 ayat', D: '4 ayat' }, 'A', 'Surah Al-Kafirun mengandungi 6 ayat.', '1.2.1 Surah Al-Kafirun');
addPI(0, 7, 'Mesej Surah Al-Kafirun', 'Mudah', 'Ayat "لَكُمْ دِينُكُمْ وَلِيَ دِينِ" dalam Surah Al-Kafirun bermaksud:', { A: 'Untukmu agamamu, dan untukkulah agamaku', B: 'Katakanlah wahai orang kafir', C: 'Aku tidak menyembah apa yang kamu sembah', D: 'Segala puji bagi Allah' }, 'A', 'Ayat terakhir ini menegaskan ketegasan aqidah Islam tanpa kompromi.', '1.2.1 Terjemahan ayat Al-Quran');
addPI(0, 8, 'Surah Al-Asr', 'Mudah', 'Apakah maksud "Al-Asr" dalam nama Surah Al-Asr?', { A: 'Demi Masa', B: 'Pertolongan', C: 'Gajah', D: 'Hari Kiamat' }, 'A', 'Al-Asr bermaksud masa atau waktu petang.', '1.2.2 Surah Al-Asr');
addPI(0, 9, 'Pengajaran Surah Al-Asr', 'Mudah', 'Menurut Surah Al-Asr, semua manusia berada dalam kerugian KECUALI orang yang:', { A: 'Beriman, beramal soleh serta saling berpesan dengan kebenaran dan kesabaran', B: 'Mempunyai harta yang banyak', C: 'Menjadi orang terkenal', D: 'Hanya tidur sepanjang hari' }, 'A', 'Orang yang beriman, beramal soleh dan menasihati dengan sabar tidak rugi.', '1.2.2 Pengajaran surah Al-Asr');
addPI(0, 10, 'Tanda Waqaf Lazim', 'Sederhana', 'Simbol huruf mim kecil (م) dalam mushaf Al-Quran menunjukkan tanda:', { A: 'Waqaf Lazim (wajib berhenti)', B: 'Wajib terus tanpa henti', C: 'Harus berhenti atau terus', D: 'Tanda sujud tilawah' }, 'A', 'Waqaf Lazim bertanda mim kecil mewajibkan pembaca berhenti membaca.', '1.1.4 Tanda waqaf');
addPI(0, 11, 'Tanda Waqaf Laa (لا)', 'Sederhana', 'Apakah maksud tanda waqaf bertanda huruf (لا)?', { A: 'Tidak boleh berhenti (terus membaca)', B: 'Harus berhenti', C: 'Lebih baik berhenti', D: 'Berhenti seketika tanpa bernafas' }, 'A', 'Tanda "Laa" bermaksud jangan berhenti di tempat tersebut.', '1.1.4 Tanda waqaf Al-Quran');
addPI(0, 12, 'Surah Al-Quraisy', 'Mudah', 'Kaum Quraisy terkenal dengan kebiasaan bermusafir untuk berniaga pada musim:', { A: 'Sejuk dan panas', B: 'Hujan dan ribut', C: 'Banjir dan kemarau', D: 'Bunga dan luruh' }, 'A', 'Surah Quraisy menyebut: rihlatas-syita\'i was-saif (perjalanan musim sejuk dan panas).', '1.2.3 Surah Al-Quraisy');
addPI(0, 13, 'Hukum Iqlab', 'Sederhana', 'Hukum Iqlab berlaku apabila Nun Sukun atau Tanwin bertemu dengan huruf tunggal iaitu:', { A: 'Ba (ب)', B: 'Mim (م)', C: 'Fa (ف)', D: 'Ta (ت)' }, 'A', 'Satu-satunya huruf Iqlab ialah huruf Ba (ب).', '1.1.5 Hukum Iqlab');
addPI(0, 14, 'Adab Membaca Al-Quran', 'Mudah', 'Antara adab sebelum memegang dan membaca mashaf Al-Quran ialah:', { A: 'Berwuduk dan menghadap kiblat', B: 'Membaca sambil makan snek', C: 'Ketawa terbahak-bahak', D: 'Meletakkan Quran di atas lantai' }, 'A', 'Umat Islam disunatkan berwuduk, menutup aurat dan menghadap kiblat.', '1.3.1 Adab tilawah Al-Quran');
addPI(0, 15, 'Tadabbur Nilai Masa KBAT', 'Sukar', 'Seorang murid menggunakan waktu terluang untuk mengulang kaji dan membantu ibu bapanya. Tindakan ini menepati tuntutan:', { A: 'Surah Al-Asr tentang menghargai masa dengan perkara berfaedah', B: 'Hukum Izhar Halqi', C: 'Waqaf Lazim', D: 'Berhijrah ke kota lain' }, 'A', 'Menghargai masa untuk kebajikan menepati tuntutan Surah Al-Asr.', '1.2.2 Menghayati nilai surah');

// Topic 2: Akidah & Rukun Iman
addPI(1, 1, 'Rukun Iman Ketiga', 'Mudah', 'Apakah Rukun Iman yang ketiga dalam akidah Islam?', { A: 'Beriman kepada Kitab-kitab Allah', B: 'Beriman kepada Malaikat', C: 'Beriman kepada Rasul', D: 'Beriman kepada Hari Akhirat' }, 'A', 'Urutan Rukun Iman: 1. Allah, 2. Malaikat, 3. Kitab, 4. Rasul, 5. Hari Kiamat, 6. Qada\' & Qadar.', '2.1.1 Rukun Iman');
addPI(1, 2, 'Bilangan Kitab Samawi', 'Mudah', 'Berapakah bilangan kitab samawi utama yang wajib diimani secara terperinci?', { A: '4 buah kitab', B: '5 buah kitab', C: '10 buah kitab', D: '2 buah kitab' }, 'A', 'Empat kitab samawi ialah Taurat, Zabur, Injil dan Al-Quran.', '2.1.1 Kitab-kitab suci Allah');
addPI(1, 3, 'Kitab Taurat', 'Mudah', 'Kitab Taurat diturunkan oleh Allah SWT kepada Nabi:', { A: 'Nabi Musa a.s.', B: 'Nabi Daud a.s.', C: 'Nabi Isa a.s.', D: 'Nabi Muhammad SAW' }, 'A', 'Kitab Taurat diturunkan kepada Nabi Musa a.s.', '2.1.1 Rasul penerima kitab');
addPI(1, 4, 'Kitab Zabur', 'Mudah', 'Kitab Zabur diturunkan kepada Nabi:', { A: 'Nabi Daud a.s.', B: 'Nabi Musa a.s.', C: 'Nabi Isa a.s.', D: 'Nabi Ibrahim a.s.' }, 'A', 'Kitab Zabur diturunkan kepada Nabi Daud a.s.', '2.1.1 Rasul penerima kitab');
addPI(1, 5, 'Kitab Injil', 'Mudah', 'Kitab Injil diwahyukan oleh Allah kepada Nabi:', { A: 'Nabi Isa a.s.', B: 'Nabi Daud a.s.', C: 'Nabi Musa a.s.', D: 'Nabi Nuh a.s.' }, 'A', 'Kitab Injil diturunkan kepada Nabi Isa a.s.', '2.1.1 Rasul penerima kitab');
addPI(1, 6, 'Kitab Al-Quran', 'Mudah', 'Kitab suci terakhir yang menjadi panduan sepanjang zaman hingga hari kiamat ialah:', { A: 'Al-Quran', B: 'Taurat', C: 'Zabur', D: 'Suhuf' }, 'A', 'Al-Quran diturunkan kepada Nabi Muhammad SAW untuk seluruh umat manusia.', '2.1.1 Kitab mukjizat agung');
addPI(1, 7, 'Bahasa Al-Quran', 'Mudah', 'Kitab suci Al-Quran diturunkan dalam bahasa:', { A: 'Bahasa Arab', B: 'Bahasa Ibrani', C: 'Bahasa Suryani', D: 'Bahasa Melayu' }, 'A', 'Al-Quran diturunkan dengan lafaz bahasa Arab yang fasih.', '2.1.1 Mukjizat bahasa Al-Quran');
addPI(1, 8, 'Nama Allah Al-Alim', 'Mudah', 'Nama Allah "Al-Alim" (العليم) membawa pengertian:', { A: 'Maha Mengetahui segala sesuatu secara mendalam', B: 'Maha Melihat', C: 'Maha Mendengar', D: 'Maha Pengasih' }, 'A', 'Al-Alim bermaksud Allah Maha Mengetahui zahir mahupun batin.', '2.2.1 Asmaul Husna');
addPI(1, 9, 'Nama Allah Al-Basir', 'Mudah', 'Nama Allah "Al-Basir" (البصير) bermaksud:', { A: 'Maha Melihat segala perbuatan makhluk', B: 'Maha Mencipta', C: 'Maha Adil', D: 'Maha Perkasa' }, 'A', 'Al-Basir bermaksud penglihatan Allah meliputi apa sahaja walau di kegelapan malam.', '2.2.1 Asmaul Husna Al-Basir');
addPI(1, 10, 'Penghayatan Sifat Al-Basir', 'Mudah', 'Orang yang meyakini bahawa Allah bersifat Al-Basir akan sentiasa:', { A: 'Menjaga tingkah laku daripada melakukan dosa walau di tempat tersembunyi', B: 'Melakukan maksiat apabila bersendirian', C: 'Mengumpat kawan secara sembunyi', D: 'Mencuri barang tanpa rasa takut' }, 'A', 'Kesedaran bahawa Allah Maha Melihat melahirkan sifat ihsan dan taqwa.', '2.2.2 Kesan beriman kepada Al-Basir');
addPI(1, 11, 'Maksud Suhuf', 'Sederhana', 'Lembaran wahyu kecil yang diturunkan kepada para Nabi terdahulu dipanggil:', { A: 'Suhuf', B: 'Tafsir', C: 'Hadis', D: 'Manuskrip' }, 'A', 'Suhuf ialah lembaran wahyu contohnya diberikan kepada Nabi Ibrahim dan Nabi Musa.', '2.1.2 Mengenal Suhuf');
addPI(1, 12, 'Keistimewaan Al-Quran', 'Mudah', 'Al-Quran terpelihara daripada sebarang perubahan dan pemalsuan kerana:', { A: 'Dijamin penjagaannya oleh Allah SWT sendiri', B: 'Disimpan di dalam peti besi kebal', C: 'Ditulis dengan dakwat emas', D: 'Hanya ada satu naskhah sahaja di dunia' }, 'A', 'Allah berfirman: "Sesungguhnya Kamilah yang menurunkan Al-Quran dan memeliharanya".', '2.1.3 Keaslian Al-Quran');
addPI(1, 13, 'Beriman kepada Hari Akhirat', 'Mudah', 'Setiap amalan baik dan buruk manusia di dunia akan dihisab pada:', { A: 'Hari Kiamat di Padang Mahsyar', B: 'Di dalam mimpi', C: 'Semasa tidur malam', D: 'Semasa menaiki kapal terbang' }, 'A', 'Hari Akhirat ialah hari pembalasan bagi seluruh amalan manusia.', '2.1.4 Hari Kiamat');
addPI(1, 14, 'Kesan Beriman kepada Kitab', 'Sederhana', 'Antara bukti seseorang beriman kepada kitab Al-Quran ialah:', { A: 'Membaca, memahami dan mengamalkan ajaran Al-Quran setiap hari', B: 'Hanya menyimpan Quran di dalam almari berkunci', C: 'Menjadikan Quran sekadar hiasan dinding', D: 'Membaca tanpa mahu memahami maksudnya' }, 'A', 'Al-Quran diturunkan untuk dibaca dan diamalkan sebagai pedoman hidup.', '2.1.3 Bukti beriman');
addPI(1, 15, 'Penghayatan Al-Alim KBAT', 'Sukar', 'Ahmad terjumpa dompet berisi wang tebal di kantin tanpa ada orang melihatnya. Dia menyerahkannya kepada guru bertugas. Sikap Ahmad didorong keyakinan:', { A: 'Allah Al-Alim mengetahui perbuatannya dan membalas kejujuran dengan pahala', B: 'Takut dituduh oleh kawan-kawan', C: 'Ingin mendapat ganjaran hadiah wang', D: 'Supaya namanya diumumkan di perhimpunan' }, 'A', 'Keyakinan bahawa Allah mengetahui segala perkara mendorong kejujuran sejati.', '2.2.2 Penghayatan akidah');

// Topic 3: Ibadah Solat & Syariat
addPI(2, 1, 'Solat Berjemaah', 'Mudah', 'Solat yang dilakukan oleh sekurang-kurangnya dua orang yang terdiri daripada imam dan makmum dinamakan:', { A: 'Solat berjemaah', B: 'Solat bersendirian (munfarid)', C: 'Solat jamak', D: 'Solat qasar' }, 'A', 'Solat berjemaah sekurang-kurangnya 2 orang: seorang imam dan seorang makmum.', '3.1.1 Konsep solat berjemaah');
addPI(2, 2, 'Kelebihan Solat Berjemaah', 'Mudah', 'Ganjaran pahala bagi solat berjemaah berbanding solat bersendirian ialah sebanyak:', { A: '27 darjat', B: '10 darjat', C: '50 darjat', D: '100 darjat' }, 'A', 'Hadis sahih menyatakan solat berjemaah melebihi solat bersendirian sebanyak 27 darjat.', '3.1.1 Keutamaan solat berjemaah');
addPI(2, 3, 'Syarat Sah Solat', 'Mudah', 'Antara berikut, yang manakah merupakan salah satu syarat sah solat?', { A: 'Menutup aurat dan suci daripada hadas', B: 'Membaca doa qunut', C: 'Duduk tahiyyat awal', D: 'Memakai serban putih' }, 'A', 'Menutup aurat dan suci hadas kecil serta besar adalah syarat sah solat.', '3.2.1 Syarat sah solat');
addPI(2, 4, 'Syarat Wajib Solat', 'Mudah', 'Antara berikut, yang manakah syarat wajib solat fardhu bagi seseorang?', { A: 'Islam, baligh dan berakal', B: 'Kaya dan berharta', C: 'Mempunyai rumah sendiri', D: 'Pandai membaca tulisan jawi' }, 'A', 'Syarat wajib solat ialah Islam, baligh (cukup umur) dan berakal sihat.', '3.2.2 Syarat wajib solat');
addPI(2, 5, 'Rukun Fi\'li', 'Mudah', 'Perbuatan rukun solat yang dilakukan menggunakan anggota badan dinamakan:', { A: 'Rukun Fi\'li', B: 'Rukun Qauli', C: 'Rukun Qalbi', D: 'Rukun Syarat' }, 'A', 'Rukun Fi\'li ialah perbuatan seperti ruku\', iktidal, sujud dan duduk tahiyyat.', '3.2.3 Rukun solat');
addPI(2, 6, 'Rukun Qauli (Bacaan)', 'Mudah', 'Antara bacaan rukun qauli yang wajib dilafazkan di telinga sendiri dalam solat ialah:', { A: 'Membaca Surah Al-Fatihah', B: 'Membaca doa iftitah', C: 'Membaca doa qunut', D: 'Membaca tasbih ketika ruku\'' }, 'A', 'Membaca Surah Al-Fatihah merupakan rukun qauli yang wajib dalam setiap rakaat.', '3.2.3 Rukun qauli');
addPI(2, 7, 'Perkara Membatalkan Solat (Bercakap)', 'Mudah', 'Solat seseorang akan terbatal serta-merta sekiranya dia:', { A: 'Bercakap perkataan yang difahami dengan sengaja', B: 'Mengelipkan mata', C: 'Menelan air liur yang bersih di dalam mulut', D: 'Menoleh sedikit kepala tanpa bergerak dada' }, 'A', 'Bercakap dengan sengaja walaupun dua huruf membatalkan solat.', '3.2.4 Perkara membatalkan solat');
addPI(2, 8, 'Perkara Membatalkan Solat (Makan/Minum)', 'Mudah', 'Apakah hukum seseorang yang menelan baki sisa makanan di celah gigi dengan sengaja semasa solat?', { A: 'Batal solatnya', B: 'Sah solatnya', C: 'Makruh', D: 'Sunat' }, 'A', 'Makan atau menelan apa jua benda dengan sengaja membatalkan solat.', '3.2.4 Pembatal solat');
addPI(2, 9, 'Pergerakan Berturut-turut', 'Sederhana', 'Melakukan pergerakan besar sebanyak _______ kali berturut-turut akan membatalkan solat.', { A: '3 kali berturut-turut', B: '1 kali', C: '2 kali', D: '10 kali' }, 'A', 'Tiga kali pergerakan anggota besar berturut-turut tanpa keperluan membatalkan solat.', '3.2.4 Pergerakan batal solat');
addPI(2, 10, 'Tuma\'ninah dalam Solat', 'Sederhana', 'Apakah maksud "tuma\'ninah" yang diwajibkan dalam ruku\' dan sujud?', { A: 'Bertenang seketika sekadar bacaan "Subhanallah"', B: 'Membaca dengan suara yang sangat kuat', C: 'Bergerak ke kiri dan ke kanan', D: 'Menutup mata rapat-rapat' }, 'A', 'Tuma\'ninah ialah diam seketika dalam rukun perbuatan dengan tenang.', '3.2.3 Tuma\'ninah');
addPI(2, 11, 'Kedudukan Makmum Lelaki Tunggal', 'Sederhana', 'Jika solat berjemaah terdiri daripada seorang imam lelaki dan seorang makmum lelaki, makmum berdiri di:', { A: 'Sebelah kanan imam sedikit ke belakang', B: 'Sebelah kiri imam', C: 'Tepat di belakang imam jarak satu meter', D: 'Di hadapan imam' }, 'A', 'Seorang makmum lelaki berdiri di sisi kanan imam terbelakang sedikit.', '3.1.2 Susunan saf solat');
addPI(2, 12, 'Sunat Ab\'ad', 'Sederhana', 'Membaca Tahiyyat Awal dan selawat ke atas Nabi dalam rakaat kedua tergolong dalam:', { A: 'Sunat Ab\'ad (jika tertinggal disunatkan sujud sahwi)', B: 'Rukun solat', C: 'Syarat sah solat', D: 'Sunat Hai\'ah' }, 'A', 'Tahiyyat awal ialah sunat Ab\'ad yang ditampung dengan sujud sahwi jika terlupa.', '3.2.5 Sunat Ab\'ad');
addPI(2, 13, 'Sujud Sahwi', 'Sederhana', 'Sujud Sahwi dilakukan sebanyak dua kali sujud dilakukan pada waktu:', { A: 'Sebelum memberi salam', B: 'Sebelum membaca takbiratul ihram', C: 'Ketika sedang ruku\'', D: 'Selepas keluar dari masjid' }, 'A', 'Sujud sahwi dilakukan selepas tahiyyat akhir sebelum memberi salam.', '3.2.5 Sujud Sahwi');
addPI(2, 14, 'Solat Jumaat', 'Mudah', 'Solat fardhu Jumaat dua rakaat menggantikan solat zohor dan didahului dengan:', { A: 'Dua khutbah Jumaat', B: 'Majlis jamuan', C: 'Pertandingan azan', D: 'Perarakan' }, 'A', 'Solat Jumaat wajib didahului dengan dua khutbah yang mengandungi rukun khutbah.', '3.1.3 Solat Jumaat');
addPI(2, 15, 'Keutamaan Menepati Waktu KBAT', 'Sukar', 'Azan Zohor berkumandang ketika Muaz sedang bermain permainan video. Tindakan terbaik bagi Muaz ialah:', { A: 'Berhenti bermain, mengambil wuduk dan segera menunaikan solat fardhu', B: 'Meneruskan permainan sehingga petang', C: 'Memperlahankan bunyi pembesar suara komputer', D: 'Menangguhkan solat hingga ke waktu Maghrib' }, 'A', 'Menunaikan solat di awal waktu ialah amalan paling disukai Allah SWT.', '3.2.6 Menghargai kewajipan solat');

// Topic 4: Sirah Nabawiyyah & Adab Islamiah
addPI(3, 1, 'Peristiwa Hijrah ke Madinah', 'Mudah', 'Nabi Muhammad SAW dan para sahabat berhijrah dari kota Mekah ke kota:', { A: 'Madinah Al-Munawwarah (Yathrib)', B: 'Taif', C: 'Mesir', D: 'Syam' }, 'A', 'Peristiwa Hijrah ialah perpindahan dari kota Mekah ke kota Madinah.', '4.1.1 Peristiwa Hijrah');
addPI(3, 2, 'Sahabat Setia Semasa Hijrah', 'Mudah', 'Siapakah sahabat setia yang menemani Rasulullah SAW di dalam Gua Thur semasa peristiwa Hijrah?', { A: 'Sayyidina Abu Bakar As-Siddiq r.a.', B: 'Sayyidina Umar Al-Khattab r.a.', C: 'Sayyidina Uthman bin Affan r.a.', D: 'Sayyidina Ali bin Abi Talib r.a.' }, 'A', 'Abu Bakar r.a. menemani baginda bersembunyi di Gua Thur.', '4.1.1 Peristiwa hijrah Rasulullah');
addPI(3, 3, 'Pengorbanan Sayyidina Ali', 'Mudah', 'Siapakah pemuda berani yang tidur di atas tempat tidur Nabi SAW untuk mengelirukan kaum kafir Quraisy?', { A: 'Sayyidina Ali bin Abi Talib r.a.', B: 'Sayyidina Bilal bin Rabah r.a.', C: 'Sayyidina Hamzah r.a.', D: 'Sayyidina Zaid bin Harithah r.a.' }, 'A', 'Sayyidina Ali r.a. dengan berani menggantikan tempat tidur Rasulullah SAW.', '4.1.1 Tokoh peristiwa hijrah');
addPI(3, 4, 'Masjid Pertama Dibina', 'Mudah', 'Masjid pertama yang dibina oleh Rasulullah SAW dalam perjalanan hijrah berhampiran Madinah ialah:', { A: 'Masjid Quba\'', B: 'Masjid Nabawi', C: 'Masjidil Haram', D: 'Masjid Al-Aqsa' }, 'A', 'Masjid Quba\' ialah masjid pertama dibina dalam sejarah Islam.', '4.1.2 Masjid pertama dalam Islam');
addPI(3, 5, 'Persaudaraan Muhajirin dan Ansar', 'Mudah', 'Golongan orang Islam yang berhijrah dari Mekah dinamakan kaum:', { A: 'Muhajirin', B: 'Ansar', C: 'Bani Quraizah', D: 'Quraisy' }, 'A', 'Muhajirin ialah orang Islam yang berhijrah meninggalkan Mekah.', '4.1.3 Persaudaraan Muhajirin dan Ansar');
addPI(3, 6, 'Kaum Ansar', 'Mudah', 'Penduduk asal kota Madinah yang menyambut dan membantu kaum Muhajirin digelar:', { A: 'Kaum Ansar (Penolong)', B: 'Kaum Badwi', C: 'Kaum Hawariyyun', D: 'Kaum Rom' }, 'A', 'Kaum Ansar bermaksud penolong kerana mereka membantu saudara Muhajirin.', '4.1.3 Kaum penolong Madinah');
addPI(3, 7, 'Adab Menuntut Ilmu', 'Mudah', 'Antara adab yang terpuji ketika menuntut ilmu di hadapan guru ialah:', { A: 'Memberi tumpuan dan menghormati guru dengan sopan', B: 'Bercakap-cakap ketika guru mengajar', C: 'Tidur semasa sesi pembelajaran', D: 'Mengejek rakan yang bertanya' }, 'A', 'Menghormati guru dan memberi tumpuan membuka keberkatan ilmu.', '5.1.1 Adab menuntut ilmu');
addPI(3, 8, 'Niat Belajar', 'Mudah', 'Seorang murid Muslim mestilah membetulkan niat menuntut ilmu semata-mata kerana:', { A: 'Mencari keredhaan Allah dan menghilangkan kejahilan diri', B: 'Untuk bersikap sombong di hadapan kawan', C: 'Ingin dipuji pandai oleh orang ramai', D: 'Supaya boleh memperbodohkan orang lain' }, 'A', 'Niat ikhlas kerana Allah adalah syarat utama keberkatan ilmu.', '5.1.1 Niat ikhlas');
addPI(3, 9, 'Doa Menuntut Ilmu', 'Mudah', 'Lengkapkan doa belajar: "رَبِّ زِدْنِي عِلْمًا وَارْزُقْنِي _______"', { A: 'فَهْمًا (Kefahaman)', B: 'مَالاً (Harta)', C: 'نَوْمًا (Tidur)', D: 'لَعِبًا (Bermain)' }, 'A', 'Doa belajar memohon: "Wahai Tuhanku, tambahkanlah ilmuku dan kurniakanlah kefahaman kepadaku".', '5.1.2 Doa penerang hati');
addPI(3, 10, 'Adab terhadap Rakan Sebaya', 'Mudah', 'Bagaimanakah sikap seorang murid terhadap rakan sekelas yang memerlukan bantuan?', { A: 'Membantu dengan ikhlas dan bertutur dengan sopan santun', B: 'Menolak untuk membantu', C: 'Meminta bayaran wang', D: 'Membuli rakan tersebut' }, 'A', 'Membantu rakan dengan ikhlas mengeratkan ukhuwah persaudaraan.', '5.1.3 Adab pergaulan rakan');
addPI(3, 11, 'Adab Masuk dan Keluar Rumah', 'Mudah', 'Apabila melangkah masuk ke dalam rumah, kita disunatkan untuk:', { A: 'Memberi salam dan melangkah dengan kaki kanan', B: 'Melangkah dengan kaki kiri tanpa bersuara', C: 'Menendang pintu kuat-kuat', D: 'Terus melompat ke sofa' }, 'A', 'Sunnah Rasulullah melangkah masuk dengan kaki kanan serta ucapan salam.', '5.1.4 Adab keluar masuk rumah');
addPI(3, 12, 'Adab Makan Rasulullah', 'Mudah', 'Rasulullah SAW mengajar kita makan dengan adab berikut KECUALI:', { A: 'Makan secara gelojoh dan berdiri', B: 'Membaca Bismillah', C: 'Makan menggunakan tangan kanan', D: 'Mengambil makanan yang paling dekat' }, 'A', 'Islam melarang makan tergesa-gesa atau bersikap gelojoh.', '5.1.5 Sunnah adab makan');
addPI(3, 13, 'Amalan Menziarahi Orang Sakit', 'Sederhana', 'Antara adab ketika menziarahi rakan yang terlantar sakit di hospital ialah:', { A: 'Mendoakan kesembuhan dan tidak berbuat bising', B: 'Bercakap hal yang menakutkan pesakit', C: 'Duduk terlalu lama hingga mengganggu waktu rehat pesakit', D: 'Memakan makanan pesakit' }, 'A', 'Menziarahi pesakit hendaklah mendoakan kesejahteraan dan menjaga adab ketenteraman.', '5.1.6 Adab menziarahi pesakit');
addPI(3, 14, 'Nilai Persaudaraan Hijrah', 'Sederhana', 'Apakah iktibar utama daripada persaudaraan antara Muhajirin dan Ansar di Madinah?', { A: 'Semangat perpaduan dan tolong-menolong mengatasi perbezaan latar belakang', B: 'Mementingkan keuntungan perniagaan diri sendiri', C: 'Membiarkan orang miskin merempat', D: 'Tidak perlu berkongsi rezeki' }, 'A', 'Kaum Ansar berkongsi rumah dan harta dengan Muhajirin demi ukhuwah Islamiah.', '4.1.3 Pengajaran persaudaraan');
addPI(3, 15, 'Aplikasi Nilai Adab KBAT', 'Sukar', 'Rakan anda mendapat keputusan ujian yang kurang memuaskan dan berasa sedih. Tindakan beradab yang wajar anda lakukan ialah:', { A: 'Memberikan kata-kata semangat dan mengajaknya mengulang kaji pelajaran bersama-sama', B: 'Mentertawakan markah rendahnya di hadapan kawan lain', C: 'Menyuruhnya berhenti bersekolah', D: 'Membandingkan markahnya yang rendah dengan markah anda yang tinggi' }, 'A', 'Memberi sokongan moral dan dorongan membina adalah akhlak mulia seorang Muslim.', '5.1.3 Aplikasi adab persahabatan');

fs.writeFileSync('src/data/pendidikanIslamTahun3.ts', `import { QuizQuestion } from '../types';\n\nexport const PENDIDIKAN_ISLAM_TAHUN_3_QUESTIONS: QuizQuestion[] = ${JSON.stringify(piQuestions, null, 2)};\n`, 'utf8');
console.log(`Generated ${piQuestions.length} questions for Pendidikan Islam Tahun 3.`);

// ==========================================
// 2. BAHASA ARAB TAHUN 3 (3 topics x 15 = 45 questions)
// ==========================================
const baTopics = [
  'تَفَضَّلْ إِلَى الْفَصْلِ (Di Bilik Darjah)',
  'مَلَابِسِي الْجَمِيلَةُ (Pakaian Saya yang Cantik)',
  'الْأَلْوَانُ وَالْأَرْقَامُ (Warna dan Nombor 11-20)',
];
const baQuestions: QuizQuestion[] = [];
function addBA(t: number, q: number, sub: string, diff: 'Mudah' | 'Sederhana' | 'Sukar', quest: string, opt: any, ans: 'A' | 'B' | 'C' | 'D', exp: string, ls: string) {
  baQuestions.push({
    id: `ba3-t${t + 1}-${String(q).padStart(2, '0')}`,
    year: 3,
    subject: 'Bahasa Arab',
    topic: baTopics[t],
    subtopic: sub,
    difficulty: diff,
    question: quest,
    options: opt,
    correctAnswer: ans,
    explanation: exp,
    learningStandard: ls,
  });
}

// Topic 1: Di Bilik Darjah (تَفَضَّلْ إِلَى الْفَصْلِ)
addBA(0, 1, 'Peralatan Kelas (Papan Hitam)', 'Mudah', 'Apakah maksud perkataan "سَبُّورَةٌ" dalam bahasa Melayu?', { A: 'Papan tulis / Papan hitam', B: 'Meja guru', C: 'Kerusi kayu', D: 'Tingkap kelas' }, 'A', '"سَبُّورَةٌ" bermaksud papan tulis atau papan putih.', '1.1 Kosa kata kelas');
addBA(0, 2, 'Peralatan Kelas (Kerusi)', 'Mudah', 'Perkataan Arab bagi "kerusi" ialah:', { A: 'كُرْسِيٌّ', B: 'مَكْتَبٌ', C: 'بَابٌ', D: 'فَصْلٌ' }, 'A', '"كُرْسِيٌّ" bermaksud kerusi untuk duduk.', '1.1 Alatan kelas');
addBA(0, 3, 'Peralatan Kelas (Meja)', 'Mudah', '"مَكْتَبٌ" bermaksud:', { A: 'Meja', B: 'Buku', C: 'Pintu', D: 'Lampu' }, 'A', '"مَكْتَبٌ" bermaksud meja tulis.', '1.1 Alatan kelas');
addBA(0, 4, 'Peralatan Kelas (Pemadam Papan)', 'Mudah', 'Alat untuk memadam tulisan di papan tulis dipanggil:', { A: 'مِمْسَحَةٌ', B: 'مِسْطَرَةٌ', C: 'قَلَمٌ', D: 'حَقِيبَةٌ' }, 'A', '"مِمْسَحَةٌ" ialah pemadam papan tulis.', '1.1 Alatan bilik darjah');
addBA(0, 5, 'Pintu Kelas', 'Mudah', 'Perkataan Arab bagi "pintu" ialah:', { A: 'بَابٌ', B: 'نَافِذَةٌ', C: 'جِدَارٌ', D: 'سَقْفٌ' }, 'A', '"بَابٌ" bermaksud pintu.', '1.1 Bahagian bilik darjah');
addBA(0, 6, 'Tingkap Kelas', 'Mudah', '"نَافِذَةٌ" bermaksud:', { A: 'Tingkap', B: 'Pintu', C: 'Lantai', D: 'Kipas' }, 'A', '"نَافِذَةٌ" bermaksud tingkap kelas.', '1.1 Bahagian kelas');
addBA(0, 7, 'Kata Tunjuk Muzakkar (هَذَا)', 'Sederhana', 'Pilih kata tunjuk yang betul untuk perkataan "مَكْتَبٌ":', { A: 'هَذَا مَكْتَبٌ', B: 'هَذِهِ مَكْتَبٌ', C: 'تِلْكَ مَكْتَبٌ', D: 'أَنْتَ مَكْتَبٌ' }, 'A', '"مَكْتَبٌ" ialah kata nama muzakkar (tiada ta marbutah), menggunakan "هَذَا".', '2.1 Kata tunjuk ini');
addBA(0, 8, 'Kata Tunjuk Muannas (هَذِهِ)', 'Sederhana', 'Pilih ayat yang betul menggunakan kata tunjuk muannas:', { A: 'هَذِهِ سَبُّورَةٌ', B: 'هَذَا سَبُّورَةٌ', C: 'هُوَ سَبُّورَةٌ', D: 'أَنَا سَبُّورَةٌ' }, 'A', '"سَبُّورَةٌ" mempunyai ta marbutah (ة), maka menggunakan kata tunjuk "هَذِهِ".', '2.1 Kata tunjuk muannas');
addBA(0, 9, 'Kipas Siling', 'Mudah', 'Perkataan Arab bagi "kipas" di siling kelas ialah:', { A: 'مِرْوَحَةٌ', B: 'مِصْبَاحٌ', C: 'سَاعَةٌ', D: 'دُولَابٌ' }, 'A', '"مِرْوَحَةٌ" bermaksud kipas angin.', '1.1 Peralatan bilik darjah');
addBA(0, 10, 'Lampu Kelas', 'Mudah', '"مِصْبَاحٌ" membawa maksud:', { A: 'Lampu', B: 'Cermin', C: 'Jam dinding', D: 'Peti kecemasan' }, 'A', '"مِصْبَاحٌ" bermaksud lampu penyinar.', '1.1 Kosa kata kelas');
addBA(0, 11, 'Jam Dinding', 'Mudah', '"سَاعَةٌ" yang tergantung di dinding kelas bermaksud:', { A: 'Jam', B: 'Peta dunia', C: 'Almari buku', D: 'Bakul sampah' }, 'A', '"سَاعَةٌ" bermaksud jam dinding atau jam tangan.', '1.1 Kosa kata');
addBA(0, 12, 'Tong Sampah Kelas', 'Sederhana', 'Perkataan Arab bagi "tong sampah" ialah:', { A: 'سَلَّةُ الْمُهْمَلَاتِ', B: 'مَكْتَبَةٌ', C: 'مُخْتَبَرٌ', D: 'مَيْدَانٌ' }, 'A', '"سَلَّةُ الْمُهْمَلَاتِ" ialah bakul atau tong sampah.', '1.1 Menjaga kebersihan bilik darjah');
addBA(0, 13, 'Almari Kelas', 'Mudah', '"دُولَابٌ" bermaksud:', { A: 'Almari', B: 'Meja', C: 'Kerusi', D: 'Buku teks' }, 'A', '"دُولَابٌ" bermaksud almari kelas.', '1.1 Perabot kelas');
addBA(0, 14, 'Arahan Guru "Masuklah"', 'Mudah', 'Ungkapan sopan guru "تَفَضَّلْ إِلَى الْفَصْلِ" bermaksud:', { A: 'Silakan masuk ke kelas', B: 'Sila keluar dari kelas', C: 'Buka buku teks kamu', D: 'Tutup pintu itu' }, 'A', '"تَفَضَّلْ إِلَى الْفَصْلِ" bermaksud jemputan masuk ke dalam kelas.', '1.2 Ungkapan harian bilik darjah');
addBA(0, 15, 'Penggunaan Tatabahasa KBAT', 'Sukar', 'Ahmad ingin menunjukkan jam dinding di hadapannya kepada guru. Ayat manakah yang paling gramatis?', { A: 'هَذِهِ سَاعَةٌ جَمِيلَةٌ', B: 'هَذَا سَاعَةٌ جَمِيلَةٌ', C: 'هَذَا سَاعَةٌ كَبِيرٌ', D: 'هَذِهِ سَاعَةٌ كَبِيرٌ' }, 'A', '"سَاعَةٌ" muannas memerlukan kata tunjuk "هَذِهِ" dan sifat muannas "جَمِيلَةٌ".', '2.2 Keselarasan kata sifat muannas');

// Topic 2: Pakaian Saya yang Cantik (مَلَابِسِي الْجَمِيلَةُ)
addBA(1, 1, 'Kemeja (قَمِيصٌ)', 'Mudah', 'Apakah maksud perkataan "قَمِيصٌ"?', { A: 'Kemeja', B: 'Seluar panjang', C: 'Tali leher', D: 'Stoking' }, 'A', '"قَمِيصٌ" bermaksud baju kemeja berkolar.', '1.1 Pakaian sekolah');
addBA(1, 2, 'Seluar Panjang (بَنْطَلُونٌ)', 'Mudah', 'Perkataan Arab bagi "seluar panjang" ialah:', { A: 'بَنْطَلُونٌ', B: 'قَمِيصٌ', C: 'فُسْتَانٌ', D: 'مِنْدِيلٌ' }, 'A', '"بَنْطَلُونٌ" bermaksud seluar panjang.', '1.1 Kosa kata pakaian');
addBA(1, 3, 'Tudung Kepala (خِمَارٌ)', 'Mudah', '"خِمَارٌ" yang dipakai oleh murid perempuan bermaksud:', { A: 'Tudung kepala', B: 'Baju sukan', C: 'Sarung tangan', D: 'Beg galas' }, 'A', '"خِمَارٌ" bermaksud tudung kain penutup kepala.', '1.1 Pakaian seragam');
addBA(1, 4, 'Gaun / Gaun Perempuan (فُسْتَانٌ)', 'Mudah', 'Perkataan Arab bagi "gaun" atau pakaian perempuan ialah:', { A: 'فُسْتَانٌ', B: 'حِذَاءٌ', C: 'حِزَامٌ', D: 'جَوْرَبٌ' }, 'A', '"فُسْتَانٌ" bermaksud gaun wanita.', '1.1 Jenis pakaian');
addBA(1, 5, 'Kasut (حِذَاءٌ)', 'Mudah', '"حِذَاءٌ" dipakai di kaki bermaksud:', { A: 'Kasut', B: 'Seluar', C: 'Baju', D: 'Topi' }, 'A', '"حِذَاءٌ" bermaksud kasut.', '1.1 Aksesori pakaian');
addBA(1, 6, 'Stoking (جَوْرَبٌ)', 'Mudah', 'Perkataan Arab bagi "stoking / sarung kaki" ialah:', { A: 'جَوْرَبٌ', B: 'حِذَاءٌ', C: 'نَعْلٌ', D: 'ثَوْبٌ' }, 'A', '"جَوْرَبٌ" bermaksud sarung kaki atau stoking.', '1.1 Kosa kata stoking');
addBA(1, 7, 'Tali Pinggang (حِزَامٌ)', 'Mudah', '"حِزَامٌ" yang dipakai di pinggang bermaksud:', { A: 'Tali pinggang', B: 'Tali leher', C: 'Kancing baju', D: 'Poket seluar' }, 'A', '"حِزَامٌ" bermaksud tali pinggang pengikat.', '1.1 Aksesori seragam');
addBA(1, 8, 'Tali Leher (رِبَاطُ الْعُنُقِ)', 'Sederhana', 'Peralatan seragam sekolah "رِبَاطُ الْعُنُقِ" bermaksud:', { A: 'Tali leher', B: 'Topi bulat', C: 'Beg sekolah', D: 'Jam tangan' }, 'A', '"رِبَاطُ الْعُنُقِ" bermaksud tali leher.', '1.1 Pakaian seragam sekolah');
addBA(1, 9, 'Songkok / Topi (قُبَّعَةٌ)', 'Mudah', '"قُبَّعَةٌ" dipakai di atas kepala bermaksud:', { A: 'Topi', B: 'Kasut', C: 'Baju', D: 'Tali leher' }, 'A', '"قُبَّعَةٌ" bermaksud topi kepala.', '1.1 Kosa kata penutup kepala');
addBA(1, 10, 'Saputangan (مِنْدِيلٌ)', 'Mudah', '"مِنْدِيلٌ" ialah kain kecil untuk mengelap peluh yang bermaksud:', { A: 'Saputangan', B: 'Selimut', C: 'Tuala mandi', D: 'Kain langsir' }, 'A', '"مِنْدِيلٌ" bermaksud saputangan poket.', '1.1 Kosa kata harian');
addBA(1, 11, 'Kata Ganti Milik Saya (ي)', 'Mudah', 'Kemeja saya dalam bahasa Arab disebut:', { A: 'قَمِيصِي', B: 'قَمِيصُكَ', C: 'قَمِيصُهُ', D: 'قَمِيصُهَا' }, 'A', 'Huruf Ya sukun di hujung perkataan menunjukkan kata ganti nama milik saya (قَمِيصِي).', '2.1 Kata ganti milik');
addBA(1, 12, 'Kasut Saya (حِذَائِي)', 'Mudah', 'Pilih frasa yang bermaksud "Kasut saya bersih":', { A: 'حِذَائِي نَظِيفٌ', B: 'حِذَائِي قَدِيمٌ', C: 'حِذَاؤُكَ نَظِيفٌ', D: 'هَذَا حِذَاءٌ' }, 'A', '"حِذَائِي نَظِيفٌ" bermaksud kasut saya bersih.', '2.2 Membina frasa');
addBA(1, 13, 'Kata Kerja "Saya Memakai" (أَلْبَسُ)', 'Sederhana', 'Apakah maksud perkataan kerja "أَلْبَسُ"?', { A: 'Saya memakai', B: 'Saya membuka', C: 'Saya mencuci', D: 'Saya membeli' }, 'A', '"أَلْبَسُ" ialah kata kerja fi\'il mudhari\' yang bermaksud saya sedang memakai.', '2.3 Kata kerja harian');
addBA(1, 14, 'Ungkapan Pakaian Bersih', 'Mudah', '"مَلَابِسِي نَظِيفَةٌ وَجَمِيلَةٌ" bermaksud:', { A: 'Pakaian saya bersih dan cantik', B: 'Pakaian saya kotor dan koyak', C: 'Kasut saya baharu dibeli', D: 'Bilik saya kemas dan luas' }, 'A', '"مَلَابِسِي نَظِيفَةٌ وَجَمِيلَةٌ" bermaksud pakaian saya bersih dan indah.', '2.4 Membaca ayat mudah');
addBA(1, 15, 'Membina Ayat KBAT', 'Sukar', 'Lengkapkan ayat harian: "كُلَّ صَبَاحٍ، أَنَا أَلْبَسُ _______ الْمَدْرَسِيَّ."', { A: 'الزِّيَّ (Pakaian Seragam)', B: 'الطَّعَامَ', C: 'الْقَلَمَ', D: 'الْكِتَابَ' }, 'A', '"الزِّيَّ الْمَدْرَسِيَّ" bermaksud pakaian seragam sekolah.', '2.4 Aplikasi ayat harian');

// Topic 3: Warna dan Nombor 11-20 (الْأَلْوَانُ وَالْأَرْقَامُ)
addBA(2, 1, 'Warna Merah (أَحْمَرُ)', 'Mudah', 'Apakah perkataan Arab bagi warna "merah"?', { A: 'أَحْمَرُ', B: 'أَزْرَقُ', C: 'أَخْضَرُ', D: 'أَصْفَرُ' }, 'A', '"أَحْمَرُ" bermaksud warna merah.', '1.1 Warna asas');
addBA(2, 2, 'Warna Biru (أَزْرَقُ)', 'Mudah', '"أَزْرَقُ" merujuk kepada warna:', { A: 'Biru', B: 'Hijau', C: 'Kuning', D: 'Hitam' }, 'A', '"أَزْرَقُ" bermaksud warna biru laut.', '1.1 Warna asas');
addBA(2, 3, 'Warna Hijau (أَخْضَرُ)', 'Mudah', 'Warna daun pokok yang "hijau" dalam bahasa Arab ialah:', { A: 'أَخْضَرُ', B: 'أَصْفَرُ', C: 'أَبْيَضُ', D: 'أَسْوَدُ' }, 'A', '"أَخْضَرُ" bermaksud warna hijau.', '1.1 Warna alam');
addBA(2, 4, 'Warna Kuning (أَصْفَرُ)', 'Mudah', '"أَصْفَرُ" bermaksud warna:', { A: 'Kuning', B: 'Kelabu', C: 'Ungu', D: 'Coklat' }, 'A', '"أَصْفَرُ" bermaksud warna kuning.', '1.1 Warna');
addBA(2, 5, 'Warna Putih (أَبْيَضُ)', 'Mudah', 'Perkataan Arab bagi warna "putih" ialah:', { A: 'أَبْيَضُ', B: 'أَسْوَدُ', C: 'أَحْمَرُ', D: 'أَزْرَقُ' }, 'A', '"أَبْيَضُ" bermaksud warna putih suci.', '1.1 Warna');
addBA(2, 6, 'Warna Hitam (أَسْوَدُ)', 'Mudah', '"أَسْوَدُ" merujuk kepada warna:', { A: 'Hitam', B: 'Putih', C: 'Jingga', D: 'Merah jambu' }, 'A', '"أَسْوَدُ" bermaksud warna hitam.', '1.1 Warna');
addBA(2, 7, 'Warna Muannas (حَمْرَاءُ)', 'Sederhana', 'Bentuk muannas bagi warna merah "أَحْمَرُ" untuk "سَيَّارَةٌ" (kereta) ialah:', { A: 'حَمْرَاءُ', B: 'أَحْمَرُ', C: 'حُمْرَةٌ', D: 'أَحْمَرَةٌ' }, 'A', 'Warna muzakkar berwazan af\'al (أَحْمَرُ) bertukar menjadi fa\'laa\' (حَمْرَاءُ) untuk muannas.', '2.1 Warna muannas');
addBA(2, 8, 'Nombor 11 (أَحَدَ عَشَرَ)', 'Mudah', 'Nombor "11" dalam bahasa Arab ditulis sebagai:', { A: 'أَحَدَ عَشَرَ', B: 'اِثْنَا عَشَرَ', C: 'ثَلَاثَةَ عَشَرَ', D: 'عَشَرَةٌ' }, 'A', '11 ialah "أَحَدَ عَشَرَ".', '1.2 Nombor 11-20');
addBA(2, 9, 'Nombor 12 (اِثْنَا عَشَرَ)', 'Mudah', 'Berapakah nilai nombor bagi "اِثْنَا عَشَرَ"?', { A: '12', B: '13', C: '20', D: '11' }, 'A', '"اِثْنَا عَشَرَ" bernilai 12.', '1.2 Nombor');
addBA(2, 10, 'Nombor 15 (خَمْسَةَ عَشَرَ)', 'Mudah', 'Angka "15" dalam perkataan bahasa Arab ialah:', { A: 'خَمْسَةَ عَشَرَ', B: 'أَرْبَعَةَ عَشَرَ', C: 'سِتَّةَ عَشَرَ', D: 'عِشْرُونَ' }, 'A', '15 ialah "خَمْسَةَ عَشَرَ".', '1.2 Nombor');
addBA(2, 11, 'Nombor 18 (ثَمَانِيَةَ عَشَرَ)', 'Mudah', '"ثَمَانِيَةَ عَشَرَ" merujuk kepada angka:', { A: '18', B: '17', C: '19', D: '8' }, 'A', '"ثَمَانِيَةَ عَشَرَ" bermaksud nombor 18.', '1.2 Nombor');
addBA(2, 12, 'Nombor 20 (عِشْرُونَ)', 'Mudah', 'Perkataan Arab bagi nombor "20" ialah:', { A: 'عِشْرُونَ', B: 'عَشَرَةٌ', C: 'تِسْعَةَ عَشَرَ', D: 'ثَلَاثُونَ' }, 'A', '20 ialah "عِشْرُونَ".', '1.2 Nombor 20');
addBA(2, 13, 'Penjumlahan Nombor Arab', 'Sederhana', 'Kira hasil tambah dalam bahasa Arab: عَشَرَةٌ (10) + خَمْسَةٌ (5) =', { A: 'خَمْسَةَ عَشَرَ (15)', B: 'أَرْبَعَةَ عَشَرَ (14)', C: 'سِتَّةَ عَشَرَ (16)', D: 'عِشْرُونَ (20)' }, 'A', '10 + 5 = 15 (خَمْسَةَ عَشَرَ).', '2.3 Operasi nombor');
addBA(2, 14, 'Frasa Warna Benda', 'Sederhana', 'Pilih padanan ayat yang bermaksud "Buku merah ini":', { A: 'هَذَا كِتَابٌ أَحْمَرُ', B: 'هَذِهِ كِتَابٌ أَحْمَرُ', C: 'هَذَا كِتَابٌ حَمْرَاءُ', D: 'هَذَا قَلَمٌ أَزْرَقُ' }, 'A', '"كِتَابٌ" muzakkar dipadankan dengan "هَذَا" dan sifat warna muzakkar "أَحْمَرُ".', '2.2 Sintaksis frasa sifat');
addBA(2, 15, 'Mengira Bilangan Objek KBAT', 'Sukar', 'Di dalam kotak pensel terdapat 7 batang pensel biru dan 6 batang pensel merah. Berapakah jumlah pensel kesemuanya dalam bahasa Arab?', { A: 'ثَلَاثَةَ عَشَرَ (13)', B: 'اِثْنَا عَشَرَ (12)', C: 'أَرْبَعَةَ عَشَرَ (14)', D: 'عَشَرَةٌ (10)' }, 'A', '7 + 6 = 13 (ثَلَاثَةَ عَشَرَ).', '2.3 Pengiraan matematik dalam bahasa Arab');

fs.writeFileSync('src/data/bahasaArabTahun3.ts', `import { QuizQuestion } from '../types';\n\nexport const BAHASA_ARAB_TAHUN_3_QUESTIONS: QuizQuestion[] = ${JSON.stringify(baQuestions, null, 2)};\n`, 'utf8');
console.log(`Generated ${baQuestions.length} questions for Bahasa Arab Tahun 3.`);

// ==========================================
// 3. BAHASA CINA TAHUN 3 (3 topics x 15 = 45 questions)
// ==========================================
const bcTopics = [
  '学校与课堂生活 (Kehidupan Sekolah)',
  '大自然与天气 (Alam & Cuaca)',
  '健康饮食与节日 (Pemakanan Sihat & Budaya)',
];
const bcQuestions: QuizQuestion[] = [];
function addBC(t: number, q: number, sub: string, diff: 'Mudah' | 'Sederhana' | 'Sukar', quest: string, opt: any, ans: 'A' | 'B' | 'C' | 'D', exp: string, ls: string) {
  bcQuestions.push({
    id: `bc3-t${t + 1}-${String(q).padStart(2, '0')}`,
    year: 3,
    subject: 'Bahasa Cina',
    topic: bcTopics[t],
    subtopic: sub,
    difficulty: diff,
    question: quest,
    options: opt,
    correctAnswer: ans,
    explanation: exp,
    learningStandard: ls,
  });
}

// Topic 1: 学校与课堂生活 (Kehidupan Sekolah)
addBC(0, 1, 'Perpustakaan (图书馆)', 'Mudah', 'Perkataan Cina bagi perpustakaan tempat membaca buku ialah:', { A: '图书馆 (tú shū guǎn)', B: '食堂 (shí táng)', C: '操场 (cāo chǎng)', D: '礼堂 (lǐ táng)' }, 'A', '"图书馆" bermaksud perpustakaan sekolah.', '1.1 Kemudahan sekolah');
addBC(0, 2, 'Kantin Sekolah (食堂)', 'Mudah', 'Murid-murid membeli makanan dan minuman pada waktu rehat di:', { A: '食堂 (shí táng)', B: '教室 (jiào shì)', C: '办公室 (bàn gōng shì)', D: '厕所 (cè suǒ)' }, 'A', '"食堂" bermaksud kantin sekolah.', '1.1 Tempat di sekolah');
addBC(0, 3, 'Padang Sekolah (操场)', 'Mudah', '"操场" merujuk kepada kawasan aktiviti sukan iaitu:', { A: 'Padang sekolah', B: 'Bilik guru', C: 'Pusat sumber', D: 'Bilik komputer' }, 'A', '"操场" bermaksud padang permainan atau stadium terbuka.', '1.1 Tempat di sekolah');
addBC(0, 4, 'Bilik Darjah (教室)', 'Mudah', 'Tempat guru mengajar dan murid belajar setiap hari ialah:', { A: '教室 (jiào shì)', B: '礼堂 (lǐ táng)', C: '医务室 (yī wù shì)', D: '草场 (cǎo chǎng)' }, 'A', '"教室" bermaksud bilik darjah atau kelas.', '1.1 Bilik darjah');
addBC(0, 5, 'Aktiviti Membaca (看故事书)', 'Mudah', 'Apakah maksud frasa "看故事书"?', { A: 'Membaca buku cerita', B: 'Menulis karangan', C: 'Melukis gambar', D: 'Menyanyi lagu' }, 'A', '"看故事书" bermaksud membaca buku cerita dongeng atau cerita teladan.', '2.1 Aktiviti membaca');
addBC(0, 6, 'Membuat Kerja Rumah (做功课)', 'Mudah', 'Selepas pulang dari sekolah, murid yang rajin akan segera:', { A: '做功课 (zuò gōng kè)', B: '睡觉 (shuì jiào)', C: '看电视 (kàn diàn shì)', D: '踢足球 (tī zú qiú)' }, 'A', '"做功课" bermaksud membuat kerja rumah atau latihan sekolah.', '2.1 Rutin murid');
addBC(0, 7, 'Penjodoh Bilangan Buku (本)', 'Mudah', 'Pilih penjodoh bilangan yang betul bagi buku: "一_______故事书"', { A: '本 (běn)', B: '支 (zhī)', C: '张 (zhāng)', D: '只 (zhī)' }, 'A', '"本" ialah penjodoh bilangan untuk buku (一本故事书).', '3.1 Penjodoh bilangan');
addBC(0, 8, 'Penjodoh Bilangan Pensel (支)', 'Mudah', 'Penjodoh bilangan untuk pensel "铅笔" ialah:', { A: '支 (zhī)', B: '本 (běn)', C: '个 (gè)', D: '把 (bǎ)' }, 'A', '"支" digunakan untuk batang pensel atau pen.', '3.1 Penjodoh bilangan alatan');
addBC(0, 9, 'Pembaris (尺子)', 'Mudah', 'Alat geometri untuk mengukur dan melukis garisan lurus dipanggil:', { A: '尺子 (chǐ zi)', B: '橡皮 (xiàng pí)', C: '剪刀 (jiǎn dāo)', D: '胶水 (jiāo shuǐ)' }, 'A', '"尺子" bermaksud pembaris panjang.', '1.2 Alat tulis');
addBC(0, 10, 'Pemadam Pensel (橡皮)', 'Mudah', '"橡皮" digunakan untuk:', { A: 'Memadam tulisan pensel yang salah', B: 'Menggunting kertas', C: 'Melekatkan kertas lukisan', D: 'Menajamkan pensel' }, 'A', '"橡皮" bermaksud pemadam getah pensel.', '1.2 Alat tulis');
addBC(0, 11, 'Adab Menghormati Guru (尊敬老师)', 'Mudah', 'Nilai murni menghormati guru dalam bahasa Cina diungkapkan sebagai:', { A: '尊敬老师 (zūn jìng lǎo shī)', B: '友爱同学 (yǒu ài tóng xué)', C: '勤劳学习 (qín láo xué xí)', D: '诚实守信 (chéng shí shǒu xìn)' }, 'A', '"尊敬老师" bermaksud menghormati para guru dengan berbudi bahasa.', '4.1 Nilai murni');
addBC(0, 12, 'Ucapan Selamat Pagi Guru', 'Mudah', 'Apabila bertemu guru pada waktu pagi, murid mengucapkan:', { A: '老师早安！ (lǎo shī zǎo ān!)', B: '老师再见！ (lǎo shī zài jiàn!)', C: '对不起！ (duì bu qǐ!)', D: '谢谢！ (xiè xie!)' }, 'A', '"老师早安" bermaksud Selamat Pagi Cikgu.', '4.2 Ucapan sopan');
addBC(0, 13, 'Menepati Masa (守时)', 'Sederhana', 'Amalan datang awal ke sekolah dan tidak lewat mencerminkan sikap:', { A: '守时 (shǒu shí)', B: '马虎 (mǎ hu)', C: '懒惰 (lǎn duò)', D: '骄傲 (jiāo ào)' }, 'A', '"守时" bermaksud menepati masa.', '4.1 Disiplin murid');
addBC(0, 14, 'Menjaga Kebersihan Kelas', 'Sederhana', 'Pilih ayat yang membawa maksud "Kita mesti menjaga kebersihan bilik darjah":', { A: '我们要保持教室的整洁。', B: '我们在教室里吃午餐。', C: '我们在操场上跑步。', D: '我们要大声说话。', }, 'A', '"保持教室的整洁" bermaksud mengekalkan kebersihan dan kekemasan bilik darjah.', '2.2 Membina ayat');
addBC(0, 15, 'Pemahaman Konteks Sekolah KBAT', 'Sukar', 'Xiao Ming ternampak sampah bersepah di lantai kelas. Apakah tindakan bertatasusila yang wajar dilakukannya?', { A: '把垃圾捡起来丢进垃圾桶里 (Kutip sampah dan buang ke dalam tong sampah)', B: '假装没看见走开 (Buat tidak nampak)', C: '把垃圾踢到桌子底下 (Tendang sampah ke bawah meja)', D: '大声责骂同学 (Memarahi rakan dengan kasar)' }, 'A', 'Mengutip sampah dan membuangnya ke dalam tong mencerminkan tanggungjawab sivik.', '2.2 Analisis situasi');

// Topic 2: 大自然与天气 (Alam & Cuaca)
addBC(1, 1, 'Hari Cerah (晴天)', 'Mudah', 'Cuaca panas dengan cahaya matahari bersinar terang dipanggil:', { A: '晴天 (qíng tiān)', B: '雨天 (yǔ tiān)', C: '阴天 (yīn tiān)', D: '刮风 (guā fēng)' }, 'A', '"晴天" bermaksud hari yang cerah bertuah.', '1.1 Keadaan cuaca');
addBC(1, 2, 'Hari Hujan (雨天)', 'Mudah', '"雨天" membawa maksud keadaan cuaca:', { A: 'Hari hujan', B: 'Hari panas terik', C: 'Hari berangin kencang', D: 'Hari bersalji' }, 'A', '"雨天" bermaksud cuaca hujan lebat atau renyai.', '1.1 Cuaca');
addBC(1, 3, 'Angin Bertiup (刮风)', 'Mudah', 'Pohon bergoyang kerana angin bertiup kencang dinamakan:', { A: '刮风 (guā fēng)', B: '下雪 (xià xuě)', C: '出太阳 (chū tài yáng)', D: '打雷 (dǎ léi)' }, 'A', '"刮风" bermaksud tiupan angin kencang.', '1.1 Fenomena alam');
addBC(1, 4, 'Matahari Terbit (太阳)', 'Mudah', 'Benda di langit yang menyinari bumi pada waktu siang ialah:', { A: '太阳 (tài yáng)', B: '月亮 (yuè liang)', C: '星星 (xīng xing)', D: '白云 (bái yún)' }, 'A', '"太阳" bermaksud matahari.', '1.1 Objek langit');
addBC(1, 5, 'Bulan (月亮)', 'Mudah', '"月亮" yang menerangi malam membawa maksud:', { A: 'Bulan', B: 'Matahari', C: 'Bintang', D: 'Awan' }, 'A', '"月亮" bermaksud bulan di langit malam.', '1.1 Objek samawi');
addBC(1, 6, 'Bintang Berkerlipan (星星)', 'Mudah', '"天上的星星闪闪发亮" bermaksud:', { A: 'Bintang di langit berkelip-kelip terang', B: 'Matahari sedang bersinar', C: 'Awan hitam sedang berarak', D: 'Hujan lebat sedang turun' }, 'A', '"星星" bermaksud bintang-bintang di angkasa.', '2.1 Membaca frasa alam');
addBC(1, 7, 'Pelangi Indah (彩虹)', 'Mudah', 'Jalur tujuh warna yang muncul di langit selepas hujan reda dipanggil:', { A: '彩虹 (cǎi hóng)', B: '闪电 (shǎn diàn)', C: '露水 (lù shuǐ)', D: '浓雾 (nóng wù)' }, 'A', '"彩虹" bermaksud pelangi tujuh warna.', '1.2 Fenomena cuaca');
addBC(1, 8, 'Pokok Rimbun (大树)', 'Mudah', 'Pokok besar yang memberi teduhan sejuk di tepi jalan dipanggil:', { A: '大树 (dà shù)', B: '小草 (xiǎo cǎo)', C: '花朵 (huā duǒ)', D: '树叶 (shù yè)' }, 'A', '"大树" bermaksud pokok besar.', '1.3 Tumbuh-tumbuhan');
addBC(1, 9, 'Bunga Berkembang (花朵)', 'Mudah', '"花园里的花朵开了" bermaksud:', { A: 'Bunga-bunga di taman sedang mekar berkembang', B: 'Pokok di taman telah layu', C: 'Rumput telah dipotong', D: 'Hujan turun di kebun' }, 'A', '"花朵开了" bermaksud bunga sedang mekar kembang.', '2.1 Membaca ayat alam');
addBC(1, 10, 'Sungai Mengalir (河水)', 'Mudah', '"小河里的水很清澈" bermaksud:', { A: 'Air anak sungai itu sangat jernih', B: 'Air sungai sangat keruh', C: 'Sungai itu kering kontang', D: 'Banjir melanda sungai' }, 'A', '"清澈" bermaksud jernih tidak tercemar.', '2.1 Kosa kata alam');
addBC(1, 11, 'Membawa Payung (带雨伞)', 'Mudah', 'Semasa musim hujan, kita perlu membawa payung iaitu:', { A: '雨伞 (yǔ sǎn)', B: '书包 (shū bāo)', C: '帽子 (mào zi)', D: '手套 (shǒu tào)' }, 'A', '"雨伞" bermaksud payung hujan.', '1.4 Keperluan cuaca');
addBC(1, 12, 'Menyayangi Flora & Fauna (爱护自然)', 'Sederhana', 'Apakah amalan baik untuk memelihara keindahan alam sekitar?', { A: '不乱丢垃圾，爱护花草树木 (Tidak membuang sampah merata dan memelihara pokok)', B: '折断树枝 (Mematahkan dahan pokok)', C: '捕杀小鸟 (Menangkap burung bebas)', D: '污染河水 (Mencemarkan air sungai)' }, 'A', 'Menjaga kebersihan dan tidak merosakkan tumbuhan adalah amalan mencintai alam.', '4.1 Nilai mencintai alam');
addBC(1, 13, 'Penjodoh Bilangan Pokok (棵)', 'Mudah', 'Penjodoh bilangan yang betul untuk pokok "大树" ialah:', { A: '棵 (kē)', B: '朵 (duǒ)', C: '条 (tiáo)', D: '片 (piàn)' }, 'A', '"棵" ialah penjodoh bilangan untuk pokok (一棵大树).', '3.1 Penjodoh bilangan');
addBC(1, 14, 'Penjodoh Bilangan Bunga (朵)', 'Mudah', 'Penjodoh bilangan untuk kuntum bunga "红花" ialah:', { A: '朵 (duǒ)', B: '个 (gè)', C: '只 (zhī)', D: '本 (běn)' }, 'A', '"朵" digunakan untuk sekuntum bunga (一朵花).', '3.1 Penjodoh bilangan flora');
addBC(1, 15, 'Sebab Berlaku Fenomena Banjir KBAT', 'Sukar', 'Mengapakah penebangan hutan secara haram boleh menyebabkan banjir lumpur?', { A: 'Tanah runtuh dihanyutkan hujan kerana tiada akar pokok menahan air', B: 'Kerana pokok minum terlalu banyak air', C: 'Supaya jalan menjadi luas', D: 'Kerana haiwan hutan berpindah ke bandar' }, 'A', 'Akar pokok berfungsi mencengkam tanah dan menyerap air hujan bagi mencegah hakisan.', '2.2 KBAT kefahaman sains dan alam');

// Topic 3: 健康饮食与节日 (Pemakanan Sihat & Budaya)
addBC(2, 1, 'Sayur-sayuran (蔬菜)', 'Mudah', 'Makanan sihat yang mengandungi banyak serat dan vitamin dipanggil:', { A: '蔬菜 (shū cài)', B: '糖果 (táng guǒ)', C: '炸鸡 (zhá jī)', D: '薯条 (shǔ tiáo)' }, 'A', '"蔬菜" bermaksud sayur-sayuran segar.', '1.1 Kategori makanan sihat');
addBC(2, 2, 'Buah-buahan (水果)', 'Mudah', 'Epal, tembikai dan pisang tergolong dalam kumpulan:', { A: '水果 (shuǐ guǒ)', B: '饮料 (yǐn liào)', C: '零食 (líng shí)', D: '快餐 (kuài cān)' }, 'A', '"水果" bermaksud buah-buahan berkhasiat.', '1.1 Makanan berkhasiat');
addBC(2, 3, 'Air Kosong / Air Putih (白开水)', 'Mudah', 'Minuman paling sihat untuk tubuh badan manusia ialah:', { A: '白开水 (bái kāi shuǐ)', B: '汽水 (qì shuǐ)', C: '奶茶 (nǎi chá)', D: '咖啡 (kā fēi)' }, 'A', '"白开水" bermaksud air masak atau air kosong tanpa gula.', '1.1 Minuman sihat');
addBC(2, 4, 'Rasa Makanan (甜)', 'Mudah', '"甜" merujuk kepada deria rasa:', { A: 'Manis', B: 'Masam', C: 'Pahit', D: 'Pedas' }, 'A', '"甜 (tián)" bermaksud rasa manis gula atau madu.', '1.2 Rasa');
addBC(2, 5, 'Rasa Makanan (酸)', 'Mudah', 'Buah lemon dan mangga muda mempunyai rasa yang:', { A: '酸 (suān) - Masam', B: '甜 (tián) - Manis', C: '苦 (kǔ) - Pahit', D: '辣 (là) - Pedas' }, 'A', '"酸" bermaksud masam.', '1.2 Deria rasa');
addBC(2, 6, 'Pesta Kuih Bulan (中秋节)', 'Mudah', 'Perayaan tradisional Cina yang diraikan pada bulan penuh dengan makan kuih bulan dipanggil:', { A: '中秋节 (zhōng qiū jié)', B: '端午节 (duān wǔ jié)', C: '开斋节 (kāi zhāi jié)', D: '屠妖节 (tú yāo jié)' }, 'A', '"中秋节" ialah Perayaan Kuih Bulan / Pesta Tanglung.', '1.3 Perayaan budaya');
addBC(2, 7, 'Kuih Bulan Tradisional (月饼)', 'Mudah', 'Makanan istimewa berbentuk bulat yang dimakan semasa Perayaan Kuih Bulan ialah:', { A: '月饼 (yuè bǐng)', B: '粽子 (zòng zi)', C: '年糕 (nián gāo)', D: '汤圆 (tāng yuán)' }, 'A', '"月饼" bermaksud kuih bulan berinti kacang merah atau teratai.', '1.3 Makanan perayaan');
addBC(2, 8, 'Tanglung (灯笼)', 'Mudah', 'Kanak-kanak membawa tanglung berwarna-warni yang dipanggil:', { A: '提灯笼 (tí dēng long)', B: '放风筝 (fàng fēng zheng)', C: '吃月饼 (chī yuè bǐng)', D: '猜灯谜 (cāi dēng mí)' }, 'A', '"提灯笼" bermaksud berarak membawa tanglung bercahaya.', '1.3 Aktiviti tradisi');
addBC(2, 9, 'Tahun Baru Cina (农历新年)', 'Mudah', 'Perayaan menyambut tahun baharu kalendar lunar Cina dinamakan:', { A: '华人农历新年 (nóng lì xīn nián)', B: '中秋节 (zhōng qiū jié)', C: '圣诞节 (shèng dàn jié)', D: '国庆日 (guó qìng rì)' }, 'A', '"农历新年" ialah sambutan Tahun Baharu Cina.', '1.3 Perayaan utama');
addBC(2, 10, 'Angpau Merah (红包)', 'Mudah', 'Sampul merah berisi wang yang diberikan orang tua kepada kanak-kanak dipanggil:', { A: '红包 (hóng bāo)', B: '春联 (chūn lián)', C: '年饼 (nián bǐng)', D: '年糕 (nián gāo)' }, 'A', '"红包" bermaksud paket angpau merah pembawa tuah.', '1.3 Adat resam tradisi');
addBC(2, 11, 'Hari Raya Aidilfitri (开斋节)', 'Mudah', 'Perayaan Hari Raya Aidilfitri bagi kaum Melayu diungkapkan dalam bahasa Cina sebagai:', { A: '开斋节 (kāi zhāi jié)', B: '屠妖节 (tú yāo jié)', C: '丰收节 (fēng shōu jié)', D: '卫塞节 (wèi sài jié)' }, 'A', '"开斋节" ialah sebutan bahasa Cina bagi Hari Raya Aidilfitri.', '1.4 Kepelbagaian budaya Malaysia');
addBC(2, 12, 'Hari Deepavali (屠妖节)', 'Mudah', 'Perayaan cahaya kaum India dinamakan:', { A: '屠妖节 (tú yāo jié)', B: '开斋节 (kāi zhāi jié)', C: '农历新年 (nóng lì xīn nián)', D: '圣诞节 (shèng dàn jié)' }, 'A', '"屠妖节" merujuk kepada Perayaan Deepavali.', '1.4 Perpaduan kaum');
addBC(2, 13, 'Amalan Makanan Seimbang', 'Sederhana', 'Untuk membesar dengan cergas dan sihat, kita mestilah mengamalkan:', { A: '均衡的饮食 (Pemakanan seimbang mengikut piramid makanan)', B: '每天只吃快餐 (Hanya makan makanan segera)', C: '不吃早餐 (Tidak bersarapan pagi)', D: '吃很多糖果 (Makan terlalu banyak gula-gula)' }, 'A', '"均衡的饮食" bermaksud pemakanan seimbang dan sihat.', '2.1 Gaya hidup sihat');
addBC(2, 14, 'Mencuci Tangan Sebelum Makan', 'Mudah', 'Sebelum menikmati hidangan makanan, amalan kebersihan yang wajib ialah:', { A: '饭前要洗手 (Membasuh tangan sebelum makan)', B: '饭前喝冷水 (Minum air sejuk sebelum makan)', C: '边吃边说话 (Bercakap semasa makan)', D: '把食物吐在地上 (Meludah makanan di lantai)' }, 'A', '"饭前洗手" membunuh kuman pada tangan sebelum menyentuh makanan.', '2.1 Kebersihan diri');
addBC(2, 15, 'Keharmonian Perayaan Malaysia KBAT', 'Sukar', 'Semasa musim perayaan di Malaysia, amalan kunjung-mengunjungi rumah terbuka (开放门户) dapat:', { A: '增进各族群之间的团结与友谊 (Mengeratkan perpaduan dan persefahaman antara kaum)', B: 'Menimbulkan perselisihan faham', C: 'Menjadikan makanan cepat basi', D: 'Menghabiskan wang semata-mata' }, 'A', 'Rumah terbuka mengukuhkan jalinan kasih sayang dan perpaduan harmoni seluruh rakyat.', '4.1 Perpaduan sivik kebangsaan');

fs.writeFileSync('src/data/bahasaCinaTahun3.ts', `import { QuizQuestion } from '../types';\n\nexport const BAHASA_CINA_TAHUN_3_QUESTIONS: QuizQuestion[] = ${JSON.stringify(bcQuestions, null, 2)};\n`, 'utf8');
console.log(`Generated ${bcQuestions.length} questions for Bahasa Cina Tahun 3.`);
