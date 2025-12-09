import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-forest/10 bg-night text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-heading text-lg">Arbovert – Élagage & entretien d'arbres en Haute-Garonne (31)</p>
          <p className="mt-2 text-white/80">Numéro SIRET : 99082260300017</p>
        </div>
        <div className="flex flex-1 flex-wrap items-center gap-4 text-white/80 lg:justify-center">
          <Link href="/" className="transition-colors hover:text-white">
            Accueil
          </Link>
          <Link href="/services-elagage-haute-garonne" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/realisations-elagueur-haute-garonne" className="transition-colors hover:text-white">
            Réalisations
          </Link>
          <Link href="#" className="transition-colors hover:text-white">
            Mentions légales
          </Link>
        </div>
        <a href="tel:0600000000" className="btn btn-outline border-white text-white hover:border-leaf">
          📞 06 00 00 00 00
        </a>
      </div>
    </footer>
  );
};

export default Footer;
