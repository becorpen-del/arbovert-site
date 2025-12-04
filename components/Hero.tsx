import Image from 'next/image';
import Link from 'next/link';

const pills = [
  'Devis gratuit sous 24h',
  'Intervention en Haute-Garonne (31)',
  "Élagueur grimpeur formé et assuré"
];

const Hero = () => {
  return (
    <section className="section">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl bg-white/80 p-8 shadow-sm lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-forest/70">Élagage & entretien</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-forest sm:text-5xl">
            Élagage & entretien d'arbres en Haute-Garonne (31)
          </h1>
          <p className="mt-6 text-lg text-night/80">
            Arbovert est une entreprise locale basée en Haute-Garonne spécialisée dans l'élagage, l'abattage,
            la taille de haies et l'entretien complet de jardins. Nous sécurisons vos arbres et valorisons vos espaces
            verts avec soin et professionnalisme.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:0600000000" className="btn btn-primary text-base">
              Appeler Arbovert
            </a>
            <Link href="#contact" className="btn btn-outline text-base">
              Demander un devis gratuit
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-beige px-4 py-2 text-xs font-semibold uppercase tracking-wide text-forest"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-2xl bg-forest/90 p-8 text-white">
          <div className="overflow-hidden rounded-xl border border-white/10">
            <Image
              src="/bandeau-accueil.JPG"
              alt="Équipe d'élagage en intervention"
              width={680}
              height={440}
              className="h-56 w-full object-cover"
              priority
            />
          </div>
          <p className="text-sm uppercase text-white/80">Votre expert local</p>
          <p className="text-2xl font-heading leading-snug">Travaux d'élagage sécurisés, respectueux de vos arbres et de votre terrain.</p>
          <p className="text-white/80">
            Intervention rapide sur rendez-vous dans tout le département : Toulouse, Muret, Cugnaux, Colomiers, Blagnac et
            les communes voisines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
