// initialise empty card object
var cards = {};

// set fundamental card types
cards.actions = {};
cards.items = {};
cards.effects = {};



//                      //
//                      //
//  *** ITEM CARDS ***  //
//                      //
//                      //
var items = {};
items.personal = {};
items.cards = {};

// PERSONAL ITEMS
items.personal.beer = {
  icon:"icon-beer",
}
items.personal.apple = {
  icon:"icon-vendor-apple"  
}
items.personal.ambulance = {
  icon:"icon-ambulance"
}
// CARD ITEMS
items.cards.reveal = {
  icon:"icon-search",
}
items.cards.bomb = {
  icon: "icon-bomb",
}
items.cards.match = {
  icon: "icon-check"
}

//                        //
//                        //
//  *** ACTION CARDS ***  //
//                        //
//                        //
var actions = {};
actions.physical = {};
actions.magical = {};
// PHYSICAL ACTIONS
actions.physical.melee = {
  icon:"icon-sword",
};
actions.physical.ranged = {
  icon:"icon-location-arrow",
}
actions.physical.defend = {
  icon:"icon-shield",
};
// MAGIC CLASSES
actions.magical.destruction = {};
actions.magical.alteration = {};
actions.magical.restoration = {};
// DESCRUCTION SPELLS
actions.magical.destruction.fire = {
  icon:"icon-flame",
};
actions.magical.destruction.shock = {
  icon:"icon-lightning",
};
actions.magical.destruction.snow = {
  icon:"icon-weather-snow",
};
actions.magical.destruction.wind = {
  icon:"icon-tornado",
};
// ALTERATION SPELLS
actions.magical.alteration.stop = {
  icon:"icon-timer-off",
};
// RESTORATION SPELLS
actions.magical.restoration.heal = {
  icon:"icon-heart-full-outline",
};

//                      //
//                      //
// *** EFFECT CARDS *** //
//                      //
//                      //
var effects = {};
effects.meteor = {
  icon:"icon-meteor",
};
effects.colour = {
  icon:"icon-paintcan",
}
effects.storm = {
  icon:"icon-night-alt-snow-thunderstorm",
}

cards.actions = actions;
cards.items = items;
cards.effects = effects;