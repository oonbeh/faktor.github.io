// mengambil kata kunci pencarian dari URL
const urlParams = new URLSearchParams(window.location.search);
const keyword = urlParams.get('q');

// mendapatkan kode negara dari IP address
const getCountryCode = async () => {
  const response = await fetch('https://api.ipdata.co/country_code?api-key=test');
  const countryCode = await response.text();
  return countryCode;
}
const countryCode = await getCountryCode();

// menentukan URL redirect berdasarkan negara
let redirectUrl;
if (countryCode === 'ID') {
  redirectUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`;
} else {
  redirectUrl = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';
}

// melakukan redirect ke URL yang ditentukan
window.location.href = redirectUrl;
