var a= Math.floor(Math.random()*6);
var randomNumber1 = a + 1;
var randomdiceimg = "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdiceimg);

var b= Math.floor(Math.random()*6);
var randomNumber2 = b + 1;
var randomdiceimg = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomdiceimg);

if (a>b) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 1 Wins!!";
} else if (a<b) {
    document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!!";
}