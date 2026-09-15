import React from 'react';
import { Target, Sparkles, BookOpen, AlertCircle, CheckCircle2, TrendingUp, HelpCircle, Layers } from 'lucide-react';
import { YearLevel, Subject, TopicPerformanceSummary, StudentProfile, AdaptiveReviewResult } from '../types';

export interface AdaptiveReviewBannerProps {
  quizMode: 'practice' | 'daily' | 'adaptive';
  onToggleMode: (mode: 'practice' | 'daily' | 'adaptive') => void;
  selectedYear: YearLevel;
  onSelectYear: (year: YearLevel) => void;
  // Subject filter (supports both prop names for safety)
  adaptiveSubject?: Subject | 'all';
  selectedSubject?: Subject | 'all';
  onSelectAdaptiveSubject?: (sub: Subject | 'all') => void;
  onSelectSubject?: (sub: Subject | 'all') => void;
  // Adaptive Result or broken-down props
  adaptiveResult?: AdaptiveReviewResult;
  targetTopics?: TopicPerformanceSummary[];
  totalTopicsInHistory?: number;
  isFromStruggleHistory?: boolean;
  activeProfile?: StudentProfile | null;
  totalReviewQuestions?: number;
  onRefreshReview?: () => void;
  onRegenerateReview?: () => void;
}

const ALL_SUBJECTS: Subject[] = [
  'Matematik',
  'Sains',
  'Bahasa Melayu',
  'Bahasa Inggeris',
  'Pendidikan Islam',
  'Bahasa Arab',
  'Bahasa Cina',
];

export const AdaptiveReviewBanner: React.FC<AdaptiveReviewBannerProps> = ({
  quizMode,
  onToggleMode,
  selectedYear,
  onSelectYear,
  adaptiveSubject,
  selectedSubject,
  onSelectAdaptiveSubject,
  onSelectSubject,
  adaptiveResult,
  targetTopics: directTargetTopics,
  totalTopicsInHistory: directTotalTopics,
  isFromStruggleHistory: directIsFromStruggle,
  activeProfile,
  totalReviewQuestions: directTotalQuestions,
  onRefreshReview,
  onRegenerateReview,
}) => {
  // Safe resolved values from either adaptiveResult object or direct props
  const currentSubject: Subject | 'all' = adaptiveSubject || selectedSubject || 'all';
  const handleSelectSubject = onSelectAdaptiveSubject || onSelectSubject || (() => {});
  const handleRefresh = onRefreshReview || onRegenerateReview;

  const targetTopics: TopicPerformanceSummary[] =
    adaptiveResult?.targetTopics || directTargetTopics || [];
  const totalReviewQuestions: number =
    adaptiveResult?.questions?.length ?? directTotalQuestions ?? 0;
  const isFromStruggle: boolean =
    adaptiveResult?.isFromStruggleHistory ?? directIsFromStruggle ?? false;
  const diagnosticNote: string | undefined = adaptiveResult?.diagnosticNote;

  if (quizMode !== 'adaptive') {
    return (
      <div className="bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-indigo-900/5 rounded-2xl border border-indigo-200/90 p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Target className="w-6 h-6 text-indigo-100" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                <span>Mod Ulang Kaji Pintar (Adaptive Review)</span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                  AI Fokus 20% Lemah
                </span>
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Sistem menyaring <strong>20% topik dengan skor terendah</strong> dan soalan yang kerap tersilap daripada sejarah latihan anda untuk memantapkan penguasaan.
            </p>
          </div>
        </div>

        <button
          id="btn-switch-to-adaptive-review"
          onClick={() => onToggleMode('adaptive')}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm transition shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <Target className="w-4 h-4 text-indigo-200" />
          <span>Mula Ulang Kaji Pintar</span>
        </button>
      </div>
    );
  }

  // Active Adaptive Review Mode
  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 border-indigo-400/80 p-5 sm:p-6 mb-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex items-center justify-center shrink-0 shadow-md">
            <Target className="w-7 h-7 text-indigo-100" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Ulang Kaji Pintar (Adaptive Review)
              </h2>
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300">
                <Target className="w-3.5 h-3.5 text-indigo-700" /> 20% Topik Skor Terendah
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Menyasarkan soalan daripada topik yang paling mencabar untuk {activeProfile ? activeProfile.name : 'murid'} bagi menutup jurang pembelajaran.
            </p>
          </div>
        </div>

        {/* Mode Actions */}
        <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
          {handleRefresh && (
            <button
              id="btn-refresh-adaptive-questions"
              onClick={handleRefresh}
              className="px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition border border-indigo-200 cursor-pointer flex items-center gap-1.5"
              title="Jana semula soalan fokus kelemahan"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Kemaskini Set</span>
            </button>
          )}

          <button
            id="btn-switch-to-practice-from-adaptive"
            onClick={() => onToggleMode('practice')}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kembali ke Latihan Topikal</span>
          </button>
        </div>
      </div>

      {/* Target Weak Topics Analysis Card */}
      <div className="mt-4 p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-700" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-950">
              Analisis Topik Perlu Pengukuhan ({targetTopics.length} Topik Dikenal Pasti)
            </span>
          </div>
          <span className="text-[11px] font-semibold text-indigo-700">
            {totalReviewQuestions} Soalan Disediakan
          </span>
        </div>

        {targetTopics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {targetTopics.map((topic, idx) => (
              <div
                key={`${topic.year}-${topic.subject}-${topic.topic}-${idx}`}
                className="bg-white p-3 rounded-xl border border-indigo-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1.5 mb-1">
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                      Tahun {topic.year} • {topic.subject}
                    </span>
                    <span className={`text-[11px] font-extrabold px-1.5 py-0.5 rounded ${
                      topic.accuracyRate <= 50 ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {topic.accuracyRate}% Betul
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 line-clamp-2 mt-1">
                    {topic.topic}
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span>{topic.wrongCount} Kali Silap Terdahulu</span>
                  <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        topic.accuracyRate <= 50 ? 'bg-rose-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${Math.max(topic.accuracyRate, 10)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-4 rounded-xl border border-indigo-200 text-center text-xs text-slate-600">
            <div className="flex items-center justify-center gap-1.5 text-indigo-700 font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>Tiada Rekod Kelemahan Ketara</span>
            </div>
            <p className="text-[11px] text-slate-500">
              {diagnosticNote || 'Sistem telah menyediakan soalan pengukuhan & aras KBAT untuk memastikan anda kekal di tahap penguasaan terbaik!'}
            </p>
          </div>
        )}
      </div>

      {/* Filter options for Adaptive Review */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
        {/* Year Selector */}
        <div className="lg:col-span-5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Tahap Persekolahan
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
            {([1, 2, 3, 4, 5, 6] as YearLevel[]).map((yr) => (
              <button
                key={yr}
                id={`adaptive-select-year-${yr}`}
                onClick={() => onSelectYear(yr)}
                className={`py-2 px-1.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                  selectedYear === yr
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>Tahun {yr}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subject filter for Adaptive Review */}
        <div className="lg:col-span-7">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Pilihan Subjek Ulang Kaji
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              id="adaptive-subject-all"
              onClick={() => handleSelectSubject('all')}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold border transition cursor-pointer flex items-center gap-1 ${
                currentSubject === 'all'
                  ? 'border-indigo-600 bg-indigo-100 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Subjek</span>
            </button>
            {ALL_SUBJECTS.map((sub) => (
              <button
                key={sub}
                id={`adaptive-subject-${sub.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleSelectSubject(sub)}
                className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                  currentSubject === sub
                    ? 'border-indigo-600 bg-indigo-100 text-indigo-950 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
