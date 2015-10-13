var answer;
var signs = ["+", "-"];
var answerTag = document.getElementById('vastus');
var inputedAnswer = "";
var TehteTag = document.getElementById('tehe');


function startGame() {
	TehteTag.innerHTML = generateOperation();
	
}

function generateOperation() {
	var sign = Math.floor(Math.random() * 2);
	
	var max = 20;
	var min = 1;
	
	var number1 = Math.floor(Math.random() * (max - min + 1) + min);
	var number2 = Math.floor(Math.random() * (number1 - min + 1) + min);
	
	if(sign == 0){
		answer = number1 + number2;
	}else if(sign == 1){
		answer = number1 - number2;
	}
	return "Tehe: " + number1 + signs[sign] + number2 + "=";
}
function buttonPressed(number) {
	if (number == 'del') {
		inputedAnswer = 
		inputedAnswer.substring(0, inputedAnswer.length-1);
	}else if (number == 'enter'){
		console.log("enter nuppu vajutati");
		checkAnswer();
	} else {
		inputedAnswer += number;
	}
	answerTag.innerHTML = inputedAnswer;
}
function checkAnswer() {
	if (inputedAnswer == answer) {
		console.log("vastus oli õige");
		clearAnswerTag();
	} else {
		console.log("vastus oli vale");
	}
}
function clearAnswerTag() {
	answerTag.innerHTML = "";
	inputedAnswer = "";
	TehteTag.innerHTML = generateOperation();
}