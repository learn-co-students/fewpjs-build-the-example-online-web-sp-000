// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hearts = document.querySelectorAll(".like-glyph");

let modal = document.getElementById("modal");

for (let heart of hearts) {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
    .then(()=> {
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART;
// Is the below line correct?
        e.target.classList.add("activated-heart");
// Is the above line correct?
      }
      else {e.target.innerText = EMPTY_HEART;
            e.target.classList.remove("activated-heart");
            }
    }).catch((error) => {
      // let modal = document.getElementById("modal");
      modal.innerText = error;
      modal.classList.remove("hidden")
      setTimeout(function() {
        modal.classList.add("hidden");
      }, 5000)
      // modal.classList.add("hidden");
    })
  })
  // .then(if (error) {
  //   error.catch
  // }
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
