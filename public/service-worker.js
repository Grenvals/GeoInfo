const staticCacheName = 'static-cache-v1.0.8';

const staticAssets = [
  './',
  './index.html',
  './main.js',
  './images/check-mark-true.svg',
  './images/check-mark.svg',
  './images/delete.svg',
];

self.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('activate', async (event) => {
  const cachesKeys = await caches.keys();
  const checkKeys = cachesKeys.map(async (key) => {
    if (staticCacheName !== key) {
      await caches.delete(key);
    }
  });
  await Promise.all(checkKeys);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
