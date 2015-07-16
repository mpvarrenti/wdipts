// handles drawing and populating memory grid

// standarg grid settings object
gridStandard = {};
gridStandard.order = 10;
gridStandard.attribs = {};
gridStandard.attribs.id = "grid";
gridStandard.style = {};
gridStandard.style.width = "60%";
// gridStandard.style.height = "100%";
gridStandard.style.margin = "0 auto"
gridStandard.style.border = "thick solid red";

    //////////////////////
   //                  //
  // GRID CONSTRUCTOR //
 //                  //
//////////////////////
var Grid = function(settings) {
  // grid is order x order squares in size
  this.order = settings.order;
  // calculate grid population (total squares)
  this.pop = this.order * this.order;

  // perform square size calculations
  var squareAll = 90 / this.order;
  var marginAll = squareAll / this.order;
  var marginSide = marginAll / 2;
  var square = squareAll - marginAll;

  // define squares
  this.squares = {};
  // define square style
  
  this.squares.style = {};
  this.squares.style.width = square+"%";
  this.squares.style.height = square+"%";


  // 
  // *** BEGIN FUNCTION DECLARATIONS ***
  //

  // init() START
  // set new empty svg element
  this.init = function() {
    // get grid stage dom node
    var stage = document.getElementById("stage");
    // debugger;

    // remove any children from the grid stage
    while(stage.firstChild) {
      stage.removeChild(stage.firstChild);
    }

    // create new div element
    var newGrid = document.createElement("div");
    
    // set attributes via settings object
    for(attrib in settings.attribs) {
      newGrid.setAttribute(attrib, settings.attribs[attrib]);
    }
    // set style via settings object
    for(style in settings.style) {
      newGrid.style[style] = settings.style[style];
    }

    // append new grid to stage
    document.body.appendChild(newGrid);
  }
  // init() END

  // draw() START
  // draw squares in blank grid
  this.draw = function() {
    // debugger;
    // get grid dom node
    var grid = document.getElementById("grid");
    grid.style.height = "300px";
    // for each row
    for(var iRow = 0; iRow < this.order; iRow++) {
      // for each column
      for(var iColumn = 0; iColumn < this.order; iColumn++) {
        // create new rect element
        var newRect = document.createElement("div");
        newRect.id = "sq"+iRow+iColumn;
        newRect.style.position = "absoloute";
        newRect.style.width = square+"%";
        newRect.style.height = square+"%";
        newRect.style.left = (iColumn * squareAll)+"%";
        newRect.style.top = (iRow * squareAll)+"%";
        grid.appendChild(newRect);
      }
    }
  } 
  // draw() END

  // cards() START
  // sets card types on squares
  this.cards = function() {
    // get grid order
    var ord = this.order;

    // initialise blank card object
    var cards = {};

    // build card deck
    // iterate over rows
    for(var i = 0; i < ord; i++) {
      //over columns
      for(var j = 0; j < ord; j++) {
        var cardID = "sq"+i+j;
        cards[cardID] = {};
        cards[cardID].style = {};
        cards[cardID].attributes = {};
        // determine card face
        // roll the d10
        var roll = d(10);

        // determine effect
        // EFFECT
        if(roll === 0) {
          cards[cardID].style.border = "thin dashed blue";
          var effect = rndCard(effects);
          var icon = getIcon(effect, effects);
          cards[cardID].innerHTML = getIconHTML(icon);
          // set path as attribute
          cards[cardID].attributes.path = effect;
        }
        // ITEM
        if(roll > 0) {
          cards[cardID].style.border = "thin dashed green"; 
          var item = rndCard(items);
          var icon = getIcon(item, items);
          cards[cardID].innerHTML = getIconHTML(icon);
          // set path as attribute
          cards[cardID].attributes.path = item;
        }
        // ACTION
        if(roll > 3) {
          // debugger;
          cards[cardID].style.border = "thin dashed red";
          // get random action path
          var action = rndCard(actions);
          // get icon name
          var icon = getIcon(action, actions);
          // get icon html
          cards[cardID].innerHTML = getIconHTML(icon);
          // set path as attribute
          cards[cardID].attributes.path = action;
        }
      }
    }

    // set cards to squares on stage
    for(card in cards) {
      var square = document.getElementById(card);
      square.innerHTML = cards[card].innerHTML;
      for(style in cards[card].style) {
        square.style[style] = cards[card].style[style];
      }
      for(attribute in cards[card].attributes) {
        square.setAttribute(attribute, cards[card].attributes[attribute]);
      }
    } 
  }
  // cards() END

  // items() START
  // adds item pairs to cards
  this.items = function() {
    
  }
  // items() END
}
   //////// CONSTRUCTOR END....
  //////
 ////
// 
