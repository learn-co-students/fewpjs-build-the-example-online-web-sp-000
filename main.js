// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", ()=>{
  let errorMod = document.getElementById("modal")
  errorMod.className = "hidden"
  const likeButtons = document.querySelectorAll("span.like-glyph")

  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", ()=>{
      mimicServerCall()
      .then(function(object) {
        if(likeButtons[i].className == "activated-heart") {
          likeButtons[i].innerText = EMPTY_HEART
          likeButtons[i].className = "like-glyph"
        } else {
          likeButtons[i].innerText = FULL_HEART
          likeButtons[i].className = "activated-heart"
        }
      })
      .catch(function(error) {
        errorMod.className = ""
        let errorMsg = document.getElementById("modal-message")
        errorMsg.innerText = "Random Server Error"
        setTimeout(()=>{errorMod.className = "hidden"}, 5000)
      })
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
