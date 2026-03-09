import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'Tempête Nils en Haute-Garonne : retour sur nos interventions d\'urgence | Arbovert',
  description: 'La tempête Nils du 12 février 2026 a causé des dégâts considérables en Haute-Garonne. Retour sur les interventions d\'urgence d\'Arbovert : dégagement de voiries, sécurisation d\'arbres, dégagement de toitures.',
  keywords: ['tempête nils haute-garonne', 'tempête nils toulouse', 'arbre tombé tempête', 'élagage urgence toulouse', 'dégâts tempête février 2026', 'intervention urgence arbre', 'élagueur urgence haute-garonne'],
  alternates: {
    canonical: '/blog/tempete-nils-haute-garonne'
  },
  openGraph: {
    title: 'Tempête Nils : interventions d\'urgence Arbovert en Haute-Garonne',
    description: 'Retour sur les interventions d\'urgence d\'Arbovert après la tempête Nils du 12 février 2026 en Haute-Garonne.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/tempete-nils-haute-garonne',
    images: [
      {
        url: '/blog/tempete-nils-arbre-maison.jpg',
        width: 1200,
        height: 630,
        alt: 'Arbre tombé sur une maison après la tempête Nils en Haute-Garonne'
      }
    ]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Tempête Nils en Haute-Garonne : retour sur nos interventions d'urgence",
      "description": "La tempête Nils du 12 février 2026 a causé des dégâts considérables en Haute-Garonne. Retour terrain sur les interventions d'urgence d'Arbovert.",
      "datePublished": "2026-02-18",
      "dateModified": "2026-03-09",
      "author": {
        "@type": "Person",
        "name": "Guillaume",
        "jobTitle": "Co-gérant & élagueur grimpeur",
        "worksFor": {
          "@type": "Organization",
          "name": "Arbovert",
          "url": "https://www.arbovert-31.fr"
        },
        "image": "https://www.arbovert-31.fr/guillaume.jpg"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Arbovert",
        "url": "https://www.arbovert-31.fr"
      },
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/tempete-nils-haute-garonne",
      "image": "https://www.arbovert-31.fr/blog/tempete-nils-arbre-maison.jpg"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Tempête Nils Haute-Garonne" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Que faire quand un arbre tombé sur ma maison après une tempête ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ne tentez pas de dégager l'arbre vous-même. Sécurisez la zone, évacuez si nécessaire et contactez un élagueur professionnel en urgence. Chez Arbovert, nous intervenons sous 24 à 48h en cas de tempête en Haute-Garonne. Prenez des photos pour votre assurance et contactez-la rapidement pour déclarer le sinistre."
          }
        },
        {
          "@type": "Question",
          "name": "Mon assurance couvre-t-elle les dégâts d'arbre après une tempête ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, la garantie tempête est incluse dans la plupart des contrats multirisques habitation. Elle couvre les dégâts causés par les vents de plus de 100 km/h. Vous devez déclarer le sinistre dans les 5 jours suivant la tempête, avec photos et devis de réparation. L'arrêté de catastrophe naturelle peut allonger ce délai à 10 jours."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûte une intervention d'urgence après une tempête ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le coût d'une intervention d'urgence après tempête varie selon la situation : dégagement de voirie (à partir de 200 euros), sécurisation d'arbre menaçant (300 à 800 euros), dégagement de toiture (400 à 1 500 euros selon la complexité). Ces frais peuvent être pris en charge par votre assurance habitation. Arbovert fournit un devis détaillé pour faciliter vos démarches."
          }
        },
        {
          "@type": "Question",
          "name": "Comment prévenir les dégâts d'arbres lors des tempêtes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'élagage préventif est la meilleure protection. Faites inspecter vos arbres régulièrement par un professionnel, surtout les sujets âgés ou malades. Un élagage de sécurisation réduit la prise au vent et supprime les branches mortes susceptibles de tomber. En Haute-Garonne, la période idéale est de novembre à février."
          }
        }
      ]
    }
  ]
};

export default function TempeteNilsHauteGaronne() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-0">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/blog" className="text-forest hover:text-forest/80 text-sm">
                &larr; Retour au blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700 border border-red-300">
                Urgence
              </span>
              <time className="text-sm text-night/50" dateTime="2026-02-18">
                18 février 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Tempête Nils en Haute-Garonne : retour sur nos interventions d'urgence
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed italic">
              Dans la nuit du 11 au 12 février 2026, la <strong>tempête Nils</strong> a frappé la Haute-Garonne avec des rafales atteignant 132 km/h. Arbres déracinés, routes bloquées, toitures endommagées : Arbovert a été mobilisé en urgence sur de nombreux chantiers. Retour sur cette nuit d'intervention et les jours qui ont suivi.
            </p>
          </div>
        </section>

        <AuthorCard
          name="Guillaume"
          role="Co-gérant & élagueur grimpeur — CAPA Travaux Forestiers"
          bio="6 ans dans l'armée, passionné de trail et de nature. Mon credo : un travail soigné et le respect de chaque arbre."
          photo="/guillaume.jpg"
          datePublished="2026-02-18"
          dateModified="2026-03-09"
        />

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* La tempête Nils : ce qui s'est passé */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">La tempête Nils : des dégâts considérables en Haute-Garonne</h2>

              <p className="text-lg text-night/80 mb-6 leading-relaxed">
                La tempête Nils s'est abattue sur le sud-ouest de la France dans la nuit du mercredi 11 au jeudi 12 février 2026. En Haute-Garonne, les rafales ont atteint <strong>125 km/h à Toulouse</strong> et <strong>132 km/h à Cugnaux</strong>, causant des dégâts importants sur l'ensemble du département.
              </p>

              <div className="rounded-3xl border border-red-200 bg-red-50 p-8 shadow-sm mb-8">
                <h3 className="font-heading text-xl text-red-800 mb-4">Le bilan de la tempête Nils en Haute-Garonne</h3>
                <ul className="space-y-3 text-night/80">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">&#8226;</span>
                    <span><strong>135 000 foyers privés d'électricité</strong> en Haute-Garonne (850 000 dans tout le sud-ouest)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">&#8226;</span>
                    <span><strong>352 interventions des pompiers</strong> (SDIS 31) en quelques heures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">&#8226;</span>
                    <span><strong>La Garonne a dépassé les 3,1 mètres</strong> au Pont Neuf, causant des inondations en centre-ville</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">&#8226;</span>
                    <span>Trafic ferroviaire arrêté sur <strong>quasiment toute l'Occitanie</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">&#8226;</span>
                    <span>De nombreux <strong>arbres déracinés</strong> sur les routes, dans les jardins et sur les habitations</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-night/80 mb-6 leading-relaxed">
                Cette tempête s'inscrit dans une série de perturbations exceptionnelles depuis Noël 2025. Selon Vigicrues, <em>&laquo; cette succession de perturbations sans aucun arrêt depuis Noël est exceptionnelle &raquo;</em>. Les sols déjà gorgés d'eau ont rendu les arbres particulièrement vulnérables au déracinement.
              </p>

              <div className="relative rounded-3xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/blog/tempete-nils-voirie-bloquee.jpg"
                  alt="Route bloquée par un arbre tombé lors de la tempête Nils en Haute-Garonne - février 2026"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm text-night/60 mt-3 text-center italic">Route complètement bloquée par un arbre déraciné lors de la tempête Nils - Haute-Garonne, nuit du 12 février 2026</p>
              </div>
            </section>

            {/* Nos interventions */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Arbovert sur tous les fronts : nos interventions d'urgence</h2>

              <p className="text-lg text-night/80 mb-8 leading-relaxed">
                Dès les premières heures suivant la tempête, l'équipe Arbovert a été mobilisée pour répondre aux situations les plus urgentes. Trois types d'interventions ont été menées simultanément à travers la Haute-Garonne.
              </p>

              {/* Intervention 1 : Voirie */}
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-8">
                <h3 className="font-heading text-xl text-forest mb-4">1. Dégagement de la voirie</h3>
                <p className="text-night/80 mb-6 leading-relaxed">
                  Plusieurs axes routiers étaient complètement bloqués par des arbres déracinés. Des chênes, des peupliers et des platanes de grande envergure avaient basculé en travers de la chaussée, rendant la circulation impossible et dangereuse. Notre priorité : <strong>rétablir la circulation le plus rapidement possible</strong> tout en sécurisant les zones d'intervention.
                </p>
                <p className="text-night/80 mb-6 leading-relaxed">
                  Chaque arbre a été tronçonné par sections, dégagé méthodiquement et évacué en bord de route pour permettre la réouverture des voies. Un travail réalisé de nuit dans des conditions difficiles, sous la pluie et avec des risques de chutes de branches supplémentaires.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/blog/tempete-nils-voirie-bloquee.jpg"
                      alt="Arbre déraciné bloquant une route de nuit pendant la tempête Nils"
                      width={450}
                      height={350}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-night/50 mt-2 text-center">Avant : voirie totalement obstruée</p>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/blog/tempete-nils-voirie-degagee.jpg"
                      alt="Route dégagée par Arbovert après intervention d'urgence tempête Nils"
                      width={450}
                      height={350}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-night/50 mt-2 text-center">Après : voirie dégagée et sécurisée</p>
                  </div>
                </div>
              </div>

              {/* Intervention 2 : Sécurisation */}
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-8">
                <h3 className="font-heading text-xl text-forest mb-4">2. Mise en sécurité des arbres menaçants</h3>
                <p className="text-night/80 mb-6 leading-relaxed">
                  De nombreux arbres, bien que n'étant pas totalement tombés, se retrouvaient en position dangereuse : inclinés contre des habitations, retenus par des câbles électriques ou menaçant de s'effondrer à tout moment. Ces situations nécessitaient une <strong>intervention technique rapide</strong> pour éviter des accidents.
                </p>
                <p className="text-night/80 mb-6 leading-relaxed">
                  Pour chaque arbre, un diagnostic rapide de la situation a été réalisé : évaluation du risque d'effondrement, identification des contraintes (lignes électriques, bâtiments, végétation à préserver), puis démontage sécurisé par tronçons avec rétention lorsque nécessaire.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/blog/tempete-nils-arbre-maison.jpg"
                      alt="Arbre tombé sur une maison après la tempête Nils - intervention urgence Arbovert"
                      width={450}
                      height={350}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-night/50 mt-2 text-center">Arbre déraciné tombé directement sur une habitation</p>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/blog/tempete-nils-arbre-tombe.jpg"
                      alt="Grand arbre déraciné par la tempête Nils en Haute-Garonne"
                      width={450}
                      height={350}
                      className="w-full h-64 object-cover"
                    />
                    <p className="text-xs text-night/50 mt-2 text-center">Chêne massif déraciné par les rafales à 132 km/h</p>
                  </div>
                </div>
              </div>

              {/* Intervention 3 : Toitures */}
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-8">
                <h3 className="font-heading text-xl text-forest mb-4">3. Dégagement des toitures</h3>
                <p className="text-night/80 mb-6 leading-relaxed">
                  Plusieurs habitations ont vu des arbres ou de grosses branches s'effondrer sur leur toiture. Avant que les couvreurs puissent intervenir pour réparer les dégâts, il fallait d'abord <strong>dégager les arbres et branches</strong> qui pesaient sur les structures. Un travail délicat qui demande une grande maîtrise technique : chaque tronçon doit être découpé et évacué sans aggraver les dégâts sur la toiture déjà fragilisée.
                </p>
                <p className="text-night/80 mb-6 leading-relaxed">
                  Notre équipe a travaillé en coordination avec les couvreurs pour permettre une réparation rapide des toitures exposées aux intempéries. La priorité était d'éviter les infiltrations d'eau dans les habitations déjà sinistrées.
                </p>
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/blog/tempete-nils-elagueur-toiture.jpg"
                    alt="Élagueur Arbovert sur une toiture en train de dégager un arbre tombé après la tempête Nils"
                    width={900}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-sm text-night/60 mt-3 text-center italic">Un élagueur Arbovert sur une toiture, tronçonneuse en main, pour dégager un conifère tombé sur une habitation</p>
                </div>
              </div>

              {/* Photo voirie après */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/blog/tempete-nils-voirie-apres.jpg"
                  alt="Arbre déraciné dégagé de la voirie par Arbovert après tempête Nils - Haute-Garonne"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <p className="text-sm text-night/60 mt-3 text-center italic">Dégagement d'un arbre massif sur la voirie - les tronçons sont débités et dégagés pour rétablir la circulation</p>
              </div>
            </section>

            {/* Que faire après une tempête */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Arbre tombé après une tempête : que faire ?</h2>

              <p className="text-lg text-night/80 mb-6 leading-relaxed">
                Si un arbre est tombé dans votre jardin, sur votre maison ou menace de tomber, voici les étapes à suivre :
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-beige/30 p-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-forest text-white font-heading text-lg">1</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Sécurisez la zone</h3>
                    <p className="text-night/80">Ne vous approchez pas de l'arbre, surtout s'il touche des lignes électriques. Éloignez les enfants et les animaux. Si l'arbre menace votre habitation, évacuez les pièces concernées.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-beige/30 p-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-forest text-white font-heading text-lg">2</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Prenez des photos</h3>
                    <p className="text-night/80">Documentez les dégâts sous tous les angles avant toute intervention. Ces photos seront indispensables pour votre déclaration de sinistre auprès de votre assurance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-beige/30 p-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-forest text-white font-heading text-lg">3</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Contactez votre assurance</h3>
                    <p className="text-night/80">Déclarez le sinistre dans les <strong>5 jours</strong> suivant la tempête (10 jours en cas d'arrêté de catastrophe naturelle). La garantie tempête de votre multirisques habitation couvre généralement les dégâts causés par des vents supérieurs à 100 km/h.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-beige/30 p-6">
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-forest text-white font-heading text-lg">4</span>
                  <div>
                    <h3 className="font-heading text-lg text-forest mb-1">Faites appel à un élagueur professionnel</h3>
                    <p className="text-night/80">Ne tentez jamais de tronçonner un arbre tombé vous-même. Un arbre sous tension peut se relever brutalement ou rouler de manière imprévisible. Contactez un <Link href="/elagage-urgence-toulouse" className="text-forest underline hover:text-forest/80">élagueur d'urgence professionnel</Link> équipé et assuré.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prévention */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Prévenir plutôt que guérir : l'élagage préventif</h2>

              <p className="text-lg text-night/80 mb-6 leading-relaxed">
                La tempête Nils nous rappelle l'importance de l'<strong>entretien préventif des arbres</strong>. Beaucoup de dégâts auraient pu être évités ou limités par un élagage régulier. Voici les principaux gestes de prévention :
              </p>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-8">
                <ul className="space-y-4 text-night/80">
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Taille de sécurisation</strong> : réduire la prise au vent en allégeant le houppier, surtout pour les arbres proches des habitations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Suppression du bois mort</strong> : les branches mortes sont les premières à casser et tomber lors des tempêtes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Diagnostic sanitaire</strong> : identifier les arbres malades, creux ou fragilisés avant qu'ils ne deviennent un danger</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Abattage préventif</strong> : pour les arbres trop proches des habitations ou présentant des signes de faiblesse structurelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-leaf" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Élagage régulier</strong> : un arbre entretenu tous les 3 à 5 ans résiste beaucoup mieux aux intempéries</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-night/80 mb-6 leading-relaxed">
                En Haute-Garonne, la <strong>période idéale pour l'élagage préventif</strong> se situe entre novembre et février pour les feuillus (hors période de gel). C'est le moment où l'arbre est en repos végétatif, ce qui limite le stress et favorise une bonne cicatrisation. Pour en savoir plus, consultez notre <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">guide des périodes d'élagage</Link>.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Questions fréquentes après une tempête</h2>

              <div className="space-y-6">
                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8">
                  <h3 className="font-heading text-lg text-forest mb-3">Que faire quand un arbre tombé sur ma maison après une tempête ?</h3>
                  <p className="text-night/80 leading-relaxed">
                    Ne tentez pas de dégager l'arbre vous-même. Sécurisez la zone, évacuez si nécessaire et contactez un <strong>élagueur professionnel en urgence</strong>. Chez Arbovert, nous intervenons sous 24 à 48h en cas de tempête en Haute-Garonne. Prenez des photos pour votre assurance et contactez-la rapidement pour déclarer le sinistre.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8">
                  <h3 className="font-heading text-lg text-forest mb-3">Mon assurance couvre-t-elle les dégâts d'arbre après une tempête ?</h3>
                  <p className="text-night/80 leading-relaxed">
                    Oui, la <strong>garantie tempête</strong> est incluse dans la plupart des contrats multirisques habitation. Elle couvre les dégâts causés par les vents de plus de 100 km/h. Vous devez déclarer le sinistre dans les <strong>5 jours</strong> suivant la tempête, avec photos et devis de réparation. L'arrêté de catastrophe naturelle peut allonger ce délai à 10 jours.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8">
                  <h3 className="font-heading text-lg text-forest mb-3">Combien coûte une intervention d'urgence après une tempête ?</h3>
                  <p className="text-night/80 leading-relaxed">
                    Le coût varie selon la situation : <strong>dégagement de voirie</strong> (à partir de 200 &euro;), <strong>sécurisation d'arbre menaçant</strong> (300 à 800 &euro;), <strong>dégagement de toiture</strong> (400 à 1 500 &euro; selon la complexité). Ces frais sont généralement pris en charge par votre assurance habitation. Arbovert fournit un devis détaillé pour faciliter vos démarches. Consultez notre <Link href="/tarif-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">grille tarifaire</Link> pour plus de détails.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8">
                  <h3 className="font-heading text-lg text-forest mb-3">Comment prévenir les dégâts d'arbres lors des tempêtes ?</h3>
                  <p className="text-night/80 leading-relaxed">
                    L'<strong>élagage préventif</strong> est la meilleure protection. Faites inspecter vos arbres régulièrement par un professionnel, surtout les sujets âgés ou malades. Un élagage de sécurisation réduit la prise au vent et supprime les branches mortes. En Haute-Garonne, la <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">période idéale est de novembre à février</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Articles liés */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">À lire aussi</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/quand-elaguer-arbres-toulouse" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg text-forest group-hover:text-forest/80 mb-2">Quand élaguer vos arbres à Toulouse ?</h3>
                  <p className="text-sm text-night/60">Calendrier et périodes idéales par essence</p>
                </Link>
                <Link href="/blog/prix-elagage-toulouse" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg text-forest group-hover:text-forest/80 mb-2">Prix élagage à Toulouse en 2026</h3>
                  <p className="text-sm text-night/60">Guide complet des tarifs et devis</p>
                </Link>
                <Link href="/elagage-urgence-toulouse" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg text-forest group-hover:text-forest/80 mb-2">Élagage d'urgence à Toulouse</h3>
                  <p className="text-sm text-night/60">Intervention rapide 7j/7 en Haute-Garonne</p>
                </Link>
                <Link href="/realisations-elagueur-haute-garonne" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg text-forest group-hover:text-forest/80 mb-2">Nos réalisations</h3>
                  <p className="text-sm text-night/60">Avant/après de nos interventions en Haute-Garonne</p>
                </Link>
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl text-forest mb-4">
              Un arbre dangereux après la tempête ?
            </h2>
            <p className="text-lg text-night/80 mb-8">
              Arbovert intervient en urgence dans toute la Haute-Garonne. Contactez-nous pour une intervention rapide et sécurisée.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                06 48 76 85 15
              </a>
              <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
