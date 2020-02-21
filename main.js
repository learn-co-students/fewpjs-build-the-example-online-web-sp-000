// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  activateLikeButtons()
})


 function activateLikeButtons() {  
  const likeBtns = Array.from(document.getElementsByClassName("like-glyph"))
   likeBtns.forEach(button =>{
     button.addEventListener("click", event => {
       mimicServerCall().then(() => {
       if(button.innerText == EMPTY_HEART) {
         button.innerText = FULL_HEART
         button.classList.add("activated-heart")
       } else {
         button.innerText = EMPTY_HEART
         button.classList.remove("activated-heart")
       }
      })
      .catch(() => {
        let error = document.getElementById("modal")
        error.classList.remove("hidden")
        setTimeout(function() {
          error.classList.add("hidden")
        }, 5000)
        
      })
     })
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
