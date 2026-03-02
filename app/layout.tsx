import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/theme-provider';


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
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}