"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Users, Zap } from "lucide-react";
import SectionHeader from "@/components/section-header";

const stats = [
  { icon: Award, value: "4+", label: "Años de experiencia" },
  { icon: Users, value: "50+", label: "Proyectos completados" },
  { icon: Target, value: "100%", label: "Clientes satisfechos" },
  { icon: Zap, value: "24/7", label: "Soporte técnico" },
];

export default function ResultsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12">
          <SectionHeader
            title="Resultados que respaldan nuestro trabajo"
            subtitle="Enfoque en claridad, performance y conversiones. Menos “efectos”, más negocio."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.06 }}
              className="rounded-2xl border border-slate-200/80 bg-white/65 p-6 text-center shadow-[0_14px_34px_rgba(148,163,184,0.18)] backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-[0_14px_34px_rgba(0,0,0,0.26)]"
            >
              <stat.icon className="mx-auto h-7 w-7 text-[color:hsl(var(--primary))]" />
              <div className="mt-3 text-3xl font-bold text-[color:hsl(var(--primary))]">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

