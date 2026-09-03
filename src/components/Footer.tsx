import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { footerNavigation, contactInfo } from '@/data/navigation';
import { FooterStickyReveal } from '@/components/ui/footer-sticky-reveal';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function Footer() {
  return (
    <FooterStickyReveal className="mt-14 sm:mt-20 lg:mt-28">
      <footer className="relative bg-slate-50 border-t border-slate-200/80 text-slate-700 overflow-hidden">
        <div className="container-custom py-10 sm:py-16 lg:py-20 px-4 sm:px-6">
          {/* Main Layout: 2 columns on mobile, 4 on tablet, 6 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-10 lg:gap-8">
            {/* Brand Column (Full width on mobile & tablet, 2 cols on desktop) */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg">
                <Image
                  src="/assets/logos/nextsolves-brand-logo.png"
                  alt="NextSolves"
                  width={150}
                  height={42}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                The operating system for the future campus. Transforming paper-based examination chaos into an automated, zero-paper workflow.
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold max-w-full">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Verified Deployment • Thakur College</span>
              </div>

              <div className="pt-2 space-y-2 text-xs sm:text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2.5 text-slate-600 hover:text-primary transition-colors py-1"
                >
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4">
                  {contactInfo.phone.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors py-1"
                    >
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{p}</span>
                    </a>
                  ))}
                </div>
                <div className="flex items-start gap-2.5 text-slate-500 pt-0.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.product.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources & Legal Links */}
            <div className="col-span-1">
              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {footerNavigation.resources.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold text-slate-900 mb-3 sm:mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {footerNavigation.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-0.5 text-xs sm:text-sm text-slate-600 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Stacked & centered on mobile, inline on desktop */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
            <p>© {new Date().getFullYear()} NextSolves. All rights reserved.</p>
            <p className="text-[11px] sm:text-xs text-slate-400">
              Autonomous Examination & Institutional Workflow Infrastructure.
            </p>
          </div>
        </div>

        <ProgressiveBlur
          position="bottom"
          height="48px"
          className="pointer-events-none bg-gradient-to-t from-slate-100/60 to-transparent hidden sm:block"
          blurLevels={[0.5, 1, 2, 4, 8, 16]}
        />
      </footer>
    </FooterStickyReveal>
  );
}
