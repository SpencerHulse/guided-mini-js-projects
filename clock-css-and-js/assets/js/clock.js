const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const digitalTime = document.querySelector(".digital-time");

let setDate = () => {
  //gets the current date/time
  const now = new Date();
  //gets the current seconds every second due to interval
  const seconds = now.getSeconds();
  /* converts the seconds to the degree for rotation
  the + 90 offsets the initial 90 degree rotation in css */
  const secondsDegrees = (seconds / 60) * 360 + 90;
  /* adding a no-transition class to override the transition and avoid a bug when deg rolls over
  doing it inline would not work since it would not properly override */
  if (secondsDegrees == 90) {
    secondHand.classList.add("no-transition");
  } else {
    secondHand.classList.remove("no-transition");
  }
  //applies the transform using the current second and degree
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  if (secondsDegrees == 90) {
    minuteHand.classList.add("no-transition");
  } else {
    minuteHand.classList.remove("no-transition");
  }

  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  //12 instead of 60 due to only having 12 hours
  const hoursDegrees = (hours / 12) * 360 + 90;

  if (secondsDegrees == 90) {
    hourHand.classList.add("no-transition");
  } else {
    hourHand.classList.remove("no-transition");
  }

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};
//set immediately to prevent the hands from being stationary upon first load
setDate();
//updates every second after initial load
setInterval(setDate, 1000);
