// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll(".like")

for (buttonEl of likeButtons) {
  buttonEl.addEventListener("click", mimicServerCall)
}

function mimicServerCall() {
  let likeButtonEl = event.target;

  let promise = new Promise((resolve, reject) => {
    let randomNumber = Math.random();

    setTimeout(() => {
      if(randomNumber < 0.6) {
        resolve("All things went well!")
      } else {
        reject("Ooops! something went wrong!")
      }
    } , 2000)
  })

  
  promise.then(response => changeHeart(likeButtonEl)) 
    .catch(error => console.log(error)) 
}

function changeHeart(element) {
  if (element.innerHTML === EMPTY_HEART){
    element.innerHTML = FULL_HEART
  } else if (element.innerHTML === FULL_HEART) {
    element.innerHTML = EMPTY_HEART
  }
}

function displayError(error) {
  //this gets called indeed!
  // the below works to display the error message if the promise is rejected (remember the catch)
  // now what needs to be done is to get rid of the error message after 5 seconds.
  //it works!!!!!!! 
  let errorSpot = document.getElementById("modal");
  let errorMessageSpot = document.getElementById("modal-message");

  errorSpot.className = "";
  errorMessageSpot.innerHTML = error;

  setTimeout(function() {
    errorSpot.className = "hidden"
  }, 500)
} 

function heartComment(resultat) { 
  console.log("im in heartComment");
  console.log(resultat);
};



// calling event.target in mimicServerCall() will work. 
//you can refer to the element and change its contents. 

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }


// so what do we want for the like button?

// each button is fitted with an event listener.