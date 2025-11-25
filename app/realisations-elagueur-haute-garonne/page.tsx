import type { Metadata } from 'next';
import Link from 'next/link';
import RealisationCard, { RealisationCardProps } from '../../components/RealisationCard';

export const metadata: Metadata = {
  title: 'Réalisations Arbovert – Élagage & entretien d\'arbres en Haute-Garonne (31)',
  description:
    'Découvrez quelques réalisations d\'Arbovert : élagage, abattage, taille de haies et entretien de jardins en Haute-Garonne. Avant / après, chantiers typiques.'
};

const realisations: RealisationCardProps[] = [
  {
    title: "Abattage préventif d'un pin parasol à proximité d'habitation",
    location: 'Haute-Garonne (31)',
    description:
      'Démontage par démantèlement d’un pin parasol implanté à moins de 3 mètres de l’habitation. L’accumulation permanente d’aiguilles sur la toiture créait un risque majeur d’infiltration et d’obstruction des gouttières. Pour prévenir tout dommage structurel, le client a opté pour une suppression raisonnée de l’arbre. Intervention réalisée avec nacelle pour garantir la sécurité et préserver l’intégrité du bâti.',
    highlights: [
      'Démontage contrôlé sans impact sur la structure',
      'Suppression des risques d’infiltration',
      'Évacuation complète des rémanents'
    ],
    footer: '📍 Haute-Garonne (31) | 🛠️ Abattage d’arbres près des habitations',
    beforeImage: '/realisations/Saint-Julien-sur-Garonne - Avant.jpg',
    afterImage: '/realisations/Saint-Julien-sur-Garonne - Après.jpg'
  },
  {
    title: "Abattage d'un eucalyptus en zone contrainte",
    location: 'Lavelanet-de-Comminges (31)',
    description:
      'Démontage par démantèlement d’un eucalyptus de 20 mètres présentant un port déséquilibré vers le garage voisin. Enchevêtré dans une haie dense et en zone d’évolution restreinte, le chantier a exigé une intervention technique pointue : étude du houppier, axes de chute maîtrisés, et descente par rétention avec évacuation progressive des billons, sans impact sur les structures ni la végétation environnante.',
    highlights: [
      "Démontage maîtrisé malgré l'accès contraint",
      'Sécurisation totale des biens voisins',
      'Évacuation complète des rémanents'
    ],
    footer: "📍 Lavelanet-de-Comminges | 🛠️ Abattage d'arbres en zone difficile d'accès",
    beforeImage: '/realisations/Lavelanet-De-Comminges - Avant.jpg',
    afterImage: '/realisations/Lavelanet-De-Comminges-apres.jpg'
  },
  {
    title: 'Démontage d’un Pin parasol',
    location: 'Colomiers',
    description: '',
    beforeImage: '/realisations/Colomiers - avant.jpg',
    afterImage: '/realisations/Colomiers - après.jpg'
  },
  {
    title: 'Démontage de peuplier en zone multi-contraintes',
    location: 'Haute-Garonne (31)',
    description:
      'Abattage par démantèlement d’un peuplier implanté dans un environnement complexe : à proximité immédiate d’un cabanon et à la jonction de trois haies arbustives. La configuration du site imposait une rétention systématique de chaque section. Intervention réalisée par démontage descendant avec longe de rétention, chaque billon étant guidé et déposé au sol de manière contrôlée pour préserver les structures et la végétation environnante.',
    highlights: [
      'Démantèlement méthodique en zone exiguë',
      'Préservation totale des haies et du cabanon',
      'Évacuation complète des rémanents'
    ],
    footer: "📍 Haute-Garonne (31) | 🛠️ Abattage d'arbres en espace contraint",
    beforeImage: '/realisations/Peuplier - Avant.jpg',
    afterImage: '/realisations/Peuplier - Après.jpg'
  }
];

const reasons = [
  {
    title: 'Travail soigné',
    text: 'Respect des végétaux, finitions propres et protection de vos aménagements.'
  },
  {
    title: 'Sécurité & assurance',
    text: 'Matériel contrôlé, élagueur grimpeur assuré RC pro et décennale.'
  },
  {
    title: 'Intervention locale',
    text: 'Présents sur tout le 31 pour des chantiers rapides et suivis.'
  }
];

export default function RealisationsPage() {
  return (
    <div className="space-y-12">
      <header className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl text-forest">Nos réalisations d'élagage et d'entretien d'espaces verts</h1>
          <p className="mt-4 text-lg text-night/80">
            Quelques chantiers récents menés en Haute-Garonne : élagage, abattage, taille de haies et entretien complet de jardins.
          </p>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {realisations.map((realisation) => (
          <RealisationCard key={realisation.title} {...realisation} />
        ))}
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center md:text-left">
              <h3 className="font-heading text-2xl text-forest">{reason.title}</h3>
              <p className="mt-2 text-night/80">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h3 className="font-heading text-3xl text-forest">Besoin d'un devis pour votre chantier ?</h3>
          <p className="mt-4 text-night/80">
            Parlez-nous de votre projet d'élagage, d'abattage ou d'entretien de jardin et obtenez une réponse rapide.
          </p>
          <Link href="/#contact" className="btn btn-primary mt-6 text-base">
            Demander un devis
          </Link>
        </div>
      </section>
    </div>
  );
}
