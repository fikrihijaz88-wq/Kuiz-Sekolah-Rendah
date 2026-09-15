import React from 'react';
import { Calendar, Flame, Trophy, CheckCircle2, Clock, Sparkles, BookOpen, Layers } from 'lucide-react';
import { YearLevel, Subject, QuizMode } from '../types';
import { getFormattedMalayDate, getTodayDateString, DailyStreakData } from '../utils/dailyChallenge';

interface DailyChallengeBannerProps {
  quizMode: QuizMode;
  onToggleMode: (mode: QuizMode) => void;
  streakData: DailyStreakData;
  isCompletedToday: boolean;
  selectedYear: YearLevel;
  onSelectYear: (year: YearLevel) => void;
  dailySubject: Subject | 'all';
  onSelectDailySubject: (sub: Subject | 'all') => void;
  totalDailyQuestions: number;
}

export const DailyChallengeBanner: React.FC<DailyChallengeBannerProps> = ({
  quizMode,
  onToggleMode,
  streakData,
  isCompletedToday,
  selectedYear,
  onSelectYear,
  dailySubject,
  onSelectDailySubject,
  totalDailyQuestions,
}) => {
  const todayFormatted = getFormattedMalayDate(getTodayDateString());

  if (quizMode === 'practice') {
    return (
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 rounded-2xl border border-amber-300/80 p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
            <Flame className="w-6 h-6 text-amber-950" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                Cabaran Harian KSSR
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                <Calendar className="w-3 h-3" /> {todayFormatted}
              </span>
              {isCompletedToday ? (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" /> Selesai Hari Ini
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                  <Clock className="w-3 h-3" /> Belum Selesai
                </span>
              )}
            </div>
            <p className="text-xs text-slate-600 mt-1">
              5 soalan bertukar secara automatik setiap hari! Kekalkan rentetan harian anda:{' '}
              <strong className="text-amber-700 font-bold">
                🔥 {streakData.currentStreak} Hari Berturut-turut
              </strong>{' '}
              (Rekod: {streakData.longestStreak} Hari).
            </p>
          </div>
        </div>

        <button
          id="btn-switch-to-daily-challenge"
          onClick={() => onToggleMode('daily')}
          className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold text-xs sm:text-sm transition shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <Sparkles className="w-4 h-4" />
          <span>Mula Cabaran Hari Ini</span>
        </button>
      </div>
    );
  }

  // Active Daily Challenge Mode view
  return (
    <div className="bg-white rounded-2xl shadow-sm border-2 border-amber-400/70 p-5 sm:p-6 mb-6">
      {/* Header of Daily Challenge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
            <Flame className="w-7 h-7 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                Cabaran Harian (Daily Challenge)
              </h2>
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                <Calendar className="w-3.5 h-3.5 text-amber-700" /> {todayFormatted}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Soalan dijana dan bertukar secara automatik setiap 24 jam mengikut kalendar rasmi.
            </p>
          </div>
        </div>

        {/* Streaks and Mode Switcher */}
        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
          {/* Streak Pills */}
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200/80 rounded-xl px-3 py-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
              <span>{streakData.currentStreak} Hari</span>
            </div>
            <span className="text-amber-300">•</span>
            <div className="flex items-center gap-1 text-slate-600">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Rekod: {streakData.longestStreak}</span>
            </div>
          </div>

          <button
            id="btn-switch-to-practice-mode"
            onClick={() => onToggleMode('practice')}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Kembali ke Latihan Topikal</span>
          </button>
        </div>
      </div>

      {/* Filter options for Daily Challenge */}
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
                id={`daily-select-year-${yr}`}
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

        {/* Subject filter for Daily Challenge */}
        <div className="lg:col-span-7">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Pilihan Mata Pelajaran Cabaran Hari Ini
          </label>
          <div className="flex flex-wrap gap-1.5">
            <button
              id="daily-subject-all"
              onClick={() => onSelectDailySubject('all')}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold border transition cursor-pointer flex items-center gap-1 ${
                dailySubject === 'all'
                  ? 'border-amber-600 bg-amber-100 text-amber-950 ring-2 ring-amber-500/20'
                  : 'border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Campuran Semua Subjek</span>
            </button>
            {(['Matematik', 'Sains', 'Bahasa Melayu', 'Bahasa Inggeris', 'Pendidikan Islam', 'Bahasa Arab', 'Bahasa Cina'] as Subject[]).map(
              (sub) => (
                <button
                  key={sub}
                  id={`daily-subject-${sub.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => onSelectDailySubject(sub)}
                  className={`py-1.5 px-2.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                    dailySubject === sub
                      ? 'border-amber-600 bg-amber-100 text-amber-950 ring-2 ring-amber-500/20'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {sub}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Daily challenge status bar */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          {isCompletedToday ? (
            <span className="flex items-center gap-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Cabaran Harian Hari Ini Telah Diselesaikan! Anda boleh terus berlatih atau mencuba subjek lain.
            </span>
          ) : (
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <Clock className="w-4 h-4 text-amber-600" />
              Selesaikan <strong>{totalDailyQuestions} soalan</strong> hari ini untuk mengekalkan rentetan harian anda!
            </span>
          )}
        </div>
        <span className="text-[11px] text-slate-400">
          Soalan seterusnya bertukar automatik jam 12:00 tengah malam
        </span>
      </div>
    </div>
  );
};
