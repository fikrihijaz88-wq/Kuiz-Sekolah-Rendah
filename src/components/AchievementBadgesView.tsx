import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Trophy,
  Crown,
  Star,
  Sparkles,
  Zap,
  Calculator,
  FlaskConical,
  GraduationCap,
  Compass,
  Footprints,
  Lock,
  CheckCircle2,
  PartyPopper,
  Flame,
  Filter,
  CalendarCheck,
} from 'lucide-react';
import { AchievementBadge, StudentAchievementStats } from '../types';

interface AchievementBadgesViewProps {
  stats: StudentAchievementStats;
  allBadges: AchievementBadge[];
  newlyUnlockedBadges: AchievementBadge[];
}

export const AchievementBadgesView: React.FC<AchievementBadgesViewProps> = ({
  stats,
  allBadges,
  newlyUnlockedBadges,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'unlocked' | 'locked'>('all');

  const unlockedCount = allBadges.filter((b) => b.isUnlocked).length;
  const totalBadges = allBadges.length;

  const filteredBadges = allBadges.filter((b) => {
    if (activeFilter === 'unlocked') return b.isUnlocked;
    if (activeFilter === 'locked') return !b.isUnlocked;
    return true;
  });

  // Render proper icon component
  const renderBadgeIcon = (iconName: string, isUnlocked: boolean, colorScheme: string) => {
    const iconProps = { className: `w-6 h-6 ${isUnlocked ? 'text-white' : 'text-slate-400'}` };

    switch (iconName) {
      case 'Footprints':
        return <Footprints {...iconProps} />;
      case 'Compass':
        return <Compass {...iconProps} />;
      case 'Award':
        return <Award {...iconProps} />;
      case 'GraduationCap':
        return <GraduationCap {...iconProps} />;
      case 'Crown':
        return <Crown {...iconProps} />;
      case 'Calculator':
        return <Calculator {...iconProps} />;
      case 'FlaskConical':
        return <FlaskConical {...iconProps} />;
      case 'Star':
        return <Star {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'Zap':
        return <Zap {...iconProps} />;
      case 'Trophy':
        return <Trophy {...iconProps} />;
      case 'CalendarCheck':
        return <CalendarCheck {...iconProps} />;
      case 'Flame':
        return <Flame {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  // Color theme generator
  const getBadgeColors = (colorScheme: string, isUnlocked: boolean) => {
    if (!isUnlocked) {
      return {
        bgGradient: 'bg-slate-100',
        ring: 'border-slate-200',
        iconBg: 'bg-slate-300',
        pill: 'bg-slate-200 text-slate-600',
        bar: 'bg-slate-300',
      };
    }

    switch (colorScheme) {
      case 'gold':
        return {
          bgGradient: 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white',
          ring: 'border-amber-300/80 hover:border-amber-400',
          iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600 shadow-amber-500/30',
          pill: 'bg-amber-100 text-amber-900 border-amber-200',
          bar: 'bg-amber-500',
        };
      case 'emerald':
        return {
          bgGradient: 'bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-white',
          ring: 'border-emerald-300/80 hover:border-emerald-400',
          iconBg: 'bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-emerald-500/30',
          pill: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          bar: 'bg-emerald-500',
        };
      case 'blue':
        return {
          bgGradient: 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-white',
          ring: 'border-blue-300/80 hover:border-blue-400',
          iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/30',
          pill: 'bg-blue-100 text-blue-900 border-blue-200',
          bar: 'bg-blue-500',
        };
      case 'purple':
        return {
          bgGradient: 'bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-white',
          ring: 'border-purple-300/80 hover:border-purple-400',
          iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/30',
          pill: 'bg-purple-100 text-purple-900 border-purple-200',
          bar: 'bg-purple-500',
        };
      case 'rose':
        return {
          bgGradient: 'bg-gradient-to-br from-rose-500/10 via-rose-500/5 to-white',
          ring: 'border-rose-300/80 hover:border-rose-400',
          iconBg: 'bg-gradient-to-br from-rose-400 to-rose-600 shadow-rose-500/30',
          pill: 'bg-rose-100 text-rose-900 border-rose-200',
          bar: 'bg-rose-500',
        };
      default:
        return {
          bgGradient: 'bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white',
          ring: 'border-amber-300',
          iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600',
          pill: 'bg-amber-100 text-amber-900',
          bar: 'bg-amber-500',
        };
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
      {/* Header with Title and Summary Counters */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20 shrink-0">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              Sistem Lencana Pencapaian Murid
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                {unlockedCount}/{totalBadges} Dibuka
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Kumpul lencana istimewa dengan menyelesaikan soalan dan mencapai markah 100% mengikut subjek.
            </p>
          </div>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
            <span className="text-slate-500 mr-1">Jumlah Soalan:</span>
            <strong className="text-slate-800 font-bold">{stats.totalQuestionsAnswered}</strong>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs">
            <span className="text-amber-800 mr-1">Skor 100%:</span>
            <strong className="text-amber-900 font-bold">{stats.perfectQuizzesCount} kali</strong>
          </div>
        </div>
      </div>

      {/* Newly Unlocked Celebration Banner (if any unlocked in this session) */}
      <AnimatePresence>
        {newlyUnlockedBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/90 text-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                <PartyPopper className="w-7 h-7 animate-bounce" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded-full mb-1">
                  <Sparkles className="w-3.5 h-3.5" /> Tahniah! Lencana Baharu Dibuka!
                </span>
                <h4 className="font-bold text-base sm:text-lg text-slate-950">
                  Anda telah membuka {newlyUnlockedBadges.length} lencana dalam kuiz ini:
                </h4>
                <p className="text-xs sm:text-sm text-slate-900/90 font-medium">
                  {newlyUnlockedBadges.map((b) => b.titleMs).join(' • ')}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Tapis Lencana:
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            id="filter-badges-all"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua ({totalBadges})
          </button>
          <button
            id="filter-badges-unlocked"
            onClick={() => setActiveFilter('unlocked')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
              activeFilter === 'unlocked'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Telah Dibuka ({unlockedCount})
          </button>
          <button
            id="filter-badges-locked"
            onClick={() => setActiveFilter('locked')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
              activeFilter === 'locked'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Belum Dibuka ({totalBadges - unlockedCount})
          </button>
        </div>
      </div>

      {/* Badges Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBadges.map((badge) => {
          const isUnlocked = Boolean(badge.isUnlocked);
          const colors = getBadgeColors(badge.colorScheme, isUnlocked);
          const isNewlyEarned = newlyUnlockedBadges.some((nb) => nb.id === badge.id);

          return (
            <div
              key={badge.id}
              id={`badge-card-${badge.id}`}
              className={`relative rounded-2xl border p-5 transition-all duration-200 ${colors.bgGradient} ${colors.ring} ${
                isNewlyEarned ? 'ring-2 ring-amber-400 ring-offset-2' : ''
              } shadow-xs hover:shadow-sm`}
            >
              {/* Newly earned sticker */}
              {isNewlyEarned && (
                <div className="absolute -top-2.5 -right-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 uppercase tracking-wider">
                  <Flame className="w-3 h-3 text-red-600" /> Baharu!
                </div>
              )}

              <div className="flex items-start gap-3.5 mb-3">
                {/* Badge Icon Medallion */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${colors.iconBg}`}
                >
                  {isUnlocked ? (
                    renderBadgeIcon(badge.iconName, true, badge.colorScheme)
                  ) : (
                    <Lock className="w-5 h-5 text-slate-400" />
                  )}
                </div>

                {/* Badge Titles */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4
                      className={`font-bold text-sm sm:text-base leading-snug truncate ${
                        isUnlocked ? 'text-slate-900' : 'text-slate-500'
                      }`}
                    >
                      {badge.titleMs}
                    </h4>
                  </div>
                  <span
                    className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full mt-1 border ${
                      isUnlocked
                        ? colors.pill
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                  >
                    {badge.requirementText}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {badge.description}
              </p>

              {/* Progress or Unlock Status */}
              <div className="pt-2 border-t border-slate-100/80">
                {isUnlocked ? (
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 font-bold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Lencana Berjaya Dimiliki
                    </span>
                    {badge.unlockedAt && (
                      <span className="text-[10px] text-slate-400">
                        {new Date(badge.unlockedAt).toLocaleDateString('ms-MY')}
                      </span>
                    )}
                  </div>
                ) : (
                  <div>
                    {badge.threshold ? (
                      <div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                          <span>Kemajuan:</span>
                          <strong className="text-slate-700 font-semibold">
                            {badge.progressCurrent || 0} / {badge.threshold} soalan
                          </strong>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-slate-400 transition-all duration-300 rounded-full"
                            style={{
                              width: `${Math.min(
                                100,
                                (((badge.progressCurrent || 0) / badge.threshold) * 100)
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    ) : badge.category === 'perfect_subject' ? (
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Syarat Buka:</span>
                        <span className="font-semibold text-amber-700">
                          Skor 100% {badge.subjectRequirement}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span>Status:</span>
                        <span className="font-semibold text-slate-500">Terkunci</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
