import { LucideIcon, FileText, Shuffle, Monitor, CheckSquare, Code, UserCheck, Lock, Eye, ClipboardList, Radio, LayoutTemplate, Settings, Users, Database } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: FeatureCategory;
}

export type FeatureCategory =
  | 'exam-creation'
  | 'question-distribution'
  | 'exam-delivery'
  | 'monitoring'
  | 'evaluation'
  | 'administration'
  | 'integrity'
  | 'collaboration';

export const featureCategories: Record<FeatureCategory, { label: string; description: string }> = {
  'exam-creation': {
    label: 'Exam Creation',
    description: 'Set up and configure examinations with ease.',
  },
  'question-distribution': {
    label: 'Question Distribution',
    description: 'Automated, randomized digital question delivery.',
  },
  'exam-delivery': {
    label: 'Exam Delivery',
    description: 'Digital practical and internal examination workflows.',
  },
  monitoring: {
    label: 'Monitoring',
    description: 'Real-time visibility into examination activity.',
  },
  evaluation: {
    label: 'Evaluation',
    description: 'Streamlined grading and result generation.',
  },
  administration: {
    label: 'Administration',
    description: 'Centralized institutional data and management.',
  },
  integrity: {
    label: 'Integrity',
    description: 'Controls to protect examination fairness.',
  },
  collaboration: {
    label: 'Collaboration',
    description: 'Faculty tools for sharing and teamwork.',
  },
};

export const features: Feature[] = [
  {
    id: 'instant-exam-automation',
    title: 'Instant Exam Automation',
    description:
      'Teachers log in, create an exam, and launch it within minutes — turning hours of tedious work into a quick, frictionless process.',
    icon: 'FileText',
    category: 'exam-creation',
  },
  {
    id: 'question-bank-upload',
    title: 'Question Bank Upload',
    description:
      'Upload question banks and let the software automatically analyze and prepare them for distribution.',
    icon: 'Database',
    category: 'exam-creation',
  },
  {
    id: 'reusable-templates',
    title: 'Reusable Exam Templates',
    description:
      'Create a single template and reuse it for similar exams repeatedly, saving setup time across semesters.',
    icon: 'LayoutTemplate',
    category: 'exam-creation',
  },
  {
    id: 'random-question-distribution',
    title: 'Random Digital Question Distribution',
    description:
      'Questions are automatically analyzed and randomly distributed to students as digital slips — replicating traditional randomness in a fully digital format.',
    icon: 'Shuffle',
    category: 'question-distribution',
  },
  {
    id: 'slip-management',
    title: 'Question Slip Management',
    description:
      'Teachers can change assigned slips or manually assign specific questions to individual students when needed.',
    icon: 'Settings',
    category: 'question-distribution',
  },
  {
    id: 'digital-practical-exam',
    title: 'Digital Practical Examination',
    description:
      'Students write code directly into the system and upload outputs — eliminating the redundant work of writing code on paper.',
    icon: 'Code',
    category: 'exam-delivery',
  },
  {
    id: 'digital-internal-mcq',
    title: 'Digital Internal (MCQ) Exams',
    description:
      'Upload MCQ question banks. The software randomly selects questions to fulfill total marks and distributes them to students automatically.',
    icon: 'CheckSquare',
    category: 'exam-delivery',
  },
  {
    id: 'live-dashboard',
    title: 'Live Dashboard',
    description:
      'A real-time dashboard displays student activity, submission status, and examination progress — all visible from the teacher\'s screen.',
    icon: 'Monitor',
    category: 'monitoring',
  },
  {
    id: 'live-monitoring',
    title: 'Live Monitoring',
    description:
      'Teachers monitor ongoing exams without leaving their seat. View student code, outputs, and approval requests in real time.',
    icon: 'Radio',
    category: 'monitoring',
  },
  {
    id: 'automated-mcq-evaluation',
    title: 'Automated MCQ Evaluation',
    description:
      'For internal exams, the software automatically evaluates correct and incorrect answers and assigns marks instantly upon submission.',
    icon: 'CheckSquare',
    category: 'evaluation',
  },
  {
    id: 'automated-attendance',
    title: 'Automated Attendance',
    description:
      'As soon as a student logs into the exam, they are automatically marked present — no manual attendance sheets required.',
    icon: 'UserCheck',
    category: 'administration',
  },
  {
    id: 'student-management',
    title: 'Student Management',
    description:
      'Manage student lists, add missing students to live exams, and maintain centralized records across examinations.',
    icon: 'Users',
    category: 'administration',
  },
  {
    id: 'locked-environment',
    title: 'Locked Examination Environment',
    description:
      'Exams are conducted in a locked digital environment. Students cannot access external applications, ensuring a controlled examination.',
    icon: 'Lock',
    category: 'integrity',
  },
  {
    id: 'tab-switch-tracking',
    title: 'Tab-Switch Tracking & Audit Logs',
    description:
      'Server-enforced monotonic heartbeat prevents bypassing tab-switch tracking. All critical actions are logged in a tamper-proof audit system.',
    icon: 'Eye',
    category: 'integrity',
  },
  {
    id: 'template-sharing',
    title: 'Template Sharing',
    description:
      'Share created exam templates with other teachers, saving preparation time across the entire faculty.',
    icon: 'Users',
    category: 'collaboration',
  },
  {
    id: 'live-session-sharing',
    title: 'Live Session Sharing & Remote Monitoring',
    description:
      'Share live exam sessions with colleagues. Another teacher can act as a moderator and monitor the exam from anywhere.',
    icon: 'Radio',
    category: 'collaboration',
  },
];
