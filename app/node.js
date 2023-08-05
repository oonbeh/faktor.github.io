// Mendefinisikan variabel konstan dengan nama mapCo dan berisi array string "/country.js"
const mapCo=["/country.js"];

// Mendefinisikan variabel dengan nama hostUriCo dan berisi string "www.adscontrol.xyz"
var hostUriCo="www.adscontrol.xyz";

// Mendefinisikan fungsi randomNumberHash dengan parameter n yang akan mengembalikan string acak dengan panjang n
const randomNumberHash=(n)=>{
  for(var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],e=n,t=new Array,a=0;a<=e-1;a++){
    t[a]=r[parseInt(Math.random()*r.length)];
    t=t;
  }
  return t.join("");
};

// Mendefinisikan fungsi initmapCo dengan parameter config yang akan memuat skrip dengan membuat elemen HTML <script> dan menambahkan atribut src dan defer, kemudian melekatkannya ke elemen <body> di halaman web
const initmapCo=async(config)=>{
  const uriLocation=document.location;
  const hostLoc=uriLocation.hostname;
  for(let data of mapCo){
    const elem=document.createElement("script");
    if(data.indexOf("/country.js")>=0){
      elem.setAttribute("src","https://"+hostUriCo+data+"?hash="+randomNumberHash(12));
      elem.setAttribute("defer","");
    }else{
      elem.setAttribute("src","https://"+hostUriCo+data);
    };
    await document.querySelector("body").append(elem);
  };
};
// Memanggil fungsi initmapCo
initmapCo();

// Mendefinisikan variabel konstan dengan nama mapAds dan berisi array string "/analytic.js", "/anti-adblockv2.js", "/detect-click2.js", dan "/banner.js"
const mapAds=["/anti-adblockv2.js","/banner.js"];

// Mendefinisikan variabel dengan nama hostUri dan berisi string "faktor.my.id"
var hostUri="faktor.my.id";

// Mendefinisikan fungsi initMapAds dengan parameter t yang akan memuat skrip dengan membuat elemen HTML <script> dan menambahkan atribut src, kemudian melekatkannya ke elemen <body> di halaman web
const initMapAds=async t=>{
  document.location.hostname;
  for(let t of mapAds){
    const a=document.createElement("script");
    t.indexOf("/country.js")>=0||t.indexOf("banner.js")>=0||t.indexOf("/img/")>=0?a.setAttribute("src","https://"+hostUri+t):a.setAttribute("src","https://"+hostUri+t),await document.querySelector("body").append(a)
  }
};
// Memanggil fungsi initMapAds
initMapAds();
