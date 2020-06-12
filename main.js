

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let hasError = false

// Your JavaScript code goes here!

function checkError() {
  const errorNode = document.querySelector('#modal')
  if (hasError) {
    errorNode.removeAttribute('class')
    const errorPNode = errorNode.querySelector('#modal-message');
    errorPNode.innerText = "Random Server Error"
  } else {
    errorNode.setAttribute('class', 'hidden')
  }
}

function changeHeart(heartNode) {
  mimicServerCall()
  .then(resp => {
    console.log(resp)
    if (resp == "Pretend remote server notified of action!") {
      hasError = false
      if (heartNode.innerText == EMPTY_HEART) {
        heartNode.innerText = FULL_HEART
        heartNode.setAttribute('class', 'activated-heart')
      } else {
        heartNode.innerText = EMPTY_HEART
        heartNode.removeAttribute('class')
      }
      checkError()
    }
  })
  .catch(error => {
    hasError = true
    checkError()
  })
}


document.addEventListener('DOMContentLoaded', (event) => {
  checkError()
  
  const heartNodes = document.querySelectorAll('footer ul li span')
  for (const heart of heartNodes) {
    heart.addEventListener('click', (e) => {
      changeHeart(heart)
    })
  }
})
checkError()

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
