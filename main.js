// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelector(".like");

let glyphStates = {
    "♡": "♥",
    "♥": "♡"
};

let colorStates = {
    "red": "",
    "": "red"
};

function toLike(e) {
    let like = e.target;  // .target returns the element that triggers the event

    mimicServerCall()
        .then(function(serverMessage){
            alert("You notified the server!");
            alert(serverMessage);
            like.textContent = glyphStates[like.textContent];
            like.style.color = colorStates[like.style.color];
        })
        .catch(function(error) {
            alert("Something went wrong!");
        });
}

// for (let glyph of likes) {
//     glyph.addEventListener("click", toLike());
// }

likeBtn.addEventListener('click', toLike());

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
