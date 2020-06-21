


// When the server returns a success status
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red

// When a user clicks on a full heart
// Change the heart back to an empty heart
// Remove the .activated-heart class




// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll(".like-glyph")

likes.forEach( like =>{
    like.addEventListener("click", eventLiked)
})

function eventLiked(e){
  console.log("Liked" + e.target)
  let target = e.target
  mimicServerCall("www.google.com")
  .then( message =>{
    console.log(`sucess: ${message}`)
    target.classList.add("activated-heart")
    target.textContent = FULL_HEART
    target.removeEventListener("click", eventLiked)
    target.addEventListener("click", eventUnliked)
  })
  .catch(error => {
    console.log(`failure: ${error}`)
    const errorModal = document.getElementById("modal")
    errorModal.classList.remove("hidden")
    const errorMessage = document.createElement("p")
    const errorMessageText = document.createTextNode(error)
    errorMessage.appendChild(errorMessageText)
    errorModal.appendChild(errorMessage)
    setTimeout(function(){ errorModal.classList.add("hidden")}, 5000)
  })
}

function eventUnliked(e){
  console.log("Unliked" + e.target)
  let target = e.target
  target.textContent = EMPTY_HEART
  target.classList.remove("activated-heart")
  target.removeEventListener("click", eventUnliked, false)
  target.addEventListener("click", eventLiked)
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}, event) {
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
