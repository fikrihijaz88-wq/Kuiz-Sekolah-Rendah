import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  QuizQuestion,
  Subject,
  YearLevel,
  StudentProfile,
} from '../types';
import { KSSR_TOPICS } from '../data/kssrQuestions';
import { StudentAvatarIcon } from './StudentAvatarIcon';
import {
  Swords,
  Trophy,
  Flame,
  Zap,
  Timer,
  RotateCcw,
  Sparkles,
  ArrowRight,
  User,
  Bot,
  CheckCircle2,
  XCircle,
  Volume2,
  Award,
  Crown,
  Play,
  Settings,
  HelpCircle,
  Keyboard,
  Shield,
  Clock,
  ThumbsUp,
  PartyPopper,
  X
} from 'lucide-react';
import {
  playCorrectSfx,
  playIncorrectSfx,
  playToggleSoundSfx,
  playCelebrationSfx,
  playBattleStartSfx,
  playSpeedBonusSfx,
  playBattleVictorySfx
} from '../utils/soundEffects';
import { speakText, stopSpeech } from '../utils/speech';

export interface QuizBattleViewProps {
  questionBank: QuizQuestion[];
  profiles: StudentProfile[];
  activeProfile: StudentProfile | null;
  soundEnabled: boolean;
  onExitBattle: () => void;
}

interface BattlePlayer {
  id: string;
  name: string;
  avatarId: string;
  isBot?: boolean;
  score: number;
  streak: number;
  maxStreak: number;
  correctCount: number;
  answers: {
    questionId: string;
    selectedOption: 'A' | 'B' | 'C' | 'D' | null;
    isCorrect: boolean;
    responseTimeMs: number;
    pointsEarned: number;
  }[];
}

type BattlePhase = 'setup' | 'countdown' | 'playing' | 'round_reveal' | 'finished';

const QUESTION_COUNT_OPTIONS = [5, 10, 15];
const TIME_LIMIT_OPTIONS = [10, 15, 20, 30];

const PRESET_AVATARS = [
  'avatar-1',
  'avatar-2',
  'avatar-3',
  'avatar-4',
  'avatar-5',
  'avatar-6',
  'avatar-7',
  'avatar-8',
];

const BOT_AVATARS = [
  { id: 'bot-sifu', name: 'Sifu Pintar AI', avatarId: 'avatar-7', speedMs: 3800, accuracy: 0.85 },
  { id: 'bot-jaguh', name: 'Jaguh KSSR', avatarId: 'avatar-3', speedMs: 4600, accuracy: 0.75 },
  { id: 'bot-kilat', name: 'Kilat Cilik', avatarId: 'avatar-5', speedMs: 2900, accuracy: 0.68 },
];

export const QuizBattleView: React.FC<QuizBattleViewProps> = ({
  questionBank,
  profiles,
  activeProfile,
  soundEnabled,
  onExitBattle,
}) => {
  // Setup configuration state
  const [selectedYear, setSelectedYear] = useState<YearLevel>(() => activeProfile?.year || 4);
  const [selectedSubject, setSelectedSubject] = useState<Subject>('Matematik');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [totalQuestionsCount, setTotalQuestionsCount] = useState<number>(5);
  const [timeLimitPerQuestion, setTimeLimitPerQuestion] = useState<number>(15);

  // Player 1 config
  const [player1Name, setPlayer1Name] = useState<string>(() => activeProfile?.name || 'Pemain 1');
  const [player1Avatar, setPlayer1Avatar] = useState<string>(() => activeProfile?.avatarId || 'avatar-1');
  const [player1ProfileId, setPlayer1ProfileId] = useState<string>(() => activeProfile?.id || 'p1');

  // Player 2 config
  const [player2Mode, setPlayer2Mode] = useState<'human' | 'bot'>('human');
  const [player2Name, setPlayer2Name] = useState<string>('Pemain 2');
  const [player2Avatar, setPlayer2Avatar] = useState<string>('avatar-2');
  const [player2ProfileId, setPlayer2ProfileId] = useState<string>('p2');
  const [selectedBotIndex, setSelectedBotIndex] = useState<number>(0);

  // Battle session state
  const [phase, setPhase] = useState<BattlePhase>('setup');
  const [countdownNumber, setCountdownNumber] = useState<number>(3);
  const [battleQuestions, setBattleQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);

  // Active round state
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [p1CurrentChoice, setP1CurrentChoice] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [p2CurrentChoice, setP2CurrentChoice] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [p1ResponseTimeMs, setP1ResponseTimeMs] = useState<number | null>(null);
  const [p2ResponseTimeMs, setP2ResponseTimeMs] = useState<number | null>(null);

  // Players data
  const [player1, setPlayer1] = useState<BattlePlayer>({
    id: 'p1',
    name: 'Pemain 1',
    avatarId: 'avatar-1',
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    answers: [],
  });

  const [player2, setPlayer2] = useState<BattlePlayer>({
    id: 'p2',
    name: 'Pemain 2',
    avatarId: 'avatar-2',
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    answers: [],
  });

  const roundStartTimeRef = useRef<number>(0);
  const botTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasSpokenCurrentQuestionRef = useRef<boolean>(false);

  // Available topics for selected year & subject
  const availableTopics = useMemo(() => {
    return KSSR_TOPICS.filter((t) => t.year === selectedYear && t.subject === selectedSubject);
  }, [selectedYear, selectedSubject]);

  // Handle starting battle countdown
  const handleStartBattle = () => {
    // Filter candidate questions
    let candidateQuestions = questionBank.filter(
      (q) => q.year === selectedYear && q.subject === selectedSubject
    );

    if (selectedTopicId !== 'all') {
      const topicObj = availableTopics.find((t) => t.id === selectedTopicId);
      if (topicObj) {
        candidateQuestions = candidateQuestions.filter((q) => q.topic.toLowerCase().includes(topicObj.name.toLowerCase()));
      }
    }

    if (candidateQuestions.length === 0) {
      candidateQuestions = questionBank.filter((q) => q.year === selectedYear);
    }

    // Shuffle and pick desired count
    const shuffled = [...candidateQuestions].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, Math.min(totalQuestionsCount, shuffled.length));

    setBattleQuestions(chosen);
    setCurrentQIndex(0);

    // Init players
    setPlayer1({
      id: player1ProfileId,
      name: player1Name.trim() || 'Pemain 1',
      avatarId: player1Avatar,
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      answers: [],
    });

    const activeBot = BOT_AVATARS[selectedBotIndex];
    setPlayer2({
      id: player2Mode === 'bot' ? activeBot.id : player2ProfileId,
      name: player2Mode === 'bot' ? activeBot.name : (player2Name.trim() || 'Pemain 2'),
      avatarId: player2Mode === 'bot' ? activeBot.avatarId : player2Avatar,
      isBot: player2Mode === 'bot',
      score: 0,
      streak: 0,
      maxStreak: 0,
      correctCount: 0,
      answers: [],
    });

    // Start 3-second countdown
    setPhase('countdown');
    setCountdownNumber(3);
    if (soundEnabled) playBattleStartSfx();
  };

  // Countdown timer effect
  useEffect(() => {
    if (phase !== 'countdown') return;

    const timer = setInterval(() => {
      setCountdownNumber((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Transition to playing first question
          setPhase('playing');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase]);

  // Round initialization when moving to playing
  const initRound = useCallback(() => {
    setP1CurrentChoice(null);
    setP2CurrentChoice(null);
    setP1ResponseTimeMs(null);
    setP2ResponseTimeMs(null);
    setTimeLeft(timeLimitPerQuestion);
    roundStartTimeRef.current = Date.now();
    hasSpokenCurrentQuestionRef.current = false;

    // AI Bot auto-response simulation
    if (player2Mode === 'bot') {
      const activeBot = BOT_AVATARS[selectedBotIndex];
      const currentQ = battleQuestions[currentQIndex];
      if (currentQ) {
        // Calculate dynamic response time with slight randomness
        const variance = (Math.random() - 0.5) * 1200;
        const targetDelay = Math.max(1200, Math.min(timeLimitPerQuestion * 900, activeBot.speedMs + variance));

        botTimeoutRef.current = setTimeout(() => {
          // Determine if bot answers correctly based on accuracy rate
          const willAnswerCorrect = Math.random() < activeBot.accuracy;
          let botChoice: 'A' | 'B' | 'C' | 'D' = currentQ.correctAnswer;
          if (!willAnswerCorrect) {
            const wrongOptions = (['A', 'B', 'C', 'D'] as const).filter((o) => o !== currentQ.correctAnswer);
            botChoice = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
          }

          const responseMs = Date.now() - roundStartTimeRef.current;
          setP2CurrentChoice(botChoice);
          setP2ResponseTimeMs(responseMs);
        }, targetDelay);
      }
    }
  }, [battleQuestions, currentQIndex, player2Mode, selectedBotIndex, timeLimitPerQuestion]);

  // Trigger initRound whenever phase becomes 'playing' or currentQIndex changes
  useEffect(() => {
    if (phase === 'playing') {
      initRound();
    }

    return () => {
      if (botTimeoutRef.current) clearTimeout(botTimeoutRef.current);
    };
  }, [phase, currentQIndex, initRound]);

  // Read question text using speech if sound is enabled
  useEffect(() => {
    if (phase === 'playing' && soundEnabled && battleQuestions[currentQIndex] && !hasSpokenCurrentQuestionRef.current) {
      hasSpokenCurrentQuestionRef.current = true;
      const q = battleQuestions[currentQIndex];
      const lang = q.subject === 'bahasa_inggeris' || q.subject === 'english' ? 'en' : 'ms';
      speakText(`Soalan ${currentQIndex + 1}. ${q.question}`, lang);
    }
  }, [phase, currentQIndex, battleQuestions, soundEnabled]);

  // Active question timer countdown
  useEffect(() => {
    if (phase !== 'playing') return;

    timerIntervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current!);
          // Force round reveal when time expires
          handleEvaluateRound(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [phase, p1CurrentChoice, p2CurrentChoice]);

  // Check if both players have answered to evaluate round early
  useEffect(() => {
    if (phase === 'playing' && p1CurrentChoice !== null && p2CurrentChoice !== null) {
      // Both responded! Brief 200ms lock, then reveal
      const t = setTimeout(() => {
        handleEvaluateRound(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [phase, p1CurrentChoice, p2CurrentChoice]);

  // Round evaluation and score calculation
  const handleEvaluateRound = (isTimeOut: boolean) => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (botTimeoutRef.current) clearTimeout(botTimeoutRef.current);
    stopSpeech();

    const currentQ = battleQuestions[currentQIndex];
    if (!currentQ) return;

    const p1Choice = p1CurrentChoice;
    const p2Choice = p2CurrentChoice;

    const p1Correct = p1Choice === currentQ.correctAnswer;
    const p2Correct = p2Choice === currentQ.correctAnswer;

    const p1Time = p1ResponseTimeMs || (isTimeOut ? timeLimitPerQuestion * 1000 : timeLimitPerQuestion * 1000);
    const p2Time = p2ResponseTimeMs || (isTimeOut ? timeLimitPerQuestion * 1000 : timeLimitPerQuestion * 1000);

    // Calculate P1 Score
    let p1Points = 0;
    let newP1Streak = p1Correct ? player1.streak + 1 : 0;
    if (p1Correct) {
      // Base score: 100 pts
      p1Points += 100;
      // Speed bonus: up to 50 pts
      const speedRemainingRatio = Math.max(0, (timeLimitPerQuestion * 1000 - p1Time) / (timeLimitPerQuestion * 1000));
      p1Points += Math.round(speedRemainingRatio * 50);
      // First-to-answer bonus: +20 pts if faster than P2
      if (p1Time < p2Time && (!p2Correct || p2Time > p1Time)) {
        p1Points += 20;
      }
      // Streak combo multiplier
      if (newP1Streak >= 3) p1Points = Math.round(p1Points * 1.25);
    }

    // Calculate P2 Score
    let p2Points = 0;
    let newP2Streak = p2Correct ? player2.streak + 1 : 0;
    if (p2Correct) {
      p2Points += 100;
      const speedRemainingRatio = Math.max(0, (timeLimitPerQuestion * 1000 - p2Time) / (timeLimitPerQuestion * 1000));
      p2Points += Math.round(speedRemainingRatio * 50);
      if (p2Time < p1Time && (!p1Correct || p1Time > p2Time)) {
        p2Points += 20;
      }
      if (newP2Streak >= 3) p2Points = Math.round(p2Points * 1.25);
    }

    // Sound feedback
    if (soundEnabled) {
      if (p1Correct || p2Correct) {
        if (p1Correct && p2Correct) {
          playSpeedBonusSfx();
        } else {
          playCorrectSfx();
        }
      } else {
        playIncorrectSfx();
      }
    }

    // Update Player 1 state
    setPlayer1((prev) => ({
      ...prev,
      score: prev.score + p1Points,
      streak: newP1Streak,
      maxStreak: Math.max(prev.maxStreak, newP1Streak),
      correctCount: prev.correctCount + (p1Correct ? 1 : 0),
      answers: [
        ...prev.answers,
        {
          questionId: currentQ.id,
          selectedOption: p1Choice,
          isCorrect: p1Correct,
          responseTimeMs: p1Time,
          pointsEarned: p1Points,
        },
      ],
    }));

    // Update Player 2 state
    setPlayer2((prev) => ({
      ...prev,
      score: prev.score + p2Points,
      streak: newP2Streak,
      maxStreak: Math.max(prev.maxStreak, newP2Streak),
      correctCount: prev.correctCount + (p2Correct ? 1 : 0),
      answers: [
        ...prev.answers,
        {
          questionId: currentQ.id,
          selectedOption: p2Choice,
          isCorrect: p2Correct,
          responseTimeMs: p2Time,
          pointsEarned: p2Points,
        },
      ],
    }));

    // Switch to round reveal
    setPhase('round_reveal');
  };

  // Move to next question or conclude battle
  const handleNextRound = () => {
    if (currentQIndex + 1 >= battleQuestions.length) {
      // Finished all rounds!
      setPhase('finished');
      if (soundEnabled) playBattleVictorySfx();
      // Trigger confetti
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#10b981', '#6366f1', '#ec4899', '#3b82f6'],
        });
      } catch (e) {}
    } else {
      setCurrentQIndex((prev) => prev + 1);
      setPhase('playing');
    }
  };

  // Keyboard shortcut listener for dual player controls on desktop
  useEffect(() => {
    if (phase !== 'playing') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Player 1 Hotkeys: A, S, D, F or 1, 2, 3, 4
      if (p1CurrentChoice === null) {
        const key = e.key.toLowerCase();
        let p1Pick: 'A' | 'B' | 'C' | 'D' | null = null;
        if (key === 'a' || key === '1') p1Pick = 'A';
        else if (key === 's' || key === '2') p1Pick = 'B';
        else if (key === 'd' || key === '3') p1Pick = 'C';
        else if (key === 'f' || key === '4') p1Pick = 'D';

        if (p1Pick) {
          e.preventDefault();
          const responseMs = Date.now() - roundStartTimeRef.current;
          setP1CurrentChoice(p1Pick);
          setP1ResponseTimeMs(responseMs);
          if (soundEnabled) playToggleSoundSfx(true);
        }
      }

      // Player 2 Hotkeys (if human): H, J, K, L or 7, 8, 9, 0 or Arrow keys
      if (player2Mode === 'human' && p2CurrentChoice === null) {
        const key = e.key.toLowerCase();
        let p2Pick: 'A' | 'B' | 'C' | 'D' | null = null;
        if (key === 'h' || key === '7' || e.key === 'ArrowLeft') p2Pick = 'A';
        else if (key === 'j' || key === '8' || e.key === 'ArrowUp') p2Pick = 'B';
        else if (key === 'k' || key === '9' || e.key === 'ArrowDown') p2Pick = 'C';
        else if (key === 'l' || key === '0' || e.key === 'ArrowRight') p2Pick = 'D';

        if (p2Pick) {
          e.preventDefault();
          const responseMs = Date.now() - roundStartTimeRef.current;
          setP2CurrentChoice(p2Pick);
          setP2ResponseTimeMs(responseMs);
          if (soundEnabled) playToggleSoundSfx(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, p1CurrentChoice, p2CurrentChoice, player2Mode, soundEnabled]);

  // Calculate live tug-of-war bar percentage (50% is center)
  const scoreDiffRatio = useMemo(() => {
    const total = player1.score + player2.score;
    if (total === 0) return 50;
    return Math.max(10, Math.min(90, Math.round((player1.score / total) * 100)));
  }, [player1.score, player2.score]);

  const currentQ = battleQuestions[currentQIndex];

  // -------------------------------------------------------------
  // RENDER: SETUP LOBBY
  // -------------------------------------------------------------
  if (phase === 'setup') {
    return (
      <div className="max-w-4xl mx-auto py-3 sm:py-6 px-3 sm:px-0">
        {/* Header Title */}
        <div className="bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden mb-6 border border-white/20">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner border border-white/30 shrink-0 animate-bounce">
                ⚔️
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-1.5 shadow-xs">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>Mod Pertarungan 1v1 (Quiz Battle)</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Arena Lumba Kuiz Serentak
                </h1>
                <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-lg">
                  Pilih topik yang sama, berlumba menjawab soalan sepantas kilat bersama rakan atau lawan Bot Pintar AI secara masa nyata!
                </p>
              </div>
            </div>

            <button
              onClick={onExitBattle}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition cursor-pointer border border-white/20 shrink-0"
            >
              <X className="w-4 h-4" />
              <span>Kembali</span>
            </button>
          </div>
        </div>

        {/* Configuration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1: Pilihan Pemain 1 & 2 */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100">
                <User className="w-5 h-5 text-indigo-600" />
                <h2 className="font-extrabold text-slate-900 text-base">Profil Dua Pemain (1v1)</h2>
              </div>

              {/* Player 1 Section */}
              <div className="bg-sky-50/80 border border-sky-200 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-sky-900 tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                    Pemain 1 (Kiri / Skrin Kiri)
                  </span>
                  <span className="text-[10px] text-sky-700 bg-sky-100 font-bold px-2 py-0.5 rounded-md">
                    Kekunci: A, S, D, F / 1, 2, 3, 4
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <StudentAvatarIcon avatarId={player1Avatar} size="md" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Nama Pemain 1</label>
                    <input
                      type="text"
                      value={player1Name}
                      onChange={(e) => setPlayer1Name(e.target.value)}
                      placeholder="Masukkan nama Pemain 1"
                      className="w-full px-3 py-1.5 text-xs font-bold rounded-xl border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                      maxLength={20}
                    />
                  </div>
                </div>

                {/* Profile quick select */}
                {profiles.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-sky-200/60 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] text-sky-800 font-semibold">Pilih Profil:</span>
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setPlayer1Name(p.name);
                          setPlayer1Avatar(p.avatarId);
                          setPlayer1ProfileId(p.id);
                          setSelectedYear(p.year);
                        }}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition cursor-pointer ${
                          player1ProfileId === p.id
                            ? 'bg-sky-600 text-white border-sky-600'
                            : 'bg-white text-slate-700 border-sky-300 hover:bg-sky-100'
                        }`}
                      >
                        {p.name.split(' ')[0]} (T{p.year})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Player 2 Section */}
              <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase text-rose-900 tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                    Pemain 2 (Kanan / Skrin Kanan)
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setPlayer2Mode('human')}
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md transition cursor-pointer ${
                        player2Mode === 'human'
                          ? 'bg-rose-600 text-white shadow-2xs'
                          : 'bg-rose-200 text-rose-800 hover:bg-rose-300'
                      }`}
                    >
                      Kawan / Murid
                    </button>
                    <button
                      type="button"
                      onClick={() => setPlayer2Mode('bot')}
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md transition cursor-pointer flex items-center gap-1 ${
                        player2Mode === 'bot'
                          ? 'bg-purple-600 text-white shadow-2xs'
                          : 'bg-rose-200 text-rose-800 hover:bg-rose-300'
                      }`}
                    >
                      <Bot className="w-3 h-3" />
                      Lawan AI
                    </button>
                  </div>
                </div>

                {player2Mode === 'human' ? (
                  <>
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <StudentAvatarIcon avatarId={player2Avatar} size="md" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Nama Pemain 2</label>
                        <input
                          type="text"
                          value={player2Name}
                          onChange={(e) => setPlayer2Name(e.target.value)}
                          placeholder="Masukkan nama Pemain 2"
                          className="w-full px-3 py-1.5 text-xs font-bold rounded-xl border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                          maxLength={20}
                        />
                      </div>
                    </div>

                    {profiles.length > 1 && (
                      <div className="mt-2.5 pt-2 border-t border-rose-200/60 flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-rose-800 font-semibold">Pilih Profil Lain:</span>
                        {profiles
                          .filter((p) => p.id !== player1ProfileId)
                          .map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setPlayer2Name(p.name);
                                setPlayer2Avatar(p.avatarId);
                                setPlayer2ProfileId(p.id);
                              }}
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border transition cursor-pointer ${
                                player2ProfileId === p.id
                                  ? 'bg-rose-600 text-white border-rose-600'
                                  : 'bg-white text-slate-700 border-rose-300 hover:bg-rose-100'
                              }`}
                            >
                              {p.name.split(' ')[0]} (T{p.year})
                            </button>
                          ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-purple-950 mb-1">Pilih Aras Bot AI:</label>
                    <div className="grid grid-cols-3 gap-2">
                      {BOT_AVATARS.map((bot, bIdx) => (
                        <button
                          key={bot.id}
                          type="button"
                          onClick={() => setSelectedBotIndex(bIdx)}
                          className={`p-2 rounded-xl text-left border transition cursor-pointer ${
                            selectedBotIndex === bIdx
                              ? 'bg-purple-600 text-white border-purple-700 ring-2 ring-purple-300 font-bold'
                              : 'bg-white text-slate-700 border-purple-200 hover:bg-purple-50'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <StudentAvatarIcon avatarId={bot.avatarId} size="sm" />
                            <span className="text-[11px] font-black truncate">{bot.name.split(' ')[0]}</span>
                          </div>
                          <div className="text-[9px] opacity-80">
                            Ketepatan: {Math.round(bot.accuracy * 100)}%
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Keyboard Hotkeys Tip */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl">
              <Keyboard className="w-4 h-4 text-indigo-600 shrink-0" />
              <span>
                <strong>Sokongan Papan Kekunci Pantas:</strong> P1 gunakan <code>A, S, D, F</code> dan P2 gunakan <code>H, J, K, L</code> atau anak panah <code>← ↑ ↓ →</code>!
              </span>
            </div>
          </div>

          {/* Card 2: Pilihan Topik & Peraturan Battle */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Settings className="w-5 h-5 text-amber-600" />
                <h2 className="font-extrabold text-slate-900 text-base">Tetapan Topik & Masa</h2>
              </div>

              {/* Tahun Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Pilih Tahun Pembelajaran</label>
                <div className="grid grid-cols-6 gap-1.5">
                  {([1, 2, 3, 4, 5, 6] as YearLevel[]).map((yr) => (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => setSelectedYear(yr)}
                      className={`py-2 rounded-xl font-black text-xs transition cursor-pointer border ${
                        selectedYear === yr
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      Tahun {yr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Mata Pelajaran</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {(
                    [
                      'Matematik',
                      'Sains',
                      'Bahasa Melayu',
                      'Bahasa Inggeris',
                      'Pendidikan Islam',
                      'Bahasa Arab',
                      'Bahasa Cina',
                    ] as Subject[]
                  ).map((subj) => (
                    <button
                      key={subj}
                      type="button"
                      onClick={() => {
                        setSelectedSubject(subj);
                        setSelectedTopicId('all');
                      }}
                      className={`py-2 px-2.5 rounded-xl font-bold text-[11px] truncate transition cursor-pointer border text-left ${
                        selectedSubject === subj
                          ? 'bg-amber-500 text-slate-950 border-amber-600 font-black shadow-xs'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                      title={subj}
                    >
                      {subj}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Pilih Topik / Tajuk</label>
                <select
                  value={selectedTopicId}
                  onChange={(e) => setSelectedTopicId(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="all">🌟 Semua Topik (Campuran Rawak)</option>
                  {availableTopics.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Match Options: Question Count & Timer */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-indigo-600" />
                    Bilangan Soalan
                  </label>
                  <div className="grid grid-cols-3 gap-1">
                    {QUESTION_COUNT_OPTIONS.map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setTotalQuestionsCount(cnt)}
                        className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer border ${
                          totalQuestionsCount === cnt
                            ? 'bg-emerald-600 text-white border-emerald-700'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cnt} Qs
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 flex items-center gap-1">
                    <Timer className="w-3.5 h-3.5 text-amber-600" />
                    Masa Per Soalan
                  </label>
                  <div className="grid grid-cols-4 gap-1">
                    {TIME_LIMIT_OPTIONS.map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setTimeLimitPerQuestion(sec)}
                        className={`py-1.5 rounded-lg text-xs font-black transition cursor-pointer border ${
                          timeLimitPerQuestion === sec
                            ? 'bg-amber-500 text-slate-950 border-amber-600'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {sec}s
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Launch Battle CTA */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleStartBattle}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 hover:from-amber-600 hover:via-rose-600 hover:to-indigo-700 text-white font-black text-base shadow-lg hover:shadow-xl transition transform active:scale-98 cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Swords className="w-5 h-5 animate-pulse" />
                <span>MULA PERTARUNGAN SEKARANG! ⚔️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: COUNTDOWN SCREEN (3... 2... 1... GO!)
  // -------------------------------------------------------------
  if (phase === 'countdown') {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="text-amber-400 text-xs font-black uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Swords className="w-4 h-4 animate-spin" />
            <span>Bersedia Untuk Berlumba!</span>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-12 my-6">
            <div className="text-center">
              <StudentAvatarIcon avatarId={player1.avatarId} size="lg" />
              <div className="font-black text-sm text-sky-400 mt-2">{player1.name}</div>
            </div>

            <div className="text-4xl font-black text-rose-500 animate-pulse">VS</div>

            <div className="text-center">
              <StudentAvatarIcon avatarId={player2.avatarId} size="lg" />
              <div className="font-black text-sm text-rose-400 mt-2">{player2.name}</div>
            </div>
          </div>

          {/* Big countdown digit */}
          <div className="my-8">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 text-white text-6xl font-black shadow-2xl animate-ping" style={{ animationDuration: '1s' }}>
              {countdownNumber > 0 ? countdownNumber : 'MULA!'}
            </div>
          </div>

          <p className="text-slate-400 text-xs font-medium">
            Jawab soalan dengan betul dan pantas untuk mengumpul mata maksima & bonus kepantasan!
          </p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: PLAYING OR ROUND REVEAL ARENA
  // -------------------------------------------------------------
  if ((phase === 'playing' || phase === 'round_reveal') && currentQ) {
    const isRevealing = phase === 'round_reveal';

    return (
      <div className="max-w-5xl mx-auto py-2 sm:py-4 px-2 sm:px-0">
        {/* Top Live Scoreboard & Tug-of-War Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 sm:p-5 text-white shadow-xl mb-4 relative overflow-hidden">
          {/* Header row: Question index & Timer */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="bg-indigo-600 text-white text-[11px] font-black px-2.5 py-1 rounded-lg">
                Pusingan {currentQIndex + 1} / {battleQuestions.length}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                {currentQ.subject} • Tahun {currentQ.year}
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
                  timeLeft <= 3
                    ? 'bg-rose-600 text-white animate-bounce'
                    : timeLeft <= 5
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-amber-400'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{isRevealing ? 'Pendedahan' : `${timeLeft}s`}</span>
              </div>

              <button
                onClick={onExitBattle}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer text-xs font-semibold"
                title="Tamat Battle"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dual Players Status Header */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 items-center">
            {/* Player 1 Info */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative">
                <StudentAvatarIcon avatarId={player1.avatarId} size="md" />
                {player1.streak >= 2 && (
                  <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-full flex items-center">
                    🔥x{player1.streak}
                  </span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-extrabold text-sky-400 truncate flex items-center gap-1">
                  <span>{player1.name}</span>
                </div>
                <div className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {player1.score.toLocaleString()} <span className="text-[10px] sm:text-xs font-bold text-sky-300">pts</span>
                </div>
              </div>
            </div>

            {/* Player 2 Info */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-3 text-right">
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-extrabold text-rose-400 truncate flex items-center justify-end gap-1">
                  <span>{player2.name}</span>
                  {player2.isBot && <Bot className="w-3.5 h-3.5 text-purple-400" />}
                </div>
                <div className="text-lg sm:text-2xl font-black text-white leading-tight">
                  {player2.score.toLocaleString()} <span className="text-[10px] sm:text-xs font-bold text-rose-300">pts</span>
                </div>
              </div>
              <div className="relative">
                <StudentAvatarIcon avatarId={player2.avatarId} size="md" />
                {player2.streak >= 2 && (
                  <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded-full flex items-center">
                    🔥x{player2.streak}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Tug-of-War Live Progress Bar */}
          <div className="mt-3 relative">
            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-sky-400 transition-all duration-300"
                style={{ width: `${scoreDiffRatio}%` }}
              />
              <div
                className="h-full bg-gradient-to-r from-rose-400 to-rose-500 transition-all duration-300"
                style={{ width: `${100 - scoreDiffRatio}%` }}
              />
            </div>
            {/* Center battle sword indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center text-[10px] text-amber-400 shadow-sm transition-all duration-300"
              style={{ left: `${scoreDiffRatio}%` }}
            >
              ⚔️
            </div>
          </div>
        </div>

        {/* Central Question Display Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md mb-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-extrabold uppercase text-slate-500 tracking-wider">
              {currentQ.topic}
            </span>
            <button
              onClick={() => {
                const lang = currentQ.subject === 'bahasa_inggeris' || currentQ.subject === 'english' ? 'en' : 'ms';
                speakText(currentQ.question, lang);
              }}
              className="p-1 rounded-md text-indigo-600 hover:bg-indigo-50 transition cursor-pointer"
              title="Dengar soalan"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <h2 className="text-base sm:text-xl font-extrabold text-slate-900 max-w-3xl mx-auto leading-relaxed">
            {currentQ.question}
          </h2>

          {/* Diagram if available */}
          {currentQ.diagram && currentQ.diagram.svgContent && (
            <div
              className="my-3 max-w-xs mx-auto p-2 bg-slate-50 rounded-xl border border-slate-200"
              dangerouslySetInnerHTML={{ __html: currentQ.diagram.svgContent }}
            />
          )}

          {/* Options reference overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-left">
            {(['A', 'B', 'C', 'D'] as const).map((opt) => (
              <div
                key={opt}
                className={`p-2.5 rounded-xl border text-xs font-bold transition ${
                  isRevealing
                    ? opt === currentQ.correctAnswer
                      ? 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400'
                      : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                    : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}
              >
                <span className="inline-block w-5 h-5 rounded-md bg-slate-200 text-slate-900 text-center font-black mr-1.5 leading-5 text-[11px]">
                  {opt}
                </span>
                <span>{currentQ.options[opt]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dual Player Interactive Answer Consoles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* PLAYER 1 CONTROLLER (LEFT) */}
          <div
            className={`rounded-3xl p-4 sm:p-5 border transition-all ${
              p1CurrentChoice !== null
                ? isRevealing
                  ? p1CurrentChoice === currentQ.correctAnswer
                    ? 'bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-300'
                    : 'bg-rose-50/90 border-rose-300'
                  : 'bg-sky-50/90 border-sky-300'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <span className="text-xs font-black uppercase text-sky-950">{player1.name} (P1)</span>
              </div>
              <div className="text-[10px] text-slate-500 font-bold">
                {p1CurrentChoice !== null ? (
                  <span className="text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                    🔒 Terkunci ({((p1ResponseTimeMs || 0) / 1000).toFixed(1)}s)
                  </span>
                ) : (
                  <span className="text-slate-400">Papan Kekunci: A, S, D, F</span>
                )}
              </div>
            </div>

            {/* P1 4 Option Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                const isSelected = p1CurrentChoice === opt;
                const isCorrect = isRevealing && opt === currentQ.correctAnswer;
                const isWrongSelection = isRevealing && isSelected && !isCorrect;

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={p1CurrentChoice !== null || isRevealing}
                    onClick={() => {
                      if (p1CurrentChoice === null && !isRevealing) {
                        const responseMs = Date.now() - roundStartTimeRef.current;
                        setP1CurrentChoice(opt);
                        setP1ResponseTimeMs(responseMs);
                        if (soundEnabled) playToggleSoundSfx(true);
                      }
                    }}
                    className={`py-3 px-3 rounded-2xl font-extrabold text-xs sm:text-sm text-left transition flex items-center justify-between border cursor-pointer ${
                      isCorrect
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-400'
                        : isWrongSelection
                        ? 'bg-rose-600 text-white border-rose-700'
                        : isSelected
                        ? 'bg-sky-600 text-white border-sky-700 ring-2 ring-sky-300'
                        : p1CurrentChoice !== null
                        ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                        : 'bg-sky-50/70 hover:bg-sky-100 text-sky-950 border-sky-200 hover:border-sky-400 active:scale-95'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center font-black text-xs shrink-0">
                        {opt}
                      </span>
                      <span className="truncate">{currentQ.options[opt]}</span>
                    </div>
                    {isSelected && (
                      <span className="text-xs shrink-0 font-bold ml-1">
                        {isRevealing ? (isCorrect ? '✓' : '✗') : '•'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PLAYER 2 CONTROLLER (RIGHT) */}
          <div
            className={`rounded-3xl p-4 sm:p-5 border transition-all ${
              p2CurrentChoice !== null
                ? isRevealing
                  ? p2CurrentChoice === currentQ.correctAnswer
                    ? 'bg-emerald-50/90 border-emerald-400 ring-2 ring-emerald-300'
                    : 'bg-rose-50/90 border-rose-300'
                  : 'bg-rose-50/90 border-rose-300'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-xs font-black uppercase text-rose-950">
                  {player2.name} (P2) {player2.isBot && '🤖'}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 font-bold">
                {p2CurrentChoice !== null ? (
                  <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                    🔒 Terkunci ({((p2ResponseTimeMs || 0) / 1000).toFixed(1)}s)
                  </span>
                ) : (
                  <span className="text-slate-400">
                    {player2.isBot ? 'Menjana jawapan...' : 'Kekunci: H, J, K, L / ← ↑ ↓ →'}
                  </span>
                )}
              </div>
            </div>

            {/* P2 4 Option Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                const isSelected = p2CurrentChoice === opt;
                const isCorrect = isRevealing && opt === currentQ.correctAnswer;
                const isWrongSelection = isRevealing && isSelected && !isCorrect;

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={player2.isBot || p2CurrentChoice !== null || isRevealing}
                    onClick={() => {
                      if (!player2.isBot && p2CurrentChoice === null && !isRevealing) {
                        const responseMs = Date.now() - roundStartTimeRef.current;
                        setP2CurrentChoice(opt);
                        setP2ResponseTimeMs(responseMs);
                        if (soundEnabled) playToggleSoundSfx(true);
                      }
                    }}
                    className={`py-3 px-3 rounded-2xl font-extrabold text-xs sm:text-sm text-left transition flex items-center justify-between border cursor-pointer ${
                      isCorrect
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-md ring-2 ring-emerald-400'
                        : isWrongSelection
                        ? 'bg-rose-600 text-white border-rose-700'
                        : isSelected
                        ? 'bg-rose-600 text-white border-rose-700 ring-2 ring-rose-300'
                        : p2CurrentChoice !== null
                        ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                        : 'bg-rose-50/70 hover:bg-rose-100 text-rose-950 border-rose-200 hover:border-rose-400 active:scale-95'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center font-black text-xs shrink-0">
                        {opt}
                      </span>
                      <span className="truncate">{currentQ.options[opt]}</span>
                    </div>
                    {isSelected && (
                      <span className="text-xs shrink-0 font-bold ml-1">
                        {isRevealing ? (isCorrect ? '✓' : '✗') : '•'}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Round Reveal Feedback & Next Button */}
        {isRevealing && (
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 rounded-3xl p-4 sm:p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-indigo-500/30 animate-in fade-in slide-in-from-bottom-2">
            <div className="text-center sm:text-left">
              <div className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Jawapan Tepat: Pilihan ({currentQ.correctAnswer})</span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                {currentQ.explanation || currentQ.options[currentQ.correctAnswer]}
              </p>
            </div>

            <button
              onClick={handleNextRound}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-sm shadow-lg hover:shadow-xl transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <span>{currentQIndex + 1 >= battleQuestions.length ? 'Lihat Juara Battle 🏆' : 'Soalan Seterusnya'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // RENDER: BATTLE VICTORY / PODIUM SUMMARY
  // -------------------------------------------------------------
  if (phase === 'finished') {
    const isDraw = player1.score === player2.score;
    const p1Won = player1.score > player2.score;
    const winner = isDraw ? null : p1Won ? player1 : player2;
    const runnerUp = isDraw ? null : p1Won ? player2 : player1;

    // Averages
    const p1AvgTime =
      player1.answers.length > 0
        ? (player1.answers.reduce((acc, a) => acc + a.responseTimeMs, 0) / player1.answers.length / 1000).toFixed(1)
        : '0.0';

    const p2AvgTime =
      player2.answers.length > 0
        ? (player2.answers.reduce((acc, a) => acc + a.responseTimeMs, 0) / player2.answers.length / 1000).toFixed(1)
        : '0.0';

    return (
      <div className="max-w-3xl mx-auto py-6 px-4">
        {/* Victory Podium Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl text-center relative overflow-hidden mb-6">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Crown & Banner */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-md">
              <Trophy className="w-4 h-4" />
              <span>{isDraw ? 'Keputusan: Keputusan Seri!' : `Juara Pertarungan: ${winner?.name}!`}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
              {isDraw ? 'Pertarungan Sengit Seri! 🤝' : `Tahniah ${winner?.name}! 👑`}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto mb-8">
              Hebat! Kedua-dua pemain telah menunjukkan kepantasan minda dan penguasaan subjek yang luar biasa.
            </p>

            {/* Duel Score Showcase */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              {/* P1 Box */}
              <div
                className={`p-4 rounded-2xl border text-center transition ${
                  p1Won
                    ? 'bg-gradient-to-b from-sky-900/80 to-sky-950/90 border-sky-400 ring-2 ring-sky-400/50'
                    : 'bg-slate-800/80 border-slate-700 opacity-80'
                }`}
              >
                {p1Won && <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />}
                <StudentAvatarIcon avatarId={player1.avatarId} size="md" />
                <div className="font-extrabold text-sm text-sky-400 mt-2 truncate">{player1.name}</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {player1.score.toLocaleString()} <span className="text-xs text-sky-300">pts</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Ketepatan: {player1.correctCount}/{battleQuestions.length} ({Math.round((player1.correctCount / battleQuestions.length) * 100)}%)
                </div>
              </div>

              {/* P2 Box */}
              <div
                className={`p-4 rounded-2xl border text-center transition ${
                  !p1Won && !isDraw
                    ? 'bg-gradient-to-b from-rose-900/80 to-rose-950/90 border-rose-400 ring-2 ring-rose-400/50'
                    : 'bg-slate-800/80 border-slate-700 opacity-80'
                }`}
              >
                {!p1Won && !isDraw && <Crown className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />}
                <StudentAvatarIcon avatarId={player2.avatarId} size="md" />
                <div className="font-extrabold text-sm text-rose-400 mt-2 truncate">{player2.name}</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {player2.score.toLocaleString()} <span className="text-xs text-rose-300">pts</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Ketepatan: {player2.correctCount}/{battleQuestions.length} ({Math.round((player2.correctCount / battleQuestions.length) * 100)}%)
                </div>
              </div>
            </div>

            {/* Match Stats Comparison */}
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 max-w-lg mx-auto text-left text-xs mb-8">
              <h3 className="font-extrabold text-slate-300 uppercase tracking-wider text-[10px] mb-3 text-center">
                Statistik Prestasi Battle
              </h3>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-1.5">
                  <span className="text-sky-400 font-bold">{player1.correctCount} betul</span>
                  <span className="text-slate-400 font-semibold">Ketepatan Jawapan</span>
                  <span className="text-rose-400 font-bold">{player2.correctCount} betul</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700/50 pb-1.5">
                  <span className="text-sky-400 font-bold">{p1AvgTime} saat</span>
                  <span className="text-slate-400 font-semibold">Purata Masa Tindak Balas</span>
                  <span className="text-rose-400 font-bold">{p2AvgTime} saat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 font-bold">🔥 x{player1.maxStreak}</span>
                  <span className="text-slate-400 font-semibold">Kombo Tertinggi</span>
                  <span className="text-rose-400 font-bold">🔥 x{player2.maxStreak}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleStartBattle}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-sm shadow-md hover:shadow-lg transition transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Pertarungan Semula (Rematch) ⚔️</span>
              </button>

              <button
                type="button"
                onClick={() => setPhase('setup')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                <span>Tukar Topik / Tetapan</span>
              </button>

              <button
                type="button"
                onClick={onExitBattle}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-sm border border-slate-700 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Kembali ke Kuiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
