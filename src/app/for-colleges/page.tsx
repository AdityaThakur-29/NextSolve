import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import Link from 'next/link';
import { Building2, TrendingUp, ShieldCheck, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'PWS for College Administrators & Principals — Institutional Efficiency',
  description:
    'Empower college leadership with real-time academic visibility, automated attendance tracking, zero paper printing costs, and centralized examination data.',
};

export default function ForCollegesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              For Principals & Deans
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Institutional Control & Cost Reduction
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Transition your campus into a fully modernized, zero-paper institution with real-time departmental visibility and substantial cost savings.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-navy-50/60 rounded-3xl border border-navy-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Direct Cost Savings</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Eliminate annual expenditures on thousands of printed question papers, physical slip cutting, and paper answer sheets across semesters.
                </p>
              </div>

              <div className="p-6 bg-navy-50/60 rounded-3xl border border-navy-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Centralized Scorecards</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  View and export student scores, department marksheets, and attendance data within seconds after an examination concludes.
                </p>
              </div>

              <div className="p-6 bg-navy-50/60 rounded-3xl border border-navy-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Tamper-Proof Records</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Secure encrypted digital archives eliminate the physical risk of lost, damaged, or misfiled examination papers during audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Calculator */}
        <section className="section-padding bg-navy-50/70">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                Calculate Projected Savings for Your College
              </h2>
            </div>
            <ROICalculator />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
