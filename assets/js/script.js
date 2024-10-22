// Variables for storing player choice and computer choice
let playerChoice;
let compChoice;

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
    "Spock vaporizes Rock!",
  ];

    const outcome = action.filter((matchup) => matchup.includes(playerChoice) && matchup.includes(compChoice));
    return(outcome[0]);
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
function calcWinner() {
  
}

switch (playerChoice) {
  case "rock":
    choseRock();      
    
  case "paper":

  case "scissors":

  case "lizard":

  case "spock":
}
