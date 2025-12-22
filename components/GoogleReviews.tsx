'use client';

import { useEffect, useState } from 'react';

interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: {
    text: string;
    languageCode: string;
  };
  originalText: {
    text: string;
    languageCode: string;
  };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri?: string;
  };
  publishTime: string;
}

interface PlaceData {
  displayName: {
    text: string;
    languageCode: string;
  };
  rating: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
}

interface GoogleReviewsProps {
  maxReviews?: number;
  showRating?: boolean;
}

export default function GoogleReviews({ maxReviews = 5, showRating = true }: GoogleReviewsProps) {
  const [placeData, setPlaceData] = useState<PlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Récupérer les variables d'environnement (essayer les deux noms possibles)
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

        console.log('═══════════════════════════════════════════════════════');
        console.log('[GoogleReviews] 🔍 DÉBUT DE LA RÉCUPÉRATION DES AVIS');
        console.log('═══════════════════════════════════════════════════════');
        
        // Vérification détaillée des variables
        console.log('[GoogleReviews] 📋 VÉRIFICATION DES VARIABLES:');
        console.log('  - API Key présente:', !!apiKey);
        console.log('  - API Key (premiers 15 caractères):', apiKey ? `${apiKey.substring(0, 15)}...` : 'MANQUANTE');
        console.log('  - API Key longueur:', apiKey?.length || 0);
        console.log('  - Place ID présent:', !!placeId);
        console.log('  - Place ID valeur:', placeId || 'MANQUANT');
        console.log('  - Place ID format valide:', placeId ? /^ChIJ/.test(placeId) : false);

        if (!apiKey || !placeId) {
          console.error('❌ [GoogleReviews] ERREUR: Variables d\'environnement manquantes');
          console.error('   → Vérifiez votre fichier .env.local à la racine du projet');
          console.error('   → Variables requises:');
          console.error('      NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSy...');
          console.error('      NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...');
          setError(true);
          setLoading(false);
          return;
        }

        // Vérifier le format du Place ID
        if (!placeId.startsWith('ChIJ')) {
          console.warn('⚠️ [GoogleReviews] ATTENTION: Place ID ne commence pas par "ChIJ"');
          console.warn('   → Format attendu: ChIJ...');
          console.warn('   → Place ID actuel:', placeId);
        }

        // Vérifier le cache (24h)
        const CACHE_KEY = 'arbovert_google_reviews';
        const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 heures
        
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          try {
            const { data, timestamp } = JSON.parse(cached);
            const age = Date.now() - timestamp;
            if (age < CACHE_DURATION) {
              console.log('[GoogleReviews] ✅ Utilisation du cache (âge:', Math.floor(age / 1000 / 60), 'minutes)');
              setPlaceData(data);
              setLoading(false);
              return;
            } else {
              console.log('[GoogleReviews] ⏰ Cache expiré, rafraîchissement...');
            }
          } catch (e) {
            console.warn('[GoogleReviews] ⚠️ Erreur lors de la lecture du cache, continuation...');
          }
        }

        // Construction de l'URL
        const url = `https://places.googleapis.com/v1/places/${placeId}?fields=displayName,rating,userRatingCount,reviews&languageCode=fr&key=${apiKey}`;
        
        console.log('[GoogleReviews] 🌐 CONFIGURATION DE LA REQUÊTE:');
        console.log('  - URL complète:', url.replace(apiKey, 'API_KEY_MASQUÉE'));
        console.log('  - Base URL:', 'https://places.googleapis.com/v1/places/');
        console.log('  - Place ID dans URL:', placeId);
        console.log('  - Paramètres:', 'fields=displayName,rating,userRatingCount,reviews&languageCode=fr');
        console.log('  - Clé API dans URL:', '✅ Présente (masquée pour sécurité)');

        console.log('[GoogleReviews] 📡 ENVOI DE LA REQUÊTE...');
        const startTime = Date.now();

        const response = await fetch(url);
        const requestDuration = Date.now() - startTime;

        console.log('[GoogleReviews] 📥 RÉPONSE REÇUE:');
        console.log('  - Status Code:', response.status);
        console.log('  - Status Text:', response.statusText);
        console.log('  - Durée de la requête:', requestDuration, 'ms');
        console.log('  - Headers:', Object.fromEntries(response.headers.entries()));
        
        // Lire le texte brut de la réponse
        const responseText = await response.text();
        console.log('  - Taille de la réponse:', responseText.length, 'caractères');
        console.log('  - Début de la réponse (200 premiers caractères):', responseText.substring(0, 200));
        
        if (!response.ok) {
          console.error('═══════════════════════════════════════════════════════');
          console.error('❌ [GoogleReviews] ERREUR HTTP:', response.status);
          console.error('═══════════════════════════════════════════════════════');
          
          let errorData: any = {};
          try {
            errorData = JSON.parse(responseText);
            console.error('📋 DÉTAILS DE L\'ERREUR GOOGLE:');
            console.error('  - Code d\'erreur:', errorData.error?.code || 'N/A');
            console.error('  - Message:', errorData.error?.message || 'N/A');
            console.error('  - Status:', errorData.error?.status || 'N/A');
            console.error('  - Détails:', errorData.error?.details || 'N/A');
            console.error('  - Réponse complète:', JSON.stringify(errorData, null, 2));
          } catch (parseError) {
            console.error('  - Réponse non-JSON:', responseText);
            errorData = { raw: responseText };
          }

          // Messages d'aide selon le code d'erreur
          console.error('🔧 INSTRUCTIONS DE CORRECTION:');
          if (response.status === 400) {
            console.error('   → Erreur 400: Requête invalide');
            console.error('   → Vérifiez que:');
            console.error('      • Le Place ID est correct (format: ChIJ...)');
            console.error('      • La clé API est valide et activée');
            console.error('      • L\'API "Places API (New)" est activée dans Google Cloud Console');
          } else if (response.status === 401) {
            console.error('   → Erreur 401: Non autorisé');
            console.error('   → Vérifiez que:');
            console.error('      • La clé API est correcte');
            console.error('      • La clé API n\'a pas été révoquée');
          } else if (response.status === 403) {
            console.error('   → Erreur 403: Accès refusé');
            console.error('   → Vérifiez que:');
            console.error('      • L\'API "Places API (New)" est activée');
            console.error('      • Les restrictions de la clé API autorisent votre domaine');
            console.error('      • Le quota n\'est pas dépassé');
          } else if (response.status === 404) {
            console.error('   → Erreur 404: Place ID introuvable');
            console.error('   → Vérifiez que:');
            console.error('      • Le Place ID est correct');
            console.error('      • Le lieu existe bien sur Google Maps');
          } else {
            console.error('   → Erreur inconnue, consultez la documentation Google Places API');
          }

          throw new Error(`HTTP ${response.status}: ${errorData.error?.message || response.statusText}`);
        }

        // Parser la réponse JSON
        let data: PlaceData;
        try {
          data = JSON.parse(responseText);
        } catch (parseError) {
          console.error('❌ [GoogleReviews] Erreur de parsing JSON:', parseError);
          console.error('   Réponse brute:', responseText);
          throw new Error('Réponse invalide de l\'API Google');
        }

        console.log('═══════════════════════════════════════════════════════');
        console.log('[GoogleReviews] ✅ DONNÉES REÇUES AVEC SUCCÈS');
        console.log('═══════════════════════════════════════════════════════');
        console.log('📊 STRUCTURE DES DONNÉES:');
        console.log('  - Display Name:', data.displayName?.text || 'N/A');
        console.log('  - Rating:', data.rating || 'N/A');
        console.log('  - User Rating Count:', data.userRatingCount || 0);
        console.log('  - Nombre d\'avis:', data.reviews?.length || 0);
        console.log('  - Données complètes:', JSON.stringify(data, null, 2));

        if (data.reviews && data.reviews.length > 0) {
          console.log('📝 PREMIER AVIS (exemple):');
          const firstReview = data.reviews[0];
          console.log('  - Auteur:', firstReview.authorAttribution?.displayName);
          console.log('  - Note:', firstReview.rating);
          console.log('  - Texte (premiers 100 caractères):', firstReview.text?.text?.substring(0, 100) || 'N/A');
        }

        // Mettre en cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data,
          timestamp: Date.now()
        }));

        setPlaceData(data);
        console.log('[GoogleReviews] ✅ Données mises en cache et affichées');

      } catch (err: any) {
        console.error('═══════════════════════════════════════════════════════');
        console.error('❌ [GoogleReviews] ERREUR GLOBALE');
        console.error('═══════════════════════════════════════════════════════');
        console.error('  - Type:', err?.name || 'Unknown');
        console.error('  - Message:', err?.message || 'Erreur inconnue');
        console.error('  - Stack:', err?.stack || 'N/A');
        console.error('═══════════════════════════════════════════════════════');
        setError(true);
      } finally {
        setLoading(false);
        console.log('[GoogleReviews] 🏁 FIN DU PROCESSUS');
        console.log('═══════════════════════════════════════════════════════');
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-[#2C3E2F]">
            Ils nous ont fait confiance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !placeData?.reviews?.length) {
    console.warn('[GoogleReviews] Aucun avis à afficher');
    return null;
  }

  const displayedReviews = placeData.reviews.slice(0, maxReviews);

  return (
    <section className="py-16 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec note moyenne */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#2C3E2F]">
            Ils nous ont fait confiance
          </h2>
          {showRating && (
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(placeData.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-bold text-[#2C3E2F]">
                {placeData.rating.toFixed(1)}
              </span>
              {placeData.userRatingCount && (
                <span className="text-gray-600">
                  ({placeData.userRatingCount} avis)
                </span>
              )}
            </div>
          )}
        </div>

        {/* Grille d'avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {/* Lien vers Google */}
        <div className="text-center">
          <a
            href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4A7C59] hover:text-[#2C3E2F] font-medium transition-colors"
          >
            Voir tous nos avis sur Google
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 150;
  
  // Utiliser le texte original si disponible, sinon le texte traduit
  const reviewText = review.originalText?.text || review.text?.text || '';
  const shouldTruncate = reviewText.length > maxLength;
  const displayText = expanded || !shouldTruncate
    ? reviewText
    : `${reviewText.slice(0, maxLength)}...`;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      {/* En-tête avec photo et nom */}
      <div className="flex items-center gap-3 mb-4">
        {review.authorAttribution?.photoUri ? (
          <img
            src={review.authorAttribution.photoUri}
            alt={review.authorAttribution.displayName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#4A7C59] flex items-center justify-center text-white font-bold text-lg">
            {review.authorAttribution?.displayName?.charAt(0) || '?'}
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-[#2C3E2F]">
            {review.authorAttribution?.displayName || 'Client'}
          </h3>
          <p className="text-sm text-gray-500">
            {review.relativePublishTimeDescription || 'Récemment'}
          </p>
        </div>
      </div>

      {/* Étoiles */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Texte de l'avis */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {displayText}
      </p>

      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#4A7C59] hover:text-[#2C3E2F] text-sm font-medium mt-2 transition-colors"
        >
          {expanded ? 'Voir moins' : 'Lire plus'}
        </button>
      )}
    </div>
  );
}
