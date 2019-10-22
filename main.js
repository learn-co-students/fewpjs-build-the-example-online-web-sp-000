// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const resolvedLike = result => {
  console.log( result )
  let target = config.target

  if ( target.textContent == EMPTY_HEART ) {
    target.textContent = FULL_HEART
    target.className = 'activated-heart'
  } else {
    target.textContent = EMPTY_HEART
    target.className = ''
  }
}

const errorLike = error => {
  console.log( error )
  let modal = document.getElementById( 'modal' )
  modal.className = ''
  modal.textContent = error
  setTimeout(() => { modal.className = 'hidden' }, 5000);
}

const activateHeart = event => {
  mimicServerCall( config = { target: event.target })
      .then(
        resolvedLike,
        errorLike
      )
}

document.addEventListener( 'DOMContentLoaded', event => {
  let posts = document.getElementsByClassName( 'media-post' )
  for ( let post of posts ) {
    post.querySelector ( '.like-glyph' )
      .addEventListener( 'click', activateHeart)
  }

})



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
