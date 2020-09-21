// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function(){

  for(const el of document.getElementsByClassName("like-glyph")) {
    el.addEventListener("click", function(){
      
      if (el.innerHTML != FULL_HEART) {
        
        el.className = "activated-heart"
        el.innerHTML = FULL_HEART
        mimicServerCall().then(function(resp) {
          //alert("mimic server call");
          document.getElementById("modal").className = "hidden"
        }).catch(() => {
          document.getElementById("modal").className = ""
          document.getElementById("modal-message").innerText = "There was an error"
        });
      } else {
        el.className = ""
        el.innerHTML = EMPTY_HEART
      }
        
      
      
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


