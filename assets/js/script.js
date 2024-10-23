// ------------ Initialise Buttons ------------ \\
// Listens for DOMContentLoaded
// Identifies all buttons on the page and stores them in an array
// Iterates through the array and adds an event listener to every button
// Buttons now listen for a click event to call the runGame function, passing the button element as this

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  
  for (let button of buttons) {
    button.addEventListener("click", function () {
      runGame(this);
    });
  }
});

// ------------ /initialise buttons ------------ ||



// ------------ Shoot Functions ------------ \\
// Two functions to allow the player and computer to make their choice

/** --- Player Shoot ---
 * Uses the data-type attribute to detect which button the player clicked
 * Saves the value to playerChoice, then logs it to console and returns it as output
 */
function playerShoot(button) {
  let playerChoice = button.getAttribute("data-type");
  console.log(`Player: ${playerChoice}`);
  return playerChoice;
}

/** --- Comp Shoot ---
 * Uses a random number between 0 and 4 to select a choice
 * Saves the value to compChoice, then logs it to console and returns it as output
 */
function compShoot() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  let choiceIndex = Math.floor(Math.random() * 5);
  let compChoice = choices[choiceIndex];
  console.log(`Computer: ${compChoice}`);
  return compChoice;
}

// ------------ /shoot functions ------------ ||



// ------------ Choice Functions ------------ \\
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



// ------------ Switchboard ------------ \\
// Evaluates player choice and progresses game

/** --- Calc Winner ---
 * Takes playerChoice and compChoice as inputs
 * Calls the choice function that corresponds to the player's choice, passing compChoice as input
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

// ------------ /switchboard ------------ ||



// ------------ Score Tracking ------------ \\
// Functions that keep track of the running score

/** --- Increment Win ---
 * Gets the current win score from the DOM and increments it by 1
 */
function incrementWin() {

  let score = parseInt(document.getElementById('win').innerText);
  document.getElementById('win').textContent = ++score;
}

/** --- Increment Loss ---
 * Gets the current incorrect score from the DOM and increments it by 1
 */
function incrementLoss() {

  let incorrect = parseInt(document.getElementById('loss').innerText);
  document.getElementById('loss').textContent = ++incorrect;
}

// ------------ /score tracking ------------ ||



// ------------ Flavour Functions ------------ \\
// Functions which are not essential to the game logic
// These are to add flavour and interest to improve the game experience

/** --- Action Report ---
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

/** --- Move Icons ---
 * 
 */
function moveIcons(playerChoice, computerChoice) {
  movePlayerIcon(playerChoice);
  moveCompIcon(computerChoice);
}

/** --- Move Player Icon ---
 * 
 */
function movePlayerIcon(playerChoice) {
  const playerIconElement = document.querySelector(`[data-type="${playerChoice}"]`);
  playerIconElement.classList.toggle("player-icon-played");
  playerIconElement.classList.toggle(`${playerChoice}-choice`);
}

/** --- Move Comp Icon ---
 * 
 */
function moveCompIcon(compChoice) {
  const compIconElement = document.querySelector(`[data-type="comp-${compChoice}"]`);
  compIconElement.classList.toggle("comp-icon-played");
  compIconElement.classList.toggle(`${compChoice}-choice`);
}

// ------------ /flavour functions ------------



// ------------ Misc Extras ------------ \\
// Other code not essential to the game logic
// This is for code that improves the user experience but which doesn't belong in Flavour Functions


window.addEventListener("load", (event) => {
  let audio = document.getElementById("landing-sting");
  audio.play();
});

// ------------ /misc extras ------------ ||





// ------------------------ MAIN GAME ------------------------ \\
/**
 * Runs game by calling all other needed functions in order
 */
function runGame(button) {
  const playerChoice = playerShoot(button);
  const compChoice = compShoot();

  moveIcons(playerChoice, compChoice);

  console.log(actionReport(playerChoice, compChoice));
  
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
}

// ------------------------------------------------------------ ||