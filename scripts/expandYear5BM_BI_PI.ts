import * as fs from 'fs';
import { QuizQuestion } from '../src/types';
import { BAHASA_MELAYU_TAHUN_5_QUESTIONS } from '../src/data/bahasaMelayuTahun5';
import { ENGLISH_TAHUN_5_QUESTIONS } from '../src/data/englishTahun5';
import { PENDIDIKAN_ISLAM_TAHUN_5_QUESTIONS } from '../src/data/pendidikanIslamTahun5';

// 1. BAHASA MELAYU TAHUN 5 (+5 per topic x 5 topics = +25 questions)
const bm5Topics = [
  'Morfologi & Golongan Kata Lanjutan',
  'Kata Tugas & Sintaksis Kompleks',
  'Imbuhan Apitan & Sisipan',
  'Peribahasa & Seni Bahasa',
  'Pemahaman Petikan & Nilai Murni',
];

const bm5Extra: QuizQuestion[] = [];
function addBM5(tIdx: number, qIdx: number, subtopic: string, difficulty: 'Mudah' | 'Sederhana' | 'Sukar', question: string, options: any, correctAnswer: 'A' | 'B' | 'C' | 'D', explanation: string, ls: string) {
  bm5Extra.push({
    id: `t5-bm-extra-${tIdx + 1}-${qIdx}`,
    year: 5,
    subject: 'Bahasa Melayu',
    topic: bm5Topics[tIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard: ls,
  });
}

// Topic 1: Morfologi & Golongan Kata Lanjutan
addBM5(0, 11, 'Kata Ganda Berentak', 'Mudah', 'Kawasan perumahan itu menjadi _______ apabila bekalan elektrik terputus secara tiba-tiba.', { A: 'gelap-gelita', B: 'kelam-kabut', C: 'kacau-bilau', D: 'huru-hara' }, 'A', 'Kata ganda berentak "gelap-gelita" menggambarkan keadaan yang tersangat gelap tanpa sebarang cahaya.', 'SK 5.2 Morfologi');
addBM5(0, 12, 'Kata Majmuk Kiasan', 'Mudah', 'Pak Cik Rahim tidak sombong walaupun dia seorang jutawan, dia sentiasa bersikap _______ terhadap penduduk kampung.', { A: 'rendah hati', B: 'berat hati', C: 'besar hati', D: 'keras hati' }, 'A', '"Rendah hati" ialah kata majmuk kiasan yang bermaksud tidak sombong atau tawaduk.', 'SK 5.2 Kata Majmuk');
addBM5(0, 13, 'Kata Adjektif Cara', 'Sederhana', 'Kereta api berkelajuan tinggi itu meluncur dengan sangat _______ menuju ke stesen terakhir.', { A: 'pantas', B: 'licin', C: 'dalam', D: 'panjang' }, 'A', '"Pantas" ialah kata adjektif cara yang menerangkan kelajuan pergerakan kereta api.', 'SK 5.1 Golongan Kata');
addBM5(0, 14, 'Kata Nama Khas Geografi', 'Mudah', 'Antara berikut, ejaan kata nama khas geografi yang ditulis dengan betul ialah:', { A: 'Sungai Rajang', B: 'sungai rajang', C: 'Sungai rajang', D: 'sungai Rajang' }, 'A', 'Kata nama khas bagi ciri geografi kedua-dua perkataan dimulakan dengan huruf besar.', 'SK 5.1 Kata Nama Khas');
addBM5(0, 15, 'Kata Ganti Nama Diri Laras Istana KBAT', 'Sukar', '"Titah _______ dijunjung tuanku," sembah Bendera Paduka Raja dengan penuh hormat.', { A: 'duli tuanku', B: 'patik', C: 'hamba', D: 'beta' }, 'A', '"Duli tuanku" atau "tuanku" merujuk kepada panggilan hormat diraja dalam bahasa istana.', 'SK 5.1 Bahasa Istana');

// Topic 2: Kata Tugas & Sintaksis Kompleks
addBM5(1, 11, 'Kata Sendi Nama "dari" dan "daripada"', 'Mudah', 'Kerusi malas di ruang tamu itu diperbuat _______ kayu jati asli yang bermutu tinggi.', { A: 'daripada', B: 'dari', C: 'kepada', D: 'pada' }, 'A', '"Daripada" digunakan untuk menyatakan asal kejadian sesuatu benda, bahan buatan atau perbandingan.', 'SK 5.1 Kata Sendi Nama');
addBM5(1, 12, 'Kata Pemeri "ialah" dan "adalah"', 'Sederhana', 'Punca utama berlakunya tanah runtuh di lereng bukit itu _______ aktiviti penerokaan hutan secara haram.', { A: 'adalah', B: 'ialah', C: 'merupakan dari', D: 'iaitu' }, 'A', '"Adalah" hadir di hadapan frasa sendi nama atau frasa adjektif yang menerangkan sebab.', 'SK 5.1 Kata Pemeri');
addBM5(1, 13, 'Ayat Pasif Diri Ketiga', 'Sederhana', 'Kawasan kebun getah yang terbiar itu telah _______ oleh Encik Zakaria.', { A: 'dibersihkan', B: 'membentukkan', C: 'terbersih', D: 'dibersih' }, 'A', 'Bentuk ayat pasif orang ketiga menggunakan imbuhan di-...-kan.', 'SK 5.3 Sintaksis Ayat Pasif');
addBM5(1, 14, 'Kata Hubung Gabungan', 'Mudah', 'Siti gemar membaca novel fiksyen, _______ adiknya pula lebih meminati komik sejarah.', { A: 'manakala', B: 'kerana', C: 'walaupun', D: 'supaya' }, 'A', '"Manakala" digunakan untuk menunjukkan perbandingan atau perbezaan antara dua perkara.', 'SK 5.1 Kata Hubung');
addBM5(1, 15, 'Susunan Ayat Songsang KBAT', 'Sukar', 'Pilih ayat songsang yang menepati binaan ayat gramatis daripada ayat susunan biasa: "Murid-murid sedang berlatih bermain hoki di padang sekolah."', { A: 'Di padang sekolah murid-murid sedang berlatih bermain hoki', B: 'Bermain hoki murid-murid di padang', C: 'Murid padang sedang bermain hoki sekolah', D: 'Sedang padang murid bermain hoki sekolah' }, 'A', 'Pemendekan atau penukaran frasa keterangan "di padang sekolah" ke hadapan membentuk ayat songsang gramatis.', 'SK 5.3 Ayat Songsang');

// Topic 3: Imbuhan Apitan & Sisipan
addBM5(2, 11, 'Imbuhan Apitan meN-...-kan', 'Mudah', 'Pihak polis sedang berusaha _______ punca sebenar kebakaran rumah kedai itu.', { A: 'mengenal pasti', B: 'dikenalpasti', C: 'pengenalan', D: 'mengenal' }, 'A', 'Kata majmuk yang menerima imbuhan apitan dieja bercantum atau berapitan secara betul: mengenal pasti.', 'SK 5.2 Imbuhan Apitan');
addBM5(2, 12, 'Imbuhan Apitan per-...-an', 'Mudah', '_______ jalan raya di kawasan bukit itu sedang giat dijalankan oleh pihak berkuasa.', { A: 'Pelebaran', B: 'Melebarkan', C: 'Terlebar', D: 'Berlebar' }, 'A', '"Pelebaran" terbentuk daripada kata dasar "lebar" membawa maksud proses melebarkan.', 'SK 5.2 Pembentukan Kata');
addBM5(2, 13, 'Imbuhan Sisipan -el-', 'Sederhana', 'Kilauan bintang-bintang di angkasa kelihatan sangat cantik dan _______.', { A: 'gemerlap', B: 'gilang', C: 'gemuruh', D: 'semerbak' }, 'A', '"Gemerlap" terbentuk daripada kata dasar "gerlap" dengan sisipan -em- (atau -el- dalam selirat/telapak).', 'SK 5.2 Kata Sisipan');
addBM5(2, 14, 'Imbuhan Apitan ke-...-an', 'Mudah', 'Kita mestilah menjaga _______ sungai kita daripada tercemar dengan bahan buangan kilang.', { A: 'kebersihan', B: 'pembersihan', C: 'membersihkan', D: 'pembersih' }, 'A', '"Kebersihan" menunjukkan keadaan atau perihal bersih.', 'SK 5.2 Apitan Kata Nama');
addBM5(2, 15, 'Analisis Kesalahan Imbuhan KBAT', 'Sukar', 'Pilih ayat yang menggunakan kata berimbuhan dengan betul.', { A: 'Kerajaan memperluas kawasan rizab hidupan liar untuk melindungi gajah kerdil Borneo.', B: 'Kerajaan memperluaskan kawasan rizab hidupan liar.', C: 'Kerajaan diperluaskan kawasan rizab.', D: 'Kerajaan memperluasi kawasan rizab.' }, 'A', 'Hukum tatabahasa Melayu: imbuhan "memper-..." tidak boleh menerima akhiran "-kan" bagi kata adjektif (memperluas, bukan memperluaskan).', 'SK 5.2 Ketepatan Imbuhan');

// Topic 4: Peribahasa & Seni Bahasa
addBM5(3, 11, 'Peribahasa Semangat Kejiranan', 'Mudah', 'Penduduk Kampung Melor saling membantu membaiki jambatan yang rosak ibarat peribahasa:', { A: 'Berat sama dipikul, ringan sama dijinjing', B: 'Ada gula ada semut', C: 'Kacang lupakan kulit', D: 'Bagaikan enau dalam belukar melepaskan pucuk masing-masing' }, 'A', '"Berat sama dipikul, ringan sama dijinjing" bermaksud bermuafakat dan bekerjasama dalam susah dan senang.', 'SK 4.2 Peribahasa');
addBM5(3, 12, 'Peribahasa Sikap Rajin', 'Mudah', 'Orang yang rajin dan tidak mudah berputus asa diumpamakan sebagai:', { A: 'Di mana ada kemahuan, di situ ada jalan', B: 'Bagai melepaskan batuk di tangga', C: 'Bagai rusa masuk kampung', D: 'Hujan emas di negeri orang' }, 'A', '"Di mana ada kemahuan, di situ ada jalan" bermaksud jika ada cita-cita dan azam, pasti ada ikhtiar untuk mencapainya.', 'SK 4.2 Peribahasa');
addBM5(3, 13, 'Peribahasa Berjimat Cermat', 'Mudah', 'Amalan menabung sedikit demi sedikit sejak kecil bertepatan dengan peribahasa:', { A: 'Sedikit-sedikit, lama-lama jadi bukit', B: 'Ada beras taruh dalam padi', C: 'Kera mendapat bunga', D: 'Kura-kura dalam perahu' }, 'A', '"Sedikit-sedikit, lama-lama jadi bukit" menggambarkan hasil usaha gigih yang berterusan walaupun sedikit demi sedikit.', 'SK 4.2 Peribahasa Menabung');
addBM5(3, 14, 'Ciri Pantun Empat Kerat', 'Sederhana', 'Dua baris pertama dalam pantun empat kerat berfungsi sebagai:', { A: 'Pembayang maksud', B: 'Maksud pantun', C: 'Penutup cerita', D: 'Rangkap sindiran' }, 'A', 'Dua baris awal sesebuah pantun empat kerat ialah pembayang, manakala dua baris terakhir ialah maksudnya.', 'SK 4.3 Seni Bahasa Pantun');
addBM5(3, 15, 'Tafsiran Nilai Murni Syair KBAT', 'Sukar', 'Rangkap syair: "Peliharalah adab sepanjang hayat, Jangan derhaka kepada umat, Berbakti luhur memberi manfaat, Hidup bahagia beroleh berkat." Nilai murni paling utama yang ditekankan dalam bait syair di atas ialah:', { A: 'Menjaga ketinggian akhlak serta berbakti kepada masyarakat sepanjang hayat', B: 'Mengumpul kekayaan sebanyak mungkin', C: 'Mencari kemasyhuran diri', D: 'Menghukum musuh tanpa belas kasihan' }, 'A', 'Syair menekankan pemeliharaan adab mulia dan sumbangan bakti demi kesejahteraan hidup dunia dan akhirat.', 'SK 4.4 Penghayatan Syair');

// Topic 5: Pemahaman Petikan & Nilai Murni
addBM5(4, 11, 'Nilai Bertanggungjawab', 'Mudah', 'Haziq sentiasa menyiapkan tugasan sekolah yang diamanahkan oleh gurunya tepat pada waktunya. Haziq mengamalkan nilai:', { A: 'Bertanggungjawab', B: 'Keadilan', C: 'Keberanian', D: 'Ketangkasan' }, 'A', 'Menyempurnakan tugas dengan teliti dan amanah mencerminkan sifat bertanggungjawab.', 'SK 2.3 Pemahaman dan Nilai');
addBM5(4, 12, 'Kosa Kata Kontekstual Petikan', 'Sederhana', 'Dalam ayat "Hutan paya bakau berperanan sebagai benteng pertahanan semulajadi yang ampuh daripada hakisan ombak ganas," perkataan "ampuh" membawa maksud:', { A: 'Kukuh dan berkesan', B: 'Lemah dan rapuh', C: 'Sangat luas', D: 'Terlalu mahal' }, 'A', '"Ampuh" bererti sangat berkesan, teguh atau berkuasa menghalang sesuatu ancaman.', 'SK 2.2 Kosa Kata Luas');
addBM5(4, 13, 'Tujuan Penulisan Surat Kiriman Rasmi', 'Mudah', 'Surat kiriman rasmi biasanya ditulis untuk tujuan berikut KECUALI:', { A: 'Bertanyakan khabar dan menceritakan percutian santai kepada rakan karib', B: 'Memohon kebenaran melawat ke kilang percetakan', C: 'Menyampaikan aduan kerosakan lampu jalan', D: 'Memohon cuti persekolahan kerana sakit' }, 'A', 'Menceritakan percutian kepada rakan karib menggunakan surat kiriman tidak rasmi.', 'SK 3.3 Penulisan Rasmi');
addBM5(4, 14, 'Teknik Menemukan Idea Utama', 'Sederhana', 'Untuk mengenal pasti idea utama dalam sesuatu perenggan petikan, pembaca lazimnya perlu memberi tumpuan kepada:', { A: 'Ayat topik yang biasanya terletak pada awal atau akhir perenggan', B: 'Hanya perkataan yang dicetak tebal sahaja', C: 'Gambar hiasan di tepi teks', D: 'Tandatangan pengarang' }, 'A', 'Ayat topik merumuskan gagasan atau fikiran utama sesuatu perenggan.', 'SK 2.3 Membaca Kritis');
addBM5(4, 15, 'Aplikasi Nilai Cinta akan Alam Sekitar KBAT', 'Sukar', 'Sekiranya melihat sisa plastik dan botol minuman bertaburan di tepi pantai rekreasi, tindakan paling bertanggungjawab murid sekolah ialah:', { A: 'Mengutip sampah tersebut dan memasukkannya ke dalam tong kitar semula yang disediakan', B: 'Mengabaikannya kerana ada pekerja pembersihan majlis perbandaran', C: 'Mengambil gambar dan mentertawakan pelancong lain', D: 'Menendang botol ke dalam laut' }, 'A', 'Mengambil inisiatif membersihkan sisa mencerminkan penghayatan sebenar nilai sayangi alam sekitar.', 'SK 2.3 Penghayatan Nilai Sivik');

const allBM5 = [...BAHASA_MELAYU_TAHUN_5_QUESTIONS, ...bm5Extra];
fs.writeFileSync('src/data/bahasaMelayuTahun5.ts', `import { QuizQuestion } from '../types';\n\nexport const BAHASA_MELAYU_TAHUN_5_QUESTIONS: QuizQuestion[] = ${JSON.stringify(allBM5, null, 2)};\n`, 'utf8');
console.log(`Updated Bahasa Melayu Tahun 5: total ${allBM5.length} questions.`);

// 2. ENGLISH TAHUN 5 (+5 per topic x 6 topics = +30 questions)
const bi5Topics = [
  'Towns and Cities (Unit 1)',
  'Wild Life & Animal Kingdom (Unit 3)',
  'Learning World & Study Habits (Unit 4)',
  'Food and Health (Unit 5)',
  'Sport, History & Biographies (Unit 6 & 7)',
  'Going Away & Travel Plans (Unit 8)',
];

const bi5Extra: QuizQuestion[] = [];
function addBI5(tIdx: number, qIdx: number, subtopic: string, difficulty: 'Mudah' | 'Sederhana' | 'Sukar', question: string, options: any, correctAnswer: 'A' | 'B' | 'C' | 'D', explanation: string, ls: string) {
  bi5Extra.push({
    id: `t5-bi-extra-${tIdx + 1}-${qIdx}`,
    year: 5,
    subject: 'Bahasa Inggeris',
    topic: bi5Topics[tIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard: ls,
  });
}

// Unit 1: Towns and Cities
addBI5(0, 11, 'City Amenities & Places', 'Mudah', 'A place where you can borrow interesting books and read quietly without buying them is a _______:', { A: 'library', B: 'bakery', C: 'cinema', D: 'pharmacy' }, 'A', 'A library is a public building where books and reference materials can be borrowed or studied.', 'CEFR B1 Towns & Cities');
addBI5(0, 12, 'Prepositions of Place in a Town', 'Mudah', 'The modern clinic is located _______ the police station and the post office.', { A: 'between', B: 'under', C: 'inside', D: 'through' }, 'A', '"Between" is used when a place is in the middle of two specific reference points.', 'CEFR B1 Prepositions');
addBI5(0, 13, 'Adjectives for Cities', 'Sederhana', 'Tokyo and Kuala Lumpur are famous for their lively and _______ night markets filled with tourists.', { A: 'bustling', B: 'boring', C: 'silent', D: 'deserted' }, 'A', '"Bustling" describes a place full of cheerful activity and busy people.', 'CEFR B1 Descriptive Adjectives');
addBI5(0, 14, 'Comparative Adjectives in Town Life', 'Mudah', 'Living in a quiet village is often _______ than living in a crowded metropolis.', { A: 'more peaceful', B: 'peacefuler', C: 'most peaceful', D: 'peaceful' }, 'A', 'Use "more peaceful than" for two-syllable adjectives ending in -ful.', 'CEFR B1 Comparatives');
addBI5(0, 15, 'Sustainable Urban Living KBAT', 'Sukar', 'Why do eco-friendly green cities encourage citizens to use electric trains and bicycles instead of personal cars?', { A: 'To drastically reduce carbon emissions and avoid traffic congestion', B: 'Because trains are noisier than cars', C: 'To make streets darker', D: 'To stop people from travelling' }, 'A', 'Public electric transport cuts greenhouse gases and prevents road gridlock.', 'CEFR B1 Critical Urban Thinking');

// Unit 3: Wild Life & Animal Kingdom
addBI5(1, 11, 'Animal Habitats', 'Mudah', 'Camels have special humps to store fat and can survive for weeks in the dry, arid _______:', { A: 'desert', B: 'glacier', C: 'swamp', D: 'coral reef' }, 'A', 'Camels are specially adapted to the extreme heat and dry conditions of the desert.', 'CEFR B1 Animal Kingdom');
addBI5(1, 12, 'Herbivores, Carnivores & Omnivores', 'Mudah', 'An eagle that hunts and feeds exclusively on fish, snakes, and mice is a _______:', { A: 'carnivore', B: 'herbivore', C: 'vegetarian', D: 'fungus' }, 'A', 'A carnivore is an animal that eats exclusively flesh and meat.', 'CEFR B1 Biological Vocabulary');
addBI5(1, 13, 'Superlative Adjectives in Wildlife', 'Mudah', 'The blue whale is the _______ mammal known to ever live on planet Earth.', { A: 'largest', B: 'larger', C: 'more large', D: 'most large' }, 'A', 'Use "the largest" as the superlative form of large.', 'CEFR B1 Superlatives');
addBI5(1, 14, 'Present Continuous for Wildlife Observation', 'Sederhana', 'Look through the binoculars! The hornbills _______ high above the forest canopy.', { A: 'are flying', B: 'flew', C: 'flies', D: 'was flying' }, 'A', '"Look!" indicates an action happening right now in the present continuous tense.', 'CEFR B1 Present Continuous');
addBI5(1, 15, 'Wildlife Conservation KBAT', 'Sukar', 'Why must governments strictly enforce severe bans against the illegal poaching of sea turtles and pangolins?', { A: 'To prevent these precious endangered species from becoming extinct forever', B: 'To allow zoos to sell more tickets', C: 'Because turtles eat too many fish', D: 'To turn jungles into shopping malls' }, 'A', 'Banning illegal poaching prevents irreversible biodiversity loss and species extinction.', 'CEFR B1 Environmental Conservation');

// Unit 4: Learning World & Study Habits
addBI5(2, 11, 'School Subjects Vocabulary', 'Mudah', 'The academic subject where pupils learn about world continents, rivers, oceans, and maps is _______:', { A: 'Geography', B: 'Physical Education', C: 'Music', D: 'Art' }, 'A', 'Geography studies the Earth\'s physical features and human populations.', 'CEFR B1 School Subjects');
addBI5(2, 12, 'Frequency Adverbs', 'Mudah', 'Mina is an outstanding student who _______ submits her classroom assignments on time.', { A: 'always', B: 'rarely', C: 'never', D: 'seldom' }, 'A', '"Always" shows consistency and punctuality in submitting homework.', 'CEFR B1 Adverbs of Frequency');
addBI5(2, 13, 'Expressing Abilities with "Can/Can\'t"', 'Mudah', 'Aisyah _______ speak fluent English and Malay, but she cannot write in French yet.', { A: 'can', B: 'must', C: 'should', D: 'will' }, 'A', '"Can" indicates current ability or skill.', 'CEFR B1 Modals of Ability');
addBI5(2, 14, 'Imperatives for Study Tips', 'Sederhana', '_______ a quiet and well-lit study corner free from television distractions before revising.', { A: 'Choose', B: 'Choosing', C: 'Chose', D: 'Chosen' }, 'A', 'Imperative sentences give direct instructions or helpful advice using the base verb.', 'CEFR B1 Imperatives');
addBI5(2, 15, 'Effective Revision Strategies KBAT', 'Sukar', 'Why do educational psychologists advise students to use mind maps and active recall rather than merely re-reading textbook pages passively?', { A: 'Mind maps organize interconnected concepts visually and strengthen long-term memory', B: 'Because drawings use more colourful ink', C: 'Textbooks are always too heavy to open', D: 'Mind maps guarantee a student will never need to sleep' }, 'A', 'Visual mind mapping and active retrieval trigger deeper cognitive understanding.', 'CEFR B1 Learning Strategies');

// Unit 5: Food and Health
addBI5(3, 11, 'Healthy Nutritional Choices', 'Mudah', 'Oranges, lemons, and guavas are rich in _______, which strengthens our immune system.', { A: 'Vitamin C', B: 'refined sugar', C: 'cholesterol', D: 'carbon monoxide' }, 'A', 'Citrus fruits are world-famous natural sources of Vitamin C.', 'CEFR B1 Food & Health');
addBI5(3, 12, 'Quantifiers: Much vs Many', 'Mudah', 'How _______ glasses of clean drinking water do doctors advise us to drink every day?', { A: 'many', B: 'much', C: 'little', D: 'any' }, 'A', 'Use "many" with plural countable nouns like "glasses".', 'CEFR B1 Quantifiers');
addBI5(3, 13, 'Countable vs Uncountable Nouns', 'Sederhana', 'We only need a _______ salt and pepper to season this delicious vegetable soup.', { A: 'little', B: 'few', C: 'many', D: 'several' }, 'A', 'Use "a little" with uncountable nouns like "salt".', 'CEFR B1 Quantifiers');
addBI5(3, 14, 'Giving Advice with "Ought to / Should"', 'Mudah', 'If you have a toothache after eating too many sweets, you _______ visit a dentist.', { A: 'should', B: 'wouldn\'t', C: 'mustn\'t', D: 'can\'t' }, 'A', '"Should" offers recommended and practical medical advice.', 'CEFR B1 Health Advice');
addBI5(3, 15, 'Evaluating Balanced Diet KBAT', 'Sukar', 'What is the most likely consequence of consuming excessive sugary carbonated soda drinks and deep-fried fast food over many years?', { A: 'Increased risk of obesity, dental cavities, and diabetes', B: 'Stronger bones and sharper eyesight', C: 'Faster athletic running speed', D: 'Improved memory and calmness' }, 'A', 'Excessive sugar and trans fats lead directly to metabolic diseases and dental damage.', 'CEFR B1 Health Reasoning');

// Unit 6 & 7: Sport, History & Biographies
addBI5(4, 11, 'Sports Equipment & Collocations', 'Mudah', 'In badminton and tennis, athletes use a specialized _______ to hit the shuttlecock or ball.', { A: 'racket', B: 'glove', C: 'bat', D: 'helmet' }, 'A', 'Tennis and badminton are played with stringed rackets.', 'CEFR B1 Sports Vocabulary');
addBI5(4, 12, 'Historical Past Tense Narrative', 'Mudah', 'Our beloved country, Malaysia, _______ its glorious independence on 31st August 1957.', { A: 'achieved', B: 'achieves', C: 'achieving', D: 'achieve' }, 'A', 'Past historic dates require the past simple form "achieved".', 'CEFR B1 Past Simple');
addBI5(4, 13, 'Irregular Past Forms in Biographies', 'Sederhana', 'The legendary scientist Thomas Edison _______ the practical electric incandescent light bulb.', { A: 'invented', B: 'invent', C: 'inventing', D: 'invents' }, 'A', '"Invented" is the past simple tense describing an invention made in the past.', 'CEFR B1 Biographies');
addBI5(4, 14, 'Sportsmanship Idiom', 'Mudah', 'A fair athlete always shakes hands with opponents, demonstrating commendable _______:', { A: 'sportsmanship', B: 'cowardice', C: 'jealousy', D: 'greed' }, 'A', 'Sportsmanship is fair, generous, and polite behavior during athletic competitions.', 'CEFR B1 Values in Sports');
addBI5(4, 15, 'Olympic Creed Analysis KBAT', 'Sukar', 'The Olympic motto "Citius, Altius, Fortius" inspires athletes worldwide to:', { A: 'Strive continuously to become Faster, Higher, and Stronger with courage and respect', B: 'Defeat opponents through unfair cheating', C: 'Refuse to train during weekends', D: 'Collect only gold medals and ignore teamwork' }, 'A', 'The motto inspires personal excellence, perseverance, and mutual sporting respect.', 'CEFR B1 Olympic History');

// Unit 8: Going Away & Travel Plans
addBI5(5, 11, 'Luggage & Packing Essentials', 'Mudah', 'Before flying abroad on a holiday, every international tourist must present a valid _______ at immigration.', { A: 'passport', B: 'storybook', C: 'receipt', D: 'postcard' }, 'A', 'A passport is the official government-issued travel document verifying identity and citizenship.', 'CEFR B1 Travel Essentials');
addBI5(5, 12, 'Future Plans with "Be Going To"', 'Mudah', 'During the December school break, we _______ visit our grandparents in Penang.', { A: 'are going to', B: 'is going to', C: 'was going to', D: 'went to' }, 'A', 'Use "are going to" with plural subject "we" to express future travel intentions.', 'CEFR B1 Future Intentions');
addBI5(5, 13, 'Weather Condition Vocabulary', 'Mudah', 'Don\'t forget your warm woollen jacket because the mountain summit will be extremely _______:', { A: 'chilly', B: 'scorching', C: 'arid', D: 'sunny' }, 'A', '"Chilly" means noticeably cold, requiring warm clothes.', 'CEFR B1 Travel Weather');
addBI5(5, 14, 'Modal "Must" for Safety Rules', 'Mudah', 'All passengers on a flight _______ fasten their seatbelts securely during take-off and landing.', { A: 'must', B: 'might', C: 'could', D: 'shall not' }, 'A', '"Must" expresses strict legal and safety obligations.', 'CEFR B1 Travel Rules');
addBI5(5, 15, 'Responsible Ecotourism KBAT', 'Sukar', 'How can responsible eco-tourists protect fragile coral reefs while snorkelling in marine parks?', { A: 'By admiring marine life without stepping on corals or discarding plastic waste', B: 'By snapping off coral branches as souvenirs', C: 'By feeding bread to wild turtles', D: 'By throwing empty soda cans into the sea' }, 'A', 'Ecotourists minimize human interference, leave corals untouched, and keep waters clean.', 'CEFR B1 Sustainable Tourism');

const allBI5 = [...ENGLISH_TAHUN_5_QUESTIONS, ...bi5Extra];
fs.writeFileSync('src/data/englishTahun5.ts', `import { QuizQuestion } from '../types';\n\nexport const ENGLISH_TAHUN_5_QUESTIONS: QuizQuestion[] = ${JSON.stringify(allBI5, null, 2)};\n`, 'utf8');
console.log(`Updated English Tahun 5: total ${allBI5.length} questions.`);

// 3. PENDIDIKAN ISLAM TAHUN 5 (+5 per topic x 6 topics = +30 questions)
const pi5Topics = [
  'Al-Quran, Tajwid & Hafazan',
  'Hadis & Tuntutan Ibadah',
  'Akidah: Nama-nama Allah (Asmaul Husna)',
  'Ibadah: Solat Sunat & Pengurusan Jenazah',
  'Sirah & Adab Islamiah',
  'Pelajaran Jawi (Kata Pinjaman & Imbuhan)',
];

const pi5Extra: QuizQuestion[] = [];
function addPI5(tIdx: number, qIdx: number, subtopic: string, difficulty: 'Mudah' | 'Sederhana' | 'Sukar', question: string, options: any, correctAnswer: 'A' | 'B' | 'C' | 'D', explanation: string, ls: string) {
  pi5Extra.push({
    id: `t5-pi-extra-${tIdx + 1}-${qIdx}`,
    year: 5,
    subject: 'Pendidikan Islam',
    topic: pi5Topics[tIdx],
    subtopic,
    difficulty,
    question,
    options,
    correctAnswer,
    explanation,
    learningStandard: ls,
  });
}

// Topic 1: Al-Quran, Tajwid & Hafazan
addPI5(0, 11, 'Hukum Nun Mati: Idgham Bila Ghunnah', 'Mudah', 'Apabila nun mati (نْ) atau tanwin bertemu huruf Lam (ل) atau Ra (ر), hukum tajwidnya ialah:', { A: 'Idgham Bila Ghunnah', B: 'Idgham Maal Ghunnah', C: 'Ikhfa\' Hakiki', D: 'Iqlab' }, 'A', 'Idgham Bila Ghunnah dibaca memasukkan bunyi nun ke dalam huruf berikutnya tanpa dengung.', 'SK 1.2 Tajwid Tahun 5');
addPI5(0, 12, 'Hukum Iqlab', 'Mudah', 'Tanda huruf mim kecil (م) di atas nun mati atau tanwin sebelum huruf Ba (ب) merujuk kepada hukum:', { A: 'Iqlab', B: 'Izhar Halqi', C: 'Idgham', D: 'Ikhfa\'' }, 'A', 'Iqlab bermaksud menukarkan bunyi nun mati atau tanwin kepada bunyi mim beserta dengung.', 'SK 1.2 Hukum Iqlab');
addPI5(0, 13, 'Kefahaman Surah At-Tin', 'Sederhana', 'Dalam Surah At-Tin, Allah SWT menegaskan bahawa manusia diciptakan dalam bentuk yang:', { A: 'Sebaik-baik kejadian (Ahsani Taqwim)', B: 'Lemah dan hina', C: 'Kekal abadi', D: 'Sama seperti malaikat' }, 'A', 'Ayat ke-4 Surah At-Tin menyatakan manusia diciptakan dalam sebaik-baik bentuk dan rupa paras.', 'SK 1.3 Kefahaman Surah At-Tin');
addPI5(0, 14, 'Hukum Mad Asli', 'Mudah', 'Kadar bacaan panjang bagi hukum Mad Asli (Mad Tabi\'i) ialah:', { A: '2 harakat', B: '4 harakat', C: '6 harakat', D: '1 harakat' }, 'A', 'Mad Asli dibaca panjang secara seragam iaitu sebanyak dua harakat.', 'SK 1.2 Hukum Mad Asli');
addPI5(0, 15, 'Tadabbur Surah Al-Qadr KBAT', 'Sukar', 'Apakah keistimewaan Malam Lailatul Qadar sebagaimana dijelaskan di dalam Surah Al-Qadr?', { A: 'Pahalanya lebih baik daripada beribadah selama seribu bulan', B: 'Matahari terbit dari barat', C: 'Bulan terbelah dua', D: 'Pintu rezeki ditutup' }, 'A', 'Surah Al-Qadr ayat ke-3 menyebut Lailatul Qadar khairum min alfi syahr (lebih baik daripada 1,000 bulan).', 'SK 1.3 Tadabbur Al-Quran');

// Topic 2: Hadis & Tuntutan Ibadah
addPI5(1, 11, 'Hadis Menyayangi Orang Muda dan Hormati Tua', 'Mudah', 'Rasulullah SAW bersabda bahawa bukan daripada kalangan umat baginda orang yang tidak:', { A: 'Menyayangi yang lebih muda dan menghormati orang yang lebih tua', B: 'Memiliki harta yang banyak', C: 'Tidur lena', D: 'Menjadi ketua kaum' }, 'A', 'Hadis sahih menuntut umat Islam berkasih sayang sesama insan serta menghormati orang yang berusia.', 'SK 2.1 Tuntutan Hadis');
addPI5(1, 12, 'Menjauhi Sifat Dengki (Hasad)', 'Mudah', 'Menurut sabda Nabi SAW, sifat dengki (hasad) boleh memakan amalan kebaikan ibarat:', { A: 'Api membakar kayu kering', B: 'Air memadamkan api', C: 'Bunga layu ditiup angin', D: 'Awan menutup matahari' }, 'A', 'Hadis riwayat Abu Daud menyatakan hasad dengki memusnahkan pahala amal kebajikan seperti api memakan kayu.', 'SK 2.1 Adab dan Hadis');
addPI5(1, 13, 'Maksud Hadis Menuntut Ilmu', 'Sederhana', '"Menuntut ilmu itu adalah satu kewajipan ke atas setiap orang Muslim." Hadis ini menekankan fardhu:', { A: 'Ain bagi ilmu asas agama dan Kifayah bagi ilmu kepakaran umum', B: 'Mubah sahaja', C: 'Makruh', D: 'Haram' }, 'A', 'Menuntut ilmu asas fardhu ain wajib bagi setiap individu Muslim.', 'SK 2.1 Kewajipan Menuntut Ilmu');
addPI5(1, 14, 'Menjaga Kebersihan', 'Mudah', 'Sabda Rasulullah SAW: "Kebersihan itu adalah sebahagian daripada _______."', { A: 'iman', B: 'kekayaan', C: 'kuasa', D: 'pangkat' }, 'A', 'Kebersihan fizikal, rohani, dan alam sekitar adalah cerminan kesempurnaan iman.', 'SK 2.1 Hadis Kebersihan');
addPI5(1, 15, 'Aplikasi Menahan Kemarahan KBAT', 'Sukar', 'Berdasarkan hadis riwayat al-Bukhari, orang yang benar-benar kuat di sisi Islam ialah:', { A: 'Orang yang mampu mengawal dan menahan dirinya ketika sedang berada dalam keadaan marah', B: 'Orang yang menang dalam pertarungan gusti', C: 'Orang yang mempunyai suara paling lantang', D: 'Orang yang membalas dendam dengan segera' }, 'A', 'Kekuatan sejati menurut Nabi SAW adalah keupayaan menundukkan hawa nafsu amarah.', 'SK 2.1 Menahan Marah');

// Topic 3: Akidah: Nama-nama Allah (Asmaul Husna)
addPI5(2, 11, 'Maksud Asmaul Husna Al-Alim', 'Mudah', 'Nama Allah "Al-Alim" (العَلِيم) bererti Allah Maha:', { A: 'Mengetahui segala sesuatu yang nyata mahupun yang tersembunyi', B: 'Mendengar', C: 'Melihat', D: 'Pengampun' }, 'A', 'Al-Alim bermaksud Allah memiliki ilmu pengetahuan mutlak dan mengetahui setiap lintasan hati hamba-Nya.', 'SK 3.1 Asmaul Husna Al-Alim');
addPI5(2, 12, 'Maksud Asmaul Husna As-Sami\'', 'Mudah', 'Nama Allah "As-Sami\'" (السَّمِيع) bermaksud Allah Maha:', { A: 'Mendengar setiap bisikan dan doa tanpa hijab', B: 'Pencipta', C: 'Pemberi rezeki', D: 'Pengasih' }, 'A', 'As-Sami\' bererti Allah Maha Mendengar segala bunyi dan rintihan hamba-Nya.', 'SK 3.1 Asmaul Husna As-Sami');
addPI5(2, 13, 'Maksud Asmaul Husna Al-Basir', 'Mudah', 'Nama Allah "Al-Basir" (البَصِير) bermaksud Allah Maha:', { A: 'Melihat sekecil-kecil zarah di alam semesta', B: 'Bijaksana', C: 'Adil', D: 'Kaya' }, 'A', 'Al-Basir bermaksud penglihatan Allah meliputi segala sesuatu yang ghaib dan nyata.', 'SK 3.1 Asmaul Husna Al-Basir');
addPI5(2, 14, 'Kesan Beriman dengan Al-Alim', 'Sederhana', 'Seorang murid yang meyakini sifat Al-Alim tidak akan menipu dalam peperiksaan kerana dia sedar bahawa:', { A: 'Allah sentiasa mengetahui segala perbuatannya walaupun tidak dilihat oleh pengawas peperiksaan', B: 'Kertas peperiksaan akan rosak', C: 'Rakan-rakan akan mentertawakannya', D: 'Pen tidak boleh menulis jawapan' }, 'A', 'Keyakinan bahawa Allah Maha Mengetahui memupuk sifat muraqabah (berasa diawasi oleh Allah).', 'SK 3.1 Penghayatan Asmaul Husna');
addPI5(2, 15, 'Maksud Al-Khabir KBAT', 'Sukar', 'Nama Allah "Al-Khabir" (الخَبِير) memberi pengajaran kepada umat Islam agar:', { A: 'Sentiasa ikhlas dan teliti dalam beramal kerana Allah Maha Mengetahui rahsia batin yang tersirat', B: 'Mencari kelemahan orang lain', C: 'Membanggakan amalan di media sosial', D: 'Meramalkan masa depan melalui tilikan' }, 'A', 'Al-Khabir (Maha Waspada/Maha Mengetahui Hal Terperinci) mengajar keikhlasan mutlak.', 'SK 3.1 Asmaul Husna Al-Khabir');

// Topic 4: Ibadah: Solat Sunat & Pengurusan Jenazah
addPI5(3, 11, 'Solat Sunat Rawatib', 'Mudah', 'Solat sunat yang dituntut untuk dikerjakan mengiringi solat fardhu (sebelum atau selepas) dipanggil:', { A: 'Solat Sunat Rawatib', B: 'Solat Sunat Tarawih', C: 'Solat Sunat Dhuha', D: 'Solat Sunat Hajat' }, 'A', 'Solat Sunat Rawatib terbahagi kepada Qabliyyah (sebelum) dan Ba\'diyyah (selepas).', 'SK 4.1 Solat Sunat Rawatib');
addPI5(3, 12, 'Waktu Solat Sunat Dhuha', 'Mudah', 'Waktu yang disyariatkan untuk menunaikan Solat Sunat Dhuha bermula selepas:', { A: 'Matahari terbit setinggi segalah (kira-kira 20 minit selepas syuruk) sehingga sebelum gelincir matahari (Zohor)', B: 'Solat Maghrib', C: 'Tengah malam', D: 'Waktu Subuh sebelum azan' }, 'A', 'Waktu Dhuha bermula apabila matahari naik segalah hingga sebelum masuk waktu Zohor.', 'SK 4.2 Solat Sunat Dhuha');
addPI5(3, 13, 'Hukum Menguruskan Jenazah Orang Islam', 'Mudah', 'Hukum menguruskan jenazah orang Islam (memandikan, mengafankan, menyolatkan dan mengebumikan) ialah:', { A: 'Fardhu Kifayah', B: 'Fardhu Ain', C: 'Sunat Muakkad', D: 'Harus' }, 'A', 'Fardhu Kifayah bermaksud jika sebahagian masyarakat melaksanakannya, gugur kewajipan ke atas yang lain.', 'SK 4.3 Pengurusan Jenazah');
addPI5(3, 14, 'Ciri Solat Jenazah', 'Sederhana', 'Solat Jenazah mempunyai keunikan berbanding solat fardhu biasa iaitu:', { A: 'Dilakukan dengan empat kali takbir secara berdiri tanpa rukuk dan tanpa sujud', B: 'Mempunyai dua kali sujud sahwi', C: 'Dikerjakan sebanyak lima rakaat', D: 'Memerlukan azan dan iqamah yang panjang' }, 'A', 'Solat jenazah tidak mengandungi rukuk dan sujud, hanya 4 takbir dalam keadaan berdiri.', 'SK 4.3 Tatacara Solat Jenazah');
addPI5(3, 15, 'Doa Takbir Ketiga Solat Jenazah KBAT', 'Sukar', 'Apakah bacaan yang disunatkan dibaca selepas takbir yang ketiga dalam Solat Jenazah?', { A: 'Mendoakan keampunan dan rahmat khusus untuk si mati (Allahummaghfir lahu warhamhu...)', B: 'Membaca Surah Al-Fatihah', C: 'Berselawat ke atas Nabi SAW', D: 'Membaca doa qunut' }, 'A', 'Takbir 1: Al-Fatihah, Takbir 2: Selawat, Takbir 3: Doa untuk mayat, Takbir 4: Doa penutup dan salam.', 'SK 4.3 Rukun Solat Jenazah');

// Topic 5: Sirah & Adab Islamiah
addPI5(4, 11, 'Peristiwa Perjanjian Hudaibiyah', 'Mudah', 'Perjanjian Hudaibiyah dimeterai antara pihak Nabi Muhammad SAW dan kaum musyrikin Quraisy pada tahun:', { A: 'Ke-6 Hijrah', B: 'Ke-1 Hijrah', C: 'Ke-10 Hijrah', D: 'Ke-3 Hijrah' }, 'A', 'Perjanjian gencatan senjata Hudaibiyah termeterai pada bulan Zulkaedah tahun ke-6 Hijrah.', 'SK 5.1 Sirah Perjanjian Hudaibiyah');
addPI5(4, 12, 'Isi Kandungan Perjanjian Hudaibiyah', 'Sederhana', 'Salah satu fasal utama dalam Perjanjian Hudaibiyah ialah mengadakan gencatan senjata selama:', { A: '10 tahun', B: '5 tahun', C: '2 tahun', D: '20 tahun' }, 'A', 'Kedua-dua pihak bersetuju menghentikan peperangan selama tempoh 10 tahun.', 'SK 5.1 Fasal Perjanjian Hudaibiyah');
addPI5(4, 13, 'Adab Berkomunikasi di Media Sosial', 'Mudah', 'Adab Islamiah yang paling wajar dipatuhi semasa berkongsi maklumat di internet ialah:', { A: 'Memastikan kesahihan maklumat (tabayyun) dan tidak menyebarkan fitnah', B: 'Menyebarkan sebarang khabar angin tanpa usul periksa', C: 'Menggunakan kata-kata kesat untuk menarik perhatian', D: 'Mengumpat keaiban orang lain' }, 'A', 'Prinsip tabayyun (selidik kesahihan) menghalang fitnah dan dosa di media sosial.', 'SK 6.1 Adab Berkomunikasi');
addPI5(4, 14, 'Adab Menziarahi Orang Sakit', 'Mudah', 'Antara adab yang dianjurkan ketika menziarahi orang sakit di hospital ialah:', { A: 'Mendoakan kesembuhan dan tidak berlama-lama sehingga mengganggu pesakit berehat', B: 'Membuat bising di dalam wad', C: 'Menceritakan berita yang menakut-nakutkan pesakit', D: 'Memakan makanan pesakit tanpa izin' }, 'A', 'Menziarahi secara ringkas sambil mendoakan kesembuhan memberikan ketenangan kepada pesakit.', 'SK 6.2 Adab Menziarahi Orang Sakit');
addPI5(4, 15, 'Hikmah Perjanjian Hudaibiyah KBAT', 'Sukar', 'Mengapakah Perjanjian Hudaibiyah disifatkan dalam Surah Al-Fath sebagai "Fathan Mubina" (Kemenangan yang Nyata)?', { A: 'Kerana membuka peluang dakwah Islam tersebar luas secara aman dan membawa kepada Pembukaan Kota Mekah', B: 'Kerana kaum Muslimin mendapat emas yang banyak', C: 'Kerana orang Quraisy terus menyerah kalah serta-merta', D: 'Kerana tiada lagi musafir dibenarkan berhijrah' }, 'A', 'Suasana damai membolehkan dakwah berkembang pesat sehingga ribuan orang memeluk Islam.', 'SK 5.1 Iktibar Perjanjian Hudaibiyah');

// Topic 6: Pelajaran Jawi (Kata Pinjaman & Imbuhan)
addPI5(5, 11, 'Ejaan Jawi Kata Pinjaman Bahasa Inggeris', 'Mudah', 'Perkataan "Klinik" (clinic) dieja dalam tulisan Jawi sebagai:', { A: 'کلينيک', B: 'کلينک', C: 'کلينيق', D: 'کليناک' }, 'A', 'Kata pinjaman Bahasa Inggeris dieja mengikut sebutan fonetik Jawi KAF-LAM-YA-NUN-YA-KAF.', 'SK 7.1 Ejaan Jawi Kata Serapan');
addPI5(5, 12, 'Perkataan "Sains"', 'Mudah', 'Perkataan pinjaman "Sains" (science) dieja dalam Jawi dengan betul sebagai:', { A: 'ساءينس', B: 'ساينس', C: 'سءينس', D: 'ساينز' }, 'A', 'Sains dieja dengan sin-alif-hamzah-ya-nun-sin (ساءينس).', 'SK 7.1 Kata Pinjaman Bahasa Inggeris');
addPI5(5, 13, 'Imbuhan Awalan "Ber-" dalam Jawi', 'Mudah', 'Kata dasar "main" apabila menerima imbuhan awalan "ber-" dieja dalam tulisan Jawi sebagai:', { A: 'برماءين', B: 'برماين', C: 'برمءين', D: 'برمين' }, 'A', 'Dieja ber-alif-hamzah-ya-nun: برماءين.', 'SK 7.2 Imbuhan Jawi');
addPI5(5, 14, 'Kata Pinjaman Bahasa Arab', 'Sederhana', 'Perkataan "Ikhlas" yang berasal daripada bahasa Arab hendaklah dieja mengikut ejaan asal iaitu:', { A: 'إخلاص', B: 'إخلس', C: 'اخلث', D: 'ايخلس' }, 'A', 'Kata serapan bahasa Arab mengekalkan ejaan asal bahasa Al-Quran: إخلاص.', 'SK 7.1 Kata Serapan Bahasa Arab');
addPI5(5, 15, 'Transliterasi Rumi ke Jawi KBAT', 'Sukar', 'Pilih padanan ejaan Jawi yang tepat bagi ayat: "Negara Malaysia aman dan makmur."', { A: 'نݢارا مليسيا أمان دان معمور.', B: 'نݢار مليسيا امن دان معمور.', C: 'نݢارا ملسيا ايمن دان مکمور.', D: 'نگارا مليسيا عمان دان معمور.' }, 'A', 'Transliterasi rasmi DBP bagi ayat tersebut ialah: نݢارا مليسيا أمان دان معمور.', 'SK 7.3 Ayat Jawi Lanjutan');

const allPI5 = [...PENDIDIKAN_ISLAM_TAHUN_5_QUESTIONS, ...pi5Extra];
fs.writeFileSync('src/data/pendidikanIslamTahun5.ts', `import { QuizQuestion } from '../types';\n\nexport const PENDIDIKAN_ISLAM_TAHUN_5_QUESTIONS: QuizQuestion[] = ${JSON.stringify(allPI5, null, 2)};\n`, 'utf8');
console.log(`Updated Pendidikan Islam Tahun 5: total ${allPI5.length} questions.`);
