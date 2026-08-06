/* ──────────────────────────────────────────────
   Site-wide Constants
   ────────────────────────────────────────────── */

/** Site metadata */
export const SITE_CONFIG = {
  name: "Sir Daniel Padua",
  title: "Sir Daniel Padua — Professional Portfolio",
  description:
    "Professional Client Servicing & Digital Creative Services by Sir Daniel Padua.",
  url: "https://danielpadua.com",
} as const;

/** Navigation links */
export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

/** Framer Motion shared variants */
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;
