// First Die
let randomNumber1 = Math.floor(Math.random() * 6 + 1);

document.querySelector('.img1[src]').setAttribute('src', './images/dice' + randomNumber1 + '.png');

// Second Die
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector('.img2[src]').setAttribute('src', './images/dice' + randomNumber2 + '.png');

// Winner message
if (randomNumber1 > randomNumber2) {
	document.querySelector('h1').innerText = '🚩Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
	document.querySelector('h1').innerText = 'Player 2 Wins!🚩';
} else {
	document.querySelector('h1').innerText = "It's a Draw!";
}
