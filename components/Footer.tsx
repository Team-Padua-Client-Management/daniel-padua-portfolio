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
    <footer className="border-t border-[var(--color-light-gray)] bg-[var(--color-black)] py-12 text-white/70">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="inline-flex items-center gap-2">
              <span className="text-lg font-bold text-white">Daniel</span>
              <span className="text-lg font-bold gradient-text-gold">
                Padua
              </span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-white/50">
              Professional Client Servicing &amp; Digital Creative Services.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 hover:text-[var(--color-gold)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Copyright */}
        <p className="text-center text-xs text-white/40">
          &copy; {year} Sir Daniel Padua. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
