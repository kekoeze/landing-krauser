"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, ShoppingCart, FileText, PenTool, Monitor, ArrowRight, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentProject, setCurrentProject] = useState(0);

  const streamlinedProjects = [
    {
      id: 1,
      title: 'Azulmia - Tienda Artesanal',
      category: 'Solución Rápida',
      type: 'Marketplace Artesanal',
      description: 'Marketplace especializado en productos artesanales con galería visual, sistema de pedidos y gestión de artesanos.',
      image: '/kLHsavcOy8 copy copy.jpg',
      features: [
        'Galería visual de productos artesanales',
        'Perfiles de artesanos y sus historias',
        'Sistema de pedidos personalizado',
        'Gestión de inventario por artesano',
        'Experiencia de compra inmersiva',
        'Procesamiento seguro de pagos'
      ],
      technologies: ['PHP', 'JavaScript', 'MySQL', 'CSS3'],
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'gradient-bg-1',
      icon: ShoppingCart,
      url: 'https://azulmia.store/',
      entregaRapida: true,
    },
    {
      id: 2,
      title: 'Plataforma de Blog',
      category: 'Solución Rápida',
      type: 'Gestión de Contenido',
      description: 'Plataforma de blog profesional con sistema de gestión de contenido, categorías, comentarios y herramientas SEO.',
      image: '/chrome_LohFGtTflb.png',
      features: [
        'Editor de contenido enriquecido',
        'Sistema de categorías y etiquetas',
        'Gestión de comentarios',
        'Integración con newsletter',
        'Funciones SEO avanzadas',
        'Integración con redes sociales'
      ],
      technologies: ['PHP', 'MySQL', 'CSS3', 'JavaScript'],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'gradient-bg-3',
      icon: PenTool,
      url: 'https://tiny-strudel-111dfb.netlify.app/',
      entregaRapida: true,
    },
    {
      id: 3,
      title: 'Landing Page',
      category: 'Solución Rápida',
      type: 'Sitio Web Comercial',
      description: 'Página de aterrizaje moderna optimizada para conversiones con diseño atractivo y elementos de llamada a la acción efectivos.',
      image: '/chrome_FKVw0kKxVS.png',
      features: [
        'Diseño único personalizado',
        'Optimización para conversiones',
        'Formularios de contacto',
        'Integración con analytics',
        'Carga ultra rápida',
        'Diseño responsivo'
      ],
      technologies: ['HTML/CSS', 'PHP', 'JavaScript', 'Bootstrap'],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'gradient-bg-2',
      icon: Monitor,
      url: 'https://webevan.krauser.com.ar/#/pages/landing',
      entregaRapida: true,
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % streamlinedProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + streamlinedProjects.length) % streamlinedProjects.length);
  };

  const currentProj = streamlinedProjects[currentProject];

  return (
    <section id="portfolio" className="py-20 relative ">
      {/* Floating Orbs Background */}
      <div className="absolute inset-0">
        <div className="floating-orb-1 -top-40 -right-40"></div>
        <div className="floating-orb-2 bottom-1/4 -left-48"></div>
        <div className="floating-orb-3 top-1/3 left-1/4"></div>
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
            <span className="gradient-text">Nuestros Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestros trabajos destacados y cómo hemos ayudado a empresas a transformar su presencia digital con soluciones modernas.
          </p>
        </motion.div>

        {/* Streamlined Solutions Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-yellow-500 mr-3" />
             <h3 className="text-3xl font-bold text-white">Proyectos Web Comunes</h3>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <Zap className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-yellow-400 font-semibold">Entrega Rápida Disponible</span>
            </div>
          </div>

          {/* Featured Project Display */}
          <motion.div
            className="glass-effect-strong rounded-2xl overflow-hidden mb-12 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
                    {currentProj.entregaRapida && (
                      <div className="flex items-center px-2 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                        <Zap className="w-3 h-3 text-yellow-500 mr-1" />
                        <span className="text-yellow-400 text-xs font-medium">Entrega Rápida</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {currentProj.title}
                  </h3>
                  
                  <p className="text-purple-400 font-medium mb-4">
                    {currentProj.type}
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentProj.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">Características Principales:</h4>
                    <ul className="space-y-2">
                      {currentProj.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-bold mb-3">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProj.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glass-card rounded-full text-xs text-gray-300 border border-purple-500/20"
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
                    Ver Proyecto
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Project Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-12">
            {streamlinedProjects.map((_, index) => (
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

          {/* All Streamlined Projects Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {streamlinedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`glass-card-hover rounded-xl overflow-hidden group cursor-pointer ${
                  index === currentProject ? 'ring-2 ring-purple-500/50' : ''
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setCurrentProject(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                      <project.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Quick Delivery Badge */}
                  {project.entregaRapida && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center px-2 py-1 bg-yellow-500/90 rounded-full">
                        <Zap className="w-3 h-3 text-white mr-1" />
                        <span className="text-white text-xs font-medium">Rápido</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {project.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}