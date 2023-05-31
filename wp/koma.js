// Ambil kata kunci dari URL
const url = window.location.href;
const keywordMatch = url.match(/\/\w+\//);
let keyword = '';
if (keywordMatch) {
  // Hapus tanda "-" dan ubah menjadi " "
  keyword = keywordMatch[0].replace(/-/g, ' ').slice(1, -1);
}

// Buat array untuk share_channel_code
const shareChannelCodes = [1, 2, 3, 4, 7];

// Pilih share_channel_code secara acak
const randomIndex = Math.floor(Math.random() * shareChannelCodes.length);
const shareChannelCode = shareChannelCodes[randomIndex];

// Redirect ke URL tujuan
const redirectURL = `https://shope.ee/an_redir?origin_link=https://shopee.co.id/search?keyword=${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23?share_channel_code=${shareChannelCode}`;
window.location.replace(redirectURL);
