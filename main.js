// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  let errorModal = document.querySelector("#modal");
  document.querySelectorAll(".like-glyph").forEach(item => {
    item.addEventListener("click", event => {
      modalHandling(event)
    })
  })
}) //end of dom content loaded listener
//when someone clicks a heart, modal appears and set ti "Recognizing events"
//when someone clicks heart, invoke mimicServerCall



function modalHandling(event) { //if server returns error, show modal
  mimicServerCall("url")
  .then(function(response){
    console.log(response);
    heartColorization(event);
  })
  .catch(function(error) {
    alert(`${error}`);
    console.log(error)
    document.querySelector("#modal").hidden = false;
    document.querySelector("#modal").className = ""
    document.querySelector("#modal-message").textContent = error;
    hideModal()
  })
}

function hideModal() {
  setTimeout(function(){document.querySelector("#modal").hidden = true}, 5000);
}

function heartColorization(event) {
  let heart = event.target
    if(heart.className == "like-glyph") { //heart is class activated-heart set class to like-glyph
        heart.className = "activated-heart"
    }
    else {
      heart.className = "like-glyph"
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
