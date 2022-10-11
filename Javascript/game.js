let gameManager = { // Create Object gameManager

    setGameStart: function(classType){ // gameManager -> Method - setGameStart
     
        this.resetPlayer(classType);
        this.setPreFight();

    },

    resetPlayer: function(classType){ // gameManager -> Method - resetPlayer

        switch (classType) { // Switch case for selecting a character
            
            case "Swordsman":
                player = new Player(classType, 200, 0, 200, 100, 50); // clcassType=String Value -> call global scope variable for assigning the Object Player and its Properties
            break;
            case "Rouge":
                player = new Player(classType, 100, 0, 100, 150, 200);
            break;
            case "Mage":
                player = new Player(classType, 80, 0, 50, 200, 50);
            break;
            case "Archer":
                player = new Player(classType, 200, 0, 50, 200, 100);
            break;
        }

        let getInterface = document.querySelector(".interface"); // Display selected character Player Object -> Properties

            getInterface.innerHTML = '<img src="img/player/' + classType.toLowerCase() + '.png" class=img-player"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },

    setPreFight: function(){  // gameManager -> Method - setPreFight

        let getHeader = document.querySelector(".header"); // Display pre-fight set onclick to gameManager.setFight() -> Method
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an Enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for an Enemy!</a>';
        getArena.style.visibility = "visible";
  
    },

    setFight: function(){  // gameManager -> Method - setFight

        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        //Create Enemy! 

        let enemy00 = new Enemy("Monster", 150 ,0 ,50 ,100 , 50);
        let enemy01 = new Enemy("Werewolf", 200 ,0 ,50 ,100 , 50);

        let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2)); //Creating a random number for the enemy between 1 and 0

        switch (chooseRandomEnemy){

            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }

        getHeader.innerHTML = '<p>Task: Choose your attack!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/enemy/' + enemy.enemyType.toLowerCase() + '.png" alt"'+ enemy.enemyType +' "class=img-enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';

    }
}