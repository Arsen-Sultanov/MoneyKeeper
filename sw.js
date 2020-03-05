this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1')
        .then(function(cache) {
              return cache.addAll([
                '/MoneyKeeper/',
                '/MoneyKeeper/index.html',
                '/MoneyKeeper/app.js'
              ])
        })
        .catch(error=> console.log('sw error: ' + error))
    );
});