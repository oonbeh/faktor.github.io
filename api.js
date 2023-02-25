const AFF_CODE = "_DeQ4UCJ";

if(!window.location.search) {
console.log("MAAF KAWAN!!!!!");
} else {
const urlParams = new URLSearchParams(window.location.search);
const pen = urlParams.get('pen');
const url = "https://s.click.aliexpress.com/deep_link.htm?aff_short_key=" + AFF_CODE + "&dl_target_url=https://www.aliexpress.com/item/" + pen + ".html";
window.location.href = url;
}