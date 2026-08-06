"use client";

import Container from "@/components/Container";
import { type NavLink } from "@/types";

const footerLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/**
 * Footer placeholder with brand, quick links, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-light-gray)] bg-[var(--color-black)] py-12 md:py-16 transition-all duration-300 text-white/70">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between transition-all duration-300">
          {/* Brand */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-300">
            <a href="#hero" className="flex items-center gap-2 group">
              <img
                src="/images/Logo/DP-LOGO.png"
                alt="Daniel Padua Logo"
                className="h-16 sm:h-20 lg:h-24 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm sm:text-base text-white/50 transition-all duration-300">
              Professional Client Servicing &amp; Digital Creative Services.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-8 transition-all duration-300" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm sm:text-base transition-colors duration-200 hover:text-[var(--color-gold)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row transition-all duration-300">
          <p className="text-xs sm:text-sm text-white/40 transition-all duration-300">
            &copy; {year} Sir Daniel Padua. All rights reserved.
          </p>
          
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label="Built with Next.js"
          >
            <svg viewBox="0 0 180 180" width="18" height="18" className="sm:w-5 sm:h-5 transition-all duration-300">
              <mask id="mask" fill="#fff"><path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm0 162c-39.764 0-72-32.236-72-72 0-39.764 32.236-72 72-72 39.764 0 72 32.236 72 72 0 39.764-32.236 72-72 72z" /></mask>
              <path d="M149.508 157.691L69.144 54H54v72h15.144V68.309l80.364 103.691a71.69 71.69 0 01-59.508 16c39.764 0 72-32.236 72-72 0-5.83-.695-11.498-2-16.942l-10.492 14.633z" fill="currentColor"/>
              <path mask="url(#mask)" d="M117 54h15v72h-15z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
