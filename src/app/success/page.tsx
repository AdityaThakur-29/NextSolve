import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DeploymentGallery from '@/components/DeploymentGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Building2, Award, CheckCircle2, Star, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Deployment Success Story — Thakur Shyamnarayan Degree College',
  description:
    'Read how Thakur Shyamnarayan Degree College deployed NextSolves PWS across 2,500+ students, transitioning to a zero-paper practical examination workflow.',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-700/60">
              Verified Institutional Case Study
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Deployment Success Story
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Thakur Shyamnarayan Degree College, Mumbai — 1 year of continuous zero-paper examination operations.
            </p>
          </div>
        </section>

        {/* Case Study Overview */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="bg-navy-50/70 rounded-3xl p-6 sm:p-10 border border-navy-100 mb-14 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-navy-200/80">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                    Thakur Shyamnarayan Degree College
                  </h2>
                  <p className="text-xs sm:text-sm text-navy-500">Kandivali East, Mumbai, Maharashtra</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                    Active Deployment (1+ Year)
                  </div>
                  <div className="px-3.5 py-1.5 bg-teal-100 text-teal-800 text-xs font-bold rounded-full">
                    2,500+ Students
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 text-sm text-rose-600">The Challenge:</h4>
                  <p className="text-navy-600 leading-relaxed">
                    Handling massive paper stacks, physical question slip distribution, handwritten code on paper answer booklets, manual rollcall attendance, and weeks of tedious manual grade tabulation.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 text-sm text-teal-600">The PWS Solution:</h4>
                  <p className="text-navy-600 leading-relaxed">
                    Implementation of NextSolves PWS across computer lab batches, enabling automated randomized digital slips, locked Safe Exam Browser testing, and real-time faculty surveillance.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 mb-1 text-sm text-emerald-600">The Outcome:</h4>
                  <p className="text-navy-600 leading-relaxed">
                    100% paperless examination workflow, zero data entry errors, automatic attendance, instant result publishing, and elimination of paper printing costs across semesters.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mb-14">
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 text-center mb-2">
                Live Computer Lab Deployment Photos
              </h3>
              <p className="text-xs sm:text-sm text-navy-500 text-center mb-8">
                GPS-stamped photographic records from computer lab examination sessions.
              </p>
              <DeploymentGallery />
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-900 text-center mb-2">
                Academic Leadership & Faculty Feedback
              </h3>
              <p className="text-xs sm:text-sm text-navy-500 text-center mb-8">
                Testimonials from Principal, HODs, and examiners at Thakur Shyamnarayan Degree College.
              </p>
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy-900 text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-extrabold">Modernize Your College Examinations</h2>
            <p className="text-sm sm:text-base text-navy-300 mt-3 mb-8">
              Join leading institutions in transforming practical assessments into a frictionless digital workflow.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Request an Institutional Demo</span>
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
