import './globals.css';
import type { Metadata } from 'next';
import WhatsAppFab from '@/components/whatsapp-fab';


export const metadata: Metadata = {
  title: 'Krauser - Desarrollamos el futuro del software',
  description: 'Soluciones con IA, ecommerce y cloud para empresas que piensan en mañana. Especialistas en desarrollo de software con inteligencia artificial.',
  other: {
    'facebook-domain-verification': 'ugvvicwzz97aire3lkmodx7sn4e9q1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}