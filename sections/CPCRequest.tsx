"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ThemeSelector from "@/components/ThemeSelector";
import CardInfoPanel from "@/components/CardInfoPanel";
import RequestForm from "@/components/RequestForm";
import { CARD_FACES, type CardTheme } from "@/components/cpc-theme";

const CPCStage = dynamic(() => import("@/components/CPCStage"), {
  ssr: false,
  loading: () => (
    <div className="flex aspect-[4/3] w-full max-h-[640px] items-center justify-center rounded-[28px] border border-[#ECECEC] bg-white shadow-xl">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />
    </div>
  ),
});

export default function CPCRequest() {
  const [theme, setTheme] = useState<CardTheme>("orig");
  const faces = useMemo(() => CARD_FACES[theme], [theme]);

  return (
    <section id="cpc-request" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-[#D4AF37]/[0.06] blur-[160px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#F4D67A]/[0.08] blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[55%_45%] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-12"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-4 py-1.5 shadow-sm">
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Team Padua Client Servicing
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
                Client Policy Card
              </h1>

              <p className="mt-4 text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] bg-clip-text text-transparent sm:text-2xl">
                Card Design Request for Advisors
              </p>

              <p className="mt-5 max-w-md text-base leading-relaxed text-[#6B7280]">
                Request a professionally designed Client Policy Card for your clients.
                Submit your client&apos;s policy information and Team Padua will prepare
                a personalized card based on the details provided.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <ThemeSelector value={theme} onChange={setTheme} />
              <CPCStage faces={faces} />
            </div>

            <CardInfoPanel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <RequestForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}