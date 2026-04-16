"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/section-header";
import ParallaxSection from "@/components/parallax-section";

type Benefit = {
  emoji: string;
  title: string;
  subtitle: string;
};

const benefits: Benefit[] = [
  {
    emoji: "💳",
    title: "ESTRUCTURA DE PAGOS CLARA",
    subtitle: "Definida desde el inicio",
  },
  {
    emoji: "📆",
    title: "PLANIFICACIÓN POR ETAPAS",
    subtitle: "Con tiempos estimados reales",
  },
  {
    emoji: "🔒",
    title: "CALIDAD Y RESPALDO",
    subtitle: "En cada entrega",
  },
];

export default function ValuePropSection() {
  return (
    <ParallaxSection id="value" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            title="Creamos herramientas digitales que hacen tu negocio más eficiente y rentable."
            subtitle="Desarrollamos soluciones pensadas para simplificar, optimizar y hacer crecer tu negocio."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-2 text-center shadow-[0_18px_45px_rgba(15,23,42,0.10)]"
            >
              <div className="rounded-[22px] bg-white p-2">
                <div className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50 p-6">
                  <div className="mx-auto flex max-w-[220px] flex-col items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {item.emoji}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-extrabold tracking-[0.18em] text-[color:var(--brand-purple)]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold tracking-[0.12em] text-[color:var(--brand-body)]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}

