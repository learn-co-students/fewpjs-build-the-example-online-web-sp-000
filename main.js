// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  console.log("The DOM has loaded");

  if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
  }
  else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
  }
  
});


function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;
  console.log("handleClick")
  console.log(element.nodeName);
  // Climb up the document tree from the target of the event
  while (element) {
      if (element.nodeName === "SPAN" && (/like-glyph/.test(element.className) || /activated-heart/.test(element.className))) {
          // The user clicked on a <button> or clicked on an element inside a <button>
          // with a class name called "foo"
          updateLike(element);
          break;
      }
      element = element.parentNode;
  }
}

function updateLike(element){
  return mimicServerCall()
          .then(function(serverMessage) {
            console.log("this is what was returned")
            toggleHeart(element);
          })
          .catch(function(error) {
            console.log("error returned");
            displayError(error);
          });
};

function displayError(error){
  let errorPanel = document.getElementById("modal");
  let errorMessage = document.getElementById("modal-message");
  errorMessage.innerHTML = error;
  errorPanel.className = "";
  setTimeout(function(){
    errorPanel.className = "hidden"
  }
    ,5000);  
}

 function toggleHeart(element){
  switch (element.className){
    case "like-glyph":
      element.className = "activated-heart";
      break;
    case "activated-heart":
      element.className = "like-glyph";  
      break;
   }
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
