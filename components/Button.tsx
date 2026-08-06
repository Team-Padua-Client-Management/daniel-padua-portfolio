"use client";

import { type ButtonProps } from "@/types";
import { motion } from "framer-motion";

/**
 * Reusable button with multiple variants.
 * Supports link-style (via `href`) or standard button behaviour.
 */

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-dark)] shadow-md hover:shadow-lg",
  secondary:
    "bg-[var(--color-black)] text-white hover:bg-[var(--color-dark-gray)]",
  outline:
    "border-2 border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent hover:bg-[var(--color-gold)] hover:text-black",
  ghost:
    "bg-transparent text-[var(--color-dark-gray)] hover:bg-[var(--color-light-gray)]",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
