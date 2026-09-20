import React from 'react';
import { YearLevel, Subject, QuizTopicMeta } from '../types';
import { Calculator, BookA, FlaskConical, Filter, Moon, BookText, Languages, Globe } from 'lucide-react';

interface YearSubjectSelectorProps {
  selectedYear: YearLevel;
  onSelectYear: (year: YearLevel) => void;
  selectedSubject: Subject;
  onSelectSubject: (subject: Subject) => void;
  selectedTopicId: string; // 'all' or specific topic id
  onSelectTopic: (topicId: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (difficulty: string) => void;
  availableTopics: QuizTopicMeta[];
  totalQuestionsInFilter: number;
}

export const YearSubjectSelector: React.FC<YearSubjectSelectorProps> = ({
  selectedYear,
  onSelectYear,
  selectedSubject,
  onSelectSubject,
  selectedTopicId,
  onSelectTopic,
  selectedDifficulty,
  onSelectDifficulty,
  availableTopics,
  totalQuestionsInFilter,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pb-4 border-b border-slate-100">
        {/* Year Level Selection */}
        <div className="lg:col-span-12">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            1. Pilih Tahap Persekolahan (Tahun 1 - 6 KSSR Semakan)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <button
              id="select-year-1"
              onClick={() => onSelectYear(1)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                selectedYear === 1
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 1</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  Tahap 1
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Hingga 100 • Asas Permulaan
              </p>
            </button>

            <button
              id="select-year-2"
              onClick={() => onSelectYear(2)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                selectedYear === 2
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 2</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
                  Tahap 1
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Hingga 1,000 • Asas SK
              </p>
            </button>

            <button
              id="select-year-3"
              onClick={() => onSelectYear(3)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                selectedYear === 3
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 3</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-cyan-100 text-cyan-700">
                  Tahap 1
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Hingga 10,000 • Sifir & Pecahan
              </p>
            </button>

            <button
              id="select-year-4"
              onClick={() => onSelectYear(4)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                selectedYear === 4
                  ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 ring-2 ring-emerald-500/30'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 4</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs">
                  Matriks 50M
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Format Pentaksiran Rasmi (1j 15m)
              </p>
            </button>

            <button
              id="select-year-5"
              onClick={() => onSelectYear(5)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                selectedYear === 5
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 5</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                  Tahap 2
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Hingga 1 Juta • Pengukuhan
              </p>
            </button>

            <button
              id="select-year-6"
              onClick={() => onSelectYear(6)}
              className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                selectedYear === 6
                  ? 'border-indigo-600 bg-indigo-50/70 text-indigo-950 ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm">Tahun 6</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700">
                  Tahap 2
                </span>
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Hingga 10 Juta • UASA & KBAT
              </p>
            </button>
          </div>
        </div>

        {/* Subject Selection */}
        <div className="lg:col-span-12">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            2. Pilih Mata Pelajaran (KSSR Semakan)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
            <button
              id="select-subject-math"
              onClick={() => onSelectSubject('Matematik')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Matematik'
                  ? 'border-blue-600 bg-blue-50/70 text-blue-950 ring-2 ring-blue-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Calculator className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">Matematik</span>
                <span className="text-[11px] text-slate-500 block truncate">KSSR Semakan</span>
              </div>
            </button>

            <button
              id="select-subject-science"
              onClick={() => onSelectSubject('Sains')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Sains'
                  ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FlaskConical className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">Sains</span>
                <span className="text-[11px] text-slate-500 block truncate">Dua Bahasa/BM</span>
              </div>
            </button>

            <button
              id="select-subject-bm"
              onClick={() => onSelectSubject('Bahasa Melayu')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Bahasa Melayu'
                  ? 'border-amber-600 bg-amber-50/70 text-amber-950 ring-2 ring-amber-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <BookText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">B. Melayu</span>
                <span className="text-[11px] text-slate-500 block truncate">KSSR Semakan</span>
              </div>
            </button>

            <button
              id="select-subject-english"
              onClick={() => onSelectSubject('Bahasa Inggeris')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Bahasa Inggeris'
                  ? 'border-purple-600 bg-purple-50/70 text-purple-950 ring-2 ring-purple-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <BookA className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">English</span>
                <span className="text-[11px] text-slate-500 block truncate">
                  {selectedYear === 2 ? 'CEFR A1' : selectedYear === 4 ? 'CEFR A2' : 'English Plus 1'}
                </span>
              </div>
            </button>

            <button
              id="select-subject-islamic"
              onClick={() => onSelectSubject('Pendidikan Islam')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Pendidikan Islam'
                  ? 'border-teal-600 bg-teal-50/70 text-teal-950 ring-2 ring-teal-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Moon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">Pend. Islam</span>
                <span className="text-[11px] text-slate-500 block truncate">KSSR Semakan</span>
              </div>
            </button>

            <button
              id="select-subject-arabic"
              onClick={() => onSelectSubject('Bahasa Arab')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Bahasa Arab'
                  ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Languages className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">Bahasa Arab</span>
                <span className="text-[11px] text-slate-500 block truncate">اللغة العربية SK</span>
              </div>
            </button>

            <button
              id="select-subject-chinese"
              onClick={() => onSelectSubject('Bahasa Cina')}
              className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                selectedSubject === 'Bahasa Cina'
                  ? 'border-rose-600 bg-rose-50/70 text-rose-950 ring-2 ring-rose-500/20'
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 text-slate-700'
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Globe className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-bold text-xs sm:text-sm block truncate">Bahasa Cina</span>
                <span className="text-[11px] text-slate-500 block truncate">华语 (SK KPM)</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Topic Filter Pills */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Topik Pembelajaran KPM ({availableTopics.length} Topik)
          </label>
          <span className="text-xs text-slate-500 font-medium">
            Jumlah Soalan Sedia Ada: <strong className="text-slate-800">{totalQuestionsInFilter}</strong>
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            id="topic-pill-all"
            onClick={() => onSelectTopic('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedTopicId === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Semua Topik (Ujian Menyeluruh)
          </button>

          {availableTopics.map((topic) => (
            <button
              key={topic.id}
              id={`topic-pill-${topic.id}`}
              onClick={() => onSelectTopic(topic.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                selectedTopicId === topic.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>{topic.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty / KBAT Filter */}
      <div className="mt-4 pt-3 border-t border-slate-100">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
          Tahap / Aras Kesukaran {(selectedYear === 4 || selectedYear === 5) ? '(Pilihan Aras & KBAT KPM)' : ''}
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            id="diff-pill-all"
            onClick={() => onSelectDifficulty('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedDifficulty === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Semua Aras
          </button>

          {(selectedYear === 4 || selectedYear === 5) ? (
            <>
              <button
                id="diff-pill-mudah"
                onClick={() => onSelectDifficulty('Mudah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedDifficulty === 'Mudah'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
                }`}
              >
                Mudah
              </button>

              <button
                id="diff-pill-sederhana"
                onClick={() => onSelectDifficulty('Sederhana')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedDifficulty === 'Sederhana'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
                }`}
              >
                Sederhana
              </button>

              <button
                id="diff-pill-kbat-rendah"
                onClick={() => onSelectDifficulty('KBAT (Aras Rendah)')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  selectedDifficulty === 'KBAT (Aras Rendah)'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                <span>🟢 KBAT (Rendah)</span>
              </button>

              <button
                id="diff-pill-kbat-sederhana"
                onClick={() => onSelectDifficulty('KBAT (Aras Sederhana)')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  selectedDifficulty === 'KBAT (Aras Sederhana)'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100'
                }`}
              >
                <span>🟡 KBAT (Sederhana)</span>
              </button>

              <button
                id="diff-pill-kbat-tinggi"
                onClick={() => onSelectDifficulty('KBAT (Aras Tinggi)')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  selectedDifficulty === 'KBAT (Aras Tinggi)'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-purple-50 text-purple-900 border border-purple-300 hover:bg-purple-100'
                }`}
              >
                <span>🟣 KBAT (Tinggi)</span>
              </button>
            </>
          ) : (
            <>
              <button
                id="diff-pill-mudah"
                onClick={() => onSelectDifficulty('Mudah')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedDifficulty === 'Mudah'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
              >
                Mudah
              </button>

              <button
                id="diff-pill-sederhana"
                onClick={() => onSelectDifficulty('Sederhana')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedDifficulty === 'Sederhana'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100'
                }`}
              >
                Sederhana
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
