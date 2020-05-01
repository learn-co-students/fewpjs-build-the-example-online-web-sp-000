// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

let colorHeart = {
  red: "",
  "": "red",
};

const modal = document.querySelector("#modal");

function hideModalError() {
  modal.classList.add("hidden");
}

function showModalError() {
  modal.classList.remove("hidden");
}

hideModalError();

document.addEventListener("DOMContentLoaded", (event) => {
  document.addEventListener("click", function (event) {
    const likeStatus = event.target.innerText;
    let heart = event.target;
    if (event.target.classList.contains("like-glyph")) {
    }
    mimicServerCall()
      .then(() => {
        event.target.innerText =
          event.target.innerText == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
        heart.style.color = colorHeart[heart.style.color];
      })
      .catch(() => {
        let errorMessage = document.createElement("p");
        errorMessage.innerHTML =
          "You encountered a random server error. Please try again.";
        modal.appendChild(errorMessage);
        showModalError();
        setTimeout(() => {
          hideModalError();
          modal.removeChild(errorMessage);
        }, 5000);
      });
  });
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
