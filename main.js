// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modalDiv = document.getElementById("modal")
const modalP = document.getElementById("modal-message")

// Your JavaScript code goes here!

// condition ? exprIfTrue : exprIfFalse
//    ^
//  empty?
//when user clicks on empty heart
/*
const withTernary = ({
  conditionA, conditionB
}) => (
  (!conditionA)
    ? valueC
    : (conditionB)
    ? valueA
    : valueB
);


if empty heart => 
        1.invoke mimicServerCall
        2.when call fails
          a. .catch
          b. remove hidden on error modal
          c. display err msg
          d.setTimeout to hide modal after 5 seconds (add hidden class)
        3.when call is success
          a.change to full heart
          event.target.classList.add("activated-heart")
          b. activate class
  if full heart => 
        1.change to empty
        event.target.classList.remove("activated-heart")
        2.remove .activated-heart class
        */  

//get hearts and attach e listener

document.addEventListener('DOMContentLoaded', () => {
  attachClickToLinks();
});

function attachClickToLinks() {
  let likeHearts = document.querySelectorAll('li span')
    likeHearts.forEach(heart => {
      heart.addEventListener('click', ternItUp)
    })
}
//full or empty? 
function ternItUp(event) {
  (event.target.innerText == EMPTY_HEART) 
  ? (
    itIsEmpty(event),
    console.log("the heart was empty")  
    )
  : (
    itIsFull(event),
    console.log("the heart was full")
    )
}

function itIsEmpty(event) {
  mimicServerCall()
  .then(resp => (console.log(resp)))
  .then(
    event.target.innerText = FULL_HEART,
    event.target.classList.add("activated-heart")
    )
  .catch(function(error) {
    modalDiv.classList.remove("hidden")
    modalP.innerText += `${error.message}`
    setTimeout(function() { modalDiv.classList.add("hidden"); }, 5000)
  })
}
function itIsFull(event) {
  mimicServerCall()
  .then(resp => (console.log(resp)))
  .then(
    event.target.innerText = EMPTY_HEART,
    event.target.classList.remove("activated-heart")
    )
  .catch(function(error) {
    modalDiv.classList.remove("hidden")
    modalP.innerText += `${error.message}`
    setTimeout(function() { modalDiv.classList.add("hidden"); }, 5000)
  })
}
// function activate(event) {
// }

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
