"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, Star, Target, PlayCircle, Maximize2, X } from "lucide-react";
import Container from "@/components/Container";
import { useState, type MouseEvent, useEffect } from "react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-[var(--color-gold)]" />,
    count: "[X]+",
    label: "Projects Delivered",
    description: "Successfully launched digital campaigns.",
  },
  {
    icon: <Award className="w-8 h-8 text-[var(--color-gold)]" />,
    count: "[X]+",
    label: "Industry Awards",
    description: "Recognized for excellence in digital strategy.",
  },
  {
    icon: <Star className="w-8 h-8 text-[var(--color-gold)]" />,
    count: "[X]%",
    label: "Client Satisfaction",
    description: "Exceeding expectations on every project.",
  },
  {
    icon: <Target className="w-8 h-8 text-[var(--color-gold)]" />,
    count: "[X]+",
    label: "Years Experience",
    description: "Mastering the art of client servicing.",
  },
];

const galleryItems = [

  {
    id: 1,
    title: "TOP 1 ROOKIE - AUGUST ",
    type: "image",
    media: "/images/achievements/top1-rookie.jpg"
  },
  {
    id: 2,
    title: "TOP 1 ROOKIE -Summer Campaign",
    type: "image",
    media: "/images/achievements/top-rookie.jpg"
  },
  {
    id: 3,
    title: "TOP 1 JACK MA OF ALIBABA UNIT",
    type: "image",
    media: "/images/achievements/Top1.jpg"
  },
  {
    id: 4,
    title: "TOP 1 JACK MA OF ALIBABA UNIT",
    type: "image",

    media: "/images/achievements/Top1.2.jpg"
  }
];

function GalleryCard({ item, onClick }: { item: any; onClick: () => void }) {
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-[2rem] bg-gray-100 shadow-[0_8px_30px_rgba(17,17,17,0.05)] transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(212,175,55,0.22)] group cursor-zoom-in aspect-[4/3] w-full"
    >
      <img
        src={item.media}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        alt={item.title}
      />

      {/* Glow Effect similar to Portfolio */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${glow.x}% ${glow.y}%, rgba(244,214,122,0.55), transparent 65%)`,
        }}
      />

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[#D4AF37]/40" />

      {/* Icon Top Right */}
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#111111] backdrop-blur-sm opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
        {item.type === "video" ? <PlayCircle className="h-4 w-4" /> : <Maximize2 className="h-3.5 w-3.5" />}
      </div>

      {/* Text Bottom */}
      <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] mb-1 block">Achievement</span>
        <h4 className="text-white font-bold text-lg tracking-wide">{item.title}</h4>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [previewItem, setPreviewItem] = useState<any>(null);

  useEffect(() => {
    if (!previewItem) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreviewItem(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewItem]);

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-light-gray)]/30 rounded-l-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 items-center w-full">

          {/* Top Section: Text and Stats */}
          <div className="w-full">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <motion.h2
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-black)] mb-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Milestones & <span className="gradient-text-gold">Achievements</span>
              </motion.h2>
              <motion.p
                className="text-lg text-[var(--color-dark-gray)] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A track record built on passion, creativity, and a relentless drive to deliver exceptional results for every client.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_8px_30px_rgb(212,175,55,0.12)] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[var(--color-light-gray)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[var(--color-gold)]/10 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black text-[var(--color-black)] mb-1 group-hover:text-[var(--color-gold-dark)] transition-colors">
                    {item.count}
                  </h3>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    {item.label}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section: Portfolio-Style Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {galleryItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setPreviewItem(item)}
              />
            ))}
          </motion.div>

        </div>
      </Container>

      {/* Fullscreen Preview Modal (Same as Portfolio) */}
      <AnimatePresence>
        {previewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewItem(null)}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-black/90 p-4 backdrop-blur-sm sm:p-10"
          >
            <button
              onClick={() => setPreviewItem(null)}
              aria-label="Close preview"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] max-w-5xl flex-col items-center gap-5"
            >
              {previewItem.type === "video" && previewItem.media.endsWith('.mp4') ? (
                <video
                  src={previewItem.media}
                  controls
                  autoPlay
                  className="max-h-[78vh] w-auto max-w-full rounded-2xl"
                />
              ) : (
                <img
                  src={previewItem.media}
                  alt={previewItem.title}
                  className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl"
                />
              )}

              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Achievement
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">{previewItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
