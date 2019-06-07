var Letter = function (inputLetter) {
    this.letter = inputLetter;
    this.isGuessed = false;

    this.toPlaceholder = function () {
        if (this.letter === " ") {
            this.isGuessed = true;
            return (" ")
        }
        else {
            if (this.isGuessed === false) {
                return ("_");
            } else {
                return (this.letter);
            }

        }
    }


    this.checkGuess = function (inputguess) {
        // console.log(inputguess);
        if (inputguess === this.letter) {
            this.isGuessed = true;
        }

    }
}


module.exports = Letter;

