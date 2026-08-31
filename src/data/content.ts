export const stats = [
  {
    id: 'students-served',
    value: 2500,
    suffix: '+',
    label: 'Students Served',
  },
  {
    id: 'user-rating',
    value: 4.5,
    suffix: '★',
    label: 'User Feedback Rating',
  },
  {
    id: 'paper-eliminated',
    value: 100,
    suffix: '%',
    label: 'Paperless Workflow',
  },
  {
    id: 'deployment',
    value: 1,
    suffix: '',
    label: 'Year of Active Deployment',
  },
];

export const pillars = [
  {
    id: 'paperless',
    title: 'Paperless',
    description:
      'Move examination and campus workflows away from physical documentation into a clean digital environment.',
    icon: 'FileX2',
  },
  {
    id: 'reliable',
    title: 'Reliable',
    description:
      'Built around dependable digital workflows for critical academic operations.',
    icon: 'ShieldCheck',
  },
  {
    id: 'secure',
    title: 'Secure',
    description:
      'Strong access controls and security mechanisms protect sensitive academic information and examination materials.',
    icon: 'Lock',
  },
  {
    id: 'efficient',
    title: 'Efficient',
    description:
      'Reduce repetitive administrative work and save valuable institutional time and resources.',
    icon: 'Zap',
  },
];

export const traditionalWorkflow = [
  { step: 'Create Question Paper', icon: 'FileText', pain: 'Hours of manual preparation' },
  { step: 'Print & Distribute', icon: 'Printer', pain: 'Paper costs, logistics' },
  { step: 'Physical Question Slips', icon: 'Scissors', pain: 'Manual cutting & shuffling' },
  { step: 'Paper-Based Practical', icon: 'PenTool', pain: 'Writing code on paper' },
  { step: 'Manual Attendance', icon: 'ClipboardList', pain: 'Time-consuming rollcalls' },
  { step: 'Manual Checking', icon: 'Search', pain: 'Weekends spent grading' },
  { step: 'Manual Data Entry', icon: 'Keyboard', pain: 'Error-prone, repetitive' },
  { step: 'Results', icon: 'BarChart3', pain: 'Weeks of delay' },
];

export const pwsWorkflow = [
  { step: 'Create / Configure Exam', description: 'Log in and set up an exam in minutes. Upload question bank and student list.', icon: 'Settings' },
  { step: 'Upload & Manage Questions', description: 'Upload question bank. System automatically analyzes and prepares questions.', icon: 'Upload' },
  { step: 'Assign Digital Question Slips', description: 'Questions are randomly distributed as digital slips to each student.', icon: 'Shuffle' },
  { step: 'Students Enter Exam', description: 'Students log in to the locked digital environment. Attendance is automatic.', icon: 'LogIn' },
  { step: 'Monitor Live Activity', description: 'View real-time dashboard showing student progress and exam status.', icon: 'Monitor' },
  { step: 'Evaluate', description: 'Review code and outputs side-by-side. MCQs are graded automatically.', icon: 'CheckCircle' },
  { step: 'Results Available', description: 'Download attendance sheets and final results instantly.', icon: 'Download' },
];

export const comparisonData = {
  headers: ['Aspect', 'Traditional', 'With PWS'],
  rows: [
    ['Documentation', 'Paper-based', 'Fully digital'],
    ['Exam Setup', 'Hours of manual work', 'Minutes, automated'],
    ['Question Slips', 'Physical, manually cut', 'Randomized digital slips'],
    ['Attendance', 'Manual rollcall', 'Automatic on login'],
    ['Practical Exams', 'Code on paper', 'Code directly in system'],
    ['MCQ Evaluation', 'Manual checking', 'Instant automated grading'],
    ['Exam Integrity', 'Difficult to monitor', 'Locked environment + audit logs'],
    ['Results', 'Weeks of processing', 'Available within seconds'],
    ['Records', 'Fragmented, can be lost', 'Centralized digital storage'],
    ['Administrative Load', 'High overhead', 'Significantly reduced'],
  ],
};

export const securityFeatures = [
  {
    id: 'auth',
    title: 'Authentication & Authorization',
    description: 'Strict Role-Based Access Control (RBAC), Firebase ID Token verification for backend endpoints, and multi-tenant isolation ensuring users can only access their own college\'s data.',
    icon: 'KeyRound',
  },
  {
    id: 'database',
    title: 'Database Security',
    description: 'Highly scoped access rules enforce that users can only read and write to their specific documents. Critical actions enforce state-machine integrity and server-side validation.',
    icon: 'Database',
  },
  {
    id: 'storage',
    title: 'Storage Security',
    description: 'Prevention of path traversal vulnerabilities, strict MIME-type and size limits on uploads, and restricted read/write ownership.',
    icon: 'HardDrive',
  },
  {
    id: 'network',
    title: 'Network Security',
    description: 'Strict CORS policies, aggressive rate-limiting on sensitive endpoints to prevent DDoS and brute-forcing attacks, and HTML sanitization for email templates.',
    icon: 'Shield',
  },
  {
    id: 'anti-cheating',
    title: 'Anti-Cheating & Auditing',
    description: 'Tamper-proof server-side audit logging, "soft delete" architecture to prevent permanent data loss, atomic transactions for critical actions, and server-enforced monotonic heartbeat to prevent bypassing tab-switch tracking.',
    icon: 'Eye',
  },
  {
    id: 'locked-environment',
    title: 'Locked Exam Environment',
    description: 'Exams are conducted in a locked digital environment. Integration with Safe Exam Browser prevents students from accessing external applications like ChatGPT or Gemini.',
    icon: 'Lock',
  },
];
