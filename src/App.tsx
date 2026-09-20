/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
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
import { MatriksPembelajaranBanner } from './components/MatriksPembelajaranBanner';
import { buildMatriksPembelajaranExamSet } from './data/matriksPembelajaranTahun4';
import { Sparkles, RotateCcw, Shuffle, ShieldAlert, Flame, BookOpen, UserPlus, Trophy, Gift, Printer, Calendar, Target, GraduationCap, CheckCircle2 } from 'lucide-react';
import { stopSpeech, speakText } from './utils/speech';
import { playToggleSoundSfx, playCelebrationSfx } from './utils/soundEffects';
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
import {
  getSavedQuizSession,
  saveQuizSession,
  clearSavedQuizSession,
  SavedQuizSession,
} from './utils/quizSessionPersistence';

export default function App() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'leaderboard' | 'generator' | 'print'>('quiz');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Retrieve saved in-progress quiz session from localStorage on initial boot
  const initialSavedSession = useMemo(() => getSavedQuizSession(), []);

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
  const [quizMode, setQuizMode] = useState<QuizMode>(() => initialSavedSession?.quizMode || 'practice');
  const [dailySubject, setDailySubject] = useState<Subject | 'all'>(() => initialSavedSession?.dailySubject || 'all');
  const [adaptiveSubject, setAdaptiveSubject] = useState<Subject | 'all'>(() => initialSavedSession?.adaptiveSubject || 'all');
  const [adaptiveVersion, setAdaptiveVersion] = useState<number>(0);

  // Daily Streak Data
  const [streakData, setStreakData] = useState<DailyStreakData>(() => getDailyStreakData());
  const [completedToday, setCompletedToday] = useState<boolean>(() => isTodayCompleted());

  // Filter criteria (defaults to saved session or active student's year if present)
  const [selectedYear, setSelectedYear] = useState<YearLevel>(() => {
    if (initialSavedSession?.selectedYear) return initialSavedSession.selectedYear;
    return activeProfile?.year ? activeProfile.year : 2;
  });
  const [selectedSubject, setSelectedSubject] = useState<Subject>(() => initialSavedSession?.selectedSubject || 'Matematik');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(() => initialSavedSession?.selectedTopicId || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(() => initialSavedSession?.selectedDifficulty || 'all');

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

  // Active Quiz State (restored automatically from localStorage)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => initialSavedSession?.currentQuestionIndex || 0);
  const [userAnswers, setUserAnswers] = useState<Record<string, QuizUserAnswer>>(() => initialSavedSession?.userAnswers || {});
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(() => initialSavedSession?.isQuizFinished || false);
  const [wasSessionResumed, setWasSessionResumed] = useState<boolean>(() => {
    return Boolean(
      initialSavedSession &&
        !initialSavedSession.isQuizFinished &&
        (Object.keys(initialSavedSession.userAnswers || {}).length > 0 || initialSavedSession.currentQuestionIndex > 0)
    );
  });

  // Cooldown ref to prevent ghost clicks / double clicks across question transitions
  const lastTransitionTimeRef = useRef<number>(0);

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

  // Authentic Year 4 Matriks Pentaksiran Exam Set (Rotates automatically every day at 12:00 AM midnight!)
  const matriksExamSet = useMemo(() => {
    if (selectedYear !== 4) return null;
    return buildMatriksPembelajaranExamSet(questionBank, selectedSubject, todayDateStr);
  }, [questionBank, selectedYear, selectedSubject, todayDateStr]);

  // Active questions set depending on current mode
  const activeQuestions = useMemo(() => {
    let baseList: QuizQuestion[] = [];
    if (quizMode === 'daily') {
      baseList = dailyQuestions;
    } else if (quizMode === 'adaptive') {
      baseList = adaptiveReviewResult.questions;
    } else if (quizMode === 'matriks') {
      baseList = matriksExamSet ? matriksExamSet.questions : filteredQuestions;
    } else {
      baseList = filteredQuestions;
    }

    // If an in-progress saved session exists for this exact mode/filter, preserve original question order
    if (
      initialSavedSession &&
      initialSavedSession.quizMode === quizMode &&
      initialSavedSession.selectedYear === selectedYear &&
      initialSavedSession.selectedSubject === selectedSubject &&
      initialSavedSession.questionIds &&
      initialSavedSession.questionIds.length > 0
    ) {
      const map = new Map(baseList.map((q) => [q.id, q]));
      const matched = initialSavedSession.questionIds
        .map((id) => map.get(id))
        .filter((q): q is QuizQuestion => Boolean(q));

      const matchedIds = new Set(matched.map((q) => q.id));
      const remaining = baseList.filter((q) => !matchedIds.has(q.id));
      if (matched.length > 0) {
        return [...matched, ...remaining];
      }
    }

    return baseList;
  }, [quizMode, dailyQuestions, adaptiveReviewResult.questions, matriksExamSet, filteredQuestions, initialSavedSession, selectedYear, selectedSubject]);

  // Reset quiz progress when filter criteria change or on explicit restart
  const resetQuizProgress = useCallback(() => {
    stopSpeech();
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsQuizFinished(false);
    setWasSessionResumed(false);
    clearSavedQuizSession();
  }, []);

  // Ensure current question index is never out of bounds
  useEffect(() => {
    if (activeQuestions.length > 0 && currentQuestionIndex >= activeQuestions.length && !isQuizFinished) {
      setCurrentQuestionIndex(Math.max(0, activeQuestions.length - 1));
    }
  }, [activeQuestions.length, currentQuestionIndex, isQuizFinished]);

  // Automatically persist active quiz session progress to localStorage
  useEffect(() => {
    if (activeQuestions.length === 0) return;

    const hasProgress =
      Object.keys(userAnswers).length > 0 || currentQuestionIndex > 0 || isQuizFinished;

    if (hasProgress) {
      saveQuizSession({
        quizMode,
        selectedYear,
        selectedSubject,
        selectedTopicId,
        selectedDifficulty,
        dailySubject,
        adaptiveSubject,
        studentId: activeProfile?.id,
        todayDateStr,
        currentQuestionIndex,
        userAnswers,
        isQuizFinished,
        questionIds: activeQuestions.map((q) => q.id),
      });
    }
  }, [
    quizMode,
    selectedYear,
    selectedSubject,
    selectedTopicId,
    selectedDifficulty,
    dailySubject,
    adaptiveSubject,
    activeProfile?.id,
    todayDateStr,
    currentQuestionIndex,
    userAnswers,
    isQuizFinished,
    activeQuestions,
  ]);

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

  const handleStartMatriksExam = () => {
    setQuizMode('matriks');
    resetQuizProgress();
    playToggleSoundSfx();
  };

  const handleExitMatriksMode = () => {
    setQuizMode('practice');
    resetQuizProgress();
    playToggleSoundSfx();
  };

  // Reshuffle questions in current filter
  const handleShuffleQuestions = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestionBank(shuffled);
    resetQuizProgress();
  };

  // Handle student selecting an answer option
  const handleSelectOption = (optionKey: 'A' | 'B' | 'C' | 'D', questionId?: string) => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;
    // Guard against selecting an option for an old/mismatched question ID
    if (questionId && questionId !== currentQ.id) return;
    // Guard against selecting if already answered
    if (userAnswers[currentQ.id]) return;
    // Guard against rapid ghost clicks or double-tap bleed through within 350ms of transition
    if (Date.now() - lastTransitionTimeRef.current < 350) return;

    const isCorrect = optionKey === currentQ.correctAnswer;
    const answerObj: QuizUserAnswer = {
      questionId: currentQ.id,
      selectedOption: optionKey,
      isCorrect,
      timeSpentSeconds: 0,
    };

    setUserAnswers((prev) => {
      if (prev[currentQ.id]) return prev;
      return {
        ...prev,
        [currentQ.id]: answerObj,
      };
    });
  };

  // Next question
  const handleNextQuestion = () => {
    stopSpeech();
    // Blur any active element to prevent accidental Enter/Space activation on the next question
    if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    lastTransitionTimeRef.current = Date.now();
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
      if (
        activeTab !== 'quiz' ||
        isQuizFinished ||
        isProfileModalOpen ||
        isVoucherModalOpen ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Ignore repeating keys from holding down
      if (e.repeat) return;

      const currentQ = activeQuestions[currentQuestionIndex];
      if (!currentQ) return;

      const answered = Boolean(userAnswers[currentQ.id]);
      const key = e.key.toUpperCase();

      if (!answered) {
        // Enforce cooldown after question transition
        if (Date.now() - lastTransitionTimeRef.current < 350) return;

        if (key === 'A' || key === '1') {
          e.preventDefault();
          handleSelectOption('A', currentQ.id);
        } else if (key === 'B' || key === '2') {
          e.preventDefault();
          handleSelectOption('B', currentQ.id);
        } else if (key === 'C' || key === '3') {
          e.preventDefault();
          handleSelectOption('C', currentQ.id);
        } else if (key === 'D' || key === '4') {
          e.preventDefault();
          handleSelectOption('D', currentQ.id);
        }
      } else {
        // Only Enter advances to the next question (not Space, to prevent scroll interference)
        if (key === 'ENTER') {
          e.preventDefault();
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    activeTab,
    isQuizFinished,
    isProfileModalOpen,
    isVoucherModalOpen,
    currentQuestionIndex,
    activeQuestions,
    userAnswers,
  ]);

  const safeCurrentIndex =
    activeQuestions.length > 0
      ? Math.min(Math.max(0, currentQuestionIndex), activeQuestions.length - 1)
      : 0;
  const currentQuestion = activeQuestions[safeCurrentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/50 via-amber-50/30 to-indigo-50/40 text-slate-800 flex flex-col antialiased">
      {/* Top Header */}
      <Header
        currentTab={activeTab}
        onTabChange={(tab) => {
          stopSpeech();
          setActiveTab(tab);
          if (tab === 'quiz' && quizMode !== 'practice') {
            setQuizMode('practice');
          }
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          setSoundEnabled((prev) => {
            const next = !prev;
            playToggleSoundSfx(next);
            if (next) {
              speakText('Suara diaktifkan', 'ms');
            } else {
              stopSpeech();
            }
            return next;
          });
        }}
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
        onSelectPracticeMode={() => {
          stopSpeech();
          setActiveTab('quiz');
          setQuizMode('practice');
          resetQuizProgress();
        }}
        activeProfile={activeProfile}
        onOpenProfileModal={() => handleOpenProfileModal(profiles.length === 0 ? 'register' : 'list')}
        onOpenVouchers={() => setIsVoucherModalOpen(true)}
        claimableVouchersCount={claimableVouchersCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
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
                activeProfile={activeProfile}
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

            {/* Year 4 Matriks Pembelajaran Banner */}
            {selectedYear === 4 && (
              <MatriksPembelajaranBanner
                selectedYear={selectedYear}
                selectedSubject={selectedSubject}
                todayDateStr={todayDateStr}
                isMatriksMode={quizMode === 'matriks'}
                onStartMatriksExam={handleStartMatriksExam}
                onExitMatriksMode={handleExitMatriksMode}
                onGoToPrint={() => setActiveTab('print')}
                onSelectSubject={handleSubjectChange}
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

            {/* Resumed In-Progress Quiz Session Notification */}
            {wasSessionResumed && !isQuizFinished && activeQuestions.length > 0 && (
              <div className="mb-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200/90 rounded-xl p-3 sm:px-4 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-950 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="p-1 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-bold text-emerald-900">Sesi Kuiz Disambung:</span>
                    <span className="ml-1 text-emerald-800">
                      Kemajuan anda telah dimuatkan secara automatik dari localStorage (Soalan {currentQuestionIndex + 1} daripada {activeQuestions.length}).
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={resetQuizProgress}
                    className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-100 font-semibold transition cursor-pointer text-xs"
                  >
                    Mula Semula dari Awal
                  </button>
                  <button
                    onClick={() => setWasSessionResumed(false)}
                    className="px-2 py-1 text-emerald-700 hover:text-emerald-950 font-bold cursor-pointer"
                    title="Tutup Notifikasi"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

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
                key={currentQuestion.id}
                question={currentQuestion}
                currentIndex={safeCurrentIndex}
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

      {/* Kid-Friendly & Informative Educational Footer with Copyright */}
      <footer className="bg-white/95 border-t border-slate-200/90 py-8 px-4 mt-auto text-slate-600 shadow-xs">
        <div className="max-w-6xl mx-auto">
          {/* Top Footer Banner: Mascot & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-slate-100 items-center">
            <div className="md:col-span-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 shrink-0">
                <GraduationCap className="w-7 h-7 text-slate-950 fill-amber-300" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                  <span>KSSR Semakan Kuiz Pintar</span>
                  <span className="text-amber-500">⭐</span>
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  Platform interaktif latihan, ulang kaji pintar dan lembaran kerja sekolah rendah Malaysia.
                </p>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-2 text-xs font-semibold">
              <span className="px-2.5 py-1 rounded-xl bg-blue-50 text-blue-800 border border-blue-200/60">
                📐 Matematik
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                🔬 Sains
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200/60">
                📖 Bahasa Melayu
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-purple-50 text-purple-900 border border-purple-200/60">
                🇬🇧 English (CEFR)
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-teal-50 text-teal-900 border border-teal-200/60">
                🌙 Pendidikan Islam & Jawi
              </span>
            </div>
          </div>

          {/* Middle Footer: DSKP Syllabus & Educational Statement */}
          <div className="py-4 text-xs text-slate-500 leading-relaxed grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-slate-700 mb-1 flex items-center gap-1.5">
                <span>📚 Berpandukan Kurikulum Standard Sekolah Rendah (KSSR Semakan)</span>
              </p>
              <p>
                Semua soalan dan lembaran kerja digubal khas mengikut Dokumen Standard Kurikulum dan Pentaksiran (DSKP) Semakan Kementerian Pendidikan Malaysia (KPM) untuk <strong>Sekolah Kebangsaan (SK)</strong> meliputi <strong>Tahun 1 hingga Tahun 6</strong>.
              </p>
            </div>
            <div className="md:text-right">
              <p className="font-semibold text-slate-700 mb-1">
                🛡️ Zon Selamat, Mesra Kanak-Kanak & Bebas Iklan
              </p>
              <p>
                Direka khas dengan antara muka yang ceria, mudah difahami, dan selamat untuk kegunaan murid di rumah serta sesi Pengajaran & Pembelajaran (PdP) di dalam bilik darjah.
              </p>
            </div>
          </div>

          {/* Bottom Copyright Notice */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-medium text-center sm:text-left">
            <div>
              <p>
                &copy; {new Date().getFullYear()} <strong>Verttere Solutions</strong>. Hak Cipta Terpelihara (All Rights Reserved) • KSSR Semakan Kuiz Pintar Malaysia.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <button
                onClick={() => {
                  setActiveTab('quiz');
                  setQuizMode('practice');
                  resetQuizProgress();
                }}
                className="hover:text-indigo-600 hover:underline cursor-pointer"
              >
                Latihan Topikal
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  setActiveTab('quiz');
                  setQuizMode('daily');
                  resetQuizProgress();
                }}
                className="hover:text-amber-600 hover:underline cursor-pointer"
              >
                Cabaran Harian
              </button>
              <span>•</span>
              <button
                onClick={() => {
                  setActiveTab('quiz');
                  setQuizMode('adaptive');
                  resetQuizProgress();
                }}
                className="hover:text-indigo-600 hover:underline cursor-pointer"
              >
                Ulang Kaji Pintar
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('print')}
                className="hover:text-teal-600 hover:underline cursor-pointer"
              >
                Cetak PDF
              </button>
            </div>
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
