"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { UploadCloud, FileText, CheckCircle2, X } from "lucide-react";

interface UploadZoneProps {
    onFileSelected: (file: File | null) => void;
}

export default function UploadZone({ onFileSelected }: UploadZoneProps) {
    const [file, setFile] = useState<File | null>(null);
    const [isOver, setIsOver] = useState(false);
    const [progress, setProgress] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback(
        (nextFile: File | null) => {
            setFile(nextFile);
            onFileSelected(nextFile);
            if (!nextFile) return;

            setProgress(0);
            const interval = setInterval(() => {
                setProgress((p) => {
                    if (p >= 100) {
                        clearInterval(interval);
                        return 100;
                    }
                    return p + 14;
                });
            }, 90);
        },
        [onFileSelected]
    );

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsOver(false);
        const dropped = e.dataTransfer.files?.[0] ?? null;
        if (dropped) handleFile(dropped);
    };

    const handleRemove = () => {
        handleFile(null);
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div>
            <AnimatePresence mode="wait">
                {!file ? (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsOver(true);
                        }}
                        onDragLeave={() => setIsOver(false)}
                        onDrop={handleDrop}
                        onClick={() => inputRef.current?.click()}
                        className={`group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[20px] border-2 border-dashed px-6 py-12 text-center backdrop-blur-xl transition-all duration-300 ${isOver ? "border-[#d4af37] bg-[#d4af37]/[0.06]" : "border-white/15 bg-white/[0.02] hover:border-white/30"
                            }`}
                    >
                        <motion.span
                            animate={isOver ? { y: -6, scale: 1.06 } : { y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-[#f0d998]/10 text-[#f0d998]"
                        >
                            <UploadCloud className="h-6 w-6" />
                        </motion.span>
                        <div>
                            <p className="text-sm font-medium text-white">
                                <span className="text-[#f0d998]">Click to upload</span> or drag and drop
                            </p>
                            <p className="mt-1 text-xs text-white/40">PNG, JPG, or PDF — up to 10MB</p>
                        </div>
                        <input
                            ref={inputRef}
                            type="file"
                            accept="image/png,image/jpeg,application/pdf"
                            className="hidden"
                            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        key="filled"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        className="flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                    >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#f0d998]/10 text-[#f0d998]">
                            <FileText className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-white">{file.name}</p>
                            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    className="h-full rounded-full bg-gradient-to-r from-[#d4af37] to-[#f0d998]"
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        </div>
                        {progress >= 100 ? (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                        ) : (
                            <span className="shrink-0 text-xs text-white/40">{progress}%</span>
                        )}
                        <button
                            type="button"
                            onClick={handleRemove}
                            aria-label="Remove file"
                            className="shrink-0 rounded-full p-1.5 text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}