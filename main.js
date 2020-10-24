// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function switchHeart(article) {
  heart = article.getElementsByClassName('like-glyph')[0];
  heart.innerHTML = heart.innerHTML == FULL_HEART ? EMPTY_HEART : FULL_HEART;
  heart.setAttribute('class', 'activated-heart');
}

function addEvent2allHearts() {
  hearts = article.getElementsByClassName('like-glyph');
  hearts.forEach(heart => .addEventListener("click", switchHeart(article))
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
