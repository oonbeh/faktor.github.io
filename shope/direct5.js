// Fungsi untuk mendapatkan nilai parameter di URL
function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// Fungsi untuk mengecek apakah adblock aktif
function checkAdBlock() {
  const testAd = document.createElement('div');
  testAd.innerHTML = '&nbsp;';
  testAd.className = 'adsbox';
  document.body.appendChild(testAd);
  window.setTimeout(function() {
    if (testAd.offsetHeight === 0) {
      console.log('AdBlock detected!');
    } else {
      console.log('AdBlock not detected!');
    }
    testAd.remove();
  }, 100);
}

// Mendapatkan nilai parameter 'q' dari URL
const query = getQueryParam('q');

// Mendapatkan negara pengguna menggunakan API dari ipify
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(data => {
    const userCountry = data.country;
    console.log('User country: ' + userCountry);

    // Cek apakah adblock aktif
    checkAdBlock();

    // Jika negara Indonesia, redirect ke link Shopee
    if (userCountry === 'ID') {
      const shopeeLink = 'https://shopee.co.id/search?filters=5%2C6%2C7&keyword=' + query;
      const redirectLink = 'https://shope.ee/an_redir?origin_link=' + encodeURIComponent(shopeeLink) + '&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23';
      window.location.replace(redirectLink);
    }
    // Jika bukan negara Indonesia, redirect ke link HighRevenueGate
    else {
      const highRevenueGateLink = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
      window.location.replace(highRevenueGateLink);
    }
  });
