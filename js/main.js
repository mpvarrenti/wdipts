

window.onload = function() {
  var svgGrid = document.querySelector("div>svg");

  svgGrid.addEventListener("click", function() {console.log(event.target);event.target.setAttribute("fill", rndRGB());})
}