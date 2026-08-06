"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export type SubmitState = "idle" | "loading" | "success";

interface SubmitButtonProps {
    state: SubmitState;
    label?: string;
}

export default function SubmitButton({ state, label = "Submit Request" }: SubmitButtonProps) {
    return (
        <motion.button
            type="submit"
            disabled={state !== "idle"}
            whileHover={state === "idle" ? { y: -2 } : undefined}
            whileTap={state === "idle" ? { scale: 0.98 } : undefined}
            className="relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-[18px] bg-gradient-to-r from-[#d4af37] via-[#f0d998] to-[#d4af37] bg-[length:200%_100%] px-8 py-4 text-sm font-semibold tracking-wide text-black shadow-[0_20px_50px_-15px_rgba(212,175,55,0.55)] transition-shadow hover:shadow-[0_25px_60px_-12px_rgba(212,175,55,0.65)]"
            animate={{ backgroundPosition: state === "loading" ? ["0% 0%", "200% 0%"] : "0% 0%" }}
            transition={{ duration: 1.4, repeat: state === "loading" ? Infinity : 0, ease: "linear" }}
        >
            <motion.span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ translateX: ["-100%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />

            <AnimatePresence mode="wait" initial={false}>
                {state === "idle" && (
                    <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="relative z-10 flex items-center gap-2.5"
                    >
                        {label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                )}
                {state === "loading" && (
                    <motion.span
                        key="loading"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="relative z-10 flex items-center gap-2.5"
                    >
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processing
                    </motion.span>
                )}
                {state === "success" && (
                    <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative z-10 flex items-center gap-2.5"
                    >
                        <Check className="h-4 w-4" />
                        Request Submitted
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}