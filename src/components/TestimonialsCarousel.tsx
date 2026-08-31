'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Quote, ChevronLeft, ChevronRight, Star, Building2, UserCheck } from 'lucide-react';
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
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl border border-navy-700/60">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-navy-700/60">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-teal-300 ml-1">
              4.5 / 5 Verified College Feedback
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-navy-300 bg-navy-800/80 px-3 py-1.5 rounded-full border border-navy-700">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>Thakur Shyamnarayan Degree College, Mumbai</span>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="min-h-[220px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="relative">
                <Quote className="w-12 h-12 text-teal-400/20 absolute -top-4 -left-4 -z-10" />
                <p className="text-base sm:text-lg md:text-xl text-navy-100 font-normal leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-navy-950 font-bold text-lg shadow-md shrink-0">
                  {current.name.replace(/^(Mr\.|Ms\.|Mis\.|Dr\.)\s*/, '').charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-base md:text-lg">{current.name}</h4>
                  <p className="text-xs sm:text-sm text-teal-400 font-medium">{current.designation}</p>
                  <p className="text-xs text-navy-400">{current.institution}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls and Pagination */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-navy-700/60">
          {/* Dot Indicators */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-teal-400'
                    : 'w-2 bg-navy-700 hover:bg-navy-600'
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-xl bg-navy-800 hover:bg-teal-500 hover:text-navy-950 text-white transition-all cursor-pointer border border-navy-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-navy-400 font-mono px-2">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-xl bg-navy-800 hover:bg-teal-500 hover:text-navy-950 text-white transition-all cursor-pointer border border-navy-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
