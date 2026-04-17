"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className={`text-center ${className ?? ""}`}
    >
      {/*
        Marca Krauser (SectionHeader en cada sección): solo logotipo horizontal, sin isologo.
        Los <span> son decoración bajo el wordmark (brillo + línea con primary).
      */}
  

      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        <span className="font-bold text-[#9933FF]">{title}</span>
      </h2>

      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--brand-body)] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}

