"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxSectionProps = {
  id?: string;
  className?: string;
  intensity?: number;
  decorations?: boolean;
  children: React.ReactNode;
};

export default function ParallaxSection({
  id,
  className,
  intensity = 70,
  // Por pedido: fondo 100% blanco (sin gradientes/decoraciones)
  decorations = false,
  children,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 0.98]);

  return (
    <section ref={ref} id={id} className={["relative overflow-hidden", className].filter(Boolean).join(" ")}>
      {decorations ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-y-40 inset-x-0 will-change-transform"
          style={{ y, rotate, scale }}
        />
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  );
}

