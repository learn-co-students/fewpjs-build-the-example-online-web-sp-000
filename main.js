// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll(".like")

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", like)
}

function like(event) {
  heart = event.target
  mimicServerCall("fakeURL")
  .then(resp => {
    if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
      heart.className = "activated-heart"
    } else if (heart.innerHTML === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
  .catch((error) => {
    console.error('Error:', error)
    document.getElementById("modal").className = ""
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
