import React, { useState, useMemo } from 'react';
import {
  Trophy,
  Flame,
  Award,
  Target,
  Medal,
  Sparkles,
  UserPlus,
  PlayCircle,
  CheckCircle2,
  TrendingUp,
  Filter,
  GraduationCap,
  Star,
  Zap,
  Gift,
} from 'lucide-react';
import { LeaderboardEntry, YearLevel, StudentProfile } from '../types';
import { getAllLeaderboardEntries } from '../utils/leaderboardService';
import { StudentAvatarIcon } from './StudentAvatarIcon';
import { CASH_VOUCHER_TIERS, getClaimableVouchersCount } from '../utils/voucherService';

interface LeaderboardViewProps {
  activeProfile: StudentProfile | null;
  onOpenProfileModal: () => void;
  onStartQuiz: () => void;
  onOpenVouchers?: () => void;
}

type SortMetric = 'score' | 'streak' | 'accuracy' | 'challenges';

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({
  activeProfile,
  onOpenProfileModal,
  onStartQuiz,
  onOpenVouchers,
}) => {
  const [selectedYearFilter, setSelectedYearFilter] = useState<YearLevel | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortMetric>('score');

  // Load all entries
  const allEntries = useMemo(() => {
    return getAllLeaderboardEntries(activeProfile);
  }, [activeProfile]);

  // Filter by year if applicable
  const filteredEntries = useMemo(() => {
    let list = allEntries;
    if (selectedYearFilter !== 'all') {
      list = list.filter((e) => e.year === selectedYearFilter);
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'score') {
        return b.totalScore - a.totalScore;
      }
      if (sortBy === 'streak') {
        if (b.dailyStreak !== a.dailyStreak) return b.dailyStreak - a.dailyStreak;
        return b.challengesCompleted - a.challengesCompleted;
      }
      if (sortBy === 'accuracy') {
        if (b.accuracyRate !== a.accuracyRate) return b.accuracyRate - a.accuracyRate;
        return b.totalScore - a.totalScore;
      }
      if (sortBy === 'challenges') {
        return b.challengesCompleted - a.challengesCompleted;
      }
      return 0;
    });
  }, [allEntries, selectedYearFilter, sortBy]);

  // Find active student's entry and ranking
  const activeStudentRankIndex = filteredEntries.findIndex((e) => e.isCurrentUser);
  const activeStudentEntry = activeStudentRankIndex !== -1 ? filteredEntries[activeStudentRankIndex] : null;
  const activeStudentRank = activeStudentRankIndex !== -1 ? activeStudentRankIndex + 1 : null;

  // Student directly ahead of active student (for friendly motivation!)
  const studentAhead = activeStudentRankIndex > 0 ? filteredEntries[activeStudentRankIndex - 1] : null;
  const pointsToPass = studentAhead && activeStudentEntry ? Math.max(1, studentAhead.totalScore - activeStudentEntry.totalScore + 10) : 0;

  // Top 3 Podium
  const top1 = filteredEntries[0] || null;
  const top2 = filteredEntries[1] || null;
  const top3 = filteredEntries[2] || null;
  const remainingList = filteredEntries.slice(3);

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-indigo-900/40">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Pertandingan Mesra Sekolah Rendah KSSR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
              Papan Pendahulu Murid Pintar
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Kumpulkan mata dengan menjawab kuiz mengikut subjek, mencuba soalan KBAT, dan mengekalkan rentetan Cabaran Harian setiap hari!
            </p>
          </div>

          {/* Quick Actions in Hero */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onStartQuiz}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm transition shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Jawab Kuiz & Kumpul Mata</span>
            </button>
            <button
              onClick={onOpenProfileModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-indigo-300" />
              <span>Daftar / Tukar Murid</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
      </div>

      {/* Active Student Status Card */}
      {activeStudentEntry && (
        <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-amber-500/10 border-2 border-amber-400/40 rounded-3xl p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            <div className="relative">
              <StudentAvatarIcon avatarId={activeStudentEntry.avatarId} size="lg" />
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[11px] font-black rounded-full px-1.5 py-0.5 shadow-xs border border-white flex items-center">
                #{activeStudentRank}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded-md">
                  Status Anda
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeStudentEntry.rankTitle}
                </span>
              </div>
              <h4 className="font-black text-slate-900 text-base">
                {activeStudentEntry.studentName}
              </h4>
              <p className="text-xs text-slate-600">
                Tahun {activeStudentEntry.year} • {activeStudentEntry.className}
                {activeStudentEntry.schoolName ? ` • ${activeStudentEntry.schoolName}` : ''}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 bg-white/80 border border-slate-200/80 rounded-2xl px-4 py-2.5 w-full sm:w-auto justify-around sm:justify-end">
            <div className="text-center">
              <div className="text-[10px] uppercase font-bold text-slate-400">Kedudukan</div>
              <div className="text-base font-black text-amber-600 flex items-center justify-center gap-1">
                <Trophy className="w-4 h-4" />
                <span>#{activeStudentRank}</span>
              </div>
            </div>
            <div className="h-7 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-bold text-slate-400">Mata Anda</div>
              <div className="text-base font-black text-indigo-700">
                {activeStudentEntry.totalScore}
              </div>
            </div>
            <div className="h-7 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-[10px] uppercase font-bold text-slate-400">Rentetan</div>
              <div className="text-base font-black text-orange-600 flex items-center justify-center gap-0.5">
                <Flame className="w-4 h-4" />
                <span>{activeStudentEntry.dailyStreak}</span>
              </div>
            </div>
          </div>

          {/* Points needed to climb motivation */}
          {studentAhead && pointsToPass > 0 && (
            <div className="w-full sm:w-auto text-center sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-amber-200/60">
              <div className="text-[11px] text-slate-600">
                Perlukan <span className="font-extrabold text-amber-700">+{pointsToPass} mata</span> untuk memintas
              </div>
              <div className="text-xs font-bold text-slate-800 truncate max-w-[180px] mx-auto sm:ml-auto">
                {studentAhead.studentName}
              </div>
            </div>
          )}
        </div>
      )}

      {/* CASH VOUCHER REWARD PROGRAM CARD */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-md border border-emerald-700/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-2">
              <Gift className="w-3.5 h-3.5" />
              <span>Ganjaran Wang Tunai Kuiz KSSR</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Capai Sasaran Mata & Peroleh Baucar Tunai Sebenar!
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm mt-1 leading-relaxed">
              Peserta yang mencapai mata sasaran boleh menebus baucar tunai bernilai RM5, RM10, RM20 dan RM50 untuk kegunaan di koperasi sekolah atau pembelian buku.
            </p>

            {/* Quick voucher tier badges */}
            <div className="flex flex-wrap items-center gap-2 mt-3.5">
              {CASH_VOUCHER_TIERS.map((tier) => {
                const isReached = activeStudentEntry ? activeStudentEntry.totalScore >= tier.targetPoints : false;
                return (
                  <div
                    key={tier.id}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold border transition ${
                      isReached
                        ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-xs font-black'
                        : 'bg-white/10 text-emerald-200 border-white/15'
                    }`}
                  >
                    <span>{isReached ? '✨' : '🔒'}</span>
                    <span>RM{tier.amountRM} ({tier.targetPoints} mata)</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action button */}
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {onOpenVouchers && (
              <button
                onClick={onOpenVouchers}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm transition shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Gift className="w-4 h-4 text-slate-950" />
                <span>Buka Pusat Penebusan Baucar</span>
                {activeStudentEntry && getClaimableVouchersCount(activeStudentEntry.id, activeStudentEntry.totalScore) > 0 && (
                  <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full ml-1 animate-bounce">
                    {getClaimableVouchersCount(activeStudentEntry.id, activeStudentEntry.totalScore)} Boleh Tebus!
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />
      </div>

      {/* Control Bar: Filters & Sorting */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Year Filter Pills */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Tahun:</span>
          </span>
          <button
            onClick={() => setSelectedYearFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              selectedYearFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Semua Tahun ({allEntries.length})
          </button>
          <button
            onClick={() => setSelectedYearFilter(2)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              selectedYearFilter === 2
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Tahun 2 Sahaja
          </button>
          <button
            onClick={() => setSelectedYearFilter(4)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              selectedYearFilter === 4
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Tahun 4 Sahaja
          </button>
          <button
            onClick={() => setSelectedYearFilter(5)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              selectedYearFilter === 5
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Tahun 5 Sahaja
          </button>
        </div>

        {/* Sort Metric Selector */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
          <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Susun:</span>
          </span>
          <button
            onClick={() => setSortBy('score')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
              sortBy === 'score'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Mata Terkumpul
          </button>
          <button
            onClick={() => setSortBy('streak')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              sortBy === 'streak'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Rentetan Harian</span>
          </button>
          <button
            onClick={() => setSortBy('accuracy')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              sortBy === 'accuracy'
                ? 'bg-amber-400 text-slate-950 shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Target className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ketepatan (%)</span>
          </button>
        </div>
      </div>

      {/* TOP 3 PODIUM SECTION */}
      {filteredEntries.length >= 3 && (
        <div className="bg-gradient-to-b from-indigo-900/10 via-slate-50 to-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="text-center mb-6">
            <h3 className="text-lg font-black text-slate-900 flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>Podium 3 Teratas Murid Cemerlang</span>
            </h3>
            <p className="text-xs text-slate-500">
              Tahniah kepada jaguh-jaguh kuiz yang menduduki kedudukan teratas!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-6 items-end max-w-2xl mx-auto pt-4 pb-2">
            {/* 2nd Place (Silver) */}
            {top2 && (
              <div className="flex flex-col items-center">
                <div className="relative mb-2 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-slate-300 text-slate-800 flex items-center justify-center font-black text-xs shadow-xs mb-1 border-2 border-white">
                    🥈
                  </div>
                  <StudentAvatarIcon avatarId={top2.avatarId} size="lg" />
                  {top2.isCurrentUser && (
                    <span className="mt-1 text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                      Anda
                    </span>
                  )}
                </div>
                <div className="text-center w-full px-1">
                  <div className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                    {top2.studentName}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    Thn {top2.year} • {top2.className}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-slate-700 mt-1">
                    {top2.totalScore} pts
                  </div>
                </div>
                {/* Podium block */}
                <div className="w-full h-24 sm:h-28 bg-gradient-to-t from-slate-300 to-slate-200 rounded-t-2xl mt-3 flex items-center justify-center border-t-4 border-slate-400 shadow-xs">
                  <span className="text-2xl sm:text-3xl font-black text-slate-500/60">2</span>
                </div>
              </div>
            )}

            {/* 1st Place (Gold) */}
            {top1 && (
              <div className="flex flex-col items-center">
                <div className="relative mb-2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-black text-sm shadow-md mb-1 border-2 border-white animate-bounce">
                    👑
                  </div>
                  <StudentAvatarIcon
                    avatarId={top1.avatarId}
                    size="xl"
                    className="ring-4 ring-amber-400 ring-offset-2"
                  />
                  {top1.isCurrentUser && (
                    <span className="mt-1 text-[10px] font-black bg-indigo-600 text-white px-2.5 py-0.5 rounded-full">
                      Anda
                    </span>
                  )}
                </div>
                <div className="text-center w-full px-1">
                  <div className="font-black text-sm sm:text-base text-slate-900 truncate">
                    {top1.studentName}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    Thn {top1.year} • {top1.className}
                  </div>
                  <div className="text-sm sm:text-base font-black text-amber-600 mt-1 flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{top1.totalScore} pts</span>
                  </div>
                </div>
                {/* Podium block */}
                <div className="w-full h-32 sm:h-36 bg-gradient-to-t from-amber-300 to-amber-200 rounded-t-2xl mt-3 flex flex-col items-center justify-center border-t-4 border-amber-400 shadow-md">
                  <Trophy className="w-5 h-5 text-amber-600/70 mb-1" />
                  <span className="text-3xl sm:text-4xl font-black text-amber-700/60">1</span>
                </div>
              </div>
            )}

            {/* 3rd Place (Bronze) */}
            {top3 && (
              <div className="flex flex-col items-center">
                <div className="relative mb-2 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center font-black text-xs shadow-xs mb-1 border-2 border-white">
                    🥉
                  </div>
                  <StudentAvatarIcon avatarId={top3.avatarId} size="lg" />
                  {top3.isCurrentUser && (
                    <span className="mt-1 text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                      Anda
                    </span>
                  )}
                </div>
                <div className="text-center w-full px-1">
                  <div className="font-extrabold text-xs sm:text-sm text-slate-900 truncate">
                    {top3.studentName}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    Thn {top3.year} • {top3.className}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-amber-800 mt-1">
                    {top3.totalScore} pts
                  </div>
                </div>
                {/* Podium block */}
                <div className="w-full h-18 sm:h-20 bg-gradient-to-t from-amber-700/30 to-amber-600/20 rounded-t-2xl mt-3 flex items-center justify-center border-t-4 border-amber-700/40 shadow-xs">
                  <span className="text-xl sm:text-2xl font-black text-amber-900/40">3</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FULL LEADERBOARD TABLE */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Medal className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Kedudukan Lengkap Murid ({filteredEntries.length})
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            KSSR Semakan KPM
          </span>
        </div>

        <div className="divide-y divide-slate-100 overflow-x-auto">
          {filteredEntries.map((entry, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;
            const isUser = entry.isCurrentUser;

            return (
              <div
                key={entry.id}
                className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 sm:gap-4 transition ${
                  isUser
                    ? 'bg-amber-50/70 hover:bg-amber-50 border-l-4 border-l-amber-500'
                    : 'hover:bg-slate-50'
                }`}
              >
                {/* Rank & Student Info */}
                <div className="flex items-center gap-3 min-w-0">
                  {/* Rank Badge */}
                  <div className="w-8 flex items-center justify-center shrink-0">
                    {rank === 1 ? (
                      <span className="text-lg">🥇</span>
                    ) : rank === 2 ? (
                      <span className="text-lg">🥈</span>
                    ) : rank === 3 ? (
                      <span className="text-lg">🥉</span>
                    ) : (
                      <span className="text-xs font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                        #{rank}
                      </span>
                    )}
                  </div>

                  {/* Avatar */}
                  <StudentAvatarIcon avatarId={entry.avatarId} size="md" />

                  {/* Name & Class info */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                        {entry.studentName}
                      </h4>
                      {isUser && (
                        <span className="text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded-full shrink-0">
                          Profil Anda
                        </span>
                      )}
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded shrink-0 hidden sm:inline">
                        {entry.rankTitle}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 truncate mt-0.5">
                      <span className="font-bold text-indigo-700">
                        Tahun {entry.year}
                      </span>
                      <span>•</span>
                      <span>{entry.className}</span>
                      {entry.schoolName && (
                        <>
                          <span className="hidden md:inline">•</span>
                          <span className="hidden md:inline text-slate-400 truncate">
                            {entry.schoolName}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Performance Stats on Right */}
                <div className="flex items-center gap-3 sm:gap-6 shrink-0">
                  {/* Accuracy Bar (Desktop) */}
                  <div className="hidden lg:flex flex-col items-end w-24">
                    <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                      <Target className="w-3 h-3 text-emerald-600" />
                      <span>{entry.accuracyRate}% Betul</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 mt-1 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full"
                        style={{ width: `${entry.accuracyRate}%` }}
                      />
                    </div>
                  </div>

                  {/* Daily Streak & Challenges */}
                  <div className="hidden sm:flex flex-col items-center text-center">
                    <div className="text-[10px] text-slate-400 font-bold">Rentetan</div>
                    <div className="text-xs font-black text-orange-600 flex items-center gap-0.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{entry.dailyStreak} hari</span>
                    </div>
                  </div>

                  {/* Badges Earned */}
                  <div className="hidden md:flex flex-col items-center text-center">
                    <div className="text-[10px] text-slate-400 font-bold">Lencana</div>
                    <div className="text-xs font-black text-amber-600 flex items-center gap-0.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{entry.badgesCount}</span>
                    </div>
                  </div>

                  {/* Total Score */}
                  <div className="text-right min-w-[70px]">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Mata</div>
                    <div className="text-sm sm:text-base font-black text-slate-900">
                      {entry.totalScore.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* HOW POINTS WORK EXPLAINER (Rules of Friendly Competition) */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-700 flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Bagaimana Cara Mengumpul Mata Papan Pendahulu?
            </h4>
            <p className="text-xs text-slate-500">
              Sistem ganjaran berperingkat yang menyokong ketekunan dan kemahiran berfikir aras tinggi (KBAT)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-emerald-600 font-black text-base">+10</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Jawapan Betul</div>
            <div className="text-[10px] text-slate-500">Setiap soalan kuiz</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-indigo-600 font-black text-base">+15</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Soalan KBAT</div>
            <div className="text-[10px] text-slate-500">Aras aplikasi/analisis</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-amber-600 font-black text-base">+30</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Skor 100%</div>
            <div className="text-[10px] text-slate-500">Bonus kuiz sempurna</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-orange-600 font-black text-base">+50</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Cabaran Harian</div>
            <div className="text-[10px] text-slate-500">Selesai kuiz harian</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-rose-600 font-black text-base">+10/hari</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Rentetan Harian</div>
            <div className="text-[10px] text-slate-500">Bonus streak berturut</div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <div className="text-purple-600 font-black text-base">+25</div>
            <div className="text-[11px] font-bold text-slate-800 mt-0.5">Lencana Baharu</div>
            <div className="text-[10px] text-slate-500">Setiap lencana dibuka</div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-emerald-800 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Ganjaran Baucar Tunai: Capai 100 mata (RM5), 250 mata (RM10), 500 mata (RM20) & 1,000 mata (RM50)!</span>
          </div>
          <button
            onClick={onStartQuiz}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-xs cursor-pointer flex items-center gap-1.5 ml-auto"
          >
            <span>Mula Menjawab Sekarang</span>
            <PlayCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
