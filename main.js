// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', event => {

  const classStates = {
    "like-glyph":"like-glyph activated-heart",
    "like-glyph activated-heart":"like-glyph"
  }
  const glphyStates = {
    '♡':'♥',
    '♥':'♡'
  }
  const hearts = document.getElementsByClassName('like-glyph')
  const modal = document.getElementById('modal')

  Array.from(hearts).forEach(heart => heart.addEventListener('click', event => {
    let heart = event.target
    mimicServerCall()
    .then(() => {
      heart.innerText = glphyStates[heart.innerText]
      heart.className = classStates[heart.className]
    })
    .catch(error => {
      modal.className = ''
      setTimeout(addClassName => 
        modal.className = 'hidden'
      , 3000)
    })
  }))
})

// Array.from(hearts).forEach(heart => {
//   heart.className =
//   heart.className.replace( /(?:^|\s)hidden(?!\S)/g , '' )
//   debugger
// })

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
