"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GradientText } from '@/components/animate-ui/primitives/texts/gradient';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-14 sm:pt-28">
      {/* Fondo blanco plano (sin gradientes) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative order-2 lg:order-1"
          >
            {/* Media integrado al fondo (sin borde/sombra) */}
            <div
              className="relative h-[260px] w-full sm:h-[340px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundImage: "url('/evan-laptop.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                transform: 'translateZ(0)',
                // Máscara para fundir bordes con el fondo y evitar efecto “foto pegada”
                WebkitMaskImage:
                  'radial-gradient(closest-side at 55% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
                maskImage:
                  'radial-gradient(closest-side at 55% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)',
              }}
              aria-label="Evan"
              role="img"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="order-1 lg:order-2"
          >
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                <span className="relative inline-flex items-center gap-3">
                  <GradientText text="EVAN" className="font-extrabold tracking-tight" neon />
                  {/* Aurora shine encima del gradiente */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-clip-text text-transparent opacity-60 mix-blend-multiply
                    bg-[linear-gradient(90deg,transparent_0%,rgba(192,38,211,0.98)_18%,rgba(232,121,249,0.98)_38%,rgba(192,38,211,0.98)_58%,rgba(88,28,135,0.92)_78%,transparent_100%)]
                    bg-[length:220%_100%] animate-[aurora_3.2s_ease-in-out_infinite]"
                  >
                    EVAN
                  </span>
                  <span className="text-2xl sm:text-3xl text-[#FACC15] drop-shadow-[0_10px_22px_rgba(250,204,21,0.35)]">
                    ★
                  </span>
                </span>
              </h1>
              <p className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                El ecosistema que gestiona tu negocio digital
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--brand-body)]">
                Con evan gestionas ventas, clientes y operaciones desde un solo lugar, sin complicaciones.
              </p>

              <div className="mt-7">
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-10 py-6 text-sm font-semibold tracking-wide"
                  onClick={() => {
                    window.open('https://webevan.krauser.com.ar/#/pages/landing', '_blank', 'noopener,noreferrer');
                  }}
                >
                  SOLICITAR DEMO
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}