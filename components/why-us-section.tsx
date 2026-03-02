"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, Crown, Zap, Shield, Clock } from 'lucide-react';

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const comparisons = [
    { feature: 'Desarrollo a medida', us: true, others: false },
    { feature: 'IA real implementada', us: true, others: false },
    { feature: 'Soporte 24/7', us: true, others: false },
    { feature: 'Escalabilidad garantizada', us: true, others: true },
    { feature: 'Código de calidad', us: true, others: true },
    { feature: 'Precios competitivos', us: true, others: false },
  ];

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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Por qué elegirnos?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No somos una agencia más. Somos tus socios tecnológicos en la construcción del futuro digital.
          </p>
        </motion.div>


        {/* Advantages Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="glass-effect-strong rounded-xl p-6 group hover:neon-glow transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-xl mx-auto mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {advantage.title}
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para transformar tu empresa?
            </h3>
            <p className="text-gray-300 mb-6">
              Sumate a las empresas que ya están viviendo en el futuro con nuestras soluciones.
            </p>
            <button 
              className="btn-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 neon-glow"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Comenzar ahora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}