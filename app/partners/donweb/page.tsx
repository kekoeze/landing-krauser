import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DonWebPartnerPage from '@/components/donweb-partner-page';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const partner = await getPartnerBySlug('donweb');

  if (!partner) {
    return {
      title: 'DonWeb | Partners - Krauser',
      description: 'Partner de infraestructura y servicios digitales.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.detailPage?.heroDescription ?? partner.shortDescription,
  };
}

export default async function DonWebPage() {
  const partner = await getPartnerBySlug('donweb');

  if (!partner || !partner.detailPage) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden surface-primary text-primary theme-transition">
      <Navbar />
      <DonWebPartnerPage partner={partner} />
      <Footer />
    </main>
  );
}
