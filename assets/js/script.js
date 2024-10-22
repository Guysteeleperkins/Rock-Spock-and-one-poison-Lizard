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

// Wait for the DOM to finish loading before running the game

// get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
  
    for (let button of buttons) {
      button.addEventListener("click", function () {
        let userChoice = this.getAttribute("data-type");
        runGame(userChoice);
      });
    }
  
    document
      .getElementById("answer-box")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          checkAnswer();
        }
      });
  });
  
  
  function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];



      return randomChoice;
  }



  
  function determineWinner(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
          return 'Tie';
      } 
  
      if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'rock' && computerChoice === 'lizard') ||
  
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'paper' && computerChoice === 'spock') ||
  
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'scissors' && computerChoice === 'lizard') ||
  
      (userChoice === 'lizard' && computerChoice === 'spock') ||
      (userChoice === 'lizard' && computerChoice === 'paper') ||
  
      (userChoice === 'spock' && computerChoice === 'scissors') ||
      (userChoice === 'spock' && computerChoice === 'rock') 
      ) {
          incrementWin()
          return 'user'
          
      } else {
          incrementLoss()
          return 'computer'
      }
  }
  
  function runGame(userChoice) {
      const computerChoice = getComputerChoice();

      moveIcons(userChoice, computerChoice);

      const result = determineWinner(userChoice, computerChoice);

      
      setTimeout(function() { moveIcons(userChoice,computerChoice) }, 3000);

      console.log(userChoice);
      console.log(computerChoice);


      // displayResult(userChoice, computerChoice, result);
  
  }
  
  /**
   * Gets the current score from the DOM and increments it by 1
   */
  function incrementWin() {
  
      let win = parseInt(document.getElementById('win').innerText);
      document.getElementById('win').textContent = ++win;
  }
  
  /**
   * Gets the current incorrect score from the DOM and increments it by 1
   */
  function incrementLoss() {
  
      let loss = parseInt(document.getElementById('loss').innerText);
      document.getElementById('loss').textContent = ++loss;
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