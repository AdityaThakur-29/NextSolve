"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[140vh] sm:min-h-[160vh] flex flex-col items-center py-0 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.65] sm:scale-[0.8] origin-top"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="text-white text-2xl sm:text-3xl font-bold mb-12 text-center"
      >
        {title || (
          <span>
            This Macbook sets a new standard. <br /> Effortlessly powerful.
          </span>
        )}
      </motion.h2>
      {/* Lid */}
      <Lid
        src={src}
        scaleX={scaleX}
        scaleY={scaleY}
        rotate={rotate}
        translate={translate}
      />
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -top-[13rem]">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
          <div className="mx-auto w-[10%] overflow-hidden h-full">
            <SpeakerGrid />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        {showGradient && (
          <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-[#0F172A] from-white via-navy-900/50 to-transparent z-50"></div>
        )}
        {badge && <div className="sticky bottom-4 left-4 z-50">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
  src,
}: {
  scaleX: any;
  scaleY: any;
  rotate: any;
  translate: any;
  src?: string;
}) => {
  return (
    <div className="relative [perspective:800px]">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="relative h-full w-full bg-[#171717] rounded-lg overflow-hidden"
        >
          {src && (
            <Image
              src={src}
              alt="PWS Interface Preview"
              fill
              className="object-cover object-top absolute inset-0"
            />
          )}
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "bottom",
        }}
        className="h-[22rem] w-[32rem] bg-[#010101] rounded-2xl p-2 absolute inset-0 shadow-2xl border border-navy-700/50"
      >
        <div className="relative h-full w-full bg-[#050505] rounded-xl overflow-hidden border border-navy-800">
          {src ? (
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt="PWS Real-time Dashboard"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-navy-900 via-navy-950 to-slate-950 flex items-center justify-center text-white p-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 text-teal-400 flex items-center justify-center mx-auto mb-3">
                  <span className="font-mono font-bold text-lg">PWS</span>
                </div>
                <h4 className="font-bold text-sm text-white">NextSolves Examination Dashboard</h4>
                <p className="text-xs text-navy-400 mt-1">Live Multi-Tenant Academic Platform</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div className="w-[40%] mx-auto h-32 rounded-xl my-1 bg-[#111111] border border-neutral-700/30 shadow-inner" />
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-0.5 gap-[2px] mt-2 h-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, #080808 0.5px, transparent 0.5px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
      {/* Row 1 */}
      <div className="flex gap-[2px] mb-[2px] w-full justify-between">
        <Kbd className="w-[10px] h-[6px] text-[4px]">esc</Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconBrightnessDown className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconBrightnessUp className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconWorld className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconSearch className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconMicrophone className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconMoon className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconPlayerTrackPrev className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconPlayerSkipForward className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconPlayerTrackNext className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconVolume3 className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconVolume2 className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]"><IconVolume className="w-2 h-2" /></Kbd>
        <Kbd className="w-[10px] h-[6px] text-[4px]">⏻</Kbd>
      </div>

      {/* Row 2 */}
      <div className="flex gap-[2px] mb-[2px] w-full justify-between">
        {["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "delete"].map((k) => (
          <Kbd key={k} className={k === "delete" ? "w-[24px] text-[4px]" : "w-[12px] text-[5px]"}>
            {k}
          </Kbd>
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex gap-[2px] mb-[2px] w-full justify-between">
        {["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"].map((k) => (
          <Kbd key={k} className={k === "tab" ? "w-[18px] text-[4px]" : "w-[12px] text-[5px]"}>
            {k}
          </Kbd>
        ))}
      </div>

      {/* Row 4 */}
      <div className="flex gap-[2px] mb-[2px] w-full justify-between">
        {["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"].map((k) => (
          <Kbd key={k} className={k === "caps" || k === "return" ? "w-[22px] text-[4px]" : "w-[12px] text-[5px]"}>
            {k}
          </Kbd>
        ))}
      </div>

      {/* Row 5 */}
      <div className="flex gap-[2px] mb-[2px] w-full justify-between">
        {["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"].map((k, i) => (
          <Kbd key={i} className={k === "shift" ? "w-[28px] text-[4px]" : "w-[12px] text-[5px]"}>
            {k}
          </Kbd>
        ))}
      </div>

      {/* Row 6 */}
      <div className="flex gap-[2px] w-full justify-between">
        <Kbd className="w-[14px] text-[4px]">fn</Kbd>
        <Kbd className="w-[14px] text-[4px]">control</Kbd>
        <Kbd className="w-[14px] text-[4px]">option</Kbd>
        <Kbd className="w-[18px] text-[4px]">command</Kbd>
        <Kbd className="w-[120px] text-[4px]"></Kbd>
        <Kbd className="w-[18px] text-[4px]">command</Kbd>
        <Kbd className="w-[14px] text-[4px]">option</Kbd>
        <div className="flex gap-[1px] items-end">
          <Kbd className="w-[8px] h-[5px] text-[3px]"><IconCaretLeftFilled className="w-1.5 h-1.5" /></Kbd>
          <div className="flex flex-col gap-[1px]">
            <Kbd className="w-[8px] h-[5px] text-[3px]"><IconCaretUpFilled className="w-1.5 h-1.5" /></Kbd>
            <Kbd className="w-[8px] h-[5px] text-[3px]"><IconCaretDownFilled className="w-1.5 h-1.5" /></Kbd>
          </div>
          <Kbd className="w-[8px] h-[5px] text-[3px]"><IconCaretRightFilled className="w-1.5 h-1.5" /></Kbd>
        </div>
      </div>
    </div>
  );
};

export const Kbd = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-[0.5px] rounded-[3px] bg-gradient-to-b from-[#191919] to-[#0a0a0a] flex items-center justify-center text-[#c2c2c2] shadow-[0_0.5px_0_rgba(255,255,255,0.1)_inset]",
        className
      )}
    >
      <div className="h-full w-full flex items-center justify-center bg-[#0d0d0d] rounded-[2.5px] font-sans">
        {children}
      </div>
    </div>
  );
};
