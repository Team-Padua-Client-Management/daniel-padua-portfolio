"use client";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Sparkles, Users } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Users,
    title: "Client Servicing",
    description: "Keeping policy information, requests, and follow-ups organized and easy for clients to understand.",
  },
  {
    icon: Layers,
    title: "Digital Solutions",
    description: "Building the tools and trackers that Team Padua uses to manage servicing day to day.",
  },
  {
    icon: Sparkles,
    title: "Business Development",
    description: "Growing Team Padua's client relationships through structured, dependable processes.",
  },
];

const BUILT_SYSTEMS = [
  {
    title: "Client Policy Card",
    description: "A digital summary of a client's policy — coverage, premiums, beneficiaries, and key dates in one card.",
  },
  {
    title: "Client Servicing Portal",
    description: "A web platform for Sun Life advisors to manage client servicing requests.",
    href: "https://tpclientportal.vercel.app/",
  },
  {
    title: "Servicing Trackers",
    description: "A set of trackers for client birthdays, prospects, and advisor case management.",
  },
];

const QUICK_FACTS = [
  { label: "Based in", value: "Philippines" },
  { label: "Works with", value: "Sun Life advisors & businesses" },
  { label: "Availability", value: "Remote, open to new projects" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F4D67A]/[0.08] blur-[160px]" />
      </div>

      <Container className="relative">
        <SectionTitle
          label="About"
          title="About Sir Daniel Padua"
          description="Professional Client Servicing & Digital Creative Services."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-[#374151]">
              Daniel Padua works within Sun Life&apos;s advisor network, focused on client servicing
              for Team Padua. His work centers on making the client experience clearer and more
              organized — from policy documentation like the Client Policy Card, to structured
              trackers that help keep servicing consistent across every client relationship.
            </p>
            <p className="text-lg leading-relaxed text-[#374151]">
              Alongside servicing, Daniel builds the digital tools that support that work,
              including a dedicated servicing portal for Sun Life advisors. Beyond Team Padua,
              he also takes on web, design, and content projects for outside businesses,
              bringing the same structured, detail-first approach to every client relationship.
            </p>
            <p className="text-lg leading-relaxed text-[#374151]">
              The goal across all of it is the same: make client relationships easier to
              manage, easier to understand, and easier to trust.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {QUICK_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] px-4 py-3"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#B4923A]">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#111111]">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {FOCUS_AREAS.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm transition-shadow hover:border-[#D4AF37]/30 hover:shadow-lg"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-[#F4D67A]/15 text-[#B4923A]">
                    <area.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mb-1.5 text-sm font-semibold text-[#111111]">{area.title}</h3>
                  <p className="text-xs leading-relaxed text-[#6B7280]">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-[28px] border border-[#ECECEC] bg-white p-8 shadow-xl"
          >
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Systems &amp; Tools Built
            </p>

            <div className="space-y-4">
              {BUILT_SYSTEMS.map((system) => {
                const content = (
                  <div className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] p-5 transition-colors hover:border-[#D4AF37]/30">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-[#111111]">{system.title}</h4>
                      {system.href && <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#B4923A]" />}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B7280]">{system.description}</p>
                  </div>
                );

                return system.href ? (
                  <a key={system.title} href={system.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={system.title}>{content}</div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}