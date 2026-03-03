import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import TedxViedmaPartnerPage from '@/components/tedxviedma-partner-page';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const partner = await getPartnerBySlug('tedxviedma');

  if (!partner) {
    return {
      title: 'TEDxViedma | Partners - Krauser',
      description: 'Caso de exito institucional con desarrollo e infraestructura.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.caseStudyPage?.heroDescription ?? partner.shortDescription,
  };
}

export default async function TedxViedmaPage() {
  const partner = await getPartnerBySlug('tedxviedma');

  if (!partner || !partner.caseStudyPage) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden surface-primary text-primary theme-transition">
      <Navbar />
      <TedxViedmaPartnerPage partner={partner} />
      <Footer />
    </main>
  );
}
