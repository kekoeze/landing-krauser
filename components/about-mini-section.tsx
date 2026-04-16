"use client";

import SectionHeader from "@/components/section-header";

export default function AboutMiniSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Impulsá tu negocio con una solución digital a medida"
          subtitle="Creamos landings, ecommerce y software a medida que convierten visitas en clientes y ordenan tu operación. Diseño moderno, performance y foco en resultados."
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { title: "PLANES DE PAGO", text: "Opciones flexibles y adaptadas a tu negocio." },
            { title: "ENTREGA RÁPIDA", text: "Plazos claros para salir a vender cuanto antes." },
            { title: "GARANTÍA TOTAL", text: "Acompañamiento y ajustes post-entrega." },
            { title: "CARGA RÁPIDA", text: "Optimización para rendimiento y conversión." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-[0_14px_34px_rgba(148,163,184,0.18)]"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-[color:hsl(var(--primary))]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

