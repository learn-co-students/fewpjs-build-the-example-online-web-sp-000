// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heart = document.getElementsByClassName("like-glyph")

for (const key of heart){
  key.addEventListener('click', function(e){
    mimicServerCall()
    .then(function(response){
      if (key.innerHTML == EMPTY_HEART) {
      e.target.style.color = "red";
      e.target.innerHTML = FULL_HEART;
      }
      else {
        e.target.style.color = "gray";
        e.target.innerHTML = EMPTY_HEART;
      }
    })
    .catch(function(error){
      let grabError = document.getElementById("modal")
      grabError.className = ""

      setTimeout(function(){ grabError.className = "hidden" ; }, 5000);
    })
})}



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
