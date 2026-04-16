"use client";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";

export default function FinalCtaSection() {
  return (
    <section id="contact" className="scroll-mt-28 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div >
          {/* Bloque original */}
          <SectionHeader
            title={"IMPULSÁ TU NEGOCIO\nCON UNA SOLUCIÓN DIGITAL A MEDIDA"}
            subtitle="Estamos listos para ayudarte a dar el siguiente paso."
            className="mb-8"
          />

          <div className="mt-10 flex flex-col items-center justify-center gap-2">
            <Button
              variant="gradient"
              size="lg"
              className="px-10 py-6 font-semibold text-base"
              onClick={() => {
                const message = encodeURIComponent(
                  "¡Hola! Quiero empezar mi proyecto. ¿Podemos coordinar?"
                );
                window.open(`https://wa.me/5492920707402?text=${message}`, "_blank", "noopener,noreferrer");
              }}
            >
              EMPEZAR MI PROYECTO
            </Button>
            <p className="text-sm text-slate-500">Respuesta en menos de 24hs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

