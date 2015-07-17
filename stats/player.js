// player constructor
var Player = function() {
  this.abilities = {};
  this.abilities.strength = 5;
  this.abilities.dexterity = 5;
  this.abilities.wisdom = 5;
  this.abilities.fortitude = 5;
  this.abilities.luck = 5;

  this.attributes = {};
  this.attributes.xp = 0;

  // calculate and return max hp
  this.hpMax = function() {
    return this.abilities.strength * this.abilities.fortitude;
  }

  // calculate and return armour class
  this.ac = function() {
    var armour = this.strength + this.fortitude;
    armour = armour * (dexterity * luck);
    return armour;
  }
}




// initialise characters object
var characters = {};

characters.enemies = {}; 

characters.enemies.twitter = {}
var twitter = characters.enemies.twitter;
twitter.abilities = {};
twitter.abilities.strength = 2;
twitter.abilities.dexterity = 2;
twitter.abilities.wisdom = 2;
twitter.abilities.fortitude = 2;
twitter.abilities.luck = 2;
twitter.attributes = {};
twitter.attributes.xp = 5000;
