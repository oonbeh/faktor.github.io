if (window.location.href.includes("akan.live/") && !window.location.href.includes("akan.live/wp-admin") && !window.location.href.includes("akan.live/wp-login.php")) { const keyword = window.location.href.split("/").pop().replace("-", " "); const redirectUrl = `https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D${keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23`; window.location.replace(redirectUrl); }