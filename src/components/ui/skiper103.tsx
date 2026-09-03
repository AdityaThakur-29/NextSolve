'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, Shield, Zap, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Skiper103Item {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

export interface Skiper103Props {
  items?: Skiper103Item[];
  defaultOpenId?: string | null;
  className?: string;
  allowMultiple?: boolean;
}

const defaultDemoItems: Skiper103Item[] = [
  {
    id: 'demo-1',
    title: 'Type Shit',
    content: 'Fast, accurate typing with real-time validation and helpful hints.',
    icon: <Terminal className="w-4 h-4 text-slate-700" />,
  },
  {
    id: 'demo-2',
    title: 'Star Great',
    content: 'Mark favorites and organize items with flexible, intuitive star tagging.',
    icon: <Sparkles className="w-4 h-4 text-amber-500" />,
  },
  {
    id: 'demo-3',
    title: 'Schedule',
    content: 'Plan tasks with timelines, reminders, and conflict detection.',
    icon: <Zap className="w-4 h-4 text-blue-500" />,
  },
  {
    id: 'demo-4',
    title: 'Triangle Warning',
    content: 'Get early warning indicators and actionable recovery steps when exceptions happen.',
    icon: <Shield className="w-4 h-4 text-emerald-500" />,
  },
];

export function Skiper103({
  items = defaultDemoItems,
  defaultOpenId = null,
  className,
  allowMultiple = false,
}: Skiper103Props) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : items[0]?.id ? [items[0].id] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('w-full max-w-3xl mx-auto flex flex-col gap-3', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <motion.div
            key={item.id}
            layout
            transition={{
              layout: { type: 'spring', stiffness: 380, damping: 30, mass: 0.8 },
            }}
            className={cn(
              'group rounded-2xl border transition-colors duration-200 overflow-hidden select-none',
              isOpen
                ? 'bg-white border-primary/30 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.12)] ring-1 ring-primary/20'
                : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-300/90 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]'
            )}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Glassmorphic icon badge */}
                <div
                  className={cn(
                    'w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300',
                    isOpen
                      ? 'bg-primary/10 text-primary ring-1 ring-primary/25 shadow-xs'
                      : 'bg-slate-100/90 group-hover:bg-slate-100 text-slate-600 ring-1 ring-slate-200/70'
                  )}
                >
                  {item.icon || <HelpCircle className="w-4 h-4" />}
                </div>

                <span className="font-semibold text-sm sm:text-base text-slate-900 tracking-tight leading-snug">
                  {item.title}
                </span>
              </div>

              {/* Bouncy Spring Animated Chevron */}
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                className={cn(
                  'w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-colors',
                  isOpen
                    ? 'bg-primary/10 text-primary'
                    : 'bg-transparent text-slate-400 group-hover:text-slate-600'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>

            {/* Bouncy Spring Content Expansion */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { type: 'spring', stiffness: 380, damping: 30, mass: 0.8 },
                      opacity: { duration: 0.25, delay: 0.05 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { type: 'spring', stiffness: 400, damping: 32, mass: 0.7 },
                      opacity: { duration: 0.15 },
                    },
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 pl-[3.75rem] pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100/80 mt-1">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Skiper103;
