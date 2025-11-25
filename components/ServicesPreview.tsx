import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: "Élagage d'arbres",
    description: 'Taille douce, mise en sécurité, éclaircie et réduction adaptées à chaque essence.',
    href: '/services-elagage-haute-garonne',
    image: 'https://picsum.photos/seed/elagage-corde/600/360'
  },
  {
    title: 'Abattage & démontage',
    description: 'Abattage des arbres malades ou dangereux, démontage par tronçons et sécurisation du chantier.',
    href: '/services-elagage-haute-garonne',
    image: 'https://picsum.photos/seed/abattage-nacelle/600/360'
  },
  {
    title: 'Taille de haies',
    description: 'Haies de clôture, remise en forme et entretien régulier pour des bordures nettes toute l’année.',
    href: '/services-elagage-haute-garonne',
    image: 'https://picsum.photos/seed/haie-propre/600/360'
  },
  {
    title: 'Tonte & entretien de jardins',
    description: 'Tonte de pelouse, débroussaillage, nettoyage de fin de chantier et entretien saisonnier.',
    href: '/services-elagage-haute-garonne',
    image: 'https://picsum.photos/seed/tonte-verte/600/360'
  }
];

const ServicesPreview = () => {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">Nos principaux services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded-xl border border-forest/10 bg-beige/40">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={360}
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-heading text-2xl text-forest">{service.title}</h3>
              <p className="mt-3 text-night/80">{service.description}</p>
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest underline-offset-4 hover:underline"
                aria-label={`Découvrir ${service.title}`}
              >
                Découvrir nos services →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
