var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardone = cards[0];
var cardtwo = cards[2];
cardsInPlay.push(cardone);
cardsInPlay.push(cardtwo);


console.log("User flipped" + " " + cardone);
console.log("User flipped" + " " + cardtwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1])
    alert("You found a match!");
  else
    alert("Sorry try again.");
}
