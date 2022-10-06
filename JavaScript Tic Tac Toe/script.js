// btns class, flex posistion, improve switch function

var drawboard = document.getElementById('tictactoe'),
    winnerset = document.getElementById('winnerset').children,
    gameBoard = document.getElementById('board'),
    play = document.getElementById('play'),
    winner = document.getElementById('winner'),
    res = document.getElementById('reset'),
    tiles = document.getElementsByClassName('tile'),
    signs = document.getElementsByClassName('sign'),
    opponent = document.getElementById("opponent"),
    settings = document.getElementById("settings"),
    humvscomp = document.getElementById("humvscomp"),
    xvso = document.getElementById("xvso"),
    options = document.getElementsByClassName("options"),
    btns = document.getElementsByClassName('btn'),
    sets = document.getElementsByClassName('sets'),
    welcome = document.getElementsByClassName('welcome'),
    chooses = document.getElementsByClassName('chooses'),
    destiny = document.getElementsByClassName('destiny'),
    options = document.getElementsByClassName('options'),
    human,
    computer,
    humVal,
    comVal,
    palyer1,
    player2,
    player1val,
    player2val,
    game,
    board = [0,0,0,0,0,0,0,0,0],
    round = 0,
    winningBoard = [
       [0, 1, 2],
       [3,4,5],
       [0,3,6],
       [6,7,8],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]      
];


//drawingWithDelay(winnerset[1], 0.5, 0.5);


HTMLElement.prototype.addClass = function(el) { 
 this.classList.add(el);
}
HTMLElement.prototype.removeClass = function(el) {
  this.classList.remove(el);
}

// drawing svg elemts  
// if var element contains more then one html element, do delay between each animation to                                                   // achieve hand drawing effect  
// if element has childs,
// check for the elemts nodes
// Loop through an array of elements, if element's childs
//nodeType = 1 ad some style: animation to it with delay beetwen each node
function drawingWithDelay(element, newTime, newDelay) {     
var time = newTime;                                           
if (element.hasChildNodes())  {                             
   var delay = 0,                                           
   child = element.childNodes;                                     
        for(var d=0; d<child.length; d++) {                           
          if(child[d].nodeType == 1) { 
           var length = Math.ceil(child[d].getTotalLength());
           console.log('lenght '+d+' '+length);
          child[d].style.strokeDasharray = length;
          child[d].style.strokeDashoffset = length;
          child[d].style.animation = 'dash '+time+'s ease-out  '+delay+ 's   forwards';
          delay +=  newDelay;        
          }
       } 
    } else {
      var length = Math.ceil(element.getTotalLength());
       console.log('lenght '+length);
       element.style.strokeDasharray = length;
       element.style.strokeDashoffset = length;
        element.style.animation = 'dash 0.5s ease-out  forwards';
      }
 }


// when human vs human set position of the player on the board
// sign number = nbr of the cell in the ticktack toe board
// if player1 true - player 1 turn, do the staff so the player's sign appears on the board
// find html id element using (player?val plus signNumber) sigNumber - is index of click event from claim function
// draw sign than change turn by swich the boolen of player var

   function setPlayer(signNumber) {                         
     if (player1) {     
        board[signNumber] = player1val;
        var sign =  document.getElementById(player1val+signNumber);  
        drawingWithDelay(sign, 0.3, 0.3)                          
        updateScore(board, player1);
        player1 = false;
        player2 = true;
     } else {
        board[signNumber] = player2val;
        var sign =  document.getElementById(player2val+signNumber);
        drawingWithDelay(sign, 0.3, 0.3) 
        updateScore(board, player2);
        player1 = true;
        player2 = false;    
     }
   }
//human vs com set the players position ob the board, 
//works when game is true, 
//if spot on teh bord is empty board[i] == 0,
// at then end of human turn  lunch ai() - computer move

function set(index, player) {  
    if(game) {
       if(board[index] == 0) {
           if (computer) {
               if(player == human) {
                var sign =  document.getElementById(humVal+index);
                drawingWithDelay(sign, 0.3, 0.3);
                board[index] = humVal;
                console.log(board);
                updateScore(board, player);
                ai();  
             }  else {
                board[index] = comVal;
                var sign =  document.getElementById(comVal+index);
                setTimeout(function() { 
                  drawingWithDelay(sign, 0.3, 0.3); 
                  }, 500);
                updateScore(board, player);   
                }
            } 
        }
      }
  console.log(board);  
}

// update score on the board, 
// draw winners line and message for winner when checkWin() return true
function updateScore(board, player) { 
 if (computer) {
   if (player == computer) {
      if (checkWin(board, player)) {
        game = false;  
        setTimeout(function() {
        drawTheWinnersLine(board);  
        winner.innerHTML ="<h1>You loose !</h1>";
        }, 1400);
      return;
      } 
     }
   else if (player = human){
   if (player == human) {
      if (checkWin(board, player)) {
         game = false;
         drawTheWinnersLine(board);  
         setTimeout(function() {
         winner.innerHTML ="<h1>You won !</h1>";
        }, 1000);
      return;
        } 
      }
   }
 }
 else if (human){
    if (player == player1) {
      if (checkWin(board, player)) {
      game = false;
      drawTheWinnersLine(board);  
      setTimeout(function() {
      winner.innerHTML ="<h1>player1 won !</h1>";
        }, 1000);
      return;
      } 
    }  else {
      if (checkWin(board, player)) {
         game = false;
         drawTheWinnersLine(board);  
         setTimeout(function() {
         winner.innerHTML ="<h1>player2 won !</h1>";
        }, 1000);
      return;
      } 

    }
  }
  if (checkBoard(board)) {
     //  console.log(cb); 
      setTimeout(function() {
       winner.innerHTML= "<h1>Tie !</h1>";
       //reset();
      }, 1000);
      return;
   }
  }

// draw the winners line throught 3 equal signs laying next to each other
function drawTheWinnersLine(board) {
  var inedx;
  for (var x = 0; x < 8; x++ ) {
    // arr will contain signs from board according to each winningboard section
    var arr=[];
    var equals;
    for (var y=0; y<3; y++) {
   arr.push(board[winningBoard[x][y]])    
        }
    //when there gonna be 3 same signs in section, which are not a number, then we can draw a winner's line - winner sequence section from winning board and winners line in svg has same index
    var equals = arr.every(function(value, index, array){
    return (value === array[0] && isNaN(value) ) ? true : false});
    console.log(equals);
    if (equals) {
      console.log('x '+x);
      drawingWithDelay(winnerset[x], 1, 1)
    }
  }

    }

// check if there's a winner
function checkWin(board,player) {
  var value 
  if (computer) {
  value = player == human ? humVal : comVal;
  }
  else if (human) {
  value = player == player1 ? player1val : player2val; 
  }
  // loop through winningboard to find win sequence
  for (var x = 0; x < 8; x++ ) {
    var win = true;
    for(var y=0; y<3; y++) {
       if(board[winningBoard[x][y]] !=value)  {
         win = false;
         break;
       }
    }
    if(win) {
      return true;
    }
  }
  return false;
}


// check if board is full,
function checkBoard (board) {
for (var i = 0; i<board.length; i++) {
    if (board[i] == 0) {
      return false;
    }   
  }
 return true;
 } 

// reset button
// click button on tic tac toe board
for (var i=0; i < tiles.length; i++) {
tiles[i].addEventListener('click', claim);
}
function claim() {
  //round +=1;
  var i = Array.prototype.indexOf.call(tiles, this);   // take index of DOMs tiles class element
  console.log(i);
  if(game) { // board is active onlny when game is on
     if(board[i] == 0) {            
       if (human) {   // set human vs human plaers moves     
         setPlayer(i);
       } 
       else if (computer) {
              set(i, human); // set human vs computer plaers moves 
              }
            }
          }
        }

  // seetings
 // switch classes for seetings slides 
function switchClass (elementsToHide, elementsToShow) {
 for (var i =0; i< elementsToHide.length; i++){ 
   elementsToHide[i].addClass('disable');
    } 
  for (var j =0; j< elementsToShow.length; j++){ 
    if (j===0) {
     elementsToShow[j].addClass('fadeBounceIn'); 
    }
     if ( j > 0) {
       elementsToShow[j].addClass('fadeIn');
        } 
       elementsToShow[j].removeClass('disable');  
      }
    }
 //for (var i = 0; i< elementsToShow.length; i++) {

switchClass (sets, welcome);

 for (var i =0; i< btns.length ; i++){ 
   btns[i].addEventListener('click', function () {
    var elemnt = this.id;
    console.log(elemnt);
    choose(elemnt);
  });
 }

function choose(id) {
 // first we choose our opponent, if human is true we play against other human player if computer is true we play with ai
   if (id == 'play') {
   switchClass (sets, chooses);  
  }

  else if (id == 'reset') {
   reset();  
  }

else if (id == 'human') {
   human = true;
   computer = false;
   switchClass (sets, destiny); 
 }
 else if (id == 'computer') {
   human = false;
   computer = true; 
   switchClass (sets, destiny); 
 }
  // when we know  our opponent we can chooseour sign. When computer condition is true we choose sign for human player 
  else if (computer) {
    if (id == 'o' || id == 'x') {
      if (id == 'x') {
        humVal = 'x'
        comVal = 'o'
      }
      else {
        humVal = 'o'
        comVal = 'x'
      }   
      game = true;
      startGame();
    }   
  }
 // If human condition is true we choose sign for player 1 with our first choice
  else if (human){
    if (id == 'o' || id == 'x') {
      if (id == 'x') {
        player1val = 'x';
        player2val = 'o';    
    } else   {
      player2val = 'x';
      player1val = 'o'; 
    }
  }
    game = true;
    startGame();
}
  console.log ('human :'+human+ " " + "computer :" + computer);
  console.log ('player1val: ' + player1val);
  console.log ('player2val: ' + player2val);
  console.log ('humVal: ' + humVal);
  console.log ('comVal: ' + comVal)
  console.log ('game: ' + game)
}


function startGame() {
  settings.addClass('disable');
  gameBoard.removeClass('disable');
  drawingWithDelay(drawboard, 0.5, 0.5);
  player1 = true;
}

// reset the game
function reset() {
  window.location = window.location;
  round = 0;
  for(var x= 0; x<9 ;x++) { 
    board[x] = 0;
  }
  game = false;
}


function ai() {
  if (game) {
 console.log('computer move');
 var obj = minimax(board, 0 , computer);
 console.log('outside ' +board + 'obj '+obj);

  }
}

function minimax(actualBoard, depth, player) {
 // check if there is a winner, if yes return points
       if(checkWin(actualBoard, computer)) {
      // console.log('computer win :' +(10 - depth));
      return 10 - depth ;      
     }  
    else if(checkWin(actualBoard, human)) {
      //console.log('human win :' + (-10 + depth));
      return -10 + depth ;
     }  
   else if (checkBoard(actualBoard)) {
    // console.log('tie :' + 0);
    return 0;
  }

  // set the first of maximum values for each players
  var max;
  if (player) {
    max = -Infinity
  }
  else{
  max = Infinity
  }
  // index of the move
var index = 0;

   //console.log('max :'+max) ;


  for (var i =0; i<actualBoard.length; i++) {

    // copy of the board for comp vs human moves simulation purpose
      var copyBoard = actualBoard.slice();

         if(copyBoard[i] == 0) {
           // console.log('start for lop, i ='+i+' ,depth = '+depth)

           // set the actual player value
           var value = player == computer ? comVal : humVal ;

           // make a move
           copyBoard[i] = value;
           // console.log('inside for loop max: '+ max+', '   +' player '+ player+' i '+ i+', depth :'+depth );
           //var index = i;

           // minimax score = minimax calls itself to check best move of opposite player
           var minmaxScore = minimax(copyBoard, depth + 1, !player)
           //console.log('after minimax: '+ max+', minmaxScore :'+minmaxScore  +' player '+ player+' index '+ index+', depth :'+depth );

           // after the minimax digs to the deeper level of the game with winning sequence, it brings back the winnig points to minimaxScore - 
           //console.log('if player comp or human ? :'+player)

           // after each move simulation , on each depth level, function choose the best possible move.
           // minimaxScore is compared to max value in order to minimize the maximum possible loss.
      if(player) {
      if(minmaxScore > max) {
       // console.log('is minimaxScore'+minmaxScore+ " > "+"max"+max)
        max = minmaxScore;
        index = i;
        //console.log(max);
        }
      }
      else {
        if(minmaxScore < max) {
          //console.log('is minimaxScore'+minmaxScore+ " < "+"max"+max)
        max = minmaxScore;
        index = i;
        // console.log(max);
        }
      }

    }
  }

// when finally function reach back its depth 0 level, it can make a move according to index - movie where best max value was achieved. 
if (depth == 0) {
// console.log('teraz depth 0') 

   set(index, computer);
  //console.log(player +" "+ max);
}
 //console.log(player +" "+ max)
   //console.log('the end, max: '+ max+', minmaxScore :'+minmaxScore  +' player '+ player+' index '+ index+', depth :'+depth );

 // return max value to the previus level depth
 return max;
}

play.addEventListener 