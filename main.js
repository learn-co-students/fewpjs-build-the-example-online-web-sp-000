// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartChange = {
  "♡": "♥",
  "♥": "♡"
};

let colorChange = {
  "red" : "",
  "": "red"
};
let like = document.querySelectorAll(".like-glyph");
let errorMsg = document.getElementById("modal");
errorMsg.classList.add("hidden");
function errorFn() {
  errorMsg.classList.remove("hidden");
}


for (var i=0;i<like.length;i++) {
  like[i].addEventListener("click", function (e) {
    mimicServerCall("something")
    .then(function(serverMessage){
      e.target.innerText = heartChange[e.target.innerText]
      e.target.style.color = colorChange[e.target.style.color]
   })
   .catch(function(error) {
      setTimeout(errorFn(), 5000);
  })
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
