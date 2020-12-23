// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const post = document.querySelectorAll(".media-post");

// likeButton.addEventListener('click', function(event) {
//     alert("Hello World!");
// });


// window.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
// });

window.addEventListener('click', (event) => {
  console.log('Nah still bound');
});

document.addEventListener("DOMContentLoaded", () => {
   const likeButton = document.querySelectorAll(".like-glpyh");

  likeButton.addEventListener('click', (e) => {
    console.log(`${e} Nah still bound`);
        console.log(`${e} Nah still bound`);
  }); 

  if(e.target.className === "like-glyph"){
    console.log(`Gretness`);
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
