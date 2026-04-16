"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  neon?: boolean;
  className?: string;
};

export function GradientText({ text, neon = false, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent whitespace-pre-line",
        "bg-[linear-gradient(90deg,#8A2BE2_0%,#A855F7_28%,#C026D3_62%,#E879F9_100%)]",
        neon
          ? "drop-shadow-[0_0_18px_rgba(192,38,211,0.35)]"
          : "drop-shadow-[0_6px_22px_rgba(138,43,226,0.10)]",
        className
      )}
    >
      {text}
    </span>
  );
}

