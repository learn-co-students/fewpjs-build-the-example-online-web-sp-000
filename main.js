// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  addLikeFeature();
})

function addLikeFeature() {
  const hearts = document.querySelectorAll('.like-glyph');

  for (heart of hearts) {
    heart.addEventListener("click", like); // why not like(e)???
  }

  function like(e) {
    if (e.target.innerHTML == EMPTY_HEART) {
      mimicServerCall()
        .then(function() {
          e.target.innerHTML = FULL_HEART;
          e.target.className = "activated-heart";
        })
        .catch(function() {
          let error = document.getElementById('modal');
          error.classList.remove("hidden");
          setTimeout(function(){ error.className = "hidden"; }, 5000);
        })
    } else {
      e.target.innerHTML = EMPTY_HEART;
      e.classList.remove("activated-heart");
    }
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
