// Variables for storing player choice and computer choice
let playerChoice = "";
let compChoice = "";

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

const audio = document.createElement("audio")
document.body.appendChild(audio);
audio.src = "./assets/audio/stinger-2021-08-17_-_8_Bit_Nostalgia_-_www.FesliyanStudios.com.mp3"

document.body.addEventListener("DOMContentLoaded", function () {
    audio.play()
})


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
 * Function to display win/lose/draw message
 */
function displayResultMessage(result) {
  const resultMessage = document.getElementById('result-message');

  if (result === 'win') {
      resultMessage.innerHTML = 'You Win!';
      resultMessage.className = 'win'; // Apply win class
  } else if (result === 'lose') {
      resultMessage.innerHTML = 'You Lose!';
      resultMessage.className = 'lose'; // Apply lose class
  } else if (result === 'draw') {
      resultMessage.innerHTML = 'Draw!';
      resultMessage.className = 'draw'; // Apply Draw class
  }
  
  resultMessage.style.display = 'block'; // Show the message

  // Hide the message after 3 seconds
  setTimeout(() => {
      resultMessage.style.display = 'none';
  }, 3000);
}

/**
 * Runs game by calling all other needed functions in order
 */
function runGame(button) {
  const playerChoice = playerShoot(button);
  const compChoice = compShoot();

  moveIcons(playerChoice,compChoice);

  let winLose = calcWinner(playerChoice, compChoice);

  setTimeout(function() {
                        toggleTransition(playerChoice, compChoice);
                        moveIcons(playerChoice,compChoice);
                        }, 3000);

  if (winLose === 'draw') {
    console.log("It's a draw!");
    displayResultMessage('draw'); // Show draw message
  } else if (winLose === 'win') {
    console.log("Player wins!");
    incrementWin();
    displayResultMessage('win'); // Show win message
  } else if (winLose === 'lose') {
    console.log("Computer wins!");
    incrementLoss();
    displayResultMessage('lose'); // Show lose message
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

function toggleTransition(userChoice, compChoice) {
  const userIconElement = document.querySelector(`[data-type="${userChoice}"]`);
  const compIconElement = document.querySelector(`[data-type="comp-${compChoice}"]`);
  userIconElement.classList.toggle("no-transition");
  compIconElement.classList.toggle("no-transition");
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


  // JS code for bootstrap modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})