# Configuration des avis Google

## Étapes pour intégrer les avis Google sur votre site

### 1. Obtenir votre Place ID Google

Votre Place ID est l'identifiant unique de votre établissement sur Google Business.

**Méthode 1 : Via l'outil officiel Google**
1. Allez sur [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Recherchez votre entreprise "Arbovert" avec votre adresse
3. Le Place ID s'affichera sous le nom de votre établissement

**Méthode 2 : Via votre profil Google Business**
1. Ouvrez votre profil Google Business
2. L'URL contient souvent le Place ID, ou utilisez une extension Chrome comme "Google Business Profile ID Finder"

### 2. Obtenir une clé API Google

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. **Activez l'API "Places API (New)"** dans la bibliothèque d'APIs (c'est la nouvelle version v1)
4. Allez dans "Identifiants" > "Créer des identifiants" > "Clé API"
5. Copiez votre clé API
6. (Recommandé) Restreignez la clé API à "Places API (New)" uniquement pour la sécurité
7. **Important** : Configurez les restrictions HTTP pour autoriser votre domaine de production (Vercel)

### 3. Configurer les variables d'environnement

**Pour le développement local :**
Créez un fichier `.env.local` à la racine du projet (pas dans /src) avec le contenu suivant :

```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=AIzaSy...votre_clé_complète
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...votre_place_id
```

**Points critiques :**
- Aucun espace autour du `=`
- Aucune citation `""` autour des valeurs
- `NEXT_PUBLIC_` au début (obligatoire pour Next.js)
- Le fichier doit être nommé exactement `.env.local` (pas `.env`)

**Pour la production (Vercel) :**
1. Allez dans votre projet Vercel
2. Allez dans "Settings" > "Environment Variables"
3. Ajoutez les deux variables :
   - `NEXT_PUBLIC_GOOGLE_PLACE_ID` = votre Place ID
   - `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` = votre clé API

**Important :** 
- Le fichier `.env.local` ne doit PAS être commité dans Git (il est déjà dans .gitignore)
- Redémarrez le serveur de développement après avoir créé/modifié le fichier `.env.local`
- Les variables d'environnement doivent être configurées sur Vercel pour que ça fonctionne en production

### 4. Tester l'intégration

1. Redémarrez votre serveur de développement : `npm run dev`
2. Visitez votre page d'accueil
3. La section "Avis Google" devrait apparaître entre "Ils nous ont fait confiance" et le formulaire de contact

## Notes importantes

- **Sécurité** : La clé API est maintenant stockée côté serveur uniquement. Le composant client utilise la route API `/api/google-reviews` pour éviter d'exposer la clé API dans le code JavaScript.
- **Cache** : Les avis sont mis en cache pendant 1 heure pour limiter les appels à l'API Google et améliorer les performances.
- **API v1** : Le projet utilise maintenant la nouvelle API Google Places v1 (`places.googleapis.com/v1`) pour une meilleure compatibilité future.
- **Design** : Le composant correspond maintenant au design du reste du site (même style que la section "Ils nous ont fait confiance").
- Le composant affiche jusqu'à 6 avis par défaut (configurable)
- La note moyenne et le nombre total d'avis sont affichés en haut de la section
- Si les variables d'environnement ne sont pas configurées, la section ne s'affichera pas (pas d'erreur)
- Gestion robuste des erreurs avec timeout de 15 secondes pour éviter que le site plante

## Personnalisation

Vous pouvez modifier le nombre d'avis affichés dans `app/page.tsx` :

```tsx
<GoogleReviews 
  maxReviews={6}  // Changez ce nombre
  showRating={true}
/>
```

