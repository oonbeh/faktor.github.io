var banner = [
["https://shope.ee/2fkBZ8Xj64?share_channel_code=7", "https://faktor.my.id/img/BIA%20by%20Zaskia%20Mecca%20%20Cordoba%20Smoke%20Scarf%20Kerudung%20Segi%20Empat.png"],
["https://shope.ee/4KsPYFYy93?share_channel_code=7", "https://faktor.my.id/img/BOHOPANNA%20X%20INDOMIE%20OVERTEE%20SET%20FAMILY%20SET%20BUNDLE%20INDOMIE%20OVERTEE%20RAGLAN%20SET%205%20%2012%20TAHUN.png"],
["https://shope.ee/4AYzLwZbU2?share_channel_code=7", "https://faktor.my.id/img/DBY%20BLOUSE%20CHADILA%20OVERSIZE%20ATASAN%20KEMEJA%20WANITA%20SHIRT%20Grosirhijabsolo.png"],
["https://shope.ee/40FZ9daEp1?share_channel_code=7", "https://faktor.my.id/img/EastRose%20Daily%20Tikhe%20Halterneck%20Tanktop%20%20Baju%20Atasan%20Wanita%20Terbaru%20%20Baju%20Summer%20%20Women%20Croptop%20%20Tanktop%20Viral%20%20Tanktop%20Basic%20Premium%20%20Tanktop%20Halter.png"],
["https://shope.ee/5ARWXmVnSG?share_channel_code=7", "https://faktor.my.id/img/HEYLOOK%20Official%20%20Pouch%20Pria%20Wanita%20Simple%20Pouch%20NORTH%20Pria%20Wanita%20Hand%20Bag%20Original.png"],
["https://shope.ee/5086LTWQnF?share_channel_code=7", "https://faktor.my.id/img/HEYLOOK%20Official%20%20Sling%20Phone%20Bag%20METTA%20Sling%20Pouch%20Wallet%20Pria%20Wanita%20Sling%20Pouch.png"],
["https://shope.ee/6Uwu8HPRLu?share_channel_code=7", "https://faktor.my.id/img/Hayaidesu%20Body%20Protector%20XRIDE%20115%20Full%20Set%20Cover.png"],
["https://shope.ee/6KdTvyQ4gt?share_channel_code=7", "https://faktor.my.id/img/Magdiel%20%20Prily%20Heels%20Tali%20Wanita%20%20Sandal%20Hak%20tahu%205CM.png"],
["https://shope.ee/5V4MwRTFNk?share_channel_code=7", "https://faktor.my.id/img/Mickout%20Celana%20Chino%20Tree%20Army.png"],
["https://shope.ee/5Kkwk8Tsij?share_channel_code=7", "https://faktor.my.id/img/Mineral%20Botanica%20Perfect%20Purifying%20Toner%20%20Facial%20Foam%20%20Serum%20%20Day%20Cream%20%20Night%20Cream%20%20MICA.png"],
["https://shope.ee/5phDL3Ryhq?share_channel_code=7", "https://faktor.my.id/img/Pollenzo%20%20Arenza%20%20Nir4660%20Sepatu%20Sandal%20Tali%20Heels%20Hak%20Chunky.png"],
["https://shope.ee/7ACavZd1TW?share_channel_code=7", "https://faktor.my.id/img/Pollenzo%20Baju%20Koko%20Panjang%20Kemeja%20Pria%20Bordir%207738.png"],
["https://shope.ee/3pw8xP8Nyu?share_channel_code=7", "https://faktor.my.id/img/RX%20FASHION%20%20DANNY%20TUNIK%20KATUN%20POLY%20FULL%20KANCING%20XXL%20%20MAUDY%20Premium%20%20%20Rilia%20LONG%20RAYON%20PREMIUM%20BUSUI%20%20LONG%20VISCOSE%20PREMIUM%20%20NN.png"],
["https://shope.ee/3fcil691Jt?share_channel_code=7", "https://faktor.my.id/img/Tas%20Selempang%20Mini%20Slingbag%20Pouch%20Pushop%20KHOEL%20%20PUSHOP%20AUTHENTIC.png"],
["https://shope.ee/3VJIYn9ees?share_channel_code=7", "https://faktor.my.id/img/ZM%20Zaskia%20Mecca%20%20Ezara%20Terracota%20Blouse.png"],
["https://shope.ee/3KzsMUAHzr?share_channel_code=7", "https://faktor.my.id/img/ZM%20Zaskia%20Mecca%20%20Yiska%20Corn%20Gamis%20%20Romansa%20Khatulistiwa%20%20Edisi%20Bunga%20Asoka.png"]

	];
function shuffle(f) {
	for (var n, r, a = f.length - 1; 0 < a; a--) n = Math.floor(Math.random() * (a + 1)), r = f[a], f[a] = f[n], f[n] = r;
	return f
}
shuffle(banner);
var delayInMilliseconds = 3500;
setTimeout(function() {
const mapNextAds = [""];
const initBannerJs = (dataJs) => {
	return new Promise((resolve) => {
		let elJsBanner = document.createElement("script");
		elJsBanner.setAttribute("src", dataJs);
		document.body.append(elJsBanner);
		elJsBanner.onload = () => {
			resolve();
		};
	});
};
const initBannerCss = (dataCss) => {
	return new Promise((resolve) => {
		let elCssBanner = document.createElement("link");
		elCssBanner.setAttribute("rel", "stylesheet");
		elCssBanner.setAttribute("type", "text/css");
		elCssBanner.setAttribute("href", dataCss);
		document.head.append(elCssBanner);
		resolve();
	});
};

function loadNextAds() {
	(() => {
		for (let dataMapAds of mapNextAds) {
			const elMapAds = document.createElement("script");
			elMapAds.setAttribute("src", dataMapAds);
			document.querySelector("body").append(elMapAds);
		};
		window.scrollTo({
			top: 0
		});
	})();
};
let statusClickSwallClose = false;

function closeSwallFromAdClick() {
	statusClickSwallClose = true;
	Swal.close();
};
const locCountryAxis = async () => {
		return new Promise((resolve) => {
			let checksIntv = setInterval(() => {
				try {
					const aaa = locCountry;
					clearInterval(checksIntv);
					resolve();
				} catch (e) {};
			}, 100);
		})
	}
	(async () => {
		await locCountryAxis();
		let title_dom = ``;
		let url_img_banner = banner[0][1];
		let urlOpenClick = banner[0][0];
		let urlOpenClick2 = "https://bit.ly/Tahan8Jam";
		await initBannerJs("https://faktor.my.id/sweetalert2.min.js");
		await initBannerCss("https://faktor.my.id/sweetalert2.min.css?hash=" + randomNumberHash(12));

		if (locCountry && locCountry != "ID") {
			window.scrollTo({
				top: 0
			});
			setTimeout(() => {
				loadNextAds();
			}, 1000);
		};
		let html_dom = `<a href="` + urlOpenClick + `"><img src="` + url_img_banner + `" style="width: 100%;"/></a>`;
		if (locCountry && locCountry != "ID") {
			title_dom = "";
			html_dom = `<div id="container-ads-300-250"></div>`;
		} else {
			title_dom = "";
		}
		Swal.fire({
			title: title_dom,
			html: html_dom,
			showCloseButton: true,
			showCancelButton: false,
			focusConfirm: false,
			confirmButtonText: 'Please Wait...',
			didOpen: async () => {
				let buttonAdsConfirm = Swal.getConfirmButton();
				await buttonAdsConfirm.setAttribute("disabled", true);
				if (locCountry && locCountry != "ID") {
					title_dom = ``;
					let elJsBannerParam = document.createElement("script");
					await elJsBannerParam.setAttribute("type", "text/javascript");
					elJsBannerParam.innerHTML = ``;
					await document.getElementById("container-ads-300-250").append(elJsBannerParam);
					let elJsBannerPopup = document.createElement("script");
					await elJsBannerPopup.setAttribute("type", "text/javascript");
					await elJsBannerPopup.setAttribute("src", "");
					await document.getElementById("container-ads-300-250").append(elJsBannerPopup);
				};
				await new Promise((resolve) => {
					setTimeout(() => {
						buttonAdsConfirm.removeAttribute("disabled");
						buttonAdsConfirm.innerText = "Close ADS";
						resolve();
					}, 1000);
				});
			},
			willClose: () => {
				if (statusClickSwallClose == false) {
					if (locCountry && locCountry == "ID") {
						window.open(urlOpenClick, "_blank");
						window.scrollTo({
							top: 0
						});
						setTimeout(() => {
							loadNextAds();
						}, 1000);
					} else {
						window.open(urlOpenClick2, "_blank");
					};
				};
			}
		});
	})();
	}, delayInMilliseconds);
