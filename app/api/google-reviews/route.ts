import { NextRequest, NextResponse } from 'next/server';

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
    // Utiliser les variables d'environnement au lieu des paramètres de requête
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    console.log('[API Google Reviews] Requête reçue');
    console.log('[API Google Reviews] Place ID présent:', !!placeId);
    console.log('[API Google Reviews] API Key présente:', !!apiKey);

    if (!placeId || !apiKey) {
      console.error('[API Google Reviews] Variables d\'environnement manquantes');
      return NextResponse.json(
        { error: 'Configuration serveur manquante (Place ID ou API Key)' },
        { status: 500 }
      );
    }

    // Utiliser l'API Google Places (ancienne version) pour récupérer les détails du lieu
    // URL: https://maps.googleapis.com/maps/api/place/details/json
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}&language=fr`;
    console.log('[API Google Reviews] Appel à l\'API Google Places');

    // Ajouter un timeout pour éviter que le site plante si Google met du temps à répondre
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 secondes de timeout

    try {
      const response = await fetch(apiUrl, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log('[API Google Reviews] Statut HTTP de Google:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text().catch(() => 'Impossible de lire la réponse d\'erreur');
        console.error('[API Google Reviews] Réponse non-OK de Google:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText.substring(0, 500) // Limiter la taille du log
        });
        return NextResponse.json(
          { error: `Erreur API Google Places: ${response.status} ${response.statusText}` },
          { status: response.status >= 500 ? 502 : 400 }
        );
      }

      const data = await response.json().catch((parseError) => {
        console.error('[API Google Reviews] Erreur lors du parsing JSON:', parseError);
        throw new Error('Réponse invalide de Google Places API');
      });

      console.log('[API Google Reviews] Réponse de Google:', {
        status: data.status,
        hasResult: !!data.result,
        resultName: data.result?.name,
        reviewsCount: data.result?.reviews?.length || 0,
        errorMessage: data.error_message
      });

      if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
        console.error('[API Google Reviews] Erreur Google Places:', {
          status: data.status,
          errorMessage: data.error_message
        });
        return NextResponse.json(
          { error: `Erreur Google Places: ${data.status}${data.error_message ? ` - ${data.error_message}` : ''}` },
          { status: 400 }
        );
      }

      if (!data.result) {
        console.warn('[API Google Reviews] Aucun résultat trouvé');
        return NextResponse.json(
          { error: 'Aucun résultat trouvé' },
          { status: 404 }
        );
      }

      console.log('[API Google Reviews] Données préparées avec succès');
      return NextResponse.json({
        name: data.result.name,
        rating: data.result.rating,
        reviews: data.result.reviews || []
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
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

