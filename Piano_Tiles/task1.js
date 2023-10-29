const boxes= document.querySelectorAll('.box');
const lightUp = document.querySelector('.lightTile');
const score=document.querySelector('#score');
let playButton=document.getElementById("playBtn");

let result=0;
let hitTarget;
let timerTile=null;

function randomTile(){
    boxes.forEach(box=>{
        box.classList.remove('lightTile');
    })
    let randomBox=boxes[Math.floor(Math.random()*15)];
    randomBox.classList.add('lightTile');

    hitTarget=randomBox.id;
}

boxes.forEach(box=>{
    box.addEventListener('mousedown',()=>{
        if(box.id==hitTarget){
            result++;
            score.textContent=result;
            hitTarget=null;
        }
        else{
            alert('Game Over!!');
            result=0;
            score.textContent=result;
        }
    })
})

playButton.addEventListener('click',lightStart);
function lightStart(){
    timerTile=setInterval(randomTile,2000);
}

//lightStart();
