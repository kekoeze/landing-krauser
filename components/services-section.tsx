"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Code, FileText, PenTool, ShoppingCart } from 'lucide-react';
import SectionHeader from '@/components/section-header';
import ParallaxSection from '@/components/parallax-section';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const services = [
    {
      icon: ShoppingCart,
      title: 'Tienda E-commerce',
      description:
        'Tienda online lista para vender con pagos, catálogo, carrito y panel de administración.',
      features: [
        'MercadoPago integrado',
        'Carrito de compras',
        'Gestión de inventario',
        'Panel de administración',
        'SEO optimizado',
      ],
    },
    {
      icon: FileText,
      title: 'Landing Page',
      description:
        'Página enfocada a la conversión para campañas, servicios y captación de leads.',
      features: [
        'Diseño único',
        'Optimizada para conversión',
        'Formularios de contacto',
        'Integración con analytics',
        'Carga ultra rápida',
      ],
    },
    {
      icon: PenTool,
      title: 'Sitio Web Blog',
      description:
        'Sitio web de blog profesional con sistema de gestión de contenido, categorías, comentarios y herramientas SEO avanzadas.',
      features: [
        'Sistema de gestión de contenido',
        'Categorías y etiquetas',
        'Sistema de comentarios',
        'Newsletter integrado',
        'SEO avanzado',
        'Soporte extendido',
      ],
    },
    {
      icon: Code,
      title: 'Desarrollo Personalizado',
      description:
        'Software a medida: integraciones, automatizaciones y sistemas internos escalables.',
      features: [
        'Análisis de requerimientos',
        'Arquitectura personalizada',
        'Escalabilidad garantizada',
        'Documentación completa',
        'Soporte continuo',
      ],
    },
  ];

  return (
    <ParallaxSection id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16">
          <SectionHeader
            title="SERVICIOS PENSADOS PARA CRECER ONLINE"
            subtitle="Desde presencia online hasta sistemas personalizados, creamos herramientas adaptadas a tus objetivos."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.05 + index * 0.08 }}
              className="relative flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-white shadow-[0_12px_26px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/70 flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-[color:hsl(var(--primary))]" />
                </div>
                <p className="text-sm font-bold tracking-[0.18em] text-[color:hsl(var(--primary))] uppercase">
                  {service.title}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.description}</p>

              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 text-[color:hsl(var(--primary))]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="gradient"
                className="mt-auto w-full font-semibold"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Solicitar Presupuesto
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
