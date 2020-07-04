# Specs

- [x] Add the `.hidden` class to the error modal in the HTML so it
  does not appear when the page first loads

## When a user clicks on an empty heart ("Recognizing events")

- [x] Invoke `mimicServerCall` to simulate making a server request
  - [x] `mimicServerCall` randomly fails to simulate faulty network conditions
  - [x] When the server returns a failure status
    - [x] Respond to the error using a `.catch(() => {})` block after your
        `.then(() => {})` block.
    - [x] Display the error modal by removing the `.hidden` class
    - [x] Display the server error message in the modal
    - [x] Use `setTimeout` to hide the modal after 5 seconds (add the `.hidden` class)
  - [x] When the server returns a success status
    - [x] Change the heart to a full heart
    - [x] Add the `.activated-heart` class to make the heart appear red

## When a user clicks on a full heart

- [x] Change the heart back to an empty heart
- [x] Remove the `.activated-heart` class
- [x] Keep all your styling rules entirely in `style.css`. Do not manipulate any `.style` properties.

Only manipulate the DOM once the server requests respond. Do not make the
heart full until you're inside a successful `.then` block.
