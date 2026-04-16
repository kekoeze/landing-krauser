"use client";

import * as React from "react";
import { motion, type Transition, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type RotateDirection = "top" | "bottom";
type StaggerFrom = "first" | "last" | "center" | number;

type Text3DFlipProps = {
  className?: string;
  textClassName?: string;
  flipTextClassName?: string;
  rotateDirection?: RotateDirection;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  transition?: Transition;
  flipTo?: string;
  children: string;
};

function getDelays(length: number, from: StaggerFrom, step: number) {
  const delays = new Array<number>(length).fill(0);
  if (length <= 1) return delays;

  const indices = Array.from({ length }, (_, i) => i);

  let ordered: number[] = indices;
  if (from === "last") ordered = indices.slice().reverse();
  else if (from === "center") {
    const center = (length - 1) / 2;
    ordered = indices.slice().sort((a, b) => Math.abs(a - center) - Math.abs(b - center));
  } else if (typeof from === "number") {
    const pivot = Math.max(0, Math.min(length - 1, from));
    ordered = indices.slice().sort((a, b) => Math.abs(a - pivot) - Math.abs(b - pivot));
  }

  ordered.forEach((idx, order) => {
    delays[idx] = order * step;
  });

  return delays;
}

export default function Text3DFlip({
  className,
  textClassName,
  flipTextClassName,
  rotateDirection = "top",
  staggerDuration = 0.03,
  staggerFrom = "first",
  transition = { type: "spring", damping: 25, stiffness: 160 },
  flipTo,
  children,
}: Text3DFlipProps) {
  const base = children ?? "";
  const flip = flipTo ?? base;

  const maxLen = Math.max(base.length, flip.length);
  const basePadded = base.padEnd(maxLen, " ");
  const flipPadded = flip.padEnd(maxLen, " ");

  const delays = React.useMemo(
    () => getDelays(maxLen, staggerFrom, staggerDuration),
    [maxLen, staggerFrom, staggerDuration]
  );

  const fromRotate = rotateDirection === "top" ? -90 : 90;
  const toRotate = -fromRotate;

  const parentVariants: Variants = {
    rest: {},
    hover: {},
  };

  const letterVariants: Variants = {
    rest: { rotateX: 0 },
    hover: (delay: number) => ({
      rotateX: toRotate,
      transition: { ...transition, delay },
    }),
  };

  return (
    <motion.span
      className={cn(
        "group inline-flex select-none [perspective:1000px]",
        className
      )}
      aria-label={`${base} → ${flip}`}
      variants={parentVariants}
      initial="rest"
      whileHover="hover"
    >
      {Array.from({ length: maxLen }).map((_, i) => {
        const a = basePadded[i] ?? " ";
        const b = flipPadded[i] ?? " ";
        const isSpace = a === " " && b === " ";

        return (
          <motion.span
            key={i}
            className={cn(
              "relative inline-block align-baseline",
              "h-[1em] w-[0.62em] sm:w-[0.66em]",
              isSpace ? "opacity-0" : ""
            )}
          >
            <motion.span
              className="absolute inset-0 [transform-style:preserve-3d]"
              style={{ transformOrigin: rotateDirection === "top" ? "top" : "bottom" }}
              variants={letterVariants}
              custom={delays[i]}
            >
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  "[backface-visibility:hidden]",
                  textClassName
                )}
                style={{ transform: "translateZ(1px)" }}
              >
                {a}
              </span>
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center",
                  "[backface-visibility:hidden]",
                  flipTextClassName
                )}
                style={{ transform: `rotateX(${fromRotate}deg) translateZ(1px)` }}
              >
                {b}
              </span>
            </motion.span>
          </motion.span>
        );
      })}
    </motion.span>
  );
}

