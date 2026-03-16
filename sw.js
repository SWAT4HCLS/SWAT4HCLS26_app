/* SWAT4HCLS 2026 — Service Worker
   Network-first for JSON (always fresh data when online).
   Cache-first for HTML/CSS/JS/icons (fast offline load). */
const V = 'swat4hcls26-v6';
const PRECACHE = ['./', './index.html', './manifest.json',
  './data/program.json', './assets/amc_map.jpg',
  './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(PRECACHE).catch(()=>{})));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const isJSON = new URL(e.request.url).pathname.endsWith('.json');
  if (isJSON) {
    e.respondWith(
      fetch(e.request).then(r => { caches.open(V).then(c=>c.put(e.request,r.clone())); return r; })
      .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached ||
        fetch(e.request).then(r => { caches.open(V).then(c=>c.put(e.request,r.clone())); return r; }))
    );
  }
});
