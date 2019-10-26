// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let hearts = document.querySelectorAll(".like-glyph");

  for (const heart of hearts) {
    heart.addEventListener("click", e => {
      like(e);
    });
  }
});

const like = async event => {
  try {
    await mimicServerCall();
    if (event.target.classList.contains("activated-heart")) {
      event.target.classList.remove("activated-heart");
    } else {
      event.target.classList.add("activated-heart");
    }
  } catch (error) {
    const errorModal = document.getElementById("modal");
    errorModal.textContent = error;
    errorModal.classList.remove("hidden");
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 5000);
  }
};

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
