import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Krauser - Desarrollamos el futuro del software',
  description: 'Soluciones con IA, ecommerce y cloud para empresas que piensan en mañana. Especialistas en desarrollo de software con inteligencia artificial.',
  icons: {
    icon: [
      { url: '/isologo.png' },
    ],
    apple: [
      { url: '/isologo.png' },
    ],
    shortcut: [
      { url: '/isologo.png' },
    ],
  },
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
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}