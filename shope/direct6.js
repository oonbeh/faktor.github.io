var searchUrl = window.location.href;
var searchQuery = searchUrl.split('=')[1];
var ipUrl = "https://ipwhois.app/json/";

fetch(ipUrl)
.then(response => response.json())
.then(data => {
  if(data.country === 'Indonesia') {
    var redirectUrl = "https://shopee.co.id/search?filters=5%2C6%2C7&keyword=" + searchQuery;
    window.location.href = "https://shope.ee/an_redir?origin_link=" + encodeURIComponent(redirectUrl) + "&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23";
  } else {
    window.location.href = "https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227";
  }
})
.catch(error => {
  console.error('Error:', error);
});
