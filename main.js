// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
/*
  The three pillars:
    - Manipulating the DOM
    - Recognizing JavaScript events
    - Communicating with the server
*/
// Dom content loaded event
document.addEventListener("DOMContentLoaded", (event) => {
  // Add the .hidden class to the error modal in the HTML 
  // so it does not appear when the page first loads
  hideErrorModal();
});

const hideErrorModal = () => {
  let errorModal = document.querySelector("#modal");
  errorModal.className = "hidden";
  errorModal.hidden = true;
}

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
