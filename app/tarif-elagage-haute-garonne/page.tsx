import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Tarifs Élagage en Haute-Garonne | Arbovert – Prix 2025',
  description:
    'Tarifs élagage, abattage, taille de haies et entretien de jardins en Haute-Garonne (31). Grille tarifaire transparente. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['tarif élagage', 'prix élagage toulouse', 'tarif élagueur haute-garonne', 'prix abattage arbre', 'devis élagage', 'coût élagage arbre', 'tarif taille haie'],
  alternates: {
    canonical: '/tarif-elagage-haute-garonne'
  },
  openGraph: {
    title: 'Tarifs Élagage en Haute-Garonne | Arbovert – Prix 2025',
    description: 'Tarifs élagage, abattage, taille de haies et entretien de jardins en Haute-Garonne. Grille tarifaire transparente. Crédit d\'impôt 50%.',
    type: 'website',
    locale: 'fr_FR',
    url: '/tarif-elagage-haute-garonne'
  },
};

const faqData = [
  {
    question: "Combien coûte l'élagage d'un arbre en Haute-Garonne ?",
    answer: "Le tarif dépend de la hauteur de l'arbre, de son essence, de l'accessibilité et du volume de déchets à évacuer. Fourchettes indicatives : arbre de 5-10m : 150-250€, arbre de 10-15m : 250-400€, arbre de 15-20m : 400-700€, arbre de plus de 20m : sur devis. Ces tarifs incluent l'élagage, le broyage des branches et l'évacuation des déchets verts."
  },
  {
    question: "Le crédit d'impôt s'applique-t-il à l'élagage ?",
    answer: "Non, l'élagage d'arbres en hauteur (nécessitant harnais ou nacelle) n'est PAS éligible au crédit d'impôt. En revanche, la taille de haies, la tonte de pelouse, le débroussaillage et l'entretien courant du jardin bénéficient du crédit d'impôt de 50% via notre agrément Services à la Personne. Plafond : 5 000€/an de dépenses, soit 2 500€ de crédit d'impôt maximum."
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: "Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons chez vous pour évaluer précisément les travaux nécessaires. Le devis détaillé vous est envoyé sous 24 à 48h après la visite. Il inclut le détail de chaque prestation, les tarifs, les conditions d'intervention et les éventuels avantages fiscaux applicables."
  },
  {
    question: "Quels facteurs influencent le prix de l'élagage ?",
    answer: "Plusieurs critères déterminent le tarif final : la hauteur de l'arbre (plus il est haut, plus l'intervention est technique), l'essence (certains bois sont plus durs à couper), l'accessibilité (accès nacelle ou uniquement sur corde), la proximité de bâtiments ou lignes électriques, le volume de déchets à évacuer, et la période (haute saison mars-avril = plus de demande)."
  },
  {
    question: "Proposez-vous des forfaits annuels ?",
    answer: "Oui, nous proposons des forfaits d'entretien annuel pour les jardins. Exemple : forfait 6 passages/an (tonte, taille haies, nettoyage saisonnier) à partir de 1 200€/an, soit 600€ après crédit d'impôt 50%. Les forfaits permettent de lisser le coût et de maintenir votre jardin en parfait état toute l'année."
  },
  {
    question: "Comment obtenir un devis rapidement ?",
    answer: "Trois options : appelez-nous au 06 48 76 85 15 pour un échange direct, remplissez le formulaire de contact sur notre site, ou envoyez un email à contact@arbovert-31.fr avec des photos de vos arbres. Nous vous recontactons sous 24h et planifions une visite gratuite pour établir un devis précis."
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
        { "@type": "Offer", "name": "Élagage arbre 5-10m", "priceRange": "150€ - 250€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 10-15m", "priceRange": "250€ - 400€", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Élagage arbre 15-20m", "priceRange": "400€ - 700€", "priceCurrency": "EUR" }
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
        { "@type": "Offer", "name": "Abattage arbre 15-20m", "priceRange": "550€ - 750€", "priceCurrency": "EUR" }
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
              Tarifs élagage et entretien de jardins en Haute-Garonne
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4 max-w-3xl mx-auto">
              Grille tarifaire transparente pour tous nos services d'élagage, d'abattage et d'entretien d'espaces verts. <strong>Devis gratuit et personnalisé sous 24h.</strong>
            </p>
            <p className="text-lg text-night/80 mb-8">
              Jusqu'à <strong>-50% de crédit d'impôt</strong> sur la taille de haies et l'entretien de jardin.
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
              L'élagage comprend la taille des branches, le broyage sur place et l'évacuation des déchets verts. Tarifs TTC.
            </p>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-4 font-heading text-forest">Hauteur de l'arbre</th>
                      <th className="pb-4 font-heading text-forest text-right">Tarif indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 5 à 10 mètres</td>
                      <td className="py-4 text-right font-semibold">150€ – 250€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 10 à 15 mètres</td>
                      <td className="py-4 text-right font-semibold">250€ – 400€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 15 à 20 mètres</td>
                      <td className="py-4 text-right font-semibold">400€ – 700€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Arbre de plus de 20 mètres</td>
                      <td className="py-4 text-right font-semibold">Sur devis</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-night/60 mt-4">Inclus : élagage, broyage branches, évacuation déchets, nettoyage chantier. Non éligible au crédit d'impôt.</p>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Abattage */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Tarifs abattage d'arbres</h2>
            <p className="text-center text-night/70 mb-8 max-w-2xl mx-auto">
              L'abattage inclut l'abattage ou le démontage par tronçons, le broyage et l'évacuation. Dessouchage en option.
            </p>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-4 font-heading text-forest">Hauteur de l'arbre</th>
                      <th className="pb-4 font-heading text-forest text-right">Tarif indicatif</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 2 à 5 mètres</td>
                      <td className="py-4 text-right font-semibold">130€ – 230€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 5 à 10 mètres</td>
                      <td className="py-4 text-right font-semibold">230€ – 370€</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-4">Arbre de 10 à 15 mètres</td>
                      <td className="py-4 text-right font-semibold">370€ – 550€</td>
                    </tr>
                    <tr>
                      <td className="py-4">Arbre de 15 à 20 mètres</td>
                      <td className="py-4 text-right font-semibold">550€ – 750€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-night/60 mt-4">Inclus : abattage ou démontage, broyage, évacuation, nettoyage. Dessouchage : +80€ à 250€ selon diamètre. Non éligible au crédit d'impôt.</p>
            </div>
          </div>
        </section>

        {/* Grille tarifaire - Services éligibles crédit d'impôt */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Taille de haies et entretien de jardin</h2>
            <p className="text-center text-lg text-leaf font-semibold mb-8">Éligible au crédit d'impôt 50% – Services à la Personne</p>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-leaf/30">
                      <th className="pb-4 font-heading text-forest">Prestation</th>
                      <th className="pb-4 font-heading text-forest text-center">Tarif brut</th>
                      <th className="pb-4 font-heading text-leaf text-right">Après crédit 50%</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Taille de haie (40 mètres linéaires)</td>
                      <td className="py-4 text-center">240€</td>
                      <td className="py-4 text-right font-semibold text-leaf">120€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Tonte pelouse (jusqu'à 500m²)</td>
                      <td className="py-4 text-center">80€ – 120€</td>
                      <td className="py-4 text-right font-semibold text-leaf">40€ – 60€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Débroussaillage (journée)</td>
                      <td className="py-4 text-center">350€ – 500€</td>
                      <td className="py-4 text-right font-semibold text-leaf">175€ – 250€</td>
                    </tr>
                    <tr className="border-b border-leaf/10">
                      <td className="py-4">Nettoyage automnal complet</td>
                      <td className="py-4 text-center">200€ – 400€</td>
                      <td className="py-4 text-right font-semibold text-leaf">100€ – 200€</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-semibold">Forfait annuel 6 passages</td>
                      <td className="py-4 text-center">1 200€</td>
                      <td className="py-4 text-right font-semibold text-leaf">600€</td>
                    </tr>
                  </tbody>
                </table>
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
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Ce qui est toujours inclus dans nos tarifs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="font-heading text-xl text-forest mb-3">Diagnostic gratuit</h3>
                <p className="text-night/80">
                  Visite sur place pour évaluer l'arbre, l'accessibilité et les contraintes. Aucun frais de déplacement en Haute-Garonne.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Évacuation déchets</h3>
                <p className="text-night/80">
                  Broyage des branches sur place et évacuation vers une déchèterie agréée. Chantier laissé propre.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Assurance RC Pro</h3>
                <p className="text-night/80">
                  Responsabilité civile professionnelle couvrant tous les dommages éventuels. Certification CAPA Travaux Forestiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facteurs de prix */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Quels facteurs influencent le prix de l'élagage ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📏</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Hauteur de l'arbre</h3>
                    <p className="text-night/80 text-sm">Plus l'arbre est haut, plus l'intervention est technique et nécessite du matériel spécialisé (nacelle, corde). C'est le critère principal.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🌳</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Essence de l'arbre</h3>
                    <p className="text-night/80 text-sm">Un chêne centenaire est plus complexe à élaguer qu'un pin. Le bois dur demande plus de temps et use davantage le matériel.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🏠</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Accessibilité</h3>
                    <p className="text-night/80 text-sm">Un arbre en bord de route est plus simple d'accès qu'un arbre enclavé entre deux maisons. L'accès nacelle réduit le coût vs. travail sur corde.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">⚡</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Proximité de réseaux</h3>
                    <p className="text-night/80 text-sm">La présence de lignes électriques, de bâtiments ou de clôtures impose des précautions supplémentaires (rétention, démontage par tronçons).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📅</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Période d'intervention</h3>
                    <p className="text-night/80 text-sm">Mars-avril = haute saison. Anticipez votre devis dès février pour bénéficier de meilleurs délais et parfois de tarifs préférentiels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">🗑️</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-2">Volume de déchets</h3>
                    <p className="text-night/80 text-sm">Le broyage et l'évacuation sont inclus, mais un arbre très volumineux génère plus de déchets = temps de traitement supplémentaire.</p>
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
            <p className="text-center mt-6">
              <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">
                Calculez votre économie avec notre simulateur de crédit d'impôt
              </Link>
            </p>
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
