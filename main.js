// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal')

// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
function hideError() {
  modal.classList.add("hidden")
};

function showError() {
  modal.classList.remove("hidden")
}

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
hideError();

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', (event) => {

  document.addEventListener("click", function (event) {
    const likeStatus = event.srcElement.innerText
    if (event.target.classList.contains('like-glyph')) {
      // When a user clicks on an empty heart ("Recognizing events")
      // Invoke mimicServerCall to simulate making a server request
      // mimicServerCall randomly fails to simulate faulty network conditions
      // When the server returns a success status
      // Change the heart to a full heart
      // Add the .activated-heart class to make the heart appear red
      // When a user clicks on a full heart
      // Change the heart back to an empty heart
      // Remove the .activated-heart class
      // Only manipulate the DOM once the server requests respond. Do not make the heart full until you're inside a successful .then block.
    }

    mimicServerCall()
    .then( () => {
        event.srcElement.innerText = event.srcElement.innerText == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
      })
    .catch( () => {
      // When the server returns a failure status
      // Respond to the error using a .catch(() => {}) block after your .then(() =>{}) block.
      // Display the error modal by removing the .hidden class
      // Display the server error message in the modal
      // Use setTimeout to hide the modal after 5 seconds (add the .hidden class){
        let errorMessage = document.createElement('p')
        errorMessage.innerText = "Random server error. Try Again."
        modal.appendChild(errorMessage);
        showError();
        setTimeout(()=> {hideError(); modal.removeChild(errorMessage)}, 5000);
      })

  })

});

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
