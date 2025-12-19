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
3. Activez l'API "Places API" dans la bibliothèque d'APIs
4. Allez dans "Identifiants" > "Créer des identifiants" > "Clé API"
5. Copiez votre clé API
6. (Recommandé) Restreignez la clé API à "Places API" uniquement pour la sécurité

### 3. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```
NEXT_PUBLIC_GOOGLE_PLACE_ID=votre_place_id_ici
NEXT_PUBLIC_GOOGLE_API_KEY=votre_clé_api_ici
```

**Important :** 
- Le fichier `.env.local` ne doit PAS être commité dans Git (il est déjà dans .gitignore)
- Redémarrez le serveur de développement après avoir créé/modifié le fichier `.env.local`

### 4. Tester l'intégration

1. Redémarrez votre serveur de développement : `npm run dev`
2. Visitez votre page d'accueil
3. La section "Avis Google" devrait apparaître entre "Ils nous ont fait confiance" et le formulaire de contact

## Notes importantes

- Les avis sont récupérés en temps réel depuis Google
- Le composant affiche jusqu'à 6 avis par défaut (configurable)
- La note moyenne est affichée en haut de la section
- Si les variables d'environnement ne sont pas configurées, la section ne s'affichera pas (pas d'erreur)

## Personnalisation

Vous pouvez modifier le nombre d'avis affichés dans `app/page.tsx` :

```tsx
<GoogleReviews 
  maxReviews={6}  // Changez ce nombre
  showRating={true}
/>
```

