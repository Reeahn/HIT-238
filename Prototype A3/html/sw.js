if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('service worker installed'))
    .catch(err => console.error('Error', err));
  });
};

var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  './index.html',
  './sw.js',
  '/HIT-238/Prototype A3/css/master.css',
  '/HIT-238/Prototype A3/js/master.js',
];

self.addEventListener('install', function(event) {
  console.log("install")
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
