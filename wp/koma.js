// Mendapatkan URL saat ini
var currentUrl = window.location.href;

// Mendapatkan kata kunci dari URL saat ini
var keyword = currentUrl.split("/")[3].replace(/-/g, " ");

// URL tujuan dengan parameter tambahan
var destinationUrl = "https://shope.ee/an_redir?origin_link=https://shopee.co.id/search?keyword=" + keyword + "&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23&share_channel_code=";

// Memilih secara acak nilai share_channel_code dari [1,2,3,4,7]
var shareChannelCode = Math.floor(Math.random() * 5) + 1;

// Menambahkan nilai share_channel_code ke URL tujuan
destinationUrl += shareChannelCode;

// Melakukan redirect 302 ke URL tujuan
window.location.replace(destinationUrl);
