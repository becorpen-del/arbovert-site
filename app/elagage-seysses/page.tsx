import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Seysses | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Seysses : taille douce, abattage sécurisé, taille de haies et entretien de jardins par des élagueurs grimpeurs certifiés. Crédit d\'impôt 50%. Devis gratuit sous 24h.',
  keywords: ['élagage seysses', 'élagage seysses 31600', 'élagueur seysses', 'abattage arbre seysses', 'taille de haie seysses', 'entretien jardin seysses', 'arboriste seysses', 'débroussaillage seysses'],
  alternates: {
    canonical: '/elagage-seysses'
  },
  openGraph: {
    title: 'Élagage à Seysses | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Seysses : taille douce, abattage sécurisé, taille de haies et entretien de jardins. Devis gratuit sous 24h.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-seysses'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Seysses : taille adaptée au milieu semi-rural",
    description:
      "Seysses possède de grandes propriétés arborées où chênes centenaires et pins maritimes côtoient des vergers familiaux. L'élagage raisonné que nous pratiquons respecte la physiologie de chaque arbre : taille sélective limitée à 30% du houppier, coupe au-dessus du bourrelet cicatriciel, réduction de voilure pour limiter la prise au vent d'Autan.",
    points: [
      'Diagnostic sanitaire sur votre terrain à Seysses',
      'Taille douce adaptée aux chênes, pins maritimes et cyprès',
      'Élagage sur corde dans les grandes parcelles boisées',
      'Respect de la physiologie et du port naturel de chaque essence'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres dangereux à Seysses",
    description:
      "Les terrains boisés de Seysses comptent parfois des arbres vieillissants ou affaiblis par les sécheresses estivales. Quand un arbre représente un danger pour votre habitation ou vos clôtures, nous réalisons un abattage contrôlé. La configuration des grandes parcelles seyssoises permet souvent un abattage directionnel, plus rapide et économique.",
    points: [
      'Abattage directionnel sur les grands terrains',
      'Démontage par tronçons avec rétention en zone contrainte',
      'Dessouchage mécanique ou chimique sur demande',
      'Évacuation complète vers filière de recyclage agréée'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes (-50% crédit d\'impôt)',
    description:
      "Dans les lotissements de Seysses (Les Musiciens, Route de Muret), les haies de lauriers et thuyas constituent les séparations principales entre propriétés. Nous redonnons une forme nette et compacte à vos haies, en respectant les cycles de végétation. Prestation éligible au crédit d'impôt 50%.",
    points: [
      'Taille au cordeau ou forme libre selon vos souhaits',
      'Fréquence recommandée : 2 passages/an (mai + septembre)',
      'Ramassage et évacuation systématique des déchets',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 50m = 300€ → 150€ après crédit'
  },
  {
    title: 'Entretien de jardins et débroussaillage à Seysses (SAP)',
    description:
      "Seysses, avec ses nombreuses parcelles en friche et ses grands terrains semi-ruraux, génère une forte demande en débroussaillage. Nous remettons en état les terrains envahis par la végétation et assurons l'entretien régulier de vos espaces verts. Crédit d'impôt 50% applicable.",
    points: [
      'Débroussaillage de terrains en friche et parcelles abandonnées',
      'Tonte régulière avec finition des bordures',
      'Ramassage feuilles automnal (chênes, noyers)',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true,
    prices: 'Forfait annuel 6 passages : 600€ après crédit'
  }
];

const quartiersSeysses = [
  'Centre-village',
  'Quartier de l\'Église',
  'Route de Muret',
  'Les Musiciens',
  'Route de Frouzins',
  'Chemin de Borde Haute',
  'Les Music-Halles',
  'ZA Les Music-Halles'
];

const villesIntervention = ['SEYSSES', 'MURET', 'ROQUES', 'FROUZINS', 'LAVERNOSE-LACASSE', 'SAINTE-FOY-DE-PEYROLIÈRES', 'TOULOUSE', 'CUGNAUX'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Seysses ?",
    answer: "Les tarifs varient selon la hauteur de l'arbre, l'essence et l'accessibilité du terrain. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. À Seysses, les grandes parcelles facilitent souvent l'accès, ce qui peut réduire le coût. Devis gratuit et personnalisé sous 24h après visite sur place."
  },
  {
    question: "Intervenez-vous dans tous les quartiers de Seysses ?",
    answer: "Oui, Arbovert couvre l'intégralité de Seysses : Centre-village, Quartier de l'Église, Route de Muret, Les Musiciens, Route de Frouzins, Chemin de Borde Haute, Les Music-Halles et la zone d'activités. Nous intervenons aussi sur les grandes propriétés rurales en périphérie du village. Aucun surcoût lié à la localisation."
  },
  {
    question: "Proposez-vous le débroussaillage de terrains en friche à Seysses ?",
    answer: "Oui, c'est l'une de nos prestations les plus demandées à Seysses. Les parcelles en friche sont fréquentes dans cette commune semi-rurale. Nous remettons en état les terrains envahis par les ronces, la végétation arbustive et les herbes hautes. Le débroussaillage est éligible au crédit d'impôt de 50% via notre agrément Services à la Personne."
  },
  {
    question: "Quelle est la meilleure période pour élaguer à Seysses ?",
    answer: "Les chênes et autres feuillus se taillent idéalement de novembre à février (repos végétatif). Les pins maritimes et cyprès, très présents à Seysses, se taillent de préférence en septembre-novembre ou mars-avril. Les fruitiers (cerisiers, pruniers, noyers) se taillent de janvier à mars hors période de gel. Évitez la période de nidification (16 mars - 31 août) sauf urgence."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt pour l'entretien de mon jardin à Seysses ?",
    answer: "Oui pour les prestations d'entretien courant grâce à notre agrément Services à la Personne. Crédit d'impôt 50% pour : taille de haies et arbustes, tonte, débroussaillage, ramassage de feuilles. Non éligible : élagage d'arbres en hauteur, abattage, dessouchage. Arbovert vous fournit l'attestation fiscale annuelle pour votre déclaration (case 7DB)."
  },
  {
    question: "Faut-il une autorisation pour abattre un arbre à Seysses ?",
    answer: "À Seysses, l'abattage peut nécessiter une déclaration préalable selon le Plan Local d'Urbanisme. Les arbres situés en espace boisé classé ou en zone protégée requièrent une autorisation spécifique en mairie. Si votre arbre dépasse 2 mètres de haut et se trouve à moins de 2 mètres de la limite de propriété, le Code civil vous oblige à le tailler ou l'abattre. Nous vous accompagnons dans les démarches."
  },
  {
    question: "Intervenez-vous en urgence à Seysses ?",
    answer: "Oui, nous proposons un service d'intervention rapide pour les situations urgentes à Seysses : arbre fragilisé par le vent d'Autan, branche cassée menaçant une habitation, arbre déraciné après un orage. Seysses est accessible rapidement via l'A64. Contactez-nous au 06 48 76 85 15 pour une évaluation sous 24h."
  },
  {
    question: "Quels arbres trouve-t-on le plus souvent à Seysses ?",
    answer: "Seysses possède un patrimoine arboré typique du piémont pyrénéen : chênes pédonculés et chênes verts dans les boisements, pins maritimes et cyprès dans les jardins, ainsi que de nombreux fruitiers (cerisiers, pruniers, noyers, figuiers). Les haies sont majoritairement composées de lauriers-palme, thuyas et cyprès de Leyland. On trouve aussi des peupliers le long des fossés et cours d'eau."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Seysses",
      "description": "Élagueur professionnel à Seysses (31600). Élagage, abattage, taille de haies, débroussaillage et entretien de jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-seysses",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seysses",
        "postalCode": "31600",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.4986,
        "longitude": 1.3129
      },
      "areaServed": [
        { "@type": "City", "name": "Seysses", "postalCode": "31600" },
        { "@type": "City", "name": "Muret" },
        { "@type": "City", "name": "Roques" },
        { "@type": "City", "name": "Frouzins" },
        { "@type": "City", "name": "Lavernose-Lacasse" },
        { "@type": "City", "name": "Sainte-Foy-de-Peyrolières" }
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
      "serviceType": ["Élagage d'arbres", "Abattage", "Taille de haies", "Débroussaillage", "Entretien jardins"]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Nos villes", "item": "https://www.arbovert-31.fr/nos-villes" },
        { "@type": "ListItem", "position": 3, "name": "Élagage Seysses", "item": "https://www.arbovert-31.fr/elagage-seysses" }
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

export default function ElagageSeysses() {
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
                  <p className="font-heading text-lg text-forest mb-2">ÉLAGAGE À SEYSSES - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention tous quartiers (Centre-village, Musiciens, Borde Haute)</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies, débroussaillage et jardin</li>
                    <li>• Spécialiste débroussaillage de terrains en friche</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Seysses : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Seysses</strong> ? Arbovert intervient dans tout le village et ses environs : <strong>Centre-village, Les Musiciens, Route de Muret, Chemin de Borde Haute</strong>. Notre équipe certifiée pratique l'élagage raisonné, l'abattage sécurisé et le débroussaillage de terrains.
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
                  alt="Élagueur professionnel intervention arbre Seysses 31600"
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
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur professionnel à Seysses ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Un chêne imposant menace votre toiture ?</strong> Votre terrain est envahi par la végétation ? Les haies de vos voisins empiètent chez vous ?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbres vieillissants</p>
                    <p className="text-sm text-night/70">Chênes et pins fragilisés par les sécheresses, branches mortes au-dessus des habitations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies hors de contrôle</p>
                    <p className="text-sm text-night/70">Lauriers et thuyas des lotissements qui débordent sur la voie publique ou chez le voisin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Terrain en friche</p>
                    <p className="text-sm text-night/70">Parcelles envahies par les ronces, broussailles et herbes hautes - très courant à Seysses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Fruitiers malades</p>
                    <p className="text-sm text-night/70">Cerisiers, pruniers ou noyers atteints de maladies nécessitant une taille sanitaire</p>
                  </div>
                </div>
              </div>
              <p className="text-lg text-night/80 mb-4">
                <strong>Sans intervention professionnelle</strong>, vous risquez : chute de branches sur votre maison, propagation de maladies à vos arbres sains, amendes pour non-conformité au PLU, et conflits de voisinage.
              </p>
              <p className="text-lg text-night/80">
                <strong>Arbovert sécurise vos arbres</strong> avec du matériel professionnel, une assurance RC Pro et une connaissance approfondie des essences locales de Seysses.
              </p>
            </div>
          </div>
        </section>

        {/* Section Equipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert : votre expert élagage à Seysses et alentours</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Depuis 2020, Arbovert accompagne particuliers et professionnels de Haute-Garonne pour leurs travaux d'élagage et d'entretien. Nous intervenons régulièrement à <strong>Seysses et dans tout le secteur sud-ouest de Muret</strong>, un territoire que nous connaissons parfaitement.
              </p>
              <h3 className="font-heading text-xl text-forest mb-4">Notre équipe :</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Ancien militaire reconverti dans l'arboriculture, il garantit des interventions sécurisées et méthodiques sur les grandes parcelles boisées de Seysses.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur professionnel</strong> avec 8 ans d'expérience. Spécialiste de la taille douce et de l'élagage en hauteur sur les chênes et pins maritimes typiques du secteur.</p>
                </div>
              </div>
              <h3 className="font-heading text-xl text-forest mb-4">Certifications et engagements :</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-night/80">
                  <li>✅ Certification Services à la Personne (SAP)</li>
                  <li>✅ Assurance RC Pro et décennale</li>
                  <li>✅ Matériel professionnel certifié</li>
                </ul>
                <ul className="space-y-2 text-night/80">
                  <li>⚡ Réponse sous 24h à votre demande</li>
                  <li>⚡ Accès rapide via A64 depuis Muret</li>
                  <li>🌿 Respect période de nidification (16 mars - 31 août)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">4 services d'élagage et entretien à Seysses avec crédit d'impôt 50%</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Arbovert propose une gamme complète adaptée aux grandes propriétés et jardins de Seysses. Intervention toute l'année sur toutes les essences locales.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Seysses`}
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
            <h2 className="section-heading text-center mb-8">Intervention dans tout Seysses et ses environs</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Seysses (31600) est un village de <strong>4 500 habitants</strong> situé au sud-ouest de Muret, à une vingtaine de minutes de Toulouse. Son caractère <strong>semi-rural</strong> se traduit par de grandes propriétés avec terrains boisés, des vergers familiaux et des lotissements récents entourés de haies. L'accès rapide via l'A64 nous permet d'intervenir efficacement.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Centre-village & Quartier de l'Église</h3>
                  <p className="text-sm text-night/70">Coeur historique avec maisons anciennes et arbres matures. Platanes, tilleuls et marronniers bordent les rues. Accès parfois étroits nécessitant le travail sur corde.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Les Musiciens & Les Music-Halles</h3>
                  <p className="text-sm text-night/70">Lotissements résidentiels avec jardins de taille moyenne. Haies de lauriers et thuyas omniprésentes. Forte demande en taille régulière et entretien de pelouse.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Route de Muret & Route de Frouzins</h3>
                  <p className="text-sm text-night/70">Axes principaux bordés de propriétés avec grands terrains. Chênes imposants, pins maritimes et cyprès. Débroussaillage régulier des parcelles en bordure.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Chemin de Borde Haute</h3>
                  <p className="text-sm text-night/70">Secteur champêtre avec des parcelles boisées et agricoles. Noyers, cerisiers et pruniers. Besoins importants en débroussaillage et remise en état de terrains.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersSeysses.map((quartier) => (
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
            <h2 className="section-heading text-center mb-8">Élagage à Seysses : spécificités locales</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Seysses conserve une <strong>ambiance campagnarde</strong> qui la distingue des communes périurbaines voisines. Les grandes propriétés avec terrains boisés constituent l'essentiel de notre clientèle. Les <strong>chênes pédonculés et chênes verts</strong> dominent le paysage, accompagnés de <strong>pins maritimes</strong> plantés dans les années 70-80 et de <strong>cyprès</strong> en haies brise-vent.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Le village possède aussi un riche patrimoine fruitier : <strong>cerisiers, pruniers, noyers et figuiers</strong> sont présents dans la plupart des jardins. Ces essences nécessitent une taille de fructification spécifique, différente de l'élagage classique. Notre équipe maîtrise ces techniques pour optimiser vos récoltes tout en maintenant la santé de l'arbre.
              </p>
              <p className="text-lg text-night/80 mb-4">
                <strong>Particularité locale :</strong> Seysses compte de nombreuses <strong>parcelles en friche</strong>, héritages de découpages fonciers ou de terrains non entretenus. Le débroussaillage de ces parcelles est devenu notre spécialité sur ce secteur, avec une demande croissante chaque année.
              </p>
              <p className="text-lg text-night/80">
                Le <strong>vent d'Autan</strong>, fréquent dans la vallée de la Garonne, soumet les arbres à des contraintes mécaniques importantes. Notre élagage de réduction de voilure permet de diminuer la prise au vent et de prévenir les casses de branches. Nous intervenons aussi dans les communes proches : <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Muret</Link>, <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Cugnaux</Link> et <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse sud</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Credit d'impot */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt Jardinage 50% à Seysses</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert est agréé <strong>Services à la Personne</strong>. Bénéficiez de <strong>50% de crédit d'impôt</strong> sur l'entretien de votre jardin et le débroussaillage de vos parcelles à Seysses.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                  <h3 className="font-heading text-xl text-leaf mb-4">✅ Éligible au crédit d'impôt</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Taille de haies et arbustes</li>
                    <li>• Tonte de pelouse</li>
                    <li>• Débroussaillage de terrains</li>
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
            <h2 className="section-heading text-center mb-6">Zone d'intervention autour de Seysses</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Seysses et dans toutes les communes du sud-ouest toulousain. Accès direct par l'A64.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isSeysses = ville === 'SEYSSES';
                const slugMap: Record<string, string> = {
                  'MURET': 'elagage-muret',
                  'TOULOUSE': 'elagage-toulouse',
                  'CUGNAUX': 'elagage-cugnaux',
                };
                const href = slugMap[ville];

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isSeysses
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (href && !isSeysses) {
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
            <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Seysses (31600)</h2>
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
            <h2 className="section-heading text-center mb-8">Arbovert intervient aussi dans les communes voisines de Seysses</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Basés en Haute-Garonne, nous couvrons un large secteur autour de Seysses et du sud-ouest toulousain.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Communes limitrophes :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagage à Muret</Link> – Chef-lieu de canton</li>
                    <li>🌳 <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage à Cugnaux</Link> – Commune voisine</li>
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> – Métropole</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Autres zones :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage à Colomiers</Link> – 2ème ville du 31</li>
                    <li>🌳 <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage à Blagnac</Link> – Ouest métropole</li>
                    <li>🌳 <Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage à Tournefeuille</Link> – Ouest toulousain</li>
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
                Un projet d'élagage ou d'entretien de jardin à Seysses ?
              </h2>
              <p className="text-lg text-night/80 mb-4 max-w-2xl mx-auto">
                Arbovert vous accompagne de A à Z :
              </p>
              <ol className="text-left max-w-md mx-auto mb-8 space-y-2 text-night/80">
                <li><strong>1. Diagnostic gratuit</strong> : Visite de votre terrain à Seysses</li>
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
                Intervention à Seysses, Muret, Roques, Frouzins, Lavernose-Lacasse et toute la Haute-Garonne.
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
