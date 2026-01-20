import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagueur à Tournefeuille (31) – Élagage & Abattage Professionnel',
  description:
    'Élagueur certifié à Tournefeuille. Élagage, abattage, entretien jardins. Intervention 24h. Services à la Personne = 50% crédit d\'impôt. Devis gratuit.',
  keywords: ['élagueur Tournefeuille', 'élagage Tournefeuille', 'abattage arbres Tournefeuille', 'taille de haies Tournefeuille', 'Services à la Personne'],
  alternates: {
    canonical: '/elagueur-tournefeuille'
  },
  openGraph: {
    title: 'Élagueur Professionnel à Tournefeuille – Arbovert',
    description: 'Élagage sécurisé à Tournefeuille avec Services à la Personne agréé. Intervention rapide 24h, devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagueur-tournefeuille'
  },
};

const services = [
  {
    title: "Élagage d'entretien à Tournefeuille",
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
    title: "Abattage sécurisé d'arbres",
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
    title: 'Taille de haies & arbustes',
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
    title: 'Entretien complet de jardins',
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

const villesIntervention = ['TOURNEFEUILLE', 'PLAISANCE-DU-TOUCH', 'PIBRAC', 'SAINT-LYS', 'CUGNAUX', 'COLOMIERS', 'TOULOUSE', 'BLAGNAC'];

const faqData = [
  {
    question: "Combien coûte un élagage à Tournefeuille ?",
    answer: "Le tarif dépend de la hauteur, de l'essence et de l'accessibilité. Comptez entre 80€ et 1000€ par arbre pour un élagage d'entretien, et de 130€ à 750€ pour un abattage (hors évacuation). Nos devis sont gratuits et détaillés."
  },
  {
    question: "Puis-je bénéficier du crédit d'impôt pour la taille de haies ?",
    answer: "Oui, la taille de haies, l'entretien de jardin et le débroussaillage sont éligibles au crédit d'impôt de 50% dans le cadre des Services à la Personne. L'élagage et l'abattage d'arbres ne sont pas concernés car considérés comme travaux spécialisés."
  },
  {
    question: "Vous intervenez en urgence à Tournefeuille ?",
    answer: "Oui, nous proposons un service d'intervention rapide sous 24h pour les situations d'urgence : arbre menaçant de tomber, branche cassée sur une toiture ou danger immédiat pour la sécurité."
  },
  {
    question: "Quel est votre délai d'intervention à Tournefeuille ?",
    answer: "Pour les interventions programmées, nous établissons un devis sous 48h et planifions l'intervention selon vos disponibilités. En cas d'urgence, nous intervenons sous 24h."
  },
  {
    question: "Êtes-vous assuré pour les travaux d'élagage ?",
    answer: "Oui, Arbovert dispose d'une assurance responsabilité civile professionnelle couvrant l'ensemble de nos interventions d'élagage, d'abattage et d'entretien de jardins à Tournefeuille."
  },
  {
    question: "Avez-vous des références à Tournefeuille ?",
    answer: "Nous intervenons régulièrement à Tournefeuille et dans toute la métropole toulousaine. N'hésitez pas à consulter nos réalisations ou à nous demander des références locales lors de votre demande de devis."
  }
];

// JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagueur Tournefeuille",
      "description": "Élagueur professionnel à Tournefeuille (31170). Élagage, abattage, taille de haies et entretien de jardins. Services à la Personne agréé.",
      "url": "https://www.arbovert-31.fr/elagueur-tournefeuille",
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
        "longitude": 1.3456
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Tournefeuille"
        },
        {
          "@type": "City",
          "name": "Plaisance-du-Touch"
        },
        {
          "@type": "City",
          "name": "Pibrac"
        },
        {
          "@type": "City",
          "name": "Saint-Lys"
        }
      ],
      "priceRange": "€€",
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
          "name": "Élagueur Tournefeuille",
          "item": "https://www.arbovert-31.fr/elagueur-tournefeuille"
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
                  Élagueur Professionnel à Tournefeuille (31170) – Élagage Sécurisé & Certifié
                </h1>
                <p className="text-lg md:text-xl text-night/80 leading-relaxed mb-4">
                  <strong>Arbre dangereux, branches mortes ou élagage urgent ?</strong> Risques de chute, coupure de lignes électriques, appels d'urgence coûteux... Ne prenez pas ces risques.
                </p>
                <p className="text-lg text-night/80 leading-relaxed mb-6">
                  <strong>Arbovert intervient sous 24h à Tournefeuille</strong> pour tous vos travaux d'élagage, d'abattage et d'entretien d'espaces verts. Avec 28 000 habitants et de nombreux quartiers arborés, Tournefeuille bénéficie de notre expertise locale et de notre agrément Services à la Personne.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                    06 48 76 85 15
                  </a>
                  <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                    Devis gratuit
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
                <Image
                  src="/elagage-services.JPG"
                  alt="Élagueur professionnel Arbovert en intervention à Tournefeuille - élagage sécurisé"
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
                <h3 className="font-heading text-xl text-forest mb-3">Certifications CAPA</h3>
                <p className="text-night/80">
                  Formation CAPA Travaux Forestiers et arboriculture. Guillaume maîtrise toutes les techniques d'élagage adaptées aux essences locales.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-heading text-xl text-forest mb-3">Services à la Personne</h3>
                <p className="text-night/80">
                  Agrément officiel : déduisez 50% de vos dépenses d'entretien de jardin (tonte, taille de haies, débroussaillage).
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-heading text-xl text-forest mb-3">Intervention 24h</h3>
                <p className="text-night/80">
                  Basés en Haute-Garonne, nous intervenons rapidement à Tournefeuille pour vos urgences ou interventions programmées.
                </p>
              </div>
              <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-heading text-xl text-forest mb-3">Équipe expérimentée</h3>
                <p className="text-night/80">
                  Guillaume (CAPA) et Clément (grimpeur) forment une équipe soudée avec une expérience terrain solide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos services */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Nos Services d'Élagage à Tournefeuille</h2>
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
                      alt={`${service.title} - Arbovert élagueur professionnel`}
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

        {/* Section Expertise Arboricole */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Expertise Arboricole – Techniques & Certifications</h2>
            <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Chez Arbovert, nous pratiquons un <strong>élagage raisonné</strong> qui respecte la physiologie de l'arbre. Notre technique de <strong>démontage par tronçons</strong> avec rétention systématique permet d'intervenir en toute sécurité, même dans les espaces confinés de Tournefeuille.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Le travail sur le <strong>houppier</strong> (partie supérieure de l'arbre) requiert une expertise particulière. Nous privilégions la <strong>taille sélective</strong> qui préserve la structure naturelle tout en éliminant le bois mort et les branches dangereuses. Cette approche garantit une meilleure cicatrisation et une reprise vigoureuse.
              </p>
              <p className="text-lg text-night/80">
                En tant qu'<strong>arboriste certifié</strong>, Guillaume applique les normes professionnelles en vigueur. Chaque intervention est précédée d'un diagnostic sanitaire complet pour identifier les pathologies éventuelles et adapter notre stratégie de taille. L'objectif : un <strong>élagage sécurisé</strong> qui prolonge la vie de vos arbres.
              </p>
            </div>
          </div>
        </section>

        {/* Section Spécificités locales Tournefeuille */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Élagage à Tournefeuille : Nos Spécificités</h2>
            <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
              <p className="text-lg text-night/80 mb-4">
                Avec ses <strong>28 000 habitants</strong> et son cadre de vie verdoyant, Tournefeuille est l'une des communes les plus arborées de la métropole toulousaine. Cette richesse végétale nécessite un entretien régulier par des professionnels qualifiés.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Notre équipe intervient dans tous les quartiers de Tournefeuille : <strong>La Ramée</strong> avec ses grands jardins pavillonnaires, <strong>Le Petit Train</strong> et ses haies mitoyennes, <strong>Pahin</strong> et ses arbres matures, ou encore <strong>La Paderne</strong> et le secteur du <strong>Lac de la Ramée</strong>.
              </p>
              <p className="text-lg text-night/80 mb-4">
                Nous maîtrisons les essences locales typiques de Tournefeuille : <strong>chênes, platanes, pins parasols, cèdres, lauriers et thuyas</strong>. Les sols argilo-calcaires de la région et l'exposition au vent d'Autan demandent une attention particulière que notre expérience locale nous permet d'anticiper.
              </p>
              <p className="text-lg text-night/80">
                Proche de <strong>Plaisance-du-Touch, Pibrac et Saint-Lys</strong>, Tournefeuille bénéficie de notre connaissance approfondie du territoire ouest-toulousain. Nous intervenons également dans ces <Link href="/elagueur-cugnaux" className="text-forest underline hover:text-forest/80">communes voisines comme Cugnaux</Link> et <Link href="/elagueur-colomiers" className="text-forest underline hover:text-forest/80">Colomiers</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section Services à la Personne */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Avantage Services à la Personne – Crédit d'Impôt 50%</h2>
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
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-6">Zone d'Intervention à Tournefeuille & Environs</h2>
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
                    <Link key={ville} href={`/elagueur-${slug.toLowerCase()}`}>
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
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Questions Fréquentes sur l'Élagage à Tournefeuille</h2>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="rounded-2xl border border-forest/10 bg-beige/50 p-6">
                  <h3 className="font-heading text-xl text-forest mb-3">{faq.question}</h3>
                  <p className="text-night/80">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Réalisations */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-8">Réalisations d'Élagage en Haute-Garonne</h2>
            <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos interventions récentes en Haute-Garonne.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-forest/10 bg-white overflow-hidden shadow-sm">
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
              <div className="rounded-2xl border border-forest/10 bg-white overflow-hidden shadow-sm">
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
              <div className="rounded-2xl border border-forest/10 bg-white overflow-hidden shadow-sm">
                <Image
                  src="/realisations/aeroport-toulouse-apres.jpg"
                  alt="Démontage d'un chêne creux près de l'aéroport Toulouse-Blagnac"
                  width={400}
                  height={300}
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="font-medium text-forest">Démontage d'un chêne creux</p>
                  <p className="text-sm text-night/60">Blagnac - Secteur Aéroport</p>
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
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-beige p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Prêt pour un Élagage à Tournefeuille ?
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Demandez votre devis gratuit sans engagement. Nous analysons votre chantier et planifions une intervention adaptée à vos besoins. Réponse garantie sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                  06 48 76 85 15
                </a>
                <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                  Demander un devis gratuit
                </Link>
              </div>
              <p className="mt-6 text-sm text-night/60">
                Intervention à Tournefeuille, Plaisance-du-Touch, Pibrac, Saint-Lys et toute la métropole toulousaine.
              </p>
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
