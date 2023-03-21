//mengambil parameter url
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

//membuat URL dari keyword
const originLink = `https://shopee.co.id/search?filters=5%2C6%2C7&keyword=${keyword}`;
const affiliateId = '11369620275';
const subId = 'RacunBelanja-14-03-20-23';
const redirectUrl = `https://shopee.ee/an_redir?origin_link=${encodeURIComponent(originLink)}&affiliate_id=${affiliateId}&sub_id=${subId}`;

//redirect ke URL yang diinginkan
window.location.href = redirectUrl;
