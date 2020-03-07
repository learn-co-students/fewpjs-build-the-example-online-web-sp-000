// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let hearts = document.querySelectorAll('.like');

function likeComment(e) {
  let heart = e.target;
  heartStatus = heart.innerText

  mimicServerCall()
  .then(function(response) {
    if (heartStatus == EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.classList.add('activated-heart');
    } else {
      heart.innerText = EMPTY_HEART
      heart.classList.remove('activated-heart');
    }
  })
  .catch(function(error){
    alert("Problem with request!");
  })
}

hearts.forEach(heart => heart.addEventListener("click", likeComment))


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
