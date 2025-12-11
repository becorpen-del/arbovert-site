'use client';

import { useState, type ChangeEvent } from 'react';

const initialForm = {
  name: '',
  city: '',
  phone: '',
  workType: 'Élagage',
  message: ''
};

const workOptions = ['Élagage', 'Abattage', 'Taille de haies', 'Tonte & entretien', 'Autre'] as const;

type FormData = typeof initialForm;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-4xl rounded-3xl border border-forest/10 bg-white p-8 shadow-sm">
        <h2 className="section-heading">Un projet d'élagage ou d'entretien de jardin ?</h2>
        <p className="text-night/80">
          Le devis est gratuit partout en Haute-Garonne. Remplissez le formulaire et nous vous contactons sous 24h.
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="mt-8 grid gap-6"
        >
          <input type="hidden" name="access_key" value="121eb34e-2a3f-4a5a-b4b9-f9e31d279b9a" />
          <input type="hidden" name="subject" value="Nouveau lead depuisArbovert-31.fr" />
          <input type="hidden" name="redirect" value="https://www.arbovert-31.fr/#contact" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-night">
              Nom *
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-forest/20 bg-beige/40 px-4 py-3 focus:border-forest focus:outline-none"
                placeholder="Votre nom"
              />
            </label>
            <label className="text-sm font-semibold text-night">
              Ville *
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-forest/20 bg-beige/40 px-4 py-3 focus:border-forest focus:outline-none"
                placeholder="Toulouse, Muret, ..."
              />
            </label>
          </div>
          <label className="text-sm font-semibold text-night">
            Téléphone *
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-forest/20 bg-beige/40 px-4 py-3 focus:border-forest focus:outline-none"
              placeholder="06 48 76 85 15"
            />
          </label>
          <label className="text-sm font-semibold text-night">
            Type de travaux
            <select
              name="workType"
              value={formData.workType}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-forest/20 bg-beige/40 px-4 py-3 focus:border-forest focus:outline-none"
            >
              {workOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-night">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-lg border border-forest/20 bg-beige/40 px-4 py-3 focus:border-forest focus:outline-none"
              placeholder="Détaillez vos besoins, contraintes d'accès, délais souhaités..."
            />
          </label>
          <button type="submit" className="btn btn-primary text-base">
            Envoyer ma demande
          </button>
        </form>
        <p className="mt-6 flex items-center gap-2 text-sm text-night/70">
          <span className="text-leaf">✓</span>
          <span>Nos prestations d'entretien sont éligibles au crédit d'impôt 50% (attestation fiscale fournie)</span>
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
