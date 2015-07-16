// standard screen settings object
var settingsStandard = {
  units:"vw",
  depth:100,
  perspective:10,
  origin:[2, 2],
}

function Screen(settings) {
  // use default settings if no arguments passed
  // settings = typeof !== 'undefinded' ? a: settingsStandard;

  // assing basic screen properties from settings object
  // (faster than being specific but forgoes chance to validate object)
  for(setting in settings) {
    this[setting] = settings[setting];
  }

  // calculate perspective scale multiplier
  // this.scale = "";

  // assign screen css properties
  this.style = {};
  this.style.perspective = this.perspective+this.units;
  this.style.transform = "translateZ("+this.depth+this.units+")";
  this.style.perspectiveOrigin = this.origin[0]+this.units+" "+this.origin[1]+this.units;

  // init empty sheets object
  this.sheets = {}
  // define sheet names
  this.sheets.names = [
    "fore",
    "foreground",
    "middleFore",
    "middle",
    "middleBack",
    "background",
    "back"]
  // assign sheet name array to simple variable 
  var names = this.sheets.names;

  // calculate deltaZ based on depth and total sheets
  var dZ = Math.floor(this.depth / names.length);
  
  // initialise each sheet with relevant Z translation
  for(var i = 0; i < names.length; i++) {
    this.sheets[names[i]] = {};
    this.sheets[names[i]].dZ = dZ * i;
    this.sheets[names[i]].scale = (dZ * i)/this.perspective;
    this.sheets[names[i]].style = {};
    this.sheets[names[i]].style.transform = "translateZ(-"+(dZ*i)+this.units+")";
  }

  // 
  // *** BEGIN FUNCTION DECLARATIONS *** 
  // 

  // init() START
  // add screen #head
  this.init = function() {

    // get head div from document
    var head = document.getElementById("head");
    // remove any children from head
    while(head.firstChild) {
      head.removeChild(head.firstChild);
    }

    // create blank div elelment
    var newScreen = document.createElement("div");
    // set id
    newScreen.id = "screen";
    // style div
    for(style in this.style) {
      newScreen.style[style] = this.style[style];
    }

    // append to #head
    head.appendChild(newScreen);
  }
  // init() END
  

  // scale() START
  //
  this.scale = function() {

  }
  // scale() END

  // addSheet() START
  // add new sheet to screen
  this.addSheet = function(name) {
    // get #screen from document
    var screen = document.getElementById("screen");

    // create new div element
    var newSheet = document.createElement("div");
    // set class according to name
    newSheet.className = name;
    // count other screens of same class
    var countClass = document.getElementsByClassName(name).length;
    // set id
    newSheet.id = name+countClass;
    // apply css according to sheets[name]
    for(style in this.sheets[name].style) {
      newSheet.style[style] = this.sheets[name].style[style];
    }

    // append new sheet to #screen
    screen.appendChild(newSheet);
  }
  // addSheet() END

  // refreshZ() START
  // refreshes Z-index for all sheets
  this.refreshZ = function() {
    // iterate over all sheet names
    for(var i = 0; i < names.length; i++) {
      // get all sheets of current name
      var layer = document.getElementsByClassName(names[i]);
      debugger;
      // iterate over all sheets in layer
      for(var j = 0; j < layer.length; i++) {
        // set zIndex based on index in names array
        layer[j].style.zIndex = (names.length - j);
      }
    }
  }
  // refreshZ() END

  // ***                           ***
  // *** END FUNCTION DECLARATIONS ***
  // ***                           ***
};



// Screen.scale = function() {
//   return (dZ/perspective)*100;
// }