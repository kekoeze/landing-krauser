import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/footer';
import JetBrainsPartnerPage from '@/components/jetbrains-partner-page';
import Navbar from '@/components/navbar';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const partner = await getPartnerBySlug('jetbrains');

  if (!partner) {
    return {
      title: 'JetBrains | Partners - Krauser',
      description: 'Partner tecnologico enfocado en desarrollo profesional de software.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.detailPage?.heroDescription ?? partner.shortDescription,
  };
}

export default async function JetBrainsPage() {
  const partner = await getPartnerBySlug('jetbrains');

  if (!partner || !partner.detailPage) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden surface-primary text-primary theme-transition">
      <Navbar />
      <JetBrainsPartnerPage partner={partner} />
      <Footer />
    </main>
  );
}
