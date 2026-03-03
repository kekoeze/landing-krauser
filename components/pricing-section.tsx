"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingCart, FileText, PenTool, Code, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: ShoppingCart,
      title: 'Tienda E-commerce',
      description: 'Tienda online completa con carrito de compras, MercadoPago integrado, gestión de inventario y panel administrativo.',
      features: [
        'Diseño responsivo',
        'Carrito de compras',
        'MercadoPago integrado',
        'Panel de administración',
        'SEO optimizado',
        'Soporte 3 meses'
      ],
      gradient: 'from-emerald-600 to-teal-600',
      bgGradient: 'gradient-bg-1',
      popular: true,
    },
    {
      icon: FileText,
      title: 'Landing Page',
      description: 'Página de aterrizaje optimizada para conversiones con diseño atractivo y llamadas a la acción efectivas.',
      features: [
        'Diseño único',
        'Optimizada para conversión',
        'Formularios de contacto',
        'Integración con analytics',
        'Carga ultra rápida',
        'Soporte 1 mes'
      ],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'gradient-bg-2',
      popular: false,
    },
    {
      icon: PenTool,
      title: 'Sitio Web Blog',
      description: 'Sitio web de blog profesional con sistema de gestión de contenido, categorías, comentarios y herramientas SEO avanzadas.',
      features: [
        'Sistema de gestión de contenido',
        'Categorías y etiquetas',
        'Sistema de comentarios',
        'Newsletter integrado',
        'SEO avanzado',
        'Soporte 2 meses'
      ],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'gradient-bg-3',
      popular: false,
    },
    {
      icon: Code,
      title: 'Desarrollo Personalizado',
      description: 'Desarrollo personalizado según tus necesidades específicas. Desde aplicaciones web hasta integraciones complejas.',
      features: [
        'Análisis de requerimientos',
        'Arquitectura personalizada',
        'Tecnologías a medida',
        'Escalabilidad garantizada',
        'Documentación completa',
        'Soporte extendido'
      ],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-1',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -left-40"></div>
        <div className="floating-orb-2 top-1/3 -right-48"></div>
        <div className="floating-orb-3 -bottom-40 left-1/4"></div>
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
           <span className="gradient-text">Nuestros Servicios Web</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           Soluciones web profesionales diseñadas para impulsar tu presencia digital y hacer crecer tu empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative glass-card-hover rounded-2xl p-8 group overflow-hidden flex flex-col h-full ${service.bgGradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                {/* Price */}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button
                  className={`w-full btn-glass text-white py-3 font-semibold group/btn mt-auto ${
                     ''
                  }`}
                >
                  {'Comenzar Proyecto'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass-effect-strong rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden gradient-bg-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesitás algo diferente?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Cada proyecto es único. Si tenés una idea específica o necesitás una combinación de servicios, 
                conversemos para crear la solución perfecta para tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-gradient text-white px-8 py-3 font-semibold"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Consulta Personalizada
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white glass-effect"
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver Portfolio
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Info */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">💳</div>
            <h4 className="text-white font-bold mb-2">Planes de Pago</h4>
            <p className="text-gray-400 text-sm">Financiación disponible hasta 12 cuotas</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🚀</div>
            <h4 className="text-white font-bold mb-2">Entrega Rápida</h4>
            <p className="text-gray-400 text-sm">Proyectos completados en 2-4 semanas promedio</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-2xl mb-3">🛡️</div>
            <h4 className="text-white font-bold mb-2">Garantía Total</h4>
            <p className="text-gray-400 text-sm">30 días de garantía en todos nuestros proyectos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
