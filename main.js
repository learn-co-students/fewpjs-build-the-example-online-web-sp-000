// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let modal_error = document.getElementById('modal');
let like_buttons = document.getElementsByClassName('like');

for(let i=0; i<like_buttons.length; i++){
  liked(like_buttons[i]);
}

function liked(item){
  item.addEventListener("click", function(){
    console.log('click',item);

    mimicServerCall()
    .then(data => {
      console.log('Success:', data);

      let a = item.getElementsByClassName('like-glyph')[0];
         if (a.innerHTML == EMPTY_HEART){
             fillHeart(a);
         } else if (a.innerHTML ==  FULL_HEART){
             emptyHeart(a)
         } else {
           console.log("something is wrong");
         }

    })
    .catch((error) => {
      console.error('Error is:', error);
      showError();
    });
  });
}

function hideError(){
  modal_error.classList.add('hidden');
}

function showError(){
  modal_error.classList.remove('hidden');
setTimeout(function(){hideError()}, 5000);
}

function fillHeart(a){
  a.textContent = FULL_HEART;
  a.classList.add('activated-heart');
}

function emptyHeart(a){
  a.textContent = EMPTY_HEART;
  a.classList.remove('activated-heart');
}


hideError();

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again, random rejected message has been called.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
