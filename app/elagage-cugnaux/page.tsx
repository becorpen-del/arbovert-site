import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Cugnaux | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Cugnaux : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
  alternates: {
    canonical: '/elagage-cugnaux'
  },
  openGraph: {
    title: 'Élagage à Cugnaux | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Cugnaux : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-cugnaux'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Cugnaux",
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

export default function ElagueurCugnaux() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Fond beige avec layout 60/40 */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                Élagage à Cugnaux : taille, abattage et entretien de vos arbres
              </h1>
              <p className="text-lg md:text-xl text-night/80 leading-relaxed">
                Arbovert intervient rapidement à Cugnaux et dans toute l'agglomération toulousaine pour vos travaux d'élagage, abattage et entretien d'espaces verts.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
              <Image
                src="/elagage-services.JPG"
                alt="Élagueur grimpeur Arbovert en intervention à Cugnaux"
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
          <h2 className="section-heading text-center mb-12">Pourquoi choisir Arbovert à Cugnaux ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-xl text-forest mb-3">Intervention locale rapide</h3>
              <p className="text-night/80">
                Basés en Haute-Garonne, nous intervenons sous 48h à Cugnaux pour vos urgences ou interventions programmées.
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
          <h2 className="section-heading text-center mb-12">Nos services d'élagage à Cugnaux</h2>
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
          <h2 className="section-heading text-center mb-6">Intervention à Cugnaux et communes voisines</h2>
          <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
            Nous intervenons rapidement sur Cugnaux et l'ensemble de l'agglomération toulousaine pour vos travaux d'élagage et d'entretien d'espaces verts.
          </p>
          <div className="grid gap-8 md:gap-10 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
            {villesIntervention.map((ville) => {
              const isCugnaux = ville === 'CUGNAUX';
              const content = (
                <span className={`rounded-full border border-forest/20 bg-beige/70 px-4 py-3 text-center transition-colors ${
                  isCugnaux ? 'bg-forest/10 border-forest/40 font-semibold' : ''
                }`}>
                  {ville}
                </span>
              );
              return isCugnaux ? (
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
          <h2 className="section-heading text-center mb-8">Élagage à Cugnaux : nos spécificités</h2>
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <p className="text-lg text-night/80 mb-4">
              Notre équipe qualifiée maîtrise l'ensemble des techniques d'élagage adaptées aux essences locales qui composent le paysage de Cugnaux et de la Haute-Garonne : <strong>chênes, platanes, pins, frênes et arbres fruitiers</strong>.
            </p>
            <p className="text-lg text-night/80 mb-4">
              Nous effectuons nos interventions dans le respect des végétaux, des <strong>normes de sécurité</strong> et du <strong>voisinage</strong>, avec un matériel professionnel régulièrement contrôlé. Chaque chantier fait l'objet d'un <strong>diagnostic préalable</strong> pour garantir des travaux adaptés à l'âge, l'essence et l'état sanitaire de vos arbres.
            </p>
            <p className="text-lg text-night/80">
              La proximité de la Garonne et le climat toulousain favorisent le développement rapide de la végétation, nécessitant un entretien régulier. Les platanes alignés en bord de voirie, les pins parasols caractéristiques de nos jardins et les haies de lauriers palmes requièrent une attention particulière aux périodes de taille optimales.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
              Un projet d'élagage ou d'entretien de jardin ?
            </h2>
            <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit. Nous analysons votre chantier et planifions une intervention adaptée à vos besoins à Cugnaux et dans toute l'agglomération toulousaine.
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
  );
}
