const WannaPlay = confirm("Do you want to play?");

if (WannaPlay) {
	const randomNumber = Math.floor(Math.random() * 10) + 1;
	console.log(randomNumber);
	let guess = prompt("Guess the number between 0 to 10?");
	if (guess == randomNumber) {
		alert(`Good job! you guessed ${guess} with your first try! `);
	} else {
		for (let i = 1; i < 5; i++) {
			guess = prompt(`Guess another one, you have ${5 - i} chances left! `);
			if (guess == randomNumber) {
				alert(`Good job, the number was ${randomNumber} `);
				break;
			}
			if (5 - i <= 1) {
				alert(`you lost! the number was ${randomNumber}`);
			}
		}
	}
}
