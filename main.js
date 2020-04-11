// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorStatus = false

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  function setErrorModal(errorMessage = ''){
    let errorModal = document.getElementById('modal');
    let errorModalMessage = document.getElementById('modal-message');
    errorStatus = !errorStatus
    if(errorStatus){
      errorModal.className = ''
      errorModalMessage.innerText = errorMessage;
      setTimeout(setErrorModal, 5000)
    } else {
      errorModal.className = 'hidden';
    }
  }
  
  function flipHeart(heart){
     if(heart.className == 'activated-heart'){
       heart.className = '';
       heart.innerText = EMPTY_HEART;
     } else {
       heart.className = 'activated-heart';
       heart.innerText = FULL_HEART;
     }
  }
  
  let posts = document.getElementsByClassName('media-post')
  function setHeartLike(post){
    let heartGlyph = post.getElementsByClassName('like-glyph')[0];
    let heartContainer = post.getElementsByClassName('like')[0];
    heartContainer.addEventListener('click', () =>{
      mimicServerCall()
      .then(() => {
        flipHeart(heartGlyph);
      })
      .catch((error) => {
        setErrorModal(error)
      })
    })
  }
  
  for(const post of posts){
    setHeartLike(post)
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
