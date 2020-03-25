// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// hide error modal on page load
function addHidden() {
  let element = document.getElementById('modal');
  element.classList.add('hidden');
}

addHidden();

// like heart

function like() {
  console.log('heart clicked');
}

document.querySelectorAll('.like-glyph').forEach(item => {
  item.addEventListener('click', event => {
    like()
  })
})

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
