const testimonials = [
  {
    name: 'Julien P.',
    location: 'Toulouse',
    text: 'Intervention impeccable pour la taille et la mise en sécurité de nos platanes. L’équipe laisse un terrain propre.',
    rating: 5
  },
  {
    name: 'Claire & Martin',
    location: 'Cugnaux',
    text: 'Abattage maîtrisé d’un pin menaçant notre toiture. Devis clair, chantier sécurisé et sourires en prime.',
    rating: 5
  },
  {
    name: 'Sophie L.',
    location: 'Muret',
    text: 'Arbovert entretient nos haies et la pelouse depuis 2 ans. Ponctualité, conseils et finitions irréprochables.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-beige">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading">Ils nous ont fait confiance</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between text-sm">
                <p className="font-semibold text-night">
                  {testimonial.name}
                  <span className="block text-xs text-night/60">{testimonial.location}</span>
                </p>
                <span aria-label={`Note ${testimonial.rating} sur 5`} className="text-lg">
                  {'★'.repeat(testimonial.rating)}
                </span>
              </div>
              <p className="mt-4 text-night/80">{testimonial.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
