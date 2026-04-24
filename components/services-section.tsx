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
  const whatsappBase = 'https://wa.me/5492920707402';
  const services = [
    {
      icon: ShoppingCart,
      title: 'Tienda E-commerce',
      price: '500.000 ARS anual',
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
      price: '150.000 ARS anual',
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
      price: '350.000 ARS anual',
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

  function getWhatsappMessage(service: { title: string; price: string; description: string }) {
    const header = `¡Hola! Quiero solicitar ${service.title}.`;
    const details = `\n\nServicio: ${service.title}\nPrecio: ${service.price}\n\n${service.description}`;
    const closing = `\n\n¿Podemos coordinar una propuesta?`;
    return `${header}${details}${closing}`;
  }

  return (
    <ParallaxSection id="services" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16">
          <SectionHeader
            title="SERVICIOS PENSADOS PARA CRECER ONLINE"
            subtitle="Desde presencia online hasta sistemas personalizados, creamos herramientas adaptadas a tus objetivos."
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.05 + index * 0.08 }}
              className="relative flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:p-9 lg:min-h-[26rem]"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex shrink-0 items-center justify-center text-[#DE3DD3]">
                  <service.icon className="h-7 w-7 sm:h-10 sm:w-10" strokeWidth={2.35} aria-hidden />
                </div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#252E49] uppercase sm:text-sm">
                  {service.title}
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:mt-5 sm:text-sm">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    className={[
                      "flex items-start gap-3 text-xs text-slate-700 sm:gap-3.5 sm:text-sm",
                      featureIndex >= 3 ? "hidden sm:flex" : "",
                    ].join(" ")}
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#DE3DD3] sm:h-6 sm:w-6"
                      strokeWidth={2.35}
                      aria-hidden
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto w-full pt-6 sm:pt-10">
                <Button
                  variant="gradient"
                  className="w-full font-semibold min-h-11 sm:min-h-12 h-auto px-3 sm:px-4 py-3 sm:py-3.5 text-[11px] sm:text-sm leading-tight whitespace-normal text-center break-words"
                  onClick={() => {
                    const message = encodeURIComponent(getWhatsappMessage(service));
                    window.open(`${whatsappBase}?text=${message}`, '_blank', 'noopener,noreferrer');
                  }}
                >
                  {service.price}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
