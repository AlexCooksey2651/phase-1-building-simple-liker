// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtns = document.querySelectorAll('span.like-glyph')
likeBtns.forEach(heart => heart.addEventListener('click', liker))

function liker(event) {
  mimicServerCall()
  .then(()=> {
    if (event.target.innerText === EMPTY_HEART) {
      event.target.textContent = FULL_HEART
      event.target.classList.add('activated-heart')
    } else if (event.target.innerText === FULL_HEART) {
      event.target.textContent = EMPTY_HEART
      event.target.classList.remove('activated-heart')
    }
  })
  .catch((error)=> {
    const showErr = document.getElementById('modal')
    showErr.className = "show"
    const errorMessage = document.getElementById('modal-message')
    errorMessage.innerText = "Random server error. Try again."

    setTimeout(() => {
      showErr.className = "hidden"
    }, 3000)
  })
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
