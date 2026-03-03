import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/footer';
import MercadoPagoPartnerPage from '@/components/mercadopago-partner-page';
import Navbar from '@/components/navbar';
import { getPartnerBySlug } from '@/lib/partners';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const partner = await getPartnerBySlug('mercadopago');

  if (!partner) {
    return {
      title: 'Mercado Pago | Partners - Krauser',
      description: 'Partner de pagos digitales para integraciones y optimizacion de checkout.',
    };
  }

  return {
    title: `${partner.name} | Partners - Krauser`,
    description: partner.paymentPage?.heroDescription ?? partner.shortDescription,
  };
}

export default async function MercadoPagoPage() {
  const partner = await getPartnerBySlug('mercadopago');

  if (!partner || !partner.paymentPage) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden surface-primary text-primary theme-transition">
      <Navbar />
      <MercadoPagoPartnerPage partner={partner} />
      <Footer />
    </main>
  );
}
