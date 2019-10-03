// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const addLikeEvent = () => {
  const likeHearts = document.querySelectorAll('.like-glyph');
    likeHearts.forEach((heart) => {
      heart.addEventListener('click', () => {
        mimicServerCall()
        .then(resp => {
          heart.innerText === EMPTY_HEART ? heart.innerText = FULL_HEART : heart.innerText = EMPTY_HEART
          heart.className === 'activated-heart' ? heart.className = '' : heart.className = 'activated-heart'
          console.log(resp)
        })
        .catch(resp => {
          const errorModalDiv = document.getElementById('modal')
          errorModalDiv.className = ''
          const errorModal = document.getElementById('modal-message')
          errorModal.innerText = resp
          setTimeout(() => {errorModalDiv.className = 'hidden'}, 5000)
        })
      })
    })
}

const main = () => {
  document.addEventListener('DOMContentLoaded', () => {
    addLikeEvent(); 
  })
}

main(); 



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
