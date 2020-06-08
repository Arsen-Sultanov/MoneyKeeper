const BASE_URL = '/MoneyKeeper/';
const CACHES_V = 'v1'
const URLS = [
  BASE_URL,
  BASE_URL + 'app.js',
  BASE_URL + 'sw.js',
  BASE_URL + 'manifest.json',
  BASE_URL + 'favicon'
];

this.addEventListener('install', function(event) {
    const preCache = async ()=> {
      caches.open(CACHES_V)
        .then(function(cache) {
              return cache.addAll(URLS)
        })
        .catch(error=> console.log('sw error: ' + error))
    }
    event.waitUntil();
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
  );
});