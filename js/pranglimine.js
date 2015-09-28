var timeLeft;
var taimOuter;
var answer;
var signs = ['+', '-', '*'];
var difficultyLevel = {ez:2, medium:2, hard:3};

function startGame() {
	timeLeft = 60;
	difficulty = document.getElementById("difficultyLevel").value;
	generateOperation(difficulty);
}

function generateOperation(difficulty) {
	//decide which operation: 0 - '+', 1 - '-'
	sign = Math.floor(Math.random() * difficultyLevel[difficulty]);
	//depending on what the difficulty level and operation are, choose max and min
	if(difficulty == "ez"){
		var max = 20;
		var min = 1;
	}else if(difficulty == "medium") {
		var max = 100;
		var min = 20;
	}else{
		if(sign == 2){
			var max = 20;
			var min = 2;
		}else{
			var max = 300;
			var min = 50;
		}
	}
	//get random numbers whit what you will do you operation with
	number1 = Math.floor(Math.random()*(max-min+1)+min);
	number2 = Math.floor(Math.random()*(number1-min+1)+min);
	//calculate the answer
	if(sign == 0){
		answer = number1 + number2;
	}else if(sign == 1){
		answer = number1 - number2;
	}else if(sign == 2){
		answer = number1 * number2;
	}
	document.getElementById('tehe').innerHTML = 'Tehe: ' + number1 + signs[sign] + number2 + "=";
}

function setTaimer() {
	if(timeLeft > 0){
		timeLeft -= 1;
		taimOuter = setTimeout(function(){taimer()}, 1000);
	}else{
		alert("Time's up kids");
		clearTimeout(taimOuter);
	}
	
}