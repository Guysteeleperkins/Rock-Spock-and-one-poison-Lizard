

  setTimeout(function() { moveIcons(userChoice,computerChoice) }, 3000);


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
