"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, ShoppingCart, Cloud, Smartphone, Link, BarChart } from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Smartphone,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos, desde landing pages hasta complejas aplicaciones web, optimizados para el rendimiento y la experiencia del usuario.',
      features: ['Landing Pages', 'Sitios Corporativos', 'Aplicaciones Web'],
      gradient: 'from-teal-600 to-green-600',
      bgGradient: 'gradient-bg-1',
    },

    {
      icon: ShoppingCart,
      title: 'Ecommerce a Medida',
      description: 'Tiendas online personalizadas que convierten visitantes en clientes. Integradas con MercadoPago y otros medios de pago argentinos.',
      features: ['Diseño responsivo', 'MercadoPago integrado', 'Gestión de inventario'],
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'gradient-bg-2',
    },
    {
      icon: Cloud,
      title: 'Soluciones en la Nube',
      description: 'Infraestructura escalable en AWS, Google Cloud para el crecimiento de tu empresa.',
      features: ['Escalabilidad automática', 'Monitoreo 24/7', 'Backup automático'],
      gradient: 'from-cyan-600 to-teal-600',
      bgGradient: 'gradient-bg-3',
    },
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description: 'Integraciones inteligentes con ChatGPT, Gemini y Claude para automatizar y optimizar tus procesos de negocio.',
      features: ['Chatbots inteligentes' ,'Automatización de procesos'],
      gradient: 'from-purple-600 to-blue-600',
      bgGradient: 'gradient-bg-1',
    },
    {
      icon: Link,
      title: 'Integraciones',
      description: 'Conectamos tus sistemas existentes para crear un ecosistema digital unificado y eficiente.',
      features: ['APIs REST/GraphQL', 'Webhooks', 'Sincronización en tiempo real'],
      gradient: 'from-green-600 to-purple-600',
      bgGradient: 'gradient-bg-2',
    },
    {
      icon: BarChart,
      title: 'Automatización',
      description: 'Optimizamos tus procesos empresariales con automatización inteligente que ahorra tiempo y reduce errores.',
      features: ['Workflows automáticos', 'Reportes inteligentes', 'Notificaciones personalizadas'],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-3',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-48 -left-48"></div>
        <div className="floating-orb-2 top-1/2 -right-40"></div>
        <div className="floating-orb-3 -bottom-32 left-1/3"></div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br "></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
           <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           Soluciones tecnológicas avanzadas diseñadas para impulsar tu empresa hacia el futuro digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`glass-card-hover rounded-2xl p-8 group relative overflow-hidden ${service.bgGradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-700/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors group-hover:translate-x-2 transform duration-300">
                    Conocer más →
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}