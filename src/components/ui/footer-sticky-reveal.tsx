'use client';

import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface FooterStickyRevealProps {
  children: ReactNode;
  className?: string;
}

export function FooterStickyReveal({ children, className = '' }: FooterStickyRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!contentRef.current) return;

    const measureHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
      }
    };

    measureHeight();
    const resizeObserver = new ResizeObserver(measureHeight);
    resizeObserver.observe(contentRef.current);
    window.addEventListener('resize', measureHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measureHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Smooth Motion: slight Y translation, subtle scale, and gentle fade in as footer is uncovered
  const y = useTransform(scrollYProgress, [0, 1], [-80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.85, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        height: height > 0 ? `${height}px` : 'auto',
        clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      }}
    >
      <div
        className="fixed bottom-0 left-0 w-full z-0 pointer-events-auto"
        style={{
          height: height > 0 ? `${height}px` : 'auto',
        }}
      >
        <motion.div
          ref={contentRef}
          style={{ y, opacity, scale }}
          className="w-full h-full will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default FooterStickyReveal;
