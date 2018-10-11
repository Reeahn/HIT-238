if ('serviceWorker' in navigator) {
  console.log("its here")
  window.addEventListener('load', function() {
    console.log("loaded")
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log("successful")
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log("failed")
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '../html/',
  '../css/master.css',
  '../js/master.js',
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
