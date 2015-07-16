// manages grid squares in accordance with game mechanices

// get grid dom node
var grid = document.getElementById("grid");

// returns dom node for square at (row, column)
var getSquare = function(row, column) {
  return document.getElementById("sq"+row+column);
}

var cardTypes = {};
cardTypes.actions = {};
cardTypes.items = {};
cardTypes.effects = {};

cardTypes.actions.colour = "red";
cardTypes.items.colour = "green";
cardTypes.effects.colour = "blue";

cardTypes.actions.freq = 0.6;
cardTypes.items.freq = 0.3;
cardTypes.effects.freq = 0.1;


// return random action path
var rndCard = function(type) {
  // initialise empty action path
  var path = [type];
  // get first level of actions
  var level = cards[type];
  var keys = Object.keys(level);

  // test if at action definition
  var test = level.icon;

  while(typeof(test) === "undefined") {
    // pick random action at level
    var roll = d(keys.length)
    var action = keys[roll];
    path.push(action);
      
    level = level[action];

    // iterate over action path
    // for(var i = 0; i < path.length; i++) {
    //   level = level[path[i]];
    // }

    keys = Object.keys(level);
    test = level.icon;
  }

  return path;
} 


// get icon for given action path
var getIcon = function(path) {
  

  var card = cards;
  // get terminal card node
  for(var i = 0; i < path.length; i++) {
    card = card[path[i]];
  }

  return card.icon;
}

// returns icon html
var getIconHTML = function(icon) {
  return '<i class="icon '+icon+'"></i>'  
}









