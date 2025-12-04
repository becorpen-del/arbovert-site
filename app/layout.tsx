import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: `Arbovert – Élagage et entretien d'arbres en Haute-Garonne`,
  description:
    `Arbovert accompagne particuliers et professionnels pour l'élagage, l'abattage et l'entretien d'espaces verts dans toute la Haute-Garonne (31).`
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${inter.variable} bg-beige text-night antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
