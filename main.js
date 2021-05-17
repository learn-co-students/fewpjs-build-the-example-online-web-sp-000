// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", like());

function like() {
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("like-glyph")) {
      mimicServerCall().then(resp => toggleHeart(e.target)).catch(function(error) {
        let div = document.getElementById("modal");
        let p = document.getElementById("modal-message");
        p.innerText = error;
        div.classList.toggle("hidden", false)
        setTimeout(() => div.classList.toggle("hidden", true), 3000);
      });
    }
  });
}

function toggleHeart(target) {
  if (target.innerText === EMPTY_HEART) {
    target.innerText = FULL_HEART;
    target.classList.toggle("activated-heart", true);
  } else {
    target.innerText = EMPTY_HEART;
    target.classList.toggle("activated-heart", false);
  }
}


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
