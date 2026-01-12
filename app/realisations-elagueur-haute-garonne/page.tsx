import type { Metadata } from 'next';
import Link from 'next/link';
import RealisationCard, { RealisationCardProps } from '../../components/RealisationCard';

export const metadata: Metadata = {
  title: `Réalisations Arbovert – Élagage & entretien d'arbres en Haute-Garonne (31)`,
  description:
    `Découvrez quelques réalisations d'Arbovert : élagage, abattage, taille de haies et entretien de jardins en Haute-Garonne. Avant / après, chantiers typiques.`,
  alternates: {
    canonical: '/realisations-elagueur-haute-garonne'
  },
  openGraph: {
    title: `Réalisations Arbovert – Élagage & entretien d'arbres en Haute-Garonne (31)`,
    description: `Découvrez quelques réalisations d'Arbovert : élagage, abattage, taille de haies et entretien de jardins en Haute-Garonne. Avant / après, chantiers typiques.`,
    type: 'website',
    locale: 'fr_FR',
    url: '/realisations-elagueur-haute-garonne'
  },
};

const realisations: RealisationCardProps[] = [
  {
    title: "Démontage d'un peuplier malade",
    location: 'LE FAUGA (31)',
    description:
      `Intervention d'abattage contrôlé sur un peuplier affaibli présentant des signes de dépérissement avancé. L'arbre, situé au-dessus d'un cabanon, occasionnait des chutes de branches régulières et représentait un risque pour le voisinage. Le démontage a été réalisé par tronçons avec rétention des charges, technique indispensable pour préserver les structures environnantes. Travail en grimpe avec accès sur corde, évacuation complète des rémanents et sécurisation du site.`,
    highlights: [
      'Démontage par tronçons avec rétention des charges',
      'Préservation des structures environnantes',
      'Évacuation complète et sécurisation du site'
    ],
    footer: `📍 Le Fauga | 🛠️ Abattage & démontage d'arbres malades`,
    beforeImage: '/realisations/fauga-avant.jpg',
    afterImage: '/realisations/fauga-apres.jpg'
  },
  {
    title: "Taille d'éclaircissement sur deux pins parasol",
    location: 'LACROIX-FALGARDE (31)',
    description:
      `Intervention sur deux pins parasol n'ayant jamais fait l'objet d'un élagage. L'objectif : alléger la structure, sécuriser les charpentières et favoriser la pénétration lumineuse dans le houppier pour améliorer la vitalité des sujets. Taille douce réalisée dans le respect de l'architecture naturelle des arbres. Suppression du bois mort, éclaircissement raisonné et conservation de la silhouette caractéristique du pin parasol. Travail soigné avec évacuation des déchets verts.`,
    highlights: [
      `Taille douce respectueuse de l'architecture naturelle`,
      'Amélioration de la vitalité et sécurisation des charpentières',
      'Conservation de la silhouette caractéristique'
    ],
    footer: `📍 Lacroix-Falgarde | 🛠️ Élagage & taille d'arbres`,
    beforeImage: '/realisations/lacroix-avant.jpg',
    afterImage: '/realisations/lacroix-apres.jpg'
  },
  {
    title: "Démontage d'un chêne creux près de l'aéroport",
    location: 'BLAGNAC — SECTEUR AÉROPORT TOULOUSE-BLAGNAC',
    description:
      `Intervention en sous-traitance pour le démontage d'un vieux chêne situé à proximité des locaux de Météo France, sur le site de l'aéroport Toulouse-Blagnac. L'arbre, totalement creux, abritait successivement une colonie d'abeilles puis un nid de frelons asiatiques. Après neutralisation du nid par une entreprise spécialisée, nous avons procédé au démontage complet par tronçons. Chaque coupe a été sécurisée pour garantir l'intégrité des bâtiments et infrastructures environnantes.`,
    highlights: [
      'Démontage sécurisé en zone sensible',
      'Protection des infrastructures aéroportuaires',
      'Intervention coordonnée avec spécialistes'
    ],
    footer: `📍 Blagnac - Aéroport | 🛠️ Abattage & démontage d'arbres dangereux`,
    beforeImage: '/realisations/aeroport-toulouse-avant.jpg',
    afterImage: '/realisations/aeroport-toulouse-apres.jpg'
  },
  {
    title: "Démontage d'un noyer en zone sensible",
    location: 'SAINT-JULIEN-SUR-GARONNE (31)',
    description:
      `Intervention délicate pour sécuriser un noyer de 12m menaçant de s'effondrer dans la Garonne. Grâce à un démontage par rétention et un système d'ancrage adapté, l'arbre a été retiré sans impact sur la berge ni le cours d'eau.`,
    highlights: [
      'Démontage maîtrisé en zone à risque',
      `Protection des berges et de l'écosystème`,
      'Évacuation complète des déchets verts'
    ],
    footer: `📍 Saint-Julien-sur-Garonne | 🛠️ Abattage & démontage d'arbres dangereux`,
    beforeImage: '/realisations/Saint-Julien-sur-Garonne - Avant.jpg',
    afterImage: '/realisations/saint-julien-sur-garonne-apres.jpg'
  },
  {
    title: "Abattage d'un eucalyptus en zone contrainte",
    location: 'Lavelanet-de-Comminges (31)',
    description:
      `Démontage par démantèlement d'un eucalyptus de 20 mètres présentant un port déséquilibré vers le garage voisin. Enchevêtré dans une haie dense et en zone d'évolution restreinte, le chantier a exigé une intervention technique pointue : étude du houppier, axes de chute maîtrisés, et descente par rétention avec évacuation progressive des billons, sans impact sur les structures ni la végétation environnante.`,
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
    title: "Démontage d'un Pin parasol",
    location: 'Haute-Garonne (31)',
    description:
      "Abattage préventif d'un pin parasol implanté à moins de 3 mètres de l'habitation. L'accumulation chronique d'aiguilles sur la couverture engendrait un risque avéré d'infiltration par obstruction des évacuations pluviales et rétention d'humidité. Face à ce risque structurel pour le bâti, le client a opté pour une suppression raisonnée de l'arbre. Intervention réalisée par démontage descendant avec rétention systématique des billons pour préserver l'intégrité de la toiture et des façades.",
    highlights: [
      'Démantèlement contrôlé sans impact sur la structure',
      "Suppression définitive des risques d'infiltration",
      'Évacuation complète des rémanents et aiguilles'
    ],
    footer: "📍 Haute-Garonne (31) | 🛠️ Abattage d'arbres dangereux près des habitations",
    beforeImage: '/realisations/Colomiers - avant.jpg',
    afterImage: '/realisations/abattage_preventif_pin_parasaol.JPG'
  },
  {
    title: 'Démontage de peuplier en zone multi-contraintes',
    location: 'Haute-Garonne (31)',
    description:
      `Abattage par démantèlement d'un peuplier implanté dans un environnement complexe : à proximité immédiate d'un cabanon et à la jonction de trois haies arbustives. La configuration du site imposait une rétention systématique de chaque section. Intervention réalisée par démontage descendant avec longe de rétention, chaque billon étant guidé et déposé au sol de manière contrôlée pour préserver les structures et la végétation environnante.`,
    highlights: [
      'Démantèlement méthodique en zone exiguë',
      'Préservation totale des haies et du cabanon',
      'Évacuation complète des rémanents'
    ],
    footer: "📍 Haute-Garonne (31) | 🛠️ Abattage d'arbres en espace contraint",
    beforeImage: '/realisations/Peuplier - Avant.jpg',
    afterImage: '/realisations/Peuplier - Après.jpg'
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

      <section className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 md:items-stretch">
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
