// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeBtns = document.querySelectorAll('span.like-glyph');
for(const heart of likeBtns){
  heart.addEventListener("click", function(){
    
    serverCall(this)})
}

function likeUnlike(btn){
  if(btn.textContent == EMPTY_HEART){
    btn.classList.add('activated-heart');
    btn.textContent = FULL_HEART; 
  } else {
    btn.textContent = EMPTY_HEART;
    btn.classList.remove('activated-heart');
  }
}

function serverCall(btn){
  
  mimicServerCall()
  .then()
  .then(function(){
    likeUnlike(btn);
  })
  .catch(function(error) {
    
    let errorModal = document.querySelector("div#modal");
    errorModal.querySelector('p').textContent = error;
    errorModal.removeAttribute("hidden");
    setTimeout(() => errorModal.hidden = true, 5000);
    
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
