import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Entretien de jardin au printemps à Toulouse : le guide complet | Arbovert',
  description: 'Préparez votre jardin pour le printemps en Haute-Garonne : taille des arbres, entretien des haies, pelouse, arbustes. Calendrier et conseils d\'experts élagueurs.',
  keywords: ['entretien jardin printemps toulouse', 'taille arbres printemps', 'entretien haies printemps', 'jardin haute-garonne', 'taille arbustes mars avril', 'préparation jardin printemps', 'élagage printanier', 'entretien espaces verts toulouse'],
  alternates: { canonical: '/blog/entretien-jardin-printemps' },
  openGraph: {
    title: 'Entretien de jardin au printemps à Toulouse : le guide complet',
    description: 'Guide complet pour préparer votre jardin au printemps en Haute-Garonne.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/entretien-jardin-printemps'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Entretien de jardin au printemps à Toulouse : le guide mois par mois",
      "description": "Guide complet pour préparer votre jardin au printemps en Haute-Garonne. Calendrier mars à mai, taille des arbres, haies, pelouse et conseils d'experts.",
      "datePublished": "2026-04-15",
      "dateModified": "2026-04-15",
      "author": {
        "@type": "Organization",
        "name": "Arbovert",
        "url": "https://www.arbovert-31.fr"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Arbovert",
        "url": "https://www.arbovert-31.fr"
      },
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/entretien-jardin-printemps"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Entretien jardin printemps Toulouse", "item": "https://www.arbovert-31.fr/blog/entretien-jardin-printemps" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quand commencer l'entretien du jardin au printemps à Toulouse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "À Toulouse et en Haute-Garonne, le printemps est précoce grâce au climat doux. Vous pouvez commencer l'entretien dès fin février avec le nettoyage des massifs et les dernières tailles d'hiver. En mars, taillez les rosiers, les fruitiers et vérifiez l'état de vos arbres après l'hiver. Avril et mai sont consacrés aux haies, à la pelouse et à la surveillance des parasites."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on tailler les haies au printemps ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, mais avec précaution. La LPO recommande d'éviter toute taille entre le 16 mars et le 31 août pour protéger la nidification des oiseaux. La destruction de nids occupés est un délit passible de 150 000 euros d'amende. Privilégiez une taille avant mi-mars ou après fin août. Si vous devez intervenir entre ces dates, vérifiez l'absence de nids avant de commencer."
          }
        },
        {
          "@type": "Question",
          "name": "Comment savoir si mon arbre a besoin d'un élagage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plusieurs signes doivent vous alerter : branches mortes ou cassées visibles dans la couronne, branches qui frottent entre elles, écorce fissurée ou décollée, champignons au pied du tronc, inclinaison anormale, ou branchage trop dense empêchant la lumière de passer. Après l'hiver, inspectez vos arbres et faites appel à un élagueur professionnel pour un diagnostic si vous avez un doute."
          }
        },
        {
          "@type": "Question",
          "name": "L'entretien de jardin est-il éligible au crédit d'impôt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, l'entretien de jardin réalisé par un professionnel agréé Services à la Personne (SAP) est éligible au crédit d'impôt de 50%. Cela inclut la tonte de pelouse, la taille de haies jusqu'à 3,50 m, le débroussaillage, le ramassage de feuilles et le petit entretien courant. Arbovert dispose de l'agrément SAP, ce qui permet à ses clients de bénéficier de cet avantage fiscal dans la limite de 5 000 euros de dépenses par an."
          }
        }
      ]
    }
  ]
};

export default function EntretienJardinPrintemps() {
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
                Guide saisonnier
              </span>
              <time className="text-sm text-night/50" dateTime="2026-04-15">
                15 avril 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Entretien de jardin au printemps à Toulouse : le guide mois par mois
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed italic">
              Avec son climat doux et ses printemps précoces dès le mois de mars, la région toulousaine offre des conditions idéales pour préparer votre jardin. Mais ce climat a aussi ses pièges : gel tardif en mars, vent d'Autan desséchant, sol argileux capricieux. Voici le <strong>guide complet de l'entretien de jardin au printemps</strong>, mois par mois, adapté aux spécificités de la Haute-Garonne.
            </p>
          </div>
        </section>

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* Pourquoi l'entretien printanier est crucial */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pourquoi l'entretien printanier est crucial en Haute-Garonne</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  Le printemps en Haute-Garonne n'est pas tout à fait comme ailleurs en France. Le <strong>climat semi-océanique à tendance méditerranéenne</strong> de la région toulousaine crée des conditions particulières qui influencent directement la manière dont vous devez entretenir votre jardin.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Un printemps précoce</h3>
                    <p className="text-night/80 text-sm">
                      La végétation redémarre souvent dès <strong>fin février à Toulouse</strong>, soit 2 à 3 semaines plus tôt qu'en région parisienne. Les forsythias fleurissent en février, les magnolias en mars. Cette précocité vous oblige à anticiper vos interventions : si vous attendez avril pour tailler vos rosiers, il sera déjà trop tard.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Le risque de gel tardif</h3>
                    <p className="text-night/80 text-sm">
                      Malgré la douceur générale, des <strong>gelées tardives en mars</strong> (parfois jusqu'à début avril) peuvent surprendre les végétaux déjà en pleine reprise. Les fruitiers en fleur et les jeunes pousses sont particulièrement vulnérables. Il est crucial de ne pas tailler trop tôt les arbustes sensibles au froid.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Le vent d'Autan</h3>
                    <p className="text-night/80 text-sm">
                      Ce vent du sud-est, typique de la région, peut souffler à <strong>60 à 100 km/h</strong> au printemps. Il assèche les sols, casse les branches fragiles et stresse les végétaux. Un jardin bien entretenu et des arbres correctement élagués résistent nettement mieux à ces épisodes venteux.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Le sol argileux</h3>
                    <p className="text-night/80 text-sm">
                      Le sol typique de la plaine toulousaine est <strong>argileux et lourd</strong>. Il retient l'eau en hiver (risque d'asphyxie racinaire) et se craquelle en été (sécheresse). Au printemps, c'est le moment idéal pour travailler ce sol : il est suffisamment ressuyé pour être aéré sans être encore trop sec.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-night/80">
                  En résumé, le printemps est une <strong>fenêtre d'intervention stratégique</strong> en Haute-Garonne. C'est le moment de corriger les dégâts de l'hiver, de préparer vos arbres et arbustes pour la saison de croissance, et de poser les bases d'un jardin sain et esthétique pour tout l'été. Un entretien printanier bien mené, c'est aussi <strong>moins de travail (et de dépenses) en été et en automne</strong>.
                </p>
              </div>
            </section>

            {/* Calendrier d'entretien : mars à mai */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Calendrier d'entretien : mars à mai</h2>
              <p className="text-lg text-night/80 mb-8">
                Voici votre programme d'entretien détaillé, mois par mois, adapté au rythme de la végétation en Haute-Garonne. Chaque mois a ses priorités et ses gestes incontournables.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Mars */}
                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-6 shadow-sm">
                  <div className="rounded-2xl bg-leaf/10 p-4 border border-leaf/20 mb-4 text-center">
                    <p className="font-heading text-2xl text-forest">Mars</p>
                    <p className="text-sm text-night/60">Le grand nettoyage</p>
                  </div>
                  <ul className="space-y-3 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">1</span>
                      <span><strong>Dernières tailles d'hiver</strong> : finissez la taille des arbres caducs avant la montée de sève (idéalement avant le 15 mars)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">2</span>
                      <span><strong>Taille des rosiers</strong> : taillez à 3 yeux au-dessus du point de greffe. Supprimez le bois mort et les tiges chétives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">3</span>
                      <span><strong>Taille des fruitiers</strong> : pommiers, poiriers et cerisiers (avant floraison). Aérez le centre de l'arbre pour favoriser la fructification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">4</span>
                      <span><strong>Nettoyage des massifs</strong> : retirez les feuilles mortes, les branches cassées et les protections hivernales (voiles, paillis épais)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">5</span>
                      <span><strong>Inspection des arbres</strong> : vérifiez l'état sanitaire de vos arbres après l'hiver (branches cassées, champignons, écorce abîmée)</span>
                    </li>
                  </ul>
                </div>

                {/* Avril */}
                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-6 shadow-sm">
                  <div className="rounded-2xl bg-leaf/10 p-4 border border-leaf/20 mb-4 text-center">
                    <p className="font-heading text-2xl text-forest">Avril</p>
                    <p className="text-sm text-night/60">La mise en forme</p>
                  </div>
                  <ul className="space-y-3 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">1</span>
                      <span><strong>Taille des haies</strong> : effectuez une première taille de mise en forme avant mi-avril (attention à la nidification, <Link href="/blog/reglementation-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">voir réglementation</Link>)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">2</span>
                      <span><strong>Premières tontes</strong> : commencez par une tonte haute (7-8 cm) pour ne pas stresser le gazon en reprise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">3</span>
                      <span><strong>Fertilisation</strong> : apportez un engrais organique (compost, corne broyée) au pied des arbres, arbustes et rosiers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">4</span>
                      <span><strong>Taille des arbustes à floraison estivale</strong> : buddleia (arbre à papillons), hibiscus, lavatère. Taillez sévèrement pour stimuler la pousse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">5</span>
                      <span><strong>Vérification des tuteurs</strong> : contrôlez et ajustez les tuteurs des jeunes arbres plantés à l'automne. Desserrez les liens qui pourraient blesser le tronc</span>
                    </li>
                  </ul>
                </div>

                {/* Mai */}
                <div className="rounded-3xl border border-forest/10 bg-beige/30 p-6 shadow-sm">
                  <div className="rounded-2xl bg-leaf/10 p-4 border border-leaf/20 mb-4 text-center">
                    <p className="font-heading text-2xl text-forest">Mai</p>
                    <p className="text-sm text-night/60">La surveillance active</p>
                  </div>
                  <ul className="space-y-3 text-night/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">1</span>
                      <span><strong>Taille de formation</strong> : formez les jeunes arbres en supprimant les gourmands et en guidant la structure de la ramure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">2</span>
                      <span><strong>Élagage léger</strong> : suppression du bois mort, dégagement des branches basses gênantes. Consultez un <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">élagueur professionnel à Toulouse</Link> pour les gros sujets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">3</span>
                      <span><strong>Entretien du gazon</strong> : tonte régulière (tous les 7-10 jours), hauteur 5-6 cm. Réensemencez les zones clairsemées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">4</span>
                      <span><strong>Surveillance des parasites</strong> : guettez la chenille processionnaire du pin (très présente en Haute-Garonne), les pucerons et les cochenilles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-leaf font-bold mt-0.5">5</span>
                      <span><strong>Arrosage</strong> : commencez à arroser les jeunes plantations si le temps est sec. Le sol argileux toulousain se dessèche vite en surface dès mai</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* La taille des arbres au printemps */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">La taille des arbres au printemps : ce qu'il faut savoir</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Le printemps est une période de transition pour les arbres. La sève remonte, les bourgeons éclosent, la croissance reprend. Toute taille à cette saison doit être réfléchie : certains arbres s'y prêtent bien, d'autres risquent d'être gravement affaiblis. Pour un guide complet des périodes d'élagage, consultez notre article <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">Quand élaguer vos arbres à Toulouse</Link>.
                </p>

                <div className="mb-6">
                  <h3 className="font-heading text-xl text-forest mb-4">La règle de la sève montante</h3>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <p className="text-night/80 mb-3">
                      Au printemps, la <strong>sève monte des racines vers les branches</strong> pour alimenter les bourgeons et les nouvelles feuilles. Si vous taillez un arbre à ce moment, la sève s'écoule par les plaies de coupe, ce qui affaiblit l'arbre et favorise les infections. C'est pourquoi les élagueurs professionnels distinguent deux types d'arbres au printemps :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      <div className="rounded-xl bg-leaf/5 p-4 border border-leaf/20">
                        <p className="font-heading text-leaf text-lg mb-2">Arbres à tailler au printemps</p>
                        <ul className="space-y-2 text-night/80 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-leaf">+</span>
                            <span><strong>Érables</strong> : taille douce de formation possible en mars-avril</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-leaf">+</span>
                            <span><strong>Tilleuls</strong> : taille douce avant la pleine feuillaison</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-leaf">+</span>
                            <span><strong>Conifères</strong> : taille d'entretien en mars-avril avant la pousse active</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-leaf">+</span>
                            <span><strong>Arbustes à floraison estivale</strong> : buddleia, hibiscus, althéa (taille sévère en mars)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-leaf">+</span>
                            <span><strong>Fruitiers</strong> : pommiers et poiriers (taille de fructification avant floraison)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="rounded-xl bg-red-50 p-4 border border-red-200">
                        <p className="font-heading text-red-700 text-lg mb-2">Arbres à NE PAS tailler</p>
                        <ul className="space-y-2 text-night/80 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-red-500">-</span>
                            <span><strong>Cerisiers en fleur</strong> : la taille pendant la floraison compromet la récolte et fragilise l'arbre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500">-</span>
                            <span><strong>Bouleaux</strong> : sève très coulante au printemps, plaies qui ne se referment pas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500">-</span>
                            <span><strong>Noyers</strong> : très sensibles à la taille printanière, risque d'écoulement de sève prolongé</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500">-</span>
                            <span><strong>Arbustes à floraison printanière</strong> : forsythia, lilas, cognassier du Japon (attendre la fin de la floraison)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-500">-</span>
                            <span><strong>Chênes</strong> : préférez l'automne ou l'hiver pour les tailles importantes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-leaf/5 p-6 border border-leaf/20">
                  <p className="text-lg text-night/80 mb-2">
                    <strong>Le conseil Arbovert :</strong> le printemps est le meilleur moment pour <strong>observer la structure de vos arbres</strong>. Au tout début de la feuillaison, quand les feuilles commencent à peine à s'ouvrir, vous pouvez encore voir clairement la charpente. C'est le moment idéal pour repérer les problèmes (branches mortes, croisements, déséquilibres) et <strong>planifier un élagage pour l'automne ou l'hiver suivant</strong>. N'hésitez pas à nous contacter pour un diagnostic gratuit de vos arbres via notre page <Link href="/services-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">services d'élagage en Haute-Garonne</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Entretien des haies */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Entretien des haies : les bonnes pratiques</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Les haies sont omniprésentes dans les jardins de Haute-Garonne. Elles assurent l'intimité, protègent du vent d'Autan et abritent une faune précieuse. Mais leur entretien printanier doit respecter certaines règles, notamment en matière de <Link href="/blog/reglementation-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">réglementation sur la nidification</Link>.
                </p>

                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Période légale : respecter la nidification</h3>
                    <p className="text-night/80 mb-3">
                      La LPO recommande de <strong>ne pas tailler les haies entre le 16 mars et le 31 août</strong>, période de nidification des oiseaux. La destruction de nids occupés est un délit (jusqu'à 150 000 euros d'amende). En pratique :
                    </p>
                    <ul className="space-y-2 text-night/80">
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span>Taillez vos haies <strong>avant mi-mars</strong> ou <strong>après fin août</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span>Si une taille est indispensable en période de nidification, <strong>inspectez soigneusement la haie</strong> pour vérifier l'absence de nids</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span>En cas de doute, faites appel à un professionnel qui saura identifier les indices de nidification</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Fréquence recommandée</h3>
                    <p className="text-night/80">
                      Pour une haie dense et saine, prévoyez <strong>deux tailles par an</strong> : la première en fin d'hiver (février-mars, avant la nidification) et la seconde en septembre (après la nidification et avant l'hiver). Les haies à croissance rapide (laurier, photinia) peuvent nécessiter une <strong>troisième taille en juin</strong> si la pousse est vigoureuse, à condition de vérifier l'absence de nids au préalable.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Les haies typiques en Haute-Garonne</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="font-heading text-sm text-forest mb-2">Haies persistantes</p>
                        <ul className="space-y-1 text-night/80 text-sm">
                          <li><strong>Laurier-cerise</strong> : très courant, croissance rapide, taille 2 fois par an</li>
                          <li><strong>Photinia</strong> : feuillage rouge au printemps, vigoureux, taille régulière</li>
                          <li><strong>Thuya</strong> : classique mais exigeant, ne supporte pas la taille dans le vieux bois</li>
                          <li><strong>Cyprès de Leyland</strong> : croissance très rapide, peut devenir envahissant</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-heading text-sm text-forest mb-2">Haies champêtres</p>
                        <ul className="space-y-1 text-night/80 text-sm">
                          <li><strong>Troène</strong> : semi-persistant, floraison parfumée, bonne résistance</li>
                          <li><strong>Eleagnus</strong> : persistant, très résistant à la sécheresse</li>
                          <li><strong>Pittosporum</strong> : de plus en plus planté à Toulouse, bonne adaptation</li>
                          <li><strong>Haie mixte</strong> : mélange d'espèces, plus écologique et résistante</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Taille de formation vs taille d'entretien</h3>
                    <p className="text-night/80 mb-3">
                      La <strong>taille de formation</strong> concerne les jeunes haies (1 à 3 ans). Elle consiste à tailler régulièrement pour densifier la base et donner une forme homogène. On taille plus sévèrement en hauteur pour forcer les ramifications latérales.
                    </p>
                    <p className="text-night/80">
                      La <strong>taille d'entretien</strong> concerne les haies établies. Elle maintient la forme et le volume souhaités. La règle d'or : taillez toujours en trapèze (plus large à la base qu'au sommet) pour que la lumière atteigne toute la haie et éviter le dégarnissement de la base.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pelouse et gazon */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pelouse et gazon : reprise après l'hiver</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Après un hiver humide sur les sols argileux de la région toulousaine, votre pelouse a probablement souffert : zones détrempées, mousse, plaques jaunies, feutrage. Le printemps est le moment clé pour lui redonner vigueur et densité.
                </p>

                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">La scarification : le geste essentiel</h3>
                    <p className="text-night/80 mb-3">
                      La <strong>scarification</strong> consiste à griffer la surface du gazon pour éliminer le feutrage (couche de débris organiques et de mousse) qui étouffe l'herbe et empêche l'eau et l'air de pénétrer. Sur les sols argileux de Toulouse, cette opération est particulièrement importante car la compaction hivernale est forte.
                    </p>
                    <p className="text-night/80">
                      <strong>Quand ?</strong> Idéalement en <strong>mars-avril</strong>, quand le sol est ressuyé (ni trop humide, ni trop sec). Passez le scarificateur en deux passages croisés, puis ramassez soigneusement les débris. Vous pouvez ensuite regarnir les zones clairsemées.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Première tonte : ne coupez pas trop court</h3>
                    <p className="text-night/80">
                      La <strong>première tonte</strong> de l'année doit se faire en douceur. Réglez votre tondeuse à <strong>7-8 cm de hauteur</strong> pour ne pas stresser le gazon en pleine reprise. Tondez lorsque l'herbe est sèche, en évitant les jours de gel tardif. Baissez progressivement la hauteur de coupe au fil des semaines pour atteindre 5-6 cm en mai. Sur les sols argileux, évitez de tondre après de fortes pluies pour ne pas compacter davantage le sol.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Réensemencement des zones abîmées</h3>
                    <p className="text-night/80">
                      Après la scarification, identifiez les zones clairsemées ou à nu. <strong>Semez un gazon de regarnissage</strong> adapté au climat toulousain (mélange ray-grass, fétuque élevée et fétuque rouge), recouvrez légèrement de terreau et arrosez régulièrement pendant 3 semaines. Le printemps est la meilleure période pour le semis à Toulouse : les températures douces et les pluies intermittentes favorisent une germination rapide.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Spécificité du sol argileux toulousain</h3>
                    <p className="text-night/80 mb-3">
                      Le sol argileux pose un défi particulier pour la pelouse. Voici comment l'améliorer au printemps :
                    </p>
                    <ul className="space-y-2 text-night/80">
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span><strong>Aération</strong> : passez un aérateur à pointes ou à carottes pour décompacter le sol en profondeur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span><strong>Apport de sable</strong> : épandez du sable grossier sur les zones les plus compactées pour améliorer le drainage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span><strong>Compost en surface</strong> : un fin terreautage (1 cm de compost bien décomposé) nourrit le sol et améliore sa structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">-</span>
                        <span><strong>Chaux si nécessaire</strong> : les sols argileux sont souvent acides. Un chaulage printanier (après test pH) corrige l'acidité et favorise l'assimilation des nutriments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Crédit d'impôt */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Crédit d'impôt : faites entretenir votre jardin à moindre coût</h2>
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  Saviez-vous que l'entretien de votre jardin peut vous faire économiser <strong>50% grâce au crédit d'impôt</strong> ? En faisant appel à un professionnel agréé <strong>Services à la Personne (SAP)</strong> comme Arbovert, vous bénéficiez d'un avantage fiscal non négligeable.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Le dispositif SAP en bref</h3>
                    <p className="text-night/80">
                      Le dispositif <strong>Services à la Personne</strong> permet de déduire 50% du montant de vos dépenses d'entretien de jardin de vos impôts (ou de recevoir un crédit d'impôt si vous n'êtes pas imposable). Le plafond est de <strong>5 000 euros de dépenses par an</strong>, soit un avantage fiscal maximal de 2 500 euros. Ce dispositif est ouvert à tous les contribuables résidant en France.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Travaux éligibles au printemps</h3>
                    <ul className="space-y-2 text-night/80">
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Tonte de pelouse</strong> et ramassage de l'herbe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Taille de haies</strong> (hauteur maximale 3,50 m depuis le sol)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Débroussaillage</strong> et désherbage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Taille d'arbustes</strong> et de rosiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Nettoyage et entretien des massifs</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Ramassage de feuilles</strong> et évacuation des déchets verts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-leaf font-bold">+</span>
                        <span><strong>Scarification</strong> et entretien de la pelouse</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-lg text-night/80">
                  Pour en savoir plus sur les conditions, les plafonds et la marche à suivre, consultez notre page dédiée : <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt jardinage</Link>. Arbovert vous fournit l'attestation fiscale nécessaire à votre déclaration d'impôts.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Questions fréquentes sur l'entretien de jardin au printemps</h2>
              <div className="space-y-4">
                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Quand commencer l'entretien du jardin au printemps à Toulouse ?</h3>
                  <p className="text-night/80">
                    À Toulouse et en Haute-Garonne, le printemps est précoce grâce au climat doux. Vous pouvez commencer l'entretien dès <strong>fin février</strong> avec le nettoyage des massifs et les dernières tailles d'hiver. En <strong>mars</strong>, taillez les rosiers, les fruitiers et vérifiez l'état de vos arbres après l'hiver. <strong>Avril et mai</strong> sont consacrés aux haies, à la pelouse et à la surveillance des parasites. L'essentiel est de profiter des journées hors gel et de ne pas attendre que la végétation soit trop avancée pour intervenir.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Peut-on tailler les haies au printemps ?</h3>
                  <p className="text-night/80">
                    Oui, mais avec précaution. La LPO recommande d'éviter toute taille entre le <strong>16 mars et le 31 août</strong> pour protéger la nidification des oiseaux. La destruction de nids occupés est un délit passible de 150 000 euros d'amende. En pratique, privilégiez une taille <strong>avant mi-mars</strong> ou <strong>après fin août</strong>. Si vous devez absolument intervenir entre ces dates (haie trop envahissante, problème de visibilité sur la voie publique), inspectez soigneusement la haie au préalable pour vérifier l'absence de nids. Pour plus de détails, consultez notre <Link href="/blog/reglementation-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">guide de la réglementation élagage en Haute-Garonne</Link>.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Comment savoir si mon arbre a besoin d'un élagage ?</h3>
                  <p className="text-night/80">
                    Plusieurs signes doivent vous alerter au printemps : <strong>branches mortes ou cassées</strong> visibles dans la couronne (elles ne produisent pas de bourgeons alors que le reste de l'arbre est en feuilles), branches qui <strong>frottent entre elles</strong>, écorce fissurée ou décollée, <strong>champignons au pied du tronc</strong> ou sur les branches, inclinaison anormale du tronc, ou branchage <strong>trop dense empêchant la lumière</strong> de passer. Après un hiver venteux (fréquent en Haute-Garonne), inspectez systématiquement vos grands arbres et faites appel à un <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">élagueur professionnel à Toulouse</Link> pour un diagnostic si vous avez le moindre doute.
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">L'entretien de jardin est-il éligible au crédit d'impôt ?</h3>
                  <p className="text-night/80">
                    Oui, l'entretien de jardin réalisé par un professionnel agréé <strong>Services à la Personne (SAP)</strong> est éligible au <strong>crédit d'impôt de 50%</strong>. Cela inclut la tonte de pelouse, la taille de haies (jusqu'à 3,50 m de hauteur), le débroussaillage, le ramassage de feuilles, la taille d'arbustes et le petit entretien courant. Arbovert dispose de l'agrément SAP, ce qui permet à ses clients de bénéficier de cet avantage fiscal dans la limite de 5 000 euros de dépenses par an (soit 2 500 euros de crédit d'impôt). Retrouvez toutes les informations sur notre page <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt jardinage</Link>.
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
                <Link href="/blog/reglementation-elagage-haute-garonne" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-heading text-forest group-hover:text-forest/80 transition-colors mb-2">Réglementation élagage en Haute-Garonne</p>
                  <p className="text-sm text-night/60">Droits, obligations et voisinage</p>
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
                Besoin d'un professionnel pour votre jardin ce printemps ?
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Arbovert entretient votre jardin dans toute la Haute-Garonne : taille de haies, élagage, tonte, débroussaillage. Nos interventions sont éligibles au crédit d'impôt 50%. Devis gratuit sous 24h.
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
                <Link href="/elagage-colomiers" className="text-forest underline">Colomiers</Link>,{' '}
                <Link href="/elagage-tournefeuille" className="text-forest underline">Tournefeuille</Link>,{' '}
                <Link href="/elagage-muret" className="text-forest underline">Muret</Link>,{' '}
                <Link href="/elagage-balma" className="text-forest underline">Balma</Link>{' '}
                et toute la Haute-Garonne.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
