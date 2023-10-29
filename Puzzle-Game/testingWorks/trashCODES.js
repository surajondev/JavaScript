// =================================================================
// TRASH CODES FOR TESTING PURPOSES
// autoclose = ()=>{
    // const details = document.querySelectorAll(details);
    // Array.from("details").forEach(element => {
    //     element.removeAttribute("open");
    // });
    // bar.style.backgroundColor=red;
    // document.getElementById("op-full").removeAttribute("open");
    // document.querySelector("#op").removeAttribute("open")
// }

// loading animation effects 
// let boot = function() {
//     bgm.style.visibility=`hidden`;
//     document.querySelector("#loader").style.display=`flex`;
//     {
//         {
//             setTimeout(() => {
//                bgm.style.visibility=``;
//                document.querySelector("#loader").style.display=`none`;
//         }, 1200);
//         }
//     }
// };

// Array.from(derivedbox).forEach(element => {
//     get_coordinates();
//     console.log("running click");
//     element.addEventListener('click',function (){
//         // console.log("hi");
//         get_coordinates();
//         cury = parseInt(element.offsetTop/70);
//         curx = parseInt(element.offsetLeft/70);
//         console.log("x is"+curx);
//         console.log("y is"+cury);
//         console.log("req x is"+posx);
//         console.log("req y is"+posy);
//         if (curx==posx||cury==posy) 
//         {
//             // console.log("time to shift");
//             swap(posx,posy,curx,cury);
//             countmoves++;
//             moves.innerText=`${countmoves}`;
//         }
//         get_coordinates();
//         let w = won();
//         if (w==1) 
//         {
//             alert('CONGO! NAILED IT. Reset to play again');
//             clearInterval(clock); 
//         }
//         });
// });


// console.log(boxes[0][2]); 
// function onright(row,col) 
// {
//     console.log("yes");
//     for(let j = col+1; j <= n2-1;j++)
//     {
//         if (boxes[row][j]==-1) 
//         {
//             return -1;    
//         }
//     }
//     return 0;
// }


// class box{
//     constructor(i,j){
//         this.x=i;
//         this.j=j;
//     }
// }

// for (let i = 0; i <= n+1; i++) {
//     for(let j = 0; j<= n+1; j++)
//     {
//         if (i==0||i==n-1||j==0||j==n-1) {
//             // box(i,j);
//         }
//         else
//         {
//             console.log(i);
//             // boxes[i][j]=n*(i-1)+j;
//             // console.log(boxes[i][j]);
//             str+=`<div class="glass">${boxes[i][j]}</div>`;
//         }
//     }
// }