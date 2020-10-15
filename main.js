// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.getElementById('modal')

function hideError() {
  error.setAttribute('class', 'hidden');
}
hideError();

let hearts = document.getElementsByClassName('like-glyph')

for (const heart of hearts) {
  heart.addEventListener('click', function(e) {
    mimicServerCall('fakeURL')
    .then(function(response) {
      if (heart.className === 'like-glyph activated-heart') {
        heart.setAttribute('class', 'like-glyph');
        heart.textContent = EMPTY_HEART;
      } else { 
        heart.setAttribute('class', 'like-glyph activated-heart')
        heart.textContent = FULL_HEART;
      }
    })
    .catch(function(errorMessage) {
      error.setAttribute('class', '');
      let p = document.createElement('p');
      p.textContent = errorMessage;
      error.appendChild(p);
      setTimeout(hideError(), 5000)
    })
  })
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
