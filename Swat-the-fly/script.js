//accessing html element into js
const fly = document.getElementById("fly"); 
const swat = document.getElementById("swat");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const gamebox = document.getElementById("gamebox");
const overlay = document.getElementById("overlay");


//declaring useful variables
let score=0;
let lives=3; 
let time=5
let timer
let speed=1000;

//usage of prompt to get input from user
function promptName(){
    let user=prompt("Enter your name")
    return user;
}
let username=promptName()
let userx=document.getElementById('user')
userx.innerHTML="Player: "+username


//when onlclick=start(), start it
function start(){
let timex=document.getElementById('time')
timex.innerHTML="Time: "+time 

//Math.random to get random x and y
function getRandomPosition() { 
    const ranX = Math.floor(Math.random() * 350);
    const ranY = Math.floor(Math.random() * 350); 
    return { x: ranX, y: ranY };
}

//assigning random x and y using top and left
function moveFly() {
    const newPosition = getRandomPosition();
    fly.style.left = `${newPosition.x}px`;//backticks usage
    fly.style.top = `${newPosition.y}px`;
} 


timer=setInterval(decreasetime,speed)

//speed regulator
function scorecheck(){
if(score>10){
    speed=500; 
}
else if(score>20){
    speed=250;
}
else if(score>30){
    speed=125;
}
} 

//decreasing time 
function decreasetime(){ 
    if(time>0){
    time--; 
    console.log("Time left"+time)
    timex.innerHTML="Time: "+time;}
    else{
        clearInterval(timer)
        return endGame();   
    }
}
 
//fly click using addEventListener
fly.addEventListener("click", (event) => {
    event.stopPropagation();//it stops event effect to reach the parent div
    clearInterval(timer)
    time=6; //backing to t=6
    timer=setInterval(decreasetime,speed) 
    updateScore(); //updating score
    moveFly(); 
});

//gamebox click using addEventListener
gamebox.addEventListener("click", () => { 
    console.log("Lives:"+lives)
    checklives();
});

//scorefunction
function updateScore() {
    score+=1;
    scorecheck()
    const scoreshow = document.getElementById("score");
    scoreshow.textContent = `Score: ${score}`;
}

//lives checker
function checklives(){
    lives-=1;
    const liveshow=document.getElementById("lives")
    liveshow.textContent=`Lives: ${lives}`
    if(lives==0){
        return endGame()//endGame   
    }
}
overlay.style.display = "none";
startButton.disabled = true;
pauseButton.disabled = false;
}

function pause() {
    clearInterval(timer); // pausing timer
    overlay.style.display = "block"; //overlay 
    startButton.disabled = false;//enable
    pauseButton.disabled = true;//disable
}

//endGame
function endGame(){
    clearInterval(timer);   
    document.querySelector('.gameoverlay').style.display = 'block';
    document.querySelector('.scorelay').innerHTML = `Score:${score} `;
}


 
 

 
