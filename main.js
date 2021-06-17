// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




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



const likeBtns = document.querySelectorAll(".like-glyph");
const hiddenDiv = document.querySelector("div.hidden");
const errorMsg = document.getElementById("modal-message");

for(const likeBtn of likeBtns) {
  likeBtn.addEventListener('click', function() {
    if (!likeBtn.classList.contains("activated-heart")) {
      mimicServerCall()
        .then(function() {
          likeBtn.classList.add("activated-heart");
          likeBtn.addEventListener('click', function() {
            likeBtn.classList.remove("activated-heart");
          });
        }).catch(function(response) {
          hiddenDiv.setAttribute("class", "not-hidden");
          errorMsg.innerHTML = response;
          setTimeout(function() {
            hiddenDiv.setAttribute("class", "hidden");
            errorMsg.innerHTML = "";
          }, 3000);
        });
    }
  });
}
