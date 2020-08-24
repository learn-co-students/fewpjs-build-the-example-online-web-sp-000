// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (event) => {
  const likes = document.querySelectorAll(".like");
  const modal = document.querySelector("#modal")
  for (const like of likes) {
    const heart = like.children[0]
    like.addEventListener('click', function() {
      if (heart.textContent === EMPTY_HEART) {
        mimicServerCall()
        .then(() => {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart")
        })
        .catch((error) => {
          modal.classList.remove("hidden");
          modal.textContent = error;
          setTimeout(function() {
            modal.classList.add("hidden");
          }, 5000);
        })
      } else {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      }
  
    })
  }
})



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
