Icons.getRnd = function() {
  // generate random index number
  var indexRnd = rndInt(0, Icons.set.length);
  // get icon name
  var iconName = Icons.set[indexRnd];
  // define icon class string
  var iconClass = "icon "+iconName;

  var iconRnd = Elem.new("i");
  iconRnd.setAttribute("class", iconClass);

  // return new icon
  return iconRnd;
}
