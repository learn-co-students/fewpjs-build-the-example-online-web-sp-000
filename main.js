// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal")

function hideError() {
  errorModal.setAttribute("class", "hidden")
}

function clickHeart(event) {
  let heart = event.target

  if (heart.innerText == EMPTY_HEART) {
    mimicServerCall()
    .then(serverResponse => {
      heart.innerText = FULL_HEART
      heart.setAttribute("class", "activated-heart")
    })
  } else {
    heart.innerText == EMPTY_HEART
    heart.removeAttribute("class", "activated-heart")
  }
}

hideError();

document.addEventListner("DOMContentLoaded", () => {
  const object = document.getElementsByClassName('like-glyph')
  for (const heart in object) {
    if (object.hasOwnProperty(heart)) {
      const element = object[heart];
      element.addEventListner("click", clickHeart)
    }
  }
})



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
