function middleHeight() {
  nav = 88
  // console.log("nav = " + nav);
  footer = document.getElementById("footer").clientHeight;
  // console.log("footer = " + footer);
  middle = window.innerHeight;
  // console.log("middle = " + middle);
  minH = middle - nav - footer
  resizeHeight = document.getElementById("middle").style.minHeight;
  document.getElementById("middle").style.minHeight = minH + "px";
  // console.log("minH = " + minH);
}
middleHeight();

var w = document.querySelector("#width"),
		h = document.querySelector("#height"),
    c = document.querySelector("#calls"),
    timeout = false, // holder for timeout id
    delay = 250, // delay after event is "complete" to run callback
    calls = 0;

// window.resize callback function
// function getDimensions() {
//   // w.innerHTML = window.innerWidth;
//   // h.innerHTML = window.innerHeight;
//   // calls += 1;
//   // c.innerHTML = calls;
//   // console.log(window.innerHeight);
//   // console.log("minH = " + minH);
// }

// window.resize event listener
window.addEventListener('resize', function() {
	// clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(middleHeight, delay);
});

// getDimensions();