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
import DigitalPipelineBeam from '@/components/DigitalPipelineBeam';
import CircleExpandButton from '@/components/CircleExpandButton';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/Animations';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Zap,
  Users,
  Building2,
  GraduationCap,
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
  Sparkles,
  Check,
} from 'lucide-react';

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

const coreFeatures = [
  { icon: Shuffle, title: 'Randomized Question Slips', desc: 'Distributes randomized digital question papers automatically to each student terminal.' },
  { icon: Monitor, title: 'Live Workstation Surveillance', desc: 'Supervises student heartbeats and flags unauthorized tab switches in real time.' },
  { icon: Lock, title: 'Safe Exam Browser Lock', desc: 'Restricts student devices from accessing external tools, ChatGPT, or unauthorized web pages.' },
  { icon: Code, title: 'Student Portal', desc: 'Direct digital programming environment eliminating manual handwriting on paper answer sheets.' },
  { icon: Zap, title: 'Automated MCQ Evaluation', desc: 'Instant auto-scoring and grade calculation executed immediately upon student test submission.' },
  { icon: BarChart3, title: 'Side-by-Side Grading Console', desc: 'Enables teachers to review student source code and execution outputs in one window.' },
];

const stakeholderRoles = [
  {
    icon: Building2,
    role: 'For College Administrators',
    summary: 'Eliminate examination printing expenses with real-time department oversight, automated records, and centralized institutional control.',
    highlights: [
      'Eliminate 100% of exam printing budgets',
      'Instant cross-department batch oversight',
      'One-click certified ledger exports to Excel',
    ],
  },
  {
    icon: Users,
    role: 'For Faculty & Examiners',
    summary: 'Reclaim weekends with automated digital question slips, side-by-side evaluation, and instant marks tallying.',
    highlights: [
      'Zero manual scissor paper cutting',
      'Side-by-side code review & execution check',
      'Automated attendance logged on terminal login',
    ],
  },
  {
    icon: GraduationCap,
    role: 'For Students',
    summary: 'Type, execute, and verify code directly in a modern digital portal instead of handwriting algorithms on physical paper sheets.',
    highlights: [
      'Native programming environment with syntax support',
      'Fair, randomized question distribution',
      'Instant upload and submission confirmation',
    ],
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
  { value: 450, suffix: '+', label: 'Sessions Conducted' },
  { value: 4.5, suffix: '★', label: 'Faculty Feedback Rating' },
  { value: 100, suffix: '%', label: 'Paperless Delivery' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-primary">
      <Navbar />

      <main className="flex-1 relative z-10 bg-white shadow-xl shadow-slate-900/5">
        {/* ============================================================ */}
        {/* SECTION 1 — HERO */}
        {/* ============================================================ */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden hero-radial-pattern hero-concentric-circles border-b border-slate-100">
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              {/* Centered Pill Announcement */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold shadow-2xs max-w-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0"></span>
                <span className="truncate">Live Campus Implementation • Automated Examination OS</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
                Transform paperwork into a{' '}
                <span className="text-primary underline decoration-blue-200 decoration-wavy decoration-from-font">
                  digital workflow.
                </span>
              </h1>

              {/* Subheadline (H2) */}
              <h2 className="text-lg sm:text-2xl text-slate-700 font-semibold max-w-2xl mx-auto leading-snug text-balance">
                From Internal Exams to Practical Exams — We Automate Everything.
              </h2>

              {/* Supporting Tagline */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed text-pretty">
                Replace outdated manual steps with a seamless, end-to-end practical evaluation system powered by NextSolves.
              </p>

              {/* Hero Action Button (Single CTA linking to #contact with Circle Expand Animation) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <CircleExpandButton
                  text="Book an Institutional Demo"
                  href="/#contact"
                  variant="primary"
                />
              </div>

              {/* Minimal Trust Micro-Strip */}
              <div className="pt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
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

            {/* Central Product Showcase */}
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
              <ProductMockup />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2 — STATS STRIP */}
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
              <span className="text-slate-700">Active Institution:</span>
              <span className="px-3 py-0.5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-2xs">
                Thakur Shyamnarayan Degree College, Mumbai
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-medium">Continuous Zero-Paper Operations</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3 — TRADITIONAL FRICTION */}
        {/* ============================================================ */}
        <section className="section-padding bg-white scroll-mt-20" id="problems">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                The Paper Problem
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Why Colleges Struggle with Paper-Based Exams
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Traditional practical exam cycles waste weeks of faculty labor, incur unnecessary printing costs, and risk manual transcription errors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {traditionalSteps.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-0 rounded-2xl sm:rounded-none bg-rose-50/40 sm:bg-transparent border border-rose-100/80 sm:border-0 space-y-2"
                  >
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
        {/* SECTION 4 — PWS DIGITAL PIPELINE */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70 overflow-hidden scroll-mt-20" id="pipeline">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                The PWS Solution
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                The Streamlined Digital Pipeline
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                An automated, synchronized digital journey replacing physical paper shuffling.{' '}
                <span className="hidden sm:inline">Hover over or click any stage</span>
                <span className="sm:hidden">Tap any stage below</span> to inspect operational details.
              </p>
            </div>

            <DigitalPipelineBeam />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5 — CORE FEATURES */}
        {/* ============================================================ */}
        <section className="section-padding bg-white scroll-mt-20" id="features">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Everything Modern Colleges Need to Run Exams
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Engineered for college examination boards, faculty examiners, and computer lab supervisors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {coreFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <Card key={idx} className="bg-white border-slate-200/90 hover:border-primary/40 hover:shadow-sm transition-all">
                    <CardHeader className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
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
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6 — STAKEHOLDER ROLES (Consolidated Summary Cards) */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70 scroll-mt-20" id="roles">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Tailored Impact
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Experience by Campus Role
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Delivering concrete operational relief without complicated workflows or software bloat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stakeholderRoles.map((role, idx) => {
                const IconComponent = role.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{role.role}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{role.summary}</p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Benefits</div>
                      {role.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 7 — SECURITY ARCHITECTURE */}
        {/* ============================================================ */}
        <section className="section-padding bg-white scroll-mt-20" id="security">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Security by Design
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Enterprise Multi-Tenant Exam Security
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Cryptographic role enforcement, Safe Exam Browser kiosk mode, and immutable server logs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {securityItems.map((sec, idx) => {
                const IconComponent = sec.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-0 rounded-2xl sm:rounded-none bg-slate-50/50 sm:bg-transparent border border-slate-200/90 sm:border-0 shadow-2xs sm:shadow-none space-y-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{sec.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 8 — OPERATIONAL COMPARISON TABLE */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70 scroll-mt-20" id="comparison">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Side-by-Side Analysis
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Traditional Manual Setup vs. NextSolves PWS
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                A direct comparison of administrative effort, exam integrity, and institutional cost.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 9 — IMPLEMENTATION SHOWCASE */}
        {/* ============================================================ */}
        <section className="section-padding bg-white scroll-mt-20" id="implementation">
          <div className="container-custom max-w-5xl mb-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-balance">
                Trusted & Implemented by Thakur Shyamnarayan Degree College
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Over 2,500+ students examined with 100% paperless delivery in active computer labs.
              </p>
            </div>
          </div>

          <div className="w-full">
            <DeploymentGallery />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 10 — FACULTY & LEADERSHIP ENDORSEMENTS */}
        {/* ============================================================ */}
        <TestimonialsCarousel />

        {/* ============================================================ */}
        {/* SECTION 11 — ROI CALCULATOR */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50/60 border-y border-slate-200/70 scroll-mt-20" id="calculator">
          <div className="container-custom max-w-5xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Institutional Calculator
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Estimate Your Campus Savings
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Adjust student counts and exam frequency to estimate direct paper and faculty grading time savings.
              </p>
            </div>

            <ROICalculator />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 12 — FAQ ACCORDION */}
        {/* ============================================================ */}
        <section className="section-padding bg-white scroll-mt-20" id="faq">
          <div className="container-custom max-w-4xl">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
                Clear answers regarding PWS implementation, Safe Exam Browser security, and institutional onboarding.
              </p>
            </div>

            <FAQAccordion limit={10} />
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 13 — FINAL CLOSING CTA + CONTACT FORM */}
        {/* ============================================================ */}
        <section className="section-padding bg-slate-50 border-t border-slate-200/80 scroll-mt-20" id="contact">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Campus Onboarding
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3 text-balance">
                Ready to Modernize Your Examination Workflow?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-[65ch] mx-auto text-pretty">
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
