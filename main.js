// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const states = {
  '♡': '♥',
  '♥': '♡',
  'activated-heart': '',
  'none': 'activated-heart'
}

const hearts = document.getElementsByClassName('like-glyph');

function like(e) {
  heart = e.target

  mimicServerCall()
    .then(() => {
      heart.className = state.[className]
      heart.innerHTML = states[heart.innerHTML]
    })
    .catch((e) => {debugger})
}

for (const heart of hearts) {
  heart.addEventListener('click', e => like(e))
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
