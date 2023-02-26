function myfunc() {
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("bo1").value;
	b2 = document.getElementById("bo2").value;
	b3 = document.getElementById("bo3").value;
	b4 = document.getElementById("bo4").value;
	b5 = document.getElementById("bo5").value;
	b6 = document.getElementById("bo6").value;
	b7 = document.getElementById("bo7").value;
	b8 = document.getElementById("bo8").value;
	b9 = document.getElementById("bo9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields

	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;

		window.alert('Player X won');
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		window.alert('Player X won');
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finish
	// Checking for Player 0 starts
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo6").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo5").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo4").disabled = true;
		document.getElementById("bo6").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("bo1").disabled = true;
		document.getElementById("bo2").disabled = true;
		document.getElementById("bo3").disabled = true;
		document.getElementById("bo7").disabled = true;
		document.getElementById("bo8").disabled = true;
		document.getElementById("bo9").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finish
	// Here this is Checking about tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('No one win restart again');
	}
	else {

		//below is Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfunc_10() {
	location.reload();
	document.getElementById('bo1').value = '';
	document.getElementById("bo2").value = '';
	document.getElementById("bo3").value = '';
	document.getElementById("bo4").value = '';
	document.getElementById("bo5").value = '';
	document.getElementById("bo6").value = '';
	document.getElementById("bo7").value = '';
	document.getElementById("bo8").value = '';
	document.getElementById("bo9").value = '';
}

//  functions check turn off the player
// and put accordingly value X or 0
flag = 1;
function myfunc_1() {
	if (flag == 1) {
		document.getElementById("bo1").value = "X";
		document.getElementById("bo1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo1").value = "0";
		document.getElementById("bo1").disabled = true;
		flag=1;
	}
}

function myfunc_2() {
	if (flag == 1) {
		document.getElementById("bo2").value = "X";
		document.getElementById("bo2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo2").value = "0";
		document.getElementById("bo2").disabled = true;
		flag = 1;
	}
}

function myfunc_3() {
	if (flag == 1) {
		document.getElementById("bo3").value = "X";
		document.getElementById("bo3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo3").value = "0";
		document.getElementById("bo3").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("bo4").value = "X";
		document.getElementById("bo4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo4").value = "0";
		document.getElementById("bo4").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("bo5").value = "X";
		document.getElementById("bo5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo5").value = "0";
		document.getElementById("bo5").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("bo6").value = "X";
		document.getElementById("bo6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo6").value = "0";
		document.getElementById("bo6").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("bo7").value = "X";
		document.getElementById("bo7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo7").value = "0";
		document.getElementById("bo7").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("bo8").value = "X";
		document.getElementById("bo8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo8").value = "0";
		document.getElementById("bo8").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("bo9").value = "X";
		document.getElementById("bo9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("bo9").value = "0";
		document.getElementById("bo9").disabled = true;
		flag = 1;
	}
}
//the end !!!!
