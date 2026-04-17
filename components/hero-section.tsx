"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-6 sm:pt-22 sm:pb-8 lg:pt-28 lg:pb-10">
      {/* Fondo blanco plano (sin gradientes) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-[0.95fr,1.05fr] items-center gap-4 sm:gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative order-1"
          >
            {/* Media: en mobile evitamos que la máscara “corte” a Evan */}
            <div
              className="relative h-[200px] w-full sm:hidden"
              style={{
                backgroundImage: "url('/evan-laptop.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "50% 56%",
                transform: "translateZ(0)",
              }}
              aria-label="Evan"
              role="img"
            />

            {/* Media: desktop/tablet con máscara para fundir bordes */}
            <div
              className="relative hidden h-[280px] w-full sm:block sm:h-[300px] md:h-[360px] lg:h-[420px]"
              style={{
                backgroundImage: "url('/evan-laptop.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "translateZ(0)",
                WebkitMaskImage:
                  "radial-gradient(closest-side at 55% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(closest-side at 55% 50%, rgba(0,0,0,1) 68%, rgba(0,0,0,0) 100%)",
              }}
              aria-label="Evan"
              role="img"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="order-2 max-sm:mt-4 sm:mt-0"
          >
            <div className="max-w-none sm:max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl">
                <span className="relative inline-flex items-center gap-3">
                  <span className="bg-gradient-to-r from-[#20B0FE] to-[#DE3DD3] bg-clip-text text-transparent">
                    EVAN
                  </span>
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
              <p className="mt-2 text-sm font-semibold leading-snug text-slate-900 sm:text-lg">
                El ecosistema que gestiona tu negocio digital
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--brand-body)] sm:mt-3 sm:text-base">
                Con evan gestionas ventas, clientes y operaciones desde un solo lugar, sin complicaciones.
              </p>

              <div className="mt-4 sm:mt-5">
                <Button
                  variant="gradient"
                  size="lg"
                  className="px-6 py-5 text-xs font-semibold tracking-wide sm:px-10 sm:py-6 sm:text-sm"
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