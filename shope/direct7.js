// ambil kata kunci pencarian dari parameter URL
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

// cek IP negara menggunakan ipwhois
fetch('https://ipwhois.app/json/')
  .then(response => response.json())
  .then(data => {
    // jika IP negara Indonesia, redirect ke Shopee
    if (data.country_code === 'ID') {
      const redirectUrl = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
      window.location.replace(`https://shope.ee/an_redir?origin_link=${encodeURIComponent(redirectUrl)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`);
    } else {
      // jika IP bukan negara Indonesia, redirect ke High Revenue Gate
      window.location.replace('https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227');
    }
  });
