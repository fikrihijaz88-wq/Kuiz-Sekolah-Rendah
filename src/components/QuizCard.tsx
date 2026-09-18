import React, { useEffect, useState, useRef } from 'react';
import { QuizQuestion, QuizUserAnswer } from '../types';
import {
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Lightbulb,
  BookOpen,
  Award,
  Eye,
  Minimize2,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { speakText, stopSpeech, subscribeAudioState } from '../utils/speech';
import { playCorrectSfx, playIncorrectSfx, playToggleSoundSfx } from '../utils/soundEffects';
import { QuizDiagramViewer } from './QuizDiagramViewer';

interface QuizCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  userAnswer?: QuizUserAnswer;
  onSelectOption: (optionKey: 'A' | 'B' | 'C' | 'D', questionId?: string) => void;
  onNextQuestion: () => void;
  soundEnabled: boolean;
  onToggleSound?: (enabled: boolean) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onNextQuestion,
  soundEnabled,
  onToggleSound,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const isAnswered = Boolean(userAnswer);

  // Focus Mode State (Persisted in localStorage for convenience)
  const [isFocusMode, setIsFocusMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('kssr_quiz_focus_mode') === 'true';
    } catch {
      return false;
    }
  });

  // Font Size Scale for Focus Mode: 1 = Besar (120%), 2 = Sangat Besar (145%), 3 = Ekstra Besar (175%)
  const [fontScale, setFontScale] = useState<number>(() => {
    try {
      const saved = Number(localStorage.getItem('kssr_quiz_focus_font_scale'));
      return saved >= 1 && saved <= 3 ? saved : 2;
    } catch {
      return 2;
    }
  });

  const feedbackSectionRef = useRef<HTMLDivElement>(null);
  const focusFeedbackSectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Save Focus Mode preference to localStorage
  const handleToggleFocusMode = (active: boolean) => {
    setIsFocusMode(active);
    try {
      localStorage.setItem('kssr_quiz_focus_mode', active ? 'true' : 'false');
    } catch {
      // ignore
    }
  };

  const handleSetFontScale = (scale: number) => {
    setFontScale(scale);
    try {
      localStorage.setItem('kssr_quiz_focus_font_scale', String(scale));
    } catch {
      // ignore
    }
  };

  // Keyboard shortcut: Escape to exit Focus Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocusMode) {
        e.preventDefault();
        handleToggleFocusMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocusMode]);

  // Smooth auto-scroll feedback & 'Next' button into center of viewport when student answers
  useEffect(() => {
    if (isAnswered) {
      const timer = setTimeout(() => {
        if (isFocusMode && focusFeedbackSectionRef.current) {
          focusFeedbackSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        } else if (feedbackSectionRef.current) {
          feedbackSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      }, 70);
      return () => clearTimeout(timer);
    }
  }, [isAnswered, question.id, isFocusMode]);

  // When progressing to a new question, smoothly scroll to top of QuizCard if scrolled down
  useEffect(() => {
    if (!isAnswered && cardRef.current && !isFocusMode) {
      const rect = cardRef.current.getBoundingClientRect();
      if (rect.top < 40) {
        cardRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }, [question.id, isAnswered, isFocusMode]);

  useEffect(() => {
    const unsubscribe = subscribeAudioState((playing) => {
      setIsPlayingAudio(playing);
    });
    return () => unsubscribe();
  }, []);

  const optionsList: Array<{ key: 'A' | 'B' | 'C' | 'D'; text: string }> = [
    { key: 'A', text: question.options.A },
    { key: 'B', text: question.options.B },
    { key: 'C', text: question.options.C },
    { key: 'D', text: question.options.D },
  ];

  const isEnglish = question.subject === 'Bahasa Inggeris';
  const lang = isEnglish ? 'en' : question.subject === 'Bahasa Arab' ? 'ar' : question.subject === 'Bahasa Cina' ? 'zh' : 'ms';
  const diagramAnnounce = question.diagram ? `Rujuk ${question.diagram.title}. ` : '';

  // Auto-read question if sound enabled and not answered yet
  useEffect(() => {
    if (soundEnabled && !isAnswered) {
      const fullSpeech = `${diagramAnnounce}${question.stimulus ? question.stimulus + '. ' : ''}${question.question}`;
      speakText(fullSpeech, lang);
    }
  }, [question.id, soundEnabled, isAnswered]);

  const handleTurnSoundOn = () => {
    if (onToggleSound) {
      onToggleSound(true);
    }
    playToggleSoundSfx(true);
    const speech = `${diagramAnnounce}${question.stimulus ? question.stimulus + '. ' : ''}Soalan: ${question.question}. Pilihan A: ${question.options.A}. Pilihan B: ${question.options.B}. Pilihan C: ${question.options.C}. Pilihan D: ${question.options.D}.`;
    speakText(speech, lang);
  };

  const handleTurnSoundOff = () => {
    stopSpeech();
    playToggleSoundSfx(false);
    if (onToggleSound) {
      onToggleSound(false);
    }
  };

  const handleToggleSpeak = () => {
    if (isPlayingAudio) {
      stopSpeech();
    } else {
      const speech = `${diagramAnnounce}${question.stimulus ? question.stimulus + '. ' : ''}Soalan: ${question.question}. Pilihan A: ${question.options.A}. Pilihan B: ${question.options.B}. Pilihan C: ${question.options.C}. Pilihan D: ${question.options.D}.`;
      speakText(speech, lang);
    }
  };

  const getDifficultyColor = (diff: string) => {
    if (diff === 'KBAT (Aras Tinggi)') {
      return 'bg-purple-100 text-purple-900 border-purple-300 font-bold';
    }
    if (diff === 'KBAT (Aras Sederhana)') {
      return 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
    }
    if (diff === 'KBAT (Aras Rendah)') {
      return 'bg-amber-50 text-amber-800 border-amber-200 font-medium';
    }
    if (diff.includes('KBAT')) {
      return 'bg-amber-100 text-amber-900 border-amber-300 font-semibold';
    }
    if (diff === 'Sederhana') {
      return 'bg-blue-100 text-blue-900 border-blue-200';
    }
    return 'bg-emerald-100 text-emerald-900 border-emerald-200';
  };

  // Typography scale classes for Focus Mode
  const getQuestionFocusTypography = () => {
    if (fontScale === 1) return 'text-2xl sm:text-3xl font-extrabold leading-snug text-slate-950';
    if (fontScale === 2) return 'text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-950';
    return 'text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-950 tracking-tight';
  };

  const getOptionFocusTypography = () => {
    if (fontScale === 1) return 'text-lg sm:text-xl font-bold';
    if (fontScale === 2) return 'text-xl sm:text-2xl lg:text-3xl font-bold';
    return 'text-2xl sm:text-3xl lg:text-4xl font-extrabold';
  };

  const getStimulusFocusTypography = () => {
    if (fontScale === 1) return 'text-base sm:text-lg leading-relaxed';
    if (fontScale === 2) return 'text-lg sm:text-2xl leading-relaxed';
    return 'text-xl sm:text-3xl leading-relaxed';
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. STANDARD QUIZ CARD VIEW                                                */}
      {/* ========================================================================= */}
      <div ref={cardRef} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 transition">
        {/* Progress, Metadata & Focus Mode Toggle Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Soalan {currentIndex + 1} daripada {totalQuestions}
            </span>
            <div className="w-28 sm:w-36 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Prominent Mod Fokus Action Button */}
            <button
              type="button"
              id="btn-open-focus-mode"
              onClick={() => handleToggleFocusMode(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 cursor-pointer shadow-xs active:scale-[0.98]"
              title="Buka Mod Fokus: Membesarkan teks dan menyembunyikan elemen latar belakang untuk memudahkan bacaan"
            >
              <Eye className="w-3.5 h-3.5 text-indigo-600" />
              <span>Mod Fokus</span>
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Tahun {question.year} • {question.subject}
            </span>
            <span className={`text-xs px-2.5 py-1 rounded-full border ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
            {question.learningStandard && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
                {question.learningStandard}
              </span>
            )}
          </div>
        </div>

        {/* Stimulus / Reading Passage if present */}
        {question.stimulus && (
          <div className="mb-5 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950">
            <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
              <BookOpen className="w-4 h-4" />
              <span>Petikan / Bahan Rangsangan:</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed font-serif">
              "{question.stimulus}"
            </p>
          </div>
        )}

        {/* Scientific Diagram / Gambar Rajah if present */}
        {question.diagram && <QuizDiagramViewer diagram={question.diagram} />}

        {/* Question Text and Audio Controls */}
        <div className="mb-6">
          {/* Audio Control Bar for this Question */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                <span>Fungsi Suara / Audio:</span>
              </span>
              {/* Direct ON / OFF Switch Buttons */}
              <div className="inline-flex rounded-lg p-0.5 bg-slate-200/80 border border-slate-300/80">
                <button
                  type="button"
                  id={`btn-sound-on-${question.id}`}
                  onClick={handleTurnSoundOn}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                    soundEnabled
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  title="Hidupkan suara bacaan soalan"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>ON</span>
                </button>
                <button
                  type="button"
                  id={`btn-sound-off-${question.id}`}
                  onClick={handleTurnSoundOff}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                    !soundEnabled
                      ? 'bg-slate-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                  title="Matikan suara bacaan"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>OFF</span>
                </button>
              </div>
            </div>

            {/* Replay or Stop Speech Action */}
            <div className="flex items-center gap-2">
              {soundEnabled && (
                <button
                  type="button"
                  id={`btn-speak-question-${question.id}`}
                  onClick={handleToggleSpeak}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                    isPlayingAudio
                      ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400/40 animate-pulse'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
                  }`}
                  title={isPlayingAudio ? 'Klik untuk henti suara' : 'Klik untuk dengar semula bacaan soalan'}
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Sedang Membaca... (Henti)</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{isEnglish ? '🔁 Replay Audio' : '🔁 Dengar Semula'}</span>
                    </>
                  )}
                </button>
              )}
              <span className="text-[11px] font-medium text-slate-400 hidden sm:inline">
                {soundEnabled
                  ? (isEnglish
                      ? '🇬🇧 English Voice Active'
                      : question.subject === 'Bahasa Arab'
                      ? '🇲🇾 BM & 🇸🇦 Arab Asli'
                      : question.subject === 'Bahasa Cina'
                      ? '🇲🇾 BM & 🇨🇳 Mandarin Asli'
                      : '🇲🇾 Suara BM Asli')
                  : 'Audio Dimatikan'}
              </span>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {question.question}
          </h2>
        </div>

        {/* 4 Distinct Options A, B, C, D */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
          {optionsList.map(({ key, text }) => {
            let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800 hover:border-indigo-300';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';
            let icon = null;

            if (isAnswered) {
              const isUserSelected = userAnswer?.selectedOption === key;
              const isCorrectOption = question.correctAnswer === key;

              if (isCorrectOption) {
                btnStyle = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-medium ring-2 ring-emerald-500/30';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />;
              } else if (isUserSelected && !isCorrectOption) {
                btnStyle = 'border-rose-400 bg-rose-50/90 text-rose-950 line-through ring-2 ring-rose-500/20';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
                icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-auto" />;
              } else {
                btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            }

            return (
              <button
                key={`${question.id}-${key}`}
                type="button"
                id={`option-${key}-${question.id}`}
                disabled={isAnswered}
                onClick={(e) => {
                  e.currentTarget.blur();
                  if (!isAnswered) {
                    if (soundEnabled) {
                      if (question.correctAnswer === key) {
                        playCorrectSfx();
                      } else {
                        playIncorrectSfx();
                      }
                    }
                    onSelectOption(key, question.id);
                  }
                }}
                className={`p-4 rounded-xl border text-left flex items-center gap-3 transition min-h-[58px] cursor-pointer ${btnStyle}`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border shrink-0 ${badgeStyle}`}>
                  {key}
                </span>
                <span className="text-sm sm:text-base font-normal flex-1">
                  {text}
                </span>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Pedagogical Explanation & Action Section with Smooth Auto-Scroll and Centering */}
        {isAnswered && (
          <motion.div
            ref={feedbackSectionRef}
            id={`feedback-action-section-${question.id}`}
            initial={{ opacity: 0, y: 16, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mt-2"
          >
            {/* Pedagogical Explanation Card */}
            <div
              id={`explanation-${question.id}`}
              className={`p-5 rounded-2xl border mb-5 transition-all duration-300 shadow-sm ${
                userAnswer?.isCorrect
                  ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/90 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
                {userAnswer?.isCorrect ? (
                  <>
                    <Award className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-emerald-800">
                      Jawapan Anda Tepat! (Pilihan {question.correctAnswer})
                    </span>
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
                    <span className="text-amber-800">
                      Ulasan Pedagogi Guru • Jawapan Sebenar: Pilihan {question.correctAnswer}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm sm:text-base leading-relaxed mt-1 font-sans">
                {question.explanation}
              </p>
            </div>

            {/* Action to proceed to next question */}
            <div className="flex justify-end">
              <button
                type="button"
                id="btn-next-question"
                onClick={(e) => {
                  e.currentTarget.blur();
                  onNextQuestion();
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition cursor-pointer"
              >
                <span>
                  {currentIndex + 1 < totalQuestions ? 'Soalan Seterusnya' : 'Lihat Keputusan Penuh'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. IMMERSIVE FOCUS MODE VIEW (MOD FOKUS / MESRA PENGLIHATAN)              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFocusMode && (
          <motion.div
            id="focus-mode-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md overflow-y-auto flex items-start sm:items-center justify-center p-3 sm:p-6 md:p-8"
          >
            <motion.div
              id="focus-mode-container"
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white text-slate-900 w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-indigo-500/40 p-5 sm:p-8 md:p-10 my-auto relative"
            >
              {/* Focus Mode Top Control Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-xs">
                    <Eye className="w-4 h-4" />
                    <span>Mod Fokus Aktif</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-600">
                    Soalan {currentIndex + 1} / {totalQuestions}
                  </span>
                </div>

                {/* Text Size Customizer & Audio & Exit */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Text Size Level Switcher */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-600 px-1.5 hidden md:inline">
                      Saiz Teks:
                    </span>
                    <button
                      type="button"
                      id="btn-font-scale-1"
                      onClick={() => handleSetFontScale(1)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        fontScale === 1
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Saiz Teks: Besar (120%)"
                    >
                      A
                    </button>
                    <button
                      type="button"
                      id="btn-font-scale-2"
                      onClick={() => handleSetFontScale(2)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        fontScale === 2
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Saiz Teks: Sangat Besar (145%)"
                    >
                      A+
                    </button>
                    <button
                      type="button"
                      id="btn-font-scale-3"
                      onClick={() => handleSetFontScale(3)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        fontScale === 3
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Saiz Teks: Ekstra Besar (175%)"
                    >
                      A++
                    </button>
                  </div>

                  {/* Audio Read-Aloud Button in Focus Mode */}
                  <button
                    type="button"
                    id="btn-focus-speak"
                    onClick={handleToggleSpeak}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs ${
                      isPlayingAudio
                        ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-400 animate-pulse'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                    title={isPlayingAudio ? 'Henti suara bacaan' : 'Dengar suara bacaan soalan'}
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-4 h-4" />
                        <span>Henti Suara</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-4 h-4" />
                        <span>Dengar Suara</span>
                      </>
                    )}
                  </button>

                  {/* Exit Focus Mode Button */}
                  <button
                    type="button"
                    id="btn-close-focus-mode"
                    onClick={() => handleToggleFocusMode(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-900 active:scale-[0.98] text-white transition cursor-pointer shadow-xs"
                    title="Keluar dari Mod Fokus (atau tekan Esc)"
                  >
                    <Minimize2 className="w-4 h-4" />
                    <span>Keluar</span>
                    <span className="text-[10px] bg-slate-700 px-1 py-0.5 rounded font-mono hidden sm:inline">Esc</span>
                  </button>
                </div>
              </div>

              {/* Focus Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden mb-6">
                <div
                  className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
                />
              </div>

              {/* Stimulus in Focus Mode if present */}
              {question.stimulus && (
                <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 shadow-xs">
                  <div className="flex items-center gap-2 mb-2 text-sm sm:text-base font-extrabold text-amber-900 uppercase tracking-wide">
                    <BookOpen className="w-5 h-5 text-amber-700" />
                    <span>Petikan / Bahan Rangsangan:</span>
                  </div>
                  <p className={`font-serif font-medium ${getStimulusFocusTypography()}`}>
                    "{question.stimulus}"
                  </p>
                </div>
              )}

              {/* Diagram in Focus Mode if present */}
              {question.diagram && (
                <div className="mb-6">
                  <QuizDiagramViewer diagram={question.diagram} />
                </div>
              )}

              {/* Large Question Title */}
              <div className="mb-8">
                <h1 className={getQuestionFocusTypography()}>
                  {question.question}
                </h1>
              </div>

              {/* 4 Large High-Contrast Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-8">
                {optionsList.map(({ key, text }) => {
                  let btnStyle = 'border-2 border-slate-300 bg-white hover:bg-indigo-50/60 text-slate-900 hover:border-indigo-600 shadow-sm';
                  let badgeStyle = 'bg-slate-900 text-white border-2 border-slate-900';
                  let icon = null;

                  if (isAnswered) {
                    const isUserSelected = userAnswer?.selectedOption === key;
                    const isCorrectOption = question.correctAnswer === key;

                    if (isCorrectOption) {
                      btnStyle = 'border-4 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold ring-4 ring-emerald-500/20';
                      badgeStyle = 'bg-emerald-600 text-white border-2 border-emerald-700';
                      icon = <CheckCircle2 className="w-8 h-8 text-emerald-700 shrink-0 ml-auto" />;
                    } else if (isUserSelected && !isCorrectOption) {
                      btnStyle = 'border-4 border-rose-600 bg-rose-100 text-rose-950 line-through ring-4 ring-rose-500/20';
                      badgeStyle = 'bg-rose-600 text-white border-2 border-rose-700';
                      icon = <XCircle className="w-8 h-8 text-rose-700 shrink-0 ml-auto" />;
                    } else {
                      btnStyle = 'border-2 border-slate-200 bg-slate-100 text-slate-400 opacity-50';
                      badgeStyle = 'bg-slate-300 text-slate-600 border-slate-300';
                    }
                  }

                  return (
                    <button
                      key={`focus-${question.id}-${key}`}
                      type="button"
                      id={`focus-option-${key}-${question.id}`}
                      disabled={isAnswered}
                      onClick={(e) => {
                        e.currentTarget.blur();
                        if (!isAnswered) {
                          if (soundEnabled) {
                            if (question.correctAnswer === key) {
                              playCorrectSfx();
                            } else {
                              playIncorrectSfx();
                            }
                          }
                          onSelectOption(key, question.id);
                        }
                      }}
                      className={`p-5 sm:p-6 rounded-2xl text-left flex items-center gap-4 transition min-h-[72px] cursor-pointer ${btnStyle}`}
                    >
                      <span className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-black text-xl sm:text-2xl shrink-0 ${badgeStyle}`}>
                        {key}
                      </span>
                      <span className={`flex-1 ${getOptionFocusTypography()}`}>
                        {text}
                      </span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Next Button in Focus Mode */}
              {isAnswered && (
                <motion.div
                  ref={focusFeedbackSectionRef}
                  id={`focus-feedback-${question.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 pt-4 border-t-2 border-slate-200"
                >
                  <div
                    className={`p-6 rounded-2xl border-2 mb-6 ${
                      userAnswer?.isCorrect
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                        : 'bg-amber-50 border-amber-400 text-amber-950'
                    }`}
                  >
                    <div className="flex items-center gap-3 font-black text-lg sm:text-xl mb-2">
                      {userAnswer?.isCorrect ? (
                        <>
                          <Award className="w-7 h-7 text-emerald-600 shrink-0" />
                          <span className="text-emerald-900">
                            Jawapan Anda Tepat! (Pilihan {question.correctAnswer})
                          </span>
                        </>
                      ) : (
                        <>
                          <Lightbulb className="w-7 h-7 text-amber-600 shrink-0" />
                          <span className="text-amber-900">
                            Ulasan Guru • Jawapan Sebenar: Pilihan {question.correctAnswer}
                          </span>
                        </>
                      )}
                    </div>
                    <p className={`leading-relaxed mt-2 font-sans ${fontScale === 1 ? 'text-base sm:text-lg' : fontScale === 2 ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl font-medium'}`}>
                      {question.explanation}
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      id="btn-focus-next-question"
                      onClick={(e) => {
                        e.currentTarget.blur();
                        onNextQuestion();
                      }}
                      className="flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-extrabold text-lg sm:text-xl shadow-xl transition cursor-pointer"
                    >
                      <span>
                        {currentIndex + 1 < totalQuestions ? 'Soalan Seterusnya ➡️' : 'Lihat Keputusan Penuh 🏆'}
                      </span>
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

