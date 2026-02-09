import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nos zones d\'intervention - Élagueur Haute-Garonne | Arbovert',
  description:
    'Découvrez toutes nos zones d\'intervention en Haute-Garonne : Cugnaux, Muret, Toulouse, Tournefeuille, Blagnac, Balma et plus encore.',
  alternates: {
    canonical: '/nos-villes'
  },
  openGraph: {
    title: 'Nos zones d\'intervention - Élagueur Haute-Garonne | Arbovert',
    description: 'Découvrez toutes nos zones d\'intervention en Haute-Garonne : Cugnaux, Muret, Toulouse, Tournefeuille, Blagnac et plus encore.',
    type: 'website',
    locale: 'fr_FR',
    url: '/nos-villes'
  },
};

const villes = [
  {
    nom: 'Cugnaux',
    slug: 'elagage-cugnaux',
    disponible: true,
    habitants: '18 000',
    codePostal: '31270',
    description: 'Intervention rapide dans tous les quartiers : Bazardens, Rachety, La Françoy...',
  },
  {
    nom: 'Muret',
    slug: 'elagage-muret',
    disponible: true,
    habitants: '25 000',
    codePostal: '31600',
    description: 'Élagage et abattage pour particuliers et professionnels',
  },
  {
    nom: 'Toulouse',
    slug: 'elagage-toulouse',
    disponible: true,
    habitants: '500 000',
    codePostal: '31000',
    description: 'Interventions secteur sud-ouest : Mirail, Fontaine-Lestang...',
  },
  {
    nom: 'Tournefeuille',
    slug: 'elagage-tournefeuille',
    disponible: true,
    habitants: '28 000',
    codePostal: '31170',
    description: 'Intervention dans tous les quartiers : La Ramée, Le Petit Train, Pahin...',
  },
  {
    nom: 'Blagnac',
    slug: 'elagage-blagnac',
    disponible: true,
    habitants: '27 600',
    codePostal: '31700',
    description: 'Interventions dans tous les quartiers : Centre, Saoulous, Grand Noble, Grenade, Compans...',
  },
  {
    nom: 'Colomiers',
    slug: 'elagage-colomiers',
    disponible: true,
    habitants: '40 000',
    codePostal: '31770',
    description: 'Intervention dans tous les quartiers : En Jacca, Perget, Ramiers...',
  },
  {
    nom: 'Labège',
    slug: 'elagage-labege',
    disponible: false,
    habitants: '4 000',
    codePostal: '31670',
    description: 'Interventions ponctuelles et entretien régulier',
  },
  {
    nom: 'Balma',
    slug: 'elagage-balma',
    disponible: true,
    habitants: '15 000',
    codePostal: '31130',
    description: 'Intervention dans tous les quartiers : Centre-ville, Lasbordes, Candelle, Vidailhan, Gramont...',
  },
];

export default function NosVilles() {
  return (
    <div className="space-y-12">
      <header className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
            Nos zones d'intervention en Haute-Garonne
          </h1>
          <p className="text-xl text-night/80 max-w-3xl mx-auto">
            Arbovert intervient dans toute la Haute-Garonne pour vos travaux d'élagage, d'abattage 
            et d'entretien d'espaces verts. Découvrez les villes où nous intervenons régulièrement.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villes.map((ville) => (
              <div
                key={ville.slug}
                className={`bg-white p-6 rounded-3xl border border-forest/10 shadow-sm transition-all hover:shadow-md ${
                  !ville.disponible ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-heading text-2xl text-forest mb-1">Élagueur {ville.nom}</h2>
                    <p className="text-sm text-night/60">{ville.codePostal} • {ville.habitants} habitants</p>
                  </div>
                  {ville.disponible && (
                    <span className="rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf border border-leaf/30">
                      Disponible
                    </span>
                  )}
                </div>
                <p className="text-night/80 mb-6">{ville.description}</p>

                {ville.disponible ? (
                  <Link
                    href={`/${ville.slug}`}
                    className="inline-block bg-forest text-white px-6 py-3 rounded-md hover:bg-forest/90 transition-colors font-medium"
                  >
                    Voir la page
                  </Link>
                ) : (
                  <div className="text-forest font-medium text-sm">
                    Page bientôt disponible
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-leaf/20 bg-leaf/10 p-8 shadow-sm">
          <h2 className="font-heading text-3xl text-forest mb-4">Votre ville n'est pas listée ?</h2>
          <p className="text-lg text-night/80 mb-6">
            Nous intervenons également dans de nombreuses autres communes de Haute-Garonne et des 
            départements limitrophes. N'hésitez pas à nous contacter pour vérifier si nous pouvons 
            intervenir chez vous.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="btn btn-primary"
            >
              Demander un devis
            </Link>
            <a
              href="tel:0648768515"
              className="btn border border-forest text-forest hover:bg-forest hover:text-white"
            >
              📞 06 48 76 85 15
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading mb-6">Pourquoi choisir Arbovert ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-2xl mb-2">⚡</p>
              <h3 className="font-heading text-xl text-forest mb-2">Intervention rapide</h3>
              <p className="text-sm text-night/70">
                Devis sous 48h et intervention programmée rapidement selon vos disponibilités
              </p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-2xl mb-2">🌳</p>
              <h3 className="font-heading text-xl text-forest mb-2">Expertise locale</h3>
              <p className="text-sm text-night/70">
                Connaissance des essences locales et des contraintes spécifiques à chaque zone
              </p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-2xl mb-2">✅</p>
              <h3 className="font-heading text-xl text-forest mb-2">Travail soigné</h3>
              <p className="text-sm text-night/70">
                Chantier propre, déchets évacués, respect de votre environnement
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



