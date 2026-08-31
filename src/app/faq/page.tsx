import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions — NextSolves PWS',
  description:
    'Comprehensive answers to all common questions regarding Practical Workflow System (PWS), exam setup, Safe Exam Browser, automated attendance, and campus deployment.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Help Center & Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Find detailed answers regarding system capabilities, security controls, and deployment processes.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <FAQAccordion />

            <div className="mt-16 p-8 bg-navy-50/80 rounded-3xl border border-navy-100 text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900">Have a Specific Campus Question?</h3>
              <p className="text-xs sm:text-sm text-navy-600 max-w-md mx-auto">
                Our academic solutions team is ready to answer specific inquiries regarding your university syllabus, lab configurations, and rollout schedule.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-xl text-xs transition-colors"
              >
                <span>Contact Academic Solutions</span>
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
