// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
let modal = document.querySelector('#modal')
modal.setAttribute('class', 'hidden')

document.addEventListener('DOMContentLoaded', function() {
  const hearts = document.querySelectorAll('.like-glyph') //assign "hearts" to each ".like-glyph" class

  hearts.forEach(heart => { //iterate over hearts, for each heart addEventListener
    heart.addEventListener('click', function(e) { //when "clicked", run this function
      mimicServerCall() //this is a function created below. This is for the API POST request
      .then(response => { //the callback function that takes in response as an argument.
        console.log(response) //logging the response
        if (heart.innerText == EMPTY_HEART) { //if heart is empty
          heart.innerText == FULL_HEART; //change to this
          heart.setAttribute('class', 'like-glyph activated-heart'); //and set the attributes
        }
        else {
          heart.innerText = EMPTY_HEART; //else, assign it the EMPTY_HEART const
          heart.setAttribute('class', 'like-glyph'); //assign the attributes to this
        }
      })
      .catch(error => { //if the request fails, we need to log an error message
        console.log(error) //displays the server error message
        let modalMessage = document.querySelector('#modal-message') //grabs the modal-message id
        modalMessage.innerText = error //changes the innerText to the server error message
        modal.removeAttribute('class') //remove the "hidden" class
        setTimeout(function() {
          modal.setAttribute('class', 'hidden') //after 5 seconds of displaying the error, add "hidden" back
        },
        5000); //five seconds
      })
    })
  })

});


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


// CHALLENGE SOLUTION - doesn't seem complete. missing setTimeout, etc.

// let glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// let colorStates = {
//   "red" : "",
//   "": "red"
// };

// let articleHearts = document.querySelectorAll(".like");

// function likeCallback(e) {
//   let heart = e.target; //target is a reference to the object that dispatched the event.
//   mimicServerCall("bogusUrl")
//    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
//     .then(function(serverMessage){
//        heart.innerText = glyphStates[heart.innerText];
//        heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function(error) {
//       // Basic
//       // alert("Something went wrong!");
//       // or....
//       document.getElementById("modal").className = "";
//     });
// }

// for (let glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }