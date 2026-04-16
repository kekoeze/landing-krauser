"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { Award, Headphones, Sparkles, Target, Users } from 'lucide-react';
import ParallaxSection from '@/components/parallax-section';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import SectionHeader from '@/components/section-header';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats: Array<{ icon: typeof Award; label: string; renderValue: ReactNode }> = [
    {
      icon: Award,
      label: 'Años de experiencia',
      renderValue: (
        <span className="inline-flex items-baseline gap-0.5">
          <CountingNumber number={4} fromNumber={0} delay={0.12} className="text-4xl font-black tracking-tight" />
          <span className="text-3xl font-black">+</span>
        </span>
      ),
    },
    {
      icon: Users,
      label: 'Proyectos completados',
      renderValue: (
        <span className="inline-flex items-baseline gap-0.5">
          <CountingNumber number={50} fromNumber={0} delay={0.18} className="text-4xl font-black tracking-tight" />
          <span className="text-3xl font-black">+</span>
        </span>
      ),
    },
    {
      icon: Target,
      label: 'Clientes satisfechos',
      renderValue: (
        <span className="inline-flex items-baseline gap-0.5">
          <CountingNumber number={100} fromNumber={0} delay={0.24} className="text-4xl font-black tracking-tight" />
          <span className="text-3xl font-black">%</span>
        </span>
      ),
    },
    {
      icon: Headphones,
      label: 'Soporte técnico',
      renderValue: <span className="text-4xl font-black tracking-tight">24/7</span>,
    },
  ];

  return (
    <ParallaxSection id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionHeader
            title="NOSOTROS"
            subtitle="Somos una agencia de desarrollo de software e IA. Construimos productos escalables para empresas que necesitan velocidad, claridad y resultados."
            className="mb-12"
          />

          <div className="grid items-start gap-10 lg:grid-cols-12">
            <motion.div
              className="space-y-6 lg:col-span-7"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.75, delay: 0.05 }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(192,38,211,0.10),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(108,26,235,0.10),transparent_60%)]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-slate-600">
                    MISIÓN
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#6C1AEB]">Nuestra Misión</h3>
                  <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-body)]">
                    Transformamos la manera en que las empresas argentinas interactúan con la tecnología, creando soluciones
                    que no solo resuelven problemas actuales, sino que anticipan las necesidades del futuro digital.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(108,26,235,0.10),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(192,38,211,0.08),transparent_60%)]" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-slate-600">
                    VALORES
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#6C1AEB]">Nuestros Valores</h3>

                  <ul className="mt-5 space-y-4 text-[color:var(--brand-body)]">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C026D3]/12 ring-1 ring-[#C026D3]/20">
                        <Sparkles className="h-3.5 w-3.5 text-[#C026D3]" />
                      </span>
                      <p className="text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-slate-950">Innovación:</span> siempre a la vanguardia de la tecnología.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C026D3]/12 ring-1 ring-[#C026D3]/20">
                        <Sparkles className="h-3.5 w-3.5 text-[#C026D3]" />
                      </span>
                      <p className="text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-slate-950">Transparencia:</span> comunicación clara y directa.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C026D3]/12 ring-1 ring-[#C026D3]/20">
                        <Sparkles className="h-3.5 w-3.5 text-[#C026D3]" />
                      </span>
                      <p className="text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-slate-950">Calidad:</span> excelencia en cada línea de código.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-5"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.75, delay: 0.12 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.06 }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(192,38,211,0.12),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(108,26,235,0.10),transparent_60%)]" />

                  <div className="relative">
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70">
                      <stat.icon className="h-6 w-6 text-[#C026D3]" />
                    </div>

                    <div className="text-[#6C1AEB]">{stat.renderValue}</div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.18em] text-slate-600 sm:text-sm">
                      {stat.label.toUpperCase()}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}