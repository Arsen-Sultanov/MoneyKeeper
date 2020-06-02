this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1')
        .then(function(cache) {
              return cache.addAll([
                './index.html',
                './app.js'
              ])
        })
        .catch(error=> console.log('sw error: ' + error))
    );
});
this.addEventListener('fetch', (event) => {
  console.log(111);
  event.respondWith(
    caches.match(event.request)
  );
});