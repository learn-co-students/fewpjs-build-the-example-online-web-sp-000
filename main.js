// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#modal");
  const modalMessage = document.querySelector("#modal-message");
  document.querySelectorAll(".like-glyph").forEach( heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
      .then(function() {
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.value += ' activated-heart';
        } else {
          heart.innerText =  EMPTY_HEART;
          heart.classList.value = 'heart-glyph';
        }
      })
      .catch(function(error) {
        modal.classList.value = "";
        modalMessage.innerHTML = error;
        setTimeout(hideModal, 5*1000, modal);
      })
    })
  })
})

function hideModal(modal) {
  modal.classList.value ="hidden";
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
