/*
  The purpose of this script is to help spin up some of the servers that my portfolio projects are hosted on.
  Since they are hosted on free servers, they are usually idle when first visited. But this will start waking
  them up ahead of time.
*/
const externalUrls = [
  "https://salad-proxy.onrender.com/google.com", 
  "https://workout-spotter.onrender.com", 
  "https://hospital-pricing-backend.onrender.com"
];

externalUrls.forEach(url => {
  if (url) {
    fetch(url)
      .catch(error => {
        console.error('Expected error during spinup process: ', error);
      });;
  }
})