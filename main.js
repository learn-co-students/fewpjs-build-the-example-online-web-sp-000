// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
modal.className = 'hidden'
// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  addHeartsToComments()
})

function addHeartsToComments(){
  allLis = document.querySelectorAll('li')
  for (const li of allLis) {
    let heart = document.createElement('span')
    heart.id = Math.random().toString(36).substring(7)
    heart.className = 'like-glyph'
    heart.innerHTML = EMPTY_HEART
    li.appendChild(heart)
    heart.onclick = function(){
      mimicServerCall()
      .then(function(){
        myHeartDontPumpNoKoolAid(heart)
      })
      .catch(function(message) {
        handleMessage(message)
      })
    }
  }
}

function handleMessage(message){
  modal.firstElementChild.innerHTML = message
  modal.classList.remove("hidden")
  setTimeout(() =>{
    modal.className = 'hidden'
  }, 5000)
}

function myHeartDontPumpNoKoolAid(heart){
  if (heart.innerHTML === EMPTY_HEART){
    heart.innerHTML = FULL_HEART
    heart.className = "activated-heart"
  }else{
    heart.innerHTML = EMPTY_HEART
    modal.classList.remove("activated-heart")
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
