# Guide — Migrer les audios pour l'écoute et le téléchargement hors ligne

Le site sait maintenant lire des fichiers MP3 hébergés en direct, avec un
bouton **⬇ Télécharger** qui garde le cours sur le téléphone (lecture 100 %
hors ligne). Il faut pour cela sortir les audios de Google Drive, qui ne
permet ni la lecture directe ni le téléchargement par le site.

**La migration peut se faire cours par cours** : tant qu'un cours n'a pas de
champ `mp3`, son lien Google Drive continue de fonctionner comme avant.

---

## Étape 1 — Récupérer vos MP3 depuis Google Drive

Téléchargez vos fichiers audio sur votre ordinateur (sélection multiple →
clic droit → Télécharger). Renommez-les simplement, par exemple :
`001.mp3`, `002.mp3`, … `155.mp3` (sans espaces ni accents).

## Étape 2 — Créer un hébergement Cloudflare R2 (gratuit)

R2 est recommandé : 10 Go de stockage gratuits et surtout **aucun frais de
sortie** (la bande passante d'écoute est gratuite, contrairement à presque
tous les autres hébergeurs).

1. Créez un compte sur https://dash.cloudflare.com (gratuit).
2. Menu **R2 Object Storage** → **Create bucket** → nom : `sira-audio`.
3. Dans le bucket → onglet **Settings** → **Public access** →
   **Allow Access** au sous-domaine `r2.dev`. Notez l'adresse obtenue,
   du type : `https://pub-xxxxxxxxxxxx.r2.dev`

## Étape 3 — Autoriser le site à lire les fichiers (CORS)

Toujours dans **Settings** du bucket → **CORS policy** → **Add** et collez
(en remplaçant l'adresse par celle de votre site Netlify) :

```json
[
  {
    "AllowedOrigins": ["https://VOTRE-SITE.netlify.app"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["Content-Length", "Content-Range", "Accept-Ranges"],
    "MaxAgeSeconds": 86400
  }
]
```

Sans cette étape, le bouton Télécharger affichera une erreur.

## Étape 4 — Uploader les MP3

Dans le bucket → **Upload** → glissez vos fichiers `001.mp3`, etc.
(Pour 155 fichiers, l'upload par lots dans l'interface web fonctionne bien ;
faites-le par groupes de 20-30.)

## Étape 5 — Brancher le site

Dans `index.html` :

1. En haut de la liste des cours, renseignez :
   ```js
   const AUDIO_BASE = "https://pub-xxxxxxxxxxxx.r2.dev";
   ```
2. Pour chaque cours migré, ajoutez le champ `mp3` :
   ```js
   {
     numero: 1,
     titreAr: "...",
     titreFr: "...",
     resume: "...",
     audio: "https://drive.google.com/...",  // peut rester, il sera ignoré
     mp3: "001.mp3"
   },
   ```

## Étape 6 — Republier

1. Dans `sw.js`, incrémentez `VERSION` (ex. `"v3"` → `"v4"`).
2. Glissez le dossier sur Netlify comme d'habitude.

---

## Bon à savoir

- **Les téléchargements survivent aux mises à jour** du site : le cache
  audio (`sira-audio`) n'est jamais purgé lors d'un changement de version.
- **Espace** : comptez ~1 Mo par minute d'audio en MP3 64-96 kbps (largement
  suffisant pour de la voix). Si vos fichiers sont lourds, les réencoder en
  64 kbps mono divise souvent leur taille par 3-4 sans perte audible.
- **iOS** : si l'app n'est pas ouverte pendant plusieurs semaines, iOS peut
  purger son stockage (téléchargements compris). Ouvrir l'app de temps en
  temps suffit à l'éviter.
- **Suppression** : appuyer sur « ✓ Hors ligne » propose de supprimer le
  téléchargement pour libérer de l'espace.
