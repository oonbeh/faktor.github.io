  var keyword = window.location.pathname.split('=')[1]; // mengambil kata kunci pencarian dari URL
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ipapi.co/json/", true); // mengambil informasi IP negara pengguna
  xhr.onload = function () {
    var response = JSON.parse(xhr.responseText);
    if (response.country == "ID") { // jika IP negara Indonesia
      window.location.href = "https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D" + keyword + "&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23";
    } else { // jika IP bukan negara Indonesia
      window.location.href = "https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227";
    }
  };
  xhr.send();
