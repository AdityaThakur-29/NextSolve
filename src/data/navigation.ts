export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Dashboards', href: '/#pipeline' },
  { label: 'Security', href: '/#security' },
  { label: 'Calculator', href: '/#calculator' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'About', href: '/about' },
];

export const footerNavigation = {
  product: [
    { label: 'Core Features', href: '/#features' },
    { label: 'Digital Pipeline', href: '/#pipeline' },
    { label: 'Security Architecture', href: '/#security' },
    { label: 'System Comparison', href: '/#comparison' },
  ],
  solutions: [
    { label: 'For Colleges', href: '/#roles' },
    { label: 'For Faculty', href: '/#roles' },
    { label: 'For Students', href: '/#roles' },
  ],
  company: [
    { label: 'About NextSolves', href: '/about' },
    { label: 'Campus Implementation', href: '/#implementation' },
    { label: 'Contact & Inquiry', href: '/#contact' },
  ],
  resources: [
    { label: 'ROI & Savings Calculator', href: '/#calculator' },
    { label: 'Frequently Asked Questions', href: '/#faq' },
    { label: 'Faculty Endorsements', href: '/#reviews' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
};

export const contactInfo = {
  email: 'nextsolves@gmail.com',
  phone: ['+91 9136234409', '+91 9321632938'],
  address: 'Goregaon East, Mumbai, Maharashtra 400065, India',
};
