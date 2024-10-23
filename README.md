
![Logo](put url link here - delete this text)

# Spock and Roll

[LiveSite](put url link here - delete this text)
[Repository](put url link here - delete this text)

Add an image of the finished site here. I like to use [amiresponsive](https://ui.dev/amiresponsive) to get an image of my site on all device sizes, and amiresponsive allows you to click links on the page and scroll, so each device can show a different element of your site.

## Overview
""
Add a Blurb about the site here, what does it do, why did you build it?

Spock and Roll is an online game adaptation of Rock, Paper, Scissors that adds two more elements "Lizard" and "Spock" inspired from the Tv series - The Big Bang Theory. Users can play against a computer and the computer choice and outcome of the game will be visible to the user. This creates a fun interactive game for the player.

## Target Audience
""

👩🏻‍💻 View an example of this section [here](https://github.com/kera-cudmore/Bully-Book-Club#bully-book-club-website)


---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Deployment](#deployment)
  * [Local Development](#local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

👩🏻‍💻 View an example of a completed user experience section [here](https://github.com/kera-cudmore/Bully-Book-Club#user-experience-ux)

Spock and Roll is an online game adaptation of Rock, Paper, Scissors that adds two more elements "Lizard" and "Spock" inspired from the Tv series - The Big Bang Theory. Users can play against a computer and the computer choice and outcome of the game will be visible to the user. This creates a fun interactive game for the player.

### Rules
- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock
- (and as it always has) Rock crushes Scissors


## User Stories

### Must Have User Stories
---

### 1. User Story: Game Selection
**As a user**, I want to select either "Rock," "Paper," "Scissors," "Lizard," or "Spock" before each round, so that I can play the game with my preferred choice.

#### Acceptance Criteria:
- The game offers five clickable buttons, each representing one of the possible choices.
- I can select my choice by clicking a button.
- After selection, the system registers my choice for the current round.

### 2. User Story: Computer Opponent
**As a user**, I want the computer to automatically select a random choice after I’ve made my selection, so that I can play against an AI opponent.

#### Acceptance Criteria:
- The computer’s choice is made randomly.
- The computer’s choice is displayed after the user makes a choice.
- The game compares the user’s choice and the computer’s choice to determine the winner.
- The computer determines user patterns and adapts choices to be more likely to win.

### 3. User Story: Score Tracking
**As a user**, I want to keep track of the score between myself and the computer, so that I can monitor my performance over multiple rounds.

#### Acceptance Criteria:
- A scoreboard is visible during the game.
- The scoreboard updates after each round, displaying the total wins, losses, and ties for both the player and the computer.
- The scores reset when the player starts a new game session.

### 4. User Story: Game Result Display
**As a user**, I want to see a clear message showing whether I won, lost, or tied after each round, so that I can understand the outcome.

#### Acceptance Criteria:
- After each round, a result message displays ("You Win!", "You Lose!", or "It's a Tie!").
- The message displays the interactions between the player’s and the computer’s choices.
- The message disappears when a new round starts.

### 5. User Story: Mobile Responsiveness
**As a user playing on a mobile device**, I want the game interface to be responsive and easy to use on a smaller screen, so that I can enjoy the game on my phone or tablet.

#### Acceptance Criteria:
- The game layout adjusts to various screen sizes.
- Buttons are large enough to be tapped easily on a mobile device.
- All text and icons are readable without zooming in.

### 6. User Story: Rules Display
**As a user**, I want to see the rules of the game on the homepage, so that I can understand how each choice interacts with the others.

#### Acceptance Criteria:
- A section of the homepage explains how each option beats or loses to the others.
- The rules are clear, concise, and easy to understand.

---

### Should Have User Stories
---

### 1. User Story: Play Again Option
**As a user**, I want an easy way to play another round after a match ends, so that I can continue playing without refreshing the page.

#### Acceptance Criteria:
- After each round, a “Play Again” button appears.
- Clicking the button resets the game to the initial selection phase without resetting the total score.

### 2. User Story: Picture Feedback
**As a user**, I want to see visual feedback when I make my selection, so that I know the game registered my input.

#### Acceptance Criteria:
- After selecting an option, a picture represents the choice that has been made.
- The computer’s choice is also accompanied by visual feedback.

### 3. User Story: Pick Player
**As a user**, I want to be able to pick a character that I can play as from a list of characters.

#### Acceptance Criteria:
- The player is able to choose an avatar from a list of characters.

---

### Could Have User Stories
---

### 1. User Story: Game Length
**As a user**, I would like to determine the number of individual games in each round, so I can play best of 3, 5, etc.

#### Acceptance Criteria:
- The user has a selection of buttons to determine game length in rounds.
- The winner is determined by winning the set number of rounds.

### 2. User Story: Sound Effects
**As a user**, I want the game to have sound effects for selections, results, and victories, so that the gameplay feels more immersive.

#### Acceptance Criteria:
- Sound effects play when the user makes a choice, when the computer makes a choice, and when the round result is displayed.
- The user can toggle sound effects on or off via a settings menu.


### 3. User Story: Difficulty Levels
**As a user**, I want to be able to make the game more difficult by preventing the spamming of one choice.

#### Acceptance Criteria:
- The game will have two levels of difficulty:
  - **Easy**: Computer choice is completely random.
  - **Difficult**: Computer recognizes patterns in the user's choices and adapts its choices accordingly.

---

### Won't Have User Stories
---

### 1. User Story: 2 Player
**As a user**, I would like to be able to play a game against my friend.



### 2. User Story: Timed Mode
**As a user**, I want the option to play a timed mode where I have a limited time to make a choice, so that I can add a layer of challenge to the game.


## Design

👩🏻‍💻 View an example of a completed design section [here](https://github.com/kera-cudmore/earth-day-hackathon-2022#Design)

### Colour Scheme


### Typography


### Imagery

Use this section to explain what sort of imagery you plan to use through your site.

### Wireframes

Add the images or links for your wireframes here.


## Features

This section can be used to explain what pages your site is made up of.


### Future Implementations

What features would you like to implement in the future on your site? Would you like to add more pages, or create login functionality? Add these plans here.

### Accessibility

Be an amazing developer and get used to thinking about accessibility in all of your projects!

This is the place to make a note of anything you have done with accessibility in mind. Some examples include:

Have you used icons and added aria-labels to enable screen readers to understand these?
Have you ensured your site meets the minimum contrast requirements?
Have you chosen fonts that are dyslexia/accessible friendly?

## Technologies Used

👩🏻‍💻 View an example of a completed Technologies Used section [here](https://github.com/kera-cudmore/Bully-Book-Club#Technologies-Used)

### Languages Used

Make a note here of all the languages used in creating your project. For the first project this will most likely just be HTML & CSS.

### Frameworks, Libraries & Programs Used

Add any frameworks, libraries or programs used while creating your project.

Make sure to include things like git, GitHub, the program used to make your wireframes, any programs used to compress your images, did you use a CSS framework like Bootstrap? If so add it here (add the version used).

A great tip for this section is to include them as you use them, that way you won't forget what you ended up using when you get to the end of your project.

## Deployment & Local Development

👩🏻‍💻 View an example of a completed Deployment & Local Development section [here](https://github.com/kera-cudmore/TheQuizArms#Deployment)

### Deployment

Include instructions here on how to deploy your project. For your first project you will most likely be using GitHub Pages.

### Local Development

The local development section gives instructions on how someone else could make a copy of your project to play with on their local machine. This section will get more complex in the later projects, and can be a great reference to yourself if you forget how to do this.

#### How to Fork

Place instructions on how to fork your project here.

#### How to Clone

Place instructions on how to clone your project here.

## Testing

Start as you mean to go on - and get used to writing a TESTING.md file from the very first project!

Testing requirements aren't massive for your first project, however if you start using a TESTING.md file from your first project you will thank yourself later when completing your later projects, which will contain much more information.
  
Use this part of the README to link to your TESTING.md file - you can view the example TESTING.md file [here](milestone1-testing.md)

## Credits

👩🏻‍💻 View an example of a completed Credits section [here](https://github.com/kera-cudmore/BookWorm#Credits)

The Credits section is where you can credit all the people and sources you used throughout your project.

### Code Used

If you have used some code in your project that you didn't write, this is the place to make note of it. Credit the author of the code and if possible a link to where you found the code. You could also add in a brief description of what the code does, or what you are using it for here.

### Content

Who wrote the content for the website? Was it yourself - or have you made the site for someone and they specified what the site was to say? This is the best place to put this information.

###  Media

If you have used any media on your site (images, audio, video etc) you can credit them here. I like to link back to the source where I found the media, and include where on the site the image is used.
  
###  Acknowledgments

If someone helped you out during your project, you can acknowledge them here! For example someone may have taken the time to help you on slack with a problem. Pop a little thank you here with a note of what they helped you with (I like to try and link back to their GitHub or Linked In account too). This is also a great place to thank your mentor and tutor support if you used them.