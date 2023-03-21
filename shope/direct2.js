// ambil url saat ini
const url = window.location.href;

// ambil string yang diawali dengan "q=" setelah "/search/"
const keywordStart = url.indexOf('/search/q=') + 10;
const keywordEnd = url.indexOf('&', keywordStart);
const keyword = keywordEnd === -1 ? url.slice(keywordStart) : url.slice(keywordStart, keywordEnd);

// buat url baru dengan {keyword} yang dimuat otomatis
const newUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;

// arahkan pengguna ke url baru
window.location.replace(newUrl);
