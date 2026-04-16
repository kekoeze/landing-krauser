"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, MessageCircle, User, Loader2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/section-header';
import ParallaxSection from '@/components/parallax-section';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleWhatsAppContact = () => {
    const phoneNumber = '5492920707402'; // Argentina format for WhatsApp
    const message = encodeURIComponent(
      '¡Hola! Me interesa conocer más sobre los servicios de Krauser. Me gustaría recibir información sobre desarrollo web y soluciones tecnológicas.'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        // Error from server
        setErrorMessage(data.error || 'Error al enviar el mensaje');
        setShowError(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setShowError(false);
        }, 5000);
      }
    } catch (error) {
      // Network or other error
      setErrorMessage('Error de conexión. Verifica tu internet e intenta nuevamente.');
      setShowError(true);
      
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ParallaxSection id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-16">
          <SectionHeader
            title="Contacto"
            subtitle="Contanos qué querés construir. Respondemos con una propuesta clara y los próximos pasos."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_55px_rgba(15,23,42,0.14)]"
          >
            <h3 className="text-2xl font-bold text-slate-900">Hablemos</h3>
            <p className="mt-3 text-sm text-slate-600">
              Si ya tenés una idea, mandanos un mensaje. Si no, te ayudamos a definir alcance, tiempos y prioridades.
            </p>

            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-left shadow-[0_12px_26px_rgba(15,23,42,0.10)] hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)] transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[color:hsl(var(--secondary))]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">WhatsApp</p>
                    <p className="text-sm text-slate-600">+54 2920 707402</p>
                  </div>
                </div>
              </button>

              <a
                href="mailto:contacto@krauser.com.ar"
                className="block w-full rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-left shadow-[0_12px_26px_rgba(15,23,42,0.10)] hover:shadow-[0_14px_32px_rgba(15,23,42,0.14)] transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[color:hsl(var(--secondary))]" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">contacto@krauser.com.ar</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 px-5 py-4 text-sm text-slate-600">
              Tip: contanos objetivo, plazo y referencia visual. Con eso podemos estimar más rápido.
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 md:p-10 shadow-[0_20px_55px_rgba(15,23,42,0.14)]"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-400 font-semibold">¡Mensaje enviado exitosamente!</span>
                </div>
                <p className="text-green-300 text-sm">
                  Tu mensaje ha sido enviado a nuestro equipo. Te responderemos pronto.
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {showError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-red-400 font-semibold">Error al enviar</span>
                </div>
                <p className="text-red-300 text-sm">
                  {errorMessage}
                </p>
              </motion.div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Envíanos un mensaje</h3>
              <p className="text-slate-600">Completá el formulario y te respondemos a la brevedad.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Nombre *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Correo electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full pl-10 pr-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 glass-card rounded-lg border border-purple-500/20 bg-transparent text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Contanos sobre tu proyecto, necesidades específicas, presupuesto estimado, etc."
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full btn-gradient text-white py-4 font-semibold text-base group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Enviar mensaje
                    <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                  </>
                )}
              </Button>

              <div className="mt-4 text-center text-xs text-slate-500">
                Al enviar aceptás que te contactemos para coordinar una propuesta.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </ParallaxSection>
  );
}