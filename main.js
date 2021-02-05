// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal');
modal.className = 'hidden';
const likes = document.getElementsByClassName('like');



function heartCallback(e) {
  let heart = e.target

  mimicServerCall()
  .then(res => {
    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart';
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  })
  .catch(function(err) {
    modal.classList.remove('hidden')
    const errorMsg = document.getElementById('modal-message');
    errorMsg.innerHTML = err;
    setTimeout(() => {modal.className = 'hidden'}, 5000);
  })
}

for (let like of likes) {
  like.addEventListener("click", heartCallback);
}






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
