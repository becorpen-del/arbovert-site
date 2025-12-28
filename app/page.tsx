import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import ContactForm from '../components/ContactForm';
import ReviewsWrapper from '@/components/ReviewsWrapper';

export const metadata: Metadata = {
  title: `Élagage & entretien d'arbres en Haute-Garonne (31) – Arbovert`,
  description:
    `Arbovert, élagueur grimpeur en Haute-Garonne (31) : élagage, abattage, taille de haies, tonte de pelouse et entretien de jardins. Devis gratuit, intervention rapide dans tout le 31.`
};

const interventionCities = ['Toulouse', 'Muret', 'Cugnaux', 'Colomiers', 'Blagnac', 'Tournefeuille', 'Labège', 'Balma'];
const highlightShots = [
  {
    title: 'Abattage avec rétention',
    caption: "Pin parasol démonté en sécurité à proximité d'une maison.",
    image: '/abattage_avec_rentention.JPG'
  },
  {
    title: 'Taille douce en nacelle',
    caption: "Éclaircie légère pour laisser passer la lumière sans stresser l'arbre.",
    image: '/taille-douce-nacelle.png'
  }
];

export default function HomePage() {
  return (
    <div className="space-y-[50px]">
      <Hero />

      <section className="section">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Arbovert, spécialiste des espaces verts en Haute-Garonne</h2>
          <p className="text-lg text-night/80">
            Depuis plusieurs années, Arbovert accompagne particuliers, syndics et professionnels pour préserver la santé
            des arbres et la sécurité des jardins. Nous travaillons avec cordes et nacelles selon les accès, protégeons les
            abords et laissons un terrain propre après chaque passage.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">👷‍♂️</p>
              <p className="mt-2 font-semibold text-night">Élagueur grimpeur formé et assuré</p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">🌳</p>
              <p className="mt-2 font-semibold text-night">Travail respectueux de vos arbres</p>
            </div>
            <div className="rounded-2xl bg-beige/70 p-4">
              <p className="text-lg">🚚</p>
              <p className="mt-2 font-semibold text-night">Gestion & évacuation des déchets verts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading">Rencontrez vos élagueurs en Haute-Garonne</h2>
          <p className="text-lg text-night/80">
            Deux passionnés, une même exigence : des interventions soignées et respectueuses de vos arbres.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-forest/10 bg-beige/60 p-6 shadow-sm">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full border-2 border-forest/20">
                  <Image
                    src="/guillaume.jpg"
                    alt="Guillaume, co-gérant et élagueur Arbovert en Haute-Garonne"
                    width={300}
                    height={300}
                    className="h-48 w-48 object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-6 font-heading text-2xl text-forest">Guillaume — élagueur grimpeur</h3>
              <p className="mt-4 text-night/80">
                Titulaire d'un CAPA Travaux Forestiers, j'ai passé 6 ans dans l'armée où j'ai forgé ma rigueur et mon sens des
                responsabilités. Passionné de trail en montagne, je reste connecté à la nature que je m'engage à préserver.
                Mon crédo : un travail soigné, une écoute attentive et le respect de chaque arbre.
              </p>
            </article>
            <article className="rounded-2xl border border-forest/10 bg-beige/60 p-6 shadow-sm">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-full border-2 border-forest/20">
                  <Image
                    src="/Portrait-Clément.JPG"
                    alt="Clément, co-gérant et élagueur grimpeur Arbovert en Haute-Garonne"
                    width={300}
                    height={300}
                    className="h-48 w-48 object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-6 font-heading text-2xl text-forest">Clément — élagueur grimpeur</h3>
              <p className="mt-4 text-night/80">
                Formé sur le terrain, j'ai acquis une solide expérience en élagage et abattage auprès de particuliers et
                collectivités. Ancien entrepreneur, j'ai cofondé Arbovert avec une exigence claire : des interventions sûres,
                efficaces et durables. La sécurité et votre satisfaction guident chacune de mes prestations.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ServicesPreview />

      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl border border-leaf/20 bg-leaf/10 p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 text-3xl">💰</div>
            <div>
              <h2 className="font-heading text-3xl text-forest">Crédit d'impôt jardinage : récupérez 50% de vos dépenses</h2>
              <p className="mt-4 text-lg text-night/80">
                Les travaux d'entretien de jardin (tonte de pelouse, taille de haies, débroussaillage) sont éligibles au crédit
                d'impôt Services à la Personne. Arbovert est un organisme déclaré : nous vous fournissons l'attestation fiscale
                annuelle pour votre déclaration de revenus. Plafond : 5 000 € de dépenses par an, soit jusqu'à 2 500 € de crédit
                d'impôt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="section-heading mb-0">En intervention</h2>
            <p className="text-night/70">Aperçu visuel de nos chantiers : démontage sécurisé, nacelle et taille précise.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {highlightShots.map((shot) => (
              <article key={shot.title} className="rounded-2xl border border-forest/10 bg-beige/60 p-4 shadow-sm">
                <div className="overflow-hidden rounded-xl border border-forest/10">
                  <Image
                    src={shot.image}
                    alt={shot.title}
                    width={400}
                    height={320}
                    className="h-[324px] w-full object-cover"
                  />
                </div>
                <h3 className="mt-3 font-heading text-2xl text-forest">{shot.title}</h3>
                <p className="text-night/80">{shot.caption}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="section-heading">Vos travaux d'élagage en Haute-Garonne (31)</h2>
          <p className="text-night/80">
            Équipe mobile et réactive, Arbovert couvre l'ensemble du département pour vos besoins d'élagage Haute-Garonne :
            taille douce, abattage sécuritaire, remise en forme des haies et entretien régulier de vos jardins à Toulouse,
            Muret, Cugnaux, Colomiers, Blagnac et bien plus encore.
          </p>
          <div className="mt-6 grid gap-3 text-sm uppercase tracking-wide text-night/70 sm:grid-cols-2 lg:grid-cols-4">
            {interventionCities.map((city) => {
              const isCugnaux = city === 'Cugnaux';
              const content = (
                <span className={`rounded-full border border-forest/20 bg-beige/70 px-4 py-2 text-center transition-colors ${
                  isCugnaux ? 'hover:bg-forest/10 hover:border-forest/40 cursor-pointer' : ''
                }`}>
                  {city}
                </span>
              );
              return isCugnaux ? (
                <Link key={city} href="/elagueur-cugnaux">
                  {content}
                </Link>
              ) : (
                <span key={city}>{content}</span>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/nos-villes"
              className="text-forest hover:underline font-medium"
            >
              Voir toutes nos villes d'intervention →
            </Link>
          </div>
        </div>
      </section>

      <ReviewsWrapper 
        maxReviews={6}
        showRating={true}
      />

      <ContactForm />
    </div>
  );
}
