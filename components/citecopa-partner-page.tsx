import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  CheckCircle2,
  LayoutDashboard,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Users,
} from 'lucide-react';
import type {
  Partner,
  PartnerFaq,
  PartnerLink,
  PartnerMetric,
} from '@/lib/partners';

type CitecopaPartnerPageProps = {
  partner: Partner;
};

function CitecopaAction({
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
          ? 'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_36px_rgba(16,185,129,0.22)] transition-transform hover:-translate-y-0.5'
          : 'inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-gray-200 dark:hover:text-white'
      }
    >
      {link.label}
      <Icon className="ml-2 h-4 w-4" />
    </Link>
  );
}

function ModuleCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const icons = [
    BookOpen,
    LayoutDashboard,
    Users,
    Receipt,
    BadgeDollarSign,
    ShoppingBag,
  ];
  const Icon = icons[index % icons.length];

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] dark:border-white/[0.06] dark:bg-white/[0.03]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
        {description}
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

export default function CitecopaPartnerPage({
  partner,
}: CitecopaPartnerPageProps) {
  const foundationPage = partner.foundationPage;

  if (!foundationPage) {
    return null;
  }

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
            className="inline-flex items-center text-sm text-emerald-700 transition-colors hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200"
          >
            Volver a partners
          </Link>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.16),transparent_42%),linear-gradient(150deg,rgba(255,255,255,0.9),rgba(255,255,255,0.72))] p-8 md:p-10 dark:border-white/[0.08] dark:bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(163,230,53,0.10),transparent_42%),linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent"></div>

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
                  {foundationPage.badge}
                </span>

                <h1 className="mt-6 text-4xl font-bold text-slate-950 dark:text-white md:text-6xl">
                  {partner.name}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-gray-300 md:text-lg">
                  {foundationPage.heroDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {foundationPage.heroLinks.map((link, index) => (
                    <CitecopaAction
                      key={`${link.label}-${link.href}`}
                      link={link}
                      primary={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Impacto institucional
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Tecnologia aplicada a una organizacion con foco social
              </h2>

              <p className="mt-5 leading-relaxed text-slate-300">
                Este proyecto integra comunicacion institucional, administracion interna, ecommerce y donaciones en una sola plataforma para mejorar operacion, transparencia y sostenibilidad.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {partner.additionalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      {info.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
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
          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Desarrollo a medida
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {foundationPage.scopeTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-gray-300">
                La solucion fue pensada como una plataforma integral y no solo como un sitio institucional. Cada modulo responde a una necesidad operativa concreta de la fundacion.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {foundationPage.modules.map((module, index) => (
                <ModuleCard
                  key={module.title}
                  title={module.title}
                  description={module.description}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Donaciones y pagos
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {foundationPage.donationTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {foundationPage.donationDescription}
              </p>

              <ul className="mt-8 space-y-4">
                {foundationPage.donationItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.88),rgba(236,253,245,0.9),rgba(247,254,231,0.88))] p-8 dark:border-white/[0.08] dark:bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(6,95,70,0.08),rgba(77,124,15,0.08))]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-gray-400">
                    Principios
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    Seguridad, transparencia y trazabilidad
                  </h2>
                </div>
              </div>

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
                Soporte continuo
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {foundationPage.supportTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {foundationPage.supportDescription}
              </p>

              <ul className="mt-8 space-y-4">
                {foundationPage.supportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                {foundationPage.impactTitle}
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Operacion real con impacto medible
              </h2>

              <p className="mt-5 leading-relaxed text-slate-300">
                La plataforma acompana administracion, captacion de fondos y sostenibilidad institucional en una operacion concreta y continua.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {foundationPage.impactMetrics.map((metric) => (
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
                {foundationPage.proofTitle}
              </h2>

              <div className="mt-8 grid gap-4">
                {foundationPage.proofPoints.map((point, index) => {
                  const icons = [
                    Users,
                    ShoppingBag,
                    LayoutDashboard,
                    BadgeDollarSign,
                    BarChart3,
                  ];
                  const Icon = icons[index % icons.length];

                  return (
                    <div
                      key={point}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/75 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-gray-200">
                        {point}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-[linear-gradient(160deg,rgba(15,23,42,0.98),rgba(6,78,59,0.96))] p-8 text-white shadow-[0_28px_60px_rgba(15,23,42,0.26)] dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Testimonio
              </p>

              <blockquote className="mt-6 text-2xl font-semibold leading-relaxed md:text-3xl">
                "{foundationPage.testimonial.quote}"
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  {foundationPage.testimonial.author}
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  {foundationPage.testimonial.role}
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
                {foundationPage.faq.map((item) => (
                  <FaqCard key={item.question} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                Siguiente paso
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Si tu organizacion necesita una plataforma integral, podemos construirla
              </h2>

              <p className="mt-5 leading-relaxed text-slate-300">
                Este caso resume nuestra capacidad para unir gestion, pagos, contenidos y soporte en una sola implementacion institucional lista para evolucionar.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <CitecopaAction
                  link={{
                    label: 'Desarrollar plataforma similar',
                    href: '/#contact',
                  }}
                  primary
                />
                <CitecopaAction
                  link={{
                    label: 'Visitar Fundacion',
                    href: 'https://citecopa.org.ar/',
                    external: true,
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
