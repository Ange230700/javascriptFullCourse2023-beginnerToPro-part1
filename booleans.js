// TODO: refactor the function later
// TODO: add some parameters to the function later

// update score object
// save it in local storage by converting it to a string
// load it from local storage by converting it back to an object



function RPSrock() {
    let randomNumber = Math.random();
    let computerChoice;
    let result;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = "Rock";
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    if (computerChoice === "Rock") {
        result = "Tie";
    }

    else if (computerChoice === "Paper") {
        result = "You lose";
    }

    else {
        result = "You win";
    }

    alert(`You picked rock. The computer picked ${computerChoice}. ${result}`);
}

function RPSpaper() {
    let randomNumber = Math.random();
    let computerChoice;
    let result;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = "Rock";
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    if (computerChoice === "Rock") {
        result = "You win";
    }

    else if (computerChoice === "Paper") {
        result = "Tie";
    }

    else {
        result = "You lose";
    }

    alert(`You picked paper. The computer picked ${computerChoice}. ${result}`);
}

function RPSscissors() {
    let randomNumber = Math.random();
    let computerChoice;
    let result;

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerChoice = "Rock";
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }

    if (computerChoice === "Rock") {
        result = "You lose";
    }

    else if (computerChoice === "Paper") {
        result = "You win";
    }

    else {
        result = "Tie";
    }

    alert(`You picked scissors. The computer picked ${computerChoice}. ${result}`);
}