// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
mimicServerCall().then(() => {
  const likeButtons = document.getElementsByClassName("like");
  [...likeButtons].forEach(btn => {
    const span = btn.querySelector("span");
    span.classList.add("activated-heart");
    span.innerHTML = FULL_HEART;
    btn.addEventListener("click", () => {
      span.innerHTML = (span.innerHTML == EMPTY_HEART ? FULL_HEART : EMPTY_HEART);
      span.classList.toggle("activated-heart");
    })
});
}).catch(() => {
  const errorMsg = document.getElementById("modal")
  errorMsg.classList.remove("hidden");
  const hide = () => {
    errorMsg.classList.add("hidden")
  }
  window.setTimeout(hide, 5000)
});



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
