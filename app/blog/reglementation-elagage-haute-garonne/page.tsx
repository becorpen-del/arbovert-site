import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Réglementation élagage 2026 : droits, obligations et voisinage | Arbovert',
  description:
    'Guide complet de la réglementation élagage en Haute-Garonne. Code civil, distances de plantation, arbres du voisin, autorisation PLU, protection des oiseaux et sanctions.',
  keywords: ['réglementation élagage', 'loi élagage', 'arbre voisin', 'obligation élagage', 'distance plantation arbre', 'autorisation élagage', 'élagage code civil', 'article 673'],
  alternates: {
    canonical: '/blog/reglementation-elagage-haute-garonne'
  },
  openGraph: {
    title: 'Réglementation élagage 2026 : droits, obligations et voisinage',
    description: 'Guide complet de la réglementation élagage en Haute-Garonne. Code civil, voisinage, PLU et sanctions.',
    type: 'article',
    locale: 'fr_FR',
    url: '/blog/reglementation-elagage-haute-garonne'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Réglementation élagage 2026 : droits, obligations et voisinage en Haute-Garonne",
      "description": "Guide complet de la réglementation élagage. Code civil, distances de plantation, arbres du voisin, autorisation PLU et sanctions.",
      "datePublished": "2026-03-15",
      "dateModified": "2026-03-15",
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
      "mainEntityOfPage": "https://www.arbovert-31.fr/blog/reglementation-elagage-haute-garonne"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Réglementation élagage", "item": "https://www.arbovert-31.fr/blog/reglementation-elagage-haute-garonne" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on obliger son voisin à élaguer ses arbres ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'article 673 du Code civil vous permet d'exiger que votre voisin coupe les branches de ses arbres qui dépassent sur votre propriété. Si votre voisin refuse après une demande amiable, vous pouvez saisir le tribunal judiciaire. Attention : depuis la réforme de 2023, si votre voisin ne réagit pas dans les 2 mois suivant une mise en demeure, vous pouvez couper vous-même les branches dépassant la limite."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la distance légale pour planter un arbre en limite de propriété ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'article 671 du Code civil impose une distance minimale de 2 mètres pour les arbres de plus de 2 mètres de hauteur, et de 50 centimètres pour les plantations de 2 mètres ou moins. Ces distances se mesurent depuis le milieu du tronc jusqu'à la limite séparative. Toutefois, les usages locaux ou le PLU de votre commune en Haute-Garonne peuvent prévoir des distances différentes."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il une autorisation pour élaguer un arbre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En règle générale, non. Vous pouvez élaguer librement vos propres arbres. Cependant, une autorisation est nécessaire dans 3 cas : si l'arbre est classé au PLU (Espace Boisé Classé), si votre terrain est en zone protégée (périmètre ABF d'un monument historique), ou si l'arbre est situé à proximité du Canal du Midi (arrêté préfectoral contre le chancre coloré). Renseignez-vous auprès de votre mairie à Toulouse ou dans votre commune."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sanctions risque-t-on en cas d'élagage interdit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les sanctions varient selon l'infraction. Abattage d'un arbre classé sans autorisation : amende pouvant aller jusqu'à 300 € par mètre carré de surface boisée supprimée. Destruction de nids d'oiseaux protégés : jusqu'à 150 000 € d'amende et 3 ans d'emprisonnement (article L415-3 du Code de l'Environnement). Non-respect d'un arrêté municipal : contravention de 4e classe (750 € maximum)."
          }
        }
      ]
    }
  ]
};

export default function ReglementationElagage() {
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
                Réglementation
              </span>
              <time className="text-sm text-night/50" dateTime="2026-03-15">
                15 mars 2026
              </time>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-forest mb-6">
              Réglementation élagage 2026 : droits, obligations et voisinage en Haute-Garonne
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed">
              Votre voisin laisse ses branches dépasser chez vous ? Vous souhaitez abattre un arbre dans votre jardin mais ne savez pas si c'est autorisé ? Voici le <strong>guide complet de la réglementation élagage</strong> applicable en Haute-Garonne : Code civil, distances de plantation, protections environnementales et démarches à suivre.
            </p>
          </div>
        </section>

        {/* Contenu article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose-custom">

            {/* Code civil - Distances */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Distances de plantation : ce que dit le Code civil</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Le <strong>Code civil</strong> fixe les règles de base pour les plantations en limite de propriété. Ces articles sont la première référence en cas de conflit entre voisins.
                </p>

                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Article 671 : distances minimales de plantation</h3>
                    <p className="text-night/80 mb-3">
                      Tout arbre ou arbuste doit respecter une distance minimale par rapport à la limite séparative :
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="rounded-xl bg-beige/50 p-4 border border-forest/10">
                        <p className="font-heading text-leaf text-lg mb-1">2 metres</p>
                        <p className="text-night/80 text-sm">pour les arbres de plus de 2 m de hauteur (distance mesurée du milieu du tronc à la clôture)</p>
                      </div>
                      <div className="rounded-xl bg-beige/50 p-4 border border-forest/10">
                        <p className="font-heading text-leaf text-lg mb-1">50 centimetres</p>
                        <p className="text-night/80 text-sm">pour les plantations de 2 m ou moins (haies basses, arbustes, jeunes arbres)</p>
                      </div>
                    </div>
                    <p className="text-night/70 text-sm mt-4">
                      <strong>Attention :</strong> les usages locaux ou le PLU de votre commune peuvent imposer des distances différentes. Vérifiez auprès de votre mairie avant toute plantation.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Article 672 : droit de demander l'arrachage</h3>
                    <p className="text-night/80">
                      Si un arbre a été planté trop près de votre limite de propriété (sans respecter les distances de l'article 671), vous pouvez exiger de votre voisin qu'il <strong>arrache ou réduise l'arbre à la hauteur autorisée</strong>. Ce droit est <strong>imprescriptible</strong> : il s'applique même si l'arbre est planté depuis des décennies. Seule exception : si l'arbre a atteint l'âge de 30 ans, le droit de demander l'arrachage est prescrit (prescription trentenaire).
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Article 673 : branches et racines qui dépassent</h3>
                    <p className="text-night/80 mb-3">
                      C'est l'article le plus invoqué dans les litiges de voisinage liés aux arbres :
                    </p>
                    <ul className="space-y-3 text-night/80">
                      <li className="flex items-start gap-3">
                        <span className="text-forest font-bold mt-0.5">1.</span>
                        <span><strong>Branches qui dépassent :</strong> vous pouvez exiger que votre voisin coupe les branches qui avancent au-dessus de votre terrain. C'est à lui de le faire (ou de payer un élagueur).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-forest font-bold mt-0.5">2.</span>
                        <span><strong>Racines qui empiètent :</strong> vous avez le droit de couper vous-même les racines qui pénètrent dans votre propriété, à la limite séparative.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-forest font-bold mt-0.5">3.</span>
                        <span><strong>Fruits qui tombent :</strong> les fruits qui tombent naturellement chez vous vous appartiennent. Mais vous n'avez pas le droit de cueillir ceux qui sont encore sur les branches du voisin.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-leaf/5 p-6 border border-leaf/20">
                    <h3 className="font-heading text-lg text-forest mb-2">Nouveauté 2023 : le droit de couper soi-même</h3>
                    <p className="text-night/80">
                      Depuis la <strong>loi du 23 février 2023</strong>, si votre voisin ne réagit pas dans les <strong>2 mois</strong> suivant une mise en demeure (par courrier recommandé avec accusé de réception), vous pouvez <strong>couper vous-même les branches</strong> qui dépassent sur votre propriété. Cette réforme a mis fin à des années de blocage judiciaire. Les frais restent à la charge de votre voisin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tableau récapitulatif */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Récapitulatif : vos droits et obligations</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-3 font-heading text-forest">Situation</th>
                      <th className="pb-3 font-heading text-forest">Votre droit</th>
                      <th className="pb-3 font-heading text-forest">Base légale</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Arbre planté trop près de la limite</td>
                      <td className="py-3">Demander l'arrachage ou la réduction</td>
                      <td className="py-3">Art. 672 Code civil</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Branches qui dépassent chez vous</td>
                      <td className="py-3">Exiger la coupe (ou couper après mise en demeure de 2 mois)</td>
                      <td className="py-3">Art. 673 Code civil</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Racines qui empiètent</td>
                      <td className="py-3">Couper vous-même à la limite</td>
                      <td className="py-3">Art. 673 Code civil</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Ombre ou feuilles gênantes</td>
                      <td className="py-3">Aucun droit spécifique (trouble anormal de voisinage si excessif)</td>
                      <td className="py-3">Jurisprudence</td>
                    </tr>
                    <tr>
                      <td className="py-3">Arbre dangereux chez le voisin</td>
                      <td className="py-3">Demander l'abattage en urgence (péril imminent)</td>
                      <td className="py-3">Art. 1242 Code civil</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Autorisations */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Quand faut-il une autorisation pour élaguer ou abattre ?</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  En principe, <strong>vous êtes libre d'élaguer vos propres arbres</strong> sans autorisation. Mais plusieurs exceptions existent, notamment en Haute-Garonne :
                </p>

                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Arbres classés au PLU (Espace Boisé Classé)</h3>
                    <p className="text-night/80 mb-3">
                      Le Plan Local d'Urbanisme de nombreuses communes de la métropole toulousaine protège certains arbres via le classement <strong>EBC (Espace Boisé Classé)</strong>. Si votre arbre est classé :
                    </p>
                    <ul className="space-y-2 text-night/80">
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>L'élagage courant (taille d'entretien) est généralement autorisé sans formalité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>L'abattage nécessite une <strong>déclaration préalable</strong> en mairie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>Le refus d'autorisation peut être contesté si l'arbre est dangereux</span>
                      </li>
                    </ul>
                    <p className="text-night/70 text-sm mt-3">
                      <strong>Communes concernées :</strong> Toulouse (notamment le quartier des Minimes, Saint-Simon, Lardenne), Balma (coteaux), Ramonville, Castanet-Tolosan, et la plupart des communes de Toulouse Métropole.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Périmètre des Monuments Historiques (ABF)</h3>
                    <p className="text-night/80">
                      Si votre propriété se situe dans un <strong>rayon de 500 mètres</strong> autour d'un monument historique classé, l'abattage d'un arbre peut nécessiter l'avis de l'<strong>Architecte des Bâtiments de France</strong> (ABF). À Toulouse, cela concerne notamment les abords de la basilique Saint-Sernin, du Capitole, du couvent des Jacobins et de nombreux hôtels particuliers du centre-ville.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Canal du Midi : arrêté préfectoral spécifique</h3>
                    <p className="text-night/80">
                      Les arbres situés à proximité du <strong>Canal du Midi</strong> (classé au patrimoine mondial de l'UNESCO) sont soumis à un arrêté préfectoral strict en raison du <strong>chancre coloré</strong>, une maladie qui décime les platanes. Tout élagage ou abattage doit respecter un protocole sanitaire : désinfection du matériel entre chaque arbre, transport du bois réglementé, signalement obligatoire de tout symptôme. Arbovert respecte scrupuleusement ces protocoles.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Zones Natura 2000 et ZNIEFF</h3>
                    <p className="text-night/80">
                      La Haute-Garonne compte plusieurs zones naturelles protégées (Garonne, coteaux de Pech-David, forêt de Bouconne). L'abattage d'arbres dans ces zones peut nécessiter une <strong>évaluation d'incidences Natura 2000</strong>. Renseignez-vous auprès de la DDT (Direction Départementale des Territoires) de Haute-Garonne.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Protection des oiseaux */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Protection des oiseaux : la période à éviter</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <div className="rounded-2xl bg-white p-6 border border-leaf/20 mb-6">
                  <p className="font-heading text-lg text-leaf mb-2">Du 16 mars au 31 août : évitez l'élagage</p>
                  <p className="text-night/80">
                    La <strong>LPO (Ligue pour la Protection des Oiseaux)</strong> recommande fortement de ne pas élaguer pendant la période de nidification des oiseaux. Si cette recommandation n'est pas une interdiction en soi, la <strong>destruction de nids occupés est un délit</strong>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Ce que dit la loi</h3>
                    <p className="text-night/80 mb-3">
                      L'<strong>article L411-1 du Code de l'Environnement</strong> interdit de porter atteinte aux oiseaux protégés et à leurs nids. En pratique, cela signifie :
                    </p>
                    <ul className="space-y-2 text-night/80">
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>Avant tout élagage entre mars et août, <strong>vérifiez l'absence de nids</strong> dans l'arbre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>Si un nid est occupé, <strong>reportez l'intervention</strong> après l'envol des oisillons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-forest">•</span>
                        <span>En cas d'urgence (arbre dangereux), un professionnel peut intervenir en protégeant la faune</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Sanctions encourues</h3>
                    <p className="text-night/80">
                      La destruction volontaire de nids d'espèces protégées est punie d'une amende pouvant atteindre <strong>150 000 euros</strong> et de <strong>3 ans d'emprisonnement</strong> (article L415-3 du Code de l'Environnement). Même involontaire, la destruction peut donner lieu à des poursuites si vous n'avez pas pris de précautions raisonnables.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Espèces concernées à Toulouse</h3>
                    <p className="text-night/80">
                      La métropole toulousaine abrite de nombreuses espèces protégées qui nichent dans les arbres : <strong>mésanges, rougegorges, fauvettes, pics verts, huppes fasciées</strong>. Les rapaces nocturnes (chouettes, effraies) utilisent aussi les cavités des vieux arbres. Les <strong>martinets et hirondelles</strong>, qui nichent sous les toits et dans les façades, sont également protégés.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Procédure amiable */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Conflit avec un voisin : la procédure à suivre</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Les litiges liés aux arbres entre voisins sont parmi les plus fréquents en France. Voici la marche à suivre, étape par étape :
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                        <span className="font-heading text-forest text-lg">1</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-2">Demande amiable</h3>
                        <p className="text-night/80">
                          Commencez par en parler à votre voisin de manière cordiale. La plupart des situations se règlent à l'amiable. Vous pouvez lui rappeler ses obligations légales (article 673) et proposer de partager les coordonnées d'un élagueur professionnel.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                        <span className="font-heading text-forest text-lg">2</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-2">Mise en demeure par courrier recommandé</h3>
                        <p className="text-night/80">
                          Si la demande amiable échoue, envoyez un <strong>courrier recommandé avec accusé de réception</strong> rappelant les articles du Code civil. Fixez un délai raisonnable (2 mois). Ce courrier est indispensable pour pouvoir couper vous-même les branches (réforme 2023) ou pour toute action en justice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                        <span className="font-heading text-forest text-lg">3</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-2">Médiation ou conciliation</h3>
                        <p className="text-night/80">
                          Depuis 2020, la médiation est obligatoire avant de saisir le tribunal pour les litiges de voisinage inférieurs à 5 000 euros. Vous pouvez contacter le <strong>conciliateur de justice</strong> de votre commune (service gratuit). À Toulouse, les conciliateurs tiennent des permanences dans les Maisons de la Justice et du Droit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                        <span className="font-heading text-forest text-lg">4</span>
                      </div>
                      <div>
                        <h3 className="font-heading text-lg text-forest mb-2">Tribunal judiciaire (dernier recours)</h3>
                        <p className="text-night/80">
                          En cas d'échec de la médiation, vous pouvez saisir le <strong>tribunal judiciaire de Toulouse</strong>. Le juge peut ordonner l'élagage ou l'abattage sous astreinte (amende par jour de retard). Les frais sont à la charge du propriétaire de l'arbre. En cas d'urgence (arbre menaçant de tomber), un <strong>référé</strong> permet d'obtenir une décision rapide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Arrêtés municipaux */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Arrêtés municipaux en Haute-Garonne</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-6">
                  Certaines communes de la métropole toulousaine ont pris des arrêtés spécifiques concernant l'élagage et les arbres :
                </p>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Toulouse</h3>
                    <p className="text-night/80">
                      Le PLU de Toulouse classe de nombreux arbres remarquables en EBC. Le règlement interdit également le <strong>brûlage des déchets verts</strong> (y compris les branches d'élagage). Les résidus doivent être amenés en déchèterie ou broyés sur place. Arbovert évacue systématiquement les déchets d'élagage.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Communes de la métropole</h3>
                    <p className="text-night/80">
                      La plupart des communes de <strong>Toulouse Métropole</strong> (Blagnac, Colomiers, Tournefeuille, Balma, Muret, Cugnaux, Ramonville, Labège) appliquent des règles similaires via leur PLU intercommunal. Les distances de plantation, les protections d'arbres et les règles de brûlage sont harmonisées. En cas de doute, contactez le service urbanisme de votre mairie.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-6 border border-forest/10">
                    <h3 className="font-heading text-lg text-forest mb-2">Obligation d'élagage en bord de voirie</h3>
                    <p className="text-night/80">
                      Les propriétaires riverains ont l'<strong>obligation d'élaguer les branches qui dépassent sur la voie publique</strong>. La hauteur libre minimale est de <strong>4,50 mètres au-dessus de la chaussée</strong> et de <strong>2,50 mètres au-dessus du trottoir</strong>. En cas de non-respect, la commune peut mettre en demeure le propriétaire puis faire exécuter les travaux à ses frais.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sanctions */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Les sanctions en cas de non-respect</h2>
              <div className="rounded-3xl border border-forest/10 bg-beige/50 p-8 shadow-sm overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-forest/20">
                      <th className="pb-3 font-heading text-forest">Infraction</th>
                      <th className="pb-3 font-heading text-forest">Sanction maximale</th>
                    </tr>
                  </thead>
                  <tbody className="text-night/80">
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Abattage d'arbre classé EBC sans autorisation</td>
                      <td className="py-3">300 €/m² de surface boisée supprimée</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Destruction de nids d'oiseaux protégés</td>
                      <td className="py-3">150 000 € d'amende + 3 ans d'emprisonnement</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Non-respect d'un arrêté municipal</td>
                      <td className="py-3">Contravention de 4e classe (750 €)</td>
                    </tr>
                    <tr className="border-b border-forest/10">
                      <td className="py-3">Brûlage de déchets verts</td>
                      <td className="py-3">450 € d'amende (contravention de 3e classe)</td>
                    </tr>
                    <tr>
                      <td className="py-3">Non-élagage en bord de voirie</td>
                      <td className="py-3">Exécution d'office aux frais du propriétaire</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Conseil professionnel */}
            <section className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">Pourquoi faire appel à un élagueur professionnel ?</h2>
              <div className="rounded-3xl border border-leaf/20 bg-leaf/5 p-8 shadow-sm">
                <p className="text-lg text-night/80 mb-4">
                  Face à cette réglementation complexe, un <strong>élagueur professionnel certifié</strong> vous apporte :
                </p>
                <ul className="space-y-3 text-night/80 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✅</span>
                    <span><strong>La connaissance de la réglementation locale</strong> : PLU, arrêtés municipaux, zones protégées de votre commune</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✅</span>
                    <span><strong>Le respect des protocoles sanitaires</strong> : désinfection du matériel, prévention du chancre coloré</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✅</span>
                    <span><strong>La vérification des nids</strong> : un professionnel sait identifier la présence d'oiseaux nicheurs avant intervention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✅</span>
                    <span><strong>Une assurance responsabilité civile</strong> : indispensable en cas de dommage à un arbre classé ou protégé</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">✅</span>
                    <span><strong>L'éligibilité au crédit d'impôt</strong> : via notre agrément SAP, vous bénéficiez de <Link href="/credit-impot-jardinage" className="text-forest underline hover:text-forest/80">50% de crédit d'impôt</Link> sur l'élagage</span>
                  </li>
                </ul>
                <p className="text-lg text-night/80">
                  Chez Arbovert, nos élagueurs sont <strong>certifiés CAPA</strong> (Certificat d'Aptitude Professionnelle Agricole) et formés à la réglementation en vigueur. Nous intervenons dans toute la Haute-Garonne en respectant l'ensemble des normes environnementales et sanitaires.
                </p>
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
                <Link href="/elagage-urgence-toulouse" className="group rounded-2xl border border-forest/10 bg-beige/30 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-heading text-forest group-hover:text-forest/80 transition-colors mb-2">Élagage d'urgence à Toulouse</p>
                  <p className="text-sm text-night/60">Intervention 7j/7 pour arbres dangereux</p>
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
                Besoin d'un élagage conforme à la réglementation ?
              </h2>
              <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
                Arbovert connaît la réglementation locale et intervient dans le respect des normes environnementales. Devis gratuit sous 24h, éligible au crédit d'impôt 50%.
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
