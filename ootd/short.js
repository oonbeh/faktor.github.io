const redirectUrl = new URLSearchParams(window.location.search).get("url");
if (redirectUrl) {
  window.location.replace(redirectUrl);
}
