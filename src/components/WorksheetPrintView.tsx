import React, { useState, useMemo } from 'react';
import { YearLevel, Subject, QuizQuestion, QuizTopicMeta } from '../types';
import { KSSR_TOPICS } from '../data/kssrQuestions';
import {
  MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS,
  buildMatriksPembelajaranExamSet,
} from '../data/matriksPembelajaranTahun4';
import {
  Printer,
  Calendar,
  Sparkles,
  BookOpen,
  Filter,
  CheckCircle2,
  FileText,
  RotateCcw,
  ArrowLeft,
  GraduationCap,
  Layers,
  Award,
  Clock,
  Target
} from 'lucide-react';
import {
  getTodayDateString,
  getFormattedMalayDate,
  getDailyQuestions,
  shuffleWithSeed
} from '../utils/dailyChallenge';
import { QuizDiagramViewer } from './QuizDiagramViewer';

interface WorksheetPrintViewProps {
  questionBank: QuizQuestion[];
  initialYear?: YearLevel;
  initialSubject?: Subject;
  initialTopicId?: string;
  onBackToQuiz: () => void;
}

export const WorksheetPrintView: React.FC<WorksheetPrintViewProps> = ({
  questionBank,
  initialYear = 2,
  initialSubject = 'Matematik',
  initialTopicId = 'all',
  onBackToQuiz,
}) => {
  const [selectedYear, setSelectedYear] = useState<YearLevel>(initialYear);
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>(initialSubject);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [includeAnswerKey, setIncludeAnswerKey] = useState<boolean>(true);
  const [worksheetMode, setWorksheetMode] = useState<'daily' | 'custom_date' | 'random' | 'matriks_50m'>(() => {
    return initialYear === 4 ? 'matriks_50m' : 'daily';
  });
  const [customDate, setCustomDate] = useState<string>(() => getTodayDateString());
  const [schoolName, setSchoolName] = useState<string>('Sekolah Kebangsaan (SK)');
  const [randomSeedModifier, setRandomSeedModifier] = useState<number>(0);

  const todayStr = useMemo(() => getTodayDateString(), []);
  const activeDateStr = worksheetMode === 'custom_date' ? customDate : todayStr;

  // Active Matriks specification if in Year 4
  const activeMatriksSpec = useMemo(() => {
    if (selectedYear !== 4) return null;
    const targetSubj = selectedSubject === 'all' ? 'Matematik' : selectedSubject;
    return MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS[targetSubj] || MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS['Matematik'];
  }, [selectedYear, selectedSubject]);

  // Filter topics based on year and subject
  const availableTopics = useMemo(() => {
    return KSSR_TOPICS.filter((t) => {
      if (t.year !== selectedYear) return false;
      if (selectedSubject !== 'all' && t.subject !== selectedSubject) return false;
      return true;
    });
  }, [selectedYear, selectedSubject]);

  // Generate the questions for this worksheet
  const generatedQuestions = useMemo(() => {
    if (worksheetMode === 'matriks_50m' && selectedYear === 4) {
      const targetSubj: Subject = selectedSubject === 'all' ? 'Matematik' : selectedSubject;
      const examSet = buildMatriksPembelajaranExamSet(questionBank, targetSubj, activeDateStr, randomSeedModifier);
      return examSet.questions;
    }

    const pool = questionBank.filter((q) => {
      if (q.year !== selectedYear) return false;
      if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;
      if (selectedTopicId !== 'all') {
        const matchingTopic = availableTopics.find((t) => t.id === selectedTopicId);
        if (matchingTopic) {
          const match =
            q.topic.toLowerCase().includes(matchingTopic.name.toLowerCase()) ||
            matchingTopic.name.toLowerCase().includes(q.topic.toLowerCase());
          if (!match) return false;
        }
      }
      return true;
    });

    if (pool.length === 0) return [];

    if (worksheetMode === 'random') {
      const seed = `print-random-${Date.now()}-${randomSeedModifier}`;
      return shuffleWithSeed(pool, seed).slice(0, questionCount);
    } else {
      // Daily mode / specific date mode: Deterministic unique set for every date!
      const seed = `print-kssr-${activeDateStr}-${selectedYear}-${selectedSubject}-${selectedTopicId}`;
      return shuffleWithSeed(pool, seed).slice(0, questionCount);
    }
  }, [
    questionBank,
    selectedYear,
    selectedSubject,
    selectedTopicId,
    questionCount,
    worksheetMode,
    activeDateStr,
    randomSeedModifier,
    availableTopics,
  ]);

  const handlePrint = () => {
    window.print();
  };

  const handleRegenerateRandom = () => {
    setRandomSeedModifier((prev) => prev + 1);
  };

  const formattedHeaderDate = getFormattedMalayDate(activeDateStr);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-20">
      {/* Control Panel (Hidden during printing via CSS) */}
      <div className="no-print bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <button
                onClick={onBackToQuiz}
                className="text-slate-600 hover:text-indigo-600 font-semibold text-xs flex items-center gap-1 transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Kuiz Interaktif</span>
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Printer className="w-6 h-6 text-indigo-600" />
              <span>Penjana Lembaran Kerja & Cetak PDF KSSR</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Cetak set latihan bertulis harian atau ujian topikal dalam format A4 rasmi untuk murid.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="btn-trigger-print-pdf"
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-sm shadow-md transition cursor-pointer"
              title="Cetak atau Simpan sebagai PDF (A4)"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>
          </div>
        </div>

        {/* Filters and Configuration */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {/* Year */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
              Tahap / Tahun
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(1);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 1
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T1
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(2);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 2
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T2
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(3);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 3
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T3
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(4);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 4
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T4
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(5);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 5
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T5
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedYear(6);
                  setSelectedTopicId('all');
                }}
                className={`py-2 px-1 rounded-lg text-xs font-bold border transition cursor-pointer text-center ${
                  selectedYear === 6
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                T6
              </button>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
              Mata Pelajaran
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value as any);
                setSelectedTopicId('all');
              }}
              className="w-full text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:outline-none"
            >
              <option value="all">🌟 Semua Subjek (Set Gabungan)</option>
              <option value="Matematik">📐 Matematik</option>
              <option value="Sains">🔬 Sains</option>
              <option value="Bahasa Melayu">📖 Bahasa Melayu</option>
              <option value="Bahasa Inggeris">🔤 Bahasa Inggeris</option>
              <option value="Pendidikan Islam">🕌 Pendidikan Islam</option>
              <option value="Bahasa Arab">🌴 Bahasa Arab</option>
              <option value="Bahasa Cina">🏮 Bahasa Cina</option>
            </select>
          </div>

          {/* Question Count */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
              Bilangan Soalan
            </label>
            <div className="grid grid-cols-4 gap-1">
              {[5, 10, 15, 20].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`py-2 text-xs font-bold rounded-lg border transition cursor-pointer ${
                    questionCount === count
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Rotation Mode */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
              Mod Format Kertas
            </label>
            <select
              value={worksheetMode}
              onChange={(e) => setWorksheetMode(e.target.value as any)}
              className="w-full text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:outline-none"
            >
              {selectedYear === 4 && (
                <option value="matriks_50m">🏆 Format Matriks Pentaksiran Tahun 4 (50M • 1j 15m)</option>
              )}
              <option value="daily">📅 Set Harian Hari Ini (Automatik)</option>
              <option value="random">🎲 Set Rawak Baharu (Shuffled)</option>
              <option value="custom_date">📆 Set Tarikh Tertentu</option>
            </select>
          </div>
        </div>

        {/* Secondary options row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-100">
          {/* Topic Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
              Topik Pembelajaran
            </label>
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:outline-none truncate"
            >
              <option value="all">Semua Topik Pembelajaran KSSR</option>
              {availableTopics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* School Name customizer */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1">
              Nama Sekolah / Institusi
            </label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              placeholder="Contoh: SK Seri Bintang Selatan"
              className="w-full text-xs font-medium px-3 py-2 rounded-lg border border-slate-200 bg-white focus:border-indigo-500 focus:outline-none"
            />
          </div>

          {/* Toggles & Actions */}
          <div className="flex flex-col justify-end gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={includeAnswerKey}
                onChange={(e) => setIncludeAnswerKey(e.target.checked)}
                className="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500"
              />
              <span>Sertakan Skema Jawapan & Ulasan Pedagogi (Muka Surat Akhir)</span>
            </label>

            {worksheetMode === 'random' && (
              <button
                type="button"
                onClick={handleRegenerateRandom}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Jana Gabungan Soalan Rawak Lain</span>
              </button>
            )}

            {worksheetMode === 'custom_date' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Pilih Tarikh:</span>
                <input
                  type="date"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                  className="text-xs font-semibold px-2 py-1 border rounded border-slate-200"
                />
              </div>
            )}
          </div>
        </div>

        {/* Live Set Info Badge */}
        <div className="mt-4 p-3 rounded-xl bg-indigo-50/70 border border-indigo-200 flex flex-wrap items-center justify-between gap-2 text-xs text-indigo-950">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              <strong>Set Lembaran Kerja:</strong> {formattedHeaderDate} • Tahun {selectedYear} •{' '}
              {selectedSubject === 'all' ? 'Semua Subjek' : selectedSubject} (
              {generatedQuestions.length} Soalan Tersedia)
            </span>
          </div>
          <span className="text-[11px] font-bold text-indigo-700 bg-white px-2.5 py-1 rounded-md border border-indigo-200 shadow-2xs">
            Kod Set: {selectedYear}-{selectedSubject.substring(0, 3).toUpperCase()}-{activeDateStr.replace(/-/g, '')}
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PRINTABLE A4 PAPER CONTENT CONTAINER                      */}
      {/* ========================================================= */}
      <div
        id="printable-worksheet-content"
        className="bg-white rounded-2xl shadow-md border border-slate-300 p-8 sm:p-12 print:p-0 print:border-none print:shadow-none text-black font-sans leading-normal"
      >
        {/* Official Examination/Worksheet Header */}
        <div className="border-b-2 border-black pb-4 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-black rounded-lg flex items-center justify-center font-bold text-lg print:border-black shrink-0">
                <GraduationCap className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold tracking-tight uppercase text-black">
                  {schoolName || 'KEMENTERIAN PENDIDIKAN MALAYSIA'}
                </h1>
                <h2 className="text-sm sm:text-base font-extrabold uppercase text-black">
                  {worksheetMode === 'matriks_50m'
                    ? `PENTAKSIRAN MATRIKS PEMBELAJARAN TAHUN ${selectedYear} • KSSR SEMAKAN`
                    : 'PENTAKSIRAN BILIK DARJAH (PBD) • KSSR SEMAKAN'}
                </h2>
                <p className="text-xs font-semibold text-gray-700">
                  {worksheetMode === 'matriks_50m'
                    ? `${activeMatriksSpec?.instrumentType || 'UJIAN BERTULIS'} • 50 MARKAH • MASA: 1 JAM 15 MINIT`
                    : `LEMBARAN KERJA / KERTAS LATIHAN BERTULIS • TAHUN ${selectedYear}`}
                </p>
              </div>
            </div>

            {/* Score Box */}
            <div className="border-2 border-black rounded-lg p-2 text-center w-32 shrink-0">
              <div className="text-[10px] font-bold uppercase border-b border-black pb-1">
                MARKAH / GRED
              </div>
              <div className="text-lg font-black pt-1.5 h-8 flex items-center justify-center">
                / {worksheetMode === 'matriks_50m' ? '50' : generatedQuestions.length}
              </div>
            </div>
          </div>

          {/* Student Info Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 pt-3 border-t border-dashed border-gray-400 text-xs">
            <div className="flex items-center">
              <span className="font-bold w-24">NAMA MURID:</span>
              <span className="border-b border-black flex-1 min-h-[18px]"></span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">KELAS:</span>
              <span className="border-b border-black flex-1 min-h-[18px]"></span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">MATA PELAJARAN:</span>
              <span className="font-semibold text-black">
                {selectedSubject === 'all' ? 'Ujian Komprehensif (Semua Subjek)' : selectedSubject}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold w-24">TARIKH:</span>
              <span className="font-semibold text-black">{formattedHeaderDate}</span>
            </div>
          </div>

          {/* Matriks Mark Distribution Summary Table for Examiners */}
          {worksheetMode === 'matriks_50m' && activeMatriksSpec && (
            <div className="mt-3 pt-2 border-t border-gray-300">
              <table className="w-full text-[11px] border border-black border-collapse text-center">
                <thead>
                  <tr className="bg-gray-100 font-bold">
                    <th className="border border-black p-1">Bahagian</th>
                    {activeMatriksSpec.sections.map((sec) => (
                      <th key={sec.id} className="border border-black p-1">{sec.sectionCode}</th>
                    ))}
                    <th className="border border-black p-1 bg-gray-200">JUMLAH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-1 font-bold">Markah Penuh</td>
                    {activeMatriksSpec.sections.map((sec) => (
                      <td key={sec.id} className="border border-black p-1">{sec.marks}</td>
                    ))}
                    <td className="border border-black p-1 font-bold bg-gray-50">{activeMatriksSpec.totalMarks}</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1 font-bold">Markah Diperoleh</td>
                    {activeMatriksSpec.sections.map((sec) => (
                      <td key={sec.id} className="border border-black p-1 h-5"></td>
                    ))}
                    <td className="border border-black p-1 font-bold bg-gray-50 h-5"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* General Instructions */}
        <div className="bg-gray-50 print:bg-transparent border border-gray-300 print:border-gray-500 rounded p-2.5 mb-6 text-xs leading-relaxed">
          <p className="font-bold uppercase mb-1">Arahan Peperiksaan:</p>
          <ol className="list-decimal pl-4 space-y-0.5">
            <li>Kertas peperiksaan ini mengandungi <strong>{generatedQuestions.length} soalan</strong> {worksheetMode === 'matriks_50m' ? 'yang dibahagikan mengikut format matriks pentaksiran rasmi' : 'aneka pilihan'}.</li>
            <li>Jawab <strong>semua soalan</strong> dalam masa <strong>{worksheetMode === 'matriks_50m' ? '1 Jam 15 Minit' : 'yang ditetapkan'}</strong>.</li>
            <li>Bagi soalan objektif aneka pilihan, bulatkan atau hitamkan satu pilihan jawapan yang paling tepat iaitu sama ada <strong>A, B, C</strong> atau <strong>D</strong>.</li>
            {worksheetMode === 'matriks_50m' && (
              <li>Aras soalan merangkumi Aras Rendah, Sederhana, dan KBAT Tinggi mengikut nisbah 5 : 3 : 2.</li>
            )}
          </ol>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {generatedQuestions.map((q, idx) => {
            const questionNum = idx + 1;
            const prevQuestion = idx > 0 ? generatedQuestions[idx - 1] : null;
            const isNewSection =
              worksheetMode === 'matriks_50m' &&
              q.matriksSection &&
              (!prevQuestion || prevQuestion.matriksSection !== q.matriksSection);

            return (
              <React.Fragment key={q.id || `q-${idx}`}>
                {/* Section Break Banner in Matriks mode */}
                {isNewSection && (
                  <div className="pt-4 pb-2 border-t-2 border-black my-4 page-break-inside-avoid">
                    <div className="flex items-center justify-between bg-gray-100 p-2 border border-black rounded">
                      <span className="font-black text-sm uppercase tracking-wider text-black">
                        {q.matriksSection}
                      </span>
                      <span className="text-xs font-bold text-gray-700">
                        {q.construct ? `Konstruk: ${q.construct}` : 'Format Pentaksiran Matriks'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="pb-5 border-b border-gray-200 print:border-gray-300 page-break-inside-avoid">
                  {/* Question Header & Meta */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-sm sm:text-base">{questionNum}.</span>
                      <div className="flex-1">
                        {/* Stimulus / Reading Passage if present */}
                        {q.stimulus && (
                          <div className="mb-2 p-2.5 bg-gray-50 print:bg-transparent border-l-2 border-black text-xs sm:text-sm font-serif italic text-gray-800">
                            "{q.stimulus}"
                          </div>
                        )}

                        {/* Scientific Diagram Viewer */}
                        {q.diagram && (
                          <div className="mb-3 max-w-sm">
                            <QuizDiagramViewer diagram={q.diagram} />
                          </div>
                        )}

                        <h3 className="font-bold text-sm sm:text-base text-black leading-snug">
                          {q.question}
                        </h3>
                      </div>
                    </div>

                    {/* Standard / Subject Pill for Teachers */}
                    <div className="text-[10px] font-semibold text-gray-500 text-right shrink-0">
                      <div>{q.subject}</div>
                      {q.matriksSection && <div className="font-bold text-black">{q.matriksSection}</div>}
                      {q.marks && <div className="font-bold text-gray-800">[{q.marks} Markah]</div>}
                      {q.learningStandard && <div>{q.learningStandard}</div>}
                    </div>
                  </div>

                  {/* 4 Choices A, B, C, D */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pl-6">
                    {(['A', 'B', 'C', 'D'] as const).map((optKey) => {
                      const optText = q.options[optKey];
                      return (
                        <div
                          key={optKey}
                          className="flex items-center gap-2.5 p-1.5 rounded text-xs sm:text-sm"
                        >
                          <span className="w-6 h-6 rounded-full border border-black flex items-center justify-center font-bold text-xs shrink-0">
                            {optKey}
                          </span>
                          <span className="text-gray-900 leading-tight">{optText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* End of questions sign */}
        <div className="text-center font-bold text-xs uppercase tracking-widest text-gray-500 my-8">
          --- KERTAS SOALAN TAMAT ---
        </div>

        {/* ========================================================= */}
        {/* ANSWER KEY SECTION (Optional, printed on final page)     */}
        {/* ========================================================= */}
        {includeAnswerKey && (
          <div className="mt-12 pt-8 border-t-2 border-dashed border-black page-break-before">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-black">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-black" />
                <h2 className="font-bold text-base uppercase">
                  SKEMA JAWAPAN & ULASAN PEDAGOGI GURU
                </h2>
              </div>
              <span className="text-xs font-mono font-bold">
                Tahun {selectedYear} • {selectedSubject}
              </span>
            </div>

            <p className="text-xs text-gray-600 mb-4">
              Bahagian ini adalah panduan semakan rasmi guru dan ibu bapa. Mengandungi jawapan betul berserta huraian konsep pembelajaran bagi setiap soalan.
            </p>

            {/* Answer Grid Summary */}
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6 text-center">
              {generatedQuestions.map((q, idx) => (
                <div
                  key={`key-grid-${idx}`}
                  className="border border-black p-1.5 rounded bg-gray-50 print:bg-transparent"
                >
                  <div className="text-[10px] font-bold text-gray-600">S{idx + 1}</div>
                  <div className="text-sm font-extrabold text-black">{q.correctAnswer}</div>
                </div>
              ))}
            </div>

            {/* Detailed Explanations */}
            <div className="space-y-3">
              {generatedQuestions.map((q, idx) => (
                <div
                  key={`exp-${idx}`}
                  className="p-2.5 border-b border-gray-200 text-xs leading-relaxed"
                >
                  <div className="font-bold text-black flex items-center gap-2">
                    <span>Soalan {idx + 1}: Jawapan ({q.correctAnswer}) - {q.options[q.correctAnswer]}</span>
                    {q.learningStandard && (
                      <span className="text-[10px] text-gray-500 font-normal">
                        [{q.learningStandard}]
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 mt-0.5">{q.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
