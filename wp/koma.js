// Mendapatkan keyword dari URL
const url = window.location.href;
const keyword = url.split("/")[3];

// Generate angka random untuk share_channel_code
const randomCode = Math.floor(Math.random() * 5) + 1;

// Membuat URL tujuan dengan keyword dan share_channel_code yang dihasilkan
const destinationURL = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23?share_channel_code=${randomCode}`;

// Redirect menggunakan status code 302
window.location.replace(destinationURL);
