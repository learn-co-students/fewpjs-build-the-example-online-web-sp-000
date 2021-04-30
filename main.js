// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () =>{
createLikeButtonListener();
})

function createLikeButtonListener() {
let likeLisArray = document.querySelectorAll(".like");
likeLisArray.forEach(function(elem) {
  elem.addEventListener("click", (event) => { 
   if (elem.childNodes[1].className === "like-glyph") {
    createLikes(elem);
   } else if (elem.childNodes[1].className === "activated-heart") {
    unlikeHeart(elem);
   }
  });

});
}

// function unlikeHeartListener() { 
// fullHeartArray = document.getElementsByClassName("activated-heart")
// fullHeartArray.forEach(function(elem) { 
//   elem.addEventListener("click", (elem) => { 
//     unlikeHeart(elem)
//   })
// });
// }

function createLikes(elem) {
  let modalLi = document.getElementById("modal"); 
  mimicServerCall()
  .then(function(response) {
//logic for turning the hearts red. 
elem.childNodes[1].innerText = FULL_HEART;
elem.childNodes[1].className = "activated-heart"


// likeElement.innerText = FULL_HEART;
// likeElement.className = "activated-heart";


})

.catch((message) => {
  let modalLi = document.getElementById("modal");
  modalLi.removeAttribute("class");
  modalLi.innerText = message
   //use this so the message outputted by mimicServerCall will display? 
  setTimeout(function(){ modalLi.className = "hidden" }, 3000);

});
}

function unlikeHeart(elem) {
  console.log(elem);
  elem.childNodes[1].innerText =  EMPTY_HEART; 
  elem.childNodes[1].removeAttribute("class");
  elem.childNodes[1].className = "like-glyph"
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
