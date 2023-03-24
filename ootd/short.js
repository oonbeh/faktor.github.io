// Ambil URL yang diinginkan dari parameter
const urlParams = new URLSearchParams(window.location.search);
const redirectUrl = urlParams.get('url');

if (redirectUrl) {
  // Lakukan pengalihan 302 ke URL yang diinginkan
  window.location.replace(redirectUrl);
}
