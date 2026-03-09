import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales | Arbovert - Élagage Haute-Garonne',
  description:
    'Mentions légales du site arbovert-31.fr : informations sur l\'éditeur, l\'hébergeur, la propriété intellectuelle et les conditions d\'utilisation.',
  alternates: {
    canonical: '/mentions-legales',
  },
  openGraph: {
    title: 'Mentions Légales | Arbovert',
    description:
      'Mentions légales du site arbovert-31.fr : informations sur l\'éditeur, l\'hébergeur, la propriété intellectuelle et les conditions d\'utilisation.',
    type: 'website',
    locale: 'fr_FR',
    url: '/mentions-legales',
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="space-y-[50px]">
      {/* Hero */}
      <section className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl text-forest md:text-5xl">
            Mentions légales
          </h1>
          <p className="mt-4 text-lg text-night/80">
            Informations légales relatives au site{' '}
            <strong>arbovert-31.fr</strong>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Éditeur */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              1. Éditeur du site
            </h2>
            <div className="mt-4 space-y-2 text-night/80">
              <p>
                Le site <strong>www.arbovert-31.fr</strong> est édité par :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Raison sociale :</strong> SARL Arbovert
                </li>
                <li>
                  <strong>Forme juridique :</strong> Société à responsabilité
                  limitée (SARL)
                </li>
                <li>
                  <strong>SIRET :</strong> 990 822 603 00017
                </li>
                <li>
                  <strong>Siège social :</strong> 9 Quartier Gironne, 31220
                  Saint-Julien-sur-Garonne, France
                </li>
                <li>
                  <strong>Téléphone :</strong>{' '}
                  <a
                    href="tel:0648768515"
                    className="text-forest hover:underline"
                  >
                    06 48 76 85 15
                  </a>
                </li>
                <li>
                  <strong>Email :</strong>{' '}
                  <a
                    href="mailto:contact@arbovert-31.fr"
                    className="text-forest hover:underline"
                  >
                    contact@arbovert-31.fr
                  </a>
                </li>
                <li>
                  <strong>Directeurs de la publication :</strong> Guillaume et
                  Clément, co-gérants de la SARL Arbovert
                </li>
              </ul>
            </div>
          </div>

          {/* Hébergeur */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              2. Hébergeur
            </h2>
            <div className="mt-4 space-y-2 text-night/80">
              <p>Le site est hébergé par :</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Vercel Inc.</strong>
                </li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>
                  Site web :{' '}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:underline"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Propriété intellectuelle */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              3. Propriété intellectuelle
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                L&apos;ensemble du contenu du site www.arbovert-31.fr (textes,
                images, photographies, logos, icônes, mise en page, charte
                graphique) est la propriété exclusive de la SARL Arbovert ou de
                ses partenaires et est protégé par les lois françaises et
                internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                distribution, retransmission ou exploitation, totale ou
                partielle, du contenu de ce site, par quelque procédé que ce
                soit, sans l&apos;autorisation écrite préalable de la SARL
                Arbovert est strictement interdite et constituerait une
                contrefaçon sanctionnée par les articles L.335-2 et suivants du
                Code de la propriété intellectuelle.
              </p>
            </div>
          </div>

          {/* Responsabilité */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              4. Limitation de responsabilité
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                La SARL Arbovert s&apos;efforce de fournir sur le site
                www.arbovert-31.fr des informations aussi précises que possible.
                Toutefois, elle ne pourra être tenue responsable des omissions,
                des inexactitudes et des carences dans la mise à jour, qu&apos;elles
                soient de son fait ou du fait des tiers partenaires qui lui
                fournissent ces informations.
              </p>
              <p>
                Toutes les informations indiquées sur le site sont données à
                titre indicatif et sont susceptibles d&apos;évoluer. Par ailleurs,
                les renseignements figurant sur le site ne sont pas exhaustifs.
                Ils sont donnés sous réserve de modifications ayant été
                apportées depuis leur mise en ligne.
              </p>
              <p>
                La SARL Arbovert ne pourra être tenue responsable des dommages
                directs ou indirects causés au matériel de l&apos;utilisateur lors
                de l&apos;accès au site www.arbovert-31.fr, résultant soit de
                l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications
                techniques requises, soit de l&apos;apparition d&apos;un bug ou d&apos;une
                incompatibilité.
              </p>
            </div>
          </div>

          {/* Liens hypertextes */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              5. Liens hypertextes
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Le site www.arbovert-31.fr peut contenir des liens hypertextes
                vers d&apos;autres sites Internet. La SARL Arbovert ne dispose
                d&apos;aucun moyen pour contrôler le contenu des sites tiers et
                décline toute responsabilité quant au contenu de ces sites et
                aux éventuels préjudices qui pourraient en découler.
              </p>
            </div>
          </div>

          {/* Droit applicable */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              6. Droit applicable et juridiction compétente
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, et après tentative de résolution
                amiable, compétence exclusive est attribuée aux tribunaux
                compétents de Toulouse.
              </p>
            </div>
          </div>

          {/* Données personnelles */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              7. Données personnelles
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Pour toute information relative au traitement de vos données
                personnelles, veuillez consulter notre{' '}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-forest font-medium hover:underline"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
