// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeNodes = document.querySelectorAll(".like");
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

function liker(event) {
  
  mimicServerCall("random.url")
  .then(() => {
    const span = event.target.lastElementChild;
    span.innerText = glyphStates[span.innerText];
    if (span.getAttribute("class") === "activated-heart") {
      span.setAttribute("class", "");
    } else {
      span.setAttribute("class", "activated-heart");
    }
  })
  .catch((error) => {
    console.log("failed");
    const errorNode = document.getElementById("modal");
    errorNode.setAttribute("class", "");
    setTimeout(function() { errorNode.setAttribute("class", "hidden") }, 5000);
  })
}
for (const like of likeNodes) {
  like.addEventListener("click", liker);
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
