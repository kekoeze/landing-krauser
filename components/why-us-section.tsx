"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Crown, Zap, Shield, Clock } from 'lucide-react';
import SectionHeader from '@/components/section-header';
import ParallaxSection from '@/components/parallax-section';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const advantages = [
    {
      icon: Crown,
      title: 'Experiencia Premium',
      description: 'Más de 4 años perfeccionando soluciones digitales avanzadas para empresas argentinas.',
    },
    {
      icon: Zap,
      title: 'Desarrollo Ágil',
      description: 'Metodologías modernas que aceleran el tiempo de entrega sin comprometer la calidad.',
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Implementamos las mejores prácticas de seguridad en cada proyecto que desarrollamos.',
    },
    {
      icon: Clock,
      title: 'Soporte Continuo',
      description: 'Acompañamiento post-lanzamiento para asegurar el éxito de tu proyecto.',
    },
  ];

  return (
    <ParallaxSection className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16">
          <SectionHeader
            title="¿Por qué elegirnos?"
            subtitle="No somos una agencia más. Somos tus socios tecnológicos en la construcción del futuro digital."
          />
        </div>


        {/* Advantages Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 flex items-center justify-center">
                <advantage.icon className="h-7 w-7 text-[color:hsl(var(--primary))]" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {advantage.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </ParallaxSection>
  );
}