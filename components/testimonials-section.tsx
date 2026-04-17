"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/section-header';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María González',
      position: 'CEO, TechStart',
      company: 'Startup Tecnológica',
      text: 'Krauser transformó completamente nuestra visión digital. Su implementación de IA nos permitió automatizar el 80% de nuestros procesos.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Carlos Mendoza',
      position: 'CTO, EcoShop',
      company: 'Ecommerce Sustentable',
      text: 'La plataforma de ecommerce que desarrollaron superó todas nuestras expectativas. Las ventas aumentaron un 300% en el primer trimestre.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Ana López',
      position: 'Directora de Marketing',
      company: 'Fashion Forward',
      text: 'Su enfoque en UX/UI y la integración con IA para personalización nos posicionó como líderes en nuestro sector.',
      rating: 5,
      avatar: '👩‍🎨',
    },
    {
      name: 'Roberto Silva',
      position: 'Founder, FinTech Pro',
      company: 'Servicios Financieros',
      text: 'La migración a cloud y las integraciones complejas fueron perfectas. Ahora procesamos 10x más transacciones sin problemas.',
      rating: 5,
      avatar: '👨‍💼',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16">
          <SectionHeader
            title="Lo que dicen nuestros clientes"
            subtitle="Casos de éxito reales de empresas que confiaron en nosotros para su transformación digital."
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="glass-effect rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Quote className="w-12 h-12 text-[color:hsl(var(--primary))] mb-6 mx-auto" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[color:hsl(var(--primary))] font-medium">
                    {testimonials[currentIndex].position}
                  </p>
                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-slate-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">98%</div>
            <div className="text-slate-500 dark:text-gray-400">Satisfacción del cliente</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">13</div>
            <div className="text-slate-500 dark:text-gray-400">Proyectos completados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">300%</div>
            <div className="text-slate-500 dark:text-gray-400">Crecimiento promedio</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
