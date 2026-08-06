"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

const FOCUS_AREAS = ["Leadership", "Client Servicing", "Digital Solutions"];

const FLOATING_CARDS = [
  { title: "Business Development", position: "left" as const },
  { title: "Client Experience", position: "left" as const },
  { title: "Digital Innovation", position: "right" as const },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[#D4AF37]/[0.08] blur-[160px]" />
        <div className="absolute -right-32 bottom-0 h-[480px] w-[480px] rounded-full bg-[#F4D67A]/[0.10] blur-[160px]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] [background-size:64px_64px]" />
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#D4AF37]/40"
        />
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[24%] top-[62%] h-2.5 w-2.5 rounded-full bg-[#D4AF37]/30"
        />
        <motion.div
          animate={{ rotate: [0, 12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[12%] top-[16%] h-16 w-16 rounded-2xl border border-[#D4AF37]/15"
        />
      </div>

      <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#ECECEC] bg-white text-[#B4923A] text-xs font-semibold tracking-[0.18em] uppercase shadow-sm">
            Team Padua &middot; Sun Life Client Servicing
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-6">
            Professional Client Servicing,
            <span className="block text-[#D4AF37]">Backed by Digital Innovation</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#6B7280] mb-10 leading-relaxed max-w-xl">
            Helping Sun Life advisors and their clients through structured servicing tools,
            digital solutions, and dependable client relationship management.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-10 max-w-md">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] px-3 py-3 text-center"
              >
                <span className="text-xs font-medium text-[#374151]">{area}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get in Touch
            </Button>
            <a
              href="https://tpclientportal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-2.5 text-xs font-medium text-[#374151] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D4AF37]/40 hover:text-[#B4923A] hover:shadow-md"
            >
              Client Servicing Portal
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center lg:h-[640px]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,_rgba(212,175,55,0.16)_0%,_rgba(212,175,55,0)_70%)]" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 -mt-10 mb-[-2.5rem] w-full max-w-[380px]"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-br from-[#D4AF37]/30 via-[#F4D67A]/10 to-transparent blur-2xl" />
            <div className="relative rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-b from-white to-[#FAFAFA] p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/images/daniel/Padua.png"
                  alt="Daniel Padua, Client Servicing Specialist"
                  width={900}
                  height={1800}
                  priority
                  sizes="(max-width: 768px) 70vw, 380px"
                  className="h-auto w-full"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-[#ECECEC] bg-white px-5 py-2 shadow-lg">
                <span className="text-xs font-semibold text-[#111111]">Daniel Padua</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute left-0 top-16 z-20 hidden sm:block rounded-2xl border border-[#ECECEC] bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="text-xs font-semibold text-[#111111]">{FLOATING_CARDS[0].title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute left-2 bottom-24 z-20 hidden sm:block rounded-2xl border border-[#ECECEC] bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="text-xs font-semibold text-[#111111]">{FLOATING_CARDS[1].title}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute right-0 bottom-12 z-20 hidden sm:block rounded-2xl border border-[#ECECEC] bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl"
          >
            <span className="text-xs font-semibold text-[#111111]">{FLOATING_CARDS[2].title}</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}