import React from 'react';
import { Subject } from '../types';
import { MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS } from '../data/matriksPembelajaranTahun4';
import { X, FileSpreadsheet, Clock, Award, Target, CheckCircle2, BookOpen, Layers } from 'lucide-react';

interface MatriksSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSubject: Subject;
  onSelectSubject?: (subject: Subject) => void;
  onStartExam?: () => void;
}

export const MatriksSpecModal: React.FC<MatriksSpecModalProps> = ({
  isOpen,
  onClose,
  selectedSubject,
  onSelectSubject,
  onStartExam,
}) => {
  if (!isOpen) return null;

  const spec = MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS[selectedSubject] || MATRIKS_PEMBELAJARAN_TAHUN_4_SPECS['Bahasa Melayu'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5 text-indigo-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-2">
                <span>Format Pentaksiran Matriks Pembelajaran Tahun 4</span>
              </h2>
              <p className="text-xs text-indigo-200">
                Spesifikasi Rasmi KSSR Semakan • Kementerian Pendidikan Malaysia (KPM)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subject Selector Tabs */}
        {onSelectSubject && (
          <div className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-100 border-b border-slate-200 overflow-x-auto shrink-0">
            {(['Bahasa Melayu', 'Bahasa Inggeris', 'Matematik', 'Sains'] as Subject[]).map((subj) => (
              <button
                key={subj}
                type="button"
                onClick={() => onSelectSubject(subj)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedSubject === subj
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300/80'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Quick Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80">
              <div className="flex items-center gap-1.5 text-indigo-800 text-xs font-bold mb-1">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Jumlah Markah</span>
              </div>
              <p className="text-lg font-black text-indigo-950">{spec.totalMarks} Markah</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Tempoh Ujian</span>
              </div>
              <p className="text-lg font-black text-amber-950">{spec.timeLimitMinutes} Minit (1 Jam 15 Minit)</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold mb-1">
                <Target className="w-4 h-4 text-emerald-600" />
                <span>Aras Kesukaran</span>
              </div>
              <p className="text-xs font-black text-emerald-950 mt-1">{spec.difficultyRatio}</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/80">
              <div className="flex items-center gap-1.5 text-purple-800 text-xs font-bold mb-1">
                <Layers className="w-4 h-4 text-purple-600" />
                <span>Bil. Bahagian</span>
              </div>
              <p className="text-lg font-black text-purple-950">{spec.sections.length} Bahagian</p>
            </div>
          </div>

          {/* Official Spec Table matching Image Structure */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
            <div className="bg-slate-800 text-white font-bold text-xs uppercase px-4 py-2.5 flex items-center justify-between">
              <span>Jadual Matriks Pentaksiran: {spec.subject} (Tahun 4)</span>
              <span className="text-[11px] font-mono text-slate-300">DSKP KSSR Semakan</span>
            </div>

            <table className="w-full text-xs text-left">
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-700 w-36 border-r border-slate-200">Jenis Instrumen</td>
                  <td className="p-3 font-semibold text-slate-900">{spec.instrumentType}</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 border-r border-slate-200">Kaedah Penskoran</td>
                  <td className="p-3 text-slate-800">
                    <span className="font-semibold">{spec.scoringMethods.join(' • ')}</span>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-700 border-r border-slate-200">Cakupan Konteks</td>
                  <td className="p-3 text-slate-800">
                    Mencakupi Standard Kandungan (SK) dan Standard Pembelajaran (SP) Dokumen Standard Kurikulum dan Pentaksiran (DSKP) KSSR Tahun 1 hingga Tahun 4.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-slate-700 border-r border-slate-200 align-top">Konstruk Pentaksiran</td>
                  <td className="p-3 text-slate-800">
                    <ul className="list-disc pl-4 space-y-1">
                      {spec.constructs.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Breakdown by Bahagian */}
          <div>
            <h3 className="font-black text-sm uppercase tracking-wide text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Perincian Bahagian & Agihan Markah ({spec.totalMarks} Markah)</span>
            </h3>

            <div className="space-y-3">
              {spec.sections.map((sec) => (
                <div
                  key={sec.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-indigo-50/30 hover:border-indigo-200 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-black text-xs">
                        {sec.sectionCode}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm">{sec.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-indigo-700 bg-indigo-100 px-2.5 py-0.5 rounded-full">
                        {sec.marks} Markah
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-300 px-2 py-0.5 rounded-full">
                        {sec.questionCountText}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-2">{sec.description}</p>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200 text-[11px]">
                    <span className="font-bold text-slate-700">Jenis Item:</span>
                    {sec.itemTypes.map((it) => (
                      <span key={it} className="bg-slate-200 text-slate-800 font-semibold px-2 py-0.5 rounded">
                        {it}
                      </span>
                    ))}
                    <span className="text-slate-300 mx-1">|</span>
                    <span className="font-bold text-slate-700">Konstruk:</span>
                    <span className="text-slate-600">{sec.constructs.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Format diselaraskan mengikut Matriks Pentaksiran Rasmi KSSR Tahun 4.</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition cursor-pointer"
            >
              Tutup
            </button>
            {onStartExam && (
              <button
                onClick={() => {
                  onClose();
                  onStartExam();
                }}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Award className="w-4 h-4" />
                <span>Mulakan Simulasi 50 Markah</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
