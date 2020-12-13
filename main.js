// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function heartEvent(likeButton) {
  let heart = likeButton.querySelector(".like-glyph")

  if (heart.classList.contains("activated-heart")) {
    heart.classList.remove("activated-heart")
    heart.innerText = EMPTY_HEART
  }
  else {
    heart.classList.add("activated-heart")
    heart.innerText = FULL_HEART
  }
}

const likeButtons = document.getElementsByClassName('like')

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener("click", function() {

    mimicServerCall()
    .then(function(object) {
      heartEvent(likeButtons[i]);
    })
    .catch(function(error) {
      let errorDiv = document.getElementById('modal')
      errorDiv.classList.remove("hidden")
      setTimeout(function(){ errorDiv.classList.add("hidden"); }, 5000);
    });
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
