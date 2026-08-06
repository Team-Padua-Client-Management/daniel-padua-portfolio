"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    User,
    Mail,
    Phone,
    IdCard,
    Calendar,
    CalendarClock,
    Package,
    UserCheck,
    Users,
    FileSignature,
    MessageSquare,
    ShieldCheck,
    Clock,
    Lock,
    CheckCircle2,
} from "lucide-react";
import FloatingField from "./FloatingField";
import UploadZone from "./UploadZone";
import SubmitButton, { type SubmitState } from "./SubmitButton";

type CPCFormValues = {
    name: string;
    email: string;
    number: string;
    policyNumber: string;
    productName: string;
    effectiveDate: string;
    maturityDate: string;
    beneficiaries: string;
    coverageDetails: string;
    comment: string;
};

const STEPS = [
    { id: 1, title: "Advisor & Client Information" },
    { id: 2, title: "Policy Details & Supporting Files" },
    { id: 3, title: "Review & Submit Request" },
] as const;

const BADGES = [
    { icon: Clock, label: "1–2 Business Days" },
    { icon: Lock, label: "Secure Submission" },
    { icon: ShieldCheck, label: "For Sun Life Advisors" },
];

const STEP1_FIELDS: (keyof CPCFormValues)[] = ["name", "email", "number"];
const STEP2_FIELDS: (keyof CPCFormValues)[] = ["policyNumber", "productName", "effectiveDate", "maturityDate"];

export default function RequestForm() {
    const {
        register,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
    } = useForm<CPCFormValues>();

    const [step, setStep] = useState(0);
    const [direction, setDirection] = useState(1);
    const [attachment, setAttachment] = useState<File | null>(null);
    const [submitState, setSubmitState] = useState<SubmitState>("idle");

    const values = watch();

    const goNext = async () => {
        if (step === 0) {
            const valid = await trigger(STEP1_FIELDS);
            if (!valid) return;
        }
        if (step === 1) {
            const valid = await trigger(STEP2_FIELDS);
            if (!valid) return;
        }
        setDirection(1);
        setStep((s) => Math.min(s + 1, STEPS.length - 1));
    };

    const goBack = () => {
        setDirection(-1);
        setStep((s) => Math.max(s - 1, 0));
    };

    const onSubmit = async () => {
        setSubmitState("loading");
        await new Promise((resolve) => setTimeout(resolve, 1400));
        setSubmitState("success");
    };

    const variants = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -24 : 24 }),
    };

    return (
        <div className="relative rounded-[32px] border border-[#ECECEC] bg-white p-8 shadow-xl sm:p-12">
            <div className="mb-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">Request</p>
                <h3 className="mt-2 text-2xl font-bold text-[#111111] sm:text-[28px]">Request a Client Policy Card Design</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    For Sun Life Financial Advisors requesting a customized Client Policy Card for their clients.
                </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-2.5">
                {BADGES.map((badge) => (
                    <div
                        key={badge.label}
                        className="flex items-center gap-2 rounded-full border border-[#ECECEC] bg-[#FAFAFA] px-4 py-2"
                    >
                        <badge.icon className="h-3.5 w-3.5 shrink-0 text-[#D4AF37]" />
                        <span className="text-xs font-medium text-[#374151]">{badge.label}</span>
                    </div>
                ))}
            </div>

            <div className="mb-10 flex items-center gap-3">
                {STEPS.map((s, index) => (
                    <div key={s.id} className="flex flex-1 items-center gap-3">
                        <div className="flex items-center gap-2.5">
                            <motion.div
                                animate={{
                                    backgroundColor: index <= step ? "#D4AF37" : "#F3F4F6",
                                    color: index <= step ? "#FFFFFF" : "#9CA3AF",
                                }}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                            >
                                {index < step ? <CheckCircle2 className="h-4 w-4" /> : s.id}
                            </motion.div>
                            <div className="hidden sm:block">
                                <p className="text-[9px] uppercase tracking-[0.16em] text-[#9CA3AF]">Step {s.id}</p>
                                <p className={`text-xs font-medium ${index <= step ? "text-[#111111]" : "text-[#9CA3AF]"}`}>{s.title}</p>
                            </div>
                        </div>
                        {index < STEPS.length - 1 && (
                            <div className="h-px flex-1 bg-[#ECECEC]">
                                <motion.div
                                    className="h-px bg-[#D4AF37]"
                                    animate={{ width: index < step ? "100%" : "0%" }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative min-h-[320px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        {step === 0 && (
                            <motion.div
                                key="step-1"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                            >
                                <div className="sm:col-span-2">
                                    <FloatingField
                                        label="Name"
                                        icon={User}
                                        {...register("name", { required: true })}
                                        error={Boolean(errors.name)}
                                    />
                                </div>
                                <FloatingField
                                    label="Email"
                                    icon={Mail}
                                    type="email"
                                    {...register("email", { required: true })}
                                    error={Boolean(errors.email)}
                                />
                                <FloatingField
                                    label="Number"
                                    icon={Phone}
                                    type="tel"
                                    {...register("number", { required: true })}
                                    error={Boolean(errors.number)}
                                />
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                key="step-2"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <FloatingField
                                        label="Policy Number"
                                        icon={IdCard}
                                        {...register("policyNumber", { required: true })}
                                        error={Boolean(errors.policyNumber)}
                                    />
                                    <FloatingField
                                        label="Product Name"
                                        icon={Package}
                                        {...register("productName", { required: true })}
                                        error={Boolean(errors.productName)}
                                    />
                                    <FloatingField
                                        label="Effective Date"
                                        icon={Calendar}
                                        type="date"
                                        {...register("effectiveDate", { required: true })}
                                        error={Boolean(errors.effectiveDate)}
                                    />
                                    <FloatingField
                                        label="Maturity Date"
                                        icon={CalendarClock}
                                        type="date"
                                        {...register("maturityDate", { required: true })}
                                        error={Boolean(errors.maturityDate)}
                                    />
                                </div>
                                <FloatingField label="Beneficiaries (optional)" icon={Users} {...register("beneficiaries")} />
                                <FloatingField as="textarea" label="Coverage Details" icon={FileSignature} {...register("coverageDetails")} />
                                <FloatingField as="textarea" label="Comment" icon={MessageSquare} {...register("comment")} />
                                <UploadZone onFileSelected={setAttachment} />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step-3"
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-5"
                            >
                                <div className="flex items-center gap-3 rounded-2xl border border-[#ECECEC] bg-[#FAFAFA] px-5 py-4">
                                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                                    <p className="text-xs leading-relaxed text-[#374151]">
                                        Review the details below. Once submitted, Team Padua will review the request and follow up with
                                        an updated status.
                                    </p>
                                </div>

                                <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {[
                                        ["Name", values.name],
                                        ["Email", values.email],
                                        ["Number", values.number],
                                        ["Policy Number", values.policyNumber],
                                        ["Product Name", values.productName],
                                        ["Effective Date", values.effectiveDate],
                                        ["Maturity Date", values.maturityDate],
                                        ["Beneficiaries", values.beneficiaries],
                                        ["Comment", values.comment],
                                        ["Attachment", attachment?.name ?? "Not provided"],
                                    ].map(([label, value]) => (
                                        <div key={label} className="rounded-xl border border-[#ECECEC] bg-white px-4 py-3">
                                            <dt className="text-[10px] uppercase tracking-wide text-[#9CA3AF]">{label}</dt>
                                            <dd className="mt-1 truncate text-sm text-[#111111]">{value || "—"}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center gap-3">
                    {step > 0 && submitState === "idle" && (
                        <button
                            type="button"
                            onClick={goBack}
                            className="rounded-2xl border border-[#ECECEC] px-6 py-4 text-sm font-medium text-[#6B7280] transition-colors hover:border-[#D1D5DB] hover:text-[#111111]"
                        >
                            Back
                        </button>
                    )}

                    {step < STEPS.length - 1 ? (
                        <button
                            type="button"
                            onClick={goNext}
                            className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F4D67A] text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Continue
                        </button>
                    ) : (
                        <div className="flex-1">
                            <SubmitButton state={submitState} />
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}