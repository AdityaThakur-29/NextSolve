import { CheckCircle2, XCircle } from 'lucide-react';
import { comparisonData } from '@/data/content';

export default function ComparisonTable() {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-slate-200/90 overflow-hidden max-w-5xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-50 border-b border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <div className="md:col-span-4 p-4 text-slate-600">Examination Workflow Parameter</div>
        <div className="md:col-span-4 p-4 text-rose-700 bg-rose-50/50 flex items-center gap-1.5">
          <XCircle className="w-4 h-4 text-rose-500" /> Traditional Manual Setup
        </div>
        <div className="md:col-span-4 p-4 text-primary bg-blue-50/50 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-primary" /> NextSolves PWS Digital System
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-100 text-xs sm:text-sm">
        {comparisonData.rows.map(([aspect, traditional, pws], idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-100 transition-colors ${
              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
            } hover:bg-blue-50/30`}
          >
            <div className="md:col-span-4 p-3.5 sm:p-4 font-semibold text-slate-900 flex items-center">
              {aspect}
            </div>
            <div className="md:col-span-4 p-3.5 sm:p-4 text-slate-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 md:hidden"></span>
              <span>{traditional}</span>
            </div>
            <div className="md:col-span-4 p-3.5 sm:p-4 text-slate-900 font-medium bg-blue-50/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>{pws}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
