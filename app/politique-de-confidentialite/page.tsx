import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Politique de Confidentialité | Arbovert - Élagage Haute-Garonne',
  description:
    'Politique de confidentialité et protection des données personnelles (RGPD) du site arbovert-31.fr. Découvrez comment vos données sont collectées, utilisées et protégées.',
  alternates: {
    canonical: '/politique-de-confidentialite',
  },
  openGraph: {
    title: 'Politique de Confidentialité | Arbovert',
    description:
      'Politique de confidentialité et protection des données personnelles (RGPD) du site arbovert-31.fr.',
    type: 'website',
    locale: 'fr_FR',
    url: '/politique-de-confidentialite',
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="space-y-[50px]">
      {/* Hero */}
      <section className="section">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl text-forest md:text-5xl">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-lg text-night/80">
            Protection de vos données personnelles conformément au RGPD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Introduction */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              1. Responsable du traitement
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Le responsable du traitement des données personnelles collectées
                sur le site <strong>www.arbovert-31.fr</strong> est :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>SARL Arbovert</strong>
                </li>
                <li>SIRET : 990 822 603 00017</li>
                <li>
                  Siège social : 9 Quartier Gironne, 31220
                  Saint-Julien-sur-Garonne
                </li>
                <li>
                  Email :{' '}
                  <a
                    href="mailto:contact@arbovert-31.fr"
                    className="text-forest hover:underline"
                  >
                    contact@arbovert-31.fr
                  </a>
                </li>
                <li>
                  Téléphone :{' '}
                  <a
                    href="tel:0648768515"
                    className="text-forest hover:underline"
                  >
                    06 48 76 85 15
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Données collectées */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              2. Données collectées
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Dans le cadre de l&apos;utilisation du site, nous sommes
                susceptibles de collecter les catégories de données suivantes :
              </p>
              <h3 className="font-semibold text-night mt-4">
                a) Données transmises via le formulaire de contact
              </h3>
              <p>
                Lorsque vous remplissez le formulaire de contact présent sur
                notre site, les informations suivantes peuvent être collectées :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Contenu de votre message (description de votre besoin)</li>
              </ul>
              <p className="mt-2">
                Ces données sont transmises via le service{' '}
                <strong>Web3Forms</strong>, un service tiers de traitement de
                formulaires. Web3Forms agit en tant que sous-traitant et ne
                conserve pas vos données au-delà du temps nécessaire à leur
                transmission.
              </p>

              <h3 className="font-semibold text-night mt-4">
                b) Données de navigation
              </h3>
              <p>
                Lors de votre visite sur notre site, des données techniques
                peuvent être collectées automatiquement, telles que votre
                adresse IP, votre type de navigateur, votre système
                d&apos;exploitation et les pages consultées.
              </p>
            </div>
          </div>

          {/* Finalité */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              3. Finalité du traitement
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Vos données personnelles sont collectées et traitées pour les
                finalités suivantes :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Répondre à vos demandes :</strong> traitement de vos
                  messages envoyés via le formulaire de contact, élaboration de
                  devis et suivi commercial
                </li>
                <li>
                  <strong>Amélioration du site :</strong> analyse de la
                  fréquentation et du comportement des visiteurs pour améliorer
                  l&apos;expérience utilisateur
                </li>
                <li>
                  <strong>Obligations légales :</strong> respect des obligations
                  comptables et fiscales applicables
                </li>
              </ul>
            </div>
          </div>

          {/* Base légale */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              4. Base légale du traitement
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>Le traitement de vos données repose sur :</p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Votre consentement</strong> lorsque vous remplissez et
                  soumettez le formulaire de contact (article 6.1.a du RGPD)
                </li>
                <li>
                  <strong>L&apos;intérêt légitime</strong> de la SARL Arbovert à
                  assurer le bon fonctionnement de son site Internet et à
                  promouvoir ses services (article 6.1.f du RGPD)
                </li>
              </ul>
            </div>
          </div>

          {/* Durée de conservation */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              5. Durée de conservation
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Vos données personnelles sont conservées pendant les durées
                suivantes :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Données de contact :</strong> 3 ans à compter du
                  dernier échange, conformément aux recommandations de la CNIL
                </li>
                <li>
                  <strong>Données de navigation :</strong> 13 mois maximum
                </li>
                <li>
                  <strong>Données comptables :</strong> 10 ans conformément aux
                  obligations légales
                </li>
              </ul>
              <p>
                À l&apos;expiration de ces délais, vos données sont supprimées ou
                anonymisées.
              </p>
            </div>
          </div>

          {/* Destinataires */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              6. Destinataires des données
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Vos données personnelles sont accessibles uniquement aux
                personnes suivantes :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  Les gérants et employés de la SARL Arbovert, dans le cadre de
                  leurs fonctions
                </li>
                <li>
                  <strong>Web3Forms</strong> (sous-traitant) : service de
                  traitement et de transmission des formulaires de contact
                </li>
                <li>
                  <strong>Vercel Inc.</strong> (hébergeur) : hébergement du site
                  Internet
                </li>
              </ul>
              <p>
                Vos données ne sont ni vendues, ni cédées, ni louées à des
                tiers à des fins commerciales.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">7. Cookies</h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Le site www.arbovert-31.fr peut utiliser des cookies techniques
                strictement nécessaires au bon fonctionnement du site. Ces
                cookies ne nécessitent pas votre consentement préalable.
              </p>
              <p>
                <strong>Cookies techniques utilisés :</strong>
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  Cookies de session : garantissent le bon fonctionnement du
                  site pendant votre navigation
                </li>
                <li>
                  Cookies de préférence : mémorisent vos choix de paramétrage
                </li>
              </ul>
              <p>
                Aucun cookie publicitaire ou de traçage à des fins de
                profilage n&apos;est déposé sur votre terminal.
              </p>
              <p>
                Vous pouvez à tout moment configurer votre navigateur pour
                refuser les cookies. Toutefois, le refus de certains cookies
                techniques peut altérer votre expérience de navigation.
              </p>
            </div>
          </div>

          {/* Droits des utilisateurs */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              8. Vos droits
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants concernant vos données personnelles :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir la confirmation que
                  vos données sont traitées et en obtenir une copie
                </li>
                <li>
                  <strong>Droit de rectification :</strong> demander la
                  correction de données inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement :</strong> demander la
                  suppression de vos données dans les conditions prévues par la
                  loi
                </li>
                <li>
                  <strong>Droit à la limitation du traitement :</strong>{' '}
                  demander la suspension du traitement de vos données dans
                  certains cas
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré et couramment utilisé
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> vous opposer au
                  traitement de vos données pour des motifs légitimes
                </li>
                <li>
                  <strong>Droit de retirer votre consentement :</strong> à tout
                  moment, sans remettre en cause la licéité du traitement
                  effectué avant ce retrait
                </li>
              </ul>
              <p className="mt-4">
                Pour exercer l&apos;un de ces droits, vous pouvez nous contacter :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  Par email :{' '}
                  <a
                    href="mailto:contact@arbovert-31.fr"
                    className="text-forest hover:underline"
                  >
                    contact@arbovert-31.fr
                  </a>
                </li>
                <li>
                  Par courrier : SARL Arbovert, 9 Quartier Gironne, 31220
                  Saint-Julien-sur-Garonne
                </li>
              </ul>
              <p className="mt-4">
                Nous nous engageons à répondre à votre demande dans un délai
                d&apos;un mois suivant sa réception. Ce délai peut être prolongé de
                deux mois supplémentaires si la demande est complexe.
              </p>
            </div>
          </div>

          {/* Réclamation CNIL */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              9. Réclamation auprès de la CNIL
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                Si vous estimez que le traitement de vos données personnelles
                constitue une violation du RGPD, vous avez le droit
                d&apos;introduire une réclamation auprès de la Commission Nationale
                de l&apos;Informatique et des Libertés (CNIL) :
              </p>
              <ul className="ml-4 list-inside list-disc space-y-1">
                <li>
                  <strong>CNIL</strong> - 3 Place de Fontenoy, TSA 80715, 75334
                  Paris Cedex 07
                </li>
                <li>
                  Site web :{' '}
                  <a
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:underline"
                  >
                    www.cnil.fr
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sécurité */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              10. Sécurité des données
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                La SARL Arbovert met en oeuvre les mesures techniques et
                organisationnelles appropriées pour assurer la sécurité et la
                confidentialité de vos données personnelles, notamment contre
                toute destruction, perte, altération, divulgation ou accès non
                autorisé.
              </p>
              <p>
                Le site utilise le protocole HTTPS pour sécuriser les échanges
                de données entre votre navigateur et notre serveur.
              </p>
            </div>
          </div>

          {/* Modification */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-forest">
              11. Modification de la politique
            </h2>
            <div className="mt-4 space-y-3 text-night/80">
              <p>
                La présente politique de confidentialité peut être modifiée à
                tout moment afin de se conformer aux évolutions législatives et
                réglementaires. Nous vous invitons à la consulter régulièrement.
              </p>
              <p>
                <strong>Dernière mise à jour :</strong> mars 2026
              </p>
            </div>
          </div>

          {/* Lien mentions légales */}
          <div className="rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
            <p className="text-night/80">
              Pour toute information complémentaire, consultez nos{' '}
              <Link
                href="/mentions-legales"
                className="text-forest font-medium hover:underline"
              >
                Mentions légales
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
