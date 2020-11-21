// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  heartClicks();
})

const hearts = document.querySelectorAll(".like-glyph");
const errorModal = document.querySelector("#modal");
const errorMessage = document.querySelector("#modal-message")

function heartClicks(){
  hearts.forEach(heart =>
    heart.addEventListener("click", function(){
      mimicServerCall()
        .then(function(){
          if (heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
            heart.innerText = EMPTY_HEART
          } else {
            heart.classList.add("activated-heart");
            heart.innerText = FULL_HEART
          }
        })
        .catch(function(error){
          alert("There was a server error.");
          errorModal.classList.remove("hidden");
          errorMessage.innerText = "There was a server error.";
          setTimeout(function(){errorModal.classList.add("hidden")}, 5000)
        })
    })
  )
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