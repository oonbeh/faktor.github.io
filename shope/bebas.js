// Mendapatkan kata kunci dari slug
var slug = window.location.pathname.split('/').pop(); // mendapatkan bagian akhir dari URL
var keyword = slug.replace('-', ' '); // mengganti tanda - dengan spasi

// Membuat URL redirect
var redirectUrl = 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D' + encodeURIComponent(keyword) + '&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23';

// Redirect ke URL baru
window.location.href = redirectUrl;
