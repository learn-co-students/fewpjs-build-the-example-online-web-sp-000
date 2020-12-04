// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
/*
  The three pillars:
    - Manipulating the DOM
    - Recognizing JavaScript events
    - Communicating with the server
*/
// Dom content loaded event
document.addEventListener("DOMContentLoaded", (event) => {
    // Add the .hidden class to the error modal in the HTML 
    // so it does not appear when the page first loads
    hideErrorModal();

    // When a user clicks on an empty heart ("Recognizing events")
    // Invoke mimicServerCall to simulate making a server request
    let likeGlyph = document.querySelector(".like-glyph");
    likeGlyph.addEventListener("click", function(event) {
        let destUrl = "/Users/jaycruz/Flatiron School Docs/fewpjs-build-the-example-online-web-sp-000/index.html";
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(event.target)
        };
        mimicServerCall(destUrl, configObj)
            .then(response => response.json())
            .catch(error => {
                unhideErrorModal();
                displayModalErrorMessage(error.message);
            })
    })
});

const hideErrorModal = () => {
    let errorModal = document.querySelector("#modal");
    errorModal.className = "hidden";
    errorModal.hidden = true;
}

const unhideErrorModal = () => {
    let errorModal = document.getElementById("modal");
    errorModal.classList.remove("hidden");
    errorModal.hidden = false;
}

const displayModalErrorMessage = (msg) => {
    let modalMsg = document.querySelector("#modal-message");
    modalMsg.innerHTML = msg;
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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