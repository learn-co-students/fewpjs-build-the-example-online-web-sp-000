// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const allHeartGlyphs = document.querySelectorAll("span.like-glyph");

allHeartGlyphs.forEach((heartGlyph) =>
  heartGlyph.addEventListener("click", (e) => {
    initLike(e.target);
  })
);

function initLike(likeGlyph) {
  if (likeGlyph.innerText == FULL_HEART) {
    likeGlyph.innerText = EMPTY_HEART;
    likeGlyph.classList.remove("activated-heart");
  } else {
    mimicServerCall()
      .then(() => {
        likeGlyph.innerText = FULL_HEART;
        likeGlyph.classList.add("activated-heart");
      })
      .catch(() => {
        const errorModal = document.getElementById("modal");
        errorModal.classList.remove("hidden");

        setTimeout(function () {
          errorModal.classList.add("hidden");
        }, 5000);
      });
  }
}

function findParentArticle(element, ParentClassName) {
  while (element.className != ParentClassName) {
    element = element.parentElement;
  }
  return element;
}

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
