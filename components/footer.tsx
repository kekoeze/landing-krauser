"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const InstagramIcon = () => <span className="text-lg">📷</span>;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Servicios': [
      'Ecommerce',
      'Integraciones',
      'Automatización',
      'Desarrollo Web',
      'Consultoría Técnica',
    ],
    'Empresa': [
      'Sobre nosotros',
      'Casos de éxito',
      'Blog',
      'Trabajá con nosotros',
      'Contacto',
    ],
    'Recursos': [
      'Documentación',
      'Soporte',
      'FAQ',
      'Términos de servicio',
      'Política de privacidad',
    ],
  };

  const socialLinks = [
    { 
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      href: 'https://www.instagram.com/krauser2021k/', 
      label: 'Instagram' 
    },
  ];

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-border">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/logo-fir.png"
                alt="Krauser Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <p className="text-secondary mb-6 leading-relaxed">
              Desarrollamos el futuro del software con soluciones innovadoras de IA, 
              cloud y automatización para empresas argentinas visionarias.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:neon-glow transition-all duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary font-bold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          className="glass-effect rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary font-bold text-xl mb-6 text-center">
            ¿Tenés un proyecto en mente?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="text-secondary">contacto@krauser.com.ar</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-secondary">+54 2920 707402</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-green-500" />
              <span className="text-secondary">Viedma, Rio Negro, Argentina</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted text-sm mb-4 md:mb-0">
            © {currentYear} Krauser. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-1 text-sm">
            <span className="text-muted"></span>
            <span className="text-muted"></span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}