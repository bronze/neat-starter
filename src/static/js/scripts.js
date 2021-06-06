const env = document.querySelector('body').dataset.env;


function middleHeight() {
  nav = 88
  // console.log("nav = " + nav);
  footer = document.getElementById("footer").clientHeight;
  // console.log("footer = " + footer);
  middle = window.innerHeight;
  // console.log("middle = " + middle);
  var minH = middle - nav - footer;
  var resizeHeight = document.getElementById("middle").style.minHeight;
  document.getElementById("middle").style.minHeight = minH + "px";
  // console.log("minH = " + minH);
}

var delay = 500;
// window.resize event listener
window.addEventListener('resize', function() {
	// clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  var timeout = setTimeout(middleHeight, delay);
});
middleHeight();

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})