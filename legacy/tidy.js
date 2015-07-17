// sketch() BEGIN
// return an array showing column population
var sketch = function(column) {
  debugger;
  // initialise empty result array
  var result = [];
  for(var i = 0; i < 10; i++) {
    var card = get( );
    result.push(card);
  }
  return result;
}

// gap() START
// search row for first gap from bottom
// returns -1 if no gaps in row
var gap = function(column) {
  // start at bottom
  var i = 9;
  var cardID = "sq"+i+''+column;
  var card = document.getElementById(cardID); 
  // find first gap
  while(card !== null) {
    i--;
    cardID = "sq"+i+''+column;
    card = document.getElementById(cardID)
  }

  return i;
}
// gap() END


// gapWidth() START
// find width of a gap in a column
var gapWidth = function(column) {
  debugger;
  var gapStart = gap(column);
  // return -1 when no gaps
  if(gapStart === -1) {
    return -1
  }
  // return 0 when only top spot empty
  if(gapStart === 0) {
    return 0;
  }
  var i = 1;
  // test card before gap
  var testID = (gapStart-i)+''+column;
  if(gapStart-i === 0) {
   var test = get(column);
  }
  else {
    var test = get(testID);
  }
  while(test === null) {
    i++;
    testID = (gapStart-i)+''+column;
    test = get(testID);
  }

  // create empty result array
  var result = [];
  result.push(gapStart);
  result.push(i);

  return result;
}
// gapWidth() END


// tidy() START
// drops all cards in column as much as possible
var tidy = function(column) {
  // check for first gap
  var gapTest = gapWidth(column);
  // returns -1 if full
  if(gapTest === -1) {
    return -1;
  }
  // returns 0 when only top spot empty
  if(gapTest === 0) {
    return 0;
  }
  while(gapTest !== -1 || gapTest !== 0) {
    // get co-ords of card at top of gap
    var targetY = gapTest[0] - gapTest[1];
    if(targetY === 0) {
      drop(column)
    }
    else {
      drop(targetY+''+column);
    }  
    gapTest = gapWidth(column);
  }
}
// tidy() END
