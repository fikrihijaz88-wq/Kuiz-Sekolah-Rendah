import React, { useState } from 'react';
import { QuizDiagram } from '../types';
import {
  FlaskConical,
  Info,
  BookOpen,
  BookText,
  Calculator,
  Table,
  Maximize2,
  Minimize2,
  Sparkles,
  Eye,
} from 'lucide-react';

interface QuizDiagramViewerProps {
  diagram: QuizDiagram;
}

export const QuizDiagramViewer: React.FC<QuizDiagramViewerProps> = ({ diagram }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const titleLower = diagram.title.toLowerCase();
  const typeLower = (diagram.type || '').toLowerCase();

  const isIslam =
    titleLower.includes('solat') ||
    titleLower.includes('wuduk') ||
    titleLower.includes('jawi') ||
    titleLower.includes('tajwid') ||
    titleLower.includes('surah') ||
    titleLower.includes('islam') ||
    titleLower.includes('khat') ||
    titleLower.includes('salasilah') ||
    titleLower.includes('hijrah') ||
    typeLower === 'islamic_visual';

  const isBM =
    typeLower === 'bm_visual' ||
    typeLower === 'tatabahasa' ||
    typeLower === 'peribahasa' ||
    titleLower.includes('bahasa') ||
    titleLower.includes('tatabahasa') ||
    titleLower.includes('petikan') ||
    titleLower.includes('peribahasa') ||
    titleLower.includes('simpulan') ||
    titleLower.includes('imbuhan') ||
    titleLower.includes('pola ayat') ||
    titleLower.includes('penjodoh bilangan');

  const isMath =
    typeLower.includes('math') ||
    typeLower.includes('nombor') ||
    typeLower.includes('pecahan') ||
    typeLower.includes('wang') ||
    typeLower.includes('masa') ||
    typeLower.includes('sudut') ||
    typeLower.includes('koordinat') ||
    typeLower.includes('abakus') ||
    titleLower.includes('matematik') ||
    titleLower.includes('jam') ||
    titleLower.includes('pecahan') ||
    titleLower.includes('abakus') ||
    titleLower.includes('garis nombor') ||
    titleLower.includes('wang') ||
    titleLower.includes('koordinat') ||
    titleLower.includes('sudut') ||
    titleLower.includes('poligon') ||
    titleLower.includes('carta palang') ||
    titleLower.includes('carta pai') ||
    titleLower.includes('piktograf') ||
    titleLower.includes('perimeter') ||
    titleLower.includes('luas') ||
    titleLower.includes('isi padu');

  const isTable = typeLower === 'table_data' || titleLower.includes('jadual');

  const theme = isIslam
    ? {
        border: 'border-teal-200/90 bg-linear-to-b from-teal-50/50 via-white to-slate-50/60',
        headerBorder: 'border-teal-100',
        badgeBg: 'bg-teal-100 text-teal-900 border border-teal-300/60',
        badgeText: 'Bahan Visual & Rajah',
        icon: <BookOpen className="w-3.5 h-3.5 text-teal-700 shrink-0" />,
        tableHeadBg: 'bg-teal-700 text-white',
        tableZebraBg: 'bg-teal-50/40',
        accentBtn: 'bg-teal-50 text-teal-700 hover:bg-teal-100 border-teal-200',
      }
    : isBM
    ? {
        border: 'border-amber-200/90 bg-linear-to-b from-amber-50/50 via-white to-slate-50/60',
        headerBorder: 'border-amber-100',
        badgeBg: 'bg-amber-100 text-amber-900 border border-amber-300/60',
        badgeText: 'Bahan Grafik Bahasa Melayu',
        icon: <BookText className="w-3.5 h-3.5 text-amber-700 shrink-0" />,
        tableHeadBg: 'bg-amber-700 text-white',
        tableZebraBg: 'bg-amber-50/40',
        accentBtn: 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200',
      }
    : isMath
    ? {
        border: 'border-indigo-200/90 bg-linear-to-b from-indigo-50/50 via-white to-slate-50/60',
        headerBorder: 'border-indigo-100',
        badgeBg: 'bg-indigo-100 text-indigo-900 border border-indigo-300/60',
        badgeText: isTable ? 'Jadual Matematik' : 'Rajah Visual Matematik',
        icon: isTable ? (
          <Table className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
        ) : (
          <Calculator className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
        ),
        tableHeadBg: 'bg-indigo-700 text-white',
        tableZebraBg: 'bg-indigo-50/40',
        accentBtn: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200',
      }
    : {
        border: 'border-emerald-200/90 bg-linear-to-b from-emerald-50/50 via-white to-slate-50/60',
        headerBorder: 'border-emerald-100',
        badgeBg: 'bg-emerald-100 text-emerald-900 border border-emerald-300/60',
        badgeText: isTable ? 'Jadual Data Sains' : 'Rajah Eksperimen & Sains',
        icon: isTable ? (
          <Table className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
        ) : (
          <FlaskConical className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
        ),
        tableHeadBg: 'bg-emerald-700 text-white',
        tableZebraBg: 'bg-emerald-50/40',
        accentBtn: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200',
      };

  return (
    <div id={`diagram-${diagram.title.replace(/\s+/g, '-').toLowerCase()}`} className={`mb-6 rounded-2xl border p-4 sm:p-5 shadow-xs transition ${theme.border}`}>
      {/* Header bar with diagram label & interactive tools */}
      <div className={`flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b ${theme.headerBorder}`}>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${theme.badgeBg}`}
          >
            {theme.icon}
            {theme.badgeText}
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-1.5">
            {diagram.title}
          </h4>
        </div>

        {/* Action button */}
        <button
          id="toggle-zoom-btn"
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg border transition shadow-2xs cursor-pointer ${theme.accentBtn}`}
          title={isZoomed ? "Kecilkan semula paparan" : "Besarkan paparan rajah/jadual"}
        >
          {isZoomed ? (
            <>
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Kecilkan</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Besarkan Rajah</span>
            </>
          )}
        </button>
      </div>

      {/* Diagram Graphics Rendering with optional zoom mode */}
      <div className={`diagram-container flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl bg-white border border-slate-200/90 overflow-x-auto min-h-[140px] shadow-2xs transition-all ${
        isZoomed ? 'scale-105 sm:scale-110 my-3 py-6 ring-2 ring-indigo-300' : ''
      }`}>
        {diagram.svgContent ? (
          <div
            className="w-full flex justify-center items-center py-2 [&>svg]:max-w-full [&>svg]:h-auto [&>svg]:drop-shadow-xs transition-transform duration-200"
            dangerouslySetInnerHTML={{ __html: diagram.svgContent }}
          />
        ) : diagram.type === 'table_data' && diagram.data?.headers ? (
          <div className="w-full overflow-x-auto py-1">
            <table className="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300 rounded-lg overflow-hidden shadow-2xs">
              <thead className={`${theme.tableHeadBg} font-bold text-center`}>
                <tr>
                  {diagram.data.headers.map((h: string, idx: number) => (
                    <th key={idx} className="border border-slate-400/40 px-3.5 py-2.5 text-xs sm:text-sm tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {diagram.data.rows?.map((row: string[], rIdx: number) => (
                  <tr
                    key={rIdx}
                    onMouseEnter={() => setHoveredRow(rIdx)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`transition duration-150 cursor-pointer ${
                      hoveredRow === rIdx
                        ? 'bg-amber-100/70 font-semibold'
                        : rIdx % 2 === 0
                        ? 'bg-white'
                        : theme.tableZebraBg
                    }`}
                  >
                    {row.map((cell: string, cIdx: number) => (
                      <td
                        key={cIdx}
                        className={`border border-slate-300/80 px-3.5 py-2.5 text-slate-800 font-medium ${
                          cIdx === 0 ? 'font-semibold text-slate-900 text-center sm:text-left' : 'text-center'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic py-4">
            [Rajah: {diagram.title}]
          </div>
        )}
      </div>

      {/* Diagram Caption / Notes */}
      {diagram.caption && (
        <div className="mt-2.5 flex items-start gap-1.5 text-xs text-slate-700 bg-slate-100/90 px-3 py-2 rounded-lg border border-slate-200/90 leading-relaxed font-medium">
          <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
          <span>{diagram.caption}</span>
        </div>
      )}
    </div>
  );
};


