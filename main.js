// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// get all the heart elements (the spans)
queryHeartSpans = document.querySelectorAll(".like-glyph")

//for each heart element initialize it with an eventListener
queryHeartSpans.forEach(heartSpan => {
    heartSpan.addEventListener("click", likePost)
})

// if user likes a post
function likePost(e) {
    // send fetch to pretend server with pretend data
    mimicServerCall("www.google.com")
        .then(response => {
            span = e.target
            span.classList.add("activated-heart")
            span.textContent = FULL_HEART
            span.removeEventListener("click", likePost)
            span.addEventListener("click", unlikePost)
        })
        .catch(error => {
            const errorModal = document.getElementById("modal")
            errorModal.classList.remove("hidden")
            const modalMessageP = document.getElementById("modal-message")
            modalMessageP.innerText = error
            setTimeout(function () {
                errorModal.classList.add("hidden")}, 5000 )        
        })
}

function unlikePost(e) {
    span = e.target
    span.classList.remove("activated-heart")
    span.textContent = EMPTY_HEART
    span.removeEventListener("click", unlikePost)
    span.addEventListener("click", likePost)   
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
