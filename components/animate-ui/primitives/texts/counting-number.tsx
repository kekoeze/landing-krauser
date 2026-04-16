"use client";

import * as React from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type CountingNumberProps = {
  number: number;
  fromNumber?: number;
  padStart?: boolean;
  decimalSeparator?: string;
  decimalPlaces?: number;
  delay?: number;
  className?: string;
};

function formatNumber(
  value: number,
  {
    decimalSeparator = ".",
    decimalPlaces = 0,
    padStart = false,
    targetIntegerLength,
  }: {
    decimalSeparator?: string;
    decimalPlaces?: number;
    padStart?: boolean;
    targetIntegerLength: number;
  }
) {
  const fixed = value.toFixed(decimalPlaces);
  const [intPart, decPart] = fixed.split(".");

  const intStr = padStart ? intPart.padStart(targetIntegerLength, "0") : intPart;
  if (decimalPlaces <= 0) return intStr;

  return `${intStr}${decimalSeparator}${decPart ?? ""}`;
}

export function CountingNumber({
  number,
  fromNumber = 0,
  padStart = false,
  decimalSeparator = ".",
  decimalPlaces = 0,
  delay = 0,
  className,
}: CountingNumberProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const mv = useMotionValue(fromNumber);
  const [display, setDisplay] = React.useState(() =>
    formatNumber(fromNumber, {
      decimalSeparator,
      decimalPlaces,
      padStart,
      targetIntegerLength: Math.max(1, Math.floor(Math.abs(number)).toString().length),
    })
  );

  const targetIntegerLength = React.useMemo(
    () => Math.max(1, Math.floor(Math.abs(number)).toString().length),
    [number]
  );

  React.useEffect(() => {
    if (!inView) return;

    const controls = animate(mv, number, {
      duration: 1.2,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(
          formatNumber(latest, {
            decimalSeparator,
            decimalPlaces,
            padStart,
            targetIntegerLength,
          })
        );
      },
    });

    return () => controls.stop();
  }, [inView, mv, number, delay, decimalSeparator, decimalPlaces, padStart, targetIntegerLength]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  );
}

