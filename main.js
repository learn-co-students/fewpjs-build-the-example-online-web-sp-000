// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeButton = document.querySelectorAll('.like');
for(let i=0;i<likeButton.length;i++){
  likeButton[i].addEventListener('click', likeCallback );
}


function likeCallback(evt){
  let heart = evt.target;
  mimicServerCall("bogusUrl")
  .then(function(serverMessage){
    if (heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.style.color = "red";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.style.color = "";
    }
  })
  .catch(function(error){
    alert("Error");
  })
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
