// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  // key:value
  "♡": "♥",
  // we use this javascript object to determine its key: value pairs
  "♥": "♡"
  // key:value
};

let colorStates = {
// activated heart = red
  "green" : "",
  "": "green"
};


// Your JavaScript code goes here!

  console.log("Hello")

  let like = document.querySelectorAll(".like")
  // any html that has class like we grab them
  console.log(like)


  like.forEach(e=> e.addEventListener("click", server ) )
  // iterating throughout the array of likes with forEach method
   // applying addEventListener on the elements

  function server(e) {
    let spanLike = e.target
      // spanLike = heart symbol

    mimicServerCall()
    // promise call
      .then((resp) => {
        console.log("when I clicked the heart the value was already ",spanLike.innerText )
      spanLike.innerText = glyphStates[spanLike.innerText];
      console.log("after I clicked the heart the value is now ",spanLike.innerText )

      // we are setting the heart symbol to its opposite
      // heart    : no heart
      // no heart : heart
      // !true = false another way !

      spanLike.style.color = colorStates[spanLike.style.color];
      // if the color is red make it opposite

      // spanLike.innerText = FULL_HEART
      // spanLike.classList.add("activated-heart")
      // spanLike.classlist = EMPTY_HEART
      // cause the heart symnol to be filled

      })
      .catch((error) => {
      let modal =  document.querySelector("#modal")
      modal.className = ""
      // removing the hidden field on the modal class
      modal.innerHTML += error
      // the innerHTML of modal is switched to error message??
      setTimeout( function(){ modal.className = "hidden"}, 5000
      //  setTImeout function to hidden
      //

      )
      })




}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {

    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      console.log(isRandomFailure)
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
