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
        <span className="inline-flex items-baseline gap-0.5 font-bold text-[#252E49]">
          <CountingNumber number={4} fromNumber={0} delay={0.12} className="text-4xl tracking-tight" />
          <span className="text-3xl">+</span>
        </span>
      ),
    },
    {
      icon: Users,
      label: 'Proyectos completados',
      renderValue: (
        <span className="inline-flex items-baseline gap-0.5 font-bold text-[#252E49]">
          <CountingNumber number={13} fromNumber={0} delay={0.18} className="text-4xl tracking-tight" />
        </span>
      ),
    },
    {
      icon: Target,
      label: 'Clientes satisfechos',
      renderValue: (
        <span className="inline-flex items-baseline gap-0.5 font-bold text-[#252E49]">
          <CountingNumber number={100} fromNumber={0} delay={0.24} className="text-4xl tracking-tight" />
          <span className="text-3xl">%</span>
        </span>
      ),
    },
    {
      icon: Headphones,
      label: 'Soporte técnico',
      renderValue: (
        <span className="text-3xl font-bold tracking-tight text-[#252E49] sm:text-4xl">15 a 22 h</span>
      ),
    },
  ];

  return (
    <ParallaxSection id="about" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          <SectionHeader
            title="NOSOTROS"
            subtitle="Somos una agencia de desarrollo de software e IA. Construimos productos escalables para empresas que necesitan velocidad, claridad y resultados."
            className="mb-8"
          />

          <div className="grid items-stretch gap-10 lg:grid-cols-12">
            <motion.div
              className="grid h-full min-h-0 gap-6 md:grid-cols-2 md:items-stretch lg:col-span-7"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.75, delay: 0.05 }}
            >
              <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(192,38,211,0.10),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(108,26,235,0.10),transparent_60%)]" />
                <div className="relative flex min-h-0 flex-1 flex-col justify-center px-2">
                  <div className="inline-flex self-center items-center gap-2 rounded-full border border-[#252E49]/20 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#252E49]">
                    MISIÓN
                  </div>
                  <p className="mt-5 w-full text-left text-base leading-relaxed text-[#252E49]/85">
                    Transformamos la manera en que las empresas argentinas interactúan con la tecnología, creando soluciones
                    que no solo resuelven problemas actuales, sino que anticipan las necesidades del futuro digital.
                  </p>
                </div>
              </div>

              <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] md:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(108,26,235,0.10),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(192,38,211,0.08),transparent_60%)]" />
                <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-2 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#252E49]/20 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-[#252E49]">
                    VALORES
                  </div>
                  <ul className="mt-6 flex w-full max-w-md flex-col items-center space-y-4 text-[#252E49]/85">
                    <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 sm:text-left">
                      <span className="inline-flex shrink-0 items-center justify-center text-[#DE3DD3] sm:mt-0.5">
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="max-w-sm text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-[#252E49]">Innovación:</span> siempre a la vanguardia de la tecnología.
                      </p>
                    </li>
                    <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 sm:text-left">
                      <span className="inline-flex shrink-0 items-center justify-center text-[#DE3DD3] sm:mt-0.5">
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="max-w-sm text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-[#252E49]">Transparencia:</span> comunicación clara y directa.
                      </p>
                    </li>
                    <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-3 sm:text-left">
                      <span className="inline-flex shrink-0 items-center justify-center text-[#DE3DD3] sm:mt-0.5">
                        <Sparkles className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="max-w-sm text-sm leading-relaxed sm:text-base">
                        <span className="font-extrabold text-[#252E49]">Calidad:</span> excelencia en cada línea de código.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid h-full min-h-0 auto-rows-fr grid-cols-2 gap-4 sm:gap-5 lg:col-span-5"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.75, delay: 0.12 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative flex h-full min-h-0 flex-col justify-center overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.06 }}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(192,38,211,0.12),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(108,26,235,0.10),transparent_60%)]" />

                  <div className="relative">
                    <div className="mx-auto mb-4 flex justify-center">
                      <stat.icon className="h-7 w-7 text-[#DE3DD3]" aria-hidden />
                    </div>

                    <div>{stat.renderValue}</div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.18em] text-[#252E49]/75 sm:text-sm">
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