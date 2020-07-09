// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartIcons = document.querySelectorAll(".like-glyph")
let modal = document.querySelector("#modal");

for (let glyph of heartIcons) {
  glyph.addEventListener("click", heartCall);
}

function heartCall(event) {
  let heart = event.target;
  mimicServerCall()
    .then(function (serverMessage) {
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
        modal.classList.add("hidden");
      }
      else {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove("activated-heart");
        modal.classList.add("hidden");
      }
    })
    .catch(function (error) {
      modal.classList.remove("hidden");
      alert("Random server error. Try again.");
    })
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


