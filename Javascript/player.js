let player; // Create a player variable in a global scope 

function Player(classType, health, mana, strength, agility, speed){ // Create an Object Constructor Player and set its Properties 

    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;

}
let PlayerMoves = {
    
    calcAttack: function(){  // Create a method that runs to check who attacks first 

        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    

    let playerAttack = function(){

            let calcBaseDamage;

            if (player.mana > 0){
                calcBaseDamage = player.strength * player.mana / 1000;
            }else{
                calcBaseDamage = player.strength * player.agility / 1000;

            }

        let offSetDamage = Math.floor(Math.random() * Math.floor(10)); //Creating random attack number offSetDamage = (1 - 10)
        let calcOutputDamage = calcBaseDamage + offSetDamage;
        
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2 ) + 1; //Creating how many hits per attack does the player referring to its agility
    
        let attackValues = [calcOutputDamage, numberOfHits]; //Creating the final attack value - in an array and return the value
        return attackValues;
    }  

    let enemyAttack= function(){

        let calcBaseDamage;

        if (enemy.mana > 0){
            calcBaseDamage = enemy.strength * enemy.mana / 1000;
        }else{
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }

        let offSetDamage = Math.floor(Math.random() * Math.floor(10)); //Creating random attack number offSetDamage = (1 - 10)
        let calcOutputDamage = calcBaseDamage + offSetDamage;
    
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2 ) + 1; //Creating how many hits per attack does the player referring to its agility

        let attackValues = [calcOutputDamage, numberOfHits]; //Creating the final attack value - in an array and return the value
        return attackValues;
    }      
        // Initiate attacks - depending on who attacks first
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        if (getPlayerSpeed >= getEnemySpeed){

           let playerAttackValues = playerAttack();  
                                        //Player attacks
           let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;

            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
          
            if( enemy.health <=0){

                alert("You win! Refresh browser to play again.");

                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';

            }else{

                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                
                let enemyAttackValues = enemyAttack();    
                                           //Enemy attacks
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;

                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
          
                if( player.health <=0){

                alert("You lose! Refresh browser to play again.");

                getPlayerHealth.innerHTML = 'Health: 0';
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;

                }else{
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;   
                } 
            }  

        }

    }

}

