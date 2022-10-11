let enemy; // Create a enemy variable in a global scope 

function Enemy(enemyType, health, mana, strength, agility, speed){  // Create an Object Enemy and set its Properties 

    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;

}