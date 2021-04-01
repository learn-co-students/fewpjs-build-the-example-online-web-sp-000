// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let like_btn = document.getElementsByClassName("like-glyph")
let modal = document.getElementById("modal")

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {

  for (let i = 0; i < like_btn.length - 1; i++){
    let button = like_btn[i]
    button.addEventListener("click", () => {
      mimicServerCall().then(resp => {
        console.log(resp)
        if (button.innerHTML.includes('♡')){
          button.innerHTML = '♥'
        }
        else{
          button.innerHTML = '♡'
        }
      }).catch(resp => {
          console.log(resp)
          error = document.getElementById("modal-message")
          error.innerHTML = resp
          modal.hidden = false
          let errorTimeout = window.setTimeout(function(){ modal.hidden = true}, 3000) 
      })
  })
  }
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } 
      else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}