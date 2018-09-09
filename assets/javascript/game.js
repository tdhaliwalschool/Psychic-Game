 // Creates an array that lists out all of the options.

 var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',

 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Creating variables to hold the number of wins, losses, and attempts. They start at 0.

var wins = 0;

var losses = 0;

var attempts = 0;



// Create variables that hold references to the places in the HTML where we want to display things.

var directionsText = document.getElementById("directions-text");

var userChoiceText = document.getElementById("userchoice-text");

var computerChoiceText = document.getElementById("computerchoice-text");

var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");

var attemptsText = document.getElementById("attempts-text");



// This function is run whenever the user presses a key.

document.onkeyup = function (event) {



 // Determines which key was pressed.

 var userGuess = event.key;



 // Randomly chooses a choice from the options array. This is the Computer's guess.

 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



 // Reworked our code from last step to use "else if" instead of lots of if statements.



 // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number



 if (userGuess === computerGuess) {

     wins++ , attempts++;

 } else {

     losses++ , attempts++;



     // OUTPUT - Display the user and computer guesses, and wins/losses/attempts.



     userChoiceText.textContent = "You chose: " + userGuess;

     computerChoiceText.textContent = "The computer chose: " + computerGuess;

     winsText.textContent = "wins: " + wins;

     lossesText.textContent = "losses: " + losses;

     attemptsText.textContent = "attempts: " + attempts;

 }
}

