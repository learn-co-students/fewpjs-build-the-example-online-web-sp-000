// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeArray = document.getElementsByClassName("like")
let heartArray = document.getElementsByClassName("like-glyph")

document.querySelector('div#modal').setAttribute('class', "hidden"); // sets default state of error to hidden 

function heartClick(heartArray) {
  for (i = 0; i < heartArray.length; i++){
    heartArray[i].addEventListener("click", function(event) { 
        if (event.target.innerHTML == EMPTY_HEART){
          mimicServerCall()
          .then((response) => {
            event.target.innerHTML = FULL_HEART
            event.target.setAttribute('class', "activated-heart")
          })
          .catch((error) => {
            modal.removeAttribute('class'); // if error is present with server call, remove hidden class to reveal error
            setTimeout( () => { //after period of time no longer show the error
              modal.setAttribute('class', "hidden");
            }, 5000);
          });
        } else {
          event.target.innerHTML = EMPTY_HEART
          event.target.removeAttribute('class')
        }
        
    })
  }
}

document.addEventListener("DOMContentLoaded", function(){

  heartClick(heartArray)

})



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
