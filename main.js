// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let errorsHidden = true

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  hideErrors()
  document.querySelectorAll('.like').forEach(like => {
    like.addEventListener('click', e => {
      mimicServerCall()
        .then(r => {
          const heart = like.querySelector('span')
          if (heart.classList.length < 2) {
            addLike(heart)
          } else {
            removeLike(heart)
          }
        })
        .catch(err => {
          errorsHidden = false
          hideErrors()
          document.getElementById('modal-message').innerHTML = err
          setTimeout(() => {
            errorsHidden = true
            hideErrors()
          }, 5000)
        })
    })
  })
})

const addLike = heart => {
  errorsHidden = true
  hideErrors()
  heart.innerHTML = FULL_HEART
  heart.className = 'like-glyph activated-heart'
}

const removeLike = heart => {
  errorsHidden = true
  hideErrors()
  heart.innerHTML = EMPTY_HEART
  heart.className = 'like-glyph'
}

const hideErrors = () => {
  const modal = document.getElementById('modal')
  if (errorsHidden) {
    modal.className = 'hidden'
  } else {
    modal.className = ''
  }
}

// ------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
// ------------------------------------------------------------------------------

function mimicServerCall (url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject('Random server error. Try again.')
      } else {
        resolve('Pretend remote server notified of action!')
      }
    }, 300)
  })
}
