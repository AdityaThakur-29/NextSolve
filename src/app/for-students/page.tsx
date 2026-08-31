import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { GraduationCap, Code, CheckCircle2, Lock, UserCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'PWS for Students — Direct Code Entry & Fair Assessment',
  description:
    'Experience modern digital practical examinations: direct code entry into locked environments, zero handwriting on paper, and automatic attendance logging.',
};

export default function ForStudentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              For College Students
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              A Modern, Fair Examination Environment
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              No writing complex code on physical paper. Enter solutions directly on your screen and attach execution output screenshots.
            </p>
          </div>
        </section>

        {/* Student Highlights */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl space-y-6">
            <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Direct Code Submission</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  Eliminates the redundant and exhausting practice of writing 100+ lines of syntax by hand in an answer booklet before typing it on a computer. Type code once and execute it directly.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Automated Attendance</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  As soon as you log in with your institutional credentials, your exam attendance is marked present in the college record.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-navy-50/60 rounded-3xl border border-navy-100 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-1">Fair & Protected Atmosphere</h3>
                <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                  The locked examination environment ensures every student is evaluated strictly on merit and subject mastery, completely eliminating unfair advantages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
