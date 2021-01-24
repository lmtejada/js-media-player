const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache(request));
})

async function precache() {
  const cache = await caches.open(VERSION);

  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4'
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION),
    response = await cache.match(request);

  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION),
    response = await fetch(request);

  return cache.put(request, response);
}
