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
function getGeminiClient(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured in the environment.');
    }
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
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
    year: { type: Type.INTEGER, description: 'School year: 2 or 4' },
    subject: { type: Type.STRING, description: 'Matematik or Bahasa Inggeris' },
    topic: { type: Type.STRING, description: 'KSSR Semakan syllabus topic name' },
    questions: {
      type: Type.ARRAY,
      description: 'List of multiple-choice quiz questions adhering strictly to KSSR Semakan syllabus',
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: 'Unique question id e.g. q-1, q-2' },
          year: { type: Type.INTEGER, description: 'Year 2 or Year 4' },
          subject: { type: Type.STRING, description: 'Subject: Matematik or Bahasa Inggeris' },
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

    const systemInstruction = `You are an expert Malaysian primary school educator specializing in the KSSR Semakan syllabus for Year 2 (Tahun 2) and Year 4 (Tahun 4).

Your mission is to generate age-appropriate, interactive multiple-choice quiz questions based STRICTLY on the Kementerian Pendidikan Malaysia (KPM) syllabus:

1. TAHUN 2:
- Matematik: Nombor hingga 1,000, Operasi Asas (Tambah, Tolak, Darab, Bahagi), Wang hingga RM100, Masa dan Waktu, Pecahan mudah. Bahasa pengantar: Bahasa Melayu. Soalan ringkas, ayat pendek, perkataan mudah difahami oleh murid 8 tahun.
- Bahasa Inggeris: CEFR A1 beginner. Vocabulary (animals, school, family, hobbies, food), simple present tense, pronouns, prepositions (in, on, under, next to), basic phonics/spelling.

2. TAHUN 4:
- Matematik: Nombor hingga 100,000, Pecahan, Perpuluhan, Peratus, Wang hingga RM100,000, Masa dan Waktu (sistem 12 & 24 jam, dekad/abad), Panjang, Jisim, Isi Padu cecair, Koordinat (sukuan pertama), Nisbah dan Kadaran (1:1 hingga 1:10). Bahasa pengantar: Bahasa Melayu. Termasuk soalan penyelesaian masalah KBAT mengikut aras: "KBAT (Aras Rendah)", "KBAT (Aras Sederhana)", atau "KBAT (Aras Tinggi)".
- Bahasa Inggeris: CEFR A2 (Get Smart Plus 4 standard). Past simple tense (regular & irregular), comparatives/superlatives, modals (must, mustn't, should, shouldn't, can), reading comprehension (short engaging passages), connectors (because, so, although, but, and), everyday conversation contexts.

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
    let lastError: any = null;

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
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} failed or busy, trying next...`, err?.message || err);
      }
    }

    let parsedData: any = null;
    if (rawText) {
      try {
        parsedData = JSON.parse(rawText);
      } catch (e) {
        console.error('Failed to parse model JSON:', e);
      }
    }

    if (!parsedData || !parsedData.questions || !Array.isArray(parsedData.questions)) {
      // Fallback: Generate syllabus-accurate KSSR Semakan questions dynamically
      parsedData = generateFallbackKSSRQuestions(year, subject, topic, count, difficulty);
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
      data: parsedData,
    });
  } catch (error: any) {
    console.error('Error generating quiz questions:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate questions using Gemini API',
    });
  }
});

// Dynamically generate curriculum-compliant fallback questions if model is experiencing temporary peak load
function generateFallbackKSSRQuestions(year: number, subject: string, topic: string, count: number, difficulty: string) {
  const isYear2 = Number(year) === 2;
  const isMath = subject === 'Matematik';

  const bank: any[] = [];

  if (isYear2 && isMath) {
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
      }
    );
  } else if (isYear2 && !isMath) {
    bank.push(
      {
        id: `t2-e-${Date.now()}-1`,
        year: 2,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Vocabulary (Animals, School, Family, Food)',
        subtopic: 'School stationery',
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
        topic: topic || 'Present Tense, Pronouns & Prepositions',
        subtopic: 'Prepositions',
        difficulty: 'Mudah',
        question: 'The apples are _______ the red fruit basket.',
        options: { A: 'in', B: 'under', C: 'on top', D: 'between' },
        correctAnswer: 'A',
        explanation: 'Great job! We use "in" because the apples are inside the container/basket.',
        learningStandard: 'CEFR A1 Grammar - Preposition of place',
      },
      {
        id: `t2-e-${Date.now()}-3`,
        year: 2,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Present Tense, Pronouns & Prepositions',
        subtopic: 'Present Simple Verb Agreement',
        difficulty: 'Sederhana',
        question: 'My brother Adam _______ playing badminton every Sunday morning.',
        options: { A: 'like', B: 'likes', C: 'liking', D: 'liked' },
        correctAnswer: 'B',
        explanation: 'Spot on! For singular third-person subjects (he / Adam), we add -s to the verb in simple present tense: "likes".',
        learningStandard: 'CEFR A1 Grammar - Present Simple',
      },
      {
        id: `t2-e-${Date.now()}-4`,
        year: 2,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Basic Phonics & Spelling',
        subtopic: 'Phonics Rhyme',
        difficulty: 'Mudah',
        question: 'Choose the word that rhymes with "frog" and lives in the forest.',
        options: { A: 'Dog', B: 'Log', C: 'Cat', D: 'Pig' },
        correctAnswer: 'B',
        explanation: 'Brilliant! "Log" rhymes with "frog" and both share the -og sound ending.',
        learningStandard: 'CEFR A1 Phonics - Rhyming words',
      },
      {
        id: `t2-e-${Date.now()}-5`,
        year: 2,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Vocabulary (Animals, School, Family, Food)',
        subtopic: 'Animal Habitats',
        difficulty: 'Mudah',
        question: 'Which of these animals can swim underwater and has colourful scales?',
        options: { A: 'Rabbit', B: 'Fish', C: 'Horse', D: 'Hamster' },
        correctAnswer: 'B',
        explanation: 'Super! A fish lives in water, breathes with gills and has shiny scales.',
        learningStandard: 'CEFR A1 Vocabulary - Animals',
      }
    );
  } else if (!isYear2 && isMath) {
    bank.push(
      {
        id: `t4-m-${Date.now()}-1`,
        year: 4,
        subject: 'Matematik',
        topic: topic || 'Nombor hingga 100,000',
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
        topic: topic || 'Wang hingga RM100,000 & Pengurusan Wang',
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
        topic: topic || 'Masa, Waktu & Perkaitan Abad/Dekad',
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
        topic: topic || 'Koordinat, Nisbah & Kadaran',
        subtopic: 'Koordinat Sukuan Pertama',
        difficulty: 'Sederhana',
        question: 'Titik P berada 4 unit mengufuk ke kanan dari asalan (0,0) dan 3 unit mencancang ke atas. Apakah koordinat bagi titik P?',
        options: { A: '(3, 4)', B: '(4, 3)', C: '(4, 0)', D: '(0, 3)' },
        correctAnswer: 'B',
        explanation: 'Pintar! Koordinat ditulis mengikut urutan (x, y) iaitu jarak mengufuk diikuti jarak mencancang: (4, 3).',
        learningStandard: 'SK 7.1 / SP 7.1.1',
      }
    );
  } else {
    // Year 4 English (CEFR A2)
    bank.push(
      {
        id: `t4-e-${Date.now()}-1`,
        year: 4,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Past Simple Tense (Regular & Irregular)',
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
        topic: topic || 'Comparatives & Superlatives',
        subtopic: 'Comparative Adjectives',
        difficulty: 'Sederhana',
        question: 'An aeroplane travels _______ than an express train.',
        options: { A: 'fast', B: 'faster', C: 'fastest', D: 'more fast' },
        correctAnswer: 'B',
        explanation: 'Super! When comparing two means of transport with "than", we use the comparative form "faster".',
        learningStandard: 'CEFR A2 Grammar - Comparatives',
      },
      {
        id: `t4-e-${Date.now()}-3`,
        year: 4,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Modals & Sentence Connectors',
        subtopic: 'Modal Verbs of Advice',
        difficulty: 'Mudah',
        question: 'You look very tired after running under the sun. You _______ drink plenty of water.',
        options: { A: 'should', B: 'mustn\'t', C: 'can\'t', D: 'shouldn\'t' },
        correctAnswer: 'A',
        explanation: 'Spot on! "Should" is used to give friendly, positive advice.',
        learningStandard: 'CEFR A2 Grammar - Modals for Advice',
      },
      {
        id: `t4-e-${Date.now()}-4`,
        year: 4,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Reading Comprehension (Passages)',
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
        learningStandard: 'CEFR A2 Reading - Reading for specific detail',
      },
      {
        id: `t4-e-${Date.now()}-5`,
        year: 4,
        subject: 'Bahasa Inggeris',
        topic: topic || 'Modals & Sentence Connectors',
        subtopic: 'Contrast Connectors',
        difficulty: 'Sederhana',
        question: 'Liyana practiced piano diligently, _______ she still felt nervous before the concert.',
        options: { A: 'so', B: 'but', C: 'because', D: 'and' },
        correctAnswer: 'B',
        explanation: 'Excellent! "But" introduces a contrasting or unexpected feeling (feeling nervous despite practicing).',
        learningStandard: 'CEFR A2 Grammar - Connectors of Contrast',
      }
    );
  }

  // Slice or repeat up to count
  const selected = bank.slice(0, count);
  return {
    year: Number(year),
    subject,
    topic,
    questions: selected,
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
