"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface CardGlowProps {
    isHovered: boolean;
    isDragging: boolean;
}

interface Particle {
    id: number;
    left: string;
    top: string;
    size: number;
    duration: number;
    delay: number;
}

function generateParticles(count: number): Particle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 5,
    }));
}

export default function CardGlow({ isHovered, isDragging }: CardGlowProps) {
    const particles = useMemo(() => generateParticles(28), []);
    const intensity = isDragging ? 1 : isHovered ? 0.85 : 0.55;

    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_20%_0%,#141416_0%,#0b0b0d_45%,#000000_100%)]" />

            <motion.div
                className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37] blur-[120px]"
                animate={{ opacity: intensity * 0.32, scale: isHovered ? 1.18 : 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            />

            <motion.div
                className="absolute bottom-0 left-1/2 h-[240px] w-[560px] -translate-x-1/2 rounded-full bg-[#f5e6b8] blur-[100px]"
                animate={{ opacity: intensity * 0.16 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            />

            <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] [background-size:24px_24px]" />

            <svg className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay">
                <filter id="cpcNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#cpcNoise)" />
            </svg>

            {particles.map((particle) => (
                <motion.span
                    key={particle.id}
                    className="absolute rounded-full bg-[#f0d998]"
                    style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
                    animate={{ y: [0, -18, 0], opacity: [0.12, 0.55, 0.12] }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.78)_100%)]" />
            <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/[0.06]" />
        </div>
    );
}