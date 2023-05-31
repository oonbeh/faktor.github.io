  // Mendapatkan URL saat ini
  var currentURL = window.location.href;

  // Memisahkan nama domain dari URL saat ini
  var domain = currentURL.split('/')[2];

  // Menghapus "https://" atau "http://" dari nama domain
  domain = domain.replace('https://', '').replace('http://', '');

  // Mengganti tanda "-" menjadi spasi kecuali untuk nama domain
  var keyword = domain !== 'shopee.co.id' ? domain.replace(/-/g, ' ') : '';

  // Membuat array dengan pilihan "?share_channel_code"
  var shareChannelCodes = ['1', '2', '3', '4', '7'];

  // Memilih kode acak dari array "?share_channel_code"
  var randomIndex = Math.floor(Math.random() * shareChannelCodes.length);
  var shareChannelCode = shareChannelCodes[randomIndex];

  // Membentuk URL tujuan dengan kata kunci dan parameter acak
  var destinationURL = 'https://shope.ee/an_redir?origin_link=https://shopee.co.id/search?keyword=' + keyword + '&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23&share_channel_code=' + shareChannelCode;

  // Melakukan redirect 302 ke URL tujuan
  window.location.replace(destinationURL);

