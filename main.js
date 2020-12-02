// Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  //on click of heart fills in the heart
  let articleHearts = document.querySelectorAll(".like");

  function like(e){
    let heart = e.target;

    mimicServerCall()
    .then(function(serverMessage){
      alert("You notified the server!");
       alert(serverMessage);
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      let div = document.querySelector("#modal");
      let errormessage = document.querySelector("#modal-message");
      div.removeClass("hidden");
      errormessage.innerText = error.message;
      div.setTimeout(funtion(error), 5000);
    });
   
  } 
  for (let glyph of articleHearts) {
    glyph.addEventListener("click", like);

  }

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
