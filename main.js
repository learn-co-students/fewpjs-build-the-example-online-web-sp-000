// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let hearts = document.querySelectorAll(".like-glyph");

let type = {
  '♥' : '♡',
  '♡' : '♥'
}
let color = {
  "red" : "",
  "" : "red"
}

const errorMessage = document.getElementById("modal");
errorMessage.classList.add("hidden");

hearts.forEach(heart => heart.addEventListener("click", changeHeart));

function changeHeart(event){
  let heart = event.target
  mimicServerCall("You sure?")
  .then(function(error){
    heart.innerText = type[heart.innerText];
    heart.style.color = color[heart.style.color];
  })
  .catch(function(error){
    errorMessage.innerText = "Something went wrong";
    errorMessage.className = "";
    setTimeout(function(){errorMessage.classList.add("hidden");}, 4000)
  })
}


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
