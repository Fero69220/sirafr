/* Service worker — La Sīra du Prophète ﷺ
   Rôle : rendre le site (et donc tous les résumés, intégrés dans index.html)
   disponible hors ligne quand il est ajouté à l'écran d'accueil.

   ⚠️ À chaque mise à jour du site (nouveaux résumés), incrémentez VERSION
   ci-dessous avant de republier sur Netlify : cela force le remplacement
   de l'ancien cache. */

const VERSION = "v20";
const CACHE = "sira-" + VERSION;
const FONT_CACHE = "sira-fonts";
const AUDIO_CACHE = "sira-audio"; /* audios téléchargés — jamais purgé lors des mises à jour */

const PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("sira-") && k !== CACHE && k !== FONT_CACHE && k !== AUDIO_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 1) Pages HTML : réseau d'abord (pour recevoir les mises à jour),
  //    repli sur le cache quand on est hors ligne.
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy));
          return res;
        })
        .catch(() =>
          caches.match("./index.html").then((r) => r || caches.match("./"))
        )
    );
    return;
  }

  // 2) Audios des cours : servis depuis les téléchargements hors ligne
  //    s'ils existent, avec gestion des requêtes partielles (Range)
  //    exigées par Safari/iOS pour la lecture audio.
  if (req.destination === "audio") {
    event.respondWith(serveAudio(req));
    return;
  }

  // 3) Google Fonts : cache d'abord (fonctionne hors ligne après la 1re visite).
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    event.respondWith(
      caches.open(FONT_CACHE).then((cache) =>
        cache.match(req).then((cached) => {
          if (cached) return cached;
          return fetch(req).then((res) => {
            cache.put(req, res.clone());
            return res;
          });
        })
      )
    );
    return;
  }

  // 4) Autres fichiers du site (icônes, manifest…) : cache d'abord.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        });
      })
    );
  }
});

/* Sert un audio : depuis le cache des téléchargements si présent
   (en découpant la réponse si le navigateur demande une plage d'octets),
   sinon depuis le réseau. */
async function serveAudio(req) {
  const cache = await caches.open(AUDIO_CACHE);
  const cached = await cache.match(req.url, { ignoreVary: true });
  if (!cached) return fetch(req);

  const range = req.headers.get("range");
  if (!range) return cached.clone();

  const buf = await cached.clone().arrayBuffer();
  const size = buf.byteLength;
  const m = /bytes=(\d+)-(\d*)/.exec(range);
  const start = m ? Number(m[1]) : 0;
  const end = m && m[2] ? Math.min(Number(m[2]), size - 1) : size - 1;

  return new Response(buf.slice(start, end + 1), {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Content-Type": cached.headers.get("Content-Type") || "audio/mpeg",
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes"
    }
  });
}
