var Sheet = function(depth) {
  this.depth = depth;
}

Sheet.findRight = function() {
  console.log(innerWidth);
  var x = 0;
  var tF = document.createElement("div");
  tF.style.width = "20px";
  tF.style.height = "20px";
  tF.style.backgroundColor = "black";
  tF.style.position = "relative";
  tF.style.left = x+"vw";

  var tB = document.createElement("div");
  tB.style.width = "20px";
  tB.style.height = "20px";
  tB.style.backgroundColor = "black";
  tB.style.position = "relative";
  tB.style.left = x+"vw";

  var tM = document.createElement("div");
  tM.style.width = "20px";
  tM.style.height = "20px";
  tM.style.backgroundColor = "black";
  tM.style.position = "relative";
  tM.style.left = x+"vw";

  var back = document.getElementsByClassName("back")[0];
  var front = document.getElementsByClassName("fore")[0];
  var middle = document.getElementsByClassName("middle")[0];

  back.appendChild(tB);
  front.appendChild(tF);
  middle.appendChild(tM);
  
  debugger;

  var testLeftEdge = test.offsetLeft;
  while(testLeftEdge < innerWidth) {
    x += 1;
    test.style.left = x+"vw";
    testLeftEdge = test.offsetLeft;
  }
  
  console.log(x);
}