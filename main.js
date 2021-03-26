// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  
  const heartIcons = document.getElementsByClassName('like-glyph')
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'

  for (let icon of heartIcons) {
    icon.addEventListener("click", (e) => {
      if (e.target.innerText == EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.style.color = "red"
      }
      else {
        e.target.innerText = EMPTY_HEART
        e.target.style.color = "rgb(170,184,194)"
      }
    })
  }
  
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
