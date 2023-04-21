 let timer;

  function openWindow(location) {
    window.open(location);
  }

  function isIndonesia() {
    // API yang digunakan
    const API = '70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f';

    // Membuat request
    const request = new XMLHttpRequest();
    request.open('GET', `http://ip-api.com/json/`, true);
    request.setRequestHeader('x-api-key', API);

    // Mengambil data
    request.onload = function () {
      const data = JSON.parse(this.response);

      // Jika negara Indonesia
      if (data.countryCode === 'ID') {
        openWindow('https://c.lazada.co.id/t/c.bV9qMg?sub_aff_id=Okelah');
      } else {
        openWindow('https://s.click.aliexpress.com/e/_Dnr71Q5?bz=300*250');
      }
    };

    request.send();
  }

  // Deteksi klik
  document.addEventListener('click', () => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      isIndonesia();
    }, 10000);
  });
