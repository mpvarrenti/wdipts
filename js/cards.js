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


// getAbove() START
// returns array with ids of all cards above cardID
var getAbove = function(card) {
  var id = card.id;
  // initialise empty result array
  var result = [];

  // get target card co-ordinates
  var y = id[2];
  var x = id[3];

  y--;

  while(y > -1) {
    result.push("sq"+y+''+x);
    y--;
  }

  return result;
}
// getAbove() END


// getBelow() START
// returns array with ids of all cards below cardID
var getBelow = function(card) {
  var id = card.id;
  // initialise empty result array
  var result = [];

  // get target card co-ordinates
  var y = id[2];
  var x = id[3];

  y++;

  while(y < 10) {
    result.push("sq"+y+''+x);
    y++;
  }

  return result;
}
// getAbove() END


// get() START
// returns dom node for card at yx
var get = function(y,x) {
  var targetID = "sq"+y+x;
  return document.getElementById(targetID);
}
// get() END

// kill() START
// removes a card from the grid given yx
var kill = function(y,x) {
  // get grid dom node
  var grid = document.getElementById("grid");
  // remove target from grid
  grid.removeChild(get(y,x));
}
// kill() END

// drop() START
// lowers a card to bottom of column, udpates id accordingly
var drop = function(y,x) {
  debugger;
  if(y !== 9) {
    var card = get(y,x);
    if(card === null) {
      return false;
    }
    // get ids for cards below
    var below = getBelow(card);
    // test for empty space
    var i = 0;
    var floor = document.getElementById(below[i]);
    while(floor === null) {
      i++;
      floor = document.getElementById(below[i]);
    }
    // get id of column's bottom-most card
    var floorID = floor.id;
    // calculate card-above values
    var newID = "sq"+(floorID[2]-1)+''+floorID[3];
    var newTop = (newID[2]*9)+"%";
    // set card id one row above
    card.id = newID;
    // set new top value
    card.style.top = newTop;
  }
}
// drop() END

// dropAll() START
// drops all raised cards
// brute-force apply drop to all cards
var dropAll = function() {
  // iterate over rows
  for(var i = 9; i > -1; i--) {
    // iterate over colums
    for(var j = 0; j < 10; j++) {
      drop(i,j);
    }
  }
}
// dropAll() END

// getLT() START
// get left and top values for sq(y,x)
var getLT = function(sqyx) {
  var top = sqyx[2]*9;
  var left = sqyx[3]*9;
  var result = {}
  result.top = top;
  result.left = left;
  return result;
}
// getLT() END

// returns icon html
var getIconHTML = function(icon) {
  return '<i class="icon '+icon+'"></i>'  
}









