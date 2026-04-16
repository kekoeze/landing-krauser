"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";

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
      <div className="mx-auto mb-4 flex justify-center">
        <Image src="/isologo.png" alt="Krauser" width={56} height={56} className="h-14 w-14" />
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
        <GradientText text={title} className="font-bold" />
      </h2>

      {subtitle ? (
        <p className="mt-4 text-lg text-[color:var(--brand-body)] max-w-3xl mx-auto">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}

