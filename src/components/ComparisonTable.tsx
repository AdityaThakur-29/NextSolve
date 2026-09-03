import { CheckCircle2, XCircle } from 'lucide-react';
import { comparisonData } from '@/data/content';

export default function ComparisonTable() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Mobile Card Layout (< 768px): Clear, comparative touch cards */}
      <div className="md:hidden space-y-3.5">
        {comparisonData.rows.map(([aspect, traditional, pws], idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden"
          >
            <div className="px-4 py-3 bg-slate-50/80 border-b border-slate-100 font-bold text-xs text-slate-900">
              {aspect}
            </div>
            <div className="p-3.5 space-y-2 text-xs">
              {/* Traditional Friction */}
              <div className="p-2.5 rounded-xl bg-rose-50/40 border border-rose-100/80 flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block mb-0.5">
                    Traditional Setup
                  </span>
                  <span className="text-slate-600 leading-relaxed">{traditional}</span>
                </div>
              </div>

              {/* NextSolves PWS Automation */}
              <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                    NextSolves PWS
                  </span>
                  <span className="text-slate-900 font-semibold leading-relaxed">{pws}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid Layout (>= 768px): Full 12-column side-by-side table */}
      <div className="hidden md:block bg-white rounded-3xl shadow-md border border-slate-200/90 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider divide-x divide-slate-200">
          <div className="col-span-4 p-4 text-slate-600">Examination Workflow Parameter</div>
          <div className="col-span-4 p-4 text-rose-700 bg-rose-50/50 flex items-center gap-1.5">
            <XCircle className="w-4 h-4 text-rose-500" /> Traditional Manual Setup
          </div>
          <div className="col-span-4 p-4 text-primary bg-blue-50/50 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-primary" /> NextSolves PWS Digital System
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100 text-xs sm:text-sm">
          {comparisonData.rows.map(([aspect, traditional, pws], idx) => (
            <div
              key={idx}
              className={`grid grid-cols-12 divide-x divide-slate-100 transition-colors ${
                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
              } hover:bg-blue-50/30`}
            >
              <div className="col-span-4 p-4 font-semibold text-slate-900 flex items-center">
                {aspect}
              </div>
              <div className="col-span-4 p-4 text-slate-600 flex items-center gap-2">
                <span>{traditional}</span>
              </div>
              <div className="col-span-4 p-4 text-slate-900 font-medium bg-blue-50/20 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>{pws}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
