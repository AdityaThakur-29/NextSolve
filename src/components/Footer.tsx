import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { footerNavigation, contactInfo } from '@/data/navigation';
import { FooterStickyReveal } from '@/components/ui/footer-sticky-reveal';

export default function Footer() {
  return (
    <FooterStickyReveal>
      <footer className="bg-slate-50 border-t border-slate-200/80 text-slate-700">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logos/nextsolves-brand-logo.png"
                alt="NextSolves"
                width={150}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              The operating system for the future campus. Transforming paper-based examination chaos into an automated, zero-paper workflow.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Deployment • Thakur College</span>
            </div>

            <div className="pt-2 space-y-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                {contactInfo.email}
              </a>
              {contactInfo.phone.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  {p}
                </a>
              ))}
              <div className="flex items-start gap-2.5 text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                {contactInfo.address}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.product.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5 mb-6">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {footerNavigation.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NextSolves. All rights reserved.</p>
          <p>Autonomous Examination & Institutional Workflow Infrastructure.</p>
        </div>
      </div>
      </footer>
    </FooterStickyReveal>
  );
}
