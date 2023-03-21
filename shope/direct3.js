// Mendapatkan kata kunci pencarian dari URL
const currentUrl = window.location.href;
const searchParams = new URLSearchParams(currentUrl.split('?')[1]);
const keyword = searchParams.get('q');

// Memanggil API ipdata.co untuk mendapatkan informasi IP negara
fetch('https://api.ipdata.co?api-key=70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f')
  .then(response => response.json())
  .then(data => {
    // Mendapatkan kode negara dari hasil API
    const countryCode = data.country_code;

    // Memeriksa jika IP negara adalah Indonesia
    if (countryCode === 'ID') {
      // Membuat URL redirect untuk Shopee
      const redirectUrl = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;

      // Mengarahkan browser ke URL redirect
      window.location.href = `https://shope.ee/an_redir?origin_link=${encodeURIComponent(redirectUrl)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
    } else {
      // Membuat URL redirect untuk High Revenue Gate
      const redirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';

      // Mengarahkan browser ke URL redirect
      window.location.href = redirectUrl;
    }
  })
  .
