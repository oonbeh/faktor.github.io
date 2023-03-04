const targetDirectIndonesia = "https://c.lazada.co.id/t/c.bdOcnQ?sub_aff_id=13maret";
const targetDirectNonIndonesia = "https://s.click.aliexpress.com/e/_DFG72Lt";
const targetDirectDisableBack = isIndonesia() ? targetDirectIndonesia : targetDirectNonIndonesia;

if (targetDirectDisableBack) {
  history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function(event) {
    window.location.href = targetDirectDisableBack;
  });
}

function isIndonesia() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ipapi.co/json/", false);
  xhr.send();
  const response = JSON.parse(xhr.responseText);
  return response.country_code === "ID";
}
