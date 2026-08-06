"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, RotateCcw, ZoomIn, ZoomOut, Sun, Layers3 } from "lucide-react";

interface CardControlsProps {
    autoRotate: boolean;
    onToggleAutoRotate: () => void;
    onReset: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
    lightingWarm: boolean;
    onToggleLighting: () => void;
}

function ControlPill({
    icon: Icon,
    label,
    active,
    onClick,
}: {
    icon: typeof RotateCw;
    label: string;
    active?: boolean;
    onClick: () => void;
}) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-medium shadow-sm transition-colors ${active
                    ? "border-transparent bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] text-white"
                    : "border-[#ECECEC] bg-white text-[#374151] hover:border-[#D1D5DB] hover:bg-[#FAFAFA]"
                }`}
        >
            <Icon className="h-3.5 w-3.5" />
            {label}
        </motion.button>
    );
}

export default function CardControls({
    autoRotate,
    onToggleAutoRotate,
    onReset,
    onZoomIn,
    onZoomOut,
    lightingWarm,
    onToggleLighting,
}: CardControlsProps) {
    const [exploded, setExploded] = useState(false);

    return (
        <div className="flex flex-wrap items-center gap-2.5">
            <ControlPill icon={RotateCw} label="Auto Rotate" active={autoRotate} onClick={onToggleAutoRotate} />
            <ControlPill icon={RotateCcw} label="Reset View" onClick={onReset} />
            <ControlPill icon={ZoomIn} label="Zoom In" onClick={onZoomIn} />
            <ControlPill icon={ZoomOut} label="Zoom Out" onClick={onZoomOut} />
            <ControlPill icon={Sun} label="Lighting" active={lightingWarm} onClick={onToggleLighting} />
            <ControlPill icon={Layers3} label="Exploded View" active={exploded} onClick={() => setExploded((v) => !v)} />
        </div>
    );
}