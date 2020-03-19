// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeHearts = document.getElementsByClassName("like")


for(var i=0; i<likeHearts.length;i++){
  likeHearts[i].addEventListener("click", like)
}

function like(event) {
  const heart = event.target
  mimicServerCall("fakeURL") // funcion mimicServerCall mimics making a server request
  .then(resp => {
    if(heart.innerHTML === EMPTY_HEART) { //if heart unliked
      heart.innerHTML = FULL_HEART //change to liked
      heart.classList.add("activated-heart") //add .activated-heart class
    } else if(heart.innerHTML === FULL_HEART) { //if heart liked
      heart.innerHTML = EMPTY_HEART //change to unliked
      heart.classList.remove("activated-heart") //remove .activated_heart class
    }
  })
  .catch((error) => {
    console.error('Error:', error); 
    document.getElementById("modal").className = ""
    //how to test this???
    //use setTimeout???
  }) 
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
