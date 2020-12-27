// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hide = document.querySelector('div#modal');
hide.className = 'hidden';

let likes = document.querySelectorAll("span.like-glyph");

for (let heart of likes) {
  heart.addEventListener('click', function(event) {
    mimicServerCall().then(function(object) {
    changeHeart(event)
  })
  .catch(function(error) {
    modal.classList = ""

    modal.querySelector('p#modal-message').innerText = error

    setTimeout(function(){ modal.className = "hidden" }, 5000);
  })
  })
}

function changeHeart(event) {
  if (event.target.innerHTML === EMPTY_HEART) {
    event.target.innerHTML = FULL_HEART
    event.target.className = "like-glyph activated-heart"
  } else {
    event.target.innerHTML = EMPTY_HEART
    event.target.className = "like-glyph"
  }
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
