// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
  hideErrorModal();
  addLikeListener();
})

function hideErrorModal() {
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');
}

function addLikeListener() {
  const likeBtns = document.getElementsByClassName('like-glyph');
  for (const btn of likeBtns) {
    btn.addEventListener('click', tryLike);
  }
}

function tryLike(event) {
  mimicServerCall()
    .then(function(resp) {
      alert(resp); 
      like(event); 
    })
    .catch(function(error) {
      //alert(error);
      displayError(error); 
    });
}

function like(event) {
  if (event.target.innerText == EMPTY_HEART) {
    event.target.innerText = FULL_HEART;
    event.target.classList.add('activated-heart');
  }
  else {
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove('activated-heart');
  }
}

function displayError(error) {
  console.log('i am displaying the error here:D'); 
  const errorModal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.innerText = error; 
  errorModal.classList.remove('hidden');
  window.setTimeout(hideErrorModal, 5*1000);
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
