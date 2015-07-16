// global timer variable
// true when running
var timer = false;


// allListen() START
// add event listeners to all cards
var allListen = function () {
  // remove any existing listeners
  var squares = document.querySelectorAll("#grid>div.pending");
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", click);
  }
}
// allListen() END


// noneListen() START
// remove event listeners from all cards
var noneListen = function() {
  var squares = document.querySelectorAll("#grid>div");
  for(var i = 0; i < squares.length; i++) {
    squares[i].removeEventListener("click", click);
  }
}
// noneListen() END


// timerStart() START
// kick off shutdown timer
var timerStart = function() {
  var phaseOne = function() {
    noneListen();
    match(document.getElementsByClassName("clicked"));
    delay(phaseTwo, 1000);
  }
  var phaseTwo = function() {
    reflip();
    allListen();
  }
  document.getElementById("sand").className = "full";
  delay(phaseOne, 2000);
}
// timerStart() END





// match() START
// check set of cards for a match
var match = function(clicked) {
  if(clicked.length >= 2) {
    // initialise array for holding card paths
    var paths = [];
    // push first path to paths array
    paths.push(clicked[0].getAttribute("path"));
    // assess each card after 0
    for(var i = 1; i < clicked.length; i++) {
      var path = clicked[i].getAttribute("path");
      // if path isn't already in array, push
      if(paths.indexOf(path) === -1) {
         paths.push(path);
      }
    }
    // return match where only one unique path captured
    if(paths.length === 1) {
      console.log('match!')
      // set classes for matched cards
      while(clicked.length > 0) {
        clicked[0].className = "out";
      }
    }  
  }
}
// match() END 


// click() START
// callback for when a card is clicked
var click = function() {
  // debugger;
  // get clicked square
  var square = event.target;

  // kickoff shutdown timer if not already running
  if(!timer) {
    timerStart();
  }

  // remove listener
  square.removeEventListener("click", click);

  // make sure square selected if icon clicked
  if(square.tagName === "I") {
    square = square.parentNode;
  }

  // set clicked class
  square.className = "clicked";
}
// click() END




// reflip() START
// resets any clicked cards
var reflip = function() {
  // return to natural state
  // reset timer
  var timer = document.getElementById("sand");
  timer.className = "empty";
  while(document.getElementsByClassName("clicked").length > 0) {
    // replace event listener
    // document.getElementsByClassName("clicked")[0].addEventListener("click", guess);
    document.getElementsByClassName("clicked")[0].className = "pending";
  }
}