"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  neon?: boolean;
  className?: string;
  /** Si se define, reemplaza el estilo legacy violeta por texto con degradé (bg-clip). */
  gradient?: string;
  /** Animación del degradé (usa `transition` + animación de `backgroundPosition`). */
  animated?: boolean;
  transition?: Transition;
};

export function GradientText({
  text,
  neon = false,
  className,
  gradient,
  animated = false,
  transition,
}: GradientTextProps) {
  const shouldAnimate = animated || Boolean(transition);

  if (gradient) {
    const motionTransition: Transition = {
      repeat: Infinity,
      ease: "linear",
      duration: 3.2,
      ...transition,
    };

    const sharedStyle: React.CSSProperties = {
      backgroundImage: gradient,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      backgroundSize: "200% 200%",
    };

    if (shouldAnimate) {
      return (
        <motion.span
          className={cn(
            "inline-block whitespace-pre-line bg-clip-text",
            neon
              ? "drop-shadow-[0_0_20px_rgba(32,176,254,0.22)]"
              : "drop-shadow-[0_6px_22px_rgba(32,176,254,0.16)]",
            className
          )}
          style={sharedStyle}
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={motionTransition}
        >
          {text}
        </motion.span>
      );
    }

    return (
      <span
        className={cn(
          "inline-block whitespace-pre-line bg-clip-text",
          neon
            ? "drop-shadow-[0_0_20px_rgba(32,176,254,0.22)]"
            : "drop-shadow-[0_6px_22px_rgba(32,176,254,0.16)]",
          className
        )}
        style={sharedStyle}
      >
        {text}
      </span>
    );
  }

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

