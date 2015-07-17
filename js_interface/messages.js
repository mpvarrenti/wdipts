var msg = function(channel, message) {
  idString = "message" + channel;

  // get relevant message paragraph dom node
  var msgP = document.getElementById(idString);

  msgP.innerHTML = message;
}