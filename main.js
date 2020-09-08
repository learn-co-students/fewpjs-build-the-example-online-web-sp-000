// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
	const likeBtns = document.querySelectorAll(".like-glyph"),
	errorModal = document.querySelector("#modal");

	likeBtns.forEach(btn => { btn.addEventListener("click", (event) => {
		mimicServerCall()
		.then(function() {
			let heart = event.target
			if (heart.innerText === EMPTY_HEART) {
				heart.innerText = FULL_HEART;
				heart.classList.add("activated-heart");
			} else {
				heart.innerText = EMPTY_HEART;
				heart.classList.remove("activated-heart");
			}
		})
		.catch(function(error) {
			errorModal.classList.remove("hidden");
			document.getElementById("modal-message").innerText = error.message
			setTimeout(() => { errorModal.classList.add("hidden"); }, 5000)
		})
	})})
})




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
