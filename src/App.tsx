/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { YearLevel, Subject, QuizQuestion, QuizUserAnswer } from './types';
import { KSSR_TOPICS, INITIAL_KSSR_QUESTIONS } from './data/kssrQuestions';
import { Header } from './components/Header';
import { YearSubjectSelector } from './components/YearSubjectSelector';
import { QuizCard } from './components/QuizCard';
import { QuizScoreSummary } from './components/QuizScoreSummary';
import { AIGeneratorView } from './components/AIGeneratorView';
import { JsonSchemaView } from './components/JsonSchemaView';
import { Sparkles, RotateCcw, Shuffle, BookCheck, ShieldAlert } from 'lucide-react';
import { stopSpeech } from './utils/speech';

export default function App() {
  const [activeTab, setActiveTab] = useState<'quiz' | 'generator' | 'schema'>('quiz');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Filter criteria
  const [selectedYear, setSelectedYear] = useState<YearLevel>(2);
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Matematik');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Question bank (includes initial + any AI generated ones)
  const [questionBank, setQuestionBank] = useState<QuizQuestion[]>(INITIAL_KSSR_QUESTIONS);

  // Active Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, QuizUserAnswer>>({});
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  // Available topics for selected Year & Subject
  const availableTopics = useMemo(() => {
    return KSSR_TOPICS.filter(
      (t) => t.year === selectedYear && t.subject === selectedSubject
    );
  }, [selectedYear, selectedSubject]);

  // Questions filtered for current quiz
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

  // Reshuffle questions in current filter
  const handleShuffleQuestions = () => {
    const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
    setQuestionBank(shuffled);
    resetQuizProgress();
  };

  // Handle student selecting an answer option
  const handleSelectOption = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = filteredQuestions[currentQuestionIndex];
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
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
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

    resetQuizProgress();
    setActiveTab('quiz');
  };

  // Keyboard shortcut listener for options (A, B, C, D) and Enter to advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'quiz' || isQuizFinished) return;
      const key = e.key.toUpperCase();

      const currentQ = filteredQuestions[currentQuestionIndex];
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
  }, [activeTab, isQuizFinished, currentQuestionIndex, filteredQuestions, userAnswers]);

  const currentQuestion = filteredQuestions[currentQuestionIndex];

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
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'quiz' && (
          <div>
            {/* Year & Subject Selector Bar */}
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

            {/* Quiz Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Mod Latihan KSSR Semakan
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-medium">
                  Gunakan kekunci A, B, C, D atau klik pilihan
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="btn-shuffle-questions"
                  onClick={handleShuffleQuestions}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-600 transition cursor-pointer"
                  title="Rawakkan susunan soalan"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Rawakkan</span>
                </button>

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
            {filteredQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Tiada Soalan Tersedia untuk Topik Ini
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
                questions={filteredQuestions}
                answers={userAnswers}
                onRestart={resetQuizProgress}
                onOpenGenerator={() => setActiveTab('generator')}
                onOpenSchema={() => setActiveTab('schema')}
              />
            ) : currentQuestion ? (
              <QuizCard
                question={currentQuestion}
                currentIndex={currentQuestionIndex}
                totalQuestions={filteredQuestions.length}
                userAnswer={userAnswers[currentQuestion.id]}
                onSelectOption={handleSelectOption}
                onNextQuestion={handleNextQuestion}
                soundEnabled={soundEnabled}
              />
            ) : null}
          </div>
        )}

        {activeTab === 'generator' && (
          <AIGeneratorView
            onLoadQuestionsIntoQuiz={handleLoadQuestionsIntoQuiz}
            onOpenSchemaWithQuestions={(questions) => {
              setQuestionBank((prev) => [...questions, ...prev]);
              setActiveTab('schema');
            }}
          />
        )}

        {activeTab === 'schema' && (
          <JsonSchemaView questions={filteredQuestions.length > 0 ? filteredQuestions : questionBank} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-5 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Dibina mengikut Dokumen Standard Kurikulum & Pentaksiran (DSKP) KSSR Semakan KPM.
          </p>
          <div className="flex items-center gap-4">
            <span>Tahun 2 & Tahun 4</span>
            <span>•</span>
            <span>4 Pilihan Jawapan (A, B, C, D)</span>
            <span>•</span>
            <span>Ulasan Pedagogi Guru</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
