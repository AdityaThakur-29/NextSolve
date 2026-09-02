'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarCheck,
  Sparkles,
  Shuffle,
  ShieldCheck,
  Activity,
  Code2,
  FileSpreadsheet,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Lock,
  Cpu,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

export interface PipelineStage {
  id: string;
  num: string;
  side: 'left' | 'center' | 'right';
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  role: string;
  metric: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
}

export const pipelineStages: PipelineStage[] = [
  {
    id: 'setup',
    num: '01',
    side: 'left',
    title: 'Exam & Batch Setup',
    shortDesc: 'Create batches and schedule syllabus matrix in minutes.',
    fullDesc:
      'Exam cell coordinators and faculty upload syllabi, configure batches, and enroll student roll numbers in under 2 minutes with zero paper waste.',
    category: 'Pre-Exam Orchestration',
    role: 'Faculty / Exam Cell',
    metric: '< 2 Mins Batch Creation',
    highlights: [
      'Multi-department batch scheduling',
      'Roll number & student ledger sync',
      'Configurable marks rubric',
    ],
    icon: CalendarCheck,
    accentColor: 'text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700',
    badgeBorder: 'border-blue-200',
  },
  {
    id: 'ingestion',
    num: '02',
    side: 'left',
    title: 'Question Ingestion',
    shortDesc: 'System balances difficulty & Bloom taxonomy automatically.',
    fullDesc:
      'Autonomous ingestion parses question banks, balances syllabus units, and dynamically verifies question difficulty criteria.',
    category: 'Pre-Exam Orchestration',
    role: 'Autonomous Parser',
    metric: 'Auto-Balanced Difficulty',
    highlights: [
      'Bloom taxonomy alignment',
      'Multi-format question bank parsing',
      'Dynamic marks weightage balancing',
    ],
    icon: Sparkles,
    accentColor: 'text-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700',
    badgeBorder: 'border-indigo-200',
  },
  {
    id: 'slips',
    num: '03',
    side: 'left',
    title: 'Random Digital Slips',
    shortDesc: 'Unique randomized question slips sealed per student terminal.',
    fullDesc:
      'Generates cryptographically unique question slips distributed directly to student workstations at the start of examination.',
    category: 'Pre-Exam Orchestration',
    role: 'Cryptographic Engine',
    metric: 'Zero Paper Leakage',
    highlights: [
      '1-to-1 unique slip assignment',
      'Dynamic variable permutation',
      'Instant terminal delivery',
    ],
    icon: Shuffle,
    accentColor: 'text-purple-600',
    badgeBg: 'bg-purple-50 text-purple-700',
    badgeBorder: 'border-purple-200',
  },
  {
    id: 'core',
    num: 'PWS',
    side: 'center',
    title: 'NextSolves PWS Core',
    shortDesc: 'Autonomous Digital Examination Infrastructure.',
    fullDesc:
      'The central institutional kernel that synchronizes student workstations, faculty invigilation consoles, and evaluation ledgers in real time.',
    category: 'Central Engine',
    role: 'Institutional Operating System',
    metric: '256-Bit Encrypted Sync',
    highlights: [
      '100% paperless exam delivery',
      'Monotonic event ordering (12ms)',
      'Certified offline/online redundancy',
    ],
    icon: Cpu,
    accentColor: 'text-primary',
    badgeBg: 'bg-primary/10 text-primary',
    badgeBorder: 'border-primary/30',
  },
  {
    id: 'lockdown',
    num: '04',
    side: 'right',
    title: 'Terminal Lockdown',
    shortDesc: 'Safe Exam Browser lock prevents tab switches and external tools.',
    fullDesc:
      'Students log in on lab workstations. The system enforces Safe Exam Browser lockdown, blocking clipboard, dev tools, and unauthorized apps.',
    category: 'Live Execution',
    role: 'Student Terminal',
    metric: '0 External Tab Switches',
    highlights: [
      'Safe Exam Browser lockdown',
      'Blocked clipboard & DevTools',
      'Automated biometric/login attendance',
    ],
    icon: Lock,
    accentColor: 'text-cyan-600',
    badgeBg: 'bg-cyan-50 text-cyan-700',
    badgeBorder: 'border-cyan-200',
  },
  {
    id: 'proctoring',
    num: '05',
    side: 'right',
    title: 'Live Lab Proctoring',
    shortDesc: 'Supervise terminal telemetry and heartbeats in real time.',
    fullDesc:
      'Examiners monitor every workstation heartbeat, submission progress, and violation alerts from a unified central dashboard.',
    category: 'Live Execution',
    role: 'Examiner Console',
    metric: '12ms Telemetry Heartbeat',
    highlights: [
      'Live workstation status grid',
      'Instant tab-switch detection',
      'One-click supervisor signoff',
    ],
    icon: Activity,
    accentColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700',
    badgeBorder: 'border-emerald-200',
  },
  {
    id: 'evaluation',
    num: '06',
    side: 'right',
    title: 'Instant Evaluation',
    shortDesc: 'Side-by-side IDE code grading with automated MCQ scoring.',
    fullDesc:
      'Faculty inspect code outputs, screenshots, and test cases side-by-side with student code, cutting grading time by 80%.',
    category: 'Post-Exam Assessment',
    role: 'Faculty Evaluator',
    metric: '80% Faster Grading',
    highlights: [
      'Side-by-side IDE code review',
      'Instant compiler output validation',
      'Automated MCQ rubric scoring',
    ],
    icon: Code2,
    accentColor: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-700',
    badgeBorder: 'border-amber-200',
  },
  {
    id: 'ledgers',
    num: '07',
    side: 'right',
    title: 'Instant Ledgers',
    shortDesc: 'Export certified mark sheets and attendance instantly to Excel.',
    fullDesc:
      'Generates university-compliant, tamper-proof mark ledgers with student signatures and timestamps exported directly to Excel and ERP.',
    category: 'Post-Exam Assessment',
    role: 'Academic Office / ERP',
    metric: 'One-Click Official Export',
    highlights: [
      'Tamper-evident mark records',
      'Export to Excel / ERP ledgers',
      'Cryptographic attendance archive',
    ],
    icon: FileSpreadsheet,
    accentColor: 'text-rose-600',
    badgeBg: 'bg-rose-50 text-rose-700',
    badgeBorder: 'border-rose-200',
  },
];

export default function DigitalPipelineBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);
  const node5Ref = useRef<HTMLDivElement>(null);
  const node6Ref = useRef<HTMLDivElement>(null);
  const node7Ref = useRef<HTMLDivElement>(null);

  const [hoveredStageId, setHoveredStageId] = useState<string | null>(null);
  const [activeStageId, setActiveStageId] = useState<string>('setup');

  const activeStage =
    pipelineStages.find((s) => s.id === (hoveredStageId || activeStageId)) ||
    pipelineStages[0];

  const handlePrev = () => {
    const currentIndex = pipelineStages.findIndex((s) => s.id === activeStage.id);
    const prevIndex = (currentIndex - 1 + pipelineStages.length) % pipelineStages.length;
    setActiveStageId(pipelineStages[prevIndex].id);
    setHoveredStageId(null);
  };

  const handleNext = () => {
    const currentIndex = pipelineStages.findIndex((s) => s.id === activeStage.id);
    const nextIndex = (currentIndex + 1) % pipelineStages.length;
    setActiveStageId(pipelineStages[nextIndex].id);
    setHoveredStageId(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Interactive Beam Integration Diagram (Inspired by Reference Images 2 & 3) */}
      <div
        ref={containerRef}
        className="relative w-full max-w-5xl h-[520px] sm:h-[580px] bg-white rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-8 flex items-center justify-between overflow-hidden select-none"
      >
        {/* Subtle Ambient Background Mesh Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(#0f172a 1px, transparent 1px), radial-gradient(#0f172a 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0, 12px 12px',
          }}
        />

        {/* Ambient Radial Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* ============================================================ */}
        {/* LEFT COLUMN — Pre-Exam Ingestion (Nodes 01, 02, 03) */}
        {/* ============================================================ */}
        <div className="flex flex-col justify-between h-full py-4 sm:py-6 z-20 w-32 sm:w-52">
          {/* Node 01: Exam Setup */}
          <NodeItem
            ref={node1Ref}
            stage={pipelineStages[0]}
            isHovered={hoveredStageId === 'setup'}
            isActive={activeStage.id === 'setup'}
            onHover={() => setHoveredStageId('setup')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('setup')}
          />

          {/* Node 02: Question Ingestion */}
          <NodeItem
            ref={node2Ref}
            stage={pipelineStages[1]}
            isHovered={hoveredStageId === 'ingestion'}
            isActive={activeStage.id === 'ingestion'}
            onHover={() => setHoveredStageId('ingestion')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('ingestion')}
          />

          {/* Node 03: Random Digital Slips */}
          <NodeItem
            ref={node3Ref}
            stage={pipelineStages[2]}
            isHovered={hoveredStageId === 'slips'}
            isActive={activeStage.id === 'slips'}
            onHover={() => setHoveredStageId('slips')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('slips')}
          />
        </div>

        {/* ============================================================ */}
        {/* CENTER HUB — PWS Core Autonomous Engine */}
        {/* ============================================================ */}
        <div className="z-20 flex items-center justify-center self-center my-auto">
          <div
            ref={centerRef}
            onMouseEnter={() => setHoveredStageId('core')}
            onMouseLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('core')}
            className={`group relative flex items-center justify-center cursor-pointer transition-all duration-300 ${
              hoveredStageId === 'core' || activeStage.id === 'core'
                ? 'scale-110'
                : 'hover:scale-105'
            }`}
          >
            {/* Pulsing Aura Rings */}
            <div className="absolute -inset-3 rounded-full bg-primary/10 animate-ping opacity-30 pointer-events-none" />
            <div className="absolute -inset-1.5 rounded-full bg-primary/15 animate-pulse pointer-events-none" />

            {/* Central Node Circle with PWS Logo */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-primary/80 shadow-xl flex items-center justify-center p-3 sm:p-4 transition-all">
              <Image
                src="/assets/logos/dp_logo_pws.png"
                alt="PWS Core"
                width={84}
                height={84}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Hover Floating Glass Tooltip */}
            <AnimatePresence>
              {hoveredStageId === 'core' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-full mb-3 w-64 p-3 bg-slate-950/95 text-white rounded-xl shadow-2xl border border-slate-800 text-xs text-center z-50 pointer-events-none backdrop-blur-md"
                >
                  <span className="text-primary font-bold text-[11px] block">
                    PWS Autonomous Engine
                  </span>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Centrally coordinates paperless ingestion, Safe Exam Browser locks, live heartbeats, and mark ledgers.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN — Execution & Compliance (Nodes 04, 05, 06, 07) */}
        {/* ============================================================ */}
        <div className="flex flex-col justify-between h-full py-2 sm:py-3 z-20 w-32 sm:w-52">
          {/* Node 04: Terminal Lockdown */}
          <NodeItem
            ref={node4Ref}
            stage={pipelineStages[4]}
            isHovered={hoveredStageId === 'lockdown'}
            isActive={activeStage.id === 'lockdown'}
            onHover={() => setHoveredStageId('lockdown')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('lockdown')}
            alignRight
          />

          {/* Node 05: Live Proctoring */}
          <NodeItem
            ref={node5Ref}
            stage={pipelineStages[5]}
            isHovered={hoveredStageId === 'proctoring'}
            isActive={activeStage.id === 'proctoring'}
            onHover={() => setHoveredStageId('proctoring')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('proctoring')}
            alignRight
          />

          {/* Node 06: Instant Evaluation */}
          <NodeItem
            ref={node6Ref}
            stage={pipelineStages[6]}
            isHovered={hoveredStageId === 'evaluation'}
            isActive={activeStage.id === 'evaluation'}
            onHover={() => setHoveredStageId('evaluation')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('evaluation')}
            alignRight
          />

          {/* Node 07: Certified Ledgers */}
          <NodeItem
            ref={node7Ref}
            stage={pipelineStages[7]}
            isHovered={hoveredStageId === 'ledgers'}
            isActive={activeStage.id === 'ledgers'}
            onHover={() => setHoveredStageId('ledgers')}
            onLeave={() => setHoveredStageId(null)}
            onClick={() => setActiveStageId('ledgers')}
            alignRight
          />
        </div>

        {/* ============================================================ */}
        {/* MAGIC UI ANIMATED BEAMS — Converging Left & Diverging Right */}
        {/* ============================================================ */}
        {/* Left 1 (Exam Setup) -> Center */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node1Ref}
          toRef={centerRef}
          curvature={-60}
          duration={3.5}
          gradientStartColor="#2563eb"
          gradientStopColor="#06b6d4"
          pathOpacity={hoveredStageId === 'setup' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'setup' ? 3 : 2}
        />

        {/* Left 2 (Question Ingestion) -> Center */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node2Ref}
          toRef={centerRef}
          curvature={0}
          duration={3.2}
          delay={0.4}
          gradientStartColor="#4f46e5"
          gradientStopColor="#06b6d4"
          pathOpacity={hoveredStageId === 'ingestion' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'ingestion' ? 3 : 2}
        />

        {/* Left 3 (Random Slips) -> Center */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={node3Ref}
          toRef={centerRef}
          curvature={60}
          duration={3.6}
          delay={0.8}
          gradientStartColor="#7c3aed"
          gradientStopColor="#06b6d4"
          pathOpacity={hoveredStageId === 'slips' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'slips' ? 3 : 2}
        />

        {/* Center -> Right 1 (Terminal Lockdown) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={node4Ref}
          curvature={-70}
          duration={3.4}
          delay={0.2}
          gradientStartColor="#06b6d4"
          gradientStopColor="#0ea5e9"
          pathOpacity={hoveredStageId === 'lockdown' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'lockdown' ? 3 : 2}
        />

        {/* Center -> Right 2 (Live Proctoring) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={node5Ref}
          curvature={-25}
          duration={3.2}
          delay={0.5}
          gradientStartColor="#06b6d4"
          gradientStopColor="#10b981"
          pathOpacity={hoveredStageId === 'proctoring' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'proctoring' ? 3 : 2}
        />

        {/* Center -> Right 3 (Instant Evaluation) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={node6Ref}
          curvature={25}
          duration={3.5}
          delay={0.7}
          gradientStartColor="#06b6d4"
          gradientStopColor="#f59e0b"
          pathOpacity={hoveredStageId === 'evaluation' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'evaluation' ? 3 : 2}
        />

        {/* Center -> Right 4 (Certified Ledgers) */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={node7Ref}
          curvature={70}
          duration={3.8}
          delay={0.9}
          gradientStartColor="#06b6d4"
          gradientStopColor="#e11d48"
          pathOpacity={hoveredStageId === 'ledgers' ? 0.6 : 0.25}
          pathWidth={hoveredStageId === 'ledgers' ? 3 : 2}
        />
      </div>

      {/* ============================================================ */}
      {/* DYNAMIC PIPELINE INSPECTOR CARD (Shows Details on Hover / Click) */}
      {/* ============================================================ */}
      <div className="w-full max-w-5xl mt-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 sm:p-6 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm border ${activeStage.badgeBg} ${activeStage.badgeBorder}`}
              >
                {activeStage.num}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {activeStage.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-semibold text-primary">
                    {activeStage.role}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
                  {activeStage.title}
                </h3>
              </div>
            </div>

            {/* Stepper Controls & Metric Badge */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                {activeStage.metric}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-semibold text-slate-500 px-2">
                  {activeStage.num === 'PWS' ? 'CORE' : `${activeStage.num} / 07`}
                </span>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                  aria-label="Next step"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Description & Key Highlights */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeStage.fullDesc}
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2">
              {activeStage.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded-lg"
                >
                  <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* Individual Circular Node Component */}
const NodeItem = React.forwardRef<
  HTMLDivElement,
  {
    stage: PipelineStage;
    isHovered: boolean;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
    alignRight?: boolean;
  }
>(({ stage, isHovered, isActive, onHover, onLeave, onClick, alignRight = false }, ref) => {
  const IconComponent = stage.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={`group relative flex items-center gap-3 cursor-pointer select-none ${
        alignRight ? 'flex-row-reverse text-right' : 'flex-row text-left'
      }`}
    >
      {/* Circle Icon Container */}
      <div
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 shadow-md flex items-center justify-center transition-all duration-300 shrink-0 ${
          isHovered || isActive
            ? 'border-primary shadow-lg scale-110 ring-4 ring-primary/10'
            : 'border-slate-200 hover:border-slate-300 hover:scale-105'
        }`}
      >
        <IconComponent
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
            isHovered || isActive ? stage.accentColor : 'text-slate-600'
          }`}
        />

        {/* Step Number Tag Pill */}
        <span
          className={`absolute -top-1.5 -right-1 text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded-full border shadow-2xs ${stage.badgeBg} ${stage.badgeBorder}`}
        >
          {stage.num}
        </span>
      </div>

      {/* Label Text beside the node */}
      <div className="hidden sm:block min-w-0 flex-1">
        <h4
          className={`text-xs font-bold leading-snug transition-colors ${
            isHovered || isActive ? 'text-primary' : 'text-slate-800'
          }`}
        >
          {stage.title}
        </h4>
        <p className="text-[10px] text-slate-400 font-medium">
          {stage.metric}
        </p>
      </div>

      {/* Floating Hover Details Card (Appears directly next to the node on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: alignRight ? 0 : 0, x: alignRight ? -10 : 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 w-64 sm:w-72 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl pointer-events-none text-left ${
              alignRight
                ? 'right-full mr-3 top-1/2 -translate-y-1/2'
                : 'left-full ml-3 top-1/2 -translate-y-1/2'
            }`}
          >
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-100">
              <span
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${stage.badgeBg} ${stage.badgeBorder}`}
              >
                STAGE {stage.num}
              </span>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {stage.metric}
              </span>
            </div>

            <h5 className="font-extrabold text-xs text-slate-900">{stage.title}</h5>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{stage.fullDesc}</p>

            <div className="mt-2.5 pt-2 border-t border-slate-100 space-y-1">
              {stage.highlights.slice(0, 2).map((h, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-500">
                  <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

NodeItem.displayName = 'NodeItem';
