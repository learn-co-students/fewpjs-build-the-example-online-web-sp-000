// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const articles = document.querySelectorAll('.media-post');
// const likeButtons = document.getElementsByClassName('like-glyph');
  const errorMsg = document.getElementById('modal');

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  
  for (const article of articles) {
    let glyph = article.querySelectorAll('.like-glyph')[0];
    let likeBtn = article.getElementsByTagName('li')[0];
    likeBtn.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (glyph.innerText == EMPTY_HEART) {
            glyph.innerText = FULL_HEART;
            glyph.setAttribute('class', 'activated-heart');
          }
          else {
            glyph.innerText = EMPTY_HEART;
            glyph.setAttribute('class', 'like-glyph');
          }
        })
        .catch(() => {
          errorMsg.removeAttribute('class');
          setTimeout(() => {errorMsg.setAttribute('class', 'hidden')}, 5000);
        });
      });
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
