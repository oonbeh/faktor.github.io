// Mendapatkan URL saat ini dan memisahkan parameter
const currentUrl = window.location.href;
const [baseUrl, searchParams] = currentUrl.split("?");

// Memeriksa apakah parameter /search/q= ada dalam URL
const isSearchQuery = searchParams.includes("/search/q=");

// Mendapatkan slug URL jika parameter /slug-url.html ada dalam URL
const slugUrl = baseUrl.match(/\/([\w-]+)\.html/)[1];

// Memanggil API ipdata.co untuk mendapatkan informasi negara
const apiUrl = "https://api.ipdata.co?api-key=70e96f8fcca842a575e8c9f10add9bc840d540def48c833f8d72249f";
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Mendapatkan kode negara dari respons API
    const countryCode = data.country_code;

    // Membuat URL redirect berdasarkan kode negara
    let redirectUrl;
    if (countryCode === "ID") {
      const keyword = isSearchQuery ? searchParams.split("=")[1] : slugUrl;
      redirectUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
    } else {
      redirectUrl = "https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227";
    }

    // Mengarahkan ke URL redirect
    window.location.href = redirectUrl;
  });
