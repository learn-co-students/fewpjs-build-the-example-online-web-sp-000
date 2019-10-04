// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

let heartElements = document.querySelectorAll(".like-glyph");
for (let i = 0; i < heartElements.length; i++) {
  heartElements[i].addEventListener("click", function(e){
    if (heartElements[i].innerHTML == EMPTY_HEART){
      mimicServerCall()
      .then(resp => {
        heartElements[i].innerHTML = FULL_HEART;
        heartElements[i].className = "activated-heart";
      })
      .catch(error => {
        let errorModal = document.getElementById("modal");
        let errorMessage = document.getElementById("modal-message");
        errorModal.removeAttribute("class", "hidden");
        errorMessage.innerHTML = error;
        setTimeout(function () {
          errorModal.className = "hidden";
        }, 5000);
      });
    } else {
      heartElements[i].innerHTML = EMPTY_HEART;
      heartElements[i].removeAttribute("class", "activated-heart");
    }
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
