// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heatb = document.getElementsByClassName("like-glyph")
for(const h of heatb){
  h.addEventListener("click", e=>{
   let morehearts = e.target
   console.log(morehearts)
   mimicServerCall(url="http://mimicServer.example.com")
   .then(function(){
    if (morehearts.innerText==EMPTY_HEART)
    morehearts.innerText=FULL_HEART
    else 
    morehearts.innerText=EMPTY_HEART
   })
   .catch(function(){
    document.getElementById("modal")
   }) 
  })
}   

//if (morehearts.innerText==EMPTY_HEART)
  //morehearts.innerText=FULL_HEART


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
