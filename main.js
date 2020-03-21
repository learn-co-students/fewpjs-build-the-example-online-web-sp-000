// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
const likeLi = document.querySelectorAll('li.like')

document.addEventListener("DOMContentLoaded", () => {
  for (const like of likeLi) {
  like.addEventListener('click', event => {
    mimicServerCall()
    .then(() => {
      updateHeart(event.target.lastChild)
    })
    .catch((err) => {
      console.error(err)
      setTimeout(() => modal.classList.add('hidden'), 5000)
      modal.classList.remove('hidden')
    })
  })
}
})

function updateHeart (target){
  if (target.classList.contains('activated-heart')) {
    target.classList.remove('activated-heart')
    target.innerHTML = EMPTY_HEART
  }
  else {
    target.classList.add('activated-heart')
    target.innerHTML = FULL_HEART
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
