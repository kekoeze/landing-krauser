import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Partner, PartnerCapability, PartnerFaq, PartnerLink, PartnerMetric } from '@/lib/partners';

type TedxViedmaPartnerPageProps = {
  partner: Partner;
};

function TedxAction({
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

function ModuleCard({
  module,
  index,
}: {
  module: PartnerCapability;
  index: number;
}) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/[0.06] dark:bg-white/[0.03]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500/10 text-sm font-semibold text-violet-700 dark:text-purple-300">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
        {module.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
        {module.description}
      </p>
    </div>
  );
}

function MetricCard({ metric }: { metric: PartnerMetric }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
      <p className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
        {metric.value}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-gray-400">
        {metric.label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
        {metric.description}
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

export default function TedxViedmaPartnerPage({
  partner,
}: TedxViedmaPartnerPageProps) {
  const caseStudy = partner.caseStudyPage;

  if (!caseStudy) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28">
        <div className="absolute inset-0">
          <div className="floating-orb-1 -left-48 -top-48"></div>
          <div className="floating-orb-2 right-[-7rem] top-1/3"></div>
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
                  {caseStudy.badge}
                </span>

                <h1 className="mt-6 text-4xl font-bold text-slate-950 dark:text-white md:text-6xl">
                  {partner.name}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-gray-300 md:text-lg">
                  {caseStudy.heroDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {caseStudy.heroLinks.map((link, index) => (
                    <TedxAction
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
                Operacion integral
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Desarrollo, infraestructura y continuidad en una misma capa
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                Este caso combina software a medida, gestion operativa, despliegues y soporte continuo para sostener una experiencia institucional con exigencia real.
              </p>

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

      <section id="alcance" className="pb-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Desarrollo a medida
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {caseStudy.deliveryTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-gray-300">
                El sistema fue pensado como una plataforma completa y no como un sitio aislado. Cada modulo responde a una necesidad operativa concreta del equipo y del evento.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {caseStudy.modules.map((module, index) => (
                <ModuleCard
                  key={module.title}
                  module={module}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Infraestructura
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {caseStudy.infrastructureTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {caseStudy.infrastructureDescription}
              </p>

              <ul className="mt-8 space-y-4">
                {caseStudy.infrastructureItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-purple-400" />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`rounded-3xl border border-slate-200/80 p-8 dark:border-white/[0.08] ${partner.cardGradient}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Continuidad operativa
              </p>

              <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                Relacion tecnologica sostenida en el tiempo
              </h2>

              <div className="mt-6 grid gap-4">
                {partner.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-gray-400">
                      Pilar {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700 dark:text-gray-200">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Arquitectura
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {caseStudy.architectureTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {caseStudy.architectureDescription}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {caseStudy.architecturePillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <p className="text-xs uppercase tracking-[0.16em] text-violet-700 dark:text-purple-300">
                      Eje {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-slate-950 dark:text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-700/80 dark:text-purple-200/80">
                Impacto
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Operacion real, volumen real
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                El proyecto no solo organiza contenido; resuelve coordinacion, registro, visibilidad y administracion en un entorno con demanda real y necesidad de estabilidad.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {caseStudy.impactMetrics.map((metric) => (
                  <MetricCard key={`${metric.label}-${metric.value}`} metric={metric} />
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Capacidad demostrada
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {caseStudy.proofTitle}
              </h2>

              <div className="mt-8 grid gap-4">
                {caseStudy.proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-200">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-3xl border border-slate-200/80 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.26)] dark:border-white/[0.08] dark:text-white ${partner.cardGradient}`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-violet-700/80 dark:text-purple-200/80">
                Testimonio
              </p>

              <blockquote className="mt-6 text-2xl font-semibold leading-relaxed md:text-3xl">
                "{caseStudy.testimonial.quote}"
              </blockquote>

              <div className="mt-8 border-t border-slate-200/80 pt-6 dark:border-white/10">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 dark:text-white">
                  {caseStudy.testimonial.author}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {caseStudy.testimonial.role}
                </p>
              </div>
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
                {caseStudy.faq.map((item) => (
                  <FaqCard key={item.question} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-slate-950 dark:text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-violet-700/80 dark:text-purple-200/80">
                Siguiente paso
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Si necesitas una plataforma institucional compleja, podemos construirla
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                Este caso resume nuestra capacidad para resolver producto, infraestructura y soporte en una misma implementacion. Si tu organizacion necesita algo similar, podemos definir el alcance y llevarlo a produccion.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {caseStudy.heroLinks.map((link, index) => (
                  <TedxAction
                    key={`footer-${link.label}-${link.href}`}
                    link={link}
                    primary={index === 1}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
