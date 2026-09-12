import React, { useState } from 'react';
import { YearLevel, Subject, QuizQuestion } from '../types';
import { Sparkles, Loader2, Play, Code, CheckCircle2, AlertCircle, BookOpen } from 'lucide-react';

interface AIGeneratorViewProps {
  onLoadQuestionsIntoQuiz: (questions: QuizQuestion[]) => void;
  onOpenSchemaWithQuestions: (questions: QuizQuestion[]) => void;
}

const SYLLABUS_TOPICS_BY_LEVEL: Record<string, string[]> = {
  '2-Matematik': [
    'Nombor hingga 1,000 (Nilai tempat & Tertib)',
    'Operasi Asas (Tambah & Tolak)',
    'Operasi Asas (Darab & Bahagi Asas)',
    'Wang hingga RM100 (Kertas & Syiling)',
    'Masa dan Waktu (Muka jam analog & digital)',
    'Pecahan Mudah (Satu perdua & Satu perempat)',
  ],
  '2-Bahasa Inggeris': [
    'Vocabulary: Animals & Pets (CEFR A1)',
    'Vocabulary: At School & Classroom Items',
    'Vocabulary: Family, Home & Food',
    'Grammar: Simple Present Tense & Pronouns (He/She/It)',
    'Prepositions of Place (in, on, under, next to)',
    'Basic Phonics & Spelling (Letter sounds & rhymes)',
  ],
  '2-Sains': [
    'Kemahiran Saintifik & Peraturan Bilik Sains',
    'Manusia: Tumbesaran & Pewarisan Ciri',
    'Haiwan: Pembiakan & Kitar Hidup',
    'Tumbuh-tumbuhan: Percambahan & Tumbesaran',
    'Terang, Gelap & Bayang-bayang',
    'Elektrik: Komponen Litar, Konduktor & Penebat',
    'Campuran & Keterlarutan Bahan',
    'Bumi: Bentuk Muka Bumi & Kitaran Air Semula Jadi',
  ],
  '4-Matematik': [
    'Nombor hingga 100,000 (Nilai digit & Bundar)',
    'Pecahan, Perpuluhan & Peratus',
    'Wang hingga RM100,000 & Pengurusan Kewangan',
    'Masa dan Waktu (Sistem 24 jam & Dekad/Abad)',
    'Panjang, Jisim & Isi Padu Cecair',
    'Koordinat Suku Pertama, Nisbah & Kadaran',
    'Penyelesaian Masalah KBAT (Aras Rendah-Sederhana)',
  ],
  '4-Sains': [
    'Kemahiran Saintifik (Pemboleh Ubah & Hipotesis)',
    'Manusia: Organ Pernafasan, Perkumuhan & Rangsangan',
    'Haiwan: Organ Pernafasan & Pengelasan Vertebrata',
    'Tumbuh-tumbuhan: Gerak Balas & Fotosintesis',
    'Sifat Cahaya: Pantulan, Pembiasan & Pergerakan Lurus',
    'Bunyi & Tenaga: Bentuk & Perubahan Tenaga',
    'Sifat Bahan & Mesin Ringkas (Tuas)',
    'Bumi: Graviti & Putaran Bumi (Siang dan Malam)',
  ],
  '4-Bahasa Inggeris': [
    'Past Simple Tense (Regular -ed & Irregular verbs)',
    'Comparatives & Superlatives (Comparing adjectives)',
    'Modals (must, mustn\'t, should, can)',
    'Reading Comprehension (Short passage with inference)',
    'Connectors (because, so, although, but, and)',
    'Everyday Conversation & Social Contexts',
  ],
  '2-Pendidikan Islam': [
    'Al-Quran & Tajwid (Huruf Hijaiyyah & Surah Pilihan)',
    'Akidah (Rukun Iman, Rukun Islam & Sifat Allah)',
    'Ibadah (Wuduk, Bersuci & Solat Fardhu)',
    'Sirah & Akhlak (Kelahiran Nabi Muhammad SAW & Adab Harian)',
    'Pelajaran Jawi (Suku Kata Terbuka, Tertutup & Diftong)',
  ],
  '4-Pendidikan Islam': [
    'Al-Quran & Tajwid (Hukum Nun Sakinah & Surah Pilihan)',
    'Akidah (Hari Kiamat & Sifat Al-Adl serta Al-Alim)',
    'Ibadah (Mandi Wajib, Solat Jumaat & Batal Solat)',
    'Sirah & Akhlak (Peristiwa Hijrah & Adab Kemasyarakatan)',
    'Pelajaran Jawi (Kata Pinjaman, Imbuhan & Ayat Tradisi)',
  ],
};

export const AIGeneratorView: React.FC<AIGeneratorViewProps> = ({
  onLoadQuestionsIntoQuiz,
  onOpenSchemaWithQuestions,
}) => {
  const [year, setYear] = useState<YearLevel>(2);
  const [subject, setSubject] = useState<Subject>('Matematik');
  const [topic, setTopic] = useState<string>(SYLLABUS_TOPICS_BY_LEVEL['2-Matematik'][0]);
  const [count, setCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('Campuran (Mudah & Sederhana)');
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [generatedQuestions, setGeneratedQuestions] = useState<QuizQuestion[] | null>(null);

  // When year or subject changes, reset topic to first available
  const handleYearChange = (newYear: YearLevel) => {
    setYear(newYear);
    const key = `${newYear}-${subject}`;
    const topics = SYLLABUS_TOPICS_BY_LEVEL[key] || [];
    setTopic(topics[0] || '');
  };

  const handleSubjectChange = (newSubject: Subject) => {
    setSubject(newSubject);
    const key = `${year}-${newSubject}`;
    const topics = SYLLABUS_TOPICS_BY_LEVEL[key] || [];
    setTopic(topics[0] || '');
  };

  const currentTopicKey = `${year}-${subject}`;
  const availableTopics = SYLLABUS_TOPICS_BY_LEVEL[currentTopicKey] || [];

  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          year,
          subject,
          topic,
          count,
          difficulty,
          customPrompt,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Gagal menjana soalan kuiz.');
      }

      const questions: QuizQuestion[] = result.data.questions || [];
      if (questions.length === 0) {
        throw new Error('Tiada soalan dikembalikan daripada sistem AI.');
      }

      setGeneratedQuestions(questions);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err.message ||
          'Ralat ketika menghubungi perkhidmatan AI. Sila semak sambungan rangkaian atau cuba lagi.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Generator Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Penjana Soalan AI KSSR Semakan (Gemini 3.8)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Hasilkan soalan aneka pilihan KSSR Semakan baharu dengan 4 pilihan jawapan (A, B, C, D) & ulasan pedagogi mengikut skema JSON rasmi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Year selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Tahap Murid (Tahun)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                id="gen-select-year-2"
                onClick={() => handleYearChange(2)}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  year === 2
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 2 (KSSR Semakan)
              </button>
              <button
                type="button"
                id="gen-select-year-4"
                onClick={() => handleYearChange(4)}
                className={`py-2.5 px-4 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  year === 4
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Tahun 4 (+ Soalan KBAT)
              </button>
            </div>
          </div>

          {/* Subject selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Mata Pelajaran
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                id="gen-select-subject-math"
                onClick={() => handleSubjectChange('Matematik')}
                className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Matematik'
                    ? 'border-blue-600 bg-blue-50 text-blue-950 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Matematik (BM)
              </button>
              <button
                type="button"
                id="gen-select-subject-science"
                onClick={() => handleSubjectChange('Sains')}
                className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Sains'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Sains (KSSR)
              </button>
              <button
                type="button"
                id="gen-select-subject-english"
                onClick={() => handleSubjectChange('Bahasa Inggeris')}
                className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Bahasa Inggeris'
                    ? 'border-purple-600 bg-purple-50 text-purple-950 ring-2 ring-purple-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                English (CEFR)
              </button>
              <button
                type="button"
                id="gen-select-subject-islamic"
                onClick={() => handleSubjectChange('Pendidikan Islam')}
                className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                  subject === 'Pendidikan Islam'
                    ? 'border-teal-600 bg-teal-50 text-teal-950 ring-2 ring-teal-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                Pend. Islam
              </button>
            </div>
          </div>

          {/* Topic Dropdown */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Topik Mengikut Sukatan KPM
            </label>
            <select
              id="gen-select-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {availableTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Question Count & Difficulty */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Bilangan Soalan
            </label>
            <div className="flex gap-2">
              {[3, 5, 8, 10].map((num) => (
                <button
                  key={num}
                  type="button"
                  id={`gen-count-${num}`}
                  onClick={() => setCount(num)}
                  className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition cursor-pointer ${
                    count === num
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Aras Kesukaran
            </label>
            <select
              id="gen-select-difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Campuran (Mudah & Sederhana)">Campuran (Mudah & Sederhana)</option>
              <option value="Mudah">Mudah (Asas Penguasaan TP1-TP3)</option>
              <option value="Sederhana">Sederhana (Aplikasi TP4-TP5)</option>
              <option value="KBAT (Aras Rendah)">KBAT (Aras Rendah - Aplikasi Konteks Asas)</option>
              <option value="KBAT (Aras Sederhana)">KBAT (Aras Sederhana - Analisis Pelbagai Langkah)</option>
              <option value="KBAT (Aras Tinggi)">KBAT (Aras Tinggi - Menilai & Penaakulan Logik)</option>
              <option value="KBAT (Aras Rendah-Sederhana)">KBAT (Umum TP5-TP6)</option>
            </select>
          </div>

          {/* Custom Focus Prompt */}
          <div className="md:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Fokus Khusus Guru (Pilihan Tambahan)
            </label>
            <input
              type="text"
              id="gen-custom-prompt"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder={
                subject === 'Matematik'
                  ? 'Contoh: Soalan cerita jual beli buku, melibatkan baki wang kertas...'
                  : 'Example: Focus on irregular verbs in past tense (went, saw, ate) or nature in Malaysia...'
              }
              className="w-full p-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
            <div>
              <strong className="block font-semibold">Ralat Penjanaan AI</strong>
              <p>{errorMsg}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            id="btn-generate-ai-questions"
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base shadow-sm hover:shadow transition disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sedang Menjana Soalan KSSR Semakan...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Jana {count} Soalan KSSR AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Results Preview */}
      {generatedQuestions && generatedQuestions.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {generatedQuestions.length} Soalan KSSR Berjaya Dijana
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Semua soalan mengandungi 4 pilihan jawapan (A, B, C, D), 1 jawapan betul, dan ulasan pedagogi.
              </p>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                id="btn-start-quiz-with-generated"
                onClick={() => onLoadQuestionsIntoQuiz(generatedQuestions)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition cursor-pointer"
              >
                <Play className="w-4 h-4" />
                <span>Mula Kuiz Dengan Soalan Ini</span>
              </button>

              <button
                id="btn-view-schema-generated"
                onClick={() => onOpenSchemaWithQuestions(generatedQuestions)}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition cursor-pointer"
              >
                <Code className="w-4 h-4" />
                <span>Lihat JSON</span>
              </button>
            </div>
          </div>

          {/* Cards List Preview */}
          <div className="space-y-4">
            {generatedQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-slate-50/50"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      Tahun {q.year} • {q.subject}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                      {q.difficulty}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Jawapan Betul: {q.correctAnswer}
                  </span>
                </div>

                {q.stimulus && (
                  <div className="mb-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs italic font-serif">
                    "{q.stimulus}"
                  </div>
                )}

                <p className="font-semibold text-slate-900 text-sm sm:text-base mb-3">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs sm:text-sm">
                  {(['A', 'B', 'C', 'D'] as const).map((optKey) => (
                    <div
                      key={optKey}
                      className={`p-2.5 rounded-lg border flex items-center gap-2 ${
                        q.correctAnswer === optKey
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-medium'
                          : 'border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      <span className="font-bold w-5">{optKey}.</span>
                      <span>{q.options[optKey]}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600">
                  <strong className="text-indigo-700 font-semibold mr-1">
                    Ulasan Pedagogi:
                  </strong>
                  {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
