var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: 	"images/king-of-diamonds.png"
}
];


var cardOne = cards[0];
var cardTwo = cards[2];
var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


//cardsInPlay could b subed 4 cardOne
console.log('User flipped ' + cardsInPlay[0].rank + " " + cardsInPlay[0].cardImage + " " + cardsInPlay[0].suit);
console.log('User flipped ' + cardsInPlay[1].rank + " " + cardsInPlay[1].cardImage + " " + cardsInPlay[1].suit);

if(cardsInPlay.length === 2);
if(cardsInPlay[0] === cardsInPlay[1]) { 
  alert("You found a match!");
} else if (alert("Sorry, try again.")){
}









 












