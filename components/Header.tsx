import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services-elagage-haute-garonne' },
  { label: 'Réalisations', href: '/realisations-elagueur-haute-garonne' }
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-beige/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pt-3 pb-[2px]">
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/Arbovert-sans-fond.png"
              alt="Logo Arbovert"
              width={198}
              height={138}
              className="h-[138px] w-auto object-contain drop-shadow-sm transition group-hover:scale-[1.02]"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-semibold text-forest">ARBOVERT</span>
              <span className="text-xs uppercase tracking-[0.08em] text-night/70">
                Élagage & entretien
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-night lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-forest">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:0600000000"
            className="btn btn-primary text-xs sm:text-sm"
            aria-label="Téléphoner à Arbovert"
          >
            📞 06 00 00 00 00
          </a>
        </div>
        <nav className="flex items-center justify-between gap-4 border-t border-forest/10 py-2 text-xs font-medium text-night lg:hidden">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="flex-1 text-center transition-colors hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
