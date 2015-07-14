// initialise empty namespace object
var Svg = {};

// create new SVG element
Svg.new = function(argAttributes) {
  var svgNew = document.createElement("svg");
  
  // load core attributes into SVG element
  Elem.attribLoad(svgNew, svgCore);

  // load
  Elem.attribLoad(svgNew, argAttributes);

  return svgNew;
}



var svgTest = {
  height:"500",
  width:"200"
};

var svgRect = {
  height:"100%",
  width:"100%"
};

var svgCore = {
  version:"1.1",
  baseProfile:"full",
  xmlns:"http://www.w3.org/2000/svg"};


