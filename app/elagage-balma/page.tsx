import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Balma | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Balma : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
  keywords: ['élagage balma', 'élagage balma 31130', 'élagueur balma', 'abattage arbre balma', 'taille de haie balma', 'entretien jardin balma', 'arboriste balma', 'élagueur grimpeur balma', 'élagage lasbordes', 'élagage vidailhan'],
  alternates: {
    canonical: '/elagage-balma'
  },
  openGraph: {
    title: 'Élagage à Balma | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Balma : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-balma'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Balma : taille douce et sécurisée",
    description:
      "L'élagage consiste à tailler les branches pour réduire la prise au vent, dégager bâtiments et toitures, ou redonner une forme harmonieuse à vos arbres. Nous pratiquons l'élagage raisonné, respectueux de la physiologie de l'arbre : coupe max 30% du houppier, biseau au-dessus du bourrelet cicatriciel, pas de taille drastique.",
    points: [
      'Diagnostic sanitaire sur votre terrain à Balma',
      'Techniques de taille sélective adaptées à chaque essence',
      'Élagage sur corde ou nacelle selon l\'accessibilité',
      'Essences courantes : platanes, chênes, érables, pins'
    ],
    image: '/elagage-services.JPG',
    prices: '150€ - 700€ selon hauteur'
  },
  {
    title: "Abattage et démontage d'arbres dangereux à Balma",
    description:
      "Quand un arbre devient dangereux, mort ou irrémédiablement malade, nous réalisons un abattage contrôlé. À Balma, les quartiers résidentiels comme Lasbordes ou Candelle nécessitent souvent un démontage par tronçons pour protéger les propriétés voisines.",
    points: [
      'Abattage directionnel (espace dégagé)',
      'Démontage par tronçons avec rétention (espace contraint)',
      'Dessouchage chimique ou mécanique inclus',
      'Évacuation déchèterie agréée'
    ],
    image: '/abattage-demontage-arbres-services.JPG',
    prices: '130€ - 750€+'
  },
  {
    title: 'Taille de haies et arbustes (-50% crédit d\'impôt)',
    description:
      'Thuyas, cyprès Leyland, lauriers-palmes très présents à Vidailhan et Candelle : nous redonnons une forme nette à vos haies. Taille au cordeau ou libre selon vos préférences. Éligible au crédit d\'impôt 50% via Services à la Personne.',
    points: [
      'Taille au cordeau ou naturelle',
      'Fréquence recommandée : 2 fois/an (mai + septembre)',
      'Ramassage et évacuation des déchets inclus',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true,
    prices: 'Ex: 40m = 240€ → 120€ après crédit'
  },
  {
    title: 'Entretien complet de jardins à Balma (Services à la Personne)',
    description:
      'Débroussaillage, nettoyage automnal, tonte et entretien pelouse : nous prenons en charge l\'entretien complet de votre jardin à Balma. Les propriétés arborées de Lasbordes et Vidailhan tirent une valeur maximale du crédit d\'impôt.',
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

const quartiersBalma = [
  'Centre-ville de Balma',
  'Lasbordes',
  'Candelle',
  'Vidailhan',
  'Gramont',
  'Avenue des Pyrénées',
  'Rue du Stade',
  'Avenue de Roquemaurel'
];

const villesIntervention = ['BALMA', 'L\'UNION', 'QUINT-FONSEGRIVES', 'TOULOUSE', 'PIN-BALMA', 'BEAUPUY', 'MONDOUZIL', 'FLOURENS'];

const faqData = [
  {
    question: "Quels sont les tarifs d'élagage à Balma ?",
    answer: "Les tarifs dépendent de la hauteur, de l'essence et de l'accessibilité. Fourchettes indicatives : arbre 5-10m : 150-250€, arbre 10-15m : 250-400€, arbre 15-20m : 400-700€. Ces tarifs incluent élagage, broyage branches, évacuation déchets verts et nettoyage chantier. Arbovert vous envoie un devis gratuit personnalisé sous 24h après visite de votre arbre à Balma."
  },
  {
    question: "Intervenez-vous rapidement à Balma ?",
    answer: "Oui, Arbovert garantit une réactivité optimale. Notre processus : demande de contact (web ou téléphone), devis 24-48h avec visite terrain gratuite, validation devis, intervention sous 1 semaine (hors saison haute mars-avril). Les urgences (arbre menaçant toiture, branche cassée dangereuse) sont traitées en priorité. Conseil : anticipez votre devis dès février pour le pic de mars."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt à Balma ?",
    answer: "Oui pour certains services grâce à notre agrément Services à la Personne. Crédit d'impôt 50% pour : taille de haies et arbustes, entretien de jardin (débroussaillage, tonte, feuilles). Non éligible : élagage d'arbres (>3m hauteur), abattage, dessouchage. Conditions : résidence principale ou secondaire à Balma, particulier employeur, déclaration impôts case 7DB. 80% de nos clients balmais en profitent."
  },
  {
    question: "Dans quels quartiers de Balma intervenez-vous ?",
    answer: "Arbovert couvre l'intégralité de Balma et ses 15 000 habitants. Quartiers : Centre-ville (zone historique), Lasbordes (sud résidentiel), Candelle (est activités + résidentiel), Vidailhan (nord pavillonnaire), Gramont (ouest limite Toulouse). Axes : Avenue des Pyrénées, Rue du Stade, Avenue de Roquemaurel. Nous intervenons aussi à L'Union, Quint-Fonsegrives, Toulouse Est. Pas de surcoût limite de commune."
  },
  {
    question: "Quelle est la meilleure période pour l'élagage à Balma ?",
    answer: "La période optimale dépend de l'essence. Feuillus (chênes, platanes, érables) : novembre à février (repos végétatif, cicatrisation optimale). Conifères (pins, cyprès) : septembre-novembre ou mars-avril. Fruitiers : janvier-mars hors gel. Période interdite : 16 mars au 31 août (nidification oiseaux). Spécificité Balma : pic de demandes en mars (880 recherches). Conseil : devis dès février pour intervention début mars."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions d'élagage, d'abattage et d'entretien de jardins à Balma et dans toute la Haute-Garonne. Guillaume est certifié CAPA Travaux Forestiers. Nous respectons strictement les normes de sécurité (EPI, balisage chantier)."
  },
  {
    question: "Quels arbres sont typiques des jardins à Balma ?",
    answer: "Balma se distingue par ses coteaux boisés (Pech-David côté sud-est) où dominent les chênes verts et pédonculés. Dans les quartiers résidentiels, on trouve des pins parasols, des cèdres, des tilleuls et de nombreux fruitiers. Les haies de lauriers, photinias et cyprès de Leyland sont très courantes dans les lotissements récents."
  },
  {
    question: "Que faites-vous des déchets verts après l'élagage ?",
    answer: "Nous broyons les branches sur place pour produire un paillage valorisable dans votre jardin. Les bois volumineux et troncs sont évacués vers des filières de recyclage. Le brûlage est interdit à Balma et dans toute la métropole toulousaine. Nous repartons toujours avec un chantier propre et dégagé."
  }
];

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Balma",
      "description": "Élagueur professionnel à Balma (31130). Élagage, abattage, taille de haies, entretien jardins. Crédit d'impôt 50%. Devis gratuit 24h.",
      "url": "https://www.arbovert-31.fr/elagage-balma",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Balma",
        "postalCode": "31130",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6111,
        "longitude": 1.4994
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Balma",
          "postalCode": "31130"
        },
        {
          "@type": "City",
          "name": "L'Union"
        },
        {
          "@type": "City",
          "name": "Quint-Fonsegrives"
        },
        {
          "@type": "City",
          "name": "Toulouse"
        },
        {
          "@type": "City",
          "name": "Pin-Balma"
        }
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
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://www.arbovert-31.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nos villes",
          "item": "https://www.arbovert-31.fr/nos-villes"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Élagage Balma",
          "item": "https://www.arbovert-31.fr/elagage-balma"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function ElagueurBalma() {
  return (
    <>
      {/* JSON-LD Schema */}
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
                {/* TL;DR Box */}
                <div className="rounded-2xl border-2 border-leaf/40 bg-leaf/10 p-4 mb-6">
                  <p className="font-heading text-lg text-forest mb-2">🌳 ÉLAGAGE À BALMA - L'ESSENTIEL</p>
                  <ul className="text-sm text-night/80 space-y-1">
                    <li>• <strong>Devis gratuit sous 24-48h</strong></li>
                    <li>• Intervention sous 1 semaine tous quartiers</li>
                    <li>• <strong>Crédit d'impôt -50%</strong> taille haies et jardin</li>
                    <li>• Équipe certifiée CAPA Travaux Forestiers</li>
                  </ul>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Balma : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  Vous cherchez un <strong>élagueur professionnel à Balma</strong> ? Arbovert intervient rapidement dans tous les quartiers : <strong>Lasbordes, Candelle, Vidailhan, Centre-ville, Gramont</strong>. Notre équipe certifiée pratique l'élagage raisonné, l'abattage sécurisé et l'entretien complet de jardins.
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
                  alt="Élagueur professionnel grimpeur intervention arbre Balma 31130"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Problème Agité (PAS) */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Pourquoi faire appel à un élagueur professionnel à Balma ?</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                <strong>Votre arbre menace votre toiture à Balma ?</strong> Vos haies débordent chez le voisin à Lasbordes ? Votre jardin devient incontrôlable après l'été ?
              </p>

              <p className="text-lg text-night/80 mb-6">
                À Balma, vous êtes peut-être confronté à :
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚨</span>
                  <div>
                    <p className="font-medium text-forest">Arbre dangereux</p>
                    <p className="text-sm text-night/70">Branches mortes menaçant votre toiture à Vidailhan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-medium text-forest">Haies débordantes</p>
                    <p className="text-sm text-night/70">Thuyas empiétant chez le voisin à Candelle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🍂</span>
                  <div>
                    <p className="font-medium text-forest">Jardin négligé</p>
                    <p className="text-sm text-night/70">Espace vert incontrôlable après l'été</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <p className="font-medium text-forest">Arbre malade</p>
                    <p className="text-sm text-night/70">Platane ou chêne montrant des signes de dépérissement</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-night/80 mb-4">
                <strong>Sans élagueur certifié</strong>, vous risquez : dommages matériels coûteux (toiture, clôture, véhicule), conflits de voisinage, amendes pour non-respect du PLU, perte définitive d'un arbre précieux, accidents lors d'une taille amateur.
              </p>

              <p className="text-lg text-night/80">
                <strong>Arbovert vous évite ces tracas</strong> avec du matériel professionnel et une assurance décennale.
              </p>
            </div>
          </div>
        </section>

        {/* Section Solution - Équipe */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Arbovert : votre expert en élagage sur Balma et ses quartiers</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Depuis 2020, Arbovert accompagne particuliers et professionnels de Haute-Garonne pour leurs travaux d'élagage. Notre zone d'intervention couvre <strong>Balma et toute la métropole toulousaine</strong>.
              </p>

              <h3 className="font-heading text-xl text-forest mb-4">Notre équipe à Balma :</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">👨‍🌾 Guillaume</p>
                  <p className="text-sm text-night/80">Élagueur certifié <strong>CAPA Travaux Forestiers</strong>. Ancien militaire reconverti, il garantit des interventions sécurisées et méthodiques.</p>
                </div>
                <div className="rounded-2xl bg-beige/50 p-4 border border-forest/10">
                  <p className="font-heading text-lg text-forest mb-2">🧗 Clément</p>
                  <p className="text-sm text-night/80"><strong>Grimpeur-élagueur professionnel</strong> avec 8 ans d'expérience. Spécialiste taille douce et élagage en hauteur.</p>
                </div>
              </div>

              <h3 className="font-heading text-xl text-forest mb-4">Certifications et engagements :</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-night/80">
                  <li>✅ Certification Services à la Personne (SAP)</li>
                  <li>✅ Assurance décennale RC Pro</li>
                  <li>✅ Matériel professionnel certifié (Stihl, nacelles)</li>
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

        {/* Section Nos services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">4 services d'élagage et entretien à Balma avec crédit d'impôt 50%</h2>
            <p className="text-center text-lg text-night/70 mb-12 max-w-3xl mx-auto">
              Arbovert propose une gamme complète adaptée aux arbres et jardins de Balma. Nous intervenons toute l'année (sauf période de nidification) sur tous types d'essences.
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
                      alt={`${service.title} - Arbovert élagueur professionnel Balma`}
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
                    💰 Tarifs indicatifs : {service.prices}
                  </p>
                </article>
              ))}
            </div>
            <p className="text-center mt-8 text-night/70">
              Découvrez l'ensemble de nos <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">services d'élagage en Haute-Garonne</Link>.
            </p>
          </div>
        </section>

        {/* Section Preuves Sociales */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">3 raisons de choisir Arbovert à Balma</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-heading text-xl text-forest mb-3">Expertise locale</h3>
                <p className="text-night/80">
                  Connaissance des essences locales (platanes, chênes, pins). Réglementation PLU Balma. Respect des contraintes de voisinage. 4 ans d'expérience métropole toulousaine.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl text-forest mb-3">Réactivité garantie</h3>
                <p className="text-night/80">
                  Devis gratuit sous 24-48h. Chantier planifié sous 1 semaine. Urgences traitées en priorité. Basés à proximité de Balma.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-heading text-xl text-forest mb-3">Avantage fiscal</h3>
                <p className="text-night/80">
                  Crédit d'impôt 50% Services à la Personne. Taille haies et entretien jardin : -50% immédiat. Facture détaillée pour déclaration. <strong>80% de nos clients balmais en profitent</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Quartiers de Balma */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Intervention rapide dans tous les quartiers de Balma</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert connaît parfaitement la géographie de Balma et les spécificités de chaque secteur. Nous intervenons quotidiennement sur l'ensemble de la commune et ses <strong>15 000 habitants</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">🏘️ Centre-ville de Balma</h3>
                  <p className="text-sm text-night/70">Zone historique avec arbres anciens. Respect architecture traditionnelle. Accès parfois contraints.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">🌳 Lasbordes (sud)</h3>
                  <p className="text-sm text-night/70">Quartier résidentiel calme. Nombreuses propriétés arborées. Pins, chênes, platanes dominants.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">🏢 Candelle (est)</h3>
                  <p className="text-sm text-night/70">Zone activités + habitations. Espaces verts entreprises. Haies strictes, pelouses soignées.</p>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">🏡 Vidailhan (nord)</h3>
                  <p className="text-sm text-night/70">Quartier pavillonnaire. Jardins individuels bien entretenus. Forte demande taille haies.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {quartiersBalma.map((quartier) => (
                  <span
                    key={quartier}
                    className="block rounded-full border border-forest/20 bg-white px-4 py-2 text-center text-sm text-night/80"
                  >
                    {quartier}
                  </span>
                ))}
              </div>

              <p className="text-lg text-night/80 mt-6">
                Balma bénéficie de notre proximité avec le secteur est toulousain. Nous enchaînons plusieurs chantiers dans la journée à Balma, L'Union, Quint-Fonsegrives = <strong>optimisation délais et tarifs</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Spécificités locales Balma */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Élagage à Balma : Notre Expertise Locale</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                <strong>Commune résidentielle de l'est toulousain</strong>, Balma (31130) compte <strong>15 000 habitants</strong>. Avec sa clientèle CSP+ (technoparc, cadres) et sa zone périurbaine aux propriétés arborées, Balma présente des besoins spécifiques en élagage.
              </p>
              <p className="text-lg text-night/80 mb-4">
                La proximité du <strong>Canal du Midi</strong> et le <strong>Parc du Bois de Balma</strong> créent un environnement verdoyant. L'architecture mixte ancien/moderne implique des contraintes variées pour l'accès aux arbres. Les nombreux espaces verts privés nécessitent un entretien régulier.
              </p>
              <p className="text-lg text-night/80 mb-4">
                <strong>Conseil local</strong> : À Balma, privilégiez l'élagage des platanes et érables entre novembre et février. Pour le quartier Lasbordes, attention aux réglementations PLU pour les arbres en limite de propriété.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Besoin d'un élagueur dans une commune voisine ? Nous intervenons également à <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link>, <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Blagnac</Link>, <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Colomiers</Link> et dans toute la métropole toulousaine.
              </p>
              <p className="text-lg text-night/80">
                Pour en savoir plus, lisez nos articles : <Link href="/blog/reglementation-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">la réglementation de l'élagage en Haute-Garonne</Link>, <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">quand élaguer vos arbres à Toulouse et ses environs</Link> et <Link href="/blog/chenille-processionnaire-toulouse" className="text-forest underline hover:text-forest/80">la chenille processionnaire : comment protéger vos pins</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Tarifs indicatifs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Tarifs Indicatifs Élagage à Balma</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Nos tarifs dépendent de : hauteur de l'arbre, essence, accessibilité, évacuation déchets. Voici des <strong>fourchettes indicatives</strong> :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-forest/10">
                  <h3 className="font-heading text-xl text-forest mb-4">Élagage d'entretien</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Arbre 5-10 m : <strong>150€ - 250€</strong></li>
                    <li>• Arbre 10-15 m : <strong>250€ - 400€</strong></li>
                    <li>• Arbre 15-20 m : <strong>400€ - 700€</strong></li>
                    <li>• Arbre &gt; 20 m : <strong>Sur devis</strong></li>
                  </ul>
                  <p className="text-xs text-night/60 mt-3">❌ Non éligible crédit d'impôt</p>
                </div>
                <div className="rounded-2xl bg-white p-6 border border-forest/10">
                  <h3 className="font-heading text-xl text-forest mb-4">Abattage</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Arbre 2-5 m : <strong>130€ - 230€</strong></li>
                    <li>• Arbre 5-10 m : <strong>230€ - 370€</strong></li>
                    <li>• Arbre 10-15 m : <strong>370€ - 550€</strong></li>
                    <li>• Arbre 15-20 m : <strong>550€ - 750€</strong></li>
                  </ul>
                  <p className="text-xs text-night/60 mt-3">❌ Non éligible crédit d'impôt</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-leaf/10 p-6 border border-leaf/20">
                <h3 className="font-heading text-xl text-leaf mb-4">✅ Taille haies & Entretien jardin (Crédit d'impôt 50%)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-night/80">
                  <div>
                    <p><strong>Taille haie 40m</strong> : 240€ → <strong>120€ après crédit</strong></p>
                    <p><strong>Forfait annuel 6 passages</strong> : 1200€ → <strong>600€ après crédit</strong></p>
                  </div>
                  <div>
                    <p className="text-sm">Soit <strong>50€/passage</strong> pour un entretien complet de votre jardin à Balma.</p>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-night/70 text-sm">
                Tarifs indicatifs incluant évacuation des déchets. Devis gratuit personnalisé sous 24h.
              </p>
            </div>
          </div>
        </section>

        {/* Section Services à la Personne */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Crédit d'Impôt Jardinage 50% – Services à la Personne</h2>
            <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Arbovert est agréé <strong>Services à la Personne</strong>. Vous pouvez bénéficier d'un <strong>crédit d'impôt de 50%</strong> sur certaines prestations d'entretien de jardin à Balma. <strong>80% de nos clients balmais utilisent cet avantage.</strong>
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
            <h2 className="section-heading text-center mb-6">Zone d'Intervention autour de Balma</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Balma et dans toutes les communes de l'est toulousain pour vos travaux d'élagage et d'entretien d'espaces verts.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isBalma = ville === 'BALMA';
                const slug = ville.toLowerCase().replace(/'/g, '-').replace(/ /g, '-');
                const hasPage = ['TOULOUSE', 'BLAGNAC', 'COLOMIERS', 'TOURNEFEUILLE'].includes(ville);

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isBalma
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (hasPage && !isBalma) {
                  return (
                    <Link key={ville} href={`/elagage-${slug.toLowerCase()}`}>
                      {content}
                    </Link>
                  );
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
            <h2 className="section-heading text-center mb-12">Questions Fréquentes sur l'Élagage à Balma (31130)</h2>
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
            <h2 className="section-heading text-center mb-8">Arbovert intervient aussi dans les communes voisines de Balma</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Basés dans la métropole toulousaine, nous couvrons un large secteur autour de Balma.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Nos autres zones d'intervention :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link> - Métropole</li>
                    <li>🌳 <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagueur à Blagnac</Link> - Proximité aéroport</li>
                    <li>🌳 <Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Taille haies Tournefeuille</Link> - Ouest métropole</li>
                    <li>🌳 <Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Élagage à Ramonville</Link> - Sud-est Toulouse</li>
                    <li>🌳 <Link href="/elagage-labege" className="text-forest underline hover:text-forest/80">Élagage à Labège</Link> - Sud-est métropole</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg text-forest mb-3">Et aussi :</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>🌳 <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Abattage Colomiers</Link> - 2ème ville 31</li>
                    <li>🌳 <Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagueur Muret</Link> - Sud Haute-Garonne</li>
                    <li>🌳 <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage Cugnaux</Link> - Sud-ouest</li>
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
                Un projet d'élagage ou d'entretien de jardin à Balma ?
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
                Intervention à Balma, L'Union, Quint-Fonsegrives, Toulouse et toute la métropole toulousaine.
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
