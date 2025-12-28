import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagueur Cugnaux (31270) – Arbovert | Élagage, abattage & entretien',
  description:
    'Élagueur grimpeur à Cugnaux (31) : élagage, abattage, taille de haies et entretien de jardins. Intervention rapide dans tous les quartiers. Devis gratuit.',
  openGraph: {
    title: 'Élagueur Cugnaux (31270) – Arbovert',
    description: 'Élagueur grimpeur professionnel à Cugnaux. Intervention rapide pour vos travaux d\'élagage et d\'entretien d\'espaces verts.',
    type: 'website',
    locale: 'fr_FR',
  },
};

const quartiers = [
  { nom: 'Bazardens', detail: 'Quartier résidentiel avec nombreux espaces verts' },
  { nom: 'Rachety', detail: 'Zone pavillonnaire nécessitant des interventions régulières' },
  { nom: 'La Françoy', detail: 'Secteur avec haies et arbres d\'ornement' },
  { nom: 'Centre-ville', detail: 'Interventions en milieu urbain avec contraintes de sécurité' },
];

const services = [
  {
    title: 'Élagage à Cugnaux',
    description: 'Taille douce, taille de formation ou élagage sécuritaire selon vos besoins et l\'essence de vos arbres.',
    image: '/elagage-services.JPG',
  },
  {
    title: 'Abattage et démontage',
    description: 'Abattage contrôlé avec rétention si nécessaire pour sécuriser les biens alentours à Cugnaux.',
    image: '/abattage-demontage-arbres-services.JPG',
  },
  {
    title: 'Taille de haies',
    description: 'Remise en forme et entretien régulier de vos haies dans tous les quartiers de Cugnaux.',
    image: '/tailles_de_haies_arbustes.jpg',
  },
  {
    title: 'Entretien de jardins',
    description: 'Tonte, débroussaillage et nettoyage pour des espaces verts toujours accueillants.',
    image: '/tonte_de_jardin.jpeg',
  },
];

const realisations = [
  {
    avant: '/realisations/colomiers-avant.jpg',
    apres: '/realisations/colomiers-apres.jpg',
    titre: 'Élagage sécuritaire',
    description: 'Intervention sur pin parasol en zone résidentielle',
  },
  {
    avant: '/realisations/fauga-avant.jpg',
    apres: '/realisations/fauga-apres.jpg',
    titre: 'Taille de formation',
    description: 'Remise en forme d\'arbres d\'ornement',
  },
];

export default function ElagueurCugnaux() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="section">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-forest/10 bg-white shadow-sm">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/bandeau-accueil.JPG"
              alt="Élagueur grimpeur Arbovert en intervention à Cugnaux"
              fill
              className="object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-night/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">
                Élagueur Cugnaux (31270)
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-4">
                Arbovert est une entreprise locale basée en Haute-Garonne, spécialisée dans l'élagage, l'abattage, la taille de haies et l'entretien complet de jardins. Implantés au cœur du territoire, nous intervenons rapidement sur Cugnaux et l'ensemble de l'agglomération toulousaine.
              </p>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mb-4">
                Forts de plusieurs années d'expérience en arboriculture, nous accompagnons particuliers et professionnels dans l'entretien de leurs espaces verts avec rigueur et professionnalisme. Notre équipe qualifiée maîtrise l'ensemble des techniques d'élagage adaptées aux essences locales : chênes, platanes, pins, frênes et arbres fruitiers qui composent le paysage de notre région.
              </p>
              <p className="text-base md:text-lg text-white/90 max-w-2xl">
                Nous effectuons nos interventions dans le respect des végétaux, des normes de sécurité et du voisinage, avec un matériel professionnel régulièrement contrôlé. Chaque chantier fait l'objet d'un diagnostic préalable pour garantir des travaux adaptés à l'âge, l'essence et l'état sanitaire de vos arbres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Arbovert, votre élagueur à Cugnaux</h2>
          <p className="text-lg text-night/80">
            Basés en Haute-Garonne, nous intervenons régulièrement à Cugnaux pour accompagner particuliers, 
            syndics et professionnels dans l'entretien de leurs espaces verts. Que ce soit pour un élagage 
            préventif, un abattage sécurisé ou un entretien régulier, nous adaptons nos interventions à vos 
            besoins et contraintes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">⚡</p>
              <p className="mt-2 font-semibold text-night">Intervention rapide</p>
              <p className="mt-1 text-sm text-night/70">Devis sous 48h, intervention sous 1 semaine</p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">🌳</p>
              <p className="mt-2 font-semibold text-night">Expertise locale</p>
              <p className="mt-1 text-sm text-night/70">Connaissance des essences et contraintes locales</p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">✅</p>
              <p className="mt-2 font-semibold text-night">Travail soigné</p>
              <p className="mt-1 text-sm text-night/70">Chantier propre, déchets évacués</p>
            </div>
          </div>
        </div>
      </section>

      {/* Votre élagueur de proximité */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Votre élagueur de proximité à Cugnaux et ses environs</h2>
          <p className="text-lg text-night/80 mb-4">
            Située aux portes sud-ouest de Toulouse, Cugnaux bénéficie d'un cadre verdoyant avec de nombreux espaces arborés en zones pavillonnaires et copropriétés. Notre connaissance approfondie du territoire nous permet d'intervenir efficacement sur l'ensemble des quartiers : centre-ville historique, Louge, Ferradou, Récébédou et zones d'activités.
          </p>
          <h3 className="font-heading text-2xl text-forest mb-3 mt-6">Particularités de notre zone d'intervention</h3>
          <p className="text-lg text-night/80 mb-4">
            La proximité de la Garonne et le climat toulousain favorisent le développement rapide de la végétation, nécessitant un entretien régulier. Les platanes alignés en bord de voirie, les pins parasols caractéristiques de nos jardins et les haies de lauriers palmes requièrent une attention particulière aux périodes de taille optimales.
          </p>
          <p className="text-lg text-night/80 mb-4">
            Nous intervenons également dans les communes limitrophes : Villeneuve-Tolosane, Frouzins, Tournefeuille, Plaisance-du-Touch et Seysses. Notre réactivité locale nous permet de vous proposer des devis rapides avec visite sur site sous 48h et des interventions planifiées selon vos disponibilités.
          </p>
          <p className="text-lg text-night/80">
            Les contraintes spécifiques du PLU de Cugnaux concernant la préservation des arbres remarquables sont parfaitement intégrées dans nos recommandations d'intervention.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-heading text-center">Nos services à Cugnaux</h2>
          <p className="text-center text-lg text-night/80 mb-8">
            Des interventions adaptées à vos besoins dans tous les quartiers de Cugnaux
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-forest/10 bg-white p-6 shadow-sm"
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
                <h3 className="font-heading text-2xl text-forest mb-2">{service.title}</h3>
                <p className="text-night/80">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie d'intervention */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-beige/60 p-8 shadow-sm">
          <h2 className="section-heading">Notre méthodologie d'intervention à Cugnaux</h2>
          <p className="text-lg text-night/80 mb-4">
            Chaque chantier débute par un diagnostic complet de votre arbre ou de vos espaces verts. Nous évaluons l'état sanitaire, la structure, les risques potentiels et définissons ensemble les objectifs : élagage de sécurité, taille d'entretien, mise en forme ou abattage nécessaire.
          </p>
          <h3 className="font-heading text-2xl text-forest mb-3 mt-6">Nos techniques d'intervention</h3>
          <p className="text-lg text-night/80 mb-4">
            Selon la configuration de votre terrain et l'accessibilité, nous adaptons nos méthodes : grimpe en cordée pour les arbres isolés ou espacés, nacelle pour les grands sujets en bord de voie, ou démontage par rétention pour les situations complexes (proximité de bâtiments, fils électriques, jardins de voisinage).
          </p>
          <p className="text-lg text-night/80 mb-4">
            La gestion des rémanents (branches et déchets verts) est systématiquement incluse dans nos prestations. Nous évacuons l'intégralité des déchets en déchetterie agréée ou proposons le broyage sur place avec mise à disposition du broyat comme paillage naturel pour vos massifs.
          </p>
          <p className="text-lg text-night/80">
            En zone résidentielle dense comme à Cugnaux, nous accordons une attention particulière au respect du voisinage : information préalable, protection des sols et surfaces, nettoyage soigné du chantier.
          </p>
        </div>
      </section>

      {/* Expertise technique et sanitaire */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Expertise technique et sanitaire de vos arbres</h2>
          <p className="text-lg text-night/80 mb-4">
            Au-delà de la simple coupe, notre métier d'élagueur requiert une connaissance approfondie de la biologie végétale et des pathologies arboricoles. En Haute-Garonne, plusieurs maladies et parasites affectent régulièrement nos arbres : chancre du platane, processionnaire du pin, graphiose de l'orme ou feu bactérien sur fruitiers.
          </p>
          <h3 className="font-heading text-2xl text-forest mb-3 mt-6">Diagnostic phytosanitaire</h3>
          <p className="text-lg text-night/80 mb-4">
            Lors de notre visite préalable, nous inspectons minutieusement l'état sanitaire de vos sujets : présence de champignons lignivores (polypores), cavités suspectes, branches mortes dangereuses, décollement d'écorce ou déséquilibre structural. Ce diagnostic nous permet de vous conseiller sur les interventions nécessaires et leur degré d'urgence.
          </p>
          <h3 className="font-heading text-2xl text-forest mb-3 mt-6">Techniques d'élagage adaptées</h3>
          <p className="text-lg text-night/80 mb-4">
            Nous pratiquons l'élagage raisonné selon les principes de taille douce : respect de la biologie de l'arbre, coupes au bon endroit (collet de branche), limitation du stress végétal. Chaque essence a ses spécificités : les platanes se taillent en fin d'hiver, les pins en période de faible montée de sève, les fruitiers après récolte.
          </p>
          <h3 className="font-heading text-2xl text-forest mb-3 mt-6">Sécurité et assurances</h3>
          <p className="text-lg text-night/80">
            Tous nos élagueurs sont formés aux travaux en hauteur et régulièrement recyclés. Nous disposons d'une assurance décennale et responsabilité civile professionnelle couvrant l'ensemble de nos interventions. Notre matériel (EPI, cordes, tronçonneuses) est conforme aux normes en vigueur et vérifié périodiquement.
          </p>
        </div>
      </section>

      {/* Crédit d'impôt détaillé */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-forest text-white p-8 shadow-sm">
          <h2 className="font-heading text-3xl text-white mb-6">Crédit d'impôt : profitez de 50% de réduction sur vos travaux éligibles</h2>
          <p className="text-lg text-white/90 mb-4">
            Arbovert est agréé Services à la Personne (SAP), vous permettant de bénéficier d'un crédit d'impôt de 50% sur certaines prestations d'entretien de jardin. Cette aide fiscale réduit considérablement le coût de vos travaux d'entretien régulier.
          </p>
          <h3 className="font-heading text-2xl text-white mb-3 mt-6">Services éligibles au crédit d'impôt</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-white/90">
            <li>Taille de haies et arbustes d'ornement</li>
            <li>Tonte et débroussaillage de pelouse</li>
            <li>Entretien général de jardin et massifs</li>
            <li>Ramassage et évacuation des déchets verts issus de ces prestations</li>
          </ul>
          <p className="mb-4 font-semibold text-white">
            Important : Les travaux d'élagage d'arbres, d'abattage et de création (plantation, aménagement) ne sont pas éligibles au crédit d'impôt. Seules les prestations d'entretien courant ouvrent droit à l'avantage fiscal.
          </p>
          <h3 className="font-heading text-2xl text-white mb-3 mt-6">Concrètement</h3>
          <p className="mb-4 text-white/90">
            Pour 100€ de travaux éligibles facturés, vous ne payez réellement que 50€ après déduction fiscale. Nous vous fournissons l'attestation annuelle nécessaire à votre déclaration d'impôts. Les démarches sont simples : une ligne à renseigner sur votre déclaration de revenus.
          </p>
          <div className="bg-white/10 p-4 rounded-lg">
            <p className="font-semibold mb-2 text-white">Exemple chiffré :</p>
            <p className="text-white/90">Entretien annuel comprenant 4 tailles de haies : 400€ facturés = 200€ de coût réel après crédit d'impôt.</p>
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Nos interventions dans les quartiers de Cugnaux</h2>
          <p className="text-lg text-night/80 mb-6">
            Nous intervenons dans tous les quartiers de Cugnaux : Bazardens, Rachety, La Françoy, 
            centre-ville et environs. Notre équipe mobile se déplace rapidement pour vos urgences 
            ou interventions programmées.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {quartiers.map((quartier) => (
              <div key={quartier.nom} className="rounded-2xl bg-beige/60 p-4">
                <h3 className="font-heading text-xl text-forest mb-1">{quartier.nom}</h3>
                <p className="text-sm text-night/70">{quartier.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Nos réalisations en Haute-Garonne</h2>
          <p className="text-lg text-night/80 mb-8">
            Découvrez quelques-unes de nos interventions dans la région, similaires à celles que nous 
            réalisons à Cugnaux.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {realisations.map((real, index) => (
              <article key={index} className="rounded-2xl border border-forest/10 bg-beige/60 p-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="overflow-hidden rounded-xl border border-forest/10">
                    <Image
                      src={real.avant}
                      alt={`${real.titre} - Avant`}
                      width={300}
                      height={200}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-forest/10">
                    <Image
                      src={real.apres}
                      alt={`${real.titre} - Après`}
                      width={300}
                      height={200}
                      className="h-[200px] w-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-xl text-forest mb-1">{real.titre}</h3>
                <p className="text-sm text-night/70">{real.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/realisations-elagueur-haute-garonne"
              className="btn btn-primary"
            >
              Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-leaf/20 bg-leaf/10 p-8 shadow-sm">
          <h2 className="font-heading text-3xl text-forest mb-4">Zone d'intervention à Cugnaux</h2>
          <p className="text-lg text-night/80 mb-4">
            Arbovert intervient dans toute la commune de Cugnaux (31270) et les communes limitrophes 
            pour vos travaux d'élagage et d'entretien d'espaces verts.
          </p>
          <p className="text-night/80">
            <strong>Communes voisines également desservies :</strong> Tournefeuille, Plaisance-du-Touch, 
            Portet-sur-Garonne, Villeneuve-Tolosane, Roques-sur-Garonne.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading mb-8">Questions fréquentes sur l'élagage à Cugnaux</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl mb-2 text-forest">Quel est le prix d'un élagage à Cugnaux ?</h3>
              <p className="text-night/80">
                Le tarif dépend de nombreux critères : hauteur et essence de l'arbre, accessibilité du terrain, volume de branches à supprimer, évacuation des déchets. Comptez entre 150€ et 500€ pour un arbre de taille moyenne. Nous établissons systématiquement un devis gratuit après visite sur site.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl mb-2 text-forest">Faut-il une autorisation pour élaguer ou abattre un arbre à Cugnaux ?</h3>
              <p className="text-night/80">
                Pour l'élagage : généralement non, sauf si votre arbre est classé ou protégé au PLU. Pour l'abattage : une déclaration préalable en mairie est souvent nécessaire, notamment en lotissement ou si l'arbre dépasse certaines dimensions. Nous vous accompagnons dans ces démarches.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl mb-2 text-forest">Quelle est la meilleure période pour élaguer ?</h3>
              <p className="text-night/80">
                La période optimale varie selon les essences. Globalement : fin d'automne à fin d'hiver (novembre à mars) hors périodes de gel pour les feuillus. Évitez la montée de sève au printemps et les périodes de nidification (mars-août). Les résineux se taillent idéalement en fin d'été.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl mb-2 text-forest">Intervenez-vous en urgence à Cugnaux ?</h3>
              <p className="text-night/80">
                Oui, nous assurons un service d'élagage d'urgence en cas de danger immédiat : branche cassée menaçant une toiture, arbre déstabilisé par une tempête, chute sur voie d'accès. Contactez-nous directement par téléphone pour une intervention rapide.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl mb-2 text-forest">Que faites-vous des branches et déchets après élagage ?</h3>
              <p className="text-night/80">
                Nous évacuons systématiquement tous les rémanents vers une déchetterie agréée (inclus dans nos prestations). Sur demande, nous proposons le broyage sur place : le broyat peut être conservé comme paillage naturel pour vos massifs, économique et écologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="mx-auto max-w-4xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading text-center">Demandez votre devis gratuit à Cugnaux</h2>
          <p className="text-center text-lg text-night/80 mb-8">
            Contactez-nous pour un devis personnalisé. Nous analysons votre chantier et planifions 
            une intervention adaptée à vos besoins.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center">
        <div className="mx-auto max-w-3xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h3 className="font-heading text-3xl text-forest mb-4">
            Besoin d'un élagueur à Cugnaux ?
          </h3>
          <p className="text-lg text-night/80 mb-6">
            Appelez-nous au <a href="tel:0648768515" className="text-forest font-semibold hover:underline">06 48 76 85 15</a> 
            {' '}ou remplissez le formulaire ci-dessus pour un devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0648768515" className="btn btn-primary">
              📞 Appeler maintenant
            </a>
            <Link href="/services-elagage-haute-garonne" className="btn border border-forest text-forest hover:bg-forest hover:text-white">
              Découvrir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

