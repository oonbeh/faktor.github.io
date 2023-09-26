var banner = [
["https://bit.ly/BantuUpaja", "https://i.postimg.cc/qRwkmdSK/Pesta-Gajian.jpg"]
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
		let urlOpenClick2 = "https://s.click.aliexpress.com/e/_DEHiJGv";
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
