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
      price: '350.000 al año (pago único)',
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
      price: '150.000 al año (pago único)',
      description:
        'Página enfocada a la conversión para campañas, servicios y captación de leads.',
      features: [
        'Diseño único',
        'Optimizada para conversión',
        'Formularios de contacto',
        'Carga ultra rápida',
        'SEO optimizado',
      ],
    },
    {
      icon: PenTool,
      title: 'Sitio Web Blog',
      price: '350.000 al año (pago único)',
      description:
        'Blog con publicaciones editables, categorías, comentarios y SEO. Soporte extendido.',
      features: [
        'Publicaciones y páginas editables',
        'Categorías y etiquetas',
        'Comentarios',
        'SEO optimizado',
        'Soporte extendido',
      ],
    },
    {
      icon: Code,
      title: 'Desarrollo Personalizado',
      price: 'Según requerimientos',
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
    <ParallaxSection id="services" className="py-10 sm:py-12">
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
              className="relative flex h-full min-h-[22rem] flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-8 sm:p-9 shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:min-h-[24rem] lg:min-h-[26rem]"
            >
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 items-center justify-center text-[#DE3DD3]">
                  <service.icon className="h-10 w-10" strokeWidth={2.35} aria-hidden />
                </div>
                <p className="text-sm font-bold tracking-[0.18em] text-[color:hsl(var(--primary))] uppercase">
                  {service.title}
                </p>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3.5 text-sm text-slate-700">
                    <Check className="mt-0.5 h-6 w-6 shrink-0 text-[#DE3DD3]" strokeWidth={2.35} aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-10">
                <Button
                  variant="gradient"
                  className="w-full font-semibold"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {service.title === 'Desarrollo Personalizado'
                    ? 'Solicitar presupuesto'
                    : service.price}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
