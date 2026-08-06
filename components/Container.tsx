"use client";

import type { ElementType } from "react";
import type { ContainerProps } from "@/types";

export default function Container({
  children,
  className = "",
  as,
  ...props
}: ContainerProps) {
  const Component: any = as || "div";

  return (
    <Component
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}