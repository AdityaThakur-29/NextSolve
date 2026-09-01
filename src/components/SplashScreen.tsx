'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface SplashScreenProps {
  /**
   * The style of the loading indicator beneath or around the logo.
   * - 'progress': Thin royal blue progress line filling left-to-right (Default)
   * - 'arc': Whisper-thin spinning orbital arc around the logo
   */
  indicator?: 'progress' | 'arc';
  /**
   * The reveal animation when loading completes.
   * - 'curtain': Pure white overlay glides smoothly upward with luxury cubic-bezier easing (Default)
   * - 'fade': Logo scales down slightly and the overlay fades out smoothly
   */
  reveal?: 'curtain' | 'fade';
  /**
   * Duration in seconds before the exit reveal begins. Default: 1.8s
   */
  duration?: number;
  /**
   * In production, whether to show only once per session.
   * Defaults to false in development (so you can test it on reload) and true in production.
   */
  sessionOnly?: boolean;
}

export default function SplashScreen({
  indicator = 'progress',
  reveal = 'curtain',
  duration = 1.8,
  sessionOnly = process.env.NODE_ENV === 'production',
}: SplashScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    // If sessionOnly is enabled, check sessionStorage (unless ?splash=true is passed)
    const urlParams = new URLSearchParams(window.location.search);
    const forceParam = urlParams.get('splash') === 'true';

    if (sessionOnly && !forceParam) {
      try {
        const hasSeen = sessionStorage.getItem('nextsolves_splash_shown');
        if (hasSeen) {
          setIsVisible(false);
          return;
        }
      } catch {
        // Safe fallback
      }
    }

    setIsVisible(true);
    document.body.style.overflow = 'hidden';

    // Start progress animation
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const targetDuration = duration * 1000;
      const p = Math.min(100, Math.round((elapsed / targetDuration) * 100));
      setProgress(p);

      if (elapsed >= targetDuration) {
        clearInterval(interval);
        // Small pause at 100% before launching curtain reveal
        setTimeout(() => {
          setIsVisible(false);
          try {
            sessionStorage.setItem('nextsolves_splash_shown', 'true');
          } catch {
            // ignore
          }
          document.body.style.overflow = '';
        }, 150);
      }
    }, 20);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [duration, sessionOnly]);

  const curtainVariants = {
    initial: { y: '0%' },
    animate: { y: '0%' },
    exit: {
      y: '-100%',
      transition: {
        duration: 0.85,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  const fadeVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const chosenVariant = reveal === 'curtain' ? curtainVariants : fadeVariants;

  // Don't render until client mounted to prevent any hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = '';
      }}
    >
      {isVisible && (
        <motion.div
          key="nextsolves-splash"
          variants={chosenVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white select-none pointer-events-auto shadow-2xl"
          aria-hidden="false"
          role="status"
          aria-live="polite"
        >
          {/* Subtle concentric radial pattern */}
          <div className="absolute inset-0 hero-radial-pattern pointer-events-none opacity-40" />

          {/* Centered Brand Container */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4">
            {/* Logo Entrance: gentle fade-in & scale up from 90% to 100% */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* Variant B: Minimal Orbital Spinning Arc */}
              {indicator === 'arc' && (
                <div className="absolute -inset-6 sm:-inset-8 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: 'linear',
                    }}
                    className="w-full h-full rounded-full border-[1.5px] border-transparent border-t-primary border-r-primary/40"
                  />
                </div>
              )}

              {/* Logo with subtle breathing pulse */}
              <motion.div
                animate={{
                  opacity: [0.94, 1, 0.94],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <Image
                  src="/assets/logos/nextsolves-brand-logo.png"
                  alt="NextSolves"
                  width={220}
                  height={65}
                  priority
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Indicator Variant A: Thin Royal Blue Progress Line */}
            {indicator === 'progress' && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mt-8 flex flex-col items-center space-y-2.5"
              >
                {/* Thin 2px progress track */}
                <div className="w-36 sm:w-44 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-75 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Minimalist Micro Status */}
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 font-mono">
                  Loading {progress}%
                </span>
              </motion.div>
            )}

            {/* Minimal Sub-tagline if using Arc */}
            {indicator === 'arc' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-slate-400 font-mono"
              >
                Campus Operating System
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
