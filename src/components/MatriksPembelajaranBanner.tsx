import React, { useState } from 'react';
import { Subject, YearLevel } from '../types';
import { MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS } from '../data/matriksPembelajaranTahun4';
import { MatriksSpecModal } from './MatriksSpecModal';
import {
  FileSpreadsheet,
  Clock,
  Award,
  Target,
  BookOpen,
  Printer,
  ChevronRight,
  Info,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

interface MatriksPembelajaranBannerProps {
  selectedYear: YearLevel;
  selectedSubject: Subject;
  isMatriksMode: boolean;
  onStartMatriksExam: () => void;
  onExitMatriksMode: () => void;
  onGoToPrint: () => void;
  onSelectSubject?: (subject: Subject) => void;
}

export const MatriksPembelajaranBanner: React.FC<MatriksPembelajaranBannerProps> = ({
  selectedYear,
  selectedSubject,
  isMatriksMode,
  onStartMatriksExam,
  onExitMatriksMode,
  onGoToPrint,
  onSelectSubject,
}) => {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState<boolean>(false);

  if (selectedYear !== 4) return null;

  const spec = MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS[selectedSubject] || MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS['Bahasa Melayu'];

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-indigo-500/30 mb-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 shadow-inner">
                <FileSpreadsheet className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-[11px] tracking-wide uppercase">
                    Format Matriks Pembelajaran Tahun 4
                  </span>
                  <span className="text-slate-400 text-xs">• KSSR Semakan KPM</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight flex items-center gap-2">
                  <span>Kertas Pentaksiran: {spec.subject}</span>
                </h3>
              </div>
            </div>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setIsSpecModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition cursor-pointer"
                title="Lihat Jadual Spesifikasi & Matriks Item Penuh"
              >
                <Info className="w-4 h-4 text-indigo-300" />
                <span>Format & Jadual Matriks</span>
              </button>

              <button
                type="button"
                onClick={onGoToPrint}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition cursor-pointer"
                title="Cetak Set Ujian Matriks PDF (A4)"
              >
                <Printer className="w-4 h-4 text-emerald-300" />
                <span>Cetak PDF (50M)</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-indigo-300 text-xs font-bold mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Jumlah Markah</span>
              </div>
              <p className="text-base sm:text-lg font-black text-white">{spec.totalMarks} Markah</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Masa Ujian</span>
              </div>
              <p className="text-base sm:text-lg font-black text-white">{spec.timeLimitMinutes} Minit (1j 15m)</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold mb-1">
                <Target className="w-3.5 h-3.5" />
                <span>Aras Kesukaran</span>
              </div>
              <p className="text-xs sm:text-sm font-black text-white mt-0.5">5 : 3 : 2 (R:S:T)</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
              <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-bold mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Struktur Ujian</span>
              </div>
              <p className="text-base sm:text-lg font-black text-white">{spec.sections.length} Bahagian</p>
            </div>
          </div>

          {/* Section Badges Preview */}
          <div className="flex flex-wrap items-center gap-2 pt-1 pb-4">
            {spec.sections.map((sec) => (
              <div
                key={sec.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200"
              >
                <span className="font-extrabold text-indigo-300">{sec.sectionCode}:</span>
                <span className="font-medium truncate max-w-[200px]">{sec.title}</span>
                <span className="px-1.5 py-0.2 rounded bg-indigo-500/30 text-[10px] font-bold text-indigo-200">
                  {sec.marks}M
                </span>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {isMatriksMode
                  ? 'Sedang menjalankan Simulasi Pentaksiran Matriks 50 Markah.'
                  : 'Sedia untuk menduduki ujian mengikut format matriks pembelajaran KSSR Tahun 4.'}
              </span>
            </div>

            {isMatriksMode ? (
              <button
                type="button"
                onClick={onExitMatriksMode}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Keluar Mod Matriks (Kembali ke Latihan Harian)</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onStartMatriksExam}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>MULA SIMULASI UJIAN MATRIKS (50 MARKAH)</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <MatriksSpecModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
        selectedSubject={selectedSubject}
        onSelectSubject={onSelectSubject}
        onStartExam={onStartMatriksExam}
      />
    </>
  );
};
