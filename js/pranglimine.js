var timeLeft;
var taimOuter;
var answer;
var signs = ['+', '-', '*'];
var difficultyLevel = {ez: 2, medium: 2, hard: 3};
var problemsSum;
var solvedProblemsSum;
var score = 0;
var difficulty;
var answerTag = document.getElementById("vastus");
var inputedAnswer = "";
var numberOfOperations = 0;

function startGame() {
	clearTimeout(taimOuter);
	timeLeft = 60;
    difficulty = document.getElementById("difficultyLevel").value;
	document.getElementById('tehe').innerHTML = generateOperation(difficulty);
    taimer();
    printScore();
}

function generateOperation(difficulty) {
    //decide which operation: 0 - '+', 1 - '-'
    sign = Math.floor(Math.random() * difficultyLevel[difficulty]);
    //depending on what the difficulty level and operation are, choose max and min
    if (difficulty == "ez") {
        var max = 20;
        var min = 1;
    } else if (difficulty == "medium") {
        var max = 100;
        var min = 20;
    } else {
        if (sign == 2) {
            var max = 20;
            var min = 2;
        } else {
            var max = 300;
            var min = 50;
        }
    }
    //get random numbers whit what you will do you operation with
    number1 = Math.floor(Math.random() * (max - min + 1) + min);
    number2 = Math.floor(Math.random() * (number1 - min + 1) + min);
    //calculate the answer
    if (sign == 0) {
        answer = number1 + number2;
    } else if (sign == 1) {
        answer = number1 - number2;
    } else if (sign == 2) {
        answer = number1 * number2;
    }
    return 'Tehe: ' + number1 + signs[sign] + number2 + "=";
}


function submitHighScore() {
    highScoresdata = generateHighScoresJson();
    printHighScores();
}

function generateHighScoresJson() {
    var highScores = {};
    highScores["difficulty"] = difficulty;
    highScores["difficulty"] = difficulty;

}

function printHighScores() {
    var now = new Date();
    var formatedDate = now.toLocaleTimeString();
    var highScoresTable = document.getElementById("highScoresTable");
    highScoresTable.innerHTML +=
        "<tr>" +
        "<td>" +
        difficulty +
        "</td>" +
        "<td>" +
        numberOfOperations +
        "</td>" +
        "<td>" +
        score +
        "</td>" +
        "<td>" +
        formatedDate +
        "</td>" +
        "</tr>"
}

function taimer() {
    if (timeLeft > 0) {
        timeLeft -= 1;
        taimOuter = setTimeout(function () {
            taimer()
        }, 1000);
		document.getElementById('aeg').innerHTML = "Aega jäänud: " + timeLeft + "s";
    } else {
		document.getElementById('aeg').innerHTML = "Aeg otsas :(";
        alert("Time's up kids");
        clearTimeout(taimOuter);
        submitHighScore(score);
        score = 0;
    }
}

function clearAnwserPlace() {
    answerTag.innerHTML = "_";
    inputedAnswer = "";
}

function printScore() {
    var scoreTag = document.getElementById("skoor");
    scoreTag.innerHTML = score;
}

function checkAnswer() {
    if (inputedAnswer == answer) {
        score++;
		//kuna siin tuleks uus tehe genereerida, siis lihtsalt document.getElementById('tehe').innerHTML = generateOperation(difficulty); timmiks siin
        document.getElementById('tehe').innerHTML = generateOperation(difficulty);
        clearAnwserPlace();
    } else {
    }
    printScore();
    numberOfOperations++;
    clearAnwserPlace();
}

function buttonPressed(inputButton) {
    if (inputButton === "del") {
        if (inputedAnswer.length > 0) {
            inputedAnswer = inputedAnswer.substring(0, inputedAnswer.length - 1);
        }
    } else if (inputButton === "enter") {
        checkAnswer();
    } else {
        inputedAnswer += inputButton;
    }
    answerTag.innerHTML = inputedAnswer;

}