// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articles = document.querySelectorAll("article.media-post")
for (let article of articles) {
  const like = article.querySelector(".like")
  like.addEventListener('click', function(event) {
    if (like.classList.contains("activated-heart")) {
      like.classList.remove("activated-heart")
      like.querySelector(".like-glyph").innerText = EMPTY_HEART
    } else {
      mimicServerCall()
        .then(() => {
          like.classList.add("activated-heart")
          like.querySelector(".like-glyph").innerText = FULL_HEART
        })
        .catch(() => {

        })
    }

  });
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
