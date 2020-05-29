// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let errorSection = document.getElementById('modal');
errorSection.className = "hidden";
let errorMessage = document.getElementById('modal-message');

document.addEventListener('DOMContentLoaded', () => {

  // add event listeners to the li's for liking
  let likers = document.getElementsByClassName('like');
  for(let i=0; i<likers.length; i++) {
    likers[i].addEventListener('click', () => {
        mimicServerCall()
        .then(function(response) {
          if (likers[i].children[0].innerText == EMPTY_HEART) {
            likers[i].children[0].innerText = FULL_HEART;
            likers[i].children[0].classList.add("activated-heart");
          } else {
            likers[i].children[0].innerText = EMPTY_HEART;
            likers[i].children[0].classList.remove("activated-heart");
          }
          alert(response);
        })
        .catch(function(error) {
          errorSection.classList.remove("hidden");
          errorMessage.innerText = error;
          setTimeout(function(){ errorSection.classList.add("hidden"); }, 5000);
        });
    })
  }
})


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
