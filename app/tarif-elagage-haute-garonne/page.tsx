import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Tarifs Élagage en Haute-Garonne | Arbovert – Grille Tarifaire 2026',
  description:
    'Tarifs élagage, abattage, taille de haies, tonte et débroussaillage en Haute-Garonne (31). Grille tarifaire 2026 transparente. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['tarif élagage', 'prix élagage toulouse', 'tarif élagueur haute-garonne', 'prix abattage arbre', 'devis élagage', 'coût élagage arbre', 'tarif taille haie', 'prix tonte pelouse', 'tarif débroussaillage'],
  alternates: {
    canonical: '/tarif-elagage-haute-garonne'
  },
  openGraph: {
    title: 'Tarifs Élagage en Haute-Garonne | Arbovert – Grille Tarifaire 2026',
    description: 'Grille tarifaire 2026 complète : élagage, abattage, taille de haies, tonte, débroussaillage en Haute-Garonne. Crédit d\'impôt 50%.',
    type: 'website',
    locale: 'fr_FR',
    url: '/tarif-elagage-haute-garonne'
  },
};

const faqData = [
  {
    question: "Combien coûte l'élagage d'un arbre en Haute-Garonne ?",
    answer: "Le tarif dépend de la hauteur de l'arbre, de son essence, de l'accessibilité et des contraintes environnantes (proximité de bâtiments, clôtures, lignes électriques). Fourchettes indicatives sans évacuation : arbre de moins de 5m : 80-250€, arbre de 5-10m : 250-500€, arbre de 10-15m : 500-1 000€, arbre de 15-20m : 800-1 500€. L'évacuation des déchets est en supplément. Contactez-nous pour un devis précis adapté à votre situation."
  },
  {
    question: "Le crédit d'impôt s'applique-t-il à l'élagage ?",
    answer: "Non, l'élagage d'arbres en hauteur (nécessitant harnais ou nacelle) n'est PAS éligible au crédit d'impôt. En revanche, la taille de haies, la tonte de pelouse, le débroussaillage et l'entretien courant du jardin bénéficient du crédit d'impôt de 50% via notre agrément Services à la Personne. Plafond : 5 000€/an de dépenses, soit 2 500€ de crédit d'impôt maximum."
  },
  {
    question: "Les tarifs incluent-ils l'évacuation des déchets ?",
    answer: "Les tarifs d'élagage et d'abattage indiqués sont hors évacuation. L'évacuation des déchets verts est proposée en option. Pour la taille de haies, nos tarifs au mètre linéaire incluent l'évacuation. Pour la tonte, l'option ramassage et évacuation est de 10€ à 40€ en supplément. Le devis détaillé précise systématiquement ce qui est inclus."
  },
  {
    question: "Pourquoi les prix varient-ils autant pour un même type d'arbre ?",
    answer: "Plusieurs facteurs influencent le tarif final : l'accessibilité du chantier (accès facile ou arbre enclavé), les contraintes autour de l'arbre (maison, cabane, clôture, lignes électriques, piscine), l'essence de l'arbre (bois dur ou tendre), son état sanitaire et la période d'intervention. C'est pourquoi nous proposons systématiquement un devis gratuit après visite sur place."
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer précisément les travaux nécessaires. Le devis détaillé vous est envoyé sous 24 à 48h après la visite. Il inclut le détail de chaque prestation, les tarifs, les conditions d'intervention et les éventuels avantages fiscaux applicables."
  },
  {
    question: "Proposez-vous des contrats d'entretien annuels ?",
    answer: "Oui, nous proposons des contrats d'entretien annuel incluant la tonte à partir de 500€/an, pouvant aller jusqu'à 1 500€/an selon la surface et les prestations incluses. Ces contrats sont éligibles au crédit d'impôt de 50%, ce qui réduit significativement le coût réel. Contactez-nous pour un devis personnalisé."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Haute-Garonne",
      "description": "Tarifs élagage, abattage et entretien de jardins en Haute-Garonne (31). Devis gratuit sous 24h. Crédit d'impôt 50% sur l'entretien de jardin.",
      "url": "https://www.arbovert-31.fr/tarif-elagage-haute-garonne",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9 Quartier Gironne",
        "addressLocality": "Saint-Julien-sur-Garonne",
        "postalCode": "31220",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "28",
        "reviewCount": "28"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "19:00"
      }
    },
    {
      "@type": "Service",
      "name": "Élagage d'arbres",
      "provider": { "@id": "https://www.arbovert-31.fr/#organization" },
      "areaServed": { "@type": "State", "name": "Haute-Garonne" },
      "offers": [
        { "@type": "Offer", "name": "Élagage arbre < 5m", "priceRange": "80€ - 250€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 5-10m", "priceRange": "250€ - 500€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 10-15m", "priceRange": "500€ - 1000€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 15-20m", "priceRange": "800€ - 1500€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 30m+", "priceRange": "1000€ - 2000€", "priceCurrency": "EUR" }
      ]
    },
    {
      "@type": "Service",
      "name": "Abattage d'arbres",
      "provider": { "@id": "https://www.arbovert-31.fr/#organization" },
      "areaServed": { "@type": "State", "name": "Haute-Garonne" },
      "offers": [
        { "@type": "Offer", "name": "Abattage arbre 2-5m", "priceRange": "130€ - 230€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Abattage arbre 5-10m", "priceRange": "230€ - 370€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Abattage arbre 10-15m", "priceRange": "370€ - 550€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Abattage arbre 15-20m", "priceRange": "550€ - 650€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Abattage arbre 20-30m", "priceRange": "650€ - 750€", "priceCurrency": "EUR" }
      ]
    },
    {
      "@type": "Service",
      "name": "Taille de haies",
      "provider": { "@id": "https://www.arbovert-31.fr/#organization" },
      "areaServed": { "@type": "State", "name": "Haute-Garonne" },
      "offers": [
        { "@type": "Offer", "name": "Taille haie < 1m", "priceRange": "4€ - 5€/ml", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Taille haie 1-2m", "priceRange": "5€ - 7€/ml", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Taille haie 2-3m", "priceRange": "7€ - 9€/ml", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Taille haie > 3m", "priceRange": "10€ - 15€/ml", "priceCurrency": "EUR" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Tarifs élagage", "item": "https://www.arbovert-31.fr/tarif-elagage-haute-garonne" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    }
  ]
};

export default function TarifsElagage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-0">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
              Grille tarifaire 2026 – Élagage et entretien de jardins
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4 max-w-3xl mx-auto">
              Tarifs indicatifs pour tous nos services en Haute-Garonne. <strong>Devis gratuit et personnalisé sous 24h</strong> après visite sur place.
            </p>
            <p className="text-night/70 mb-8 max-w-2xl mx-auto">
              Les prix varient en fonction de l'accessibilité du chantier et des contraintes autour de l'arbre (proximité d'une maison, cabane, clôture, piscine, lignes électriques...).
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                06 48 76 85 15
              </a>
              <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Élagage */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs élagage d'arbres</h2>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Tarifs moyens en fonction de la hauteur de l'arbre. <strong>Prix sans évacuation des déchets</strong> (en option).
            </p>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-4 font-heading text-forest">Opération d'élagage</th>
                      <th className="pb-4 font-heading text-forest text-right">Prix moyen</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Élagage arbre de moins de 5m</td>
                      <td className="py-4 text-right font-semibold">80€ – 250€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Élagage arbre de 5m à 10m</td>
                      <td className="py-4 text-right font-semibold">250€ – 500€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Élagage arbre de 10m à 15m</td>
                      <td className="py-4 text-right font-semibold">500€ – 1 000€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Élagage arbre de 15m à 20m ou plus</td>
                      <td className="py-4 text-right font-semibold">800€ – 1 500€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Élagage arbre de 30m ou plus</td>
                      <td className="py-4 text-right font-semibold">1 000€ – 2 000€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Étêtage</td>
                      <td className="py-4 text-right font-semibold">200€ – 700€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Élagage sélectif</td>
                      <td className="py-4 text-right font-semibold">150€ – 180€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-white border border-forest/10">
                <p className="text-sm text-night/70">
                  <strong>Prix sans évacuation.</strong> Le tarif final dépend de l'accessibilité, de l'essence de l'arbre et des contraintes environnantes (maison, cabane, clôture, lignes électriques...). Non éligible au crédit d'impôt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Abattage */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs abattage d'arbres</h2>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Tarifs moyens d'abattage en fonction de la hauteur. <strong>Prix sans évacuation</strong> (en option).
            </p>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-4 font-heading text-forest">Service</th>
                      <th className="pb-4 font-heading text-forest text-right">Prix moyen</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Abattage arbre de 2 à 5 mètres</td>
                      <td className="py-4 text-right font-semibold">130€ – 230€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Abattage arbre de 5 à 10 mètres</td>
                      <td className="py-4 text-right font-semibold">230€ – 370€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Abattage arbre de 10 à 15 mètres</td>
                      <td className="py-4 text-right font-semibold">370€ – 550€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Abattage arbre de 15 à 20 mètres</td>
                      <td className="py-4 text-right font-semibold">550€ – 650€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Abattage arbre de 20 à 30 mètres</td>
                      <td className="py-4 text-right font-semibold">650€ – 750€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Étêtage</td>
                      <td className="py-4 text-right font-semibold">200€ – 700€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Dessouchage</td>
                      <td className="py-4 text-right font-semibold">150€ – 800€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-beige/50 border border-forest/10">
                <p className="text-sm text-night/70">
                  <strong>Prix sans évacuation.</strong> Le tarif varie selon l'accessibilité et les contraintes autour de l'arbre (proximité d'une maison, cabane, clôture, piscine...). Non éligible au crédit d'impôt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Dessouchage */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs dessouchage</h2>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Trois méthodes de dessouchage selon le diamètre de la souche et l'accessibilité du terrain.
            </p>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-4 font-heading text-forest">Type de dessouchage</th>
                      <th className="pb-4 font-heading text-forest text-center">Prix minimum</th>
                      <th className="pb-4 font-heading text-forest text-right">Prix maximum</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Dessouchage manuel</td>
                      <td className="py-4 text-center">150€</td>
                      <td className="py-4 text-right font-semibold">300€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Dessouchage mécanique</td>
                      <td className="py-4 text-center">300€</td>
                      <td className="py-4 text-right font-semibold">800€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Dessouchage chimique</td>
                      <td className="py-4 text-center">80€</td>
                      <td className="py-4 text-right font-semibold">150€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-night/60 mt-4">Le choix de la méthode dépend du diamètre de la souche, de l'accessibilité et de l'usage prévu du terrain.</p>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Taille de haies */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs taille de haies</h2>
            <p className="text-center text-lg text-leaf font-semibold mb-2">Éligible au crédit d'impôt 50%</p>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Prix au mètre linéaire, <strong>évacuation des déchets incluse</strong>.
            </p>
            <div className="rounded-3xl border border-leaf/20 bg-white p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-leaf/30">
                      <th className="pb-4 font-heading text-forest">Hauteur de la haie</th>
                      <th className="pb-4 font-heading text-forest text-center">Prix min / ml</th>
                      <th className="pb-4 font-heading text-forest text-center">Prix moyen / ml</th>
                      <th className="pb-4 font-heading text-forest text-right">Prix max / ml</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Haie inférieure à 1 mètre</td>
                      <td className="py-4 text-center">4€</td>
                      <td className="py-4 text-center">4,50€</td>
                      <td className="py-4 text-right font-semibold">5€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Haie de 1 à 2 mètres</td>
                      <td className="py-4 text-center">5€</td>
                      <td className="py-4 text-center">6€</td>
                      <td className="py-4 text-right font-semibold">7€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Haie de 2 à 3 mètres</td>
                      <td className="py-4 text-center">7€</td>
                      <td className="py-4 text-center">8€</td>
                      <td className="py-4 text-right font-semibold">9€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Haie de plus de 3 mètres</td>
                      <td className="py-4 text-center">10€</td>
                      <td className="py-4 text-center">12,50€</td>
                      <td className="py-4 text-right font-semibold">15€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Arrachage de haie</td>
                      <td className="py-4 text-center">45€</td>
                      <td className="py-4 text-center">50€</td>
                      <td className="py-4 text-right font-semibold">60€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-night/60 mt-4">Prix au mètre linéaire avec évacuation des déchets. L'arrachage de haie n'est pas éligible au crédit d'impôt.</p>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Tonte de pelouse */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs tonte de pelouse</h2>
            <p className="text-center text-lg text-leaf font-semibold mb-2">Éligible au crédit d'impôt 50%</p>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Le prix au m² diminue avec la surface. Option ramassage et évacuation en supplément.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Prix au m² */}
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <h3 className="font-heading text-xl text-forest mb-6">Prix moyen au m²</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-leaf/30">
                        <th className="pb-3 font-heading text-forest text-sm">Surface</th>
                        <th className="pb-3 font-heading text-forest text-right text-sm">Prix / m²</th>
                      </tr>
                    </thead>
                    <tbody className="text-night/80">
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">50 m²</td>
                        <td className="py-3 text-right font-semibold">0,50€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">100 m²</td>
                        <td className="py-3 text-right font-semibold">0,50€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">500 m²</td>
                        <td className="py-3 text-right font-semibold">0,33€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">1 000 m²</td>
                        <td className="py-3 text-right font-semibold">0,25€</td>
                      </tr>
                      <tr>
                        <td className="py-3">2 000 m² et plus</td>
                        <td className="py-3 text-right font-semibold">0,18€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Forfaits par surface */}
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <h3 className="font-heading text-xl text-forest mb-6">Forfaits par surface</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-leaf/30">
                        <th className="pb-3 font-heading text-forest text-sm">Prestation</th>
                        <th className="pb-3 font-heading text-forest text-right text-sm">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="text-night/80">
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">Tonte 1 000 m²</td>
                        <td className="py-3 text-right font-semibold">150€ – 350€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">Tonte 1 500 m²</td>
                        <td className="py-3 text-right font-semibold">200€ – 450€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">Tonte 2 000 m²</td>
                        <td className="py-3 text-right font-semibold">250€ – 500€</td>
                      </tr>
                      <tr className="border-b border-leaf/10">
                        <td className="py-3">Tonte 5 000 m²</td>
                        <td className="py-3 text-right font-semibold">400€ – 900€</td>
                      </tr>
                      <tr>
                        <td className="py-3">Contrat annuel (avec tonte)</td>
                        <td className="py-3 text-right font-semibold">500€ – 1 500€ / an</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-leaf/5 border border-leaf/20">
              <p className="text-sm text-night/70">
                <strong>Tarif horaire jardinier/paysagiste :</strong> 25€ à 45€ / heure. <strong>Option ramassage et évacuation des déchets :</strong> 10€ à 40€ en supplément.
              </p>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Débroussaillage */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs débroussaillage</h2>
            <p className="text-center text-lg text-leaf font-semibold mb-2">Éligible au crédit d'impôt 50%</p>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              Facturation à l'heure ou au m² selon la surface et l'état du terrain.
            </p>
            <div className="rounded-3xl border border-leaf/20 bg-white p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-leaf/30">
                      <th className="pb-4 font-heading text-forest">Prestation</th>
                      <th className="pb-4 font-heading text-forest text-center">Prix minimum</th>
                      <th className="pb-4 font-heading text-forest text-center">Prix moyen</th>
                      <th className="pb-4 font-heading text-forest text-right">Prix maximum</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-leaf/10">
                      <td className="py-4 font-semibold">Débroussaillage (tarif horaire)</td>
                      <td className="py-4 text-center">25€ / h</td>
                      <td className="py-4 text-center">38€ / h</td>
                      <td className="py-4 text-right font-semibold">50€ / h</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Dégagement ronces et herbes hautes</td>
                      <td className="py-4 text-center">0,30€ / m²</td>
                      <td className="py-4 text-center">0,50€ / m²</td>
                      <td className="py-4 text-right font-semibold">0,70€ / m²</td>
                    </tr>
                    <tr>
                      <td className="py-4">Évacuation des déchets</td>
                      <td className="py-4 text-center">0,50€ / m²</td>
                      <td className="py-4 text-center">0,65€ / m²</td>
                      <td className="py-4 text-right font-semibold">0,80€ / m²</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Encadré important - Facteurs de prix */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Pourquoi les tarifs varient d'un chantier à l'autre ?</h2>
            <p className="text-center text-night/70 mb-10 max-w-3xl mx-auto">
              Les prix indiqués sont des moyennes. Le tarif exact dépend de votre situation, c'est pourquoi nous établissons systématiquement un <strong>devis gratuit après visite sur place</strong>.
            </p>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📏</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Hauteur et envergure de l'arbre</h3>
                    <p className="text-night/80 text-sm">Plus l'arbre est haut, plus l'intervention est technique et nécessite du matériel spécialisé (nacelle, corde). C'est le critère principal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🚧</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Accessibilité du chantier</h3>
                    <p className="text-night/80 text-sm">Un arbre en bord de route est plus simple d'accès qu'un arbre enclavé dans un jardin. L'accès nacelle réduit le coût vs. travail sur corde.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🏠</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Contraintes autour de l'arbre</h3>
                    <p className="text-night/80 text-sm">La proximité d'une maison, d'une cabane, d'une clôture, d'une piscine ou de lignes électriques impose des précautions supplémentaires (rétention, démontage par tronçons).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🌳</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Essence et état de l'arbre</h3>
                    <p className="text-night/80 text-sm">Un chêne centenaire est plus complexe qu'un pin. Le bois dur demande plus de temps. Un arbre malade ou mort nécessite des précautions particulières.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🚛</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Évacuation des déchets</h3>
                    <p className="text-night/80 text-sm">Les tarifs d'élagage et d'abattage sont sans évacuation. Le broyage sur place et l'évacuation en déchèterie sont proposés en option selon le volume.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📅</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Période d'intervention</h3>
                    <p className="text-night/80 text-sm">Mars-avril = haute saison. Anticipez votre devis dès février pour bénéficier de meilleurs délais et parfois de tarifs préférentiels.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crédit d'impôt résumé */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'impôt 50% : quels services sont éligibles ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                <h3 className="font-heading text-xl text-leaf mb-4">Éligible (-50%)</h3>
                <ul className="space-y-2 text-night/80">
                  <li>✅ Taille de haies et arbustes</li>
                  <li>✅ Tonte de pelouse</li>
                  <li>✅ Débroussaillage</li>
                  <li>✅ Ramassage de feuilles</li>
                  <li>✅ Entretien courant du jardin</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 border border-red-200">
                <h3 className="font-heading text-xl text-red-600 mb-4">Non éligible</h3>
                <ul className="space-y-2 text-night/80">
                  <li>❌ Élagage d'arbres en hauteur</li>
                  <li>❌ Abattage d'arbres</li>
                  <li>❌ Dessouchage</li>
                  <li>❌ Travaux de création paysagère</li>
                  <li>❌ Plantation d'arbres</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white border border-leaf/20">
              <p className="text-sm text-night/80">
                <strong>Plafond annuel :</strong> 5 000€ de dépenses éligibles par foyer, soit 2 500€ de crédit d'impôt maximum.
                Majoration de 1 500€ par personne de plus de 65 ans au foyer.
              </p>
              <p className="text-sm text-night/70 mt-2">
                <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">En savoir plus sur le crédit d'impôt jardinage et notre calculateur</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Mêmes tarifs dans toute la Haute-Garonne</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nos tarifs sont identiques quelle que soit votre commune. Pas de surcoût de déplacement en Haute-Garonne.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              {[
                { ville: 'Toulouse', href: '/elagage-toulouse' },
                { ville: 'Colomiers', href: '/elagage-colomiers' },
                { ville: 'Blagnac', href: '/elagage-blagnac' },
                { ville: 'Tournefeuille', href: '/elagage-tournefeuille' },
                { ville: 'Muret', href: '/elagage-muret' },
                { ville: 'Cugnaux', href: '/elagage-cugnaux' },
                { ville: 'Balma', href: '/elagage-balma' },
                { ville: 'Labège', href: '/elagage-labege' },
                { ville: 'Ramonville', href: '/elagage-ramonville' },
              ].map((v) => (
                <Link key={v.ville} href={v.href} className="block rounded-full border border-forest/20 bg-beige/70 px-4 py-3 text-center uppercase tracking-wide text-night/70 hover:bg-forest/5 transition-colors">
                  {v.ville}
                </Link>
              ))}
              <Link href="/nos-villes" className="block rounded-full border border-forest/40 bg-forest/5 px-4 py-3 text-center uppercase tracking-wide text-forest font-medium hover:bg-forest/10 transition-colors">
                + Toutes nos villes
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Questions fréquentes sur nos tarifs</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-forest/10 bg-white p-6">
                  <h3 className="font-heading text-xl text-forest mb-3">{faq.question}</h3>
                  <p className="text-night/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-beige p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Obtenez votre devis gratuit sous 24h
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Chaque arbre est unique. Contactez-nous pour un devis personnalisé, adapté à votre situation exacte. Visite sur place gratuite et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                  06 48 76 85 15
                </a>
                <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                  Demander un devis gratuit
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-night/70">
                <span className="flex items-center gap-2">✓ Devis gratuit sous 24h</span>
                <span className="flex items-center gap-2">✓ Pas de frais de déplacement</span>
                <span className="flex items-center gap-2">✓ Crédit d'impôt 50% éligible</span>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact */}
        <div className="py-16 md:py-20 bg-beige">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
