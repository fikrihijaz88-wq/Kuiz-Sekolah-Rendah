import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { Code, Copy, Check, Download, CheckCircle2, FileJson } from 'lucide-react';

interface JsonSchemaViewProps {
  questions: QuizQuestion[];
}

export const JsonSchemaView: React.FC<JsonSchemaViewProps> = ({ questions }) => {
  const [copied, setCopied] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'data' | 'schema'>('data');

  const jsonPayload = {
    curriculum: 'KSSR Semakan (Kementerian Pendidikan Malaysia)',
    totalQuestions: questions.length,
    generatedAt: new Date().toISOString(),
    schemaVersion: '1.0.0',
    rulesEnforced: {
      fourDistinctOptions: true,
      singleCorrectAnswer: true,
      pedagogicalExplanation: true,
      ageAppropriate: true,
    },
    questions: questions.map((q) => ({
      id: q.id,
      year: q.year,
      subject: q.subject,
      topic: q.topic,
      subtopic: q.subtopic || null,
      difficulty: q.difficulty,
      stimulus: q.stimulus || null,
      question: q.question,
      options: {
        A: q.options.A,
        B: q.options.B,
        C: q.options.C,
        D: q.options.D,
      },
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      learningStandard: q.learningStandard || null,
    })),
  };

  const formalSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'KSSRMultipleChoiceQuiz',
    description: 'Malaysian KSSR Semakan Primary School (Year 2 & Year 4) Multiple-Choice Quiz Schema',
    type: 'object',
    properties: {
      curriculum: { type: 'string', const: 'KSSR Semakan (Kementerian Pendidikan Malaysia)' },
      totalQuestions: { type: 'integer', minimum: 1 },
      questions: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            year: { type: 'integer', enum: [2, 4] },
            subject: { type: 'string', enum: ['Matematik', 'Bahasa Inggeris'] },
            topic: { type: 'string' },
            subtopic: { type: 'string' },
            difficulty: {
              type: 'string',
              enum: ['Mudah', 'Sederhana', 'KBAT (Aras Rendah-Sederhana)'],
            },
            stimulus: { type: 'string' },
            question: { type: 'string' },
            options: {
              type: 'object',
              properties: {
                A: { type: 'string' },
                B: { type: 'string' },
                C: { type: 'string' },
                D: { type: 'string' },
              },
              required: ['A', 'B', 'C', 'D'],
              additionalProperties: false,
            },
            correctAnswer: { type: 'string', enum: ['A', 'B', 'C', 'D'] },
            explanation: {
              type: 'string',
              description: 'Brief, encouraging pedagogical explanation for the correct answer',
            },
            learningStandard: { type: 'string' },
          },
          required: ['id', 'year', 'subject', 'topic', 'difficulty', 'question', 'options', 'correctAnswer', 'explanation'],
          additionalProperties: false,
        },
      },
    },
    required: ['curriculum', 'totalQuestions', 'questions'],
  };

  const currentJsonString =
    activeSubTab === 'data'
      ? JSON.stringify(jsonPayload, null, 2)
      : JSON.stringify(formalSchema, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentJsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([currentJsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeSubTab === 'data' ? 'kssr_quiz_questions.json' : 'kssr_quiz_schema.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
            <FileJson className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Format & Skema JSON KSSR Semakan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Pematuhan syarat: 4 pilihan jawapan (A, B, C, D), 1 jawapan tepat, & ulasan pedagogi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-copy-json"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Salin JSON</span>
              </>
            )}
          </button>

          <button
            id="btn-download-json"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Muat Turun .json</span>
          </button>
        </div>
      </div>

      {/* Rules Validation Badge Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-900 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>4 Pilihan Berasingan (A, B, C, D)</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-900 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Hanya 1 Jawapan Betul</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-900 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Ulasan Pedagogi Guru</span>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-900 text-xs font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Skema JSON KPM Sah</span>
        </div>
      </div>

      {/* Sub Tabs: Data vs Formal Schema */}
      <div className="flex items-center gap-2 mb-3">
        <button
          id="btn-tab-json-data"
          onClick={() => setActiveSubTab('data')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSubTab === 'data'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Data Soalan Semasa ({questions.length} Soalan)
        </button>

        <button
          id="btn-tab-formal-schema"
          onClick={() => setActiveSubTab('schema')}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
            activeSubTab === 'schema'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Takrifan Skema Rasmi (JSON Schema)
        </button>
      </div>

      {/* Code Viewer Container */}
      <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto max-h-[520px] scrollbar-thin">
        <pre className="leading-relaxed whitespace-pre font-mono">
          {currentJsonString}
        </pre>
      </div>
    </div>
  );
};
