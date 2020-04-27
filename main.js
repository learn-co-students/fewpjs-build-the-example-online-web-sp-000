// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function addHidden() {
 let alert = document.querySelector("#modal");
 alert.classList.add("hidden") 
}

let hearts = document.querySelectorAll(".like-glyph")
for (heart of hearts) {
  heart.addEventListener("click", mimicServerCall)
}

function mimicServerCall(e) {
  let isRandomFailure = Math.random() < .2
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      liked: true 
    })
  }
  
  if (isRandomFailure) {
    return fetch("http://mimicServer.example.com/posts", configObj)
      .then(resp => resp.json())
      .then(json => function(object) {
        execute
      })
      .catch(function(error) {
        let alert = document.querySelector(".hidden")
        alert.classList.remove("hidden")
      })
    } else {
      let alert = document.querySelector(".hidden")
      if (alert == null) {
        addHidden()
      }
      changeHeart(e)
    }
}

function execute() {
  console.log("THIS SHOULDN'T BE HERE")
}

function changeHeart(e) {
  console.log(e.target.textContent);
  let heart = e.target;

  if (heart.textContent == EMPTY_HEART) {
    heart.classList.add("activated-heart");
    heart.textContent = FULL_HEART;
  } else {
    heart.classList.remove("activated-heart");
    heart.textContent = EMPTY_HEART;
  }
}

addHidden()
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
