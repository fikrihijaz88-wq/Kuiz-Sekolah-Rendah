import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not configured in the environment. Using dynamic KSSR curriculum generator.');
      return null;
    }
    try {
      genAIClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    } catch (e) {
      console.warn('Failed to initialize GoogleGenAI client:', e);
      return null;
    }
  }
  return genAIClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// JSON Schema definition for KSSR Quiz questions
const questionSchema = {
  type: Type.OBJECT,
  properties: {
    year: { type: Type.INTEGER, description: 'School year: 2, 4, or 5' },
    subject: { type: Type.STRING, description: 'Matematik, Sains, Bahasa Melayu, Bahasa Inggeris, or Pendidikan Islam' },
    topic: { type: Type.STRING, description: 'KSSR Semakan syllabus topic name' },
    questions: {
      type: Type.ARRAY,
      description: 'List of multiple-choice quiz questions adhering strictly to KSSR Semakan syllabus',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: 'Unique question id e.g. q-1, q-2' },
          year: { type: Type.INTEGER, description: 'Year 2, Year 4, or Year 5' },
          subject: { type: Type.STRING, description: 'Subject: Matematik, Sains, Bahasa Melayu, Bahasa Inggeris, or Pendidikan Islam' },
          topic: { type: Type.STRING, description: 'Topic' },
          subtopic: { type: Type.STRING, description: 'Subtopic' },
          difficulty: { type: Type.STRING, description: 'One of: Mudah, Sederhana, KBAT (Aras Rendah), KBAT (Aras Sederhana), KBAT (Aras Tinggi), KBAT (Aras Rendah-Sederhana)' },
          stimulus: { type: Type.STRING, description: 'Optional short stimulus reading passage or problem scenario' },
          question: { type: Type.STRING, description: 'Age-appropriate multiple-choice question' },
          options: {
            type: Type.OBJECT,
            properties: {
              A: { type: Type.STRING, description: 'Distinct option A' },
              B: { type: Type.STRING, description: 'Distinct option B' },
              C: { type: Type.STRING, description: 'Distinct option C' },
              D: { type: Type.STRING, description: 'Distinct option D' },
            },
            required: ['A', 'B', 'C', 'D'],
          },
          correctAnswer: { type: Type.STRING, description: 'Single correct answer option letter: A, B, C, or D' },
          explanation: { type: Type.STRING, description: 'Brief encouraging pedagogical explanation for the student' },
          learningStandard: { type: Type.STRING, description: 'KSSR Learning standard reference (e.g. SK 2.1 / SP 2.1.2)' },
        },
        required: ['id', 'year', 'subject', 'topic', 'difficulty', 'question', 'options', 'correctAnswer', 'explanation'],
      },
    },
  },
  required: ['year', 'subject', 'topic', 'questions'],
};

// In-memory cache for generated TTS audio to ensure ultra-fast repeated playback
const ttsCache = new Map<string, Buffer>();

// API Endpoint for Authentic Native Malaysian Malay (ms) & English (en) Audio TTS
app.get('/api/tts', async (req, res) => {
  try {
    const text = (req.query.text as string || '').trim();
    const lang = (req.query.lang as string || 'ms').toLowerCase();

    if (!text) {
      return res.status(400).json({ error: 'Text parameter is required' });
    }

    const sanitizedText = text.slice(0, 1200);
    const ttsLang = lang === 'en' ? 'en' : 'ms';
    const cacheKey = `${ttsLang}:${sanitizedText}`;

    if (ttsCache.has(cacheKey)) {
      const cached = ttsCache.get(cacheKey)!;
      res.setHeader('Content-Type', 'audio/mpeg');
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Content-Length', cached.length);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return res.send(cached);
    }

    // Split text cleanly by sentence/punctuation boundaries without breaking decimal points
    const rawParts = sanitizedText.split(/(?<=[.?!;:,])\s+|\n+/);
    const chunks: string[] = [];
    let current = '';

    for (const part of rawParts) {
      if (!part.trim()) continue;
      if ((current + ' ' + part).length > 175) {
        if (current.trim()) chunks.push(current.trim());
        current = part;
      } else {
        current = current ? current + ' ' + part : part;
      }
    }
    if (current.trim()) chunks.push(current.trim());

    if (chunks.length === 0) {
      chunks.push(sanitizedText.slice(0, 175));
    }

    const audioBuffers: Buffer[] = [];
    for (const chunk of chunks) {
      if (!chunk.trim()) continue;
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=${ttsLang}&client=tw-ob`;
      
      let resOk = false;
      let lastErr: any = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const response = await fetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
              'Referer': 'https://translate.google.com/',
            },
          });

          if (response.ok) {
            const arrBuf = await response.arrayBuffer();
            audioBuffers.push(Buffer.from(arrBuf));
            resOk = true;
            break;
          } else {
            lastErr = new Error(`TTS status ${response.status}`);
          }
        } catch (e) {
          lastErr = e;
        }
      }

      if (!resOk) {
        throw lastErr || new Error('TTS service failed');
      }
    }

    const combinedBuffer = Buffer.concat(audioBuffers);

    // Keep cache bounded to 500 recent clips
    if (ttsCache.size > 500) {
      const oldestKey = ttsCache.keys().next().value;
      if (oldestKey) ttsCache.delete(oldestKey);
    }
    ttsCache.set(cacheKey, combinedBuffer);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('Content-Length', combinedBuffer.length);
    res.setHeader('Cache-Control', 'public, max-age=86400');
    return res.send(combinedBuffer);
  } catch (err: any) {
    console.error('Error in /api/tts:', err.message || err);
    return res.status(500).json({ error: 'Failed to synthesize speech audio' });
  }
});

// API Endpoint to generate quiz questions using Gemini 3.8 Flash
app.post('/api/generate-quiz', async (req, res) => {
  try {
    const {
      year = 2,
      subject = 'Matematik',
      topic = 'Operasi Asas',
      count = 5,
      difficulty = 'Campuran',
      customPrompt = '',
    } = req.body;

    const systemInstruction = `You are an expert Malaysian primary school educator specializing in the KSSR Semakan syllabus for Year 2 (Tahun 2), Year 4 (Tahun 4), and Year 5 (Tahun 5).

Your mission is to generate age-appropriate, interactive multiple-choice quiz questions based STRICTLY on the Kementerian Pendidikan Malaysia (KPM) syllabus:

1. TAHUN 2:
- Matematik: Nombor hingga 1,000, Operasi Asas (Tambah, Tolak, Darab, Bahagi), Wang hingga RM100, Masa dan Waktu, Pecahan mudah.
- Bahasa Inggeris: CEFR A1 beginner. Vocabulary (animals, school, family, hobbies, food), simple present tense, pronouns, prepositions.
- Sains: Kemahiran saintifik, manusia, haiwan, tumbuh-tumbuhan, terang & gelap, elektrik asas, campuran.
- Bahasa Melayu: Tatabahasa asas, kata nama, kata kerja, penjodoh bilangan, ayat tunggal & majmuk, peribahasa mudah.
- Pendidikan Islam: Huruf hijaiyyah, rukun iman/islam, wuduk, solat fardhu, adab harian, suku kata Jawi.

2. TAHUN 4:
- Matematik: Nombor hingga 100,000, Pecahan, Perpuluhan, Peratus, Wang hingga RM100,000, Masa dan Waktu (sistem 12 & 24 jam, dekad/abad), Panjang, Jisim, Isi Padu cecair, Koordinat (sukuan pertama), Nisbah dan Kadaran (1:1 hingga 1:10). Termasuk soalan KBAT.
- Sains: Kemahiran saintifik (pemboleh ubah/hipotesis), proses hidup manusia & haiwan, fotosintesis, sifat cahaya, bunyi & tenaga, sifat bahan, graviti & putaran bumi.
- Bahasa Melayu: Golongan kata lanjutan, kata tugas, imbuhan awalan/akhiran/apitan, peribahasa warisan, pemahaman prosa & puisi.
- Bahasa Inggeris: CEFR A2 (Get Smart Plus 4 standard). Past simple tense (regular & irregular), comparatives/superlatives, modals, reading comprehension, connectors.
- Pendidikan Islam: Hukum Nun Sakinah & Tanwin, Asmaul Husna (Al-Adl, Al-Alim), solat Jumaat, mandi wajib, peristiwa Hijrah, adab kemasyarakatan, Jawi tradisi & serapan.

3. TAHUN 5:
- Matematik: Nombor bulat hingga 1,000,000, Nombor Perdana, Pola nombor, Pecahan (darab pecahan), Perpuluhan 3 tempat, Peratus (diskaun, faedah, dividen), Wang hingga RM1,000,000, Masa (hubungan abad, dekad, tahun), Ukuran & Sukatan (panjang, jisim, isi padu cecair), Ruang (poligon sekata, sudut, luas bentuk gabungan, isi padu), Koordinat (jarak mengufuk & mencancang), Nisbah dan Kadaran, Pengurusan Data (Mod, Median, Min, Julat).
- Sains: Kemahiran saintifik (eksperimen & kawalan pemboleh ubah), Sistem Rangka & Peredaran Darah Manusia, Kemandirian Spesies Haiwan & Siratan Makanan, Kemandirian Tumbuhan & Agen Pencaran, Elektrik (Litar Bersiri & Selari), Haba, Suhu & Pengujian Asid/Alkali (Kertas Litmus), Fasa Bulan, Putaran Bumi, Kestabilan & Kekuatan Struktur.
- Bahasa Melayu: Kata ganti nama diri istana & pangkat, kata kerja berpelengkap, kata adjektif pancaindera, kata pemeri (ialah/adalah), kata hubung pancangan, ayat songsang, imbuhan apitan memper-...-kan, kata sisipan (-el-, -er-, -em-, -in-), peribahasa kiasan, pantun nasihat, dan ulasan kritis nilai murni.
- Bahasa Inggeris: CEFR A2 High / English Plus 1 standard. Towns & cities (There is/are, superlatives), wild life & conservation, learning world & school routines, food & healthy habits, sports milestones (Past simple irregular), biographies, future plans with "be going to".
- Pendidikan Islam: Hukum Mim Sakinah (Ikhfa Syafawi, Idgham Mislain, Izhar Syafawi), Surah Al-Qadr & Al-Alaq, Hadis mencegah kemungkaran, Akidah (Al-Khabir & Al-Basir, Hari Kiamat), Ibadah (Solat Jenazah 4 takbir, Tayammum, Solat Berjemaah), Sirah (Fathul Makkah & Haji Wada), Akhlak (Adab jual beli & mengasihi orang tua), Pelajaran Jawi (Kata Pinjaman Bahasa Inggeris/Arab).

LANGUAGE CONSTRAINTS:
- For Malay (Matematik): Use standard Malaysian Malay (Bahasa Melayu Malaysia / Bahasa Baku KPM). NEVER use Indonesian (Bahasa Indonesia) phrases or vocabulary. Use authentic Malaysian primary school terminology (e.g. wang saku, baki wang, perpuluhan, peratusan, satah Cartes, asalan, dekad, abad).
- For English: Follow Malaysian Primary CEFR standards.

RULES:
- Provide exactly 4 distinct answer options (A, B, C, D) per question. Ensure all 4 distractors are plausible and mutually exclusive.
- Only ONE correct answer ('A' | 'B' | 'C' | 'D').
- Provide a brief, warm, encouraging pedagogical explanation for the correct answer:
  * For Matematik (BM): start with encouragement like "Bagus!", "Syabas!", "Hebat!", "Tepat sekali!" followed by clear step-by-step reasoning.
  * For English: start with encouragement like "Well done!", "Great job!", "Spot on!", "Super!" followed by clear, gentle guidance.
- Output MUST strictly adhere to the provided JSON schema.`;

    const userPromptText = `Generate ${count} interactive multiple-choice quiz questions for:
Year: Tahun ${year}
Subject: ${subject}
Topic: ${topic}
Target Difficulty: ${difficulty}
${customPrompt ? `Additional Teacher Note / Focus: ${customPrompt}` : ''}

Ensure each question has 4 distinct options (A, B, C, D), single correct answer, and an encouraging explanation following KSSR Semakan standard.`;

    const ai = getGeminiClient();
    const candidateModels = ['gemini-3.8-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest'];
    let rawText = '';
    let isAiGenerated = false;

    if (ai) {
      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: userPromptText,
            config: {
              systemInstruction,
              temperature: 0.7,
              responseMimeType: 'application/json',
              responseSchema: questionSchema,
            },
          });
          if (response.text) {
            rawText = response.text;
            isAiGenerated = true;
            break;
          }
        } catch (err: any) {
          console.warn(`Model ${modelName} unavailable (${err?.status || err?.message || 'busy'}). Trying fallback model.`);
        }
      }
    }

    let parsedData: any = null;
    if (rawText) {
      try {
        parsedData = JSON.parse(rawText);
      } catch (e) {
        console.warn('Could not parse Gemini JSON response, switching to curriculum bank:', e);
      }
    }

    if (!parsedData || !parsedData.questions || !Array.isArray(parsedData.questions) || parsedData.questions.length === 0) {
      // Dynamic Curriculum Generator for KSSR Semakan
      parsedData = generateFallbackKSSRQuestions(year, subject, topic, count, difficulty);
      isAiGenerated = false;
    }

    // Sanitize question items to ensure complete IDs
    if (parsedData.questions && Array.isArray(parsedData.questions)) {
      parsedData.questions = parsedData.questions.map((q: any, idx: number) => ({
        ...q,
        id: q.id || `gen-${Date.now()}-${idx + 1}`,
        year: Number(q.year || year),
        subject: q.subject || subject,
        topic: q.topic || topic,
      }));
    }

    res.json({
      success: true,
      isAiGenerated,
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating quiz questions, generating emergency curriculum batch:', error);
    const emergencyData = generateFallbackKSSRQuestions(req.body.year || 2, req.body.subject || 'Matematik', req.body.topic || 'Operasi Asas', req.body.count || 5, req.body.difficulty || 'Campuran');
    res.json({
      success: true,
      isAiGenerated: false,
      data: emergencyData,
    });
  }
});

// Dynamically generate curriculum-compliant questions for all KSSR subjects & years
function generateFallbackKSSRQuestions(year: number, subject: string, topic: string, count: number, difficulty: string) {
  const isYear2 = Number(year) === 2;
  const numQuestions = Math.max(3, Math.min(count || 5, 10));
  const bank: any[] = [];

  if (isYear2) {
    if (subject === 'Matematik') {
      bank.push(
        {
          id: `t2-m-${Date.now()}-1`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Operasi Asas',
          subtopic: 'Tambah Dua Nombor',
          difficulty: 'Mudah',
          question: 'Kira hasil tambah: 425 + 130 = ?',
          options: { A: '555', B: '545', C: '565', D: '535' },
          correctAnswer: 'A',
          explanation: 'Bagus! 425 + 130 = 555. Tambahkan nilai sa (5 + 0 = 5), puluh (2 + 3 = 5), dan ratus (4 + 1 = 5).',
          learningStandard: 'SK 2.1 / SP 2.1.1',
        },
        {
          id: `t2-m-${Date.now()}-2`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Wang hingga RM100',
          subtopic: 'Tolak Nilai Wang',
          difficulty: 'Sederhana',
          question: 'Farhan mempunyai RM65. Dia membeli sehelai baju sukan berharga RM38. Berapakah baki wang Farhan?',
          options: { A: 'RM37', B: 'RM27', C: 'RM23', D: 'RM17' },
          correctAnswer: 'B',
          explanation: 'Syabas! RM65 - RM38 = RM27. Kumpul semula 1 puluh kepada 10 sa (15 - 8 = 7 sa, 5 - 3 = 2 puluh).',
          learningStandard: 'SK 4.2 / SP 4.2.1',
        },
        {
          id: `t2-m-${Date.now()}-3`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Masa dan Waktu',
          subtopic: 'Pecahan Jam',
          difficulty: 'Mudah',
          question: 'Berapakah bilangan minit dalam satu perempat jam (suku jam)?',
          options: { A: '10 minit', B: '15 minit', C: '20 minit', D: '30 minit' },
          correctAnswer: 'B',
          explanation: 'Hebat! Satu jam ada 60 minit. Maka satu perempat atau suku jam bersamaan dengan 15 minit.',
          learningStandard: 'SK 5.1 / SP 5.1.3',
        },
        {
          id: `t2-m-${Date.now()}-4`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Pecahan Mudah',
          subtopic: 'Banding Pecahan',
          difficulty: 'Sederhana',
          question: 'Antara pecahan berikut, yang manakah mempunyai nilai yang paling kecil?',
          options: { A: '1/2', B: '1/4', C: '2/4', D: '3/4' },
          correctAnswer: 'B',
          explanation: 'Tepat sekali! 1/4 (satu perempat) adalah lebih kecil daripada 1/2 atau 2/4.',
          learningStandard: 'SK 3.1 / SP 3.1.2',
        },
        {
          id: `t2-m-${Date.now()}-5`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Nombor hingga 1,000',
          subtopic: 'Bundar Puluh Terdekat',
          difficulty: 'Mudah',
          question: 'Bundarkan 846 kepada puluh yang terdekat.',
          options: { A: '840', B: '850', C: '800', D: '900' },
          correctAnswer: 'B',
          explanation: 'Pintar! Digit sa ialah 6 (lebih besar daripada 5), jadi tambah 1 pada rumah puluh. Jawapannya 850.',
          learningStandard: 'SK 1.4 / SP 1.4.1',
        },
        {
          id: `t2-m-${Date.now()}-6`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Operasi Asas',
          subtopic: 'Darab Asas',
          difficulty: 'Sederhana',
          question: 'Terdapat 6 buah bakul. Setiap bakul ada 4 biji mangga. Berapakah jumlah mangga kesemuanya?',
          options: { A: '20 biji', B: '24 biji', C: '28 biji', D: '18 biji' },
          correctAnswer: 'B',
          explanation: 'Bagus! 6 × 4 = 24 biji mangga kesemuanya.',
          learningStandard: 'SK 2.3 / SP 2.3.1',
        },
        {
          id: `t2-m-${Date.now()}-7`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Wang hingga RM100',
          subtopic: 'Gabungan Nilai Wang',
          difficulty: 'Mudah',
          question: '3 keping wang kertas RM10 dan 2 keping wang kertas RM5 bersamaan dengan nilai:',
          options: { A: 'RM35', B: 'RM40', C: 'RM45', D: 'RM50' },
          correctAnswer: 'B',
          explanation: 'Tepat! (3 × RM10 = RM30) + (2 × RM5 = RM10) = RM40.',
          learningStandard: 'SK 4.1 / SP 4.1.1',
        },
        {
          id: `t2-m-${Date.now()}-8`,
          year: 2,
          subject: 'Matematik',
          topic: topic || 'Operasi Asas',
          subtopic: 'Bahagi Sama Rata',
          difficulty: 'Sederhana',
          question: 'Cikgu Aiman membahagikan 18 batang pensel secara sama rata kepada 3 orang murid. Berapakah batang pensel yang diterima oleh setiap murid?',
          options: { A: '5 batang', B: '6 batang', C: '7 batang', D: '8 batang' },
          correctAnswer: 'B',
          explanation: 'Hebat! 18 ÷ 3 = 6 batang pensel bagi setiap murid.',
          learningStandard: 'SK 2.4 / SP 2.4.1',
        }
      );
    } else if (subject === 'Sains') {
      bank.push(
        {
          id: `t2-s-${Date.now()}-1`,
          year: 2,
          subject: 'Sains',
          topic: topic || 'Haiwan: Pembiakan & Kitar Hidup',
          subtopic: 'Kitar Hidup Rama-rama',
          difficulty: 'Mudah',
          question: 'Susun kitar hidup rama-rama mengikut urutan yang betul.',
          options: {
            A: 'Telur → Beluncas → Kepompong → Rama-rama',
            B: 'Telur → Kepompong → Beluncas → Rama-rama',
            C: 'Beluncas → Telur → Kepompong → Rama-rama',
            D: 'Kepompong → Telur → Beluncas → Rama-rama',
          },
          correctAnswer: 'A',
          explanation: 'Tahniah! Kitar hidup rama-rama bermula daripada Telur, kemudian menetas menjadi Beluncas (ulat), membentuk Kepompong, dan akhirnya menjadi Rama-rama dewasa.',
          learningStandard: 'SK 3.1 / SP 3.1.2',
        },
        {
          id: `t2-s-${Date.now()}-2`,
          year: 2,
          subject: 'Sains',
          topic: topic || 'Terang, Gelap & Bayang-bayang',
          subtopic: 'Pembentukan Bayang-bayang',
          difficulty: 'Mudah',
          question: 'Bayang-bayang terbentuk apabila cahaya daripada sumber cahaya _______ oleh objek legap.',
          options: { A: 'dipantulkan', B: 'dihalangi', C: 'dibiaskan', D: 'diteruskan' },
          correctAnswer: 'B',
          explanation: 'Bagus! Bayang-bayang terhasil apabila laluan cahaya dihalang sepenuhnya oleh objek legap.',
          learningStandard: 'SK 5.1 / SP 5.1.4',
        },
        {
          id: `t2-s-${Date.now()}-3`,
          year: 2,
          subject: 'Sains',
          topic: topic || 'Elektrik: Komponen Litar, Konduktor & Penebat',
          subtopic: 'Bahan Konduktor',
          difficulty: 'Sederhana',
          question: 'Antara objek berikut, yang manakah membolehkan mentol menyala apabila disambungkan dalam litar elektrik?',
          options: { A: 'Pembaris plastik', B: 'Klip kertas besi', C: 'Pemadam getah', D: 'Penyedut minuman kertas' },
          correctAnswer: 'B',
          explanation: 'Syabas! Klip kertas besi ialah konduktor elektrik yang membenarkan arus elektrik mengalir untuk menyalakan mentol.',
          learningStandard: 'SK 7.1 / SP 7.1.5',
        },
        {
          id: `t2-s-${Date.now()}-4`,
          year: 2,
          subject: 'Sains',
          topic: topic || 'Tumbuh-tumbuhan: Percambahan & Tumbesaran',
          subtopic: 'Keperluan Percambahan Biji Benih',
          difficulty: 'Mudah',
          question: 'Biji benih memerlukan air, udara dan _______ yang sesuai untuk bercambah.',
          options: { A: 'suhu / kepanasan', B: 'baja kimia', C: 'pasu seramik', D: 'cahaya bulan' },
          correctAnswer: 'A',
          explanation: 'Tepat sekali! Keperluan asas percambahan biji benih ialah air, udara dan suhu yang sesuai.',
          learningStandard: 'SK 4.1 / SP 4.1.1',
        },
        {
          id: `t2-s-${Date.now()}-5`,
          year: 2,
          subject: 'Sains',
          topic: topic || 'Campuran & Keterlarutan Bahan',
          subtopic: 'Keterlarutan Bahan',
          difficulty: 'Sederhana',
          question: 'Bahan manakah yang akan larut sepenuhnya apabila dikacau di dalam segelas air suam?',
          options: { A: 'Gula pasir', B: 'Pasir sungai', C: 'Beras', D: 'Serpihan kayu' },
          correctAnswer: 'A',
          explanation: 'Pintar! Gula pasir boleh larut sepenuhnya di dalam air membentuk larutan gula.',
          learningStandard: 'SK 8.1 / SP 8.1.3',
        }
      );
    } else if (subject === 'Bahasa Melayu') {
      bank.push(
        {
          id: `t2-bm-${Date.now()}-1`,
          year: 2,
          subject: 'Bahasa Melayu',
          topic: topic || 'Kata Tugas & Penjodoh Bilangan',
          subtopic: 'Penjodoh Bilangan',
          difficulty: 'Mudah',
          question: 'Ibu memotong sebiji tembikai lalu memberikan dua _______ tembikai kepada adik.',
          options: { A: 'potong', B: 'biji', C: 'utas', D: 'pucuk' },
          correctAnswer: 'A',
          explanation: 'Bagus! Penjodoh bilangan "potong" digunakan untuk benda yang telah dikerat atau dipotong.',
          learningStandard: 'SP 5.1.1 (iv)',
        },
        {
          id: `t2-bm-${Date.now()}-2`,
          year: 2,
          subject: 'Bahasa Melayu',
          topic: topic || 'Golongan Kata & Tatabahasa Asas',
          subtopic: 'Kata Ganti Nama Diri',
          difficulty: 'Mudah',
          question: '"_______ hendak pergi ke perpustakaan sekarang," kata Amir dan Danish kepada Cikgu Tan.',
          options: { A: 'Kami', B: 'Mereka', C: 'Beliau', D: 'Dia' },
          correctAnswer: 'A',
          explanation: 'Tepat! "Kami" digunakan untuk mewakili diri penutur dan temannya apabila bercakap dengan orang lain.',
          learningStandard: 'SP 5.1.1 (iii)',
        },
        {
          id: `t2-bm-${Date.now()}-3`,
          year: 2,
          subject: 'Bahasa Melayu',
          topic: topic || 'Imbuhan & Pembentukan Kata',
          subtopic: 'Kata Berimbuhan Awalan',
          difficulty: 'Sederhana',
          question: 'Pak Mat rajin _______ pokok bunga di halaman rumahnya pada setiap petang.',
          options: { A: 'menyiram', B: 'tersiram', C: 'disiram', D: 'siraman' },
          correctAnswer: 'A',
          explanation: 'Syabas! "Menyiram" ialah kata kerja aktif berimbuhan awalan meN- yang sesuai dengan ayat.',
          learningStandard: 'SP 5.2.1 (i)',
        },
        {
          id: `t2-bm-${Date.now()}-4`,
          year: 2,
          subject: 'Bahasa Melayu',
          topic: topic || 'Pemahaman Petikan & Peribahasa Mudah',
          subtopic: 'Simpulan Bahasa',
          difficulty: 'Mudah',
          question: 'Alia digelar _______ kerana suka membaca buku walau di mana-mana dia berada.',
          options: { A: 'ulat buku', B: 'kaki ayam', C: 'ringan tulang', D: 'panjang tangan' },
          correctAnswer: 'A',
          explanation: 'Hebat! Simpulan bahasa "ulat buku" bermaksud orang yang sangat gemar membaca buku.',
          learningStandard: 'SP 4.2.1 (i)',
        },
        {
          id: `t2-bm-${Date.now()}-5`,
          year: 2,
          subject: 'Bahasa Melayu',
          topic: topic || 'Struktur Ayat & Tanda Baca',
          subtopic: 'Ayat Tanya & Tanda Baca',
          difficulty: 'Mudah',
          question: 'Ayat manakah yang menggunakan tanda baca yang betul?',
          options: {
            A: 'Wah, cantiknya pemandangan di pulau ini!',
            B: 'Wah cantiknya pemandangan di pulau ini?',
            C: 'Wah. cantiknya pemandangan di pulau ini.',
            D: 'Wah! cantiknya pemandangan di pulau ini?',
          },
          correctAnswer: 'A',
          explanation: 'Pintar! Ayat seruan dimulakan dengan kata seru diikuti koma (Wah,) dan diakhiri dengan tanda seru (!).',
          learningStandard: 'SP 3.2.1 (i)',
        }
      );
    } else if (subject === 'Pendidikan Islam') {
      bank.push(
        {
          id: `t2-pi-${Date.now()}-1`,
          year: 2,
          subject: 'Pendidikan Islam',
          topic: topic || 'Ibadah (Wuduk, Bersuci & Solat Fardhu)',
          subtopic: 'Rukun Wuduk',
          difficulty: 'Mudah',
          question: 'Antara berikut, yang manakah merupakan rukun wuduk yang pertama?',
          options: { A: 'Niat wuduk', B: 'Membasuh tangan', C: 'Membasuh kaki', D: 'Menyapu telinga' },
          correctAnswer: 'A',
          explanation: 'Tahniah! Rukun wuduk yang pertama ialah niat ketika membasuh muka.',
          learningStandard: 'Bidang Ibadah KSSR Tahun 2',
        },
        {
          id: `t2-pi-${Date.now()}-2`,
          year: 2,
          subject: 'Pendidikan Islam',
          topic: topic || 'Akidah (Rukun Iman, Rukun Islam & Sifat Allah)',
          subtopic: 'Rukun Iman',
          difficulty: 'Mudah',
          question: 'Beriman kepada Malaikat merupakan Rukun Iman yang ke-',
          options: { A: 'Pertama', B: 'Kedua', C: 'Ketiga', D: 'Keempat' },
          correctAnswer: 'B',
          explanation: 'Bagus! Rukun Iman yang kedua ialah Percaya kepada Malaikat-malaikat Allah.',
          learningStandard: 'Bidang Akidah KSSR Tahun 2',
        },
        {
          id: `t2-pi-${Date.now()}-3`,
          year: 2,
          subject: 'Pendidikan Islam',
          topic: topic || 'Sirah & Akhlak (Kelahiran Nabi Muhammad SAW & Adab Harian)',
          subtopic: 'Adab Makan',
          difficulty: 'Mudah',
          question: 'Sebelum memulakan makan, kita disunatkan untuk membaca _______ dan menggunakan tangan kanan.',
          options: { A: 'Basmalah & Doa makan', B: 'Surah Al-Mulk', C: 'Lagu', D: 'Bercakap kuat' },
          correctAnswer: 'A',
          explanation: 'Syabas! Sunnah Rasulullah SAW mendidik kita membaca Bismillah, berdoa dan menggunakan tangan kanan ketika makan.',
          learningStandard: 'Bidang Akhlak Islamiah KSSR Tahun 2',
        },
        {
          id: `t2-pi-${Date.now()}-4`,
          year: 2,
          subject: 'Pendidikan Islam',
          topic: topic || 'Ibadah (Wuduk, Bersuci & Solat Fardhu)',
          subtopic: 'Bilangan Rakaat Solat Fardhu',
          difficulty: 'Mudah',
          question: 'Berapakah bilangan rakaat bagi solat fardhu Maghrib?',
          options: { A: '2 rakaat', B: '3 rakaat', C: '4 rakaat', D: '1 rakaat' },
          correctAnswer: 'B',
          explanation: 'Hebat! Solat fardhu Maghrib mengandungi 3 rakaat.',
          learningStandard: 'Bidang Ibadah Solat KSSR Tahun 2',
        },
        {
          id: `t2-pi-${Date.now()}-5`,
          year: 2,
          subject: 'Pendidikan Islam',
          topic: topic || 'Pelajaran Jawi (Suku Kata Terbuka, Tertutup & Diftong)',
          subtopic: 'Ejaan Jawi Asas',
          difficulty: 'Sederhana',
          question: 'Pilih perkataan Jawi yang betul bagi "Buku":',
          options: { A: 'بوکو', B: 'باکو', C: 'بيکو', D: 'بوکي' },
          correctAnswer: 'A',
          explanation: 'Pintar! Perkataan "Buku" dalam tulisan Jawi dieja بو (Bu) + کو (Ku) = بوکو.',
          learningStandard: 'Bidang Jawi KSSR Tahun 2',
        }
      );
    } else {
      // Year 2 English (CEFR A1)
      bank.push(
        {
          id: `t2-e-${Date.now()}-1`,
          year: 2,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Vocabulary: Animals & Pets (CEFR A1)',
          subtopic: 'Classroom Objects',
          difficulty: 'Mudah',
          question: 'Which object do you use to draw straight lines in your exercise book?',
          options: { A: 'A sharpener', B: 'A ruler', C: 'A crayon', D: 'An eraser' },
          correctAnswer: 'B',
          explanation: 'Well done! A ruler helps us draw neat and straight lines on our paper.',
          learningStandard: 'CEFR A1 Vocabulary - Classroom Objects',
        },
        {
          id: `t2-e-${Date.now()}-2`,
          year: 2,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Prepositions of Place (in, on, under, next to)',
          subtopic: 'Prepositions',
          difficulty: 'Mudah',
          question: 'The apples are _______ the red fruit basket.',
          options: { A: 'in', B: 'under', C: 'on top', D: 'between' },
          correctAnswer: 'A',
          explanation: 'Great job! We use "in" because the apples are inside the basket.',
          learningStandard: 'CEFR A1 Grammar - Preposition of place',
        },
        {
          id: `t2-e-${Date.now()}-3`,
          year: 2,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Grammar: Simple Present Tense & Pronouns (He/She/It)',
          subtopic: 'Present Simple Verb Agreement',
          difficulty: 'Sederhana',
          question: 'My brother Adam _______ playing badminton every Sunday morning.',
          options: { A: 'like', B: 'likes', C: 'liking', D: 'liked' },
          correctAnswer: 'B',
          explanation: 'Spot on! For singular third-person subjects (he / Adam), we add -s to the verb: "likes".',
          learningStandard: 'CEFR A1 Grammar - Present Simple',
        },
        {
          id: `t2-e-${Date.now()}-4`,
          year: 2,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Basic Phonics & Spelling (Letter sounds & rhymes)',
          subtopic: 'Phonics Rhyme',
          difficulty: 'Mudah',
          question: 'Choose the word that rhymes with "frog" and is a piece of wood.',
          options: { A: 'Dog', B: 'Log', C: 'Cat', D: 'Pig' },
          correctAnswer: 'B',
          explanation: 'Brilliant! "Log" rhymes with "frog" and both share the -og sound ending.',
          learningStandard: 'CEFR A1 Phonics - Rhyming words',
        },
        {
          id: `t2-e-${Date.now()}-5`,
          year: 2,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Vocabulary: Animals & Pets (CEFR A1)',
          subtopic: 'Animal Habitats',
          difficulty: 'Mudah',
          question: 'Which of these animals can swim underwater and has colourful scales?',
          options: { A: 'Rabbit', B: 'Fish', C: 'Horse', D: 'Hamster' },
          correctAnswer: 'B',
          explanation: 'Super! A fish lives in water, breathes with gills and has shiny scales.',
          learningStandard: 'CEFR A1 Vocabulary - Animals',
        }
      );
    }
  } else {
    // YEAR 4
    if (subject === 'Matematik') {
      bank.push(
        {
          id: `t4-m-${Date.now()}-1`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Nombor hingga 100,000 (Nilai digit & Bundar)',
          subtopic: 'Cerakin Nombor',
          difficulty: 'Mudah',
          question: 'Cerakinkan 54,209 mengikut nilai digit.',
          options: {
            A: '50,000 + 4,000 + 200 + 9',
            B: '50,000 + 400 + 20 + 9',
            C: '54,000 + 200 + 90',
            D: '50,000 + 4,000 + 20 + 9',
          },
          correctAnswer: 'A',
          explanation: 'Syabas! 54,209 terdiri daripada 50,000 + 4,000 + 200 + 9.',
          learningStandard: 'SK 1.1 / SP 1.1.2',
        },
        {
          id: `t4-m-${Date.now()}-2`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Pecahan, Perpuluhan & Peratus',
          subtopic: 'Peratusan',
          difficulty: 'Sederhana',
          question: 'Tukarkan 3/4 kepada peratusan.',
          options: { A: '25%', B: '50%', C: '75%', D: '80%' },
          correctAnswer: 'C',
          explanation: 'Tepat sekali! 3/4 × 100% = 300% ÷ 4 = 75%.',
          learningStandard: 'SK 2.3 / SP 2.3.1',
        },
        {
          id: `t4-m-${Date.now()}-3`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Wang hingga RM100,000 & Pengurusan Kewangan',
          subtopic: 'Penyelesaian Masalah KBAT',
          difficulty: 'KBAT (Aras Rendah-Sederhana)',
          question: 'Sebuah syarikat memperuntukkan RM80,000 untuk 5 buah sekolah secara sama rata. Berapakah jumlah peruntukan yang diterima oleh 3 buah sekolah?',
          options: { A: 'RM16,000', B: 'RM32,000', C: 'RM48,000', D: 'RM64,000' },
          correctAnswer: 'C',
          explanation: 'Hebat! Setiap sekolah menerima RM80,000 ÷ 5 = RM16,000. Untuk 3 buah sekolah: 3 × RM16,000 = RM48,000.',
          learningStandard: 'SK 3.2 / SP 3.2.1 (KBAT)',
        },
        {
          id: `t4-m-${Date.now()}-4`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Masa dan Waktu (Sistem 24 jam & Dekad/Abad)',
          subtopic: 'Sistem 24 Jam',
          difficulty: 'Mudah',
          question: 'Tukarkan pukul 8:45 malam kepada sistem 24 jam.',
          options: { A: 'Jam 0845', B: 'Jam 1845', C: 'Jam 2045', D: 'Jam 2245' },
          correctAnswer: 'C',
          explanation: 'Bagus! Untuk waktu malam (p.m.), tambah 12 kepada angka jam: 8 + 12 = 20. Jadi jawapannya Jam 2045.',
          learningStandard: 'SK 4.1 / SP 4.1.2',
        },
        {
          id: `t4-m-${Date.now()}-5`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Koordinat Suku Pertama, Nisbah & Kadaran',
          subtopic: 'Koordinat Sukuan Pertama',
          difficulty: 'Sederhana',
          question: 'Titik P berada 4 unit mengufuk ke kanan dari asalan (0,0) dan 3 unit mencancang ke atas. Apakah koordinat bagi titik P?',
          options: { A: '(3, 4)', B: '(4, 3)', C: '(4, 0)', D: '(0, 3)' },
          correctAnswer: 'B',
          explanation: 'Pintar! Koordinat ditulis mengikut urutan (x, y) iaitu jarak mengufuk diikuti jarak mencancang: (4, 3).',
          learningStandard: 'SK 7.1 / SP 7.1.1',
        },
        {
          id: `t4-m-${Date.now()}-6`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Panjang, Jisim & Isi Padu Cecair',
          subtopic: 'Penukaran Unit Jisim',
          difficulty: 'Mudah',
          question: 'Tukarkan 3.25 kg kepada gram (g).',
          options: { A: '325 g', B: '3,250 g', C: '32,500 g', D: '32.5 g' },
          correctAnswer: 'B',
          explanation: 'Bagus! 1 kg = 1,000 g. Maka 3.25 × 1,000 = 3,250 g.',
          learningStandard: 'SK 5.2 / SP 5.2.1',
        },
        {
          id: `t4-m-${Date.now()}-7`,
          year: 4,
          subject: 'Matematik',
          topic: topic || 'Koordinat Suku Pertama, Nisbah & Kadaran',
          subtopic: 'Nisbah Termudah',
          difficulty: 'Sederhana',
          question: 'Terdapat 8 biji bola merah dan 12 biji bola biru. Nyatakan nisbah bilangan bola merah kepada bilangan bola biru dalam bentuk termudah.',
          options: { A: '2 : 3', B: '3 : 2', C: '4 : 6', D: '1 : 2' },
          correctAnswer: 'A',
          explanation: 'Syabas! 8 : 12 dibahagikan dengan 4 bagi kedua-dua bahagian menghasilkan nisbah termudah 2 : 3.',
          learningStandard: 'SK 7.2 / SP 7.2.1',
        }
      );
    } else if (subject === 'Sains') {
      bank.push(
        {
          id: `t4-s-${Date.now()}-1`,
          year: 4,
          subject: 'Sains',
          topic: topic || 'Manusia: Organ Pernafasan, Perkumuhan & Rangsangan',
          subtopic: 'Laluan Udara Semasa Menarik Nafas',
          difficulty: 'Mudah',
          question: 'Susun laluan udara semasa manusia menarik nafas mengikut urutan yang betul.',
          options: {
            A: 'Hidung → Trakea → Peparu',
            B: 'Peparu → Trakea → Hidung',
            C: 'Hidung → Peparu → Trakea',
            D: 'Mulut → Peparu → Trakea',
          },
          correctAnswer: 'A',
          explanation: 'Bagus! Semasa menarik nafas, udara beroksigen masuk melalui Hidung, melalui Trakea dan sampai ke Peparu.',
          learningStandard: 'SK 2.1 / SP 2.1.2',
        },
        {
          id: `t4-s-${Date.now()}-2`,
          year: 4,
          subject: 'Sains',
          topic: topic || 'Sifat Cahaya: Pantulan, Pembiasan & Pergerakan Lurus',
          subtopic: 'Pembiasan Cahaya',
          difficulty: 'Sederhana',
          question: 'Batang straw kelihatan bengkok apabila diletakkan di dalam segelas air kerana fenomena:',
          options: { A: 'Pantulan cahaya', B: 'Pembiasan cahaya', C: 'Penyerapan cahaya', D: 'Pergerakan lurus cahaya' },
          correctAnswer: 'B',
          explanation: 'Syabas! Pembiasan cahaya berlaku apabila cahaya merambat melalui dua medium yang berbeza ketumpatan (udara ke air).',
          learningStandard: 'SK 5.2 / SP 5.2.1',
        },
        {
          id: `t4-s-${Date.now()}-3`,
          year: 4,
          subject: 'Sains',
          topic: topic || 'Haiwan: Organ Pernafasan & Pengelasan Vertebrata',
          subtopic: 'Haiwan Bernafas Melalui Insang',
          difficulty: 'Mudah',
          question: 'Haiwan manakah yang menggunakan insang untuk bernafas di dalam air?',
          options: { A: 'Ikan kembung', B: 'Kucing', C: 'Cacing tanah', D: 'Belalang' },
          correctAnswer: 'A',
          explanation: 'Tepat sekali! Ikan kembung menggunakan insang untuk menyerap oksigen terlarut dalam air.',
          learningStandard: 'SK 3.1 / SP 3.1.1',
        },
        {
          id: `t4-s-${Date.now()}-4`,
          year: 4,
          subject: 'Sains',
          topic: topic || 'Bumi: Graviti & Putaran Bumi (Siang dan Malam)',
          subtopic: 'Kesan Putaran Bumi',
          difficulty: 'Sederhana',
          question: 'Kejadian siang dan malam berlaku disebabkan oleh:',
          options: {
            A: 'Putaran Bumi pada paksinya dari barat ke timur',
            B: 'Peredaran Bumi mengelilingi Matahari',
            C: 'Peredaran Bulan mengelilingi Bumi',
            D: 'Putaran Matahari pada paksinya',
          },
          correctAnswer: 'A',
          explanation: 'Hebat! Putaran Bumi pada paksinya menghasilkan fenomena kejadian siang dan malam bagi bahagian yang menghadap dan membelakangi Matahari.',
          learningStandard: 'SK 9.2 / SP 9.2.2',
        },
        {
          id: `t4-s-${Date.now()}-5`,
          year: 4,
          subject: 'Sains',
          topic: topic || 'Sifat Bahan & Mesin Ringkas (Tuas)',
          subtopic: 'Tuas Kelas Pertama',
          difficulty: 'KBAT (Aras Sederhana)',
          question: 'Pada sebatang gunting, bahagian manakah yang bertindak sebagai Fulkrum?',
          options: {
            A: 'Skru atau sendi di bahagian tengah',
            B: 'Mata gunting yang memotong kertas',
            C: 'Pemegang tempat jari menekan',
            D: 'Kertas yang hendak dipotong',
          },
          correctAnswer: 'A',
          explanation: 'Pintar! Fulkrum ialah titik sokongan atau paksi tetap. Bagi gunting, skru tengah bertindak sebagai fulkrum.',
          learningStandard: 'SK 10.1 / SP 10.1.2',
        }
      );
    } else if (subject === 'Bahasa Melayu') {
      bank.push(
        {
          id: `t4-bm-${Date.now()}-1`,
          year: 4,
          subject: 'Bahasa Melayu',
          topic: topic || 'Morfologi & Golongan Kata Lanjutan',
          subtopic: 'Kata Majmuk Mantap',
          difficulty: 'Mudah',
          question: 'Antara berikut, perkataan manakah yang tergolong dalam kata majmuk yang telah mantap ejaannya?',
          options: { A: 'Tanggungjawab', B: 'Kereta api', C: 'Guru besar', D: 'Kemas kini' },
          correctAnswer: 'A',
          explanation: 'Bagus! "Tanggungjawab" ialah salah satu daripada kata majmuk mantap yang dieja secara bercantum.',
          learningStandard: 'SP 5.2.2 (i)',
        },
        {
          id: `t4-bm-${Date.now()}-2`,
          year: 4,
          subject: 'Bahasa Melayu',
          topic: topic || 'Kata Tugas & Sistem Sintaksis',
          subtopic: 'Kata Hubung Pancangan',
          difficulty: 'Sederhana',
          question: 'Danish tetap meneruskan lariannya _______ kakinya berasa agak sakit.',
          options: { A: 'walaupun', B: 'kerana', C: 'supaya', D: 'lalu' },
          correctAnswer: 'A',
          explanation: 'Tepat sekali! Kata hubung pancangan "walaupun" menunjukkan pertentangan keadaan.',
          learningStandard: 'SP 5.1.4 (i)',
        },
        {
          id: `t4-bm-${Date.now()}-3`,
          year: 4,
          subject: 'Bahasa Melayu',
          topic: topic || 'Imbuhan Lanjutan, Kata Majmuk & Kata Ganda',
          subtopic: 'Kata Ganda Penuh Berimbuhan',
          difficulty: 'Sederhana',
          question: 'Penduduk kampung bekerjasama membersihkan balai raya secara _______ pada hujung minggu.',
          options: { A: 'bergotong-royong', B: 'kering-kontang', C: 'batu-batan', D: 'kuih-muih' },
          correctAnswer: 'A',
          explanation: 'Syabas! "Bergotong-royong" merupakan kata ganda berimbuhan yang menggambarkan amalan bekerjasama.',
          learningStandard: 'SP 5.2.3 (i)',
        },
        {
          id: `t4-bm-${Date.now()}-4`,
          year: 4,
          subject: 'Bahasa Melayu',
          topic: topic || 'Pemahaman Prosa, Puisi & Seni Bahasa',
          subtopic: 'Peribahasa',
          difficulty: 'KBAT (Aras Rendah-Sederhana)',
          question: 'Maksud peribahasa "Bagai aur dengan tebing" ialah:',
          options: {
            A: 'Masyarakat yang sentiasa tolong-menolong dan saling bergantung',
            B: 'Orang yang cepat marah apabila ditegur',
            C: 'Seseorang yang sombong dan meninggi diri',
            D: 'Usaha yang dilakukan separuh jalan',
          },
          correctAnswer: 'A',
          explanation: 'Hebat! Peribahasa "Bagai aur dengan tebing" bermaksud hubungan yang erat dan tolong-menolong.',
          learningStandard: 'SP 4.2.2 (i)',
        },
        {
          id: `t4-bm-${Date.now()}-5`,
          year: 4,
          subject: 'Bahasa Melayu',
          topic: topic || 'Bina Ayat, Sintaksis & Sistem Ejaan',
          subtopic: 'Ayat Pasif',
          difficulty: 'Sederhana',
          question: 'Pilih ayat pasif diri ketiga yang gramatis:',
          options: {
            A: 'Buku cerita itu dibaca oleh Haziq di dalam bilik bacaan.',
            B: 'Buku cerita itu saya dibaca di dalam bilik bacaan.',
            C: 'Haziq membaca buku cerita itu di dalam bilik bacaan.',
            D: 'Buku cerita dibaca kami di dalam bilik bacaan.',
          },
          correctAnswer: 'A',
          explanation: 'Pintar! Ayat pasif diri ketiga menggunakan awalan di- berserta sendi nama oleh ("dibaca oleh Haziq").',
          learningStandard: 'SP 5.3.2 (i)',
        }
      );
    } else if (subject === 'Pendidikan Islam') {
      bank.push(
        {
          id: `t4-pi-${Date.now()}-1`,
          year: 4,
          subject: 'Pendidikan Islam',
          topic: topic || 'Al-Quran & Tajwid (Hukum Nun Sakinah & Surah Pilihan)',
          subtopic: 'Hukum Izhar Halqi',
          difficulty: 'Sederhana',
          question: 'Huruf-huruf Izhar Halqi terdiri daripada 6 huruf iaitu:',
          options: {
            A: 'ء ، هـ ، ع ، غ ، ح ، خ',
            B: 'ي ، ر ، م ، ل ، و ، ن',
            C: 'ق ، ط ، ب ، ج ، د',
            D: 'ب ، ت ، ث ، ج ، ح',
          },
          correctAnswer: 'A',
          explanation: 'Tahniah! Enam huruf Izhar Halqi ialah Hamzah, Ha, Ain, Ghain, Ha, dan Kha.',
          learningStandard: 'Bidang Al-Quran & Tajwid KSSR Tahun 4',
        },
        {
          id: `t4-pi-${Date.now()}-2`,
          year: 4,
          subject: 'Pendidikan Islam',
          topic: topic || 'Ibadah (Mandi Wajib, Solat Jumaat & Batal Solat)',
          subtopic: 'Rukun Mandi Wajib',
          difficulty: 'Mudah',
          question: 'Berikut merupakan rukun mandi wajib KECUALI:',
          options: {
            A: 'Memakai pakaian baharu yang mahal',
            B: 'Niat mandi wajib mengangkat hadas besar',
            C: 'Menghilangkan najis pada badan',
            D: 'Meratakan air ke seluruh anggota badan, kulit dan rambut',
          },
          correctAnswer: 'A',
          explanation: 'Bagus! Memakai pakaian baharu bukan rukun mandi wajib. Rukun mandi wajib ialah niat, menghilangkan najis, dan meratakan air ke seluruh badan.',
          learningStandard: 'Bidang Ibadah KSSR Tahun 4',
        },
        {
          id: `t4-pi-${Date.now()}-3`,
          year: 4,
          subject: 'Pendidikan Islam',
          topic: topic || 'Sirah & Akhlak (Peristiwa Hijrah & Adab Kemasyarakatan)',
          subtopic: 'Peristiwa Hijrah Rasulullah SAW',
          difficulty: 'Mudah',
          question: 'Nabi Muhammad SAW berhijrah dari kota Makkah Al-Mukarramah ke kota:',
          options: { A: 'Madinah Al-Munawwarah', B: 'Taif', C: 'Mesir', D: 'Baitulmaqdis' },
          correctAnswer: 'A',
          explanation: 'Syabas! Peristiwa Hijrah agung berlaku dari Makkah ke Madinah Al-Munawwarah (dahulunya Yathrib).',
          learningStandard: 'Bidang Sirah KSSR Tahun 4',
        },
        {
          id: `t4-pi-${Date.now()}-4`,
          year: 4,
          subject: 'Pendidikan Islam',
          topic: topic || 'Akidah (Hari Kiamat & Sifat Al-Adl serta Al-Alim)',
          subtopic: 'Sifat Asmaul Husna Al-Adl',
          difficulty: 'Sederhana',
          question: 'Nama Allah "Al-Adl" (العدل) bermaksud Allah Maha:',
          options: { A: 'Adil', B: 'Mengetahui', C: 'Melihat', D: 'Mendengar' },
          correctAnswer: 'A',
          explanation: 'Hebat! Al-Adl bererti Allah Maha Adil dalam setiap ketetapan dan hukum-Nya.',
          learningStandard: 'Bidang Akidah KSSR Tahun 4',
        },
        {
          id: `t4-pi-${Date.now()}-5`,
          year: 4,
          subject: 'Pendidikan Islam',
          topic: topic || 'Pelajaran Jawi (Kata Pinjaman, Imbuhan & Ayat Tradisi)',
          subtopic: 'Kata Pinjaman Bahasa Inggeris dalam Jawi',
          difficulty: 'Sederhana',
          question: 'Pilih ejaan Jawi yang betul bagi kata pinjaman "Sains":',
          options: { A: 'ساءينس', B: 'ساينس', C: 'سينس', D: 'سءينس' },
          correctAnswer: 'A',
          explanation: 'Pintar! Perkataan "Sains" dieja ساءينس dengan huruf hamzah di atas alif mengikut kaedah DBP/KPM.',
          learningStandard: 'Bidang Jawi KSSR Tahun 4',
        }
      );
    } else {
      // Year 4 English (CEFR A2)
      bank.push(
        {
          id: `t4-e-${Date.now()}-1`,
          year: 4,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Past Simple Tense (Regular -ed & Irregular verbs)',
          subtopic: 'Irregular Verbs',
          difficulty: 'Mudah',
          question: 'Last weekend, Imran and his sister _______ delicious curry puffs for their picnic.',
          options: { A: 'make', B: 'makes', C: 'made', D: 'making' },
          correctAnswer: 'C',
          explanation: 'Well done! "Made" is the correct past simple form of the irregular verb "make".',
          learningStandard: 'CEFR A2 Grammar - Past Simple',
        },
        {
          id: `t4-e-${Date.now()}-2`,
          year: 4,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Comparatives & Superlatives (Comparing adjectives)',
          subtopic: 'Comparative Adjectives',
          difficulty: 'Sederhana',
          question: 'An aeroplane travels _______ than an express train.',
          options: { A: 'fast', B: 'faster', C: 'fastest', D: 'more fast' },
          correctAnswer: 'B',
          explanation: 'Super! When comparing two things with "than", we use the comparative form "faster".',
          learningStandard: 'CEFR A2 Grammar - Comparatives',
        },
        {
          id: `t4-e-${Date.now()}-3`,
          year: 4,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Modals (must, mustn\'t, should, can)',
          subtopic: 'Modal Verbs of Advice',
          difficulty: 'Mudah',
          question: 'You look very tired after running under the sun. You _______ drink plenty of water.',
          options: { A: 'should', B: 'mustn\'t', C: 'can\'t', D: 'shouldn\'t' },
          correctAnswer: 'A',
          explanation: 'Spot on! "Should" is used to give positive and caring advice.',
          learningStandard: 'CEFR A2 Grammar - Modals for Advice',
        },
        {
          id: `t4-e-${Date.now()}-4`,
          year: 4,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Reading Comprehension (Short passage with inference)',
          subtopic: 'Reading for Detail',
          difficulty: 'Sederhana',
          stimulus: 'The Malayan tapir is an endangered animal native to Southeast Asia. It has a striking black-and-white coat which helps camouflage it in the dark rainforest undergrowth.',
          question: 'How does the Malayan tapir\'s black-and-white coat help it survive in the jungle?',
          options: {
            A: 'It helps it run faster from predators',
            B: 'It camouflages it in the dark rainforest',
            C: 'It keeps it cool in deep rivers',
            D: 'It warns other animals to stay away',
          },
          correctAnswer: 'B',
          explanation: 'Terrific reading! The short text clearly mentions that the pattern provides camouflage in the rainforest.',
          learningStandard: 'CEFR A2 Reading - Specific detail',
        },
        {
          id: `t4-e-${Date.now()}-5`,
          year: 4,
          subject: 'Bahasa Inggeris',
          topic: topic || 'Connectors (because, so, although, but, and)',
          subtopic: 'Contrast Connectors',
          difficulty: 'Sederhana',
          question: 'Liyana practiced piano diligently, _______ she still felt nervous before the concert.',
          options: { A: 'so', B: 'but', C: 'because', D: 'and' },
          correctAnswer: 'B',
          explanation: 'Excellent! "But" introduces a contrasting feeling.',
          learningStandard: 'CEFR A2 Grammar - Connectors of Contrast',
        }
      );
    }
  }

  // Slice up to requested count, cycling if needed
  let selected: any[] = [];
  while (selected.length < numQuestions && bank.length > 0) {
    for (const item of bank) {
      if (selected.length >= numQuestions) break;
      selected.push({
        ...item,
        id: `${item.id}-${selected.length + 1}`,
      });
    }
  }

  return {
    year: Number(year),
    subject,
    topic,
    questions: selected.slice(0, numQuestions),
  };
}

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
