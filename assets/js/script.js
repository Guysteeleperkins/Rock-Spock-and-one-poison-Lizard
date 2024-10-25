// Adds a screen bootup effect when the page is first loaded

window.onload = function () {
  const bootScreen = document.getElementById('boot-screen');
  const gameContainer = document.getElementById('game-container');
  const body = document.body;


  setTimeout(() => {

    body.style.backgroundColor = 'black'; // Change the body background to white once the expansion is done

    bootScreen.style.animation = "fadeOut 1s forwards"; // Fade out the boot screen after the expansion
    setTimeout(() => {
      bootScreen.style.display = 'none';
      gameContainer.style.display = 'block';
    }, 1000); // Wait for the fade-out animation to complete
  }, 3000); // This should match the expandLine animation duration
};

// ------------ Initialise Buttons ------------ \\
// Listens for DOMContentLoaded
// Identifies all buttons on the page and stores them in an array
// Iterates through the array and adds an event listener to every button
// Buttons now listen for a click event to call the runGame function, passing the button element as 'this'

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

/** --- Chose Rock ---
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

/** --- Chose Paper ---
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

/** --- Chose Scissors ---
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

/** --- Chose Lizard ---
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

/** --- Chose Spock ---
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

function addTransition(userChoice, compChoice) {
  const userIconElement = document.querySelector(`[data-type="${userChoice}"]`);
  const compIconElement = document.querySelector(`[data-type="comp-${compChoice}"]`);
  userIconElement.classList.add("no-transition");
  compIconElement.classList.add("no-transition");
}

function removeTransition(userChoice, compChoice) {
  const userIconElement = document.querySelector(`[data-type="${userChoice}"]`);
  const compIconElement = document.querySelector(`[data-type="comp-${compChoice}"]`);
  userIconElement.classList.remove("no-transition");
  compIconElement.classList.remove("no-transition");

}

/** --- Move Player Icon ---
 * 
 */
function movePlayerIcon(playerChoice) {
  const playerIconElement = document.querySelector(`[data-type="${playerChoice}"]`);
  playerIconElement.classList.toggle("user-icon-played");
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



// Get the player list element
const characterList = document.getElementById('player-list');
const opponentList = document.getElementById('opponent-list');


// Attach a click event listener to the list
characterList.addEventListener('click', function (event) {
  // Check if the clicked target is list item
  if (event.target && event.target.nodeName === 'LI') {
    // Get the string from list item
    let characterText = event.target.innerText;
    // Update the avatar display element 
    updatePlayerAvatar(characterText);
    //Move underline to current choice
    style.textDecoration = "underline";
  }
});

opponentList.addEventListener('click', function (event) {
  // Check if the clicked target is list item
  if (event.target && event.target.nodeName === 'LI') {
    // Get the string from list item
    let opponentText = event.target.innerText;
    // Update the avatar display element 
    updateOpponentAvatar(opponentText);
    //Move underline to current choice
  }
});


function updatePlayerAvatar(characterText) {

  document.getElementById('player-avatar').innerHTML = "";

  // Use a switch statement to set different image HTML based on the selected player
  switch (characterText) {
    case 'Very Strong Pete':
      document.getElementById('player-avatar').innerHTML = `<img src="assets/images/strongpete.jpg" alt="Strong Pete">`;
      break;
    case 'Less Strong but Still Very Strong Andrew':
      document.getElementById('player-avatar').innerHTML = `<img src="assets/images/strongandrew.jpg" alt="Strong Andrew">`;
      break;
    case 'Cowboy Lizard':
      document.getElementById('player-avatar').innerHTML = `<img src="assets/images/cowboylizard.webp" alt='Cowboy Lizard'>`;
      break;
    case 'Royce Coolidge':
      document.getElementById('player-avatar').innerHTML = `<img src="assets/images/roycecoolidge.jpg" alt="Royce Coolidge">`;
      break;
    case 'Big Gun Guy':
      document.getElementById('player-avatar').innerHTML = `<img src="assets/images/biggunguy.jpg" alt='Big Gun Guy'>`;
      break;
    default:
      document.getElementById('player-avatar').innerHTML = "<p>No avatar available</p>";
 
  }

};

function updateOpponentAvatar(opponentText) {
    document.getElementById('comp-avatar').innerHTML = "";

  switch (opponentText) {
    case 'Slippery Phil':
      document.getElementById('comp-avatar').innerHTML = `<img src="assets/images/slippyphil.jpg" alt="Slippery Phil">`;
      break;
    case 'Baron von FluffyPants':
      document.getElementById('comp-avatar').innerHTML = `<img src="assets/images/baronfluffy.jpg" alt="Baron von FluffyPants">`;
      break;
    case 'The Spanner':
      document.getElementById('comp-avatar').innerHTML = `<img src="assets/images/thespanner.jpg" alt='The Spanner'>`;
      break;
    case 'Sprock':
      document.getElementById('comp-avatar').innerHTML = `<img src="assets/images/sprock.webp" alt="Sprock">`;
      break;
    case 'The man with half a soul':
      document.getElementById('comp-avatar').innerHTML = `<img src="assets/images/halfsoul.jpg" alt='The man with half a soul'>`;
      break;
      default:
        document.getElementById('comp-avatar').innerHTML = "<p>No avatar available</p>"
  }
}



      // ------------ Misc Extras ------------ \\
      // Other code not essential to the game logic
      // This is for code that improves the user experience but which doesn't belong in Flavour Functions

      /* Listens for page load
       * Plays landing sting audio*/
      window.addEventListener("load", (event) => {
        let audio = document.getElementById("landing-sting");
        audio.play();
      });

      // ------------ /misc extras ------------ ||

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




      // ------------------------ MAIN GAME ------------------------ \\
      /** --- Run Game ---
       * Runs game by calling all other needed functions in order
       */
      function runGame(button) {
        const playerChoice = playerShoot(button); // Takes player choice from the clicked button using its data-type and saves it to playerChoice constant
        const compChoice = compShoot(); // Takes computer choice and saves it to compChoice constant

        removeTransition(playerChoice, compChoice);
        moveIcons(playerChoice, compChoice); // Moves the icons representing player's and computer's choices

        console.log(actionReport(playerChoice, compChoice)); // Logs the action report narration to the console

        let winLose = calcWinner(playerChoice, compChoice); // Takes playerChoice and compChoice as inputs, calculates the match result and saves the output to winLose

        setTimeout(function () {
          addTransition(playerChoice, compChoice); // Wait 3 seconds then move icons back to initial positions
          moveIcons(playerChoice, compChoice)
        }, 3000);

        if (winLose === 'draw') {
          console.log("It's a draw!"); // Announces draw
          displayResultMessage('draw'); // Show draw message
        } else if (winLose === 'win') {
          console.log("Player wins!"); // Announces win
          incrementWin(); // Increments win counter
          displayResultMessage('win'); // Show win message
        } else if (winLose === 'lose') {
          console.log("Computer wins!"); // Announces loss
          incrementLoss(); // Increments loss counter
          displayResultMessage('lose'); // Show lose message
        } else {
          console.log("You done messed up A-a-ron!"); // Error announcer. Should never execute.
        }
      }

      // ------------------------------------------------------------ ||


      // JS code for bootstrap modal
      const myModal = document.getElementById('myModal')
      const myInput = document.getElementById('myInput')

      myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })