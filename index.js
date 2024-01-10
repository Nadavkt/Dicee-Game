
// Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Player 1 & Player 2, 2 diffrent ways of writing the same code.

// The game itself
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "👑 player 1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h2").innerHTML = "👑 player 2 wins";
}
else{
    document.querySelector("h2").innerHTML = "🤷🏻 Draw !!!";
}
