"use client";

import { type PortfolioProject } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface PortfolioCardProps extends PortfolioProject {
  index?: number;
  className?: string;
}

/**
 * Portfolio project card with image, overlay, tags, and external link.
 */
export default function PortfolioCard({
  title,
  category,
  description,
  image,
  tags = [],
  link,
  index = 0,
  className = "",
}: PortfolioCardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl bg-[var(--color-black)] ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold)]">
            {category}
          </p>
          <h3 className="mb-1 text-xl font-bold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{description}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold)] hover:underline"
            >
              View Project <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
