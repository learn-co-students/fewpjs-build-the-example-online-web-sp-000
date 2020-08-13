// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
const likes = document.getElementsByClassName("like-glyph")

modal.className = "hidden"
document.addEventListener('DOMContentLoaded', function() {

  for (const heart of likes) {
    heart.addEventListener("click", () => {
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART){
          heart.className = 'activated-heart'
          heart.textContent = FULL_HEART;
        } else {
          heart.className = '';
          heart.textContent = EMPTY_HEART;
        }
      })
      .catch(function(error) {
        displayError(error);
      });
    })
  }
});

function displayError(errorText) {
  modal.style.visibility = "visible"
        setTimeout(function() {
          document.querySelector('#modal').classList.add('hidden')
        }, 5000)
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
