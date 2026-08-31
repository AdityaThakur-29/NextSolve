import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { comparisonData } from '@/data/content';

export default function ComparisonTable() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden max-w-5xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 bg-navy-900 text-white font-bold text-xs uppercase tracking-wider divide-y md:divide-y-0 md:divide-x divide-navy-800">
        <div className="md:col-span-4 p-4 text-navy-300">Examination Parameter</div>
        <div className="md:col-span-4 p-4 text-rose-400 bg-navy-950/40 flex items-center gap-1.5">
          <XCircle className="w-4 h-4 text-rose-400" /> Traditional Manual Setup
        </div>
        <div className="md:col-span-4 p-4 text-teal-300 bg-teal-950/30 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-teal-400" /> NextSolves PWS Digital System
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-navy-100 text-xs sm:text-sm">
        {comparisonData.rows.map(([aspect, traditional, pws], idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-navy-100 transition-colors ${
              idx % 2 === 0 ? 'bg-white' : 'bg-navy-50/30'
            } hover:bg-teal-50/30`}
          >
            <div className="md:col-span-4 p-3.5 sm:p-4 font-semibold text-navy-900 flex items-center">
              {aspect}
            </div>
            <div className="md:col-span-4 p-3.5 sm:p-4 text-navy-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 md:hidden"></span>
              <span>{traditional}</span>
            </div>
            <div className="md:col-span-4 p-3.5 sm:p-4 text-navy-900 font-medium bg-teal-50/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{pws}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
