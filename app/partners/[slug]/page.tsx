import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PartnerLogo from '@/components/partner-logo';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

type PartnerPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: PartnerPageProps
): Promise<Metadata> {
  const partner = await getPartnerBySlug(params.slug);

  if (!partner) {
    return {
      title: 'Partner no encontrado | Krauser',
      description: 'El partner solicitado no existe.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.shortDescription,
  };
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const partner = await getPartnerBySlug(params.slug);

  if (!partner) {
    notFound();
  }

  return (
    <main className="min-h-screen surface-primary text-primary overflow-x-hidden theme-transition">
      <Navbar />

      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb-1 -top-48 -left-48"></div>
          <div className="floating-orb-2 top-1/2 -right-40"></div>
          <div className="floating-orb-3 -bottom-32 left-1/3"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#partners"
            className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Volver a partners
          </Link>

          <div className="mt-8 grid lg:grid-cols-[auto,1fr] gap-8 items-start">
            <div className={`glass-card rounded-3xl p-6 ${partner.cardGradient}`}>
              <PartnerLogo partner={partner} size="lg" className="mx-auto" />
            </div>

            <div className="glass-card rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">
                Partner
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {partner.name}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {partner.shortDescription}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {partner.longDescription}
              </p>

              {partner.cta ? (
                <div className="mt-8">
                  <Link
                    href={partner.cta.href}
                    className="inline-flex items-center btn-gradient px-6 py-3 rounded-xl text-white"
                  >
                    {partner.cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Focus de trabajo
              </h2>
              <ul className="space-y-3">
                {partner.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Informacion adicional
              </h2>
              <div className="grid gap-4">
                {partner.additionalInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start justify-between gap-4 border-b border-gray-700/40 pb-3 last:border-none last:pb-0"
                  >
                    <span className="text-sm text-gray-400">{info.label}</span>
                    <span className="text-sm text-gray-200 text-right">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
