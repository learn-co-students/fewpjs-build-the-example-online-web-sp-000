// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let liList = document.querySelectorAll('article ul li')
for (const li of liList){
   li.setAttribute("onclick", "changeHeart(this)")
}
function changeHeart(li){
  let span = li.childNodes[1]
  if (span.className=="activated-heart"){
    span.innerText = EMPTY_HEART
    span.setAttribute("class", "like-glyph")
    mimicServerCall()
    debugger
  }else{
    span.innerText = FULL_HEART
    span.setAttribute("class", "activated-heart")
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
