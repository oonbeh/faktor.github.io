// Ambil URL saat ini
const currentURL = window.location.href;

// Periksa apakah pengguna mengakses dari IP local atau bukan
const isLocal = /(^127\.0\.0\.1)|(^192\.168\.)/.test(window.location.hostname);

// Tentukan tautan arah yang akan digunakan berdasarkan status lokal atau tidak
let redirectLink = '';
if (isLocal) {
  const keyword = currentURL.match(/q=(.*)/)[1];
  redirectLink = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
  redirectLink = `https://shopee.ee/an_redir?origin_link=${encodeURIComponent(redirectLink)}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
} else {
  redirectLink = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
}

// Arahkan pengguna ke tautan arah yang sesuai
window.location.href = redirectLink;
