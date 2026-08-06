"use client";

import { motion } from "framer-motion";
import type { CardTheme } from "./cpc-theme";
import { THEME_LABEL } from "./cpc-theme";

interface ThemeSelectorProps {
    value: CardTheme;
    onChange: (theme: CardTheme) => void;
}

const THEMES: CardTheme[] = ["orig", "white", "black"];

export default function ThemeSelector({
    value,
    onChange,
}: ThemeSelectorProps) {
    return (
        <div className="flex flex-col gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#6B7280]">
                Theme
            </span>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#ECECEC] bg-white p-1.5 shadow-sm">
                {THEMES.map((theme) => {
                    const isActive = theme === value;

                    return (
                        <button
                            key={theme}
                            type="button"
                            role="radio"
                            aria-checked={isActive}
                            onClick={() => onChange(theme)}
                            className="relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50"
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="theme-pill"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] shadow-md"
                                    transition={{
                                        type: "spring",
                                        stiffness: 450,
                                        damping: 34,
                                    }}
                                />
                            )}

                            <span
                                className={`relative z-10 flex items-center gap-2 whitespace-nowrap ${isActive
                                    ? "text-white"
                                    : "text-[#6B7280] hover:text-[#111827]"
                                    }`}
                            >
                                <span
                                    className={`h-2 w-2 rounded-full border ${isActive
                                        ? "border-white bg-white"
                                        : "border-[#D1D5DB] bg-transparent"
                                        }`}
                                />

                                {THEME_LABEL[theme]}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}