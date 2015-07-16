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

var cardsSet = function() {
  // get grid order
  var ord = this.order;

  // initialise blank card object
  var cards = {};

  // build card deck
  // iterate over rows
  for(var i = 0; i < ord; i++) {
    //over columns
    for(var j = 0; j < ord; j++) {
      cards('sq'+i+j)={};
      var card = cards('sq'+i+j);
      // determine card face
      // roll the d10
      var roll = d(10);

      if(roll >= 4) {
        card.style.backgroundColor = "red";
      }
      if(roll >= 1) {
       card.style.backgroundColor = "green"; 
      }
      else {
       card.style.backgroundColor = "blue";  
      }
    }
  }

  // set cards to squares on stage
  for(card in cards) {
    var square = document.getElementById(card);
    for(style in cards[card].style) {
      square.style[style] = cards[card].style[style];
    }
  }
}

