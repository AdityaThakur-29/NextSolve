'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import { Quote, Star, Building2, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Use gsap.matchMedia for responsive horizontal scroll trigger
    const mm = gsap.matchMedia();

    // Desktop & Tablet: Pinned horizontal scroll on vertical page scroll
    mm.add('(min-width: 768px)', () => {
      const getScrollDistance = () => {
        return track.scrollWidth - window.innerWidth + 80;
      };

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollDistance() * 1.15}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollPercentage(Math.round(self.progress * 100));
            if (progressRef.current) {
              progressRef.current.style.width = `${Math.max(10, self.progress * 100)}%`;
            }
          },
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white py-12 md:py-16 flex flex-col justify-center overflow-hidden border-b border-slate-100"
      id="reviews"
    >
      {/* Background concentric radial accents */}
      <div className="absolute inset-0 hero-radial-pattern pointer-events-none opacity-40" />

      {/* Top Header */}
      <div className="container-custom max-w-6xl mb-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Verified Faculty Endorsements</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Principals, HODs, and Teachers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              Direct quotes from academic leadership actively conducting examinations on PWS at Thakur Shyamnarayan Degree College.
            </p>
          </div>

          {/* Institutional Stamp & Scroll Indicator */}
          <div className="flex flex-col items-start md:items-end gap-2.5">
            <div className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200 font-medium shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>Thakur Shyamnarayan Degree College, Mumbai</span>
            </div>

            {/* Mobile Swipe Indicator */}
            <div className="md:hidden flex items-center gap-1.5 text-xs text-primary font-semibold pt-1">
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
              <span>Swipe horizontally to read reviews</span>
            </div>

            {/* Desktop Scrub Progress Pill */}
            <div className="hidden md:flex items-center gap-2.5 text-xs text-slate-500 font-mono">
              <span>Scroll to navigate</span>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  ref={progressRef}
                  className="h-full bg-primary rounded-full transition-[width] duration-75 ease-linear"
                  style={{ width: `${Math.max(10, scrollPercentage)}%` }}
                />
              </div>
              <span className="font-semibold text-slate-800 min-w-[35px]">
                {scrollPercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Track (GSAP Pinned on Desktop, Smooth Scrollable on Mobile) */}
      <div className="w-full relative z-10 overflow-x-auto md:overflow-visible scrollbar-none pb-4">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 px-4 sm:px-8 md:pl-12 md:pr-24 items-stretch will-change-transform"
        >
          {/* Intro Metric Card */}
          <div className="shrink-0 w-[260px] sm:w-[320px] bg-slate-50/80 rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-primary flex items-center justify-center">
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">4.5 / 5.0</div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Verified faculty rating based on 8 departmental evaluations across CS, IT, and college administration.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/80 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Zero-Paper Endorsed</span>
            </div>
          </div>

          {/* 8 Verified Testimonials Cards */}
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="shrink-0 w-[280px] sm:w-[390px] lg:w-[420px] bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Quote Header & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-blue-100" />
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 ml-1 font-mono">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic line-clamp-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-5 mt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                  {item.name.replace(/^(Mr\.|Ms\.|Mis\.|Dr\.)\s*/, '').charAt(0)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{item.name}</h4>
                  <p className="text-xs text-primary font-semibold truncate">{item.designation}</p>
                  <p className="text-[11px] text-slate-500 truncate">{item.institution}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Closing Action Card */}
          <div className="shrink-0 w-[280px] sm:w-[320px] bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-3xl p-6 sm:p-7 border border-blue-200/80 shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Join NextSolves
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Modernize Your Institution Today
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule a live demonstration for your principal and faculty examination committee.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-3 px-5 rounded-full shadow-sm hover:shadow transition-all"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden mt-4 text-center text-xs text-slate-400 font-mono">
        Swipe horizontally to explore reviews →
      </div>
    </section>
  );
}
