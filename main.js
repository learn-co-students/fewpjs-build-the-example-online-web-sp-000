// Defining text characters for the empty and full hearts for you to use later.
//unicodes
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//these are our objects that allow us to have an empty or filled heart based on the click event
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

function likeCallback(e){
  //grabbing the .like-glyph event listener (.like-glyph exists on empty heart image)
  let heart = e.target
  //target event property returns element that triggered the event
  mimicServerCall("bogusURL")
  .then (function(serverMessage){
    //accessing the .like and changing glyph state to opposite of existing state: fill : unfilled
    heart.innerText = glyphStates[heart.innerText];
    //changing color state to opposite of existing: red : ""
    heart.style.color = colorStates[heart.style.color];
  })
  //displays error message
  .catch(function(error) {
    document.getElementById("modal").className = "error"
    //grabbing the error message from the html file by id #modal (className property allows us to set a new class name )
  });
}

let articleHearts = document.querySelectorAll(".like-glyph");

//adding click eventListener to .like class
for (let glyph of articleHearts){
  glyph.addEventListener("click", likeCallback);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

//this is mimicServerCall to mimic server request and show that it randomly fails
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  let hideError = document.getElementById("hidden")
  //promise tells us if the server succeeds or fails asynchronously
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      //this is giving us a random failure
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
        //hides module if we do not get an error
        hideError;
      }
      //300 is giving is 300 msec. / 60 milliseconds = 5 seconds
    }, 300, hideError);
  });
}
