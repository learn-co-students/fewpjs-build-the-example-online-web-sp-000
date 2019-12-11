// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("#modal")
modal.setAttribute('class', 'hidden')

document.addEventListener("DOMContentLoaded", function() {
  const hearts = document.querySelectorAll(".like-glyph")

  hearts.forEach(heart => {
    heart.addEventListener("click", function(e) {
      mimicServerCall()
      .then(response => {
        console.log(response)
        if (heart.innerText == EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.setAttribute('class', 'like-glyph activated-heart');
        }
        else {
          heart.innerText = EMPTY_HEART;
          heart.setAttribute('class', 'like-glyph');
        }
      })
      .catch(error => {
        console.log(error)
        let modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        modal.removeAttribute('class')
        setTimeout(function() { modal.setAttribute('class', 'hidden') }, 5000);
      })
    })
  })
});
    
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
