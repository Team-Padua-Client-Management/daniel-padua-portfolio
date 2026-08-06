"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Sparkles, ArrowRight, Star } from "lucide-react";

export default function WelcomeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl overflow-hidden border border-white/50"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          >
            {/* Decorative background glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#D4AF37] opacity-20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#E53935] opacity-15 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              
              {/* Image Logo inside Modal */}
              <motion.div 
                className="mb-6"
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
              >
                <img 
                  src="/images/Logo/DP-LOGO.png" 
                  alt="Daniel Padua Logo" 
                  className="h-24 w-auto drop-shadow-lg" 
                />
              </motion.div>
              
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
                Hello & Welcome! <span className="inline-block animate-bounce">👋</span>
              </h2>
              
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                I'm absolutely thrilled to have you here! Dive into my world of vibrant digital creative solutions and top-tier client servicing. Let's turn great ideas into extraordinary realities together!
              </p>

              <div className="flex gap-4">
                <Button onClick={onClose} size="lg" className="group shadow-xl shadow-[#D4AF37]/20">
                  <Star className="mr-2 w-5 h-5 text-white" />
                  Explore the Magic
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
