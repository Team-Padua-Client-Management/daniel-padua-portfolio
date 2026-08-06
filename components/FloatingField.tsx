"use client";

import {
    forwardRef,
    useId,
    useState,
    type InputHTMLAttributes,
    type TextareaHTMLAttributes,
    type FocusEvent,
    type ChangeEvent,
} from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface BaseProps {
    label: string;
    icon?: LucideIcon;
    error?: boolean;
    as?: "input" | "textarea";
}

type FloatingFieldProps = BaseProps &
    Partial<InputProps> &
    Partial<TextareaProps>;

const FloatingField = forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    FloatingFieldProps
>(
    (
        {
            label,
            icon: Icon,
            error,
            as = "input",
            className,
            defaultValue,
            value,
            onFocus,
            onBlur,
            onChange,
            ...rest
        },
        ref
    ) => {
        const id = useId();

        const [focused, setFocused] = useState(false);

        const [hasValue, setHasValue] = useState(
            Boolean(defaultValue ?? value)
        );

        const inputClass = `peer w-full h-14 rounded-2xl border bg-white px-4 pb-2.5 pt-6 text-sm text-[#111111] placeholder-transparent outline-none transition-all duration-300 ${error
            ? "border-red-400"
            : focused
                ? "border-[#D4AF37]"
                : "border-[#ECECEC] hover:border-[#D1D5DB]"
            } ${Icon ? "pl-11" : ""} ${as === "textarea" ? "h-auto pt-6 pb-3" : ""} ${className ?? ""}`;

        const handleFocus = (
            e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFocused(true);
            (onFocus as any)?.(e);
        };

        const handleBlur = (
            e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFocused(false);
            setHasValue(Boolean(e.target.value));
            (onBlur as any)?.(e);
        };

        const handleChange = (
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setHasValue(Boolean(e.target.value));
            (onChange as any)?.(e);
        };

        return (
            <div className="relative">
                <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    animate={{
                        boxShadow: focused
                            ? "0 0 0 4px rgba(212,175,55,0.14)"
                            : "0 0 0 0 rgba(212,175,55,0)",
                    }}
                    transition={{ duration: 0.3 }}
                />

                {Icon && (
                    <span className="pointer-events-none absolute left-4 top-7 -translate-y-1/2 text-[#9CA3AF]">
                        <Icon size={16} />
                    </span>
                )}

                {as === "textarea" ? (
                    <textarea
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        id={id}
                        rows={4}
                        placeholder={label}
                        defaultValue={defaultValue as string}
                        value={value as string}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={inputClass}
                        {...(rest as TextareaProps)}
                    />
                ) : (
                    <input
                        ref={ref as React.Ref<HTMLInputElement>}
                        id={id}
                        placeholder={label}
                        defaultValue={defaultValue as string}
                        value={value as string}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={inputClass}
                        {...(rest as InputProps)}
                    />
                )}

                <label
                    htmlFor={id}
                    className={`pointer-events-none absolute transition-all duration-300 ${Icon ? "left-11" : "left-4"
                        } ${focused || hasValue
                            ? "top-2.5 text-[10px] uppercase tracking-[0.14em] text-[#B4923A]"
                            : "top-1/2 -translate-y-1/2 text-sm text-[#9CA3AF]"
                        }`}
                >
                    {label}
                </label>
            </div>
        );
    }
);

FloatingField.displayName = "FloatingField";

export default FloatingField;