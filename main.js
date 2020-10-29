// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorBanner = document.getElementById('modal')
const likeButton = document.querySelectorAll('.like-glyph')
const errorMessage = document.getElementById('modal-message');

document.addEventListener('DOMContentLoaded', function() {
  errorBanner.setAttribute("class", "hidden")
})


function toggleLikeButton(){
  mimicServerCall()
  .then(() => changeLikeButton)
  .catch(error => errorDisplay(error))
};


likeButton.forEach(item => {
  item.addEventListener('click', event => {
    changeLikeButton(item)
  })
})

function changeLikeButton(item) {
  if (item.innerHTML == FULL_HEART)
  {item.innerHTML = EMPTY_HEART;
    item.removeAttribute('class', 'activated-heart')
  }
  else if (item.innerHTML == EMPTY_HEART)
  {item.innerHTML = FULL_HEART;
    item.setAttribute('class', 'activated-heart')
  }
}

function errorDisplay(error) {
  errorMessage.innerText = message;
  errorBanner.classList.remove('hidden');
  setTimeout(() => {
    errorBanner.classList.add('hidden');
  }, 5000);
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
