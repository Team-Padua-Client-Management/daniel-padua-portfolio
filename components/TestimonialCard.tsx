"use client";

import { type TestimonialData } from "@/types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps extends TestimonialData {
  index?: number;
  className?: string;
}

/**
 * Testimonial card with rating stars, quote, and avatar.
 */
export default function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5,
  index = 0,
  className = "",
}: TestimonialCardProps) {
  return (
    <motion.div
      className={`relative rounded-2xl border border-[var(--color-light-gray)] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Rating */}
      {rating > 0 && (
        <div className="mb-4 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-[var(--color-gold)] text-[var(--color-gold)]"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="mb-6 text-sm leading-relaxed text-[var(--color-dark-gray)] italic">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-[var(--color-gold)]/30"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-sm font-bold text-[var(--color-gold-dark)]">
            {name.charAt(0)}
          </div>
        )}

        <div>
          <p className="text-sm font-semibold text-[var(--color-black)]">
            {name}
          </p>
          <p className="text-xs text-[var(--color-mid-gray)]">
            {role}
            {company && ` · ${company}`}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
