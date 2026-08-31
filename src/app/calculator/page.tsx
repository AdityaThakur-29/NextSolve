import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ROICalculator from '@/components/ROICalculator';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Institutional ROI & Cost Savings Calculator — NextSolves PWS',
  description:
    'Calculate potential annual savings on paper costs, question slip printing, and faculty grading hours by adopting NextSolves PWS on your campus.',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Institutional Analysis
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              ROI & Cost Savings Estimator
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Model your campus examination parameters to project direct financial and faculty hour savings.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <ROICalculator />

            {/* Explanation */}
            <div className="mt-14 p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100 space-y-4 text-xs sm:text-sm text-navy-700">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                How the PWS Savings Model is Calculated
              </h3>
              <p className="leading-relaxed">
                The calculator evaluates two primary cost categories:
              </p>
              <ol className="list-decimal pl-5 space-y-2 leading-relaxed text-navy-600">
                <li>
                  <strong>Direct Materials:</strong> Total practical and internal exam instances multiplied by the unit cost of paper answer booklets and printed question slips. PWS completely eliminates this line item.
                </li>
                <li>
                  <strong>Faculty Labor Value:</strong> Measured against standard exam preparation, manual physical slip distribution, manual attendance rollcall, manual MCQ grading, and score sheet transcription. PWS automates up to 90% of these administrative tasks.
                </li>
              </ol>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl shadow-lg transition-colors text-sm"
              >
                <span>Request Custom Institutional Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
