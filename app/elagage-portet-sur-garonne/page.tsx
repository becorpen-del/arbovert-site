import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Portet-sur-Garonne | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Portet-sur-Garonne : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage portet-sur-garonne', 'élagage portet-sur-garonne 31120', 'élagueur portet-sur-garonne', 'abattage arbre portet-sur-garonne', 'taille de haie portet-sur-garonne', 'entretien jardin portet-sur-garonne', 'arboriste portet-sur-garonne', 'élagage confluent garonne ariège'],
  alternates: {
    canonical: '/elagage-portet-sur-garonne'
  },
  openGraph: {
    title: 'Élagage à Portet-sur-Garonne | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Portet-sur-Garonne : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-portet-sur-garonne'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Portet-sur-Garonne : taille raisonnée et sécurisée",
    description:
      "Portet-sur-Garonne, au confluent de la Garonne et de l'Ariège, abrite de nombreux arbres exposés aux vents et aux crues. Nos interventions d'élagage raisonné préservent la santé de vos arbres tout en sécurisant votre propriété. Coupe limitée à 30% du houppier, biseau au-dessus du bourrelet cicatriciel pour une cicatrisation optimale.",
    points: [
      'Diagnostic sanitaire préalable sur votre terrain à Portet',
      'Techniques de taille adaptées aux peupliers, saules et platanes de bord de Garonne',
      'Élagage sur corde ou nacelle selon la configuration du jardin',
      'Respect de la physiologie de chaque essence locale'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres dangereux à Portet-sur-Garonne",
    description:
      "La zone inondable le long de la Garonne fragilise de nombreux arbres à Portet-sur-Garonne. Peupliers déracinés, saules fissurés, pins déstabilisés par le vent d'Autan : nous réalisons l'abattage contrôlé avec démontage par tronçons pour protéger les habitations des quartiers résidentiels.",
    points: [
      'Abattage directionnel en terrain dégagé',
      'Démontage par tronçons avec rétention en zone contrainte',
      'Dessouchage mécanique ou chimique sur demande',
      'Évacuation complète vers filière de recyclage agréée'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes à Portet (-50% crédit d\'impôt)',
    description:
      "Les quartiers résidentiels de Portet-sur-Garonne possèdent de longues haies de lauriers, thuyas et cyprès de Leyland qui nécessitent un entretien régulier. Nous redonnons une forme nette et dense à vos clôtures végétales. Prestation éligible au crédit d'impôt 50% grâce à notre agrément SAP.",
    points: [
      'Taille au cordeau ou naturelle selon vos préférences',
      'Fréquence recommandée : 2 passages/an (mai et septembre)',
      'Ramassage et évacuation des déchets inclus',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 40m = 240€ → 120€ après crédit'
  },
  {
    title: 'Entretien complet de jardins à Portet-sur-Garonne (Services à la Personne)',
    description:
      "Les grands jardins des quartiers résidentiels de Portet-sur-Garonne demandent un entretien soutenu, notamment au printemps et à l'automne. Tonte, débroussaillage, ramassage de feuilles de platanes et de peupliers : nous prenons en charge l'entretien intégral avec crédit d'impôt 50%.",
    points: [
      'Débroussaillage de terrains envahis ou en friche',
      'Soufflage et ramassage feuilles (peupliers, platanes, chênes)',
      'Tonte régulière avec finition des bordures et massifs',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true,
    prices: 'Forfait annuel 6 passages : 600€ après crédit'
  }
];

const quartiersPortet = [
  'Centre-ville',
  'Récébédou',
  'Portet-Commerce (zone commerciale)',
  'Bords de Garonne',
  'Les Cèdres',
  'Chemin de Boudou',
  'Route de Muret',
  'Le Confluent'
];

const villesIntervention = ['PORTET-SUR-GARONNE', 'MURET', 'CUGNAUX', 'TOULOUSE', 'ROQUES', 'VILLENEUVE-TOLOSANE', 'PINSAGUEL', 'ROQUETTES'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Portet-sur-Garonne ?",
    answer: "Les tarifs dépendent de la hauteur de l'arbre, de l'essence et de l'accessibilité du terrain. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Ces tarifs incluent l'élagage, le broyage des branches, l'évacuation des déchets verts et le nettoyage du chantier. Devis gratuit personnalisé sous 24h après visite sur place."
  },
  {
    question: "Intervenez-vous dans tous les quartiers de Portet-sur-Garonne ?",
    answer: "Oui, Arbovert couvre l'intégralité de Portet-sur-Garonne et ses 10 500 habitants. Nous intervenons au Centre-ville, au Récébédou, aux Bords de Garonne, aux Cèdres, au Chemin de Boudou, route de Muret, secteur du Confluent et aux abords de la zone commerciale Portet-Commerce. Pas de surcoût lié à la localisation dans la commune."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt pour l'entretien de mon jardin à Portet ?",
    answer: "Oui pour certains services grâce à notre agrément Services à la Personne. Crédit d'impôt de 50% applicable à : la taille de haies et arbustes, la tonte de pelouse, le débroussaillage, le ramassage de feuilles. En revanche, l'élagage d'arbres en hauteur, l'abattage et le dessouchage ne sont pas éligibles. Conditions : résidence à Portet-sur-Garonne, particulier employeur, déclaration case 7DB."
  },
  {
    question: "Quelle est la meilleure période pour élaguer un arbre à Portet-sur-Garonne ?",
    answer: "Feuillus (peupliers, platanes, chênes) : novembre à février, pendant le repos végétatif. Conifères (pins, cyprès) : septembre-novembre ou mars-avril. Saules en bord de Garonne : après la descente des eaux, généralement février-mars. Période à éviter : 16 mars au 31 août (nidification). Le vent d'Autan peut nécessiter des interventions d'urgence à tout moment de l'année."
  },
  {
    question: "Portet-sur-Garonne est en zone inondable, quelles précautions prenez-vous ?",
    answer: "La proximité du confluent Garonne-Ariège expose de nombreux arbres aux crues et à l'humidité permanente. Les peupliers et saules en bord de Garonne développent souvent des systèmes racinaires fragilisés. Nous réalisons un diagnostic approfondi avant chaque intervention : inspection des racines apparentes, test de stabilité, évaluation des cavités. Pour les arbres en zone inondable, nous privilégions un élagage d'allègement pour réduire la prise au vent."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage à Portet-sur-Garonne ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions d'élagage, d'abattage et d'entretien de jardins à Portet-sur-Garonne et dans toute la Haute-Garonne. Guillaume et Clément sont certifiés CAPA Travaux Forestiers. Nous respectons strictement les protocoles de sécurité (EPI, balisage chantier, rétention)."
  },
  {
    question: "Intervenez-vous en urgence à Portet-sur-Garonne ?",
    answer: "Oui, nous proposons un service d'intervention rapide pour les situations d'urgence à Portet-sur-Garonne : arbre fragilisé par une crue de la Garonne ou de l'Ariège, branche cassée par le vent d'Autan sur une toiture, arbre menaçant de tomber après un épisode orageux. Contactez-nous au 06 48 76 85 15 pour une évaluation rapide."
  },
  {
    question: "Que faites-vous des déchets verts après un élagage à Portet-sur-Garonne ?",
    answer: "Nous broyons les branches sur place lorsque l'espace le permet, produisant un paillage naturel réutilisable pour vos massifs et pieds d'arbres. Les bois volumineux et les troncs sont évacués vers des filières de recyclage agréées. Le brûlage des déchets verts est interdit à Portet-sur-Garonne comme dans toute la métropole toulousaine. Nous laissons un chantier propre après chaque intervention."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Portet-sur-Garonne",
      "description": "Élagueur professionnel à Portet-sur-Garonne (31120). Élagage, abattage, taille de haies, entretien jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-portet-sur-garonne",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Portet-sur-Garonne",
        "postalCode": "31120",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5234,
        "longitude": 1.4022
      },
      "areaServed": [
        { "@type": "City", "name": "Portet-sur-Garonne", "postalCode": "31120" },
        { "@type": "City", "name": "Toulouse" },
        { "@type": "City", "name": "Muret" },
        { "@type": "City", "name": "Cugnaux" },
        { "@type": "City", "name": "Roques" },
        { "@type": "City", "name": "Villeneuve-Tolosane" }
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
        { "@type": "ListItem", "position": 3, "name": "Élagage Portet-sur-Garonne", "item": "https://www.arbovert-31.fr/elagage-portet-sur-garonne" }
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

export default function ElagagePortetSurGaronne() {
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
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À PORTET-SUR-GARONNE - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Centre-ville, Récébédou, Bords de Garonne)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Équipe certifiée CAPA Travaux Forestiers</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Portet-sur-Garonne : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous recherchez un <strong>élagueur professionnel à Portet-sur-Garonne</strong> ? Arbovert intervient dans tous les quartiers : <strong>Centre-ville, Récébédou, Bords de Garonne, Les Cèdres, Le Confluent</strong>. Notre équipe certifiée pratique l'élagage raisonné, l'abattage sécurisé et l'entretien complet de jardins.
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
                  src="/elagage-services.JPG"
                  alt="Élagueur professionnel intervention arbre Portet-sur-Garonne 31120"
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
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur professionnel à Portet-sur-Garonne ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Des branches menacent votre toiture à Portet-sur-Garonne ?</strong> Vos peupliers en bord de Garonne sont fragilisés par les crues ? Un arbre penche dangereusement après un épisode de vent d'Autan ?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbre fragilisé par les crues</p>
                    <p className="text-sm text-night/70">Peupliers et saules déstabilisés dans la zone inondable du confluent Garonne-Ariège</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies envahissantes</p>
                    <p className="text-sm text-night/70">Lauriers et cyprès débordant sur les trottoirs dans les quartiers résidentiels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Grand jardin à entretenir</p>
                    <p className="text-sm text-night/70">Propriétés avec vastes terrains nécessitant un entretien régulier toute l'année</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Dégâts du vent d'Autan</p>
                    <p className="text-sm text-night/70">Branches cassées ou arbres penchés après les rafales de vent caractéristiques de la région</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-night/80 mb-4">
                <strong>Sans élagueur certifié</strong>, vous risquez : dommages matériels sur votre habitation, conflits de voisinage, amendes pour non-respect du PLU, et perte d'arbres qui pourraient être sauvés.
              </p>
              <p className="text-lg text-night/80">
                <strong>Arbovert sécurise vos arbres à Portet-sur-Garonne</strong> avec du matériel professionnel et une assurance RC Pro couvrant toutes nos interventions.
              </p>
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert : votre expert en élagage à Portet-sur-Garonne et alentours</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Depuis 2020, Arbovert accompagne particuliers et professionnels de Haute-Garonne pour leurs travaux d'élagage. Nous intervenons régulièrement à <strong>Portet-sur-Garonne et dans le secteur sud de Toulouse</strong>, entre Muret et la métropole.
              </p>
              <h3 className="font-heading text-xl text-forest mb-4">Notre équipe :</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Ancien militaire reconverti, il garantit des interventions sécurisées et méthodiques. Spécialiste du diagnostic phytosanitaire.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur professionnel</strong> avec 8 ans d'expérience. Spécialiste de la taille douce et de l'élagage en hauteur sur les grands arbres de bord de Garonne.</p>
                </div>
              </div>
              <h3 className="font-heading text-xl text-forest mb-4">Certifications et engagements :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-night/80">
                  <li>✅ Certification Services à la Personne (SAP)</li>
                  <li>✅ Assurance décennale RC Pro</li>
                  <li>✅ Matériel professionnel certifié</li>
                </ul>
                <ul className="space-y-2 text-night/80">
                  <li>⚡ Réponse sous 24h à votre demande</li>
                  <li>⚡ Intervention sous 1 semaine</li>
                  <li>🌿 Respect période de nidification (16 mars - 31 août)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">4 services d'élagage et entretien à Portet-sur-Garonne avec crédit d'impôt 50%</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Arbovert propose une gamme complète adaptée aux arbres et jardins de Portet-sur-Garonne. Intervention toute l'année sur toutes les essences, des peupliers de bord de Garonne aux pins des quartiers résidentiels.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Portet-sur-Garonne`}
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
              Découvrez l'ensemble de nos <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">services d'élagage en Haute-Garonne</Link> ou consultez nos <Link href="/tarif-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">tarifs détaillés</Link>.
            </p>
          </div>
        </section>

        {/* Section Quartiers */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Intervention dans tout Portet-sur-Garonne et ses environs</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Portet-sur-Garonne (31120) est une commune de <strong>10 500 habitants</strong> située au sud immédiat de Toulouse, au confluent de la Garonne et de l'Ariège. Connue pour sa vaste <strong>zone commerciale Portet-Commerce</strong>, la ville possède aussi de nombreux quartiers résidentiels aux grands jardins arborés qui nécessitent un entretien régulier.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-ville & Récébédou</h3>
                  <p className="text-sm text-night/70">Cœur historique avec arbres matures et jardins anciens. Le quartier du Récébédou offre un cadre verdoyant avec de nombreux arbres à entretenir. Accès parfois contraints nécessitant le travail sur corde.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Bords de Garonne & Le Confluent</h3>
                  <p className="text-sm text-night/70">Zone sensible au confluent Garonne-Ariège. Peupliers, saules et aulnes fragilisés par les crues régulières. Interventions spécifiques d'allègement et de sécurisation indispensables.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Les Cèdres & Chemin de Boudou</h3>
                  <p className="text-sm text-night/70">Quartiers résidentiels avec grandes propriétés. Pins, chênes et cèdres imposants. Haies de lauriers et de cyprès de Leyland très répandues. Forte demande en taille de haies.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Route de Muret & Portet-Commerce</h3>
                  <p className="text-sm text-night/70">Axe principal bordé de platanes nécessitant un élagage régulier. Zone commerciale avec espaces verts d'entreprise. Nous intervenons aussi pour les professionnels et copropriétés.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersPortet.map((quartier) => (
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
            <h2 className="section-heading text-center mb-8">Élagage à Portet-sur-Garonne : spécificités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Portet-sur-Garonne occupe une position géographique singulière : elle est implantée au <strong>confluent de la Garonne et de l'Ariège</strong>, ce qui influence fortement la végétation locale. Les sols alluviaux riches en nutriments favorisent une croissance vigoureuse des arbres, mais l'exposition aux crues fragilise les systèmes racinaires des espèces riveraines.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Les <strong>peupliers et saules</strong> qui bordent la Garonne nécessitent un suivi attentif : leurs branches cassantes et leur bois tendre les rendent vulnérables au <strong>vent d'Autan</strong>, phénomène météorologique récurrent en Haute-Garonne. Les <strong>platanes</strong> alignés le long de la route de Muret et des axes communaux demandent un élagage de réduction régulier pour dégager la voirie et les lignes électriques.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Dans les <strong>quartiers résidentiels</strong> (Les Cèdres, Chemin de Boudou), les grands jardins abritent des <strong>pins maritimes, chênes verts, cèdres</strong> et de nombreux <strong>arbres fruitiers</strong>. Les haies de lauriers et de cyprès de Leyland y sont omniprésentes et requièrent deux tailles annuelles minimum pour conserver un aspect soigné.
              </p>
              <p className="text-lg text-night/80">
                Besoin d'un élagueur dans une commune voisine ? Nous intervenons également à <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Muret</Link>, <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Cugnaux</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link> et dans toute la métropole.
              </p>
            </div>
          </div>
        </section>

        {/* Section Crédit d'impôt */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt Jardinage 50% à Portet-sur-Garonne</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert est agréé <strong>Services à la Personne</strong>. Bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de jardin à Portet-sur-Garonne. Nous vous fournissons l'attestation fiscale annuelle pour votre déclaration.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                  <h3 className="font-heading text-xl text-leaf mb-4">✅ Éligible au crédit d'impôt</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Taille de haies et arbustes</li>
                    <li>• Tonte de pelouse</li>
                    <li>• Débroussaillage</li>
                    <li>• Entretien courant du jardin</li>
                    <li>• Ramassage de feuilles</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 border border-red-200">
                  <h3 className="font-heading text-xl text-red-600 mb-4">❌ Non éligible</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Élagage d'arbres (&gt;3m hauteur)</li>
                    <li>• Abattage d'arbres</li>
                    <li>• Rognage de souches</li>
                    <li>• Travaux de création paysagère</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 text-night/70">
                <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">En savoir plus sur le crédit d'impôt jardinage</Link>
              </p>
            </div>
          </div>
        </section>

        {/* Section Zones d'intervention */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Portet-sur-Garonne</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Portet-sur-Garonne et dans toutes les communes du sud toulousain, de Muret à Toulouse.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isPortet = ville === 'PORTET-SUR-GARONNE';
                const slugMap: Record<string, string> = {
                  'MURET': 'elagage-muret',
                  'CUGNAUX': 'elagage-cugnaux',
                  'TOULOUSE': 'elagage-toulouse',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isPortet
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isPortet) {
                  return <Link key={ville} href={`/${href}`}>{content}</Link>;
                }
                return <span key={ville}>{content}</span>;
              })}
            </div>
            <p className="text-center mt-6">
              <Link href="/nos-villes" className="text-forest underline hover:text-forest/80">
                Voir toutes nos zones d'intervention en Haute-Garonne
              </Link>
            </p>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Portet-sur-Garonne (31120)</h2>
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

        {/* Section Maillage interne */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert intervient aussi dans les communes voisines de Portet-sur-Garonne</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Basés en Haute-Garonne, nous couvrons un large secteur autour de Portet-sur-Garonne et du sud de la métropole toulousaine.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagage à Muret</Link> – Sud Garonne</li>
                    <li>🌳 <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage à Cugnaux</Link> – Ouest Portet</li>
                    <li>🌳 <Link href="/elagage-roques" className="text-forest underline hover:text-forest/80">Élagage à Roques</Link> – Sud-ouest Portet</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres zones :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage à Blagnac</Link> – Nord-ouest métropole</li>
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage à Colomiers</Link> – 2ème ville 31</li>
                    <li>🌳 <Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage à Tournefeuille</Link> – Ouest Toulouse</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6">
                <Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">
                  Voir toutes nos réalisations élagage Haute-Garonne
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
                Un projet d'élagage ou d'entretien de jardin à Portet-sur-Garonne ?
              </h2>
              <p className="text-lg text-night/80 mb-4 max-w-2xl mx-auto">
                Arbovert vous accompagne de A à Z :
              </p>
              <ol className="text-left max-w-md mx-auto mb-8 space-y-2 text-night/80">
                <li><strong>1. Diagnostic gratuit</strong> : Analyse de votre arbre ou jardin à Portet</li>
                <li><strong>2. Devis détaillé</strong> : Tarification transparente sous 24-48h</li>
                <li><strong>3. Planification</strong> : Intervention selon vos disponibilités</li>
                <li><strong>4. Réalisation</strong> : Chantier propre et sécurisé</li>
                <li><strong>5. Suivi</strong> : Conseils d'entretien après travaux</li>
              </ol>
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
                <span className="flex items-center gap-2">✓ Élagueur grimpeur certifié</span>
                <span className="flex items-center gap-2">✓ Assurance RC Pro</span>
                <span className="flex items-center gap-2">✓ Évacuation déchets incluse</span>
              </div>
              <p className="mt-6 text-sm text-night/60">
                Intervention à Portet-sur-Garonne, Muret, Cugnaux, Roques, Villeneuve-Tolosane et toute la métropole toulousaine.
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
