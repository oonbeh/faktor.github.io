// Menambahkan event listener pada semua elemen "a"
const allLinks = document.querySelectorAll("a");
allLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Mencegah tindakan default saat mengklik tautan
    event.preventDefault();

    // Mengambil alamat IP pengguna menggunakan ipify.org API
    fetch("https://api.ipify.org/?format=json")
      .then(response => response.json())
      .then(data => {
        const userIP = data.ip;

        // Mengambil informasi negara pengguna menggunakan ipapi.com API
        fetch(`https://ipapi.co/${userIP}/country/`)
          .then(response => response.text())
          .then(country => {
            // Mengarahkan pengguna ke iklan yang sesuai berdasarkan negaranya
            if (country === "ID") {
              window.location.href = "https://shope.ee/4phNXsaZbU?share_channel_code=7";
            } else {
              window.location.href = "https://s.click.aliexpress.com/e/_DFG72Lt";
            }
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  });
});
