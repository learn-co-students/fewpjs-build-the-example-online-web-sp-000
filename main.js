// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts  = document.querySelectorAll(".like-glyph");
  for (let i = 0; i < likeHearts.length; i++) {
    likeHearts[i].addEventListener("click", function(){
      if (likeHearts[i].innerHTML == EMPTY_HEART){
        mimicServerCall()
        .then(resp => {
          likeHearts[i].innerHTML = FULL_HEART;
          likeHearts[i].className = "activated-heart";
        })
        .catch(function(error){
          displayError(error);
        });
      } else {
        likeHearts[i].innerHTML = EMPTY_HEART;
        likeHearts[i].removeAttribute("class", "activated-heart");
      }
    });
}

function displayError(errorText){
  document.getElementById('modal').className = '';
  document.getElementById('modal-message').innerHTML = errorText;
  setTimeout(hideErrorModal, 5000);
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
