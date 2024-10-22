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
 * Calculates the match winner
 */
// function matchOutcome() {}

// switch (playerChoice) {
//   case "rock":
//     switch (compChoice) {
//       case "rock":
//         console.log("draw");
//         break;
//       case "paper":
//       case "spock":
//         console.log("lose");
//         break;
//       case "scissors":
//       case "lizard":
//         console.log("win");
//     }
//   case "paper":

//   case "scissors":

//   case "lizard":

//   case "spock":
// }
