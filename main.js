// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// When a user clicks on an empty heart ("Recognizing events")
// First grab all the heart icons and set them equal to a const variable so we can eventually listen for events on them

const likedHearts = document.querySelectorAll('.like-glyph')
const hidden = document.querySelector('#modal')
hidden.className = 'hidden'

for (let i = 0; i < likedHearts.length; i++)
  likedHearts[i].addEventListener('click', function() {
    if (likedHearts[i].innerHTML == EMPTY_HEART){
      mimicServerCall()
      .then(resp => {
        likedHearts[i].innerHTML = FULL_HEART;
        likedHearts[i].className = '.activated_heart';
      })
      .catch((err) => {
        setTimeout(() => hidden.className = '', 5000)
      });
    } else {
      likedHearts[i].innerHTML = EMPTY_HEART;
      likedHearts[i].removeAttribute("class", "activated_heart");
    }
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
