// Mendapatkan URL saat ini
var currentURL = window.location.href;

// Mengambil {url-post} dari domain.com/{url-post}/
var urlPost = currentURL.split("/")[3].replace(/-/g, " ");

// Membuat array dari share_channel_code yang akan digunakan secara acak
var shareChannelCodes = [1, 2, 3, 4, 7];
var randomShareChannelCode = shareChannelCodes[Math.floor(Math.random() * shareChannelCodes.length)];

// Membuat URL tujuan dengan memasukkan keyword dan share_channel_code yang sudah didapatkan
var targetURL = `https://shope.ee/an_redir?origin_link=https://shopee.co.id/search?keyword=${urlPost}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23?share_channel_code=${randomShareChannelCode}`;

// Melakukan redirect ke URL tujuan dengan status 302
window.location.replace(targetURL);
