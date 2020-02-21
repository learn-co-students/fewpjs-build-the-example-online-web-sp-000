// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  let likeButtons = document.getElementsByClassName('like-glyph');
  for(let i = 0; i < likeButtons.length; i++){
    likeButtons[i].addEventListener('click', event => serverCallAfterClick(event))
  }
});

function serverCallAfterClick(event) {
  mimicServerCall().then(data => {
    if(event.target.className === "like-glyph") {
      event.target.textContent = FULL_HEART;
      event.target.className = "activated-heart";
    }
    else{
      event.target.textContent = EMPTY_HEART;
      event.target.className = "like-glyph";
    }
  }).catch(error => {
    console.log(error)
    handleErrorMessage()
    })
}

function handleErrorMessage() {
  let hiddenModal = document.querySelector('.hidden')
  hiddenModal.className = ""
  setTimeout(function() {
    hiddenModal.className = "hidden"
  }, 5000)
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
