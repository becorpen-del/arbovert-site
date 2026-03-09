import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
  title: 'Quand élaguer vos arbres à Toulouse ? Calendrier et périodes | Arbovert',
  description:
    'Guide complet des périodes d\'élagage en Haute-Garonne. Calendrier par essence (feuillus, conifères, fruitiers), réglementation et conseils d\'experts élagueurs.',
  keywords: ['quand élaguer', 'période élagage', 'calendrier élagage', 'élagage quelle période', 'quand tailler arbres', 'période taille arbre', 'élagage automne', 'élagage hiver'],
  alternates: {
    canonical: '/blog/quand-elaguer-arbres-toulouse'
  },
  openGraph: {
    title: 'Quand élaguer vos arbres à Toulouse ? Calendrier et périodes idéales',
    description: 'Guide complet des périodes d\'élagage par essence en Haute-Garonne. Feuillus, conifères, fruitiers.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/quand-elaguer-arbres-toulouse'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Quand élaguer vos arbres à Toulouse ? Calendrier et périodes idéales",
      "description": "Guide complet des périodes d'élagage par essence en Haute-Garonne. Feuillus, conifères, fruitiers : calendrier optimal.",
      "datePublished": "2026-03-01",
      "dateModified": "2026-03-01",
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
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/quand-elaguer-arbres-toulouse"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Quand élaguer vos arbres", "item": "https://www.arbovert-31.fr/blog/quand-elaguer-arbres-toulouse" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la meilleure période pour élaguer un arbre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La meilleure période dépend de l'essence. Les feuillus (chênes, platanes, érables) se taillent idéalement entre novembre et février pendant le repos végétatif. Les conifères entre septembre et novembre ou en mars-avril. Les fruitiers en janvier-mars hors gel. Évitez la période du 16 mars au 31 août (nidification des oiseaux)."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on élaguer en été ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'élagage en été est déconseillé pour la plupart des essences car l'arbre est en pleine activité végétative. La taille en été provoque un stress hydrique et favorise les infections. Exception : taille légère de mise en forme, suppression de bois mort. La période du 16 mars au 31 août est aussi protégée pour la nidification des oiseaux."
          }
        },
        {
          "@type": "Question",
          "name": "L'élagage est-il interdit à certaines périodes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il n'y a pas d'interdiction légale stricte, mais la LPO recommande fortement d'éviter toute taille entre le 16 mars et le 31 août pour protéger la nidification des oiseaux. Certaines communes (dont Toulouse) peuvent imposer des restrictions via le PLU ou des arrêtés municipaux. Les platanes du Canal du Midi sont soumis à un arrêté préfectoral spécifique."
          }
        }
      ]
    }
  ]
};

export default function QuandElaguer() {
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
                Guide pratique
              </span>
              <time className="text-sm text-night/50" dateTime="2026-03-01">
                1 mars 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Quand élaguer vos arbres à Toulouse ? Calendrier et périodes idéales
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed">
              L'élagage au bon moment est essentiel pour la santé de vos arbres. Trop tôt ou trop tard, la taille peut fragiliser l'arbre, favoriser les maladies ou perturber la faune. Voici le <strong>guide complet des périodes d'élagage</strong> adapté au climat de Toulouse et de la Haute-Garonne.
            </p>
          </div>
        </section>

        <AuthorCard
          name="Guillaume"
          role="Co-gérant & élagueur grimpeur — CAPA Travaux Forestiers"
          bio="6 ans dans l'armée, passionné de trail et de nature. Mon credo : un travail soigné et le respect de chaque arbre."
          photo="/guillaume.jpg"
          datePublished="2026-03-01"
          dateModified="2026-03-01"
        />

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* Pourquoi la période compte */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pourquoi la période d'élagage est-elle si importante ?</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  Un arbre n'est pas un simple poteau. C'est un organisme vivant qui traverse des <strong>cycles saisonniers</strong> : croissance au printemps, pleine activité en été, ralentissement en automne, repos en hiver. La période de taille influence directement :
                </p>
                <ul className="space-y-3 text-night/80 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🌿</span>
                    <span><strong>La cicatrisation</strong> : un arbre taillé en repos végétatif cicatrise mieux car il ne gaspille pas d'énergie en sève montante.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🦠</span>
                    <span><strong>Le risque de maladies</strong> : les champignons et bactéries sont moins actifs en hiver. Une coupe estivale expose l'arbre aux infections.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">🐦</span>
                    <span><strong>La faune</strong> : du 16 mars au 31 août, les oiseaux nichent dans vos arbres. La LPO recommande de ne pas élaguer pendant cette période.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">💧</span>
                    <span><strong>Le stress hydrique</strong> : une taille en plein été, surtout lors de canicules fréquentes à Toulouse, provoque un stress majeur pour l'arbre.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Calendrier par essence */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Calendrier d'élagage par type d'arbre</h2>

              {/* Feuillus */}
              <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Feuillus (chênes, platanes, érables, tilleuls, frênes)</h3>
                <div className="rounded-2xl bg-white p-6 border border-forest/10 mb-4">
                  <p className="font-heading text-lg text-leaf mb-2">Période idéale : novembre à février</p>
                  <p className="text-night/80">
                    Les feuillus se taillent pendant le <strong>repos végétatif</strong>, c'est-à-dire quand l'arbre a perdu ses feuilles et que la sève est descendue. À Toulouse, cette période s'étend généralement de <strong>mi-novembre à fin février</strong>.
                  </p>
                </div>
                <p className="text-night/80 mb-3">
                  <strong>Pourquoi cette période ?</strong> L'arbre sans feuilles permet de mieux voir sa structure et d'identifier les branches mortes, malades ou mal orientées. La cicatrisation sera optimale au redémarrage de la végétation en mars.
                </p>
                <p className="text-night/80">
                  <strong>Essences courantes à Toulouse :</strong> les platanes (très présents le long des boulevards et du Canal du Midi), chênes verts (coteaux de Pech-David, Balma), chênes pédonculés, érables, tilleuls et peupliers (bords de Garonne).
                </p>
              </div>

              {/* Conifères */}
              <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Conifères (pins, cyprès, cèdres, sapins)</h3>
                <div className="rounded-2xl bg-white p-6 border border-forest/10 mb-4">
                  <p className="font-heading text-lg text-leaf mb-2">Période idéale : septembre-novembre ou mars-avril</p>
                  <p className="text-night/80">
                    Les conifères n'ont pas de véritable repos végétatif (ils gardent leurs aiguilles). La taille se fait à <strong>l'automne</strong> (après la chaleur estivale) ou au <strong>début du printemps</strong> (avant la pousse active).
                  </p>
                </div>
                <p className="text-night/80 mb-3">
                  <strong>Attention :</strong> les conifères ne repoussent pas sur le vieux bois. Si vous coupez au-delà de la zone verte, la branche restera nue définitivement. C'est pourquoi un élagage régulier (tous les 2-3 ans) est préférable à une taille sévère.
                </p>
                <p className="text-night/80">
                  <strong>Essences courantes à Toulouse :</strong> pins maritimes et pins parasols (sud et ouest métropole), cyprès de Leyland et cyprès de Provence (haies), cèdres du Liban (parcs et grands jardins).
                </p>
              </div>

              {/* Fruitiers */}
              <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8 shadow-sm mb-6">
                <h3 className="font-heading text-xl text-forest mb-4">Arbres fruitiers (pommiers, cerisiers, pruniers, figuiers)</h3>
                <div className="rounded-2xl bg-white p-6 border border-forest/10 mb-4">
                  <p className="font-heading text-lg text-leaf mb-2">Période idéale : janvier à mars (hors gel)</p>
                  <p className="text-night/80">
                    Les fruitiers se taillent en <strong>fin d'hiver</strong>, juste avant le redémarrage de la végétation. À Toulouse, les gelées sont rares après mi-février, ce qui offre une fenêtre de taille confortable.
                  </p>
                </div>
                <p className="text-night/80 mb-3">
                  <strong>Distinction importante :</strong> la taille de formation (jeune arbre) et la taille de fructification (arbre adulte) ne se font pas de la même façon. La taille de fructification vise à favoriser la production de fruits en aérant le centre de l'arbre.
                </p>
                <p className="text-night/80">
                  <strong>Essences courantes à Toulouse :</strong> cerisiers, pruniers (prune d'Ente locale), figuiers (très bien adaptés au climat), pommiers, poiriers, oliviers (de plus en plus plantés grâce au réchauffement).
                </p>
              </div>

              {/* Haies */}
              <div className="rounded-3xl border border-forest/10 bg-beige/30 p-8 shadow-sm">
                <h3 className="font-heading text-xl text-forest mb-4">Haies (lauriers, thuyas, photinias, troènes)</h3>
                <div className="rounded-2xl bg-white p-6 border border-forest/10 mb-4">
                  <p className="font-heading text-lg text-leaf mb-2">Période idéale : mai-juin et septembre</p>
                  <p className="text-night/80">
                    Les haies se taillent <strong>deux fois par an</strong> pour rester nettes : une première taille après la pousse printanière (mai-juin) et une seconde en septembre avant l'hiver.
                  </p>
                </div>
                <p className="text-night/80">
                  <strong>Bon à savoir :</strong> la taille de haies est éligible au <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt 50%</Link> via notre agrément Services à la Personne. C'est l'un des services les plus demandés à Toulouse et dans la métropole.
                </p>
              </div>
            </section>

            {/* Tableau récapitulatif */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Tableau récapitulatif : quand élaguer en Haute-Garonne</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-3 font-heading text-forest">Type d'arbre</th>
                      <th className="pb-3 font-heading text-forest">Jan</th>
                      <th className="pb-3 font-heading text-forest">Fév</th>
                      <th className="pb-3 font-heading text-forest">Mar</th>
                      <th className="pb-3 font-heading text-forest">Avr</th>
                      <th className="pb-3 font-heading text-forest">Mai</th>
                      <th className="pb-3 font-heading text-forest">Jun</th>
                      <th className="pb-3 font-heading text-forest">Jul</th>
                      <th className="pb-3 font-heading text-forest">Aoû</th>
                      <th className="pb-3 font-heading text-forest">Sep</th>
                      <th className="pb-3 font-heading text-forest">Oct</th>
                      <th className="pb-3 font-heading text-forest">Nov</th>
                      <th className="pb-3 font-heading text-forest">Déc</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Feuillus</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Conifères</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">⚠️</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3 font-medium">Fruitiers</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Haies</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">✅</td>
                      <td className="py-3 text-center">⚠️</td>
                      <td className="py-3 text-center">❌</td>
                      <td className="py-3 text-center">❌</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-night/60">
                  <span>✅ Période idéale</span>
                  <span>⚠️ Possible avec précautions</span>
                  <span>❌ Déconseillé</span>
                </div>
              </div>
            </section>

            {/* Spécificités Toulouse */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Spécificités du climat toulousain pour l'élagage</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  Le climat de Toulouse et de la Haute-Garonne présente des particularités qui influencent directement les périodes d'élagage :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Hivers doux</h3>
                    <p className="text-night/80 text-sm">
                      Les gelées prolongées sont rares à Toulouse (moyenne 20-30 jours de gel/an). Cela offre une <strong>fenêtre d'élagage plus longue</strong> en hiver qu'en région parisienne ou dans l'est. On peut souvent élaguer dès mi-novembre et jusqu'à fin février sans risque de gel dommageable.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Étés chauds et secs</h3>
                    <p className="text-night/80 text-sm">
                      Les canicules (35°C+) sont fréquentes en juillet-août. <strong>Élaguer en été est fortement déconseillé</strong> : l'arbre, déjà stressé par la chaleur, supporte mal les coupes. Risque accru de dessèchement et d'infection des plaies.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Vent d'Autan</h3>
                    <p className="text-night/80 text-sm">
                      Le vent d'Autan (sud-est) peut souffler à 60-100 km/h. Les arbres mal élagués ou fragilisés sont particulièrement vulnérables. Un <strong>élagage préventif avant l'automne</strong> réduit la prise au vent et limite les risques de casse. Découvrez nos <Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">réalisations avant/après</Link> incluant des interventions de sécurisation après intempéries.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-3">Printemps précoce</h3>
                    <p className="text-night/80 text-sm">
                      La végétation redémarre tôt à Toulouse (souvent dès fin février). <strong>N'attendez pas mars</strong> pour élaguer vos feuillus : la montée de sève précoce peut provoquer des écoulements importants sur les plaies de coupe.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Réglementation */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Réglementation : a-t-on le droit d'élaguer toute l'année ?</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Il n'existe pas d'interdiction légale nationale d'élaguer à une période donnée. Cependant, plusieurs réglementations encadrent la pratique :
                </p>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Protection de la nidification (LPO)</h3>
                    <p className="text-night/80">
                      La Ligue de Protection des Oiseaux recommande de <strong>ne pas élaguer entre le 16 mars et le 31 août</strong>. Bien que ce ne soit pas une interdiction stricte pour les particuliers, la destruction de nids occupés est un délit (article L411-1 du Code de l'Environnement). Amende : jusqu'à 150 000€.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">PLU et arrêtés municipaux</h3>
                    <p className="text-night/80">
                      Certaines communes de la métropole toulousaine protègent des arbres via le PLU (Plan Local d'Urbanisme). Les <strong>arbres classés</strong> ou situés en zone protégée nécessitent une autorisation avant élagage. Renseignez-vous auprès de votre mairie.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Canal du Midi (arrêté préfectoral)</h3>
                    <p className="text-night/80">
                      Les platanes et arbres à proximité du Canal du Midi sont soumis à un <strong>arrêté préfectoral</strong> lié au chancre coloré. Le matériel doit être désinfecté entre chaque arbre, et le transport de bois potentiellement contaminé est réglementé. Arbovert respecte ces protocoles.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Obligation d'élaguer (Code civil)</h3>
                    <p className="text-night/80">
                      L'article 673 du Code civil autorise votre voisin à vous demander de couper les branches qui dépassent sur sa propriété. Si vous ne le faites pas, il peut saisir le tribunal. À l'inverse, les racines qui empiètent peuvent être coupées par le voisin lui-même.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conseil anticipation */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Notre conseil : anticipez votre élagage</h2>
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  La <strong>haute saison</strong> pour les élagueurs en Haute-Garonne se situe entre <strong>mars et avril</strong>. C'est la période où les demandes explosent et les délais s'allongent.
                </p>
                <p className="text-lg text-night/80 mb-4">
                  <strong>Notre recommandation :</strong> demandez votre devis dès <strong>janvier-février</strong> pour planifier une intervention en début de printemps. Vous bénéficierez de meilleurs délais et pourrez comparer sereinement les devis. Pour vous faire une idée du travail réalisé, parcourez nos <Link href="/realisations-elagueur-haute-garonne" className="text-forest underline hover:text-forest/80">exemples de chantiers récents en Haute-Garonne</Link>.
                </p>
                <p className="text-lg text-night/80">
                  Pour les <strong>urgences</strong> (arbre menaçant, dégâts de tempête), nous intervenons toute l'année. Consultez notre page <Link href="/elagage-urgence-toulouse" className="text-forest underline hover:text-forest/80">élagage d'urgence à Toulouse</Link>.
                </p>
              </div>
            </section>

          </div>
        </article>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
              <h2 className="font-heading text-3xl text-forest mb-6">
                Besoin d'un élagage professionnel ?
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Arbovert intervient dans toute la Haute-Garonne. Nos élagueurs certifiés CAPA vous conseillent sur la meilleure période pour vos arbres. Devis gratuit sous 24h.
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
                <Link href="/elagage-balma" className="text-forest underline">Balma</Link>,{' '}
                <Link href="/elagage-labege" className="text-forest underline">Labège</Link>,{' '}
                <Link href="/elagage-ramonville" className="text-forest underline">Ramonville</Link>{' '}
                et toute la Haute-Garonne.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
