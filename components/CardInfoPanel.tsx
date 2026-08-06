"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    IdCard,
    ChevronDown,
    ShieldCheck,
    Sparkles,
    Layers,
    Package,
    ListChecks,
    UserCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface InfoSection {
    id: string;
    icon: LucideIcon;
    title: string;
    content: string[];
}

const SECTIONS: InfoSection[] = [
    {
        id: "about",
        icon: Sparkles,
        title: "About the Service",
        content: [
            "Team Padua designs premium Client Policy Cards on behalf of Sun Life Financial Advisors for their clients",
            "Each card is created to reflect the client's actual policy details",
            "This is a design and production service, not a self-service product",
        ],
    },
    {
        id: "who-can-request",
        icon: UserCheck,
        title: "Who Can Request",
        content: [
            "Licensed Sun Life Financial Advisors only",
            "Requests must be submitted on behalf of an existing client",
            "Advisors are responsible for confirming that client details are accurate",
        ],
    },
    {
        id: "required-information",
        icon: ListChecks,
        title: "Required Information",
        content: [
            "Client Name",
            "Policy Number",
            "Product Name",
            "Effective Date",
            "Maturity Date",
            "Advisor Name",
            "Beneficiaries (optional)",
            "Coverage Details",
        ],
    },
    {
        id: "what-we-need",
        icon: Package,
        title: "What We Need",
        content: [
            "Policy summary or proposal",
            "Screenshots of policy details, if available",
            "Existing client information on file",
            "Any relevant benefit details",
        ],
    },
    {
        id: "card-output",
        icon: IdCard,
        title: "Card Output",
        content: [
            "Front card design",
            "Back card design",
            "QR code, if applicable",
            "Client information and policy summary",
            "Beneficiary information, if provided",
            "Advisor branding",
        ],
    },
    {
        id: "delivery-process",
        icon: Layers,
        title: "Delivery Process",
        content: [
            "Advisor submits the request",
            "Team Padua reviews the submitted details",
            "Card design is prepared",
            "Preview is shared with the advisor",
            "Final card is delivered once approved",
        ],
    },
    {
        id: "customization",
        icon: ShieldCheck,
        title: "Customization",
        content: [
            "Layout may vary depending on the product type",
            "Design reflects the specific policy and client details provided",
            "Advisors may request adjustments based on their preferences",
        ],
    },
];

export default function CardInfoPanel() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white shadow-xl">
            <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition-colors hover:bg-[#FAFAFA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 sm:px-8"
            >
                <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#F4D67A]">
                        <ShieldCheck className="h-6 w-6 text-white" />
                    </span>
                    <div>
                        <h3 className="text-lg font-semibold text-[#111111]">Client Policy Card</h3>
                        <p className="mt-0.5 text-sm text-[#6B7280]">How the request and design process works.</p>
                    </div>
                </div>
                <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ECECEC] text-[#6B7280]"
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 gap-4 border-t border-[#ECECEC] px-6 py-6 sm:grid-cols-2 sm:px-8">
                            {SECTIONS.map((section, index) => (
                                <motion.div
                                    key={section.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: index * 0.04 }}
                                    className="rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] p-5"
                                >
                                    <div className="mb-3 flex items-center gap-2.5">
                                        <section.icon className="h-4 w-4 text-[#D4AF37]" />
                                        <h4 className="text-sm font-semibold text-[#111111]">{section.title}</h4>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {section.content.map((line) => (
                                            <li key={line} className="flex items-start gap-2 text-xs leading-relaxed text-[#6B7280]">
                                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#D4AF37]/60" />
                                                {line}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}