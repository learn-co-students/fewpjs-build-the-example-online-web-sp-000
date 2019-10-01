// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let likeButtons = document.querySelectorAll(".like")

for (let glyph of likeButtons) {
  glyph.addEventListener("click", likeEvent);
}

function likeEvent(event) {
  let button= event.target;
  mimicServerCall(url)
    .then(function(statusMessage){
      button.innerText = glyphStates[button.innerText];
      button.style.color = colorStates[button.style.color]
    })
    .catch(function(error) {
      document.getElementById("modal").className = "";
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
