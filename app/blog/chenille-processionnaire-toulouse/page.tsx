import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'Chenille processionnaire à Toulouse : dangers, traitement et prévention | Arbovert',
  description: 'Comment lutter contre la chenille processionnaire du pin à Toulouse ? Identification, dangers pour la santé, traitements efficaces et prévention. Guide expert Arbovert.',
  keywords: ['chenille processionnaire toulouse', 'chenille processionnaire pin', 'traitement chenille processionnaire', 'nid chenille processionnaire', 'danger chenille processionnaire', 'éco-piège processionnaire', 'chenille processionnaire haute-garonne', 'enlever nid processionnaire'],
  alternates: { canonical: '/blog/chenille-processionnaire-toulouse' },
  openGraph: {
    title: 'Chenille processionnaire à Toulouse : dangers, traitement et prévention',
    description: 'Guide complet sur la chenille processionnaire du pin en Haute-Garonne. Identification, risques et solutions.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/chenille-processionnaire-toulouse'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Chenille processionnaire à Toulouse : comment protéger votre famille et vos arbres",
      "description": "Guide complet sur la chenille processionnaire du pin en Haute-Garonne. Identification, dangers pour la santé, traitements efficaces et calendrier de prévention.",
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
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
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/chenille-processionnaire-toulouse"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Chenille processionnaire Toulouse", "item": "https://www.arbovert-31.fr/blog/chenille-processionnaire-toulouse" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quand intervenir contre les chenilles processionnaires à Toulouse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le calendrier d'intervention dépend de la méthode choisie. Les pièges à phéromones se posent en été (juin-août) pour capturer les papillons. Le traitement biologique au Btk s'applique en automne (septembre-novembre) sur les jeunes chenilles. L'échenillage des nids se pratique en hiver (décembre-février). Les éco-pièges se posent dès l'automne et restent actifs jusqu'au printemps. En Haute-Garonne, les processions au sol débutent généralement en janvier et peuvent durer jusqu'en avril."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on enlever soi-même un nid de processionnaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est fortement déconseillé et même dangereux. Les nids contiennent des millions de poils urticants qui se dispersent dans l'air au moindre contact. Même un nid vide reste dangereux car les poils persistent pendant des mois. L'intervention nécessite un équipement de protection intégrale (combinaison, masque respiratoire, lunettes) et du matériel de grimpe pour accéder à la cime des pins. Faites appel à un élagueur professionnel comme Arbovert qui dispose du matériel adapté."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûte un traitement contre les chenilles processionnaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les tarifs varient selon la méthode : l'échenillage (retrait de nids) coûte entre 80 et 200 euros par arbre selon la hauteur et l'accessibilité. Un éco-piège revient à 50-100 euros pose comprise. Le traitement Btk par pulvérisation coûte entre 100 et 300 euros selon la surface. Les pièges à phéromones coûtent 30 à 60 euros l'unité. Un nichoir à mésanges revient à 20-40 euros. Contactez Arbovert pour un devis gratuit adapté à votre situation."
          }
        },
        {
          "@type": "Question",
          "name": "Les chenilles processionnaires tuent-elles les pins ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une seule infestation ne tue généralement pas un pin adulte en bonne santé, mais elle l'affaiblit considérablement en le privant d'une partie de ses aiguilles. Des infestations répétées sur plusieurs années, combinées au stress hydrique lié aux sécheresses estivales fréquentes à Toulouse, peuvent entraîner le dépérissement puis la mort de l'arbre. Les jeunes pins et les arbres déjà fragilisés sont les plus vulnérables. Un traitement préventif régulier est donc recommandé."
          }
        }
      ]
    }
  ]
};

export default function ChenilleProcessionnaire() {
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
                ← Retour au blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf border border-leaf/30">
                Santé des arbres
              </span>
              <time className="text-sm text-night/50" dateTime="2026-05-15">
                15 mai 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Chenille processionnaire à Toulouse : comment protéger votre famille et vos arbres
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed">
              Chaque année, la <strong>chenille processionnaire du pin</strong> cause des ravages en Haute-Garonne. Poils urticants dangereux pour les enfants et les animaux, défoliation des pins, réactions allergiques graves : ce fléau, amplifié par le <strong>réchauffement climatique</strong>, touche désormais l'ensemble de la métropole toulousaine. Voici le guide complet pour identifier, prévenir et traiter cette menace dans vos jardins.
            </p>
          </div>
        </section>

        <AuthorCard
          name="Guillaume"
          role="Co-gérant & élagueur grimpeur — CAPA Travaux Forestiers"
          bio="6 ans dans l'armée, passionné de trail et de nature. Mon credo : un travail soigné et le respect de chaque arbre."
          photo="/guillaume.jpg"
          datePublished="2026-05-15"
          dateModified="2026-05-15"
        />

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* Identifier la chenille processionnaire */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Identifier la chenille processionnaire du pin</h2>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Le cycle de vie : du papillon à la procession</h3>
                <p className="text-lg text-night/80 mb-4">
                  La chenille processionnaire du pin (<em>Thaumetopoea pityocampa</em>) suit un cycle annuel bien défini. Comprendre ce cycle est essentiel pour intervenir au bon moment.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-leaf mb-2">Été (juin-août)</p>
                    <p className="text-night/80 text-sm">
                      Les <strong>papillons adultes</strong> émergent du sol à la tombée de la nuit. Gris-brun et discrets, ils ne vivent que quelques jours. Les femelles pondent entre 70 et 300 œufs en manchon autour des aiguilles de pin.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-leaf mb-2">Automne (sept-nov)</p>
                    <p className="text-night/80 text-sm">
                      Les <strong>œufs éclosent</strong> et les jeunes chenilles commencent à se nourrir des aiguilles de pin. Elles tissent des pré-nids légers, encore peu visibles. C'est la période idéale pour le <strong>traitement biologique</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-leaf mb-2">Hiver (déc-fév)</p>
                    <p className="text-night/80 text-sm">
                      Les chenilles construisent leur <strong>nid d'hiver définitif</strong> : un cocon blanc soyeux, dense et bien visible en haut des pins. Elles y restent groupées et ne sortent que la nuit pour se nourrir. Les poils urticants se développent à partir du 3e stade larvaire.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-leaf mb-2">Printemps (mars-avril)</p>
                    <p className="text-night/80 text-sm">
                      C'est la phase la plus dangereuse : les chenilles descendent du pin en <strong>file indienne</strong> (la fameuse « procession ») pour s'enfouir dans le sol. C'est à ce moment que le risque de contact est maximal, surtout pour les enfants et les animaux domestiques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Reconnaître les nids de processionnaires</h3>
                <p className="text-night/80 mb-4">
                  Les nids de chenilles processionnaires sont facilement reconnaissables : ce sont des <strong>cocons blancs soyeux</strong>, de la taille d'un ballon de handball, accrochés à l'extrémité des branches, généralement en haut du pin et orientés vers le sud pour capter la chaleur du soleil. En hiver, un seul pin peut porter plusieurs nids, chacun abritant des dizaines à des centaines de chenilles.
                </p>
                <p className="text-night/80">
                  Ne confondez pas les nids de processionnaires avec les toiles d'araignées ou les cocons d'autres insectes. Le nid de processionnaire est <strong>compact, opaque et d'un blanc grisâtre</strong>. Même vide, il reste dangereux car les poils urticants persistent pendant des mois, voire des années.
                </p>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Quels arbres sont touchés ?</h3>
                <p className="text-night/80 mb-4">
                  Comme son nom l'indique, la chenille processionnaire du pin s'attaque principalement aux <strong>pins</strong> : pin maritime, pin d'Alep (très présent en Haute-Garonne), pin sylvestre, pin noir d'Autriche et pin parasol. Les <strong>cèdres</strong> (du Liban, de l'Atlas) sont également touchés, bien que dans une moindre mesure.
                </p>
                <p className="text-night/80">
                  Attention, il existe aussi la <strong>processionnaire du chêne</strong> (<em>Thaumetopoea processionea</em>), en pleine expansion dans le sud-ouest de la France. Elle suit un cycle différent (chenilles au printemps-été) et forme des nids plaqués contre le tronc ou les grosses branches des chênes. Ses poils sont tout aussi urticants. Si vos chênes présentent des nids inhabituels, contactez un professionnel pour une identification précise.
                </p>
              </div>
            </section>

            {/* Les dangers pour la santé */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Les dangers pour la santé</h2>

              <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-8 shadow-sm mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl flex-shrink-0">⚠️</span>
                  <div>
                    <h3 className="font-heading text-xl text-red-800 mb-2">Attention : danger réel pour la santé</h3>
                    <p className="text-red-800/80">
                      Les chenilles processionnaires possèdent des <strong>poils urticants microscopiques</strong> contenant de la <strong>thaumétopoéine</strong>, une protéine extrêmement irritante. Ces poils se détachent au moindre stress (vent, contact, tentative de destruction du nid) et peuvent être transportés par l'air sur plusieurs dizaines de mètres. Un seul contact suffit à provoquer une réaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Risques pour les humains</h3>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-forest mb-2">Réactions cutanées</p>
                    <p className="text-night/80 text-sm">
                      Éruptions cutanées intenses, démangeaisons sévères, plaques rouges et boutons qui apparaissent dans les heures suivant le contact. Les zones de peau exposées (bras, cou, visage) sont les plus touchées. L'irritation peut durer <strong>une à deux semaines</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-forest mb-2">Réactions oculaires</p>
                    <p className="text-night/80 text-sm">
                      Si des poils atteignent les yeux : conjonctivite sévère, larmoiement, gonflement des paupières. Dans les cas graves, les poils peuvent se ficher dans la cornée et provoquer une <strong>kératite nécessitant une consultation ophtalmologique urgente</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="font-heading text-lg text-forest mb-2">Réactions respiratoires</p>
                    <p className="text-night/80 text-sm">
                      L'inhalation de poils provoque des éternuements, un mal de gorge, une toux irritative et des difficultés respiratoires. Les personnes asthmatiques sont particulièrement vulnérables et peuvent déclencher une <strong>crise d'asthme sévère</strong>.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-red-200">
                    <p className="font-heading text-lg text-red-800 mb-2">Choc anaphylactique</p>
                    <p className="text-night/80 text-sm">
                      Dans de rares cas, notamment chez les personnes sensibilisées par des contacts répétés, un <strong>choc anaphylactique</strong> peut survenir. C'est une urgence médicale absolue. Appelez le 15 (SAMU) immédiatement en cas de gonflement du visage, de difficultés respiratoires importantes ou de malaise.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-red-800 mb-4">Danger majeur pour les animaux domestiques</h3>
                <p className="text-red-800/80 mb-4">
                  Les chiens sont les premières victimes des chenilles processionnaires. Attirés par le mouvement des processions au sol, ils les reniflent ou les lèchent. Le contact avec la langue provoque une <strong>nécrose tissulaire rapide</strong> : la langue gonfle, noircit et peut se nécroser en quelques heures. Sans intervention vétérinaire d'urgence, le chien peut perdre une partie de sa langue, voire mourir d'un œdème de la gorge.
                </p>
                <p className="text-red-800/80 font-semibold">
                  En cas de contact de votre animal avec une chenille processionnaire, rincez abondamment la gueule à l'eau claire (sans frotter) et rendez-vous immédiatement chez un vétérinaire. Chaque minute compte.
                </p>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Risques pour les enfants</h3>
                <p className="text-night/80 mb-4">
                  Les enfants jouant dans les jardins sont particulièrement exposés. Les processions au sol passent souvent inaperçues des plus jeunes, qui peuvent les toucher par curiosité. De plus, les poils urticants déposés sur l'herbe restent actifs pendant des semaines, même en l'absence de chenilles visibles. Un enfant jouant dans l'herbe sous un pin infesté peut être touché <strong>sans même avoir vu de chenille</strong>.
                </p>
                <p className="text-night/80">
                  Apprenez à vos enfants à ne <strong>jamais toucher</strong> les chenilles ni les nids, et à vous prévenir s'ils en voient dans le jardin ou sur le chemin de l'école.
                </p>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <h3 className="font-heading text-xl text-forest mb-4">Que faire en cas de contact ?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-night/80">
                    <span className="text-forest font-bold mt-0.5">1.</span>
                    <span><strong>Ne pas frotter</strong> la zone touchée : cela casse les poils et libère davantage de toxine.</span>
                  </div>
                  <div className="flex items-start gap-3 text-night/80">
                    <span className="text-forest font-bold mt-0.5">2.</span>
                    <span><strong>Retirer les vêtements</strong> délicatement et les laver à 60°C minimum.</span>
                  </div>
                  <div className="flex items-start gap-3 text-night/80">
                    <span className="text-forest font-bold mt-0.5">3.</span>
                    <span><strong>Rincer la peau</strong> abondamment à l'eau claire. Utiliser du sparadrap ou du ruban adhésif pour décoller les poils visibles.</span>
                  </div>
                  <div className="flex items-start gap-3 text-night/80">
                    <span className="text-forest font-bold mt-0.5">4.</span>
                    <span><strong>Consulter un médecin</strong> en cas de réaction étendue, d'atteinte oculaire ou de difficultés respiratoires.</span>
                  </div>
                  <div className="flex items-start gap-3 text-night/80">
                    <span className="text-forest font-bold mt-0.5">5.</span>
                    <span><strong>Appeler le 15</strong> en cas de réaction allergique sévère (gonflement du visage, malaise, détresse respiratoire).</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Pourquoi Toulouse est touchée */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pourquoi Toulouse est particulièrement touchée</h2>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm mb-6">
                <p className="text-lg text-night/80 mb-6">
                  La Haute-Garonne figure parmi les départements les plus touchés de France par la chenille processionnaire. Plusieurs facteurs expliquent cette situation.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Un climat méditerranéen favorable</h3>
                    <p className="text-night/80 text-sm">
                      Le climat de Toulouse, à la croisée des influences méditerranéennes et océaniques, offre des <strong>hivers doux</strong> qui permettent aux chenilles de survivre et de se nourrir presque toute la saison froide. Les températures rarement négatives accélèrent leur développement.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Des pins omniprésents</h3>
                    <p className="text-night/80 text-sm">
                      Les <strong>jardins pavillonnaires</strong> de la métropole toulousaine regorgent de pins : pins maritimes dans les quartiers sud, pins d'Alep sur les coteaux, pins parasols dans les parcs. Cette abondance de nourriture offre aux processionnaires un terrain idéal pour proliférer.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Le réchauffement climatique</h3>
                    <p className="text-night/80 text-sm">
                      La chenille processionnaire progresse vers le nord d'environ <strong>5 km par an</strong>. Historiquement cantonnée au pourtour méditerranéen, elle a remonté la vallée de la Garonne et colonise désormais l'ensemble du département. Les hivers de plus en plus doux accélèrent cette progression.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Zones les plus touchées</h3>
                    <p className="text-night/80 text-sm">
                      Les <strong>coteaux sud de Toulouse</strong> (Pech-David, Pouvourville, Vigoulet-Auzil), la <strong>vallée de la Garonne</strong> et les communes du sud de la métropole sont les plus impactés. Les zones résidentielles avec de grandes parcelles boisées de pins concentrent les infestations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <h3 className="font-heading text-xl text-forest mb-4">Communes concernées en Haute-Garonne</h3>
                <p className="text-night/80 mb-4">
                  La chenille processionnaire est présente dans toute la métropole toulousaine et au-delà. Arbovert intervient notamment dans les communes suivantes :
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/elagage-toulouse" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Toulouse
                  </Link>
                  <Link href="/elagage-muret" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Muret
                  </Link>
                  <Link href="/elagage-colomiers" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Colomiers
                  </Link>
                  <Link href="/elagage-ramonville" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Ramonville
                  </Link>
                  <Link href="/elagage-castanet-tolosan" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Castanet-Tolosan
                  </Link>
                  <Link href="/elagage-labege" className="rounded-full bg-white px-4 py-2 text-sm text-forest border border-forest/20 hover:bg-forest hover:text-white transition-colors">
                    Labège
                  </Link>
                  <span className="rounded-full bg-white px-4 py-2 text-sm text-night/60 border border-forest/10">
                    Balma
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm text-night/60 border border-forest/10">
                    Tournefeuille
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm text-night/60 border border-forest/10">
                    Cugnaux
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 text-sm text-night/60 border border-forest/10">
                    Saint-Orens
                  </span>
                </div>
              </div>
            </section>

            {/* Les traitements efficaces */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Les traitements efficaces contre la chenille processionnaire</h2>

              <p className="text-lg text-night/80 mb-6">
                Il existe plusieurs méthodes de lutte, à combiner idéalement pour une efficacité maximale. Chez <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">Arbovert</Link>, nous adaptons notre approche à chaque situation en privilégiant les solutions respectueuses de l'environnement.
              </p>

              <div className="space-y-6 mb-8">
                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-xl text-forest mb-4">Traitement biologique au Btk (Bacillus thuringiensis var. kurstaki)</h3>
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-4">
                    <p className="font-heading text-lg text-leaf mb-2">Méthode la plus efficace en prévention</p>
                    <p className="text-night/80 text-sm">
                      Période d'application : septembre à novembre | Efficacité : très élevée sur jeunes chenilles
                    </p>
                  </div>
                  <p className="text-night/80 mb-3">
                    Le <strong>Btk</strong> est une bactérie naturelle du sol qui, une fois ingérée par les chenilles, détruit leur tube digestif en 24 à 48 heures. La pulvérisation se fait sur le feuillage des pins en automne, lorsque les chenilles sont encore jeunes (stades L1 à L3) et particulièrement sensibles.
                  </p>
                  <p className="text-night/80">
                    C'est une méthode <strong>biologique et sélective</strong> : le Btk n'affecte que les larves de lépidoptères (papillons) qui consomment les aiguilles traitées. Il est sans danger pour les humains, les animaux domestiques, les oiseaux et les abeilles. Il est homologué en agriculture biologique.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-xl text-forest mb-4">Échenillage : retrait des nids par un élagueur grimpeur</h3>
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-4">
                    <p className="font-heading text-lg text-leaf mb-2">Solution curative directe</p>
                    <p className="text-night/80 text-sm">
                      Période d'intervention : décembre à février | Efficacité : immédiate sur les nids retirés
                    </p>
                  </div>
                  <p className="text-night/80 mb-3">
                    L'échenillage consiste à <strong>retirer physiquement les nids</strong> des pins. Un <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">élagueur grimpeur</Link> équipé d'une combinaison de protection intégrale grimpe jusqu'aux nids, les coupe avec la branche support et les place dans un sac étanche. Les nids sont ensuite <strong>incinérés</strong> pour éliminer définitivement les poils urticants.
                  </p>
                  <p className="text-night/80">
                    C'est la méthode que pratique <strong>Arbovert</strong> en hiver. Elle est particulièrement recommandée lorsque les nids sont déjà bien formés et que le traitement Btk n'a pas été appliqué à l'automne. Nos élagueurs interviennent en sécurité grâce à leur matériel de grimpe professionnel. Pour les situations urgentes, consultez notre page <Link href="/elagage-urgence-toulouse" className="text-forest underline hover:text-forest/80">élagage d'urgence à Toulouse</Link>.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-xl text-forest mb-4">Éco-piège : le collier autour du tronc</h3>
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-4">
                    <p className="font-heading text-lg text-leaf mb-2">Capture lors de la descente</p>
                    <p className="text-night/80 text-sm">
                      Pose : automne (avant les processions) | Efficacité : élevée sur un arbre individuel
                    </p>
                  </div>
                  <p className="text-night/80 mb-3">
                    L'éco-piège est un <strong>dispositif en forme de gouttière</strong> fixé autour du tronc du pin. Lorsque les chenilles descendent en procession, elles sont interceptées par le collier et guidées vers un sac rempli de terre où elles s'enfouissent, pensant avoir atteint le sol. Il ne reste plus qu'à retirer et détruire le sac.
                  </p>
                  <p className="text-night/80">
                    Cette solution est <strong>écologique, sans produit chimique</strong> et très efficace sur les arbres isolés dans un jardin. Elle est compatible avec toutes les autres méthodes et peut rester en place plusieurs saisons.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-xl text-forest mb-4">Piège à phéromones : capturer les papillons mâles</h3>
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-4">
                    <p className="font-heading text-lg text-leaf mb-2">Réduction de la reproduction</p>
                    <p className="text-night/80 text-sm">
                      Pose : juin à août | Efficacité : réduit la ponte de 30 à 50%
                    </p>
                  </div>
                  <p className="text-night/80">
                    Le piège à phéromones attire les <strong>papillons mâles</strong> grâce à une capsule imitant l'odeur émise par les femelles. Les mâles capturés ne pourront pas féconder les femelles, réduisant ainsi le nombre de pontes. Un piège couvre un rayon d'environ 25 mètres. Cette méthode est un <strong>complément de prévention</strong> à utiliser en amont des autres traitements.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-xl text-forest mb-4">Les mésanges : un prédateur naturel redoutable</h3>
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-4">
                    <p className="font-heading text-lg text-leaf mb-2">Lutte biologique naturelle</p>
                    <p className="text-night/80 text-sm">
                      Installation de nichoirs : automne | Efficacité : régulation continue sur le long terme
                    </p>
                  </div>
                  <p className="text-night/80 mb-3">
                    La <strong>mésange charbonnière</strong> et la <strong>mésange bleue</strong> sont les prédateurs naturels les plus efficaces contre la chenille processionnaire. Une seule mésange peut consommer jusqu'à <strong>40 chenilles par jour</strong>. Elle est l'un des rares oiseaux à ne pas être incommodée par les poils urticants, qu'elle élimine en frottant les chenilles sur une branche avant de les manger.
                  </p>
                  <p className="text-night/80">
                    Installer des <strong>nichoirs à mésanges</strong> dans votre jardin est un geste simple et durable. Orientez l'entrée vers le sud-est, à une hauteur de 2 à 3 mètres, à l'abri du vent et hors de portée des chats. Quelques couples de mésanges suffisent à réguler significativement une population de processionnaires sur une parcelle.
                  </p>
                </div>
              </div>

              {/* Tableau comparatif */}
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm overflow-x-auto">
                <h3 className="font-heading text-xl text-forest mb-6">Tableau comparatif des méthodes de traitement</h3>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-3 font-heading text-forest">Méthode</th>
                      <th className="pb-3 font-heading text-forest">Efficacité</th>
                      <th className="pb-3 font-heading text-forest">Période</th>
                      <th className="pb-3 font-heading text-forest">Coût estimé</th>
                      <th className="pb-3 font-heading text-forest">Impact environnemental</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Traitement Btk</td>
                      <td className="py-3">Très élevée</td>
                      <td className="py-3">Sept-Nov</td>
                      <td className="py-3">100 – 300 €</td>
                      <td className="py-3">Faible (bio)</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Échenillage</td>
                      <td className="py-3">Élevée</td>
                      <td className="py-3">Déc-Fév</td>
                      <td className="py-3">80 – 200 €/arbre</td>
                      <td className="py-3">Nul</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Éco-piège</td>
                      <td className="py-3">Élevée</td>
                      <td className="py-3">Oct-Avr</td>
                      <td className="py-3">50 – 100 €/arbre</td>
                      <td className="py-3">Nul</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Piège phéromones</td>
                      <td className="py-3">Moyenne</td>
                      <td className="py-3">Juin-Août</td>
                      <td className="py-3">30 – 60 €/piège</td>
                      <td className="py-3">Nul</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Nichoirs mésanges</td>
                      <td className="py-3">Modérée (long terme)</td>
                      <td className="py-3">Toute l'année</td>
                      <td className="py-3">20 – 40 €/nichoir</td>
                      <td className="py-3">Positif</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-night/50 mt-4">
                  Les tarifs sont indicatifs et varient selon la hauteur des arbres, leur accessibilité et le nombre d'arbres à traiter. Contactez Arbovert pour un devis personnalisé gratuit.
                </p>
              </div>
            </section>

            {/* Calendrier d'intervention */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Calendrier d'intervention en Haute-Garonne</h2>

              <p className="text-lg text-night/80 mb-6">
                La lutte contre la chenille processionnaire est un <strong>combat qui se mène toute l'année</strong>. Chaque saison a son action prioritaire. Voici le calendrier adapté au climat de Toulouse et de la Haute-Garonne.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center text-xl">☀️</span>
                    <div>
                      <p className="font-heading text-lg text-forest">Été (juin – août)</p>
                      <p className="text-sm text-night/50">Prévention en amont</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Pose des <strong>pièges à phéromones</strong> pour capturer les papillons mâles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Installation des <strong>nichoirs à mésanges</strong> (si pas encore fait)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Surveillance de l'apparition des premières pontes sur les aiguilles</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-xl">🍂</span>
                    <div>
                      <p className="font-heading text-lg text-forest">Automne (sept – nov)</p>
                      <p className="text-sm text-night/50">Période clé du traitement</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span><strong>Traitement Btk</strong> par pulvérisation sur le feuillage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Pose des <strong>éco-pièges</strong> autour des troncs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Identification des premiers pré-nids dans les pins</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center text-xl">❄️</span>
                    <div>
                      <p className="font-heading text-lg text-forest">Hiver (déc – fév)</p>
                      <p className="text-sm text-night/50">Échenillage des nids</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span><strong>Échenillage</strong> : retrait des nids par élagueur grimpeur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span><strong>Incinération</strong> des nids collectés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Vérification du bon fonctionnement des éco-pièges</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-green-100 border border-green-300 flex items-center justify-center text-xl">🌱</span>
                    <div>
                      <p className="font-heading text-lg text-forest">Printemps (mars – avril)</p>
                      <p className="text-sm text-night/50">Vigilance maximale</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Dernières interventions d'<strong>échenillage avant les processions</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Collecte des sacs des éco-pièges et destruction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-forest">•</span>
                      <span>Éloigner enfants et animaux des zones à risque</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prévention */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Prévention : les bons réflexes à adopter</h2>

              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  La prévention est la clé pour limiter les risques liés aux chenilles processionnaires. Voici les réflexes essentiels pour protéger votre famille, vos animaux et vos arbres.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                      <span className="font-heading text-forest text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-forest mb-1">Surveillez vos pins dès octobre</h3>
                      <p className="text-night/80">
                        Inspectez régulièrement la cime de vos pins à la recherche de nids. Plus vous les détectez tôt, plus le traitement sera simple et efficace. Utilisez des jumelles pour repérer les cocons blancs dans les branches hautes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                      <span className="font-heading text-forest text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-forest mb-1">Ne JAMAIS toucher un nid ou une chenille</h3>
                      <p className="text-night/80">
                        Même avec des gants, ne tentez pas de manipuler un nid ou une chenille processionnaire. Les poils urticants traversent les gants en tissu et se dispersent dans l'air au moindre mouvement. Seul un professionnel équipé peut intervenir en sécurité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                      <span className="font-heading text-forest text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-forest mb-1">Éloignez les enfants et les animaux</h3>
                      <p className="text-night/80">
                        De janvier à avril, interdisez l'accès aux zones proches des pins infestés. Tenez les chiens en laisse lors des promenades dans les zones boisées de pins. Expliquez aux enfants les dangers et apprenez-leur à reconnaître les processions au sol.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                      <span className="font-heading text-forest text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-forest mb-1">Faites intervenir un professionnel</h3>
                      <p className="text-night/80">
                        Le retrait de nids et le traitement Btk nécessitent un savoir-faire et un équipement spécialisé. Un <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">élagueur professionnel</Link> dispose de la combinaison de protection, du matériel de grimpe et de l'expérience nécessaires pour intervenir en sécurité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                      <span className="font-heading text-forest text-lg">5</span>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-forest mb-1">Envisagez des essences alternatives</h3>
                      <p className="text-night/80">
                        Si vous plantez de nouveaux arbres, privilégiez des essences non sensibles aux processionnaires : chênes verts, oliviers, érables de Montpellier, arbousiers, micocouliers. Ces espèces sont parfaitement adaptées au climat toulousain et apportent de la biodiversité à votre jardin. Consultez notre article sur <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">l'entretien des arbres à Toulouse</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Questions fréquentes sur la chenille processionnaire</h2>

              <div className="space-y-4">
                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Quand intervenir contre les chenilles processionnaires à Toulouse ?</h3>
                  <p className="text-night/80">
                    Le calendrier d'intervention dépend de la méthode choisie. Les <strong>pièges à phéromones</strong> se posent en été (juin-août) pour capturer les papillons. Le <strong>traitement Btk</strong> s'applique en automne (septembre-novembre) sur les jeunes chenilles. L'<strong>échenillage des nids</strong> se pratique en hiver (décembre-février). Les <strong>éco-pièges</strong> se posent dès l'automne et restent actifs jusqu'au printemps. En Haute-Garonne, les processions au sol débutent généralement en janvier et peuvent durer jusqu'en avril selon les conditions météo.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Peut-on enlever soi-même un nid de processionnaires ?</h3>
                  <p className="text-night/80">
                    C'est <strong>fortement déconseillé et dangereux</strong>. Les nids contiennent des millions de poils urticants qui se dispersent dans l'air au moindre contact. Même un nid apparemment vide reste dangereux car les poils persistent pendant des mois. L'intervention nécessite un équipement de protection intégrale (combinaison, masque respiratoire, lunettes étanches) et du matériel de grimpe pour accéder à la cime des pins, souvent à plus de 10 mètres de hauteur. Faites appel à un <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">élagueur professionnel</Link> qui dispose du matériel et de l'expertise nécessaires.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Combien coûte un traitement contre les chenilles processionnaires ?</h3>
                  <p className="text-night/80">
                    Les tarifs varient selon la méthode et la situation. L'<strong>échenillage</strong> (retrait de nids) coûte entre 80 et 200 euros par arbre selon la hauteur et l'accessibilité. Un <strong>éco-piège</strong> revient à 50-100 euros pose comprise. Le <strong>traitement Btk</strong> par pulvérisation coûte entre 100 et 300 euros selon la surface à traiter. Les <strong>pièges à phéromones</strong> coûtent 30 à 60 euros l'unité. Un <strong>nichoir à mésanges</strong> revient à 20-40 euros. Pour les grands jardins avec plusieurs pins, nous proposons des forfaits annuels incluant un suivi sur les quatre saisons. <Link href="/#contact" className="text-forest underline hover:text-forest/80">Contactez Arbovert</Link> pour un devis gratuit adapté à votre situation.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Les chenilles processionnaires tuent-elles les pins ?</h3>
                  <p className="text-night/80">
                    Une seule infestation ne tue généralement pas un <strong>pin adulte en bonne santé</strong>, mais elle l'affaiblit considérablement en le privant d'une partie de ses aiguilles, réduisant sa capacité de photosynthèse. Des <strong>infestations répétées sur plusieurs années</strong>, combinées au stress hydrique lié aux sécheresses estivales fréquentes à Toulouse, peuvent entraîner le dépérissement puis la mort de l'arbre. Les <strong>jeunes pins</strong> et les arbres déjà fragilisés (maladie, blessure, sol pauvre) sont les plus vulnérables. Un traitement préventif régulier est donc vivement recommandé pour préserver la santé de vos arbres sur le long terme.
                  </p>
                </div>
              </div>
            </section>

            {/* À lire aussi */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">À lire aussi</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/quand-elaguer-arbres-toulouse" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-heading text-forest group-hover:text-forest/80 transition-colors mb-2">Quand élaguer vos arbres à Toulouse ?</p>
                  <p className="text-sm text-night/60">Calendrier et périodes idéales par essence</p>
                </Link>
                <Link href="/blog/entretien-jardin-printemps" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-heading text-forest group-hover:text-forest/80 transition-colors mb-2">Entretien de jardin au printemps</p>
                  <p className="text-sm text-night/60">Les gestes essentiels pour préparer la belle saison</p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl text-forest mb-6">
                Nids de processionnaires dans vos pins ? Contactez Arbovert
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Nos élagueurs grimpeurs interviennent rapidement et en toute sécurité pour retirer les nids de chenilles processionnaires. Matériel de protection adapté, incinération des nids, conseils de prévention personnalisés. Devis gratuit sous 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
                  06 48 76 85 15
                </a>
                <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
                  Demander un devis gratuit
                </Link>
              </div>
              <p className="text-sm text-night/60">
                Intervention à <Link href="/elagage-toulouse" className="text-forest underline">Toulouse</Link>,{' '}
                <Link href="/elagage-muret" className="text-forest underline">Muret</Link>,{' '}
                <Link href="/elagage-colomiers" className="text-forest underline">Colomiers</Link>,{' '}
                <Link href="/elagage-balma" className="text-forest underline">Balma</Link>,{' '}
                <Link href="/elagage-ramonville" className="text-forest underline">Ramonville</Link>,{' '}
                <Link href="/elagage-castanet-tolosan" className="text-forest underline">Castanet-Tolosan</Link>{' '}
                et toute la Haute-Garonne.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
