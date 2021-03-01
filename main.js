// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('modal');
  modal.hidden = true;
  let likeHeart = document.querySelectorAll('.like-glyph')
  for (const heart of likeHeart) {
    heart.addEventListener("click", (e) => {
      mimicServerCall()
        .then(() => {
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART
            heart.className = "activated-heart"
          } else {
            heart.innerText = EMPTY_HEART
            heart.className = "like-glyph"
          }
        })
        .catch(error => {
          modal.hidden = false
          let p = document.getElementById('modal-message')
          p.innerText = error
          setTimeout(() => {
            modal.hidden = true;
          }, 5000);
        })
    })
  }
})

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
