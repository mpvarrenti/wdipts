// return random int between min and max
var rndInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// return random RGB value
var rndRGB = function() {
  var r = rndInt(0,255);
  var g = rndInt(0,255);
  var b = rndInt(0,255);

  var triplet = r+","+g+","+b;

  return "rgb("+triplet+")";
}