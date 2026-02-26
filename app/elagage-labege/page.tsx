import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Labège | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Labège : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage labège', 'élagage labège 31670', 'élagueur labège', 'abattage arbre labège', 'taille de haie labège', 'entretien jardin labège', 'arboriste labège', 'élagage innopole'],
  alternates: {
    canonical: '/elagage-labege'
  },
  openGraph: {
    title: 'Élagage à Labège | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Labège : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-labege'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Labège : taille douce et sécurisée",
    description:
      "L'élagage consiste à tailler les branches pour réduire la prise au vent, dégager bâtiments et toitures, ou redonner une forme harmonieuse à vos arbres. À Labège, les résidences autour d'Innopole et du secteur Diagora possèdent de nombreux arbres matures nécessitant un entretien régulier. Nous pratiquons l'élagage raisonné : coupe max 30% du houppier, biseau au-dessus du bourrelet cicatriciel.",
    points: [
      'Diagnostic sanitaire sur votre terrain à Labège',
      'Techniques de taille sélective adaptées aux chênes, platanes et érables',
      'Élagage sur corde ou nacelle selon l\'accessibilité',
      'Respect de la physiologie de chaque essence'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres dangereux à Labège",
    description:
      "Quand un arbre devient dangereux, mort ou malade, nous réalisons un abattage contrôlé. À Labège, la proximité des habitations dans les quartiers résidentiels du Château et de la Roseraie impose souvent un démontage par tronçons avec rétention pour protéger les propriétés.",
    points: [
      'Abattage directionnel (espace dégagé)',
      'Démontage par tronçons avec rétention (espace contraint)',
      'Dessouchage chimique ou mécanique possible',
      'Évacuation vers déchèterie agréée'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes (-50% crédit d\'impôt)',
    description:
      "Lauriers, thuyas et cyprès sont omniprésents dans les lotissements de Labège. Nous redonnons une forme nette et uniforme à vos haies. Prestation éligible au crédit d'impôt 50% via notre agrément Services à la Personne.",
    points: [
      'Taille au cordeau ou naturelle selon vos préférences',
      'Fréquence recommandée : 2 fois/an (mai + septembre)',
      'Ramassage et évacuation des déchets inclus',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 40m = 240€ → 120€ après crédit'
  },
  {
    title: 'Entretien complet de jardins à Labège (Services à la Personne)',
    description:
      "Débroussaillage, nettoyage saisonnier, tonte et entretien pelouse : nous prenons en charge l'entretien complet de votre jardin à Labège. Les propriétés du quartier résidentiel et les jardins bordant le Canal du Midi profitent pleinement de notre forfait annuel avec crédit d'impôt.",
    points: [
      'Débroussaillage terrains envahis',
      'Soufflage et ramassage feuilles (platanes, chênes)',
      'Tonte régulière et scarification',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true,
    prices: 'Forfait annuel 6 passages : 600€ après crédit'
  }
];

const quartiersLabege = [
  'Centre-ville de Labège',
  'Innopole / Diagora',
  'Le Château',
  'La Roseraie',
  'Les Music-Halls',
  'Route de Baziège',
  'Chemin de la Borde Blanque',
  'Rue de la Boétie'
];

const villesIntervention = ['LABÈGE', 'RAMONVILLE', 'CASTANET-TOLOSAN', 'TOULOUSE', 'BALMA', 'AUZEVILLE-TOLOSANE', 'ESCALQUENS', 'FLOURENS'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Labège ?",
    answer: "Les tarifs dépendent de la hauteur, de l'essence et de l'accessibilité. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Ces tarifs incluent élagage, broyage branches, évacuation déchets verts et nettoyage chantier. Devis gratuit personnalisé sous 24h après visite de votre arbre à Labège."
  },
  {
    question: "Intervenez-vous dans tout Labège ?",
    answer: "Oui, Arbovert couvre l'intégralité de Labège et ses 4 200 habitants. Quartiers : Centre-ville, Innopole/Diagora (zone d'activités), Le Château, La Roseraie, Les Music-Halls, route de Baziège. Nous intervenons aussi pour les entreprises du parc technologique. Pas de surcoût lié à la commune."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt à Labège ?",
    answer: "Oui pour certains services grâce à notre agrément Services à la Personne. Crédit d'impôt 50% pour : taille de haies et arbustes, entretien de jardin (débroussaillage, tonte, feuilles). Non éligible : élagage d'arbres en hauteur, abattage, dessouchage. Conditions : résidence principale ou secondaire à Labège, particulier employeur, déclaration case 7DB."
  },
  {
    question: "Quelle est la meilleure période pour élaguer à Labège ?",
    answer: "Feuillus (chênes, platanes, érables) : novembre à février (repos végétatif, cicatrisation optimale). Conifères (pins, cyprès) : septembre-novembre ou mars-avril. Fruitiers : janvier-mars hors gel. Période à éviter : 16 mars au 31 août (nidification des oiseaux, protégée par la LPO). Conseil : demandez votre devis dès février pour une intervention au début du printemps."
  },
  {
    question: "Labège est proche du Canal du Midi, avez-vous des précautions spécifiques ?",
    answer: "Oui, les abords du Canal du Midi sont classés au patrimoine mondial UNESCO. Les platanes du Canal ont été largement replantés après le chancre coloré. Nous respectons les arrêtés préfectoraux concernant l'élagage à proximité du Canal : pas de transport de bois de platane contaminé, désinfection systématique du matériel. Pour les propriétés longeant le Canal à Labège, nous adaptons nos techniques."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions. Guillaume et Clément sont certifiés CAPA Travaux Forestiers. Nous respectons strictement les normes de sécurité (EPI, balisage chantier, protocole de rétention pour les abattages en zone contrainte)."
  },
  {
    question: "Intervenez-vous en urgence à Labège ?",
    answer: "Oui, nous proposons un service d'intervention rapide pour les situations d'urgence à Labège : arbre menaçant de tomber, branche cassée sur un toit ou un véhicule, arbre fragilisé par le vent d'Autan. Contactez-nous au 06 48 76 85 15 pour une évaluation rapide."
  },
  {
    question: "Que faites-vous des déchets verts après l'élagage à Labège ?",
    answer: "Nous broyons les branches sur place lorsque c'est possible, produisant un paillage réutilisable pour vos massifs et pieds d'arbres. Les bois volumineux sont évacués vers des filières de recyclage agréées. Le brûlage est interdit. Nous laissons un chantier propre après chaque intervention à Labège."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Labège",
      "description": "Élagueur professionnel à Labège (31670). Élagage, abattage, taille de haies, entretien jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-labege",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Labège",
        "postalCode": "31670",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5339,
        "longitude": 1.5330
      },
      "areaServed": [
        { "@type": "City", "name": "Labège", "postalCode": "31670" },
        { "@type": "City", "name": "Ramonville-Saint-Agne" },
        { "@type": "City", "name": "Castanet-Tolosan" },
        { "@type": "City", "name": "Auzeville-Tolosane" },
        { "@type": "City", "name": "Escalquens" }
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
        { "@type": "ListItem", "position": 3, "name": "Élagage Labège", "item": "https://www.arbovert-31.fr/elagage-labege" }
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

export default function ElagageLabege() {
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
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À LABÈGE - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Innopole, Château, Roseraie)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Équipe certifiée CAPA Travaux Forestiers</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Labège : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Labège</strong> ? Arbovert intervient dans tous les quartiers : <strong>Centre-ville, Innopole, Le Château, La Roseraie</strong>. Notre équipe certifiée pratique l'élagage raisonné, l'abattage sécurisé et l'entretien complet de jardins.
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
                  alt="Élagueur professionnel intervention arbre Labège 31670"
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
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur professionnel à Labège ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Des branches menacent votre toiture à Labège ?</strong> Vos haies débordent sur le trottoir ? Votre jardin est devenu incontrôlable ?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbre dangereux</p>
                    <p className="text-sm text-night/70">Branches mortes menaçant les propriétés du Château ou de la Roseraie</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies non taillées</p>
                    <p className="text-sm text-night/70">Lauriers et thuyas envahissants dans les lotissements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Jardin négligé</p>
                    <p className="text-sm text-night/70">Terrain envahi après la saison estivale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Platane malade</p>
                    <p className="text-sm text-night/70">Signes de chancre coloré sur les platanes proches du Canal du Midi</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-night/80 mb-4">
                <strong>Sans élagueur certifié</strong>, vous risquez : dommages matériels, conflits de voisinage, amendes pour non-respect du PLU, et perte d'arbres précieux.
              </p>
              <p className="text-lg text-night/80">
                <strong>Arbovert sécurise vos arbres</strong> avec du matériel professionnel et une assurance RC Pro.
              </p>
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert : votre expert en élagage à Labège et ses environs</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Depuis 2020, Arbovert accompagne particuliers et professionnels de Haute-Garonne pour leurs travaux d'élagage. Nous intervenons régulièrement à <strong>Labège et dans le secteur sud-est de Toulouse</strong>.
              </p>
              <h3 className="font-heading text-xl text-forest mb-4">Notre équipe :</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Ancien militaire reconverti, il garantit des interventions sécurisées et méthodiques.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur professionnel</strong> avec 8 ans d'expérience. Spécialiste taille douce et élagage en hauteur.</p>
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
            <h2 className="section-heading text-center mb-4">4 services d'élagage et entretien à Labège avec crédit d'impôt 50%</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Arbovert propose une gamme complète adaptée aux arbres et jardins de Labège. Intervention toute l'année sur tous types d'essences.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Labège`}
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
            <h2 className="section-heading text-center mb-8">Intervention dans tout Labège et ses environs</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Labège (31670) est une commune de <strong>4 200 habitants</strong> située à 15 minutes au sud-est de Toulouse. Connue pour son pôle technologique <strong>Innopole</strong> et le centre de congrès <strong>Diagora</strong>, Labège possède aussi un cadre de vie résidentiel verdoyant avec de nombreuses propriétés arborées.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-ville & Le Château</h3>
                  <p className="text-sm text-night/70">Cœur historique avec arbres anciens, maisons traditionnelles. Accès parfois contraints nécessitant le travail sur corde.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Innopole / Diagora</h3>
                  <p className="text-sm text-night/70">Zone d'activités avec espaces verts d'entreprise. Nous intervenons aussi pour les copropriétés et les entreprises du parc.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">La Roseraie & Les Music-Halls</h3>
                  <p className="text-sm text-night/70">Quartiers pavillonnaires récents. Jardins arborés avec haies de lauriers, thuyas. Forte demande en taille de haies.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Abords du Canal du Midi</h3>
                  <p className="text-sm text-night/70">Zone protégée UNESCO. Platanes nécessitant un protocole sanitaire strict (chancre coloré). Désinfection systématique du matériel.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersLabege.map((quartier) => (
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
            <h2 className="section-heading text-center mb-8">Élagage à Labège : spécificités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Labège se distingue par sa <strong>double identité</strong> : zone technologique (Innopole, 15 000 emplois) et village résidentiel aux propriétés verdoyantes. Cette mixité génère des besoins variés en élagage.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Le <strong>climat toulousain</strong> (hivers doux, étés chauds et secs, vents d'Autan) favorise une croissance rapide des arbres. Les platanes, chênes verts et pins maritimes sont les essences dominantes. La sécheresse estivale peut fragiliser les arbres et provoquer des chutes de branches.
              </p>
              <p className="text-lg text-night/80 mb-4">
                <strong>Attention particulière</strong> : la proximité du Canal du Midi impose des précautions sanitaires. Le chancre coloré du platane, maladie fongique dévastatrice, se transmet par les outils de coupe. Arbovert désinfecte systématiquement son matériel entre chaque arbre.
              </p>
              <p className="text-lg text-night/80">
                Besoin d'un élagueur dans une commune voisine ? Nous intervenons également à <Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Ramonville</Link>, <Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Balma</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link> et dans toute la métropole.
              </p>
            </div>
          </div>
        </section>

        {/* Section Crédit d'impôt */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt Jardinage 50% à Labège</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert est agréé <strong>Services à la Personne</strong>. Bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de jardin à Labège.
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
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Labège</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Labège et dans toutes les communes du sud-est toulousain.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isLabege = ville === 'LABÈGE';
                const slugMap: Record<string, string> = {
                  'LABÈGE': 'elagage-labege',
                  'RAMONVILLE': 'elagage-ramonville',
                  'TOULOUSE': 'elagage-toulouse',
                  'BALMA': 'elagage-balma',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isLabege
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isLabege) {
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
            <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Labège (31670)</h2>
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
            <h2 className="section-heading text-center mb-8">Arbovert intervient aussi dans les communes voisines de Labège</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Basés en Haute-Garonne, nous couvrons un large secteur autour de Labège et du sud-est toulousain.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Élagage à Ramonville</Link> – Commune voisine</li>
                    <li>🌳 <Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Élagueur à Balma</Link> – Est toulousain</li>
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                    <li>🌳 <Link href="/elagage-castanet-tolosan" className="text-forest underline hover:text-forest/80">Élagage à Castanet-Tolosan</Link> – Sud-est</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres zones :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagueur Muret</Link> – Sud Haute-Garonne</li>
                    <li>🌳 <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage Blagnac</Link> – Ouest métropole</li>
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage Colomiers</Link> – 2ème ville 31</li>
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
                Un projet d'élagage ou d'entretien de jardin à Labège ?
              </h2>
              <p className="text-lg text-night/80 mb-4 max-w-2xl mx-auto">
                Arbovert vous accompagne de A à Z :
              </p>
              <ol className="text-left max-w-md mx-auto mb-8 space-y-2 text-night/80">
                <li><strong>1. Diagnostic gratuit</strong> : Analyse de votre arbre ou jardin</li>
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
                Intervention à Labège, Ramonville, Castanet-Tolosan, Auzeville et toute la métropole toulousaine.
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
