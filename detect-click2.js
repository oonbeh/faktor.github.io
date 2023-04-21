let openTab;
let country;

// my api key
let apiKey = '70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f';

// ambil data lokasi
fetch('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey)
  .then(res => res.json())
  .then(data => {
    country = data.country_code2;
  });

document.addEventListener('click', function() {
  openTab = setTimeout(function() {
    if (country === 'ID') {
      window.open('https://c.lazada.co.id/t/c.bV9qMg?sub_aff_id=Okelah');
    } else {
      window.open('https://s.click.aliexpress.com/e/_Dnr71Q5?bz=300*250');
    }
  }, 10000);
});
