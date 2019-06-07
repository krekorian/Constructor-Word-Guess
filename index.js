var Word = require("./word.js");
var inquirer = require("inquirer");

var soccerTeam = ["Manchester United", "Arsenal", "Liverpool", "Bayern Munich", "AC Milan", "Juventus", "Real Madrid", "Barcelona"];

var wordToGuess = pickTeam();
var alreadyCorrectGuessed = [];
var alreadyInCorrectGuessed = [];
var numberGuessLeft = 10;
// console.log(wordToGuess);
guessingWord = new Word(wordToGuess);
// console.log(guessingWord);
function guessGame() {

    var solvedWord = [];
    // console.log(guessingWord);
    guessingWord.guessArray.forEach(fullWordCheck => {
        // console.log(fullWordCheck);
        solvedWord.push(fullWordCheck.isGuessed);
    });


    if (solvedWord.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter",
                    name: "userInput"
                }
            ])
            .then(function (input) {

                //check if the use entered a number, non-character, or more than one character
                if (input.userInput == /^[a-z\u00C0-\u00ff\s]+$/ || input.userInput.length > 1) {
                    console.log("Please enter one character between A-Z");
                    guessGame();
                } else {

                    if (alreadyInCorrectGuessed.includes(input.userInput) || alreadyCorrectGuessed.includes(input.userInput) || input.userInput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        knowledge();
                    } else {
                        var checkArray = [];
                        console.log(wordToGuess);
                        guessingWord.inputGuess(input.userInput);
                        guessingWord.guessArray.forEach(wordCheck => {
                            // console.log(fullWordCheck);
                            checkArray.push(wordCheck.isGuessed);
                        });

                        console.log(checkArray);
                        console.log(solvedWord);

                        if (solvedWord.join("") === checkArray.join("")) {
                            console.log("\nIncorrect\n");
                            console.log(numberGuessLeft + " guesses remaining")
                            alreadyInCorrectGuessed.push(input.userinput);
                            numberGuessLeft--;
                        } else {
                            console.log("\nCorrect!\n");

                            alreadyCorrectGuessed.push(input.userinput);

                        }
                        guessingWord.answeOutput();

                        if (guessesLeft > 0) {
                            // Call the function for the next word
                            guessGame()
                        } else {
                            console.log("Sorry, you lost, try anothre word\n");
                            //Pick a new team
                            pickTeam();
                            //restart the game
                            restartGame();
                        }
                    }

                }
            });

    } else {
        console.log("You for it right! Next word\n");
        //Pick a new team
        pickTeam();
        //restart the game
        restartGame();
    }


}

function pickTeam() {
    var randomNumber = Math.floor(Math.random() * soccerTeam.length);
    var pickedTeam = soccerTeam[randomNumber];
    return (pickedTeam);
}

guessGame();
