'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, CheckCircle2, ArrowUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { contactInfo } from '@/data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50/70 border-t border-slate-200/90 text-slate-700 relative overflow-hidden">
      {/* Subtle background radial pattern */}
      <div className="absolute inset-0 hero-radial-pattern pointer-events-none opacity-30" />

      <div className="container-custom relative z-10 pt-16 pb-12 sm:pt-20 sm:pb-14">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand & Mission Column (Span 4 on large screens) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/nextsolves-brand-logo.png"
                alt="NextSolves"
                width={160}
                height={48}
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              The operating system for the future campus. Transforming paper-based practical examination chaos into a 100% paperless, centralized, and automated digital workflow.
            </p>

            {/* Live Operational Status & Institutional Badge */}
            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>All Systems Operational • PWS v2.4</span>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Verified Live: Thakur Shyamnarayan Degree College</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Platform (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/product"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  PWS Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  Core Features
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  Security & SEB
                </Link>
              </li>
              <li>
                <Link
                  href="/calculator"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  Lab Surveillance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/for-colleges"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  For Administrators
                </Link>
              </li>
              <li>
                <Link
                  href="/for-faculty"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  For Faculty & HODs
                </Link>
              </li>
              <li>
                <Link
                  href="/for-students"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  For Students
                </Link>
              </li>
              <li>
                <Link
                  href="/success"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-200 block"
                >
                  FAQ & Knowledge
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Direct Contact Card (Span 4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                Institutional Inquiries
              </h4>
              <ShieldCheck className="w-4 h-4 text-primary" />
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Direct line for college principals, examination controllers, and academic councils.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm pt-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-primary transition-colors duration-200 group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate font-medium">{contactInfo.email}</span>
              </a>

              <div className="flex flex-col gap-1.5">
                {contactInfo.phone.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, '')}`}
                    className="flex items-center gap-2.5 text-slate-700 hover:text-primary transition-colors duration-200 group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{p}</span>
                  </a>
                ))}
              </div>

              <div className="flex items-start gap-2.5 text-slate-500 pt-1">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs leading-relaxed">{contactInfo.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-2xs hover:shadow transition-all"
              >
                <span>Request Campus Demonstration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="pt-8 border-t border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <p>© {new Date().getFullYear()} NextSolves Technologies. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400 font-mono hidden lg:inline">
              Autonomous Examination & Institutional Workflow Infrastructure
            </span>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-2xs text-xs font-medium transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
