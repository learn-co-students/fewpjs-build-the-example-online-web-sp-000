// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  handleLike()
})

function handleLike() {
  let likes = document.querySelectorAll("span.like-glyph")
  likes.forEach(l => {
    l.addEventListener("click", () => {
      mimicServerCall()
          .then(e => {
            if (l.textContent === EMPTY_HEART) {
              l.textContent = FULL_HEART
              l.classList.add('activated-heart')
            } else {
              l.textContent = EMPTY_HEART
              l.classList.remove('activated-heart')
            }
          })
          .catch(e => displayError(e))
    })
  })
}

function displayError(error) {
  let errorBox = document.getElementById('modal')
  let errorMessage = document.getElementById('modal-message')

  errorBox.classList.remove('hidden')
  errorMessage.textContent = error
  hide_x_after(errorBox, 3000)
}

function hide_x_after(x, time) {
  setTimeout(() => {
    x.classList.add('hidden')
  }, time)
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
