// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(e){
  likeButtonClick()
})

function likeButtonClick() {
  const likeButton = document.querySelector('.like-glyph')
  likeButton.addEventListener('click', function(e) {
    mimicServerCall()
    .then(function(response) {
      likeButton.classList.add('activated-heart')
      likeButton.textConent = FULL_HEART
    })
    .catch(function(error) {
      document.querySelector('#modal').classList.remove('hidden')
      setTimeout(function() {
        document.querySelector('#modal').classList.add('hidden')
      }, 1000)
    })
  }) 
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
