// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const div = document.querySelector('#modal');
const p = document.querySelector('#modal-message');

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('.like');
for (const button of likeButtons){    
  button.addEventListener('click', function(){
    mimicServerCall()
      .then((resp) => {
        // if (resp == "Pretend remote server notified of action!"){
          const span = button.querySelector('.like-glyph');
          const array = Array.from(span.classList);
          if (array.includes('activated-heart')){
            span.classList.remove('activated-heart');
          } else {
          span.classList.add('activated-heart');
          }
        // }
      })
      .catch((error) => {
          div.classList.remove('hidden');
          p.innerHTML = error;
          setTimeout(() => div.classList.add('hidden'), 5000);
      })
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
