// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById("modal");
const errorMessage = document.getElementById("modal-message");
const likeHearts = document.getElementsByClassName('like');

// Hide the error modal when the page loads
modal.className = "hidden";
// modal.setAttribute('class', 'hidden');

// Update likeHeart
function updateLike(event) {
  // event.target refers to the clicked child element (<span class='like-glyph'> in this case)
  // This is different than event.currentTarget, which would refer to the parent <li class='like'> in this context
  const heart = event.target;

  mimicServerCall()
    .then(function(sucess) {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = 'activated-heart';
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch(function(error) {
      // display the current error message in the modal
      errorMessage.innerText = error;
      modal.className = "";

      // Wait for 3 seconds before hiding the modal with error message
      setTimeout(function() { modal.className = "hidden"; }, 3000);
    });
}

// Add Event listener to the heart buttons and wait for click
for (const likeHeart of likeHearts) {
  likeHeart.addEventListener('click', updateLike);
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
