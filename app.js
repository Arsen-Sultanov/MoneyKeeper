if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {scope: './'})
      .then(reg=> {
        if(reg.installing) {
            console.log('sw installing');
        } else if(reg.waiting) {
            console.log('sw installed');
        } else if(reg.active) {
            console.log('sw active');
        }
      })
      .catch(error=> {
        console.log('sw installing failed' + error)
      });
}