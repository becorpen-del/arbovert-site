import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Ramonville | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Ramonville-Saint-Agne : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage ramonville', 'élagage ramonville-saint-agne', 'élagueur ramonville', 'abattage arbre ramonville', 'taille de haie ramonville', 'entretien jardin ramonville', 'élagage 31520'],
  alternates: {
    canonical: '/elagage-ramonville'
  },
  openGraph: {
    title: 'Élagage à Ramonville | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Ramonville-Saint-Agne : taille douce, abattage sécurisé et entretien d\'arbres. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-ramonville'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Ramonville : taille raisonnée",
    description:
      "Ramonville-Saint-Agne est une commune résidentielle bordée par le Canal du Midi. Ses nombreux platanes, chênes et pins nécessitent un entretien régulier. Nous pratiquons l'élagage raisonné : coupe limitée à 30% du houppier, respect du bourrelet cicatriciel, pas de taille drastique.",
    points: [
      'Diagnostic sanitaire sur votre terrain à Ramonville',
      'Taille sélective adaptée aux platanes, chênes, pins et cèdres',
      'Élagage sur corde ou nacelle selon le contexte',
      'Protocole sanitaire renforcé à proximité du Canal du Midi'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres à Ramonville",
    description:
      "Quand un arbre devient dangereux ou malade, nous réalisons un abattage contrôlé. À Ramonville, les quartiers denses comme le centre-ville et le secteur de la Ferme imposent un démontage par tronçons pour protéger les habitations et les clôtures voisines.",
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
      "Les haies de lauriers, photinias et troènes sont omniprésentes à Ramonville, notamment dans les résidences du Souleilla et le long de l'avenue Tolosane. Nous assurons une taille nette, au cordeau ou naturelle. Éligible au crédit d'impôt 50%.",
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
    title: 'Entretien complet de jardins à Ramonville (Services à la Personne)',
    description:
      "Tonte, débroussaillage, ramassage de feuilles, nettoyage saisonnier : nous prenons en charge l'entretien complet de votre jardin à Ramonville. Les propriétés boisées du quartier du Lac et de la Ferme bénéficient pleinement de nos forfaits annuels avec crédit d'impôt.",
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

const quartiersRamonville = [
  'Centre-ville',
  'Le Souleilla',
  'La Ferme',
  'Le Lac',
  'Avenue Tolosane',
  'Quartier du Métro',
  'Route de Labège',
  'Canal du Midi'
];

const villesIntervention = ['RAMONVILLE', 'LABÈGE', 'CASTANET-TOLOSAN', 'TOULOUSE', 'AUZEVILLE-TOLOSANE', 'BALMA', 'SAINT-ORENS', 'PECHABOU'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Ramonville ?",
    answer: "Les tarifs dépendent de la hauteur de l'arbre, de l'essence et de l'accessibilité. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Tarifs incluant élagage, broyage et évacuation. Devis gratuit personnalisé sous 24h après visite à Ramonville."
  },
  {
    question: "Intervenez-vous dans tous les quartiers de Ramonville ?",
    answer: "Oui, Arbovert couvre l'intégralité de Ramonville-Saint-Agne et ses 14 000 habitants. Centre-ville, Le Souleilla, La Ferme, Le Lac, Avenue Tolosane, quartier du Métro, abords du Canal du Midi. Nous intervenons aussi pour les copropriétés et les résidences. Pas de surcoût lié à la commune."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt à Ramonville ?",
    answer: "Oui pour certains services grâce à notre agrément Services à la Personne. Crédit d'impôt 50% pour : taille de haies, tonte, débroussaillage, entretien courant. Non éligible : élagage en hauteur, abattage, dessouchage. Conditions : résidence à Ramonville, particulier employeur, déclaration case 7DB."
  },
  {
    question: "Ramonville est le long du Canal du Midi, avez-vous des précautions spécifiques ?",
    answer: "Oui. Le Canal du Midi est classé UNESCO. Les platanes du Canal sont protégés et font l'objet d'un plan de replantation suite au chancre coloré. Arbovert respecte les protocoles sanitaires stricts : désinfection de tous les outils entre chaque arbre, pas de transport de bois potentiellement contaminé, respect des arrêtés préfectoraux."
  },
  {
    question: "Quelle est la meilleure période pour élaguer à Ramonville ?",
    answer: "Feuillus (chênes, platanes, érables) : novembre à février pendant le repos végétatif. Conifères (pins, cyprès) : septembre-novembre ou mars-avril. Fruitiers : janvier-mars hors gel. Évitez la période du 16 mars au 31 août (protection de la nidification). Le climat de Ramonville, doux et ensoleillé, permet des interventions confortables de septembre à avril."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage à Ramonville ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions. Guillaume et Clément sont certifiés CAPA Travaux Forestiers. Nous respectons toutes les normes de sécurité : EPI complet, balisage chantier, rétention pour les abattages en zone contrainte."
  },
  {
    question: "Intervenez-vous en urgence à Ramonville ?",
    answer: "Oui, nous proposons un service d'intervention rapide pour les situations d'urgence à Ramonville : arbre menaçant après une tempête ou le vent d'Autan, branche cassée sur un toit, danger immédiat. Contactez-nous au 06 48 76 85 15 pour une évaluation rapide de la situation."
  },
  {
    question: "Que faites-vous des déchets verts après un élagage à Ramonville ?",
    answer: "Nous broyons les branches sur place pour produire un paillage naturel réutilisable dans votre jardin. Les bois plus volumineux et les troncs sont évacués vers des filières de recyclage. Le brûlage des déchets verts est interdit à Ramonville. Nous laissons toujours un chantier propre et dégagé."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Ramonville",
      "description": "Élagueur professionnel à Ramonville-Saint-Agne (31520). Élagage, abattage, taille de haies, entretien jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-ramonville",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ramonville-Saint-Agne",
        "postalCode": "31520",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5497,
        "longitude": 1.4757
      },
      "areaServed": [
        { "@type": "City", "name": "Ramonville-Saint-Agne", "postalCode": "31520" },
        { "@type": "City", "name": "Labège" },
        { "@type": "City", "name": "Castanet-Tolosan" },
        { "@type": "City", "name": "Auzeville-Tolosane" },
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
        { "@type": "ListItem", "position": 3, "name": "Élagage Ramonville", "item": "https://www.arbovert-31.fr/elagage-ramonville" }
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

export default function ElagageRamonville() {
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
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À RAMONVILLE - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Souleilla, Lac, Ferme)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Protocole Canal du Midi respecté</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Ramonville : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Ramonville-Saint-Agne</strong> ? Arbovert intervient dans tous les quartiers : <strong>Centre-ville, Souleilla, La Ferme, Le Lac</strong>. Nos élagueurs certifiés pratiquent la taille douce, l'abattage sécurisé et l'entretien complet de jardins.
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
                  alt="Élagueur professionnel intervention arbre Ramonville 31520"
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
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur à Ramonville ?</h2>
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
                    <p className="font-medium text-forest">Platane malade</p>
                    <p className="text-sm text-night/70">Risque de chancre coloré à proximité du Canal du Midi</p>
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
            <h2 className="section-heading text-center mb-8">Votre expert élagage à Ramonville et ses alentours</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert accompagne particuliers et professionnels de Haute-Garonne depuis 2020. Nous intervenons régulièrement à <strong>Ramonville et dans tout le secteur sud de Toulouse</strong>.
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
            <h2 className="section-heading text-center mb-4">Nos services d'élagage et entretien à Ramonville</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Gamme complète adaptée aux arbres et jardins de Ramonville. Intervention toute l'année sur toutes les essences.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Ramonville`}
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
            <h2 className="section-heading text-center mb-8">Intervention dans tout Ramonville-Saint-Agne</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Ramonville-Saint-Agne (31520) compte <strong>14 000 habitants</strong> et se situe aux portes sud de Toulouse, le long du <strong>Canal du Midi</strong>. Desservie par la ligne B du métro (station Ramonville), c'est une commune résidentielle prisée pour son cadre verdoyant.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-ville & Avenue Tolosane</h3>
                  <p className="text-sm text-night/70">Cœur animé de Ramonville avec commerces et résidences. Arbres d'alignement, platanes, érables. Accès parfois contraints en centre-ville.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Le Souleilla</h3>
                  <p className="text-sm text-night/70">Grand quartier résidentiel au nord. Nombreuses maisons individuelles avec jardins arborés. Forte demande en taille de haies et entretien.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Le Lac & La Ferme</h3>
                  <p className="text-sm text-night/70">Secteurs résidentiels verdoyants avec propriétés boisées. Chênes, pins et cèdres imposants nécessitant un élagage régulier.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Bords du Canal du Midi</h3>
                  <p className="text-sm text-night/70">Le Canal traverse Ramonville sur plus de 2 km. Platanes replantés, protocole sanitaire strict contre le chancre coloré.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersRamonville.map((quartier) => (
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
            <h2 className="section-heading text-center mb-8">Élagage à Ramonville : particularités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Ramonville bénéficie d'un cadre naturel exceptionnel : le <strong>Canal du Midi</strong> et le <strong>parc technologique du Canal</strong> en font une commune verte par excellence. Ce patrimoine arboré demande un entretien adapté.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Le <strong>climat sud-toulousain</strong> (été chaud et sec, hiver doux) favorise une croissance rapide des végétaux. Les essences dominantes sont les platanes, chênes verts, pins maritimes, cèdres et tilleuls. La sécheresse estivale peut fragiliser les arbres matures.
              </p>
              <p className="text-lg text-night/80 mb-4">
                <strong>Spécificité importante :</strong> le <strong>métro ligne B</strong> (station Ramonville) génère un flux piéton important. Les arbres à proximité des axes de circulation piétonne doivent être élagués régulièrement pour la sécurité des passants.
              </p>
              <p className="text-lg text-night/80">
                Nous intervenons aussi dans les communes voisines : <Link href="/elagage-labege" className="text-forest underline hover:text-forest/80">Labège</Link>, <Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Balma</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse sud</Link> et Castanet-Tolosan.
              </p>
            </div>
          </div>
        </section>

        {/* Section Crédit d'impôt */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt 50% – Jardinage à Ramonville</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Grâce à notre agrément <strong>Services à la Personne</strong>, bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de votre jardin à Ramonville.
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
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Ramonville</h2>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isRamonville = ville === 'RAMONVILLE';
                const slugMap: Record<string, string> = {
                  'LABÈGE': 'elagage-labege',
                  'TOULOUSE': 'elagage-toulouse',
                  'BALMA': 'elagage-balma',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isRamonville
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isRamonville) {
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
            <h2 className="section-heading text-center mb-12">Questions fréquentes – Élagage à Ramonville (31520)</h2>
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
            <h2 className="section-heading text-center mb-8">Arbovert dans les communes voisines de Ramonville</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-labege" className="text-forest underline hover:text-forest/80">Élagage à Labège</Link> – Commune voisine</li>
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                    <li>🌳 <Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Élagueur à Balma</Link> – Est toulousain</li>
                    <li>🌳 <Link href="/elagage-castanet-tolosan" className="text-forest underline hover:text-forest/80">Élagage à Castanet-Tolosan</Link> – Sud-est</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres villes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagueur Muret</Link> – Sud Haute-Garonne</li>
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage Colomiers</Link> – 2ème ville du 31</li>
                    <li>🌳 <Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage Tournefeuille</Link> – Ouest métropole</li>
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
                Un projet d'élagage à Ramonville-Saint-Agne ?
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
                Intervention à Ramonville, Labège, Castanet-Tolosan, Auzeville et toute la métropole.
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
