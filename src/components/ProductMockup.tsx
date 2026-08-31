'use client';

import { useState } from 'react';
import {
  Monitor,
  CheckCircle,
  Users,
  Lock,
  Code,
  CheckSquare,
  FileSpreadsheet,
  Radio,
  Eye,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    id: 'admin',
    label: 'Admin Dashboard',
    role: 'College Administrator',
    title: 'Centralized College Overview & Instant Exam Analytics',
    description:
      'Manage all department faculty, oversee active lab batches in real time, and download verified student scores across semesters with zero manual compilation.',
  },
  {
    id: 'faculty',
    label: 'Faculty Dashboard',
    role: 'Teacher / Examiner',
    title: 'Instant Exam Creation & Batch Setup in Minutes',
    description:
      'Upload question banks, configure random digital slips, customize rules, and reuse semester templates across departments in just a few clicks.',
  },
  {
    id: 'live-monitoring',
    label: 'Live Monitoring',
    role: 'Faculty / Co-ordinators',
    badge: 'Live',
    title: 'Real-time Lab Surveillance & Heartbeat Tracking',
    description:
      'Monitor every workstation live from your seat. Observe student login status, tab-switch violations, and approval requests as they happen.',
  },
  {
    id: 'student-practical',
    label: 'Student Code IDE',
    role: 'Student Examination Interface',
    title: 'Locked Digital Practical Environment — Zero Paper',
    description:
      'Students receive a unique randomized digital slip, write and execute code directly in the locked environment, and attach output screenshots for grading.',
  },
  {
    id: 'mcq-exam',
    label: 'Automated MCQ Exam',
    role: 'Internal Assessment',
    title: 'Instant Evaluation & Auto-Scoring Engine',
    description:
      'Automatic randomized question selection to match assigned marks. Instant grading with auto-generated analytics upon student submission.',
  },
  {
    id: 'evaluation',
    label: 'Side-by-Side Grading',
    role: 'Faculty Evaluation',
    title: 'Frictionless Code & Output Evaluation',
    description:
      'Review question slips, student code, and execution output side-by-side. Enter marks and download complete attendance and score sheets instantly.',
  },
];

export default function ProductMockup() {
  const [activeTab, setActiveTab] = useState<string>('live-monitoring');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className="bg-navy-900 rounded-3xl p-4 sm:p-6 lg:p-8 text-white shadow-2xl border border-navy-700/80">
      {/* Tab Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin border-b border-navy-800">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-teal-500 text-navy-950 shadow-md font-bold'
                  : 'bg-navy-800/80 text-navy-300 hover:bg-navy-700 hover:text-white'
              }`}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Header for Active View */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">
            <span>{currentTab.role}</span>
            <span>•</span>
            <span className="text-navy-400">Confirmed PWS Interface Preview</span>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
            {currentTab.title}
          </h3>
          <p className="text-sm text-navy-300 max-w-3xl mt-1">
            {currentTab.description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-navy-400 bg-navy-800/60 px-3.5 py-2 rounded-xl border border-navy-700 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Safe Exam Browser Enforced</span>
        </div>
      </div>

      {/* Browser/Dashboard Shell Window */}
      <div className="bg-navy-950 rounded-2xl border border-navy-700 overflow-hidden shadow-2xl">
        {/* Window Chrome Header */}
        <div className="bg-navy-900/90 px-4 py-3 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-xs text-navy-400 font-mono ml-2 hidden sm:inline">
              pws.nextsolves.internal/{activeTab}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-navy-400">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-teal-400" /> Multi-Tenant Encrypted
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40 text-[10px] font-semibold">
              LIVE SESSION
            </span>
          </div>
        </div>

        {/* Dynamic Mockup Body */}
        <div className="p-4 sm:p-6 lg:p-8 min-h-[420px] bg-slate-950/80">
          <AnimatePresence mode="wait">
            {activeTab === 'live-monitoring' && (
              <motion.div
                key="live-monitoring"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Live stats strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-navy-900 p-3.5 rounded-xl border border-navy-800">
                    <div className="text-[11px] text-navy-400 uppercase font-semibold">Active Students</div>
                    <div className="text-xl font-bold text-white mt-0.5">58 / 60</div>
                    <span className="text-[10px] text-emerald-400">96.6% Logged In</span>
                  </div>
                  <div className="bg-navy-900 p-3.5 rounded-xl border border-navy-800">
                    <div className="text-[11px] text-navy-400 uppercase font-semibold">Submissions</div>
                    <div className="text-xl font-bold text-teal-400 mt-0.5">42 Verified</div>
                    <span className="text-[10px] text-navy-400">16 In Progress</span>
                  </div>
                  <div className="bg-navy-900 p-3.5 rounded-xl border border-navy-800">
                    <div className="text-[11px] text-navy-400 uppercase font-semibold">Tab-Switch Warnings</div>
                    <div className="text-xl font-bold text-amber-400 mt-0.5">0 Active</div>
                    <span className="text-[10px] text-emerald-400">Monotonic Heartbeat OK</span>
                  </div>
                  <div className="bg-navy-900 p-3.5 rounded-xl border border-navy-800">
                    <div className="text-[11px] text-navy-400 uppercase font-semibold">Exam Timer</div>
                    <div className="text-xl font-bold text-white mt-0.5 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-400" /> 00:42:18
                    </div>
                    <span className="text-[10px] text-navy-400">Batch 1 — IT Lab A</span>
                  </div>
                </div>

                {/* Workstation Grid Mockup */}
                <div className="bg-navy-900/60 rounded-xl border border-navy-800 p-4">
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-navy-300">Live Workstation Grid (Lab 102)</span>
                    <span className="text-navy-400">Auto-Attendance: Synchronized</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                    {[
                      { seat: 'WS-01', roll: '101', slip: 'Slip #04', status: 'Approved', color: 'emerald' },
                      { seat: 'WS-02', roll: '102', slip: 'Slip #12', status: 'Coding', color: 'teal' },
                      { seat: 'WS-03', roll: '103', slip: 'Slip #09', status: 'Approval Req.', color: 'amber' },
                      { seat: 'WS-04', roll: '104', slip: 'Slip #01', status: 'Coding', color: 'teal' },
                      { seat: 'WS-05', roll: '105', slip: 'Slip #18', status: 'Approved', color: 'emerald' },
                      { seat: 'WS-06', roll: '106', slip: 'Slip #07', status: 'Output Attached', color: 'sky' },
                    ].map((w, idx) => (
                      <div
                        key={idx}
                        className="bg-navy-950 p-3 rounded-lg border border-navy-800 hover:border-teal-500/50 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-bold text-white">{w.seat}</span>
                          <span className="text-navy-400 text-[10px]">Roll {w.roll}</span>
                        </div>
                        <div className="text-[10px] text-teal-300 font-mono mt-1">{w.slip}</div>
                        <div className="mt-2 text-[10px] flex items-center gap-1 font-medium">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              w.color === 'emerald'
                                ? 'bg-emerald-400'
                                : w.color === 'amber'
                                ? 'bg-amber-400'
                                : 'bg-teal-400'
                            }`}
                          ></span>
                          <span className="text-navy-300 truncate">{w.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'student-practical' && (
              <motion.div
                key="student-practical"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 font-mono text-xs"
              >
                {/* Left: Random Digital Slip */}
                <div className="md:col-span-5 bg-navy-900 p-4 rounded-xl border border-navy-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-navy-400 pb-2 border-b border-navy-800">
                      <span className="text-teal-400 font-bold">DIGITAL SLIP #04</span>
                      <span>Marks: 30</span>
                    </div>
                    <div className="mt-3 text-navy-200 font-sans text-xs leading-relaxed space-y-2">
                      <p className="font-semibold text-white">Q1. Data Structures Practical:</p>
                      <p>
                        Write a C++/Python program to implement a balanced Binary Search Tree (AVL Tree). Perform insertion, deletion, and inorder traversal.
                      </p>
                      <div className="bg-navy-950 p-2.5 rounded border border-navy-800 text-[11px] text-navy-300">
                        <span className="text-teal-400 font-bold">Requirement:</span> Handle rotation cases (LL, RR, LR, RL) and print the height after each insertion.
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-navy-400">Locked Environment Active</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      <Lock className="w-3 h-3" /> External Tools Blocked
                    </span>
                  </div>
                </div>

                {/* Right: Code Input & Output Upload */}
                <div className="md:col-span-7 bg-navy-900 p-4 rounded-xl border border-navy-800 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-navy-400 pb-2 border-b border-navy-800">
                      <span className="text-navy-300">Solution Editor (Direct Code Entry)</span>
                      <span className="text-teal-400 font-bold">Language: Python 3</span>
                    </div>
                    <div className="mt-2 bg-navy-950 p-3 rounded-lg border border-navy-800 text-teal-300 text-[11px] font-mono leading-tight overflow-x-auto">
                      <p><span className="text-purple-400">class</span> <span className="text-amber-300">Node</span>:</p>
                      <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">__init__</span>(self, key):</p>
                      <p className="pl-8">self.key = key</p>
                      <p className="pl-8">self.left = None</p>
                      <p className="pl-8">self.right = None</p>
                      <p className="pl-8">self.height = 1</p>
                      <p className="mt-1"><span className="text-navy-500"># Auto-saved 10s ago...</span></p>
                    </div>
                  </div>
                  <div className="bg-navy-950 p-2.5 rounded-lg border border-navy-800 flex items-center justify-between font-sans text-[11px]">
                    <span className="text-navy-300">Output Screenshot Attached (avl_output.png)</span>
                    <button className="px-3 py-1 bg-teal-500 text-navy-950 font-bold rounded hover:bg-teal-400 transition-colors">
                      Request Teacher Approval
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'admin' && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-navy-900 p-4 rounded-xl border border-navy-800">
                    <div className="text-xs text-navy-400">Total Department Faculty</div>
                    <div className="text-2xl font-bold text-white mt-1">24 Active</div>
                    <span className="text-[11px] text-teal-400">CS, IT, DS Departments</span>
                  </div>
                  <div className="bg-navy-900 p-4 rounded-xl border border-navy-800">
                    <div className="text-xs text-navy-400">Examinations Conducted</div>
                    <div className="text-2xl font-bold text-teal-400 mt-1">142 Sem Exams</div>
                    <span className="text-[11px] text-emerald-400">100% Zero-Paper</span>
                  </div>
                  <div className="bg-navy-900 p-4 rounded-xl border border-navy-800">
                    <div className="text-xs text-navy-400">Central Storage Integrity</div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">Encrypted</div>
                    <span className="text-[11px] text-navy-400">Instant Excel / PDF Export</span>
                  </div>
                </div>

                <div className="bg-navy-900 rounded-xl border border-navy-800 p-4">
                  <div className="text-xs font-semibold text-navy-300 mb-3">
                    Recent Examination Batches & Instant Marksheets
                  </div>
                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Semester IV Practical Exam (Batch A)', faculty: 'Prof. S. Kapadia', students: 60, status: 'Results Generated', date: 'Today' },
                      { name: 'Semester VI Internal Assessment (MCQ)', faculty: 'Prof. N. Gole', students: 120, status: 'Auto-Graded', date: 'Yesterday' },
                      { name: 'Data Structures Lab Final', faculty: 'Prof. A. Sharma', students: 58, status: 'Completed', date: '25 March 2026' },
                    ].map((row, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-navy-950 rounded-lg border border-navy-800/80 gap-2">
                        <div>
                          <div className="font-semibold text-white">{row.name}</div>
                          <div className="text-[11px] text-navy-400">{row.faculty} • {row.students} Students</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 bg-emerald-950/60 rounded border border-emerald-800/40">
                            {row.status}
                          </span>
                          <button className="text-[11px] text-teal-300 hover:text-white flex items-center gap-1 font-medium">
                            <FileSpreadsheet className="w-3.5 h-3.5" /> Export
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'faculty' && (
              <motion.div
                key="faculty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="bg-navy-900 p-5 rounded-xl border border-navy-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-navy-800 gap-3">
                    <div>
                      <h4 className="font-bold text-white text-sm">Exam Setup & Question Bank Manager</h4>
                      <p className="text-xs text-navy-400">Configure random digital slips, templates, and student roster.</p>
                    </div>
                    <button className="px-4 py-2 bg-teal-500 text-navy-950 font-bold text-xs rounded-lg hover:bg-teal-400 transition-colors">
                      + Launch New Exam
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-xs">
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800">
                      <div className="text-teal-400 font-bold mb-1">1. Upload Question Bank</div>
                      <p className="text-navy-400 text-[11px]">CSV / Word / Excel bank analyzed and parsed automatically.</p>
                    </div>
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800">
                      <div className="text-teal-400 font-bold mb-1">2. Auto-Randomize Slips</div>
                      <p className="text-navy-400 text-[11px]">System generates unique balanced digital slips for each student.</p>
                    </div>
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800">
                      <div className="text-teal-400 font-bold mb-1">3. Reusable Templates</div>
                      <p className="text-navy-400 text-[11px]">Save setup & share with colleagues across departments.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'mcq-exam' && (
              <motion.div
                key="mcq-exam"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="bg-navy-900 p-5 rounded-xl border border-navy-800">
                  <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-xs">
                    <span className="font-bold text-white">Internal Assessment Auto-Scoring Engine</span>
                    <span className="text-emerald-400 font-semibold">100% Automated Grading</span>
                  </div>
                  <div className="mt-4 space-y-2 text-xs">
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800 flex items-center justify-between">
                      <div>
                        <span className="text-white font-semibold">Q12. What is the time complexity of AVL Tree search?</span>
                        <div className="text-[11px] text-teal-400 mt-1 font-mono">Answer: O(log n) • Correctly Evaluated</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">+2.0 / 2.0</span>
                    </div>
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800 flex items-center justify-between">
                      <div>
                        <span className="text-white font-semibold">Q13. In Firestore, security rules execute on:</span>
                        <div className="text-[11px] text-teal-400 mt-1 font-mono">Answer: Server-side validation • Correctly Evaluated</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-sm">+2.0 / 2.0</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'evaluation' && (
              <motion.div
                key="evaluation"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="bg-navy-900 p-5 rounded-xl border border-navy-800">
                  <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-xs">
                    <span className="font-bold text-white">Side-by-Side Examiner Grading Console</span>
                    <span className="text-teal-400 font-mono">Roll: 104 • Aditi S.</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 text-xs">
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800">
                      <div className="text-navy-400 font-semibold mb-1">Student Code & Output:</div>
                      <div className="font-mono text-[11px] text-teal-300 bg-navy-900 p-2 rounded">
                        // Verified compiled output attached<br />
                        AVL Tree Inorder: [12, 24, 36, 48, 60]
                      </div>
                    </div>
                    <div className="p-3 bg-navy-950 rounded-lg border border-navy-800 flex flex-col justify-between">
                      <div>
                        <div className="text-navy-400 font-semibold mb-1">Assign Marks:</div>
                        <div className="flex items-center gap-2 mt-2">
                          <input
                            type="number"
                            defaultValue={28}
                            max={30}
                            className="w-16 px-2 py-1 bg-navy-900 border border-navy-700 rounded text-white font-bold text-center"
                          />
                          <span className="text-navy-400">/ 30 Marks</span>
                        </div>
                      </div>
                      <button className="mt-3 w-full py-1.5 bg-emerald-600 text-white font-bold rounded hover:bg-emerald-500 transition-colors">
                        Approve & Submit Marks
                      </button>
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
