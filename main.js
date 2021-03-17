// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector('div#modal')
const modalMessage = document.querySelector('p#modal-message')
const likeGlyphs = document.getElementsByClassName('like-glyph')

function hideErrorModal() {
  errorModal.classList.add("hidden")
}

function showErrorModal() {
  errorModal.classList.remove("hidden")
}

document.addEventListener("load", hideErrorModal())

for (glyph of likeGlyphs) {
  glyph.addEventListener("click", 
    function() {
      mimicServerCall()
      .then((resp) => {
        console.log(resp)
        this.innerHTML = FULL_HEART
        this.classList.add("activated-heart")
      })
      .catch((e) => {
        console.log(e)
        showErrorModal()
        modalMessage.innerText = e
        setTimeout(hideErrorModal, 3000)
      })
    }
  )
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
