// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  const error = document.getElementById("modal");

  let hearts = document.querySelectorAll("span.like-glyph");

  hearts.forEach(function(currentHeart){
    currentHeart.addEventListener('click', function(){
      mimicServerCall()
      .then(function(){
        activateHeart(currentHeart);
      })
      .catch(function(err){
        error.classList.remove("hidden");
        setTimeout(function(){ error.className = "hidden";}, 5000);
      });
    });
  });

  function activateHeart(currentHeart){
    if (currentHeart.innerHTML == EMPTY_HEART){
      currentHeart.innerHTML = FULL_HEART
      currentHeart.className = "activated-heart";
    } else {
      currentHeart.classList.remove("activated-heart");
      currentHeart.innerHTML = EMPTY_HEART;
    }
  }

});



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  console.log("clicked");
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
