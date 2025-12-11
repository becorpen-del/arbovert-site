import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Services d'élagage, abattage et entretien d'espaces verts – Arbovert Haute-Garonne`,
  description:
    `Découvrez les services Arbovert : élagage d'arbres, abattage, taille de haies, tonte de pelouse et entretien de jardins en Haute-Garonne (31). Devis gratuit.`
};

const serviceSections = [
  {
    title: "Élagage d'arbres en Haute-Garonne",
    description:
      "Taille de formation, taille douce ou sécuritaire : nous adaptons nos interventions à l'essence, à l'âge de l'arbre et aux contraintes de votre environnement pour favoriser une reprise saine.",
    points: [
      'Diagnostic sanitaire et conseils personnalisés',
      `Élagage sur corde ou nacelle selon l'accès`,
      'Gestion des bois et broyage des branches',
      'Nettoyage du chantier en fin d’intervention'
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
      `Contrats d'entretien sur l'année`,
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

const serviceShots = [
  {
    title: 'Démontage en rétention',
    caption: 'Tronçons guidés en zone sensible pour sécuriser les biens voisins.',
    image: '/abattage_avec_rentention_services.JPG'
  },
  {
    title: 'Taille en nacelle',
    caption: "Travail précis et sécurisé pour éclaircir sans fragiliser l'arbre.",
    image: '/taille-en-nacelle.JPG'
  }
];

const gearShots = [
  {
    title: 'EPI & ancrages',
    image: '/epi-ancrage.webp'
  },
  {
    title: 'Broyage & évacuation',
    image: 'https://picsum.photos/seed/broyeur-vert/460/320'
  },
  {
    title: 'Rétention sur corde',
    image: '/rétention-sur-corde.png'
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <header className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl text-forest">Nos services d'élagage & d'entretien d'espaces verts</h1>
          <p className="mt-4 text-lg text-night/80">
            Solutions complètes pour sécuriser vos arbres, embellir vos haies et entretenir vos jardins partout en Haute-Garonne (31).
          </p>
        </div>
      </header>

      <section className="space-y-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="section-heading mb-0">Nos interventions en images</h2>
            <p className="text-night/70">Exemples d’élagage et d’abattage sécurisés sur le terrain.</p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {serviceShots.map((shot) => (
              <article key={shot.title} className="rounded-2xl border border-forest/10 bg-beige/60 p-4">
                <div className="overflow-hidden rounded-xl border border-forest/10 bg-white">
                  <Image
                    src={shot.image}
                    alt={shot.title}
                    width={760}
                    height={480}
                    className="h-[292px] w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 font-heading text-2xl text-forest">{shot.title}</h3>
                <p className="text-night/80">{shot.caption}</p>
              </article>
            ))}
          </div>
        </div>

        {serviceSections.map((service) => (
          <article
            key={service.title}
            className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-heading text-3xl text-forest">{service.title}</h2>
                  {(service.title === 'Taille de haies et arbustes' || service.title === 'Tonte de pelouse et entretien de jardins') && (
                    <span className="rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf border border-leaf/30">
                      Crédit d'impôt 50%
                    </span>
                  )}
                </div>
                <p className="mt-4 text-night/80">{service.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-night/80">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-forest/10 bg-beige/60">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={780}
                  height={520}
                  className="h-[324px] w-full object-cover"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-4xl rounded-3xl bg-beige p-8 text-night">
        <p className="font-semibold">Intervention en Haute-Garonne :</p>
        <p className="mt-2 text-night/80">Toulouse, Muret, Cugnaux, Colomiers, Blagnac et communes voisines.</p>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {gearShots.map((shot) => (
            <article key={shot.title} className="rounded-2xl border border-forest/10 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-forest/10 bg-beige/60">
                <Image src={shot.image} alt={shot.title} width={460} height={320} className="h-[244px] w-full object-cover" />
              </div>
              <h3 className="mt-3 font-heading text-xl text-forest">{shot.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h3 className="font-heading text-3xl text-forest">Besoin d'un élagueur en Haute-Garonne ?</h3>
          <p className="mt-4 text-night/80">
            Contactez-nous pour un devis gratuit, nous analysons votre chantier et planifions une intervention rapide.
          </p>
          <Link href="/#contact" className="btn btn-primary mt-6 text-base">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
