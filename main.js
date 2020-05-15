// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal')

function hideError() {
  modal.classList.add("hidden")
};

function showError() {
  modal.classList.remove("hidden")
}

hideError()

document.addEventListener('DOMContentLoaded', (event) => {

  document.addEventListener("click", function (event) {
    const likeStatus = event.srcElement.innerText
    if (event.target.classList.contains('like-glyph')) {
    }


    mimicServerCall()
    .then( () => {
        event.srcElement.innerText = event.srcElement.innerText == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
      })
    .catch( () => {
        let errorMessage = document.createElement('p')
        errorMessage.innerText = "ERROR!  Gremlins."
        modal.appendChild(errorMessage);
        showError();
        setTimeout(()=> {hideError(); modal.removeChild(errorMessage)}, 5000);
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
