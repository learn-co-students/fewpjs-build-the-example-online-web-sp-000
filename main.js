// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let liked = false

// Your JavaScript code goes here!

document.querySelectorAll('li.like').forEach(function(like) {
  like.addEventListener('click', function(e) {
    mimicServerCall()
    .then(function() {
      likeGlyph = e.target.querySelector('span');
      if(liked) {
        likeGlyph.innerText = EMPTY_HEART;
        likeGlyph.className = "";
      } else {
        likeGlyph.innerText = FULL_HEART;
        likeGlyph.className = "activated-heart";
      }
      liked = !liked
    })
    .catch(function(error) {
      let modal = document.getElementById('modal');
      modal.className = "";
      document.getElementById('modal-message').innerText = error;
      setTimeout(function() {
        modal.className = "hidden";
      }, 5000);
    });
  });
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
