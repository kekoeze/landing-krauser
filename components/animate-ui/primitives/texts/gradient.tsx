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
        "whitespace-pre-line text-[#9933FF]",
        neon
          ? "drop-shadow-[0_0_20px_rgba(153,51,255,0.35)]"
          : "drop-shadow-[0_6px_22px_rgba(153,51,255,0.18)]",
        className
      )}
    >
      {text}
    </span>
  );
}

