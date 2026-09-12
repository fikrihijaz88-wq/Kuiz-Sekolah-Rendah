import React, { useEffect, useState } from 'react';
import { QuizQuestion, QuizUserAnswer } from '../types';
import { Volume2, VolumeX, CheckCircle2, XCircle, ArrowRight, Lightbulb, BookOpen, Award } from 'lucide-react';
import { speakText, stopSpeech, subscribeAudioState } from '../utils/speech';

interface QuizCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  userAnswer?: QuizUserAnswer;
  onSelectOption: (optionKey: 'A' | 'B' | 'C' | 'D') => void;
  onNextQuestion: () => void;
  soundEnabled: boolean;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  userAnswer,
  onSelectOption,
  onNextQuestion,
  soundEnabled,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const isAnswered = Boolean(userAnswer);

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

  // Auto-read question if sound enabled and not answered yet
  useEffect(() => {
    if (soundEnabled && !isAnswered) {
      const lang = question.subject === 'Matematik' ? 'ms' : 'en';
      const fullSpeech = `${question.stimulus ? question.stimulus + '. ' : ''}${question.question}`;
      speakText(fullSpeech, lang);
    }
  }, [question.id, soundEnabled, isAnswered]);

  const handleToggleSpeak = () => {
    if (isPlayingAudio) {
      stopSpeech();
    } else {
      const lang = question.subject === 'Matematik' ? 'ms' : 'en';
      const speech = `${question.stimulus ? question.stimulus + '. ' : ''}Soalan: ${question.question}. Pilihan A: ${question.options.A}. Pilihan B: ${question.options.B}. Pilihan C: ${question.options.C}. Pilihan D: ${question.options.D}.`;
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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 transition">
      {/* Progress & Metadata Header */}
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

      {/* Question Text */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
          {question.question}
        </h2>
        <button
          id={`btn-speak-question-${question.id}`}
          onClick={handleToggleSpeak}
          className={`p-2.5 rounded-xl shrink-0 transition cursor-pointer flex items-center gap-1.5 ${
            isPlayingAudio
              ? 'bg-amber-100 text-amber-900 border border-amber-300 ring-2 ring-amber-400/30 animate-pulse'
              : 'bg-slate-100 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200'
          }`}
          title={
            isPlayingAudio
              ? 'Klik untuk hentikan audio bacaan'
              : question.subject === 'Matematik'
              ? 'Dengar bacaan suara Bahasa Melayu Asli (Malaysia ms-MY)'
              : 'Listen to question (English CEFR)'
          }
        >
          {isPlayingAudio ? (
            <>
              <VolumeX className="w-5 h-5 text-amber-700" />
              <span className="text-[11px] font-bold text-amber-900 hidden sm:inline">
                Henti Suara
              </span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-indigo-600" />
              <span className="text-[11px] font-semibold text-slate-700 hidden sm:inline">
                {question.subject === 'Matematik' ? '🇲🇾 Suara BM Asli' : 'Audio'}
              </span>
            </>
          )}
        </button>
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
              key={key}
              id={`option-${key}-${question.id}`}
              disabled={isAnswered}
              onClick={() => onSelectOption(key)}
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

      {/* Pedagogical Explanation Card */}
      {isAnswered && (
        <div
          id={`explanation-${question.id}`}
          className={`p-5 rounded-2xl border mb-6 transition-all duration-300 ${
            userAnswer?.isCorrect
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
              : 'bg-amber-50/90 border-amber-200 text-amber-950'
          }`}
        >
          <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
            {userAnswer?.isCorrect ? (
              <>
                <Award className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-800">
                  Jawapan Anda Tepat! (Pilihan {question.correctAnswer})
                </span>
              </>
            ) : (
              <>
                <Lightbulb className="w-5 h-5 text-amber-600" />
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
      )}

      {/* Action to proceed to next question */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            id="btn-next-question"
            onClick={onNextQuestion}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition cursor-pointer"
          >
            <span>
              {currentIndex + 1 < totalQuestions ? 'Soalan Seterusnya' : 'Lihat Keputusan Penuh'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
