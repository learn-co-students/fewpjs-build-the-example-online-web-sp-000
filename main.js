// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  let likeButtons = document.querySelectorAll('.like');
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', toggleLike);
  });
});

function toggleLike(e) {
  let heart = this.firstElementChild.innerHTML
  if (heart === EMPTY_HEART) {
    this.firstElementChild.innerHTML = FULL_HEART;
    this.firstElementChild.classList.add('activated-heart');

  } else {
    this.firstElementChild.innerHTML = EMPTY_HEART;
    this.firstElementChild.classList.remove('activated-heart');
  }
  //fetch(mimicServerCall).then(resp => resp.json()).then(json => console.log(json));
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
