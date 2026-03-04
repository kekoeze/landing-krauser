"use client";

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  type LucideIcon,
  ExternalLink,
  ShoppingCart,
  PenTool,
  Monitor,
  ArrowRight,
  ArrowLeft,
  Zap,
  Dumbbell,
  UtensilsCrossed,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useTheme } from 'next-themes';

type AgileProject = {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  gradient: string;
  bgGradient: string;
  icon: LucideIcon;
  url: string;
  badgeLabel: string;
};

const agileProjects: AgileProject[] = [
  {
    id: 1,
    title: 'Evan - Sistema de gestión comercial',
    category: 'SaaS',
    type: 'Plataforma integral de gestión comercial',
    description:
        'Evan centraliza y automatiza la operación comercial en un solo entorno, integrando inteligencia artificial, ecommerce en tiempo real, control de stock, ventas, créditos y facturación electrónica.',
    image: '/dashboard-evan.jpg',
    features: [
      'Inteligencia artificial integrada para optimizar catálogos y recomendaciones',
      'Gestión de ventas con métricas avanzadas y reportes en tiempo real',
      'Ecommerce sincronizado instantáneamente con stock y precios',
      'Administración de créditos, fiados y pagos pendientes',
      'Control de inventario con alertas automáticas e inteligencia de stock',
      'Integración con ARCA y supervisión en tiempo real del negocio',
    ],
    technologies: ['IA', 'Ecommerce', 'Analytics', 'Integraciones'],
    gradient: 'from-blue-600 to-emerald-600',
    bgGradient: 'gradient-bg-2',
    icon: ShoppingCart,
    url: 'https://webevan.krauser.com.ar/#/pages/landing',
    badgeLabel: 'SaaS Inteligente',
  },
  {
    id: 2,
    title: 'Plataforma de Blog',
    category: 'Software a medida',
    type: 'Plataforma editorial para posicionamiento y captación',
    description:
      'Solución editorial pensada para publicar contenido con rapidez, ordenar la información, mejorar el posicionamiento orgánico y convertir visitas en una audiencia activa para la marca.',
    image: '/blog.png',
    features: [
      'Panel autogestionable para crear, editar y publicar artículos sin depender de terceros',
      'Organización por categorías y etiquetas para mejorar navegación y descubrimiento de contenido',
      'Espacio de comentarios para fortalecer comunidad e interacción con la audiencia',
      'Captación de suscriptores mediante integración con newsletter y formularios de registro',
      'Optimización SEO para aumentar visibilidad en buscadores y atraer tráfico calificado',
      'Difusión integrada en redes sociales para amplificar el alcance de cada publicación',
    ],
    technologies: ['Autogestión', 'SEO', 'Newsletter', 'Comunidad digital'],
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'gradient-bg-3',
    icon: PenTool,
    url: 'https://tiny-strudel-111dfb.netlify.app/',
    badgeLabel: 'Contenido que convierte',
  },
  {
    id: 3,
    title: 'TEDxViedma',
    category: 'Desarrollo a medida',
    type: 'Plataforma institucional para evento en vivo',
    description:
      'Desarrollamos, implementamos y mantenemos el ecosistema digital completo de TEDxViedma, combinando software a medida, infraestructura y soporte continuo para una operación de alta exigencia.',
    image: '/tedxviedma_home.png',
    features: [
      'Landing institucional con foco en narrativa, agenda y conversión',
      'Sistema de inscripción y acceso al streaming',
      'Panel administrativo con gestión de contenidos y permisos',
      'Gestión centralizada de oradores, sponsors e inscriptos',
      'Automatizaciones internas para reducir carga operativa',
      'Soporte técnico continuo antes, durante y después del evento',
    ],
    technologies: ['Software a medida', 'Backoffice', 'Infraestructura', 'Automatizaciones'],
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'gradient-bg-2',
    icon: Monitor,
    url: '/partners/tedxviedma#alcance',
    badgeLabel: 'Partner Tecnológico',
  },

  {
    id: 5,
    title: 'Academia bogado - Padel',
    category: 'Desarrollo a medida',
    type: 'Plataforma para la gestión de turnos, alumnos y pagos',
    description:
      'La plataforma funciona como un sistema integral de gestión académica y deportiva, centralizando la administración de alumnos, pagos, planes, categorías, horarios, reservas y reportes para ordenar toda la operación del espacio.',
    image: '/academiabogado_home.png',
    features: [
      'Gestión de alumnos con altas, administración y visualización de estados',
      'Control de pagos con ingresos mensuales, vencimientos y búsqueda por alumno o concepto',
      'Planes de precio configurables para modalidad individual, pareja o grupal',
      'Categorías por nivel y género, con gestión de estado activa o inactiva',
      'Asignación de horarios semanales, cupos máximos, reservas y lista de espera',
      'Reportes administrativos con estadísticas, accesos rápidos y seguimiento operativo',
    ],
    technologies: ['Backoffice', 'Pagos', 'Reservas', 'Reportes'],
    gradient: 'from-blue-600 to-cyan-600',
    bgGradient: 'gradient-bg-2',
    icon: Zap,
    url: 'https://academiabogado.com.ar/',
    badgeLabel: 'Plataforma a medida',
  },
  {
    id: 6,
    title: 'GymPro',
    category: 'SaaS',
    type: 'Plataforma de gestión para gimnasios y entrenadores',
    description:
      'GymPro centraliza la gestión deportiva y administrativa en un solo sistema, permitiendo manejar alumnos, rutinas, ejercicios, planes y pagos de forma ordenada y escalable.',
    image: '/gympro_home.png',
    features: [
      'Dashboard con métricas clave de alumnos, ingresos y rendimiento',
      'Gestión de alumnos con perfiles, rutinas asignadas y planes de pago',
      'Creación de rutinas personalizadas y organización por bloques de entrenamiento',
      'Biblioteca de ejercicios con imágenes, videos y categorías',
      'Administración de planes de suscripción con precios y condiciones',
      'Registro de pagos, ingresos totales y control de pendientes',
    ],
    technologies: ['Dashboard', 'Backoffice', 'Suscripciones', 'Reportes'],
    gradient: 'from-emerald-600 to-teal-600',
    bgGradient: 'gradient-bg-3',
    icon: Dumbbell,
    url: '#contact',
    badgeLabel: 'Fitness SaaS',
  },
  {
    id: 7,
    title: 'Miviandita',
    category: 'SaaS',
    type: 'ERP gastronómico para viandas y pedidos',
    description:
      'Miviandita es una plataforma SaaS para negocios gastronómicos que venden viandas, centralizando órdenes, clientes, productos, catálogos semanales y comunicación en una sola herramienta escalable.',
    image: '/miviandita_home.png',
    features: [
      'Gestión de órdenes con búsqueda, filtros y control de estado de pedido y pago',
      'Administración de clientes con importación desde WhatsApp y mensajes masivos',
      'Registro de viandas con nombre, descripción, precio e imagen',
      'Catálogos semanales en formato Kanban organizados por día',
      'Gestión de grupos de WhatsApp para comunicación segmentada',
      'Planes escalables con reportes, multiusuario e integraciones según el negocio',
    ],
    technologies: ['ERP', 'WhatsApp', 'Kanban', 'Suscripciones'],
    gradient: 'from-amber-600 to-orange-600',
    bgGradient: 'gradient-bg-1',
    icon: UtensilsCrossed,
    url: '/#contact',
    badgeLabel: 'Food SaaS',
  },
  {
    id: 4,
    title: 'Azulmia - Tienda Artesanal',
    category: 'Ecommerce',
    type: 'Tienda online de artesanías personalizadas',
    description:
        'Azulmia Artesanías integra una tienda online orientada al cliente con un panel de administración completo, permitiendo vender artesanías personalizadas, mantener el catálogo actualizado, controlar stock y gestionar imágenes, categorías y consultas desde un solo entorno.',
    image: '/kLHsavcOy8 copy copy.jpg',
    features: [
      'Catálogo online con vinchas, pulseras, decoraciones y accesorios personalizados',
      'Organización por categorías temáticas, búsqueda y galería visual de productos',
      'Precios visibles, stock disponible y pagos seguros con Mercado Pago, tarjetas y transferencias',
      'Formulario de contacto para pedidos personalizados, cotizaciones y consultas directas',
      'Panel administrativo para crear, editar y eliminar productos con control de stock',
      'Gestión interna de categorías, imágenes, actividad reciente y accesos rápidos operativos',
    ],
    technologies: ['Ecommerce', 'Panel admin', 'Mercado Pago', 'Gestión de stock'],
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'gradient-bg-1',
    icon: ShoppingCart,
    url: 'https://azulmia.store/',
    badgeLabel: 'Tienda Online',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % agileProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + agileProjects.length) % agileProjects.length);
  };

  const currentProj = agileProjects[currentProject];
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isLightTheme = mounted && currentTheme === 'light';
  const featuredPanelBackground = isLightTheme
    ? 'bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.94)_32%,rgba(219,234,254,0.84)_72%,rgba(224,242,254,0.76)_100%)]'
    : currentProj.bgGradient;
  const featuredPanelOverlay = isLightTheme
    ? 'bg-gradient-to-br from-sky-200/35 via-blue-200/10 to-transparent'
    : 'bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent';

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
      </div>

      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Nuestros Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conozca algunos de nuestros proyectos destacados y cómo acompañamos a distintas empresas en la evolución de su presencia digital mediante soluciones modernas.
          </p>
        </motion.div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="glass-effect-strong rounded-2xl overflow-hidden mb-12 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className={`relative h-96 lg:h-auto overflow-hidden ${featuredPanelBackground}`}>
                <div className={`absolute inset-0 ${featuredPanelOverlay}`}></div>
                <motion.div
                  key={currentProj.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <div className="absolute inset-4 z-10 overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_30px_rgba(15,23,42,0.18)]">
                    <Image
                      src={currentProj.image}
                      alt={currentProj.title}
                      fill
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </motion.div>

                <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2 transform">
                  <button
                    onClick={prevProject}
                    className="rounded-full border border-white/15 bg-slate-950/65 p-3 backdrop-blur-sm transition-all duration-300 group hover:neon-glow"
                    aria-label="Proyecto anterior"
                  >
                    <ArrowLeft className="h-6 w-6 text-white group-hover:text-purple-400" />
                  </button>
                </div>

                <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2 transform">
                  <button
                    onClick={nextProject}
                    className="rounded-full border border-white/15 bg-slate-950/65 p-3 backdrop-blur-sm transition-all duration-300 group hover:neon-glow"
                    aria-label="Proyecto siguiente"
                  >
                    <ArrowRight className="h-6 w-6 text-white group-hover:text-purple-400" />
                  </button>
                </div>
              </div>

              <div className={`p-8 lg:p-12 relative ${featuredPanelBackground}`}>
                <div className={`absolute inset-0 ${featuredPanelOverlay}`}></div>

                <motion.div
                  key={currentProj.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative z-10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r `}>
                      <currentProj.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                      {currentProj.category}
                    </span>

                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{currentProj.title}</h3>
                  <p className="text-purple-400 font-medium mb-4">{currentProj.type}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{currentProj.description}</p>

                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">Características principales:</h4>
                    <ul className="space-y-2">
                      {currentProj.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-3">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 glass-card rounded-full text-xs text-gray-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="btn-gradient text-white font-semibold group"
                    onClick={() => window.open(currentProj.url, '_blank', 'noopener,noreferrer')}
                  >
                    Ver proyecto
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center space-x-3 mb-12">
            {agileProjects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ver ${project.title}`}
              />
            ))}
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {agileProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`glass-card-hover rounded-xl overflow-hidden group cursor-pointer ${
                  index === currentProject ? 'ring-2 ring-blue-500/50' : ''
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setCurrentProject(index)}
              >
                <div className={`relative h-48 overflow-hidden ${project.bgGradient}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                </div>

                <div className="p-4">
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs">{project.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
