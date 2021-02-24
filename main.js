// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorDiv = document.getElementById('modal');
const likes = document.getElementsByClassName('like');

function hideError() {
  errorDiv.className = 'hidden';
}

function success(msg, like) {
  if (msg === 'Pretend remote server notified of action!') {
    like.children[0].innerHTML = FULL_HEART;
    like.children[0].className = 'activated-heart';
  }
}

function failure(msg) {
  setTimeout(() => hideError(), 5000);
  errorDiv.className = '';
  errorDiv.lastElementChild.innerHTML = msg;
}

function liked() {
  for (const like of likes) {
    like.addEventListener('click', function() {
      if (like.children[0].innerHTML === EMPTY_HEART) {
        mimicServerCall().then(msg => success(msg, like)).catch(msg => failure(msg));
      } else {
        like.children[0].innerHTML = EMPTY_HEART;
        like.children[0].className = 'like-glyph'
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', function() {
  liked();
})
hideError();

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
