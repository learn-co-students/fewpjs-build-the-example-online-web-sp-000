// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  // Your JavaScript code goes here!
  let errorModal = document.querySelector("div#modal");
  let likeButtons = document.querySelectorAll("li.like");
  
  for (const button of likeButtons) {
  
    button.addEventListener("click", (e) => {
      let glyph = e.target.querySelector(".like-glyph");
      
      mimicServerCall().then(() =>{
        // USER CLICKS ON FULL HEART
        if (glyph.textContent === FULL_HEART) {
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove("activated-heart");
        } else {
          glyph.textContent = FULL_HEART;
          glyph.classList.add("activated-heart");
        }
      })
      .catch((e) => {
        errorModal.classList.remove("hidden");
        setTimeout(() =>{errorModal.classList.add("hidden")}, 5000);
        errorModal.firstElementChild.textContent = e;
      });
    });
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
