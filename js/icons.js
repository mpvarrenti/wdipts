// initialise empty namespace
var Icons = {};

Icons.set = [
"icon-bomb",
"icon-assistant-photo",
"icon-clock-fast",
"icon-timer-off",
"icon-weather-snow",
"icon-first-aid",
"icon-shopping-cart",
"icon-shop",
"icon-store",
"icon-shield",
"icon-fire-extinguisher",
"icon-fire",
"icon-sword",
"icon-user",
"icon-twitter",
"icon-times",
"icon-star",
"icon-search",
"icon-instagram",
"icon-home",
"icon-envelope",
"icon-comments",
"icon-comment",
"icon-chevron-up",
"icon-check",
"icon-bars"
];

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
