var Letter = require("./letter.js");

function Word(inputWord) {
    this.guessArray = [];
    var inputArray = inputWord.split("");
    inputArray.forEach(l => {
        let letter = new Letter(l);
        this.guessArray.push(letter)
        return this.guessArray
    });

    this.answeOutput = function () {
        answerOutput = "";

        this.guessArray.forEach(postionLetter => {
            answerOutput += postionLetter.toPlaceholder() + " ";
        })

        console.log(answerOutput + "\n");
    }

    this.inputGuess = function (input) {
        this.guessArray.forEach(inputGuessedLetter => {
            inputGuessedLetter.checkGuess(input);
        })

    }


}

module.exports = Word;
