import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prix élagage 2026 à Toulouse : tarifs, devis et conseils | Arbovert',
  description: 'Combien coûte un élagage à Toulouse en 2026 ? Tarifs par type d\'arbre, facteurs de prix, comparatif et astuces pour réduire la facture. Guide complet par Arbovert.',
  keywords: ['prix élagage toulouse', 'tarif élagage arbre', 'coût élagage 2026', 'devis élagage toulouse', 'prix abattage arbre toulouse', 'tarif élagueur haute-garonne', 'élagage pas cher toulouse', 'prix taille arbre'],
  alternates: {
    canonical: '/blog/prix-elagage-toulouse'
  },
  openGraph: {
    title: 'Prix élagage 2026 à Toulouse : tarifs, devis et conseils',
    description: 'Guide complet des prix d\'élagage à Toulouse. Tarifs moyens, facteurs de prix et crédit d\'impôt.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/prix-elagage-toulouse'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Prix élagage à Toulouse en 2026 : guide complet des tarifs",
      "description": "Combien coûte un élagage à Toulouse en 2026 ? Tarifs par type d'arbre, facteurs de prix, comparatif et astuces pour réduire la facture.",
      "datePublished": "2026-04-01",
      "dateModified": "2026-04-01",
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
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/prix-elagage-toulouse"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Prix élagage Toulouse 2026" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le prix moyen d'un élagage à Toulouse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le prix moyen d'un élagage à Toulouse en 2026 se situe entre 80 et 1 800 euros selon la taille de l'arbre. Un petit arbre de moins de 5 mètres coûte entre 80 et 250 euros. Un arbre moyen de 5 à 10 mètres entre 200 et 500 euros. Un grand arbre de 10 à 15 mètres entre 400 et 900 euros. Un très grand arbre de plus de 15 mètres entre 800 et 1 800 euros. Ces tarifs incluent la taille, le broyage et l'évacuation des déchets verts."
          }
        },
        {
          "@type": "Question",
          "name": "L'élagage est-il déductible des impôts ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'élagage en hauteur nécessitant un harnais ou une nacelle n'est pas éligible au crédit d'impôt. En revanche, la taille de haies, l'entretien courant du jardin et le débroussaillage bénéficient d'un crédit d'impôt de 50% via l'agrément Services à la Personne. Le plafond est fixé à 5 000 euros de dépenses par an, soit un avantage fiscal maximal de 2 500 euros. Arbovert dispose de cet agrément SAP."
          }
        },
        {
          "@type": "Question",
          "name": "Quand élaguer pour payer moins cher ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La haute saison pour les élagueurs en Haute-Garonne se situe entre mars et mai, période où la demande est forte et les délais s'allongent. Pour bénéficier de meilleurs tarifs et d'une plus grande disponibilité, planifiez votre élagage entre juin et septembre ou entre novembre et février. La période idéale pour la santé de l'arbre reste l'hiver (novembre à février) pour les feuillus."
          }
        },
        {
          "@type": "Question",
          "name": "Comment obtenir un devis d'élagage gratuit à Toulouse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chez Arbovert, le devis est gratuit et sans engagement. Trois options s'offrent à vous : appelez directement au 06 48 76 85 15, remplissez le formulaire de contact sur arbovert-31.fr, ou envoyez un email avec des photos de vos arbres. Un élagueur se déplace gratuitement chez vous pour évaluer les travaux. Le devis détaillé est envoyé sous 24 à 48 heures."
          }
        }
      ]
    }
  ]
};

export default function PrixElagageToulouse() {
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
                Guide tarifaire
              </span>
              <time className="text-sm text-night/50" dateTime="2026-04-01">
                1 avril 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Prix élagage à Toulouse en 2026 : guide complet des tarifs
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed italic">
              Vous avez un arbre à tailler dans votre jardin à Toulouse ou en Haute-Garonne et vous souhaitez connaître le budget à prévoir ? Ce guide vous détaille les <strong>tarifs moyens d'élagage en 2026</strong>, les facteurs qui font varier le prix, et les astuces pour maîtriser votre budget tout en faisant appel à un professionnel qualifié.
            </p>
          </div>
        </section>

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* Tarifs moyens */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Tarifs moyens d'élagage à Toulouse en 2026</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Le prix d'un élagage dépend avant tout de la <strong>hauteur de l'arbre</strong>. Voici les fourchettes de tarifs constatées en 2026 dans la métropole toulousaine, incluant la taille, le broyage des branches et l'évacuation des déchets verts :
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr>
                        <th className="bg-forest text-white px-4 py-3 rounded-tl-xl font-heading">Taille de l'arbre</th>
                        <th className="bg-forest text-white px-4 py-3 font-heading">Hauteur</th>
                        <th className="bg-forest text-white px-4 py-3 font-heading">Prix indicatif TTC</th>
                        <th className="bg-forest text-white px-4 py-3 rounded-tr-xl font-heading">Exemples d'essences</th>
                      </tr>
                    </thead>
                    <tbody className="text-night/80">
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Petit arbre</td>
                        <td className="px-4 py-3">Moins de 5 m</td>
                        <td className="px-4 py-3 font-heading text-leaf">80 – 250 €</td>
                        <td className="px-4 py-3">Pommier, cerisier, érable du Japon</td>
                      </tr>
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Arbre moyen</td>
                        <td className="px-4 py-3">5 à 10 m</td>
                        <td className="px-4 py-3 font-heading text-leaf">200 – 500 €</td>
                        <td className="px-4 py-3">Tilleul, olivier, magnolia</td>
                      </tr>
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Grand arbre</td>
                        <td className="px-4 py-3">10 à 15 m</td>
                        <td className="px-4 py-3 font-heading text-leaf">400 – 900 €</td>
                        <td className="px-4 py-3">Chêne, pin maritime, cèdre</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Très grand arbre</td>
                        <td className="px-4 py-3">Plus de 15 m</td>
                        <td className="px-4 py-3 font-heading text-leaf">800 – 1 800 €</td>
                        <td className="px-4 py-3">Platane, peuplier, séquoia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-night/60 mt-4">
                  Ces tarifs sont des moyennes constatées en Haute-Garonne. Le prix exact dépend de l'accessibilité, de l'état de l'arbre et du volume de déchets. Consultez notre <Link href="/tarif-elagage-haute-garonne" className="text-forest underline hover:text-forest/80">grille tarifaire complète</Link> pour plus de détails.
                </p>
              </div>
            </section>

            {/* Prix par type de prestation */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Prix par type de prestation</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  L'élagage recouvre plusieurs types d'interventions, chacune avec sa propre fourchette de prix. Voici le détail des prestations courantes proposées par les élagueurs à <Link href="/elagage-toulouse" className="text-forest underline hover:text-forest/80">Toulouse</Link> :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-xl text-forest mb-4">Élagage et taille d'arbre</h3>
                    <p className="font-heading text-2xl text-leaf mb-2">80 – 900 €</p>
                    <p className="text-night/80 text-sm">
                      La taille d'entretien consiste à supprimer les branches mortes, malades ou mal orientées pour maintenir un port équilibré. Le tarif varie principalement en fonction de la hauteur de l'arbre et de la technique utilisée (grimpe ou nacelle). Un élagage régulier tous les 3 à 5 ans revient moins cher qu'une intervention lourde sur un arbre négligé.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-xl text-forest mb-4">Abattage d'arbre</h3>
                    <p className="font-heading text-2xl text-leaf mb-2">300 – 2 500 €</p>
                    <p className="text-night/80 text-sm">
                      L'abattage concerne les arbres morts, dangereux ou gênants. Le prix dépend du diamètre du tronc, de la hauteur, de la proximité avec des bâtiments ou des lignes électriques, et de la technique employée (abattage directionnel ou démontage par section). En milieu urbain à Toulouse, le démontage par section est souvent nécessaire, ce qui augmente le coût.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-xl text-forest mb-4">Taille de haie</h3>
                    <p className="font-heading text-2xl text-leaf mb-2">15 – 30 € / mètre linéaire</p>
                    <p className="text-night/80 text-sm">
                      La taille de haie est facturée au mètre linéaire. Le tarif dépend de la hauteur de la haie, de son épaisseur et de l'essence (laurier, thuya, photinia, troène). Les haies de plus de 2 mètres de hauteur nécessitent un matériel adapté et coûtent plus cher. Bonne nouvelle : la taille de haie est éligible au <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt 50%</Link>.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-xl text-forest mb-4">Dessouchage</h3>
                    <p className="font-heading text-2xl text-leaf mb-2">100 – 500 €</p>
                    <p className="text-night/80 text-sm">
                      Après l'abattage, la souche doit souvent être retirée pour libérer l'espace ou préparer une nouvelle plantation. Le dessouchage se fait à la rogneuse de souche (le plus courant) ou par arrachage mécanique pour les grosses souches. Le prix dépend du diamètre de la souche et de l'accessibilité au terrain.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10 md:col-span-2">
                    <h3 className="font-heading text-xl text-forest mb-4">Élagage d'urgence</h3>
                    <p className="font-heading text-2xl text-leaf mb-2">+50% sur le tarif standard</p>
                    <p className="text-night/80 text-sm">
                      Une branche menaçante après une tempête, un arbre penché sur votre toiture, un dégât après le vent d'Autan : les situations d'urgence nécessitent une intervention rapide, parfois en dehors des heures ouvrables. Le surcoût de 50% couvre la mobilisation immédiate de l'équipe et du matériel. Arbovert intervient en urgence 7j/7 dans toute la métropole toulousaine. Consultez notre page <Link href="/elagage-urgence-toulouse" className="text-forest underline hover:text-forest/80">élagage d'urgence à Toulouse</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Facteurs qui influencent le prix */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Les facteurs qui influencent le prix de votre élagage</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Pourquoi un devis d'élagage peut varier du simple au triple pour un arbre en apparence similaire ? Voici les <strong>six facteurs principaux</strong> qui déterminent le prix final de votre intervention à Toulouse :
                </p>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">1. Hauteur et diamètre de l'arbre</h3>
                    <p className="text-night/80">
                      C'est le critère numéro un. Plus l'arbre est haut et son tronc épais, plus l'intervention est longue et technique. Un chêne de 15 mètres avec un tronc de 60 cm de diamètre nécessite une demi-journée de travail minimum pour deux élagueurs, contre une à deux heures pour un fruitier de 4 mètres. Le volume de bois à évacuer est également beaucoup plus important.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">2. Accessibilité du chantier</h3>
                    <p className="text-night/80">
                      Un arbre facilement accessible depuis une allée carrossable permet l'utilisation d'une <strong>nacelle élévatrice</strong>, ce qui accélère le travail. En revanche, un arbre coincé au fond d'un jardin sans accès véhicule impose une intervention en <strong>grimpe</strong> (technique sur corde), plus longue et donc plus coûteuse. Dans les quartiers résidentiels de Toulouse (Saint-Agne, Côte Pavée, Minimes), l'étroitesse des rues peut aussi compliquer l'accès.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">3. État sanitaire de l'arbre</h3>
                    <p className="text-night/80">
                      Un arbre malade, fragilisé par un champignon ou présentant du bois mort en hauteur demande des <strong>précautions supplémentaires</strong>. Les branches mortes sont imprévisibles et peuvent casser à tout moment pendant l'intervention. L'élagueur doit sécuriser chaque coupe individuellement, ce qui allonge le temps de travail. Le diagnostic de l'état sanitaire fait partie intégrante du devis.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">4. Proximité de bâtiments ou de lignes électriques</h3>
                    <p className="text-night/80">
                      Un arbre proche d'une maison, d'un mur mitoyen ou de <strong>lignes électriques</strong> impose un travail de précision avec rétention des branches (chaque branche est attachée avant d'être coupée pour contrôler sa chute). Cette technique, appelée démontage, est nettement plus lente qu'un élagage classique. Dans les lotissements de la métropole toulousaine, c'est un cas fréquent qui impacte le tarif.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">5. Volume de déchets verts</h3>
                    <p className="text-night/80">
                      L'évacuation des branches, feuilles et bois représente une part significative du coût total (souvent 20 à 30% de la facture). Un gros chêne peut générer <strong>plusieurs mètres cubes de déchets</strong>. Le broyage sur place réduit le volume, mais le transport en déchèterie agréée reste obligatoire. Le brûlage des déchets verts est interdit à Toulouse et dans toute la Haute-Garonne.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">6. Période de l'année</h3>
                    <p className="text-night/80">
                      La <strong>haute saison</strong> pour les élagueurs en Haute-Garonne se situe entre mars et mai. C'est la période où la demande est la plus forte : les propriétaires constatent les dégâts de l'hiver et anticipent le printemps. Les délais s'allongent et les tarifs peuvent être légèrement plus élevés. En planifiant votre élagage en été ou en automne, vous bénéficiez généralement de meilleurs délais. Pour en savoir plus, consultez notre guide <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">quand élaguer vos arbres à Toulouse</Link>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comment réduire le coût */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Comment réduire le coût de votre élagage ?</h2>
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  L'élagage est un investissement nécessaire pour la sécurité et la beauté de votre propriété. Voici quatre stratégies concrètes pour <strong>réduire votre facture</strong> sans sacrifier la qualité du travail :
                </p>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                    <h3 className="font-heading text-lg text-forest mb-2">Profitez du crédit d'impôt 50%</h3>
                    <p className="text-night/80 mb-3">
                      Si votre prestation inclut de la <strong>taille de haie, du débroussaillage ou de l'entretien courant</strong>, ces travaux sont éligibles au crédit d'impôt de 50% via notre agrément Services à la Personne. Le plafond est de 5 000 euros de dépenses par an, soit jusqu'à <strong>2 500 euros de réduction d'impôt</strong>. Attention : l'élagage en hauteur (sur corde ou nacelle) n'est pas éligible.
                    </p>
                    <p className="text-night/80">
                      Découvrez tous les détails sur notre page <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt jardinage</Link>.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                    <h3 className="font-heading text-lg text-forest mb-2">Regroupez les travaux avec vos voisins</h3>
                    <p className="text-night/80">
                      Les frais de déplacement et d'installation du matériel (nacelle, broyeur) représentent un coût fixe incompressible. En <strong>regroupant votre chantier avec un ou deux voisins</strong>, vous partagez ces frais fixes. Chez Arbovert, nous proposons systématiquement un tarif préférentiel lorsque plusieurs propriétaires d'une même rue ou d'un même lotissement nous sollicitent en même temps. C'est une solution particulièrement intéressante dans les quartiers pavillonnaires de Colomiers, Balma ou Tournefeuille.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                    <h3 className="font-heading text-lg text-forest mb-2">Privilégiez l'entretien régulier</h3>
                    <p className="text-night/80">
                      Un arbre taillé régulièrement (tous les 3 à 5 ans) nécessite un élagage <strong>léger et rapide</strong>, donc moins coûteux. À l'inverse, un arbre négligé pendant 10 ou 15 ans nécessite une intervention lourde avec des coupes importantes et un volume de déchets considérable. Sur le long terme, l'entretien régulier revient <strong>30 à 50% moins cher</strong> que des interventions ponctuelles de rattrapage.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-leaf/20">
                    <h3 className="font-heading text-lg text-forest mb-2">Demandez plusieurs devis</h3>
                    <p className="text-night/80">
                      Nous vous recommandons de comparer <strong>au moins trois devis</strong> avant de vous engager. Assurez-vous que chaque devis détaille les mêmes prestations (taille, broyage, évacuation, nettoyage) pour comparer à périmètre égal. Méfiez-vous des devis anormalement bas qui peuvent cacher un manque de qualification, d'assurance ou une évacuation illégale des déchets. Le devis d'Arbovert est gratuit et sans engagement.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pourquoi les prix varient */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pourquoi les prix varient autant entre élagueurs ?</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Vous avez reçu trois devis d'élagage et les prix varient du simple au double ? C'est normal. Derrière un tarif, il y a des éléments de <strong>qualité et de sécurité</strong> qui justifient les écarts :
                </p>
                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Le CS Élagueur-Grimpeur</h3>
                    <p className="text-night/80">
                      Le <strong>Certificat de Spécialisation Élagueur-Grimpeur</strong> est le diplôme de référence pour exercer le métier. Il atteste d'une formation spécifique aux techniques de grimpe, de taille raisonnée et de sécurité en hauteur. Un élagueur certifié connaît la biologie de l'arbre et pratique des coupes respectueuses qui favorisent la cicatrisation. Un non-diplômé risque de pratiquer un étêtage brutal qui abîme l'arbre définitivement.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">L'assurance Responsabilité Civile Professionnelle</h3>
                    <p className="text-night/80">
                      L'élagage est un métier à risque : chute de branches sur un toit, dégât à un mur mitoyen, blessure d'un passant. Une <strong>assurance RC Pro spécifique au métier d'élagueur</strong> coûte plusieurs milliers d'euros par an. Elle est pourtant indispensable pour couvrir les dommages éventuels. Un élagueur sans assurance propose des tarifs plus bas, mais en cas de sinistre, c'est vous qui assumez les conséquences financières.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Le matériel professionnel</h3>
                    <p className="text-night/80">
                      Cordes d'élagage, harnais, tronçonneuses légères pour la grimpe, nacelle, broyeur de branches, camion-benne : l'investissement matériel d'un élagueur professionnel dépasse les <strong>50 000 euros</strong>. Ce matériel est entretenu, certifié et renouvelé régulièrement pour garantir la sécurité de l'équipe et la qualité du travail. Un outillage de qualité permet aussi de travailler plus vite, ce qui compense partiellement le coût.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">L'évacuation réglementaire des déchets</h3>
                    <p className="text-night/80">
                      L'évacuation des déchets verts vers une <strong>déchèterie agréée ou une plateforme de compostage</strong> a un coût (transport, dépôt). Certains prestataires peu scrupuleux déposent les déchets en bordure de forêt ou dans des terrains vagues, ce qui est illégal et sanctionné. Chez Arbovert, tous les déchets sont broyés puis acheminés vers des filières de valorisation certifiées.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/80 p-6 border-2 border-amber-400/50">
                    <h3 className="font-heading text-lg text-amber-700 mb-2">Attention aux offres trop bon marché</h3>
                    <p className="text-night/80">
                      Un devis anormalement bas (inférieur de 40% ou plus à la moyenne) doit vous alerter. Il peut signifier l'absence de qualification, de couverture sociale pour les salariés (travail au noir), d'assurance RC Pro ou une évacuation sauvage des déchets. En cas d'accident ou de dommage sur votre propriété, <strong>vous n'aurez aucun recours</strong>. Exigez systématiquement une attestation d'assurance, un numéro SIRET valide et la preuve de la qualification de l'élagueur.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Comparatif Toulouse vs autres villes */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Toulouse vs autres grandes villes : comparatif des prix</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Les tarifs d'élagage varient d'une région à l'autre en France. Toulouse se situe dans la <strong>moyenne basse nationale</strong>, grâce à un coût de la vie modéré et à une forte concurrence entre professionnels du secteur :
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr>
                        <th className="bg-forest text-white px-4 py-3 rounded-tl-xl font-heading">Ville</th>
                        <th className="bg-forest text-white px-4 py-3 font-heading">Arbre moyen (5-10 m)</th>
                        <th className="bg-forest text-white px-4 py-3 rounded-tr-xl font-heading">Grand arbre (10-15 m)</th>
                      </tr>
                    </thead>
                    <tbody className="text-night/80">
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Paris / Île-de-France</td>
                        <td className="px-4 py-3">300 – 700 €</td>
                        <td className="px-4 py-3">600 – 1 400 €</td>
                      </tr>
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Lyon</td>
                        <td className="px-4 py-3">250 – 600 €</td>
                        <td className="px-4 py-3">500 – 1 100 €</td>
                      </tr>
                      <tr className="border-b border-forest/10 bg-leaf/5">
                        <td className="px-4 py-3 font-heading text-forest">Toulouse (31)</td>
                        <td className="px-4 py-3 font-heading text-leaf">200 – 500 €</td>
                        <td className="px-4 py-3 font-heading text-leaf">400 – 900 €</td>
                      </tr>
                      <tr className="border-b border-forest/10">
                        <td className="px-4 py-3 font-medium">Bordeaux</td>
                        <td className="px-4 py-3">220 – 550 €</td>
                        <td className="px-4 py-3">450 – 1 000 €</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Montpellier</td>
                        <td className="px-4 py-3">200 – 500 €</td>
                        <td className="px-4 py-3">400 – 950 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-night/60 mt-4">
                  Source : moyennes constatées auprès de professionnels certifiés en 2025-2026. Les tarifs en Île-de-France sont supérieurs de 30 à 50% en raison du coût de la vie et de la densité urbaine qui complique les interventions.
                </p>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Questions fréquentes sur les prix d'élagage</h2>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-6 border border-forest/10 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Quel est le prix moyen d'un élagage à Toulouse ?</h3>
                  <p className="text-night/80">
                    Le prix moyen d'un élagage à Toulouse en 2026 varie entre <strong>80 et 1 800 euros</strong> selon la hauteur de l'arbre. Pour un arbre de taille moyenne (5 à 10 mètres), comptez entre 200 et 500 euros TTC. Ce tarif inclut généralement la taille, le broyage des branches et l'évacuation des déchets verts. Pour un devis précis adapté à votre situation, contactez-nous pour une visite gratuite de votre terrain.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-forest/10 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">L'élagage est-il déductible des impôts ?</h3>
                  <p className="text-night/80">
                    L'élagage en hauteur (nécessitant un harnais, une corde ou une nacelle) <strong>n'est pas éligible au crédit d'impôt</strong>. En revanche, la taille de haies, le débroussaillage et l'entretien courant du jardin donnent droit à un crédit d'impôt de 50% via l'agrément Services à la Personne. Le plafond annuel est de 5 000 euros, soit un avantage fiscal maximal de 2 500 euros. Arbovert dispose de cet agrément SAP et vous fournit l'attestation fiscale nécessaire. Plus d'informations sur notre page <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">crédit d'impôt jardinage</Link>.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-forest/10 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Quand élaguer pour payer moins cher ?</h3>
                  <p className="text-night/80">
                    La haute saison pour les élagueurs en Haute-Garonne s'étend de <strong>mars à mai</strong>. Durant cette période, la demande est forte et les délais s'allongent, ce qui peut occasionner des tarifs légèrement supérieurs. Pour obtenir les meilleurs tarifs et une disponibilité optimale, planifiez votre élagage en <strong>juin-septembre ou novembre-février</strong>. L'hiver reste par ailleurs la période idéale pour la santé des feuillus (repos végétatif). Consultez notre guide complet sur les <Link href="/blog/quand-elaguer-arbres-toulouse" className="text-forest underline hover:text-forest/80">meilleures périodes d'élagage à Toulouse</Link>.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-forest/10 shadow-sm">
                  <h3 className="font-heading text-lg text-forest mb-3">Comment obtenir un devis d'élagage gratuit à Toulouse ?</h3>
                  <p className="text-night/80">
                    Chez Arbovert, le devis est <strong>gratuit et sans engagement</strong>. Trois options pour nous contacter : appelez directement au <strong>06 48 76 85 15</strong>, remplissez le formulaire de contact sur notre site, ou envoyez-nous un email avec des photos de vos arbres. Un élagueur certifié se déplace gratuitement chez vous pour évaluer les travaux à réaliser, identifier les contraintes du terrain et établir un devis détaillé. Le devis est envoyé sous 24 à 48 heures et précise chaque poste de dépense.
                  </p>
                </div>
              </div>
            </section>

            {/* Checklist avant de choisir */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Checklist : 7 points à vérifier avant de signer un devis</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Avant de confier vos arbres à un élagueur, assurez-vous que ces éléments figurent sur le devis ou sont vérifiables :
                </p>
                <ul className="space-y-4 text-night/80">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">1</span>
                    <span><strong>Numéro SIRET valide</strong> — vérifiable sur societe.com ou sur le site de l'INSEE. Refusez toute entreprise sans SIRET.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">2</span>
                    <span><strong>Attestation d'assurance RC Pro</strong> — datée de l'année en cours, mentionnant l'activité d'élagage. Demandez une copie.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">3</span>
                    <span><strong>Qualification de l'élagueur</strong> — CS Élagueur-Grimpeur, CAPA Travaux Forestiers ou diplôme équivalent. Un professionnel qualifié sera fier de vous montrer son certificat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">4</span>
                    <span><strong>Détail des prestations</strong> — le devis doit préciser : type de taille, nombre d'arbres, broyage inclus ou non, évacuation des déchets, nettoyage du chantier.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">5</span>
                    <span><strong>Prix TTC clairement affiché</strong> — méfiez-vous des devis en HT qui gonflent la facture de 20% de TVA (10% pour les travaux d'élagage).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">6</span>
                    <span><strong>Agrément SAP</strong> — si vous souhaitez bénéficier du crédit d'impôt sur la taille de haie ou l'entretien, vérifiez que l'entreprise dispose de l'agrément Services à la Personne.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-leaf/20 flex items-center justify-center text-forest font-heading text-sm">7</span>
                    <span><strong>Avis clients vérifiables</strong> — consultez les avis Google, les photos de réalisations et demandez des références de chantiers récents dans votre quartier.</span>
                  </li>
                </ul>
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
                Besoin d'un devis d'élagage précis ?
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Chaque arbre est unique, chaque chantier est différent. Nos élagueurs certifiés se déplacent gratuitement pour évaluer vos arbres et vous remettre un devis détaillé sous 24 à 48 heures, sans engagement.
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
                <Link href="/elagage-muret" className="text-forest underline">Muret</Link>,{' '}
                <Link href="/elagage-balma" className="text-forest underline">Balma</Link>,{' '}
                <span className="text-forest">Blagnac</span>{' '}
                et toute la Haute-Garonne.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
