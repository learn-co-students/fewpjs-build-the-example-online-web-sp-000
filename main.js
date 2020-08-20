// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorEl = document.querySelector("#modal");
errorEl.classList = "hidden";

// changed error message to appear for 1 sec instead of 5
let likes = document.getElementsByClassName("like");
for (let i = 0; i < likes.length; i++) {
  likes[i].addEventListener("click", function(event) {
    let post = likes[i];
    post.setAttribute("id", (i + 1));
    event.preventDefault();
    mimicServerCall()
    .then( (serverMessage) => {
      let liked = event.target.querySelector(".like-glyph");
      if (liked.innerText === FULL_HEART) {
        liked.classList.remove("activated-heart");
        liked.innerText = EMPTY_HEART; 
      } else { 
        liked.classList.add("activated-heart");
        liked.innerText = FULL_HEART;
      }
    })
    .catch( (serverError) => {
      errorEl.classList.remove("hidden");
      setTimeout(function() {
        errorEl.classList = "hidden";
      }, 1000)
    }); 
  });
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
