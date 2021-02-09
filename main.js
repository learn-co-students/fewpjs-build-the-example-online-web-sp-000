//3 pillars:
// manip the dom
// eventlistener: react to user actions
// comm to server


// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartToggler = {
  "♡": '♥',
  "♥": '♡'
}


// Your JavaScript code goes here!

let heartButtons = function() {
  return document.querySelectorAll("li.like")
};

for (const button of heartButtons()  ) {
  //if u use for..in, strange things happens. the nodes suddenly are not obects but 1 string...
  button.addEventListener("click", function(event) { processLike(button) } )
};

function processLike(button) {
  const heartIcon = button.querySelector("span");
  mimicServerCall().
  then( function(response) {
    //it's a string. cuz its fake. so i dont need to convert
    return response}).
  then( function(json) {
    //works for both like and unlike
    heartIcon.classList.toggle('activated-heart');
    heartIcon.innerText = heartToggler[heartIcon.innerText];
  } ).
  catch( function(errormessage) { 
    displayError(errormessage)
    setTimeout( function() { 
      errorModal = document.getElementById("modal");
      errorModal.classList.add("hidden"); 
    }, 5000)
  })

};



function displayError(errormessage) {
  errorModal = document.getElementById("modal");
  errorModal.classList.remove("hidden"); 
  errorMessageElement = document.getElementById("modal-message");
  errorMessageElement.innerText = errormessage;

};

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



