// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modal.className = 'hidden'

let hearts = document.querySelectorAll('.like-glyph')

for (let heart of hearts) {
  heart.addEventListener('click', () => { if (heart.innerHTML == (EMPTY_HEART || '&#x2661;')) {
      mimicServerCall()
        .then(resp => {
          heart.innerHTML = FULL_HEART
          heart.classList.add('activated-heart')
        })
        .catch(err => {
          errMsg = modal.querySelector('p')
          modal.classList.remove('hidden')
          errMsg.innerText = err.message
          setTimeout(function () {
            modal.className = 'hidden'
          }, 5000)
        })
    } else {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove('activated-heart')
    }
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
