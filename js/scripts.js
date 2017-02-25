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

function playerPick(wyborGracza) { 
	var losowanieKomputera
	console.log(wyborGracza); 
}

function getComputerPick() { 
	var possiblePicks = ['rock', 'paper', 'scissors']; 
	return possiblePicks[Math.floor(Math.random()*3)]; 
}