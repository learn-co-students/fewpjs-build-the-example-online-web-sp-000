// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
	"♡": "♥",
	"♥": "♡"
}

let colorStates = {
	"red": "",
	"": "red"
}

let articleHearts = document.querySelectorAll(".like")

const handleLikePost = (e) => {
	const heart = e.target;
	mimicServerCall("bogusUrl")
		.then((serverMessage) => {
			console.log(serverMessage)
			heart.innerText = glyphStates[heart.innerText]
			heart.style.color = colorStates[heart.style.color]
		})
		.catch((error) => {
			console.error(error)
			document.getElementById("modal").className = ""
		})
}

for (let glyph of articleHearts) {
	glyph.addEventListener("click", handleLikePost)
}

const mimicServerCall = (url = "http://mimicServer.example.com", config = {}) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < .2
			isRandomFailure ? reject("Random server error. Try again") : resolve("Pretend remote srver notifies of action!")
		}, 300)
	})
}
