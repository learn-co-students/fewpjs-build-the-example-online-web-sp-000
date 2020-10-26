// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.getElementsByClassName('like-glyph');
const errorMessage = document.getElementById('modal-message');
const errorBanner = document.getElementById('modal');

function likeToggle(button) {
  mimicServerCall()
  .then(() => toggleHeart(button))
  .catch(error => errorDisplay(error));
};

function toggleHeart(button) {
  if (button.innerText == EMPTY_HEART) {
    button.innerText = FULL_HEART;
    button.classList.add('activated-heart');
  } else if (button.innerText == FULL_HEART) {
    button.innerText = EMPTY_HEART;
    button.classList.remove('activated-heart');
    };
};

function errorDisplay(message) {
  errorMessage.innerText = message;
  errorBanner.classList.remove('hidden');
  setTimeout(() => {
    errorBanner.classList.add('hidden');
  }, 5000);
};

function addHeartLike(button) {
  button.addEventListener('click', () => {
    likeToggle(button);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  for (button of likeButtons) {
    addHeartLike(button);
  };
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
