// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorMessage = document.querySelector("div#modal")
errorMessage.className = "hidden"

function callServer() {
  mimicServerCall().catch(() => {
    errorMessage.className = ""
    errorMessage.textContent = 
    setTimeout(() => {
      errorMessage.className = "hidden"
    }, 5000)
  })
}

function likeOrUnlike(span) {
  if (span.textContent == EMPTY_HEART) {
    span.textContent = FULL_HEART;
    span.className = "activated-heart"
  }
  else {
    span.textContent = EMPTY_HEART;
    span.className = ""
  }
}

document.querySelectorAll("span.like-glyph").forEach(likeBtn => {
  likeBtn.addEventListener("click", () => {
    callServer()
    if (errorMessage.className == "hidden") {
      likeOrUnlike(event.target)
    }
    else {
      return
    }
  })
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
