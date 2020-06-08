if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: '/MoneyKeeper'})
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

document.addEventListener('DOMContentLoaded', function() {
  const text = document.querySelector('.text');
  text.addEventListener('click', function() {
    alert('hello');
  });
  
});