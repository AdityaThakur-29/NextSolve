export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: 'Product',
    href: '/product',
    children: [
      { label: 'Overview', href: '/product' },
      { label: 'Features', href: '/features' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    label: 'Solutions',
    href: '#',
    children: [
      { label: 'For Colleges', href: '/for-colleges' },
      { label: 'For Faculty', href: '/for-faculty' },
      { label: 'For Students', href: '/for-students' },
    ],
  },
  { label: 'Success', href: '/success' },
  {
    label: 'Resources',
    href: '#',
    children: [
      { label: 'ROI Calculator', href: '/calculator' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const footerNavigation = {
  product: [
    { label: 'PWS Overview', href: '/product' },
    { label: 'Features', href: '/features' },
    { label: 'Security', href: '/security' },
  ],
  solutions: [
    { label: 'For Colleges', href: '/for-colleges' },
    { label: 'For Faculty', href: '/for-faculty' },
    { label: 'For Students', href: '/for-students' },
  ],
  company: [
    { label: 'About NextSolves', href: '/about' },
    { label: 'Success Stories', href: '/success' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'ROI Calculator', href: '/calculator' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export const contactInfo = {
  email: 'nextsolves@gmail.com',
  phone: ['+91 9136234409', '+91 9321632938'],
  address: 'Goregaon East, Mumbai, Maharashtra 400065, India',
};
