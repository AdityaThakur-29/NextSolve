'use client';

import { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Clock, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <div className="bg-white rounded-2xl shadow-xl border border-navy-100 overflow-hidden">
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 p-6 md:p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Institutional ROI & Cost Estimator</h3>
            <p className="text-sm text-navy-300">
              Calculate projected annual savings on paper, logistics, and faculty grading hours.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-navy-100">
        {/* Inputs */}
        <div className="lg:col-span-6 p-6 md:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span> 1. Campus Demographics
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1.5 font-medium text-navy-700">
                  <label htmlFor="students">Total Students Enrolled</label>
                  <span className="text-navy-900 font-bold">{students.toLocaleString('en-IN')}</span>
                </div>
                <input
                  id="students"
                  type="range"
                  min={100}
                  max={10000}
                  step={50}
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full h-2 bg-navy-100 rounded-lg appearance-none cursor-pointer accent-teal-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ansCost" className="block text-xs font-semibold text-navy-600 mb-1">
                    Answer Sheet Cost (₹)
                  </label>
                  <input
                    id="ansCost"
                    type="number"
                    min={1}
                    max={20}
                    value={ansCost}
                    onChange={(e) => setAnsCost(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="qCost" className="block text-xs font-semibold text-navy-600 mb-1">
                    Question Slip Cost (₹)
                  </label>
                  <input
                    id="qCost"
                    type="number"
                    min={1}
                    max={20}
                    value={qCost}
                    onChange={(e) => setQCost(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span> 2. Annual Exam Frequency
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pracSubj" className="block text-xs font-semibold text-navy-600 mb-1">
                  Practical Subjects/Yr
                </label>
                <input
                  id="pracSubj"
                  type="number"
                  min={1}
                  max={20}
                  value={pracSubj}
                  onChange={(e) => setPracSubj(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="pracExams" className="block text-xs font-semibold text-navy-600 mb-1">
                  Practical Exams/Subject
                </label>
                <input
                  id="pracExams"
                  type="number"
                  min={1}
                  max={10}
                  value={pracExams}
                  onChange={(e) => setPracExams(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intSubj" className="block text-xs font-semibold text-navy-600 mb-1">
                  Internal Subjects/Yr
                </label>
                <input
                  id="intSubj"
                  type="number"
                  min={1}
                  max={20}
                  value={intSubj}
                  onChange={(e) => setIntSubj(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="intExams" className="block text-xs font-semibold text-navy-600 mb-1">
                  Internal Exams/Subject
                </label>
                <input
                  id="intExams"
                  type="number"
                  min={1}
                  max={10}
                  value={intExams}
                  onChange={(e) => setIntExams(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span> 3. Teacher Monthly Salary Range (₹)
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="teaMin" className="block text-xs font-semibold text-navy-600 mb-1">
                  Min Salary (₹)
                </label>
                <input
                  id="teaMin"
                  type="number"
                  step={5000}
                  value={teaMin}
                  onChange={(e) => setTeaMin(Math.max(10000, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="teaMax" className="block text-xs font-semibold text-navy-600 mb-1">
                  Max Salary (₹)
                </label>
                <input
                  id="teaMax"
                  type="number"
                  step={5000}
                  value={teaMax}
                  onChange={(e) => setTeaMax(Math.max(teaMin, Number(e.target.value)))}
                  className="w-full px-3 py-2 text-sm border border-navy-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="lg:col-span-6 p-6 md:p-8 bg-navy-50/50 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                PWS Impact Metrics
              </span>
              <span className="text-xs text-navy-400">Institutional Model v1.0</span>
            </div>

            {/* Big Total Savings Banner */}
            <motion.div
              key={calculations.totalSavings}
              initial={{ scale: 0.98, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="text-xs uppercase font-semibold tracking-wider text-emerald-100 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Estimated Total Annual Savings
                </div>
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {formatCurrency(calculations.totalSavings)}
                </div>
                <p className="text-xs text-emerald-100/90 mt-2">
                  Combined direct paper reduction + faculty time reclamation.
                </p>
              </div>
            </motion.div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              <div className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm">
                <div className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">
                  Annual Paper Eliminated
                </div>
                <div className="text-lg md:text-xl font-bold text-navy-900 mt-1">
                  {formatCurrency(calculations.annualPaperCost)}
                </div>
                <span className="text-[10px] text-teal-600 font-medium">100% Paperless</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm">
                <div className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">
                  Grading Time Reduced
                </div>
                <div className="text-lg md:text-xl font-bold text-navy-900 mt-1">
                  {calculations.timeSavedPercent}%
                </div>
                <span className="text-[10px] text-teal-600 font-medium">Auto MCQ + Side-by-side</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm">
                <div className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">
                  Admin Hours (Before)
                </div>
                <div className="text-lg md:text-xl font-bold text-rose-600 mt-1">
                  {calculations.hrsBefore.toLocaleString('en-IN')} hrs
                </div>
                <span className="text-[10px] text-navy-400">Manual handling</span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-navy-100 shadow-sm">
                <div className="text-[11px] font-bold text-navy-500 uppercase tracking-wider">
                  Admin Hours (With PWS)
                </div>
                <div className="text-lg md:text-xl font-bold text-emerald-600 mt-1">
                  {calculations.hrsAfter.toLocaleString('en-IN')} hrs
                </div>
                <span className="text-[10px] text-emerald-600 font-medium">Automated workflow</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-navy-100 text-xs text-navy-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-navy-800">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                Key Operational Takeaways:
              </div>
              <ul className="list-disc pl-5 space-y-1 text-navy-500">
                <li>Automated rollcall saves up to 20 minutes per lab batch.</li>
                <li>Zero printing delays, zero physical paper loss risk.</li>
                <li>Results export to Excel/PDF in seconds post-examination.</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-navy-200/80 text-[11px] text-navy-400 italic text-center">
            *Estimates calculated using standard Indian collegiate exam structures and average faculty hourly allocations.
          </div>
        </div>
      </div>
    </div>
  );
}
