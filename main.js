// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';



// Your JavaScript code goes here!
window.onload = function(){
  let errorDiv = document.getElementById('modal');
  errorDiv.className = "hidden";

  let errorDivText = document.getElementById('modal-message');
  errorDivText.innerText = '';
  //let likeText = document.getElementsByClassName('like');
  let likeGlyphs = document.getElementsByClassName('like-glyph');
  //likeGlyphs
  for (const button of likeGlyphs){
    button.onclick = function(){
      mimicServerCall().then(function(){
        if (button.className != 'activated-heart'){
          button.className = 'activated-heart';
          button.innerHTML = FULL_HEART;
        } else {
          button.className = '';
          button.innerHTML = EMPTY_HEART;
        }
      }).catch((error) => {
        errorDiv.className = '';
        errorDivText.innerText = `${error}`;
        setTimeout(function(){errorDiv.className = "hidden";}, 5000);
      });
    }
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
