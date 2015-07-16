// add event listeners to all cards
var allListen = function () {
  var squares = document.querySelectorAll("#grid>div");
  for(var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", guess);
  }
}

// remove event listeners from all cards
var allUnbind = function() {
  var squares = document.querySelectorAll("#grid>div");
  for(var i = 0; i < squares.length; i++) {
    squares[i].unbind();
  }
}


// callback for when card is clicked
var guess = function() {
  console.log("clicked!");
  // get clicked square
  var square = event.target;

  // make sure square selected if icon clicked
  if(square.tagName === "I") {
    square = square.parentNode;
  }

  // blank all classes
  square.className = ""
  // set clicked class
  square.className = "clicked";
  // remove listener
  square.removeEventListener("click", guess);

  // check grid status after click
  var clicked = document.getElementsByClassName("clicked")
  // does a pair need checking?
  if(clicked.length === 2) {
    debugger;
    var path0 = clicked[0].getAttribute("path");
    var path1 = clicked[1].getAttribute("path");
    // check for match
    if(path0 === path1){
      console.log('match!!!');
    }
    else {
      clicked[0].className = "";
      clicked[1].className = "";
    }
  }
}