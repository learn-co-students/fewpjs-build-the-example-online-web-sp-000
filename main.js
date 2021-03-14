// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById("modal")
  const hearts = document.getElementsByClassName("like-glyph")
  
  for (const heart of hearts)
    heart.addEventListener("click", (e) => {
      // use mimicServerCall instead of fetch
      mimicServerCall()
      // note: do not need first .then statement bc do not need to convert to JSON
      .then(() =>{
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART
          // changes CSS -> heart changed to red
          heart.className = "activated-heart"
        } else {
          heart.innerHTML = EMPTY_HEART
          // changes CSS -> heart changed to empty
          heart.className = "like-glyph"
        }
      })
      .catch(error => {
        // show modal
        modal.hidden = false
        const modalMessage = document.querySelector("#modal-message")
        // insert error message from mimicserver into modalmessage 
        modalMessage.innerText = error
        setTimeout(() => {
          modal.hidden = true
        }, 5000)
      })
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
