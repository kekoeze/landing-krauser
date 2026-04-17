"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/section-header";
import ParallaxSection from "@/components/parallax-section";
import type { LucideIcon } from "lucide-react";
import { CalendarClock, CreditCard, ShieldCheck } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  mobileTitle?: string;
  mobileSubtitle?: string;
};

const benefits: Benefit[] = [
  {
    icon: CreditCard,
    title: "ESTRUCTURA DE PAGOS CLARA",
    subtitle: "Definida desde el inicio",
    mobileTitle: "PAGOS CLAROS",
    mobileSubtitle: "Desde el inicio",
  },
  {
    icon: CalendarClock,
    title: "PLANIFICACIÓN POR ETAPAS",
    subtitle: "Con tiempos estimados reales",
    mobileTitle: "ETAPAS",
    mobileSubtitle: "Tiempos reales",
  },
  {
    icon: ShieldCheck,
    title: "CALIDAD Y RESPALDO",
    subtitle: "En cada uno de los proyectos",
    mobileTitle: "RESPALDO",
    mobileSubtitle: "En cada proyecto",
  },
];

export default function ValuePropSection() {
  return (
    <ParallaxSection id="value" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionHeader
            title="Creamos herramientas digitales que hacen tu negocio más eficiente."
            subtitle="Desarrollamos soluciones pensadas para simplificar, optimizar y hacer crecer tu negocio."
          />
        </div>

        {/* Mobile: 1 sola línea (sin separar en bloques) */}
        <div className="sm:hidden">
          <div className="grid grid-cols-3 gap-2">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white/85 px-2 py-2 text-center shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-[0_10px_22px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70">
                  <item.icon className="h-[18px] w-[18px] text-[#DE3DD3]" aria-hidden="true" />
                </div>
                <div className="mt-2 text-xs font-bold leading-snug text-slate-900">
                  {item.mobileTitle ?? item.title}
                </div>
                <div className="mt-1 text-xs leading-relaxed text-slate-600">
                  {item.mobileSubtitle ?? item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* sm+: cards */}
        <div className="hidden gap-6 sm:grid sm:grid-cols-3">
          {benefits.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group rounded-3xl border border-slate-200/80 bg-white/85 p-2 text-center shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_52px_rgba(15,23,42,0.14)]"
            >
              <div className="rounded-[22px] bg-white p-2">
                  <div className="mx-auto flex max-w-[240px] flex-col items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 transition-transform duration-300 group-hover:scale-[1.02]">
                      <item.icon className="h-7 w-7 text-[#DE3DD3]" aria-hidden="true" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.subtitle}
                      </p>
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

