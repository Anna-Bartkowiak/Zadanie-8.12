var player = { 
		name: '', 
		score: 0 
	},
	computer = { 
		score: 0 
	};

var statusGry = 0;
ukrywanieElementow(statusGry);

function newGame() {
	player.name = prompt('Wpisz swoje imię');
	var newName = document.getElementById('js-playerName');
	newName.innerText = player.name;
	statusGry = 1;
	ukrywanieElementow(statusGry);
}

var newGameBtn = document.getElementById('js-newGameButton'); 
newGameBtn.addEventListener('click', function () {newGame()});

function ukrywanieElementow(statusGry) {
	if (statusGry==0) {
		document.getElementById("plansza").style.visibility = "hidden";
	} else if (statusGry==1) {
		document.getElementById("plansza").style.visibility = "visible";
		document.getElementById("js-newGameElement").style.visibility = "hidden";
	}
}

var pickRock = document.getElementById('js-playerPick_rock'), 
	pickPaper = document.getElementById('js-playerPick_paper'), 
	pickScissors = document.getElementById('js-playerPick_scissors'); 

pickRock.addEventListener('click', function() { 
	playerPick('rock') 
}); 

pickPaper.addEventListener('click', function() { 
	playerPick('papier') 
}); 

pickScissors.addEventListener('click', function() { 
	playerPick('scissors') 
});

var playerPickElem = document.getElementById('js-playerPick'), 
	computerPickElem = document.getElementById('js-computerPick'), 
	playerResultElem = document.getElementById('js-playerResult'), 
	computerResultElem = document.getElementById('js-computerResult');

function playerPick(wyborGracza) { 
	var wyborKomputera = getComputerPick();
	console.log('wybór gracza: ' + wyborGracza + '   wybór komputera: ' + wyborKomputera); 

	playerPickElem.innerHTML = wyborGracza; 
	computerPickElem.innerHTML = wyborKomputera;

	checkRoundWinner(wyborGracza, wyborKomputera);
}

function getComputerPick() { 
	var possiblePicks = ['rock', 'paper', 'scissors']; 
	return possiblePicks[Math.floor(Math.random()*3)]; 
}

function checkRoundWinner(playerPick, computerPick) { 
	playerResultElem.innerHTML = computerResultElem.innerHTML = ''; 

	var winnerIs = 'player'; 

	if (playerPick == computerPick) { 
		winnerIs = 'noone'; // remis 
	} else if ( 
		(computerPick == 'rock' && playerPick == 'scissors') || 
		(computerPick == 'scissors' && playerPick == 'paper') || 
		(computerPick == 'paper' && playerPick == 'rock') ) { 

		winnerIs = 'computer'; 
	} 
	if (winnerIs == 'player') { 
		playerResultElem.innerHTML = "Wygrana!"; 
		player.score++; 
	} else if (winnerIs == 'computer') { 
		computerResultElem.innerHTML = "Wygrana!"; 
		computer.score++; } 
	}

	function setGamePoints() { playerPointsElem.innerHTML = player.score; computerPointsElem.innerHTML = computer.score; }