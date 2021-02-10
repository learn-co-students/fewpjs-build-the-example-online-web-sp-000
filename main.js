const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let modal = document.getElementById("modal");
modal.className = "hidden"

document.addEventListener("DOMContentLoaded", function() {

  let likeButtons = document.querySelectorAll("span.like-glyph");
  for(const heart of likeButtons){
    heart.addEventListener('click', function(){
      mimicServerCall().then(function(response){
        if (heart.className == "like-glyph"){
          heart.textContent = FULL_HEART
          heart.className = "activated-heart"
        } else {
          heart.textContent = EMPTY_HEART
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
});

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
