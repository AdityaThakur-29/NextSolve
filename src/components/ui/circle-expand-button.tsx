'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface CircleExpandButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'dark' | 'white';
  newTab?: boolean;
}

const transitionText = {
  type: 'spring',
  duration: 0.35,
  bounce: 0,
} as const;

const transitionCircle = {
  type: 'spring',
  damping: 30,
  stiffness: 231,
  mass: 1,
} as const;

export default function CircleExpandButton({
  text,
  href,
  onClick,
  className = '',
  variant = 'primary',
  newTab = false,
}: CircleExpandButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Variant color mappings
  const variantStyles = {
    primary: {
      buttonBg: 'bg-primary border border-blue-500/30 shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30',
      textNormal: 'text-white',
      textHover: 'text-primary',
      circleNormalBg: 'bg-white text-primary',
      circleHoverBg: 'bg-primary text-white',
      expandCircleBg: 'bg-white',
    },
    dark: {
      buttonBg: 'bg-slate-900 border border-slate-800 shadow-md shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30',
      textNormal: 'text-white',
      textHover: 'text-slate-900',
      circleNormalBg: 'bg-white text-slate-900',
      circleHoverBg: 'bg-slate-900 text-white',
      expandCircleBg: 'bg-white',
    },
    white: {
      buttonBg: 'bg-white border border-slate-200 shadow-md hover:shadow-xl',
      textNormal: 'text-slate-900',
      textHover: 'text-white',
      circleNormalBg: 'bg-slate-900 text-white',
      circleHoverBg: 'bg-white text-slate-900',
      expandCircleBg: 'bg-slate-900',
    },
  }[variant];

  const content = (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-between gap-5 pl-7 pr-2.5 py-2.5 rounded-full overflow-hidden cursor-pointer select-none transition-shadow ${variantStyles.buttonBg} ${className}`}
    >
      {/* Expanding Background Circle originating from the icon position */}
      <motion.div
        className={`absolute rounded-full pointer-events-none ${variantStyles.expandCircleBg}`}
        style={{
          width: 38,
          height: 38,
          right: 10,
          top: '50%',
          y: '-50%',
          originX: 0.5,
          originY: 0.5,
        }}
        initial={false}
        animate={{
          scale: isHovered ? 18 : 1,
        }}
        transition={transitionCircle}
      />

      {/* Primary Text Layer (Resting State) */}
      <motion.span
        initial={false}
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -2 : 0,
        }}
        transition={transitionText}
        className={`relative z-10 text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap ${variantStyles.textNormal}`}
      >
        {text}
      </motion.span>

      {/* Inverted Text Layer (Hovered State) */}
      <motion.span
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 2,
        }}
        transition={transitionText}
        className={`absolute left-7 top-1/2 -translate-y-1/2 z-10 text-sm sm:text-base font-semibold tracking-wide whitespace-nowrap pointer-events-none ${variantStyles.textHover}`}
      >
        {text}
      </motion.span>

      {/* Right Circular Icon Badge */}
      <div className="relative z-10 flex items-center justify-center shrink-0">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isHovered
              ? variant === 'white'
                ? '#ffffff'
                : variant === 'dark'
                ? '#0f172a'
                : '#2563eb'
              : variant === 'white'
              ? '#0f172a'
              : '#ffffff',
            color: isHovered
              ? variant === 'white'
                ? '#0f172a'
                : '#ffffff'
              : variant === 'white'
              ? '#ffffff'
              : variant === 'dark'
              ? '#0f172a'
              : '#2563eb',
          }}
          transition={{ duration: 0.25 }}
          className="w-9 h-9 rounded-full flex items-center justify-center shadow-xs"
        >
          <motion.div
            initial={false}
            animate={{
              rotate: isHovered ? 0 : -45,
            }}
            transition={transitionText}
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block bg-transparent border-0 p-0 cursor-pointer">
      {content}
    </button>
  );
}
