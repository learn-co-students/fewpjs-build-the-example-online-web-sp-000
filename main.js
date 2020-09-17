// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//.then() returns a promise 
//takes two arguments, callback functions for the success and failure cases of the Promise 
const modal = document.getElementById('modal')
const likeButtons = document.getElementsByClassName('like-glyph')

modal.className = "hidden"

for (const heart of likeButtons) {
  heart.addEventListener('click', () => {
    mimicServerCall() //invoke mimicServerCall function to simulate making a server request 
    .then(()=> { //don't make the heart full until a successful .then block 
      heart.className = "activated-heart"
    })
    .catch(() => { //use catch to respond to the error 
      modal.style.visibility = "visible"
    })
  })
}
document.addEventListener('DOMContentLoaded', function() {

})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() { //hides modal after 5 seconds 
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
