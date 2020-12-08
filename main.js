// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let modal= document.querySelector("#modal")
modal.classList.add("hidden")

document.addEventListener("DOMContentLoaded",()=>{
  document.addEventListener('click', (e) =>{
    mimicServerCall()
      .then(resp => hitTheLikeButton(e))
      .catch(error=> {
        changeModalMessage(error)
        modal.classList.remove("hidden");
        setTimeout(function(){
          modal.classList.add("hidden")}, 5000);
        console.log(error);
      });
  });
});

function changeModalMessage(resp){
  let modalMessage = document.querySelector('#modal-message')
  modalMessage.innerHTML = resp;
  setTimeout(function(){
    modalMessage.innerHTML = ""}, 5000);
};

function hitTheLikeButton(e){
  let liked = e.target
  if (liked.innerHTML === EMPTY_HEART) {
    liked.classList.remove("like-glyph");
    liked.classList.add("activated-heart");
    liked.innerHTML = FULL_HEART;
  } else if (liked.innerHTML === FULL_HEART){
    liked.classList.remove("activated-heart");
    liked.classList.add("like-glyph");
    liked.innerHTML = EMPTY_HEART;
  };
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
