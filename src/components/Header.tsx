import React from 'react';
import { Sparkles, BookCheck, GraduationCap, Volume2, VolumeX, Flame, UserPlus, Users, Trophy, Gift, Printer, Target } from 'lucide-react';
import { StudentProfile } from '../types';
import { StudentAvatarIcon } from './StudentAvatarIcon';

interface HeaderProps {
  currentTab: 'quiz' | 'leaderboard' | 'generator' | 'print';
  onTabChange: (tab: 'quiz' | 'leaderboard' | 'generator' | 'print') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  dailyStreak?: number;
  isDailyMode?: boolean;
  onSelectDailyChallenge?: () => void;
  isAdaptiveMode?: boolean;
  onSelectAdaptiveReview?: () => void;
  activeProfile: StudentProfile | null;
  onOpenProfileModal: () => void;
  onOpenVouchers?: () => void;
  claimableVouchersCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  soundEnabled,
  onToggleSound,
  dailyStreak = 0,
  isDailyMode = false,
  onSelectDailyChallenge,
  isAdaptiveMode = false,
  onSelectAdaptiveReview,
  activeProfile,
  onOpenProfileModal,
  onOpenVouchers,
  claimableVouchersCount = 0,
}) => {
  return (
    <header className="bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Syllabus badge */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  KSSR Semakan Kuiz Pintar
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  KPM Standard
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Tahun 2, Tahun 4 & Tahun 5 • 5 Subjek Teras KPM (Matematik, Sains, BM, BI, Pendidikan Islam)
              </p>
            </div>

            {/* Sound toggle on mobile */}
            <button
              id="btn-sound-mobile"
              onClick={onToggleSound}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white md:hidden transition cursor-pointer"
              title={soundEnabled ? 'Matikan Suara Bacaan' : 'Hidupkan Suara Bacaan'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end overflow-x-auto pb-1 md:pb-0">
            {/* Adaptive Review Button */}
            {onSelectAdaptiveReview && (
              <button
                id="nav-tab-adaptive-review"
                onClick={onSelectAdaptiveReview}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  currentTab === 'quiz' && isAdaptiveMode
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-800/90 text-indigo-300 hover:bg-slate-800 hover:text-white border border-indigo-500/40'
                }`}
                title="Ulang Kaji Pintar: Fokus 20% topik paling mencabar dan soalan kerap silap!"
              >
                <Target className="w-4 h-4 text-indigo-300" />
                <span>Ulang Kaji Pintar</span>
              </button>
            )}

            {/* Cabaran Harian Button */}
            {onSelectDailyChallenge && (
              <button
                id="nav-tab-daily-challenge"
                onClick={onSelectDailyChallenge}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition cursor-pointer whitespace-nowrap ${
                  currentTab === 'quiz' && isDailyMode
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-sm'
                    : 'bg-slate-800/90 text-amber-400 hover:bg-slate-800 hover:text-amber-300 border border-amber-500/30'
                }`}
                title="Cabaran Harian: Soalan bertukar automatik setiap hari pada 12:00 AM!"
              >
                <Flame className={`w-4 h-4 ${currentTab === 'quiz' && isDailyMode ? 'text-slate-950 fill-slate-950' : 'text-orange-400 fill-orange-400'}`} />
                <span>Cabaran Harian</span>
                {dailyStreak > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    currentTab === 'quiz' && isDailyMode ? 'bg-slate-950 text-amber-400' : 'bg-amber-400/20 text-amber-300'
                  }`}>
                    {dailyStreak}🔥
                  </span>
                )}
              </button>
            )}

            <button
              id="nav-tab-quiz"
              onClick={() => onTabChange('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'quiz' && !isDailyMode && !isAdaptiveMode
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookCheck className="w-4 h-4" />
              <span>Mod Kuiz</span>
            </button>

            <button
              id="nav-tab-print"
              onClick={() => onTabChange('print')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'print'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
              title="Cetak Lembaran Kerja / Soalan PDF A4 (Set Harian Bertukar Setiap Hari)"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Cetak Lembaran PDF</span>
            </button>

            <button
              id="nav-tab-leaderboard"
              onClick={() => onTabChange('leaderboard')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'leaderboard'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Papan Pendahulu</span>
            </button>

            <button
              id="nav-tab-generator"
              onClick={() => onTabChange('generator')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'generator'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Penjana Soalan AI</span>
            </button>

            {/* Cash Voucher Button */}
            {onOpenVouchers && (
              <button
                id="btn-header-cash-vouchers"
                onClick={onOpenVouchers}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/60 bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-bold transition cursor-pointer text-xs whitespace-nowrap shadow-xs"
                title="Pusat Baucar Tunai Murid (RM5 - RM50)"
              >
                <Gift className="w-4 h-4 text-emerald-400" />
                <span>Baucar Tunai</span>
                {claimableVouchersCount > 0 && (
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full animate-bounce">
                    {claimableVouchersCount} Boleh Tebus!
                  </span>
                )}
              </button>
            )}

            {/* Student Profile Button */}
            <button
              id="btn-header-student-profile"
              onClick={onOpenProfileModal}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition cursor-pointer whitespace-nowrap text-xs ${
                activeProfile
                  ? 'border-indigo-500/50 bg-indigo-950/60 hover:bg-indigo-900/80 text-white'
                  : 'border-amber-400 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold'
              }`}
              title={activeProfile ? `Profil Murid: ${activeProfile.name}` : 'Klik untuk daftar profil murid'}
            >
              {activeProfile ? (
                <>
                  <StudentAvatarIcon avatarId={activeProfile.avatarId} size="sm" />
                  <div className="text-left leading-tight hidden sm:block">
                    <div className="font-bold text-white max-w-[130px] truncate">
                      {activeProfile.name}
                    </div>
                    <div className="text-[10px] text-indigo-300">
                      Tahun {activeProfile.year} • {activeProfile.className}
                    </div>
                  </div>
                  <span className="sm:hidden font-bold">{activeProfile.name.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4 text-amber-400" />
                  <span>Daftar Murid</span>
                </>
              )}
            </button>

            {/* Desktop Audio Reader Button */}
            <button
              id="btn-sound-desktop"
              onClick={onToggleSound}
              className={`hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition cursor-pointer ${
                soundEnabled
                  ? 'border-amber-400/40 bg-amber-500/10 text-amber-300'
                  : 'border-slate-700 bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title={soundEnabled ? 'Suara Bacaan Aktif: Bahasa Melayu Malaysia (ms-MY)' : 'Klik untuk aktifkan audio bacaan'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-400" />
                  <span>Suara: 🇲🇾 BM Asli</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span>Audio OFF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
