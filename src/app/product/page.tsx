import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductMockup from '@/components/ProductMockup';
import ComparisonTable from '@/components/ComparisonTable';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  Layers,
  Code,
  FileSpreadsheet,
  Users,
  Monitor,
  CheckSquare,
} from 'lucide-react';

export const metadata = {
  title: 'PWS Product Deep-Dive — Practical Workflow System',
  description:
    'Explore the end-to-end examination platform: digital practical exams, automatic MCQ evaluation, live workstation monitoring, Safe Exam Browser enforcement, and instant grade generation.',
};

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Product Hero */}
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Product Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Practical Workflow System (PWS)
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              An end-to-end software platform designed to fully digitize the collegiate examination lifecycle — from question banks to instant result publication.
            </p>
          </div>
        </section>

        {/* Interactive Deep-Dive Shell */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Explore the Complete Interface Ecosystem
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-2">
                <span className="hidden sm:inline">Click or navigate through the live views below</span>
                <span className="sm:hidden">Tap tabs below to explore live views</span> to understand how administrators, faculty, and students interact during an examination cycle.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* Major Modules Breakdown */}
        <section className="section-padding bg-navy-50/70">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                System Modules
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Core Examination Engines
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Engineered specifically around collegiate exam protocols and university grading frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Module 1: Practical Exams */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">1. Digital Practical Exam Engine</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-4">
                  Replaces manual question paper printing and handwritten code on paper answer sheets.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Upload question banks in CSV, Excel, or text format.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Automated random digital slip assignment to every student.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Slip changing & custom question assignment when required.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Students type code directly into the system and attach outputs.</span>
                  </li>
                </ul>
              </div>

              {/* Module 2: Internal MCQ Exams */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">2. Automated Internal MCQ Engine</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-4">
                  Fully automates internal assessments, unit tests, and semester MCQ evaluations.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Upload MCQ question bank and student roster.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Auto-balances questions to fulfill required total marks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Instant automatic scoring upon student exam submission.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Zero manual paper checking or data entry required.</span>
                  </li>
                </ul>
              </div>

              {/* Module 3: Live Surveillance */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <Monitor className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">3. Live Lab Monitoring & Control</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-4">
                  Supervise multiple lab batches concurrently without leaving your desk.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Automatic attendance logging as soon as students log in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Live session sharing with other teachers acting as remote moderators.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Student buffer tool to add missing students during an ongoing exam.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Instant exam resumption if an exam is accidentally stopped.</span>
                  </li>
                </ul>
              </div>

              {/* Module 4: Central Administration */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-navy-100 shadow-md">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">4. Central Results & Mark Sheets</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-4">
                  Instant institutional reporting with full audit trails.
                </p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Admins view student scores within seconds of exam completion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Download attendance sheets and final mark lists in Excel/PDF.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Permanent encrypted digital archives — zero physical loss risk.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy-900 text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to See PWS Live?</h2>
            <p className="text-sm sm:text-base text-navy-300 mt-3 mb-8">
              We provide tailored demonstrations for college leadership, department heads, and IT coordinators.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Schedule a Demo for Your College</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
