
var rn1 = Math.floor(Math.random()*6) + 1;
var randomdice = "dice" + rn1 + ".png";

var randomimage = "images/" + randomdice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);


var rn2 = Math.floor(Math.random()*6) + 1;
var randomdice2 = "dice" + rn2 + ".png";

var randomimage2 = "images/" + randomdice2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(rn1>rn2){
    document.querySelector("h1").innerHTML = "player 1 wins"
}
else if(rn2>rn1){
    document.querySelector("h1").innerHTML = "player 2 wins"
}
else{
    document.querySelector("h1").innerHTML = "DRAW"
}