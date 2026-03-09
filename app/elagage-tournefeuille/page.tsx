import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Tournefeuille | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Tournefeuille : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
  keywords: ['élagage Tournefeuille', 'élagage Tournefeuille 31170', 'élagueur Tournefeuille', 'abattage arbre Tournefeuille', 'taille de haie Tournefeuille', 'entretien jardin Tournefeuille', 'arboriste Tournefeuille', 'élagueur grimpeur Tournefeuille'],
  alternates: {
    canonical: '/elagage-tournefeuille'
  },
  openGraph: {
    title: 'Élagage à Tournefeuille | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Tournefeuille : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-tournefeuille'
  },
};

const services = [
  {
    title: "Élagage et taille d'arbres à Tournefeuille",
    description:
      "Taille douce, taille de formation ou élagage sécuritaire : nous adaptons nos interventions à chaque arbre pour favoriser une reprise saine. Comptez entre 80€ et 500€ par arbre selon la hauteur et l'accessibilité (hors évacuation).",
    points: [
      'Diagnostic sanitaire et conseils personnalisés',
      'Techniques de taille sélective pour le houppier',
      'Élagage sur corde ou nacelle selon l\'accès',
      'Nettoyage complet du chantier'
    ],
    image: '/elagage-services.JPG'
  },
  {
    title: "Abattage et démontage sécurisé",
    description:
      "Quand un arbre devient dangereux ou gêne un projet, nous réalisons un abattage contrôlé avec démontage par tronçons et rétention systématique pour protéger les biens alentours à Tournefeuille.",
    points: [
      'Étude de la zone et balisage du périmètre',
      'Démontage par tronçons avec rétention si besoin',
      'Broyage ou rognage de souche sur demande',
      'Évacuation et valorisation des déchets verts'
    ],
    image: '/abattage-demontage-arbres-services.JPG'
  },
  {
    title: 'Taille de haies et arbustes',
    description:
      'Haies de lauriers, thuyas, cyprès ou massifs : nous redonnons une forme nette tout en respectant les périodes de taille. Éligible au crédit d\'impôt 50% via Services à la Personne.',
    points: [
      'Taille au cordeau ou au gabarit souhaité',
      'Éligible crédit d\'impôt 50% (Services à la Personne)',
      'Ramassage et évacuation des déchets',
      'Contrats d\'entretien annuels disponibles'
    ],
    image: '/tailles_de_haies_arbustes.jpg',
    highlight: true
  },
  {
    title: 'Entretien de jardins à Tournefeuille',
    description:
      'Entretenez votre extérieur toute l\'année à Tournefeuille : tonte, débroussaillage, nettoyage et finitions. Services éligibles au crédit d\'impôt 50%.',
    points: [
      'Tonte et finition des bordures',
      'Débroussaillage et remise à niveau',
      'Nettoyage souffleur des allées et terrasses',
      'Éligible crédit d\'impôt 50% (Services à la Personne)'
    ],
    image: '/tonte_de_jardin.jpeg',
    highlight: true
  }
];

const quartiersTournefeuille = [
  'Centre-ville',
  'La Ramée',
  'Pahin',
  'Fontaine-Lestang',
  'La Paderne',
  'Moulin à Vent',
  'Lardenne',
  'Les Music-Halles',
  'Saint-Simon',
  'Basso Cambo',
  'Le Phare'
];

const villesIntervention = ['TOURNEFEUILLE', 'PLAISANCE-DU-TOUCH', 'CUGNAUX', 'COLOMIERS', 'TOULOUSE', 'PORTET-SUR-GARONNE', 'VILLENEUVE-TOLOSANE', 'FROUZINS'];

const faqData = [
  {
    question: "Quelle est la meilleure période pour élaguer un arbre à Tournefeuille ?",
    answer: "La période idéale dépend de l'essence de l'arbre. En général, la taille hivernale (janvier-février) est recommandée pour les feuillus car l'arbre est en repos végétatif. Pour les résineux et certains arbustes, une intervention au printemps (mars-avril) est préférable. À Tournefeuille, nous tenons compte du climat local et de l'exposition au vent d'Autan pour planifier nos interventions."
  },
  {
    question: "L'élagage est-il déductible des impôts ?",
    answer: "L'élagage et l'abattage d'arbres ne sont pas éligibles au crédit d'impôt car considérés comme travaux spécialisés. En revanche, la taille de haies, la tonte, le débroussaillage et l'entretien courant de jardin bénéficient du crédit d'impôt de 50% dans le cadre des Services à la Personne. Arbovert est agréé SAP."
  },
  {
    question: "Faut-il une autorisation pour abattre un arbre à Tournefeuille ?",
    answer: "À Tournefeuille, l'abattage d'un arbre peut nécessiter une autorisation selon sa taille, son emplacement et le PLU de Toulouse Métropole. Les arbres classés ou supérieurs à certaines dimensions requièrent une déclaration préalable. Nous vous accompagnons dans ces démarches administratives."
  },
  {
    question: "Combien coûte un élagage à Tournefeuille ?",
    answer: "Le tarif dépend de la hauteur, de l'essence et de l'accessibilité. Comptez entre 80€ et 1000€ par arbre pour un élagage d'entretien, et de 130€ à 750€ pour un abattage (hors évacuation). Nos devis sont gratuits et détaillés."
  },
  {
    question: "Intervenez-vous en urgence à Tournefeuille ?",
    answer: "Oui, nous proposons un service d'intervention rapide sous 24h pour les situations d'urgence : arbre menaçant de tomber, branche cassée sur une toiture, arbre fragilisé après une tempête ou danger immédiat pour la sécurité."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions d'élagage, d'abattage et d'entretien de jardins à Tournefeuille et dans toute la Haute-Garonne."
  },
  {
    question: "Dans quels quartiers de Tournefeuille intervenez-vous ?",
    answer: "Nous couvrons toute la commune de Tournefeuille : centre-ville, La Ramée, Pahin, Laoueilla, Roquettes, La Paderne, Le Petit Train, ainsi que tous les quartiers pavillonnaires. Nous intervenons aussi à Plaisance-du-Touch et Cugnaux, communes limitrophes."
  },
  {
    question: "Quels arbres sont fréquents à Tournefeuille ?",
    answer: "Tournefeuille est une commune verdoyante avec de nombreux jardins privés. On y trouve des chênes, des pins parasols et maritimes, des platanes, ainsi que beaucoup de haies de cyprès de Leyland, thuyas et lauriers. Le parc de La Ramée abrite des essences variées. Les fruitiers (cerisiers, pruniers, pommiers) sont aussi très présents dans les jardins."
  }
];

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Tournefeuille",
      "description": "Élagage, abattage et entretien de jardins à Tournefeuille (31170). Élagueur grimpeur certifié CAPA. Services à la Personne agréé.",
      "url": "https://www.arbovert-31.fr/elagage-tournefeuille",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tournefeuille",
        "postalCode": "31170",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.5833,
        "longitude": 1.3500
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Tournefeuille",
          "postalCode": "31170"
        },
        {
          "@type": "City",
          "name": "Plaisance-du-Touch"
        },
        {
          "@type": "City",
          "name": "Cugnaux"
        },
        {
          "@type": "City",
          "name": "Colomiers"
        },
        {
          "@type": "City",
          "name": "Toulouse"
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
      }
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
          "name": "Élagage Tournefeuille",
          "item": "https://www.arbovert-31.fr/elagage-tournefeuille"
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

export default function ElagueurTournefeuille() {
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
                <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                  Élagage à Tournefeuille : taille, abattage et entretien de vos arbres
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  <strong>Arbre dangereux, branches mortes ou élagage urgent ?</strong> Risques de chute, dégâts sur votre toiture, intervention coûteuse en catastrophe... Ne prenez pas ces risques.
                </p>
                <p className="text-lg text-night/80 leading-relaxed mb-6">
                  <strong>Arbovert intervient sous 24h à Tournefeuille</strong> pour tous vos travaux d'élagage, d'abattage et d'entretien d'espaces verts. Avec ses 28 000 habitants et son cadre de vie privilégié entre ville et campagne, Tournefeuille bénéficie de notre expertise locale et de notre équipe d'élagueurs grimpeurs certifiés CAPA.
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
                  alt="Élagueur grimpeur Arbovert en intervention à Tournefeuille - élagage sécurisé"
                  fill
                  className="object-cover"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Pourquoi nous choisir */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Pourquoi Choisir Arbovert pour Votre Élagage à Tournefeuille ?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-heading text-xl text-forest mb-3">Élagueur grimpeur certifié CAPA</h3>
                <p className="text-night/80">
                  Guillaume est titulaire du CAPA Travaux Forestiers et arboriculture. Une expertise technique qui garantit des interventions dans les règles de l'art.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl text-forest mb-3">Intervention rapide sur tout le 31</h3>
                <p className="text-night/80">
                  Basés en Haute-Garonne, nous intervenons rapidement à Tournefeuille et ses environs. Devis gratuit sous 24h, intervention sous 48h.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading text-xl text-forest mb-3">Crédit d'impôt jardinage 50%</h3>
                <p className="text-night/80">
                  Agrément Services à la Personne : déduisez 50% de vos dépenses d'entretien de jardin (tonte, taille de haies, débroussaillage).
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-heading text-xl text-forest mb-3">Assurance RC Pro</h3>
                <p className="text-night/80">
                  Assurance responsabilité civile professionnelle pour toutes nos interventions. Évacuation des déchets verts incluse dans nos devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos services */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Vos Travaux d'Élagage à Tournefeuille</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => (
                <article
                  key={service.title}
                  className={`rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${
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
                      alt={`${service.title} - Arbovert élagueur professionnel Tournefeuille`}
                      width={400}
                      height={300}
                      className="h-[250px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-forest mb-3">{service.title}</h3>
                  <p className="text-night/80 mb-4">{service.description}</p>
                  <ul className="list-disc space-y-2 pl-5 text-night/80">
                    {service.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="text-center mt-8 text-night/70">
              Découvrez l'ensemble de nos <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">services d'élagage en Haute-Garonne</Link>.
            </p>
          </div>
        </section>

        {/* Section Quartiers de Tournefeuille */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Intervention dans Tous les Quartiers de Tournefeuille</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Notre équipe d'élagueurs grimpeurs intervient dans <strong>tous les quartiers de Tournefeuille</strong>, des jardins pavillonnaires du quartier <strong>La Ramée</strong> aux copropriétés de <strong>Pahin</strong>, en passant par le <strong>centre-ville</strong> et le secteur <strong>Saint-Simon</strong>.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {quartiersTournefeuille.map((quartier) => (
                  <span
                    key={quartier}
                    className="block rounded-full border border-forest/20 bg-white px-4 py-2 text-center text-sm text-night/80"
                  >
                    {quartier}
                  </span>
                ))}
              </div>
              <p className="text-lg text-night/80 mt-6">
                Que vous soyez particulier, syndic de copropriété ou professionnel, nous adaptons nos interventions à vos contraintes d'accès et de voisinage.
              </p>
            </div>
          </div>
        </section>

        {/* Section Spécificités locales Tournefeuille */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Élagage à Tournefeuille : Notre Expertise Locale</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                <strong>Troisième commune de Haute-Garonne</strong>, Tournefeuille (31170) compte <strong>28 000 habitants</strong> et offre un cadre de vie privilégié entre urbanité et nature. Située à l'ouest de Toulouse, la ville se distingue par ses nombreux espaces verts, dont le célèbre <strong>parc de la Ramée</strong>, et ses quartiers résidentiels aux jardins arborés.
              </p>
              <p className="text-lg text-night/80 mb-4">
                La proximité du <strong>Touch</strong> et les nombreux parcs créent des conditions favorables à la croissance des arbres. Les jardins tournefeuillais accueillent une grande diversité d'essences : <strong>chênes, platanes, pins parasols, cèdres, érables</strong> et de nombreuses haies de <strong>lauriers, thuyas et cyprès</strong>.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Nous maîtrisons les spécificités locales : sols argilo-calcaires, exposition au vent d'Autan, et réglementation de Toulouse Métropole. Notre connaissance du terrain nous permet d'anticiper les contraintes liées aux grands arbres des propriétés tournefeuillaises.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Besoin d'un élagueur dans une commune voisine ? Nous intervenons également à <Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Cugnaux</Link>, <Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Colomiers</Link>, <Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Blagnac</Link>, <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link> et dans toute la métropole toulousaine.
              </p>
              <p className="text-lg text-night/80">
                Consultez nos articles pour en savoir plus : <Link href="/blog/taille-douce-vs-taille-severe" className="text-forest underline hover:text-forest/80">taille douce vs taille sévère, quelle méthode choisir</Link>, <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">quand élaguer vos arbres à Toulouse et ses environs</Link> et <Link href="/blog/entretien-jardin-printemps" className="text-forest underline hover:text-forest/80">l'entretien de jardin au printemps</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Tarifs indicatifs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Tarifs Indicatifs Élagage à Tournefeuille</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-6">
                Nos tarifs dépendent de plusieurs facteurs : hauteur de l'arbre, essence, accessibilité du chantier et volume de déchets à évacuer. Voici des <strong>fourchettes indicatives</strong> pour vous donner une idée :
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-forest/10">
                  <h3 className="font-heading text-xl text-forest mb-4">Élagage d'entretien</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Arbre &lt; 5 m : <strong>80€ - 250€</strong></li>
                    <li>• Arbre 5-10 m : <strong>250€ - 500€</strong></li>
                    <li>• Arbre 10-15 m : <strong>500€ - 1000€</strong></li>
                    <li>• Arbre &gt; 15 m : <strong>800€ - 1500€+</strong></li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 border border-forest/10">
                  <h3 className="font-heading text-xl text-forest mb-4">Abattage</h3>
                  <ul className="space-y-2 text-night/80">
                    <li>• Arbre 2-5 m : <strong>130€ - 230€</strong></li>
                    <li>• Arbre 5-10 m : <strong>230€ - 370€</strong></li>
                    <li>• Arbre 10-15 m : <strong>370€ - 550€</strong></li>
                    <li>• Arbre 15-20 m : <strong>550€ - 650€</strong></li>
                    <li>• Arbre &gt; 20 m : <strong>650€ - 750€+</strong></li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 text-night/70 text-sm">
                Tarifs indicatifs hors évacuation des déchets.
              </p>
              <p className="text-center mt-4 text-night/80 bg-beige/70 rounded-xl p-4">
                <strong>Certains chantiers spécifiques</strong> (accès difficile, arbre en mauvais état, proximité de lignes électriques, terrain en pente...) peuvent ne pas rentrer dans cette grille tarifaire. <strong>N'hésitez pas à nous contacter</strong> pour un devis personnalisé gratuit et sans engagement.
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
                Arbovert est agréé <strong>Services à la Personne</strong>. Vous pouvez bénéficier d'un <strong>crédit d'impôt de 50%</strong> sur certaines prestations d'entretien de jardin à Tournefeuille.
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
                    <li>• Élagage d'arbres (travaux spécialisés)</li>
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
            <h2 className="section-heading text-center mb-6">Zone d'Intervention autour de Tournefeuille</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Nous intervenons rapidement à Tournefeuille et dans toutes les communes de l'ouest toulousain pour vos travaux d'élagage et d'entretien d'espaces verts.
            </p>
            <div className="grid gap-4 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
              {villesIntervention.map((ville) => {
                const isTournefeuille = ville === 'TOURNEFEUILLE';
                const slug = ville.toLowerCase().replace(/-/g, '-');
                const hasPage = ['CUGNAUX', 'COLOMIERS', 'TOULOUSE'].includes(ville);

                const content = (
                  <span className={`block rounded-full border px-4 py-3 text-center transition-colors ${
                    isTournefeuille
                      ? 'bg-forest/10 border-forest/40 font-semibold text-forest'
                      : 'border-forest/20 bg-beige/70 hover:bg-forest/5'
                  }`}>
                    {ville}
                  </span>
                );

                if (hasPage && !isTournefeuille) {
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
            <h2 className="section-heading text-center mb-12">Questions Fréquentes sur l'Élagage à Tournefeuille</h2>
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

        {/* Section Réalisations */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Réalisations d'Élagage en Haute-Garonne</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos interventions récentes près de Tournefeuille et dans toute la Haute-Garonne.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-beige/50 overflow-hidden shadow-sm">
                <Image
                  src="/realisations/Colomiers - avant.jpg"
                  alt="Démontage d'un peuplier à Colomiers près de Tournefeuille"
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium text-forest">Démontage d'un peuplier</p>
                  <p className="text-sm text-night/60">Colomiers (31)</p>
                </div>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/50 overflow-hidden shadow-sm">
                <Image
                  src="/realisations/fauga-apres.jpg"
                  alt="Démontage d'un peuplier malade au Fauga (31)"
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium text-forest">Démontage d'un peuplier malade</p>
                  <p className="text-sm text-night/60">Le Fauga (31)</p>
                </div>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/50 overflow-hidden shadow-sm">
                <Image
                  src="/realisations/lacroix-apres.jpg"
                  alt="Taille d'éclaircissement sur pins parasol à Lacroix-Falgarde"
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium text-forest">Taille de pins parasol</p>
                  <p className="text-sm text-night/60">Lacroix-Falgarde (31)</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-8">
              <Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">
                Voir toutes nos réalisations en Haute-Garonne
              </Link>
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Demandez Votre Devis Gratuit pour Votre Élagage à Tournefeuille
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Nous analysons votre chantier et planifions une intervention adaptée à vos besoins. Réponse garantie sous 24h, intervention possible sous 48h.
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
                <span className="flex items-center gap-2">✓ Élagueur grimpeur certifié</span>
                <span className="flex items-center gap-2">✓ Assurance RC Pro</span>
                <span className="flex items-center gap-2">✓ Évacuation déchets incluse</span>
              </div>
              <p className="mt-6 text-sm text-night/60">
                Intervention à Tournefeuille, Plaisance-du-Touch, Cugnaux, Colomiers, Toulouse et toute la métropole toulousaine.
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
