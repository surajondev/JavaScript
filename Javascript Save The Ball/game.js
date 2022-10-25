const canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("canvas")
);
const ctx = canvas.getContext("2d");
let gamespeed = 15;
let closestTile;
let rightPressed = false;
let leftPressed = false;
let tiles = [{ x: 0, y: canvas.height }];
let spiketiles = [{ x: 0, y: 0 }];
let tilevanish = [{ x: 0, y: 0 }];
let tileH = 10;
let tileL = 100;
let ball = { x: 50, y: 15, r: 10 };
let score = 0;
let life = 3;
let heart = [
  { x: 530, y: 23 },
  { x: 560, y: 23 },
  { x: 590, y: 23 },
];
let healthpickuparr = [{ x: 0, y: 0 }];
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

main();

//audio
function gameoveraudio() {
  var audio = new Audio();
  audio.src = "mixkit-long-game-over-notification-276.wav";
  audio.play();
}

//audio
function tiletouch() {
  var audio = new Audio();
  audio.src = "mixkit-arcade-game-jump-coin-216.wav";
  audio.play();
}

//add new tile to tiles array
function addnewtile() {
  const lasttile = tiles[tiles.length - 1];
  if (lasttile.y < canvas.height - 80) {
    tiles.push({ x: randomx(), y: lasttile.y + 100 });
  }
}

//draw tile and spikes at top
function drawtile() {
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 0, canvas.width, 8);

  tiles.forEach((tile) => {
    ctx.fillStyle = "red";
    ctx.fillRect(tile.x, tile.y, tileL, tileH);
    //1
  });
}

function drawball() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

//move the ball left and right
function moveBall1() {
  if (rightPressed && ball.x + ball.r <= canvas.width) {
    ball.x += 4;
  }
  if (leftPressed && ball.x - ball.r >= 0) {
    ball.x -= 4;
  }
}


//master function 
function main() {
  interval = setInterval(function main2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    tiles.forEach((tile) => {
      tile.y -= 1;
    });
    heart.forEach((element) => {
      drawHeart(element.x, element.y, 25, 25, "purple");
    });

    drawball();
    addnewtile();
    drawtile();
    moveBall();
    moveBall1();
    // addnewpickup()/
    // healthpickup()
    closestTile = tiles.find(
      (tile) =>
        Math.sqrt(
          Math.pow(tile.y - ball.y, 2) + Math.pow(tile.x + 50 - ball.x, 2)
        ) <
        50 + ball.r
    );

    if (closestTile) {
      moveball2(closestTile);
    } else {
      ball.y += 4;
    }
    checkgameover();
    console.log(score);
    console.log(gamespeed);
    if (score > 50) {
      clearInterval(interval);
      gamespeed = 13;
      interval = setInterval(main2, gamespeed);
    }
    if (score > 100) {
      clearInterval(interval);
      gamespeed = 10;
      interval = setInterval(main2, gamespeed);
    }
  }, gamespeed);
}

function randomx() {
  return Math.floor(Math.random() * 425 + 1);
}


//adding event listener to right and left key
function moveBall() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      rightPressed = true;
    }
    if (e.key === "ArrowLeft") {
      leftPressed = true;
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight") {
      rightPressed = false;
    }
    if (e.key === "ArrowLeft") {
      leftPressed = false;
    }
  });
}
/////////////////////////

function spikehit() {
  spiketiles.forEach((tile) => {
    if (tile.x === closestTile.x && tile.y === closestTile.y) {
      console.log("spike is true");
      t = true;
    } else {
      t = false;
    }
  });
  if (t) {
    return true;
  } else {
    return false;
  }
}
function vanish() {
  tilevanish.forEach((tile) => {
    if (tile.x === closestTile.x && tile.y === closestTile.y) {
      console.log("vanish is true");
      t = true;
    } else {
      t = false;
    }
  });
  if (t) {
    return true;
  } else {
    return false;
  }
}

//////////////////////////

function moveball2(closestTile) {
  if (
    ball.x <= closestTile.x + tileL &&
    ball.x >= closestTile.x &&
    closestTile.y - ball.y < 20
  ) {
    // console.log(spikehit())

    ball.y = closestTile.y - ball.r;
    // if(spikehit()){score--
    //   console.log(score)
    // }
    // if(vanish()){
    //   ball.y += 4;
    // score++;
    // }
  } else {
    ball.y += 4;
    score++;
  }
}

function checkgameover() {
  

  if (life == 0) {
    gameoveraudio();
    clearInterval(interval);
    savehighscore(score);
    heart.pop();
    document.querySelector(".highscoretable").classList.remove("hide");

    alert("gameover score: " + score);
  }
  if (ball.y - ball.r < 8 || ball.y > canvas.height) {
    life--;
    heart.pop();
    clearInterval(interval);
    restart();
  }
}

function restart() {
  tiles = [{ x: 0, y: canvas.height }];
  tileH = 10;
  tileL = 100;
  ball = { x: 50, y: 15, r: 10 };
  main();
}

function savehighscore(score) {
  const recentscore = {
    name: score.name,
    recentscore: score,
  };
  highscores.push(recentscore);
  highscores.sort((a, b) => b.recentscore - a.recentscore);
  highscores.splice(10);
  localStorage.setItem("highscore", JSON.stringify(highscores));

  console.log(highscores);
  let k = 0;
  console.log(highscores[k].recentscore);
  for (let j = 11; j < 16; j++) {
    if (k < highscores.length) {
      document.getElementById(j).innerHTML = highscores[k].recentscore;
      k += 1;
    } else {
      break;
    }
  }
}

function drawHeart(fromx, fromy, lw, hlen, color) {
  var x = fromx;
  var y = fromy;
  var width = lw;
  var height = hlen;

  ctx.save();
  ctx.beginPath();
  var topCurveHeight = height * 0.3;
  ctx.moveTo(x, y + topCurveHeight);
  // top left curve
  ctx.bezierCurveTo(x, y, x - width / 2, y, x - width / 2, y + topCurveHeight);

  // bottom left curve
  ctx.bezierCurveTo(
    x - width / 2,
    y + (height + topCurveHeight) / 2,
    x,
    y + (height + topCurveHeight) / 2,
    x,
    y + height
  );

  // bottom right curve
  ctx.bezierCurveTo(
    x,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + (height + topCurveHeight) / 2,
    x + width / 2,
    y + topCurveHeight
  );

  // top right curve
  ctx.bezierCurveTo(x + width / 2, y, x, y, x, y + topCurveHeight);

  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

// function healthpickup(){
//   console.log("entered healthpickup")
// healthpickuparr.forEach(health => {
//   drawHeart(health.x,health.y,15,15,"black")

// });

//   }


//1
    // console.log(randomtile())
    // if ((tiles.indexOf(tile))%10==0 && (tiles.indexOf(tile))%5==0){
    //   // console.log(tiles.indexOf(tile)+randomtile())
    //   ctx.fillStyle = "yellow";
    //   ctx.fillRect(tile.x, tile.y, tileL, tileH-5);
    //   spiketiles.push({x: tile.x,y:tile.y})

    // }
    // if ((tiles.indexOf(tile)+randomtile())%8==0 ){

    //    tilevanish.push({x: tile.x,y:tile.y})
    //    ctx.clearRect(tile.x, tile.y, tileL, tileH);

    // }

    // if (tiles.indexOf(tile)==0 && tiles.indexOf(tile)!==0){
    //   drawHeart(tile.x + tileL/2,tile.y-20,15,15,"black")
    //   console.log(tile.y-ball.r)
    //   console.log(ball.y)
    //   if(ball.x==tile.x +tileL/2 && ball.y == tile.y-ball.r){
    //     console.log(life)
    //     if(life<3){
    //       life++
    //       console.log(life)
    //     }

    //   }
    //   healthpickuparr.push({x:tile.x + tileL/2,y:tile.y-20})
    //   console.log("entered healthpickup")
    //   healthpickuparr.forEach(health => {
    //     drawHeart(health.x,health.y,15,15,"black")

    //   });
    // }
