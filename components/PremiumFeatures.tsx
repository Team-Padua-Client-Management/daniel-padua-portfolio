"use client";

import { motion } from "framer-motion";
import {
    Headphones,
    Clock3,
    FileCheck2,
    Zap,
    ShieldCheck,
    QrCode,
    type LucideIcon,
} from "lucide-react";

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

const FEATURES: Feature[] = [
    {
        icon: Headphones,
        title: "Priority Client Support",
        description: "Dedicated servicing line for cardholders and their advisors.",
    },
    {
        icon: Clock3,
        title: "24/7 Assistance",
        description: "Round-the-clock access to help with your policy and card.",
    },
    {
        icon: FileCheck2,
        title: "Digital Verification",
        description: "Instant identity checks recognized across every branch.",
    },
    {
        icon: Zap,
        title: "Fast Processing",
        description: "Most requests are approved within 1–2 business days.",
    },
    {
        icon: ShieldCheck,
        title: "Protected Identity",
        description: "Bank-grade encryption safeguards your personal data.",
    },
    {
        icon: QrCode,
        title: "Secure QR Verification",
        description: "Tap or scan for real-time, tamper-proof authentication.",
    },
];

export default function PremiumFeatures() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm transition-shadow hover:border-[#D4AF37]/40 hover:shadow-lg"
                >
                    <motion.span
                        whileHover={{ rotate: 6, scale: 1.06 }}
                        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-[#F4D67A]/15 text-[#B4923A]"
                    >
                        <feature.icon className="h-5 w-5" />
                    </motion.span>
                    <h4 className="mb-1.5 text-sm font-semibold text-[#111111]">{feature.title}</h4>
                    <p className="text-xs leading-relaxed text-[#6B7280]">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
}