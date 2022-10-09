var min = 1
var max = 3
function comp(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let snake = 1;
let water = 2;
let gun = 3;
var chance=0;
var score=0;
do{
let input = prompt("enter: snake is 1, water is 2, gun is 3")
input = Number.parseInt(input)
let cin = comp(min,max)

if(input==cin){
    alert("its a tie!")
    
}
else if(input==1 && cin==2){
    alert("you win!")
    score=score+1;
}
else if(input==1 && cin==3){
    alert("you lose")
    score=score-1;

}
else if(input==2 && cin==1){
    alert("you lose")
    score=score-1;

}
else if(input==2 && cin==3){
    alert("you win")
    score=score+1;

}
else if(input==3 && cin==1){
    alert("you win")
    score=score+1;

}
else if(input==3 && cin==2){
    alert("you lose")
    score=score-1;

}
else{
    alert("please enter in format: snake-1, water-2, gun-3")
}
chance++;
}while(chance<10);

if(score>5){
    alert("great luck!! Congratualtiobns on beating up the computer")
}
else if(score<3){
    alert("terrible luck, noob")
}
else{
    alert("good try")
}

alert(`you have scored ${score}  in 10 tries!!`)