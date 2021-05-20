// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtns = document.querySelectorAll(".like")

likeBtns.forEach((button) => {
  const heart = button.querySelector("span")
  button.addEventListener("click", (e) => {
    e.preventDefault()
    mimicServerCall().then(response => {
      if (heart.hasAttribute("class", "acivated-heart")) {
        heart.removeAttribute("class", "activated-heart")
        heart.innerText = EMPTY_HEART
      } else {
        heart.setAttribute("class", "activated-heart")
        heart.innerText = FULL_HEART
      }
    }).catch(e => {
      const errorDisplay = document.getElementById("modal")
      const messageDisplay = document.getElementById("modal-message")
      messageDisplay.innerText = e.message
      errorDisplay.removeAttribute("class", "hidden")
      setInterval(() => {
        errorDisplay.setAttribute("class", "hidden")
      }, 3000)
    })
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
