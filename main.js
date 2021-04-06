// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

const articleHearts = document.querySelectorAll(".like-glyph");

function like(event) {
  const heart = event.target;
  mimicServerCall("")
  .then(function(message) {
    heart.innerText = glyphStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error) {
    const modal = document.querySelector('#modal');
    modal.className = "";
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);
  });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", like);
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
