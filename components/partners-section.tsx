"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { partners } from "@/lib/partners";
import SectionHeader from "@/components/section-header";
import ParallaxSection from "@/components/parallax-section";
import { RadialIntro, type RadialOrbitItem } from "@/components/animate-ui/components/community/radial-intro";

const FEATURED_PARTNER_SLUGS = ["donweb", "tedxviedma", "jetbrains", "mercadopago", "nvidia", "citecopa"] as const;
const DEFAULT_PARTNER_SLUG = "donweb";

export default function PartnersSection() {
  const featuredPartners = useMemo(() => {
    const featuredSlugs = new Set<string>(FEATURED_PARTNER_SLUGS);
    return partners.filter((partner) => featuredSlugs.has(partner.slug));
  }, []);
  const [selectedSlug, setSelectedSlug] = useState<string>(DEFAULT_PARTNER_SLUG);
  const selectedPartner = featuredPartners.find((p) => p.slug === selectedSlug);
  const orbitItems: RadialOrbitItem[] = useMemo(
    () =>
      featuredPartners.map((p) => ({
        id: p.slug,
        name: p.name,
        src: p.logo.src,
      })),
    [featuredPartners]
  );

  return (
    <ParallaxSection id="partners" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SectionHeader
            title="Empresas que confían en nosotros"
            subtitle="Partners estratégicos y organizaciones con las que construimos soluciones reales."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-6 max-lg:grid-cols-2 max-lg:items-start max-lg:gap-3 sm:max-lg:gap-4 lg:grid-cols-12 lg:gap-8"
        >
          {/* Selector (RadialIntro) — a la izquierda en móvil/tablet */}
          <div className="min-w-0 max-lg:overflow-visible lg:col-span-7">
            <RadialIntro
              orbitItems={orbitItems}
              selectedId={selectedSlug || undefined}
              onSelect={(item) => setSelectedSlug(String(item.id))}
              className="max-lg:mx-0 lg:mx-auto"
              centerLogoSrc={selectedPartner?.logo.src}
              centerLogoAlt={selectedPartner?.logo.alt}
              centerEmphasis={false}
            />
          </div>

          {/* Detalle */}
          {selectedPartner ? (
            <div className="min-w-0 lg:col-span-5">
              <div className="relative max-h-[min(72vh,560px)] overflow-y-auto overflow-x-hidden   sm:p-6 lg:max-h-none lg:overflow-visible lg:p-8">
               

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.24em] text-[#C026D3] uppercase">
                        {selectedPartner.industry}
                      </p>
                      <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl lg:text-2xl">
                        {selectedPartner.name}
                      </h3>
                      {selectedPartner.subtitle ? (
                        <p className="mt-2 text-sm font-semibold text-slate-700">{selectedPartner.subtitle}</p>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-900">{selectedPartner.longDescription}</p>

                  {selectedPartner.highlights?.length ? (
                    <div className="mt-6">
                      <p className="text-sm font-extrabold text-slate-950">Lo que aporta:</p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-900">
                        {selectedPartner.highlights.slice(0, 6).map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#C026D3]" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </ParallaxSection>
  );
}

