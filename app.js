if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg=> {
        if(reg.installing) {
            console.log('sw installing');
        } else if(req.waiting) {
            console.log('sw installed');
        } else if(req.active) {
            console.log('sw active');
        }
      })
      .catch(error=> {
        console.log('sw installing failed' + error)
      });
}

alert('aaaa');