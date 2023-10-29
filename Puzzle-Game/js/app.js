
let n1 = document.getElementById("options1").value;
let n2 = document.getElementById("options2").value;
let boxarea=document.getElementById("boxarea");
let moves =document.getElementById("moves") ;
let countmoves = 0;
let hrline = document.getElementById("hrline");
let boxes;
let timer = document.getElementById("timer");
let counttimer = 0;
let clock;
let reset= document.getElementById("monitor4");
let tbuttonarea = document.getElementById("buttonarea");
let tbuttonarea2 = document.getElementById("buttonarea2");
let tbuttonarea3 = document.getElementById("buttonarea3");
let tbutton = document.getElementById("button");
let tbutton2 = document.getElementById("button2");
let tbutton3 = document.getElementById("button3");
let glass2 = document.getElementsByClassName("glass2");
let bgm = document.querySelector("body");
let colorno = 4;
let colorno2 = 2;
let matrixtype = n1*n2;
let blockedx = -1;
let blockedy = -1;
let highestsc = localStorage.getItem(`highestList${matrixtype}`);
// let loading = document.getElementsByClassName("loader");
hrline.style.width= `150px`;
let bk = 0;

// toggle bars 
changebars= ()=>{
        Array.from(document.getElementsByClassName("sider")).forEach(element=>{
        element.classList.toggle("changer");
        });
        // x.classList.toggle("change");
}



// get highest store fro local storage  
if (highestsc==null) {
    highestsc=-1;        
    highest.innerHTML=`NIL`;
}
else{
    let hsec = highestsc%60;
    let hmin = parseInt(highestsc/60);
    highest.innerHTML=`${hmin}m ${hsec}s`;
}

document.getElementById("options1").addEventListener("change",setup);
document.getElementById("options2").addEventListener("change",setup);

// how to play instrtuctions 
howto.addEventListener("click",()=>{
    alert(`INSTRUCTIONS:

    1.Click on boxes having the blank box in its row or column
    2.Doing this  will shift the blank box to that  position
    3.Like this shift all the boxes to arrange them  in order starting with 
    box numbered 1 on top left , 2 beside it and so on ..
    
    Best of luck!`)
});

let boxareasize = "70px";
let boxsize = "65px";
let boxdist = 70;
// start clock timer 
function startclock() {
    counttimer = 0;
    clock = setInterval(() => {
        counttimer++;
        let sec = counttimer%60;
        let min = parseInt(counttimer/60);
        timer.innerText=`${min}m ${sec}s`; 
    }, 1000);
}
startclock(); 

// get the box contents 
let derivedbox = document.getElementsByClassName("derivedbox");
// blank poistion and current position 
let posx, posy, curx, cury;
boxarea.className=`glass2`; 

// if phone reduce box size 
function checkphone() {
    let x = window.matchMedia("(max-width: 700px)");
    if (x.matches&&n2>4) { // If media query matches
        boxsize = "50px";
        boxareasize = "55px";
        boxdist=55;
        bgm.style.height=`80%`;
    } 
    else {
        boxareasize = "70px";
        boxsize = "65px";
        boxdist = 70;
        bgm.style.height=`80%`;
        // booteffect();
    }
    if (x.matches) {
    }
    // loading animation in big screens 
    else{
        document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector("#loader").style.display=`flex`;
                bgm.style.visibility=`hidden`;
            }
            else
            {
                setTimeout(() => {
                    bgm.style.visibility=``;
                    document.querySelector("#loader").style.display=`none`;
                }, 1200);
            }
        };
    }
}


// run setup 
setup();


// setup the boxes 
function setup()
{
    // loading.style.display = "flex";
    console.log(colorno2);

    n1 = document.getElementById("options1").value;
    n2 = document.getElementById("options2").value;
    // hrline.style.width= `calc(${n2}*100px)`;

    // see if it is a phone 
    checkphone();

    countmoves = 0;

    let str ="";
    boxes = new Array(n1);
    // setting up the boxes  

    if (n1!=3||n2!=3) {
        tbuttonarea3.style.backgroundColor=`rgb(255, 255, 255)`;
        tbutton3.style.transform=`translateX(0px)`;
        bk=0;
    }
    
    if (bk==1) {
        boxareasize = "90px";
        boxsize = "85px";
        boxdist = 90;
    }

    // box styles 
    boxarea.style.cssText=` transition: all 0.8s linear 0s; width:calc(${n2}*${boxareasize}); height:calc(${n1}*${boxareasize});margin-bottom:16px;font-size: 1.8rem;margin-top:20px; z-index: 2;`;

    if (colorno2==1) {
        boxarea.style.boxShadow=`10px 10px 15px 1px rgb(99, 97, 97),-10px -10px 15px 1px rgb(99, 97, 97)`;
    }

    for (let i = 0; i < n1; i++) {
        boxes[i]=new Array(n2);
        for(let j = 0; j< n2; j++)
        {
            {
                // console.log(i);
                if (i!=n1-1||j!=n2-1) 
                {
                    if (bk==0) {
                        boxes[i][j]=i*n2+(j+1);
                        // console.log(boxes[i][j]);
                        str+=`<div style="display:flex; align-items:center; justify-content:center; position:absolute; top:calc(${i}*${boxareasize}); left:calc(${j}*${boxareasize}); height:${boxsize}; width:${boxsize}; transition: all 0.3s ease 0s" class="glass${colorno} derivedbox" >${boxes[i][j]}</div>`;
                    }
                    else
                    {
                        boxes[i][j]=i*n2+(j+1);
                        // console.log(boxes[i][j]);
                        str+=`<div style=" position:absolute; top:calc(${i}*${boxareasize}); left:calc(${j}*${boxareasize}); height:${boxsize}; width:${boxsize}; transition: all 0.3s ease 0s; background: url('https://raw.githubusercontent.com/deep-sekhar/MxN_Puzzle/main/img/${i}${j}.jpg') no-repeat center center/cover; font-size:0" class="glass${colorno} derivedbox" >${boxes[i][j]}</div>`;
                    }
                }
                else
                {
                    if (bk==0) {
                        str+=`<div class="glass${colorno} derivedbox" style="display:flex; align-items:center; justify-content:center; position:absolute; top:calc(${i}*${boxareasize}); left:calc(${j}*${boxareasize}); height:${boxsize}; width:${boxsize}; transition: all 0.3s ease 0s; background:white"> </div>`;
                    }
                    else
                    {
                        str+=`<div class="glass${colorno} derivedbox" style="display:flex; align-items:center; justify-content:center; position:absolute; top:calc(${i}*${boxareasize}); left:calc(${j}*${boxareasize}); height:${boxsize}; width:${boxsize}; transition: all 0.3s ease 0s; background:white; font-size:0"> </div>`;
                    }
                }
            }
        }
    }

    boxarea.innerHTML=str;

    // boxarea.style.visibility=`hidden`;
    // document.querySelector("#loader").style.display=`flex`;

    // shuffle the boxes  
    get_coordinates();
    shuffle();

    // start clock 
    clearInterval(clock);
    startclock(); 

    // get highest score for that matrix 
    matrixtype = n1*n2;
    highestsc = localStorage.getItem(`highestList${matrixtype}`);

    if (highestsc==null) {
        highestsc=-1;        
        highest.innerHTML=`NIL`;
    }
    else{
        let hsec = highestsc%60;
        let hmin = parseInt(highestsc/60);
        highest.innerHTML=`${hmin}m ${hsec}s`;
    }

    // click events 
    Array.from(derivedbox).forEach(element => {
        get_coordinates();
        // console.log("running click");
        element.addEventListener('click',function (){
            // console.log("hi");
            get_coordinates();
            cury = parseInt(element.offsetTop/boxdist);
            curx = parseInt(element.offsetLeft/boxdist);
            console.log("x is"+curx);
            console.log("y is"+cury);
            console.log("req x is"+posx);
            console.log("req y is"+posy);
            wonORnot();
            });
    });

    countmoves=0;
    moves.innerText=`${countmoves}`;
    
}


// see if won or not 
function wonORnot() {
    if ((curx==posx||cury==posy)&&((curx!=blockedx)||(cury!=blockedy))) 
    {
        // console.log("time to shift");
        swap(posx,posy,curx,cury);
        // countmoves++;
        moves.innerText=`${countmoves}`;
    }
    get_coordinates();
    let w = won();
    if (w==1) 
    {
        alert('CONGO! NAILED IT. Reset to play again');
        clearInterval(clock);
        let gottime =  counttimer;
        if (highestsc==-1) 
        {
            highestsc = gottime;
        }
        else if(gottime<highestsc)
        {
            highestsc = gottime;
        }
        localStorage.setItem(`highestList${matrixtype}`,highestsc);
        highest.innerHTML=`${highestsc}`;
        let hsec = highestsc%60;
        let hmin = parseInt(highestsc/60);
        highest.innerHTML=`${hmin}m ${hsec}s`;
    }
}

// get coordinats of boxes 
function get_coordinates()
{
    derivedbox = document.getElementsByClassName("derivedbox");
    // derivedarray = Array.from(derivedbox);
    for (let i = 0; i < n1; i++) {
        for(let j = 0; j< n2; j++)
        {
                boxes[i][j]=derivedbox[i*n2+(j)].innerText;
                // console.log("box no is" +boxes[i][j]); 
                // console.log("box numer is"+i*n2+(j+1));
                if (boxes[i][j].length==0) 
                {
                    // console.log("got it");
                    posx=j;
                    posy=i;   
                }
        }
    }
}

// swap boxes 
function swap(x1,y1,x2,y2) 
{
    if (y1==y2) 
    {
        if (x1<x2) {
            // let temp = x1;
            // x1=x2;
            // x2=temp;
            // console.log("x1--"+x1+"x2---"+x2);
            for(let i=x1;i<x2;i++)
            {
                // derivedbox[y1*n2+i].style.transform=`translate`;
                // derivedbox[y1*n2+i+1].style.transform=`scale(0)`;
                derivedbox[y1*n2+i].style.transform=`translateX(${boxareasize})`;
                derivedbox[y1*n2+i+1].style.transform=`translateX(-${boxareasize})`;
                let temp1 =  (derivedbox[y1*n2+i].innerText);
                let temp2 = (derivedbox[y1*n2+i+1].innerText);
                // console.log("---"+temp1+"--"+temp2);
                derivedbox[y1*n2+i].innerText=`${temp2}`;
                derivedbox[y1*n2+i+1].innerText=`${temp1}`;
                derivedbox[y1*n2+i].style.transform=`translateX(0)`;
                derivedbox[y1*n2+i+1].style.transform=`translateX(0)`;
                if (bk==0) {
                    derivedbox[y1*n2+i].style.background="";
                    derivedbox[y1*n2+i+1].style.background="white";
                }
                else
                {
                    let prop = window.getComputedStyle(derivedbox[y1*n2+i+1]).getPropertyValue('background');
                    derivedbox[y1*n2+i].style.background=prop;
                    derivedbox[y1*n2+i+1].style.background="white";
                }
                // derivedbox[y1*n2+i].style.transform=`scale(1)`;
                // derivedbox[y1*n2+i+1].style.transform=`scale(1)`;
            } 
            countmoves=countmoves+(x2-x1);   
        }
        else
        {
            for(let i=x1;i>x2;i--)
            {
                derivedbox[y1*n2+i].style.transform=`translateX(-${boxareasize})`;
                derivedbox[y1*n2+i-1].style.transform=`translateX(${boxareasize})`;
                let temp1 =  (derivedbox[y1*n2+i].innerText);
                let temp2 = (derivedbox[y1*n2+i-1].innerText);
                // console.log("---"+temp1+"--"+temp2);
                derivedbox[y1*n2+i].innerText=`${temp2}`;
                derivedbox[y1*n2+i-1].innerText=`${temp1}`;
                derivedbox[y1*n2+i].style.transform=`translateX(0)`;
                derivedbox[y1*n2+i-1].style.transform=`translateX(0)`;
                // derivedbox[y1*n2+i].style.transform=`scale(1)`;
                // derivedbox[y1*n2+i-1].style.transform=`scale(1)`;
                if (bk==0) {
                    derivedbox[y1*n2+i].style.background="";
                    derivedbox[y1*n2+i-1].style.background="white";
                }
                else
                {
                    let prop = window.getComputedStyle(derivedbox[y1*n2+i-1]).getPropertyValue('background');
                    derivedbox[y1*n2+i].style.background=prop;
                    derivedbox[y1*n2+i-1].style.background="white";
                }
            }    
            countmoves=countmoves+(x1-x2);
        }
    }
    else if (x1==x2) 
    {
        if (y1<y2) {
            // let temp = x1;
            // x1=x2;
            // x2=temp;
            // console.log("x1--"+x1+"x2---"+x2);
            for(let i=y1;i<y2;i++)
            {
                derivedbox[i*n2+x1].style.transform=`translateY(${boxareasize})`;
                derivedbox[(i+1)*n2+x1].style.transform=`translateY(-${boxareasize})`;
                let temp1 =  (derivedbox[i*n2+x1].innerText);
                let temp2 = (derivedbox[(i+1)*n2+x1].innerText);
                // console.log("---"+temp1+"--"+temp2);
                derivedbox[i*n2+x1].innerText=`${temp2}`;
                derivedbox[(i+1)*n2+x1].innerText=`${temp1}`;
                derivedbox[i*n2+x1].style.transform=`translateY(0)`;
                derivedbox[(i+1)*n2+x1].style.transform=`translateY(0)`;
                if (bk==0) {
                    derivedbox[i*n2+x1].style.background="";
                    derivedbox[(i+1)*n2+x1].style.background="white";
                }
                else
                {
                    let prop = window.getComputedStyle(derivedbox[(i+1)*n2+x1]).getPropertyValue('background');
                    derivedbox[i*n2+x1].style.background=prop;
                    derivedbox[(i+1)*n2+x1].style.background="white";
                }
            }
            countmoves=countmoves+(y2-y1);    
        }
        else
        {
            for(let i=y1;i>y2;i--)
            {
                derivedbox[i*n2+x1].style.transform=`translateY(-${boxareasize})`;
                derivedbox[(i-1)*n2+x1].style.transform=`translateY(${boxareasize})`;
                let temp1 =  (derivedbox[i*n2+x1].innerText);
                let temp2 = (derivedbox[(i-1)*n2+x1].innerText);
                // console.log("---"+temp1+"--"+temp2);
                derivedbox[i*n2+x1].innerText=`${temp2}`;
                derivedbox[(i-1)*n2+x1].innerText=`${temp1}`;
                derivedbox[i*n2+x1].style.transform=`translateY(0)`;
                derivedbox[(i-1)*n2+x1].style.transform=`translateY(0)`;
                if (bk==0) {
                    derivedbox[i*n2+x1].style.background="";
                    derivedbox[(i-1)*n2+x1].style.background="white";
                }
                else
                {
                    let prop = window.getComputedStyle(derivedbox[(i-1)*n2+x1]).getPropertyValue('background');
                    derivedbox[i*n2+x1].style.background=prop;
                    derivedbox[(i-1)*n2+x1].style.background="white";
                }
            }    
            countmoves=countmoves+(y1-y2);
        }
    }
    
}

// shuffle function 
function shuffle() 
{
    let r1,r2 ;
    for(let i = 0 ;i<1000;i++)
    {
        r1= Math.random()*(n1)+0;
        r2= Math.random()*(n2)+0;
        let num1 = parseInt(r1);
        let num2 = parseInt(r2);
        // console.log("--"+num1+"--"+num2);
        swap(posx,posy,num2,num1);
        get_coordinates();
    } 
    let w = won();
    if (w==1) 
    {
        shuffle();
    }
    
}

// see if won or not 
function won() 
{
    // console.log("runnig won");
    let flag = 1;
    for (let i = 0; i < n1; i++) 
    {
        for(let j = 0; j< n2; j++)
        {
            {
                if (i!=n1-1||j!=n2-1) 
                {
                    if (boxes[i][j]!=i*n2+(j+1)) 
                    {
                        flag=0;
                        return 0;
                    }
                }
            }
        }
    }
    if (flag==1) 
    {
        return 1;  
    }
}

// reset button 
reset.addEventListener("click",()=>{
    // console.log("runnung reset");
    setup();
    // console.log("req x is"+posx);
    // console.log("req y is"+posy);
    countmoves = 0;
    moves.innerText=`${countmoves}`;
}
);

// toggle buttons 
tbuttonarea.addEventListener("click",darkmodeact
);
tbutton.addEventListener("click",darkmodeact
);
tbuttonarea2.addEventListener("click",darkmodeact2
);
tbuttonarea3.addEventListener("click",imgmodeact
);

// dark mode 
function darkmodeact()
{
    
    let theCSSprop = window.getComputedStyle(tbuttonarea, null).getPropertyValue("background-color");
    // console.log("buttton clicked--"+theCSSprop);

    if (theCSSprop==`rgb(255, 255, 255)`) {
        // console.log("hi");
        tbuttonarea.style.backgroundColor=`rgb(138, 247, 0)`;
        tbutton.style.transform=`translateX(26px)`;
        bgm.style.background=`rgb(50, 50, 51)`;
        Array.from(glass2).forEach(element => {
            element.style.boxShadow=`10px 10px 15px 1px rgb(99, 97, 97),-10px -10px 15px 1px rgb(99, 97, 97)`;
        });
        options1.style.backgroundColor=`rgb(50, 50, 51)`;
        options2.style.backgroundColor=`rgb(50, 50, 51)`;
        monitor4.style.backgroundColor=`rgb(44, 43, 43)`;
        monitor4.style.color=`white`;
        howto.style.backgroundColor=`rgb(44, 43, 43)`;
        howto.style.color=`white`;
        colorno2=1;
        document.querySelector("#loader").style.backgroundColor=`rgb(44, 43, 43)`;
    }
    else
    {
        tbuttonarea.style.backgroundColor=`rgb(255, 255, 255)`;
        tbutton.style.transform=`translateX(0px)`;
        bgm.style.background=`rgb(0, 148, 228)`;
        Array.from(glass2).forEach(element => {
            element.style.boxShadow=`15px 15px 20px 1px rgb(54, 106, 251,0.8),-15px -15px 20px 1px rgb(54, 106, 251,0.8)`;
        });
        options1.style.backgroundColor=`rgb(81, 180, 233)`;
        options2.style.backgroundColor=`rgb(81, 180, 233)`;
        monitor4.style.backgroundColor=`white`;
        monitor4.style.color=`rgb(2, 140, 214)`;
        howto.style.backgroundColor=`white`;
        howto.style.color=`rgb(2, 140, 214)`;
        colorno2=2;
        document.querySelector("#loader").style.backgroundColor=`rgb(54, 106, 251,0.8)`;
    }
}

let cellblock;
// challenge mode function 
function darkmodeact2()
{
    
    let theCSSprop = window.getComputedStyle(tbuttonarea2, null).getPropertyValue("background-color");
    // console.log("buttton clicked--"+theCSSprop);

    if (theCSSprop==`rgb(255, 255, 255)`) {
        // console.log("hi");
        tbuttonarea2.style.backgroundColor=`rgb(138, 247, 0)`;
        tbutton2.style.transform=`translateX(26px)`;
        alert(`CHALLENGE MODE:
        
In this mode random boxes are blocked for 6secs
Like box 10 may be blocked for first 6secs
Then box 12 may be blocked for next 6 secs.`);
    CELLBLOCKfunc();
    cellblock = setInterval(() => {
    CELLBLOCKfunc();
    }, 6000);
    // blockedy=1;
    // blockedx=1;
    }
    else
    {
        tbuttonarea2.style.backgroundColor=`rgb(255, 255, 255)`;
        tbutton2.style.transform=`translateX(0px)`;
        clearInterval(cellblock);
        blockedx = -1;
        blockedy = -1;
    }
}

// image mode func 
function imgmodeact() {
    let theCSSprop = window.getComputedStyle(tbuttonarea3, null).getPropertyValue("background-color");
    // console.log("buttton clicked--"+theCSSprop);

    if (theCSSprop==`rgb(255, 255, 255)`) {
        // console.log("hi");
        if (n1=3&&n2==3) {
            alert("Image mode activated. It may take 3-4 secs to load image depending on your connection speed.");
            tbuttonarea3.style.backgroundColor=`rgb(138, 247, 0)`;
            tbutton3.style.transform=`translateX(26px)`;
            bk=1;
            setup();
        }
        else
        {
            alert("image version available only for 3x3 Matrix.")
        }
    }
    else
    {
        if (bk==1) {
            tbuttonarea3.style.backgroundColor=`rgb(255, 255, 255)`;
            tbutton3.style.transform=`translateX(0px)`;
            bk=0;
            setup();
        }
    }
}

// blocking a cell function 
function CELLBLOCKfunc() {
    let r1= Math.random()*(n1)+0;
    let r2= Math.random()*(n2)+0;
    let num1 = parseInt(r1);
    let num2 = parseInt(r2);
    while (num1==posx&&num2==posy) {
        r1= Math.random()*(n1)+0;
        r2= Math.random()*(n2)+0;
        num1 = parseInt(r1);
        num2 = parseInt(r2);
    }
    // console.log("--==="+num1+"--==="+num2);
    blockedx=num1;
    blockedy=num2;
}

// security purpose 
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//   });
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }


