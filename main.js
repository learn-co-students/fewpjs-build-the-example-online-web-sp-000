// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll("li span")

hearts.forEach(function(heart){
  heart.addEventListener("click", e => {clickHeart(e.target)} )
})

function clickHeart(heart){
  if (heart.classList.contains("activated-heart")) {
    heart.textContent = EMPTY_HEART
    heart.classList.remove("activated-heart")
  } else {
    mimicServerCall()
    .then(function(resp){
      heart.textContent = FULL_HEART
      heart.classList.add("activated-heart")
    })
    .catch(function(error){
      document.getElementById("modal").classList.remove("hidden")
    })
    
  }
}



// function attemptCall(){
//   const call = mimicServerCall()
  
// }
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
