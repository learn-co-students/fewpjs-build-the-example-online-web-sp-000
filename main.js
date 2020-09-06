// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Constant declarations
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');

// Functions
function showError(message)
{
  modal.classList.remove("hidden");
  modal.children[1].innerHTML = message;
  timeoutID = setTimeout(hideError, 5000);
}

function hideError()
{
  modal.classList.add("hidden");
}

function toggleLike(caller)
{
  if (caller.classList.contains("activated-heart"))
  {
    caller.textContent = EMPTY_HEART;    
    caller.classList.remove("activated-heart");
  }
  else
  {
  mimicServerCall()
  .then(function(response) {
    caller.textContent = FULL_HEART;
    caller.classList.add("activated-heart");
  })
  .catch(function(error) {
    showError(error);
  });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  hideError();
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
