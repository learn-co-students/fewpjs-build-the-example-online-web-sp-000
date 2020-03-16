// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function makeErrorInvisible() {
  document.querySelector("#modal").className = "hidden"
}

function makeErrorVisible() {
  document.querySelector("#modal").className = "visible"
}

document.addEventListener("DOMContentLoaded", 
  makeErrorInvisible()
);

function changeHeartActivation(heart) {
  if(heart.className != "activated-heart"){
    heart.className = "activated-heart";
  }
  else {
    heart.className = "deactivated-heart";
  }
}
document.querySelectorAll(".like-glyph").forEach(heart =>{
  heart.addEventListener("click", event => {
    changeHeartActivation(heart);
  })
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
