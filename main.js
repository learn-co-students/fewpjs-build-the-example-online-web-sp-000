// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").className = "hidden";

const likeGraphics = document.querySelectorAll('.like-glyph');

for (const likeGraphic of likeGraphics){

  likeGraphic.addEventListener('click', function(e){
    mimicServerCall()
      .then (function(json){
        if (e.target.innerHTML === EMPTY_HEART){
          e.target.innerHTML = FULL_HEART
          likeGraphic.classList.add("activated-heart");
        } else {
          e.target.innerHTML = EMPTY_HEART
          likeGraphic.classList.remove("activated-heart")
        }
      })
      .catch (function(error){
        console.log(error)
      });
  });
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
