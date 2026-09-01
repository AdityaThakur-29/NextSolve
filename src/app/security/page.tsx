import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { securityFeatures } from '@/data/content';
import {
  KeyRound,
  Database,
  HardDrive,
  Shield,
  Eye,
  Lock,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  KeyRound,
  Database,
  HardDrive,
  Shield,
  Eye,
  Lock,
};

export const metadata = {
  title: 'PWS Security & Examination Integrity Architecture',
  description:
    'Explore PWS institutional security: Role-Based Access Control (RBAC), Safe Exam Browser lockdown, multi-tenant isolation, server-side audit logs, and anti-cheating mechanisms.',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50/40">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <section className="gradient-hero text-white py-16 sm:py-24">
          <div className="container-custom text-center max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-3 py-1 rounded-full border border-teal-700/50">
              Exam Integrity & Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              Institutional Security Architecture
            </h1>
            <p className="text-base sm:text-lg text-navy-200 mt-4 leading-relaxed">
              Engineered with multi-layered defenses, cryptographic controls, and controlled browser environments to safeguard sensitive academic records and examination fairness.
            </p>
          </div>
        </section>

        {/* Security Pillars Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Verified Technical Safeguards
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 mt-3">
                Six Pillars of PWS Examination Security
              </h2>
              <p className="text-sm sm:text-base text-navy-600 mt-3">
                All mechanisms are strictly enforced server-side without relying on fragile client-side scripts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feat) => {
                const IconComponent = iconMap[feat.icon] || ShieldCheck;
                return (
                  <div
                    key={feat.id}
                    className="p-6 bg-navy-50/50 rounded-2xl border border-navy-100 hover:border-teal-400/60 transition-all shadow-sm flex flex-col justify-between"
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
          </div>
        </section>

        {/* Anti-Cheating In Detail */}
        <section className="section-padding bg-navy-900 text-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-navy-800 px-3 py-1 rounded-full border border-navy-700">
                Anti-Malpractice Controls
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                How PWS Enforces Fair Examination Conditions
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-navy-300">
              <div className="p-5 bg-navy-800/80 rounded-2xl border border-navy-700 flex items-start gap-4">
                <Lock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Safe Exam Browser (SEB) Integration</h4>
                  <p className="mt-1 leading-relaxed">
                    Student devices are locked down into kiosk mode during examination sessions. External application access (including ChatGPT, Gemini, developer consoles, and messaging apps) is blocked.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-navy-800/80 rounded-2xl border border-navy-700 flex items-start gap-4">
                <Eye className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Server-Enforced Monotonic Heartbeats</h4>
                  <p className="mt-1 leading-relaxed">
                    Active browser focus is monitored through tamper-proof server heartbeats. If a student attempts to switch windows or minimize the exam interface, the anomaly is immediately logged in the audit ledger and flagged on the faculty dashboard.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-navy-800/80 rounded-2xl border border-navy-700 flex items-start gap-4">
                <Database className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Tamper-Proof Audit Logging & Soft Deletion</h4>
                  <p className="mt-1 leading-relaxed">
                    Every critical action — question slip generation, student submission, grade input, and attendance confirmation — is written into atomic transactional audit logs with a soft-delete architecture preventing accidental or unauthorized permanent data loss.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 flex justify-center">
              <Link href="/contact">
                <Button variant="teal" intent="medium">
                  <span>Discuss Institutional Compliance & Security</span>
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
