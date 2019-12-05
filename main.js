// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likes;
const errModal = document.getElementById("modal");

document.addEventListener("DOMContentLoaded", () =>{

  likes = document.getElementsByClassName("like")
  // adds Event Listener to each like <li>
  for (let i=0; i<likes.length; i++) {
    likes[i].addEventListener("click", () =>{
      let heart = likes[i].querySelector("span");
      //event listener does the following conditions below

      if (heart.innerHTML === EMPTY_HEART) {
        mimicServerCall()
          .then(response => {
            console.log(response)
            heart.innerHTML = FULL_HEART;
            heart.className = "activated-heart"
          })
          .catch(error =>{
            let errMessage = document.getElementById("modal-message")
            errMessage.innerText = error
            errModal.className = ""
            setTimeout( () =>{errModal.className = "hidden"}, 5000)
          })

      } else {
        heart.innerHTML = EMPTY_HEART;
        heart.className = "like-glyph"
      }
    })
  };
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
