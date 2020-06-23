// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll(".like-glyph") // Grab the /span found within the li 'like' element

heart.forEach( h => { // For every one of these spans, we will have an event listener that runs a function when clicked
  h.addEventListener("click", userLiked)
})

function userLiked(event){
  let target = event.target // Create a variable equal to the target of which the event is referencing
  mimicServerCall("www.google.com")
  .then(message =>{
    target.classList.add("activated-heart") // We add our target to the appropriate class
    target.textContent = FULL_HEART // We change the text to equal a full heart, indicating the user has clicked to like it
    target.removeEventListener("click", userLiked) // We remove our original event listener...
    target.addEventListener("click", userUnliked) // ...and replace it with another even listener that undoes the like
  })
  .catch(error => { 
    const errorModal = document.getElementById("modal")
    errorModal.classList.remove("hidden")
    const p = document.createElement("p")
    const errorMessage = document.createTextNode(error)
    p.appendChild(errorMessage)
    errorModal.appendChild(p)
    setTimeout(function(){ errorModal.classList.add("hidden")}, 5000)
  }) 
}

function userUnliked(event){ // This essentially does the same thing that our 'userLike' function does, but inversed
  let target = event.target
  target.classList.remove("activated-heart")
  target.textContent = EMPTY_HEART
  target.removeEventListener("click", userUnliked)
  target.addEventListener("click", userLiked)
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
