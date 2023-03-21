// Mendapatkan kata kunci pencarian dari URL
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

// Mendapatkan IP pengguna menggunakan API dari ipdata.co
const ipAPI = 'https://api.ipdata.co?api-key=70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f';
fetch(ipAPI)
  .then(response => response.json())
  .then(data => {
    // Mendapatkan kode negara dari data yang diterima
    const countryCode = data.country_code;

    // Memeriksa apakah negara pengguna adalah Indonesia
    if (countryCode === 'ID') {
      // Redirect ke link Shopee dengan kata kunci pencarian
      const shopeeLink = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
      const redirectLink = `https://shopee.ee/an_redir?origin_link=${encodeURIComponent(shopeeLink)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
      window.location.replace(redirectLink);
    } else {
      // Redirect ke link High Revenue Gate
      const highRevenueGateLink = `https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227`;
      window.location.replace(highRevenueGateLink);
    }
  })
  .catch(error => {
    console.error(error);
    // Jika terjadi kesalahan, langsung redirect ke link High Revenue Gate
    const highRevenueGateLink = `https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227`;
    window.location.replace(highRevenueGateLink);
  });
