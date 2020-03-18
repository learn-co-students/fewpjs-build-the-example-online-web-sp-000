// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  errorDiv = document.getElementById('modal')
  errorDiv.firstElementChild.classList.add("hidden")
})
// Hide error popup using .hidden
// funcion mimicServerCall mimics making a server request
  //if mimicServerCall fails, use catch to respond, display error in .hidden, error message, and setTimeout to hide again
  //if successful, change heart to full_heart, add .activated-heart class to make heart red

// when user clicks full heart, change heart back to empty_heart, remove .activated_heart class

// do not make full_heart changes until in a successful .then block (until server requests respond!)




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
