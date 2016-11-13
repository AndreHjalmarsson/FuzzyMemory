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

function resetGame(){
	cardsFlipped = 0;
	let newCards = '';
    cardArray.arrayShuffel();
	for(let i = 0; i < cardArray.length; i++){
		newCards += '<div id="card' + i + '"onclick="flipCards(this,\'' + cardArray[i] + '\')"></div>';
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
			cardPosition.push(card.id);
		} else if(chosenCards.length === 1){
			chosenCards.push(cardContent);
			cardPosition.push(card.id);
			if(chosenCards[0] === chosenCards[1]){
				cardsFlipped += 2;
				   chosenCards = [];
            	cardPosition = [];

				if(cardsFlipped === cardArray.length){
          let btn = document.createElement("BUTTON");
          let t = document.createTextNode("Create new game!");
          btn.appendChild(t);
          document.querySelector("main").appendChild(btn);

          btn.addEventListener("click", function(event){
            let board = document.querySelector('.board');
            board.innerHTML = "";
            btn.style.display = 'none'
            resetGame();
          });
				}
			} else {
				function wrongPair(){
				    let cardOne = document.getElementById(cardPosition[0]);
				    let cardTwo = document.getElementById(cardPosition[1]);
				    cardOne.style.backgroundImage = "url('images/memorym.png')";
            	    cardOne.innerHTML = "";
				    cardTwo.style.backgroundImage = "url('images/memorym.png')";
            	    cardTwo.innerHTML = "";
				       chosenCards = [];
            	    cardPosition = [];
				}
				setTimeout(wrongPair, 1100);
			}
		}
	}
}
