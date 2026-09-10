'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { principalTestimonial, facultyTestimonials } from '@/data/testimonials';
import {
  Quote,
  Star,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Award,
} from 'lucide-react';

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentScroll = el.scrollLeft;
    const pct = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
    setScrollPercentage(Math.round(pct));
    setCanScrollLeft(currentScroll > 12);
    setCanScrollRight(currentScroll < maxScroll - 12);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const cardStep = el.clientWidth > 768 ? 440 : 320;
    const delta = direction === 'left' ? -cardStep : cardStep;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  // Drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    el.scrollLeft = scrollLeftState - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      className="relative bg-white py-16 sm:py-20 border-b border-slate-100 overflow-hidden scroll-mt-20"
      id="reviews"
    >
      <div className="absolute inset-0 hero-radial-pattern pointer-events-none opacity-40" />

      {/* ============================================================ */}
      {/* 1. SECTION HEADER */}
      {/* ============================================================ */}
      <div className="container-custom max-w-6xl mb-8 sm:mb-10 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-semibold mb-2.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Institutional Endorsements</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Academic Leadership & Faculty Endorsements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-[65ch] leading-relaxed text-pretty">
            Direct evaluations from college leadership and examination committees conducting paperless practical workflows.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 2. REBUILT PRINCIPAL SPOTLIGHT CARD (Modern Light Theme) */}
        {/* ============================================================ */}
        <div className="mt-6 relative rounded-3xl bg-gradient-to-br from-white via-blue-50/20 to-slate-50/40 border border-blue-100/90 shadow-lg shadow-blue-900/5 p-5 sm:p-7 lg:p-8 transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
          {/* Decorative Background Quote Watermark */}
          <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-20 h-20 sm:w-28 sm:h-28 text-blue-100/40 pointer-events-none rotate-12" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-7">
            {/* Principal Avatar Frame */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden ring-4 ring-blue-50 border border-blue-200 shadow-sm relative bg-gradient-to-br from-blue-600 to-indigo-700">
                <Image
                  src="/assets/team/dr-gd-giri.svg"
                  alt="Dr. G.D. Giri — Principal"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Verified Institutional Crest Badge */}
              <div
                className="absolute -bottom-1.5 -right-1.5 bg-emerald-600 text-white p-1.5 rounded-full border-2 border-white shadow-sm"
                title="Verified Institutional Implementation"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Principal Quote & Credentials */}
            <div className="flex-1 text-center md:text-left space-y-3 min-w-0">
              {/* Badge & Stars Header */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  Principal&apos;s Institutional Endorsement
                </span>
                <div className="flex text-amber-400 gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                &ldquo;{principalTestimonial.quote}&rdquo;
              </p>

              {/* Principal Signature Bar */}
              <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900">
                    {principalTestimonial.name}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 text-xs mt-0.5">
                    <span className="font-bold text-primary">{principalTestimonial.designation}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 font-medium">{principalTestimonial.institution}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold self-center sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Continuous Zero-Paper Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. FACULTY REVIEWS SCROLLING CAROUSEL (Spacious & Fully Visible) */}
      {/* ============================================================ */}
      <div className="container-custom max-w-6xl relative z-10">
        {/* Carousel Controls Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pt-6 border-t border-slate-100">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Departmental Faculty & Examiner Reviews
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Verified feedback from CS/IT HODs, Exam Coordinators, and Lab Invigilators.
            </p>
          </div>

          {/* Navigation Controls: Arrows + Progress */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-mono mr-2">
              <span>Progress</span>
              <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-[width] duration-150 ease-out"
                  style={{ width: `${Math.max(15, scrollPercentage)}%` }}
                />
              </div>
              <span className="font-semibold text-slate-700 min-w-[32px] text-right">
                {scrollPercentage}%
              </span>
            </div>

            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-primary/50 shadow-2xs hover:shadow-xs active:scale-95'
                  : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-primary border-primary text-white hover:bg-primary-hover shadow-sm hover:shadow active:scale-95'
                  : 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Cards Track */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          className={`flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-3 px-1 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Summary Metric Card */}
          <div className="shrink-0 w-[270px] sm:w-[310px] bg-slate-50/90 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between snap-start">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-primary flex items-center justify-center">
                <Star className="w-5 h-5 fill-primary text-primary" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">4.5 / 5.0</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Overall Faculty Rating
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Based on continuous departmental evaluations across Computer Science, Information Technology, and institutional examination boards.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-200 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>100% Zero-Paper Endorsement</span>
            </div>
          </div>

          {/* 7 Faculty Testimonials Cards */}
          {facultyTestimonials.map((item, index) => (
            <div
              key={item.id}
              className="shrink-0 w-[290px] sm:w-[370px] lg:w-[410px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-primary/40 transition-all duration-200 flex flex-col justify-between snap-start"
            >
              <div>
                {/* Card Top: Stars & Index */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-blue-100 shrink-0" />
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 ml-1 font-mono">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Details Footer */}
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

          {/* Closing Demo Action Card */}
          <div className="shrink-0 w-[280px] sm:w-[320px] bg-gradient-to-br from-blue-50 via-indigo-50/40 to-white rounded-3xl p-6 sm:p-7 border border-blue-200/80 shadow-2xs flex flex-col justify-between snap-start">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Join NextSolves
              </span>
              <h4 className="text-lg font-bold text-slate-900 leading-snug">
                Modernize Your Institution Today
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Schedule a customized live walkthrough for your principal and faculty examination council.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-blue-100">
              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-3 px-5 rounded-full shadow-sm hover:shadow transition-all"
              >
                <span>Request Campus Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden mt-3 flex items-center justify-center gap-1 text-xs text-slate-400">
          <span>Swipe horizontally to explore all faculty reviews</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
