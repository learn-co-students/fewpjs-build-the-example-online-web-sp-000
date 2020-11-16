// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
hideError();
let likes = document.querySelectorAll('.like')
let thing;
let btn;
for (const like of likes) {
  addEventListener("click", function(click) {
    mimicServerCall()
      .then(function(response){
        thing = click
        btn = thing.path[0]
        changeHeart(btn);
      })
      .catch((error) => {
        showError(error);
      })
  })
}

function changeHeart(element) {
  if (element.innerText === EMPTY_HEART) {
    element.innerText = FULL_HEART;
    element.setAttribute("class", "activated-heart")

  }
  else if (element.innerText === FULL_HEART) {
    element.innerText = EMPTY_HEART;
    element.removeAttribute("class")
  }
}

function hideError() {
  modal.setAttribute("class", "hidden")
}

function showError(error) {
  modal.removeAttribute("class")
  console.log(error);
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
