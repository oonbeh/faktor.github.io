// create a variable to store the number of tabs open for each IP
let tabCounter = {};

// listen for a click event on the given link
document.querySelector('a[href="https://s.click.aliexpress.com/e/_Dl0H0hP"]').addEventListener('click', function(e) {
  // get the IP address of the user
  let ip = e.target.ip;
  
  // check if the IP already exists in the tabCounter object
  if (tabCounter[ip]) {
    // if it does, check if the number of tabs open is greater than 1
    if (tabCounter[ip] > 1) {
      // if it is, prevent the default link action
      e.preventDefault();
      // and alert the user that they can only open the tab once
      alert('You can only open this tab once per IP!');
    } else {
      // if it isn't, increase the tab count by one
      tabCounter[ip]++;
    }
  } else {
    // if it doesn't, create a new key in
