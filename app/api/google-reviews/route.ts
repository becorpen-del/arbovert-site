import { NextRequest, NextResponse } from 'next/server';

// Cache simple en mémoire (pour le développement)
// En production, vous pourriez utiliser Redis ou un autre système de cache
let cache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 60 * 60 * 1000; // 1 heure en millisecondes

// Gérer les requêtes OPTIONS pour CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function GET(request: NextRequest) {
  try {
    // Vérifier le cache
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      console.log('[API Google Reviews] Données servies depuis le cache');
      return NextResponse.json(cache.data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      });
    }

    // Utiliser les variables d'environnement
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    console.log('[API Google Reviews] Requête reçue');
    console.log('[API Google Reviews] Place ID présent:', !!placeId);
    console.log('[API Google Reviews] Place ID (premiers caractères):', placeId ? `${placeId.substring(0, 10)}...` : 'MANQUANT');
    console.log('[API Google Reviews] API Key présente:', !!apiKey);
    console.log('[API Google Reviews] API Key (premiers caractères):', apiKey ? `${apiKey.substring(0, 10)}...` : 'MANQUANT');

    if (!placeId || !apiKey) {
      console.error('[API Google Reviews] Variables d\'environnement manquantes');
      return NextResponse.json(
        { error: 'Configuration serveur manquante (Place ID ou API Key)' },
        { status: 500 }
      );
    }

    // Utiliser la nouvelle API Google Places v1
    // Note: les champs sont spécifiés dans X-Goog-FieldMask, pas dans l'URL
    const url = `https://places.googleapis.com/v1/places/${placeId}`;

    console.log('[API Google Reviews] Appel à l\'API Google Places v1');
    console.log('[API Google Reviews] URL:', url);
    console.log('[API Google Reviews] Place ID:', placeId);

    // Ajouter un timeout pour éviter que le site plante si Google met du temps à répondre
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 secondes de timeout

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews,rating,userRatingCount,displayName',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('[API Google Reviews] Statut HTTP de Google:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Impossible de lire la réponse d\'erreur');
        
        // Essayer de parser l'erreur en JSON
        let errorData: any = {};
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }
        
        console.error('[API Google Reviews] Réponse non-OK de Google:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText.substring(0, 1000), // Limiter la taille du log
          parsedError: errorData,
        });

        // Construire un message d'erreur détaillé
        const errorMessage = errorData.error?.message || 
                           errorData.message || 
                           `Erreur API Google Places: ${response.status} ${response.statusText}`;

        // Si c'est une erreur serveur de Google, retourner une erreur 502
        if (response.status >= 500) {
          return NextResponse.json(
            { error: errorMessage },
            { status: 502 }
          );
        }

        // Pour les erreurs client (400, 401, 403, etc.), retourner 400
        return NextResponse.json(
          { error: errorMessage },
          { status: 400 }
        );
      }

      const data = await response.json().catch((parseError) => {
        console.error('[API Google Reviews] Erreur lors du parsing JSON:', parseError);
        throw new Error('Réponse invalide de Google Places API');
      });

      console.log('[API Google Reviews] Réponse de Google:', {
        hasReviews: !!data.reviews,
        reviewsCount: data.reviews?.length || 0,
        rating: data.rating,
        userRatingCount: data.userRatingCount,
      });

      // Formater les données pour le client
      const formattedData = {
        reviews: data.reviews || [],
        rating: data.rating || null,
        userRatingCount: data.userRatingCount || 0,
        displayName: data.displayName || null,
      };

      // Mettre en cache
      cache = {
        data: formattedData,
        timestamp: Date.now(),
      };

      return NextResponse.json(formattedData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      });
    } catch (fetchError: any) {
      clearTimeout(timeoutId);

      if (fetchError.name === 'AbortError') {
        console.error('[API Google Reviews] Timeout: Google a mis trop de temps à répondre');
        return NextResponse.json(
          { error: 'Timeout: Google Places API a mis trop de temps à répondre' },
          { status: 504 }
        );
      }

      throw fetchError; // Relancer l'erreur pour le catch externe
    }
  } catch (error) {
    console.error('[API Google Reviews] Erreur complète:', error);
    if (error instanceof Error) {
      console.error('[API Google Reviews] Message d\'erreur:', error.message);
      console.error('[API Google Reviews] Stack:', error.stack);
    }
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Erreur serveur lors de la récupération des avis' },
      { status: 500 }
    );
  }
}

