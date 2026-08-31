import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { pwsWorkflow } from '@/data/content';
import {
  Settings,
  Upload,
  Shuffle,
  LogIn,
  Monitor,
  CheckCircle,
  Download,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Settings,
  Upload,
  Shuffle,
  LogIn,
  Monitor,
  CheckCircle,
  Download,
};

export const metadata = {
  title: 'How PWS Works — Step-by-Step Digital Examination Workflow',
  description:
    'Discover how PWS automates college examinations from question bank upload and random digital slip distribution to live monitoring and instant result generation.',
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Exam Lifecycle
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              How PWS Works
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              A friction-free, step-by-step examination pipeline engineered for college administrators and faculty.
            </p>
          </div>
        </section>

        {/* Workflow Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:w-0.5 before:bg-navy-200">
              {pwsWorkflow.map((step, idx) => {
                const IconComponent = iconMap[step.icon] || Settings;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 bg-navy-50/70 p-6 rounded-2xl border border-navy-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-xs font-bold text-teal-600 font-mono">PHASE 0{idx + 1}</div>
                      <h3 className="text-lg font-bold text-navy-900 mt-1">{step.step}</h3>
                      <p className="text-xs sm:text-sm text-navy-600 mt-2 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Icon Center Marker */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-navy-900 border-4 border-white shadow-lg text-teal-400 flex items-center justify-center z-10">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="section-padding bg-navy-50/60">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center mb-10">
              Key Operational Guarantees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-navy-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Zero Physical Printing</h4>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Eliminates the cost and delays of printing hundreds of question slips and answer booklets.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-navy-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Automated Attendance</h4>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Students are marked present immediately upon login with verified workstation tracking.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-navy-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 mb-2">Instant Result Publishing</h4>
                <p className="text-xs text-navy-600 leading-relaxed">
                  Export complete marks sheets and attendance records in Excel/PDF within seconds.
                </p>
              </div>
            </div>

            <div className="text-center mt-12 flex justify-center">
              <Link href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Request a Walkthrough</span>
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
