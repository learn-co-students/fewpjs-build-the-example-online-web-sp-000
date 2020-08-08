// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let likeSpan = document.querySelectorAll(".like-glyph");
  let divErr = document.querySelector("#modal");
  let pModalMsg = document.getElementById("modal-message");
  
  likeSpan.forEach(mimicServerCall)

  function mimicServerCall(item, index) {
    item.addEventListener("click", (e) => {
      
      fetch("https://anapioficeandfire.com/api/books")
      .then(response => response.json())
      .then(object => {
        e.target.classList += " activated-heart"
        if(e.target.innerText == FULL_HEART) {
          e.target.innerText = EMPTY_HEART
          e.target.classList = "like-glyph"
        } else {
          e.target.innerText = FULL_HEART
        }
      })
      .catch((error) => { 
        divErr.className = ""
        pModalMsg.innerHTML = error;
        setTimeout( () => {
        divErr.className = "hidden" }, 5000 );
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
