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
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get('placeId');
  const apiKey = searchParams.get('apiKey');

  console.log('[API Google Reviews] Requête reçue');
  console.log('[API Google Reviews] Place ID:', placeId);
  console.log('[API Google Reviews] API Key présente:', !!apiKey);

  if (!placeId || !apiKey) {
    console.error('[API Google Reviews] Place ID ou API Key manquant');
    return NextResponse.json(
      { error: 'Place ID et API Key requis' },
      { status: 400 }
    );
  }

  try {
    // Utiliser l'API Google Places (ancienne version) pour récupérer les détails du lieu
    // URL: https://maps.googleapis.com/maps/api/place/details/json
    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}&language=fr`;
    console.log('[API Google Reviews] Appel à l\'API Google Places (ancienne version)');
    console.log('[API Google Reviews] URL:', apiUrl.replace(apiKey, '***API_KEY***'));

    const response = await fetch(apiUrl);

    console.log('[API Google Reviews] Statut HTTP de Google:', response.status, response.statusText);
    console.log('[API Google Reviews] Headers de réponse:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[API Google Reviews] Réponse non-OK de Google:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Erreur API Google Places: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
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

