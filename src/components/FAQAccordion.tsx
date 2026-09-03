'use client';

import React from 'react';
import { faqItems, FAQItem } from '@/data/faq';
import { Skiper103, Skiper103Item } from '@/components/ui/skiper103';
import {
  Layers,
  GraduationCap,
  Terminal,
  Shuffle,
  CheckCircle2,
  Cpu,
  UserCheck,
  ShieldCheck,
  Eye,
  Copy,
  BarChart3,
  Leaf,
  Rocket,
  RotateCcw,
  Calendar,
  HelpCircle,
} from 'lucide-react';

// Map contextual icons for each FAQ item for a rich aesthetic
const iconMap: Record<string, React.ReactNode> = {
  'what-is-pws': <Layers className="w-4 h-4" />,
  'who-is-pws-for': <GraduationCap className="w-4 h-4" />,
  'how-practical-exam-works': <Terminal className="w-4 h-4" />,
  'how-question-slips-assigned': <Shuffle className="w-4 h-4" />,
  'mcq-support': <CheckCircle2 className="w-4 h-4" />,
  'automated-evaluation': <Cpu className="w-4 h-4" />,
  'attendance': <UserCheck className="w-4 h-4" />,
  'exam-integrity': <ShieldCheck className="w-4 h-4 text-emerald-600" />,
  'live-monitoring': <Eye className="w-4 h-4" />,
  'reusable-templates': <Copy className="w-4 h-4" />,
  'admin-results': <BarChart3 className="w-4 h-4" />,
  'paperless': <Leaf className="w-4 h-4 text-emerald-600" />,
  'implementation': <Rocket className="w-4 h-4 text-blue-600" />,
  'exam-resumption': <RotateCcw className="w-4 h-4 text-amber-600" />,
  'request-demo': <Calendar className="w-4 h-4 text-primary" />,
};

interface FAQAccordionProps {
  limit?: number;
  className?: string;
  allowMultiple?: boolean;
}

export default function FAQAccordion({
  limit,
  className,
  allowMultiple = false,
}: FAQAccordionProps) {
  const sourceItems = limit ? faqItems.slice(0, limit) : faqItems;

  const formattedItems: Skiper103Item[] = sourceItems.map((item: FAQItem) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
    icon: iconMap[item.id] || <HelpCircle className="w-4 h-4" />,
  }));

  return (
    <Skiper103
      items={formattedItems}
      defaultOpenId={formattedItems[0]?.id || null}
      className={className}
      allowMultiple={allowMultiple}
    />
  );
}
