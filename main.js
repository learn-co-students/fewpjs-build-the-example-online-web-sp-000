// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
heart = document.querySelector('.like-glyph');
errorMessage = document.querySelector('#modal')
errorMessage.classList.add('hidden');


heart.addEventListener('click', function() {
  if(heart.innerHTML === EMPTY_HEART) {
    mimicServerCall()
    .then(resp => {
      heart.innerHTML = FULL_HEART;
      heart.classList.add('activated-heart')
    })
    .catch(error => {
      errorMessage.classList.remove('hidden');
      errorMessage.innerHTML = error;
      setTimeout(function () {
        errorMessage.classList.add('hidden');
      }, 5000);
    })
  } else {
    heart.innerHTML = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .5
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
