"use client";

import { type SectionTitleProps } from "@/types";
import { motion } from "framer-motion";

/**
 * Reusable section header with optional label chip, title, and description.
 */
export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      className={`mb-12 max-w-3xl ${alignment} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full bg-[var(--color-gold)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-gold-dark)]">
          {label}
        </span>
      )}

      <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-black)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-mid-gray)] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
