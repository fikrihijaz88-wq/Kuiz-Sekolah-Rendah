import React, { useState, useEffect } from 'react';
import { QuizQuestion, QuizUserAnswer, StudentProfile } from '../types';
import { Award, RotateCcw, Sparkles, CheckCircle2, XCircle, Code, Trophy, Flame, CalendarCheck, Printer, User, UserPlus } from 'lucide-react';
import { processQuizCompletion } from '../utils/achievementSystem';
import { recordDailyChallengeCompleted, getDailyStreakData } from '../utils/dailyChallenge';
import { AchievementBadgesView } from './AchievementBadgesView';
import { StudentAvatarIcon } from './StudentAvatarIcon';
import { speakText } from '../utils/speech';

interface QuizScoreSummaryProps {
  questions: QuizQuestion[];
  answers: Record<string, QuizUserAnswer>;
  onRestart: () => void;
  onOpenGenerator: () => void;
  onOpenSchema: () => void;
  soundEnabled?: boolean;
  isDailyChallenge?: boolean;
  onDailyChallengeCompleted?: () => void;
  activeProfile?: StudentProfile | null;
  onOpenProfileModal?: () => void;
}

export const QuizScoreSummary: React.FC<QuizScoreSummaryProps> = ({
  questions,
  answers,
  onRestart,
  onOpenGenerator,
  onOpenSchema,
  soundEnabled = false,
  isDailyChallenge = false,
  onDailyChallengeCompleted,
  activeProfile = null,
  onOpenProfileModal,
}) => {
  const total = questions.length;
  const correctCount = (Object.values(answers) as QuizUserAnswer[]).filter((a) => a?.isCorrect).length;
  const percentage = Math.round((correctCount / (total || 1)) * 100);

  // If this is a daily challenge, record completion and fetch current streak
  const [dailyResult] = useState(() => {
    if (isDailyChallenge) {
      const rec = recordDailyChallengeCompleted();
      onDailyChallengeCompleted?.();
      return rec;
    }
    return null;
  });

  const streakData = getDailyStreakData();

  // Evaluate achievements once on mount for this completed quiz session
  const [achievementResult] = useState(() =>
    processQuizCompletion(
      questions,
      answers,
      isDailyChallenge,
      dailyResult ? dailyResult.newStreak : streakData.currentStreak
    )
  );

  // Voice announcement for newly unlocked badges
  useEffect(() => {
    if (soundEnabled && achievementResult.newlyUnlockedBadges.length > 0) {
      const badgeTitles = achievementResult.newlyUnlockedBadges.map((b) => b.titleMs).join(', ');
      const speechText = `Tahniah! Anda telah membuka lencana baharu: ${badgeTitles}.`;
      speakText(speechText, 'ms');
    }
  }, [soundEnabled, achievementResult.newlyUnlockedBadges]);

  const getEvaluation = (pct: number) => {
    if (pct >= 85) {
      return {
        title: 'Cemerlang! (Tahap Penguasaan TP6)',
        desc: 'Syabas! Anda menguasai kemahiran topik KSSR Semakan ini dengan cemerlang.',
        badgeBg: 'bg-emerald-500',
        textColor: 'text-emerald-700',
      };
    }
    if (pct >= 60) {
      return {
        title: 'Tahniah! (Tahap Penguasaan TP4 - TP5)',
        desc: 'Bagus! Anda memahami kebanyakan konsep. Teruskan latihan untuk mencapai tahap cemerlang.',
        badgeBg: 'bg-blue-500',
        textColor: 'text-blue-700',
      };
    }
    return {
      title: 'Teruskan Usaha! (Perlu Pengukuhan TP2 - TP3)',
      desc: 'Jangan putus asa. Baca ulasan jawapan di bawah dan cuba sekali lagi untuk memantapkan pemahaman.',
      badgeBg: 'bg-amber-500',
      textColor: 'text-amber-700',
    };
  };

  const evalData = getEvaluation(percentage);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Score Banner */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 text-center relative overflow-hidden">
        {/* Student Profile Ribbon / Header */}
        {activeProfile ? (
          <div className="bg-gradient-to-r from-indigo-50 via-slate-50 to-indigo-50 border border-indigo-100 rounded-2xl p-4 mb-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3.5">
              <StudentAvatarIcon avatarId={activeProfile.avatarId} size="lg" />
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700">
                  Slip Pentaksiran Rasmi Murid
                </div>
                <div className="text-base font-extrabold text-slate-900">
                  {activeProfile.name}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Tahun {activeProfile.year} • Kelas {activeProfile.className}
                  {activeProfile.schoolName ? ` • ${activeProfile.schoolName}` : ''}
                </div>
              </div>
            </div>

            {onOpenProfileModal && (
              <button
                onClick={onOpenProfileModal}
                className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 bg-white hover:bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-200 transition cursor-pointer shrink-0"
              >
                Tukar Murid
              </button>
            )}
          </div>
        ) : (
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 mb-6 max-w-lg mx-auto flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center shrink-0">
                <UserPlus className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  Nama Murid Belum Didaftarkan
                </div>
                <div className="text-[11px] text-slate-600">
                  Daftarkan nama murid untuk cetak slip keputusan rasmi.
                </div>
              </div>
            </div>
            {onOpenProfileModal && (
              <button
                onClick={onOpenProfileModal}
                className="text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 px-3 py-1.5 rounded-xl transition cursor-pointer shrink-0 shadow-xs"
              >
                Daftar Murid
              </button>
            )}
          </div>
        )}

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 mb-4 ring-8 ring-amber-500/5">
          <Award className="w-8 h-8" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-1">
          {evalData.title}
        </h2>
        <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
          {evalData.desc}
        </p>

        {/* Daily challenge completed banner if in daily challenge mode */}
        {isDailyChallenge && (
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-amber-500/10 border border-amber-300 rounded-xl p-3.5 mb-6 max-w-md mx-auto flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Flame className="w-6 h-6 fill-white" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                Cabaran Harian Berjaya Diselesaikan!
              </div>
              <div className="text-sm font-extrabold text-slate-900">
                Rentetan Harian:{' '}
                <span className="text-orange-600">
                  {dailyResult?.newStreak || streakData.currentStreak} Hari Berturut-turut 🔥
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Score Ring / Number */}
        <div className="flex items-center justify-center gap-6 py-4 border-y border-slate-100 max-w-md mx-auto mb-6">
          <div>
            <span className="text-4xl font-extrabold text-slate-900">{correctCount}</span>
            <span className="text-xl text-slate-400 font-semibold">/{total}</span>
            <span className="block text-xs font-bold uppercase text-slate-400 mt-0.5">
              Jawapan Betul
            </span>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div>
            <span className="text-4xl font-extrabold text-indigo-600">{percentage}%</span>
            <span className="block text-xs font-bold uppercase text-slate-400 mt-0.5">
              Peratus Markah
            </span>
          </div>
          {achievementResult.newlyUnlockedBadges.length > 0 && (
            <>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <span className="text-4xl font-extrabold text-amber-500">
                  +{achievementResult.newlyUnlockedBadges.length}
                </span>
                <span className="block text-xs font-bold uppercase text-amber-600 mt-0.5">
                  Lencana Baharu!
                </span>
              </div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            id="btn-restart-quiz"
            onClick={onRestart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition shadow-sm cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulang Semula Kuiz</span>
          </button>

          <button
            id="btn-open-generator-from-summary"
            onClick={onOpenGenerator}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Jana Soalan AI Baharu</span>
          </button>

          <button
            id="btn-print-result-slip"
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-semibold text-sm transition shadow-xs cursor-pointer"
            title="Cetak slip atau simpan sebagai PDF"
          >
            <Printer className="w-4 h-4 text-indigo-600" />
            <span>Cetak Slip Keputusan</span>
          </button>

          <button
            id="btn-open-schema-from-summary"
            onClick={onOpenSchema}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition cursor-pointer"
          >
            <Code className="w-4 h-4" />
            <span>Salin Skema JSON</span>
          </button>
        </div>
      </div>

      {/* Achievement Badges Showcase Section */}
      <AchievementBadgesView
        stats={achievementResult.stats}
        allBadges={achievementResult.allBadges}
        newlyUnlockedBadges={achievementResult.newlyUnlockedBadges}
      />

      {/* Answer Review Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>Semakan Penuh Jawapan & Ulasan Pedagogi</span>
          <span className="text-xs font-normal text-slate-500">
            {total} Soalan Dinilai
          </span>
        </h3>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const ans = answers[q.id];
            const isCorrect = ans?.isCorrect ?? false;
            const chosen = ans?.selectedOption || 'Tiada';

            return (
              <div
                key={q.id}
                className={`p-4 sm:p-5 rounded-xl border transition ${
                  isCorrect
                    ? 'border-emerald-200 bg-emerald-50/40'
                    : 'border-rose-200 bg-rose-50/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                      {q.topic}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                      {q.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" /> Betul
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-rose-700">
                        <XCircle className="w-4 h-4" /> Salah
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                  {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mb-3">
                  <div className="p-2 rounded-lg bg-white/80 border border-slate-200">
                    <span className="text-slate-500 mr-2">Jawapan Anda:</span>
                    <strong className={isCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                      Pilihan {chosen} ({chosen !== 'Tiada' ? q.options[chosen as 'A' | 'B' | 'C' | 'D'] : 'Tiada'})
                    </strong>
                  </div>
                  <div className="p-2 rounded-lg bg-white/80 border border-slate-200">
                    <span className="text-slate-500 mr-2">Jawapan Betul:</span>
                    <strong className="text-emerald-700">
                      Pilihan {q.correctAnswer} ({q.options[q.correctAnswer]})
                    </strong>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <strong className="text-indigo-700 block mb-0.5">Ulasan Pedagogi Guru:</strong>
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
