import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  BookCheck,
  GraduationCap,
  Volume2,
  VolumeX,
  Flame,
  UserPlus,
  Trophy,
  Gift,
  Printer,
  Target,
  ChevronDown,
  LayoutGrid,
  Star,
  CheckCircle2,
  Smile,
  X,
  ArrowRight,
  Swords,
  Zap
} from 'lucide-react';
import { StudentProfile } from '../types';
import { StudentAvatarIcon } from './StudentAvatarIcon';

interface HeaderProps {
  currentTab: 'quiz' | 'battle' | 'leaderboard' | 'generator' | 'print';
  onTabChange: (tab: 'quiz' | 'battle' | 'leaderboard' | 'generator' | 'print') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  dailyStreak?: number;
  isDailyMode?: boolean;
  onSelectDailyChallenge?: () => void;
  isAdaptiveMode?: boolean;
  onSelectAdaptiveReview?: () => void;
  onSelectPracticeMode?: () => void;
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
  isAdaptiveMode = false,
  onSelectDailyChallenge,
  onSelectAdaptiveReview,
  onSelectPracticeMode,
  activeProfile,
  onOpenProfileModal,
  onOpenVouchers,
  claimableVouchersCount = 0,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Determine current active label and icon for the main button
  const currentActiveInfo = (() => {
    if (currentTab === 'battle') {
      return { label: 'Quiz Battle (1v1)', color: 'bg-gradient-to-r from-amber-500 to-rose-600 text-white', icon: Swords };
    }
    if (currentTab === 'quiz') {
      if (isAdaptiveMode) {
        return { label: 'Ulang Kaji Pintar', color: 'bg-indigo-500 text-white', icon: Target };
      }
      if (isDailyMode) {
        return { label: 'Cabaran Harian', color: 'bg-amber-500 text-slate-950', icon: Flame };
      }
      return { label: 'Mod Latihan', color: 'bg-sky-500 text-white', icon: BookCheck };
    }
    if (currentTab === 'print') {
      return { label: 'Cetak PDF', color: 'bg-teal-500 text-white', icon: Printer };
    }
    if (currentTab === 'leaderboard') {
      return { label: 'Papan Pendahulu', color: 'bg-amber-400 text-slate-950', icon: Trophy };
    }
    if (currentTab === 'generator') {
      return { label: 'Penjana AI', color: 'bg-purple-500 text-white', icon: Sparkles };
    }
    return { label: 'Menu Utama', color: 'bg-slate-700 text-white', icon: LayoutGrid };
  })();

  const CurrentIcon = currentActiveInfo.icon;

  const handleSelectNav = (action: () => void) => {
    action();
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shadow-lg border-b border-indigo-900/50 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-2.5 sm:px-6 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo & Title (Optimized for Android, iOS & Desktop) */}
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div 
              onClick={() => {
                if (onSelectPracticeMode) onSelectPracticeMode();
                else onTabChange('quiz');
              }}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/25 cursor-pointer hover:scale-105 active:scale-95 transition-transform shrink-0"
              title="Kembali ke Laman Utama"
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 fill-amber-300" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span 
                  onClick={() => {
                    if (onSelectPracticeMode) onSelectPracticeMode();
                    else onTabChange('quiz');
                  }}
                  className="text-sm sm:text-lg font-black tracking-tight text-white flex items-center gap-1 cursor-pointer hover:text-amber-300 transition-colors truncate"
                >
                  <span className="hidden xs:inline">KSSR Kuiz Pintar</span>
                  <span className="xs:hidden">KSSR Pintar</span>
                  <span className="text-amber-400 text-xs sm:text-sm">⭐</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shrink-0">
                  Sekolah Kebangsaan (SK)
                </span>
              </div>
              <p className="text-[11px] text-indigo-200/80 hidden md:block truncate">
                5 Subjek Teras KPM • Ulang Kaji Pintar & Cabaran Harian
              </p>
            </div>
          </div>

          {/* Right Navigation Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* MAIN DROP-DOWN MENU BUTTON */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="btn-main-dropdown-menu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl font-black text-xs sm:text-sm transition-all cursor-pointer shadow-sm ${
                  isDropdownOpen
                    ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 ring-offset-2 ring-offset-slate-900 scale-102'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 active:scale-95'
                }`}
                aria-expanded={isDropdownOpen}
                title="Buka Menu Pilihan Pembelajaran"
              >
                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span className="font-black text-xs sm:text-sm">Menu</span>
                
                {/* Active Mode Tag inside button (Desktop/Tablet) */}
                <span className={`hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black ${currentActiveInfo.color}`}>
                  <CurrentIcon className="w-3 h-3" />
                  <span>{currentActiveInfo.label}</span>
                </span>

                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-slate-950' : 'text-indigo-200'}`} />
              </button>

              {/* UNIVERSAL RESPONSIVE DROPDOWN / MODAL (Android, iPhone iOS, iPad & Desktop) */}
              {isDropdownOpen && (
                <div 
                  className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-150"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="w-full max-w-lg bg-white text-slate-900 rounded-3xl shadow-2xl border-2 border-indigo-100 p-4 sm:p-5 mt-14 sm:mt-16 mb-6 max-h-[85vh] overflow-y-auto animate-in zoom-in-95 duration-150 relative"
                  >
                    
                    {/* Modal Header */}
                    <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold shadow-xs">
                          <Smile className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider">
                            Pilih Aktiviti Pembelajaran
                          </h4>
                          <p className="text-[11px] text-slate-500">
                            Jom buat latihan & kumpul bintang kejayaan!
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setIsDropdownOpen(false)}
                        className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition cursor-pointer flex items-center gap-1 font-bold text-xs"
                        title="Tutup Menu"
                      >
                        <span className="hidden xs:inline">Tutup</span>
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Section 1: Mod Pembelajaran & Kuiz */}
                    <div className="mb-4">
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-900/70 px-1 mb-2 flex items-center gap-1.5">
                        <BookCheck className="w-3.5 h-3.5 text-indigo-600" />
                        <span>1. Mod Kuiz & Ulang Kaji</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {/* Mod Latihan */}
                        <button
                          id="dropdown-nav-quiz"
                          onClick={() => handleSelectNav(() => {
                            if (onSelectPracticeMode) onSelectPracticeMode();
                            else onTabChange('quiz');
                          })}
                          className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between border cursor-pointer ${
                            currentTab === 'quiz' && !isDailyMode && !isAdaptiveMode
                              ? 'bg-sky-50 border-sky-400 text-sky-950 ring-2 ring-sky-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-sky-50/60 border-slate-200 text-slate-700 hover:border-sky-300'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1.5">
                            <span className="text-xl">📝</span>
                            {currentTab === 'quiz' && !isDailyMode && !isAdaptiveMode ? (
                              <span className="flex items-center gap-0.5 text-[10px] bg-sky-500 text-white font-bold px-1.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                Aktif
                              </span>
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-slate-900">Mod Latihan</div>
                            <p className="text-[10px] text-slate-500 mt-0.5">Ujian ikut subjek & topik</p>
                          </div>
                        </button>

                        {/* Quiz Battle (1v1) */}
                        <button
                          id="dropdown-nav-battle"
                          onClick={() => handleSelectNav(() => onTabChange('battle'))}
                          className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between border cursor-pointer ${
                            currentTab === 'battle'
                              ? 'bg-gradient-to-br from-amber-50 to-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-300 font-bold shadow-xs'
                              : 'bg-gradient-to-br from-amber-50/60 to-rose-50/40 hover:from-amber-100/80 hover:to-rose-100/80 border-rose-200 text-slate-800 hover:border-rose-300'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1.5">
                            <div className="flex items-center gap-1">
                              <span className="text-xl">⚔️</span>
                              <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-rose-500 text-white animate-pulse">
                                1v1
                              </span>
                            </div>
                            {currentTab === 'battle' ? (
                              <span className="flex items-center gap-0.5 text-[10px] bg-rose-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                Aktif
                              </span>
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                              <span>Quiz Battle</span>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-0.5">Lumba 2 murid serentak</p>
                          </div>
                        </button>

                        {/* Cabaran Harian */}
                        <button
                          id="dropdown-nav-daily"
                          onClick={() => handleSelectNav(() => {
                            if (onSelectDailyChallenge) onSelectDailyChallenge();
                          })}
                          className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between border cursor-pointer ${
                            currentTab === 'quiz' && isDailyMode
                              ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-amber-50/60 border-slate-200 text-slate-700 hover:border-amber-300'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1.5">
                            <div className="flex items-center gap-1">
                              <span className="text-xl">🔥</span>
                              {dailyStreak > 0 && (
                                <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-amber-200 text-amber-900">
                                  {dailyStreak} Hari
                                </span>
                              )}
                            </div>
                            {currentTab === 'quiz' && isDailyMode ? (
                              <span className="flex items-center gap-0.5 text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                Aktif
                              </span>
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-slate-900">Cabaran Harian</div>
                            <p className="text-[10px] text-slate-500 mt-0.5">Soalan baharu tiap hari</p>
                          </div>
                        </button>

                        {/* Ulang Kaji Pintar */}
                        <button
                          id="dropdown-nav-adaptive"
                          onClick={() => handleSelectNav(() => {
                            if (onSelectAdaptiveReview) onSelectAdaptiveReview();
                          })}
                          className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between border cursor-pointer ${
                            currentTab === 'quiz' && isAdaptiveMode
                              ? 'bg-indigo-50 border-indigo-400 text-indigo-950 ring-2 ring-indigo-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-indigo-50/60 border-slate-200 text-slate-700 hover:border-indigo-300'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1.5">
                            <span className="text-xl">🎯</span>
                            {currentTab === 'quiz' && isAdaptiveMode ? (
                              <span className="flex items-center gap-0.5 text-[10px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3" />
                                Aktif
                              </span>
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-extrabold text-xs text-slate-900">Ulang Kaji Pintar</div>
                            <p className="text-[10px] text-slate-500 mt-0.5">Fokus 20% topik sukar</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Section 2: Bahan, Ganjaran & Pencapaian */}
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-purple-900/70 px-1 mb-2 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-purple-600" />
                        <span>2. Bahan, Ganjaran & Pencapaian</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {/* Cetak Lembaran PDF */}
                        <button
                          id="dropdown-nav-print"
                          onClick={() => handleSelectNav(() => onTabChange('print'))}
                          className={`p-3 rounded-2xl text-left transition-all flex items-center gap-3 border cursor-pointer ${
                            currentTab === 'print'
                              ? 'bg-teal-50 border-teal-400 text-teal-950 ring-2 ring-teal-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-teal-50/60 border-slate-200 text-slate-700 hover:border-teal-300'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                            <Printer className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                              <span>Cetak Lembaran PDF</span>
                              {currentTab === 'print' && <CheckCircle2 className="w-3 h-3 text-teal-600" />}
                            </div>
                            <p className="text-[10px] text-slate-500">Soalan & skema jawapan A4</p>
                          </div>
                        </button>

                        {/* Papan Pendahulu */}
                        <button
                          id="dropdown-nav-leaderboard"
                          onClick={() => handleSelectNav(() => onTabChange('leaderboard'))}
                          className={`p-3 rounded-2xl text-left transition-all flex items-center gap-3 border cursor-pointer ${
                            currentTab === 'leaderboard'
                              ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-amber-50/60 border-slate-200 text-slate-700 hover:border-amber-300'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                            <Trophy className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                              <span>Papan Pendahulu</span>
                              {currentTab === 'leaderboard' && <CheckCircle2 className="w-3 h-3 text-amber-600" />}
                            </div>
                            <p className="text-[10px] text-slate-500">Carta juara murid & lencana</p>
                          </div>
                        </button>

                        {/* Pusat Baucar Tunai */}
                        {onOpenVouchers && (
                          <button
                            id="dropdown-nav-vouchers"
                            onClick={() => handleSelectNav(() => onOpenVouchers())}
                            className="p-3 rounded-2xl text-left transition-all flex items-center gap-3 border border-emerald-300/80 bg-emerald-50/70 hover:bg-emerald-100/70 text-slate-700 cursor-pointer"
                          >
                            <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                              <Gift className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="font-extrabold text-xs text-emerald-950 flex items-center gap-1.5 flex-wrap">
                                <span>Pusat Baucar Tunai</span>
                                {claimableVouchersCount > 0 && (
                                  <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                                    {claimableVouchersCount} Ada!
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-emerald-700">Tebus ganjaran RM5 - RM50</p>
                            </div>
                          </button>
                        )}

                        {/* Penjana Soalan AI */}
                        <button
                          id="dropdown-nav-generator"
                          onClick={() => handleSelectNav(() => onTabChange('generator'))}
                          className={`p-3 rounded-2xl text-left transition-all flex items-center gap-3 border cursor-pointer ${
                            currentTab === 'generator'
                              ? 'bg-purple-50 border-purple-400 text-purple-950 ring-2 ring-purple-300 font-bold shadow-xs'
                              : 'bg-slate-50/80 hover:bg-purple-50/60 border-slate-200 text-slate-700 hover:border-purple-300'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-extrabold text-xs text-slate-900 flex items-center gap-1">
                              <span>Penjana Soalan AI</span>
                              {currentTab === 'generator' && <CheckCircle2 className="w-3 h-3 text-purple-600" />}
                            </div>
                            <p className="text-[10px] text-slate-500">Cipta soalan DSKP baru</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Dropdown Footer Tips */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold text-slate-600 text-[11px]">
                        💡 Tip: Lakukan kuiz harian untuk kumpul streak!
                      </span>
                      <button
                        onClick={() => handleSelectNav(() => onOpenProfileModal())}
                        className="font-black text-indigo-600 hover:text-indigo-800 underline cursor-pointer text-xs"
                      >
                        Urus Profil Murid
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* QUICK QUIZ BATTLE 1v1 SHORTCUT */}
            <button
              id="btn-header-quiz-battle"
              onClick={() => onTabChange('battle')}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl border font-black transition cursor-pointer text-xs shadow-xs shrink-0 ${
                currentTab === 'battle'
                  ? 'border-rose-400 bg-rose-500/30 text-rose-200 ring-2 ring-rose-400/50'
                  : 'border-rose-400/40 bg-gradient-to-r from-amber-500/20 to-rose-500/20 hover:from-amber-500/30 hover:to-rose-500/30 text-rose-300'
              }`}
              title="Mod Pertarungan Kuiz 1v1 (Quiz Battle Serentak)"
            >
              <Swords className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 animate-pulse" />
              <span className="hidden sm:inline">Battle</span>
              <span className="bg-rose-500 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full">
                1v1
              </span>
            </button>

            {/* QUICK CASH VOUCHER SHORTCUT */}
            {onOpenVouchers && (
              <button
                id="btn-header-cash-vouchers"
                onClick={onOpenVouchers}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-2xl border border-emerald-400/50 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-extrabold transition cursor-pointer text-xs shadow-xs shrink-0"
                title="Pusat Baucar Tunai Murid (RM5 - RM50)"
              >
                <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="hidden md:inline">Baucar</span>
                {claimableVouchersCount > 0 ? (
                  <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.5 rounded-full animate-bounce">
                    {claimableVouchersCount}
                  </span>
                ) : (
                  <span className="text-[10px] text-emerald-300/80 hidden sm:inline">RM</span>
                )}
              </button>
            )}

            {/* STUDENT PROFILE PILL */}
            <button
              id="btn-header-student-profile"
              onClick={onOpenProfileModal}
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3.5 py-1.5 rounded-2xl border transition cursor-pointer text-xs shrink-0 ${
                activeProfile
                  ? 'border-indigo-400/50 bg-indigo-900/60 hover:bg-indigo-800/80 text-white'
                  : 'border-amber-400/70 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold'
              }`}
              title={activeProfile ? `Profil Murid: ${activeProfile.name}` : 'Klik untuk daftar profil murid'}
            >
              {activeProfile ? (
                <>
                  <StudentAvatarIcon avatarId={activeProfile.avatarId} size="sm" />
                  <div className="text-left leading-tight hidden sm:block">
                    <div className="font-extrabold text-white max-w-[110px] truncate flex items-center gap-1">
                      <span>{activeProfile.name.split(' ')[0]}</span>
                      <span className="text-amber-400">✨</span>
                    </div>
                    <div className="text-[10px] text-indigo-300 font-semibold">
                      Tahun {activeProfile.year} • {activeProfile.className}
                    </div>
                  </div>
                  <span className="sm:hidden font-black text-xs">{activeProfile.name.split(' ')[0]}</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  <span className="font-bold hidden sm:inline">Daftar Murid</span>
                  <span className="font-bold sm:hidden">Daftar</span>
                </>
              )}
            </button>

            {/* AUDIO / SOUND TOGGLE */}
            <button
              id="btn-sound-toggle-main"
              onClick={onToggleSound}
              className={`flex items-center justify-center p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl border text-xs font-bold transition cursor-pointer shrink-0 ${
                soundEnabled
                  ? 'border-amber-400/50 bg-amber-500/15 text-amber-300 hover:bg-amber-500/25'
                  : 'border-slate-700 bg-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
              title={soundEnabled ? 'Suara Bacaan: Bahasa Melayu Malaysia (Klik untuk matikan)' : 'Klik untuk hidupkan suara bacaan soalan'}
            >
              {soundEnabled ? (
                <div className="flex items-center gap-1">
                  <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="hidden lg:inline text-[11px]">🇲🇾 Suara</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span className="hidden lg:inline text-[11px]">Senyap</span>
                </div>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
