// Mendapatkan kata kunci pencarian dari URL
const searchParams = new URLSearchParams(window.location.search);
const keyword = searchParams.get("q");

// Fungsi untuk mengalihkan pengguna ke tautan yang sesuai berdasarkan IP negara
function redirectBasedOnCountry() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      const countryCode = data.country_code;

      if (countryCode === "ID") {
        const shopeeLink =
          "https://shopee.co.id/search?filters=5%2C6%2C7&keyword=" + keyword;
        const redirectLink =
          "https://shopee.ee/an_redir?origin_link=" +
          encodeURIComponent(shopeeLink) +
          "&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23";
        window.location.href = redirectLink;
      } else {
        const redirectLink = "https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227";
        window.location.href = redirectLink;
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

// Memanggil fungsi untuk mengalihkan pengguna
redirectBasedOnCountry();
