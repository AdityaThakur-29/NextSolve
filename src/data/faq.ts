export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'what-is-pws',
    question: 'What is PWS?',
    answer:
      'PWS (Practical Workflow System) is an end-to-end software solution by NextSolves that fully digitizes the examination lifecycle — from question-paper generation through practical examination, evaluation, and result generation. It transforms traditional paper-based, manually managed examination processes into a paperless, centralized, automated, secure digital workflow.',
  },
  {
    id: 'who-is-pws-for',
    question: 'Who is PWS designed for?',
    answer:
      'PWS is designed for colleges and educational institutions. Its primary users are college administrators, faculty, teachers, HODs, and students. It serves anyone involved in practical and internal examination workflows.',
  },
  {
    id: 'how-practical-exam-works',
    question: 'How does a practical examination work with PWS?',
    answer:
      'The teacher uploads a question bank into the system. The software automatically analyzes the questions and randomly distributes them to students as digital slips. Students write code directly into the system in a locked digital environment and upload their output results. The teacher monitors everything from a live dashboard, reviews submissions, and assigns grades — all without leaving their seat.',
  },
  {
    id: 'how-question-slips-assigned',
    question: 'How are question slips assigned?',
    answer:
      'Question slips are randomly assigned digitally, replicating the traditional randomness of picking paper slips but in a fully digital format. Each student receives a unique, randomly assigned digital slip. If a student cannot answer their assigned question, the teacher can change their slip or manually assign a specific question.',
  },
  {
    id: 'mcq-support',
    question: 'Does PWS support MCQ / internal exams?',
    answer:
      'Yes. For internal exams, the teacher uploads their MCQ question bank and student list. The software automatically analyzes the MCQs, randomly selects questions to fulfill the total marks specified by the teacher, and distributes them to students upon login.',
  },
  {
    id: 'automated-evaluation',
    question: 'How does automated evaluation work?',
    answer:
      'For internal MCQ exams, the software automatically evaluates correct and incorrect answers and assigns marks instantly upon submission. For practical exams, teachers view the question and the student\'s answer side-by-side on screen to assign marks. The teacher can then instantly download attendance sheets and final results.',
  },
  {
    id: 'attendance',
    question: 'How is attendance handled?',
    answer:
      'Attendance is fully automated. As soon as a student logs into the exam, they are marked present — no manual attendance sheets required. The teacher can download the attendance sheet after the exam.',
  },
  {
    id: 'exam-integrity',
    question: 'How does PWS support examination integrity?',
    answer:
      'Exams are conducted in a locked digital environment where students cannot access external applications like ChatGPT, Gemini, or other tools. PWS integrates with Safe Exam Browser to lock down student devices. A server-enforced monotonic heartbeat prevents bypassing tab-switch tracking, and all critical actions are logged in a tamper-proof audit system.',
  },
  {
    id: 'live-monitoring',
    question: 'Can faculty monitor live exams?',
    answer:
      'Yes. Teachers have access to a live dashboard displaying real-time data including student activity, submission status, and examination progress. Teachers can also share live exam sessions with colleagues, allowing another teacher to act as a moderator and monitor the exam from anywhere.',
  },
  {
    id: 'reusable-templates',
    question: 'Can teachers reuse exam templates?',
    answer:
      'Yes. Teachers can create a single exam template and reuse it multiple times for similar examinations. Templates can also be shared with other teachers, saving preparation time across the entire faculty.',
  },
  {
    id: 'admin-results',
    question: 'Can administrators view results?',
    answer:
      'Yes. After an exam ends, administrators have access to a real-time dashboard where they can check every student\'s scores within seconds. The platform provides centralized management of all teachers, students, and examination data.',
  },
  {
    id: 'paperless',
    question: 'Is the system completely paperless?',
    answer:
      'Yes. PWS eliminates the need for physical question papers, printed question slips, paper-based answer sheets, manual attendance sheets, and physical result records. Everything from exam creation to result generation is fully digital.',
  },
  {
    id: 'implementation',
    question: 'How does implementation work?',
    answer:
      'PWS has been successfully deployed at educational institutions in Mumbai. The system is web-based and works on existing computer lab infrastructure. Implementation involves setting up teacher and student accounts, uploading student lists, and configuring examination parameters.',
  },
  {
    id: 'exam-resumption',
    question: 'What happens if an exam is accidentally ended?',
    answer:
      'PWS includes an exam resumption feature. If a teacher accidentally ends an exam, they can easily resume it from exactly where it stopped, ensuring no student progress is lost.',
  },
  {
    id: 'request-demo',
    question: 'How can a college request a demo?',
    answer:
      'You can request a demo by visiting our Contact page and filling out the demo request form, or by reaching out directly via email at nextsolves@gmail.com or phone at (+91) 9136234409 / 9321632938.',
  },
];
