// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll('.like').forEach(like => {
  like.addEventListener('click', function () {
    mimicServerCall()
    .then(function () {
      if (like.children[0].innerHTML == EMPTY_HEART) {
        like.children[0].innerHTML = FULL_HEART;
        like.children[0].classList.add("activated-heart");
      } else {
        like.children[0].innerHTML = EMPTY_HEART;
        like.children[0].classList.remove("activated-heart");
      }
    })
    .catch(function (error) {
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('modal-message').innerHTML = error.message;
      setTimeout(function() {
        document.getElementById('modal').classList.add("hidden");
      }, 5000);
    })
  })
})



});



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
