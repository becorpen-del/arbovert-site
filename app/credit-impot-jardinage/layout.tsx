import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crédit d\'Impôt 50% Jardinage Toulouse & Haute-Garonne (31)',
  description: '✅ Bénéficiez de 50% de crédit d\'impôt sur vos travaux de jardinage à Toulouse, Muret, Cugnaux. Taille haies, tonte, entretien jardin déductibles. Entreprise SAP certifiée.',
  alternates: {
    canonical: '/credit-impot-jardinage'
  },
  openGraph: {
    title: 'Crédit d\'Impôt 50% Jardinage Toulouse & Haute-Garonne (31)',
    description: '✅ Bénéficiez de 50% de crédit d\'impôt sur vos travaux de jardinage à Toulouse, Muret, Cugnaux. Taille haies, tonte, entretien jardin déductibles.',
    type: 'website',
    locale: 'fr_FR',
    url: '/credit-impot-jardinage'
  },
};

export default function CreditImpotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Services à la Personne - Crédit d\'Impôt Jardinage 50%',
            description: 'Bénéficiez de 50% de crédit d\'impôt sur vos travaux de jardinage éligibles en Haute-Garonne',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Arbovert',
              '@id': 'https://www.arbovert-31.fr',
              image: 'https://www.arbovert-31.fr/Arbovert-sans-fond.png',
              telephone: '0648768515',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Toulouse',
                addressRegion: 'Haute-Garonne',
                postalCode: '31000',
                addressCountry: 'FR',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Toulouse',
                },
                {
                  '@type': 'City',
                  name: 'Muret',
                },
                {
                  '@type': 'City',
                  name: 'Cugnaux',
                },
              ],
            },
            serviceType: 'Services à la Personne',
            offers: {
              '@type': 'Offer',
              description: '50% de crédit d\'impôt sur prestations éligibles',
              eligibleRegion: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '43.604',
                  longitude: '1.444',
                },
                geoRadius: '30000',
              },
            },
            termsOfService: 'https://www.arbovert-31.fr/credit-impot-jardinage',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Services éligibles crédit d\'impôt',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Taille de haies',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Tonte de pelouse',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Débroussaillage',
                  },
                },
              ],
            },
          }),
        }}
      />
      {children}
    </>
  );
}
