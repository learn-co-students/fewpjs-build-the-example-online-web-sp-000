// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById("modal")
modal.className = "hidden"
document.addEventListener("DOMContentLoaded", () => {
  let hearts = document.querySelectorAll("li.like > span")
  for (const heart of hearts) {
    heart.addEventListener('click', ()=>{
        mimicServerCall().then(function(response){
          if (heart.className == "like-glyph"){
            heart.innerHTML = FULL_HEART
            heart.className = "activated-heart"
          } else {
            heart.innerHTML = EMPTY_HEART
            heart.className = "like-glyph"
          }
        })
        .catch(function(error){
          modal.hidden = false
          setTimeout(function(){
            modal.hidden = true
          }, 5000)
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
