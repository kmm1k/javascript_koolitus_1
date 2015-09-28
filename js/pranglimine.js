var timeLeft, taimOuter, answer, score;
var signs = ['+', '-'];
score = 0;

function startGame() {
	timeLeft = 60;
	generateOperation();
}

function generateOperation() {
	//decide which operation: 0 - '+', 1 - '-'
	sign = Math.floor(Math.random() * 2);
	//TODO depending on what the difficulty level is, choose max and min
	var max = 100;
	var min = 1;
	//get random numbers whit what you will do you operation with
	number1 = Math.floor(Math.random()*(max-min+1)+min);
	number2 = Math.floor(Math.random()*(number1-min+1)+min);
	if(sign == 0){
		answer = number1 + number2;
	}else if(sign == 1){
		answer = number1 - number2;
	}
	document.getElementById('tehe').innerHTML = 'Tehe: ' + number1 + signs[sign] + number2 + "=";
}

function setTaimer() {
	timeLeft -= 1;
	taimOuter = setTimeout(function(){taimer()}, 1000);
}

function clearAnwserPlace() {
	
}

function checkAnswer(inputedAnswer) {
	if (inputedAnswer == answer) {
		score ++;
		clearAnwserPlace();
	}
}

function buttonPressed(inputButton) {
	var inputedAnswer = "";
	if (inputButton === "del") {
		inputedAnswer.substring(0, inputedAnswer.length-1);
	}else if (inputButton === "enter") {
		checkAnswer(inputedAnswer)
	} else {
		inputedAnswer += inputButton;
	}

}