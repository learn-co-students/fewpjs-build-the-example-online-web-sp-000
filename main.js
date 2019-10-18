// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal");
const likeGlyph = document.querySelectorAll(".like-glyph");
const modalMessage = document.querySelector("#modal-message");

errorModal.classList.add("hidden");

likeGlyph.forEach(like =>{
  like.addEventListener('click', heartClick);
})


function heartClick(){
  let like = this;
  mimicServerCall()
  .then(
    toggleHeart(like)
  )
  .catch(error => {
    errorModal.removeAttribute("class", "hidden");
    modalMessage.textContent = error;
    setTimeout(function () {
      errorModal.className = "hidden";
    }, 5000);
  })

}
function toggleHeart(like){
  like.classList.toggle("activated-heart");
      if (like.textContent === EMPTY_HEART){
        like.textContent = FULL_HEART;
      } else {
        like.textContent = EMPTY_HEART;
      }
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
