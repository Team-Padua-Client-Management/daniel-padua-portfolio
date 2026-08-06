"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface CardThumbnailOption {
    id: string;
    label: string;
    src: string;
}

interface CardThumbnailProps {
    images: CardThumbnailOption[];
    activeSrc: string;
    onSelect: (src: string) => void;
}

export default function CardThumbnail({ images, activeSrc, onSelect }: CardThumbnailProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {images.map((image) => {
                const isActive = image.src === activeSrc;

                return (
                    <motion.button
                        key={image.id}
                        type="button"
                        onClick={() => onSelect(image.src)}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-pressed={isActive}
                        className={`group relative flex flex-col items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${isActive ? "border-[var(--color-gold)] bg-white/5" : "border-white/10 hover:border-white/30"
                            }`}
                    >
                        <span className="relative h-10 w-16 overflow-hidden rounded-md bg-black/40">
                            <Image src={image.src} alt={image.label} fill sizes="64px" className="object-cover" />
                        </span>
                        <span
                            className={`text-xs font-medium tracking-wide ${isActive ? "text-[var(--color-gold)]" : "text-white/60 group-hover:text-white/90"
                                }`}
                        >
                            {image.label}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}