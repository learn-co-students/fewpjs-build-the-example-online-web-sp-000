// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(`.like-glyph`)
//if don't select all, will only add listener to first one
// Your JavaScript code goes here!
window.onload = () => {
  
  hearts.forEach(function(heart){
    heart.addEventListener('click', heartClick)
  })
}
function heartClick(event) { //be sure to pass in event
  mimicServerCall()
  //creating a new promise-when an async call is made, the promise is js taking note there will be some sort of reponse in the future
  //calling function mimicServerCall below that mimics failures sometimes
    .then(() => {
      if (event.target.innerText == EMPTY_HEART) {
        event.target.innerText = FULL_HEART
        //Add the .activated-heart class to make the heart appear red
        event.target.classList.add('activated-heart') //wasn't working b/c had . but classList already specifies is class
      } else {
        event.target.innerText = EMPTY_HEART
        //Remove the .activated-heart class
        event.target.classList.remove('activated-heart')
      }
    }).catch(response => {
      //Display the error modal by removing the .hidden class
      let hidden = document.getElementById('modal')
      hidden.classList.remove('hidden')
      //Display the server error message in the modal
      let message = document.getElementById("modal-message")
      message.innerText = response
      //Use setTimeout to hide the modal after 5 seconds (add the .hidden class)
      setTimeout(function(){
        hidden.classList.add('hidden')
      }, 5000);
      //test this works by clicking like button until get error
    })
}
/*
document.addEventListener("DOMContentLoaded", function() {
 let hidden = document.getElementById('modal')
  hidden.classList.add('hidden')

})
*/
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
