"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TechnologiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    {
      category: 'Inteligencia Artificial',
      items: [
        { name: 'ChatGPT', logo: '🤖' },
        { name: 'Claude AI', logo: '🧠' },
        { name: 'Google Gemini', logo: '💎' },
        { name: 'TensorFlow', logo: '🔬' },
      ],
      gradient: 'gradient-bg-1',
    },
    {
      category: 'Ecommerce',
      items: [
        { name: 'WooCommerce', logo: '🏪' },
        { name: 'Shopify', logo: '🛍️' },
        { name: 'Soluciones Custom', logo: '⚙️' },
        { name: 'Laravel E-commerce', logo: '🛒' },
      ],
      gradient: 'gradient-bg-2',
    },
    {
      category: 'Medios de Pago',
      items: [
        { name: 'Mercado Pago', logo: '💳' },
        { name: 'Stripe', logo: '💰' },
        { name: 'PayPal', logo: '💵' },
        { name: 'Transferencias', logo: '🏦' },
      ],
      gradient: 'gradient-bg-3',
    },
    {
      category: 'Cloud e Infraestructura',
      items: [
        { name: 'AWS', logo: '☁️' },
        { name: 'Google Cloud', logo: '🌐' },
        { name: 'Microsoft Azure', logo: '🔷' },
        { name: 'Docker', logo: '🐳' },
      ],
      gradient: 'gradient-bg-1',
    },
    {
      category: 'Desarrollo',
      items: [
        { name: 'Laravel (PHP)', logo: '🔴' },
        { name: 'Node.js', logo: '🟢' },
        { name: 'React/Next.js', logo: '⚛️' },
        { name: 'TypeScript', logo: '📝' },
      ],
      gradient: 'gradient-bg-2',
    },
    {
      category: 'Bases de Datos',
      items: [
        { name: 'PostgreSQL', logo: '🐘' },
        { name: 'MongoDB', logo: '🍃' },
        { name: 'Redis', logo: '🔴' },
        { name: 'Supabase', logo: '⚡' },
      ],
      gradient: 'gradient-bg-3',
    },
  ];

  return (
    <section id="technologies" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 top-1/4 -left-32"></div>
        <div className="floating-orb-3 -bottom-40 -right-32"></div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 "></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
           <span className="gradient-text">Tecnologías que Dominamos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           Trabajamos con las tecnologías más avanzadas del mercado para garantizar soluciones de vanguardia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={`glass-effect-strong rounded-2xl p-8 relative overflow-hidden ${category.gradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      className="glass-card rounded-lg p-4 text-center group hover:glass-effect-strong transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {tech.logo}
                      </div>
                      <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}