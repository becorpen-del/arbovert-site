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
            {/* NOTE DX :
               - Le fichier doit rester exactement nommé `/public/Arbovert-sans-fond.png`
               - La casse est importante (surtout en prod Linux) : ne pas renommer en `arbovert-sans-fond.png` ou autre variante.
            */}
            <Image
              src="/Arbovert-sans-fond.png"
              alt="Logo Arbovert"
              width={185}
              height={138}
              sizes="(max-width: 768px) 145px, 258px"
              className="h-[146px] w-auto object-contain drop-shadow-sm transition group-hover:scale-[1.02] md:h-[228px]"
              priority
            />
            <div className="hidden flex-col leading-tight md:flex">
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
            href="tel:0648768515"
            className="btn btn-primary rounded-md px-3 py-2 text-xs whitespace-nowrap sm:text-sm md:rounded-lg md:px-4 md:py-2.5 md:text-sm"
            aria-label="Téléphoner à Arbovert"
          >
            📞 06 48 76 85 15
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
