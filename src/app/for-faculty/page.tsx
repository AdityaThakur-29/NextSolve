import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Users, Clock, CheckCircle2, Shuffle, CheckSquare, Radio, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'PWS for Faculty & HODs — Reclaim Your Teaching Hours',
  description:
    'Discover how PWS saves faculty hours: instant exam setup, randomized digital slips, automatic MCQ evaluation, side-by-side grading, and reusable templates.',
};

export default function ForFacultyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              For Teachers & Examiners
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Reclaim Your Weekends From Manual Grading
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Launch lab exams in minutes, automate MCQ scoring instantly, and evaluate practical code side-by-side with zero paper shuffling.
            </p>
          </div>
        </section>

        {/* Faculty Workflow Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                  <Shuffle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Automated Digital Question Slips</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Upload your question bank once. The software analyzes and randomly distributes unique digital slips to every student upon login — no cutting or shuffling paper slips required.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Instant MCQ Auto-Scoring</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Internal unit tests and MCQ exams are scored automatically the moment a student hits submit. Complete department marksheets are generated with zero calculation errors.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Collaborative Live Monitoring</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Share live ongoing sessions with fellow teachers or HODs acting as remote moderators. Monitor lab workstation heartbeats from anywhere.
                </p>
              </div>

              <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Reusable Exam Templates</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Save your exam parameters, time limits, and question structures as templates to reuse across upcoming semesters or share across your faculty.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 flex justify-center">
              <Link href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Request a Faculty Walkthrough</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
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
