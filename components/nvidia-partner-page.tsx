import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Eye,
  Rocket,
  Sparkles,
} from 'lucide-react';
import type { Partner, PartnerLink } from '@/lib/partners';

type NvidiaPartnerPageProps = {
  partner: Partner;
};

function PartnerAction({
  link,
  primary = false,
}: {
  link: PartnerLink;
  primary?: boolean;
}) {
  const Icon = link.external ? ArrowUpRight : ArrowRight;

  return (
    <Link
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noreferrer' : undefined}
      className={
        primary
          ? 'inline-flex items-center justify-center rounded-xl btn-gradient px-6 py-3 text-sm font-semibold text-white'
          : 'inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-gray-200 dark:hover:text-white'
      }
    >
      {link.label}
      <Icon className="ml-2 h-4 w-4" />
    </Link>
  );
}

export default function NvidiaPartnerPage({ partner }: NvidiaPartnerPageProps) {
  const detail = partner.detailPage;

  if (!detail) {
    return null;
  }

  const capabilityIcons = [Sparkles, Eye, Cpu, Cloud, Rocket];

  return (
    <>
      <section className="pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb-1 -top-48 -left-48"></div>
          <div className="floating-orb-2 top-1/2 -right-40"></div>
          <div className="floating-orb-3 -bottom-32 left-1/3"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#partners"
            className="inline-flex items-center text-sm text-violet-600 transition-colors hover:text-violet-500 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Volver a partners
          </Link>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
            <div
              className={`relative overflow-hidden rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08] ${partner.cardGradient}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/28 to-transparent dark:from-white/[0.08] dark:via-white/[0.03] dark:to-transparent"></div>

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-700 dark:text-purple-300">
                  {detail.badge}
                </span>

                <h1 className="mt-6 text-4xl font-bold text-slate-950 dark:text-white md:text-6xl">
                  {partner.name}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-gray-300 md:text-lg">
                  {detail.heroDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {detail.heroLinks.map((link, index) => (
                    <PartnerAction
                      key={`${link.label}-${link.href}`}
                      link={link}
                      primary={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Espacio de marca
              </p>

              <div className="mt-6 rounded-3xl border border-dashed border-slate-200/80 bg-slate-100 px-8 py-10 shadow-[0_20px_40px_rgba(148,163,184,0.18)] dark:border-white/[0.08] dark:bg-slate-950">
                <span className="block text-center text-3xl font-semibold tracking-[0.35em] text-slate-950 dark:text-white">
                  NVIDIA
                </span>
                <span className="mt-4 block text-center text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                  Placeholder tipografico
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                No usamos logos oficiales ni badges oficiales. Este bloque queda preparado para cargar activos aprobados manualmente cuando esten disponibles.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {partner.additionalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-gray-200">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section className="grid gap-8 xl:grid-cols-[1.15fr,0.85fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                NVIDIA Connect
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {detail.allianceTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {detail.allianceDescription}
              </p>

              <ul className="mt-8 space-y-4">
                {detail.allianceBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-purple-400" />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <PartnerAction link={detail.allianceLink} />
              </div>
            </div>

            <div
              className={`rounded-3xl border border-slate-200/80 p-8 dark:border-white/[0.08] ${partner.cardGradient}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Que ofrecemos como partner
              </p>

              <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                Capacidades para acelerar soluciones empresariales
              </h2>

              <div className="mt-6 grid gap-4">
                {partner.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-200">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              Capacidades
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Ejecucion tecnica orientada a negocio
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600 dark:text-gray-300">
              Traducimos necesidades de producto y operacion en soluciones aceleradas, con foco en performance, despliegue y adopcion real.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {detail.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index % capabilityIcons.length];

                return (
                  <div
                    key={capability.title}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 shadow-lg dark:bg-white dark:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              Casos / Ejemplos
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Implementaciones aceleradas
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {detail.useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="glass-card rounded-3xl border border-slate-200/80 p-6 dark:border-white/[0.08]"
                >
                  <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-purple-300">
                    Caso {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Preguntas frecuentes
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {detail.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
