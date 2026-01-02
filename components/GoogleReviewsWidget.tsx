'use client';

interface GoogleReviewsWidgetProps {
  placeId: string;
  maxReviews?: number;
}

const GoogleReviewsWidget = ({ placeId, maxReviews = 6 }: GoogleReviewsWidgetProps) => {
  return (
    <section className="section bg-beige">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-heading mb-8">Avis Google</h2>
        <div className="rounded-2xl border border-forest/10 bg-white p-6 shadow-sm overflow-hidden">
          <div 
            className="google-reviews-container"
            data-place-id={placeId}
            data-max-reviews={maxReviews}
          >
            {/* Widget Google Reviews sera chargé via script */}
            <div 
              id="google-reviews-widget"
              style={{ minHeight: '400px' }}
              className="flex items-center justify-center"
            >
              <p className="text-night/60">Chargement des avis Google...</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href={`https://search.google.com/local/writereview?placeid=${placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm"
            >
              Laisser un avis sur Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;
