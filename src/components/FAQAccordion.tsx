'use client';

import { useState } from 'react';
import { faqItems, FAQItem } from '@/data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ limit }: { limit?: number }) {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto">
      {items.map((item: FAQItem) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-teal-500/40 shadow-md ring-1 ring-teal-500/20'
                : 'bg-white/80 border-navy-100 hover:border-navy-200 shadow-sm'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-sm sm:text-base text-navy-900 flex items-center gap-3">
                <HelpCircle
                  className={`w-4 h-4 shrink-0 transition-colors ${
                    isOpen ? 'text-teal-600' : 'text-navy-400'
                  }`}
                />
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-navy-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-teal-600' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-navy-600 leading-relaxed border-t border-navy-50 font-normal pl-12">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
