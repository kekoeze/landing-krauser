import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Code2,
  GitBranch,
  Settings2,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import type { Partner, PartnerFaq, PartnerLink, PartnerUseCase } from '@/lib/partners';

type JetBrainsPartnerPageProps = {
  partner: Partner;
};

function JetBrainsAction({
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

function UseCaseCard({
  item,
  index,
}: {
  item: PartnerUseCase;
  index: number;
}) {
  return (
    <div className="glass-card rounded-3xl border border-slate-200/80 p-6 dark:border-white/[0.08]">
      <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700 dark:text-purple-300">
        Caso {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
        {item.description}
      </p>
    </div>
  );
}

function FaqCard({ item }: { item: PartnerFaq }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
      <h3 className="text-base font-semibold text-slate-950 dark:text-white">
        {item.question}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
        {item.answer}
      </p>
    </div>
  );
}

export default function JetBrainsPartnerPage({
  partner,
}: JetBrainsPartnerPageProps) {
  const detail = partner.detailPage;

  if (!detail) {
    return null;
  }

  const capabilityIcons = [Code2, Boxes, GitBranch, Wrench, Settings2, Zap];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28">
        <div className="absolute inset-0">
          <div className="floating-orb-1 -left-48 -top-48"></div>
          <div className="floating-orb-2 right-[-8rem] top-1/3"></div>
          <div className="floating-orb-3 bottom-[-8rem] left-1/3"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br"></div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent"></div>

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
                    <JetBrainsAction
                      key={`${link.label}-${link.href}`}
                      link={link}
                      primary={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-slate-950 dark:text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-700/80 dark:text-purple-200/80">
                Herramientas de Desarrollo
              </p>

              <div className="mt-6 rounded-3xl border border-slate-200/80 bg-slate-100 shadow-[0_20px_40px_rgba(148,163,184,0.18)] dark:border-white/[0.08]">
                <Image
                  src="/jetbrains.png"
                  alt="JetBrains"
                  width={320}
                  height={110}
                  className="mx-auto h-auto w-full"
                  priority
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {partner.additionalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {info.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
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
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Programa
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
                <JetBrainsAction link={detail.allianceLink} />
              </div>
            </div>

            <div
              className={`rounded-3xl border border-slate-200/80 p-8 dark:border-white/[0.08] ${partner.cardGradient}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 shadow-lg dark:bg-white dark:text-slate-950">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-gray-400">
                    Beneficios para clientes
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    Un flujo tecnico mas fuerte se traduce en mejores entregas
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {partner.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-xs font-semibold text-violet-700 dark:text-purple-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-gray-200">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              Que ofrecemos como partner
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Capacidades de desarrollo orientadas a negocio
            </h2>

            <p className="mt-4 max-w-3xl leading-relaxed text-slate-600 dark:text-gray-300">
              La alianza potencia nuestro entorno tecnico, pero el valor real aparece en como lo aplicamos: arquitectura, calidad de codigo, automatizacion y soporte para construir software profesional.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
              Como se refleja esta alianza en proyectos reales
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {detail.useCases.map((item, index) => (
                <UseCaseCard
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.08fr,0.92fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                FAQ
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                Preguntas frecuentes
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {detail.faq.map((item) => (
                  <FaqCard key={item.question} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-white dark:shadow-[0_20px_44px_rgba(4,10,26,0.12)] dark:backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-700/80 dark:text-purple-200/80">
                Siguiente paso
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Si necesitas desarrollo profesional, este partnership suma una capa real de valor
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                Trabajamos con herramientas y procesos pensados para sostener calidad, velocidad y criterio tecnico. Si estas evaluando un proyecto, podemos definir el mejor camino para construirlo.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <JetBrainsAction
                  link={{
                    label: 'Nuestros Servicios de Desarrollo',
                    href: '/#services',
                  }}
                  primary
                />
                <JetBrainsAction link={detail.allianceLink} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
