"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the loader after exactly 2.8 seconds to allow fade out by 3.0s
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation to finish before notifying parent
      setTimeout(onComplete, 500);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Golden Glow Background */}
          <motion.div
            className="absolute h-96 w-96 rounded-full bg-[rgba(212,175,55,0.45)] blur-[100px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
             {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0.5, 1.5, 0.5],
                    x: (Math.random() - 0.5) * 500, 
                    y: (Math.random() - 0.5) * 500 
                  }}
                  transition={{
                    delay: 1.2 + Math.random() * 0.5,
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                />
             ))}
          </div>

          {/* Rotating Golden Ring */}
          <motion.div
            className="absolute rounded-full border border-solid border-[#D4AF37] opacity-20"
            style={{ width: '280px', height: '280px' }}
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 0.3, scale: 1, rotate: 180 }}
            transition={{ delay: 1.2, duration: 2, ease: "linear" }}
          />
          <motion.div
            className="absolute rounded-full border border-dashed border-[#D4AF37] opacity-40"
            style={{ width: '320px', height: '320px' }}
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 0.5, scale: 1, rotate: -90 }}
            transition={{ delay: 1.2, duration: 2, ease: "linear" }}
          />

          {/* Logo container */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.7, opacity: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -8, 0] }}
            transition={{ 
              delay: 0.5, 
              duration: 0.7,
              scale: { type: "spring", bounce: 0.4 },
              opacity: { duration: 0.5 },
              y: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img 
              src="/images/Logo/DP-LOGO.png" 
              alt="Daniel Padua Logo" 
              className="w-auto h-40 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
