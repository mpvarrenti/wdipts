// initialise empty sheets object
var sheets = {};

// basic sheet css settings
sheets.style = {};
sheets.style.position = "relative";
sheets.style.width = "100%";
sheets.style.height = "100%";

// sheets...
sheets.fore = {
  style: {
    transform:"translateZ(0em)";
  }
};
sheets.foreground = {
  style: {
    transform:"translateZ(-2em)";
  }  
};
sheets.middleFront = {
  style: {
    transform:"translateZ(-4em)";
  }
};
sheets.middle = {
  style: {
    transform:"translateZ(-6em)";
  }
};
sheets.middleBack = {
  style: {
    transform:"translateZ(-8em)";
  }  
};
sheets.background = {
  style: {
    transform:"translateZ(-10em)";
  }
};
sheets.back = {
  style: {
    transform:"translateZ(-12em)";
  }
};

// Sheet constructor declaration
var Sheet = function(){}
