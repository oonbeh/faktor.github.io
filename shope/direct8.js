// Import library ipwhois
const ipwhois = require('ipwhois');

// Get the query string from the URL
const queryString = window.location.search;

// Define the redirect URLs
const redirectUrlID = 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.co.id%2Fsearch%3Ffilters%3D5%252C6%252C7%26keyword%3D{keyword}&affiliate_id=11369620275&sub_id=RacunBelanja-14-03-20-23';
const redirectUrlOther = 'https://www.highrevenuegate.com/ix4w14mn00?key=0647c1ed9e0e63fde67b1b37272c2227';

// Check if the IP is from Indonesia using ipwhois
ipwhois.lookup(window.location.hostname, function(error, result) {
  if (result.country === 'ID') {
    // If the IP is from Indonesia, redirect to the Indonesian URL with the search query
    const searchQuery = getSearchQuery(queryString);
    const redirectUrl = redirectUrlID.replace('{keyword}', searchQuery);
    window.location.href = redirectUrl;
  } else {
    // If the IP is not from Indonesia, redirect to the other URL
    window.location.href = redirectUrlOther;
  }
});

// Function to extract the search query from the URL
function getSearchQuery(queryString) {
  const query = new URLSearchParams(queryString);
  if (query.has('q')) {
    // If the URL has a search query parameter, use that as the search query
    return query.get('q');
  } else if (queryString.includes('.html')) {
    // If the URL has a slug URL parameter, extract the slug and use that as the search query
    const slug = queryString.split('/')[2].split('.')[0];
    return slug;
  } else {
    // If the URL does not have a valid search query, use an empty string
    return '';
  }
}
