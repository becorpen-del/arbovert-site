import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage à Muret | Arbovert – Élagueur professionnel (31)',
  description:
    'Élagage à Muret : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
  alternates: {
    canonical: '/elagage-muret'
  },
  openGraph: {
    title: 'Élagage à Muret | Arbovert – Élagueur professionnel (31)',
    description: 'Élagage à Muret : taille douce, abattage sécurisé et entretien d\'arbres par des élagueurs grimpeurs certifiés. Devis gratuit sous 24h en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/elagage-muret'
  },
};

const services = [
  {
    title: "Élagage d'arbres à Muret",
    description:
      "Taille raisonnée, élagage sanitaire ou sécuritaire : nous intervenons sur tous types d'arbres en respectant leur physiologie et les contraintes urbaines ou péri-urbaines de Muret.",
    points: [
      'Diagnostic phytosanitaire avant intervention',
      'Techniques d\'élagage sur corde adaptées au milieu urbain',
      'Évacuation et broyage des rémanents',
      'Conseils sur la gestion future de vos arbres'
    ],
    image: '/elagage-services.JPG'
  },
  {
    title: "Abattage et démontage d'arbres",
    description:
      "Arbre dangereux, malade ou gênant un projet d'aménagement : nous réalisons l'abattage en toute sécurité avec démontage par tronçons si nécessaire.",
    points: [
      'Analyse des risques et sécurisation du périmètre',
      'Démontage avec rétention pour zones sensibles',
      'Dessouchage et rognage sur demande',
      'Évacuation complète des déchets végétaux'
    ],
    image: '/abattage-demontage-arbres-services.JPG'
  },
  {
    title: 'Taille de haies et arbustes',
    description:
      'Haies champêtres, taillées ou libres : nous redonnons structure et densité à vos clôtures végétales en respectant les cycles de végétation.',
    points: [
      'Taille géométrique ou naturelle selon vos besoins',
      'Respect des périodes de nidification',
      'Ramassage systématique des déchets',
      'Forfaits annuels d\'entretien disponibles'
    ],
    image: '/tailles_de_haies_arbustes.jpg'
  },
  {
    title: 'Tonte et entretien de jardins',
    description:
      'Tonte, débroussaillage, nettoyage : entretenez vos espaces verts toute l\'année avec un service régulier et soigné.',
    points: [
      'Tonte avec finition des bordures et massifs',
      'Débroussaillage de terrains en friche',
      'Nettoyage au souffleur des allées et cours',
      'Services ponctuels ou contrats d\'entretien annuels'
    ],
    image: '/tonte_de_jardin.jpeg'
  }
];

const villesIntervention = ['TOULOUSE', 'MURET', 'CUGNAUX', 'COLOMIERS', 'BLAGNAC', 'TOURNEFEUILLE', 'LABÈGE', 'BALMA'];

export default function ElagueurMuret() {
  return (
    <div className="space-y-0">
      {/* Hero Section - Fond beige avec layout 60/40 */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[60%_40%] gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
                Élagage à Muret : taille, abattage et entretien de vos arbres
              </h1>
              <p className="text-lg md:text-xl text-night/80 leading-relaxed">
                Arbovert intervient rapidement à Muret et dans toute l'agglomération sud de Toulouse pour vos travaux d'élagage, abattage et entretien d'espaces verts.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-forest/10 shadow-sm">
              <Image
                src="/elagage-services.JPG"
                alt="Élagueur grimpeur Arbovert en intervention à Muret"
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
          <h2 className="section-heading text-center mb-12">Pourquoi choisir Arbovert à Muret ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-xl text-forest mb-3">Proximité et réactivité</h3>
              <p className="text-night/80">
                Basés en Haute-Garonne, nous intervenons sous 48h à Muret pour toutes urgences ou travaux planifiés.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-heading text-xl text-forest mb-3">Qualification professionnelle</h3>
              <p className="text-night/80">
                CAPA Travaux Forestiers, expérience militaire et maîtrise des techniques d'élagage adaptées aux essences de la région.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-beige/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-heading text-xl text-forest mb-3">Crédit d'impôt 50%</h3>
              <p className="text-night/80">
                Agrément Services à la Personne : bénéficiez de 50% de crédit d'impôt sur l'entretien de jardin (hors élagage et abattage).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos services */}
      <section className="py-16 md:py-20 bg-beige">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center mb-12">Nos services d'élagage à Muret</h2>
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
          <h2 className="section-heading text-center mb-6">Intervention à Muret et communes limitrophes</h2>
          <p className="text-center text-lg text-night/80 mb-8 max-w-3xl mx-auto">
            Nous intervenons rapidement à Muret et dans toute l'agglomération toulousaine pour vos travaux d'élagage et d'entretien d'espaces verts.
          </p>
          <div className="grid gap-8 md:gap-10 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
            {villesIntervention.map((ville) => {
              const isMuret = ville === 'MURET';
              const content = (
                <span className={`rounded-full border border-forest/20 bg-beige/70 px-4 py-3 text-center transition-colors ${
                  isMuret ? 'bg-forest/10 border-forest/40 font-semibold' : ''
                }`}>
                  {ville}
                </span>
              );
              return isMuret ? (
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
          <h2 className="section-heading text-center mb-8">Élagage à Muret : contexte local et savoir-faire</h2>
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <p className="text-lg text-night/80 mb-4">
              Située au sud de Toulouse, en bordure de la Garonne, <strong>Muret</strong> présente un patrimoine arboré riche entre zones urbaines, résidentielles et espaces péri-urbains. Notre équipe intervient sur l'ensemble des quartiers : <strong>centre-ville, Leyran, Ox, Saint-Jean, Bouconne</strong> et les lotissements récents.
            </p>
            <p className="text-lg text-night/80 mb-4">
              Les essences locales typiques incluent les <strong>platanes</strong> alignés en centre-bourg, les <strong>chênes pédonculés</strong>, les <strong>frênes communs</strong>, les <strong>pins parasols</strong> et de nombreux <strong>arbres fruitiers</strong> dans les jardins des particuliers. La proximité de la Garonne et les sols alluviaux favorisent un développement vigoureux de la végétation, nécessitant un entretien régulier et adapté.
            </p>
            <p className="text-lg text-night/80">
              Nous réalisons chaque intervention dans le respect des <strong>normes de sécurité</strong>, du <strong>voisinage</strong> et du <strong>patrimoine végétal</strong>, avec un diagnostic phytosanitaire préalable et un matériel professionnel certifié. Nos interventions sont adaptées aux contraintes urbaines de Muret : accès restreints, proximité des habitations, lignes électriques aériennes.
            </p>
          </div>
        </div>
      </section>

      {/* Section Liens internes */}
      <section className="py-16 md:py-20 bg-white">
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
                <li><Link href="/elagage-cugnaux" className="text-forest underline hover:text-forest/80">Élagage à Cugnaux</Link></li>
                <li><Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Élagage à Toulouse</Link></li>
                <li><Link href="/elagage-tournefeuille" className="text-forest underline hover:text-forest/80">Élagage à Tournefeuille</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-forest mb-4">Autres communes</h3>
              <ul className="space-y-2 text-night/80">
                <li><Link href="/elagage-colomiers" className="text-forest underline hover:text-forest/80">Élagage à Colomiers</Link></li>
                <li><Link href="/elagage-blagnac" className="text-forest underline hover:text-forest/80">Élagage à Blagnac</Link></li>
                <li><Link href="/elagage-balma" className="text-forest underline hover:text-forest/80">Élagage à Balma</Link></li>
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
              Un projet d'élagage ou d'entretien de jardin à Muret ?
            </h2>
            <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit. Nous analysons votre chantier et planifions une intervention rapide et adaptée à vos besoins.
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

