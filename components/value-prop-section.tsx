"use client";

import { motion } from "framer-motion";
import { BadgeCheck, HandCoins, Timer } from "lucide-react";
import SectionHeader from "@/components/section-header";
import ParallaxSection from "@/components/parallax-section";

const benefits = [
  {
    icon: HandCoins,
    title: "PLANES DE PAGO",
    subtitle: "TRANSFERENCIA / EFECTIVO",
  },
  {
    icon: Timer,
    title: "ENTREGA RÁPIDA",
    subtitle: "2 A 4 SEMANAS",
  },
  {
    icon: BadgeCheck,
    title: "GARANTÍA TOTAL",
    subtitle: "30 DÍAS",
  },
] as const;

export default function ValuePropSection() {
  return (
    <ParallaxSection id="value" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            title="CREAMOS SOLUCIONES PARA HACER CRECER TU NEGOCIO"
            subtitle="Desarrollamos soluciones pensadas para simplificar, optimizar y hacer crecer tu negocio."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-[0_18px_44px_rgba(15,23,42,0.08)] p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_12px_26px_rgba(15,23,42,0.10)]">
                <item.icon className="h-7 w-7 text-[color:var(--brand-magenta)]" />
              </div>

              <h3 className="text-base font-extrabold tracking-[0.18em] text-[color:var(--brand-purple)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold tracking-[0.12em] text-[color:var(--brand-body)]">
                {item.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}

