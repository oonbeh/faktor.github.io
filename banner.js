var banner = [
["https://shope.ee/7Upr1fuWTB,?share_channel_code=7", "https://faktor.my.id/gmb/Bella%20Square%20New%20warna%20part%201%20%20hijab%20segiempat.png"],
["https://shope.ee/7f9HDytt8E,?share_channel_code=7", "https://faktor.my.id/gmb/Celana%20Joger%20PRIA%20WANITA%20panjang%20Jogger%20Gym%20training%20trening%20trining%20terening%20olahraga%20%20celana%20Jogger%20Sweatpants%20%20Celana%20Joger%20Sweatpants%20%20CELANA%20JOGGER%20PRIA%20WANITA%20trening%20terening%20training%20trining.png"],
["https://shope.ee/7pShQHtFnH,?share_channel_code=7", "https://faktor.my.id/gmb/Jennie%20Knit%20Pants%20Celana%20kulot%20higwaist%20Knit%20Kancing.png"],
["https://shope.ee/6fGk28xhA4,?share_channel_code=7", "https://faktor.my.id/gmb/KENAN%20HIJAB%20%20HIJAB%20BERGO%20DZEVADA%20INSTAN%20MATT%20JERSEY%20kenan.png"],
["https://shope.ee/6paAERx3p7,?share_channel_code=7", "https://faktor.my.id/gmb/KENAN%20HIJAB%20ORI%20%20LANAHIJAB%20BERGO%20INSTAN%20PET%20BAHAN%20JERSEY%20BERGO%20UKURAN%20L.png"],
["https://shope.ee/30NRfTjEgN,?share_channel_code=7", "https://faktor.my.id/gmb/Kaos%20oversize%20lengan%2078%20%20Kaos%20wanita%20jumbo%20%20Kaos%20oversize%20slit.png"],
["https://shope.ee/3VJiGOhKfU,?share_channel_code=7", "https://faktor.my.id/gmb/PART%201%20COD%20Square%20Neck%20Long%20Sleeve%20Shirt%20Blouse%20%20WWC.png"],
["https://shope.ee/3L0I45hy0T,?share_channel_code=7", "https://faktor.my.id/gmb/WBS%20JAM%20TANGAN%20WANITA%20PRIA%20DIGITAL%20RUBBER%20BULAT%20LED%20WATCH%20GROSIR%20ORIGINAL%20M150%20HIGH%20QUALITY%20JF088.png"],
["https://shope.ee/3pwYf0g3za,?share_channel_code=7", "https://faktor.my.id/gmb/celana%20jeaans%20wanita%20Highwaist%20Kulot%20Jeans%20Pinggang%20yang%20dapat%20diisesuaikan.png"]


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
