// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeContainer = document.querySelector('li')
const allHearts = document.querySelectorAll('.like')

// adds an event listenr to every li with a .like tag
for (const element of allHearts) {
  element.addEventListener('click', like)
}

// Your JavaScript code goes here!Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads

//When a user clicks on an empty heart:
function like(e) {
  if (e.target.innerText === EMPTY_HEART) { // evaluates the target the event was called on to see if the Heart is Empty
    mimicServerCall() // calls the mimicServercall function no Json converting needed
    .then(() => { // Here i can manipulate the Dom 
      e.target.innerText = FULL_HEART; //update the like-glyph to refelct being liked.
      e.target.classList.toggle('activated-heart');  // toggles the attribute 'activated-heart for the event target
    })
    .catch(err => { // handles errors 
      modal.classList.toggle('hidden'); // hides the Modal class
      message.innerText = err; //sets the message text = err
      setTimeout(() => modal.classList.toggle('hidden'), 5000); //waits 5 ms before setting the modal class to hidden
    })
  }
  if (e.target.innerText === FULL_HEART) { // if the heart has already been liked
    e.target.innerText = EMPTY_HEART; // set the liked heart ot eh Empty heart glyph
    e.target.classList.toggle('activated-heart'); // toggles the attribute 'activated-heart for the event target
  }
}





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
