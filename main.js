// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

const errorModal = document.getElementById('modal')
errorModal.setAttribute('class', 'hidden')

document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', (e) => {
    like(e)
  })
})

function like(e) {
  heart = e.target
  errorModal.setAttribute('class', 'hidden')
  mimicServerCall().then(function(serverMessage){
    heart.innerText = glyphStates[heart.innerText];
    if (heart.className == 'activated-heart') {
      heart.className = ""
    } else {
      heart.setAttribute('class', 'activated-heart')
    }
  }).catch(function(error) {
    errorModal.className = ""
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
