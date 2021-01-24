const likesElements = document.getElementsByClassName('like')

for (const likeButton of likesElements) {
  likeButton.addEventListener("click", e => {
    const heart = likeButton.querySelector(".like-glyph")
    const currentHeart = heart.innerText

    // const postId = likeButton.closest(".media-post").id
    // we would usually send the postId to the sever call func so we know which one to update
    // but because we are "mimicing" we just do it in the .then of this function 
    // aka promise resolve
    mimicServerCall().then(res => {
      if (currentHeart == EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.setAttribute("class", "like-glyph activated-heart")
      } else {
        heart.innerText = EMPTY_HEART
        heart.removeAttribute("activated-heart");
      }
    }).catch(err => displayError(err))
  })
}

function displayError(err) {
  console.error(err)
  document.getElementById("modal").removeAttribute("hidden");
  setTimeout(() => document.getElementById("modal").setAttribute("class", "hidden"), 2000)
}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  })
}