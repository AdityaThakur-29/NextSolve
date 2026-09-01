'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white text-slate-900 relative overflow-hidden shadow-md border border-slate-200/90">
      <div className="max-w-4xl mx-auto">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">
              4.5 / 5 Verified College Endorsement
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
            <Building2 className="w-3.5 h-3.5 text-primary" />
            <span className="font-medium">Thakur Shyamnarayan Degree College, Mumbai</span>
          </div>
        </div>

        {/* Carousel Quote */}
        <div className="min-h-[200px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="relative">
                <Quote className="w-12 h-12 text-blue-100 absolute -top-4 -left-3 -z-10" />
                <p className="text-base sm:text-lg md:text-xl text-slate-800 font-normal leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 text-primary flex items-center justify-center font-bold text-lg shadow-2xs shrink-0">
                  {current.name.replace(/^(Mr\.|Ms\.|Mis\.|Dr\.)\s*/, '').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg">{current.name}</h4>
                  <p className="text-xs sm:text-sm text-primary font-semibold">{current.designation}</p>
                  <p className="text-xs text-slate-500">{current.institution}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls and Pagination */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-primary'
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-slate-700 transition-all cursor-pointer border border-slate-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-mono font-medium px-1.5">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-primary hover:text-white text-slate-700 transition-all cursor-pointer border border-slate-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
