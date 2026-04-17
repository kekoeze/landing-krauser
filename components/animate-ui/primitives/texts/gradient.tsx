"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  text: string;
  gradient?: string;
  neon?: boolean;
  transition?: Transition;
  className?: string;
} & React.ComponentProps<"span">;

export function GradientText({
  text,
  gradient = "linear-gradient(90deg,#20B0FE_0%,#8075E9_42%,#DE3DD3_72%,#20B0FE_100%)",
  neon = false,
  transition = { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
  className,
  ...props
}: GradientTextProps) {
  const baseStyle: React.CSSProperties = {
    backgroundImage: gradient,
  };

  return (
    <span className={cn("relative inline-block", className)} data-slot="gradient-text" {...props}>
      <motion.span
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        className="m-0 whitespace-pre-line text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon ? (
        <motion.span
          aria-hidden
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          className="m-0 absolute top-0 left-0 whitespace-pre-line text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%]"
          style={baseStyle}
          transition={transition}
        >
          {text}
        </motion.span>
      ) : null}
    </span>
  );
}

