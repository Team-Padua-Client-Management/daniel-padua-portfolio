"use client";

import { type CardProps } from "@/types";
import { motion } from "framer-motion";

/**
 * Base card component with rounded corners, soft shadows, and optional glassmorphism.
 */

const paddingStyles: Record<string, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl border border-[var(--color-light-gray)]
        ${glass ? "glass" : "bg-white"}
        ${paddingStyles[padding]}
        ${hover ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1" : ""}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
