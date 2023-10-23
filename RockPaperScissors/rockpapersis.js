let btn1 = document.getElementById('rock');
let btn2 = document.getElementById('cut');
let btn3 = document.getElementById('paper');
let resscore = document.getElementById('red');
let res = document.getElementById('strt');
let user_choice;
let score=0;
let comp_choice;
function rock()
{
    user_choice=0;
    comp_choice=Math.floor(Math.random()*3);
    if(comp_choice==1)
    {
       score+=1;
       res.innerText= Number(score) + " Rock vs Scissors You Win!"; 
    }
    else if(comp_choice==2)
    {
       score-=1;
       res.innerText= Number(score) + " Rock vs Paper You Lose!"; 
    }
    else if(comp_choice==0)
    {
        res.innerText= Number(score) + " Rock vs Rock You Tied!";      
    }
}

function scissors()
{
    user_choice=1;
    comp_choice=Math.floor(Math.random()*3);
    if(comp_choice==1)
    {
       res.innerText= Number(score) + " Scissors vs Scissors You Tied!"; 
    }
    else if(comp_choice==2)
    {
       score++;
       res.innerText= Number(score) + " Scissors vs Paper You Win!"; 
    }
    else if(comp_choice==0)
    {
        score--;
        res.innerText= Number(score) + " Scissors vs Rock You Lose!";      
    }
}
function paper()
{
    user_choice=2;
    comp_choice=Math.floor(Math.random()*3);
    if(comp_choice==1)
    {
        score--;
       res.innerText= Number(score) + " Paper vs Scissors You Lose!"; 
    }
    else if(comp_choice==2)
    {
       res.innerText= Number(score) + " Paper vs Paper You Tied!"; 
    }
    else if(comp_choice==0)
    {
        score++;
        res.innerText= Number(score) + " Paper vs Rock You Win!";      
    }
}
function result()
{
    res.innerText = "Total Score : " + Number(score);
}
btn1.onclick = () => rock();
btn2.onclick = () => scissors();
btn3.onclick = () => paper();
red.onclick = () => result();