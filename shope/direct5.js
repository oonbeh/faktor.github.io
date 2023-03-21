// Mendapatkan parameter keyword dari URL
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

// URL redirect untuk negara Indonesia
const indonesiaRedirectUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${encodeURIComponent(keyword)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;

// URL redirect untuk negara lain selain Indonesia
const nonIndonesiaRedirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';

// Mendapatkan informasi IP menggunakan layanan whatismyipaddress.com
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api64.ipify.org?format=json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const ipAddress = response.ip;
    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', `https://ipwhois.app/json/${ipAddress}`, true);
    xhr2.onload = function() {
      if (xhr2.status === 200) {
        const response2 = JSON.parse(xhr2.responseText);
        const country = response2.country;
        // Membedakan IP negara Indonesia atau bukan
        if (country === 'ID') {
          window.location.replace(indonesiaRedirectUrl);
        } else {
          window.location.replace(nonIndonesiaRedirectUrl);
        }
      } else {
        console.error('Error getting IP information');
      }
    };
    xhr2.send();
  } else {
    console.error('Error getting IP address');
  }
};
xhr.send();

// Anti adblock menggunakan teknik deteksi blocker yang dijelaskan di sini: https://blockadblock.com/blog/how-to-stop-ad-blocker-detection-on-your-website/
var adBlockDetected = false;
var testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adBlockDetected = true;
    window.location.replace(indonesiaRedirectUrl);
  } else {
    document.body.removeChild(testAd);
  }
}, 100);
