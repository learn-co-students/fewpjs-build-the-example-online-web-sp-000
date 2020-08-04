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

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like-glyph")

document.addEventListener("DOMContentLoaded", function(){
  for (heart of hearts) {
    heart.addEventListener("click", likeCallback)
  }
})

function likeCallback(e) {
  let modal = document.querySelector("#modal")
  let heart = e.target;
  mimicServerCall()
  .then(function(resp){
    heart.innerText = glyphStates[heart.innerText];
    heart.classList.toggle("activated-heart")
    modal.className = "hidden"
  })
  .catch(function(resp) {
    console.log(resp)
    let header = modal.firstElementChild
    header.innerText = resp
    modal.className = ""
    setTimeout(function() {modal.className = 'hidden'}, 5000)
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
