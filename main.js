// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
error = document.querySelector("#modal")
//error.classList.add("hidden")
function displayError() {
  error.classList.remove("hidden");
  setTimeout(function(){ error.classList.add("hidden"); }, 5000)
  
}
// Your JavaScript code goes here!
likes = document.querySelectorAll(".like-glyph")
for(const like of likes) {
  like.addEventListener("click", () => {
    // hide & seek with the form
    mimicServerCall()
    .then(response => heart(like))
    .catch(response => displayError());

  });
};
function heart (like) {
  if(like.classList.contains("activated-heart")){
    like.classList.remove("activated-heart")
    like.innerHTML = EMPTY_HEART
  }
  else {
    like.classList.add("activated-heart")
    like.innerHTML = FULL_HEART
  }
  
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
