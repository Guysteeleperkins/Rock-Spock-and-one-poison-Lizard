// Variables for storing player choice and computer choice
let playerChoice = "";
let compChoice = "";



// ------------ Choice functions ------------ \\
// A function for each possible player choice. 
// Uses a switch statement to return "win", "lose", or "draw", depending on the computer's choice.

/**
 * Function to determine match result if player chooses rock. 
 * Uses a switch statement and takes compChoice as input.
 */
function choseRock(compChoice) {
  switch (compChoice) {
    case "rock":
      return 'draw';

    case "scissors":
    case "lizard":
      return 'win';

    case "paper":
    case "spock":
      return 'lose';
  }
}

/**
 * Function to determine match result if player chooses paper. 
 * Uses a switch statement and takes compChoice as input.
 */
function chosePaper(compChoice) {
  switch (compChoice) {
    case "paper":
      return 'draw';

    case "rock":
    case "spock":
      return 'win';

    case "scissors":
    case "lizard":
      return 'lose';
  }
}

/**
 * Function to determine match result if player chooses scissors. 
 * Uses a switch statement and takes compChoice as input. 
 */
function choseScissors(compChoice) {
  switch (compChoice) {
    case "scissors":
      return 'draw';

    case "paper":
    case "lizard":
      return 'win';

    case "rock":
    case "spock":
      return 'lose';
  }
}

/**
 * Function to determine match result if player chooses lizard. 
 * Uses a switch statement and takes compChoice as input. 
 */
function choseLizard(compChoice) {
  switch (compChoice) {
    case "lizard":
      return 'draw';

    case "paper":
    case "spock":
      return 'win';

    case "rock":
    case "scissors":
      return 'lose';
  }
}

/**
 * Function to determine match result if player chooses spock. 
 * Uses a switch statement and takes compChoice as input. 
 */
function choseSpock(compChoice) {
  switch (compChoice) {
    case "spock":
      return 'draw';

    case "rock":
    case "scissors":
      return 'win';

    case "paper":
    case "lizard":
      return 'lose';
  }
}

// ------------ /choice functions ------------ ||

/**
 * Calculates the match winner
 */
function calcWinner(playerChoice, compChoice) {
  switch (playerChoice) {
    case "rock":
      return choseRock(compChoice);

    case "paper":
      return chosePaper(compChoice);

    case "scissors":
      return choseScissors(compChoice);

    case "lizard":
      return choseLizard(compChoice);

    case "spock":
      return choseSpock(compChoice);
  }
}

window.addEventListener("load", (event) => {
  let audio = document.getElementById("landing-sting");
  audio.play();
});

// Adds event listener to buttons to call playerShoot on click, which returns the player's choice
document.addEventListener("DOMContentLoaded", function () {



  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      runGame(this);
    });
  }
});

/**
 * Returns player's choice
 */
function playerShoot(button) {
  let playerChoice = button.getAttribute("data-type");
  console.log(`Player: ${playerChoice}`);
  return playerChoice;
}

/**
 * Returns computer's choice
 */
function compShoot() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let choiceIndex = Math.floor(Math.random() * 5);
  let compChoice = choices[choiceIndex];
  console.log(`Computer: ${compChoice}`);
  return compChoice;
}

/** 
 * Takes playerChoice and compChoice as inputs. Searches the action array and returns the string that contains both inputs.
 */
function actionReport(playerChoice, compChoice) {
  const action = [
    "Rock crushes Scissors!",
    "Rock crushes Lizard!",
    "Paper covers Rock!",
    "Paper disproves Spock!",
    "Scissors cut Paper!",
    "Scissors decapitate Lizard!",
    "Lizard eats Paper!",
    "Lizard poisons Spock!",
    "Spock smashes Scissors!",
    "Spock vaporizes Rock!"
  ];

  const outcome = action.filter((matchup) => matchup.toLowerCase().includes(playerChoice) && matchup.toLowerCase().includes(compChoice));
  return (outcome[0]);
}

/**
 * Runs game by calling all other needed functions in order
 */
function runGame(button) {
  const playerChoice = playerShoot(button);
  const compChoice = compShoot();

  moveIcons(playerChoice, compChoice);

  let winLose = calcWinner(playerChoice, compChoice);

  setTimeout(function () {
    moveIcons(playerChoice, compChoice)
  }, 3000);

  if (winLose === 'draw') {
    console.log("It's a draw!");
  } else if (winLose === 'win') {
    console.log("Player wins!");
    incrementWin();
  } else if (winLose === 'lose') {
    console.log("Computer wins!");
    incrementLoss();
  } else {
    console.log("You done messed up A-a-ron!");
  }

  console.log(actionReport(playerChoice, compChoice));
}




function incrementWin() {

  let score = parseInt(document.getElementById('win').innerText);
  document.getElementById('win').textContent = ++score;
}

/**
 * Gets the current incorrect score from the DOM and increments it by 1
 */
function incrementLoss() {

  let incorrect = parseInt(document.getElementById('loss').innerText);
  document.getElementById('loss').textContent = ++incorrect;
}







function moveIcons(userChoice, computerChoice) {
  moveUserIcon(userChoice);
  moveCompIcon(computerChoice);
}



function moveUserIcon(userChoice) {
  const userIconElement = document.querySelector(`[data-type="${userChoice}"]`);
  userIconElement.classList.toggle("user-icon-played");
  userIconElement.classList.toggle(`${userChoice}-choice`);
}

function moveCompIcon(compChoice) {
  const compIconElement = document.querySelector(`[data-type="comp-${compChoice}"]`);
  compIconElement.classList.toggle("comp-icon-played");
  compIconElement.classList.toggle(`${compChoice}-choice`);
}