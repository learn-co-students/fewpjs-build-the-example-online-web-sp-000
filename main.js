// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
hideErrorModal();
const colorState = {"red":"","":"red"}

document.addEventListener("DOMContentLoaded", () => {
  addEventListenersToHearts();
});

function addEventListenersToHearts() {
  // add event listener to elements with 'like' class
  let likeElementsArray = document.getElementsByClassName("like");
  for (likeEl of likeElementsArray) {
    likeEl.addEventListener('click', handleLikeEvent);
  }
};

function handleLikeEvent(event) {
  console.log('hi');
  let likeButtons = document.querySelectorAll(".like");
  
  mimicServerCall()
    .then(resp => {
      event.target.innerText = FULL_HEART
      event.target.style.color = colorState[event.target.style.color]
    })
    .catch(error => {
      document.getElementById('modal').className = ""
      setTimeout(function() {
        document.getElementById('modal').className = 'hidden'
      }, 5000);
    })

};

function hideErrorModal() {
  let modalDiv = document.getElementById("modal");
  modalDiv.setAttribute('class', 'hidden');
};

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
