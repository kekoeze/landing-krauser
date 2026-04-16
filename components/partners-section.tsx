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
    <ParallaxSection id="partners" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
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
          className="grid gap-8 lg:grid-cols-12"
        >
          {/* Selector (RadialIntro) */}
          <div className="lg:col-span-7">
            <RadialIntro
              orbitItems={orbitItems}
              selectedId={selectedSlug || undefined}
              onSelect={(item) => setSelectedSlug(String(item.id))}
              className="mx-auto"
              centerLogoSrc={selectedPartner?.logo.src}
              centerLogoAlt={selectedPartner?.logo.alt}
              centerEmphasis={false}
            />
          </div>

          {/* Detalle */}
          {selectedPartner ? (
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
                <div className="pointer-events-none absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_20%_15%,rgba(108,26,235,0.14),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(192,38,211,0.12),transparent_60%)]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.24em] text-[#C026D3] uppercase">
                        {selectedPartner.industry}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
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

