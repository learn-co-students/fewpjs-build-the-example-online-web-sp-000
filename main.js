// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



const likeSpace = document.querySelectorAll('.like')

for(let heart of likeSpace) {
  heart.addEventListener('click', emptyHandler);
}

for(let heart of likeSpace) {
  heart.addEventListener('click', fullHandler);
}


function addHidden() {
  const message = document.querySelector('#modal')
  message.setAttribute("class", "hidden");
}

function removeHidden() {
  document.querySelector('.hidden').className = "";
}

function removeActivated() {
  document.querySelector('.activated-heart').className = "";
}

function emptyHandler(e) {
  const heart = e.target;
  mimicServerCall()
      .then(function(message) {
        heart.innerText = FULL_HEART
        heart.setAttribute("class", "activated-heart");
      })
      .catch(function(message) {
        removeHidden();
      })
      setTimeout(function() {
        addHidden(), 5000;
      })
    }

function fullHandler(e) {
  const heart = e.target;
  heart.removeActivated;
  heart.innerText = EMPTY_HEART;
}
  





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise
  (function(resolve, reject) {
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
