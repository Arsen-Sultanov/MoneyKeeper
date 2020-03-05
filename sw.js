this.addEventListener('install', event=> {
    event.waitUntil(
        caches.open('v1').then(cache=> {
              return cache.addAll([
                './',
                './index.html',
                './app.js',

              ]);
          }).catch(error=> console.log('sw error: ' + error));
    );
});