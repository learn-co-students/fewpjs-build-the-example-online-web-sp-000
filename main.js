// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
// Your JavaScript code goes here!
const errorM = document.getElementById('modal');
function hideError() {
  errorM.classList.add("hidden");
};

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  for (const heart of hearts) {
    addEventListener('click', () => {
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART;
          heart.classList.add("activated-heart");
        } else if (heart.innerHTML == FULL_HEART) {
          heart.innerHTML = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        modal.hidden = false;
        const modalMessage = document.getElementById("modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
          modal.hidden = true 
        }, 5000)
      })
    }
)}
})








document.addEventListener('DOMContentLoaded', hideError());
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
