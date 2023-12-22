let listRandomNumbers = [];
let numberLimit =10
let randomNumber = randomNumberGenerator();
let attempts = 1;

function displayOnScreen(tag, text){
    let range = document.querySelector(tag);
    range.innerHTML = text;
    responsiveVoice.speak(text, "US English Female", {rate:1.2});
}

displayOnScreen("h1", "Game of the secret number");
displayOnScreen("p", "Choose a number between 1 and 10");

//let title = document.querySelector("h1");
//title.innerHTML = "Game of the secret number";

//let paragraph = document.querySelector("p");
//paragraph.innerHTML = "Choose a number between 1 and 10";
function displayMessage(){
    displayOnScreen("h1", "Game of the secret number");
    displayOnScreen("p", "Choose a number between 1 and 10");

}
displayMessage();

function verifyGuess() {
    let guess = document.querySelector("input").value;
    if (guess == randomNumber){
        displayOnScreen("h1", "Correct!");
        let wordAttempts = attempts > 1 ? "attempts" : "attempt";
        let messageAttempts = `You discovered the secret number if ${attempts} ${wordAttempts}`;
        displayOnScreen("p", messageAttempts);
        document.getElementById("restart").removeAttribute("disabled");
    } else {
        if (guess > randomNumber) {
            displayOnScreen("h1", "The secret number is smaller");
        } else {
            displayOnScreen("h1", "The secret number is bigger");
        }
        attempts++;
        clearRange();
    }
}
function randomNumberGenerator() {
    let chosenNumber =  parseInt(Math.random() * numberLimit + 1);
    let quantityElementsList = listRandomNumbers.length;

    if (quantityElementsList == numberLimit) {
        listRandomNumbers = [];
    }
    if (listRandomNumbers.includes(chosenNumber)) {
        return randomNumberGenerator();
    } else {
        listRandomNumbers.push(chosenNumber);
        console.log(listRandomNumbers)
        return chosenNumber;
    }
}

function clearRange() {
    guess = document.querySelector("input");
    guess.value = "";
}

function restartGame() {
    randomNumber = randomNumberGenerator();
    clearRange();
    attempts = 1;
    displayMessage();
    document.getElementById("restart").setAttribute("disabled", true);
}




