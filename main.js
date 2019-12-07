// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeStatus = {
  '♡':'♥',
  '♥':'♡'
}

let color = {
  'red':'',
  '':'red'
}

let likes = document.querySelectorAll('.like')

function cb(event){
  let like = event.target
  mimicServerCall('blahdotcom')
    .then( function(serverMessage){
      like.innerText = likeStatus[like.innerText]
      like.style.color = color[like.style.color]
    })
    .catch(error => document.getElementById('modal').className = '')
}

for (let glyph of likes){
  glyph.addEventListener('click', cb)
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
