import React, { useEffect, useState } from 'react';

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const key = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
      const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
      
      // On utilise l'URL directe avec tous les paramètres dedans
      const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount,displayName&key=${key}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          setError(data.error?.message || "Erreur Google");
          console.error("Détails de l'erreur:", data);
          return;
        }

        setReviews(data.reviews || []);
      } catch (err) {
        setError("Erreur réseau");
      }
    };

    fetchReviews();
  }, []);

  if (error) return <div className="p-4 text-red-500">Erreur : {error}</div>;
  if (reviews.length === 0) return <div className="p-4">Chargement des avis...</div>;

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
