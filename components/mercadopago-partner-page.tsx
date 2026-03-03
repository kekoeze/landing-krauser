import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  CheckCircle2,
  CreditCard,
  LifeBuoy,
  Receipt,
  Settings2,
  ShieldCheck,
} from 'lucide-react';
import type { Partner, PartnerFaq, PartnerLink, PartnerUseCase } from '@/lib/partners';

type MercadoPagoPartnerPageProps = {
  partner: Partner;
};

function MercadoPagoAction({
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
          ? 'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-cyan-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_36px_rgba(56,189,248,0.22)] transition-transform hover:-translate-y-0.5'
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
      <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-300">
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

export default function MercadoPagoPartnerPage({
  partner,
}: MercadoPagoPartnerPageProps) {
  const paymentPage = partner.paymentPage;

  if (!paymentPage) {
    return null;
  }

  const operationIcons = [
    CreditCard,
    BadgeDollarSign,
    Receipt,
    LifeBuoy,
    Settings2,
  ];

  const differentialIcons = [ShieldCheck, Settings2, BadgeDollarSign];

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
            className="inline-flex items-center text-sm text-sky-700 transition-colors hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
          >
            Volver a partners
          </Link>

          <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_42%),linear-gradient(150deg,rgba(255,255,255,0.9),rgba(255,255,255,0.72))] p-8 md:p-10 dark:border-white/[0.08] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_42%),linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent dark:from-white/[0.05] dark:via-white/[0.02] dark:to-transparent"></div>

              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-300">
                  {paymentPage.badge}
                </span>

                <h1 className="mt-6 text-4xl font-bold text-slate-950 dark:text-white md:text-6xl">
                  {partner.name}
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-gray-300 md:text-lg">
                  {paymentPage.heroDescription}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {paymentPage.heroLinks.map((link, index) => (
                    <MercadoPagoAction
                      key={`${link.label}-${link.href}`}
                      link={link}
                      primary={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-slate-950 dark:text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80 dark:text-sky-200/80">
                Espacio de marca
              </p>

              <div className="mt-6 rounded-3xl border border-dashed border-slate-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(226,232,240,0.92))] px-8 py-10 dark:border-white/10 dark:bg-[linear-gradient(145deg,rgba(17,24,39,1),rgba(30,41,59,0.96))]">
                <div className="flex items-center gap-5">
                  <div className="grid gap-2">
                    <span className="h-3 w-10 rounded-full bg-sky-400"></span>
                    <span className="h-3 w-10 rounded-full bg-cyan-400"></span>
                    <span className="h-3 w-10 rounded-full bg-amber-300"></span>
                  </div>
                  <div>
                    <span className="block text-3xl font-semibold tracking-[0.26em] text-slate-950 dark:text-white">
                      MERCADO PAGO
                    </span>
                    <span className="mt-4 block text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-300">
                      Placeholder tipografico
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                No usamos logos o assets oficiales si no estan disponibles internamente. Este espacio queda preparado para cargar piezas aprobadas manualmente.
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

      <section className="pb-20">
        <div className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <section className="grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Alianza
              </p>

              <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
                {paymentPage.allianceTitle}
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-gray-300">
                {paymentPage.allianceDescription}
              </p>

              <div className="mt-8">
                <MercadoPagoAction link={paymentPage.allianceLink} />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-[linear-gradient(160deg,rgba(255,255,255,0.88),rgba(240,249,255,0.92),rgba(254,249,195,0.82))] p-8 dark:border-white/[0.08] dark:bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(8,145,178,0.08),rgba(161,98,7,0.08))]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
                Beneficios concretos para clientes
              </p>

              <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                {paymentPage.clientBenefitsTitle}
              </h2>

              <div className="mt-6 grid gap-4">
                {paymentPage.clientBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-xs font-semibold text-sky-700 dark:text-sky-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-gray-200">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              Diferenciales
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              Lo que sumamos gracias a la alianza
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {paymentPage.differentiators.map((item, index) => {
                const Icon = differentialIcons[index % differentialIcons.length];

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 shadow-lg dark:bg-white dark:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="glass-card rounded-3xl border border-slate-200/80 p-8 md:p-10 dark:border-white/[0.08]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-gray-400">
              Integracion
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
              {paymentPage.operationsTitle}
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {paymentPage.operations.map((operation, index) => {
                const Icon = operationIcons[index % operationIcons.length];

                return (
                  <div
                    key={operation.title}
                    className="rounded-2xl border border-slate-200/80 bg-white/75 p-6 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 shadow-lg dark:bg-white dark:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
                      {operation.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                      {operation.description}
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
              Implementaciones donde agregamos valor real
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {paymentPage.useCases.map((item, index) => (
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
                {paymentPage.faq.map((item) => (
                  <FaqCard key={item.question} item={item} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/85 p-8 text-slate-900 shadow-[0_28px_60px_rgba(15,23,42,0.24)] dark:border-white/[0.08] dark:bg-slate-950 dark:text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-700/80 dark:text-sky-200/80">
                Siguiente paso
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Si tu capa de pagos necesita mas control, podemos ordenarla
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
                Podemos ayudarte a integrar Mercado Pago, optimizar tu checkout y acompanar la operacion comercial y tecnica con mas contexto y velocidad de respuesta.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <MercadoPagoAction
                  link={{
                    label: 'Solicitar integracion',
                    href: '/#contact',
                  }}
                  primary
                />
                <MercadoPagoAction link={paymentPage.allianceLink} />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
