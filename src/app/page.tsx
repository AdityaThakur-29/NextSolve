import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductMockup from '@/components/ProductMockup';
import ROICalculator from '@/components/ROICalculator';
import DeploymentGallery from '@/components/DeploymentGallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import ComparisonTable from '@/components/ComparisonTable';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/Animations';
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
  Code,
  KeyRound,
  Database,
  HardDrive,
  Shield,
  Eye,
  Star,
  Shuffle,
  Clock,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

// Trimmed, high-impact copy strictly adhering to:
// 1 icon, 3-6 word heading, max 12-word supporting line, zero bullet points

const traditionalSteps = [
  { step: 'Question Paper Creation', icon: FileText, pain: 'Hours wasted on repetitive manual formatting.' },
  { step: 'Bulk Physical Printing', icon: Printer, pain: 'High paper costs and logistical delays.' },
  { step: 'Manual Slip Cutting', icon: Scissors, pain: 'Tedious scissor work and paper sorting.' },
  { step: 'Handwritten Code Practicals', icon: PenTool, pain: 'Students forced to write code on paper.' },
  { step: 'Manual Rollcall Sheets', icon: ClipboardList, pain: 'Attendance eats 20 minutes per batch.' },
  { step: 'Weekend Paper Checking', icon: Search, pain: 'Faculty exhausted by stacks of physical answer sheets.' },
  { step: 'Manual Marks Ledger Entry', icon: Keyboard, pain: 'High risk of human data entry errors.' },
  { step: 'Delayed Result Publication', icon: BarChart3, pain: 'Weeks required to publish consolidated department marks.' },
];

const pipelineSteps = [
  { num: '01', title: 'Exam Setup', desc: 'Create batches and upload question banks in minutes.' },
  { num: '02', title: 'Question Ingestion', desc: 'System automatically parses and balances question criteria.' },
  { num: '03', title: 'Random Digital Slips', desc: 'Unique question papers assigned instantly to student terminals.' },
  { num: '04', title: 'Terminal Login', desc: 'Students enter locked browser with automatic attendance logging.' },
  { num: '05', title: 'Live Lab Proctoring', desc: 'Supervise all terminal heartbeats and activities in real time.' },
  { num: '06', title: 'Instant Evaluation', desc: 'Grade code side-by-side with automated MCQ scoring.' },
  { num: '07', title: 'Instant Ledgers', desc: 'Export certified mark sheets and attendance instantly to Excel.' },
];

const systemPillars = [
  { icon: FileX2, title: '100% Zero-Paper', desc: 'Completely replaces question slips and answer booklets with digital execution.' },
  { icon: ShieldCheck, title: 'Audited Reliability', desc: 'Engineered for synchronized, zero-downtime campus examination sessions.' },
  { icon: Lock, title: 'Tamper-Proof Security', desc: 'Safe Exam Browser locks terminals and eliminates external malpractice.' },
  { icon: Zap, title: 'Automated Operations', desc: 'Reclaims hundreds of faculty hours through instant grading and exports.' },
];

// The ONLY bordered-card-grid on the page
const coreFeatures = [
  { icon: Shuffle, title: 'Randomized Question Slips', desc: 'Distributes randomized digital question papers automatically to each student terminal.' },
  { icon: Monitor, title: 'Live Workstation Surveillance', desc: 'Supervises student heartbeats and flags unauthorized tab switches in real time.' },
  { icon: Lock, title: 'Safe Exam Browser Lock', desc: 'Restricts student devices from accessing external tools, ChatGPT, or unauthorized web pages.' },
  { icon: Code, title: 'Student Practical Code IDE', desc: 'Direct digital programming environment eliminating manual handwriting on paper answer sheets.' },
  { icon: Zap, title: 'Automated MCQ Evaluation', desc: 'Instant auto-scoring and grade calculation executed immediately upon student test submission.' },
  { icon: BarChart3, title: 'Side-by-Side Grading Console', desc: 'Enables teachers to review student source code and execution outputs in one window.' },
];

const stakeholderRoles = [
  {
    icon: Building2,
    role: 'For College Administrators',
    summary: 'Eliminate examination printing expenses with real-time department oversight and permanent digital records.',
    href: '/for-colleges',
  },
  {
    icon: Users,
    role: 'For Faculty & Examiners',
    summary: 'Reclaim weekends with automated digital question slips, side-by-side evaluation, and instant marks tallying.',
    href: '/for-faculty',
  },
  {
    icon: GraduationCap,
    role: 'For Students',
    summary: 'Type and execute code directly in an IDE instead of handwriting algorithms on paper.',
    href: '/for-students',
  },
];

const securityItems = [
  { icon: KeyRound, title: 'Role-Based Access Control', desc: 'Strict multi-tenant cryptographic isolation ensuring colleges only access their own records.' },
  { icon: Database, title: 'Scoped Document Rules', desc: 'State-machine validation prevents unauthorized data modifications and record tampering.' },
  { icon: HardDrive, title: 'Encrypted Cloud Storage', desc: 'Strict MIME-type limits and path traversal guards protecting student submissions.' },
  { icon: Shield, title: 'Monotonic Heartbeat Tracking', desc: 'Server-enforced timing prevents students from bypassing malpractice and tab-switch monitors.' },
  { icon: Eye, title: 'Immutable Server Auditing', desc: 'Permanent tamper-proof audit trails for every question distribution, mark entry, and login.' },
  { icon: Lock, title: 'Kiosk Safe Exam Browser', desc: 'Native workstation lock prevents external application launches and clipboard copying.' },
];

const campusStats = [
  { value: 2500, suffix: '+', label: 'Students Examined' },
  { value: 4.5, suffix: '★', label: 'Faculty Feedback Rating' },
  { value: 100, suffix: '%', label: 'Paperless Delivery' },
  { value: 1, suffix: '+', label: 'Year Active Deployment' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1 — HERO (Open, spacious, unboxed) */}
        {/* ============================================================ */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden hero-radial-pattern hero-concentric-circles border-b border-slate-100">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-5">
              {/* Centered Pill Announcement */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>Verified Campus Deployment • Thakur College, Mumbai</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                The Operating System for the{' '}
                <span className="text-primary underline decoration-blue-200 decoration-wavy decoration-from-font">
                  Future Campus.
                </span>
              </h1>

              {/* Subheadline (Clean, 1-line) */}
              <p className="text-base sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
                From Question Papers to Practical Exams — We Automate Everything.
              </p>

              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                Transform paper-based examination friction into a 100% paperless, automated digital workflow.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto rounded-full shadow-sm hover:shadow-md px-7 text-sm font-semibold"
                  >
                    <span>Request an Institutional Demo</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/product" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto rounded-full px-7 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Explore Platform
                  </Button>
                </Link>
              </div>

              {/* Minimal Trust Micro-Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-800">4.5 / 5 Rating</span>
                </div>
                <span className="text-slate-300">•</span>
                <span>2,500+ Students Examined</span>
                <span className="text-slate-300">•</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Safe Exam Browser Enforced
                </span>
              </div>
            </div>

            {/* Central Product Showcase (No cluttering flanking cards) */}
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2 — STATS STRIP (Divider-based list, zero card boxes) */}
        {/* ============================================================ */}
        <section className="bg-slate-50/70 border-b border-slate-200/80 py-10">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {campusStats.map((st, idx) => (
                <div key={idx} className="text-center pt-3 sm:pt-0">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    <AnimatedCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-slate-200/80 text-center flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-slate-500">
              <span className="text-slate-700">Verified Active Institution:</span>
              <span className="px-3 py-0.5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-2xs">
                Thakur Shyamnarayan Degree College, Mumbai
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-medium">1+ Year Continuous Zero-Paper Operations</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3 — TRADITIONAL FRICTION (Open Grid — No cards) */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                The Paper Problem
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Why Colleges Struggle with Paper-Based Exams
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Traditional exam cycles waste weeks of faculty labor and thousands of rupees in printing.
              </p>
            </div>

            {/* Light, open grid: icon + 3-word heading + 1 supporting line (NO BOXES) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {traditionalSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 font-mono">0{index + 1}</div>
                    <h3 className="text-sm font-bold text-slate-900">{item.step}</h3>
                    <p className="text-xs text-rose-600 font-medium leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4 — PWS DIGITAL PIPELINE (Connected Timeline — No cards) */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                The PWS Solution
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                The Streamlined Digital Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                An automated, synchronized digital journey replacing physical paper shuffling.
              </p>
            </div>

            {/* Sleek Connected Horizontal Pipeline without 7 boxed cards */}
            <div className="relative">
              {/* Subtle connecting track on desktop */}
              <div className="hidden lg:block absolute top-4 left-6 right-6 h-0.5 bg-slate-200 z-0"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
                {pipelineSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-start lg:items-center text-left lg:text-center space-y-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm ring-4 ring-slate-50 shrink-0">
                      {step.num}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 mt-1">{step.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-[130px]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5 — SYSTEM PILLARS (Open Feature Row — No cards) */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Foundations
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Built for Critical Campus Operations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Four foundational commitments guiding every examination executed on PWS.
              </p>
            </div>

            {/* Open 4-Column Row without card boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {systemPillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={idx} className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6 — CORE FEATURES (THE ONLY BORDERED CARD GRID ON PAGE) */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Everything Modern Colleges Need to Run Exams
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Engineered for college examination boards, faculty examiners, and computer lab supervisors.
              </p>
            </div>

            {/* Standardized single card grid: exactly 1 icon, 3-5 word heading, max 12 word line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <Card key={idx} className="bg-white border-slate-200/90 hover:border-primary/40 hover:shadow-sm transition-all">
                    <CardHeader className="p-5 space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <CardTitle className="text-sm font-bold text-slate-900">
                        {feat.title}
                      </CardTitle>
                      <CardDescription className="text-xs text-slate-600 leading-relaxed">
                        {feat.desc}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
              >
                <span>View Complete Architecture & Modules</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7 — STAKEHOLDER ROLES (Open 3-Column — Zero bullet lists) */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Tailored Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Experience by Campus Role
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Delivering concrete operational relief without complicated workflows.
              </p>
            </div>

            {/* Open 3-Column role showcase with single value statement and link (NO BULLET LISTS) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {stakeholderRoles.map((role, idx) => {
                const IconComponent = role.icon;
                return (
                  <div key={idx} className="space-y-3 pt-6 md:pt-0 md:px-6 first:pl-0 last:pr-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{role.role}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{role.summary}</p>
                    <div className="pt-2">
                      <Link href={role.href} className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8 — SECURITY ARCHITECTURE (Open 3x2 Grid — No boxes) */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Security by Design
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Enterprise Multi-Tenant Exam Security
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Cryptographic role enforcement, Safe Exam Browser kiosk mode, and immutable logs.
              </p>
            </div>

            {/* Open borderless 3x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityItems.map((sec, idx) => {
                const IconComponent = sec.icon;
                return (
                  <div key={idx} className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{sec.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/security"
                className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
              >
                <span>Read Full Technical Security Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9 — OPERATIONAL COMPARISON TABLE */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Side-by-Side Analysis
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Traditional Manual Setup vs. NextSolves PWS
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                A direct comparison of administrative effort, exam integrity, and cost.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 10 — DEPLOYMENT GALLERY (Field Proof Media) */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Verified Field Deployment
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Live Deployment at Thakur Shyamnarayan Degree College
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Over 2,500+ students examined with 100% paperless delivery in active computer labs.
              </p>
            </div>

            <DeploymentGallery />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 11 — TESTIMONIALS CAROUSEL */}
        {/* ============================================================ */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Faculty Endorsements
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                What Principals, HODs, and Teachers Say
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Direct quotes from academic leadership actively conducting examinations on PWS.
              </p>
            </div>

            <TestimonialsCarousel />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 12 — ROI CALCULATOR */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70" id="calculator">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Institutional Calculator
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Estimate Your Campus Savings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Adjust student counts and exam frequency to estimate direct paper and faculty grading time savings.
              </p>
            </div>

            <ROICalculator />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 13 — FAQ ACCORDION */}
        {/* ============================================================ */}
        <section className="section-padding bg-white" id="faq">
          <div className="container-custom max-w-3xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Answers regarding PWS deployment, safe exam browser, and institutional onboarding.
              </p>
            </div>

            <FAQAccordion limit={6} />

            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
              >
                View All Frequently Asked Questions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 14 — FINAL CLOSING CTA + CONTACT */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50 border-t border-slate-200/80" id="contact">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Campus Onboarding
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
                Ready to Modernize Your Examination Workflow?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Schedule an institutional walkthrough for your principal, academic council, and IT lab in-charges.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
