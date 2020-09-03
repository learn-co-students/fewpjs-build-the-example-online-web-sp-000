// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')
const errorDiv = document.getElementById('modal')

function removeError() {
  errorDiv.classList.add("hidden");
}

function showError(error) {
  errorDiv.classList.remove("hidden");
  document.getElementById('modal-message').innerText = error;
  setTimeout(removeError, 5000);
}

function success(event) {
  if (event.target.innerHTML === EMPTY_HEART) {
    event.target.innerHTML = FULL_HEART;
    event.target.classList.add("activated-heart");
  } else {
    event.target.innerHTML = EMPTY_HEART;
    event.target.classList.remove("activated-heart");
  }
}

function likeListener() {
  for (const element of hearts) {
    element.addEventListener("click", function(event){
      mimicServerCall()
       .then(function(json) {
        console.log(json);
        success(event);
      })
      .catch(function(error) {
        console.log(error);
        showError(error);
      });
    });
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  likeListener();
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
