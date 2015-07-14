// initialise empty namespace object
var Elem = {};

// create new element
Elem.new = function(tagName) {
  var elemNew = document.createElement(tagName);
  Elem.attribLoad(elemNew, attribsCore[tagName]);

  return elemNew;
}

// set element attributes as per attribute object
Elem.attribLoad = function(target, attribObj) {
  for(attrib in attribObj) {
    target.setAttribute(attrib, attribObj[attrib]);
  }
}

var attribsCore = {
  svg: {
    version:"1.1",
    baseProfile:"full",
    xmlns:"http://www.w3.org/2000/svg"
  },
  rect: {
    width:"200",
    height:"200",
    fill:"red"
  }
};