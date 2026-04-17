"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-24 pb-6 sm:pt-22 sm:pb-8 lg:pt-28 lg:pb-10">
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
              <h1 className="text-4xl font-black tracking-tight sm:text-6xl sm:font-extrabold">
                <span className="relative inline-flex items-baseline gap-2 sm:gap-3">
                  <GradientText
                    text="EVAN"
                    className="pb-[0.06em] leading-none"
                    gradient="linear-gradient(108deg, #20B0FE 0%, #8075E9 42%, #DE3DD3 72%, #DE3DD3 100%)"
                    transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
                  />
                  <span
                    className="inline-block translate-y-[0.04em] text-3xl leading-none sm:text-4xl text-yellow-400 drop-shadow-[0_2px_10px_rgba(250,204,21,0.35)]"
                    aria-hidden
                  >
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
                  className={cn(
                    'px-6 py-5 text-xs font-semibold tracking-wide sm:px-10 sm:py-6 sm:text-sm',
                    '!bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.18),transparent_52%),linear-gradient(135deg,#20B0FE_0%,#8075E9_48%,#DE3DD3_100%)]',
                    '!shadow-[0_16px_34px_rgba(32,176,254,0.22),0_12px_26px_rgba(128,117,233,0.14),0_8px_18px_rgba(222,61,211,0.12)]',
                    'hover:!shadow-[0_20px_55px_rgba(32,176,254,0.24),0_14px_32px_rgba(128,117,233,0.18),0_16px_30px_rgba(222,61,211,0.16)]',
                    'hover:!ring-[#8075E9]/30 focus-visible:!ring-[#DE3DD3]/40'
                  )}
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