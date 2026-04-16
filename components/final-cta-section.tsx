"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-10 shadow-[0_20px_55px_rgba(15,23,42,0.14)]">
          <SectionHeader
            title="IMPULSÁ TU NEGOCIO CON UNA SOLUCIÓN DIGITAL A MEDIDA"
            subtitle="Contanos qué necesitás y te proponemos el mejor camino para que tu web convierta."
            className="mb-8"
          />

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="btn-gradient text-white font-semibold px-10"
              onClick={() => {
                const message = encodeURIComponent(
                  "¡Hola! Quiero una Landing Page. ¿Podemos coordinar una propuesta?"
                );
                window.open(`https://wa.me/5492920707402?text=${message}`, "_blank");
              }}
            >
              EMPEZAR MI PROYECTO
            </Button>

            <Button
              variant="outline"
              className="border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
              onClick={() => {
                window.location.href = "mailto:contacto@krauser.com.ar?subject=Quiero%20mi%20Landing%20Page";
              }}
            >
              SOLICITAR ASESORAMIENTO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

