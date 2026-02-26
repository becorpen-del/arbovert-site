import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Castanet-Tolosan | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Castanet-Tolosan : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage castanet-tolosan', 'élagage castanet tolosan', 'élagueur castanet-tolosan', 'abattage arbre castanet-tolosan', 'taille de haie castanet-tolosan', 'entretien jardin castanet-tolosan', 'élagage 31320'],
  alternates: {
    canonical: '/elagage-castanet-tolosan'
  },
  openGraph: {
    title: 'Élagage à Castanet-Tolosan | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Castanet-Tolosan : taille douce, abattage sécurisé et entretien d\'arbres. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-castanet-tolosan'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Castanet-Tolosan : taille raisonnée",
    description:
      "Castanet-Tolosan est une commune résidentielle prisée du sud-est toulousain, proche du Canal du Midi. Ses coteaux abritent de nombreux chênes verts et pédonculés qui nécessitent un entretien régulier. Nous pratiquons l'élagage raisonné : coupe limitée à 30% du houppier, respect du bourrelet cicatriciel, pas de taille drastique.",
    points: [
      'Diagnostic sanitaire sur votre terrain à Castanet-Tolosan',
      'Taille sélective adaptée aux chênes, fruitiers, pins et platanes',
      'Élagage sur corde ou nacelle selon le contexte',
      'Intervention dans les lotissements récents et jardins anciens'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres à Castanet-Tolosan",
    description:
      "Quand un arbre devient dangereux ou malade, nous réalisons un abattage contrôlé. À Castanet-Tolosan, les nombreux lotissements récents du quartier des Musiciens et de la Route d'Escalquens imposent un démontage par tronçons pour protéger les habitations et les clôtures voisines.",
    points: [
      'Abattage directionnel en terrain dégagé',
      'Démontage par tronçons avec système de rétention',
      'Dessouchage chimique ou mécanique',
      'Évacuation vers déchèterie agréée, chantier laissé propre'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes (-50% crédit d\'impôt)',
    description:
      "Les haies de lauriers, photinias et troènes sont omniprésentes à Castanet-Tolosan, notamment dans les lotissements des Musiciens, du Chemin des Musiciens et le long de la Route d'Escalquens. Nous assurons une taille nette, au cordeau ou naturelle. Éligible au crédit d'impôt 50%.",
    points: [
      'Taille au cordeau ou forme libre',
      'Fréquence recommandée : 2 fois/an (mai + septembre)',
      'Ramassage et évacuation des déchets inclus',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 40m = 240€ → 120€ après crédit'
  },
  {
    title: 'Entretien complet de jardins à Castanet-Tolosan (Services à la Personne)',
    description:
      "Tonte, débroussaillage, ramassage de feuilles, nettoyage saisonnier : nous prenons en charge l'entretien complet de votre jardin à Castanet-Tolosan. Les propriétés arborées du Bois de Castres et les jardins anciens du centre-ville bénéficient pleinement de nos forfaits annuels avec crédit d'impôt.",
    points: [
      'Débroussaillage de terrains envahis',
      'Soufflage et ramassage feuilles automnales',
      'Tonte régulière avec scarification',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true,
    prices: 'Forfait annuel 6 passages : 600€ après crédit'
  }
];

const quartiersCastanetTolosan = [
  'Centre-ville',
  'Les Music-Halles',
  'Le Bois de Castres',
  'Route d\'Escalquens',
  'Chemin des Musiciens',
  'Montgazin',
  'Route d\'Ayguesvives',
  'Les Musiciens'
];

const villesIntervention = ['CASTANET-TOLOSAN', 'RAMONVILLE', 'LABÈGE', 'TOULOUSE', 'AUZEVILLE-TOLOSANE', 'PECHABOU', 'ESCALQUENS', 'POMPERTUZAT'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Castanet-Tolosan ?",
    answer: "Les tarifs dépendent de la hauteur de l'arbre, de l'essence et de l'accessibilité. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Tarifs incluant élagage, broyage et évacuation. Devis gratuit personnalisé sous 24h après visite à Castanet-Tolosan."
  },
  {
    question: "Intervenez-vous dans tous les quartiers de Castanet-Tolosan ?",
    answer: "Oui, Arbovert couvre l'intégralité de Castanet-Tolosan et ses 14 500 habitants. Centre-ville, Les Music-Halles, Le Bois de Castres, Route d'Escalquens, Les Musiciens, Montgazin, Route d'Ayguesvives. Nous intervenons aussi pour les copropriétés et les résidences des lotissements récents. Pas de surcoût lié à la commune."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt à Castanet-Tolosan ?",
    answer: "Oui pour certains services grâce à notre agrément Services à la Personne. Crédit d'impôt 50% pour : taille de haies, tonte, débroussaillage, entretien courant. Non éligible : élagage en hauteur, abattage, dessouchage. Conditions : résidence à Castanet-Tolosan, particulier employeur, déclaration case 7DB."
  },
  {
    question: "Quelles essences d'arbres trouve-t-on principalement à Castanet-Tolosan ?",
    answer: "Castanet-Tolosan se distingue par ses coteaux avec chênes verts et chênes pédonculés. Les lotissements récents présentent beaucoup de haies (lauriers, photinias). Les jardins anciens du centre-ville abritent des fruitiers : cerisiers, pruniers et figuiers. On trouve aussi des platanes le long des axes principaux et à proximité du Canal du Midi."
  },
  {
    question: "Quelle est la meilleure période pour élaguer à Castanet-Tolosan ?",
    answer: "Feuillus (chênes, platanes, érables) : novembre à février pendant le repos végétatif. Conifères (pins, cyprès) : septembre-novembre ou mars-avril. Fruitiers (cerisiers, pruniers, figuiers) : janvier-mars hors gel. Évitez la période du 16 mars au 31 août (protection de la nidification). Le climat de Castanet-Tolosan, doux et ensoleillé, permet des interventions confortables de septembre à avril."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage à Castanet-Tolosan ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions. Guillaume et Clément sont certifiés CAPA Travaux Forestiers. Nous respectons toutes les normes de sécurité : EPI complet, balisage chantier, rétention pour les abattages en zone contrainte."
  },
  {
    question: "Comment entretenir les haies de lauriers et photinias dans les lotissements de Castanet ?",
    answer: "Les lotissements récents de Castanet-Tolosan comportent énormément de haies de lauriers et photinias. Nous recommandons 2 tailles par an : une en mai après la première pousse et une en septembre avant l'hiver. La taille au cordeau maintient un aspect net. Ce service est éligible au crédit d'impôt 50% grâce à notre agrément SAP."
  },
  {
    question: "Intervenez-vous en urgence à Castanet-Tolosan ?",
    answer: "Oui, nous proposons un service d'intervention rapide pour les situations d'urgence à Castanet-Tolosan : arbre menaçant après une tempête ou le vent d'Autan, branche cassée sur un toit, danger immédiat. Contactez-nous au 06 48 76 85 15 pour une évaluation rapide de la situation."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Castanet-Tolosan",
      "description": "Élagueur professionnel à Castanet-Tolosan (31320). Élagage, abattage, taille de haies, entretien jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-castanet-tolosan",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Castanet-Tolosan",
        "postalCode": "31320",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5156,
        "longitude": 1.4989
      },
      "areaServed": [
        { "@type": "City", "name": "Castanet-Tolosan", "postalCode": "31320" },
        { "@type": "City", "name": "Ramonville-Saint-Agne" },
        { "@type": "City", "name": "Labège" },
        { "@type": "City", "name": "Auzeville-Tolosane" },
        { "@type": "City", "name": "Pechabou" },
        { "@type": "City", "name": "Toulouse" }
      ],
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
      },
      "serviceType": ["Élagage d'arbres", "Abattage", "Taille de haies", "Entretien jardins"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Nos villes", "item": "https://www.arbovert-31.fr/nos-villes" },
        { "@type": "ListItem", "position": 3, "name": "Élagage Castanet-Tolosan", "item": "https://www.arbovert-31.fr/elagage-castanet-tolosan" }
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

export default function ElagageCastanetTolosan() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-0">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
              <div>
                <div className="rounded-2xl border-2 border-leaf/40 bg-leaf/10 p-4 mb-6">
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À CASTANET-TOLOSAN - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Centre-ville, Musiciens, Bois de Castres)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Spécialiste chênes, fruitiers et haies de lotissements</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Castanet-Tolosan : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Castanet-Tolosan</strong> ? Arbovert intervient dans tous les quartiers : <strong>Centre-ville, Les Musiciens, Le Bois de Castres, Montgazin</strong>. Nos élagueurs certifiés pratiquent la taille douce, l'abattage sécurisé et l'entretien complet de jardins.
                </p>
                <p className="text-lg text-night/80 leading-relaxed mb-6">
                  <strong>Bonus</strong> : bénéficiez de <strong>-50% de crédit d'impôt</strong> sur la taille de haies et l'entretien de jardin grâce à notre agrément Services à la Personne.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                    06 48 76 85 15
                  </a>
                  <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                    Devis gratuit sous 24h
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
                <Image
                  src="/taille-douce-nacelle.png"
                  alt="Élagueur professionnel intervention arbre Castanet-Tolosan 31320"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Problème */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur à Castanet-Tolosan ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Un arbre menace votre toiture ?</strong> Des branches empiètent sur la propriété voisine ? Votre jardin a besoin d'un bon nettoyage ?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbre menaçant</p>
                    <p className="text-sm text-night/70">Branches mortes au-dessus de votre toiture ou de votre terrasse</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies envahissantes</p>
                    <p className="text-sm text-night/70">Lauriers et photinias débordant sur le trottoir ou chez le voisin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Jardin envahi</p>
                    <p className="text-sm text-night/70">Terrain laissé sans entretien, ronces, herbes hautes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Chênes sur coteaux</p>
                    <p className="text-sm text-night/70">Chênes verts et pédonculés fragilisés par la sécheresse estivale</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-night/80 mb-4">
                <strong>Ne prenez pas de risques :</strong> un élagage mal réalisé peut aggraver les problèmes (blessures de l'arbre, chute de branches mal contrôlée, propagation de maladies).
              </p>
              <p className="text-lg text-night/80">
                <strong>Arbovert intervient avec professionnalisme</strong>, matériel adapté et assurance RC Pro.
              </p>
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Votre expert élagage à Castanet-Tolosan et ses alentours</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert accompagne particuliers et professionnels de Haute-Garonne depuis 2020. Nous intervenons régulièrement à <strong>Castanet-Tolosan et dans tout le secteur sud-est de Toulouse</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Interventions sécurisées et méthodiques. Spécialiste abattage contrôlé.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur</strong> avec 8 ans d'expérience. Spécialiste taille douce et élagage raisonné en hauteur.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-night/80">
                  <li>✅ Agrément Services à la Personne (SAP)</li>
                  <li>✅ Assurance RC Pro et décennale</li>
                  <li>✅ Matériel professionnel certifié</li>
                </ul>
                <ul className="space-y-2 text-night/80">
                  <li>⚡ Devis gratuit sous 24h</li>
                  <li>⚡ Intervention sous 1 semaine</li>
                  <li>🌿 Respect nidification (16 mars - 31 août)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Nos services d'élagage et entretien à Castanet-Tolosan</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Gamme complète adaptée aux arbres et jardins de Castanet-Tolosan. Intervention toute l'année sur toutes les essences.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`rounded-3xl border bg-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow ${
                    service.highlight ? 'border-leaf/40 ring-2 ring-leaf/20' : 'border-forest/10'
                  }`}
                >
                  {service.highlight && (
                    <span className="inline-block rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf border border-leaf/30 mb-4">
                      Crédit d'impôt 50%
                    </span>
                  )}
                  <div className="overflow-hidden rounded-2xl border border-forest/10 bg-beige/60 mb-4">
                    <Image
                      src={service.image}
                      alt={`${service.title} - Arbovert élagueur professionnel Castanet-Tolosan`}
                      width={400}
                      height={300}
                      className="h-[250px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-forest mb-3">{service.title}</h3>
                  <p className="text-night/80 mb-4">{service.description}</p>
                  <ul className="list-disc space-y-2 pl-5 text-night/80 mb-4">
                    {service.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium text-forest bg-forest/5 rounded-lg px-3 py-2">
                    Tarifs indicatifs : {service.prices}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-center mt-8 text-night/70">
              Consultez nos <Link href="/tarif-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">tarifs détaillés</Link> ou découvrez l'ensemble de nos <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">services en Haute-Garonne</Link>.
            </p>
          </div>
        </section>

        {/* Section Quartiers */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Intervention dans tout Castanet-Tolosan</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Castanet-Tolosan (31320) compte <strong>14 500 habitants</strong> et se situe dans le <strong>sud-est toulousain</strong>, à proximité du <strong>Canal du Midi</strong>. Commune résidentielle prisée, elle se distingue par ses nombreux lotissements récents avec jardins arborés et ses coteaux plantés de chênes.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-ville & Les Music-Halles</h3>
                  <p className="text-sm text-night/70">Cœur animé de Castanet avec commerces et résidences. Jardins anciens avec fruitiers (cerisiers, pruniers, figuiers). Accès parfois contraints en centre-ville.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Les Musiciens & Chemin des Musiciens</h3>
                  <p className="text-sm text-night/70">Grands lotissements résidentiels récents. Nombreuses maisons individuelles avec jardins arborés. Forte demande en taille de haies (lauriers, photinias) et entretien.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Le Bois de Castres & Montgazin</h3>
                  <p className="text-sm text-night/70">Secteurs résidentiels verdoyants sur les coteaux. Chênes verts et pédonculés imposants nécessitant un élagage régulier. Propriétés boisées.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Route d'Escalquens & Route d'Ayguesvives</h3>
                  <p className="text-sm text-night/70">Axes principaux bordés de lotissements récents. Haies mitoyennes nécessitant un entretien régulier. Arbres d'alignement sur les voies communales.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersCastanetTolosan.map((quartier) => (
                  <span
                    key={quartier}
                    className="block rounded-full border border-forest/20 bg-beige/50 px-4 py-2 text-center text-sm text-night/80"
                  >
                    {quartier}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Spécificités locales */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Élagage à Castanet-Tolosan : particularités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Castanet-Tolosan est une <strong>commune résidentielle prisée du sud-est toulousain</strong>, proche du <strong>Canal du Midi</strong>. Les nombreux <strong>lotissements récents</strong> avec jardins arborés génèrent une forte demande en entretien de haies et d'arbres.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Les <strong>coteaux de Castanet</strong> abritent de beaux spécimens de chênes verts et pédonculés. Les jardins anciens du centre-ville conservent des <strong>fruitiers</strong> (cerisiers, pruniers, figuiers) qui demandent une taille de fructification adaptée. Les lotissements présentent une <strong>forte densité de haies</strong> (lauriers, photinias) nécessitant 2 tailles annuelles.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Le <strong>climat sud-toulousain</strong> (été chaud et sec, hiver doux) favorise une croissance rapide des végétaux. La sécheresse estivale peut fragiliser les arbres matures, notamment les chênes sur coteaux exposés.
              </p>
              <p className="text-lg text-night/80">
                Nous intervenons aussi dans les communes voisines : <Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Ramonville</Link>, <Link href="/elagage-labege" className="text-forest underline hover:text-forest/80">Labège</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse sud</Link> et Auzeville-Tolosane.
              </p>
            </div>
          </div>
        </section>

        {/* Section Crédit d'impôt */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt 50% – Jardinage à Castanet-Tolosan</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Grâce à notre agrément <strong>Services à la Personne</strong>, bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de votre jardin à Castanet-Tolosan.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                  <h3 className="font-heading text-xl text-leaf mb-4">✅ Éligible (-50%)</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Taille de haies et arbustes</li>
                    <li>• Tonte de pelouse</li>
                    <li>• Débroussaillage</li>
                    <li>• Entretien courant du jardin</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 border border-red-200">
                  <h3 className="font-heading text-xl text-red-600 mb-4">❌ Non éligible</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Élagage d'arbres en hauteur</li>
                    <li>• Abattage d'arbres</li>
                    <li>• Dessouchage</li>
                    <li>• Création paysagère</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6">
                <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">En savoir plus sur le crédit d'impôt jardinage</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Castanet-Tolosan</h2>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isCastanet = ville === 'CASTANET-TOLOSAN';
                const slugMap: Record<string, string> = {
                  'RAMONVILLE': 'elagage-ramonville',
                  'LABÈGE': 'elagage-labege',
                  'TOULOUSE': 'elagage-toulouse',
                  'BALMA': 'elagage-balma',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isCastanet
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isCastanet) {
                  return <Link key={ville} href={`/${href}`}>{content}</Link>;
                }
                return <span key={ville}>{content}</span>;
              })}
            </div>
            <p className="text-center mt-6">
              <Link href="/nos-villes" className="text-forest underline hover:text-forest/80">
                Voir toutes nos zones d'intervention
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Questions fréquentes – Élagage à Castanet-Tolosan (31320)</h2>
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

        {/* Maillage interne */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert dans les communes voisines de Castanet-Tolosan</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Élagage à Ramonville</Link> – Commune voisine</li>
                    <li>🌳 <Link href="/elagage-labege" className="text-forest underline hover:text-forest/80">Élagage à Labège</Link> – Innopole et Labège Village</li>
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres villes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Élagueur à Balma</Link> – Est toulousain</li>
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagueur Muret</Link> – Sud Haute-Garonne</li>
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage Colomiers</Link> – 2ème ville du 31</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6">
                <Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">
                  Voir nos réalisations en Haute-Garonne
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Un projet d'élagage à Castanet-Tolosan ?
              </h2>
              <p className="text-lg text-night/80 mb-4 max-w-2xl mx-auto">
                Diagnostic gratuit, devis sous 24h, intervention rapide :
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
                <span>✓ Devis gratuit sous 24h</span>
                <span>✓ Élagueur certifié CAPA</span>
                <span>✓ Assurance RC Pro</span>
                <span>✓ Évacuation déchets incluse</span>
              </div>
              <p className="mt-6 text-sm text-night/60">
                Intervention à Castanet-Tolosan, Ramonville, Labège, Auzeville-Tolosane et toute la métropole.
              </p>
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
