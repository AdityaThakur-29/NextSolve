import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductMockup from '@/components/ProductMockup';
import ROICalculator from '@/components/ROICalculator';
import DeploymentGallery from '@/components/DeploymentGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import ComparisonTable from '@/components/ComparisonTable';
import ContactForm from '@/components/ContactForm';
import { AnimatedCounter, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { features } from '@/data/features';
import { stats, pillars, pwsWorkflow, traditionalWorkflow, securityFeatures } from '@/data/content';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Zap,
  FileX2,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight,
  FileText,
  Printer,
  Scissors,
  PenTool,
  ClipboardList,
  Search,
  Keyboard,
  BarChart3,
  Monitor,
  CheckSquare,
  Code,
  UserCheck,
  Eye,
  Radio,
  LayoutTemplate,
  Settings,
  Database,
  Upload,
  LogIn,
  CheckCircle,
  Download,
  KeyRound,
  HardDrive,
  Shield,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  FileText,
  Printer,
  Scissors,
  PenTool,
  ClipboardList,
  Search,
  Keyboard,
  BarChart3,
  Monitor,
  CheckSquare,
  Code,
  UserCheck,
  Eye,
  Radio,
  LayoutTemplate,
  Settings,
  Database,
  Upload,
  LogIn,
  CheckCircle,
  Download,
  KeyRound,
  HardDrive,
  Shield,
  FileX2,
  ShieldCheck,
  Lock,
  Zap,
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 2 — HERO */}
        {/* ============================================================ */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 gradient-hero text-white overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Practical Workflow System (PWS) by NextSolves</span>
              </div>

              {/* Official Hero Headlines */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight lg:leading-tight">
                The Operating System for the{' '}
                <span className="gradient-text">Future Campus.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-navy-200 font-medium max-w-2xl mx-auto leading-relaxed">
                From Question Papers to Practical Exams — We Automate Everything.
              </p>

              <p className="text-sm sm:text-base text-navy-300 max-w-2xl mx-auto leading-relaxed">
                Transform chaotic paper-based practicals and internal examinations into a 100% paperless, centralized, automated, and secure digital workflow.
              </p>

              {/* Hero CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-navy-950 font-bold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <span>Request an Institutional Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="w-full sm:w-auto px-8 py-4 bg-navy-800/80 hover:bg-navy-700 text-white font-semibold rounded-xl border border-navy-700 transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
                >
                  <span>See How It Works</span>
                </Link>
              </div>

              {/* Trust Tagline */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs text-navy-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Live Deployment at Thakur College
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> Safe Exam Browser Enforced
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" /> 100% Zero Paper Assessment
                </span>
              </div>
            </div>

            {/* Hero Interactive Showcase */}
            <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3 — TRUST / PROOF STRIP */}
        {/* ============================================================ */}
        <section className="bg-white border-y border-navy-100 py-10 shadow-sm">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-navy-100">
              {stats.map((st) => (
                <div key={st.id} className="text-center pt-4 sm:pt-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                    <AnimatedCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-navy-600 mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-navy-100 text-center flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-navy-500">
              <span className="text-navy-700">Verified Active Institution:</span>
              <span className="px-3 py-1 bg-navy-100 text-navy-900 rounded-full font-bold">
                Thakur Shyamnarayan Degree College, Mumbai
              </span>
              <span className="text-navy-400">•</span>
              <span className="text-teal-700 font-medium">Over 1 Year of Successful Deployment</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4 — THE PROBLEM (Traditional Workflow) */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-50/60">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                The Traditional Burden
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Why Colleges Struggle with Paper-Based Exams
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3 leading-relaxed">
                Traditional practical and internal exams are fragmented, expensive, and consume weeks of manual faculty labor with constant risk of misplaced records.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {traditionalWorkflow.map((item, index) => {
                const IconComponent = iconMap[item.icon] || FileText;
                return (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-navy-400 font-mono">STEP 0{index + 1}</div>
                    <h3 className="text-sm font-bold text-navy-900 mt-1">{item.step}</h3>
                    <p className="text-xs text-rose-600 font-medium mt-2 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0"></span>
                      {item.pain}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5 — THE TRANSFORMATION (PWS Digital Workflow) */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                The PWS Solution
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                The Streamlined Digital Transformation
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3 leading-relaxed">
                PWS replaces physical paper shuffling with an automated, synchronized digital pipeline from creation to mark sheet delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-3 max-w-6xl mx-auto">
              {pwsWorkflow.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Zap;
                return (
                  <div
                    key={idx}
                    className="bg-navy-50/80 hover:bg-teal-50/60 p-4 rounded-2xl border border-navy-100 hover:border-teal-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs font-bold mb-3 shadow-sm">
                        0{idx + 1}
                      </div>
                      <h4 className="text-xs font-bold text-navy-900 leading-snug">{item.step}</h4>
                    </div>
                    <p className="text-[11px] text-navy-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7 — FOUR PILLARS */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
                Core Architectural Pillars
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                Built for Critical Campus Operations
              </h2>
              <p className="text-sm sm:text-base text-navy-300 mt-3">
                Four foundational commitments guiding every examination executed on PWS.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pillars.map((pillar) => {
                const IconComponent = iconMap[pillar.icon] || ShieldCheck;
                return (
                  <div
                    key={pillar.id}
                    className="bg-navy-800/80 p-6 rounded-2xl border border-navy-700/80 hover:border-teal-500/50 hover:bg-navy-800 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4 border border-teal-400/20">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs text-navy-300 leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8 — CORE FEATURES */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Confirmed Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Everything Modern Colleges Need to Run Exams
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Comprehensive feature set strictly based on confirmed PWS software functionality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.slice(0, 12).map((feat) => {
                const IconComponent = iconMap[feat.icon] || CheckCircle2;
                return (
                  <div
                    key={feat.id}
                    className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 hover:border-teal-300 hover:bg-white transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-navy-900 mb-2">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-6 py-3 rounded-xl transition-colors"
              >
                <span>View Full Feature Architecture & Technical Modules</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9 — ROLE-BASED EXPERIENCE */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-50/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Tailored for Higher Education
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Experience by Campus Role
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Delivering concrete operational benefits for every stakeholder in the college ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Admin Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">College Administrators</h3>
                <p className="text-xs text-navy-500 mb-4">Complete institutional oversight and cost reduction</p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Real-time dashboard for all faculty exam batches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Instant score availability across all departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Elimination of question paper and answer sheet printing costs</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-navy-100">
                  <Link href="/for-colleges" className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1">
                    Administrator Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Faculty Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-teal-200 ring-1 ring-teal-500/20 shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Faculty & HODs</h3>
                <p className="text-xs text-navy-500 mb-4">Focus on teaching, eliminate grading exhaustion</p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Automated random digital slip assignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Side-by-side evaluation & instant MCQ auto-scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Share exam templates & collaborate on live monitoring</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-navy-100">
                  <Link href="/for-faculty" className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1">
                    Faculty Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Student Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-navy-100 shadow-md hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">Students</h3>
                <p className="text-xs text-navy-500 mb-4">Direct code input in a fair, peaceful environment</p>
                <ul className="space-y-2.5 text-xs text-navy-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>No writing code by hand on physical answer sheets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Direct digital code entry & output upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Automatic attendance upon secure login</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-navy-100">
                  <Link href="/for-students" className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1">
                    Student Experience <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 10 — SECURITY */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
                Institutional Security & Integrity
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                Enterprise Multi-Tenant Security by Design
              </h2>
              <p className="text-sm sm:text-base text-navy-300 mt-3">
                Guarding exam integrity and student data through verified cryptographic controls, RBAC, and Safe Exam Browser integration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {securityFeatures.map((sec) => {
                const IconComponent = iconMap[sec.icon] || ShieldCheck;
                return (
                  <div
                    key={sec.id}
                    className="p-6 bg-navy-800/90 rounded-2xl border border-navy-700 hover:border-teal-400/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4 border border-teal-400/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{sec.title}</h3>
                    <p className="text-xs text-navy-300 leading-relaxed">{sec.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/security"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal-400 hover:underline"
              >
                <span>Read Full Technical Security Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 12 — BEFORE VS AFTER */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Direct Operational Comparison
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Traditional Manual Process vs. NextSolves PWS
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                A side-by-side evaluation of administrative effort, exam integrity, and cost.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 13 — DEPLOYMENT / SUCCESS STORY */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-50/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Verified Field Deployment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Live Deployment at Thakur Shyamnarayan Degree College
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Over 2,500+ students served with 100% paperless exam delivery in active Mumbai computer labs.
              </p>
            </div>

            <DeploymentGallery />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 14 — TESTIMONIALS */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Verified Faculty Feedback
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                What Principals, HODs, and Faculty Say
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Direct quotes from academic leadership actively conducting examinations on PWS.
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 15 — ROI / SAVINGS CALCULATOR */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-50/70" id="calculator">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Institutional Cost Analysis
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Estimate Your Campus Savings
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Adjust student counts and exam frequency to estimate annual direct paper and faculty grading time savings.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 16 — VISION + MISSION */}
        {/* ============================================================ */}
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-navy-800/80 rounded-2xl border border-navy-700">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Our Vision</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  Secure, Fair Digital Assessment Environment
                </h3>
                <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                  To provide educational institutions with a dependable, completely paperless assessment infrastructure that guarantees examination integrity and simplifies academic management.
                </p>
              </div>

              <div className="p-8 bg-navy-800/80 rounded-2xl border border-navy-700">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Our Mission</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  End-to-End Examination Automation
                </h3>
                <p className="text-xs sm:text-sm text-navy-300 leading-relaxed">
                  To eliminate repetitive manual grading, physical question papers, and administrative friction through digital evaluation, direct code input, and real-time synchronization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 17 — FAQ */}
        {/* ============================================================ */}
        <section className="section-padding bg-white" id="faq">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Everything You Need to Know
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                Clear answers regarding PWS deployment, security, and examination workflows.
              </p>
            </div>

            <FAQAccordion limit={8} />

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-xs font-bold text-teal-700 hover:underline inline-flex items-center gap-1"
              >
                View All 15 Frequently Asked Questions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 18 — FINAL CTA + CONTACT */}
        {/* ============================================================ */}
        <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white" id="contact">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
                  Get Started
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
                  Ready to Transform Your Examination Process?
                </h2>
                <p className="text-sm sm:text-base text-navy-300 mt-3 max-w-xl mx-auto">
                  Schedule a personalized demonstration for your college administration, principal, and faculty heads.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
