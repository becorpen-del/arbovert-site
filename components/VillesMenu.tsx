'use client';

import { useState } from 'react';
import Link from 'next/link';

const villesMenu = [
  { nom: 'Cugnaux', slug: 'elagueur-cugnaux', disponible: true },
  { nom: 'Muret', slug: 'elagueur-muret', disponible: false },
  { nom: 'Toulouse', slug: 'elagueur-toulouse', disponible: false },
  { nom: 'Tournefeuille', slug: 'elagueur-tournefeuille', disponible: false },
  { nom: 'Blagnac', slug: 'elagueur-blagnac', disponible: false },
  { nom: 'Colomiers', slug: 'elagueur-colomiers', disponible: false },
];

export function VillesMenuDesktop() {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 transition-colors hover:text-forest">
        Par ville
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-forest/10">
        {villesMenu.map((ville) => (
          <Link
            key={ville.slug}
            href={`/${ville.slug}`}
            className={`block px-4 py-2 hover:bg-beige/70 transition-colors ${
              !ville.disponible ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            {...(!ville.disponible && { onClick: (e) => e.preventDefault() })}
          >
            <span className="flex items-center justify-between">
              <span>Élagueur {ville.nom}</span>
              {!ville.disponible && <span className="text-xs text-night/40">(bientôt)</span>}
            </span>
          </Link>
        ))}

        <div className="border-t border-forest/10 mt-2 pt-2">
          <Link
            href="/nos-villes"
            className="block px-4 py-2 text-forest hover:bg-beige/70 transition-colors font-medium"
          >
            + Voir toutes nos villes
          </Link>
        </div>
      </div>
    </div>
  );
}

export function VillesMenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 px-4 transition-colors hover:text-forest"
      >
        <span>Par ville</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="pl-6 space-y-1 bg-beige/30">
          {villesMenu.map((ville) => (
            <Link
              key={ville.slug}
              href={`/${ville.slug}`}
              className={`block py-2 px-4 transition-colors hover:bg-beige/50 ${
                !ville.disponible ? 'opacity-50' : ''
              }`}
              onClick={() => setIsOpen(false)}
              {...(!ville.disponible && { onClick: (e) => e.preventDefault() })}
            >
              <span className="flex items-center justify-between">
                <span>Élagueur {ville.nom}</span>
                {!ville.disponible && <span className="text-xs text-night/40">(bientôt)</span>}
              </span>
            </Link>
          ))}
          <Link
            href="/nos-villes"
            className="block py-2 px-4 text-forest font-medium hover:bg-beige/50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            + Voir toutes nos villes
          </Link>
        </div>
      )}
    </div>
  );
}

