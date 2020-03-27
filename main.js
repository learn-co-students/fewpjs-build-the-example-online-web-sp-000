// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// hide error modal on page load
  const hidden = document.querySelector('#modal');
  hidden.classList.add('hidden')


// like heart
const hearts = document.querySelectorAll('.like-glyph')
for (const heart of hearts) {
  heart.addEventListener('click', (event) => {
    mimicServerCall('url')
        .then(() => {
          console.log('heart clicked')
          if (event.target.innerHTML == EMPTY_HEART) {
            event.target.innerHTML = FULL_HEART;
            event.target.classList.add('activated-heart')
            console.log('full heart')
          } else {
            event.target.innerHTML = EMPTY_HEART
            event.target.classList.remove('activated-heart')
            console.log('empty heart')
          }
        })
        .catch((error) => {
          console.error(error)
          hidden.className = '' // removes hidden, displays error msg
          // then waits 3 seconds and resets hidden to clear error msg
          setTimeout(() => hidden.className = 'hidden', 3000)
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
