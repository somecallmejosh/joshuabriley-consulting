/** Site-wide navigation structure. Single source of truth for header + footer. */

export interface NavLink {
  href: string;
  label: string;
}

export const PRIMARY_NAV: NavLink[] = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/scorecard/', label: 'Scorecard' },
  { href: '/contact/', label: 'Contact' },
];

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Site',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/services/', label: 'Services' },
      { href: '/projects/', label: 'Projects' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
  {
    heading: 'More',
    links: [
      { href: '/faqs/', label: 'FAQs' },
      { href: '/testimonials/', label: 'Testimonials' },
      { href: '/scorecard/', label: 'Scorecard' },
      { href: '/blog/', label: 'Field notes' },
    ],
  },
];
