# Vérification de la clé API Google Places

## Comment vérifier que votre clé API a les droits pour Places API

### 1. Accéder à la Console Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Connectez-vous avec votre compte Google
3. Sélectionnez le projet qui contient votre clé API

### 2. Vérifier les APIs activées

1. Dans le menu de navigation, allez à **APIs & Services** > **Library** (ou **APIs & Services** > **Bibliothèque** en français)
2. Recherchez "Places API"
3. Assurez-vous que **Places API** (et non "Places API (New)") est activée
   - Si elle est activée, vous verrez "API enabled" ou "API activée"
   - Si elle n'est pas activée, cliquez sur "Enable" ou "Activer"

### 3. Vérifier les restrictions de la clé API

1. Allez à **APIs & Services** > **Credentials** (ou **Identifiants** en français)
2. Cliquez sur votre clé API dans la liste
3. Vérifiez les **API restrictions** (Restrictions des APIs) :
   - **Option 1** : Si "Don't restrict key" (Ne pas restreindre la clé) est sélectionné, la clé fonctionne pour toutes les APIs activées
   - **Option 2** : Si "Restrict key" (Restreindre la clé) est sélectionné, assurez-vous que **Places API** est dans la liste des APIs autorisées

### 4. Vérifier les restrictions HTTP

1. Toujours dans les paramètres de votre clé API
2. Vérifiez les **HTTP referrers** (Référents HTTP) ou **IP addresses** (Adresses IP)
   - Pour le développement local, vous pouvez utiliser `localhost:3000` ou `localhost:3010` dans les référents
   - Pour la production, ajoutez votre domaine

### 5. Tester la clé API directement

Vous pouvez tester votre clé API en utilisant cette URL dans votre navigateur (remplacez `YOUR_PLACE_ID` et `YOUR_API_KEY`) :

```
https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews&key=YOUR_API_KEY
```

**Codes de réponse courants :**
- `"status": "OK"` → Tout fonctionne correctement
- `"status": "REQUEST_DENIED"` → La clé API n'a pas les permissions ou est restreinte
- `"status": "INVALID_REQUEST"` → Le Place ID est invalide
- `"status": "OVER_QUERY_LIMIT"` → Vous avez dépassé votre quota

### 6. Version de l'API utilisée

Ce projet utilise actuellement **l'ancienne version de Places API** (legacy) :
- URL : `https://maps.googleapis.com/maps/api/place/details/json`
- Cette version est toujours supportée par Google

**Note importante :** Google propose également une "Places API (New)" mais ce projet utilise l'ancienne version qui fonctionne toujours parfaitement.

### 7. Consulter les logs

Après avoir ajouté les console.log dans le code, consultez :
- **Console du navigateur** (F12 > Console) pour les logs côté client
- **Terminal du serveur Next.js** pour les logs côté serveur (route API)

Les logs vous indiqueront exactement quelle erreur Google renvoie et pourquoi.

