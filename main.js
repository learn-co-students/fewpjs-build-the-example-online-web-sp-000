// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let errorMessage = document.getElementById("modal");
errorMessage.className = "hidden";

const heartButtons = document.querySelectorAll(".like-glyph");

for (const heartBtn of heartButtons) {
   heartBtn.addEventListener("click", (e) => {
      let heart = e.target;
      mimicServerCall()
         .then((success) => {
            if (heart.innerText === EMPTY_HEART) {
               heart.innerText = FULL_HEART;
               heart.className = "activated-heart"
            } else {
               heart.innerText = EMPTY_HEART;
               heart.className = ""
            }
         })
         .catch((error) => {
            errorMessage.className = "";
            setTimeout(function() { errorMessage.className = "hidden" }, 5000)
         });
   });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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
