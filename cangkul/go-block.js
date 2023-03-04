const apiAntiADBLOCK = "/ads.js";
const hostUri = "ads.maskoding.com";
const targetDirectIndonesia = "https://shope.ee/4phNXsaZbU?share_channel_code=7";
const targetDirectNonIndonesia = "https://s.click.aliexpress.com/e/_DFG72Lt";

// Fungsi untuk mendapatkan alamat IP pengunjung
function getIP(callback) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.ipify.org/?format=json", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      callback(data.ip);
    }
  };
  request.onerror = function () {
    callback(null);
  };
  request.send();
}

// Fungsi untuk menentukan apakah alamat IP berasal dari Indonesia
function isIndonesiaIP(ip, callback) {
  if (ip) {
    const request = new XMLHttpRequest();
    request.open("GET", "https://ipapi.co/" + ip + "/country/", true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        const country = request.responseText;
        callback(country === "ID");
      }
    };
    request.onerror = function () {
      callback(false);
    };
    request.send();
  } else {
    callback(false);
  }
}

// Deteksi IP pengunjung dan pengalihan ke iklan yang sesuai
getIP(function (ip) {
  isIndonesiaIP(ip, function (isIndonesia) {
    const targetDirect = isIndonesia ? targetDirectIndonesia : targetDirectNonIndonesia;
    const el = document.createElement("script");
    el.setAttribute("src", "https://" + hostUri + apiAntiADBLOCK);
    document.querySelector("body").append(el);
    el.onerror = function () {
      if (targetDirect) {
        window.location.href = targetDirect;
      }
    };
  });
});
