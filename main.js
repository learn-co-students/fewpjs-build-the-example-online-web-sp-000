// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likes = document.getElementsByClassName('like-glyph')
const errorModal = document.getElementById("modal")

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener("click", likePost)
  }
})

function likePost(event) {
  mimicServerCall()
    .then(function(response) {
      if (event.target.innerHTML == EMPTY_HEART) {
        event.target.innerHTML = FULL_HEART;
        event.target.classList.add("activated-heart")
      } else {
        event.target.innerHTML = EMPTY_HEART;
        event.target.classList.remove("activated-heart")
      }
    })
    .catch(function(error) {
      errorModal.classList.remove("hidden");
      const errorMessage = document.getElementById("modal-message");
      errorMessage.innerHTML = error;
      setTimeout(function() {
        errorModal.classList.add("hidden");
      }, 5000)
    })
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
