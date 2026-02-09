'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';

// Note: Les metadata doivent être exportées depuis un composant serveur
// On va créer un fichier séparé pour les metadata ou utiliser generateMetadata

const servicesEligibles = [
  {
    nom: 'Taille de haies',
    description: 'Taille de haies jusqu\'à 3m de hauteur',
    icon: '✂️'
  },
  {
    nom: 'Tonte de pelouse',
    description: 'Tonte et entretien régulier de pelouse',
    icon: '🌱'
  },
  {
    nom: 'Débroussaillage',
    description: 'Débroussaillage et nettoyage de terrains',
    icon: '🌿'
  },
  {
    nom: 'Ramassage feuilles',
    description: 'Ramassage des feuilles mortes en automne',
    icon: '🍂'
  },
  {
    nom: 'Taille d\'arbustes',
    description: 'Taille d\'arbustes et massifs ornementaux',
    icon: '🌳'
  }
];

const servicesNonEligibles = [
  'Élagage d\'arbres (travail en hauteur)',
  'Abattage et démontage d\'arbres',
  'Création de jardins',
  'Travaux paysagers structurels'
];

export default function CreditImpotJardinage() {
  const [frequence, setFrequence] = useState<'ponctuel' | 'mensuel' | 'trimestriel'>('mensuel');
  const [surfacePelouse, setSurfacePelouse] = useState<string>('');
  const [longueurHaies, setLongueurHaies] = useState<string>('');
  const [montantAnnuel, setMontantAnnuel] = useState<string>('');

  const calculerCreditImpot = () => {
    if (!montantAnnuel || isNaN(Number(montantAnnuel))) return null;
    
    const montant = Number(montantAnnuel);
    const montantPlafonne = Math.min(montant, 5000); // Plafond de 5 000 €
    const creditImpot = montantPlafonne * 0.5;
    const coutReel = montant - creditImpot;
    
    return { creditImpot, coutReel, montantPlafonne, depassePlafond: montant > 5000 };
  };

  const resultat = calculerCreditImpot();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-leaf/10 to-beige">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
            Crédit d'Impôt 50% pour l'Entretien de Jardin en Haute-Garonne (31)
          </h1>
          <p className="text-xl text-night/80 max-w-3xl mx-auto">
            Bénéficiez de 50% de crédit d'impôt sur vos travaux de jardinage à Toulouse, Muret, Cugnaux. 
            Taille de haies, tonte, entretien de jardin déductibles. Entreprise SAP certifiée Arbovert.
          </p>
        </div>
      </section>

      {/* Section Comment bénéficier */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">Comment bénéficier de 50% de réduction fiscale ?</h2>
          <p className="text-lg text-night/80 mb-6">
            Le crédit d'impôt pour l'emploi à domicile (services à la personne) vous permet de déduire 
            <strong className="text-forest"> 50% de vos dépenses</strong> d'entretien de jardin dans la limite de 
            <strong className="text-forest"> 5 000 € par an</strong> (soit jusqu'à 2 500 € de crédit d'impôt).
          </p>
          <p className="text-lg text-night/80 mb-8">
            Arbovert est une entreprise certifiée Services à la Personne (SAP), ce qui vous garantit 
            l'éligibilité de vos prestations et la délivrance de l'attestation fiscale annuelle nécessaire 
            à votre déclaration de revenus.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-3xl border-2 border-leaf/30 bg-leaf/10 p-6">
              <h3 className="font-heading text-2xl text-forest mb-4">✅ Services éligibles au crédit d'impôt chez Arbovert</h3>
              <ul className="space-y-3">
                {servicesEligibles.map((service) => (
                  <li key={service.nom} className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <strong className="text-forest">{service.nom}</strong>
                      <p className="text-sm text-night/70">{service.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border-2 border-red-200 bg-red-50 p-6">
              <h3 className="font-heading text-2xl text-forest mb-4">❌ Services NON éligibles (IMPORTANT)</h3>
              <p className="text-sm text-night/70 mb-4">
                Ces travaux nécessitent des qualifications spécialisées et ne sont pas considérés comme services à la personne :
              </p>
              <ul className="space-y-2">
                {servicesNonEligibles.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span className="text-night/80">{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-night/70 mt-4 italic">
                <strong>Pourquoi cette distinction ?</strong> L'élagage nécessite des qualifications CAPA et équipements 
                spécialisés (harnais, tronçonneuse...). Il est considéré comme travail forestier, pas comme service à la personne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculateur Interactif */}
      <section className="section bg-beige">
        <div className="mx-auto max-w-4xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading mb-6">💰 Calculez votre économie d'impôt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-night mb-2">
                  Montant annuel de vos travaux (€)
                </label>
                <input
                  type="number"
                  value={montantAnnuel}
                  onChange={(e) => setMontantAnnuel(e.target.value)}
                  placeholder="Ex: 2400"
                  className="w-full px-4 py-2 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-night mb-2">
                  Fréquence d'entretien
                </label>
                <select
                  value={frequence}
                  onChange={(e) => setFrequence(e.target.value as any)}
                  className="w-full px-4 py-2 border border-forest/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest"
                >
                  <option value="ponctuel">Ponctuel</option>
                  <option value="mensuel">Mensuel</option>
                  <option value="trimestriel">Trimestriel</option>
                </select>
              </div>
            </div>
            <div className="bg-leaf/10 rounded-2xl p-6">
              {resultat ? (
                <>
                  <h3 className="font-heading text-xl text-forest mb-4">Votre économie</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-night/80">Dépenses annuelles :</span>
                      <strong className="text-forest">{Number(montantAnnuel).toLocaleString('fr-FR')} €</strong>
                    </div>
                    {resultat.depassePlafond && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-yellow-800">
                        ⚠️ Plafond de 5 000 € appliqué (crédit d'impôt max : 2 500 €)
                      </div>
                    )}
                    <div className="flex justify-between items-center border-t border-forest/20 pt-3">
                      <span className="text-night/80">Crédit d'impôt 50% :</span>
                      <strong className="text-2xl text-leaf">{resultat.creditImpot.toLocaleString('fr-FR')} €</strong>
                    </div>
                    <div className="flex justify-between items-center border-t border-forest/20 pt-3">
                      <span className="text-night/80">Coût réel après déduction :</span>
                      <strong className="text-xl text-forest">{resultat.coutReel.toLocaleString('fr-FR')} €</strong>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-night/60 py-8">
                  <p className="text-lg mb-2">💡</p>
                  <p>Entrez un montant pour calculer votre crédit d'impôt</p>
                  <p className="text-xs text-night/60 mt-2">Plafond : 5 000 € de dépenses (2 500 € de crédit d'impôt max)</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section Exemples concrets */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">Calcul du crédit d'impôt : exemples concrets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-3">Exemple 1 : Taille de haies à Cugnaux</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prestation :</strong> Taille de haies 2x/an</p>
                <p><strong>Montant :</strong> 600 € TTC/an</p>
                <p className="text-leaf font-semibold">→ Crédit d'impôt : 300 €</p>
                <p className="text-night/70">→ Coût réel : 300 €/an</p>
              </div>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-3">Exemple 2 : Entretien mensuel à Muret</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prestation :</strong> Tonte + taille haies mensuelle</p>
                <p><strong>Montant :</strong> 200 €/mois = 2 400 €/an</p>
                <p className="text-leaf font-semibold">→ Crédit d'impôt : 1 200 €</p>
                <p className="text-night/70">→ Coût réel : 1 200 €/an (100 €/mois)</p>
              </div>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-3">Exemple 3 : Débroussaillage à Toulouse</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prestation :</strong> Débroussaillage annuel</p>
                <p><strong>Montant :</strong> 800 € TTC</p>
                <p className="text-leaf font-semibold">→ Crédit d'impôt : 400 €</p>
                <p className="text-night/70">→ Coût réel : 400 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Retraités */}
      <section className="section bg-gradient-to-br from-leaf/5 to-beige">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">🎯 Retraités : Majorations et avantages spécifiques</h2>
          <div className="rounded-3xl border border-leaf/20 bg-white p-8 shadow-sm">
            <p className="text-lg text-night/80 mb-6">
              En tant que retraité dans le 31, vous bénéficiez d'avantages supplémentaires :
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-leaf/10 rounded-2xl p-6">
                <h3 className="font-heading text-xl text-forest mb-4">Plafond majoré</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Plafond standard : <strong>5 000 €</strong> de dépenses</li>
                  <li>• <strong>Majoration +65 ans : +1 500 € par personne</strong></li>
                  <li>• <strong>Couple de retraités : jusqu'à 8 000 € déductibles !</strong></li>
                </ul>
              </div>
              <div className="bg-beige/70 rounded-2xl p-6">
                <h3 className="font-heading text-xl text-forest mb-4">Cas particulier : résidence secondaire</h3>
                <p className="text-sm text-night/80">
                  Les travaux d'entretien de jardin dans votre résidence secondaire sont également éligibles 
                  au crédit d'impôt, sous réserve que vous y séjourniez au moins 120 jours par an.
                </p>
              </div>
            </div>
            <div className="bg-forest/5 rounded-2xl p-6 border border-forest/20">
              <h3 className="font-heading text-xl text-forest mb-3">Cas pratique : M. et Mme Dupont, retraités à Cugnaux</h3>
              <div className="space-y-2 text-sm">
                <p>• Entretien annuel complet : <strong>2 400 € TTC</strong></p>
                <p>• Crédit d'impôt 50% : <strong className="text-leaf">1 200 €</strong></p>
                <p>• Coût réel après déduction : <strong>1 200 €/an (100 €/mois)</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avance immédiate */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">Avance immédiate : payez seulement 50%</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Comment ça marche en 2026</h3>
              <p className="text-night/80 mb-4">
                Depuis 2024, vous pouvez bénéficier d'une <strong>avance immédiate</strong> de votre crédit d'impôt 
                via le dispositif CESU+ (Chèque Emploi Service Universel).
              </p>
              <p className="text-night/80">
                Concrètement, vous ne payez que <strong>50% du montant</strong> de la facture au moment de l'intervention. 
                Les 50% restants sont directement déduits de votre impôt.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Démarches via CESU+</h3>
              <ol className="space-y-2 text-sm text-night/80">
                <li>1. Ouvrez un compte CESU+ sur <a href="https://www.cesu.urssaf.fr" target="_blank" rel="noopener noreferrer" className="text-forest underline">cesu.urssaf.fr</a></li>
                <li>2. Arbovert vous facture via CESU+</li>
                <li>3. Vous payez seulement 50% au moment de l'intervention</li>
                <li>4. Les 50% restants sont déduits automatiquement de votre impôt</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conditions et plafonds */}
      <section className="section bg-beige">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">Conditions d'éligibilité et plafonds</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Qui peut en bénéficier ?</h3>
              <ul className="space-y-2 text-sm text-night/80">
                <li>✓ Tous les contribuables français</li>
                <li>✓ Propriétaires et locataires</li>
                <li>✓ Résidence principale et secondaire (sous conditions)</li>
                <li>✓ Pas de condition de ressources</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Plafonds annuels et limites</h3>
              <ul className="space-y-2 text-sm text-night/80">
                <li>• <strong>Plafond standard :</strong> 5 000 € de dépenses/an</li>
                <li>• <strong>Crédit d'impôt max :</strong> 2 500 €/an</li>
                <li>• <strong>Majoration +65 ans :</strong> +1 500 € par personne</li>
                <li>• <strong>Couple retraité :</strong> jusqu'à 8 000 € déductibles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Démarches administratives */}
      <section className="section">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading mb-8">Démarches administratives simplifiées</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Documents nécessaires</h3>
              <ul className="space-y-2 text-sm text-night/80">
                <li>✓ Factures Arbovert avec mention "Services à la Personne"</li>
                <li>✓ Attestation fiscale annuelle (fournie par Arbovert)</li>
                <li>✓ RIB pour paiement CESU+ (si applicable)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl text-forest mb-4">Quelle case remplir sur la déclaration ?</h3>
              <p className="text-sm text-night/80 mb-2">
                Sur votre déclaration de revenus (formulaire 2042), remplissez la <strong>case 7DB</strong> 
                (Crédit d'impôt pour l'emploi à domicile).
              </p>
              <p className="text-sm text-night/80">
                Le montant à déclarer correspond à <strong>50% de vos dépenses</strong> éligibles dans la limite 
                du plafond annuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Réassurance - Certifications SAP */}
      <section className="section bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-heading text-center mb-8">Certification Services à la Personne</h2>
          <div className="rounded-3xl border-2 border-leaf/30 bg-leaf/5 p-8 shadow-sm">
            <p className="text-center text-lg text-night/80 mb-6">
              Arbovert est une entreprise <strong>certifiée Services à la Personne (SAP)</strong>, 
              ce qui garantit l'éligibilité de vos prestations d'entretien de jardin au crédit d'impôt de 50%.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-6 shadow-md border border-forest/10">
                  <Image
                    src="/images/LOGO_ACCÈS-SAP 2023.png"
                    alt="Logo ACCÈS SAP - Certification Services à la Personne"
                    width={200}
                    height={80}
                    className="h-auto w-auto max-w-[200px] object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-night/70 text-center max-w-[200px]">
                  Certification ACCÈS SAP
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white rounded-xl p-6 shadow-md border border-forest/10">
                  <Image
                    src="/images/f5f0580be9512abf5eaedc02868a24d5dcadb2b6.jpg"
                    alt="Logo Services à la Personne - Certification SI!"
                    width={200}
                    height={100}
                    className="h-auto w-auto max-w-[200px] object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-night/70 text-center max-w-[200px]">
                  Certification Services à la Personne
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-night/70">
                Ces certifications garantissent que vos factures Arbovert sont éligibles au crédit d'impôt 
                et que vous recevrez automatiquement l'attestation fiscale annuelle pour votre déclaration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Arbovert */}
      <section className="section bg-gradient-to-br from-leaf/5 to-beige">
        <div className="mx-auto max-w-5xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
          <h2 className="section-heading mb-6">Pourquoi choisir Arbovert ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-heading text-xl text-forest mb-2">Certification SAP</h3>
              <p className="text-sm text-night/70">
                Entreprise certifiée Services à la Personne, garantissant l'éligibilité de vos prestations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="font-heading text-xl text-forest mb-2">Attestation fiscale</h3>
              <p className="text-sm text-night/70">
                Attestation fiscale annuelle fournie automatiquement pour votre déclaration
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌳</div>
              <h3 className="font-heading text-xl text-forest mb-2">Couverture locale</h3>
              <p className="text-sm text-night/70">
                Intervention rapide à Toulouse, Muret, Cugnaux et toute la Haute-Garonne
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/elagage-toulouse" className="btn btn-primary mr-4">
              Nos services à Toulouse
            </Link>
            <Link href="/elagage-muret" className="btn border border-forest text-forest hover:bg-forest hover:text-white">
              Nos services à Muret
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-heading mb-8">Questions fréquentes (FAQ)</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg text-forest mb-2">L'élagage est-il éligible au crédit d'impôt ?</h3>
              <p className="text-night/80">
                <strong>Non.</strong> L'élagage d'arbres nécessite des qualifications spécialisées (CAPA) et des équipements 
                de sécurité. Il est considéré comme travail forestier et n'est pas éligible au crédit d'impôt services à la personne. 
                Seuls les travaux d'entretien de jardin (tonte, taille de haies, débroussaillage) sont éligibles.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg text-forest mb-2">Quel est le plafond maximum ?</h3>
              <p className="text-night/80">
                Le plafond standard est de <strong>5 000 € de dépenses par an</strong>, soit un crédit d'impôt maximum de 
                <strong> 2 500 €</strong>. Pour les retraités de plus de 65 ans, une majoration de 1 500 € par personne s'applique, 
                portant le plafond à 8 000 € pour un couple de retraités.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg text-forest mb-2">Puis-je cumuler avec ma résidence secondaire ?</h3>
              <p className="text-night/80">
                Oui, sous réserve que vous y séjourniez au moins <strong>120 jours par an</strong>. Les travaux d'entretien 
                de jardin dans votre résidence secondaire sont éligibles au crédit d'impôt, dans la limite du plafond annuel global.
              </p>
            </div>
            <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-lg text-forest mb-2">Comment fonctionne l'avance immédiate ?</h3>
              <p className="text-night/80">
                Via le dispositif CESU+, vous pouvez bénéficier d'une avance immédiate de votre crédit d'impôt. 
                Vous ne payez que <strong>50% du montant</strong> de la facture au moment de l'intervention. 
                Les 50% restants sont directement déduits de votre impôt sur le revenu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-beige">
        <div className="mx-auto max-w-4xl rounded-3xl border border-forest/10 bg-white p-8 md:p-12 shadow-sm text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
            Profitez de 50% de crédit d'impôt sur votre entretien de jardin
          </h2>
          <p className="text-lg text-night/80 mb-8 max-w-2xl mx-auto">
            Contactez Arbovert pour un devis gratuit. Nous vous fournirons l'attestation fiscale nécessaire 
            et vous accompagnerons dans vos démarches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:0648768515" className="btn btn-primary whitespace-nowrap">
              📞 06 48 76 85 15
            </a>
            <Link href="/#contact" className="btn border border-forest text-forest hover:bg-forest hover:text-white whitespace-nowrap">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <div className="py-16 md:py-20 bg-beige">
        <ContactForm />
      </div>
    </div>
  );
}
