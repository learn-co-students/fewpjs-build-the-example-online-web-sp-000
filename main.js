// Defining text characters for the empty and full hearts for you to use later.
//  document.addEventListener('DOMContentLoaded', function() {
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hiddemModal = document.getElementById("modal")
const body = document.querySelector('body')
hiddemModal.className = "hidden"
hiddemModal 
  function modalClassName(){
    hiddemModal.className = "hidden"
  }

function mimicServerError(){
  mimicServerCall()
  .then((responce)=>{
   modalClassName()
    return responce
  })
  .catch(function(error) {
    hiddemModal.className = '' 
    setTimeout(modalClassName,5000) 
  
  })
}
 body.addEventListener("click",function(e){

  if(e.target.className === "like-glyph" && modal.className === "hidden"){
      e.target.className = "activated-heart"
      e.target.textContent = FULL_HEART
  }else if(e.target.className === "activated-heart" && modal.className === "hidden"){
    e.target.className = "like-glyph"
    e.target.textContent = EMPTY_HEART 
  }
 })
  mimicServerError()

 

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

// }
// )