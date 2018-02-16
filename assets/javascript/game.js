var comicCharacters = ["spiderman", "batman", "catwoman", "aquaman", "superman", "hulk", "supergirl", "robin", "joker"];
var guessesRemaining = 10;

function initializeHangmanGame()
{
    setcomicCharacter();
    buildGameboard(getcomicCharacter().split(""));
    setCorrectGuesses(0);
    setGuessesRemaining(10);
}

function takeGuess()
{
    var guessCharacter = document.getElementById("guess-character").value;

    if(true == validateCharactersubmitted(guessCharacter)) {
        if(true == guessCharacterIncomicCharacter(guessCharacter)) {
            revealLetter(guessCharacter);
        } else {
            setGuessesRemaining(getGuessesRemaining()-1);
            IncorrectGuess();
        }
    } else {
        NoLetter();
    }

    checkForGameOver();
}

function buildGameboard(comicCharacterName)
{
    var lettersInName = getcomicCharacter().split("");

    for (var i = 0; i < lettersInName.length; i++) {
         var input = document.createElement("input");
         input.type = "text";
         input.maxLength = 1;
         input.className = "character-panel[" + lettersInName[i] + "]";
         input.value = "_";
         input.disabled = true;
         document.getElementById("letter-panels").appendChild(input);
     };
}

function validateCharactersubmitted(guessCharacter)
{
    if(0 == guessCharacter.length) {
        return false;
    }
    return true;
}

function guessCharacterIncomicCharacter(guessCharacter, comicCharacter)
{
    if(0 > getcomicCharacter().search(guessCharacter)) {
        return false;
    }
    return true;
}

function getRandomcomicCharacter()
{
    return comicCharacters[Math.floor(Math.random() * (comicCharacters.length-1))];
}

function setcomicCharacter()
{
    document.getElementById("correct-answer").value = getRandomcomicCharacter();
    return true;
}

function getcomicCharacter()
{
    return document.getElementById("correct-answer").value;
}

function setGuessesRemaining(guessesRemaining)
{
    document.getElementById("guesses-remaining").value = guessesRemaining;
}

function getGuessesRemaining()
{
    return parseInt(document.getElementById("guesses-remaining").value);
}

function setCorrectGuesses(correctGuesses)
{
    document.getElementById("correct-guesses").value = correctGuesses;
}

function getCorrectGuesses()
{
    return parseInt(document.getElementById("correct-guesses").value);
}

function revealLetter(letterToReveal)
{
    var panelsToReveal = document.getElementsByClassName("character-panel[" + letterToReveal + "]");

    for (var i = 0; i < panelsToReveal.length; i++) {
        panelsToReveal[i].value = letterToReveal;
        setCorrectGuesses(getCorrectGuesses()+1);
    }
}

function NoLetter()
{
    alert("You need to guess a letter for the mystery comic character.");
    return true;
}

function IncorrectGuess()
{
    alert("Sorry! Your guess was incorect.");
    return true;
}

function Lose()
{
    alert("Sorry! Game Over");
    return true;
}

function Win()
{
    alert("You Win!!");
    return true;
}

function checkForGameOver()
{
    if(0 == getGuessesRemaining()) {
        Lose();
        location.reload();
    } else if(getCorrectGuesses() == getcomicCharacter().length){
        Win();
        location.reload();
    }
}

initializeHangmanGame();