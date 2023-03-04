const apiAntiADBLOCK="/ads.js";
const adScriptUrl = "https://faktor.my.id/cangkul/cangkul.js";
var hostUri="ads.maskoding.com";

(()=>{ 
  const el=document.createElement("script");
  el.setAttribute("src","https://"+hostUri+apiAntiADBLOCK);
  document.querySelector("body").append(el);
  
  el.onerror=()=>{
    const targetDirect = "https://faktor.my.id/";
    window.location.href=targetDirect;
  };
})();

// Load iklan
const adEl = document.createElement("script");
adEl.setAttribute("src", adScriptUrl);
document.querySelector("body").append(adEl);
