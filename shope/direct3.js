// mengambil url saat ini
const currentUrl = window.location.href;

// mengambil parameter pencarian dari url
const searchParam = new URLSearchParams(currentUrl.split('?')[1]);

// mendapatkan kata kunci pencarian dari parameter pencarian
const keyword = searchParam.get('q');

// mengambil informasi IP negara pengunjung dari ipdata.co
fetch('https://api.ipdata.co/?api-key=70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f')
  .then(response => response.json())
  .then(data => {
    // mendapatkan kode negara dari data IP
    const countryCode = data.country_code;

    // memeriksa apakah kode negara pengunjung adalah Indonesia
    if (countryCode === 'ID') {
      // mengarahkan ke link Shopee jika negara Indonesia
      const shopeeLink = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${encodeURIComponent(keyword)}`;
      const redirectLink = `https://shope.ee/an_redir?origin_link=${encodeURIComponent(shopeeLink)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
      window.location.replace(redirectLink);
    } else {
      // mengarahkan ke link High Revenue Gate jika negara bukan Indonesia
      const highrevenuegateLink = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
      window.location.replace(highrevenuegateLink);
    }
  })
  .catch(error => console.log(error));
