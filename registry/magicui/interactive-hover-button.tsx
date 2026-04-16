"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";

type InteractiveHoverButtonProps = ButtonProps & {
  asChild?: boolean;
};

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.985 }}
      >
        <button
          ref={ref}
          className={cn(
            buttonVariants({ variant, size }),
            "group relative overflow-hidden rounded-2xl",
            "text-white",
            // premium gradient
            "bg-[linear-gradient(135deg,#6D28D9_0%,#8A2BE2_28%,#C026D3_62%,#F472B6_100%)]",
            // subtle border + inner highlight
            "border border-white/18",
            "shadow-[0_14px_30px_rgba(88,28,135,0.22),0_10px_18px_rgba(192,38,211,0.10)] hover:shadow-[0_18px_42px_rgba(88,28,135,0.28),0_14px_22px_rgba(192,38,211,0.14)]",
            "transition-all duration-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C026D3]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
            className
          )}
          {...props}
        >
          {/* Inner bevel */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.14)]"
          />

          {/* Shine */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_60%)]"
            )}
          />
          {/* Moving highlight */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute -left-1/2 top-0 h-full w-1/2",
              "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)]",
              "translate-x-[-60%] group-hover:translate-x-[220%]",
              "transition-transform duration-700 ease-out"
            )}
          />

          <span className="relative inline-flex items-center justify-center gap-2 tracking-tight">
            {children}
          </span>
        </button>
      </motion.div>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

