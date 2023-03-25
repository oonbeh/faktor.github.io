// Mendapatkan kata kunci pencarian dari parameter URL
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q');

// Mendapatkan informasi IP menggunakan ipwhois
fetch('https://ipwhois.app/json/')
  .then(response => response.json())
  .then(data => {
    // Jika IP negara Indonesia
    if(data.country_code === 'ID') {
      const redirectUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${searchQuery}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
      window.location.href = redirectUrl;
    }
    // Jika IP bukan negara Indonesia
    else {
      const redirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
      window.location.href = redirectUrl;
    }
  });
