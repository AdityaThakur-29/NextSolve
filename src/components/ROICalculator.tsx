'use client';

import { useState, useMemo } from 'react';
import { Calculator, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ROICalculator() {
  // Input parameters (derived from verified PWS_Calculator.html)
  const [students, setStudents] = useState<number>(1500);
  const [ansCost, setAnsCost] = useState<number>(2);
  const [qCost, setQCost] = useState<number>(2);
  const [pracSubj, setPracSubj] = useState<number>(4);
  const [pracExams, setPracExams] = useState<number>(2);
  const [intSubj, setIntSubj] = useState<number>(5);
  const [intExams, setIntExams] = useState<number>(2);
  const [teaMin, setTeaMin] = useState<number>(20000);
  const [teaMax, setTeaMax] = useState<number>(50000);

  const calculations = useMemo(() => {
    const paperCost = ansCost + qCost;
    const totalInstances = students * pracSubj * pracExams + students * intSubj * intExams;
    const annualPaperCost = totalInstances * paperCost;

    const teaAvg = (teaMin + teaMax) / 2;
    const teaHourly = teaAvg / 30 / 8;

    const classes = students / 60;
    const pInstances = students * pracSubj * pracExams;
    const iInstances = students * intSubj * intExams;

    const timeBeforeMins =
      60 * pracSubj * pracExams + // Prac Q-Paper
      15 * classes * pracSubj * pracExams + // Prac Arrange
      5 * pInstances + // Prac Grade + Totals (2.5 + 2.5)
      20 * classes * pracSubj * pracExams + // Prac Attendance
      150 * intSubj * intExams + // Int Q-Paper + Arrange (75 + 75)
      3 * iInstances + // Int Check MCQ
      225 * classes * intSubj * intExams; // Int Totals + Attendance (180 + 45)

    const timeAfterMins =
      10 * pracSubj * pracExams +
      5 * classes * pracSubj * pracExams +
      3 * intSubj * intExams +
      0.05 * classes * intSubj * intExams;

    const hrsBefore = timeBeforeMins / 60;
    const hrsAfter = timeAfterMins / 60;
    const costBefore = hrsBefore * teaHourly;
    const costAfter = hrsAfter * teaHourly;
    const totalSavings = annualPaperCost + (costBefore - costAfter);
    const timeSavedPercent = Math.round(((hrsBefore - hrsAfter) / (hrsBefore || 1)) * 100);

    return {
      annualPaperCost,
      teaHourly,
      hrsBefore: Math.round(hrsBefore),
      hrsAfter: Math.round(hrsAfter),
      costBefore,
      costAfter,
      totalSavings,
      timeSavedPercent,
    };
  }, [students, ansCost, qCost, pracSubj, pracExams, intSubj, intExams, teaMin, teaMax]);

  const formatCurrency = (val: number) =>
    '₹' + Math.round(val).toLocaleString('en-IN');

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-50/70 border-b border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 text-primary flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Institutional ROI & Cost Estimator
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Project annual financial and faculty hour savings for your campus.
            </p>
          </div>
        </div>
        <div className="text-xs font-semibold text-primary bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 self-start sm:self-auto">
          Interactive College Model
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> 1. Campus Demographics
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs sm:text-sm mb-1.5 font-medium text-slate-700">
                  <label htmlFor="students">Total Students Enrolled</label>
                  <span className="text-primary font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {students.toLocaleString('en-IN')} students
                  </span>
                </div>
                <input
                  id="students"
                  type="range"
                  min={100}
                  max={10000}
                  step={50}
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="ansCost" className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Answer Sheet Cost (₹)
                  </label>
                  <input
                    id="ansCost"
                    type="number"
                    min={1}
                    max={20}
                    value={ansCost}
                    onChange={(e) => setAnsCost(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="qCost" className="block text-[11px] font-semibold text-slate-600 mb-1">
                    Question Slip Cost (₹)
                  </label>
                  <input
                    id="qCost"
                    type="number"
                    min={1}
                    max={20}
                    value={qCost}
                    onChange={(e) => setQCost(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> 2. Annual Exam Frequency
            </h4>
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="pracSubj" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Practical Subjects/Yr
                </label>
                <input
                  id="pracSubj"
                  type="number"
                  min={1}
                  max={20}
                  value={pracSubj}
                  onChange={(e) => setPracSubj(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pracExams" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Practicals / Subject
                </label>
                <input
                  id="pracExams"
                  type="number"
                  min={1}
                  max={10}
                  value={pracExams}
                  onChange={(e) => setPracExams(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intSubj" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Internal Subjects/Yr
                </label>
                <input
                  id="intSubj"
                  type="number"
                  min={1}
                  max={20}
                  value={intSubj}
                  onChange={(e) => setIntSubj(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intExams" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Internals / Subject
                </label>
                <input
                  id="intExams"
                  type="number"
                  min={1}
                  max={10}
                  value={intExams}
                  onChange={(e) => setIntExams(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span> 3. Teacher Salary Range (₹/mo)
            </h4>
            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="teaMin" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Min Salary (₹)
                </label>
                <input
                  id="teaMin"
                  type="number"
                  step={5000}
                  value={teaMin}
                  onChange={(e) => setTeaMin(Math.max(10000, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="teaMax" className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Max Salary (₹)
                </label>
                <input
                  id="teaMax"
                  type="number"
                  step={5000}
                  value={teaMax}
                  onChange={(e) => setTeaMax(Math.max(teaMin, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-slate-50/50 text-slate-900 font-medium focus:bg-white focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50/50 flex flex-col justify-between">
          <div className="space-y-5">
            {/* Big Total Savings Banner */}
            <motion.div
              key={calculations.totalSavings}
              initial={{ scale: 0.98, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary text-white p-6 rounded-2xl shadow-md"
            >
              <div className="text-xs uppercase font-bold tracking-wider text-blue-100 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Projected Total Annual Savings
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {formatCurrency(calculations.totalSavings)}
              </div>
              <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                Direct physical paper elimination + reclaimed faculty grading hours.
              </p>
            </motion.div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Paper Cost Saved
                </div>
                <div className="text-lg font-bold text-slate-900 mt-1">
                  {formatCurrency(calculations.annualPaperCost)}
                </div>
                <span className="text-[10px] text-emerald-700 font-semibold">100% Paperless</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Grading Time Saved
                </div>
                <div className="text-lg font-bold text-slate-900 mt-1">
                  {calculations.timeSavedPercent}%
                </div>
                <span className="text-[10px] text-primary font-semibold">Automated Grading</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Admin Hours (Before)
                </div>
                <div className="text-lg font-bold text-rose-600 mt-1">
                  {calculations.hrsBefore.toLocaleString('en-IN')} hrs
                </div>
                <span className="text-[10px] text-slate-400">Manual paper handling</span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                  Admin Hours (With PWS)
                </div>
                <div className="text-lg font-bold text-emerald-600 mt-1">
                  {calculations.hrsAfter.toLocaleString('en-IN')} hrs
                </div>
                <span className="text-[10px] text-emerald-600 font-semibold">Autonomous platform</span>
              </div>
            </div>

            {/* Key Operational Takeaways */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Operational Impact Highlights:
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-500">
                <li>Automated rollcall marks attendance immediately on student login.</li>
                <li>Zero printing delays, zero physical paper loss or damage.</li>
                <li>Results export to university-compliant spreadsheets in seconds.</li>
              </ul>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-200 text-[11px] text-slate-400 text-center">
            *Estimates based on typical Indian college university examination schedules and institutional faculty hourly rates.
          </div>
        </div>
      </div>
    </div>
  );
}
