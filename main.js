// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMsg = document.getElementById("modal");

const likeBtns = document.querySelectorAll('.like-glyph')
  .forEach(input => input.addEventListener('click', function(e){  
  e.preventDefault();
  let heart = e.path[0]
  if (heart.innerText === FULL_HEART) {
    console.log("make empty")
    heart.innerText = EMPTY_HEART
    heart.classList.remove("activated-heart")
  }
  else {
    console.log("make full")
    response = mimicServerCall() 
      response.then(
        function(value) { 
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        },
        function(error) { 
          response.catch(function(error) {
            errorMsg.classList.remove("hidden");
            setTimeout(function(){errorMsg.classList.add("hidden")}, 3000); 
          }) 
        })  
  }
}))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
