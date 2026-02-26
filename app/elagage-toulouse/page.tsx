import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Toulouse | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Toulouse : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
  alternates: {
    canonical: '/elagage-toulouse'
  },
  openGraph: {
    title: 'Élagage à Toulouse | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Toulouse : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-toulouse'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Toulouse",
    description:
      "Taille de formation, taille douce ou sécuritaire : nous adaptons nos interventions à l'essence, à l'âge de l'arbre et aux contraintes de votre environnement pour favoriser une reprise saine.",
    points: [
      'Diagnostic sanitaire et conseils personnalisés',
      'Élagage sur corde ou nacelle selon l\'accès',
      'Gestion des bois et broyage des branches',
      'Nettoyage du chantier en fin d\'intervention'
    ],
    image: '/elagage-services.JPG'
  },
  {
    title: "Abattage et démontage d'arbres",
    description:
      "Quand un arbre devient dangereux ou gêne un projet, nous réalisons un abattage contrôlé, avec ou sans rétention, pour sécuriser les biens alentours.",
    points: [
      'Étude de la zone et balisage du périmètre',
      'Démontage par tronçons avec rétention si besoin',
      'Broyage ou rognage possible sur demande',
      'Valorisation ou évacuation des déchets verts'
    ],
    image: '/abattage-demontage-arbres-services.JPG'
  },
  {
    title: 'Taille de haies et arbustes',
    description:
      'Haies de clôture, massifs ou arbustes : nous redonnons une forme nette et densifions la végétation tout en respectant les périodes de taille.',
    points: [
      'Taille au cordeau ou au gabarit souhaité',
      'Ramassage et évacuation des déchets',
      'Contrats d\'entretien sur l\'année',
      'Conseils sur les essences et périodes optimales'
    ],
    image: '/tailles_de_haies_arbustes.jpg'
  },
  {
    title: 'Tonte de pelouse et entretien de jardins',
    description:
      `Entretenez votre extérieur toute l'année : tonte, débroussaillage, nettoyage et finitions pour des espaces verts toujours accueillants.`,
    points: [
      'Tonte et finition des bordures',
      'Débroussaillage et remise à niveau des terrains',
      'Nettoyage souffleur des allées et terrasses',
      'Interventions ponctuelles ou régulières'
    ],
    image: '/tonte_de_jardin.jpeg'
  }
];

const villesIntervention = ['TOULOUSE', 'MURET', 'CUGNAUX', 'COLOMIERS', 'BLAGNAC', 'TOURNEFEUILLE', 'LABÈGE', 'BALMA'];

const faqData = [
  {
    question: "Quelle est la meilleure période pour élaguer un arbre à Toulouse ?",
    answer: "La période idéale dépend de l'essence. Pour les feuillus (platanes, chênes), la taille hivernale (novembre-mars) est recommandée car l'arbre est en repos végétatif. Pour les résineux (pins parasols) et les persistants (lauriers), le printemps ou l'automne sont préférables. À Toulouse, le climat doux permet des interventions sur une large période, mais nous évitons la montée de sève (mars-avril) et les fortes chaleurs estivales."
  },
  {
    question: "Faut-il une autorisation pour abattre un arbre à Toulouse ?",
    answer: "À Toulouse, l'abattage peut nécessiter une déclaration préalable selon le PLU de Toulouse Métropole : arbres classés, arbres remarquables, ou situés en zone protégée. Dans certains quartiers (Côte Pavée, Saint-Simon, Pouvourville), des règles spécifiques s'appliquent. Nous vous accompagnons dans les démarches administratives avant toute intervention."
  },
  {
    question: "Combien coûte un élagage à Toulouse ?",
    answer: "Le tarif varie selon la hauteur, l'essence, l'accessibilité et le volume de branches. Comptez entre 80€ et 1 000€ par arbre pour un élagage d'entretien, et de 130€ à 750€ pour un abattage (hors évacuation). Les travaux d'entretien de jardin (tonte, taille de haies) ouvrent droit au crédit d'impôt de 50%. Nos devis sont gratuits et détaillés."
  },
  {
    question: "L'élagage est-il déductible des impôts ?",
    answer: "L'élagage et l'abattage ne sont pas éligibles au crédit d'impôt car considérés comme travaux spécialisés. En revanche, la taille de haies, la tonte de pelouse, le débroussaillage et l'entretien courant de jardin bénéficient du crédit d'impôt de 50% dans le cadre des Services à la Personne. Arbovert est agréé SAP et vous fournit l'attestation fiscale annuelle."
  },
  {
    question: "Intervenez-vous en urgence à Toulouse ?",
    answer: "Oui, nous proposons un service d'intervention rapide sous 24h pour les situations d'urgence : arbre menaçant de tomber, branche cassée sur une toiture, arbre fragilisé après une tempête ou le vent d'Autan, danger immédiat pour la sécurité des personnes. Contactez-nous au 06 48 76 85 15."
  },
  {
    question: "Dans quels quartiers de Toulouse intervenez-vous ?",
    answer: "Nous intervenons dans tous les quartiers de Toulouse : Mirail, Fontaine-Lestang, Bellefontaine, Reynerie, Empalot, Minimes, Croix-Daurade, Côte Pavée, Saint-Simon, Pouvourville, Rangueil, Lardenne, Purpan et tous les autres. Nous couvrons aussi l'ensemble de l'agglomération toulousaine."
  },
  {
    question: "Comment se déroule une intervention d'élagage à Toulouse ?",
    answer: "Après un premier contact téléphonique, nous réalisons un diagnostic sur place pour évaluer l'arbre, son environnement et les contraintes d'accès. Nous vous remettons un devis détaillé sous 24h. Le jour de l'intervention, nous balisons la zone, réalisons la taille (sur corde ou nacelle selon l'accès), broyons les branches et nettoyons le chantier avant de partir."
  },
  {
    question: "Quels types d'arbres élaguer à Toulouse et en Haute-Garonne ?",
    answer: "Nous intervenons sur toutes les essences présentes à Toulouse : platanes (très fréquents le long des boulevards et du Canal du Midi), chênes verts et pédonculés, pins parasols et pins maritimes, cyprès, cèdres, tilleuls, érables, ainsi que les fruitiers (cerisiers, pruniers, figuiers). Chaque essence nécessite une technique et une période de taille adaptées."
  },
  {
    question: "Que faites-vous des déchets verts après un élagage ?",
    answer: "Nous broyons les branches sur place lorsque c'est possible, ce qui produit un paillage valorisable pour votre jardin. Les bois plus importants et les troncs sont évacués vers des filières de recyclage. Le brûlage des déchets verts est interdit à Toulouse et dans toute la métropole. Nous laissons un chantier propre et dégagé après chaque intervention."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.arbovert-31.fr/#organization",
      "name": "Arbovert - Élagage Toulouse",
      "description": "Élagage, abattage et entretien de jardins à Toulouse (31000). Élagueur grimpeur certifié CAPA. Services à la Personne agréé.",
      "url": "https://www.arbovert-31.fr/elagage-toulouse",
      "telephone": "+33648768515",
      "email": "contact@arbovert-31.fr",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toulouse",
        "postalCode": "31000",
        "addressRegion": "Occitanie",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6047,
        "longitude": 1.4442
      },
      "areaServed": [
        { "@type": "City", "name": "Toulouse", "postalCode": "31000" },
        { "@type": "City", "name": "Blagnac" },
        { "@type": "City", "name": "Colomiers" },
        { "@type": "City", "name": "Tournefeuille" },
        { "@type": "City", "name": "Balma" }
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
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Nos villes", "item": "https://www.arbovert-31.fr/nos-villes" },
        { "@type": "ListItem", "position": 3, "name": "Élagage Toulouse", "item": "https://www.arbovert-31.fr/elagage-toulouse" }
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

export default function ElagueurToulouse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-0">
      {/* Hero Section - Fond beige avec layout 60/40 */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                Élagage à Toulouse : taille, abattage et entretien de vos arbres
              </h1>
              <p className="text-lg md:text-xl text-night/80 leading-relaxed">
                Arbovert intervient rapidement à Toulouse et dans toute l'agglomération toulousaine pour vos travaux d'élagage, abattage et entretien d'espaces verts.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
              <Image
                src="/elagage-services.JPG"
                alt="Élagueur grimpeur Arbovert en intervention à Toulouse"
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
          <h2 className="section-heading text-center mb-12">Pourquoi choisir Arbovert à Toulouse ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-xl text-forest mb-3">Intervention locale rapide</h3>
              <p className="text-night/80">
                Basés en Haute-Garonne, nous intervenons sous 48h à Toulouse pour vos urgences ou interventions programmées.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-heading text-xl text-forest mb-3">Expertise arboricole certifiée</h3>
              <p className="text-night/80">
                CAPA Travaux Forestiers et expérience militaire. Notre équipe maîtrise toutes les techniques d'élagage adaptées aux essences locales.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-heading text-xl text-forest mb-3">Crédit d'impôt 50%</h3>
              <p className="text-night/80">
                Services à la Personne : déduisez 50% pour l'entretien de jardin (tonte, taille de haies, débroussaillage).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos services */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Nos services d'élagage à Toulouse</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="overflow-hidden rounded-2xl border border-forest/10 bg-beige/60 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-[250px] w-full object-cover"
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
        </div>
      </section>

      {/* Section Zones d'intervention */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-6">Intervention à Toulouse et communes voisines</h2>
          <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
            Nous intervenons rapidement sur Toulouse et l'ensemble de l'agglomération toulousaine pour vos travaux d'élagage et d'entretien d'espaces verts.
          </p>
          <div className="grid gap-8 md:gap-10 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
            {villesIntervention.map((ville) => {
              const isToulouse = ville === 'TOULOUSE';
              const content = (
                <span className={`rounded-full border border-forest/20 bg-beige/70 px-4 py-3 text-center transition-colors ${
                  isToulouse ? 'bg-forest/10 border-forest/40 font-semibold' : ''
                }`}>
                  {ville}
                </span>
              );
              return isToulouse ? (
                <span key={ville}>{content}</span>
              ) : (
                <span key={ville}>{content}</span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section Spécificités locales */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-8">Élagage à Toulouse : nos spécificités</h2>
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <p className="text-lg text-night/80 mb-4">
              Notre équipe qualifiée maîtrise l'ensemble des techniques d'élagage adaptées aux essences locales qui composent le paysage de Toulouse et de la Haute-Garonne : <strong>platanes, chênes, pins parasols, frênes et arbres fruitiers</strong>.
            </p>
            <p className="text-lg text-night/80 mb-4">
              Nous effectuons nos interventions dans le respect des végétaux, des <strong>normes de sécurité</strong> et du <strong>voisinage</strong>, avec un matériel professionnel régulièrement contrôlé. Chaque chantier fait l'objet d'un <strong>diagnostic préalable</strong> pour garantir des travaux adaptés à l'âge, l'essence et l'état sanitaire de vos arbres.
            </p>
            <p className="text-lg text-night/80">
              En milieu urbain toulousain, les contraintes sont multiples : accès restreints, proximité des habitations, lignes électriques aériennes, et espaces verts denses. Nous intervenons dans tous les quartiers : <strong>Mirail, Fontaine-Lestang, Bellefontaine, Reynerie, Empalot, Minimes, Croix-Daurade</strong> et bien d'autres. Les platanes alignés le long des avenues, les pins parasols caractéristiques des jardins toulousains et les haies de lauriers palmes requièrent une attention particulière aux périodes de taille optimales.
            </p>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Toulouse</h2>
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

      {/* Section Liens internes */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-xl text-forest mb-4">Nos services</h3>
              <ul className="space-y-2 text-night/80">
                <li><Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">Tous nos services d'élagage en Haute-Garonne</Link></li>
                <li><Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">Voir nos réalisations</Link></li>
                <li><Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">Crédit d'impôt jardinage 50%</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-forest mb-4">Villes voisines</h3>
              <ul className="space-y-2 text-night/80">
                <li><Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage à Blagnac</Link></li>
                <li><Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage à Colomiers</Link></li>
                <li><Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Élagage à Balma</Link></li>
                <li><Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage à Tournefeuille</Link></li>
                <li><Link href="/elagage-ramonville" className="text-forest underline hover:text-forest/80">Élagage à Ramonville</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-forest mb-4">Autres communes</h3>
              <ul className="space-y-2 text-night/80">
                <li><Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage à Cugnaux</Link></li>
                <li><Link href="/elagage-muret" className="text-forest underline hover:text-forest/80">Élagage à Muret</Link></li>
                <li><Link href="/nos-villes" className="text-forest underline hover:text-forest/80">Toutes nos villes d'intervention</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
              Un projet d'élagage ou d'entretien de jardin à Toulouse ?
            </h2>
            <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit. Nous analysons votre chantier et planifions une intervention adaptée à vos besoins à Toulouse et dans toute l'agglomération toulousaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                📞 06 48 76 85 15
              </a>
              <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                Demander un devis
              </Link>
            </div>
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
