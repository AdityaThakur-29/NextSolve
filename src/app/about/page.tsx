import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Compass, Sparkles, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import NextLink from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About NextSolves — Modernizing Campus Operations',
  description:
    'Learn about NextSolves, our founders Jagruti Morvekar and Om Murkar, our mission to automate college examinations, and our paperless campus vision.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero */}
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Next-Level Software Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              About NextSolves
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              We build specialized educational technology that modernizes higher education workflows, eliminates manual paperwork, and restores focus to teaching.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 bg-navy-50/60 rounded-3xl border border-navy-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Vision</span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-2 mb-4">
                    Secure, Fair Digital Assessment Environment
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    To establish a dependable, standardized digital infrastructure across college campuses where practical and internal assessments operate seamlessly with 100% data integrity and zero paper dependency.
                  </p>
                </div>
              </div>

              <div className="p-8 bg-navy-50/60 rounded-3xl border border-navy-100 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Mission</span>
                  <h3 className="text-2xl font-bold text-navy-900 mt-2 mb-4">
                    End-to-End Examination Automation
                  </h3>
                  <p className="text-sm text-navy-600 leading-relaxed">
                    To eliminate the repetitive friction of physical question distribution, manual attendance rollcalls, and exhausting paper grading through automated randomized digital slips, real-time monitoring, and instant evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="section-padding bg-navy-50/70">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Meet the Founders
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Innovators dedicated to transforming collegiate examination processes from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Jagruti */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-navy-100 shadow-lg flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-navy-100 shrink-0">
                  <Image
                    src="/assets/team/jagruti-morvekar.jpeg"
                    alt="Jagruti Morvekar — Founder"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Founder</span>
                  <h3 className="text-xl font-bold text-navy-900 mt-1">Jagruti Morvekar</h3>
                  <p className="text-xs text-navy-500 mt-1">NextSolves Co-Founder</p>
                  <p className="text-xs text-navy-600 mt-4 leading-relaxed">
                    Passionate about architecting practical, zero-paper workflow platforms that solve real operational bottlenecks in Indian collegiate systems.
                  </p>
                </div>
              </div>

              {/* Om */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-navy-100 shadow-lg flex flex-col sm:flex-row items-center gap-6">
                <div className="relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden bg-navy-100 shrink-0">
                  <Image
                    src="/assets/team/om-murkar.jpeg"
                    alt="Om Murkar — Founder"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Founder</span>
                  <h3 className="text-xl font-bold text-navy-900 mt-1">Om Murkar</h3>
                  <p className="text-xs text-navy-500 mt-1">NextSolves Co-Founder</p>
                  <p className="text-xs text-navy-600 mt-4 leading-relaxed">
                    Dedicated to developing secure, locked exam environments and streamlined data pipelines that empower teachers and administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Principles */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 text-center mb-10">
              Our Core Product Philosophy
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-navy-700">
              <div className="p-5 bg-navy-50/60 rounded-2xl border border-navy-100 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900">Workflows Over Gimmicks</h4>
                  <p className="text-navy-600 mt-1">
                    We do not build bloated software. PWS focuses squarely on the actual daily challenges of running lab practicals and internal examinations without manual paperwork.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-navy-50/60 rounded-2xl border border-navy-100 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900">Zero-Paper Commitment</h4>
                  <p className="text-navy-600 mt-1">
                    Every feature is designed to eliminate paper entirely — from digital slip generation to online code submission and instant result export.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-navy-50/60 rounded-2xl border border-navy-100 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-navy-900">Institutional Security & Integrity</h4>
                  <p className="text-navy-600 mt-1">
                    Multi-tenant data isolation, Safe Exam Browser enforcement, and server-side heartbeat tracking protect academic integrity at every stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 flex justify-center">
              <NextLink href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Connect With NextSolves</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </NextLink>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
