/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { YearLevel, Subject, QuizQuestion, QuizUserAnswer, StudentProfile, QuizMode } from './types';
import { KSSR_TOPICS, INITIAL_KSSR_QUESTIONS } from './data/kssrQuestions';
import { Header } from './components/Header';
import { YearSubjectSelector } from './components/YearSubjectSelector';
import { DailyChallengeBanner } from './components/DailyChallengeBanner';
import { AdaptiveReviewBanner } from './components/AdaptiveReviewBanner';
import { QuizCard } from './components/QuizCard';
import { QuizScoreSummary } from './components/QuizScoreSummary';
import { AIGeneratorView } from './components/AIGeneratorView';
import { WorksheetPrintView } from './components/WorksheetPrintView';
import { StudentProfileModal } from './components/StudentProfileModal';
import { LeaderboardView } from './components/LeaderboardView';
import { CashVoucherModal } from './components/CashVoucherModal';
import { Sparkles, RotateCcw, Shuffle, ShieldAlert, Flame, BookOpen, UserPlus, Trophy, Gift, Printer, Calendar, Target } from 'lucide-react';
import { stopSpeech } from './utils/speech';
import {
  getTodayDateString,
  getFormattedMalayDate,
  getDailyQuestions,
  getDailyStreakData,
  isTodayCompleted,
  DailyStreakData,
} from './utils/dailyChallenge';
import { getStoredProfiles, getActiveProfile } from './utils/studentProfiles';
import { getEffectiveStudentScore } from './utils/leaderboardService';
import { getClaimableVouchersCount } from './utils/voucherService';
import { getAdaptiveReviewQuestions } from './utils/adaptiveReview';

export default function App() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'leaderboard' | 'generator' | 'print'>('quiz');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Dynamic live date string that checks for midnight day change automatically!
  const [todayDateStr, setTodayDateStr] = useState<string>(() => getTodayDateString());

  // Check for day rollover periodically so questions automatically rotate right at midnight (12:00 AM)
  useEffect(() => {
    const checkDateRollover = () => {
      const nowStr = getTodayDateString();
      setTodayDateStr((prev) => {
        if (prev !== nowStr) {
          // Date changed (12:00 AM midnight crossed!)
          setStreakData(getDailyStreakData());
          setCompletedToday(isTodayCompleted());
          return nowStr;
        }
        return prev;
      });
    };

    const interval = setInterval(checkDateRollover, 15000);
    window.addEventListener('focus', checkDateRollover);
    window.addEventListener('visibilitychange', checkDateRollover);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', checkDateRollover);
      window.removeEventListener('visibilitychange', checkDateRollover);
    };
  }, []);

  // Student Profiles Management
  const [profiles, setProfiles] = useState<StudentProfile[]>(() => getStoredProfiles());
  const [activeProfile, setActiveProfile] = useState<StudentProfile | null>(() => getActiveProfile());
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [profileModalInitialMode, setProfileModalInitialMode] = useState<'list' | 'register' | 'edit'>('list');

  // Cash Voucher Modal Management
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState<boolean>(false);

  // Quiz Mode: 'practice' (topical) vs 'daily' (daily challenge) vs 'adaptive' (adaptive review lowest 20%)
  const [quizMode, setQuizMode] = useState<QuizMode>('practice');
  const [dailySubject, setDailySubject] = useState<Subject | 'all'>('all');
  const [adaptiveSubject, setAdaptiveSubject] = useState<Subject | 'all'>('all');
  const [adaptiveVersion, setAdaptiveVersion] = useState<number>(0);

  // Daily Streak Data
  const [streakData, setStreakData] = useState<DailyStreakData>(() => getDailyStreakData());
  const [completedToday, setCompletedToday] = useState<boolean>(() => isTodayCompleted());

  // Filter criteria (defaults to active student's year if present)
  const [selectedYear, setSelectedYear] = useState<YearLevel>(() => (activeProfile?.year ? activeProfile.year : 2));
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Matematik');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Sync year with active student profile when changed
  const handleProfileChange = useCallback((newProfile: StudentProfile | null) => {
    setActiveProfile(newProfile);
    setProfiles(getStoredProfiles());
    if (newProfile && newProfile.year !== selectedYear) {
      setSelectedYear(newProfile.year);
      setSelectedTopicId('all');
    }
  }, [selectedYear]);

  const handleOpenProfileModal = (mode: 'list' | 'register' | 'edit' = 'list') => {
    setProfileModalInitialMode(mode);
    setIsProfileModalOpen(true);
  };

  // Question bank (includes initial + any AI generated ones)
  const [questionBank, setQuestionBank] = useState<QuizQuestion[]>(INITIAL_KSSR_QUESTIONS);

  // Active Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, QuizUserAnswer>>({});
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  // Effective Score & Claimable Vouchers
  const effectiveScore = useMemo(() => {
    return getEffectiveStudentScore(activeProfile);
  }, [activeProfile, userAnswers, streakData, isQuizFinished]);

  const claimableVouchersCount = useMemo(() => {
    const targetStudentId = activeProfile?.id || 'active_guest_student';
    return getClaimableVouchersCount(targetStudentId, effectiveScore);
  }, [activeProfile, effectiveScore]);

  // Available topics for selected Year & Subject
  const availableTopics = useMemo(() => {
    return KSSR_TOPICS.filter(
      (t) => t.year === selectedYear && t.subject === selectedSubject
    );
  }, [selectedYear, selectedSubject]);

  // Questions filtered for current quiz (Practice Mode)
  const filteredQuestions = useMemo(() => {
    return questionBank.filter((q) => {
      if (q.year !== selectedYear) return false;
      if (q.subject !== selectedSubject) return false;
      if (selectedTopicId !== 'all') {
        const matchingTopic = availableTopics.find((t) => t.id === selectedTopicId);
        if (
          matchingTopic &&
          !q.topic.toLowerCase().includes(matchingTopic.name.toLowerCase()) &&
          !matchingTopic.name.toLowerCase().includes(q.topic.toLowerCase())
        ) {
          return false;
        }
      }
      if (selectedDifficulty !== 'all') {
        if (q.difficulty !== selectedDifficulty) {
          return false;
        }
      }
      return true;
    });
  }, [questionBank, selectedYear, selectedSubject, selectedTopicId, selectedDifficulty, availableTopics]);

  // Daily Questions: Deterministically rotates every single day at midnight!
  const dailyQuestions = useMemo(() => {
    return getDailyQuestions(questionBank, todayDateStr, selectedYear, dailySubject, 5);
  }, [questionBank, todayDateStr, selectedYear, dailySubject]);

  // Adaptive Review Questions: Surfaces questions from the lowest-scoring 20% of topics!
  const adaptiveReviewResult = useMemo(() => {
    const targetStudentId = activeProfile?.id || 'active_guest_student';
    return getAdaptiveReviewQuestions({
      questionBank,
      studentId: targetStudentId,
      year: selectedYear,
      subject: adaptiveSubject,
      count: 5,
    });
  }, [questionBank, activeProfile?.id, selectedYear, adaptiveSubject, adaptiveVersion]);

  // Active questions set depending on current mode
  const activeQuestions = useMemo(() => {
    if (quizMode === 'daily') {
      return dailyQuestions;
    }
    if (quizMode === 'adaptive') {
      return adaptiveReviewResult.questions;
    }
    return filteredQuestions;
  }, [quizMode, dailyQuestions, adaptiveReviewResult.questions, filteredQuestions]);

  // Reset quiz progress when filter criteria change
  const resetQuizProgress = useCallback(() => {
    stopSpeech();
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsQuizFinished(false);
  }, []);

  const handleYearChange = (year: YearLevel) => {
    setSelectedYear(year);
    setSelectedTopicId('all');
    setSelectedDifficulty('all');
    resetQuizProgress();
  };

  const handleSubjectChange = (subject: Subject) => {
    setSelectedSubject(subject);
    setSelectedTopicId('all');
    setSelectedDifficulty('all');
    resetQuizProgress();
  };

  const handleTopicChange = (topicId: string) => {
    setSelectedTopicId(topicId);
    resetQuizProgress();
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    resetQuizProgress();
  };

  const handleToggleMode = (mode: QuizMode) => {
    setQuizMode(mode);
    resetQuizProgress();
  };

  const handleDailySubjectChange = (subject: Subject | 'all') => {
    setDailySubject(subject);
    resetQuizProgress();
  };

  const handleAdaptiveSubjectChange = (subject: Subject | 'all') => {
    setAdaptiveSubject(subject);
    resetQuizProgress();
  };

  const handleRefreshAdaptive = () => {
    setAdaptiveVersion((v) => v + 1);
    resetQuizProgress();
  };

  // Reshuffle questions in current filter
  const handleShuffleQuestions = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestionBank(shuffled);
    resetQuizProgress();
  };

  // Handle student selecting an answer option
  const handleSelectOption = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ || userAnswers[currentQ.id]) return;

    const isCorrect = optionKey === currentQ.correctAnswer;
    const answerObj: QuizUserAnswer = {
      questionId: currentQ.id,
      selectedOption: optionKey,
      isCorrect,
      timeSpentSeconds: 0,
    };

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: answerObj,
    }));
  };

  // Next question
  const handleNextQuestion = () => {
    stopSpeech();
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Load newly generated questions into active quiz
  const handleLoadQuestionsIntoQuiz = (newQuestions: QuizQuestion[]) => {
    // Add to bank
    setQuestionBank((prev) => {
      const existingIds = new Set(prev.map((q) => q.id));
      const filteredNew = newQuestions.filter((q) => !existingIds.has(q.id));
      return [...filteredNew, ...prev];
    });

    if (newQuestions.length > 0) {
      setSelectedYear(newQuestions[0].year);
      setSelectedSubject(newQuestions[0].subject);
      setSelectedTopicId('all');
    }

    setQuizMode('practice');
    resetQuizProgress();
    setActiveTab('quiz');
  };

  // Keyboard shortcut listener for options (A, B, C, D) and Enter to advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'quiz' || isQuizFinished) return;
      const key = e.key.toUpperCase();

      const currentQ = activeQuestions[currentQuestionIndex];
      if (!currentQ) return;

      const answered = Boolean(userAnswers[currentQ.id]);

      if (!answered) {
        if (key === 'A' || key === '1') {
          e.preventDefault();
          handleSelectOption('A');
        } else if (key === 'B' || key === '2') {
          e.preventDefault();
          handleSelectOption('B');
        } else if (key === 'C' || key === '3') {
          e.preventDefault();
          handleSelectOption('C');
        } else if (key === 'D' || key === '4') {
          e.preventDefault();
          handleSelectOption('D');
        }
      } else {
        if (key === 'ENTER' || key === ' ') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isQuizFinished, currentQuestionIndex, activeQuestions, userAnswers]);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Top Header */}
      <Header
        currentTab={activeTab}
        onTabChange={(tab) => {
          stopSpeech();
          setActiveTab(tab);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled((prev) => !prev)}
        dailyStreak={streakData.currentStreak}
        isDailyMode={quizMode === 'daily'}
        onSelectDailyChallenge={() => {
          stopSpeech();
          setActiveTab('quiz');
          setQuizMode('daily');
          resetQuizProgress();
        }}
        isAdaptiveMode={quizMode === 'adaptive'}
        onSelectAdaptiveReview={() => {
          stopSpeech();
          setActiveTab('quiz');
          setQuizMode('adaptive');
          resetQuizProgress();
        }}
        activeProfile={activeProfile}
        onOpenProfileModal={() => handleOpenProfileModal(profiles.length === 0 ? 'register' : 'list')}
        onOpenVouchers={() => setIsVoucherModalOpen(true)}
        claimableVouchersCount={claimableVouchersCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'quiz' && (
          <div>
            {/* Mode Banner Selection: Daily Challenge Banner or Adaptive Review Banner or Mode Controller */}
            {quizMode === 'daily' && (
              <DailyChallengeBanner
                quizMode={quizMode}
                onToggleMode={handleToggleMode}
                streakData={streakData}
                isCompletedToday={completedToday}
                selectedYear={selectedYear}
                onSelectYear={handleYearChange}
                dailySubject={dailySubject}
                onSelectDailySubject={handleDailySubjectChange}
                totalDailyQuestions={dailyQuestions.length}
              />
            )}

            {quizMode === 'adaptive' && (
              <AdaptiveReviewBanner
                quizMode={quizMode}
                onToggleMode={handleToggleMode}
                selectedYear={selectedYear}
                onSelectYear={handleYearChange}
                adaptiveSubject={adaptiveSubject}
                onSelectAdaptiveSubject={handleAdaptiveSubjectChange}
                adaptiveResult={adaptiveReviewResult}
                onRefreshReview={handleRefreshAdaptive}
              />
            )}

            {quizMode === 'practice' && (
              <DailyChallengeBanner
                quizMode={quizMode}
                onToggleMode={handleToggleMode}
                streakData={streakData}
                isCompletedToday={completedToday}
                selectedYear={selectedYear}
                onSelectYear={handleYearChange}
                dailySubject={dailySubject}
                onSelectDailySubject={handleDailySubjectChange}
                totalDailyQuestions={dailyQuestions.length}
              />
            )}

            {/* Active Student Greeting / Registration Prompt */}
            <div className="mb-4">
              {activeProfile ? (
                <div className="bg-white/90 border border-slate-200 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-500">Sesi Murid Aktif:</span>
                    <span className="font-extrabold text-slate-900 flex items-center gap-1.5">
                      {activeProfile.name}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-indigo-700 font-semibold">
                      Tahun {activeProfile.year} ({activeProfile.className})
                    </span>
                    {activeProfile.schoolName && (
                      <span className="text-slate-400 hidden sm:inline truncate max-w-xs">
                        • {activeProfile.schoolName}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsVoucherModalOpen(true)}
                      className="text-emerald-700 hover:text-emerald-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Gift className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Baucar Tunai ({claimableVouchersCount > 0 ? `${claimableVouchersCount} Baru!` : `${effectiveScore} pts`})</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => setActiveTab('print')}
                      className="text-indigo-700 hover:text-indigo-900 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Cetak PDF</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => setActiveTab('leaderboard')}
                      className="text-amber-700 hover:text-amber-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Papan Pendahulu</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => handleOpenProfileModal('list')}
                      className="text-indigo-600 hover:text-indigo-800 font-bold hover:underline cursor-pointer"
                    >
                      Tukar / Urus Murid ({profiles.length})
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-indigo-950 font-medium">
                    <UserPlus className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Daftarkan profil murid untuk menyimpan markah, lencana, bersaing dalam Papan Pendahulu & mencetak lembaran kerja PDF.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab('print')}
                      className="text-indigo-700 hover:text-indigo-900 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Printer className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Cetak Lembaran PDF</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      onClick={() => setIsVoucherModalOpen(true)}
                      className="text-emerald-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Gift className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Baucar Tunai</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('leaderboard')}
                      className="text-amber-800 font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>Papan Pendahulu</span>
                    </button>
                    <button
                      onClick={() => handleOpenProfileModal('register')}
                      className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-2xs cursor-pointer text-xs"
                    >
                      + Daftar Murid Baharu
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* In practice mode, show regular Year & Subject Selector */}
            {quizMode === 'practice' && (
              <YearSubjectSelector
                selectedYear={selectedYear}
                onSelectYear={handleYearChange}
                selectedSubject={selectedSubject}
                onSelectSubject={handleSubjectChange}
                selectedTopicId={selectedTopicId}
                onSelectTopic={handleTopicChange}
                selectedDifficulty={selectedDifficulty}
                onSelectDifficulty={handleDifficultyChange}
                availableTopics={availableTopics}
                totalQuestionsInFilter={filteredQuestions.length}
              />
            )}

            {/* Quiz Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  {quizMode === 'daily' ? (
                    <>
                      <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
                      <span>Cabaran Harian: Set Soalan {getFormattedMalayDate(todayDateStr)}</span>
                    </>
                  ) : quizMode === 'adaptive' ? (
                    <>
                      <Target className="w-4 h-4 text-indigo-600" />
                      <span>Ulang Kaji Pintar: Fokus Topik 20% Terendah & Soalan Silap</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4 text-slate-600" />
                      <span>Mod Latihan KSSR Semakan</span>
                    </>
                  )}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                  Gunakan kekunci A, B, C, D atau klik pilihan
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-quick-print-worksheet"
                  onClick={() => setActiveTab('print')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-200 bg-indigo-50/80 hover:bg-indigo-100 text-xs font-semibold text-indigo-900 transition cursor-pointer"
                  title="Cetak set soalan ini dalam format lembaran kerja PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Cetak Lembaran PDF</span>
                </button>

                {quizMode === 'practice' && (
                  <button
                    id="btn-shuffle-questions"
                    onClick={handleShuffleQuestions}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-600 transition cursor-pointer"
                    title="Rawakkan susunan soalan"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Rawakkan</span>
                  </button>
                )}

                <button
                  id="btn-reset-current-quiz"
                  onClick={resetQuizProgress}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-600 transition cursor-pointer"
                  title="Mulakan semula kuiz daripada soalan pertama"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Mula Semula</span>
                </button>
              </div>
            </div>

            {/* Quiz Card or Summary */}
            {activeQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Tiada Soalan Tersedia untuk Pilihan Ini
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Sila pilih topik lain atau gunakan Penjana AI untuk menghasilkan soalan bagi topik ini dengan serta-merta.
                </p>
                <button
                  id="btn-generate-for-empty-topic"
                  onClick={() => setActiveTab('generator')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold text-sm transition shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Jana Soalan Topik Ini Menggunakan AI</span>
                </button>
              </div>
            ) : isQuizFinished ? (
              <QuizScoreSummary
                questions={activeQuestions}
                answers={userAnswers}
                onRestart={resetQuizProgress}
                onOpenGenerator={() => setActiveTab('generator')}
                onOpenPrint={() => setActiveTab('print')}
                onOpenLeaderboard={() => setActiveTab('leaderboard')}
                onOpenVouchers={() => setIsVoucherModalOpen(true)}
                onOpenAdaptiveReview={() => {
                  setQuizMode('adaptive');
                  resetQuizProgress();
                }}
                soundEnabled={soundEnabled}
                isDailyChallenge={quizMode === 'daily'}
                isAdaptiveMode={quizMode === 'adaptive'}
                onDailyChallengeCompleted={() => {
                  setStreakData(getDailyStreakData());
                  setCompletedToday(true);
                }}
                activeProfile={activeProfile}
                onOpenProfileModal={() => handleOpenProfileModal(profiles.length === 0 ? 'register' : 'list')}
              />
            ) : currentQuestion ? (
              <QuizCard
                question={currentQuestion}
                currentIndex={currentQuestionIndex}
                totalQuestions={activeQuestions.length}
                userAnswer={userAnswers[currentQuestion.id]}
                onSelectOption={handleSelectOption}
                onNextQuestion={handleNextQuestion}
                soundEnabled={soundEnabled}
                onToggleSound={(enabled) => setSoundEnabled(enabled)}
              />
            ) : null}
          </div>
        )}

        {activeTab === 'print' && (
          <WorksheetPrintView
            questionBank={questionBank}
            initialYear={selectedYear}
            initialSubject={selectedSubject}
            initialTopicId={selectedTopicId}
            onBackToQuiz={() => {
              setActiveTab('quiz');
              resetQuizProgress();
            }}
          />
        )}

        {activeTab === 'leaderboard' && (
          <LeaderboardView
            activeProfile={activeProfile}
            onOpenProfileModal={() => handleOpenProfileModal(profiles.length === 0 ? 'register' : 'list')}
            onStartQuiz={() => {
              setActiveTab('quiz');
              resetQuizProgress();
            }}
            onOpenVouchers={() => setIsVoucherModalOpen(true)}
          />
        )}

        {activeTab === 'generator' && (
          <AIGeneratorView
            onLoadQuestionsIntoQuiz={handleLoadQuestionsIntoQuiz}
            onOpenSchemaWithQuestions={(questions) => {
              setQuestionBank((prev) => [...questions, ...prev]);
              setActiveTab('print');
            }}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-5 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Dibina mengikut Dokumen Standard Kurikulum & Pentaksiran (DSKP) KSSR Semakan KPM.
          </p>
          <div className="flex items-center gap-4">
            <span>Tahun 2, Tahun 4 & Tahun 5</span>
            <span>•</span>
            <span>5 Subjek Teras KPM</span>
            <span>•</span>
            <span>Ulang Kaji Pintar, Cabaran Harian & Lembaran PDF</span>
          </div>
        </div>
      </footer>
      {/* Student Profile Registration & Management Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profiles={profiles}
        activeProfile={activeProfile}
        onProfileChange={handleProfileChange}
        initialMode={profileModalInitialMode}
      />

      {/* Cash Voucher Rewards Modal */}
      <CashVoucherModal
        isOpen={isVoucherModalOpen}
        onClose={() => setIsVoucherModalOpen(false)}
        activeProfile={activeProfile}
        currentScore={effectiveScore}
        soundEnabled={soundEnabled}
        onGoToQuiz={() => {
          setActiveTab('quiz');
          resetQuizProgress();
        }}
      />
    </div>
  );
}
