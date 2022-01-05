//the function that plays the sound when a key is clicked
function playSound(e) {
  /* audio is equal to the audio in the html with the corresponding data-key,
  which is found using jquery ${event.keyCode} to correspond to the key that is clicked */
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  /* key is equal to something with the class of key and the data-key corresponding to the key clicked,
  selects an element */
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stops the function from running if there is no corresponding audio data-key

  audio.currentTime = 0; //rewinds to the start, allowing you to play the audio again before it ends
  
  audio.play(); //plays the audio file that is selected with const audio and jquery

  /* also works with jquery key.addClass("playing")
  it will add the transition class of playing
  this is responsible, along with CSS for the yellow border animation on key press */
  key.classList.add("playing");
}

function removeTransition(e) {
  //the goal is to remove the transition after the longest transition is over, transform in this case
  if (e.propertyName !== "transform") return; //skip if it is not a transform

  //in this case, this is equal to the key (what is called against the event listener)
  this.classList.remove("playing"); //this will remove the class of playing, letting the animation reverse and return to the original
}

/* selects all keys on the page so they can be listened for
it gives an array of all elements with the key class */
const keys = document.querySelectorAll(".key");

/* gets each key in the keys array created before
this is required because you cannot listen to an entire array
this method allows you to iterate through them and attach the event listener */

/* each key gets the transitionend listener attached to it that runs a removeTransition function */
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//causes the function to run when a key is pressed down
window.addEventListener("keydown", playSound);