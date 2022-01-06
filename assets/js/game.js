var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(playerName, playerAttack, playerHealth);
console.log(enemyNames, enemyAttack, enemyHealth);

// "Win" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to  FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    while(enemyHealth > 0) {

        if (promptFight === "fight" || promptFight === "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );

            if (playerHealth <= 0) {
                window.alert(playerName + " had died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        } else if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 2;
            }
            else {
            fight();
            }
        } else {
            window.alert("You need to pick a valid option. Try again!");

        }
    }
};

for (let i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}