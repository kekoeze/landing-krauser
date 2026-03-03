import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CitecopaPartnerPage from '@/components/citecopa-partner-page';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const partner = await getPartnerBySlug('citecopa');

  if (!partner) {
    return {
      title: 'Fundacion CiTeCopa | Partners - Krauser',
      description: 'Plataforma institucional, ecommerce y sistema de donaciones integradas.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.foundationPage?.heroDescription ?? partner.shortDescription,
  };
}

export default async function CitecopaPage() {
  const partner = await getPartnerBySlug('citecopa');

  if (!partner || !partner.foundationPage) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden surface-primary text-primary theme-transition">
      <Navbar />
      <CitecopaPartnerPage partner={partner} />
      <Footer />
    </main>
  );
}
