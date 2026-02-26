import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog Élagage | Arbovert – Conseils et guides arbres Haute-Garonne',
  description:
    'Conseils d\'élagage, guides pratiques et actualités sur l\'entretien des arbres en Haute-Garonne. Périodes de taille, réglementation, crédit d\'impôt jardinage.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Blog Élagage | Arbovert – Conseils arbres Haute-Garonne',
    description: 'Conseils d\'élagage, guides pratiques et actualités sur l\'entretien des arbres en Haute-Garonne.',
    type: 'website',
    locale: 'fr_FR',
    url: '/blog'
  },
};

const articles = [
  {
    title: 'Chenille processionnaire à Toulouse : dangers, traitement et prévention',
    description: 'Comment lutter contre la chenille processionnaire du pin à Toulouse ? Identification, dangers pour la santé, traitements efficaces et calendrier d\'intervention.',
    href: '/blog/chenille-processionnaire-toulouse',
    date: '2026-05-15',
    category: 'Santé des arbres',
  },
  {
    title: 'Taille douce vs taille sévère : quelle méthode pour vos arbres ?',
    description: 'Comparatif complet entre taille douce et taille sévère. Avantages, risques, impact sur la santé de l\'arbre et conseils d\'experts élagueurs.',
    href: '/blog/taille-douce-vs-taille-severe',
    date: '2026-05-01',
    category: 'Technique',
  },
  {
    title: 'Entretien de jardin au printemps à Toulouse : le guide mois par mois',
    description: 'Préparez votre jardin pour le printemps en Haute-Garonne : taille des arbres, haies, pelouse, arbustes. Calendrier mars à mai et conseils d\'experts.',
    href: '/blog/entretien-jardin-printemps',
    date: '2026-04-15',
    category: 'Guide saisonnier',
  },
  {
    title: 'Prix élagage à Toulouse en 2026 : guide complet des tarifs',
    description: 'Combien coûte un élagage à Toulouse en 2026 ? Tarifs par type d\'arbre, facteurs de prix, comparatif des prestations et astuces pour réduire la facture.',
    href: '/blog/prix-elagage-toulouse',
    date: '2026-04-01',
    category: 'Guide tarifaire',
  },
  {
    title: 'Réglementation élagage 2026 : droits, obligations et voisinage en Haute-Garonne',
    description: 'Guide complet de la réglementation élagage. Code civil, distances de plantation, arbres du voisin, autorisation PLU, protection des oiseaux et démarches à suivre.',
    href: '/blog/reglementation-elagage-haute-garonne',
    date: '2026-03-15',
    category: 'Réglementation',
  },
  {
    title: 'Quand élaguer vos arbres à Toulouse ? Calendrier et périodes idéales',
    description: 'Guide complet des périodes d\'élagage par essence en Haute-Garonne. Feuillus, conifères, fruitiers : découvrez le calendrier optimal pour chaque type d\'arbre.',
    href: '/blog/quand-elaguer-arbres-toulouse',
    date: '2026-03-01',
    category: 'Guide pratique',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "name": "Blog Arbovert – Conseils élagage Haute-Garonne",
      "description": "Conseils d'élagage, guides pratiques et actualités sur l'entretien des arbres en Haute-Garonne.",
      "url": "https://www.arbovert-31.fr/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Arbovert",
        "url": "https://www.arbovert-31.fr"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.arbovert-31.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.arbovert-31.fr/blog" }
      ]
    }
  ]
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="space-y-0">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
              Blog Arbovert : conseils élagage et entretien d'arbres
            </h1>
            <p className="text-lg md:text-xl text-night/80 leading-relaxed max-w-3xl mx-auto">
              Guides pratiques, calendrier d'élagage, réglementation et conseils d'experts pour prendre soin de vos arbres en Haute-Garonne.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {articles.map((article) => (
                <Link key={article.href} href={article.href} className="group block">
                  <article className="rounded-3xl border border-forest/10 bg-beige/30 p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block rounded-full bg-leaf/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf border border-leaf/30">
                        {article.category}
                      </span>
                      <time className="text-sm text-night/50" dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl text-forest mb-3 group-hover:text-forest/80 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-night/80 text-lg leading-relaxed">
                      {article.description}
                    </p>
                    <p className="mt-4 text-forest font-medium group-hover:underline">
                      Lire l'article →
                    </p>
                  </article>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-night/60">Les premiers articles arrivent bientôt !</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-beige">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl text-forest mb-6">
              Besoin d'un élagueur professionnel ?
            </h2>
            <p className="text-lg text-night/80 mb-8">
              Arbovert intervient dans toute la Haute-Garonne. Devis gratuit sous 24h.
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
