import React from 'react';
import { QuizDiagram } from '../types';
import { FlaskConical, Info, BookOpen, Layers } from 'lucide-react';

interface QuizDiagramViewerProps {
  diagram: QuizDiagram;
}

export const QuizDiagramViewer: React.FC<QuizDiagramViewerProps> = ({ diagram }) => {
  const isIslam =
    diagram.title.toLowerCase().includes('solat') ||
    diagram.title.toLowerCase().includes('wuduk') ||
    diagram.title.toLowerCase().includes('jawi') ||
    diagram.title.toLowerCase().includes('tajwid') ||
    diagram.title.toLowerCase().includes('surah') ||
    diagram.title.toLowerCase().includes('islam') ||
    diagram.title.toLowerCase().includes('khat') ||
    diagram.title.toLowerCase().includes('salasilah') ||
    diagram.title.toLowerCase().includes('hijrah') ||
    diagram.type === 'islamic_visual';

  return (
    <div
      className={`mb-6 rounded-2xl border p-4 sm:p-5 shadow-xs transition ${
        isIslam
          ? 'border-teal-200/90 bg-linear-to-b from-teal-50/40 via-white to-slate-50/60'
          : 'border-emerald-200/90 bg-linear-to-b from-emerald-50/40 via-white to-slate-50/60'
      }`}
    >
      {/* Header bar with diagram label */}
      <div
        className={`flex items-center justify-between gap-2 mb-3 pb-2.5 border-b ${
          isIslam ? 'border-teal-100' : 'border-emerald-100'
        }`}
      >
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
              isIslam
                ? 'bg-teal-100 text-teal-800'
                : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            {isIslam ? (
              <BookOpen className="w-3.5 h-3.5 text-teal-700" />
            ) : (
              <FlaskConical className="w-3.5 h-3.5 text-emerald-700" />
            )}
            {isIslam ? 'Bahan Visual & Rajah' : 'Rajah & Ilustrasi'}
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-800">
            {diagram.title}
          </h4>
        </div>
      </div>

      {/* Diagram Graphics Rendering */}
      <div className="diagram-container flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-white border border-slate-200/80 overflow-x-auto min-h-[140px]">
        {diagram.svgContent ? (
          <div
            className="w-full flex justify-center [&>svg]:max-w-full [&>svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: diagram.svgContent }}
          />
        ) : diagram.type === 'table_data' && diagram.data?.headers ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse border border-slate-300">
              <thead className="bg-emerald-100/70 text-emerald-950 font-bold">
                <tr>
                  {diagram.data.headers.map((h: string, idx: number) => (
                    <th key={idx} className="border border-slate-300 px-3 py-2">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {diagram.data.rows?.map((row: string[], rIdx: number) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    {row.map((cell: string, cIdx: number) => (
                      <td key={cIdx} className="border border-slate-300 px-3 py-2 text-slate-700 font-medium">
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
        <div className="mt-2.5 flex items-start gap-1.5 text-xs text-slate-600 bg-slate-100/70 px-3 py-1.5 rounded-lg border border-slate-200">
          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
          <span>{diagram.caption}</span>
        </div>
      )}
    </div>
  );
};
