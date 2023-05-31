// Mendapatkan URL saat ini
var currentURL = window.location.href;

// Mendapatkan kata kunci dari URL
var keyword = currentURL.replace("racunn.my.id/", "").replace("-", " ");

// Membangkitkan kode share_channel_code secara acak
var shareChannelCode = Math.floor(Math.random() * 5) + 1;

// Membuat URL tujuan dengan kata kunci dan share_channel_code
var targetURL = `https://shope.ee/an_redir?origin_link=https://shopee.co.id/search?keyword=${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23?share_channel_code=${shareChannelCode}`;

// Mengarahkan pengguna menggunakan kode status 302
window.location.replace(targetURL);
