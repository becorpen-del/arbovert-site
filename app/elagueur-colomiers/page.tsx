import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagueur Colomiers (31770) – Arbovert | Élagage, abattage & entretien',
  description:
    'Élagueur grimpeur à Colomiers (31770) : élagage, abattage, taille de haies et entretien de jardins. Intervention rapide dans tous les quartiers. Devis gratuit.',
  alternates: {
    canonical: '/elagueur-colomiers'
  },
  openGraph: {
    title: 'Élagueur Colomiers (31770) – Arbovert',
    description: 'Élagueur grimpeur professionnel à Colomiers. Intervention rapide pour vos travaux d\'élagage et d\'entretien d\'espaces verts.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagueur-colomiers'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Colomiers",
    description:
      "Taille de formation, taille douce ou sécuritaire : nous adaptons nos interventions à l'essence, à l'âge de l'arbre et aux contraintes de votre environnement columérin pour favoriser une reprise saine.",
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
      "Quand un arbre devient dangereux ou gêne un projet, nous réalisons un abattage contrôlé, avec ou sans rétention, pour sécuriser les biens alentours dans les quartiers de Colomiers.",
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
      'Haies de lauriers, thuyas ou massifs : nous redonnons une forme nette et densifions la végétation tout en respectant les périodes de taille, particulièrement adaptées au climat columérin.',
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
      `Entretenez votre extérieur toute l'année à Colomiers : tonte, débroussaillage, nettoyage et finitions pour des espaces verts toujours accueillants.`,
    points: [
      'Tonte et finition des bordures',
      'Débroussaillage et remise à niveau des terrains',
      'Nettoyage souffleur des allées et terrasses',
      'Interventions ponctuelles ou régulières'
    ],
    image: '/tonte_de_jardin.jpeg'
  }
];

const villesIntervention = ['COLOMIERS', 'TOULOUSE', 'BLAGNAC', 'TOURNEFEUILLE', 'PIBRAC', 'CORNEBARRIEU', 'LÉGUEVIN', 'PLAISANCE-DU-TOUCH'];

export default function ElagueurColomiers() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Fond beige avec layout 60/40 */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                Élagueur Colomiers (31770)
              </h1>
              <p className="text-lg md:text-xl text-night/80 leading-relaxed">
                Arbovert intervient rapidement à Colomiers et dans toute la métropole toulousaine pour vos travaux d'élagage, abattage et entretien d'espaces verts. 2ème ville de la métropole avec ses 40 000 habitants, Colomiers bénéficie de notre expertise locale.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
              <Image
                src="/elagage-services.JPG"
                alt="Élagueur grimpeur Arbovert en intervention à Colomiers"
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
          <h2 className="section-heading text-center mb-12">Pourquoi choisir Arbovert à Colomiers ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-xl text-forest mb-3">Intervention locale rapide</h3>
              <p className="text-night/80">
                Basés en Haute-Garonne, nous intervenons sous 48h à Colomiers pour vos urgences ou interventions programmées dans tous les quartiers.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-heading text-xl text-forest mb-3">Expertise arboricole certifiée</h3>
              <p className="text-night/80">
                CAPA Travaux Forestiers et expérience militaire. Notre équipe maîtrise toutes les techniques d'élagage adaptées aux essences columérines.
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
          <h2 className="section-heading text-center mb-12">Nos services d'élagage à Colomiers</h2>
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
          <h2 className="section-heading text-center mb-6">Intervention à Colomiers et communes voisines</h2>
          <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
            Nous intervenons rapidement sur Colomiers et les communes limitrophes pour vos travaux d'élagage et d'entretien d'espaces verts.
          </p>
          <div className="grid gap-8 md:gap-10 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
            {villesIntervention.map((ville) => {
              const isColomiers = ville === 'COLOMIERS';
              const content = (
                <span className={`rounded-full border border-forest/20 bg-beige/70 px-4 py-3 text-center transition-colors ${
                  isColomiers ? 'bg-forest/10 border-forest/40 font-semibold' : ''
                }`}>
                  {ville}
                </span>
              );
              return isColomiers ? (
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
          <h2 className="section-heading text-center mb-8">Élagage à Colomiers : nos spécificités</h2>
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <p className="text-lg text-night/80 mb-4">
              Avec ses <strong>40 000 habitants</strong> et ses nombreux espaces verts, Colomiers est reconnue comme l'une des villes les plus arborées de la métropole toulousaine. Cette richesse végétale nécessite un entretien régulier et professionnel.
            </p>
            <p className="text-lg text-night/80 mb-4">
              Notre équipe qualifiée maîtrise l'ensemble des techniques d'élagage adaptées aux essences locales : <strong>platanes, chênes, pins parasols, lauriers et thuyas</strong>. Les arbres d'alignement le long du boulevard des Écoles ou de l'avenue de l'Europe demandent une surveillance constante pour garantir la sécurité des riverains.
            </p>
            <p className="text-lg text-night/80 mb-4">
              Nous intervenons dans tous les quartiers de Colomiers : <strong>En Jacca</strong> (centre-ville historique avec platanes et chênes centenaires), <strong>Perget</strong> (zone pavillonnaire aux haies de lauriers et thuyas), <strong>Ramiers</strong> (pins parasols près de la zone commerciale) et le secteur du <strong>Lycée International</strong> (jeunes plantations nécessitant des tailles de formation).
            </p>
            <p className="text-lg text-night/80">
              Notre connaissance du terrain columérin nous permet d'adapter nos interventions aux spécificités locales : proximité des lignes électriques, sols argileux typiques de la région et exposition au vent d'Autan qui fragilise certaines essences.
            </p>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Questions fréquentes sur l'élagage à Colomiers</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-forest/10 bg-beige/50 p-6">
              <h3 className="font-heading text-xl text-forest mb-3">Ai-je besoin d'une autorisation pour élaguer à Colomiers ?</h3>
              <p className="text-night/80">
                À Colomiers, l'élagage d'arbres en propriété privée ne nécessite généralement pas d'autorisation, sauf pour les arbres remarquables ou classés. En revanche, si votre arbre est en limite de propriété, vous devez respecter les distances légales (2m pour les arbres de plus de 2m de haut). L'abattage peut nécessiter une déclaration préalable en mairie selon le PLU. Nous vous accompagnons dans ces démarches.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/50 p-6">
              <h3 className="font-heading text-xl text-forest mb-3">Quelle est la meilleure période pour élaguer à Colomiers ?</h3>
              <p className="text-night/80">
                Le climat de Colomiers permet d'élaguer presque toute l'année. Les périodes optimales sont l'hiver (novembre-mars) pour les arbres caducs et l'été après la floraison pour les persistants. Évitez les périodes de montée de sève (mars-avril) et de forte chaleur (juillet-août). Notre équipe vous conseille selon l'essence et l'état sanitaire de vos arbres.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/50 p-6">
              <h3 className="font-heading text-xl text-forest mb-3">Combien coûte un élagage à Colomiers ?</h3>
              <p className="text-night/80">
                Le tarif dépend de nombreux facteurs : hauteur de l'arbre, essence, accessibilité, volume de branches à couper. Comptez entre 150€ et 500€ pour un élagage standard, et de 500€ à 1500€ pour un abattage selon la difficulté. Nos devis sont gratuits et détaillés, et nos interventions d'entretien de jardin ouvrent droit au crédit d'impôt de 50%.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/50 p-6">
              <h3 className="font-heading text-xl text-forest mb-3">Intervenez-vous en urgence à Colomiers ?</h3>
              <p className="text-night/80">
                Oui, nous proposons un service d'intervention rapide pour les situations d'urgence : arbre menaçant de tomber, branche cassée sur une toiture, danger immédiat pour la sécurité. Contactez-nous et nous évaluons la situation sous 24h pour planifier une intervention sécurisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
              Un projet d'élagage ou d'entretien de jardin à Colomiers ?
            </h2>
            <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit. Nous analysons votre chantier et planifions une intervention adaptée à vos besoins à Colomiers et dans toute la métropole toulousaine.
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
      <div className="py-16 md:py-20 bg-white">
        <ContactForm />
      </div>
    </div>
  );
}
