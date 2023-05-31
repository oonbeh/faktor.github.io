
// Mendapatkan URL saat ini
var currentUrl = window.location.href;

// Mengecek apakah URL mengandung kata kunci '/url-post/'
if (currentUrl.includes('/url-post/')) {
  // Mengganti domain dan path tujuan redirect
  var destinationUrl = 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D' + encodeURIComponent(keyword) + '&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23?share_channel_code=';

  // Membuat array dari share_channel_code yang mungkin
  var shareChannelCodes = [1, 2, 3, 4, 7];

  // Memilih secara acak salah satu share_channel_code
  var randomShareChannelCode = shareChannelCodes[Math.floor(Math.random() * shareChannelCodes.length)];

  // Menambahkan share_channel_code yang dipilih ke URL tujuan redirect
  destinationUrl += randomShareChannelCode;

  // Melakukan redirect ke URL tujuan dengan kode status 302 (Found)
  window.location.replace(destinationUrl);
}

