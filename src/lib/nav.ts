/** Site-wide navigation structure. Single source of truth for header + footer. */

export interface NavLink {
  href: string
  label: string
}

export const PRIMARY_NAV: NavLink[] = [
  { href: '/about/', label: 'About' },
  { href: '/projects/', label: 'Projects' },
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/tools/', label: 'Tools' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
]

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Site',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/projects/', label: 'Projects' },
      { href: '/services/', label: 'Services' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
  {
    heading: 'More',
    links: [
      { href: '/tools/', label: 'Tools' },
      { href: '/faqs/', label: 'FAQs' },
      { href: '/testimonials/', label: 'Testimonials' },
      { href: '/tools/scorecard/', label: 'Scorecard' },
      { href: '/style-guide/', label: 'Style Guide' },
      { href: '/blog/', label: 'Blog' },
    ],
  },
]
