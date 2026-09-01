'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 mx-auto max-w-5xl z-50 px-3 sm:px-4 transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-slate-300/80 shadow-md'
            : 'bg-white/90 backdrop-blur-md border-slate-200/90 shadow-sm'
        }`}
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/assets/logos/nextsolves-logo.png"
            alt="NextSolves"
            width={140}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`w-3 h-3 text-slate-400 transition-transform ${
                      openDropdown === item.label ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                )}
              </Link>

              {/* Clean Desktop Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-primary hover:bg-blue-50/60 rounded-xl transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button
              variant="default"
              size="sm"
              className="rounded-full px-4 text-xs font-semibold shadow-sm hover:shadow"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Button>
          </Link>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-x-3 top-20 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 p-5 shadow-2xl z-40 max-h-[80vh] overflow-y-auto">
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-slate-100 last:border-0 pb-2 mb-2">
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50 cursor-pointer"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 pt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-primary rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-slate-900 rounded-xl hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow hover:bg-primary-hover transition-colors"
            >
              <span>Request an Institutional Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
