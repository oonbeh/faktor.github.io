// Mendapatkan parameter dari URL
const urlParams = new URLSearchParams(window.location.search);

// Mengambil nilai parameter 'q' atau 'slug-url.html'
const searchParam = urlParams.get('q');
const slugParam = window.location.pathname.substring(1);

// Mendapatkan IP pengguna menggunakan ipwhois
fetch('https://ipwhois.app/json/')
  .then(response => response.json())
  .then(data => {
    // Mendapatkan kode negara dari lokasi IP
    const countryCode = data.country_code;

    // Jika negara adalah Indonesia, maka redirect ke link Shopee
    if (countryCode === 'ID') {
      const keyword = searchParam ? `&keyword=${searchParam}` : slugParam ? `&keyword=${slugParam}` : '';
      const shopeeLink = `https://shopee.co.id/search?filters=5%2C6%2C7${keyword}`;
      const redirectLink = `https://shopee.ee/an_redir?origin_link=${encodeURIComponent(shopeeLink)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
      window.location.href = redirectLink;
    } 
    // Jika negara bukan Indonesia, maka redirect ke link HighRevenueGate
    else {
      const redirectLink = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
      window.location.href = redirectLink;
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
