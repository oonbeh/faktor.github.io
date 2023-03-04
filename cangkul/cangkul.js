// Membuat request ke API untuk mendapatkan informasi lokasi pengunjung
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    // Jika pengunjung berasal dari Indonesia
    if (data.country_code === 'ID') {
      // Memuat iklan Shopee
      var shopeeIklan = document.createElement('script');
      shopeeIklan.src = 'https://shopee.co.id/4phNXsaZbU?share_channel_code=7';
      document.head.appendChild(shopeeIklan);
    } else {
      // Memuat iklan AliExpress
      var aliexpressIklan = document.createElement('script');
      aliexpressIklan.src = 'https://s.click.aliexpress.com/e/_DFG72Lt';
      document.head.appendChild(aliexpressIklan);
    }
  })
  .catch(error => console.log(error));
