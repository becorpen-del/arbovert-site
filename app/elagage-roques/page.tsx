import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Roques | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Roques (31120) : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage roques', 'élagage roques 31120', 'élagueur roques', 'abattage arbre roques', 'taille de haie roques', 'entretien jardin roques', 'arboriste roques', 'débroussaillage roques'],
  alternates: {
    canonical: '/elagage-roques'
  },
  openGraph: {
    title: 'Élagage à Roques | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Roques (31120) : taille douce, abattage sécurisé et entretien d\'arbres. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-roques'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Roques : taille adaptée aux bords de Garonne",
    description:
      "Roques abrite un patrimoine arboré marqué par la proximité de la Garonne : peupliers imposants, frênes centenaires et saules pleureurs en bord de fleuve, chênes et pins dans les quartiers résidentiels. Nous pratiquons l'élagage raisonné pour préserver la santé de vos arbres tout en sécurisant votre propriété face aux risques de crues.",
    points: [
      'Diagnostic phytosanitaire avant toute intervention à Roques',
      'Taille sélective adaptée aux peupliers, frênes et chênes',
      'Élagage sur corde pour les grands sujets en bord de Garonne',
      'Respect de la physiologie et du cycle végétatif de chaque essence'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres dangereux à Roques",
    description:
      "Les crues de la Garonne et le vent d'Autan fragilisent certains arbres à Roques. Un peuplier penché vers une habitation, un frêne atteint de chalarose ou un cyprès mort dans un lotissement : nous réalisons l'abattage en toute sécurité, avec démontage par tronçons lorsque l'espace est contraint.",
    points: [
      'Abattage directionnel en terrain dégagé (grands terrains)',
      'Démontage par tronçons avec rétention dans les lotissements',
      'Dessouchage mécanique ou rognage de souche possible',
      'Évacuation complète vers filière de recyclage agréée'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes (-50% crédit d\'impôt)',
    description:
      "Les lotissements récents de Roques possèdent de nombreuses haies de lauriers, photinias et troènes qui nécessitent un entretien régulier. Nous redonnons forme et densité à vos clôtures végétales en respectant les saisons de taille. Prestation éligible au crédit d'impôt 50%.",
    points: [
      'Taille au cordeau ou naturelle selon vos préférences',
      'Fréquence recommandée : 2 tailles/an (mai + septembre)',
      'Ramassage et évacuation systématiques des déchets',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 40m = 240€ -> 120€ après crédit'
  },
  {
    title: 'Entretien de jardins et débroussaillage à Roques (Services à la Personne)',
    description:
      "L'ambiance semi-rurale de Roques signifie de grands terrains, souvent en partie laissés en friche. Nous prenons en charge le débroussaillage complet, la tonte régulière et l'entretien saisonnier de votre jardin. Service particulièrement demandé pour les terrains en bordure de zone agricole et les parcelles non clôturées.",
    points: [
      'Débroussaillage de terrains envahis et friches',
      'Tonte régulière avec finition des bordures',
      'Soufflage et ramassage des feuilles (automne)',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true,
    prices: 'Forfait annuel 6 passages : 600€ après crédit'
  }
];

const quartiersRoques = [
  'Centre-village',
  'Les Music-Halles',
  'Chemin de Borde Rouge',
  'Route de Seysses',
  'Bords de Garonne',
  'Les Musiciens',
  'ZA de Labarthe'
];

const villesIntervention = ['ROQUES', 'PORTET-SUR-GARONNE', 'MURET', 'SEYSSES', 'ROQUETTES', 'VILLENEUVE-TOLOSANE', 'PINSAGUEL', 'TOULOUSE'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Roques (31120) ?",
    answer: "Les tarifs varient selon la hauteur de l'arbre, l'essence et l'accessibilité du terrain. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Ces prix incluent l'élagage, le broyage des branches et l'évacuation des déchets verts. À Roques, les grands terrains facilitent souvent l'accès, ce qui peut réduire le coût. Devis gratuit sous 24h."
  },
  {
    question: "Faut-il une autorisation pour abattre un arbre à Roques ?",
    answer: "À Roques, l'abattage peut nécessiter une déclaration préalable selon le Plan Local d'Urbanisme. Les arbres situés en zone inondable (bords de Garonne, classée PPRI) sont soumis à des contraintes spécifiques. Les arbres remarquables ou classés requièrent une autorisation de la mairie. Arbovert vous accompagne dans l'ensemble des démarches administratives avant toute intervention."
  },
  {
    question: "Intervenez-vous en urgence à Roques après une crue de la Garonne ?",
    answer: "Oui, nous proposons un service d'intervention rapide sous 24h. À Roques, le risque inondation lié à la Garonne peut fragiliser les arbres riverains : racines déchaussées, troncs penchés, branches cassées. Après une crue ou un épisode de vent d'Autan, contactez-nous au 06 48 76 85 15 pour sécuriser rapidement votre propriété."
  },
  {
    question: "Quels arbres trouve-t-on fréquemment à Roques ?",
    answer: "Roques possède une végétation variée liée à sa position entre Garonne et coteaux. En bord de fleuve : peupliers noirs, frênes communs, saules blancs et aulnes. Dans les quartiers anciens du centre-village : chênes pédonculés, pins parasols et cyprès de Provence. Dans les lotissements récents : haies de lauriers, photinias, thuyas, et jeunes arbres d'ornement (érables, tilleuls). On trouve aussi de nombreux fruitiers (pruniers, cerisiers, figuiers) dans les jardins."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt pour l'entretien de mon jardin à Roques ?",
    answer: "Oui, grâce à notre agrément Services à la Personne. Le crédit d'impôt de 50% s'applique à : taille de haies, tonte de pelouse, débroussaillage, ramassage de feuilles, entretien courant. Il ne s'applique pas à : élagage d'arbres en hauteur, abattage, dessouchage. Conditions : résidence principale ou secondaire à Roques, vous êtes particulier employeur. Déclaration case 7DB."
  },
  {
    question: "Dans quels quartiers de Roques intervenez-vous ?",
    answer: "Nous couvrons l'intégralité de la commune de Roques et ses 5 300 habitants. Centre-village (maisons anciennes, arbres matures), Les Music-Halles et Les Musiciens (lotissements récents, haies jeunes), Chemin de Borde Rouge (grands terrains semi-ruraux), Route de Seysses, Bords de Garonne (peupliers, frênes), ZA de Labarthe (espaces verts d'entreprise). Aucun surcoût lié au quartier."
  },
  {
    question: "Le débroussaillage est-il obligatoire à Roques ?",
    answer: "À Roques, le débroussaillage est fortement recommandé pour les terrains en friche et les parcelles en bordure de zone agricole. Bien que la commune ne soit pas classée en zone à risque incendie, l'arrêté préfectoral de la Haute-Garonne impose un entretien régulier des terrains pour éviter la prolifération de nuisibles et le risque sanitaire. Le débroussaillage est éligible au crédit d'impôt 50%."
  },
  {
    question: "Que faites-vous des déchets verts après un élagage à Roques ?",
    answer: "Nous broyons les branches directement sur votre terrain lorsque c'est possible, produisant un paillage naturel réutilisable pour vos massifs et pieds d'arbres. Les bois volumineux et troncs sont évacués vers des filières de recyclage agréées. Le brûlage des déchets verts est interdit à Roques comme dans toute la Haute-Garonne. Nous laissons systématiquement un chantier propre."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Roques",
      "description": "Élagueur professionnel à Roques (31120). Élagage, abattage, taille de haies, entretien jardins et débroussaillage. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-roques",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Roques",
        "postalCode": "31120",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5002,
        "longitude": 1.3708
      },
      "areaServed": [
        { "@type": "City", "name": "Roques", "postalCode": "31120" },
        { "@type": "City", "name": "Portet-sur-Garonne" },
        { "@type": "City", "name": "Muret" },
        { "@type": "City", "name": "Seysses" },
        { "@type": "City", "name": "Roquettes" },
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
      "serviceType": ["Élagage d'arbres", "Abattage", "Taille de haies", "Entretien jardins", "Débroussaillage"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Nos villes", "item": "https://www.arbovert-31.fr/nos-villes" },
        { "@type": "ListItem", "position": 3, "name": "Élagage Roques", "item": "https://www.arbovert-31.fr/elagage-roques" }
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

export default function ElagageRoques() {
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
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À ROQUES - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Centre-village, Bords de Garonne)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Spécialistes arbres en bord de Garonne</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Roques : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Roques</strong> (31120) ? Arbovert intervient dans tout le village et ses alentours : <strong>Centre-village, Les Musiciens, Bords de Garonne, Route de Seysses</strong>. Notre équipe certifiée pratique l'élagage raisonné, l'abattage sécurisé et le débroussaillage de grands terrains.
                </p>
                <p className="text-lg text-night/80 leading-relaxed mb-6">
                  <strong>Bonus</strong> : bénéficiez de <strong>-50% de crédit d'impôt</strong> sur la taille de haies, le débroussaillage et l'entretien de jardin grâce à notre agrément Services à la Personne.
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
                  alt="Élagueur professionnel intervention arbre Roques 31120"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Probleme */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur professionnel à Roques ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Un peuplier penché vers votre maison après la dernière crue ?</strong> Vos haies de lotissement sont devenues incontrôlables ? Votre terrain est envahi par les ronces ?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbre fragilisé par les crues</p>
                    <p className="text-sm text-night/70">Peupliers et frênes déstabilisés en bord de Garonne, racines déchaussées</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies de lotissement envahissantes</p>
                    <p className="text-sm text-night/70">Lauriers et photinias débordant sur la voie publique ou chez le voisin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Terrain en friche</p>
                    <p className="text-sm text-night/70">Grands terrains semi-ruraux envahis par les ronces et herbes hautes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Cyprès ou pin mort</p>
                    <p className="text-sm text-night/70">Arbre sec menaçant de chuter dans les quartiers anciens du centre-village</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-night/80 mb-4">
                <strong>Sans élagueur certifié</strong>, vous risquez : chute de branches sur votre habitation, dommages matériels en cas de crue, amendes pour non-entretien de terrain, et perte de vos arbres par des tailles inadaptées.
              </p>
              <p className="text-lg text-night/80">
                <strong>Arbovert sécurise vos arbres et vos terrains</strong> avec du matériel professionnel et une assurance RC Pro couvrant toutes nos interventions.
              </p>
            </div>
          </div>
        </section>

        {/* Section Equipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert : votre expert élagage à Roques et dans le sud toulousain</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Depuis 2020, Arbovert accompagne particuliers et professionnels de Haute-Garonne pour tous leurs travaux d'élagage et d'entretien d'espaces verts. Nous intervenons régulièrement à <strong>Roques et sur l'axe Muret-Portet-sur-Garonne</strong>, où nous connaissons parfaitement les essences locales et les contraintes liées à la Garonne.
              </p>
              <h3 className="font-heading text-xl text-forest mb-4">Notre équipe :</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Ancien militaire reconverti, il garantit des interventions sécurisées et rigoureuses. Spécialiste de l'abattage contrôlé et du travail en zone à risque inondation.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur professionnel</strong> avec 8 ans d'expérience. Spécialiste de la taille douce et de l'élagage raisonné sur grands arbres. Intervient régulièrement sur les peupliers et frênes des bords de Garonne.</p>
                </div>
              </div>
              <h3 className="font-heading text-xl text-forest mb-4">Certifications et engagements :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-night/80">
                  <li>✅ Certification Services à la Personne (SAP)</li>
                  <li>✅ Assurance décennale et RC Pro</li>
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
            <h2 className="section-heading text-center mb-4">4 services d'élagage et entretien à Roques avec crédit d'impôt 50%</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Arbovert propose une gamme complète adaptée aux arbres, haies et grands terrains de Roques. Intervention toute l'année sur toutes les essences.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Roques`}
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
            <h2 className="section-heading text-center mb-8">Intervention dans tout Roques et ses environs</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Roques (31120) est un petit village résidentiel de <strong>5 300 habitants</strong> situé entre Muret et Portet-sur-Garonne, à 20 minutes au sud de Toulouse. Son cadre semi-rural, ses grands terrains et sa position en bord de Garonne en font une commune avec des besoins spécifiques en élagage et débroussaillage.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-village & Quartiers anciens</h3>
                  <p className="text-sm text-night/70">Noyau historique de Roques avec maisons traditionnelles et arbres matures (chênes, pins parasols, cyprès). Accès parfois étroits nécessitant le travail sur corde.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Les Musiciens & Music-Halles</h3>
                  <p className="text-sm text-night/70">Lotissements récents avec jeunes arbres d'ornement et haies de clôture (lauriers, photinias). Forte demande en taille de haies et entretien régulier.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Bords de Garonne</h3>
                  <p className="text-sm text-night/70">Zone ripisylve avec peupliers, frênes et saules. Arbres soumis aux crues, nécessitant une surveillance et un élagage adapté au risque inondation.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Route de Seysses & Borde Rouge</h3>
                  <p className="text-sm text-night/70">Secteur semi-rural avec grands terrains. Besoin fréquent de débroussaillage, nettoyage de parcelles et entretien de haies champêtres.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersRoques.map((quartier) => (
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

        {/* Section Specificites locales */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Élagage à Roques : spécificités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Roques se distingue par son <strong>cadre semi-rural entre Garonne et coteaux</strong>. Village résidentiel en plein essor, il mêle lotissements récents avec haies jeunes et quartiers anciens aux arbres centenaires. Cette dualité demande des compétences variées en arboriculture.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Les <strong>bords de Garonne</strong> constituent l'enjeu majeur : la ripisylve (peupliers noirs, frênes communs, saules blancs) est régulièrement soumise aux crues hivernales et printanières. Les arbres riverains peuvent voir leurs racines déchaussées, leurs troncs fragilisés par l'eau stagnante. Un suivi régulier par un élagueur professionnel permet d'anticiper les risques de chute.
              </p>
              <p className="text-lg text-night/80 mb-4">
                L'ambiance semi-rurale de Roques génère aussi une <strong>forte demande en débroussaillage</strong>. Les grands terrains en bordure de zone agricole, les parcelles non clôturées et les jardins prolongés par des espaces naturels nécessitent un entretien régulier pour rester praticables et éviter la prolifération de ronces et de végétation invasive.
              </p>
              <p className="text-lg text-night/80">
                Nous intervenons aussi dans les communes voisines : <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Muret</Link>, <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Cugnaux</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link> et Portet-sur-Garonne.
              </p>
            </div>
          </div>
        </section>

        {/* Section Credit d'impot */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt Jardinage 50% à Roques</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert est agréé <strong>Services à la Personne</strong>. Bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de votre jardin à Roques. Un avantage particulièrement intéressant pour les grands terrains de la commune.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                  <h3 className="font-heading text-xl text-leaf mb-4">✅ Éligible au crédit d'impôt</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Taille de haies et arbustes</li>
                    <li>• Tonte de pelouse</li>
                    <li>• Débroussaillage de terrain</li>
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
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Roques</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Roques et dans toutes les communes de l'axe Muret-Portet-Toulouse.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isRoques = ville === 'ROQUES';
                const slugMap: Record<string, string> = {
                  'MURET': 'elagage-muret',
                  'TOULOUSE': 'elagage-toulouse',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isRoques
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isRoques) {
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
            <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Roques (31120)</h2>
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
            <h2 className="section-heading text-center mb-8">Arbovert intervient aussi dans les communes voisines de Roques</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Basés en Haute-Garonne, nous couvrons un large secteur autour de Roques et du sud-ouest toulousain.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagage à Muret</Link> – Commune voisine sud</li>
                    <li>🌳 <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage à Cugnaux</Link> – Nord-ouest</li>
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                    <li>🌳 <Link href="/elagage-portet-sur-garonne" className="text-forest underline hover:text-forest/80">Élagage à Portet-sur-Garonne</Link> – Est</li>
                    <li>🌳 <Link href="/elagage-seysses" className="text-forest underline hover:text-forest/80">Élagage à Seysses</Link> – Ouest</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres zones :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage à Colomiers</Link> – 2ème ville du 31</li>
                    <li>🌳 <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage à Blagnac</Link> – Ouest métropole</li>
                    <li>🌳 <Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage à Tournefeuille</Link> – Nord-ouest métropole</li>
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
                Un projet d'élagage ou d'entretien de jardin à Roques ?
              </h2>
              <p className="text-lg text-night/80 mb-4 max-w-2xl mx-auto">
                Arbovert vous accompagne de A à Z :
              </p>
              <ol className="text-left max-w-md mx-auto mb-8 space-y-2 text-night/80">
                <li><strong>1. Diagnostic gratuit</strong> : Visite de votre terrain à Roques</li>
                <li><strong>2. Devis détaillé</strong> : Tarification transparente sous 24-48h</li>
                <li><strong>3. Planification</strong> : Intervention selon vos disponibilités</li>
                <li><strong>4. Réalisation</strong> : Chantier propre et sécurisé</li>
                <li><strong>5. Suivi</strong> : Conseils d'entretien personnalisés</li>
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
                Intervention à Roques, Portet-sur-Garonne, Muret, Seysses, Roquettes et toute la métropole toulousaine.
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
