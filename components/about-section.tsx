"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Award, value: '4+', label: 'Años de experiencia' },
    { icon: Users, value: '50+', label: 'Proyectos completados' },
    { icon: Target, value: '100%', label: 'Clientes satisfechos' },
    { icon: Zap, value: '24/7', label: 'Soporte técnico' },
  ];

  return (
    <section id="about" className="py-20 relative ">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-2 -top-32 -right-32"></div>
        <div className="floating-orb-3 bottom-0 -left-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">¿Quiénes somos?</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Fundada en 2021, Krauser nació con la visión de transformar ideas en soluciones digitales innovadoras para empresas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect-strong p-8 rounded-2xl relative overflow-hidden gradient-bg-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestra Misión</h3>
                <p className="text-secondary leading-relaxed">
                  Transformamos la manera en que las empresas argentinas interactúan con la tecnología, 
                  creando soluciones que no solo resuelven problemas actuales, sino que anticipan 
                  las necesidades del futuro digital.
                </p>
              </div>
            </div>

            <div className="glass-effect-strong p-8 rounded-2xl relative overflow-hidden gradient-bg-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-600/10"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-4">Nuestros Valores</h3>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-lg shadow-blue-500/50"></div>
                    <span><strong>Innovación:</strong> Siempre a la vanguardia de la tecnología</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-lg shadow-blue-500/50"></div>
                    <span><strong>Transparencia:</strong> Comunicación clara y directa</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-lg shadow-blue-500/50"></div>
                    <span><strong>Calidad:</strong> Excelencia en cada línea de código</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card-hover p-6 rounded-xl text-center group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3 group-hover:scale-110 group-hover:text-blue-400 transition-all duration-300" />
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                  <div className="text-sm text-muted group-hover:text-secondary transition-colors">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}