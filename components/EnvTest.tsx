'use client';

import { useEffect } from 'react';

export default function EnvTest() {
  useEffect(() => {
    console.log('Test variables env:', {
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY?.substring(0, 15) + '...',
      placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID
    });
  }, []);

  return null; // Ce composant n'affiche rien, il log juste dans la console
}




