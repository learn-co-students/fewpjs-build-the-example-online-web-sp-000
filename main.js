// Defining text characters for the empty and full hearts for you to use later.

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hiddenError = document.getElementById('modal')
hiddenError.setAttribute('class', 'hidden')
const likes = Object.values(document.getElementsByClassName('like-glyph'))

document.addEventListener('DOMContentLoaded', stethoscope())



function stethoscope(){
  for(const like of likes){
    like.addEventListener('click', changeOfHeart)
  }
}

function changeOfHeart(event){
  const like = event.target
  mimicServerCall().then(function(response){
    if(like.innerText === EMPTY_HEART){like.innerText = FULL_HEART, like.className = 'activated-heart'}
    else if (like.innerText === FULL_HEART){like.innerText = EMPTY_HEART, like.className = 'like-glyph'}
  }).catch(error => {hiddenError.className = "", setTimeout(function(){hiddenError.className = 'hidden'}, 3000)})  
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
