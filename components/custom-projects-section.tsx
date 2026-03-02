"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Shield, ShoppingCart, BarChart3, Code, Database, Globe, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function CustomProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión de Licencias de Salud',
      client: 'Provincia de Río Negro',
      category: 'Sistema Gubernamental',
      type: 'Plataforma Web Personalizada',
      description: 'Plataforma web desarrollada para el sector salud público de la provincia de Río Negro. Permite a los profesionales de la salud gestionar sus licencias profesionales de forma eficiente y segura.',
      image: '/GueZeUYnuP.png',
      clientNeed: 'La provincia necesitaba digitalizar y modernizar el proceso de gestión de licencias profesionales de salud, eliminando trámites presenciales y optimizando tiempos de respuesta.',
      solution: 'Desarrollamos una plataforma web completa que automatiza todo el proceso de licencias, desde el registro inicial hasta la renovación, con panel administrativo robusto para gestión gubernamental.',
      features: [
        'Registro en línea para profesionales de la salud',
        'Sistema de renovación y desactivación de licencias',
        'Panel de administración para gestión de usuarios',
        'Interfaz optimizada y fácil de usar',
        'Integración con bases de datos gubernamentales',
        'Sistema de notificaciones automáticas',
        'Reportes y estadísticas en tiempo real',
        'Seguridad de nivel gubernamental'
      ],
      technologies: ['Laravel (PHP)', 'Livewire', 'MySQL', 'Bootstrap', 'JavaScript'],
      url: 'https://test-salud.rionegro.gov.ar/',
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'gradient-bg-1',
      icon: Shield,
      duration: '8 meses',
      team: '4 desarrolladores',
    },
    {
      id: 2,
      title: 'Escabiados - E-commerce de Bebidas',
      client: 'Emprendedor Local',
      category: 'Comercio Electrónico',
      type: 'Tienda Online Personalizada',
      description: 'Solución de comercio electrónico totalmente personalizada para la venta de bebidas alcohólicas y no alcohólicas en localidad específica, con enfoque en experiencia del usuario y conversión.',
      image: '/chrome_wLfuwLnGrm.png',
      clientNeed: 'Un emprendedor local necesitaba una plataforma de e-commerce especializada en bebidas, con sistema de entrega localizado y gestión de inventario específica para su modelo de negocio.',
      solution: 'Creamos una tienda online completa con catálogo dinámico, sistema de pagos integrado, gestión de entregas localizadas y panel administrativo para control total del negocio.',
      features: [
        'Catálogo dinámico de productos con filtros avanzados',
        'Carrito de compras optimizado para conversión',
        'Proceso de pago seguro y simplificado',
        'Integración con múltiples pasarelas de pago',
        'Sistema de entrega localizado con zonas',
        'Gestión de inventario en tiempo real',
        'Panel administrativo completo',
        'Sistema de promociones y descuentos'
      ],
      technologies: ['Laravel (PHP)', 'Livewire', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
      url: 'https://escabiados.com.ar',
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-2',
      icon: ShoppingCart,
      duration: '6 meses',
      team: '3 desarrolladores',
    },
    {
      id: 3,
      title: 'Evan - Sistema de gestión comercial',
      client: 'Tienda Minorista',
      category: 'Sistema Empresarial',
      type: 'Producto Principal',
      description: 'Nuestro producto estrella es el avanzado Sistema de Gestión Comercial, fruto de más de    dos años de desarrollo. Este software está diseñado para optimizar de manera integral sus operaciones comerciales y ofrecerle una visión detallada y precisa de toda su actividad comercial.',
      image: '/Imagen de WhatsApp 2025-07-07 a las 17.52.56_c511e788.jpg',
      clientNeed: 'Los comercios minoristas enfrentan una limitación crítica: la fragmentación de sus sistemas. La gestión moderna exige una plataforma centralizada que supere los sistemas de Punto de Venta tradicionales.',
      solution: 'Desarrollamos un sistema TPV robusto con arquitectura escalable, integraciones de pago, gestión completa de inventario y catálogo web público para consultas remotas.',
      features: [
        'Seguimiento de inventario y ventas en tiempo real',
        'Integración completa con Mercado Pago',
        'Gestión avanzada de empleados y turnos',
        'Sistema de notas y crédito/fiado',
        'Configuración de horarios comerciales',
        'Catálogo web público para consulta de precios',
        'Reportes detallados y analytics',
        'Sistema de backup automático'
      ],
      technologies: ['Spring Boot (Java)', 'Angular', 'PostgreSQL', 'TypeScript', 'Material Design'],
      url: 'https://evan.krauser.com.ar',
      gradient: 'from-purple-600 to-blue-600',
      bgGradient: 'gradient-bg-3',
      icon: BarChart3,
      duration: '24 meses',
      team: '5 desarrolladores',
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section className="py-20 relative ">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
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
            <span className="gradient-text">Proyectos Personalizados</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Casos reales de soluciones desarrolladas a medida para nuestros clientes. 
            Cada proyecto refleja nuestro compromiso con la excelencia y la innovación.
          </p>
        </motion.div>

        {/* Featured Project Display */}
        <motion.div
          className="glass-effect-strong rounded-2xl overflow-hidden mb-12 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={currentProj.image}
                  alt={currentProj.title}
                  fill
                  className="object-contain bg-white"
                />
              </motion.div>
              
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevProject}
                  className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300 group"
                >
                  <ArrowLeft className="w-6 h-6 text-white group-hover:text-purple-400" />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextProject}
                  className="p-3 glass-effect rounded-full hover:neon-glow transition-all duration-300 group"
                >
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-purple-400" />
                </button>
              </div>
            </div>

            {/* Project Info */}
            <div className={`p-8 lg:p-12 relative ${currentProj.bgGradient}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"></div>
              
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10"
              >
                {/* Category Badge */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentProj.gradient}`}>
                    <currentProj.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                    {currentProj.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-primary mb-2">
                  {currentProj.title}
                </h3>
                
                <p className="text-purple-400 font-medium mb-2">
                  Cliente: {currentProj.client}
                </p>
                
                <p className="text-secondary mb-6 leading-relaxed">
                  {currentProj.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-muted mb-1">Duración</div>
                    <div className="text-sm font-semibold text-primary">{currentProj.duration}</div>
                  </div>
                  <div className="glass-card p-3 rounded-lg">
                    <div className="text-xs text-muted mb-1">Equipo</div>
                    <div className="text-sm font-semibold text-primary">{currentProj.team}</div>
                  </div>
                </div>

                {/* Client Need */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    Necesidad del Cliente:
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {currentProj.clientNeed}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-blue-500" />
                    Nuestra Solución:
                  </h4>
                  <p className="text-sm text-secondary leading-relaxed">
                    {currentProj.solution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-primary font-bold mb-3 flex items-center">
                    <Database className="w-4 h-4 mr-2 text-green-500" />
                    Tecnologías utilizadas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProj.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 glass-card rounded-full text-xs text-secondary border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <Button 
                  className="btn-gradient text-white font-semibold group"
                  onClick={() => window.open(currentProj.url, '_blank')}
                >
                  <Globe className="mr-2 w-4 h-4" />
                  Visitar Sitio Web
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-purple-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Features Grid for Current Project */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            Características Principales - {currentProj.title}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentProj.features.map((feature, index) => (
              <motion.div
                key={`${currentProject}-${index}`}
                className="glass-card-hover p-4 rounded-xl text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full mx-auto mb-3 group-hover:scale-125 transition-transform"></div>
                <p className="text-sm text-secondary group-hover:text-primary transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Summary */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`glass-card-hover rounded-xl p-6 group cursor-pointer relative overflow-hidden ${
                index === currentProject ? 'ring-2 ring-purple-500/50' : ''
              }`}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setCurrentProject(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-purple-400 mb-2">
                  {project.client}
                </p>
                
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  {project.type}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}