import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage Urgence Toulouse | Arbovert – Intervention rapide 7j/7',
  description:
    'Élagage d\'urgence à Toulouse et Haute-Garonne : arbre tombé, branche dangereuse, dégâts de tempête. Intervention rapide 7j/7. Appelez le 06 48 76 85 15.',
  keywords: ['élagage urgence toulouse', 'arbre dangereux toulouse', 'arbre tombé', 'élagage urgence', 'élagueur urgence', 'branche dangereuse', 'tempête arbre toulouse'],
  alternates: {
    canonical: '/elagage-urgence-toulouse'
  },
  openGraph: {
    title: 'Élagage Urgence Toulouse | Arbovert – Intervention rapide 7j/7',
    description: 'Élagage d\'urgence à Toulouse et Haute-Garonne. Arbre tombé, branche dangereuse, dégâts de tempête. Intervention rapide.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-urgence-toulouse'
  },
};

const faqData = [
  {
    question: "Quel est votre délai d'intervention en urgence ?",
    answer: "En cas d'urgence avérée (arbre tombé sur un bâtiment, branche menaçant la sécurité des personnes, obstruction de voie), nous intervenons dans les plus brefs délais, y compris le week-end. Appelez-nous directement au 06 48 76 85 15 pour une évaluation immédiate de la situation."
  },
  {
    question: "Que faire si un arbre tombe sur ma maison ?",
    answer: "1. Mettez-vous en sécurité et éloignez-vous de la zone. 2. Appelez les pompiers (18) si danger immédiat. 3. Contactez votre assurance habitation pour déclarer le sinistre. 4. Appelez Arbovert au 06 48 76 85 15 pour l'intervention de dégagement et mise en sécurité. Ne tentez jamais de dégager l'arbre vous-même, les risques de chute de branches supplémentaires sont réels."
  },
  {
    question: "L'élagage d'urgence coûte-t-il plus cher ?",
    answer: "Les interventions d'urgence peuvent être majorées en fonction des conditions (week-end, nuit, complexité d'accès). Nous vous communiquons un tarif avant toute intervention. Dans tous les cas, un devis est établi et validé avant le démarrage des travaux. Votre assurance habitation peut prendre en charge tout ou partie des frais en cas de sinistre climatique."
  },
  {
    question: "Mon assurance couvre-t-elle les dégâts d'un arbre ?",
    answer: "Oui, dans la plupart des cas. L'assurance habitation (garantie tempête/catastrophe naturelle) couvre les dommages causés par la chute d'un arbre sur votre propriété. Elle peut aussi couvrir les frais de déblaiement. Déclarez le sinistre dans les 5 jours (10 jours pour catastrophe naturelle). Arbovert vous fournit une facture détaillée pour votre dossier d'assurance."
  },
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer: "Oui, pour les urgences avérées (risque pour les personnes ou les biens), nous intervenons 7 jours sur 7. Contactez-nous au 06 48 76 85 15. Nous évaluons le niveau d'urgence par téléphone et organisons l'intervention dans les meilleurs délais."
  },
  {
    question: "Quels types d'urgences prenez-vous en charge ?",
    answer: "Nous intervenons pour : arbre tombé ou déraciné (tempête, vent violent), branche cassée menaçant un bâtiment ou des personnes, arbre penchant dangereusement, obstruction de voie d'accès par un arbre, arbre endommagé menaçant des lignes électriques (avec coordination Enedis). Chaque situation est évaluée individuellement."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Urgence Toulouse",
      "description": "Service d'élagage d'urgence à Toulouse et Haute-Garonne. Intervention rapide 7j/7 pour arbre tombé, branche dangereuse, dégâts de tempête.",
      "url": "https://www.arbovert-31.fr/elagage-urgence-toulouse",
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6047,
        "longitude": 1.4442
      },
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 43.6047, "longitude": 1.4442 },
        "geoRadius": "40000"
      },
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "28",
        "reviewCount": "28"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "08:00",
          "closes": "19:00",
          "description": "Urgences uniquement"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Élagage d'urgence",
      "serviceType": "Emergency Tree Service",
      "provider": { "@id": "https://www.arbovert-31.fr/#organization" },
      "areaServed": { "@type": "State", "name": "Haute-Garonne" },
      "description": "Intervention d'urgence pour arbre tombé, branche dangereuse, dégâts de tempête à Toulouse et Haute-Garonne."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Élagage urgence Toulouse", "item": "https://www.arbovert-31.fr/elagage-urgence-toulouse" }
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

export default function ElagageUrgence() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-0">
        {/* Hero Section - Urgence */}
        <section className="py-16 md:py-20 bg-red-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
              <div>
                <div className="rounded-2xl border-2 border-red-300 bg-red-100 p-4 mb-6">
                  <p className="font-heading text-lg text-red-700 mb-2">URGENCE ÉLAGAGE – INTERVENTION RAPIDE</p>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• <strong>Intervention 7j/7</strong> pour les urgences</li>
                    <li>• Arbre tombé, branche dangereuse, tempête</li>
                    <li>• Équipe certifiée et assurée</li>
                    <li>• Appelez maintenant :</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage d'urgence à Toulouse et Haute-Garonne
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Un <strong>arbre tombé sur votre toiture</strong> ? Une <strong>branche dangereuse</strong> menaçant votre maison après une tempête ? Arbovert intervient rapidement pour <strong>sécuriser votre propriété</strong> à Toulouse et dans toute la Haute-Garonne.
                </p>
                <p className="text-lg text-night/80 leading-relaxed mb-6">
                  Notre équipe d'<strong>élagueurs grimpeurs certifiés</strong> est équipée pour les interventions d'urgence : dégagement d'arbres, mise en sécurité, démontage contrôlé.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:0648768515" className="btn bg-red-600 text-white hover:bg-red-700 whitespace-nowrap text-lg px-8 py-4 rounded-xl shadow-lg">
                    APPELER : 06 48 76 85 15
                  </a>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
                <Image
                  src="/abattage-demontage-arbres-services.JPG"
                  alt="Intervention urgence élagage arbre dangereux Toulouse"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types d'urgences */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Situations d'urgence : quand nous appeler ?</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Ne prenez aucun risque. Si vous êtes confronté à l'une de ces situations, contactez-nous immédiatement.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">🌪️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Dégâts de tempête</h3>
                <p className="text-night/80 text-sm">
                  Toulouse et la Haute-Garonne sont régulièrement touchées par des vents violents (Autan, tempêtes hivernales). Arbres déracinés, branches arrachées, charpentes endommagées : nous sécurisons la zone et dégageons les débris.
                </p>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">🏚️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Arbre tombé sur un bâtiment</h3>
                <p className="text-night/80 text-sm">
                  Tronc ou branche sur votre toiture, votre voiture ou votre clôture ? Nous intervenons pour le dégagement en toute sécurité, en limitant les dommages supplémentaires. Facture détaillée pour votre assurance.
                </p>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">⚠️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Branche menaçante</h3>
                <p className="text-night/80 text-sm">
                  Branche cassée mais encore accrochée, qui menace de tomber à tout moment ? C'est l'une des situations les plus dangereuses. Notre équipe sécurise et retire la branche avant qu'elle ne cause des dommages.
                </p>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="font-heading text-xl text-forest mb-3">Arbre penchant</h3>
                <p className="text-night/80 text-sm">
                  Votre arbre penche de façon inhabituelle après un orage ou des pluies prolongées ? Les racines peuvent être compromises. Nous évaluons la stabilité et procédons à l'abattage préventif si nécessaire.
                </p>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">🚧</div>
                <h3 className="font-heading text-xl text-forest mb-3">Voie bloquée</h3>
                <p className="text-night/80 text-sm">
                  Arbre tombé en travers de votre allée, de votre chemin d'accès ou d'une voie de circulation ? Nous découpons et dégageons rapidement pour rétablir la circulation.
                </p>
              </div>
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-heading text-xl text-forest mb-3">Proximité lignes électriques</h3>
                <p className="text-night/80 text-sm">
                  Arbre ou branche tombé sur ou à proximité de lignes électriques ? Ne touchez à rien. Appelez Enedis (09 72 67 50 31) puis contactez-nous pour le dégagement une fois la ligne sécurisée.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Que faire en cas d'urgence */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Que faire en cas d'urgence ? Les bons réflexes</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <ol className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-heading text-lg">1</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Mettez-vous en sécurité</h3>
                    <p className="text-night/80">Éloignez-vous de la zone de danger. Ne tentez jamais de dégager un arbre tombé vous-même. Des branches peuvent être sous tension mécanique et se détendre violemment.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-heading text-lg">2</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Appelez les secours si nécessaire</h3>
                    <p className="text-night/80">Pompiers (18) en cas de danger immédiat pour les personnes. Enedis (09 72 67 50 31) si des lignes électriques sont touchées.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-heading text-lg">3</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Prenez des photos</h3>
                    <p className="text-night/80">Documentez les dégâts pour votre dossier d'assurance avant toute intervention. Photos de l'arbre, des dommages, de la zone impactée.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-heading text-lg">4</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Appelez Arbovert</h3>
                    <p className="text-night/80">Contactez-nous au <a href="tel:0648768515" className="text-forest font-semibold underline">06 48 76 85 15</a>. Nous évaluons la situation par téléphone et organisons l'intervention dans les meilleurs délais.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center font-heading text-lg">5</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Déclarez le sinistre à votre assurance</h3>
                    <p className="text-night/80">Sous 5 jours ouvrés (10 jours en cas d'arrêté de catastrophe naturelle). Arbovert vous fournit une facture détaillée pour votre dossier.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Pourquoi Arbovert */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Pourquoi choisir Arbovert pour une urgence ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl text-forest mb-3">Réactivité</h3>
                <p className="text-night/80">
                  Intervention rapide 7j/7 pour les urgences. Évaluation par téléphone, mise en sécurité en priorité. Basés en Haute-Garonne, à proximité de Toulouse.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Sécurité garantie</h3>
                <p className="text-night/80">
                  Élagueurs certifiés CAPA Travaux Forestiers. Assurance RC Pro couvrant tous les dommages. Matériel professionnel adapté aux situations critiques.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-heading text-xl text-forest mb-3">Facture assurance</h3>
                <p className="text-night/80">
                  Facture détaillée conforme aux exigences des assurances. Nous connaissons les procédures et facilitons vos démarches de remboursement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention urgence */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Zone d'intervention urgence</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons en urgence dans tout le département de la Haute-Garonne, dans un rayon de 40 km autour de Toulouse.
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
                <Link key={v.ville} href={v.href} className="block rounded-full border border-forest/20 bg-white px-4 py-3 text-center uppercase tracking-wide text-night/70 hover:bg-forest/5 transition-colors">
                  {v.ville}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Questions fréquentes – Élagage d'urgence</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-forest/10 bg-beige/30 p-6">
                  <h3 className="font-heading text-xl text-forest mb-3">{faq.question}</h3>
                  <p className="text-night/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Urgence */}
        <section className="py-16 md:py-20 bg-red-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border-2 border-red-300 bg-white p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Urgence élagage ? Appelez-nous maintenant.
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Notre équipe évalue votre situation par téléphone et organise l'intervention dans les meilleurs délais. Ne prenez aucun risque.
              </p>
              <a href="tel:0648768515" className="inline-block btn bg-red-600 text-white hover:bg-red-700 whitespace-nowrap text-xl px-12 py-5 rounded-xl shadow-lg mb-6">
                APPELER : 06 48 76 85 15
              </a>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-night/70">
                <span>✓ Intervention 7j/7</span>
                <span>✓ Élagueurs certifiés</span>
                <span>✓ Assurance RC Pro</span>
                <span>✓ Facture pour assurance</span>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact */}
        <div className="py-16 md:py-20 bg-white">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
