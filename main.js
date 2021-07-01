// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.className = 'hidden';
const modalMsg = document.getElementById('modal-message')

const hearts = document.querySelectorAll(".like-glyph"); //NodeList

for (let heart of hearts) {
  heart.addEventListener("click", toggleHeart);
}

function toggleHeart(e) {
  // stimulate making a server req - random fails to simulate faulty network conditions
  console.log(`${e.target.innerHTML} clicked`);
  let heart = e.target
  mimicServerCall()
    .then(function(serverMessage) {
      alert(serverMessage);
      if (heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add('.activated-heart');
      } else {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('.activated-heart');
      }
      
    })
    .catch((error) => {
      // when sth is wrong in a fetch, the next catch() is called so that error work can be performed
      // so JS won't fail silently
      // Display the server error message in the modal
      // alert(error);
      modal.classList.remove('hidden')
      modalMsg.innerHTML += error
      setTimeout(()=> modal.className = 'hidden', 5000);
    })  
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