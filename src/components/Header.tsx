import React from 'react';
import { Sparkles, BookCheck, Code, GraduationCap, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  currentTab: 'quiz' | 'generator' | 'schema';
  onTabChange: (tab: 'quiz' | 'generator' | 'schema') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  soundEnabled,
  onToggleSound,
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
                Sukatan Rasmi Tahun 2 & Tahun 4 • Matematik & Bahasa Inggeris
              </p>
            </div>

            {/* Sound toggle on mobile */}
            <button
              id="btn-sound-mobile"
              onClick={onToggleSound}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white md:hidden transition"
              title={soundEnabled ? 'Matikan Suara Bacaan' : 'Hidupkan Suara Bacaan'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5 text-amber-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-center md:justify-end overflow-x-auto pb-1 md:pb-0">
            <button
              id="nav-tab-quiz"
              onClick={() => onTabChange('quiz')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'quiz'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookCheck className="w-4 h-4" />
              <span>Mod Kuiz</span>
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

            <button
              id="nav-tab-schema"
              onClick={() => onTabChange('schema')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                currentTab === 'schema'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Skema & JSON</span>
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
                  <span>Suara: 🇲🇾 BM Asli (Malaysia)</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-500" />
                  <span>Audio Senyap</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
