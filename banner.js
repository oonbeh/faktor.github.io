var banner = [
["https://shope.ee/4Kki8bXnKU?share_channel_code=7", "https://i.postimg.cc/qvcjjDCQ/image.jpg"],
["https://shope.ee/407rjzZ40O?share_channel_code=7", "https://i.postimg.cc/QxT6Wd82/image.jpg"],
["https://shope.ee/A9iYdivD97?share_channel_code=7", "https://i.postimg.cc/L5d94s6H/image.jpg"],
["https://shope.ee/A9iYdizgBt?share_channel_code=7", "https://i.postimg.cc/zDWDtT03/image.jpg"],
["https://t.co/IX3GTsW3gP", "https://faktor.my.id/img/SHOPE_8.jpg"],
["https://t.co/SSlUYRKg4Z", "https://faktor.my.id/img/SHOPE_4.jpg"],
["https://shope.ee/frPlrq9YG?share_channel_code=7", "https://i.postimg.cc/3wn9Hy1v/image.jpg"],
["https://shope.ee/9emI2nxBQI?share_channel_code=7", "https://i.postimg.cc/gjvYxPn3/image.jpg"],
["https://t.co/i6p4L1u7fR", "https://faktor.my.id/img/SHOPE_10.jpg"],
["https://shope.ee/4Kklh0DV2M?share_channel_code=7", "https://i.postimg.cc/yNdYv5bz/image.jpg"],
["https://shope.ee/A9iV5KAy8H?share_channel_code=7", "https://i.postimg.cc/8zgZdgsj/image.jpg"],
["https://t.co/Q3NjAUDptI", "https://faktor.my.id/img/SHOPE_6.jpg"],
["https://t.co/kbxNMx668a", "https://faktor.my.id/img/SHOPE_1.jpg"],
["https://shope.ee/500SUEJpVm?share_channel_code=7", "https://i.postimg.cc/3JT8PWc1/image.jpg"],
["https://shope.ee/biydx5ge?share_channel_code=7", "https://i.postimg.cc/qRFLz99B/image.jpg"],
["https://shope.ee/500OvpZj1S?share_channel_code=7", "https://i.postimg.cc/XJqLNV1D/image.jpg"],
["https://t.co/Q3kfdmrYpK", "https://faktor.my.id/img/SHOPE_7.jpg"],
["https://shope.ee/9emEUP3w3i?share_channel_code=7", "https://i.postimg.cc/BbdMwdg7/image.jpg"],
["https://t.co/nV4q1voby1", "https://faktor.my.id/img/SHOPE_3.jpg"],
["https://shope.ee/7UhjuQCSVF?share_channel_code=7", "https://i.postimg.cc/sxBTmVpZ/image.jpg"],
["https://shope.ee/4V4BtJCrhP?share_channel_code=7", "https://i.postimg.cc/cHt1N3W9/image.jpg"],
["https://shope.ee/9USoI696hd?share_channel_code=7", "https://i.postimg.cc/fWF2L9N7/image.jpg"]
];
function shuffle(f) {
	for (var n, r, a = f.length - 1; 0 < a; a--) n = Math.floor(Math.random() * (a + 1)), r = f[a], f[a] = f[n], f[n] = r;
	return f
}
shuffle(banner);
var delayInMilliseconds = 3500;
setTimeout(function() {
const mapNextAds = ["https://faktor.my.id/main.js"];
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
		let urlOpenClick2 = "https://readydolphinpoverty.com/uijctn538c?key=4f219c1087bce980ac7a203a864c9d2b";
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
