// selects all of the inputs inside the div with the controls class
const inputs = document.querySelectorAll(".controls input");

/* using querySelectorAll returns a nodelist
it is limited compared to an array and might
need to be converted in some cases */

//the function launched on change
function handleUpdate() {
  //dataset is an object that contains all of the data attributes of a specific element
  //the or "" is used here for the colorpicker, which does not have a data attribute
  const suffix = this.dataset.sizing || "";

  //this sets the property of style on an element on the document
  //the backticks `` allow jQuery searching, which targets this.name (check HTML)
  //it is them given the value of this.value (the changes)
  //however, it then needs the suffix to be added on to add on px for padding and blur
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

//forEach is one of the methods available for nodelists
/* the following adds an event handler to each input on change
but this only causes it to launch when the slider is released */
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
//using mousemove will trigger it gradually on the sliders
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
