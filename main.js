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
// Add the .hidden class to the error modal in the HTML 
// so it does not appear when the page first loads
let errorModal = document.querySelector("#modal");
errorModal.className = "hidden";

// Dom content loaded event
document.addEventListener("DOMContentLoaded", (event) => {
    // When a user clicks on an empty heart ("Recognizing events")
    // Invoke mimicServerCall to simulate making a server request
    let likes = document.querySelectorAll(".like");
    likes.forEach(like => {
        like.addEventListener("click", function(event) {
            let destUrl = "http://127.0.0.1:5500/index.html";
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
                .then(json => {
                    debugger;
                })
                .catch(error => {
                    // When the server returns a failure status
                    unhideErrorModal();
                    displayModalErrorMessage(error.message);
                    setTimeout(function() {
                        let errorModal = document.querySelector("#modal");
                        errorModal.className = "hidden";
                    }, "5000")
                })
        })
    });

});

const unhideErrorModal = () => {
    let errorModal = document.getElementById("modal");
    errorModal.classList.remove("hidden");
}

const displayModalErrorMessage = (msg) => {
    let modalMsg = document.querySelector("#modal-message");
    modalMsg.innerText = msg;
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