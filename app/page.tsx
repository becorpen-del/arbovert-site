import Image from 'next/image';
import type { Metadata } from 'next';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Élagage & entretien d\'arbres en Haute-Garonne (31) – Arbovert',
  description:
    'Arbovert, élagueur grimpeur en Haute-Garonne (31) : élagage, abattage, taille de haies, tonte de pelouse et entretien de jardins. Devis gratuit, intervention rapide dans tout le 31.'
};

const interventionCities = ['Toulouse', 'Muret', 'Cugnaux', 'Colomiers', 'Blagnac', 'Tournefeuille', 'Labège', 'Balma'];
const highlightShots = [
  {
    title: 'Abattage avec rétention',
    caption: 'Pin parasol démonté en sécurité à proximité d’une maison.',
    image: 'https://picsum.photos/seed/retenue-pin/700/460'
  },
  {
    title: 'Taille douce en nacelle',
    caption: 'Éclaircie légère pour laisser passer la lumière sans stresser l’arbre.',
    image: 'https://picsum.photos/seed/nacelle-arbre/700/460'
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

      <ServicesPreview />

      <section className="section">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="section-heading mb-0">En intervention</h2>
            <p className="text-night/70">Aperçu visuel de nos chantiers : démontage sécurisé, nacelle et taille précise.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {highlightShots.map((shot) => (
              <article key={shot.title} className="rounded-2xl border border-forest/10 bg-beige/60 p-4 shadow-sm">
                <div className="overflow-hidden rounded-xl border border-forest/10 bg-white">
                  <Image
                    src={shot.image}
                    alt={shot.title}
                    width={700}
                    height={460}
                    className="h-56 w-full object-cover"
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
            {interventionCities.map((city) => (
              <span key={city} className="rounded-full border border-forest/20 bg-beige/70 px-4 py-2 text-center">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactForm />
    </div>
  );
}
