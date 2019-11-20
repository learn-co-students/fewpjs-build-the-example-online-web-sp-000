// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likes=document.querySelectorAll('.like-glyph')
let modal=document.querySelector('#modal')
for(const i of likes)
  i.addEventListener('click',(e)=>{
  mimicServerCall()
    .then(response=>likeDislike())
    .catch(error=>errorHandling(error))

      function likeDislike() {
        if (e.target.innerText==EMPTY_HEART) {
          e.target.innerText=FULL_HEART
          e.target.classList.add("activated-heart")
        }
        else if (e.target.innerText==FULL_HEART) {
          e.target.innerText=EMPTY_HEART
          e.target.classList.remove("activated-heart")
        }
      }

      function errorHandling(error) {
        modal.classList.remove("hidden")
          document.querySelector('#modal-message').innerText=error
          setTimeout(function(){ modal.classList.add("hidden") }, 5000);
      }
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
