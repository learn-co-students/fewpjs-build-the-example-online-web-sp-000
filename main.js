// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded",()=>{
  const hearts = document.getElementsByClassName("like-glyph")
  const errorDiv = document.getElementById("modal")

  for(const heart of hearts){
    heart.addEventListener("click",activateHeart)}
    
    function activateHeart(e){
      mimicServerCall().then(resp=>{
        if (e.target.innerText == EMPTY_HEART){
          e.target.innerText = FULL_HEART
          e.target.classList.add("activated-heart")
        }else{
          e.target.innerText = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        }
      }).catch(error=>{
        const errorDiv = document.getElementById("modal")
        const errorMessage = document.getElementById("modal-message")
        errorDiv.classList.remove("hidden")
        errorMessage.innerText = error
        setTimeout(()=>errorDiv.classList.add("hidden"),5000)
      })
      
    
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
