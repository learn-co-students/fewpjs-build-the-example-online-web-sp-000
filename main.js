// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


//attach listen event to like
let likes = document.querySelectorAll(".like-glyph")
for (const like of likes) {
    like.addEventListener("click", (event) => {
        mimicServerCall()
            .then(function(response) {
                likeUnlike(like)
            })
            .catch(function(response) {
                m = document.querySelector("#modal")
                setTimeout(function() { m.classList.add("hidden") }, 5000);
                m.classList.remove("hidden")
                message = document.querySelector("#modal-message")
                message.innerText = response;

            })

    })

}

function likeUnlike(like) {
    if (like.innerText == EMPTY_HEART) {
        like.innerText = FULL_HEART
        like.classList.add("activated-heart")
    } else if (like.innerText == FULL_HEART) {
        like.innerText = EMPTY_HEART
        like.classList.remove("activated-heart")
    }
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