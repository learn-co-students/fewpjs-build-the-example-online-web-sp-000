// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelector('div#modal').setAttribute('class', "hidden");

function toggleHeart(heart) {
  if (heart.querySelector('.like-glyph')) { heart = heart.querySelector('.like-glyph') }
  const reverseFill = {
    '♥': '♡',
    '♡': '♥'
  };
  const reverseColor = {
    'rgb(255, 0, 139)': '',
    '': 'rgb(255, 0, 139)'
  }

  heart.innerText = reverseFill[heart.innerText];
  heart.parentElement.style.color = reverseColor[heart.parentElement.style.color];
}

function likeClick(event) {
  mimicServerCall()
    .then((response) => {
      toggleHeart(event.target)
    })
    .catch((error) => {
      modal.removeAttribute('class');
      setTimeout( () => {
        modal.setAttribute('class', "hidden");
      }, 5000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  for (likeBtn of document.querySelectorAll('.like')) {
    likeBtn.addEventListener("click", likeClick);
  }
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
