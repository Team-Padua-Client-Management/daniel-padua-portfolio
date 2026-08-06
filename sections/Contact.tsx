"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const CONTACT_EMAIL = "danielpadua@example.com";

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "https://www.facebook.com/paduadaniel", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/paduadp/", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/daniel-padua-438221114/", label: "LinkedIn" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${form.name || "the website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-[#FAFAFA]">
      <Container>
        <SectionTitle
          label="Contact"
          title="Let&apos;s Connect"
          description="Have a project in mind, or need help with client servicing? Reach out and let's make it happen."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-[#ECECEC] bg-white p-8 shadow-sm"
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Get in touch
            </p>
            <h3 className="mb-6 text-2xl font-bold text-[#111111]">
              Send a message, or reach out directly
            </h3>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mb-8 flex items-center gap-4 rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] p-4 transition-colors hover:border-[#D4AF37]/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-[#F4D67A]/15 text-[#B4923A]">
                <Mail className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-medium text-[#6B7280]">Email</p>
                <p className="text-sm font-semibold text-[#111111]">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <p className="mb-4 text-xs font-medium text-[#6B7280]">Follow along</p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[#6B7280] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] hover:shadow-md"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[28px] border border-[#ECECEC] bg-white p-8 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium text-[#374151]">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Juan Dela Cruz"
                className="w-full rounded-xl border border-[#ECECEC] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#D4AF37]/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium text-[#374151]">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-[#ECECEC] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#D4AF37]/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-[#374151]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about what you need help with..."
                className="w-full resize-none rounded-xl border border-[#ECECEC] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] outline-none transition-colors focus:border-[#D4AF37]/50"
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}