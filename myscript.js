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
