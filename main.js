// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const errorModal = document.getElementById('modal');
const likes = document.querySelectorAll('.like-glyph');

for (const like of likes) {
  like.addEventListener('click', liked);
}

function liked(e){
  heart = e.target;
  if(heart.textContent == FULL_HEART){
    mimicServerCall()
    .then(function (response) {
      heart.classList.remove('activated-heart');
      heart.textContent = EMPTY_HEART;
    })
    .catch(function (error) {
      document.getElementById('modal').classList.remove('hidden');
      setTimeout(function () {
        document.getElementById('modal').classList.add('hidden');
      }, 5000);
    });
  } else {
    mimicServerCall()
    .then(function (response) {
      heart.classList.add('activated-heart');
      heart.textContent = FULL_HEART;
    })
    .catch(function (error) {
      document.getElementById('modal').classList.remove('hidden');
      setTimeout(function () {
        document.getElementById('modal').classList.add('hidden');
      }, 5000);
    });
  }
  
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
