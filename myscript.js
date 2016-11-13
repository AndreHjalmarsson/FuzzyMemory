let cardArray = [
"images/ball.png",
"images/ball.png",
"images/egg.png",
"images/egg.png",
"images/obama.png",
"images/obama.png",
"images/hand.png",
"images/hand.png",
"images/shoe.png",
"images/shoe.png",
"images/clown.png",
"images/clown.png",
"images/alien.png",
"images/alien.png",
"images/froggy.png",
"images/froggy.png",
"images/pig.png",
"images/pig.png",
"images/snake.png",
"images/snake.png",
];
let chosenCards = [];
let cardPosition = [];
let cardsFlipped = 0;

//Creating a function for shuffeling the array objects.
Array.prototype.arrayShuffel = function(){
    let currentIndex = this.length, temporaryValue, randomIndex;
    while(--currentIndex > 0){
        randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        temporaryValue = this[randomIndex];
        this[randomIndex] = this[currentIndex];
        this[currentIndex] = temporaryValue;
    }
}
//Creating function for reseting the game.
function resetGame(){
	cardsFlipped = 0;
	let newCards = '';
    cardArray.arrayShuffel();
	for(let i = 0; i < cardArray.length; i++){
		newCards += '<div id="card' + i + '"onclick="flipCards(this,\'' + cardArray[i] + '\')"></div>'; //Creating divs with id's containing the card values
	}
	let generateNewCards = document.querySelector('.board');
	generateNewCards.innerHTML = newCards;
}

function flipCards(card, cardContent){
	if(card.innerHTML === "" && chosenCards.length < 2){
		card.style.backgroundImage = "url('images/maincolor.png')";
		card.innerHTML = '<img src="'+cardContent+'"/>';

		if(chosenCards.length === 0){
			chosenCards.push(cardContent);
			cardPosition.push(card.id); //Pushes the card value and its position into two seperate arrays to keep track of chosen cards
		} else if(chosenCards.length === 1){ //Checks the number of entries in the array
			chosenCards.push(cardContent);
			cardPosition.push(card.id);
			if(chosenCards[0] === chosenCards[1]){ //Checks if the cards are a match
				cardsFlipped += 2; //Adds to the amount of matched cards if user makes a match
				   chosenCards = [];
            	cardPosition = [];//Clears the arrays if user made a match

				if(cardsFlipped === cardArray.length){
          let btn = document.createElement("BUTTON");
          let t = document.createTextNode("Create new game!");
          btn.appendChild(t);
          document.querySelector("main").appendChild(btn);

          btn.addEventListener("click", function(event){ //Adds a button with clickevent to generate new game if user finishes a game
            let board = document.querySelector('.board');
            board.innerHTML = "";
            btn.style.display = 'none'
            resetGame();
          });
				}
			} else {
				//Creates a function to flip the cards back over when not matched
				function wrongPair(){
				    let cardOne = document.getElementById(cardPosition[0]);
				    let cardTwo = document.getElementById(cardPosition[1]);
				    cardOne.style.backgroundImage = "url('images/memorym.png')";
            	    cardOne.innerHTML = "";
				    cardTwo.style.backgroundImage = "url('images/memorym.png')";
            	    cardTwo.innerHTML = "";
				       chosenCards = [];
            	    cardPosition = [];//Clears the arrays if user did not make a match
				}
				setTimeout(wrongPair, 1100); //Set a timer for the cards to flip back when not matched
			}
		}
	}
}
