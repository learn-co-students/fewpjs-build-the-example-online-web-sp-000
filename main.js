// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal");
const switcher = {'♡': '♥', '♥':'♡'};

document.addEventListener("DOMContentLoaded", activateHearts());

function activateHearts(){
  const heartsHTML = document.getElementsByClassName("like-glyph");
  const heartsArray = Array.from(heartsHTML)
  heartsArray.forEach(heart => {
    heart.addEventListener("click", event => {
      event.preventDefault()
      mimicServerCall()
      .then(() => {
        if (heart === EMPTY_HEART){
          heart.setAttribute("class", "activated-heart");
         }
        else {
          heart.setAttribute("class", "like-glyph");
        }
        heart.innerHTML = switcher[heart.innerHTML];
      })
      .catch(() => {
        modal.removeAttribute("class");
        setTimeout(function() {
          modal.setAttribute("class", "hidden");
        }, 3000);
      })
    })

  });
};

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
