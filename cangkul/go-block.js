const apiAntiADBLOCK = "/ads.js";
const hostUri = "ads.maskoding.com";
const targetDirectID = "https://shope.ee/4phNXsaZbU?share_channel_code=7"; // iklan untuk IP Indonesia
const targetDirectNonID = "https://s.click.aliexpress.com/e/_DFG72Lt"; // iklan untuk IP non-Indonesia

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.ipify.org?format=json", true); // melakukan request untuk mendapatkan IP pengguna
xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const userIP = response.ip;
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "https://ipapi.co/" + userIP + "/country/", true); // melakukan request untuk mendapatkan negara pengguna
    xhr2.onload = function () {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        const response2 = xhr2.responseText;
        if (response2 === "ID") { // jika IP adalah dari Indonesia
          window.location.href = targetDirectID;
        } else { // jika IP bukan dari Indonesia
          window.location.href = targetDirectNonID;
        }
      }
    };
    xhr2.send();
  }
};
xhr.send();

// menambahkan script anti Adblock
(() => {
  const el = document.createElement("script");
  el.setAttribute("src", "https://" + hostUri + apiAntiADBLOCK);
  document.querySelector("body").append(el);
  el.onerror = () => {
    if (targetDirect) {
      window.location.href = targetDirect;
    }
  };
})();
