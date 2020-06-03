this.addEventListener('install', function(event) {
  console.log(event);
    event.waitUntil(
        caches.open('v1')
        .then(function(cache) {
              return cache.addAll([
                './',
                './index.html',
                './app.js',
                './sw.js',
                './manifest.json',
                './favicon'
              ])
        })
        .catch(error=> console.log('sw error: ' + error))
    );
});
this.addEventListener('fetch', (event) => {
  console.log(111, event.request);
  event.respondWith(
    caches.match(event.request)
  );
});