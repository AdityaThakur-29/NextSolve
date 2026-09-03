'use client';

import { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  Clock,
  CheckCircle2,
  FileSpreadsheet,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Users,
  CheckSquare,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  role: string;
  description: string;
  title: string;
}

export const tabs: TabItem[] = [
  {
    id: 'live-monitoring',
    label: 'Live Lab Surveillance',
    role: 'Faculty / Examiner View',
    badge: 'Live',
    title: 'Real-Time Lab Workstation Surveillance & Heartbeats',
    description:
      'Supervise every student workstation simultaneously. Detect tab-switching violations, observe real-time heartbeats, and approve submissions without leaving your seat.',
  },
  {
    id: 'student-practical',
    label: 'Student Code IDE',
    role: 'Student Examination Interface',
    title: 'Locked Digital Practical Environment — 100% Zero Paper',
    description:
      'Students receive a randomized digital question slip, write and run code directly in the locked environment, and attach output screenshots for grading.',
  },
  {
    id: 'evaluation',
    label: 'Side-by-Side Grading',
    role: 'Teacher Evaluation Console',
    title: 'Frictionless Code & Output Evaluation Console',
    description:
      'Review question slips, student code, and execution outputs side-by-side. Grade with one click and export university-compliant mark sheets.',
  },
  {
    id: 'admin',
    label: 'Admin Overview',
    role: 'College Administrator',
    title: 'Centralized College Exam Governance & Instant Analytics',
    description:
      'Monitor all department examinations in real time, oversee active batches across campus labs, and export permanent encrypted digital records.',
  },
  {
    id: 'mcq-exam',
    label: 'Automated MCQ Engine',
    role: 'Internal Assessment',
    title: 'Automated Evaluation & Auto-Scoring Engine',
    description:
      'Randomized question selection to match marks criteria. Automatic grading with auto-generated analytics upon student submission.',
  },
];

export default function ProductMockup() {
  const [activeTab, setActiveTab] = useState<string>('live-monitoring');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="rounded-3xl border border-slate-200/90 bg-white p-3.5 sm:p-6 lg:p-7 shadow-xl">
      {/* Mobile Swipe Cue */}
      <div className="sm:hidden flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-2 px-1">
        <span>Tap tabs to switch view</span>
        <span className="text-primary flex items-center gap-1 font-bold">Swipe tabs →</span>
      </div>

      {/* Top Segmented Tab Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-4 border-b border-slate-100 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-primary text-white shadow-sm font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Header Context for Active View */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
            <span>{currentTab.role}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 normal-case font-medium">Interactive PWS Software Simulation</span>
          </div>
          <h3 className="text-base sm:text-xl font-bold text-slate-900">
            {currentTab.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mt-1 leading-relaxed">
            {currentTab.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 self-start sm:self-auto shrink-0">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Safe Exam Browser Enforced</span>
        </div>
      </div>

      {/* Modern Light SaaS Application Window Shell (macOS titlebar) */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-sm">
        {/* Window Chrome Header */}
        <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="text-[11px] text-slate-500 font-mono ml-2 hidden sm:inline px-2.5 py-0.5 bg-white rounded-md border border-slate-200/70 shadow-2xs">
              https://pws.nextsolves.edu/{activeTab}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1 text-[11px] text-slate-500">
              <Lock className="w-3 h-3 text-primary" /> Multi-Tenant 256-Bit
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              ACTIVE SESSION
            </span>
          </div>
        </div>

        {/* Dynamic Mockup Body */}
        <div className="p-4 sm:p-6 bg-white min-h-[380px]">
          <AnimatePresence mode="wait">
            {/* VIEW 1: Live Lab Surveillance */}
            {activeTab === 'live-monitoring' && (
              <motion.div
                key="live-monitoring"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-4"
              >
                {/* Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Active Students
                    </span>
                    <div className="text-xl font-bold text-slate-900 mt-0.5">58 / 60</div>
                    <span className="text-[10px] font-semibold text-emerald-600">96.6% Attendance Synced</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Submissions
                    </span>
                    <div className="text-xl font-bold text-primary mt-0.5">42 Verified</div>
                    <span className="text-[10px] text-slate-500">16 In Progress</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Malpractice Alerts
                    </span>
                    <div className="text-xl font-bold text-slate-900 mt-0.5">0 Active</div>
                    <span className="text-[10px] font-semibold text-emerald-600">Heartbeat Enforced</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                      Session Timer
                    </span>
                    <div className="text-xl font-bold text-slate-900 mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" /> 00:42:18
                    </div>
                    <span className="text-[10px] text-slate-500">Lab 102 — Batch A</span>
                  </div>
                </div>

                {/* Workstations Grid */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/40 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-bold text-slate-800">
                      Live Workstation Statuses (Lab 102)
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> All Terminals Healthy
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                    {[
                      { seat: 'WS-01', roll: '101', slip: 'Slip #04', status: 'Approved', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                      { seat: 'WS-02', roll: '102', slip: 'Slip #12', status: 'Writing Code', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
                      { seat: 'WS-03', roll: '103', slip: 'Slip #09', status: 'Approval Req.', badge: 'bg-amber-50 text-amber-700 border-amber-200' },
                      { seat: 'WS-04', roll: '104', slip: 'Slip #01', status: 'Writing Code', badge: 'bg-blue-50 text-blue-700 border-blue-200' },
                      { seat: 'WS-05', roll: '105', slip: 'Slip #18', status: 'Approved', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                      { seat: 'WS-06', roll: '106', slip: 'Slip #07', status: 'Output Uploaded', badge: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
                    ].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900">{w.seat}</span>
                          <span className="text-slate-400 text-[10px]">Roll {w.roll}</span>
                        </div>
                        <div className="text-[11px] text-primary font-mono font-medium mt-1">
                          {w.slip}
                        </div>
                        <div className="mt-2">
                          <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full border ${w.badge}`}>
                            {w.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Real-Time Terminal Audit Stream with Magic UI Progressive Blur */}
                <div className="relative rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs font-mono overflow-hidden">
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800 text-[11px]">
                    <span className="flex items-center gap-2 text-emerald-400 font-semibold truncate">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                      <span className="truncate">Terminal Heartbeat Audit Stream</span>
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700/60 font-sans shrink-0">
                      <span className="hidden sm:inline">Scroll to view all</span>
                      <span className="sm:hidden">Swipe to view log</span>
                    </span>
                  </div>
                  
                  {/* Scrollable Event Log */}
                  <div className="max-h-36 overflow-y-auto space-y-2 pr-1 text-slate-300 text-[11px] leading-relaxed">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">[10:42:18] WS-01 (Roll 101)</span>
                      <span className="text-slate-400">Question Slip #04 verified • Monotonic heartbeat 18ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400">[10:42:15] WS-02 (Roll 102)</span>
                      <span className="text-slate-400">Code snapshot compiled • Python 3.11 AVL Tree</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400">[10:42:11] WS-03 (Roll 103)</span>
                      <span className="text-slate-400">Submission approval requested • Waiting for faculty signoff</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">[10:42:09] WS-04 (Roll 104)</span>
                      <span className="text-slate-400">Safe Exam Browser locked • Clipboard access blocked</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-400">[10:42:04] WS-05 (Roll 105)</span>
                      <span className="text-slate-400">Marks ledger recorded • 28/30 certified to DB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400">[10:41:58] WS-06 (Roll 106)</span>
                      <span className="text-slate-400">Output screenshot avl_result.png attached & hashed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">[10:41:50] SERVER AUDIT</span>
                      <span className="text-slate-400">Batch 102 cryptographic signature generated</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400">[10:41:45] WS-07 (Roll 107)</span>
                      <span className="text-slate-400">Student terminal session verified • 0 tab switches</span>
                    </div>
                  </div>

                  {/* Magic UI Progressive Blur fading the scrollable logs at bottom */}
                  <ProgressiveBlur
                    position="bottom"
                    height="50px"
                    className="pointer-events-none"
                    blurLevels={[0.5, 1, 2, 4, 8, 16, 24, 32]}
                  />
                </div>
              </motion.div>
            )}

            {/* VIEW 2: Student Practical Code IDE */}
            {activeTab === 'student-practical' && (
              <motion.div
                key="student-practical"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs"
              >
                {/* Left: Digital Slip */}
                <div className="md:col-span-5 bg-slate-50/70 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                      <span className="text-primary font-bold">DIGITAL QUESTION SLIP #04</span>
                      <span className="font-mono font-bold text-slate-700">Max Marks: 30</span>
                    </div>
                    <div className="mt-3 text-slate-700 space-y-2 leading-relaxed">
                      <p className="font-bold text-slate-900">Q1. Data Structures & Algorithms Practical:</p>
                      <p className="text-slate-600">
                        Implement a balanced Binary Search Tree (AVL Tree) in Python/C++. Write methods for node insertion, height balancing, and inorder traversal.
                      </p>
                      <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-slate-600 text-[11px]">
                        <span className="font-bold text-primary">Requirement:</span> Handle rotations (LL, RR, LR, RL) and display height after insertion.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">Locked Exam Window</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Clipboard & DevTools Blocked
                    </span>
                  </div>
                </div>

                {/* Right: Code Editor */}
                <div className="md:col-span-7 bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-primary" /> Solution IDE (Direct Entry)
                      </span>
                      <span className="font-mono text-primary font-semibold">Python 3.11</span>
                    </div>
                    <div className="relative mt-2 bg-slate-950 p-3.5 rounded-lg text-emerald-300 font-mono text-[11px] leading-relaxed overflow-hidden">
                      <div className="max-h-44 overflow-y-auto space-y-0.5 pr-2">
                        <p><span className="text-purple-400 font-bold">class</span> <span className="text-amber-300">AVLNode</span>:</p>
                        <p className="pl-4"><span className="text-purple-400 font-bold">def</span> <span className="text-blue-300">__init__</span>(self, key):</p>
                        <p className="pl-8 text-slate-300">self.key = key</p>
                        <p className="pl-8 text-slate-300">self.left = None</p>
                        <p className="pl-8 text-slate-300">self.right = None</p>
                        <p className="pl-8 text-slate-300">self.height = 1</p>
                        <p className="mt-2"><span className="text-purple-400 font-bold">def</span> <span className="text-blue-300">get_height</span>(node):</p>
                        <p className="pl-4 text-slate-300">if not node: return 0</p>
                        <p className="pl-4 text-slate-300">return node.height</p>
                        <p className="mt-2"><span className="text-purple-400 font-bold">def</span> <span className="text-blue-300">get_balance</span>(node):</p>
                        <p className="pl-4 text-slate-300">if not node: return 0</p>
                        <p className="pl-4 text-slate-300">return get_height(node.left) - get_height(node.right)</p>
                        <p className="mt-2"><span className="text-purple-400 font-bold">def</span> <span className="text-blue-300">rotate_right</span>(y):</p>
                        <p className="pl-4 text-slate-300">x = y.left; T2 = x.right</p>
                        <p className="pl-4 text-slate-300">x.right = y; y.left = T2</p>
                        <p className="pl-4 text-slate-300">y.height = 1 + max(get_height(y.left), get_height(y.right))</p>
                        <p className="pl-4 text-slate-300">x.height = 1 + max(get_height(x.left), get_height(x.right))</p>
                        <p className="pl-4 text-slate-300">return x</p>
                        <p className="mt-2 text-slate-400 font-sans text-[10px]"># Auto-saved to institutional encrypted storage (Hash: SHA256:8f4c...)</p>
                      </div>

                      <ProgressiveBlur
                        position="bottom"
                        height="50px"
                        className="pointer-events-none"
                        blurLevels={[0.5, 1, 2, 4, 8, 16, 24, 32]}
                      />
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 font-medium">Output Attached: avl_result.png</span>
                    <button className="px-3.5 py-1.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-hover transition-colors shadow-2xs">
                      Submit for Grading
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: Side-by-Side Grading Console */}
            {activeTab === 'evaluation' && (
              <motion.div
                key="evaluation"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 text-xs"
              >
                <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-bold text-slate-900 text-sm">Examiner Evaluation Console</span>
                    <span className="text-primary font-mono font-bold">Roll: 104 • Aditi Sharma</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <div className="text-slate-500 font-semibold mb-1">Student Executed Output:</div>
                      <div className="font-mono text-[11px] text-slate-800 bg-slate-50 p-2.5 rounded border border-slate-100">
                        {`// Verified compiled execution output:`}
                        <br />
                        AVL Inorder: [12, 24, 36, 48, 60]
                        <br />
                        Tree Balance Factor: 0 (Balanced)
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="text-slate-500 font-semibold mb-1">Enter Marks (Max 30):</div>
                        <div className="flex items-center gap-2 mt-2">
                          <input
                            type="number"
                            defaultValue={28}
                            max={30}
                            className="w-16 px-2.5 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-bold text-center"
                          />
                          <span className="text-slate-500 font-medium">/ 30 Marks</span>
                        </div>
                      </div>
                      <button className="mt-3 w-full py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-2xs">
                        Confirm & Grade Next Student
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 4: Admin Governance */}
            {activeTab === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold">
                      Total Department Exams
                    </span>
                    <div className="text-2xl font-bold text-slate-900 mt-1">24 Conducted</div>
                    <span className="text-[10px] text-emerald-600 font-semibold">100% Zero Paper Consumed</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold">
                      Verified Students
                    </span>
                    <div className="text-2xl font-bold text-primary mt-1">2,500+</div>
                    <span className="text-[10px] text-slate-500">Across CS, IT & Engineering</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold">
                      Institutional Savings
                    </span>
                    <div className="text-2xl font-bold text-emerald-600 mt-1">₹1,75,000+</div>
                    <span className="text-[10px] text-slate-500">Per Academic Year</span>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-slate-900">Permanent University Mark Sheet Export</span>
                    <p className="text-slate-500 text-[11px] mt-0.5">Generate certified Excel & PDF result ledgers in seconds.</p>
                  </div>
                  <button className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 shrink-0">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-400" /> Export All (Excel)
                  </button>
                </div>
              </motion.div>
            )}

            {/* VIEW 5: Automated MCQ Engine */}
            {activeTab === 'mcq-exam' && (
              <motion.div
                key="mcq-exam"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="space-y-4 text-xs"
              >
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-bold text-slate-900 text-sm">Automated MCQ Grading Engine</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Auto-Grading 100% Complete
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-500">Batch Average Score</span>
                      <div className="text-lg font-bold text-slate-900 mt-1">24.6 / 30</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-500">Highest Score</span>
                      <div className="text-lg font-bold text-primary mt-1">30 / 30 (Perfect)</div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <span className="text-slate-500">Evaluation Delay</span>
                      <div className="text-lg font-bold text-emerald-600 mt-1">0.4 Seconds</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
