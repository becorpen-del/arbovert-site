import React, { useEffect, useState } from 'react';

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Vérifier que les variables d'environnement sont définies
        const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
        const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
        
        if (!key || !placeId) {
          console.warn('[GoogleReviews] Variables d\'environnement manquantes');
          setError('Configuration manquante');
          setLoading(false);
          return;
        }
        
        // On utilise l'URL directe avec tous les paramètres dedans
        const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount,displayName&key=${key}`;

        // Ajouter un timeout pour éviter que le site plante si Google met du temps à répondre
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 secondes de timeout

        try {
          const response = await fetch(url, {
            signal: controller.signal
          });

          clearTimeout(timeoutId);

          if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            setError(data.error?.message || `Erreur HTTP ${response.status}`);
            console.error("Détails de l'erreur:", data);
            return;
          }

          const data = await response.json();
          setReviews(data.reviews || []);
        } catch (fetchError: any) {
          clearTimeout(timeoutId);
          
          if (fetchError.name === 'AbortError') {
            setError('Timeout: Google a mis trop de temps à répondre');
            console.error('[GoogleReviews] Timeout lors de la récupération des avis');
          } else {
            throw fetchError; // Relancer l'erreur pour le catch externe
          }
        }
      } catch (err: any) {
        console.error('[GoogleReviews] Erreur lors de la récupération des avis:', err);
        setError(err.message || "Erreur réseau lors du chargement des avis");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div className="p-4">Chargement des avis...</div>;
  if (error) return <div className="p-4 text-red-500">Erreur : {error}</div>;
  if (reviews.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {reviews.map((rev: any, i: number) => (
        <div key={i} className="border p-4 rounded shadow">
          <p className="font-bold">{rev.authorAttribution?.displayName}</p>
          <p className="text-yellow-500">{"★".repeat(rev.rating)}</p>
          <p className="text-sm italic">"{rev.text?.text?.substring(0, 100)}..."</p>
        </div>
      ))}
    </div>
  );
}
