"use client";

import { type ServiceCardData } from "@/types";
import { motion } from "framer-motion";

interface ServiceCardProps extends ServiceCardData {
  index?: number;
  className?: string;
}

/**
 * Service offering card with icon, title, description, and feature list.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  features = [],
  index = 0,
  className = "",
}: ServiceCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-[var(--color-light-gray)] bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[var(--color-gold)] transition-transform duration-300 group-hover:scale-x-100" />

      {/* Icon */}
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)] transition-colors duration-300 group-hover:bg-[var(--color-gold)] group-hover:text-black">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-bold text-[var(--color-black)]">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-[var(--color-mid-gray)]">
        {description}
      </p>

      {/* Feature list */}
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-[var(--color-dark-gray)]"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
