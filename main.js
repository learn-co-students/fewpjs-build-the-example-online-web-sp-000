// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.getElementsByClassName('like-glyph')

for (heart of hearts) {
  heart.addEventListener('click', liked)
}

function liked(event) {
  mimicServerCall()
  .then(function(object) {
    if (object == 'Pretend remote server notified of action!') {
      if (event.target.innerHTML == EMPTY_HEART) {
        event.target.innerHTML = FULL_HEART
        event.target.classList.add('activated-heart')
      } else {
        event.target.innerHTML = EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    }
  })
  .catch(function(error) {
    let modal = document.getElementById('modal')
    modal.innerHTML = error.message
    modal.classList.remove('hidden')
    setTimeout(function(){
      modal.classList.add('hidden')
    }, 5000)
  });
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
