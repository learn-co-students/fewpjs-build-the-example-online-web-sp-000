// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal')
  const likes = document.getElementsByClassName('like-glyph')

  likePost(likes);
})

const likePost = (likes) => {
  for (const like of likes) {
    like.addEventListener("click", (e) => {
      mimicServerCall()
      .then(() => {
          if (like.innerHTML == EMPTY_HEART){
            like.innerHTML = FULL_HEART
            like.className = "activated-heart"
          } 
          else {
            like.innerHTML = EMPTY_HEART
            like.className = "like-glyph"
          }
      })
      .catch (error => {
        modal.hidden = false
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
        modal.hidden = true
        }, 100)
      })
    })
  }
}

//     for (let like of likes) {
//         like.addEventListener('click', function(e) {
//             mimicServerCall().then(function(obj) {
//                 toggleHeart(e)
//             })
//             .catch(function(error) {
//                 modal.classList = ""
//                 modal.querySelector('modal-message').innerText = error
//                 setTimeout(function() {modal.className = 'hidden'}, 5000);
//             })
//         })
//     }

//     function toggleHeart(e) {
//         if (e.target.innerHTML === EMPTY_HEART) {
//             e.target.innerHTML = FULL_HEART
//             e.target.className = 'like-glyph activated-heart'
//         } else {
//             e.target.innerHTML === FULL_HEART
//             e.target.className = 'like-glyph'
//         }
//     }

// })




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