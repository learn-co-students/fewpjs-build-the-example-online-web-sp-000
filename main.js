// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const changeOfHeart = {
  "♡": "♥",
  "♥": "♡"
};

function heartColor(heart) {

  if (heart.className == 'activated-heart') {
    heart.setAttribute('class', 'like-glyph');
  } else {

    heart.setAttribute('class', 'activated-heart');
  }

};

const unicodeHearts = document.querySelectorAll(".like-glyph");


document.querySelectorAll('.like-glyph').forEach(item => {
    item.addEventListener('click', likeEvent)
  })

function likeEvent(e) {
  console.log('test test test')
  let heart = e.target
  // heart.innerText = changeOfHeart[heart.innerText];
  // .activated-heart
  // heart.setAttribute('class', 'activated-heart');
  // heartColor(heart);

  mimicServerCall("www.fake.com")
  //OR: mimicServerCall("bogusUrl", {forceFailure: true})
   .then(function(serverMessage){
    heart.innerText = changeOfHeart[heart.innerText];
    heartColor(heart);
   })
   .catch(function(error) {
    const modal = document.getElementById("modal");
    modal.className = "";
    modal.innerText = error;
    setTimeout(() =>  modal.className = "hidden", 3000);
  });
}


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
